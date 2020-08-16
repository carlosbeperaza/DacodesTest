import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {environment} from '../../../../environments/environment';
import {HttpService} from '@services/http.service';
import {MovieDetailInterface} from '@interfaces/movie-detail.interface';
import {MovieInterface} from '@interfaces/movie.interface';

@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

    theMovie: MovieInterface;
    baseUrlImg = environment.URL_IMG;
    spinner = true;
    movieDetail: MovieDetailInterface;

    constructor(
        public modalController: ModalController,
        public http: HttpService,
    ) {
    }

    ngOnInit() {
        this.getGamesDetail();
    }

    async getGamesDetail() {
        if (this.theMovie) {
            this.spinner = true;
            return await this.http.getById(this.theMovie.id)
                .then((response: MovieDetailInterface) => {
                    this.movieDetail = response;
                })
                .finally(() => this.spinner = false);
        }
    }

}
