/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type RoomParticipantPublishedTrackKind = "audio" | "video" | "data";

/**
 * Options to pass to each
 */
export interface PublishedTrackListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: PublishedTrackInstance,
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
export interface PublishedTrackListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface PublishedTrackListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface PublishedTrackContext {
  /**
   * Fetch a PublishedTrackInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublishedTrackInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PublishedTrackInstance) => any
  ): Promise<PublishedTrackInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PublishedTrackContextSolution {
  roomSid?: string;
  participantSid?: string;
  sid?: string;
}

export class PublishedTrackContextImpl implements PublishedTrackContext {
  protected _solution: PublishedTrackContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    roomSid: string,
    participantSid: string,
    sid: string
  ) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    if (!isValidPathParam(participantSid)) {
      throw new Error("Parameter 'participantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { roomSid, participantSid, sid };
    this._uri = `/Rooms/${roomSid}/Participants/${participantSid}/PublishedTracks/${sid}`;
  }

  fetch(callback?: any): Promise<PublishedTrackInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PublishedTrackInstance(
          operationVersion,
          payload,
          this._solution.roomSid,
          this._solution.participantSid,
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

interface PublishedTrackPayload extends TwilioResponsePayload {
  published_tracks: PublishedTrackResource[];
}

interface PublishedTrackResource {
  sid?: string | null;
  participant_sid?: string | null;
  room_sid?: string | null;
  name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  enabled?: boolean | null;
  kind?: RoomParticipantPublishedTrackKind;
  url?: string | null;
}

export class PublishedTrackInstance {
  protected _solution: PublishedTrackContextSolution;
  protected _context?: PublishedTrackContext;

  constructor(
    protected _version: V1,
    payload: PublishedTrackResource,
    roomSid: string,
    participantSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.participantSid = payload.participant_sid;
    this.roomSid = payload.room_sid;
    this.name = payload.name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.enabled = payload.enabled;
    this.kind = payload.kind;
    this.url = payload.url;

    this._solution = { roomSid, participantSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Participant resource with the published track
   */
  participantSid?: string | null;
  /**
   * The SID of the Room resource where the track is published
   */
  roomSid?: string | null;
  /**
   * The track name
   */
  name?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * Whether the track is enabled
   */
  enabled?: boolean | null;
  kind?: RoomParticipantPublishedTrackKind;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): PublishedTrackContext {
    this._context =
      this._context ||
      new PublishedTrackContextImpl(
        this._version,
        this._solution.roomSid,
        this._solution.participantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a PublishedTrackInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublishedTrackInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PublishedTrackInstance) => any
  ): Promise<PublishedTrackInstance> {
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
      participantSid: this.participantSid,
      roomSid: this.roomSid,
      name: this.name,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      enabled: this.enabled,
      kind: this.kind,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PublishedTrackListInstance {
  (sid: string): PublishedTrackContext;
  get(sid: string): PublishedTrackContext;

  /**
   * Streams PublishedTrackInstance records from the API.
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
      item: PublishedTrackInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams PublishedTrackInstance records from the API.
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
   * @param { PublishedTrackListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: PublishedTrackListInstanceEachOptions,
    callback?: (
      item: PublishedTrackInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of PublishedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: PublishedTrackPage) => any
  ): Promise<PublishedTrackPage>;
  /**
   * Retrieve a single target page of PublishedTrackInstance records from the API.
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
    callback?: (error: Error | null, items: PublishedTrackPage) => any
  ): Promise<PublishedTrackPage>;
  getPage(params?: any, callback?: any): Promise<PublishedTrackPage>;
  /**
   * Lists PublishedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: PublishedTrackInstance[]) => any
  ): Promise<PublishedTrackInstance[]>;
  /**
   * Lists PublishedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PublishedTrackListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: PublishedTrackListInstanceOptions,
    callback?: (error: Error | null, items: PublishedTrackInstance[]) => any
  ): Promise<PublishedTrackInstance[]>;
  list(params?: any, callback?: any): Promise<PublishedTrackInstance[]>;
  /**
   * Retrieve a single page of PublishedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: PublishedTrackPage) => any
  ): Promise<PublishedTrackPage>;
  /**
   * Retrieve a single page of PublishedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PublishedTrackListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: PublishedTrackListInstancePageOptions,
    callback?: (error: Error | null, items: PublishedTrackPage) => any
  ): Promise<PublishedTrackPage>;
  page(params?: any, callback?: any): Promise<PublishedTrackPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PublishedTrackSolution {
  roomSid?: string;
  participantSid?: string;
}

interface PublishedTrackListInstanceImpl extends PublishedTrackListInstance {}
class PublishedTrackListInstanceImpl implements PublishedTrackListInstance {
  _version?: V1;
  _solution?: PublishedTrackSolution;
  _uri?: string;
}

export function PublishedTrackListInstance(
  version: V1,
  roomSid: string,
  participantSid: string
): PublishedTrackListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  if (!isValidPathParam(participantSid)) {
    throw new Error("Parameter 'participantSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as PublishedTrackListInstanceImpl;

  instance.get = function get(sid): PublishedTrackContext {
    return new PublishedTrackContextImpl(version, roomSid, participantSid, sid);
  };

  instance._version = version;
  instance._solution = { roomSid, participantSid };
  instance._uri = `/Rooms/${roomSid}/Participants/${participantSid}/PublishedTracks`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<PublishedTrackPage> {
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
        new PublishedTrackPage(operationVersion, payload, this._solution)
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
  ): Promise<PublishedTrackPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new PublishedTrackPage(this._version, payload, this._solution)
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

export class PublishedTrackPage extends Page<
  V1,
  PublishedTrackPayload,
  PublishedTrackResource,
  PublishedTrackInstance
> {
  /**
   * Initialize the PublishedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: PublishedTrackSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PublishedTrackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PublishedTrackResource): PublishedTrackInstance {
    return new PublishedTrackInstance(
      this._version,
      payload,
      this._solution.roomSid,
      this._solution.participantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
