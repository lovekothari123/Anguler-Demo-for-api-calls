import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root"
})
export class DataService {
  // localhost: string = "http://127.0.0.1:3000";
  // localhost: string = "http://192.168.2.141:3000";
  localhost: String =
    // "https://qav41vcyg3.execute-api.ap-south-1.amazonaws.com/dev";
    // "https://etrdzfy79c.execute-api.ap-south-1.amazonaws.com/dev";
    "http://localhost:3000"
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  successmsg(msg) {
    this.toastr.success(msg, "Success");
  }
  errorsmsg(msg) {
    this.toastr.error(msg, "Error");
  }

  firstClick() {
    alert("Home page click work 12");
    console.log("Serviced Data Class Clicked !");
    return null;
  }

  getUsers() {
    return this.http.get(`${this.localhost}/api/category`);
  }
  getCandidates() {
    return this.http.get(`${this.localhost}/api/records`);
  }
  deleteCandidateID(id) {
    return this.http.delete(`${this.localhost}/api/records/${id}`);
  }
  deleteCategoryID(id) {
    return this.http.delete(`${this.localhost}/api/category/${id}`);
  }

  postNewCandidate(data) {
    console.log("Inside Data Server Class Before form data");
    console.log(data);
    // const formDataImg = new FormData();
    // formDataImg.append("image", data.image);
    // formDataImg.append("categoryId", data.categoryId);
    // formDataImg.append("username", data.username);
    // formDataImg.append("usermessage", data.usermessage);
    // formDataImg.append("startDate", data.startDate);
    // formDataImg.append("enddate", data.enddate);
    const customOptions = {
      categoryId: data.categoryId,
      image: data.image,
      username: data.username,
      usermessage: data.usermessage,
      startDate: data.startDate,
      enddate: data.enddate
    };
    const HttpUploadOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      })
    };
    console.log("Inside Data Server Class 2");
    console.log(customOptions);
    return this.http.post(
      `${this.localhost}/api/records`,
      customOptions,
      HttpUploadOptions
    );
  }

  postNewCategory(data) {
    const HttpUploadOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      })
    };
    return this.http.post(
      `${this.localhost}/api/category`,
      {
        name: data.name,
        template: data.template
      },
      HttpUploadOptions
    );
  }

  updateCategory(data, id) {
    return this.http.put(`${this.localhost}/api/category/${id}`, {
      name: data.name,
      template: data.template
    });
  }

  updateCandidate(data, id) {
    console.log("Inside Data Server Class Before form data");
    console.log(data);
    console.log("User Id :", id);
    const formDataImg = new FormData();
    formDataImg.append("image", data.image);
    formDataImg.append("categoryId", data.categoryId);
    formDataImg.append("username", data.username);
    formDataImg.append("usermessage", data.usermessage);
    formDataImg.append("startDate", data.startDate);
    formDataImg.append("enddate", data.enddate);
    console.log("Inside Data Server Class 1");
    console.log(formDataImg);
    return this.http.put(`${this.localhost}/api/records/${id}`, formDataImg);
  }

  getCategoryDetailsById(id) {
    return this.http.get(`${this.localhost}/api/category/${id}`);
  }
  getCandidateById(id) {
    return this.http.get(`${this.localhost}/api/records/${id}`);
  }
}
