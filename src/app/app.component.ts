import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { Carros } from './interfaces/Carros';
import { ClienteComponent } from "./components/cliente/cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    InterpolacaoComponent,
    ControlFlowComponent, ClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';

  carros: Carros [] = [
    {id: 1, nome: "Corsa", marca: "Fiat", ano: 2014}
  ]
}
