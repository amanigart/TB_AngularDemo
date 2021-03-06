import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurtobtcPipe } from './shared/eurtobtc.pipe';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { TotimePipe } from './shared/totime.pipe';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { ShoppinglistComponent } from './components/exercices/shoppinglist/shoppinglist.component';
import { DisplaylistComponent } from './components/exercices/shoppinglist/displaylist/displaylist.component';
import { InjectionComponent } from './components/exercices/injection/injection.component';
import { FormsComponent } from './components/exercices/forms/forms.component';
import { CrudComponent } from './components/exercices/crud/crud.component';
import { UpdateComponent } from './components/exercices/crud/update/update.component';
import { DetailsComponent } from './components/exercices/crud/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    NavComponent,
    Demo3Component,
    EurtobtcPipe,
    ExercicesComponent,
    Exo1Component,
    TotimePipe,
    Demo4Component,
    ShoppinglistComponent,
    DisplaylistComponent,
    InjectionComponent,
    FormsComponent,
    CrudComponent,
    UpdateComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
