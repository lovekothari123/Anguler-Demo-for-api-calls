import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Subscriber } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.scss"]
})
export class CandidatesComponent implements OnInit {
  users: Object;
  deleteRecord: any;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.data.getCandidates().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  clickOndelete(event) {
    console.log("Clicked on list");
    console.log("target");
    console.log(event);
    this.data.deleteCandidateID(event).subscribe(data => {
      this.deleteRecord = data;
      console.log(this.deleteRecord);
      this.data.successmsg(this.deleteRecord.message);
      this.ngOnInit();
    });
  }

  clickOnEdit(id) {
    console.log("GET EDIT BUTTON HIT ");
    console.log(id);
    this.router.navigate(["/newcandidate"], {
      queryParams: { candidateId: id }
    });
  }

  addNewCandidate() {
    this.router.navigate(["/newcandidate"]);
  }
}
