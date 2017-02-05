"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_root_module_1 = require("./app/app-root/app-root.module");
var core_1 = require("@angular/core");
var environment_dev_1 = require("./environments/environment.dev");
if (environment_dev_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_root_module_1.AppRootModule);
//# sourceMappingURL=main.js.map