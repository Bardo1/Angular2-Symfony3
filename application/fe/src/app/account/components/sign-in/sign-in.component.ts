import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthTokenRepository } from '../../repositories/auth-token.repository';
import { AuthToken } from '../../dto/auth-token';
import { Credentials } from '../../dto/credentials';

@Component ({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent {
    public model = new Credentials('','');
    public submitted = false;
    public error = false;

    constructor (private router: Router, private authTokenRepository: AuthTokenRepository, private slimLoadingBarService: SlimLoadingBarService, private toastr: ToastsManager) {}

    submitSignInForm(signInForm: any): void {
        this.submitted = true;
        this.error = false;
        this.slimLoadingBarService.start();
        this.authTokenRepository.postCredentials(this.model)
            .finally(() => {
                this.submitted = false;
                this.slimLoadingBarService.complete();
            })
            .subscribe(
                (authToken: AuthToken) => {
                    console.info("Logged with token : " + authToken.value + " at : " + authToken.createdDate);
                    localStorage.setItem('auth-token-id', authToken.id.toString());
                    localStorage.setItem('auth-token-value', authToken.value);
                    this.router.navigate(['/home']);
                },
                (error: any) => {
                    console.error(error);
                    this.toastr.error('Ooooops', 'Error!');
                    this.error = true;
                }
            );
    }   
}