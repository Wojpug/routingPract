import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';



const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
