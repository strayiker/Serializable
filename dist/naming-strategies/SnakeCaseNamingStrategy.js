"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeCaseNamingStrategy = void 0;
class SnakeCaseNamingStrategy {
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
exports.SnakeCaseNamingStrategy = SnakeCaseNamingStrategy;
