import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit{

  nombreS!: string;
  porcentaje!: number;



  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skill(this.nombreS, this.porcentaje);

    this.skillS.save(skill).subscribe(
      data =>{
        window.location.reload()   
        alert("Agregado con exito");
      },err=>{
        alert("error al crear");
        window.location.reload()   
            }
    )
  }
}
