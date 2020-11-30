"use strict";
/* eslint-disable arrow-body-style */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonProperty = void 0;
const jsonProperty = (...args) => {
    return (target, propertyKey) => {
        Reflect.defineMetadata("ts-serializable:jsonTypes", args, target, propertyKey);
    };
};
exports.jsonProperty = jsonProperty;
