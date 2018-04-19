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
    root.UltraCartRestApiV2.ResultSet = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResultSet model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ResultSet
   * @version 2.0.9
   */

  /**
   * Constructs a new <code>ResultSet</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ResultSet
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ResultSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ResultSet} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ResultSet} The populated <code>ResultSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
      if (data.hasOwnProperty('more')) {
        obj['more'] = ApiClient.convertToType(data['more'], 'Boolean');
      }
      if (data.hasOwnProperty('next_offset')) {
        obj['next_offset'] = ApiClient.convertToType(data['next_offset'], 'Integer');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Integer');
      }
      if (data.hasOwnProperty('total_records')) {
        obj['total_records'] = ApiClient.convertToType(data['total_records'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Number of results in this set
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Maximum number of results that can be returned in a set
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * True if there are more results to query
   * @member {Boolean} more
   */
  exports.prototype['more'] = undefined;
  /**
   * The next offset that you should query to retrieve more results
   * @member {Integer} next_offset
   */
  exports.prototype['next_offset'] = undefined;
  /**
   * Offset of this result set (zero based)
   * @member {Integer} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * The total number of records in the result set.  May be null if the number is not known and the client should continue iterating as long as more is true.
   * @member {Integer} total_records
   */
  exports.prototype['total_records'] = undefined;



  return exports;
}));


