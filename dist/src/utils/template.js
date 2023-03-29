"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* TEMPLATE */
var Template = {
    getRegex: _.memoize(function (token) {
        return new RegExp("\\[" + _.escapeRegExp(token) + "\\]", 'g');
    }),
    render: function (template, tokens) {
        if (tokens === void 0) { tokens = {}; }
        _.forOwn(tokens, function (value, token) {
            var re = Template.getRegex(token);
            template = template.replace(re, value);
        });
        return template;
    }
};
/* EXPORT */
exports.default = Template;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosMEJBQTRCO0FBRTVCLGNBQWM7QUFFZCxJQUFNLFFBQVEsR0FBRztJQUVmLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFHLFVBQUUsS0FBYTtRQUVuQyxPQUFPLElBQUksTUFBTSxDQUFHLFFBQU0sQ0FBQyxDQUFDLFlBQVksQ0FBRyxLQUFLLENBQUUsUUFBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO0lBRWpFLENBQUMsQ0FBQztJQUVGLE1BQU0sRUFBTixVQUFTLFFBQWdCLEVBQUUsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUVwQyxDQUFDLENBQUMsTUFBTSxDQUFHLE1BQU0sRUFBRSxVQUFFLEtBQWEsRUFBRSxLQUFhO1lBRS9DLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUcsS0FBSyxDQUFFLENBQUM7WUFFdkMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUcsRUFBRSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBRTVDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFFbEIsQ0FBQztDQUVGLENBQUM7QUFFRixZQUFZO0FBRVosa0JBQWUsUUFBUSxDQUFDIn0=