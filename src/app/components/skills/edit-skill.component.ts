import { Component, OnInit } from '@angular/core';
import {Skills} from "../../model/skills";
import {SkillsService} from "../../services/skills.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skills: Skills = null;

  constructor(private SSkills: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.SSkills.detail(id).subscribe(
      data => {
        this.skills = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )


  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.SSkills.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}
