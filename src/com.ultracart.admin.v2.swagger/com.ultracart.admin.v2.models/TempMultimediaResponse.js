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
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/TempMultimedia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ResponseMetadata'), require('./TempMultimedia'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TempMultimediaResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.TempMultimedia);
  }
}(this, function(ApiClient, Error, ResponseMetadata, TempMultimedia) {
  'use strict';




  /**
   * The TempMultimediaResponse model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/TempMultimediaResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>TempMultimediaResponse</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/TempMultimediaResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TempMultimediaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/TempMultimediaResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/TempMultimediaResponse} The populated <code>TempMultimediaResponse</code> instance.
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
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('temp_multimedia')) {
        obj['temp_multimedia'] = TempMultimedia.constructFromObject(data['temp_multimedia']);
      }
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/TempMultimedia} temp_multimedia
   */
  exports.prototype['temp_multimedia'] = undefined;



  return exports;
}));


