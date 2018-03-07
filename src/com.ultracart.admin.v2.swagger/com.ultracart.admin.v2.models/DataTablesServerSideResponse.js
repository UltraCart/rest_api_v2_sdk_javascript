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
    root.UltraCartRestApiV2.DataTablesServerSideResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataTablesServerSideResponse model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/DataTablesServerSideResponse
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>DataTablesServerSideResponse</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/DataTablesServerSideResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DataTablesServerSideResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/DataTablesServerSideResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/DataTablesServerSideResponse} The populated <code>DataTablesServerSideResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('draw')) {
        obj['draw'] = ApiClient.convertToType(data['draw'], 'Integer');
      }
      if (data.hasOwnProperty('recordsFiltered')) {
        obj['recordsFiltered'] = ApiClient.convertToType(data['recordsFiltered'], 'Integer');
      }
      if (data.hasOwnProperty('recordsTotal')) {
        obj['recordsTotal'] = ApiClient.convertToType(data['recordsTotal'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} draw
   */
  exports.prototype['draw'] = undefined;
  /**
   * @member {Integer} recordsFiltered
   */
  exports.prototype['recordsFiltered'] = undefined;
  /**
   * @member {Integer} recordsTotal
   */
  exports.prototype['recordsTotal'] = undefined;



  return exports;
}));


