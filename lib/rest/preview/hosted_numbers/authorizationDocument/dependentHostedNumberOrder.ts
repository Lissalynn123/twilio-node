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
import HostedNumbers from "../../HostedNumbers";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

type DependentHostedNumberOrderStatus =
  | "received"
  | "pending-verification"
  | "verified"
  | "pending-loa"
  | "carrier-processing"
  | "testing"
  | "completed"
  | "failed"
  | "action-required";

export class ListDeployedDevicesCertificateResponseMeta {
  "firstPageUrl"?: string;
  "nextPageUrl"?: string;
  "page"?: number;
  "pageSize"?: number;
  "previousPageUrl"?: string;
  "url"?: string;
  "key"?: string;
}

export class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder {
  /**
   * HostedNumberOrder sid.
   */
  "sid"?: string | null;
  /**
   * Account sid.
   */
  "accountSid"?: string | null;
  /**
   * IncomingPhoneNumber sid.
   */
  "incomingPhoneNumberSid"?: string | null;
  /**
   * Address sid.
   */
  "addressSid"?: string | null;
  /**
   * LOA document sid.
   */
  "signingDocumentSid"?: string | null;
  /**
   * An E164 formatted phone number.
   */
  "phoneNumber"?: string | null;
  "capabilities"?: PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities | null;
  /**
   * A human readable description of this resource.
   */
  "friendlyName"?: string | null;
  /**
   * A unique, developer assigned name of this HostedNumberOrder.
   */
  "uniqueName"?: string | null;
  "status"?: DependentHostedNumberOrderEnumStatus;
  /**
   * Why a hosted_number_order reached status \"action-required\"
   */
  "failureReason"?: string | null;
  /**
   * The date this HostedNumberOrder was created.
   */
  "dateCreated"?: Date | null;
  /**
   * The date this HostedNumberOrder was updated.
   */
  "dateUpdated"?: Date | null;
  /**
   * The number of attempts made to verify ownership of the phone number.
   */
  "verificationAttempts"?: number | null;
  /**
   * Email.
   */
  "email"?: string | null;
  /**
   * A list of emails.
   */
  "ccEmails"?: Array<string> | null;
  "verificationType"?: DependentHostedNumberOrderEnumVerificationType;
  /**
   * Verification Document Sid.
   */
  "verificationDocumentSid"?: string | null;
  /**
   * Phone extension to use for ownership verification call.
   */
  "extension"?: string | null;
  /**
   * Seconds (0-30) to delay ownership verification call by.
   */
  "callDelay"?: number | null;
  /**
   * The digits passed during the ownership verification call.
   */
  "verificationCode"?: string | null;
  /**
   * List of IDs for ownership verification calls.
   */
  "verificationCallSids"?: Array<string> | null;
}

/**
 * A mapping of phone number capabilities.
 */
export class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities {
  "mms"?: boolean;
  "sms"?: boolean;
  "voice"?: boolean;
  "fax"?: boolean;
}

/**
 * Options to pass to each
 *
 * @property { DependentHostedNumberOrderStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
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
export interface DependentHostedNumberOrderListInstanceEachOptions {
  status?: DependentHostedNumberOrderStatus;
  phoneNumber?: string;
  incomingPhoneNumberSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  pageSize?: number;
  callback?: (
    item: DependentHostedNumberOrderInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { DependentHostedNumberOrderStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface DependentHostedNumberOrderListInstanceOptions {
  status?: DependentHostedNumberOrderStatus;
  phoneNumber?: string;
  incomingPhoneNumberSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { DependentHostedNumberOrderStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface DependentHostedNumberOrderListInstancePageOptions {
  status?: DependentHostedNumberOrderStatus;
  phoneNumber?: string;
  incomingPhoneNumberSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface DependentHostedNumberOrderListInstance {
  /**
   * Streams DependentHostedNumberOrderInstance records from the API.
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
      item: DependentHostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams DependentHostedNumberOrderInstance records from the API.
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
   * @param { DependentHostedNumberOrderListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: DependentHostedNumberOrderListInstanceEachOptions,
    callback?: (
      item: DependentHostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
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
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;
  /**
   * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
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
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<DependentHostedNumberOrderPage>;
  /**
   * Lists DependentHostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderInstance[]
    ) => any
  ): Promise<DependentHostedNumberOrderInstance[]>;
  /**
   * Lists DependentHostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentHostedNumberOrderListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: DependentHostedNumberOrderListInstanceOptions,
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderInstance[]
    ) => any
  ): Promise<DependentHostedNumberOrderInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<DependentHostedNumberOrderInstance[]>;
  /**
   * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
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
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;
  /**
   * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentHostedNumberOrderListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: DependentHostedNumberOrderListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;
  page(params?: any, callback?: any): Promise<DependentHostedNumberOrderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DependentHostedNumberOrderSolution {
  signingDocumentSid?: string;
}

interface DependentHostedNumberOrderListInstanceImpl
  extends DependentHostedNumberOrderListInstance {}
class DependentHostedNumberOrderListInstanceImpl
  implements DependentHostedNumberOrderListInstance
{
  _version?: HostedNumbers;
  _solution?: DependentHostedNumberOrderSolution;
  _uri?: string;
}

export function DependentHostedNumberOrderListInstance(
  version: HostedNumbers,
  signingDocumentSid: string
): DependentHostedNumberOrderListInstance {
  const instance = {} as DependentHostedNumberOrderListInstanceImpl;

  instance._version = version;
  instance._solution = { signingDocumentSid };
  instance._uri = `/AuthorizationDocuments/${signingDocumentSid}/DependentHostedNumberOrders`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<DependentHostedNumberOrderPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["incomingPhoneNumberSid"] !== undefined)
      data["IncomingPhoneNumberSid"] = params["incomingPhoneNumberSid"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
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
        new DependentHostedNumberOrderPage(
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
  ): Promise<DependentHostedNumberOrderPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new DependentHostedNumberOrderPage(
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

interface DependentHostedNumberOrderPayload
  extends DependentHostedNumberOrderResource,
    Page.TwilioResponsePayload {}

interface DependentHostedNumberOrderResource {
  items?: Array<PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder>;
  meta?: ListDeployedDevicesCertificateResponseMeta;
}

export class DependentHostedNumberOrderInstance {
  constructor(
    protected _version: HostedNumbers,
    payload: DependentHostedNumberOrderPayload,
    signingDocumentSid?: string
  ) {
    this.items = payload.items;
    this.meta = payload.meta;
  }

  items?: Array<PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder>;
  meta?: ListDeployedDevicesCertificateResponseMeta;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      items: this.items,
      meta: this.meta,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class DependentHostedNumberOrderPage extends Page<
  HostedNumbers,
  DependentHostedNumberOrderPayload,
  DependentHostedNumberOrderResource,
  DependentHostedNumberOrderInstance
> {
  /**
   * Initialize the DependentHostedNumberOrderPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: HostedNumbers,
    response: Response<string>,
    solution: DependentHostedNumberOrderSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DependentHostedNumberOrderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: DependentHostedNumberOrderPayload
  ): DependentHostedNumberOrderInstance {
    return new DependentHostedNumberOrderInstance(
      this._version,
      payload,
      this._solution.signingDocumentSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
