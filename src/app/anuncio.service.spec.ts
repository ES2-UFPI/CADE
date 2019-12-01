import { TestBed } from '@angular/core/testing';

import { AnuncioService } from './anuncio.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { GeolocationService } from './geolocation.service';
import { Perfil } from './perfil';
import { Anuncio } from './anuncio';
import { Observable, of } from 'rxjs';
import { ILatLng } from '@ionic-native/google-maps/ngx';
import { Storage } from '@ionic/storage';

describe('AnuncioService Default', () => {
  let service:AnuncioService
  const angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection','valueChanges'])
  let geolocationServiceSpy = jasmine.createSpyObj('GeolocationService', ['distance'])
  const storageSpy = jasmine.createSpyObj('Storage', ['get','set'])
  
  let anuncios:Anuncio[] = []
  
  angularFirestoreSpy.collection = ()=>{
    return angularFirestoreSpy
  }
  angularFirestoreSpy.valueChanges = ()=>{
    return of(anuncios) as Observable<Anuncio[]>
  }
  geolocationServiceSpy.distance = (from:ILatLng, to:ILatLng)=>{
    return 0.0
  }
  storageSpy.get = () =>{
    return of([])
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: AngularFirestore, useValue: angularFirestoreSpy},
        {provide: GeolocationService, useValue: geolocationServiceSpy},
        {provide: Storage, useValue: storageSpy},
      ],
    })
    service = TestBed.get(AnuncioService);
  }
)

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('with custom GeolocationService', () => {
    geolocationServiceSpy.distance = (from:ILatLng, to:ILatLng)=>{
      // console.log('FROM '+from.lat+' - TO '+to.lat)
      if(to.lat === -5.115061){
        return 0.0
      }else{
        return 4000.0
      }
    }
    it('should retrieve anuncios by distance', () => {
      anuncios = [
        {
          id: '1',
          titulo: '',
          geolocalizacao: {lat:-5.115061, lng:-42.811459},
          descricao: '',
          categoria: 'Noticia',
          dataInicial: null,
          dataFinal: null,
          views: 0,
        },
        {
          id: '2',
          titulo: '',
          geolocalizacao: {lat:-6.115061, lng:-48.811459},
          descricao: '',
          categoria: 'Noticia',
          dataInicial: null,
          dataFinal: null,
          views: 0,
        },
      ]
      
      const from = {lat:-5.115062, lng:-42.811459}
      const perfil:Perfil  = {raio:500, categorias:['Noticias']}
      let result:Anuncio[] = []
      
      let lista:Observable<Anuncio[][]> = service.findByLocationAndPerfil(perfil,from)
      lista.subscribe(anunciosMatrix =>{
        anunciosMatrix.forEach(anuncios=>{
          anuncios.forEach(anuncio=>{
            result.push(anuncio)
          })
        })
      })
      expect(result.length).toEqual(1);
      
      perfil.raio = 5000
      result = []
      lista = service.findByLocationAndPerfil(perfil,from)
      lista.subscribe(anunciosMatrix =>{
        anunciosMatrix.forEach(anuncios=>{
          result.concat(anuncios)
        })
      })
      expect(anuncios.length).toEqual(2);
      
    });
  })
  
  
  describe('with custom Firestore.collection', () => {
    angularFirestoreSpy.valueChanges = ()=>{
      return of([anuncios[0]]) as Observable<Anuncio[]>
    }
    anuncios = [
      {
        id: '1',
        titulo: '',
        geolocalizacao: {lat:-5.115061, lng:-42.811459},
        descricao: '',
        categoria: 'Noticia',
        dataInicial: null,
        dataFinal: null,
        views: 0,
      },
      {
        id: '2',
        titulo: '',
        geolocalizacao: {lat:-5.115061, lng:-42.811459},
        descricao: '',
        categoria: 'Livros',
        dataInicial: null,
        dataFinal: null,
        views: 0,
      },
    ]
    const from = {lat:-5.115061, lng:-42.811459}
    const perfil:Perfil  = {raio:501, categorias:['Noticias']}
    let result:Anuncio[] = []
    
    it('should retrieve anuncios by certain category', () => {
      let lista:Observable<Anuncio[][]> = service.findByLocationAndPerfil(perfil,from)
      lista.subscribe(anunciosMatrix =>{
        anunciosMatrix.forEach(anuncios=>{
          anuncios.forEach(anuncio=>{
            result.push(anuncio)
          })
        })
      })
      expect(result.length).toEqual(1);
    });
    
  })


});
