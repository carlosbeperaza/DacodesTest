import {Component, OnInit} from '@angular/core';

import {HttpService} from '@services/http.service';
import {ResponseInterface} from '@interfaces/response.interface';
import {MovieInterface} from '@interfaces/movie.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    gamesSegment = 'COM';
    movies: MovieInterface[] = [];
    spinner = true;

    constructor(
        public http: HttpService,
    ) {
    }

    ngOnInit() {
        this.getGames();
    }

    async getGames() {
        return await this.http.get('now_playing')
            .then((response: ResponseInterface) => {
                this.movies = response.results;
            })
            .finally(() => this.spinner = false);
    }

    doRefresh(event: any) {
        this.movies = [];
        this.getGames().finally(() => event.target.complete());
    }
}
