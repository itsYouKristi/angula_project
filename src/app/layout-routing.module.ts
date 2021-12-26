import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  { path:'list',
    loadChildren: () => import('./page/company-list/company-list.module').then(m => m.CompanyListModule)},
  { path:'detail',
    loadChildren: () => import('./page/company-detail/company-detail.module').then(m => m.CompanyDetailModule)},
  { path:'map',
    loadChildren: () => import('./page/company-yandex-map/company-yandex-map.module').then(m => m.CompanyYandexMapModule)},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'detail/**', redirectTo: 'detail', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule{ }
