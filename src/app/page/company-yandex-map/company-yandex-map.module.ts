import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyYandexMapRoutingModule } from "./company-yandex-map-routing.module";
import { CompanyYandexMapComponent } from "./company-yandex-map.component";


@NgModule({
  declarations: [CompanyYandexMapComponent],
  imports: [
    CommonModule,
    CompanyYandexMapRoutingModule
  ]
})
export class CompanyYandexMapModule { }
