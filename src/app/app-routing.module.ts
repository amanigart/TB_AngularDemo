import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { CrudComponent } from './components/exercices/crud/crud.component';
import { DetailsComponent } from './components/exercices/crud/details/details.component';
import { FanResolver } from './components/exercices/crud/fan.resolver';
import { UpdateComponent } from './components/exercices/crud/update/update.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { FormsComponent } from './components/exercices/forms/forms.component';
import { ShoppinglistComponent } from './components/exercices/shoppinglist/shoppinglist.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path : "about", component : AboutComponent},
  {path : "home", component : HomeComponent },
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", component : Demo2Component},
    {path : "demo3", component : Demo3Component},
    {path : "demo4", component : Demo4Component},
  ]},
  {path : "exercices", component : ExercicesComponent, children : [
    {path : "exo1", component : Exo1Component},
    {path : "shoppinglist", component : ShoppinglistComponent},
    {path : "forms", component : FormsComponent},
    {path : "crud", component : CrudComponent},
    {path: "update/:id", resolve : {currentFan : FanResolver}, component: UpdateComponent},
    {path: "details/:id", resolve : {currentFan : FanResolver}, component: DetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
