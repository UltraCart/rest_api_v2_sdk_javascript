/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
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
    define(['com.ultracart.admin.v2.swagger/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemDigitalItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemDigitalItem model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemDigitalItem
   * @version 2.0.9
   */

  /**
   * Constructs a new <code>ItemDigitalItem</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemDigitalItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ItemDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemDigitalItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemDigitalItem} The populated <code>ItemDigitalItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('creation_dts')) {
        obj['creation_dts'] = ApiClient.convertToType(data['creation_dts'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('file_size')) {
        obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Integer');
      }
      if (data.hasOwnProperty('mime_type')) {
        obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
      }
      if (data.hasOwnProperty('original_filename')) {
        obj['original_filename'] = ApiClient.convertToType(data['original_filename'], 'String');
      }
    }
    return obj;
  }

  /**
   * File creation date
   * @member {String} creation_dts
   */
  exports.prototype['creation_dts'] = undefined;
  /**
   * Description of the digital item
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * File size
   * @member {Integer} file_size
   */
  exports.prototype['file_size'] = undefined;
  /**
   * Mime type associated with the file
   * @member {String} mime_type
   */
  exports.prototype['mime_type'] = undefined;
  /**
   * Original filename
   * @member {String} original_filename
   */
  exports.prototype['original_filename'] = undefined;



  return exports;
}));


