"use strict";
/* eslint-disable arrow-body-style */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonIgnore = void 0;
const jsonIgnore = () => {
    return (target, propertyKey) => {
        Reflect.defineMetadata("ts-serializable:jsonIgnore", true, target, propertyKey);
    };
};
exports.jsonIgnore = jsonIgnore;
