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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type CustomerProfileEvaluationStatus = "compliant" | "noncompliant";

/**
 * Options to pass to create a CustomerProfilesEvaluationsInstance
 */
export interface CustomerProfilesEvaluationsListInstanceCreateOptions {
  /** The unique string of a policy that is associated to the customer_profile resource. */
  policySid: string;
}
/**
 * Options to pass to each
 */
export interface CustomerProfilesEvaluationsListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: CustomerProfilesEvaluationsInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CustomerProfilesEvaluationsListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CustomerProfilesEvaluationsListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CustomerProfilesEvaluationsContext {
  /**
   * Fetch a CustomerProfilesEvaluationsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesEvaluationsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEvaluationsInstance
    ) => any
  ): Promise<CustomerProfilesEvaluationsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesEvaluationsContextSolution {
  customerProfileSid?: string;
  sid?: string;
}

export class CustomerProfilesEvaluationsContextImpl
  implements CustomerProfilesEvaluationsContext
{
  protected _solution: CustomerProfilesEvaluationsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, customerProfileSid: string, sid: string) {
    if (!isValidPathParam(customerProfileSid)) {
      throw new Error("Parameter 'customerProfileSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { customerProfileSid, sid };
    this._uri = `/CustomerProfiles/${customerProfileSid}/Evaluations/${sid}`;
  }

  fetch(callback?: any): Promise<CustomerProfilesEvaluationsInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEvaluationsInstance(
          operationVersion,
          payload,
          this._solution.customerProfileSid,
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

interface CustomerProfilesEvaluationsPayload extends TwilioResponsePayload {
  results: CustomerProfilesEvaluationsResource[];
}

interface CustomerProfilesEvaluationsResource {
  sid?: string | null;
  account_sid?: string | null;
  policy_sid?: string | null;
  customer_profile_sid?: string | null;
  status?: CustomerProfileEvaluationStatus;
  results?: Array<any> | null;
  date_created?: Date | null;
  url?: string | null;
}

export class CustomerProfilesEvaluationsInstance {
  protected _solution: CustomerProfilesEvaluationsContextSolution;
  protected _context?: CustomerProfilesEvaluationsContext;

  constructor(
    protected _version: V1,
    payload: CustomerProfilesEvaluationsResource,
    customerProfileSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.policySid = payload.policy_sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.status = payload.status;
    this.results = payload.results;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { customerProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Evaluation resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string of a policy
   */
  policySid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  customerProfileSid?: string | null;
  status?: CustomerProfileEvaluationStatus;
  /**
   * The results of the Evaluation resource
   */
  results?: Array<any> | null;
  dateCreated?: Date | null;
  url?: string | null;

  private get _proxy(): CustomerProfilesEvaluationsContext {
    this._context =
      this._context ||
      new CustomerProfilesEvaluationsContextImpl(
        this._version,
        this._solution.customerProfileSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a CustomerProfilesEvaluationsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesEvaluationsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEvaluationsInstance
    ) => any
  ): Promise<CustomerProfilesEvaluationsInstance> {
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
      policySid: this.policySid,
      customerProfileSid: this.customerProfileSid,
      status: this.status,
      results: this.results,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CustomerProfilesEvaluationsListInstance {
  (sid: string): CustomerProfilesEvaluationsContext;
  get(sid: string): CustomerProfilesEvaluationsContext;

  /**
   * Create a CustomerProfilesEvaluationsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesEvaluationsInstance
   */
  create(
    params: CustomerProfilesEvaluationsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEvaluationsInstance
    ) => any
  ): Promise<CustomerProfilesEvaluationsInstance>;
  create(
    params: any,
    callback?: any
  ): Promise<CustomerProfilesEvaluationsInstance>;

  /**
   * Streams CustomerProfilesEvaluationsInstance records from the API.
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
    callback?: (
      item: CustomerProfilesEvaluationsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams CustomerProfilesEvaluationsInstance records from the API.
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
   * @param { CustomerProfilesEvaluationsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: CustomerProfilesEvaluationsListInstanceEachOptions,
    callback?: (
      item: CustomerProfilesEvaluationsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CustomerProfilesEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (
      error: Error | null,
      items: CustomerProfilesEvaluationsPage
    ) => any
  ): Promise<CustomerProfilesEvaluationsPage>;
  /**
   * Retrieve a single target page of CustomerProfilesEvaluationsInstance records from the API.
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
    callback?: (
      error: Error | null,
      items: CustomerProfilesEvaluationsPage
    ) => any
  ): Promise<CustomerProfilesEvaluationsPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<CustomerProfilesEvaluationsPage>;
  /**
   * Lists CustomerProfilesEvaluationsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: CustomerProfilesEvaluationsInstance[]
    ) => any
  ): Promise<CustomerProfilesEvaluationsInstance[]>;
  /**
   * Lists CustomerProfilesEvaluationsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesEvaluationsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: CustomerProfilesEvaluationsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEvaluationsInstance[]
    ) => any
  ): Promise<CustomerProfilesEvaluationsInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<CustomerProfilesEvaluationsInstance[]>;
  /**
   * Retrieve a single page of CustomerProfilesEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: CustomerProfilesEvaluationsPage
    ) => any
  ): Promise<CustomerProfilesEvaluationsPage>;
  /**
   * Retrieve a single page of CustomerProfilesEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesEvaluationsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: CustomerProfilesEvaluationsListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEvaluationsPage
    ) => any
  ): Promise<CustomerProfilesEvaluationsPage>;
  page(params?: any, callback?: any): Promise<CustomerProfilesEvaluationsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesEvaluationsSolution {
  customerProfileSid?: string;
}

interface CustomerProfilesEvaluationsListInstanceImpl
  extends CustomerProfilesEvaluationsListInstance {}
class CustomerProfilesEvaluationsListInstanceImpl
  implements CustomerProfilesEvaluationsListInstance
{
  _version?: V1;
  _solution?: CustomerProfilesEvaluationsSolution;
  _uri?: string;
}

export function CustomerProfilesEvaluationsListInstance(
  version: V1,
  customerProfileSid: string
): CustomerProfilesEvaluationsListInstance {
  if (!isValidPathParam(customerProfileSid)) {
    throw new Error("Parameter 'customerProfileSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as CustomerProfilesEvaluationsListInstanceImpl;

  instance.get = function get(sid): CustomerProfilesEvaluationsContext {
    return new CustomerProfilesEvaluationsContextImpl(
      version,
      customerProfileSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { customerProfileSid };
  instance._uri = `/CustomerProfiles/${customerProfileSid}/Evaluations`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<CustomerProfilesEvaluationsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["policySid"] === null || params["policySid"] === undefined) {
      throw new Error("Required parameter \"params['policySid']\" missing.");
    }

    let data: any = {};

    data["PolicySid"] = params["policySid"];

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
      (payload) =>
        new CustomerProfilesEvaluationsInstance(
          operationVersion,
          payload,
          this._solution.customerProfileSid
        )
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
  ): Promise<CustomerProfilesEvaluationsPage> {
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
        new CustomerProfilesEvaluationsPage(
          operationVersion,
          payload,
          this._solution
        )
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
  ): Promise<CustomerProfilesEvaluationsPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEvaluationsPage(
          this._version,
          payload,
          this._solution
        )
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

export class CustomerProfilesEvaluationsPage extends Page<
  V1,
  CustomerProfilesEvaluationsPayload,
  CustomerProfilesEvaluationsResource,
  CustomerProfilesEvaluationsInstance
> {
  /**
   * Initialize the CustomerProfilesEvaluationsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CustomerProfilesEvaluationsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CustomerProfilesEvaluationsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: CustomerProfilesEvaluationsResource
  ): CustomerProfilesEvaluationsInstance {
    return new CustomerProfilesEvaluationsInstance(
      this._version,
      payload,
      this._solution.customerProfileSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
