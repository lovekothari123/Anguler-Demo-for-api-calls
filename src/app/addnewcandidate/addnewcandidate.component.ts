import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { DataService } from "../data.service";
import { of } from "rxjs";

@Component({
  selector: "app-addnewcandidate",
  templateUrl: "./addnewcandidate.component.html",
  styleUrls: ["./addnewcandidate.component.scss"]
})
export class AddnewcandidateComponent implements OnInit {
  sub: Object;
  CandidateId: Object;
  messageForm: FormGroup;
  submitted = false;
  success = false;
  public imagePath;
  getData: any;
  imgURL: any;
  formData: object;
  startDate: Object;
  endDate: Object;
  categoryItemListData: Object;
  messageData: any;

  categorylist: any;
  public minDate: Date = new Date();
  public maxDate: Date = new Date("01/01/2025 11:00 AM");
  public dateValue: Date = new Date();

  public message: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private data: DataService
  ) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      image: ["", Validators.required],
      name: ["", Validators.required],
      message: ["", Validators.required],
      startDate: ["", Validators.required],
      enddate: ["", Validators.required],
      categorylist: ["", Validators.required]
    });

    this.sub = this.route.queryParams.subscribe(data => {
      console.log("Data in Add New Category => ", data["candidateId"]);
      this.CandidateId = data["candidateId"];
      this.data.getCandidateById(data["candidateId"]).subscribe(dataq => {
        console.log("Get Data From Candidate By ID");
        console.log(dataq);
        this.getData = dataq;
        console.log("Get Data Form this peramter ");
        console.log(this.getData.data);

        // this.messageForm.get("image").setValue(this.getData.data.image);
        this.messageForm.get("name").setValue(this.getData.data.username);
        this.messageForm.get("message").setValue(this.getData.data.usermessage);
        this.messageForm.get("startDate").setValue(this.getData.data.startDate);
        this.messageForm.get("enddate").setValue(this.getData.data.enddate);
      });
    });
    this.data.getUsers().subscribe(dataresponse => {
      console.log("Get User Api Called aip/category");
      console.log(dataresponse);
      this.categoryItemListData = dataresponse;

      this.categorylist = this.categoryItemListData;
    });
  }

  // Choose city using select dropdown
  changeCity(e) {
    console.log("Change value");
    console.log(e.valid);
    console.log(e.value);
    console.log(this.messageForm.value);
  }

  StartDateTime(value) {
    console.log("Date Time Change start ");
    console.log(value.value);
    this.startDate = value.value;
  }
  EndDateTime(value) {
    console.log("Date Time Change end");
    console.log(value);
    console.log(value.value);
    this.endDate = value.value;
  }

  preview(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("FILE");
      console.log(file.name);
      console.log("Form Data After Create formData.append");
      this.formData = file;
      console.log(this.formData);
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log("OnSubmit Called in New Category ");
    console.log(this.messageForm);
    if (this.messageForm.invalid) {
      console.log("ERROR CALLED NO DATE MATCH  ");
      console.log(this.messageForm.value);
      alert("Please fill correct details");
      return;
    }
    console.log("Message Validation TRUE");
    console.log(this.messageForm.valid);
    if (this.messageForm.valid) {
      this.success = true;

      if (this.CandidateId) {
        console.log("Form Data ==>");
        console.log(this.messageForm.value);
        let CandidateData = {
          categoryId: this.messageForm.value.categorylist,
          image: this.messageForm.value.image,
          username: this.messageForm.value.name,
          usermessage: this.messageForm.value.message,
          startDate: this.startDate.valueOf(),
          enddate: this.endDate.valueOf()
        };
        console.log("Add Value in arrayObject if CandidateId Availabel`");
        console.log(CandidateData);
        this.data
          .updateCandidate(CandidateData, this.CandidateId)
          .subscribe(data => {
            console.log("Api Response After Add Category foe edit");
            console.log(data);
            this.messageData = data;
            this.data.successmsg(this.messageData.message);
            this.router.navigate(["/candidates"]);
          });
      } else {
        console.log("Form Data ==>");
        console.log(this.messageForm.value);

        let CandidateData = {
          categoryId: this.messageForm.value.categorylist,
          image: this.formData,
          username: this.messageForm.value.name,
          usermessage: this.messageForm.value.message,
          startDate: this.startDate.valueOf(),
          enddate: this.endDate.valueOf()
        };

        console.log("Add Value in arrayObject => `");
        console.log(CandidateData);
        this.data.postNewCandidate(CandidateData).subscribe(data => {
          console.log("Api Response After Add Category for new users");
          console.log(data);
          this.messageData = data;
          this.data.successmsg(this.messageData.message);
          this.router.navigate(["/candidates"]);
        });
      }
    }
  }
}
