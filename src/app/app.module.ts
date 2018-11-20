import { ModuleWithProviders, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";

import {
  ApiService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  SharedModule,
  TransactionService,
  SubjectService
} from "./modules/shared";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: false
});

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  exports: [],
  imports: [BrowserModule, HomeModule, rootRouting, SharedModule],
  providers: [ApiService, JwtService, TransactionService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}
