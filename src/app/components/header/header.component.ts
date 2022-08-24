import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {PersonaService} from "../../services/persona.service";
import {persona} from "../../model/persona.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  persona: persona = new persona("", "", "");
  constructor(private datosPortfolio:PortfolioService,public personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

  login(){
    this.router.navigate(['/login'])
  }
}
