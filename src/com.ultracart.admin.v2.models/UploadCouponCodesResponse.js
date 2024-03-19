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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ResponseMetadata'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.UploadCouponCodesResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The UploadCouponCodesResponse model module.
   * @module com.ultracart.admin.v2.models/UploadCouponCodesResponse
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>UploadCouponCodesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/UploadCouponCodesResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UploadCouponCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/UploadCouponCodesResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/UploadCouponCodesResponse} The populated <code>UploadCouponCodesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('duplicate_codes'))
        obj.duplicate_codes = ApiClient.convertToType(data['duplicate_codes'], ['String']);
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('rejected_codes'))
        obj.rejected_codes = ApiClient.convertToType(data['rejected_codes'], ['String']);
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('uploaded_codes'))
        obj.uploaded_codes = ApiClient.convertToType(data['uploaded_codes'], ['String']);
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * Duplicate codes
   * @member {Array.<String>} duplicate_codes
   */
  exports.prototype.duplicate_codes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * Rejected codes
   * @member {Array.<String>} rejected_codes
   */
  exports.prototype.rejected_codes = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * Uploaded codes
   * @member {Array.<String>} uploaded_codes
   */
  exports.prototype.uploaded_codes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
