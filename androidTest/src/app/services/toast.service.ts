import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(
        public toastController: ToastController
    ) {
    }

    async presentToast(message, position, color, header?) {
        const toast = await this.toastController.create({
            header,
            message,
            position,
            color
        });

        await toast.present();
    }
}
