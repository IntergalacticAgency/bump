"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var specialist_1 = require("specialist");
/* EXIT */
function exit(message, code) {
    if (message === void 0) { message = 'An error occurred!'; }
    if (code === void 0) { code = 1; }
    console.error(specialist_1.color.red(message));
    process.exit(code);
}
/* EXPORT */
exports.default = exit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9leGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOztBQUVaLHlDQUFpQztBQUVqQyxVQUFVO0FBRVYsU0FBUyxJQUFJLENBQUcsT0FBc0MsRUFBRSxJQUFnQjtJQUF4RCx3QkFBQSxFQUFBLDhCQUFzQztJQUFFLHFCQUFBLEVBQUEsUUFBZ0I7SUFFdEUsT0FBTyxDQUFDLEtBQUssQ0FBRyxrQkFBSyxDQUFDLEdBQUcsQ0FBRyxPQUFPLENBQUUsQ0FBRSxDQUFDO0lBRXhDLE9BQU8sQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFFLENBQUM7QUFFeEIsQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxJQUFJLENBQUMifQ==