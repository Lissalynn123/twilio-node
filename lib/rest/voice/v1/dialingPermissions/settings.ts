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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



/**
 * Options to pass to update a SettingsInstance
 *
 * @property { boolean } [dialingPermissionsInheritance] &#x60;true&#x60; for the sub-account to inherit voice dialing permissions from the Master Project; otherwise &#x60;false&#x60;.
 */
export interface SettingsListInstanceUpdateOptions {
  dialingPermissionsInheritance?: boolean;
}

export interface SettingsListInstance {


  /**
   * Fetch a SettingsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SettingsInstance
   */
  fetch(callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>


  /**
   * Update a SettingsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SettingsInstance
   */
  update(callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
  /**
   * Update a SettingsInstance
   *
   * @param { SettingsListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SettingsInstance
   */
  update(params: SettingsListInstanceUpdateOptions, callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
  update(params?: any, callback?: any): Promise<SettingsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SettingsSolution {
}

interface SettingsListInstanceImpl extends SettingsListInstance {}
class SettingsListInstanceImpl implements SettingsListInstance {
  _version?: V1;
  _solution?: SettingsSolution;
  _uri?: string;

}

export function SettingsListInstance(version: V1): SettingsListInstance {
  const instance = {} as SettingsListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Settings`;

  instance.fetch = function fetch(callback?: any): Promise<SettingsInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SettingsInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<SettingsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.dialingPermissionsInheritance !== undefined) data['DialingPermissionsInheritance'] = serialize.bool(params.dialingPermissionsInheritance);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new SettingsInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface SettingsPayload extends SettingsResource{
}

interface SettingsResource {
  dialing_permissions_inheritance?: boolean | null;
  url?: string | null;
}

export class SettingsInstance {

  constructor(protected _version: V1, payload: SettingsPayload) {
    this.dialingPermissionsInheritance = payload.dialing_permissions_inheritance;
    this.url = payload.url;

  }

  /**
   * `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`
   */
  dialingPermissionsInheritance?: boolean | null;
  /**
   * The absolute URL of this resource
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dialingPermissionsInheritance: this.dialingPermissionsInheritance, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


