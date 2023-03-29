"use strict";
/* IMPORT */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* CONFIG */
var Config = {
    merge: function (object) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        return _.mergeWith.apply(_, __spreadArrays([object], sources, [function (prev, next) {
                if (!_.isArray(prev) || !_.isArray(next))
                    return;
                return next;
            }]));
    }
};
/* EXPORT */
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7O0FBRVosMEJBQTRCO0FBRTVCLFlBQVk7QUFFWixJQUFNLE1BQU0sR0FBRztJQUViLEtBQUssWUFBRyxNQUFNO1FBQUUsaUJBQVU7YUFBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1lBQVYsZ0NBQVU7O1FBRXpCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsT0FBWCxDQUFDLGtCQUFhLE1BQU0sR0FBSyxPQUFPLEdBQUUsVUFBRSxJQUFJLEVBQUUsSUFBSTtnQkFFbkQsSUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUcsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFHLElBQUksQ0FBRTtvQkFBRyxPQUFPO2dCQUV6RCxPQUFPLElBQUksQ0FBQztZQUVkLENBQUMsSUFBRTtJQUVMLENBQUM7Q0FFRCxDQUFDO0FBRUYsWUFBWTtBQUVaLGtCQUFlLE1BQU0sQ0FBQyJ9