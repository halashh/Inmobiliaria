import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HouseComponent } from './house/house.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { TurnoComponent } from './turno/turno.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HouseComponent,
    AboutComponent,
    PriceComponent,
    TurnoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
