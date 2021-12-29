import {Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ChangeCompanyListService } from "../../../service/change-company-list.service";


@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit{

  filterForm: FormGroup;
  public industryList!: Set<string>
  public typeList!: Set<string>


  constructor(
    private _formBuilder: FormBuilder,
    private _changeCompanyService: ChangeCompanyListService
  ){
    this.filterForm = this._formBuilder.group({
      name: [null],
      industry: [null],
      type: [null]
    })
  }
  public ngOnInit(): void{
    this.industryList = this._changeCompanyService.industryList
    this.typeList = this._changeCompanyService.typeList
  }

  public filterList(){
    const name: string = this.filterForm.get('name')?.value;
    const industry: string = this.filterForm.get('industry')?.value;
    const type: string = this.filterForm.get('type')?.value;
    this._changeCompanyService.filterList(name, industry, type);
  }
}


