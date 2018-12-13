import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User> ;

  constructor(private fbAuth: AngularFireAuth) {
    this.user = fbAuth.authState;
  }

  logIn(email: string, pw: string) {
    this.fbAuth
      .auth
      .signInWithEmailAndPassword(email, pw)
      .then(value => {
        console.log('Woot, your in!', value);
      })
      .catch(err => {
        console.log('Oops, no go on log: ', err.message);
      });
  }

  signUp(email: string, pw: string) {
    this.fbAuth
    .auth
      .createUserWithEmailAndPassword(email, pw)
    .then(value => {
      console.log('Woot, your signed up!', value);
    })
    .catch(err => {
      console.log('Ooops,could not sign up: ', err.message);
    });
  }
}
