/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { CountryListInstance } from "./phoneNumber/country";

export interface PhoneNumberListInstance {
  countries: CountryListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberSolution {}

interface PhoneNumberListInstanceImpl extends PhoneNumberListInstance {}
class PhoneNumberListInstanceImpl implements PhoneNumberListInstance {
  _version?: V1;
  _solution?: PhoneNumberSolution;
  _uri?: string;

  _countries?: CountryListInstance;
}

export function PhoneNumberListInstance(version: V1): PhoneNumberListInstance {
  const instance = {} as PhoneNumberListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/PhoneNumbers`;

  Object.defineProperty(instance, "countries", {
    get: function countries() {
      if (!this._countries) {
        this._countries = CountryListInstance(this._version);
      }
      return this._countries;
    },
  });

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}
