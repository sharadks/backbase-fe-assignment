import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import {
  TransactionService,
  ApiService,
  JwtService,
  SubjectService
} from "../../../shared";
import { TransactionListerComponent } from "./transaction-lister.component";
import { HttpModule, XHRBackend } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
describe("TransactionListerComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionListerComponent],
      imports: [HttpModule, FormsModule],
      providers: [
        TransactionService,
        ApiService,
        JwtService,
        SubjectService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(TransactionListerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
