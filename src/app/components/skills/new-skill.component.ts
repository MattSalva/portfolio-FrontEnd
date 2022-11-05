import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../services/skills.service";
import {Skills} from "../../model/skills";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private SSkills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.nombre, this.porcentaje);
    this.SSkills.save(skill).subscribe(data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo al agregar Skill");
      this.router.navigate(['']);
    })
  }

}
