import { Component } from "@angular/core";
import { TransactionService, SubjectService, Transaction } from "../../../shared";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "transaction-lister",
  templateUrl: "./transaction-lister.component.html",
  styleUrls: ["./transaction-lister.component.css"]
})
export class TransactionListerComponent {
  transactions: Transaction[] = [];
  transactionsBucketForSearch: Transaction[] = [];
  selectedType: string = "";
  selectedOrder: string = "";
  searchText: string = "";
  constructor(
    private transactionService: TransactionService,
    private subjectService: SubjectService
  ) {
    this.getTransactions();
    this.newTransactionSuccess = this.newTransactionSuccess.bind(this);
    this.subjectService
      .getTransectionSubject()
      .subscribe(this.newTransactionSuccess);
  }

  public searchByName(event) {
    this.transactions = this.transactionsBucketForSearch.filter(item => {
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
        this.transactionsBucketForSearch = transactions.data;
      });
  }

  private newTransactionSuccess(item) {
    if (!item.value) {
      return;
    }
    //putting dummy merchant logo to new transactions
    const merchantLogo =
      this.transactions[0] && this.transactions[0].merchantLogo;

    this.transactionsBucketForSearch.unshift({
      transactionDate: new Date(),
      merchant: item.value.merchant,
      amount: item.value.amount,
      merchantLogo: merchantLogo
    });
    this.transactions = this.transactionsBucketForSearch;
    this.resetListFilters();
  }

  private resetListFilters() {
    this.selectedOrder = "";
    this.searchText = "";
  }
}
