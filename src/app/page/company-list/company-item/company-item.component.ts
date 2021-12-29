import {Component, Input} from '@angular/core';
import {ICompanyInfo} from "../../../data/interfaces/company-info-responce-model.interface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent {

  @Input()public company!: ICompanyInfo

  constructor(
    private _router: Router
  ) {}

  public goToDetail(){
    this._router.navigateByUrl(`detail/company?id=${this.company.id}`).then()
  }
}



