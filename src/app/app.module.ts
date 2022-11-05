import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';
import { StudyComponent } from './components/study/study.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {interceptorProvider} from "./services/interceptor-service";
import {NewExperienciaComponent} from "./components/exp/new-experiencia.component";
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NewEduComponent } from './components/study/new-edu.component';
import { EditEduComponent } from './components/study/edit-edu.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditheaderComponent } from './components/header/editheader.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExpComponent,
    StudyComponent,
    SkillsComponent,
    ProyectsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExpComponent,
    NewEduComponent,
    EditEduComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditheaderComponent,
    EditAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
