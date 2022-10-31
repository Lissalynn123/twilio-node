/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");



export interface FunctionVersionContentListInstance {


  /**
   * Fetch a FunctionVersionContentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FunctionVersionContentInstance
   */
  fetch(callback?: (error: Error | null, item?: FunctionVersionContentInstance) => any): Promise<FunctionVersionContentInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FunctionVersionContentSolution {
  serviceSid?: string;
  functionSid?: string;
  sid?: string;
}

interface FunctionVersionContentListInstanceImpl extends FunctionVersionContentListInstance {}
class FunctionVersionContentListInstanceImpl implements FunctionVersionContentListInstance {
  _version?: V1;
  _solution?: FunctionVersionContentSolution;
  _uri?: string;

}

export function FunctionVersionContentListInstance(version: V1, serviceSid: string, functionSid: string, sid: string): FunctionVersionContentListInstance {
  const instance = {} as FunctionVersionContentListInstanceImpl;

  instance._version = version;
  instance._solution = { serviceSid, functionSid, sid };
  instance._uri = `/Services/${serviceSid}/Functions/${functionSid}/Versions/${sid}/Content`;

  instance.fetch = function fetch(callback?: any): Promise<FunctionVersionContentInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new FunctionVersionContentInstance(operationVersion, payload, this._solution.serviceSid, this._solution.functionSid, this._solution.sid));
    

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

interface FunctionVersionContentPayload extends FunctionVersionContentResource{
}

interface FunctionVersionContentResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  function_sid?: string | null;
  content?: string | null;
  url?: string | null;
}

export class FunctionVersionContentInstance {

  constructor(protected _version: V1, payload: FunctionVersionContentPayload, serviceSid: string, functionSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.functionSid = payload.function_sid;
    this.content = payload.content;
    this.url = payload.url;

  }

  /**
   * The unique string that identifies the Function Version resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Function Version resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Function Version resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Function that is the parent of the Function Version
   */
  functionSid?: string | null;
  /**
   * The content of the Function Version resource
   */
  content?: string | null;
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      functionSid: this.functionSid, 
      content: this.content, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


