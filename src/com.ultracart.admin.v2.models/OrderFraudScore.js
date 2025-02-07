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
    root.UltraCartRestApiV2.OrderFraudScore = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderFraudScore model module.
   * @module com.ultracart.admin.v2.models/OrderFraudScore
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>OrderFraudScore</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderFraudScore
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderFraudScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderFraudScore} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderFraudScore} The populated <code>OrderFraudScore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('anonymous_proxy'))
        obj.anonymous_proxy = ApiClient.convertToType(data['anonymous_proxy'], 'Boolean');
      if (data.hasOwnProperty('bin_match'))
        obj.bin_match = ApiClient.convertToType(data['bin_match'], 'String');
      if (data.hasOwnProperty('carder_email'))
        obj.carder_email = ApiClient.convertToType(data['carder_email'], 'Boolean');
      if (data.hasOwnProperty('country_code'))
        obj.country_code = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('country_match'))
        obj.country_match = ApiClient.convertToType(data['country_match'], 'Boolean');
      if (data.hasOwnProperty('customer_phone_in_billing_location'))
        obj.customer_phone_in_billing_location = ApiClient.convertToType(data['customer_phone_in_billing_location'], 'String');
      if (data.hasOwnProperty('distance_km'))
        obj.distance_km = ApiClient.convertToType(data['distance_km'], 'Number');
      if (data.hasOwnProperty('free_email'))
        obj.free_email = ApiClient.convertToType(data['free_email'], 'Boolean');
      if (data.hasOwnProperty('high_risk_country'))
        obj.high_risk_country = ApiClient.convertToType(data['high_risk_country'], 'Boolean');
      if (data.hasOwnProperty('ip_city'))
        obj.ip_city = ApiClient.convertToType(data['ip_city'], 'String');
      if (data.hasOwnProperty('ip_isp'))
        obj.ip_isp = ApiClient.convertToType(data['ip_isp'], 'String');
      if (data.hasOwnProperty('ip_latitude'))
        obj.ip_latitude = ApiClient.convertToType(data['ip_latitude'], 'String');
      if (data.hasOwnProperty('ip_longitude'))
        obj.ip_longitude = ApiClient.convertToType(data['ip_longitude'], 'String');
      if (data.hasOwnProperty('ip_org'))
        obj.ip_org = ApiClient.convertToType(data['ip_org'], 'String');
      if (data.hasOwnProperty('ip_region'))
        obj.ip_region = ApiClient.convertToType(data['ip_region'], 'String');
      if (data.hasOwnProperty('proxy_score'))
        obj.proxy_score = ApiClient.convertToType(data['proxy_score'], 'Number');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'Number');
      if (data.hasOwnProperty('ship_forwarder'))
        obj.ship_forwarder = ApiClient.convertToType(data['ship_forwarder'], 'Boolean');
      if (data.hasOwnProperty('spam_score'))
        obj.spam_score = ApiClient.convertToType(data['spam_score'], 'Number');
      if (data.hasOwnProperty('transparent_proxy'))
        obj.transparent_proxy = ApiClient.convertToType(data['transparent_proxy'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if the IP address is a known anonymous proxy server
   * @member {Boolean} anonymous_proxy
   */
  exports.prototype.anonymous_proxy = undefined;

  /**
   * Whether the BIN (first six digits) matched the country
   * @member {module:com.ultracart.admin.v2.models/OrderFraudScore.BinMatchEnum} bin_match
   */
  exports.prototype.bin_match = undefined;

  /**
   * True if the email address belongs to a known credit card fraudster
   * @member {Boolean} carder_email
   */
  exports.prototype.carder_email = undefined;

  /**
   * Country code
   * @member {String} country_code
   */
  exports.prototype.country_code = undefined;

  /**
   * Country code matches BIN country
   * @member {Boolean} country_match
   */
  exports.prototype.country_match = undefined;

  /**
   * Whether the customer's phone number is located in the area of the billing address
   * @member {String} customer_phone_in_billing_location
   */
  exports.prototype.customer_phone_in_billing_location = undefined;

  /**
   * Distance in kilometers between the IP address and the BIN
   * @member {Number} distance_km
   */
  exports.prototype.distance_km = undefined;

  /**
   * True if the email address is for a free service like gmail.com
   * @member {Boolean} free_email
   */
  exports.prototype.free_email = undefined;

  /**
   * True if the customer is in a high risk country known for internet fraud
   * @member {Boolean} high_risk_country
   */
  exports.prototype.high_risk_country = undefined;

  /**
   * City associated with the IP address
   * @member {String} ip_city
   */
  exports.prototype.ip_city = undefined;

  /**
   * ISP that owns the IP address
   * @member {String} ip_isp
   */
  exports.prototype.ip_isp = undefined;

  /**
   * Approximate latitude associated with the IP address
   * @member {String} ip_latitude
   */
  exports.prototype.ip_latitude = undefined;

  /**
   * Approximate longitude associated with the IP address
   * @member {String} ip_longitude
   */
  exports.prototype.ip_longitude = undefined;

  /**
   * Organization that owns the IP address
   * @member {String} ip_org
   */
  exports.prototype.ip_org = undefined;

  /**
   * State/region associated with the IP address
   * @member {String} ip_region
   */
  exports.prototype.ip_region = undefined;

  /**
   * Likelihood of the IP address being a proxy server
   * @member {Number} proxy_score
   */
  exports.prototype.proxy_score = undefined;

  /**
   * Overall score.  This is the score that is compared to see if the order is rejected or held for review by the fraud filter rules.
   * @member {Number} score
   */
  exports.prototype.score = undefined;

  /**
   * True if the address is a known ship forwarding company
   * @member {Boolean} ship_forwarder
   */
  exports.prototype.ship_forwarder = undefined;

  /**
   * Likelihood of the email address being associated with a spammer
   * @member {Number} spam_score
   */
  exports.prototype.spam_score = undefined;

  /**
   * True if the IP address that placed the order is a transparent proxy server
   * @member {Boolean} transparent_proxy
   */
  exports.prototype.transparent_proxy = undefined;


  /**
   * Allowed values for the <code>bin_match</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BinMatchEnum = {
    /**
     * value: "NA"
     * @const
     */
    NA: "NA",

    /**
     * value: "No"
     * @const
     */
    No: "No",

    /**
     * value: "NotFound"
     * @const
     */
    NotFound: "NotFound",

    /**
     * value: "Yes"
     * @const
     */
    Yes: "Yes"
  };

  return exports;

}));
