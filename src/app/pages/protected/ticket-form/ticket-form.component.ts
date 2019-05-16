import { Component, OnInit } from '@angular/core';
import { ResaleService } from 'src/app/services/resale.service';
import { Resale } from 'src/app/models/resale';
import { Observable } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  resales: Resale[];
  ticket:any={phone:''};
  ticketForm:FormGroup;
  toastMessage:string="testando";
  submitted = false;

  constructor(
    public resaleService: ResaleService,
    public ticketService: TicketService,
    public formBuilder:FormBuilder,
    public router:Router
  ) { }

  ngOnInit() {
    this.resaleService.get()
      .subscribe((response) => {
        console.log(response[55]);
        response.forEach((el, index, arr) => {
          arr[index].revendaFull = `${el.fantasia} ${el.razao_social} ${el.cnpj}`;

        })
        this.resales = response;
      });

    this.ticketForm = this.formBuilder.group({
      id_reseller:['',Validators.required],
      priority:['',Validators.required],
      phone:['', [Validators.required, Validators.minLength(10)] ] ,
      image:['',],
      called:['',Validators.required]
    })
  }

  get form() { return this.ticketForm.controls }

  onSubmit() {
    this.submitted = true;
    if(!this.ticketForm.invalid) {
      this.ticketService.add(this.ticket)
        .subscribe(() => {
          this.router.navigate(['/protected/ticket']);
        },err => {
          throw new Error(err);
        })
    }
  }

}
