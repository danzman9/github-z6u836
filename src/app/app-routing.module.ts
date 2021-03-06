// This example shows the particular variation of routing syntax
// needed to work with the CLI lazy loading support. The syntax can be
// slightly different if you are using a different tooling approach.

import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// Note there is no import of the HrFilesSearchComponent or reference
// to './hr-files-search.component'.

const routes: Routes = [
  { path: '', redirectTo: 'hr', pathMatch: 'full' },
  { path: 'hr', loadChildren: './hr-files/hr.module#HrModule' },
  { path: 'payroll', loadChildren: './payroll/payroll.module#PayrollModule' },
  { path: 'benefits', loadChildren: './benefits/benefits.module#BenefitsModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false, // Turn this on to log routing events to the console
  scrollPositionRestoration: 'enabled'
  // ,preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Behind the scenes, Angular converts the above syntax to something like
// this:

// loadChildren: () =>
// System.import('./hr/hr.module').then(({HrModule}) => HrModule)
