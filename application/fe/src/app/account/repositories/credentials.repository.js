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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var CredentialsRepository = (function () {
    function CredentialsRepository(http, slimLoadingBarService) {
        this.http = http;
        this.slimLoadingBarService = slimLoadingBarService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = "api/auth-tokens";
    }
    /**
     * Posts a credentials.
     * @param credentials : the credentials.
     * @returns A promise of any.
     */
    CredentialsRepository.prototype.postCredentials = function (credentials) {
        var self = this;
        self.slimLoadingBarService.start();
        return self.http.post(self.apiUrl, JSON.stringify(credentials), { headers: self.headers })
            .toPromise()
            .then(function (response) {
            self.slimLoadingBarService.complete();
            return response.json();
        })
            .catch(function (error) { return self.handleError(error, self); });
    };
    /**
     * Handles the error.
     * @param error : the error.
     * @returns A promise of any.
     */
    CredentialsRepository.prototype.handleError = function (error, self) {
        console.error('An error occurred', error);
        self.slimLoadingBarService.reset();
        return Promise.reject(error.message || error);
    };
    CredentialsRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], CredentialsRepository);
    return CredentialsRepository;
}());
exports.CredentialsRepository = CredentialsRepository;
//# sourceMappingURL=credentials.repository.js.map