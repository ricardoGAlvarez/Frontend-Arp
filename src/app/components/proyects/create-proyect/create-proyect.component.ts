import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-create-proyect',
  templateUrl: './create-proyect.component.html',
  styleUrls: ['./create-proyect.component.css'],
})
export class CreateProyectComponent implements OnInit {
  id!: number;
  nombre!: string;
  descripcion!: string;
  img!: string;

  constructor(
    private proyectoS: ProyectoService,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit(): void {}

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const imgUrl = ref(this.storage, `proyectos/${file.name}`);

    uploadBytes(imgUrl, file)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        this.img = url;
        console.log(this.img)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onCreate(): void {
    const proyecto = new Proyecto(
      this.id,
      this.nombre,
      this.descripcion,
      this.img
    );
    this.proyectoS.save(proyecto).subscribe(
      (data) => {
        alert('Agregado con exito');
        window.location.reload();
      },
      (err) => {
        alert('Fallo');
        window.location.reload();
      }
    );
  }
}
