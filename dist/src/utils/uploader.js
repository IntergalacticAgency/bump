"use strict";
/* IMPORT */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar = require("chokidar");
var promise_resolve_timeout_1 = require("promise-resolve-timeout");
var specialist_1 = require("specialist");
var file_1 = require("./file");
var log_1 = require("./log");
/* UPLOADER */
var Uploader = /** @class */ (function () {
    /* CONSTRUCTOR */
    function Uploader(options) {
        this.uploading = {};
        this.reuploading = {};
        this.uploadedNr = 0;
        this.uploadingNr = 0;
        this.options = options;
    }
    /* WATCHING */
    Uploader.prototype._watchHandler = function (method) {
        var _this = this;
        return function (filePath) {
            _this.keepalive();
            method.call(_this, filePath);
        };
    };
    Uploader.prototype.watch = function () {
        this.unwatch();
        this.watcher = chokidar.watch(this.options.globs, { ignored: /node_modules/ })
            .on('add', this._watchHandler(this.upload))
            .on('change', this._watchHandler(this.reupload))
            .on('unlink', this._watchHandler(this.reupload));
    };
    Uploader.prototype.unwatch = function () {
        var _a;
        (_a = this.watcher) === null || _a === void 0 ? void 0 : _a.close();
    };
    /* UPLOADING */
    Uploader.prototype.upload = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isUploading(filePath))
                            return [2 /*return*/, this.reupload(filePath)];
                        if (!file_1.default.exists(filePath))
                            return [2 /*return*/];
                        log_1.default("Uploading \"" + specialist_1.color.bold(filePath) + "\"");
                        this.uploadingNr++;
                        return [4 /*yield*/, (this.uploading[filePath] = this.options.upload(filePath))];
                    case 1:
                        _a.sent();
                        this.uploadingNr--;
                        this.uploadedNr++;
                        this.finish();
                        return [2 /*return*/];
                }
            });
        });
    };
    Uploader.prototype.isUploading = function (filePath) {
        return filePath in this.uploading;
    };
    Uploader.prototype.reupload = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var asset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isReuploading(filePath))
                            return [2 /*return*/];
                        if (!this.isUploading(filePath))
                            return [2 /*return*/, this.upload(filePath)];
                        log_1.default("Reuploading \"" + specialist_1.color.bold(filePath) + "\" because it changed on disk");
                        this.uploadingNr++;
                        this.uploadedNr--;
                        return [4 /*yield*/, this.uploading[filePath]];
                    case 1:
                        asset = _a.sent();
                        return [4 /*yield*/, (this.reuploading[filePath] = this.options.cancel(filePath, asset))];
                    case 2:
                        _a.sent();
                        delete this.uploading[filePath];
                        delete this.reuploading[filePath];
                        this.uploadingNr--;
                        return [2 /*return*/, this.upload(filePath)];
                }
            });
        });
    };
    Uploader.prototype.isReuploading = function (filePath) {
        return filePath in this.reuploading;
    };
    /* LIFECYCLE */
    Uploader.prototype.keepalive = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 5000; }
        var thisWait = promise_resolve_timeout_1.default(timeout, function () {
            if (_this.wait !== thisWait)
                return;
            _this.wait = false;
        });
        this.wait = thisWait;
    };
    Uploader.prototype.start = function () {
        var _this = this;
        this.watch();
        this.keepalive();
        return new Promise(function (resolve) {
            _this.exit = function () { return resolve(); };
        });
    };
    Uploader.prototype.finish = function (force) {
        var _this = this;
        if (!force && (this.options.filesNr > 0 ? this.uploadedNr !== this.options.filesNr : !!this.uploadingNr))
            return;
        if (this.wait) {
            this.wait.then(function () { return _this.finish(); });
        }
        else {
            this.unwatch();
            this.exit();
        }
    };
    return Uploader;
}());
/* EXPORT */
exports.default = Uploader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvdXBsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosbUNBQXFDO0FBRXJDLG1FQUE0QztBQUM1Qyx5Q0FBaUM7QUFDakMsK0JBQTBCO0FBQzFCLDZCQUF3QjtBQUd4QixjQUFjO0FBRWQ7SUFnQkUsaUJBQWlCO0lBRWpCLGtCQUFjLE9BQW9EO1FBWGxFLGNBQVMsR0FBMEMsRUFBRSxDQUFDO1FBQ3RELGdCQUFXLEdBQTBDLEVBQUUsQ0FBQztRQUV4RCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBU3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRXpCLENBQUM7SUFFRCxjQUFjO0lBRWQsZ0NBQWEsR0FBYixVQUFnQixNQUFnQjtRQUFoQyxpQkFVQztRQVJDLE9BQU8sVUFBRSxRQUFnQjtZQUV2QixLQUFJLENBQUMsU0FBUyxFQUFHLENBQUM7WUFFbEIsTUFBTSxDQUFDLElBQUksQ0FBRyxLQUFJLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFFakMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFFRSxJQUFJLENBQUMsT0FBTyxFQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFFO2FBQ3pELEVBQUUsQ0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUU7YUFDaEQsRUFBRSxDQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFHLElBQUksQ0FBQyxRQUFRLENBQUUs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