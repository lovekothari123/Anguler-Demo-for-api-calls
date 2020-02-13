import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CKEditorModule } from "ckeditor4-angular";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { CandidatesComponent } from "./candidates/candidates.component";
import { AddnewcategoryComponent } from "./addnewcategory/addnewcategory.component";
import { FormsModule } from "@angular/forms";
import { AddnewcandidateComponent } from "./addnewcandidate/addnewcandidate.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ToastrModule } from "ngx-toastr";
import { NgxSmartModalModule, NgxSmartModalService } from "ngx-smart-modal";
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CandidatesComponent,
    AddnewcategoryComponent,
    AddnewcandidateComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- Right here
    ReactiveFormsModule, // <- Add here
    CKEditorModule, // <- Add here
    FormsModule, // <- add here
    BrowserAnimationsModule, // <- Add here
    DateTimePickerModule, // <- Add here
    NgxSmartModalModule.forRoot(),
    NgbModule,    
    NgbPaginationModule,
    NgbAlertModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      closeButton: true
    }) // <- Add here
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
