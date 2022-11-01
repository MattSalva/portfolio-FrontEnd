import { Component, OnInit } from '@angular/core';
import {Educacion} from "../../model/educacion";
import {EducacionService} from "../../services/educacion.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private sEdu: EducacionService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken())
      this.isLogged = true;
    else
      this.isLogged = false;
  }

  cargarEducacion(): void{
    this.sEdu.lista().subscribe(data=>{this.educacion = data;})
  }



  delete(id: number){
    if( id != undefined)
      this.sEdu.delete(id).subscribe(data=>{this.cargarEducacion();}, err => {alert("Fallo en eliminar")});
  }

}
