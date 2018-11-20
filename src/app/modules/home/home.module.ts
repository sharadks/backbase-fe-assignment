import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import {TransactionComponent} from './components/transaction/transaction.component'
import { TransactionListerComponent } from "./components/transaction-lister/transaction-lister.component";
import { SharedModule } from "../shared";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: HomeComponent
  }
]);

@NgModule({
  imports: [homeRouting, SharedModule],
  declarations: [
    HomeComponent,
    TransactionListerComponent,
    TransactionComponent
  ],
  providers: []
})
export class HomeModule {}
