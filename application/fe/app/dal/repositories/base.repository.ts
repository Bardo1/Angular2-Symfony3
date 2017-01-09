import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseRepository<T> {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    /**
     * Gets all T entities.
     * @param apiUrl : the api url.
     * @returns A promise of array of T.
     */
    getAll(apiUrl: string):Promise<Array<T>> {
        return this.http.get(apiUrl)
            .toPromise()
            .then(response => response.json() as Array<T>)
            .catch(this.handleError);
    }

    /**
     * Gets a single T entity.
     * @param apiUrl : the api url.
     * @param id : the identifier of the entity.
     * @returns A promise of T.
     */
    getEntity(apiUrl: string, id: number): Promise<T> {
        return this.http.get(apiUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    /**
     * Posts a T entity.
     * @param apiUrl : the api url.
     * @param entity : the entity.
     * @returns A promise of T.
     */
    postEntity(apiUrl: string, entity: T): Promise<T> {
        return this.http.post(apiUrl, JSON.stringify(entity), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    /**
     * Handles the error.
     * @param error : the erro.
     * @returns A promise of any.
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}