import { Component, OnInit } from '@angular/core';
import {Persona} from "../../model/persona.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonaService} from "../../services/persona.service";

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  persona: Persona = null;


  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modificando persona");
        this.router.navigate(['']);
      }
    )
  }

}
