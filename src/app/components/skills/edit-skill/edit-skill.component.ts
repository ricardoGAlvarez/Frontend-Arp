import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {

  skill: Skill = new Skill('', 0);

  constructor(
    private skillS: SkillService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data=>{
        this.skill=data;
      },err=>{
        alert("error al modifical");
        this.router.navigate([''])

      }
    )
  }
  
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data=>{
        alert("Modificado con exito")


        this.router.navigate([''])
      },err=>{
        alert("Error al modificar ")
        this.router.navigate([''])
      }
    )
  }
}
