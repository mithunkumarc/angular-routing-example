import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { Hello1Component } from './hello1.component';
import { Hello2Component } from './hello2.component';




const routes: Routes = [
  { path: 'hello'  , component  : HelloComponent},
  { path: 'hello1' , component  : Hello1Component},
  { path: 'hello2' , component  : Hello2Component},
  { path: ''       , redirectTo : '/hello', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }