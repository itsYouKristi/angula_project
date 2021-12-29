import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICompanyInfo} from "../interfaces/company-info-responce-model.interface";

@Injectable()
export class ReceiveCompaniesService {

    constructor(
        private _httpClient: HttpClient
    ) {}

    public initList() {
        const url: string = 'https://random-data-api.com/api/company/random_company?size=100';
        return this._httpClient.get<ICompanyInfo[]>(url);
    }
}
