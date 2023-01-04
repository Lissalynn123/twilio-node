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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { PayloadListInstance } from "./addOnResult/payload";

type RecordingAddOnResultStatus =
  | "canceled"
  | "completed"
  | "deleted"
  | "failed"
  | "in-progress"
  | "init"
  | "processing"
  | "queued";

/**
 * Options to pass to each
 */
export interface AddOnResultListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AddOnResultListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AddOnResultListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AddOnResultContext {
  payloads: PayloadListInstance;

  /**
   * Remove a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddOnResultInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddOnResultInstance) => any
  ): Promise<AddOnResultInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddOnResultContextSolution {
  accountSid?: string;
  referenceSid?: string;
  sid?: string;
}

export class AddOnResultContextImpl implements AddOnResultContext {
  protected _solution: AddOnResultContextSolution;
  protected _uri: string;

  protected _payloads?: PayloadListInstance;

  constructor(
    protected _version: V2010,
    accountSid: string,
    referenceSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(referenceSid)) {
      throw new Error("Parameter 'referenceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, referenceSid, sid };
    this._uri = `/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults/${sid}.json`;
  }

  get payloads(): PayloadListInstance {
    this._payloads =
      this._payloads ||
      PayloadListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.referenceSid,
        this._solution.sid
      );
    return this._payloads;
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

  fetch(callback?: any): Promise<AddOnResultInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddOnResultInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.referenceSid,
          this._solution.sid
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

interface AddOnResultPayload extends TwilioResponsePayload {
  add_on_results: AddOnResultResource[];
}

interface AddOnResultResource {
  sid?: string | null;
  account_sid?: string | null;
  status?: RecordingAddOnResultStatus;
  add_on_sid?: string | null;
  add_on_configuration_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  date_completed?: Date | null;
  reference_sid?: string | null;
  subresource_uris?: object | null;
}

export class AddOnResultInstance {
  protected _solution: AddOnResultContextSolution;
  protected _context?: AddOnResultContext;

  constructor(
    protected _version: V2010,
    payload: AddOnResultResource,
    accountSid: string,
    referenceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.addOnSid = payload.add_on_sid;
    this.addOnConfigurationSid = payload.add_on_configuration_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.dateCompleted = deserialize.rfc2822DateTime(payload.date_completed);
    this.referenceSid = payload.reference_sid;
    this.subresourceUris = payload.subresource_uris;

    this._solution = { accountSid, referenceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  status?: RecordingAddOnResultStatus;
  /**
   * The SID of the Add-on to which the result belongs
   */
  addOnSid?: string | null;
  /**
   * The SID of the Add-on configuration
   */
  addOnConfigurationSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The date and time in GMT that the result was completed
   */
  dateCompleted?: Date | null;
  /**
   * The SID of the recording to which the AddOnResult resource belongs
   */
  referenceSid?: string | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;

  private get _proxy(): AddOnResultContext {
    this._context =
      this._context ||
      new AddOnResultContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.referenceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AddOnResultInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddOnResultInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddOnResultInstance) => any
  ): Promise<AddOnResultInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the payloads.
   */
  payloads(): PayloadListInstance {
    return this._proxy.payloads;
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
      status: this.status,
      addOnSid: this.addOnSid,
      addOnConfigurationSid: this.addOnConfigurationSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      dateCompleted: this.dateCompleted,
      referenceSid: this.referenceSid,
      subresourceUris: this.subresourceUris,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AddOnResultListInstance {
  (sid: string): AddOnResultContext;
  get(sid: string): AddOnResultContext;

  /**
   * Streams AddOnResultInstance records from the API.
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
    callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams AddOnResultInstance records from the API.
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
   * @param { AddOnResultListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AddOnResultListInstanceEachOptions,
    callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AddOnResultInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AddOnResultPage) => any
  ): Promise<AddOnResultPage>;
  /**
   * Retrieve a single target page of AddOnResultInstance records from the API.
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
    callback?: (error: Error | null, items: AddOnResultPage) => any
  ): Promise<AddOnResultPage>;
  getPage(params?: any, callback?: any): Promise<AddOnResultPage>;
  /**
   * Lists AddOnResultInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AddOnResultInstance[]) => any
  ): Promise<AddOnResultInstance[]>;
  /**
   * Lists AddOnResultInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddOnResultListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AddOnResultListInstanceOptions,
    callback?: (error: Error | null, items: AddOnResultInstance[]) => any
  ): Promise<AddOnResultInstance[]>;
  list(params?: any, callback?: any): Promise<AddOnResultInstance[]>;
  /**
   * Retrieve a single page of AddOnResultInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AddOnResultPage) => any
  ): Promise<AddOnResultPage>;
  /**
   * Retrieve a single page of AddOnResultInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddOnResultListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AddOnResultListInstancePageOptions,
    callback?: (error: Error | null, items: AddOnResultPage) => any
  ): Promise<AddOnResultPage>;
  page(params?: any, callback?: any): Promise<AddOnResultPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddOnResultSolution {
  accountSid?: string;
  referenceSid?: string;
}

interface AddOnResultListInstanceImpl extends AddOnResultListInstance {}
class AddOnResultListInstanceImpl implements AddOnResultListInstance {
  _version?: V2010;
  _solution?: AddOnResultSolution;
  _uri?: string;
}

export function AddOnResultListInstance(
  version: V2010,
  accountSid: string,
  referenceSid: string
): AddOnResultListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(referenceSid)) {
    throw new Error("Parameter 'referenceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as AddOnResultListInstanceImpl;

  instance.get = function get(sid): AddOnResultContext {
    return new AddOnResultContextImpl(version, accountSid, referenceSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, referenceSid };
  instance._uri = `/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AddOnResultPage> {
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
      (payload) =>
        new AddOnResultPage(operationVersion, payload, this._solution)
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
  ): Promise<AddOnResultPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new AddOnResultPage(this._version, payload, this._solution)
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

export class AddOnResultPage extends Page<
  V2010,
  AddOnResultPayload,
  AddOnResultResource,
  AddOnResultInstance
> {
  /**
   * Initialize the AddOnResultPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AddOnResultSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AddOnResultInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AddOnResultResource): AddOnResultInstance {
    return new AddOnResultInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.referenceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
