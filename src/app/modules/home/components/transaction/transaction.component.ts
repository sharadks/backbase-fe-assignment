import { Component} from '@angular/core';
import {TransactionService, SubjectService} from '../../../shared';
import { environment } from "../../../../../environments/environment";


@Component({
  selector: 'transaction-page',
  templateUrl: './transaction.component.html',
  styleUrls: ["./transaction.component.css"]
})


export class TransactionComponent {
  From:string='Free Checking $ ';
  FromAmount:number = 5824;
  toValue:string = '';
  FromValue:string;
  amountValue:number = null;
  submitCheck:boolean= true;
    constructor(
        private transactionService: TransactionService,
        private subjectService: SubjectService
      ) {
        this.FromValue= `${this.From} ${this.FromAmount}`;
                
      }
      submitForm() {
        const FromAmount: Number = this.FromAmount - this.amountValue;
        this.FromValue= `${this.From} ${this.FromAmount}`;
        //this.transactions.push({'transactionDate': new Date(), 'merchant': this.toValue, 'amount':this.amountValue,'merchantLogo':this.transactions[0].merchantLogo})
        this.subjectService.sendTransectionSubject({'transactionDate': new Date(), 'merchant': this.toValue, 'amount':this.amountValue,'merchantLogo':null});
        this.toValue ='';
        this.amountValue = null;
        this.submitCheck= true;
      }
      
      validate() {
        if(((this.amountValue<500) && (this.amountValue) ) && (this.toValue)) {
          this.submitCheck= false;
        } else {
          this.submitCheck= true;
        }
    
      }
 }
