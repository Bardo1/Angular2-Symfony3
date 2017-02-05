import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { User } from '../dto/user';
import { environment } from '../../../environments/environment.dev';

@Injectable()
export class UserRepository {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'users';

    constructor(private http: Http, public authHttp: AuthHttp) {}

    getAll(): Observable<Array<User>> {
        return this.authHttp.get(environment.baseUrl + this.controller)
            .map((response: Response) => <Array<User>>response.json());
    }

    /**
     * Posts a user.
     * @param user : the user.
     * @returns A Observable of User.
     */
    postUser(user: User): Observable<User> {
        return this.http.post(environment.baseUrl + this.controller, JSON.stringify(user), {headers: this.headers})
            .map((response: Response) => <User>response.json());
    }

    // putUser(user: User): Observable<User> {
    //     return this.baseRepository.putEntity(this.controller, user);
    // }
}