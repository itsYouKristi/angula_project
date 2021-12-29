import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ICompanyInfo} from "../../data/interfaces/company-info-responce-model.interface";
import {ChangeCompanyListService} from "../../service/change-company-list.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  public company!: ICompanyInfo;

  constructor(
    private _aRoute: ActivatedRoute,
    private _router: Router,
    private _companyService: ChangeCompanyListService
  ) { }

  public ngOnInit(): void {
    if (this._companyService.companyList.length > 0){
      const companyId: number = parseInt(this._aRoute.snapshot.queryParams.id, 10);
      this.company = this._companyService.getCompany(companyId);
      console.log(this.company)
    }else{
      this._router.navigateByUrl('list').then()
    }
  }
}
