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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");



/**
 * Options to pass to each
 *
 * @property { number } [log] Only read notifications of the specified log level. Can be:  &#x60;0&#x60; to read only ERROR notifications or &#x60;1&#x60; to read only WARNING notifications. By default, all notifications are read.
 * @property { Date } [messageDate] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { Date } [messageDateBefore] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { Date } [messageDateAfter] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
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
export interface NotificationListInstanceEachOptions {
  log?: number;
  messageDate?: Date;
  messageDateBefore?: Date;
  messageDateAfter?: Date;
  pageSize?: number;
  callback?: (item: NotificationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [log] Only read notifications of the specified log level. Can be:  &#x60;0&#x60; to read only ERROR notifications or &#x60;1&#x60; to read only WARNING notifications. By default, all notifications are read.
 * @property { Date } [messageDate] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { Date } [messageDateBefore] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { Date } [messageDateAfter] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface NotificationListInstanceOptions {
  log?: number;
  messageDate?: Date;
  messageDateBefore?: Date;
  messageDateAfter?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [log] Only read notifications of the specified log level. Can be:  &#x60;0&#x60; to read only ERROR notifications or &#x60;1&#x60; to read only WARNING notifications. By default, all notifications are read.
 * @property { Date } [messageDate] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { Date } [messageDateBefore] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { Date } [messageDateAfter] Only show notifications for the specified date, formatted as &#x60;YYYY-MM-DD&#x60;. You can also specify an inequality, such as &#x60;&lt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or before midnight on a date, or &#x60;&gt;&#x3D;YYYY-MM-DD&#x60; for messages logged at or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface NotificationListInstancePageOptions {
  log?: number;
  messageDate?: Date;
  messageDateBefore?: Date;
  messageDateAfter?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface NotificationContext {


  /**
   * Fetch a NotificationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NotificationInstance
   */
  fetch(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NotificationContextSolution {
  accountSid?: string;
  callSid?: string;
  sid?: string;
}

export class NotificationContextImpl implements NotificationContext {
  protected _solution: NotificationContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, callSid: string, sid: string) {
    this._solution = { accountSid, callSid, sid };
    this._uri = `/Accounts/${accountSid}/Calls/${callSid}/Notifications/${sid}.json`;
  }

  fetch(callback?: any): Promise<NotificationInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new NotificationInstance(operationVersion, payload, this._solution.accountSid, this._solution.callSid, this._solution.sid));
    

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
export type NotificationRequestMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationResource {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  error_code?: string | null;
  log?: string | null;
  message_date?: string | null;
  message_text?: string | null;
  more_info?: string | null;
  request_method?: NotificationRequestMethod;
  request_url?: string | null;
  request_variables?: string | null;
  response_body?: string | null;
  response_headers?: string | null;
  sid?: string | null;
  uri?: string | null;
}

export class NotificationInstance {
  protected _solution: NotificationContextSolution;
  protected _context?: NotificationContext;

  constructor(protected _version: V2010, payload: NotificationPayload, accountSid: string, callSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.callSid = payload.call_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.errorCode = payload.error_code;
    this.log = payload.log;
    this.messageDate = deserialize.rfc2822DateTime(payload.message_date);
    this.messageText = payload.message_text;
    this.moreInfo = payload.more_info;
    this.requestMethod = payload.request_method;
    this.requestUrl = payload.request_url;
    this.requestVariables = payload.request_variables;
    this.responseBody = payload.response_body;
    this.responseHeaders = payload.response_headers;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, callSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The API version used to create the Call Notification resource
   */
  apiVersion?: string | null;
  /**
   * The SID of the Call the resource is associated with
   */
  callSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * A unique error code corresponding to the notification
   */
  errorCode?: string | null;
  /**
   * An integer log level
   */
  log?: string | null;
  /**
   * The date the notification was generated
   */
  messageDate?: string | null;
  /**
   * The text of the notification
   */
  messageText?: string | null;
  /**
   * A URL for more information about the error code
   */
  moreInfo?: string | null;
  /**
   * HTTP method used with the request url
   */
  requestMethod?: NotificationRequestMethod;
  /**
   * URL of the resource that generated the notification
   */
  requestUrl?: string | null;
  /**
   * Twilio-generated HTTP variables sent to the server
   */
  requestVariables?: string | null;
  /**
   * The HTTP body returned by your server
   */
  responseBody?: string | null;
  /**
   * The HTTP headers returned by your server
   */
  responseHeaders?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): NotificationContext {
    this._context = this._context || new NotificationContextImpl(this._version, this._solution.accountSid, this._solution.callSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a NotificationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NotificationInstance
   */
  fetch(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>
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
      accountSid: this.accountSid, 
      apiVersion: this.apiVersion, 
      callSid: this.callSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      errorCode: this.errorCode, 
      log: this.log, 
      messageDate: this.messageDate, 
      messageText: this.messageText, 
      moreInfo: this.moreInfo, 
      requestMethod: this.requestMethod, 
      requestUrl: this.requestUrl, 
      requestVariables: this.requestVariables, 
      responseBody: this.responseBody, 
      responseHeaders: this.responseHeaders, 
      sid: this.sid, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface NotificationListInstance {
  (sid: string): NotificationContext;
  get(sid: string): NotificationContext;



  /**
   * Streams NotificationInstance records from the API.
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
  each(callback?: (item: NotificationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NotificationInstance records from the API.
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
   * @param { NotificationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: NotificationListInstanceEachOptions, callback?: (item: NotificationInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  getPage(params?: any, callback?: any): Promise<NotificationPage>;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NotificationInstance[]) => any): Promise<NotificationInstance[]>;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NotificationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: NotificationListInstanceOptions, callback?: (error: Error | null, items: NotificationInstance[]) => any): Promise<NotificationInstance[]>;
  list(params?: any, callback?: any): Promise<NotificationInstance[]>;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NotificationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: NotificationListInstancePageOptions, callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  page(params?: any, callback?: any): Promise<NotificationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NotificationSolution {
  accountSid?: string;
  callSid?: string;
}

interface NotificationListInstanceImpl extends NotificationListInstance {}
class NotificationListInstanceImpl implements NotificationListInstance {
  _version?: V2010;
  _solution?: NotificationSolution;
  _uri?: string;

}

export function NotificationListInstance(version: V2010, accountSid: string, callSid: string): NotificationListInstance {
  const instance = ((sid) => instance.get(sid)) as NotificationListInstanceImpl;

  instance.get = function get(sid): NotificationContext {
    return new NotificationContextImpl(version, accountSid, callSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid, callSid };
  instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/Notifications.json`;

  instance.page = function page(params?: any, callback?: any): Promise<NotificationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.log !== undefined) data['Log'] = params.log;
    if (params.messageDate !== undefined) data['MessageDate'] = serialize.iso8601Date(params.messageDate);
    if (params.messageDateBefore !== undefined) data['MessageDate<'] = serialize.iso8601Date(params.messageDateBefore);
    if (params.messageDateAfter !== undefined) data['MessageDate>'] = serialize.iso8601Date(params.messageDateAfter);
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new NotificationPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<NotificationPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new NotificationPage(this._version, payload, this._solution));
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


export class NotificationPage extends Page<V2010, NotificationPayload, NotificationResource, NotificationInstance> {
/**
* Initialize the NotificationPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: NotificationSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of NotificationInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: NotificationPayload): NotificationInstance {
    return new NotificationInstance(
    this._version,
    payload,
        this._solution.accountSid,
        this._solution.callSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

