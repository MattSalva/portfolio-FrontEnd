import { Component, OnInit } from '@angular/core';
import {ExpsService} from "../../services/exps.service";
import {Router} from "@angular/router";
import {Exp} from "../../model/exp";

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sxp: ExpsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const exp = new Exp(this.nombreE, this.descripcionE);
    this.sxp.save(exp).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err=>{
      alert("Fail");
      this.router.navigate(['']);
    })
  }

}
