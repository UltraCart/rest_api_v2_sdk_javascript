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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ExperimentVariation = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExperimentVariation model module.
   * @module com.ultracart.admin.v2.models/ExperimentVariation
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>ExperimentVariation</code>.
   * @alias module:com.ultracart.admin.v2.models/ExperimentVariation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExperimentVariation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ExperimentVariation} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ExperimentVariation} The populated <code>ExperimentVariation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_to_cart_count'))
        obj.add_to_cart_count = ApiClient.convertToType(data['add_to_cart_count'], 'Number');
      if (data.hasOwnProperty('average_duration_seconds'))
        obj.average_duration_seconds = ApiClient.convertToType(data['average_duration_seconds'], 'Number');
      if (data.hasOwnProperty('average_objective_per_session'))
        obj.average_objective_per_session = ApiClient.convertToType(data['average_objective_per_session'], 'Number');
      if (data.hasOwnProperty('average_order_value'))
        obj.average_order_value = ApiClient.convertToType(data['average_order_value'], 'Number');
      if (data.hasOwnProperty('bounce_count'))
        obj.bounce_count = ApiClient.convertToType(data['bounce_count'], 'Number');
      if (data.hasOwnProperty('conversion_rate'))
        obj.conversion_rate = ApiClient.convertToType(data['conversion_rate'], 'Number');
      if (data.hasOwnProperty('duration_seconds_sum'))
        obj.duration_seconds_sum = ApiClient.convertToType(data['duration_seconds_sum'], 'Number');
      if (data.hasOwnProperty('event_count'))
        obj.event_count = ApiClient.convertToType(data['event_count'], 'Number');
      if (data.hasOwnProperty('initiate_checkout_count'))
        obj.initiate_checkout_count = ApiClient.convertToType(data['initiate_checkout_count'], 'Number');
      if (data.hasOwnProperty('order_count'))
        obj.order_count = ApiClient.convertToType(data['order_count'], 'Number');
      if (data.hasOwnProperty('original_traffic_percentage'))
        obj.original_traffic_percentage = ApiClient.convertToType(data['original_traffic_percentage'], 'Number');
      if (data.hasOwnProperty('page_view_count'))
        obj.page_view_count = ApiClient.convertToType(data['page_view_count'], 'Number');
      if (data.hasOwnProperty('revenue'))
        obj.revenue = ApiClient.convertToType(data['revenue'], 'Number');
      if (data.hasOwnProperty('session_count'))
        obj.session_count = ApiClient.convertToType(data['session_count'], 'Number');
      if (data.hasOwnProperty('traffic_percentage'))
        obj.traffic_percentage = ApiClient.convertToType(data['traffic_percentage'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('variation_name'))
        obj.variation_name = ApiClient.convertToType(data['variation_name'], 'String');
      if (data.hasOwnProperty('variation_number'))
        obj.variation_number = ApiClient.convertToType(data['variation_number'], 'Number');
      if (data.hasOwnProperty('winner'))
        obj.winner = ApiClient.convertToType(data['winner'], 'Boolean');
    }
    return obj;
  }

  /**
   * Total add to cart count for this variation
   * @member {Number} add_to_cart_count
   */
  exports.prototype.add_to_cart_count = undefined;

  /**
   * Average duration seconds per session for this variation
   * @member {Number} average_duration_seconds
   */
  exports.prototype.average_duration_seconds = undefined;

  /**
   * Average objective value per session for this variation
   * @member {Number} average_objective_per_session
   */
  exports.prototype.average_objective_per_session = undefined;

  /**
   * Average order value for this variation
   * @member {Number} average_order_value
   */
  exports.prototype.average_order_value = undefined;

  /**
   * Total bounce count for this variation
   * @member {Number} bounce_count
   */
  exports.prototype.bounce_count = undefined;

  /**
   * Conversion rate for this variation
   * @member {Number} conversion_rate
   */
  exports.prototype.conversion_rate = undefined;

  /**
   * Total number of seconds spent on the site for this variation
   * @member {Number} duration_seconds_sum
   */
  exports.prototype.duration_seconds_sum = undefined;

  /**
   * Total event ocunt for this variation
   * @member {Number} event_count
   */
  exports.prototype.event_count = undefined;

  /**
   * Total initiate checkout count for this variation
   * @member {Number} initiate_checkout_count
   */
  exports.prototype.initiate_checkout_count = undefined;

  /**
   * Total order count for this variation
   * @member {Number} order_count
   */
  exports.prototype.order_count = undefined;

  /**
   * Percentage of the traffic the variation originally started out with
   * @member {Number} original_traffic_percentage
   */
  exports.prototype.original_traffic_percentage = undefined;

  /**
   * Total page view count for this variation
   * @member {Number} page_view_count
   */
  exports.prototype.page_view_count = undefined;

  /**
   * Total revenue for this variation
   * @member {Number} revenue
   */
  exports.prototype.revenue = undefined;

  /**
   * Total sessions for this variation
   * @member {Number} session_count
   */
  exports.prototype.session_count = undefined;

  /**
   * Percentage of the traffic this variation is currently receiving
   * @member {Number} traffic_percentage
   */
  exports.prototype.traffic_percentage = undefined;

  /**
   * Url of the variation if this experiment is a url experiment.
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Name of the variation
   * @member {String} variation_name
   */
  exports.prototype.variation_name = undefined;

  /**
   * Variation number
   * @member {Number} variation_number
   */
  exports.prototype.variation_number = undefined;

  /**
   * True if this variation has been declared the winner
   * @member {Boolean} winner
   */
  exports.prototype.winner = undefined;

  return exports;

}));
