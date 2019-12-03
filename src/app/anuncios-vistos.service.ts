import { Injectable } from '@angular/core';
import { StorageInterface } from './storageInterface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnunciosVistosService implements StorageInterface{
  anunciosVistosIds:string[] = []
  
  constructor(private _storage: StorageService) { 
    _storage.load('viewed').subscribe(obj => {
      this.anunciosVistosIds = obj
    })
  }
  
  save(chave: string, obj: string[]): void {
    this.anunciosVistosIds = obj
    this._storage.save('viewed',obj)
  }

  load(chave: string): string[]{
    return this.anunciosVistosIds ? this.anunciosVistosIds : []
  }
}
