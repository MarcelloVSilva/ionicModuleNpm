import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var HTML_TEMPLATE = "\n<ion-header>\n  <ion-navbar color=\"primary\">\n    <ion-title>\n      Teste ola npm ionic marcello\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n \n<div class=\"special-text\">Fala povo bonito</div>\n  <button ion-button full icon-left (click)=\"leavePage()\">\n    <ion-icon name=\"close\"></ion-icon>\n  Close the Page</button>\n</ion-content>\n";
var CSS_STYLE = "\n.special-text {\n    font-weight: 800;\n    font-size: 15pt;\n    text-align: center;\n    color: #0000FF;\n}\n";
var OlaComponent = (function () {
    function OlaComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    OlaComponent.prototype.leavePage = function () {
        this.navCtrl.pop();
    };
    OlaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ola_component',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE]
                },] },
    ];
    /** @nocollapse */
    OlaComponent.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return OlaComponent;
}());
export { OlaComponent };
//# sourceMappingURL=ola_component.js.map