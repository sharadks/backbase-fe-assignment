import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  From: any = "Free Checking $ ";
  FromAmount: any = 5824;
  toValue: String = "";
  FromValue: any;
  amountValue: any = null;
  submitCheck: Boolean = true;
  public transactions = [];
  constructor(
    private router: Router,
  ) {
    this.FromValue = this.From + this.FromAmount;
  }

  ngOnInit() {}

  submitForm() {
    this.FromAmount = this.FromAmount - this.amountValue;
    this.FromValue = this.From + this.FromAmount;
    this.transactions.push({
      transactionDate: new Date(),
      merchant: this.toValue,
      amount: this.amountValue,
      merchantLogo: this.transactions[0].merchantLogo
    });

    this.toValue = "";
    this.amountValue = null;
    this.submitCheck = true;
  }

  validate() {
    if (this.amountValue < 500 && this.amountValue && this.toValue) {
      this.submitCheck = false;
    } else {
      this.submitCheck = true;
    }
  }
}
