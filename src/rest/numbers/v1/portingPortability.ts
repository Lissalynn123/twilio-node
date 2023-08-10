/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type PortingPortabilityNumberType =
  | "LOCAL"
  | "UNKNOWN"
  | "MOBILE"
  | "TOLL-FREE";

/**
 * Options to pass to fetch a PortingPortabilityInstance
 */
export interface PortingPortabilityContextFetchOptions {
  /** The SID of the account where the phone number(s) will be ported. */
  targetAccountSid?: string;
}

export interface PortingPortabilityContext {
  /**
   * Fetch a PortingPortabilityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortabilityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PortingPortabilityInstance) => any
  ): Promise<PortingPortabilityInstance>;
  /**
   * Fetch a PortingPortabilityInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortabilityInstance
   */
  fetch(
    params: PortingPortabilityContextFetchOptions,
    callback?: (error: Error | null, item?: PortingPortabilityInstance) => any
  ): Promise<PortingPortabilityInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PortingPortabilityContextSolution {
  phoneNumber: string;
}

export class PortingPortabilityContextImpl
  implements PortingPortabilityContext
{
  protected _solution: PortingPortabilityContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, phoneNumber: string) {
    if (!isValidPathParam(phoneNumber)) {
      throw new Error("Parameter 'phoneNumber' is not valid.");
    }

    this._solution = { phoneNumber };
    this._uri = `/Porting/Portability/PhoneNumber/${phoneNumber}`;
  }

  fetch(
    params?:
      | PortingPortabilityContextFetchOptions
      | ((error: Error | null, item?: PortingPortabilityInstance) => any),
    callback?: (error: Error | null, item?: PortingPortabilityInstance) => any
  ): Promise<PortingPortabilityInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["targetAccountSid"] !== undefined)
      data["TargetAccountSid"] = params["targetAccountSid"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PortingPortabilityInstance(
          operationVersion,
          payload,
          instance._solution.phoneNumber
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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

interface PortingPortabilityPayload extends PortingPortabilityResource {}

interface PortingPortabilityResource {
  phone_number: string;
  account_sid: string;
  portable: boolean;
  pin_and_account_number_required: boolean;
  not_portable_reason: string;
  not_portable_reason_code: number;
  number_type: PortingPortabilityNumberType;
  country: string;
  messaging_carrier: string;
  voice_carrier: string;
  url: string;
}

export class PortingPortabilityInstance {
  protected _solution: PortingPortabilityContextSolution;
  protected _context?: PortingPortabilityContext;

  constructor(
    protected _version: V1,
    payload: PortingPortabilityResource,
    phoneNumber?: string
  ) {
    this.phoneNumber = payload.phone_number;
    this.accountSid = payload.account_sid;
    this.portable = payload.portable;
    this.pinAndAccountNumberRequired = payload.pin_and_account_number_required;
    this.notPortableReason = payload.not_portable_reason;
    this.notPortableReasonCode = deserialize.integer(
      payload.not_portable_reason_code
    );
    this.numberType = payload.number_type;
    this.country = payload.country;
    this.messagingCarrier = payload.messaging_carrier;
    this.voiceCarrier = payload.voice_carrier;
    this.url = payload.url;

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * The phone number which portability is to be checked. Phone numbers are in E.164 format (e.g. +16175551212).
   */
  phoneNumber: string;
  /**
   * The target account sid to which the number will be ported
   */
  accountSid: string;
  /**
   * Boolean flag specifying if phone number is portable or not.
   */
  portable: boolean;
  /**
   * Boolean flag specifying if PIN and account number is required for the phone number.
   */
  pinAndAccountNumberRequired: boolean;
  /**
   * Reason why the phone number cannot be ported into Twilio, `null` otherwise.
   */
  notPortableReason: string;
  /**
   * The Portability Reason Code for the phone number if it cannot be ported into Twilio, `null` otherwise. One of `22131`, `22132`, `22130`, `22133`, `22102` or `22135`.
   */
  notPortableReasonCode: number;
  numberType: PortingPortabilityNumberType;
  /**
   * Country the phone number belongs to.
   */
  country: string;
  /**
   * Current messaging carrier of the phone number
   */
  messagingCarrier: string;
  /**
   * Current voice carrier of the phone number
   */
  voiceCarrier: string;
  /**
   * This is the url of the request that you\'re trying to reach out to locate the resource.
   */
  url: string;

  private get _proxy(): PortingPortabilityContext {
    this._context =
      this._context ||
      new PortingPortabilityContextImpl(
        this._version,
        this._solution.phoneNumber
      );
    return this._context;
  }

  /**
   * Fetch a PortingPortabilityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortabilityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PortingPortabilityInstance) => any
  ): Promise<PortingPortabilityInstance>;
  /**
   * Fetch a PortingPortabilityInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortabilityInstance
   */
  fetch(
    params: PortingPortabilityContextFetchOptions,
    callback?: (error: Error | null, item?: PortingPortabilityInstance) => any
  ): Promise<PortingPortabilityInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: PortingPortabilityInstance) => any
  ): Promise<PortingPortabilityInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      phoneNumber: this.phoneNumber,
      accountSid: this.accountSid,
      portable: this.portable,
      pinAndAccountNumberRequired: this.pinAndAccountNumberRequired,
      notPortableReason: this.notPortableReason,
      notPortableReasonCode: this.notPortableReasonCode,
      numberType: this.numberType,
      country: this.country,
      messagingCarrier: this.messagingCarrier,
      voiceCarrier: this.voiceCarrier,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PortingPortabilitySolution {}

export interface PortingPortabilityListInstance {
  _version: V1;
  _solution: PortingPortabilitySolution;
  _uri: string;

  (phoneNumber: string): PortingPortabilityContext;
  get(phoneNumber: string): PortingPortabilityContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PortingPortabilityListInstance(
  version: V1
): PortingPortabilityListInstance {
  const instance = ((phoneNumber) =>
    instance.get(phoneNumber)) as PortingPortabilityListInstance;

  instance.get = function get(phoneNumber): PortingPortabilityContext {
    return new PortingPortabilityContextImpl(version, phoneNumber);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
