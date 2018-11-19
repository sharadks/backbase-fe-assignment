import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TransactionService } from "../shared";
import { environment } from "../../environments/environment";

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
  public transactionsBucket = [];
  public transactions = [];
  public selectedType: String = "";
  public selectedOrder: String = "asc";
  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) {
    this.FromValue = this.From + this.FromAmount;
    this.getTransactions();
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

  public searchByName(event) {
    this.transactions = this.transactionsBucket.filter(item => {
      return item.merchant.includes(event);
    });
  }

  public sortTransactions(type) {
    if (type == this.selectedType) {
      this.selectedOrder = this.selectedOrder === "asc" ? "desc" : "asc";
    } else {
      this.selectedOrder = "asc";
    }
    this.selectedType = type;

    //Actual sorting
    switch (type) {
      case "amount":
        this.sortByAmount();
        break;

      case "beneficiary":
        this.sortByBeneficiary();
        break;

      case "date":
        this.sortByDate();
        break;
    }
  }

  private sortByAmount() {
    this.transactions.sort((item1, item2) => {
      if (this.selectedOrder === "asc") {
        return item1.amount - item2.amount;
      } else {
        return item2.amount - item1.amount;
      }
    });
  }

  private sortByBeneficiary() {
    this.transactions.sort((item1, item2) => {
      if (this.selectedOrder === "asc") {
        return item1.merchant < item2.merchant ? -1 : 1;
      } else {
        return item1.merchant < item2.merchant ? 1 : -1;
      }
    });
  }

  private sortByDate() {
    this.transactions.sort((item1, item2) => {
      if (this.selectedOrder === "asc") {
        return item1.transactionDate < item2.transactionDate ? -1 : 1;
      } else {
        return item1.transactionDate < item2.transactionDate ? 1 : -1;
      }
    });
  }

  private getTransactions() {
    this.transactionService
      .getTransactions(`${environment.transactions}`)
      .subscribe(transactions => {
        this.transactions = transactions.data;
        this.transactionsBucket = this.transactions;
      });
  }
}
