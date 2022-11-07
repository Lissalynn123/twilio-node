/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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

type WebChannelChatStatus = "inactive";

/**
 * Options to pass to update a WebChannelInstance
 *
 * @property { WebChannelChatStatus } [chatStatus]
 * @property { string } [postEngagementData] The post-engagement data.
 */
export interface WebChannelContextUpdateOptions {
  chatStatus?: WebChannelChatStatus;
  postEngagementData?: string;
}

/**
 * Options to pass to create a WebChannelInstance
 *
 * @property { string } flexFlowSid The SID of the Flex Flow.
 * @property { string } identity The chat identity.
 * @property { string } customerFriendlyName The chat participant\\\&#39;s friendly name.
 * @property { string } chatFriendlyName The chat channel\\\&#39;s friendly name.
 * @property { string } [chatUniqueName] The chat channel\\\&#39;s unique name.
 * @property { string } [preEngagementData] The pre-engagement data.
 */
export interface WebChannelListInstanceCreateOptions {
  flexFlowSid: string;
  identity: string;
  customerFriendlyName: string;
  chatFriendlyName: string;
  chatUniqueName?: string;
  preEngagementData?: string;
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
export interface WebChannelListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void;
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
export interface WebChannelListInstanceOptions {
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
export interface WebChannelListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface WebChannelContext {
  /**
   * Remove a WebChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a WebChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance>;

  /**
   * Update a WebChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance>;
  /**
   * Update a WebChannelInstance
   *
   * @param { WebChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  update(
    params: WebChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance>;
  update(params?: any, callback?: any): Promise<WebChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebChannelContextSolution {
  sid?: string;
}

export class WebChannelContextImpl implements WebChannelContext {
  protected _solution: WebChannelContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/WebChannels/${sid}`;
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

  fetch(callback?: any): Promise<WebChannelInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebChannelInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<WebChannelInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["chatStatus"] !== undefined)
      data["ChatStatus"] = params["chatStatus"];
    if (params["postEngagementData"] !== undefined)
      data["PostEngagementData"] = params["postEngagementData"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebChannelInstance(operationVersion, payload, this._solution.sid)
    );

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

interface WebChannelPayload
  extends WebChannelResource,
    Page.TwilioResponsePayload {}

interface WebChannelResource {
  account_sid?: string | null;
  flex_flow_sid?: string | null;
  sid?: string | null;
  url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class WebChannelInstance {
  protected _solution: WebChannelContextSolution;
  protected _context?: WebChannelContext;

  constructor(
    protected _version: V1,
    payload: WebChannelPayload,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.flexFlowSid = payload.flex_flow_sid;
    this.sid = payload.sid;
    this.url = payload.url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource and owns this Workflow
   */
  accountSid?: string | null;
  /**
   * The SID of the Flex Flow
   */
  flexFlowSid?: string | null;
  /**
   * The unique string that identifies the WebChannel resource
   */
  sid?: string | null;
  /**
   * The absolute URL of the WebChannel resource
   */
  url?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;

  private get _proxy(): WebChannelContext {
    this._context =
      this._context ||
      new WebChannelContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a WebChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a WebChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WebChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance>;
  /**
   * Update a WebChannelInstance
   *
   * @param { WebChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  update(
    params: WebChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance>;
  update(params?: any, callback?: any): Promise<WebChannelInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      flexFlowSid: this.flexFlowSid,
      sid: this.sid,
      url: this.url,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WebChannelListInstance {
  (sid: string): WebChannelContext;
  get(sid: string): WebChannelContext;

  /**
   * Create a WebChannelInstance
   *
   * @param { WebChannelListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebChannelInstance
   */
  create(
    params: WebChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WebChannelInstance) => any
  ): Promise<WebChannelInstance>;
  create(params: any, callback?: any): Promise<WebChannelInstance>;

  /**
   * Streams WebChannelInstance records from the API.
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
  each(
    callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams WebChannelInstance records from the API.
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
   * @param { WebChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: WebChannelListInstanceEachOptions,
    callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WebChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: WebChannelPage) => any
  ): Promise<WebChannelPage>;
  /**
   * Retrieve a single target page of WebChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: WebChannelPage) => any
  ): Promise<WebChannelPage>;
  getPage(params?: any, callback?: any): Promise<WebChannelPage>;
  /**
   * Lists WebChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WebChannelInstance[]) => any
  ): Promise<WebChannelInstance[]>;
  /**
   * Lists WebChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: WebChannelListInstanceOptions,
    callback?: (error: Error | null, items: WebChannelInstance[]) => any
  ): Promise<WebChannelInstance[]>;
  list(params?: any, callback?: any): Promise<WebChannelInstance[]>;
  /**
   * Retrieve a single page of WebChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: WebChannelPage) => any
  ): Promise<WebChannelPage>;
  /**
   * Retrieve a single page of WebChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: WebChannelListInstancePageOptions,
    callback?: (error: Error | null, items: WebChannelPage) => any
  ): Promise<WebChannelPage>;
  page(params?: any, callback?: any): Promise<WebChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebChannelSolution {}

interface WebChannelListInstanceImpl extends WebChannelListInstance {}
class WebChannelListInstanceImpl implements WebChannelListInstance {
  _version?: V1;
  _solution?: WebChannelSolution;
  _uri?: string;
}

export function WebChannelListInstance(version: V1): WebChannelListInstance {
  const instance = ((sid) => instance.get(sid)) as WebChannelListInstanceImpl;

  instance.get = function get(sid): WebChannelContext {
    return new WebChannelContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/WebChannels`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<WebChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["flexFlowSid"] === null || params["flexFlowSid"] === undefined) {
      throw new Error("Required parameter \"params['flexFlowSid']\" missing.");
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    if (
      params["customerFriendlyName"] === null ||
      params["customerFriendlyName"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['customerFriendlyName']\" missing."
      );
    }

    if (
      params["chatFriendlyName"] === null ||
      params["chatFriendlyName"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['chatFriendlyName']\" missing."
      );
    }

    let data: any = {};

    data["FlexFlowSid"] = params["flexFlowSid"];

    data["Identity"] = params["identity"];

    data["CustomerFriendlyName"] = params["customerFriendlyName"];

    data["ChatFriendlyName"] = params["chatFriendlyName"];
    if (params["chatUniqueName"] !== undefined)
      data["ChatUniqueName"] = params["chatUniqueName"];
    if (params["preEngagementData"] !== undefined)
      data["PreEngagementData"] = params["preEngagementData"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new WebChannelInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<WebChannelPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new WebChannelPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<WebChannelPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new WebChannelPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

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

export class WebChannelPage extends Page<
  V1,
  WebChannelPayload,
  WebChannelResource,
  WebChannelInstance
> {
  /**
   * Initialize the WebChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: WebChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WebChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebChannelPayload): WebChannelInstance {
    return new WebChannelInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
