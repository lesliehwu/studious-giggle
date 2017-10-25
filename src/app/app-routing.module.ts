import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SjComponent } from './sj/sj.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
    {path:'seattle',component:SeattleComponent},
    {path:'sj',component:SjComponent},
    {path:'burbank',component:BurbankComponent},
    {path:'dallas',component:DallasComponent},
    {path:'dc',component:DcComponent},
    {path:'chicago',component:ChicagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
