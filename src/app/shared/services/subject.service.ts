import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectService {

private transactionSubject = new BehaviorSubject <any>({'transactionDate': new Date(), 'merchant': null, 'amount':null,'merchantLogo':null});      
        sendTransectionSubject(auth) {
                this.transactionSubject.next({ value: true });
        }
        
        getTransectionSubject(): Observable<any> {
                return this.transactionSubject.asObservable();
        }
}