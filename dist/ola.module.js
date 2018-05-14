import { NgModule } from '@angular/core';
import { OlaComponent } from './components/ola_component';
import { OlaProvider } from './providers/ola_provider';
import { IonicModule } from 'ionic-angular';
var IonicOlaModule = (function () {
    function IonicOlaModule() {
    }
    IonicOlaModule.forRoot = function () {
        return {
            ngModule: IonicOlaModule,
            providers: [OlaProvider]
        };
    };
    IonicOlaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        OlaComponent
                    ],
                    exports: [
                        OlaComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    IonicOlaModule.ctorParameters = function () { return []; };
    return IonicOlaModule;
}());
export { IonicOlaModule };
//# sourceMappingURL=ola.module.js.map