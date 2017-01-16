import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseRepository<T> {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private slimLoadingBarService: SlimLoadingBarService) { 
    }

    /**
     * Gets all T entities.
     * @param apiUrl : the api url.
     * @returns A promise of array of T.
     */
    getAll(apiUrl: string):Promise<Array<T>> {
        var self = this;
        self.slimLoadingBarService.start();
        return this.http.get(apiUrl)
            .toPromise()
            .then(response => {
                self.slimLoadingBarService.complete();
                return response.json() as Array<T>;
            })
            .catch(error => this.handleError(error, self));
    }

    /**
     * Gets a single T entity.
     * @param apiUrl : the api url.
     * @param id : the identifier of the entity.
     * @returns A promise of T.
     */
    getEntity(apiUrl: string, id: number): Promise<T> {
        var self = this;
        self.slimLoadingBarService.start();
        return this.http.get(apiUrl + '/' + id)
            .toPromise()
            .then(response => {
                self.slimLoadingBarService.complete();
                return response.json() as T;
            })
            .catch(error => this.handleError(error, self));
    }

    /**
     * Posts a T entity.
     * @param apiUrl : the api url.
     * @param entity : the entity.
     * @returns A promise of T.
     */
    postEntity(apiUrl: string, entity: T): Promise<T> {
        var self = this;
        self.slimLoadingBarService.start();
        return this.http.post(apiUrl, JSON.stringify(entity), {headers: this.headers})
            .toPromise()
            .then(response => {
                self.slimLoadingBarService.complete();
                return response.json() as T;
            })
            .catch(error => this.handleError(error, self));
    }

    /**
     * Handles the error.
     * @param error : the erro.
     * @returns A promise of any.
     */
    private handleError(error: any, self: any): Promise<any> {
        console.error('An error occurred', error);
        self.slimLoadingBarService.reset();
        return Promise.reject(error.message || error);
    }
}