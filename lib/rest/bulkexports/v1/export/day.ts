/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

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
export interface DayListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: DayInstance, done: (err?: Error) => void) => void;
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
export interface DayListInstanceOptions {
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
export interface DayListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface DayContext {
  /**
   * Fetch a DayInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DayInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DayInstance) => any
  ): Promise<DayInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DayContextSolution {
  resourceType?: string;
  day?: string;
}

export class DayContextImpl implements DayContext {
  protected _solution: DayContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, resourceType: string, day: string) {
    this._solution = { resourceType, day };
    this._uri = `/Exports/${resourceType}/Days/${day}`;
  }

  fetch(callback?: any): Promise<DayInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DayInstance(
          operationVersion,
          payload,
          this._solution.resourceType,
          this._solution.day
        )
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

interface DayPayload extends DayResource, Page.TwilioResponsePayload {}

interface DayResource {
  redirect_to?: string | null;
}

export class DayInstance {
  protected _solution: DayContextSolution;
  protected _context?: DayContext;

  constructor(
    protected _version: V1,
    payload: DayPayload,
    resourceType: string,
    day?: string
  ) {
    this.redirectTo = payload.redirect_to;

    this._solution = { resourceType, day: day || this.day };
  }

  redirectTo?: string | null;

  private get _proxy(): DayContext {
    this._context =
      this._context ||
      new DayContextImpl(
        this._version,
        this._solution.resourceType,
        this._solution.day
      );
    return this._context;
  }

  /**
   * Fetch a DayInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DayInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DayInstance) => any
  ): Promise<DayInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      redirectTo: this.redirectTo,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DayListInstance {
  (day: string): DayContext;
  get(day: string): DayContext;

  /**
   * Streams DayInstance records from the API.
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
    callback?: (item: DayInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams DayInstance records from the API.
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
   * @param { DayListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: DayListInstanceEachOptions,
    callback?: (item: DayInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;
  /**
   * Retrieve a single target page of DayInstance records from the API.
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
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;
  getPage(params?: any, callback?: any): Promise<DayPage>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DayInstance[]) => any
  ): Promise<DayInstance[]>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DayListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: DayListInstanceOptions,
    callback?: (error: Error | null, items: DayInstance[]) => any
  ): Promise<DayInstance[]>;
  list(params?: any, callback?: any): Promise<DayInstance[]>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DayListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: DayListInstancePageOptions,
    callback?: (error: Error | null, items: DayPage) => any
  ): Promise<DayPage>;
  page(params?: any, callback?: any): Promise<DayPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DaySolution {
  resourceType?: string;
}

interface DayListInstanceImpl extends DayListInstance {}
class DayListInstanceImpl implements DayListInstance {
  _version?: V1;
  _solution?: DaySolution;
  _uri?: string;
}

export function DayListInstance(
  version: V1,
  resourceType: string
): DayListInstance {
  const instance = ((day) => instance.get(day)) as DayListInstanceImpl;

  instance.get = function get(day): DayContext {
    return new DayContextImpl(version, resourceType, day);
  };

  instance._version = version;
  instance._solution = { resourceType };
  instance._uri = `/Exports/${resourceType}/Days`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<DayPage> {
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
      (payload) => new DayPage(operationVersion, payload, this._solution)
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
  ): Promise<DayPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new DayPage(this._version, payload, this._solution)
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

export class DayPage extends Page<V1, DayPayload, DayResource, DayInstance> {
  /**
   * Initialize the DayPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DaySolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DayPayload): DayInstance {
    return new DayInstance(this._version, payload, this._solution.resourceType);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
