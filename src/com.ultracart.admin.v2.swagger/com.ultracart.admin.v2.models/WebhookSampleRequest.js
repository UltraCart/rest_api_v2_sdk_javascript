/**
 * UltraCart Rest API V2
 * This is the next generation UltraCart REST API...
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/HTTPHeader'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HTTPHeader'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WebhookSampleRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.HTTPHeader);
  }
}(this, function(ApiClient, HTTPHeader) {
  'use strict';




  /**
   * The WebhookSampleRequest model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/WebhookSampleRequest
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>WebhookSampleRequest</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/WebhookSampleRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>WebhookSampleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/WebhookSampleRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/WebhookSampleRequest} The populated <code>WebhookSampleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('request')) {
        obj['request'] = ApiClient.convertToType(data['request'], 'String');
      }
      if (data.hasOwnProperty('request_headers')) {
        obj['request_headers'] = ApiClient.convertToType(data['request_headers'], [HTTPHeader]);
      }
      if (data.hasOwnProperty('request_id')) {
        obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} request
   */
  exports.prototype['request'] = undefined;
  /**
   * @member {Array.<module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/HTTPHeader>} request_headers
   */
  exports.prototype['request_headers'] = undefined;
  /**
   * @member {String} request_id
   */
  exports.prototype['request_id'] = undefined;
  /**
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


