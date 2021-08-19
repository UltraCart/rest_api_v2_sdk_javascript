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
    root.UltraCartRestApiV2.ItemCheckout = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemCheckout model module.
   * @module com.ultracart.admin.v2.models/ItemCheckout
   * @version 3.6.0
   */

  /**
   * Constructs a new <code>ItemCheckout</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemCheckout
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemCheckout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemCheckout} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemCheckout} The populated <code>ItemCheckout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('suppress_buysafe'))
        obj.suppress_buysafe = ApiClient.convertToType(data['suppress_buysafe'], 'Boolean');
      if (data.hasOwnProperty('terms'))
        obj.terms = ApiClient.convertToType(data['terms'], 'String');
      if (data.hasOwnProperty('terms_translated_text_instance_oid'))
        obj.terms_translated_text_instance_oid = ApiClient.convertToType(data['terms_translated_text_instance_oid'], 'Number');
    }
    return obj;
  }

  /**
   * True to suppress buySAFE (deprecated)
   * @member {Boolean} suppress_buysafe
   */
  exports.prototype.suppress_buysafe = undefined;

  /**
   * Terms for purchasing this item
   * @member {String} terms
   */
  exports.prototype.terms = undefined;

  /**
   * Terms translated text instance identifier
   * @member {Number} terms_translated_text_instance_oid
   */
  exports.prototype.terms_translated_text_instance_oid = undefined;

  return exports;

}));
