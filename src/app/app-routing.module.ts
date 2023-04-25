import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonaComponent } from './components/about/edit-persona/edit-persona.component';
import { EditEduComponent } from './components/educacion/edit-edu/edit-edu.component';
import { EditExpeComponent } from './components/experiencia/edit-expe/edit-expe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "updateprofile/:id", component: EditPersonaComponent},
  {path: "login", component: LoginComponent},
  {path: "login/register", component: RegisterComponent},
  {path: "update/:id", component: EditEduComponent},
  {path: "updateexpe/:id", component: EditExpeComponent},
  {path: "updateskill/:id", component: EditSkillComponent},
  {path: "updateproyecto/:id", component: EditProyectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
