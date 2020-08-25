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
    root.UltraCartRestApiV2.EmailCommseqPostcardsRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCommseqPostcardsRequest model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest
   * @version 3.0.16
   */

  /**
   * Constructs a new <code>EmailCommseqPostcardsRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqPostcardsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest} The populated <code>EmailCommseqPostcardsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('esp_commseq_postcard_uuids'))
        obj.esp_commseq_postcard_uuids = ApiClient.convertToType(data['esp_commseq_postcard_uuids'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} esp_commseq_postcard_uuids
   */
  exports.prototype.esp_commseq_postcard_uuids = undefined;

  return exports;

}));
