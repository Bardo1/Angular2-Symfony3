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
var http_1 = require("@angular/http");
var environment_dev_1 = require("../../../environments/environment.dev");
var AuthTokenRepository = (function () {
    function AuthTokenRepository(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.controller = 'auth-tokens';
    }
    /**
     * Posts a credentials.
     * @param credentials : the credentials.
     * @returns A Observable of AuthToken.
     */
    AuthTokenRepository.prototype.postCredentials = function (credentials) {
        return this.http.post(environment_dev_1.environment.baseUrl + this.controller, JSON.stringify(credentials), { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    return AuthTokenRepository;
}());
AuthTokenRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthTokenRepository);
exports.AuthTokenRepository = AuthTokenRepository;
//# sourceMappingURL=auth-token.repository.js.map