"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PascalCaseNamingStrategy = void 0;
class PascalCaseNamingStrategy {
    fromJsonName(name) {
        return name.slice(0, 1).toLowerCase() + name.slice(1, name.length);
    }
    toJsonName(name) {
        return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
    }
}
exports.PascalCaseNamingStrategy = PascalCaseNamingStrategy;
