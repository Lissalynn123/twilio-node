/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");




/**
 * Options to pass to update a SigningKeyInstance
 *
 * @property { string } [friendlyName] 
 */
export interface SigningKeyContextUpdateOptions {
  friendlyName?: string;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SigningKeyListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: SigningKeyInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SigningKeyListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SigningKeyListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface SigningKeyContext {


  /**
   * Remove a SigningKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a SigningKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SigningKeyInstance
   */
  fetch(callback?: (error: Error | null, item?: SigningKeyInstance) => any): Promise<SigningKeyInstance>


  /**
   * Update a SigningKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SigningKeyInstance
   */
  update(callback?: (error: Error | null, item?: SigningKeyInstance) => any): Promise<SigningKeyInstance>;
  /**
   * Update a SigningKeyInstance
   *
   * @param { SigningKeyContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SigningKeyInstance
   */
  update(params: SigningKeyContextUpdateOptions, callback?: (error: Error | null, item?: SigningKeyInstance) => any): Promise<SigningKeyInstance>;
  update(params?: any, callback?: any): Promise<SigningKeyInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SigningKeyContextSolution {
  accountSid?: string;
  sid?: string;
}

export class SigningKeyContextImpl implements SigningKeyContext {
  protected _solution: SigningKeyContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/SigningKeys/${sid}.json`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<SigningKeyInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SigningKeyInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<SigningKeyInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new SigningKeyInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

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

interface SigningKeyPayload extends SigningKeyResource, Page.TwilioResponsePayload {
}

interface SigningKeyResource {
  sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
}

export class SigningKeyInstance {
  protected _solution: SigningKeyContextSolution;
  protected _context?: SigningKeyContext;

  constructor(protected _version: V2010, payload: SigningKeyPayload, accountSid: string, sid?: string) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);

    this._solution = { accountSid, sid: sid || this.sid };
  }

  sid?: string | null;
  friendlyName?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;

  private get _proxy(): SigningKeyContext {
    this._context = this._context || new SigningKeyContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SigningKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SigningKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SigningKeyInstance
   */
  fetch(callback?: (error: Error | null, item?: SigningKeyInstance) => any): Promise<SigningKeyInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SigningKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SigningKeyInstance
   */
  update(callback?: (error: Error | null, item?: SigningKeyInstance) => any): Promise<SigningKeyInstance>;
  /**
   * Update a SigningKeyInstance
   *
   * @param { SigningKeyContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SigningKeyInstance
   */
  update(params: SigningKeyContextUpdateOptions, callback?: (error: Error | null, item?: SigningKeyInstance) => any): Promise<SigningKeyInstance>;
  update(params?: any, callback?: any): Promise<SigningKeyInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      friendlyName: this.friendlyName, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface SigningKeyListInstance {
  (sid: string): SigningKeyContext;
  get(sid: string): SigningKeyContext;



  /**
   * Streams SigningKeyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: SigningKeyInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SigningKeyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SigningKeyListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SigningKeyListInstanceEachOptions, callback?: (item: SigningKeyInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SigningKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SigningKeyPage) => any): Promise<SigningKeyPage>;
  /**
   * Retrieve a single target page of SigningKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SigningKeyPage) => any): Promise<SigningKeyPage>;
  getPage(params?: any, callback?: any): Promise<SigningKeyPage>;
  /**
   * Lists SigningKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SigningKeyInstance[]) => any): Promise<SigningKeyInstance[]>;
  /**
   * Lists SigningKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SigningKeyListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SigningKeyListInstanceOptions, callback?: (error: Error | null, items: SigningKeyInstance[]) => any): Promise<SigningKeyInstance[]>;
  list(params?: any, callback?: any): Promise<SigningKeyInstance[]>;
  /**
   * Retrieve a single page of SigningKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SigningKeyPage) => any): Promise<SigningKeyPage>;
  /**
   * Retrieve a single page of SigningKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SigningKeyListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SigningKeyListInstancePageOptions, callback?: (error: Error | null, items: SigningKeyPage) => any): Promise<SigningKeyPage>;
  page(params?: any, callback?: any): Promise<SigningKeyPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SigningKeySolution {
  accountSid?: string;
}

interface SigningKeyListInstanceImpl extends SigningKeyListInstance {}
class SigningKeyListInstanceImpl implements SigningKeyListInstance {
  _version?: V2010;
  _solution?: SigningKeySolution;
  _uri?: string;

}

export function SigningKeyListInstance(version: V2010, accountSid: string): SigningKeyListInstance {
  const instance = ((sid) => instance.get(sid)) as SigningKeyListInstanceImpl;

  instance.get = function get(sid): SigningKeyContext {
    return new SigningKeyContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/SigningKeys.json`;

  instance.page = function page(params?: any, callback?: any): Promise<SigningKeyPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SigningKeyPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SigningKeyPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SigningKeyPage(this._version, payload, this._solution));
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


export class SigningKeyPage extends Page<V2010, SigningKeyPayload, SigningKeyResource, SigningKeyInstance> {
/**
* Initialize the SigningKeyPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: SigningKeySolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SigningKeyInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SigningKeyPayload): SigningKeyInstance {
    return new SigningKeyInstance(
    this._version,
    payload,
        this._solution.accountSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

