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
    root.UltraCartRestApiV2.ApplyLibraryItemResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The ApplyLibraryItemResponse model module.
   * @module com.ultracart.admin.v2.models/ApplyLibraryItemResponse
   * @version 3.0.48
   */

  /**
   * Constructs a new <code>ApplyLibraryItemResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApplyLibraryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} The populated <code>ApplyLibraryItemResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cjson'))
        obj.cjson = ApiClient.convertToType(data['cjson'], 'String');
      if (data.hasOwnProperty('content_type'))
        obj.content_type = ApiClient.convertToType(data['content_type'], 'String');
      if (data.hasOwnProperty('email_template_vm_path'))
        obj.email_template_vm_path = ApiClient.convertToType(data['email_template_vm_path'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * Cjson from library item, only populated if this library item was a cjson snippet or marketing email (not transactional)
   * @member {String} cjson
   */
  exports.prototype.cjson = undefined;

  /**
   * flow, campaign, cjson, upsell, transactional_email or email
   * @member {String} content_type
   */
  exports.prototype.content_type = undefined;

  /**
   * If a marketing email was applied, this is the path to the template encapsulating the cjson.  This is needed for the UltraCart UI.
   * @member {String} email_template_vm_path
   */
  exports.prototype.email_template_vm_path = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * StoreFront oid where content originates necessary for tracking down relative assets
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * title of library item, usually the name of the flow or campaign, or description of cjson
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * UUID of marketing email or communication flow/campaign if this library item was an email, campaign or flow
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
