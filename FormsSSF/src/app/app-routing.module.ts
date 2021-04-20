import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivQuoteComponent } from './div-quote/div-quote.component';
import { DivivalueComponent } from './divivalue/divivalue.component';
import { LoanValueComponent } from './loan-value/loan-value.component';
import { CalcquoteComponent} from './calcquote/calcquote.component';
import { Routes, RouterModule } from '@angular/router';
import { OppComponent} from './opp/opp.component'

const routes: Routes = [
  { path: 'divquote', component: DivQuoteComponent },
  { path: 'divivalue', component: DivivalueComponent},
  { path: 'LoanValue', component: LoanValueComponent},
  { path: 'Calcquote', component: CalcquoteComponent},
  { path: 'opp', component: OppComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
