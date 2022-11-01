import { Component, OnInit } from '@angular/core';
import {Exp} from "../../model/exp";
import {ExpsService} from "../../services/exps.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
  exper : Exp = null;

  constructor(private sxp: ExpsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sxp.detail(id).subscribe(
      data => {
        this.exper = data;
      }, err =>{
        alert("Error modificando Experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sxp.update(id, this.exper).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error modificando Experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
