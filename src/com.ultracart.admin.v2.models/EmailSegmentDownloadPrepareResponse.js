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
    root.UltraCartRestApiV2.EmailSegmentDownloadPrepareResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The EmailSegmentDownloadPrepareResponse model module.
   * @module com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse
   * @version 3.10.50
   */

  /**
   * Constructs a new <code>EmailSegmentDownloadPrepareResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailSegmentDownloadPrepareResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} The populated <code>EmailSegmentDownloadPrepareResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email_segment_rebuild_uuid'))
        obj.email_segment_rebuild_uuid = ApiClient.convertToType(data['email_segment_rebuild_uuid'], 'String');
      if (data.hasOwnProperty('email_segment_uuid'))
        obj.email_segment_uuid = ApiClient.convertToType(data['email_segment_uuid'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('percentage_complete'))
        obj.percentage_complete = ApiClient.convertToType(data['percentage_complete'], 'Number');
      if (data.hasOwnProperty('proceed'))
        obj.proceed = ApiClient.convertToType(data['proceed'], 'Boolean');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * @member {String} email_segment_rebuild_uuid
   */
  exports.prototype.email_segment_rebuild_uuid = undefined;

  /**
   * @member {String} email_segment_uuid
   */
  exports.prototype.email_segment_uuid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Number} percentage_complete
   */
  exports.prototype.percentage_complete = undefined;

  /**
   * @member {Boolean} proceed
   */
  exports.prototype.proceed = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
