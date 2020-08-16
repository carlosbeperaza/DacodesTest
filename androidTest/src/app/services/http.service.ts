import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private URL_API: string = environment.URL_MOVIE;
    private API_KEY: string = environment.API_KEY;

    constructor(private http: HttpClient) {
    }

    get = async (url: string, page: number) => await this.http.get(`${this.URL_API}/${url}?api_key=${(this.API_KEY)}&page=${page}`).toPromise();
}
