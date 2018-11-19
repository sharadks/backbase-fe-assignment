import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ApiService} from './api.service';

@Injectable()
export class TransactionService {
    constructor(private apiService: ApiService) {
    }

    getTransections(url): Observable<any> {
        return this.apiService.get(url)
            .map((data) => data);
    };
}