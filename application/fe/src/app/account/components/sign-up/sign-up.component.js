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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var user_repository_1 = require("../../repositories/user.repository");
var user_1 = require("../../dto/user");
var SignUpComponent = (function () {
    function SignUpComponent(userRepository, toastr) {
        this.userRepository = userRepository;
        this.toastr = toastr;
        this.model = new user_1.User('', '', '', '');
        this.submitted = false;
        this.error = false;
    }
    SignUpComponent.prototype.submitSignUpForm = function (signUpForm) {
        var _this = this;
        this.submitted = true;
        this.error = false;
        this.userRepository.postUser(this.model).subscribe(function () { return _this.submitted = false; }, function (error) { return console.error(error); });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'sign-up',
        templateUrl: './sign-up.component.html'
    }),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, ng2_toastr_1.ToastsManager])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map