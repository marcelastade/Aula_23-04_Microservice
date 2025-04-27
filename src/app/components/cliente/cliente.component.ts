import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/Clientes';
import { ClienteService } from '../../services/cliente.service';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clientesForm : FormGroup = new FormGroup({})
  cliente: Cliente[]=[]

  constructor(private clienteService:ClienteService, private formBuilder:FormBuilder) {
    this.clientesForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['']
    })
  }

  list(): void {
    this.cliente = this.clienteService.list()
  }
  //método executado ao inicializar a página
  ngOnInit():void {
    this.list()
  }

  save() {
    if(this.clientesForm.valid) {
      alert('Podemos salvar!')
    }
  }
}
