import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetCiudadesService } from '../../services/get-ciudades.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { AgregarItemAction } from '../item/item.actions';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  formItem: FormGroup;
  ciudades: any = [];

  constructor(private formBuilder: FormBuilder, private service: GetCiudadesService, private store:Store<AppState>, private router: Router) {

  }

  ngOnInit() {
    this.construirForm();
    this.getCiudades();
  }

  construirForm() {
    this.formItem = this.formBuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      cantidad: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)])],
      precio: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(1)])],
      favorito: [false, Validators.required],
      sale: [false, Validators.required],  
    });
  }

  startSelec() {
    $('select').formSelect();
  }

  getCiudades() {
    this.service.getCiudades().subscribe(rst => {
      this.ciudades = rst;
      setTimeout(() => {
        this.startSelec();
      }, 500);
    });
  }

  create() {
    const accion = new AgregarItemAction(this.formItem.controls["origen"].value,
                                        this.formItem.controls["destino"].value,
                                        this.formItem.controls["cantidad"].value,
                                        this.formItem.controls["precio"].value,
                                        this.formItem.controls["favorito"].value,
                                        this.formItem.controls["sale"].value);
    this.store.dispatch(accion);
    this.formItem.reset();
    this.router.navigate(['/home']);
  }

}
