import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.page.html',
  styleUrls: ['./cadastro-anuncio.page.scss'],
})
export class CadastroAnuncioPage implements OnInit {
  anuncio: Anuncio[];
  constructor() { }

  ngOnInit() {
  }

}
