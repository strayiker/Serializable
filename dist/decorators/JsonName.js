"use strict";
/* eslint-disable arrow-body-style */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonName = void 0;
const jsonName = (jsonPropertyName) => {
    return (target, propertyKey) => {
        Reflect.defineMetadata("ts-serializable:jsonName", jsonPropertyName, target, propertyKey);
    };
};
exports.jsonName = jsonName;
