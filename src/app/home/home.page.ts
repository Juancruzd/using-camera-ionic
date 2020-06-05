import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ///variable donde se guardara la foto capturada
  foto: any;
  constructor(private camera: Camera) { }
  //funcion para tomar fotografia
  tomarFoto() {
    const options: CameraOptions = { 
      //CALIDAD
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      //DEFINIR EL FORMATO DE LA IMAGEN
      encodingType: this.camera.EncodingType.JPEG, 
      //DEFINIMOS QUE ES UNA IMAGEN
      mediaType: this.camera.MediaType.PICTURE  
    }
    //se obtiene la foto de la camara y se ingresa ala variable foto
    this.camera.getPicture(options).then((imageData) => {
      ///set photo on variable
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
