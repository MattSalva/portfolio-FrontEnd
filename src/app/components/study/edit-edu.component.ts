import { Component, OnInit } from '@angular/core';
import {Educacion} from "../../model/educacion";
import {EducacionService} from "../../services/educacion.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {
  educacion: Educacion = null;

  constructor( private sEdu: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEdu.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEdu.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modificando educacion");
        this.router.navigate(['']);
      }
    )

  }

}
