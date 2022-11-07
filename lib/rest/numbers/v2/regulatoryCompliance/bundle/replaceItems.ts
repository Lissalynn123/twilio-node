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
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type ReplaceItemsStatus =
  | "draft"
  | "pending-review"
  | "in-review"
  | "twilio-rejected"
  | "twilio-approved"
  | "provisionally-approved";

/**
 * Options to pass to create a ReplaceItemsInstance
 *
 * @property { string } fromBundleSid The source bundle sid to copy the item assignments from.
 */
export interface ReplaceItemsListInstanceCreateOptions {
  fromBundleSid: string;
}

export interface ReplaceItemsListInstance {
  /**
   * Create a ReplaceItemsInstance
   *
   * @param { ReplaceItemsListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReplaceItemsInstance
   */
  create(
    params: ReplaceItemsListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ReplaceItemsInstance) => any
  ): Promise<ReplaceItemsInstance>;
  create(params: any, callback?: any): Promise<ReplaceItemsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ReplaceItemsSolution {
  bundleSid?: string;
}

interface ReplaceItemsListInstanceImpl extends ReplaceItemsListInstance {}
class ReplaceItemsListInstanceImpl implements ReplaceItemsListInstance {
  _version?: V2;
  _solution?: ReplaceItemsSolution;
  _uri?: string;
}

export function ReplaceItemsListInstance(
  version: V2,
  bundleSid: string
): ReplaceItemsListInstance {
  const instance = {} as ReplaceItemsListInstanceImpl;

  instance._version = version;
  instance._solution = { bundleSid };
  instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/ReplaceItems`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ReplaceItemsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["fromBundleSid"] === null ||
      params["fromBundleSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['fromBundleSid']\" missing."
      );
    }

    let data: any = {};

    data["FromBundleSid"] = params["fromBundleSid"];

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
        new ReplaceItemsInstance(
          operationVersion,
          payload,
          this._solution.bundleSid
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

interface ReplaceItemsPayload extends ReplaceItemsResource {}

interface ReplaceItemsResource {
  sid?: string | null;
  account_sid?: string | null;
  regulation_sid?: string | null;
  friendly_name?: string | null;
  status?: ReplaceItemsStatus;
  valid_until?: Date | null;
  email?: string | null;
  status_callback?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class ReplaceItemsInstance {
  constructor(
    protected _version: V2,
    payload: ReplaceItemsPayload,
    bundleSid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.regulationSid = payload.regulation_sid;
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
    this.email = payload.email;
    this.statusCallback = payload.status_callback;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string of a regulation
   */
  regulationSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  status?: ReplaceItemsStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource will be valid until
   */
  validUntil?: Date | null;
  /**
   * The email address
   */
  email?: string | null;
  /**
   * The URL we call to inform your application of status changes
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
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      regulationSid: this.regulationSid,
      friendlyName: this.friendlyName,
      status: this.status,
      validUntil: this.validUntil,
      email: this.email,
      statusCallback: this.statusCallback,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
