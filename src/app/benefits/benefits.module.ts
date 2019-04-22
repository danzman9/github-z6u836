import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BenefitsSearchComponent } from './benefits-search.component';

const benefitsRoutes: Routes = [
  { path: '', component: BenefitsSearchComponent }
];

@NgModule({
  declarations: [
    BenefitsSearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(benefitsRoutes)
  ]
})
export class BenefitsModule { }
