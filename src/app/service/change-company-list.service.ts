import { Injectable } from '@angular/core';
import {ICompanyInfo} from "../data/interfaces/company-info-responce-model.interface";
import {BehaviorSubject} from "rxjs";
import {ReceiveCompaniesService} from "../data/service/receive-companies.service";
import {sortListString} from "../type/sort-list-string.type";

@Injectable()
export class ChangeCompanyListService {

    public get industryList(){
        return this._industryList;
    }

    public get typeList(){
        return this._typeList;
    }

    public resultList: ICompanyInfo[] = [];
    public companyList: ICompanyInfo[] = [];
    public proxyTargetCompany: BehaviorSubject<ICompanyInfo[]> = new BehaviorSubject<ICompanyInfo[]>([])

    private _industryList: Set<string> = new Set<string>();
    private _typeList: Set<string> = new Set<string>();
    private _sortKey: sortListString = '';

    constructor(
        private _receive: ReceiveCompaniesService
    ){
        this._receive.initList().subscribe(
            (value: ICompanyInfo[]) => this.initialise(value)
        )
    }

    public getCompany(key: number): ICompanyInfo{
        return this.companyList.find((x: ICompanyInfo) => x.id === key)!;
    }

    public sortList(key: sortListString){
        if(key){
            this.resultList = this.resultList.sort((x, y) => {
                if (x[key] > y[key]) return 1;
                else if (x[key] < y[key]) return -1;
                else return 0;
            })
            this._sortKey = key;
        }
        this.proxyTargetCompany.next(this.resultList);
    }

    public filterList(name: string, industry: string, type: string){
        this.resultList = [];
        this.companyList.forEach(
            (company: ICompanyInfo) => {
                if((company.business_name.toLowerCase().indexOf(name?.toLowerCase()) === 0 || !name) &&
                        (company.industry === industry || !industry) &&
                        (company.type == type || !type)) {
                    this.resultList.push(company);
                }
            })
        this.sortList(this._sortKey);
    }

    public resetList():void{
        this.proxyTargetCompany.next(this.companyList);
        this._sortKey = '';
    }

    private initialise(companyList: ICompanyInfo[]): void{
        this.companyList = companyList;
        this.proxyTargetCompany.next(companyList);
        this.resultList = companyList;
        this.getFilterSheets();
    }

    private getFilterSheets(){
        for(let company of this.companyList) {
            this._industryList.add(company.industry)
            this._typeList.add(company.type)
        }
    }
}



