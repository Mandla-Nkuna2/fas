import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';
  remember: boolean = false;

  constructor(
    public loading: LoadingService,
    public navCtrl: NavController,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private storage: Storage,
    private nav: NavController,
  ) {}

  ngOnInit() {}

  async login() {
    if (this.email === '') {
      return this.alert('email');
    }
    if (this.password === '') {
      return this.alert('password');
    }
    this.popUp.showLoading('Authenticating please wait...').then(() => {
      this.afAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((ss) => {
          this.afs
            .collection('users')
            .doc(ss.user.uid)
            .ref.get()
            .then((user) => {
              this.storage.set('user', user.data()).then(() => {
                this.popUp.dismissLoading().then(() => {
                  this.popUp.showToast('login success');
                  this.password = '';
                  this.nav.navigateForward('dashboard');
                });
              });
            });
        })
        .catch((error) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(error.message);
          });
        });
    });
  }

  async alert(name) {
    this.popUp.showAlert('Something went wrong. ', 'Please add ' + name);
  }
}
