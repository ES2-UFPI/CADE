import { TestBed } from '@angular/core/testing';

import { ComentarioService } from './comentario.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ComentarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
    ],
  }));

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  }

  it('should be created', () => {
    const service: ComentarioService = TestBed.get(ComentarioService);
    expect(service).toBeTruthy();
  });
});
