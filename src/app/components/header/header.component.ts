import { Component, OnInit } from '@angular/core';
import {PersonaService} from "../../services/persona.service";
import {persona} from "../../model/persona.model";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //miPortfolio:any;
  persona: persona = new persona("", "", "");
  //constructor(private datosPortfolio:PortfolioService,, private router: Router) { }

  isLogged = false
  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

/*  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }*/

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data});

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged = false;
    }

  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
