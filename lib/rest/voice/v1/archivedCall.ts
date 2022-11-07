/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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

export interface ArchivedCallContext {
  /**
   * Remove a ArchivedCallInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ArchivedCallContextSolution {
  date?: Date;
  sid?: string;
}

export class ArchivedCallContextImpl implements ArchivedCallContext {
  protected _solution: ArchivedCallContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, date: Date, sid: string) {
    this._solution = { date, sid };
    this._uri = `/Archives/${date}/Calls/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ArchivedCallListInstance {
  (date: Date, sid: string): ArchivedCallContext;
  get(date: Date, sid: string): ArchivedCallContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ArchivedCallSolution {}

interface ArchivedCallListInstanceImpl extends ArchivedCallListInstance {}
class ArchivedCallListInstanceImpl implements ArchivedCallListInstance {
  _version?: V1;
  _solution?: ArchivedCallSolution;
  _uri?: string;
}

export function ArchivedCallListInstance(
  version: V1
): ArchivedCallListInstance {
  const instance = ((date, sid) =>
    instance.get(date, sid)) as ArchivedCallListInstanceImpl;

  instance.get = function get(date, sid): ArchivedCallContext {
    return new ArchivedCallContextImpl(version, date, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
