import { Component, OnInit } from '@angular/core';
import {EducacionService} from "../../services/educacion.service";
import {Router} from "@angular/router";
import {Educacion} from "../../model/educacion";

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {

  eduNombre: string;
  eduDesc: string;


  constructor(private sEdu: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.eduNombre, this.eduDesc);
    this.sEdu.save(educacion).subscribe(data=>{
      alert("Educación añadida con éxito");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
