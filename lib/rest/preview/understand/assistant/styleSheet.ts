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
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

/**
 * Options to pass to update a StyleSheetInstance
 *
 * @property { any } [styleSheet] The JSON Style sheet string
 */
export interface StyleSheetContextUpdateOptions {
  styleSheet?: any;
}

export interface StyleSheetContext {
  /**
   * Fetch a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;

  /**
   * Update a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  update(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;
  /**
   * Update a StyleSheetInstance
   *
   * @param { StyleSheetContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  update(
    params: StyleSheetContextUpdateOptions,
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;
  update(params?: any, callback?: any): Promise<StyleSheetInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StyleSheetContextSolution {
  assistantSid?: string;
}

export class StyleSheetContextImpl implements StyleSheetContext {
  protected _solution: StyleSheetContextSolution;
  protected _uri: string;

  constructor(protected _version: Understand, assistantSid: string) {
    this._solution = { assistantSid };
    this._uri = `/Assistants/${assistantSid}/StyleSheet`;
  }

  fetch(callback?: any): Promise<StyleSheetInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new StyleSheetInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<StyleSheetInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["styleSheet"] !== undefined)
      data["StyleSheet"] = serialize.object(params["styleSheet"]);

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
        new StyleSheetInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
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

interface StyleSheetPayload extends StyleSheetResource {}

interface StyleSheetResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class StyleSheetInstance {
  protected _solution: StyleSheetContextSolution;
  protected _context?: StyleSheetContext;

  constructor(
    protected _version: Understand,
    payload: StyleSheetPayload,
    assistantSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

    this._solution = { assistantSid: assistantSid || this.assistantSid };
  }

  /**
   * The unique ID of the Account that created this Assistant
   */
  accountSid?: string | null;
  /**
   * The unique ID of the Assistant
   */
  assistantSid?: string | null;
  url?: string | null;
  /**
   * The JSON style sheet object
   */
  data?: any | null;

  private get _proxy(): StyleSheetContext {
    this._context =
      this._context ||
      new StyleSheetContextImpl(this._version, this._solution.assistantSid);
    return this._context;
  }

  /**
   * Fetch a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  update(
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;
  /**
   * Update a StyleSheetInstance
   *
   * @param { StyleSheetContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  update(
    params: StyleSheetContextUpdateOptions,
    callback?: (error: Error | null, item?: StyleSheetInstance) => any
  ): Promise<StyleSheetInstance>;
  update(params?: any, callback?: any): Promise<StyleSheetInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assistantSid: this.assistantSid,
      url: this.url,
      data: this.data,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface StyleSheetListInstance {
  (): StyleSheetContext;
  get(): StyleSheetContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StyleSheetSolution {
  assistantSid?: string;
}

interface StyleSheetListInstanceImpl extends StyleSheetListInstance {}
class StyleSheetListInstanceImpl implements StyleSheetListInstance {
  _version?: Understand;
  _solution?: StyleSheetSolution;
  _uri?: string;
}

export function StyleSheetListInstance(
  version: Understand,
  assistantSid: string
): StyleSheetListInstance {
  const instance = (() => instance.get()) as StyleSheetListInstanceImpl;

  instance.get = function get(): StyleSheetContext {
    return new StyleSheetContextImpl(version, assistantSid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = ``;

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
