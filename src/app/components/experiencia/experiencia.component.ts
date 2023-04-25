import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { CreateExpeComponent } from './create-expe/create-expe.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit{
  experiencia: Experiencia[] = [];

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService,
    private matdialog:MatDialog
  ) {}

  isLogged = false;
  ngOnInit(): void {
    this.cargarExp();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExp(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.experiencia = data;
    });
  }


  delete(id?: number) {
    if (id != undefined) {
      if (confirm('¿Está seguro de que desea eliminar este elemento?')) {
        this.sExperiencia.delete(id).subscribe(
          (data) => {
            this.cargarExp();
            alert('Eliminado con exito');
          },
          (err) => {
            alert('No se logró eliminar');
          }
        );
      }
    }
  }
  crearExperiencia(){
    this.matdialog.open(CreateExpeComponent, {
      width: '80%',
      height: '450px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
  }
}

