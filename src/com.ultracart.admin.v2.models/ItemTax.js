/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemTaxExemption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemTaxExemption'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemTax = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemTaxExemption);
  }
}(this, function(ApiClient, ItemTaxExemption) {
  'use strict';




  /**
   * The ItemTax model module.
   * @module com.ultracart.admin.v2.models/ItemTax
   * @version 2.4.42
   */

  /**
   * Constructs a new <code>ItemTax</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTax
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemTax</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemTax} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemTax} The populated <code>ItemTax</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('exemptions')) {
        obj['exemptions'] = ApiClient.convertToType(data['exemptions'], [ItemTaxExemption]);
      }
      if (data.hasOwnProperty('tax_free')) {
        obj['tax_free'] = ApiClient.convertToType(data['tax_free'], 'Boolean');
      }
      if (data.hasOwnProperty('taxable_cost')) {
        obj['taxable_cost'] = ApiClient.convertToType(data['taxable_cost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Exemptions
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemTaxExemption>} exemptions
   */
  exports.prototype['exemptions'] = undefined;
  /**
   * True if tax free
   * @member {Boolean} tax_free
   */
  exports.prototype['tax_free'] = undefined;
  /**
   * Taxable cost if different than regular cost
   * @member {Number} taxable_cost
   */
  exports.prototype['taxable_cost'] = undefined;



  return exports;
}));


