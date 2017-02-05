"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_repository_1 = require("../../common/repositories/base.repository");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controller = 'users';
        return _this;
    }
    UserRepository.prototype.postUser = function (entity) {
        return _super.prototype.postEntity.call(this, this.controller, entity);
    };
    UserRepository.prototype.putUser = function (entity) {
        return _super.prototype.putEntity.call(this, this.controller, entity);
    };
    return UserRepository;
}(base_repository_1.BaseRepository));
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map