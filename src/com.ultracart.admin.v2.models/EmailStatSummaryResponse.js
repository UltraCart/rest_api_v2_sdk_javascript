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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailStatSummary', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailStatSummary'), require('./Error'), require('./ResponseMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailStatSummaryResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailStatSummary, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata);
  }
}(this, function(ApiClient, EmailStatSummary, Error, ResponseMetadata) {
  'use strict';




  /**
   * The EmailStatSummaryResponse model module.
   * @module com.ultracart.admin.v2.models/EmailStatSummaryResponse
   * @version 2.4.9
   */

  /**
   * Constructs a new <code>EmailStatSummaryResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStatSummaryResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EmailStatSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailStatSummaryResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailStatSummaryResponse} The populated <code>EmailStatSummaryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = Error.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = EmailStatSummary.constructFromObject(data['stats']);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/EmailStatSummary} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));

