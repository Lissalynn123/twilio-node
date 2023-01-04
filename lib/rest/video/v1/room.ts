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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { ParticipantListInstance } from "./room/participant";
import { RecordingRulesListInstance } from "./room/recordingRules";
import { RoomRecordingListInstance } from "./room/roomRecording";

type RoomRoomStatus = "in-progress" | "completed" | "failed";

type RoomRoomType = "go" | "peer-to-peer" | "group" | "group-small";

type RoomVideoCodec = "VP8" | "H264";

/**
 * Options to pass to update a RoomInstance
 */
export interface RoomContextUpdateOptions {
  /**  */
  status: RoomRoomStatus;
}

/**
 * Options to pass to create a RoomInstance
 */
export interface RoomListInstanceCreateOptions {
  /** Deprecated, now always considered to be true. */
  enableTurn?: boolean;
  /**  */
  type?: RoomRoomType;
  /** An application-defined string that uniquely identifies the resource. It can be used as a `room_sid` in place of the resource\\\'s `sid` in the URL to address the resource, assuming it does not contain any [reserved characters](https://tools.ietf.org/html/rfc3986#section-2.2) that would need to be URL encoded. This value is unique for `in-progress` rooms. SDK clients can use this name to connect to the room. REST API clients can use this name in place of the Room SID to interact with the room as long as the room is `in-progress`. */
  uniqueName?: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application on every room event. See [Status Callbacks](https://www.twilio.com/docs/video/api/status-callbacks) for more info. */
  statusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be `POST` or `GET`. */
  statusCallbackMethod?: string;
  /** The maximum number of concurrent Participants allowed in the room. Peer-to-peer rooms can have up to 10 Participants. Small Group rooms can have up to 4 Participants. Group rooms can have up to 50 Participants. */
  maxParticipants?: number;
  /** Whether to start recording when Participants connect. ***This feature is not available in `peer-to-peer` rooms.*** */
  recordParticipantsOnConnect?: boolean;
  /** An array of the video codecs that are supported when publishing a track in the room.  Can be: `VP8` and `H264`.  ***This feature is not available in `peer-to-peer` rooms*** */
  videoCodecs?: Array<RoomVideoCodec>;
  /** The region for the media server in Group Rooms.  Can be: one of the [available Media Regions](https://www.twilio.com/docs/video/ip-address-whitelisting#group-rooms-media-servers). ***This feature is not available in `peer-to-peer` rooms.*** */
  mediaRegion?: string;
  /** A collection of Recording Rules that describe how to include or exclude matching tracks for recording */
  recordingRules?: any;
  /** When set to true, indicates that the participants in the room will only publish audio. No video tracks will be allowed. Group rooms only. */
  audioOnly?: boolean;
  /** The maximum number of seconds a Participant can be connected to the room. The maximum possible value is 86400 seconds (24 hours). The default is 14400 seconds (4 hours). */
  maxParticipantDuration?: number;
  /** Configures how long (in minutes) a room will remain active after last participant leaves. Valid values range from 1 to 60 minutes (no fractions). */
  emptyRoomTimeout?: number;
  /** Configures how long (in minutes) a room will remain active if no one joins. Valid values range from 1 to 60 minutes (no fractions). */
  unusedRoomTimeout?: number;
  /** When set to true, indicated that this is the large room. */
  largeRoom?: boolean;
}
/**
 * Options to pass to each
 */
export interface RoomListInstanceEachOptions {
  /** Read only the rooms with this status. Can be: `in-progress` (default) or `completed` */
  status?: RoomRoomStatus;
  /** Read only rooms with the this `unique_name`. */
  uniqueName?: string;
  /** Read only rooms that started on or after this date, given as `YYYY-MM-DD`. */
  dateCreatedAfter?: Date;
  /** Read only rooms that started before this date, given as `YYYY-MM-DD`. */
  dateCreatedBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RoomInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RoomListInstanceOptions {
  /** Read only the rooms with this status. Can be: `in-progress` (default) or `completed` */
  status?: RoomRoomStatus;
  /** Read only rooms with the this `unique_name`. */
  uniqueName?: string;
  /** Read only rooms that started on or after this date, given as `YYYY-MM-DD`. */
  dateCreatedAfter?: Date;
  /** Read only rooms that started before this date, given as `YYYY-MM-DD`. */
  dateCreatedBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RoomListInstancePageOptions {
  /** Read only the rooms with this status. Can be: `in-progress` (default) or `completed` */
  status?: RoomRoomStatus;
  /** Read only rooms with the this `unique_name`. */
  uniqueName?: string;
  /** Read only rooms that started on or after this date, given as `YYYY-MM-DD`. */
  dateCreatedAfter?: Date;
  /** Read only rooms that started before this date, given as `YYYY-MM-DD`. */
  dateCreatedBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RoomContext {
  participants: ParticipantListInstance;
  recordingRules: RecordingRulesListInstance;
  recordings: RoomRecordingListInstance;

  /**
   * Fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance>;

  /**
   * Update a RoomInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  update(
    params: RoomContextUpdateOptions,
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance>;
  update(params: any, callback?: any): Promise<RoomInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoomContextSolution {
  sid?: string;
}

export class RoomContextImpl implements RoomContext {
  protected _solution: RoomContextSolution;
  protected _uri: string;

  protected _participants?: ParticipantListInstance;
  protected _recordingRules?: RecordingRulesListInstance;
  protected _recordings?: RoomRecordingListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Rooms/${sid}`;
  }

  get participants(): ParticipantListInstance {
    this._participants =
      this._participants ||
      ParticipantListInstance(this._version, this._solution.sid);
    return this._participants;
  }

  get recordingRules(): RecordingRulesListInstance {
    this._recordingRules =
      this._recordingRules ||
      RecordingRulesListInstance(this._version, this._solution.sid);
    return this._recordingRules;
  }

  get recordings(): RoomRecordingListInstance {
    this._recordings =
      this._recordings ||
      RoomRecordingListInstance(this._version, this._solution.sid);
    return this._recordings;
  }

  fetch(callback?: any): Promise<RoomInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RoomInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<RoomInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

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
        new RoomInstance(operationVersion, payload, this._solution.sid)
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

export type RoomStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface RoomPayload extends TwilioResponsePayload {
  rooms: RoomResource[];
}

interface RoomResource {
  sid?: string | null;
  status?: RoomRoomStatus;
  date_created?: Date | null;
  date_updated?: Date | null;
  account_sid?: string | null;
  enable_turn?: boolean | null;
  unique_name?: string | null;
  status_callback?: string | null;
  status_callback_method?: RoomStatusCallbackMethod;
  end_time?: Date | null;
  duration?: number | null;
  type?: RoomRoomType;
  max_participants?: number | null;
  max_participant_duration?: number | null;
  max_concurrent_published_tracks?: number | null;
  record_participants_on_connect?: boolean | null;
  video_codecs?: Array<RoomVideoCodec> | null;
  media_region?: string | null;
  audio_only?: boolean | null;
  empty_room_timeout?: number | null;
  unused_room_timeout?: number | null;
  large_room?: boolean | null;
  url?: string | null;
  links?: object | null;
}

export class RoomInstance {
  protected _solution: RoomContextSolution;
  protected _context?: RoomContext;

  constructor(protected _version: V1, payload: RoomResource, sid?: string) {
    this.sid = payload.sid;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.accountSid = payload.account_sid;
    this.enableTurn = payload.enable_turn;
    this.uniqueName = payload.unique_name;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.type = payload.type;
    this.maxParticipants = deserialize.integer(payload.max_participants);
    this.maxParticipantDuration = deserialize.integer(
      payload.max_participant_duration
    );
    this.maxConcurrentPublishedTracks = deserialize.integer(
      payload.max_concurrent_published_tracks
    );
    this.recordParticipantsOnConnect = payload.record_participants_on_connect;
    this.videoCodecs = payload.video_codecs;
    this.mediaRegion = payload.media_region;
    this.audioOnly = payload.audio_only;
    this.emptyRoomTimeout = deserialize.integer(payload.empty_room_timeout);
    this.unusedRoomTimeout = deserialize.integer(payload.unused_room_timeout);
    this.largeRoom = payload.large_room;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  status?: RoomRoomStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * Enable Twilio\'s Network Traversal TURN service
   */
  enableTurn?: boolean | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The URL to send status information to your application
   */
  statusCallback?: string | null;
  /**
   * The HTTP method we use to call status_callback
   */
  statusCallbackMethod?: RoomStatusCallbackMethod;
  /**
   * The UTC end time of the room in UTC ISO 8601 format
   */
  endTime?: Date | null;
  /**
   * The duration of the room in seconds
   */
  duration?: number | null;
  type?: RoomRoomType;
  /**
   * The maximum number of concurrent Participants allowed in the room
   */
  maxParticipants?: number | null;
  /**
   * The maximum number of seconds a Participant can be connected to the room
   */
  maxParticipantDuration?: number | null;
  /**
   * The maximum number of published tracks allowed in the room at the same time
   */
  maxConcurrentPublishedTracks?: number | null;
  /**
   * Whether to start recording when Participants connect
   */
  recordParticipantsOnConnect?: boolean | null;
  /**
   * An array of the video codecs that are supported when publishing a track in the room
   */
  videoCodecs?: Array<RoomVideoCodec> | null;
  /**
   * The region for the media server in Group Rooms
   */
  mediaRegion?: string | null;
  /**
   * Indicates whether the room will only contain audio track participants for group rooms.
   */
  audioOnly?: boolean | null;
  /**
   * The time a room will remain active after last participant leaves.
   */
  emptyRoomTimeout?: number | null;
  /**
   * The time a room will remain active when no one joins.
   */
  unusedRoomTimeout?: number | null;
  /**
   * Indicates if this is a large room.
   */
  largeRoom?: boolean | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): RoomContext {
    this._context =
      this._context || new RoomContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RoomInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  update(
    params: RoomContextUpdateOptions,
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance>;
  update(params: any, callback?: any): Promise<RoomInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Access the recordingRules.
   */
  recordingRules(): RecordingRulesListInstance {
    return this._proxy.recordingRules;
  }

  /**
   * Access the recordings.
   */
  recordings(): RoomRecordingListInstance {
    return this._proxy.recordings;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      status: this.status,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      accountSid: this.accountSid,
      enableTurn: this.enableTurn,
      uniqueName: this.uniqueName,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      endTime: this.endTime,
      duration: this.duration,
      type: this.type,
      maxParticipants: this.maxParticipants,
      maxParticipantDuration: this.maxParticipantDuration,
      maxConcurrentPublishedTracks: this.maxConcurrentPublishedTracks,
      recordParticipantsOnConnect: this.recordParticipantsOnConnect,
      videoCodecs: this.videoCodecs,
      mediaRegion: this.mediaRegion,
      audioOnly: this.audioOnly,
      emptyRoomTimeout: this.emptyRoomTimeout,
      unusedRoomTimeout: this.unusedRoomTimeout,
      largeRoom: this.largeRoom,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RoomListInstance {
  (sid: string): RoomContext;
  get(sid: string): RoomContext;

  /**
   * Create a RoomInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  create(
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance>;
  /**
   * Create a RoomInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  create(
    params: RoomListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance>;
  create(params?: any, callback?: any): Promise<RoomInstance>;

  /**
   * Streams RoomInstance records from the API.
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
    callback?: (item: RoomInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams RoomInstance records from the API.
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
   * @param { RoomListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: RoomListInstanceEachOptions,
    callback?: (item: RoomInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;
  /**
   * Retrieve a single target page of RoomInstance records from the API.
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
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;
  getPage(params?: any, callback?: any): Promise<RoomPage>;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RoomInstance[]) => any
  ): Promise<RoomInstance[]>;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoomListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: RoomListInstanceOptions,
    callback?: (error: Error | null, items: RoomInstance[]) => any
  ): Promise<RoomInstance[]>;
  list(params?: any, callback?: any): Promise<RoomInstance[]>;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoomListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: RoomListInstancePageOptions,
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;
  page(params?: any, callback?: any): Promise<RoomPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoomSolution {}

interface RoomListInstanceImpl extends RoomListInstance {}
class RoomListInstanceImpl implements RoomListInstance {
  _version?: V1;
  _solution?: RoomSolution;
  _uri?: string;
}

export function RoomListInstance(version: V1): RoomListInstance {
  const instance = ((sid) => instance.get(sid)) as RoomListInstanceImpl;

  instance.get = function get(sid): RoomContext {
    return new RoomContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Rooms`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<RoomInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["enableTurn"] !== undefined)
      data["EnableTurn"] = serialize.bool(params["enableTurn"]);
    if (params["type"] !== undefined) data["Type"] = params["type"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["maxParticipants"] !== undefined)
      data["MaxParticipants"] = params["maxParticipants"];
    if (params["recordParticipantsOnConnect"] !== undefined)
      data["RecordParticipantsOnConnect"] = serialize.bool(
        params["recordParticipantsOnConnect"]
      );
    if (params["videoCodecs"] !== undefined)
      data["VideoCodecs"] = serialize.map(params["videoCodecs"], (e) => e);
    if (params["mediaRegion"] !== undefined)
      data["MediaRegion"] = params["mediaRegion"];
    if (params["recordingRules"] !== undefined)
      data["RecordingRules"] = serialize.object(params["recordingRules"]);
    if (params["audioOnly"] !== undefined)
      data["AudioOnly"] = serialize.bool(params["audioOnly"]);
    if (params["maxParticipantDuration"] !== undefined)
      data["MaxParticipantDuration"] = params["maxParticipantDuration"];
    if (params["emptyRoomTimeout"] !== undefined)
      data["EmptyRoomTimeout"] = params["emptyRoomTimeout"];
    if (params["unusedRoomTimeout"] !== undefined)
      data["UnusedRoomTimeout"] = params["unusedRoomTimeout"];
    if (params["largeRoom"] !== undefined)
      data["LargeRoom"] = serialize.bool(params["largeRoom"]);

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
      (payload) => new RoomInstance(operationVersion, payload)
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
  ): Promise<RoomPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
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
      (payload) => new RoomPage(operationVersion, payload, this._solution)
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
  ): Promise<RoomPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new RoomPage(this._version, payload, this._solution)
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

export class RoomPage extends Page<
  V1,
  RoomPayload,
  RoomResource,
  RoomInstance
> {
  /**
   * Initialize the RoomPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoomSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RoomInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomResource): RoomInstance {
    return new RoomInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
