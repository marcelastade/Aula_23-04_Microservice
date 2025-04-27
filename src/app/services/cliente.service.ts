import { Cliente } from './../interfaces/Clientes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[] = [
    {
      id: "abc",
      nome: "Marcela",
      telefone: "12"
    },
    {
      id: "adc",
      nome: "Julia"
    }
  ]

  constructor() {}
  list(): Cliente[] {
    return this.clientes
  }

  remove (id:string) {
    const cliente = this.clientes.find (c => c.id == id)

    if(cliente) {
      const index = this.clientes.indexOf(cliente)
      this.clientes.splice(index,1)
    }
  }

  add(cliente:Cliente) {
    this.clientes.push(cliente)
  }

  update(id:string, cliente:Cliente) {
    const index = this.clientes.findIndex (c=>c.id==id)

    if(index !== -1) {
      this.clientes[index]= {
        ...this.clientes[index],
        ...cliente
      }
    }
  }
}

