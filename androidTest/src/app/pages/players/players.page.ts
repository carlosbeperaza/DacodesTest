import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PlayerPage} from '@pages/modals/player/player.page';
import {MovieInterface} from '@interfaces/movie.interface';
import {HttpService} from '@services/http.service';
import {ResponseInterface} from '@interfaces/response.interface';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-players',
    templateUrl: './players.page.html',
    styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

    movies: MovieInterface[] = [];
    spinner = true;
    baseUrlImg = environment.URL_IMG;
    page = 1;

    constructor(
        public modalController: ModalController,
        public http: HttpService,
    ) {
    }

    ngOnInit() {
        this.getGames();
    }


    async playerDetails(movie) {
        const modal = await this.modalController.create({
            component: PlayerPage,
            componentProps: {
                movie: movie,
            }
        });
        return await modal.present();
    }

    async getGames(event?) {
        return await this.http.get('now_playing', this.page)
            .then((response: ResponseInterface) => {
                this.movies.push(...response.results);
                this.page++;

                if (event) {
                    event.target.complete();
                    event.target.disable = response.results.length === 0;
                }
            })
            .finally(() => this.spinner = false);
    }

    doRefresh(event: any) {
        this.movies = [];
        this.page = 1;
        this.getGames().finally(() => event.target.complete());
    }

}
