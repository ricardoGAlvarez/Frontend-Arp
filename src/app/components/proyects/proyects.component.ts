import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { CreateProyectComponent } from './create-proyect/create-proyect.component';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(
    private proyectoS: ProyectoService,
    private tokenService: TokenService,
    private activatedRouter: ActivatedRoute,
    private matdialog: MatDialog
  ) {}

  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectoS.lista().subscribe((data) => {
      this.proyecto = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      if (confirm('¿Está seguro de que desea eliminar este elemento?')) {
        this.proyectoS.delete(id).subscribe(
          (data) => {
            this.cargarProyectos();
            alert('Eliminado con exito');
          },
          (err) => {
            alert('error al borrar proyecto');
          }
        );
      }
    }
  }

  crearProyecto() {
    this.matdialog.open(CreateProyectComponent, {
      width: '80%',
      height: '500px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
  }
}
