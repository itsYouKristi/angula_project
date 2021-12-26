import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from "./layout-routing.module";
import { ChangeCompanyListService } from "./service/change-company-list.service";
import { ReceiveCompaniesService } from "./data/service/receive-companies.service";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ChangeCompanyListService, ReceiveCompaniesService],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
