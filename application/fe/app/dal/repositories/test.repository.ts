import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Test } from '../dto/test';

@Injectable()
export class TestRepository {

    private headers = new Headers({'Content-Type': 'application/json'});
    private api_url = 'api/tests';

    constructor(private http: Http) { }

    getAllTests(): Promise<Array<Test>> {
        return this.http.get(this.api_url)
            .toPromise()
            .then(response => response.json() as Array<Test>)
            .catch(this.handleError);
    }

    getTest(key: string): Promise<Test> {
        return this.http.get(this.api_url + '/' + key)
            .toPromise()
            .then(response => response.json() as Test)
            .catch(this.handleError);
    }

    postTest(entity: Test): Promise<Test> {
        return this.http.post(this.api_url, JSON.stringify(entity), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Test)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}