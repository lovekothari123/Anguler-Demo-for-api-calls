import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CandidatesComponent } from "./candidates/candidates.component";
import { AddnewcategoryComponent } from "./addnewcategory/addnewcategory.component";
import { AddnewcandidateComponent } from "./addnewcandidate/addnewcandidate.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "candidates", component: CandidatesComponent },
  { path: "newcategory", component: AddnewcategoryComponent },
  { path: "newcandidate", component: AddnewcandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
