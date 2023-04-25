import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { EditPersonaComponent } from './components/about/edit-persona/edit-persona.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateEduComponent } from './components/educacion/create-edu/create-edu.component'


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from './components/login/register/register.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateExpeComponent } from './components/experiencia/create-expe/create-expe.component';
import { CreateProyectComponent } from './components/proyects/create-proyect/create-proyect.component';
import { CreateSkillComponent } from './components/skills/create-skill/create-skill.component';
import { EditEduComponent } from './components/educacion/edit-edu/edit-edu.component';
import { EditExpeComponent } from './components/experiencia/edit-expe/edit-expe.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
    LoginComponent,
    EditPersonaComponent,
    ContactComponent,
    CreateEduComponent,
    RegisterComponent,
    CreateExpeComponent,
    CreateProyectComponent,
    CreateSkillComponent,
    EditEduComponent,
    EditExpeComponent,
    EditSkillComponent,
    EditProyectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
