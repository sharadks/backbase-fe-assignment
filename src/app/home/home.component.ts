import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SubjectService } from "../shared";

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(private router: Router, private subjectService: SubjectService) {}
}
