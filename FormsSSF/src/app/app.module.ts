import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { DivQuoteComponent } from './div-quote/div-quote.component';
import { DivivalueComponent } from './divivalue/divivalue.component';
import { AppRoutingModule } from './app-routing.module';
import { LoanValueComponent } from './loan-value/loan-value.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalcquoteComponent } from './calcquote/calcquote.component';
import { OppComponent } from './opp/opp.component';
import { AddoppComponent } from './addopp/addopp.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DivQuoteComponent,
    DivivalueComponent,
    LoanValueComponent,
    CalcquoteComponent,
    OppComponent,
    AddoppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
