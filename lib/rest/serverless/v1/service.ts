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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { AssetListInstance } from "./service/asset";
import { BuildListInstance } from "./service/build";
import { EnvironmentListInstance } from "./service/environment";
import { FunctionListInstance } from "./service/function";




/**
 * Options to pass to update a ServiceInstance
 *
 * @property { boolean } [includeCredentials] Whether to inject Account credentials into a function invocation context.
 * @property { string } [friendlyName] A descriptive string that you create to describe the Service resource. It can be a maximum of 255 characters.
 * @property { boolean } [uiEditable] Whether the Service resource\\\&#39;s properties and subresources can be edited via the UI. The default value is &#x60;false&#x60;.
 */
export interface ServiceContextUpdateOptions {
  includeCredentials?: boolean;
  friendlyName?: string;
  uiEditable?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } uniqueName A user-defined string that uniquely identifies the Service resource. It can be used as an alternative to the &#x60;sid&#x60; in the URL path to address the Service resource. This value must be 50 characters or less in length and be unique.
 * @property { string } friendlyName A descriptive string that you create to describe the Service resource. It can be a maximum of 255 characters.
 * @property { boolean } [includeCredentials] Whether to inject Account credentials into a function invocation context. The default value is &#x60;true&#x60;.
 * @property { boolean } [uiEditable] Whether the Service\\\&#39;s properties and subresources can be edited via the UI. The default value is &#x60;false&#x60;.
 */
export interface ServiceListInstanceCreateOptions {
  uniqueName: string;
  friendlyName: string;
  includeCredentials?: boolean;
  uiEditable?: boolean;
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
export interface ServiceListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface ServiceContext {

  assets: AssetListInstance;
  builds: BuildListInstance;
  environments: EnvironmentListInstance;
  functions: FunctionListInstance;

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>


  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  sid?: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _assets?: AssetListInstance;
  protected _builds?: BuildListInstance;
  protected _environments?: EnvironmentListInstance;
  protected _functions?: FunctionListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get assets(): AssetListInstance {
    this._assets = this._assets || AssetListInstance(this._version, this._solution.sid);
    return this._assets;
  }

  get builds(): BuildListInstance {
    this._builds = this._builds || BuildListInstance(this._version, this._solution.sid);
    return this._builds;
  }

  get environments(): EnvironmentListInstance {
    this._environments = this._environments || EnvironmentListInstance(this._version, this._solution.sid);
    return this._environments;
  }

  get functions(): FunctionListInstance {
    this._functions = this._functions || FunctionListInstance(this._version, this._solution.sid);
    return this._functions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<ServiceInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<ServiceInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.includeCredentials !== undefined) data['IncludeCredentials'] = serialize.bool(params.includeCredentials);
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.uiEditable !== undefined) data['UiEditable'] = serialize.bool(params.uiEditable);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, this._solution.sid));
    

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

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  include_credentials?: boolean | null;
  ui_editable?: boolean | null;
  domain_base?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V1, payload: ServicePayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.includeCredentials = payload.include_credentials;
    this.uiEditable = payload.ui_editable;
    this.domainBase = payload.domain_base;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Service resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Service resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the Service resource
   */
  friendlyName?: string | null;
  /**
   * A user-defined string that uniquely identifies the Service resource
   */
  uniqueName?: string | null;
  /**
   * Whether to inject Account credentials into a function invocation context
   */
  includeCredentials?: boolean | null;
  /**
   * Whether the Service resource\'s properties and subresources can be edited via the UI
   */
  uiEditable?: boolean | null;
  /**
   * The base domain name for this Service, which is a combination of the unique name and a randomly generated string
   */
  domainBase?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Service resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Service resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Service resource
   */
  url?: string | null;
  /**
   * The URLs of the Service\'s nested resources
   */
  links?: object | null;

  private get _proxy(): ServiceContext {
    this._context = this._context || new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
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
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the assets.
   */
  assets(): AssetListInstance {
    return this._proxy.assets;
  }

  /**
   * Access the builds.
   */
  builds(): BuildListInstance {
    return this._proxy.builds;
  }

  /**
   * Access the environments.
   */
  environments(): EnvironmentListInstance {
    return this._proxy.environments;
  }

  /**
   * Access the functions.
   */
  functions(): FunctionListInstance {
    return this._proxy.functions;
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
      friendlyName: this.friendlyName, 
      uniqueName: this.uniqueName, 
      includeCredentials: this.includeCredentials, 
      uiEditable: this.uiEditable, 
      domainBase: this.domainBase, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ServiceListInstance {
  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;


  /**
   * Create a ServiceInstance
   *
   * @param { ServiceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  create(params: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  create(params: any, callback?: any): Promise<ServiceInstance>



  /**
   * Streams ServiceInstance records from the API.
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
  each(callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ServiceInstance records from the API.
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
   * @param { ServiceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  getPage(params?: any, callback?: any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  list(params?: any, callback?: any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  page(params?: any, callback?: any): Promise<ServicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceSolution {
}

interface ServiceListInstanceImpl extends ServiceListInstance {}
class ServiceListInstanceImpl implements ServiceListInstance {
  _version?: V1;
  _solution?: ServiceSolution;
  _uri?: string;

}

export function ServiceListInstance(version: V1): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstanceImpl;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Services`;

  instance.create = function create(params: any, callback?: any): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.uniqueName === null || params.uniqueName === undefined) {
      throw new Error('Required parameter "params.uniqueName" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    const data: any = {};

    data['UniqueName'] = params.uniqueName;
    data['FriendlyName'] = params.friendlyName;
    if (params.includeCredentials !== undefined) data['IncludeCredentials'] = serialize.bool(params.includeCredentials);
    if (params.uiEditable !== undefined) data['UiEditable'] = serialize.bool(params.uiEditable);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<ServicePage> {
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
    
    operationPromise = operationPromise.then(payload => new ServicePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ServicePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ServicePage(this._version, payload, this._solution));
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


export class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
/**
* Initialize the ServicePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: ServiceSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ServiceInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ServicePayload): ServiceInstance {
    return new ServiceInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

