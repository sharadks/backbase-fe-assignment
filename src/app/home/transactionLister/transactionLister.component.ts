import { Component, OnInit } from "@angular/core";
import { TransactionService, SubjectService } from "../../shared";
import { environment } from "../../../environments/environment";

@Component({
  selector: "transaction-lister",
  templateUrl: "./transactionLister.component.html",
  styleUrls: ["../home.component.css"]
})
export class TransactionListerComponent implements OnInit{
  public transactionsBucket = [];
  public transactions = [];
  public selectedType: String = "";
  public selectedOrder: String = "asc";
  constructor(
    private transactionService: TransactionService,
    private subjectService: SubjectService
  ) {
    this.getTransactions();
    this.subjectService.getTransectionSubject().subscribe( (res) => {
      this.transactions.push({'transactionDate': new Date(), 'merchant': res.value && res.value.merchant, 'amount': res.value && res.value.amount,'merchantLogo':this.transactions[0] && this.transactions[0].merchantLogo})
    });
    
  }

  ngOnInit(){
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
