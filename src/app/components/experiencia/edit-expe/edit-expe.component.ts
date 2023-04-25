import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent {

  experiencia: Experiencia = new Experiencia('', '');

  constructor(
    private experienciaS: SExperienciaService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(
      data=>{
        this.experiencia=data;
      },err=>{
        alert("error al modificar");
        this.router.navigate([''])

      }
    )
  }
  
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.update(id, this.experiencia).subscribe(
      data=>{
        alert("Modificado con exito")

        this.router.navigate([''])
      },err=>{
        alert("Error al modificar")
        this.router.navigate([''])
      }
    )
  }
}
