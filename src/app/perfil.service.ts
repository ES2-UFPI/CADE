import { Injectable } from '@angular/core';
import { Perfil } from './perfil';
import { StorageInterface } from './storageInterface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService implements StorageInterface{
  perfil:Perfil
  
  constructor(private _storage: StorageService) { 
    _storage.load('perfil').subscribe(obj => {
      this.perfil = obj
    })
  }
  
  async save(chave: string, obj: Perfil){
    this.perfil = obj
    await this._storage.save('perfil',obj)
  }

  load(chave: string): Perfil{
    return this.perfil
  }

}
