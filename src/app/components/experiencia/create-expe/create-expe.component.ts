import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-create-expe',
  templateUrl: './create-expe.component.html',
  styleUrls: ['./create-expe.component.css']
})
export class CreateExpeComponent implements OnInit{
  nombreE!: string;
  descripcionE!:string;

  constructor(private experienciaS: SExperienciaService, private router: Router ) { }

  ngOnInit(): void {
  }
  
  onCreate():void{
    const expe = new Experiencia (this.nombreE, this.descripcionE);
    this.experienciaS.save(expe).subscribe(data =>{
      
      alert("Agregado con exito")
      window.location.reload()   

    }, err =>{
      alert("Fallo");
      window.location.reload()   

    }
    )
  }
}
