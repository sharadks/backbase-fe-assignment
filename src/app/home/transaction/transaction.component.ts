import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TransactionService, SubjectService} from '../../shared';
import { environment } from "../../../environments/environment";


@Component({
  selector: 'transaction-page',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})


export class TransactionComponent implements OnInit {
    From:any='Free Checking $ ';
  FromAmount:any = 5824;
  toValue:String = '';
  FromValue:any;
  amountValue:any = null;
  submitCheck:Boolean= true;
    constructor(
        private router: Router,
        private transactionService: TransactionService,
        private subjectService: SubjectService
      ) {
        this.FromValue= this.From + this.FromAmount;
                
      }
      ngOnInit() {
        
      }
      submitForm() {
        this.FromAmount = this.FromAmount - this.amountValue;
        this.FromValue= this.From + this.FromAmount;
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
