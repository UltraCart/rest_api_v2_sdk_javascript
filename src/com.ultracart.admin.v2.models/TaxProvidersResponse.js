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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/TaxProviderAvalara', 'com.ultracart.admin.v2.models/TaxProviderSelf', 'com.ultracart.admin.v2.models/TaxProviderSovos', 'com.ultracart.admin.v2.models/TaxProviderTaxJar', 'com.ultracart.admin.v2.models/TaxProviderUltraCart', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ResponseMetadata'), require('./TaxProviderAvalara'), require('./TaxProviderSelf'), require('./TaxProviderSovos'), require('./TaxProviderTaxJar'), require('./TaxProviderUltraCart'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxProvidersResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.TaxProviderAvalara, root.UltraCartRestApiV2.TaxProviderSelf, root.UltraCartRestApiV2.TaxProviderSovos, root.UltraCartRestApiV2.TaxProviderTaxJar, root.UltraCartRestApiV2.TaxProviderUltraCart, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, TaxProviderAvalara, TaxProviderSelf, TaxProviderSovos, TaxProviderTaxJar, TaxProviderUltraCart, Warning) {
  'use strict';

  /**
   * The TaxProvidersResponse model module.
   * @module com.ultracart.admin.v2.models/TaxProvidersResponse
   * @version 3.10.24
   */

  /**
   * Constructs a new <code>TaxProvidersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProvidersResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProvidersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProvidersResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProvidersResponse} The populated <code>TaxProvidersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('avalara'))
        obj.avalara = TaxProviderAvalara.constructFromObject(data['avalara']);
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('self'))
        obj.self = TaxProviderSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('sovos'))
        obj.sovos = TaxProviderSovos.constructFromObject(data['sovos']);
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('taxjar'))
        obj.taxjar = TaxProviderTaxJar.constructFromObject(data['taxjar']);
      if (data.hasOwnProperty('ultracart'))
        obj.ultracart = TaxProviderUltraCart.constructFromObject(data['ultracart']);
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/TaxProviderAvalara} avalara
   */
  exports.prototype.avalara = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/TaxProviderSelf} self
   */
  exports.prototype.self = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/TaxProviderSovos} sovos
   */
  exports.prototype.sovos = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} taxjar
   */
  exports.prototype.taxjar = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} ultracart
   */
  exports.prototype.ultracart = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
