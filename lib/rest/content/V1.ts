/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Content
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import ContentBase from "../ContentBase";
import Version from "../../base/Version";
import { ContentListInstance } from "./v1/content";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Content
   *
   * @property { Twilio.Content.V1.ContentListInstance } contents - contents resource
   *
   * @param { Twilio.Content } domain - The Twilio domain
   */
  constructor(domain: ContentBase) {
    super(domain, "v1");
  }

  protected _contents?: ContentListInstance;

  get contents(): ContentListInstance {
    this._contents = this._contents || ContentListInstance(this);
    return this._contents;
  }
}
