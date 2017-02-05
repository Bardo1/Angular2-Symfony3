"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var options = new ng2_toastr_1.ToastOptions({
    animate: 'flyRight',
    positionClass: 'toast-bottom-right',
});
var ToastrModule = (function () {
    function ToastrModule() {
    }
    return ToastrModule;
}());
ToastrModule = __decorate([
    core_1.NgModule({
        imports: [ng2_toastr_1.ToastModule.forRoot(options)],
        exports: [ng2_toastr_1.ToastModule]
    })
], ToastrModule);
exports.ToastrModule = ToastrModule;
//# sourceMappingURL=toastr.module.js.map