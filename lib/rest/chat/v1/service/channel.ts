/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
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
import { InviteListInstance } from "./channel/invite";
import { MemberListInstance } from "./channel/member";
import { MessageListInstance } from "./channel/message";

type ChannelChannelType = "public" | "private";

/**
 * Options to pass to update a ChannelInstance
 */
export interface ChannelContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service. */
  uniqueName?: string;
  /** A valid JSON string that contains application-specific data. */
  attributes?: string;
}

/**
 * Options to pass to create a ChannelInstance
 */
export interface ChannelListInstanceCreateOptions {
  /** A descriptive string that you create to describe the new resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service. */
  uniqueName?: string;
  /** A valid JSON string that contains application-specific data. */
  attributes?: string;
  /**  */
  type?: ChannelChannelType;
}
/**
 * Options to pass to each
 */
export interface ChannelListInstanceEachOptions {
  /** The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`. */
  type?: Array<ChannelChannelType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ChannelListInstanceOptions {
  /** The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`. */
  type?: Array<ChannelChannelType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ChannelListInstancePageOptions {
  /** The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`. */
  type?: Array<ChannelChannelType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ChannelContext {
  invites: InviteListInstance;
  members: MemberListInstance;
  messages: MessageListInstance;

  /**
   * Remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Update a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    params: ChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  update(params?: any, callback?: any): Promise<ChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class ChannelContextImpl implements ChannelContext {
  protected _solution: ChannelContextSolution;
  protected _uri: string;

  protected _invites?: InviteListInstance;
  protected _members?: MemberListInstance;
  protected _messages?: MessageListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${sid}`;
  }

  get invites(): InviteListInstance {
    this._invites =
      this._invites ||
      InviteListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._invites;
  }

  get members(): MemberListInstance {
    this._members =
      this._members ||
      MemberListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._members;
  }

  get messages(): MessageListInstance {
    this._messages =
      this._messages ||
      MessageListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._messages;
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

  fetch(callback?: any): Promise<ChannelInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ChannelInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];

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
        new ChannelInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface ChannelPayload extends TwilioResponsePayload {
  channels: ChannelResource[];
}

interface ChannelResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  attributes?: string | null;
  type?: ChannelChannelType;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
  members_count?: number | null;
  messages_count?: number | null;
  url?: string | null;
  links?: object | null;
}

export class ChannelInstance {
  protected _solution: ChannelContextSolution;
  protected _context?: ChannelContext;

  constructor(
    protected _version: V1,
    payload: ChannelResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.attributes = payload.attributes;
    this.type = payload.type;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;
    this.membersCount = deserialize.integer(payload.members_count);
    this.messagesCount = deserialize.integer(payload.messages_count);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
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
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The JSON string that stores application-specific data
   */
  attributes?: string | null;
  type?: ChannelChannelType;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The identity of the User that created the channel
   */
  createdBy?: string | null;
  /**
   * The number of Members in the Channel
   */
  membersCount?: number | null;
  /**
   * The number of Messages in the Channel
   */
  messagesCount?: number | null;
  /**
   * The absolute URL of the Channel resource
   */
  url?: string | null;
  /**
   * Absolute URLs to access the Members, Messages , Invites and, if it exists, the last Message for the Channel
   */
  links?: object | null;

  private get _proxy(): ChannelContext {
    this._context =
      this._context ||
      new ChannelContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ChannelInstance
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
   * Fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Update a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    params: ChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  update(params?: any, callback?: any): Promise<ChannelInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the invites.
   */
  invites(): InviteListInstance {
    return this._proxy.invites;
  }

  /**
   * Access the members.
   */
  members(): MemberListInstance {
    return this._proxy.members;
  }

  /**
   * Access the messages.
   */
  messages(): MessageListInstance {
    return this._proxy.messages;
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
      serviceSid: this.serviceSid,
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      attributes: this.attributes,
      type: this.type,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
      membersCount: this.membersCount,
      messagesCount: this.messagesCount,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChannelListInstance {
  (sid: string): ChannelContext;
  get(sid: string): ChannelContext;

  /**
   * Create a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  create(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Create a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  create(
    params: ChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  create(params?: any, callback?: any): Promise<ChannelInstance>;

  /**
   * Streams ChannelInstance records from the API.
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
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ChannelInstance records from the API.
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
   * @param { ChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ChannelListInstanceEachOptions,
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
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
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  getPage(params?: any, callback?: any): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ChannelInstance[]) => any
  ): Promise<ChannelInstance[]>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ChannelListInstanceOptions,
    callback?: (error: Error | null, items: ChannelInstance[]) => any
  ): Promise<ChannelInstance[]>;
  list(params?: any, callback?: any): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ChannelListInstancePageOptions,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  page(params?: any, callback?: any): Promise<ChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelSolution {
  serviceSid?: string;
}

interface ChannelListInstanceImpl extends ChannelListInstance {}
class ChannelListInstanceImpl implements ChannelListInstance {
  _version?: V1;
  _solution?: ChannelSolution;
  _uri?: string;
}

export function ChannelListInstance(
  version: V1,
  serviceSid: string
): ChannelListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ChannelListInstanceImpl;

  instance.get = function get(sid): ChannelContext {
    return new ChannelContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Channels`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<ChannelInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["type"] !== undefined) data["Type"] = params["type"];

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
          this._solution.serviceSid
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
  ): Promise<ChannelPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["type"] !== undefined)
      data["Type"] = serialize.map(params["type"], (e) => e);
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
      (payload) => new ChannelPage(operationVersion, payload, this._solution)
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
  ): Promise<ChannelPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ChannelPage(this._version, payload, this._solution)
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

export class ChannelPage extends Page<
  V1,
  ChannelPayload,
  ChannelResource,
  ChannelInstance
> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelResource): ChannelInstance {
    return new ChannelInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
