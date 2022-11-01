import { Component, OnInit } from '@angular/core';
import {Skills} from "../../model/skills";
import {SkillsService} from "../../services/skills.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  constructor(private SSkills: SkillsService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.loadSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  loadSkills(): void{
    this.SSkills.list().subscribe(
      data => {
        this.skills = data;
      }
    )


  }

  delete(id: number): void{
    if(id != undefined)
      this.SSkills.delete(id).subscribe(
        data => {
          this.loadSkills();
        }, err =>
          alert("No se pudo borrar la Skill")
      )
  }




}
