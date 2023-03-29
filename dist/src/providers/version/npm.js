"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("./files");
/* NPM */
var NPM = /** @class */ (function (_super) {
    __extends(NPM, _super);
    function NPM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NPM.prototype.getFiles = function () {
        return {
            'package.json': ['"version":\\s*"([^"]*?)"', '"version": "[version]"', "mi"],
            'package-lock.json': ['"version":\\s*"([^"]*?)"', '"version": "[version]"', "mi"]
        };
    };
    return NPM;
}(files_1.default));
/* EXPORT */
exports.default = NPM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy92ZXJzaW9uL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBRVosaUNBQTRCO0FBRTVCLFNBQVM7QUFFVDtJQUFrQix1QkFBSztJQUF2Qjs7SUFXQSxDQUFDO0lBVEMsc0JBQVEsR0FBUjtRQUVFLE9BQU87WUFDTCxjQUFjLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUM7WUFDNUUsbUJBQW1CLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUM7U0FDbEYsQ0FBQztJQUVKLENBQUM7SUFFSCxVQUFDO0FBQUQsQ0FBQyxBQVhELENBQWtCLGVBQUssR0FXdEI7QUFFRCxZQUFZO0FBRVosa0JBQWUsR0FBRyxDQUFDIn0=