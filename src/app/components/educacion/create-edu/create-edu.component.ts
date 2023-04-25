import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-create-edu',
  templateUrl: './create-edu.component.html',
  styleUrls: ['./create-edu.component.css']
})
export class CreateEduComponent implements OnInit{
  nombreEd!: string;
  descripcionEd!:string;

  constructor(private educacionS: EducacionService, private router: Router ) { }

  ngOnInit(): void {
  }
  
  onCreate():void{
    const expe = new Educacion (this.nombreEd, this.descripcionEd);
    this.educacionS.save(expe).subscribe(data =>{
      
      alert("Agregado con exito")
      window.location.reload()   

    }, err =>{
      alert("Fallo");
      window.location.reload()   

    }
    )
  }
}
