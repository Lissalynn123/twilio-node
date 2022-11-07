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
import TrustedComms from "../../TrustedComms";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

/**
 * Options to pass to create a ChannelInstance
 *
 * @property { string } phoneNumberSid The unique SID identifier of the Phone Number of the Phone number to be assigned to the Branded Channel.
 */
export interface ChannelListInstanceCreateOptions {
  phoneNumberSid: string;
}

export interface ChannelListInstance {
  /**
   * Create a ChannelInstance
   *
   * @param { ChannelListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChannelInstance
   */
  create(
    params: ChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  create(params: any, callback?: any): Promise<ChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelSolution {
  brandedChannelSid?: string;
}

interface ChannelListInstanceImpl extends ChannelListInstance {}
class ChannelListInstanceImpl implements ChannelListInstance {
  _version?: TrustedComms;
  _solution?: ChannelSolution;
  _uri?: string;
}

export function ChannelListInstance(
  version: TrustedComms,
  brandedChannelSid: string
): ChannelListInstance {
  const instance = {} as ChannelListInstanceImpl;

  instance._version = version;
  instance._solution = { brandedChannelSid };
  instance._uri = `/BrandedChannels/${brandedChannelSid}/Channels`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["phoneNumberSid"] === null ||
      params["phoneNumberSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['phoneNumberSid']\" missing."
      );
    }

    let data: any = {};

    data["PhoneNumberSid"] = params["phoneNumberSid"];

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
        new ChannelInstance(
          operationVersion,
          payload,
          this._solution.brandedChannelSid
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

interface ChannelPayload extends ChannelResource {}

interface ChannelResource {
  account_sid?: string | null;
  business_sid?: string | null;
  brand_sid?: string | null;
  branded_channel_sid?: string | null;
  phone_number_sid?: string | null;
  phone_number?: string | null;
  url?: string | null;
}

export class ChannelInstance {
  constructor(
    protected _version: TrustedComms,
    payload: ChannelPayload,
    brandedChannelSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.businessSid = payload.business_sid;
    this.brandSid = payload.brand_sid;
    this.brandedChannelSid = payload.branded_channel_sid;
    this.phoneNumberSid = payload.phone_number_sid;
    this.phoneNumber = payload.phone_number;
    this.url = payload.url;
  }

  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * Business Sid.
   */
  businessSid?: string | null;
  /**
   * Brand Sid.
   */
  brandSid?: string | null;
  /**
   * Branded Channel Sid.
   */
  brandedChannelSid?: string | null;
  /**
   * Phone Number Sid to be branded.
   */
  phoneNumberSid?: string | null;
  /**
   * Twilio number to assign to the Branded Channel
   */
  phoneNumber?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      businessSid: this.businessSid,
      brandSid: this.brandSid,
      brandedChannelSid: this.brandedChannelSid,
      phoneNumberSid: this.phoneNumberSid,
      phoneNumber: this.phoneNumber,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
