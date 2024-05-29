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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSet'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportWebsocketEvent = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSet);
  }
}(this, function(ApiClient, ReportDataSet) {
  'use strict';

  /**
   * The ReportWebsocketEvent model module.
   * @module com.ultracart.admin.v2.models/ReportWebsocketEvent
   * @version 3.10.207
   */

  /**
   * Constructs a new <code>ReportWebsocketEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportWebsocketEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportWebsocketEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportWebsocketEvent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportWebsocketEvent} The populated <code>ReportWebsocketEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('event_type'))
        obj.event_type = ApiClient.convertToType(data['event_type'], 'String');
      if (data.hasOwnProperty('query_completion'))
        obj.query_completion = ReportDataSet.constructFromObject(data['query_completion']);
    }
    return obj;
  }

  /**
   * Event type
   * @member {module:com.ultracart.admin.v2.models/ReportWebsocketEvent.EventTypeEnum} event_type
   */
  exports.prototype.event_type = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ReportDataSet} query_completion
   */
  exports.prototype.query_completion = undefined;


  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "ping"
     * @const
     */
    ping: "ping",

    /**
     * value: "query completion"
     * @const
     */
    query_completion: "query completion"
  };

  return exports;

}));
