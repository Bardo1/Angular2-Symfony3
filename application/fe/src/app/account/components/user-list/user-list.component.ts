import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar'; 
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { JwtHelper } from 'angular2-jwt';
import { UserRepository } from '../../repositories/user.repository';
import { User } from '../../dto/user';

@Component ({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {

    constructor (private userRepository: UserRepository, private slimLoadingBarService: SlimLoadingBarService, public toastr: ToastsManager) {}

    ngOnInit(): void {
        this.slimLoadingBarService.start();
        this.userRepository.getAll()
            .finally(() => this.slimLoadingBarService.complete())
            .subscribe(
                (users: Array<User>) => console.log(users),
                (error: any) => console.error(error)

        );
        this.useJwtHelper();
    }

    jwtHelper: JwtHelper = new JwtHelper();

    useJwtHelper() {
        // For more informations about the token
        // var token = localStorage.getItem('auth-token-value');

        // console.log(
        //     this.jwtHelper.decodeToken(token),
        //     this.jwtHelper.getTokenExpirationDate(token),
        //     this.jwtHelper.isTokenExpired(token)
        // );
    }

}