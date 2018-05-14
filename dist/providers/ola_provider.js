import { Injectable } from '@angular/core';
var OlaProvider = (function () {
    function OlaProvider() {
    }
    OlaProvider.prototype.Ola = function () {
        return 'Ola galerinha do bem';
    };
    OlaProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    OlaProvider.ctorParameters = function () { return []; };
    return OlaProvider;
}());
export { OlaProvider };
//# sourceMappingURL=ola_provider.js.map