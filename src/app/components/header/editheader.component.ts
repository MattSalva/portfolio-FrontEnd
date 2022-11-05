import { Component, OnInit } from '@angular/core';
import {Persona} from "../../model/persona.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonaService} from "../../services/persona.service";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-editheader',
  templateUrl: './editheader.component.html',
  styleUrls: ['./editheader.component.css']
})
export class EditheaderComponent implements OnInit {
  persona: Persona = null;
  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

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
    this.persona.img = this.imageService.url;
      this.personaService.update(id, this.persona).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error modificando persona");
          this.router.navigate(['']);
        }
      )
  }




  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "profile_" + id;
    this.imageService.uploadImage($event, name);

  }

}
