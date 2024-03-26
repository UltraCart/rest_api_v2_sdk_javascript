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
    root.UltraCartRestApiV2.CartMarketing = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartMarketing model module.
   * @module com.ultracart.admin.v2.models/CartMarketing
   * @version 3.10.191
   */

  /**
   * Constructs a new <code>CartMarketing</code>.
   * @alias module:com.ultracart.admin.v2.models/CartMarketing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartMarketing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartMarketing} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartMarketing} The populated <code>CartMarketing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('advertising_source'))
        obj.advertising_source = ApiClient.convertToType(data['advertising_source'], 'String');
      if (data.hasOwnProperty('cell_phone_opt_in'))
        obj.cell_phone_opt_in = ApiClient.convertToType(data['cell_phone_opt_in'], 'Boolean');
      if (data.hasOwnProperty('mailing_list_opt_in'))
        obj.mailing_list_opt_in = ApiClient.convertToType(data['mailing_list_opt_in'], 'Boolean');
    }
    return obj;
  }

  /**
   * The advertising source the customer indicated
   * @member {String} advertising_source
   */
  exports.prototype.advertising_source = undefined;

  /**
   * True if the customer agrees to receiving marketing SMS messages
   * @member {Boolean} cell_phone_opt_in
   */
  exports.prototype.cell_phone_opt_in = undefined;

  /**
   * True if the customer agrees to receiving marketing emails
   * @member {Boolean} mailing_list_opt_in
   */
  exports.prototype.mailing_list_opt_in = undefined;

  return exports;

}));
