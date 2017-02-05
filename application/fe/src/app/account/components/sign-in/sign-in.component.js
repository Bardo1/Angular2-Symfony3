"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var auth_token_repository_1 = require("../../repositories/auth-token.repository");
var credentials_1 = require("../../dto/credentials");
var SignInComponent = (function () {
    function SignInComponent(authTokenRepository, slimLoadingBarService, toastr) {
        this.authTokenRepository = authTokenRepository;
        this.slimLoadingBarService = slimLoadingBarService;
        this.toastr = toastr;
        this.model = new credentials_1.Credentials('', '');
        this.submitted = false;
        this.error = false;
    }
    SignInComponent.prototype.submitSignInForm = function (signInForm) {
        var _this = this;
        this.submitted = true;
        this.error = false;
        this.slimLoadingBarService.start();
        this.authTokenRepository.postCredentials(this.model)
            .finally(function () {
            _this.submitted = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (authToken) {
            console.info("Logged with token : " + authToken.value + " at : " + authToken.createdDate);
            _this.toastr.success('Logged', 'Success!');
            localStorage.setItem('auth-token', authToken.value);
        }, function (error) {
            console.error(error);
            _this.toastr.error('Ooooops', 'Error!');
            _this.error = true;
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        selector: 'sign-in',
        templateUrl: './sign-in.component.html'
    }),
    __metadata("design:paramtypes", [auth_token_repository_1.AuthTokenRepository, ng2_slim_loading_bar_1.SlimLoadingBarService, ng2_toastr_1.ToastsManager])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map