"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// NG-MODULES
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// MODULES
var app_root_routing_module_1 = require("./app-root-routing.module");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
// APP MODULES 
var account_module_1 = require("../account/account.module");
var common_module_1 = require("../common/common.module");
var home_module_1 = require("../home/home.module");
// COMPONENTS
var app_root_component_1 = require("./components/app-root.component");
var navbar_component_1 = require("../common/components/navbar/navbar.component");
// PROVIDERS
var AppRootModule = (function () {
    function AppRootModule() {
    }
    return AppRootModule;
}());
AppRootModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_root_routing_module_1.AppRootRoutingModule,
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
            account_module_1.AccountModule,
            common_module_1.CommonModule,
            home_module_1.HomeModule
        ],
        declarations: [
            app_root_component_1.AppRootComponent,
            navbar_component_1.NavbarComponent
        ],
        providers: [],
        bootstrap: [
            app_root_component_1.AppRootComponent
        ]
    })
], AppRootModule);
exports.AppRootModule = AppRootModule;
//# sourceMappingURL=app-root.module.js.map