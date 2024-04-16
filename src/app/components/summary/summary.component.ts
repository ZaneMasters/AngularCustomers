import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  
  private customer = inject(CustomerService);

  respuesta: any;
  primerApellido: string = "Sin Apellido";
  primerNombre: string = "Sin Nombre";
  
  ngOnInit(): void {

    this.customer.response$.subscribe(response => {
      console.log(response);
      this.respuesta=response;
      this.primerApellido = this.respuesta.lastName;
      this.primerNombre = this.respuesta.firstName;
    });
  }



}
