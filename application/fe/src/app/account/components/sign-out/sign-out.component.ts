import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthTokenRepository } from '../../repositories/auth-token.repository';

@Component ({
    selector: 'sign-out',
    templateUrl: './sign-out.component.html'
})

export class SignOutComponent implements OnInit {

    constructor (private router: Router, private authTokenRepository: AuthTokenRepository, private slimLoadingBarService: SlimLoadingBarService) {}

    ngOnInit(): void {
        this.slimLoadingBarService.start();
        this.authTokenRepository.deleteAuthToken()
            .finally(() => {
                localStorage.clear();
                this.slimLoadingBarService.complete();
            })
            .subscribe(
                () => this.router.navigate(['home']),
                (error: any) => console.error(error)
            );
    }
}