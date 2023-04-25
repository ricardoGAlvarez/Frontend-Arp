import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent  implements OnInit{

  persona:persona = new persona(0,'','','','','')
  constructor(private activatedRouter: ActivatedRoute,
     private personaS: PersonaService,
     private router: Router,
     private storage: Storage

    ) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data=>{
        this.persona=data;
      },err=>{
        alert("error al modifical");
        this.router.navigate([''])

      }
    )    
  }


  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id' ]
    const file = $event.target.files[0];
    const imgUrl= ref(this.storage, `personas/${file.name}`)

    uploadBytes(imgUrl, file)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    })
    .then((url) => {
     this.persona.img= url
     console.log( this.persona.img)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.personaS.update(id, this.persona).subscribe(
      data=>{
         alert("se modifico correctamente el proyecto");

        this.router.navigate(['']);
      },err=>{
        alert("error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
