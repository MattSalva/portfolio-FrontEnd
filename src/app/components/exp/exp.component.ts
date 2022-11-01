import { Component, OnInit } from '@angular/core';
import {ExpsService} from "../../services/exps.service";
import {TokenService} from "../../services/token.service";
import {Exp} from "../../model/exp";

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  experiencia: Exp[] = [];
  constructor(private Exps: ExpsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void{
    this.Exps.lista().subscribe(data => {this.experiencia = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.Exps.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}


