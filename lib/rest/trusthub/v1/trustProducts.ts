/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
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
import { TrustProductsChannelEndpointAssignmentListInstance } from "./trustProducts/trustProductsChannelEndpointAssignment";
import { TrustProductsEntityAssignmentsListInstance } from "./trustProducts/trustProductsEntityAssignments";
import { TrustProductsEvaluationsListInstance } from "./trustProducts/trustProductsEvaluations";



type TrustProductStatus = 'draft'|'pending-review'|'in-review'|'twilio-rejected'|'twilio-approved';


/**
 * Options to pass to update a TrustProductsInstance
 *
 * @property { TrustProductStatus } [status] 
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [email] The email address that will receive updates when the Customer-Profile resource changes status.
 */
export interface TrustProductsContextUpdateOptions {
  status?: TrustProductStatus;
  statusCallback?: string;
  friendlyName?: string;
  email?: string;
}

/**
 * Options to pass to create a TrustProductsInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { string } email The email address that will receive updates when the Customer-Profile resource changes status.
 * @property { string } policySid The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 */
export interface TrustProductsListInstanceCreateOptions {
  friendlyName: string;
  email: string;
  policySid: string;
  statusCallback?: string;
}
/**
 * Options to pass to each
 *
 * @property { TrustProductStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
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
export interface TrustProductsListInstanceEachOptions {
  status?: TrustProductStatus;
  friendlyName?: string;
  policySid?: string;
  pageSize?: number;
  callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { TrustProductStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TrustProductsListInstanceOptions {
  status?: TrustProductStatus;
  friendlyName?: string;
  policySid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { TrustProductStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TrustProductsListInstancePageOptions {
  status?: TrustProductStatus;
  friendlyName?: string;
  policySid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface TrustProductsContext {

  trustProductsChannelEndpointAssignment: TrustProductsChannelEndpointAssignmentListInstance;
  trustProductsEntityAssignments: TrustProductsEntityAssignmentsListInstance;
  trustProductsEvaluations: TrustProductsEvaluationsListInstance;

  /**
   * Remove a TrustProductsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a TrustProductsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>


  /**
   * Update a TrustProductsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  update(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  /**
   * Update a TrustProductsInstance
   *
   * @param { TrustProductsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  update(params: TrustProductsContextUpdateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  update(params?: any, callback?: any): Promise<TrustProductsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsContextSolution {
  sid?: string;
}

export class TrustProductsContextImpl implements TrustProductsContext {
  protected _solution: TrustProductsContextSolution;
  protected _uri: string;

  protected _trustProductsChannelEndpointAssignment?: TrustProductsChannelEndpointAssignmentListInstance;
  protected _trustProductsEntityAssignments?: TrustProductsEntityAssignmentsListInstance;
  protected _trustProductsEvaluations?: TrustProductsEvaluationsListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/TrustProducts/${sid}`;
  }

  get trustProductsChannelEndpointAssignment(): TrustProductsChannelEndpointAssignmentListInstance {
    this._trustProductsChannelEndpointAssignment = this._trustProductsChannelEndpointAssignment || TrustProductsChannelEndpointAssignmentListInstance(this._version, this._solution.sid);
    return this._trustProductsChannelEndpointAssignment;
  }

  get trustProductsEntityAssignments(): TrustProductsEntityAssignmentsListInstance {
    this._trustProductsEntityAssignments = this._trustProductsEntityAssignments || TrustProductsEntityAssignmentsListInstance(this._version, this._solution.sid);
    return this._trustProductsEntityAssignments;
  }

  get trustProductsEvaluations(): TrustProductsEvaluationsListInstance {
    this._trustProductsEvaluations = this._trustProductsEvaluations || TrustProductsEvaluationsListInstance(this._version, this._solution.sid);
    return this._trustProductsEvaluations;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<TrustProductsInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TrustProductsInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<TrustProductsInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.status !== undefined) data['Status'] = params.status;
    if (params.statusCallback !== undefined) data['StatusCallback'] = params.statusCallback;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.email !== undefined) data['Email'] = params.email;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsInstance(operationVersion, payload, this._solution.sid));
    

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

interface TrustProductsPayload extends TrustProductsResource, Page.TwilioResponsePayload {
}

interface TrustProductsResource {
  sid?: string | null;
  account_sid?: string | null;
  policy_sid?: string | null;
  friendly_name?: string | null;
  status?: TrustProductStatus;
  valid_until?: Date | null;
  email?: string | null;
  status_callback?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class TrustProductsInstance {
  protected _solution: TrustProductsContextSolution;
  protected _context?: TrustProductsContext;

  constructor(protected _version: V1, payload: TrustProductsPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.policySid = payload.policy_sid;
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
    this.email = payload.email;
    this.statusCallback = payload.status_callback;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource.
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string of a policy.
   */
  policySid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  status?: TrustProductStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource will be valid until.
   */
  validUntil?: Date | null;
  /**
   * The email address
   */
  email?: string | null;
  /**
   * The URL we call to inform your application of status changes.
   */
  statusCallback?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Customer-Profile resource
   */
  url?: string | null;
  /**
   * The URLs of the Assigned Items of the Customer-Profile resource
   */
  links?: object | null;

  private get _proxy(): TrustProductsContext {
    this._context = this._context || new TrustProductsContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TrustProductsInstance
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
   * Fetch a TrustProductsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TrustProductsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  update(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  /**
   * Update a TrustProductsInstance
   *
   * @param { TrustProductsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  update(params: TrustProductsContextUpdateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  update(params?: any, callback?: any): Promise<TrustProductsInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the trustProductsChannelEndpointAssignment.
   */
  trustProductsChannelEndpointAssignment(): TrustProductsChannelEndpointAssignmentListInstance {
    return this._proxy.trustProductsChannelEndpointAssignment;
  }

  /**
   * Access the trustProductsEntityAssignments.
   */
  trustProductsEntityAssignments(): TrustProductsEntityAssignmentsListInstance {
    return this._proxy.trustProductsEntityAssignments;
  }

  /**
   * Access the trustProductsEvaluations.
   */
  trustProductsEvaluations(): TrustProductsEvaluationsListInstance {
    return this._proxy.trustProductsEvaluations;
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
      policySid: this.policySid, 
      friendlyName: this.friendlyName, 
      status: this.status, 
      validUntil: this.validUntil, 
      email: this.email, 
      statusCallback: this.statusCallback, 
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


export interface TrustProductsListInstance {
  (sid: string): TrustProductsContext;
  get(sid: string): TrustProductsContext;


  /**
   * Create a TrustProductsInstance
   *
   * @param { TrustProductsListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsInstance
   */
  create(params: TrustProductsListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  create(params: any, callback?: any): Promise<TrustProductsInstance>



  /**
   * Streams TrustProductsInstance records from the API.
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
  each(callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TrustProductsInstance records from the API.
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
   * @param { TrustProductsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TrustProductsListInstanceEachOptions, callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
  /**
   * Retrieve a single target page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
  getPage(params?: any, callback?: any): Promise<TrustProductsPage>;
  /**
   * Lists TrustProductsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TrustProductsInstance[]) => any): Promise<TrustProductsInstance[]>;
  /**
   * Lists TrustProductsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TrustProductsListInstanceOptions, callback?: (error: Error | null, items: TrustProductsInstance[]) => any): Promise<TrustProductsInstance[]>;
  list(params?: any, callback?: any): Promise<TrustProductsInstance[]>;
  /**
   * Retrieve a single page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
  /**
   * Retrieve a single page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TrustProductsListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
  page(params?: any, callback?: any): Promise<TrustProductsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsSolution {
}

interface TrustProductsListInstanceImpl extends TrustProductsListInstance {}
class TrustProductsListInstanceImpl implements TrustProductsListInstance {
  _version?: V1;
  _solution?: TrustProductsSolution;
  _uri?: string;

}

export function TrustProductsListInstance(version: V1): TrustProductsListInstance {
  const instance = ((sid) => instance.get(sid)) as TrustProductsListInstanceImpl;

  instance.get = function get(sid): TrustProductsContext {
    return new TrustProductsContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/TrustProducts`;

  instance.create = function create(params: any, callback?: any): Promise<TrustProductsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    if (params.email === null || params.email === undefined) {
      throw new Error('Required parameter "params.email" missing.');
    }

    if (params.policySid === null || params.policySid === undefined) {
      throw new Error('Required parameter "params.policySid" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;
    data['Email'] = params.email;
    data['PolicySid'] = params.policySid;
    if (params.statusCallback !== undefined) data['StatusCallback'] = params.statusCallback;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<TrustProductsPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.status !== undefined) data['Status'] = params.status;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.policySid !== undefined) data['PolicySid'] = params.policySid;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TrustProductsPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TrustProductsPage(this._version, payload, this._solution));
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


export class TrustProductsPage extends Page<V1, TrustProductsPayload, TrustProductsResource, TrustProductsInstance> {
/**
* Initialize the TrustProductsPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: TrustProductsSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of TrustProductsInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: TrustProductsPayload): TrustProductsInstance {
    return new TrustProductsInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

