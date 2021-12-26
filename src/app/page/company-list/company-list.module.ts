import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyListRoutingModule} from "./company-list-routing.module";
import {CompanyListComponent} from "./company-list.component";
import {CompanySortComponent} from "./company-sort/company-sort.component";
import {CompanyFilterComponent} from "./company-filter/company-filter.component";
import {CompanyItemComponent} from "./company-item/company-item.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanySortComponent,
    CompanyFilterComponent,
    CompanyItemComponent
  ],
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CompanyListModule { }
