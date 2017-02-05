"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("../../common/dto/base");
var User = (function (_super) {
    __extends(User, _super);
    function User(email, plainPassword, firstname, lastname) {
        var _this = _super.call(this) || this;
        _this.email = email;
        _this.plainPassword = plainPassword;
        _this.firstname = firstname;
        _this.lastname = lastname;
        return _this;
    }
    return User;
}(base_1.Base));
exports.User = User;
//# sourceMappingURL=user.js.map