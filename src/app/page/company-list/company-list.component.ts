import { Component, OnInit } from '@angular/core';
import {ICompanyInfo} from "../../data/models/interfaces/company-info-responce-model.interface";
import {ChangeCompanyListService} from "../../service/change-company-list.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public allCompany: ICompanyInfo[] = [];

  constructor(
    private _company: ChangeCompanyListService,
  ) {
  }

  public ngOnInit(): void {
    this._company.proxyTargetCompany
    .subscribe((value:ICompanyInfo[])=>{
      this.allCompany = value
    })
  }

  public ngOnDestroy(): void{
    this._company.resetList()
  }
}
