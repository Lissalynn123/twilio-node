/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the GoodDataList
 *
 * @param version - Version of the resource
 */
declare function GoodDataList(version: V1): GoodDataListInstance;

/**
 * Options to pass to create
 *
 * @property token - The Token HTTP request header
 */
interface GoodDataInstanceCreateOptions {
  token?: string;
}

interface GoodDataListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): GoodDataContext;
  /**
   * Constructs a good_data
   */
  get(): GoodDataContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface GoodDataPayload extends GoodDataResource, Page.TwilioResponsePayload {
}

interface GoodDataResource {
  gd_base_url: string;
  session_expiry: string;
  session_id: string;
  url: string;
  workspace_id: string;
}

interface GoodDataSolution {
}


declare class GoodDataContext {
  /**
   * Initialize the GoodDataContext
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * create a GoodDataInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: GoodDataInstance) => any): Promise<GoodDataInstance>;
  /**
   * create a GoodDataInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: GoodDataInstanceCreateOptions, callback?: (error: Error | null, item: GoodDataInstance) => any): Promise<GoodDataInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class GoodDataInstance extends SerializableClass {
  /**
   * Initialize the GoodDataContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: GoodDataPayload);

  private _proxy: GoodDataContext;
  /**
   * create a GoodDataInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, items: GoodDataInstance) => any): Promise<GoodDataInstance>;
  /**
   * create a GoodDataInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: GoodDataInstanceCreateOptions, callback?: (error: Error | null, items: GoodDataInstance) => any): Promise<GoodDataInstance>;
  gdBaseUrl: string;
  sessionExpiry: string;
  sessionId: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  workspaceId: string;
}


declare class GoodDataPage extends Page<V1, GoodDataPayload, GoodDataResource, GoodDataInstance> {
  /**
   * Initialize the GoodDataPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: GoodDataSolution);

  /**
   * Build an instance of GoodDataInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: GoodDataPayload): GoodDataInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { GoodDataContext, GoodDataInstance, GoodDataInstanceCreateOptions, GoodDataList, GoodDataListInstance, GoodDataPage, GoodDataPayload, GoodDataResource, GoodDataSolution }
