"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutoOrderItemFutureSchedule = _interopRequireDefault(require("./AutoOrderItemFutureSchedule"));
var _AutoOrderItemOption = _interopRequireDefault(require("./AutoOrderItemOption"));
var _AutoOrderItemSimpleSchedule = _interopRequireDefault(require("./AutoOrderItemSimpleSchedule"));
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
 * The AutoOrderItem model module.
 * @module com.ultracart.admin.v2.models/AutoOrderItem
 * @version 4.0.244
 */
var AutoOrderItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrderItem</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderItem
   */
  function AutoOrderItem() {
    _classCallCheck(this, AutoOrderItem);
    AutoOrderItem.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AutoOrderItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AutoOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderItem} The populated <code>AutoOrderItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrderItem();
        if (data.hasOwnProperty('arbitrary_item_id')) {
          obj['arbitrary_item_id'] = _ApiClient["default"].convertToType(data['arbitrary_item_id'], 'String');
        }
        if (data.hasOwnProperty('arbitrary_percentage_discount')) {
          obj['arbitrary_percentage_discount'] = _ApiClient["default"].convertToType(data['arbitrary_percentage_discount'], 'Number');
        }
        if (data.hasOwnProperty('arbitrary_quantity')) {
          obj['arbitrary_quantity'] = _ApiClient["default"].convertToType(data['arbitrary_quantity'], 'Number');
        }
        if (data.hasOwnProperty('arbitrary_schedule_days')) {
          obj['arbitrary_schedule_days'] = _ApiClient["default"].convertToType(data['arbitrary_schedule_days'], 'Number');
        }
        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost'], 'Number');
        }
        if (data.hasOwnProperty('arbitrary_unit_cost_remaining_orders')) {
          obj['arbitrary_unit_cost_remaining_orders'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost_remaining_orders'], 'Number');
        }
        if (data.hasOwnProperty('auto_order_item_oid')) {
          obj['auto_order_item_oid'] = _ApiClient["default"].convertToType(data['auto_order_item_oid'], 'Number');
        }
        if (data.hasOwnProperty('calculated_next_shipment_dts')) {
          obj['calculated_next_shipment_dts'] = _ApiClient["default"].convertToType(data['calculated_next_shipment_dts'], 'String');
        }
        if (data.hasOwnProperty('first_order_dts')) {
          obj['first_order_dts'] = _ApiClient["default"].convertToType(data['first_order_dts'], 'String');
        }
        if (data.hasOwnProperty('frequency')) {
          obj['frequency'] = _ApiClient["default"].convertToType(data['frequency'], 'String');
        }
        if (data.hasOwnProperty('future_schedules')) {
          obj['future_schedules'] = _ApiClient["default"].convertToType(data['future_schedules'], [_AutoOrderItemFutureSchedule["default"]]);
        }
        if (data.hasOwnProperty('last_order_dts')) {
          obj['last_order_dts'] = _ApiClient["default"].convertToType(data['last_order_dts'], 'String');
        }
        if (data.hasOwnProperty('life_time_value')) {
          obj['life_time_value'] = _ApiClient["default"].convertToType(data['life_time_value'], 'Number');
        }
        if (data.hasOwnProperty('next_item_id')) {
          obj['next_item_id'] = _ApiClient["default"].convertToType(data['next_item_id'], 'String');
        }
        if (data.hasOwnProperty('next_preshipment_notice_dts')) {
          obj['next_preshipment_notice_dts'] = _ApiClient["default"].convertToType(data['next_preshipment_notice_dts'], 'String');
        }
        if (data.hasOwnProperty('next_shipment_dts')) {
          obj['next_shipment_dts'] = _ApiClient["default"].convertToType(data['next_shipment_dts'], 'String');
        }
        if (data.hasOwnProperty('no_order_after_dts')) {
          obj['no_order_after_dts'] = _ApiClient["default"].convertToType(data['no_order_after_dts'], 'String');
        }
        if (data.hasOwnProperty('number_of_rebills')) {
          obj['number_of_rebills'] = _ApiClient["default"].convertToType(data['number_of_rebills'], 'Number');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_AutoOrderItemOption["default"]]);
        }
        if (data.hasOwnProperty('original_item_id')) {
          obj['original_item_id'] = _ApiClient["default"].convertToType(data['original_item_id'], 'String');
        }
        if (data.hasOwnProperty('original_quantity')) {
          obj['original_quantity'] = _ApiClient["default"].convertToType(data['original_quantity'], 'Number');
        }
        if (data.hasOwnProperty('paused')) {
          obj['paused'] = _ApiClient["default"].convertToType(data['paused'], 'Boolean');
        }
        if (data.hasOwnProperty('paypal_payer_id')) {
          obj['paypal_payer_id'] = _ApiClient["default"].convertToType(data['paypal_payer_id'], 'String');
        }
        if (data.hasOwnProperty('paypal_recurring_payment_profile_id')) {
          obj['paypal_recurring_payment_profile_id'] = _ApiClient["default"].convertToType(data['paypal_recurring_payment_profile_id'], 'String');
        }
        if (data.hasOwnProperty('preshipment_notice_sent')) {
          obj['preshipment_notice_sent'] = _ApiClient["default"].convertToType(data['preshipment_notice_sent'], 'Boolean');
        }
        if (data.hasOwnProperty('rebill_value')) {
          obj['rebill_value'] = _ApiClient["default"].convertToType(data['rebill_value'], 'Number');
        }
        if (data.hasOwnProperty('remaining_repeat_count')) {
          obj['remaining_repeat_count'] = _ApiClient["default"].convertToType(data['remaining_repeat_count'], 'Number');
        }
        if (data.hasOwnProperty('simple_schedule')) {
          obj['simple_schedule'] = _AutoOrderItemSimpleSchedule["default"].constructFromObject(data['simple_schedule']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Arbitrary item id that should be rebilled instead of the normal schedule
 * @member {String} arbitrary_item_id
 */
AutoOrderItem.prototype['arbitrary_item_id'] = undefined;

/**
 * An arbitrary percentage discount to provide on future rebills
 * @member {Number} arbitrary_percentage_discount
 */
AutoOrderItem.prototype['arbitrary_percentage_discount'] = undefined;

/**
 * Arbitrary quantity to rebill
 * @member {Number} arbitrary_quantity
 */
AutoOrderItem.prototype['arbitrary_quantity'] = undefined;

/**
 * The number of days to rebill if the frequency is set to an arbitrary number of days
 * @member {Number} arbitrary_schedule_days
 */
AutoOrderItem.prototype['arbitrary_schedule_days'] = undefined;

/**
 * Arbitrary unit cost that rebills of this item should occur at
 * @member {Number} arbitrary_unit_cost
 */
AutoOrderItem.prototype['arbitrary_unit_cost'] = undefined;

/**
 * The number of rebills to give the arbitrary unit cost on before reverting to normal pricing.
 * @member {Number} arbitrary_unit_cost_remaining_orders
 */
AutoOrderItem.prototype['arbitrary_unit_cost_remaining_orders'] = undefined;

/**
 * Primary key of AutoOrderItem
 * @member {Number} auto_order_item_oid
 */
AutoOrderItem.prototype['auto_order_item_oid'] = undefined;

/**
 * Calculated Date/time that this item is scheduled to rebill.  Will be null if no more shipments are going to occur on this item
 * @member {String} calculated_next_shipment_dts
 */
AutoOrderItem.prototype['calculated_next_shipment_dts'] = undefined;

/**
 * Date/time of the first order of this item.  Null if item added to auto order and has not been rebilled yet.
 * @member {String} first_order_dts
 */
AutoOrderItem.prototype['first_order_dts'] = undefined;

/**
 * Frequency of the rebill if not a fixed schedule
 * @member {module:com.ultracart.admin.v2.models/AutoOrderItem.FrequencyEnum} frequency
 */
AutoOrderItem.prototype['frequency'] = undefined;

/**
 * The future rebill schedule for this item up to the next ten rebills
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule>} future_schedules
 */
AutoOrderItem.prototype['future_schedules'] = undefined;

/**
 * Date/time of the last order of this item
 * @member {String} last_order_dts
 */
AutoOrderItem.prototype['last_order_dts'] = undefined;

/**
 * The life time value of this item including the original purchase
 * @member {Number} life_time_value
 */
AutoOrderItem.prototype['life_time_value'] = undefined;

/**
 * Calculated next item id
 * @member {String} next_item_id
 */
AutoOrderItem.prototype['next_item_id'] = undefined;

/**
 * The date/time of when the next pre-shipment notice should be sent
 * @member {String} next_preshipment_notice_dts
 */
AutoOrderItem.prototype['next_preshipment_notice_dts'] = undefined;

/**
 * Date/time that this item is scheduled to rebill
 * @member {String} next_shipment_dts
 */
AutoOrderItem.prototype['next_shipment_dts'] = undefined;

/**
 * Date/time after which no additional rebills of this item should occur
 * @member {String} no_order_after_dts
 */
AutoOrderItem.prototype['no_order_after_dts'] = undefined;

/**
 * The number of times this item has rebilled
 * @member {Number} number_of_rebills
 */
AutoOrderItem.prototype['number_of_rebills'] = undefined;

/**
 * Options associated with this item
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItemOption>} options
 */
AutoOrderItem.prototype['options'] = undefined;

/**
 * The original item id purchased.  This item controls scheduling.  If you wish to modify a schedule, for example, from monthly to yearly, change this item from your monthly item to your yearly item, and then change the next_shipment_dts to your desired date.
 * @member {String} original_item_id
 */
AutoOrderItem.prototype['original_item_id'] = undefined;

/**
 * The original quantity purchased
 * @member {Number} original_quantity
 */
AutoOrderItem.prototype['original_quantity'] = undefined;

/**
 * True if paused.  This field is an object instead of a primitive for backwards compatibility.
 * @member {Boolean} paused
 */
AutoOrderItem.prototype['paused'] = undefined;

/**
 * The PayPal Payer ID tied to this item
 * @member {String} paypal_payer_id
 */
AutoOrderItem.prototype['paypal_payer_id'] = undefined;

/**
 * The PayPal Profile ID tied to this item
 * @member {String} paypal_recurring_payment_profile_id
 */
AutoOrderItem.prototype['paypal_recurring_payment_profile_id'] = undefined;

/**
 * True if the preshipment notice associated with the next rebill has been sent
 * @member {Boolean} preshipment_notice_sent
 */
AutoOrderItem.prototype['preshipment_notice_sent'] = undefined;

/**
 * The value of the rebills of this item
 * @member {Number} rebill_value
 */
AutoOrderItem.prototype['rebill_value'] = undefined;

/**
 * The number of rebills remaining before this item is complete
 * @member {Number} remaining_repeat_count
 */
AutoOrderItem.prototype['remaining_repeat_count'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} simple_schedule
 */
AutoOrderItem.prototype['simple_schedule'] = undefined;

/**
 * Allowed values for the <code>frequency</code> property.
 * @enum {String}
 * @readonly
 */
AutoOrderItem['FrequencyEnum'] = {
  /**
   * value: "Weekly"
   * @const
   */
  "Weekly": "Weekly",
  /**
   * value: "Biweekly"
   * @const
   */
  "Biweekly": "Biweekly",
  /**
   * value: "Every..."
   * @const
   */
  "Every...": "Every...",
  /**
   * value: "Every 10 Days"
   * @const
   */
  "Every 10 Days": "Every 10 Days",
  /**
   * value: "Every 24 Days"
   * @const
   */
  "Every 24 Days": "Every 24 Days",
  /**
   * value: "Every 28 Days"
   * @const
   */
  "Every 28 Days": "Every 28 Days",
  /**
   * value: "Monthly"
   * @const
   */
  "Monthly": "Monthly",
  /**
   * value: "Every 45 Days"
   * @const
   */
  "Every 45 Days": "Every 45 Days",
  /**
   * value: "Every 2 Months"
   * @const
   */
  "Every 2 Months": "Every 2 Months",
  /**
   * value: "Every 3 Months"
   * @const
   */
  "Every 3 Months": "Every 3 Months",
  /**
   * value: "Every 4 Months"
   * @const
   */
  "Every 4 Months": "Every 4 Months",
  /**
   * value: "Every 5 Months"
   * @const
   */
  "Every 5 Months": "Every 5 Months",
  /**
   * value: "Every 6 Months"
   * @const
   */
  "Every 6 Months": "Every 6 Months",
  /**
   * value: "Yearly"
   * @const
   */
  "Yearly": "Yearly",
  /**
   * value: "Every 4 Weeks"
   * @const
   */
  "Every 4 Weeks": "Every 4 Weeks",
  /**
   * value: "Every 6 Weeks"
   * @const
   */
  "Every 6 Weeks": "Every 6 Weeks",
  /**
   * value: "Every 8 Weeks"
   * @const
   */
  "Every 8 Weeks": "Every 8 Weeks"
};
var _default = exports["default"] = AutoOrderItem;