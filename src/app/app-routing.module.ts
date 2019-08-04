import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './components/query/query.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddItemComponent } from './components/add-item/add-item.component';


const routes: Routes = [
  { path: '', component: QueryComponent },
  { path: 'home', component: QueryComponent },
  { path: 'register', component: AddItemComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
