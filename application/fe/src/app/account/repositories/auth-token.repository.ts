import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { AuthToken } from '../dto/auth-token';
import { Credentials } from '../dto/credentials';
import { environment } from '../../../environments/environment.dev';

@Injectable()
export class AuthTokenRepository {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'auth-tokens';

    constructor(private http: Http, private authHttp: AuthHttp) {}

    /**
     * Posts a credentials.
     * @param credentials : the credentials.
     * @returns A Observable of AuthToken.
     */
    postCredentials(credentials: Credentials): Observable<AuthToken> {
        return this.http.post(environment.baseUrl + this.controller, JSON.stringify(credentials), {headers: this.headers})
            .map((response: Response) => <AuthToken>response.json());
    }

    deleteAuthToken(): Observable<any> {
        let authTokenId = localStorage.getItem('auth-token-id');
        return this.authHttp.delete(environment.baseUrl + this.controller + '/' + authTokenId)
            .map((response: Response) => <any>response.json());
    }
}