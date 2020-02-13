import { Component, OnInit, NgModule, SecurityContext } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CKEditor4 } from "ckeditor4-angular/ckeditor";
import { DataService } from "../data.service";
import grapesjs from "../../../node_modules/grapesjs";
import "../../../node_modules/grapesjs-plugin-export";
import gjspresetwebpage from "grapesjs-preset-webpage";
import tUIImageEditor from "grapesjs-tui-image-editor";
import "../../../node_modules/grapesjs-plugin-filestack";
import "../../../node_modules/grapesjs-plugin-forms";
import { Content } from "@angular/compiler/src/render3/r3_ast";
import { async } from "@angular/core/testing";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { template_one } from "../../assets/htmlTemplates/template_one";
import { template_two } from "../../assets/htmlTemplates/template_two";
import { template_three } from "../../assets/htmlTemplates/template_three";

import {
  NgbModalConfig,
  NgbModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";

declare var grapesjs: any;
@Component({
  selector: "app-addnewcategory",
  templateUrl: "./addnewcategory.component.html",
  styleUrls: ["./addnewcategory.component.scss"],
  providers: [NgbModalConfig, NgbModal]
})
export class AddnewcategoryComponent implements OnInit {
  sub: Object;
  CategoryId: Object;
  messageForm: FormGroup;
  submitted = false;
  success = false;
  htmlData: String;
  getData: any;
  messageData: any;
  innerHTML: any;
  myStyle: SafeHtml;
  template_one_sheet: SafeHtml;
  template_two_sheet: SafeHtml;
  template_three_sheet: SafeHtml;
  template_convert_into_string: string;
  public disable: boolean;
  public editorData = "<p>Hello, world!</p>";
  public categoryName = "";
  public htmlCssStyle = "";
  public modalReference: any;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _sanitizer: DomSanitizer
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = "static";
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
    this.LoadGrapesJS();
  }

  closedModel(content) {
    console.log("Dismissed with crossed clicked:");
    console.log("\n\nHTML and CSS pending\n\n");
    this.myStyle = this._sanitizer.bypassSecurityTrustHtml(
      this.htmlData && this.htmlData.toString()
    );

    console.log(this.myStyle);
    console.log("GET HTML AND CSS WITH EDITOR");
    this.modalService.dismissAll(content);
  }

  html_one_click() {
    alert("Thank-you for selecting template");
    this.myStyle = this.template_one_sheet;
    this.htmlData = this._sanitizer.sanitize(
      SecurityContext.HTML,
      this.myStyle
    );
  }
  html_two_click() {
    alert("Thank-you for selecting template");
    this.myStyle = this.template_two_sheet;
    this.htmlData = this._sanitizer.sanitize(
      SecurityContext.HTML,
      this.myStyle
    );
  }
  html_three_click() {
    alert("Thank-you for selecting template");
    this.myStyle = this.template_three_sheet;
    this.htmlData = this._sanitizer.sanitize(
      SecurityContext.HTML,
      this.myStyle
    );
  }

  async ngOnInit() {
    console.log("==================================\n\n");
    console.log(template_one);
    this.template_one_sheet = this._sanitizer.bypassSecurityTrustHtml(
      template_one
    );
    this.template_two_sheet = this._sanitizer.bypassSecurityTrustHtml(
      template_two
    );
    this.template_three_sheet = this._sanitizer.bypassSecurityTrustHtml(
      template_three
    );
    console.log("\n\n==================================\n\n");
    this.sub = this.route.queryParams.subscribe(data => {
      console.log("Data in Add New Category => ", data["categoryId"]);
      this.CategoryId = data["categoryId"];
      this.data.getCategoryDetailsById(data["categoryId"]).subscribe(dataq => {
        console.log("Get Data From Category ID");
        console.log(dataq);
        this.getData = dataq;
        console.log("Get Data Form this peramter ");
        console.log(this.getData.data.name);
        // this.editorData = this.getData.data.template;
        this.htmlData = this.getData.data.template;
        this.myStyle = this._sanitizer.bypassSecurityTrustHtml(
          this.getData.data.template
        );
        this.categoryName = this.getData.data.name;
        console.log("GET HTML FROM DATABASE ::");
        console.log(this.htmlData);
      });
    });
    this.messageForm = this.formBuilder.group({
      name: ["", Validators.required],
      message: [""]
    });
  }

  LoadGrapesJS() {
    var editor = grapesjs.init({
      container: "#gjs",
      // fromElement: true,
      height: "900px",
      width: "100%",
      allowScripts: 1,
      components: ` ${this.htmlData}`,
      style: ".txt-red{color: red}",
      storageManager: { type: null }, // Avoid any default panel
      panels: {},
      pluginsOpts: {},
      assetManager: {
        storageType: "",
        storeOnChange: true,
        storeAfterUpload: true,
        assets: "",
        upload: 0,
        uploadName: "files",
        uploadFile: function(e) {
          var reader = new FileReader(),
            files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
          reader.readAsDataURL(files[0]);
          reader.onload = function() {
            var formData = {};
            formData = reader.result;
            Promise.resolve(formData).then(function(res) {
              if (res !== null && res !== "undefined") {
                var result = res;
                console.log("Filer Image From URL Uploading :", res);
                if (result) {
                  editor.AssetManager.add(result);
                } else return false;
              } else return false;
            });
          };
          reader.onerror = function(error) {
            console.log("Error: ", error);
          };
        },
        embedAsBase64: false,
        disableUpload: false,
        dropzone: false
      }
    });
    const amConfig = editor.AssetManager.getConfig();
    const am = editor.AssetManager;
    // editor.runCommand("open-assets");
    editor.runCommand("open-assets", {
      target: editor.getSelected()
    });
    am.add([
      {
        category: "c1",
        src: "http://placehold.it/350x250/78c5d6/fff/image1.jpg"
      },
      {
        category: "c1",
        src: "http://placehold.it/350x250/459ba8/fff/image2.jpg"
      },
      {
        category: "c2",
        src: "http://placehold.it/350x250/79c267/fff/image3.jpg"
      }
    ]);
    am.render();
    am.getAll().length; // <- 3
    am.getAllVisible().length; // <- 3
    var blockManager = editor.BlockManager;
    const panelManager = editor.Panels;
    this.addBlockes(blockManager, editor);
    this.addPannelItems(panelManager, editor);
  }

  addPannelItems(panelManager, editor) {
    //= = = = = = = = = = =   = = = = = = = = = =     = ==  = =   = ==
    editor.Panels.addPanel({
      id: "panel-top",
      el: ".panel__top"
    });
    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic_sve-actions",
      buttons: [
        {
          id: "export",
          active: true, // active by default
          className: "btn-open-export",
          label: "Save",
          // command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
          command: {
            run: editor => {
              console.log("found SAVE", editor);
              var html = editor.getHtml();
              var css = editor.getCss();
              var htmlWithCss = editor.runCommand("gjs-get-inlined-html");
              console.log("\n\nHTML DATA :\n\n");
              console.log(html);
              console.log("\n\nCSS :\n\n");
              console.log(css);
              this.htmlCssStyle = `<style>${css}</style> <div class="template">${html}</div>`;
              console.log("\n\nHTML and CSS pending\n\n");
              this.htmlData = this.htmlCssStyle;
              console.log(this.htmlData);
              alert("Desing save sucessfully");
            },
            stop: function(editor) {
              console.log("Not found SAVE");
              alert("Unable to save design please try again");
            }
          }
        }
      ]
    });

    //====================Save HTML SECTION -----------------

    // ================================================================
  }

  addBlockes(blockManager, editor) {
    // 'my-first-block' is the ID of the block
    blockManager.add("my-first-block", {
      label: "Text",
      category: "Text",
      content: "<div>This is a simple block</div>",
      attributes: {
        class: "gjs-fonts gjs-f-text gjs-block gjs-one-bg gjs-four-color-h"
      }
    });

    //// Added New

    /// Added New

    blockManager.add("the-row-block", {
      label: "Text area",
      content: `<textarea rows="4" cols="100">
      text area
      </textarea>`,
      attributes: {
        class: "gjs-fonts gjs-f-b1 gjs-block gjs-one-bg gjs-four-color-h"
      }
    });
    // Added new content
    blockManager.add("image", {
      label: "Image",
      category: "Basic",
      attributes: { class: "gjs-fonts gjs-f-image" },
      content: {
        style: { color: "black" },
        type: "image",
        classes: ["class1", "class2"],
        activeOnRender: 1
      }
    });

    // addeded new
    blockManager.add("some-block-id", {
      // ...
      render: ({ el }) => {
        const btn = document.createElement("button");
        btn.innerHTML = "Click me";
        btn.addEventListener("click", () => alert("Do something"));
        el.appendChild(btn);
      }
    });

    // Add other component
    blockManager.add("section-hero", {
      label: "Hero section",
      order: 1, // 1,2,3,4...
      category: "Sections",
      content:
        '<header class="header-banner"> <div class="container-width">' +
        '<div class="logo-container"><div class="logo">GrapesJS</div></div>' +
        '<nav class="navbar">' +
        '<div class="menu-item">BUILDER</div><div class="menu-item">TEMPLATE</div><div class="menu-item">WEB</div>' +
        '</nav><div class="clearfix"></div>' +
        '<div class="lead-title">Build your templates without coding</div>' +
        '<div class="lead-btn">Try it now</div></div></header>',
      attributes: { class: "gjs-fonts gjs-f-hero" }
    });

    // Add other
    // Add a block as a Component
    blockManager.add("my-grid", {
      label: "Grid",
      category: "Basic",
      content:
        '<div style=" display: inline-grid;grid-template-columns: auto auto auto;padding: 10px;">' +
        '<div style="background-color: rgba(255, 255, 255, 0.8);border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">1</div>' +
        '<div style="background-color: rgba(255, 255, 255, 0.8);border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">2</div>' +
        '<div style="background-color: rgba(255, 255, 255, 0.8);border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">3</div>' +
        "</div>",
      attributes: {
        class: "gjs-fonts gjs-f-b3 gjs-block gjs-one-bg gjs-four-color-h"
      },
      style: {
        width: "33vw"
      }
    });
    //add new table

    blockManager.add("my-template", {
      label: "Template",
      category: "Basic",
      content:
        '<div style="border: 2px solid black; outline: #4CAF50 solid 10px; margin: auto; display:flex;flex-direction:row;text-align: center;">' +
        ' <div style="border: 2px solid black;outline: #4CAF50 solid 10px;width:20%;margin: auto; padding: 50px;text-align: center;">' +
        '<img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Flowers in Chania" width="205" height="205"> </div>' +
        '<div style="margin: auto;width:80%;padding: 50px;text-align: center;">' +
        "<h2>Alternative text</h2>" +
        "<p>The alt attribute should reflect the image content, so users who cannot see the image gets an understanding of what the image contains:</p></div></div>",
      attributes: {
        class: "gjs-fonts gjs-f-b3 gjs-block gjs-one-bg gjs-four-color-h"
      },
      style: {
        width: "33vw"
      }
    });
    //add new table
  }

  onSubmit() {
    this.submitted = true;
    console.log("OnSubmit Called in New Category ");
    console.log(this.messageForm.value);
    if (this.messageForm.invalid) {
      return;
    }
    console.log("Message Validation TRUE");
    console.log(this.messageForm.valid);
    if (this.messageForm.valid) {
      this.success = true;
      if (this.CategoryId) {
        console.log("Form Data ==>");
        console.log(this.messageForm.value);
        let CategoryData = {
          name: this.messageForm.value.name,
          // template: this.messageForm.value.message
          template: this.htmlData
        };
        console.log("Add Value in arrayObject `");
        console.log(CategoryData);
        this.data
          .updateCategory(CategoryData, this.CategoryId)
          .subscribe(data => {
            console.log("Api Response After Add Category ");
            console.log(data);
            this.messageData = data;
            this.data.successmsg(this.messageData.message);
            this.router.navigate(["/"]);
          });
      } else {
        console.log("Form Data ==>");
        console.log(this.messageForm.value);
        let CategoryData = {
          name: this.messageForm.value.name,
          // template: this.messageForm.value.message
          template: this.htmlData
        };
        console.log("Add Value in arrayObject `");
        console.log(CategoryData);
        this.data.postNewCategory(CategoryData).subscribe(data => {
          console.log("Api Response After Add Category ");
          console.log(data);
          this.messageData = data;
          this.data.successmsg(this.messageData.message);
          this.router.navigate(["/"]);
        });
      }
    }
  }

  public onChange(event: CKEditor4.EventInfo) {
    this.htmlData = event.editor.getData();
  }
}
