import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {NewExperienciaComponent} from "./components/exp/new-experiencia.component";
import {EditExpComponent} from "./components/exp/edit-exp.component";
import {NewEduComponent} from "./components/study/new-edu.component";
import {EditEduComponent} from "./components/study/edit-edu.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {NewSkillComponent} from "./components/skills/new-skill.component";
import {EditSkillComponent} from "./components/skills/edit-skill.component";
import {EditheaderComponent} from "./components/header/editheader.component";
import {EditAboutComponent} from "./components/about/edit-about.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'new-exp', component:NewExperienciaComponent},
  {path: 'edit-exp/:id', component:EditExpComponent},
  {path: 'new-edu', component: NewEduComponent},
  {path: 'edit-edu/:id', component: EditEduComponent},
  {path: 'new-skill', component: NewSkillComponent},
  {path: 'edit-skill/:id', component: EditSkillComponent},
  {path: 'edit-header/:id', component: EditheaderComponent},
  {path: 'edit-about/:id', component: EditAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
