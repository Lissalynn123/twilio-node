/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import DeployedDevices from "../../DeployedDevices";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

/**
 * Options to pass to update a CertificateInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Certificate credential, up to 256 characters long.
 * @property { string } [deviceSid] Provides the unique string identifier of an existing Device to become authenticated with this Certificate credential.
 */
export interface CertificateContextUpdateOptions {
  friendlyName?: string;
  deviceSid?: string;
}

/**
 * Options to pass to create a CertificateInstance
 *
 * @property { string } certificateData Provides a URL encoded representation of the public certificate in PEM format.
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Certificate credential, up to 256 characters long.
 * @property { string } [deviceSid] Provides the unique string identifier of an existing Device to become authenticated with this Certificate credential.
 */
export interface CertificateListInstanceCreateOptions {
  certificateData: string;
  friendlyName?: string;
  deviceSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [deviceSid] Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
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
export interface CertificateListInstanceEachOptions {
  deviceSid?: string;
  pageSize?: number;
  callback?: (item: CertificateInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [deviceSid] Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CertificateListInstanceOptions {
  deviceSid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [deviceSid] Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CertificateListInstancePageOptions {
  deviceSid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface CertificateContext {
  /**
   * Remove a CertificateInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CertificateInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance>;

  /**
   * Update a CertificateInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  update(
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance>;
  /**
   * Update a CertificateInstance
   *
   * @param { CertificateContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  update(
    params: CertificateContextUpdateOptions,
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance>;
  update(params?: any, callback?: any): Promise<CertificateInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CertificateContextSolution {
  fleetSid?: string;
  sid?: string;
}

export class CertificateContextImpl implements CertificateContext {
  protected _solution: CertificateContextSolution;
  protected _uri: string;

  constructor(
    protected _version: DeployedDevices,
    fleetSid: string,
    sid: string
  ) {
    this._solution = { fleetSid, sid };
    this._uri = `/Fleets/${fleetSid}/Certificates/${sid}`;
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

  fetch(callback?: any): Promise<CertificateInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CertificateInstance(
          operationVersion,
          payload,
          this._solution.fleetSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<CertificateInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["deviceSid"] !== undefined)
      data["DeviceSid"] = params["deviceSid"];

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
        new CertificateInstance(
          operationVersion,
          payload,
          this._solution.fleetSid,
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

interface CertificatePayload
  extends CertificateResource,
    Page.TwilioResponsePayload {}

interface CertificateResource {
  sid?: string | null;
  url?: string | null;
  friendly_name?: string | null;
  fleet_sid?: string | null;
  account_sid?: string | null;
  device_sid?: string | null;
  thumbprint?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class CertificateInstance {
  protected _solution: CertificateContextSolution;
  protected _context?: CertificateContext;

  constructor(
    protected _version: DeployedDevices,
    payload: CertificatePayload,
    fleetSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.friendlyName = payload.friendly_name;
    this.fleetSid = payload.fleet_sid;
    this.accountSid = payload.account_sid;
    this.deviceSid = payload.device_sid;
    this.thumbprint = payload.thumbprint;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { fleetSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Certificate.
   */
  sid?: string | null;
  /**
   * URL of this Certificate.
   */
  url?: string | null;
  /**
   * A human readable description for this Certificate.
   */
  friendlyName?: string | null;
  /**
   * The unique identifier of the Fleet.
   */
  fleetSid?: string | null;
  /**
   * The unique SID that identifies this Account.
   */
  accountSid?: string | null;
  /**
   * The unique identifier of a mapped Device.
   */
  deviceSid?: string | null;
  /**
   * A Certificate unique payload hash.
   */
  thumbprint?: string | null;
  /**
   * The date this Certificate was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this Certificate was updated.
   */
  dateUpdated?: Date | null;

  private get _proxy(): CertificateContext {
    this._context =
      this._context ||
      new CertificateContextImpl(
        this._version,
        this._solution.fleetSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CertificateInstance
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
   * Fetch a CertificateInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CertificateInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  update(
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance>;
  /**
   * Update a CertificateInstance
   *
   * @param { CertificateContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  update(
    params: CertificateContextUpdateOptions,
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance>;
  update(params?: any, callback?: any): Promise<CertificateInstance> {
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
      url: this.url,
      friendlyName: this.friendlyName,
      fleetSid: this.fleetSid,
      accountSid: this.accountSid,
      deviceSid: this.deviceSid,
      thumbprint: this.thumbprint,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CertificateListInstance {
  (sid: string): CertificateContext;
  get(sid: string): CertificateContext;

  /**
   * Create a CertificateInstance
   *
   * @param { CertificateListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CertificateInstance
   */
  create(
    params: CertificateListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CertificateInstance) => any
  ): Promise<CertificateInstance>;
  create(params: any, callback?: any): Promise<CertificateInstance>;

  /**
   * Streams CertificateInstance records from the API.
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
    callback?: (item: CertificateInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams CertificateInstance records from the API.
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
   * @param { CertificateListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: CertificateListInstanceEachOptions,
    callback?: (item: CertificateInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CertificateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: CertificatePage) => any
  ): Promise<CertificatePage>;
  /**
   * Retrieve a single target page of CertificateInstance records from the API.
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
    callback?: (error: Error | null, items: CertificatePage) => any
  ): Promise<CertificatePage>;
  getPage(params?: any, callback?: any): Promise<CertificatePage>;
  /**
   * Lists CertificateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CertificateInstance[]) => any
  ): Promise<CertificateInstance[]>;
  /**
   * Lists CertificateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CertificateListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: CertificateListInstanceOptions,
    callback?: (error: Error | null, items: CertificateInstance[]) => any
  ): Promise<CertificateInstance[]>;
  list(params?: any, callback?: any): Promise<CertificateInstance[]>;
  /**
   * Retrieve a single page of CertificateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CertificatePage) => any
  ): Promise<CertificatePage>;
  /**
   * Retrieve a single page of CertificateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CertificateListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: CertificateListInstancePageOptions,
    callback?: (error: Error | null, items: CertificatePage) => any
  ): Promise<CertificatePage>;
  page(params?: any, callback?: any): Promise<CertificatePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CertificateSolution {
  fleetSid?: string;
}

interface CertificateListInstanceImpl extends CertificateListInstance {}
class CertificateListInstanceImpl implements CertificateListInstance {
  _version?: DeployedDevices;
  _solution?: CertificateSolution;
  _uri?: string;
}

export function CertificateListInstance(
  version: DeployedDevices,
  fleetSid: string
): CertificateListInstance {
  const instance = ((sid) => instance.get(sid)) as CertificateListInstanceImpl;

  instance.get = function get(sid): CertificateContext {
    return new CertificateContextImpl(version, fleetSid, sid);
  };

  instance._version = version;
  instance._solution = { fleetSid };
  instance._uri = `/Fleets/${fleetSid}/Certificates`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<CertificateInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["certificateData"] === null ||
      params["certificateData"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['certificateData']\" missing."
      );
    }

    let data: any = {};

    data["CertificateData"] = params["certificateData"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["deviceSid"] !== undefined)
      data["DeviceSid"] = params["deviceSid"];

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
        new CertificateInstance(
          operationVersion,
          payload,
          this._solution.fleetSid
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
  ): Promise<CertificatePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["deviceSid"] !== undefined)
      data["DeviceSid"] = params["deviceSid"];
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
        new CertificatePage(operationVersion, payload, this._solution)
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
  ): Promise<CertificatePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new CertificatePage(this._version, payload, this._solution)
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

export class CertificatePage extends Page<
  DeployedDevices,
  CertificatePayload,
  CertificateResource,
  CertificateInstance
> {
  /**
   * Initialize the CertificatePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: DeployedDevices,
    response: Response<string>,
    solution: CertificateSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CertificateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CertificatePayload): CertificateInstance {
    return new CertificateInstance(
      this._version,
      payload,
      this._solution.fleetSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
