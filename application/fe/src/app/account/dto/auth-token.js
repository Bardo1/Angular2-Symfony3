"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("../../common/dto/base");
var AuthToken = (function (_super) {
    __extends(AuthToken, _super);
    function AuthToken(value, createdDate, user) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.createdDate = createdDate;
        _this.user = user;
        return _this;
    }
    return AuthToken;
}(base_1.Base));
exports.AuthToken = AuthToken;
//# sourceMappingURL=auth-token.js.map