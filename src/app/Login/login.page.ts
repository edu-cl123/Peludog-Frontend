import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) { }



  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  logear() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        success => {
          if (success) {
            this.router.navigate(['/tabs/tab3']);
          } else {
            this.presentAlert('Error de autenticación', 'Usuario o contraseña incorrectos.');
          }
        },
        error => {
          this.presentAlert('Error', 'Error al llamar al backend');
          console.error('Error al llamar al backend', error);
        }
      );
    } else {
      this.presentAlert('Campos vacíos', 'Por favor, ingrese su email y contraseña.');
    }
  }

  Registro() {
    // Lógica para redirigir a la página de registro
    this.router.navigate(['/tab2']);
  }
}
