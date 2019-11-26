import { TestBed } from '@angular/core/testing';

import { AnuncioService } from './anuncio.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { GeolocationService } from './geolocation.service';
import { Perfil } from './perfil';
import { Anuncio } from './anuncio';
import { from, Observable } from 'rxjs';
import { ILatLng } from '@ionic-native/google-maps/ngx';

describe('AnuncioService', () => {
  let service:AnuncioService
  const angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection','valueChanges'])
  const geolocationServiceSpy = jasmine.createSpyObj('GeolocationService', ['distance'])

  let anuncios:Anuncio[] = [
    {
      id: '1',
      titulo: '',
      geolocalizacao: {lat:-5.115061, lng:-42.811459},
      descricao: '',
      categoria: 'Noticia',
      dataInicial: null,
      dataFinal: null,
    },
    {
      id: '2',
      titulo: '',
      geolocalizacao: {lat:-6.115061, lng:-48.811459},
      descricao: '',
      categoria: 'Noticia',
      dataInicial: null,
      dataFinal: null,
    },
    {
      id: '3',
      titulo: '',
      geolocalizacao: {lat:-5.115061, lng:-42.811459},
      descricao: '',
      categoria: 'Livros',
      dataInicial: null,
      dataFinal: null,
    },
  ]

  angularFirestoreSpy.collection = ()=>{
    return angularFirestoreSpy
  }
  angularFirestoreSpy.valueChanges = ()=>{
    return from(anuncios) as Observable<Anuncio>
  }
  geolocationServiceSpy.distance = (from:ILatLng, to:ILatLng)=>{
    if(from.lat == -5.115061){
      return 0.0
    }else{
      return 9999.0
    }
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: AngularFirestore, useValue: angularFirestoreSpy},
        {provide: GeolocationService, useValue: geolocationServiceSpy},
      ],
    })
    service = TestBed.get(AnuncioService);
  }
)

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should find by location and Perfil', () => {
    const from = {lat:-5.115061, lng:-42.811459}
    const perfil1:Perfil  = {raio:500, categorias:['Noticias']}
    const perfil2:Perfil  = {raio:500, categorias:['Livros']}

    let lista:Observable<Anuncio[][]> = service.findByLocationAndPerfil(perfil1,from)
    lista.subscribe(anunciosMatrix =>{
      anunciosMatrix.forEach(anuncios=>{
        anuncios.forEach(anuncio=>{
          expect(anuncio.id).toEqual('1');
        })
      })
    })

    lista = service.findByLocationAndPerfil(perfil2,from)
    lista.subscribe(anunciosMatrix =>{
      anunciosMatrix.forEach(anuncios=>{
        anuncios.forEach(anuncio=>{
          expect(anuncio.id).toEqual('3');
        })
      })
    })

  });
});
