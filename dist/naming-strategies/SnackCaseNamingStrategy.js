"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackCaseNamingStrategy = void 0;
class SnackCaseNamingStrategy {
    constructor() {
        // eslint-disable-next-line no-console
        console.warn("TS-Serializable: deprecated. Wrong name. Please use SnakeCaseNamingStrategy.");
    }
    fromJsonName(name) {
        return name.replace(/_\w/gu, (group) => group[1].toUpperCase());
    }
    toJsonName(name) {
        return name
            .split(/(?=[A-Z])/u)
            .join("_")
            .toLowerCase();
    }
}
exports.SnackCaseNamingStrategy = SnackCaseNamingStrategy;
