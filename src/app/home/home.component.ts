import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;
  deleteRecord: any;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log("List of all users category")
      console.log(this.users);
    });
  }
  firstClick() {
    this.h1Style = true;
    console.log("clicked 123");

    this.data.firstClick();
  }

  clickOnList(event) {
    console.log("Clicked on list");
    console.log("target");
    console.log(event);
    this.data.deleteCategoryID(event).subscribe(data => {
      this.deleteRecord = data;
      console.log(this.deleteRecord);

      this.data.successmsg(this.deleteRecord.message);
      this.ngOnInit();
    });
  }

  addCategory(_id) {
    console.log("Click on Edit category " + _id);
    this.router.navigate(["/newcategory"], {
      queryParams: { categoryId: _id }
    });
  }

  addNewCategory() {
    console.log("Click on Add New category ");
    this.router.navigate(["/newcategory"]);
  }
}
