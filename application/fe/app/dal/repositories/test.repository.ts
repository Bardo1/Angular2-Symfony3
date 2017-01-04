import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Test } from '../entities/test';

@Injectable()
export class TestRepository {

    private api_url = 'api/test';

    constructor(private http: Http) { }

    getTest(): Promise<Test> {
        return this.http.get(this.api_url)
            .toPromise()
            .then(response => response.json() as Test)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}