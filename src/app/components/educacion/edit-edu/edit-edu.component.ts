import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit{


  educacion: Educacion = new Educacion('', '');

  constructor(
    private educacionS: EducacionService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data=>{
        this.educacion=data;
      },err=>{
        alert("error al modificar");
        this.router.navigate([''])

      }
    )
  }
  
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data=>{
        alert("Modificado con exito")

        this.router.navigate([''])
      },err=>{
        alert("Error al modificar educacion")
        this.router.navigate([''])
      }
    )
  }
}
