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

import NumbersBase from "../NumbersBase";
import Version from "../../base/Version";
import { BulkEligibilityListInstance } from "./v1/bulkEligibility";
import { EligibilityListInstance } from "./v1/eligibility";
import { PortingPortInListInstance } from "./v1/portingPortIn";
import { PortingPortInPhoneNumberListInstance } from "./v1/portingPortInPhoneNumber";
import { PortingPortabilityListInstance } from "./v1/portingPortability";
import { PortingWebhookConfigurationListInstance } from "./v1/portingWebhookConfiguration";
import { PortingWebhookConfigurationDeleteListInstance } from "./v1/portingWebhookConfigurationDelete";
import { PortingWebhookConfigurationFetchListInstance } from "./v1/portingWebhookConfigurationFetch";
import { SigningRequestConfigurationListInstance } from "./v1/signingRequestConfiguration";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Numbers
   *
   * @param domain - The Twilio (Twilio.Numbers) domain
   */
  constructor(domain: NumbersBase) {
    super(domain, "v1");
  }

  /** bulkEligibilities - { Twilio.Numbers.V1.BulkEligibilityListInstance } resource */
  protected _bulkEligibilities?: BulkEligibilityListInstance;
  /** eligibilities - { Twilio.Numbers.V1.EligibilityListInstance } resource */
  protected _eligibilities?: EligibilityListInstance;
  /** portingPortIns - { Twilio.Numbers.V1.PortingPortInListInstance } resource */
  protected _portingPortIns?: PortingPortInListInstance;
  /** portingPortInPhoneNumber - { Twilio.Numbers.V1.PortingPortInPhoneNumberListInstance } resource */
  protected _portingPortInPhoneNumber?: PortingPortInPhoneNumberListInstance;
  /** portingPortabilities - { Twilio.Numbers.V1.PortingPortabilityListInstance } resource */
  protected _portingPortabilities?: PortingPortabilityListInstance;
  /** portingWebhookConfigurations - { Twilio.Numbers.V1.PortingWebhookConfigurationListInstance } resource */
  protected _portingWebhookConfigurations?: PortingWebhookConfigurationListInstance;
  /** portingWebhookConfigurationsDelete - { Twilio.Numbers.V1.PortingWebhookConfigurationDeleteListInstance } resource */
  protected _portingWebhookConfigurationsDelete?: PortingWebhookConfigurationDeleteListInstance;
  /** portingWebhookConfigurationFetch - { Twilio.Numbers.V1.PortingWebhookConfigurationFetchListInstance } resource */
  protected _portingWebhookConfigurationFetch?: PortingWebhookConfigurationFetchListInstance;
  /** signingRequestConfigurations - { Twilio.Numbers.V1.SigningRequestConfigurationListInstance } resource */
  protected _signingRequestConfigurations?: SigningRequestConfigurationListInstance;

  /** Getter for bulkEligibilities resource */
  get bulkEligibilities(): BulkEligibilityListInstance {
    this._bulkEligibilities =
      this._bulkEligibilities || BulkEligibilityListInstance(this);
    return this._bulkEligibilities;
  }

  /** Getter for eligibilities resource */
  get eligibilities(): EligibilityListInstance {
    this._eligibilities = this._eligibilities || EligibilityListInstance(this);
    return this._eligibilities;
  }

  /** Getter for portingPortIns resource */
  get portingPortIns(): PortingPortInListInstance {
    this._portingPortIns =
      this._portingPortIns || PortingPortInListInstance(this);
    return this._portingPortIns;
  }

  /** Getter for portingPortInPhoneNumber resource */
  get portingPortInPhoneNumber(): PortingPortInPhoneNumberListInstance {
    this._portingPortInPhoneNumber =
      this._portingPortInPhoneNumber ||
      PortingPortInPhoneNumberListInstance(this);
    return this._portingPortInPhoneNumber;
  }

  /** Getter for portingPortabilities resource */
  get portingPortabilities(): PortingPortabilityListInstance {
    this._portingPortabilities =
      this._portingPortabilities || PortingPortabilityListInstance(this);
    return this._portingPortabilities;
  }

  /** Getter for portingWebhookConfigurations resource */
  get portingWebhookConfigurations(): PortingWebhookConfigurationListInstance {
    this._portingWebhookConfigurations =
      this._portingWebhookConfigurations ||
      PortingWebhookConfigurationListInstance(this);
    return this._portingWebhookConfigurations;
  }

  /** Getter for portingWebhookConfigurationsDelete resource */
  get portingWebhookConfigurationsDelete(): PortingWebhookConfigurationDeleteListInstance {
    this._portingWebhookConfigurationsDelete =
      this._portingWebhookConfigurationsDelete ||
      PortingWebhookConfigurationDeleteListInstance(this);
    return this._portingWebhookConfigurationsDelete;
  }

  /** Getter for portingWebhookConfigurationFetch resource */
  get portingWebhookConfigurationFetch(): PortingWebhookConfigurationFetchListInstance {
    this._portingWebhookConfigurationFetch =
      this._portingWebhookConfigurationFetch ||
      PortingWebhookConfigurationFetchListInstance(this);
    return this._portingWebhookConfigurationFetch;
  }

  /** Getter for signingRequestConfigurations resource */
  get signingRequestConfigurations(): SigningRequestConfigurationListInstance {
    this._signingRequestConfigurations =
      this._signingRequestConfigurations ||
      SigningRequestConfigurationListInstance(this);
    return this._signingRequestConfigurations;
  }
}
