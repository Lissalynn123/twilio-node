/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
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

export interface OpenidDiscoveryContext {
  /**
   * Fetch a OpenidDiscoveryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OpenidDiscoveryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OpenidDiscoveryContextSolution {}

export class OpenidDiscoveryContextImpl implements OpenidDiscoveryContext {
  protected _solution: OpenidDiscoveryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/well-known/openid-configuration`;
  }

  fetch(callback?: any): Promise<OpenidDiscoveryInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new OpenidDiscoveryInstance(operationVersion, payload)
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

interface OpenidDiscoveryPayload extends OpenidDiscoveryResource {}

interface OpenidDiscoveryResource {
  issuer?: string | null;
  authorization_endpoint?: string | null;
  device_authorization_endpoint?: string | null;
  token_endpoint?: string | null;
  userinfo_endpoint?: string | null;
  revocation_endpoint?: string | null;
  jwk_uri?: string | null;
  response_type_supported?: Array<string> | null;
  subject_type_supported?: Array<string> | null;
  id_token_signing_alg_values_supported?: Array<string> | null;
  scopes_supported?: Array<string> | null;
  claims_supported?: Array<string> | null;
  url?: string | null;
}

export class OpenidDiscoveryInstance {
  protected _solution: OpenidDiscoveryContextSolution;
  protected _context?: OpenidDiscoveryContext;

  constructor(protected _version: V1, payload: OpenidDiscoveryPayload) {
    this.issuer = payload.issuer;
    this.authorizationEndpoint = payload.authorization_endpoint;
    this.deviceAuthorizationEndpoint = payload.device_authorization_endpoint;
    this.tokenEndpoint = payload.token_endpoint;
    this.userinfoEndpoint = payload.userinfo_endpoint;
    this.revocationEndpoint = payload.revocation_endpoint;
    this.jwkUri = payload.jwk_uri;
    this.responseTypeSupported = payload.response_type_supported;
    this.subjectTypeSupported = payload.subject_type_supported;
    this.idTokenSigningAlgValuesSupported =
      payload.id_token_signing_alg_values_supported;
    this.scopesSupported = payload.scopes_supported;
    this.claimsSupported = payload.claims_supported;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The issuer URL
   */
  issuer?: string | null;
  /**
   * The URL of authorization endpoint
   */
  authorizationEndpoint?: string | null;
  /**
   * The URL of device code authorization endpoint
   */
  deviceAuthorizationEndpoint?: string | null;
  /**
   * The URL of token endpoint
   */
  tokenEndpoint?: string | null;
  /**
   * The URL of user info endpoint
   */
  userinfoEndpoint?: string | null;
  /**
   * The URL of revocation endpoint
   */
  revocationEndpoint?: string | null;
  /**
   * The URL of public JWK endpoint
   */
  jwkUri?: string | null;
  /**
   * List of response type supported for identity token
   */
  responseTypeSupported?: Array<string> | null;
  /**
   * List of subject supported for identity token
   */
  subjectTypeSupported?: Array<string> | null;
  /**
   * List of JWS signing algorithms supported for identity token
   */
  idTokenSigningAlgValuesSupported?: Array<string> | null;
  /**
   * List of scopes supported identity token
   */
  scopesSupported?: Array<string> | null;
  /**
   * List of claims supported for identity token
   */
  claimsSupported?: Array<string> | null;
  url?: string | null;

  private get _proxy(): OpenidDiscoveryContext {
    this._context =
      this._context || new OpenidDiscoveryContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a OpenidDiscoveryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OpenidDiscoveryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      issuer: this.issuer,
      authorizationEndpoint: this.authorizationEndpoint,
      deviceAuthorizationEndpoint: this.deviceAuthorizationEndpoint,
      tokenEndpoint: this.tokenEndpoint,
      userinfoEndpoint: this.userinfoEndpoint,
      revocationEndpoint: this.revocationEndpoint,
      jwkUri: this.jwkUri,
      responseTypeSupported: this.responseTypeSupported,
      subjectTypeSupported: this.subjectTypeSupported,
      idTokenSigningAlgValuesSupported: this.idTokenSigningAlgValuesSupported,
      scopesSupported: this.scopesSupported,
      claimsSupported: this.claimsSupported,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OpenidDiscoveryListInstance {
  (): OpenidDiscoveryContext;
  get(): OpenidDiscoveryContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OpenidDiscoverySolution {}

interface OpenidDiscoveryListInstanceImpl extends OpenidDiscoveryListInstance {}
class OpenidDiscoveryListInstanceImpl implements OpenidDiscoveryListInstance {
  _version?: V1;
  _solution?: OpenidDiscoverySolution;
  _uri?: string;
}

export function OpenidDiscoveryListInstance(
  version: V1
): OpenidDiscoveryListInstance {
  const instance = (() => instance.get()) as OpenidDiscoveryListInstanceImpl;

  instance.get = function get(): OpenidDiscoveryContext {
    return new OpenidDiscoveryContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
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
