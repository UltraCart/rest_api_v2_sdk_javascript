"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ExperimentVariation = _interopRequireDefault(require("./ExperimentVariation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Experiment model module.
 * @module com.ultracart.admin.v2.models/Experiment
 * @version 4.1.15
 */
var Experiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Experiment</code>.
   * @alias module:com.ultracart.admin.v2.models/Experiment
   */
  function Experiment() {
    _classCallCheck(this, Experiment);
    Experiment.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Experiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Experiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Experiment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Experiment} The populated <code>Experiment</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Experiment();
        if (data.hasOwnProperty('container_id')) {
          obj['container_id'] = _ApiClient["default"].convertToType(data['container_id'], 'String');
        }
        if (data.hasOwnProperty('duration_days')) {
          obj['duration_days'] = _ApiClient["default"].convertToType(data['duration_days'], 'Number');
        }
        if (data.hasOwnProperty('end_dts')) {
          obj['end_dts'] = _ApiClient["default"].convertToType(data['end_dts'], 'String');
        }
        if (data.hasOwnProperty('equal_weighting')) {
          obj['equal_weighting'] = _ApiClient["default"].convertToType(data['equal_weighting'], 'Boolean');
        }
        if (data.hasOwnProperty('experiment_type')) {
          obj['experiment_type'] = _ApiClient["default"].convertToType(data['experiment_type'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('objective')) {
          obj['objective'] = _ApiClient["default"].convertToType(data['objective'], 'String');
        }
        if (data.hasOwnProperty('objective_parameter')) {
          obj['objective_parameter'] = _ApiClient["default"].convertToType(data['objective_parameter'], 'String');
        }
        if (data.hasOwnProperty('openai_current_iteration')) {
          obj['openai_current_iteration'] = _ApiClient["default"].convertToType(data['openai_current_iteration'], 'Number');
        }
        if (data.hasOwnProperty('openai_element_type')) {
          obj['openai_element_type'] = _ApiClient["default"].convertToType(data['openai_element_type'], 'String');
        }
        if (data.hasOwnProperty('openai_model')) {
          obj['openai_model'] = _ApiClient["default"].convertToType(data['openai_model'], 'String');
        }
        if (data.hasOwnProperty('openai_total_iterations')) {
          obj['openai_total_iterations'] = _ApiClient["default"].convertToType(data['openai_total_iterations'], 'Number');
        }
        if (data.hasOwnProperty('optimization_type')) {
          obj['optimization_type'] = _ApiClient["default"].convertToType(data['optimization_type'], 'String');
        }
        if (data.hasOwnProperty('p95_sessions_needed')) {
          obj['p95_sessions_needed'] = _ApiClient["default"].convertToType(data['p95_sessions_needed'], 'Number');
        }
        if (data.hasOwnProperty('p_value')) {
          obj['p_value'] = _ApiClient["default"].convertToType(data['p_value'], 'Number');
        }
        if (data.hasOwnProperty('session_count')) {
          obj['session_count'] = _ApiClient["default"].convertToType(data['session_count'], 'Number');
        }
        if (data.hasOwnProperty('start_dts')) {
          obj['start_dts'] = _ApiClient["default"].convertToType(data['start_dts'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('storefront_experiment_oid')) {
          obj['storefront_experiment_oid'] = _ApiClient["default"].convertToType(data['storefront_experiment_oid'], 'Number');
        }
        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
        if (data.hasOwnProperty('variations')) {
          obj['variations'] = _ApiClient["default"].convertToType(data['variations'], [_ExperimentVariation["default"]]);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Contained ID where the experiment element was located
 * @member {String} container_id
 */
Experiment.prototype['container_id'] = undefined;

/**
 * Duration in days
 * @member {Number} duration_days
 */
Experiment.prototype['duration_days'] = undefined;

/**
 * End date/time
 * @member {String} end_dts
 */
Experiment.prototype['end_dts'] = undefined;

/**
 * Whether or not traffic is equally weighted or shifts over time during the experiment
 * @member {Boolean} equal_weighting
 */
Experiment.prototype['equal_weighting'] = undefined;

/**
 * The type of experiment
 * @member {String} experiment_type
 */
Experiment.prototype['experiment_type'] = undefined;

/**
 * Experiment id
 * @member {String} id
 */
Experiment.prototype['id'] = undefined;

/**
 * Experiment name
 * @member {String} name
 */
Experiment.prototype['name'] = undefined;

/**
 * Notes about the experiment
 * @member {String} notes
 */
Experiment.prototype['notes'] = undefined;

/**
 * Objective that is being optimized
 * @member {String} objective
 */
Experiment.prototype['objective'] = undefined;

/**
 * Objective parameter (such as event name) that is being optimized
 * @member {String} objective_parameter
 */
Experiment.prototype['objective_parameter'] = undefined;

/**
 * The current iteration of the OpenAI related experiment
 * @member {Number} openai_current_iteration
 */
Experiment.prototype['openai_current_iteration'] = undefined;

/**
 * The type of OpenAI element being experimented on
 * @member {module:com.ultracart.admin.v2.models/Experiment.OpenaiElementTypeEnum} openai_element_type
 */
Experiment.prototype['openai_element_type'] = undefined;

/**
 * The type of OpenAI model used
 * @member {String} openai_model
 */
Experiment.prototype['openai_model'] = undefined;

/**
 * The total number of iterations to perform on the experiment
 * @member {Number} openai_total_iterations
 */
Experiment.prototype['openai_total_iterations'] = undefined;

/**
 * Type of optimization
 * @member {String} optimization_type
 */
Experiment.prototype['optimization_type'] = undefined;

/**
 * Estimated sessions needed to achieve P95
 * @member {Number} p95_sessions_needed
 */
Experiment.prototype['p95_sessions_needed'] = undefined;

/**
 * Statistics p-value for the experiment
 * @member {Number} p_value
 */
Experiment.prototype['p_value'] = undefined;

/**
 * Total number of sessions in the experiment
 * @member {Number} session_count
 */
Experiment.prototype['session_count'] = undefined;

/**
 * Start date/time
 * @member {String} start_dts
 */
Experiment.prototype['start_dts'] = undefined;

/**
 * Status of the experiment
 * @member {module:com.ultracart.admin.v2.models/Experiment.StatusEnum} status
 */
Experiment.prototype['status'] = undefined;

/**
 * Storefront Experiment Oid
 * @member {Number} storefront_experiment_oid
 */
Experiment.prototype['storefront_experiment_oid'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
Experiment.prototype['storefront_oid'] = undefined;

/**
 * URI the experiment was started on
 * @member {String} uri
 */
Experiment.prototype['uri'] = undefined;

/**
 * Variations being tested in the experiment
 * @member {Array.<module:com.ultracart.admin.v2.models/ExperimentVariation>} variations
 */
Experiment.prototype['variations'] = undefined;

/**
 * Allowed values for the <code>openai_element_type</code> property.
 * @enum {String}
 * @readonly
 */
Experiment['OpenaiElementTypeEnum'] = {
  /**
   * value: "headline"
   * @const
   */
  "headline": "headline",
  /**
   * value: "text"
   * @const
   */
  "text": "text",
  /**
   * value: "textblock"
   * @const
   */
  "textblock": "textblock"
};

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Experiment['StatusEnum'] = {
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
  "Deleted": "Deleted"
};
var _default = exports["default"] = Experiment;