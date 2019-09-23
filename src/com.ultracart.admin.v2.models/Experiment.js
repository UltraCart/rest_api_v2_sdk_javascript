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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ExperimentVariation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExperimentVariation'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Experiment = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ExperimentVariation);
  }
}(this, function(ApiClient, ExperimentVariation) {
  'use strict';




  /**
   * The Experiment model module.
   * @module com.ultracart.admin.v2.models/Experiment
   * @version 2.4.33
   */

  /**
   * Constructs a new <code>Experiment</code>.
   * @alias module:com.ultracart.admin.v2.models/Experiment
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>Experiment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Experiment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Experiment} The populated <code>Experiment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('container_id')) {
        obj['container_id'] = ApiClient.convertToType(data['container_id'], 'String');
      }
      if (data.hasOwnProperty('duration_days')) {
        obj['duration_days'] = ApiClient.convertToType(data['duration_days'], 'Number');
      }
      if (data.hasOwnProperty('end_dts')) {
        obj['end_dts'] = ApiClient.convertToType(data['end_dts'], 'String');
      }
      if (data.hasOwnProperty('equal_weighting')) {
        obj['equal_weighting'] = ApiClient.convertToType(data['equal_weighting'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('objective')) {
        obj['objective'] = ApiClient.convertToType(data['objective'], 'String');
      }
      if (data.hasOwnProperty('optimization_type')) {
        obj['optimization_type'] = ApiClient.convertToType(data['optimization_type'], 'String');
      }
      if (data.hasOwnProperty('session_count')) {
        obj['session_count'] = ApiClient.convertToType(data['session_count'], 'Number');
      }
      if (data.hasOwnProperty('start_dts')) {
        obj['start_dts'] = ApiClient.convertToType(data['start_dts'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('storefront_experiment_oid')) {
        obj['storefront_experiment_oid'] = ApiClient.convertToType(data['storefront_experiment_oid'], 'Number');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [ExperimentVariation]);
      }
    }
    return obj;
  }

  /**
   * Contained ID where the experiment element was located
   * @member {String} container_id
   */
  exports.prototype['container_id'] = undefined;
  /**
   * Duration in days
   * @member {Number} duration_days
   */
  exports.prototype['duration_days'] = undefined;
  /**
   * End date/time
   * @member {String} end_dts
   */
  exports.prototype['end_dts'] = undefined;
  /**
   * Whether or not traffic is equally weighted or shifts over time during the experiment
   * @member {Boolean} equal_weighting
   */
  exports.prototype['equal_weighting'] = undefined;
  /**
   * Experiment id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Experiment name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Notes about the experiment
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * Objective that is being optimized
   * @member {String} objective
   */
  exports.prototype['objective'] = undefined;
  /**
   * Type of optimization
   * @member {String} optimization_type
   */
  exports.prototype['optimization_type'] = undefined;
  /**
   * Total number of sessions in the experiment
   * @member {Number} session_count
   */
  exports.prototype['session_count'] = undefined;
  /**
   * Start date/time
   * @member {String} start_dts
   */
  exports.prototype['start_dts'] = undefined;
  /**
   * Status of the experiment
   * @member {module:com.ultracart.admin.v2.models/Experiment.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Storefront Experiment Oid
   * @member {Number} storefront_experiment_oid
   */
  exports.prototype['storefront_experiment_oid'] = undefined;
  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype['storefront_oid'] = undefined;
  /**
   * URI the experiment was started on
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * Variations being tested in the experiment
   * @member {Array.<module:com.ultracart.admin.v2.models/ExperimentVariation>} variations
   */
  exports.prototype['variations'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",
    /**
     * value: "Ended"
     * @const
     */
    "Ended": "Ended",
    /**
     * value: "Deleted"
     * @const
     */
    "Deleted": "Deleted"  };


  return exports;
}));

