/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

declare class FaxResponse {
  /**
   * <Response> TwiML for Faxes
   */
  constructor();

  /**
   * <Receive> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  receive(attributes?: FaxResponse.ReceiveAttributes): void;
  /**
   * Convert to XML
   */
  toString(): string;
}

declare namespace FaxResponse {
  type ReceiveMediaType = "application/pdf" | "image/tiff";

  type ReceivePageSize = "letter" | "legal" | "a4";

  /**
   * Options to pass to receive
   *
   * @property action - Receive action URL
   * @property mediaType - The media type used to store media in the fax media store
   * @property method - Receive action URL method
   * @property pageSize - What size to interpret received pages as
   * @property storeMedia - Whether or not to store received media in the fax media store
   */
  export interface ReceiveAttributes {
    action?: string;
    mediaType?: ReceiveMediaType;
    method?: string;
    pageSize?: ReceivePageSize;
    storeMedia?: boolean;
  }
}

export = FaxResponse;
