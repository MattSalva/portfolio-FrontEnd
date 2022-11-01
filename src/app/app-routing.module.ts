import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {NewExperienciaComponent} from "./components/exp/new-experiencia.component";
import {EditExpComponent} from "./components/exp/edit-exp.component";
import {NewEduComponent} from "./components/study/new-edu.component";
import {EditEduComponent} from "./components/study/edit-edu.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'new-exp', component:NewExperienciaComponent},
  {path: 'edit-exp/:id', component:EditExpComponent},
  {path: 'new-edu', component: NewEduComponent},
  {path: 'edit-edu/:id', component: EditEduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
