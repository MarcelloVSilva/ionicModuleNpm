import { NgModule } from '@angular/core';
import { UserProvider } from './providers/user';
import { IonicModule } from 'ionic-angular';
var UserModule = (function () {
    function UserModule() {
    }
    UserModule.forRoot = function () {
        return {
            ngModule: UserModule,
            providers: [UserProvider]
        };
    };
    UserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    UserModule.ctorParameters = function () { return []; };
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=user.module.js.map