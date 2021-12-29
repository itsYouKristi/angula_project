import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from "./layout-routing.module";
import { ChangeCompanyListService } from "./service/change-company-list.service";
import { ReceiveCompaniesService } from "./data/service/receive-companies.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ChangeCompanyListService, ReceiveCompaniesService],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
