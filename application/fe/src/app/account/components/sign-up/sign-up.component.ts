import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserRepository } from '../../repositories/user.repository';
import { User } from '../../dto/user';

@Component ({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html'
})

export class SignUpComponent {
    model = new User('','','','');

    submitted = false;
    error = false;

    constructor (private userRepository: UserRepository, private slimLoadingBarService: SlimLoadingBarService, private toastr: ToastsManager) {}

    submitSignUpForm(signUpForm: any): void {
        this.submitted = true;
        this.error = false;
        this.slimLoadingBarService.start();
        this.userRepository.postUser(this.model)
            .finally(() => {
                this.submitted = false;
                this.slimLoadingBarService.complete();
            })
            .subscribe(
                (user: User) => {
                    console.log(user);
                    this.toastr.success('Sign up', 'Success!');
                },
                (error: any) => {
                    console.error(error);
                    this.toastr.error('Ooooops', 'Error!');
                    this.error = true;
                }
        );
    }
}