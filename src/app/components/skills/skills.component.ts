import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { CreateProyectComponent } from '../proyects/create-proyect/create-proyect.component';
import { CreateSkillComponent } from './create-skill/create-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    private skills: SkillService,
    private tokenService: TokenService,
    private matdialog: MatDialog
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skills.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      if (confirm('¿Está seguro de que desea eliminar este elemento?')) {
        this.skills.delete(id).subscribe(
          (data) => {
            this.cargarSkills();
            alert('Eliminado con exito');
          },
          (err) => {
            alert('no se borro skill');
          }
        );
      }
    }
  }

  crearSkill() {
    this.matdialog.open(CreateSkillComponent, {
      width: '80%',
      height: '450px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
  }
}
