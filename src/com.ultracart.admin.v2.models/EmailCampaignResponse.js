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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailCampaign', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailCampaign'), require('./Error'), require('./ResponseMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailCampaignResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailCampaign, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata);
  }
}(this, function(ApiClient, EmailCampaign, Error, ResponseMetadata) {
  'use strict';




  /**
   * The EmailCampaignResponse model module.
   * @module com.ultracart.admin.v2.models/EmailCampaignResponse
   * @version 2.4.110
   */

  /**
   * Constructs a new <code>EmailCampaignResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCampaignResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EmailCampaignResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCampaignResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCampaignResponse} The populated <code>EmailCampaignResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaign')) {
        obj['campaign'] = EmailCampaign.constructFromObject(data['campaign']);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = Error.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/EmailCampaign} campaign
   */
  exports.prototype['campaign'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));


