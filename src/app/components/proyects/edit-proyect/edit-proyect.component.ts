import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent {
  proyecto: Proyecto= new Proyecto(0,'', '','');;
  constructor(
    private proyectoS: ProyectoService, 
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit(): void {
   const id = this.activatedRouter.snapshot.params['id']
   this.proyectoS.detail(id).subscribe(
    data=>{
      this.proyecto=data
    },err=>{
      alert("error modificar");
      this.router.navigate(['']);
    }
   )
  }
  
  
  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id' ]
    const file = $event.target.files[0];
    const imgUrl= ref(this.storage, `proyectos/${file.name}`)

    uploadBytes(imgUrl, file)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    })
    .then((url) => {
     this.proyecto.img= url
     console.log(url)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.proyectoS.update(id, this.proyecto).subscribe(
      data=>{
        alert("Modificado con exito")


        this.router.navigate(['']);
      },err=>{
        alert("error al modificar ");
        this.router.navigate(['']);
      }
    )
  }


}
