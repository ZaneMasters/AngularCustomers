import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent {

  tipoDocumentoControl = new FormControl('', [Validators.required]);
  documentoControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(8), Validators.maxLength(11)]);


  private customer = inject(CustomerService);
  private router = inject(Router);
  mostrarError: boolean = false;

  enviarDatos(): void {
    const data = {
      documentType: this.tipoDocumentoControl.value,
      documentNumber: this.documentoControl.value
    };
    console.log('tipo de documento', data);

    this.customer.getClients(data).subscribe(response => {

      this.customer.setResponse(response);

      this.router.navigate(['/summary']);

    }, error => {
      console.error('Error en la solicitud:', error);
      this.mostrarError = true;
    });
  }

}
