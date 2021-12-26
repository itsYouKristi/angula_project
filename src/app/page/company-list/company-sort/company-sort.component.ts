import { Component } from '@angular/core';
import {ChangeCompanyListService} from "../../../service/change-company-list.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent {

  constructor(
    private _company: ChangeCompanyListService
  ) {}

  public sortCompany(key: string){
    this._company.sortList(key);
  }
}


