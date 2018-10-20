import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { RegisterPage } from '../register/register';
import { ListsPage } from '../lists/lists';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public toastCtrl: ToastController) {
  }

  public login(): void {
    const params = {
      email: this.email,
      password: this.password
    }

    this.api.auth(params).subscribe((status: boolean) => {
      if(status){
      alert('Autenticado!');
      //cambiamos la pantalla que estamos viendo
      this.navCtrl.setRoot(ListsPage);
      } else {
      alert('error');
      }
  });
 }

 public register(): void {
  this.navCtrl.push(RegisterPage);
}




}
