import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageInterface } from './storageInterface';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements StorageInterface{

  constructor(private _storage: Storage) { }

  save(chave: string, obj: any): void {
    this._storage.set(chave,obj)
  }

  load(chave: string): Observable<any> {
    return from(this._storage.get(chave))
  }

}
