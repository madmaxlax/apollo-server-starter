/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  camelCase,
  forEach,
  isPlainObject,
  snakeCase as LodashSnakeCase,
  forIn,
  includes,
} from 'lodash';

export const OMITTED_PATHS = ['_id'];

const DIGITS = /^\d+/i;
const BSON_ID = /^[a-f\d]{24}$/i;
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/i;

export const idLike = (key: string) => DIGITS.test(key) || BSON_ID.test(key) || UUID.test(key);

const mapKeysObj = (mapping: any) => (obj: { [x: string]: any }) => {
  const newObject: Record<string, any> = {};

  forEach(mapping, (value, key) => {
    newObject[value || key] = obj[key];
  });

  return newObject;
};

export const mapKeys = (mapping: any) => (data: any): any => {
  return Array.isArray(data) ? data.map(mapKeys(mapping)) : mapKeysObj(mapping)(data);
};

export const transformKeys = <T>(transformer: any) => (
  omittedPaths: string[] = OMITTED_PATHS,
  parent = ''
) => (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(transformKeys(transformer)(omittedPaths, parent));
  } else if (isPlainObject(data)) {
    const newObj: { [key: string]: any } = {};

    forIn(data, (value, key) => {
      const path = `${parent}${parent.length > 0 ? '.' : ''}${key}`;

      let newKey = key;
      let newValue = value;

      if (!includes(omittedPaths, path)) {
        newKey = idLike(key) ? key : transformer(key);
        newValue = transformKeys(transformer)(omittedPaths, path)(newValue);
      }

      newObj[newKey] = newValue;
    });

    return newObj;
  }

  return data;
};

export const camelize = (omittedPaths: string[] = OMITTED_PATHS, parent = '') => (data: any) => {
  return transformKeys(camelCase)(omittedPaths, parent)(data);
};

export const snakeCase = (omittedPaths: string[] = OMITTED_PATHS, parent = '') => (data: any) => {
  return transformKeys(LodashSnakeCase)(omittedPaths, parent)(data);
};

