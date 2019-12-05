import { Injectable } from '@angular/core';
import { StorageInterface } from './storageInterface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnunciosVistosService implements StorageInterface{
  anunciosVistosIds:String[] = []
  
  constructor(private _storage: StorageService) { 
    _storage.load('viewed').subscribe(obj => {
      this.anunciosVistosIds = obj
    })
  }
  
  async save(chave: string, obj: String[]){
    this.anunciosVistosIds = obj
    await this._storage.save('viewed',obj)
  }

  load(chave: string): String[]{
    return this.anunciosVistosIds ? this.anunciosVistosIds : []
  }
}
