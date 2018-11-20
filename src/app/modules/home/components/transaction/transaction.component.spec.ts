import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { TransactionService, ApiService, JwtService, SubjectService } from "../../../shared";
import { TransactionComponent } from "./transaction.component";
import { HttpModule, XHRBackend } from "@angular/http";
import { MockBackend } from '@angular/http/testing';
describe("TransactionListerComponent", () => {
 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [TransactionComponent],
     imports: [HttpModule, FormsModule],
     providers: [TransactionService, ApiService, JwtService, SubjectService, { provide: XHRBackend, useClass: MockBackend }]
   }).compileComponents();
 }));
 it("should create the TransactionComponent", async(() => {
   const fixture = TestBed.createComponent(TransactionComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
 }));
});
