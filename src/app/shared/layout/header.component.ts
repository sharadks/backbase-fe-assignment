import {Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable, BehaviorSubject } from 'rxjs';

import {Router} from '@angular/router';

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
	 styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(private router: Router) {
    }
    ngOnInit() {
    }
}
