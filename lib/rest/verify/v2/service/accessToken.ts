/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



type AccessTokenFactorTypes = 'push';


/**
 * Options to pass to create a AccessTokenInstance
 *
 * @property { string } identity The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, and generated by your external system, such as your user\\\&#39;s UUID, GUID, or SID.
 * @property { AccessTokenFactorTypes } factorType 
 * @property { string } [factorFriendlyName] The friendly name of the factor that is going to be created with this access token
 * @property { number } [ttl] How long, in seconds, the access token is valid. Can be an integer between 60 and 300. Default is 60.
 */
export interface AccessTokenListInstanceCreateOptions {
  identity: string;
  factorType: AccessTokenFactorTypes;
  factorFriendlyName?: string;
  ttl?: number;
}

export interface AccessTokenContext {


  /**
   * Fetch a AccessTokenInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccessTokenInstance
   */
  fetch(callback?: (error: Error | null, item?: AccessTokenInstance) => any): Promise<AccessTokenInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AccessTokenContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class AccessTokenContextImpl implements AccessTokenContext {
  protected _solution: AccessTokenContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/AccessTokens/${sid}`;
  }

  fetch(callback?: any): Promise<AccessTokenInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AccessTokenInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface AccessTokenPayload extends AccessTokenResource{
}

interface AccessTokenResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_identity?: string | null;
  factor_type?: AccessTokenFactorTypes;
  factor_friendly_name?: string | null;
  token?: string | null;
  url?: string | null;
  ttl?: number | null;
  date_created?: Date | null;
}

export class AccessTokenInstance {
  protected _solution: AccessTokenContextSolution;
  protected _context?: AccessTokenContext;

  constructor(protected _version: V2, payload: AccessTokenPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entityIdentity = payload.entity_identity;
    this.factorType = payload.factor_type;
    this.factorFriendlyName = payload.factor_friendly_name;
    this.token = payload.token;
    this.url = payload.url;
    this.ttl = deserialize.integer(payload.ttl);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Access Token.
   */
  sid?: string | null;
  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * Verify Service Sid.
   */
  serviceSid?: string | null;
  /**
   * Unique external identifier of the Entity
   */
  entityIdentity?: string | null;
  factorType?: AccessTokenFactorTypes;
  /**
   * A human readable description of this factor.
   */
  factorFriendlyName?: string | null;
  /**
   * Generated access token.
   */
  token?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * How long, in seconds, the access token is valid.
   */
  ttl?: number | null;
  /**
   * The date this access token was created
   */
  dateCreated?: Date | null;

  private get _proxy(): AccessTokenContext {
    this._context = this._context || new AccessTokenContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AccessTokenInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccessTokenInstance
   */
  fetch(callback?: (error: Error | null, item?: AccessTokenInstance) => any): Promise<AccessTokenInstance>
     {
    return this._proxy.fetch(callback);
  }

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
      entityIdentity: this.entityIdentity, 
      factorType: this.factorType, 
      factorFriendlyName: this.factorFriendlyName, 
      token: this.token, 
      url: this.url, 
      ttl: this.ttl, 
      dateCreated: this.dateCreated
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface AccessTokenListInstance {
  (sid: string): AccessTokenContext;
  get(sid: string): AccessTokenContext;


  /**
   * Create a AccessTokenInstance
   *
   * @param { AccessTokenListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccessTokenInstance
   */
  create(params: AccessTokenListInstanceCreateOptions, callback?: (error: Error | null, item?: AccessTokenInstance) => any): Promise<AccessTokenInstance>;
  create(params: any, callback?: any): Promise<AccessTokenInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AccessTokenSolution {
  serviceSid?: string;
}

interface AccessTokenListInstanceImpl extends AccessTokenListInstance {}
class AccessTokenListInstanceImpl implements AccessTokenListInstance {
  _version?: V2;
  _solution?: AccessTokenSolution;
  _uri?: string;

}

export function AccessTokenListInstance(version: V2, serviceSid: string): AccessTokenListInstance {
  const instance = ((sid) => instance.get(sid)) as AccessTokenListInstanceImpl;

  instance.get = function get(sid): AccessTokenContext {
    return new AccessTokenContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/AccessTokens`;

  instance.create = function create(params: any, callback?: any): Promise<AccessTokenInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.identity === null || params.identity === undefined) {
      throw new Error('Required parameter "params.identity" missing.');
    }

    if (params.factorType === null || params.factorType === undefined) {
      throw new Error('Required parameter "params.factorType" missing.');
    }

    const data: any = {};

    data['Identity'] = params.identity;
    data['FactorType'] = params.factorType;
    if (params.factorFriendlyName !== undefined) data['FactorFriendlyName'] = params.factorFriendlyName;
    if (params.ttl !== undefined) data['Ttl'] = params.ttl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new AccessTokenInstance(operationVersion, payload, this._solution.serviceSid));
    

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



