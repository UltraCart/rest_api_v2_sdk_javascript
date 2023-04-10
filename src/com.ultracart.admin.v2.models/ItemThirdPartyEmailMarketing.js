/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemThirdPartyEmailMarketing = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemThirdPartyEmailMarketing model module.
   * @module com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing
   * @version 3.10.128
   */

  /**
   * Constructs a new <code>ItemThirdPartyEmailMarketing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemThirdPartyEmailMarketing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing} The populated <code>ItemThirdPartyEmailMarketing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_tags'))
        obj.add_tags = ApiClient.convertToType(data['add_tags'], ['String']);
      if (data.hasOwnProperty('provider_name'))
        obj.provider_name = ApiClient.convertToType(data['provider_name'], 'String');
      if (data.hasOwnProperty('remove_tags'))
        obj.remove_tags = ApiClient.convertToType(data['remove_tags'], ['String']);
      if (data.hasOwnProperty('subscribe_lists'))
        obj.subscribe_lists = ApiClient.convertToType(data['subscribe_lists'], ['String']);
      if (data.hasOwnProperty('unsubscribe_lists'))
        obj.unsubscribe_lists = ApiClient.convertToType(data['unsubscribe_lists'], ['String']);
    }
    return obj;
  }

  /**
   * Add tags
   * @member {Array.<String>} add_tags
   */
  exports.prototype.add_tags = undefined;

  /**
   * Provider name
   * @member {module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing.ProviderNameEnum} provider_name
   */
  exports.prototype.provider_name = undefined;

  /**
   * Remove tags
   * @member {Array.<String>} remove_tags
   */
  exports.prototype.remove_tags = undefined;

  /**
   * Subscribe to lists
   * @member {Array.<String>} subscribe_lists
   */
  exports.prototype.subscribe_lists = undefined;

  /**
   * Unsubscribe from lists
   * @member {Array.<String>} unsubscribe_lists
   */
  exports.prototype.unsubscribe_lists = undefined;


  /**
   * Allowed values for the <code>provider_name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProviderNameEnum = {
    /**
     * value: "ActiveCampaign"
     * @const
     */
    ActiveCampaign: "ActiveCampaign",

    /**
     * value: "AWeber"
     * @const
     */
    AWeber: "AWeber",

    /**
     * value: "Campaign Monitor"
     * @const
     */
    Campaign_Monitor: "Campaign Monitor",

    /**
     * value: "ConstantContact"
     * @const
     */
    ConstantContact: "ConstantContact",

    /**
     * value: "Emma"
     * @const
     */
    Emma: "Emma",

    /**
     * value: "GetResponse"
     * @const
     */
    GetResponse: "GetResponse",

    /**
     * value: "iContact"
     * @const
     */
    iContact: "iContact",

    /**
     * value: "Klaviyo"
     * @const
     */
    Klaviyo: "Klaviyo",

    /**
     * value: "Lyris"
     * @const
     */
    Lyris: "Lyris",

    /**
     * value: "LyrisHQ"
     * @const
     */
    LyrisHQ: "LyrisHQ",

    /**
     * value: "MailChimp"
     * @const
     */
    MailChimp: "MailChimp",

    /**
     * value: "SilverPop"
     * @const
     */
    SilverPop: "SilverPop"
  };

  return exports;

}));
