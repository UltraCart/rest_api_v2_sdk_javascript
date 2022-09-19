"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ExperimentVariationStat model module.
 * @module com.ultracart.admin.v2.models/ExperimentVariationStat
 * @version 4.0.63-RC
 */
var ExperimentVariationStat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExperimentVariationStat</code>.
   * @alias module:com.ultracart.admin.v2.models/ExperimentVariationStat
   */
  function ExperimentVariationStat() {
    _classCallCheck(this, ExperimentVariationStat);

    ExperimentVariationStat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExperimentVariationStat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExperimentVariationStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ExperimentVariationStat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ExperimentVariationStat} The populated <code>ExperimentVariationStat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExperimentVariationStat();

        if (data.hasOwnProperty('add_to_cart_count')) {
          obj['add_to_cart_count'] = _ApiClient["default"].convertToType(data['add_to_cart_count'], 'Number');
        }

        if (data.hasOwnProperty('bounce_count')) {
          obj['bounce_count'] = _ApiClient["default"].convertToType(data['bounce_count'], 'Number');
        }

        if (data.hasOwnProperty('duration_seconds_sum')) {
          obj['duration_seconds_sum'] = _ApiClient["default"].convertToType(data['duration_seconds_sum'], 'Number');
        }

        if (data.hasOwnProperty('event_count')) {
          obj['event_count'] = _ApiClient["default"].convertToType(data['event_count'], 'Number');
        }

        if (data.hasOwnProperty('initiate_checkout_count')) {
          obj['initiate_checkout_count'] = _ApiClient["default"].convertToType(data['initiate_checkout_count'], 'Number');
        }

        if (data.hasOwnProperty('order_count')) {
          obj['order_count'] = _ApiClient["default"].convertToType(data['order_count'], 'Number');
        }

        if (data.hasOwnProperty('order_item_count')) {
          obj['order_item_count'] = _ApiClient["default"].convertToType(data['order_item_count'], 'Number');
        }

        if (data.hasOwnProperty('page_view_count')) {
          obj['page_view_count'] = _ApiClient["default"].convertToType(data['page_view_count'], 'Number');
        }

        if (data.hasOwnProperty('revenue')) {
          obj['revenue'] = _ApiClient["default"].convertToType(data['revenue'], 'Number');
        }

        if (data.hasOwnProperty('session_count')) {
          obj['session_count'] = _ApiClient["default"].convertToType(data['session_count'], 'Number');
        }

        if (data.hasOwnProperty('sms_opt_in_count')) {
          obj['sms_opt_in_count'] = _ApiClient["default"].convertToType(data['sms_opt_in_count'], 'Number');
        }

        if (data.hasOwnProperty('stat_dts')) {
          obj['stat_dts'] = _ApiClient["default"].convertToType(data['stat_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExperimentVariationStat;
}();
/**
 * Total add to cart count for this variation
 * @member {Number} add_to_cart_count
 */


ExperimentVariationStat.prototype['add_to_cart_count'] = undefined;
/**
 * Total bounce count for this variation
 * @member {Number} bounce_count
 */

ExperimentVariationStat.prototype['bounce_count'] = undefined;
/**
 * Total number of seconds spent on the site for this variation
 * @member {Number} duration_seconds_sum
 */

ExperimentVariationStat.prototype['duration_seconds_sum'] = undefined;
/**
 * Total event count for this variation
 * @member {Number} event_count
 */

ExperimentVariationStat.prototype['event_count'] = undefined;
/**
 * Total initiate checkout count for this variation
 * @member {Number} initiate_checkout_count
 */

ExperimentVariationStat.prototype['initiate_checkout_count'] = undefined;
/**
 * Total order count for this variation
 * @member {Number} order_count
 */

ExperimentVariationStat.prototype['order_count'] = undefined;
/**
 * Total order item count for this variation
 * @member {Number} order_item_count
 */

ExperimentVariationStat.prototype['order_item_count'] = undefined;
/**
 * Total page view count for this variation
 * @member {Number} page_view_count
 */

ExperimentVariationStat.prototype['page_view_count'] = undefined;
/**
 * Total revenue for this variation
 * @member {Number} revenue
 */

ExperimentVariationStat.prototype['revenue'] = undefined;
/**
 * Total sessions for this variation
 * @member {Number} session_count
 */

ExperimentVariationStat.prototype['session_count'] = undefined;
/**
 * Total SMS opt in count for this variation
 * @member {Number} sms_opt_in_count
 */

ExperimentVariationStat.prototype['sms_opt_in_count'] = undefined;
/**
 * Date/time that the statistic was created
 * @member {String} stat_dts
 */

ExperimentVariationStat.prototype['stat_dts'] = undefined;
var _default = ExperimentVariationStat;
exports["default"] = _default;