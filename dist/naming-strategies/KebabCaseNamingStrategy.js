"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KebabCaseNamingStrategy = void 0;
class KebabCaseNamingStrategy {
    fromJsonName(name) {
        return name.replace(/-\w/gu, (group) => group[1].toUpperCase());
    }
    toJsonName(name) {
        return name
            .split(/(?=[A-Z])/u)
            .join("-")
            .toLowerCase();
    }
}
exports.KebabCaseNamingStrategy = KebabCaseNamingStrategy;
