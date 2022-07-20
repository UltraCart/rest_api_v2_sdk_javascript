"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPartnerOrderItemOption = _interopRequireDefault(require("./ChannelPartnerOrderItemOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPartnerOrderItem model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerOrderItem
 * @version 4.0.36-RC
 */
var ChannelPartnerOrderItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerOrderItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem
   */
  function ChannelPartnerOrderItem() {
    _classCallCheck(this, ChannelPartnerOrderItem);

    ChannelPartnerOrderItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerOrderItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem} The populated <code>ChannelPartnerOrderItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerOrderItem();

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost'], 'Number');
        }

        if (data.hasOwnProperty('auto_order_last_rebill_dts')) {
          obj['auto_order_last_rebill_dts'] = _ApiClient["default"].convertToType(data['auto_order_last_rebill_dts'], 'String');
        }

        if (data.hasOwnProperty('auto_order_schedule')) {
          obj['auto_order_schedule'] = _ApiClient["default"].convertToType(data['auto_order_schedule'], 'String');
        }

        if (data.hasOwnProperty('merchant_item_id')) {
          obj['merchant_item_id'] = _ApiClient["default"].convertToType(data['merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_ChannelPartnerOrderItemOption["default"]]);
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('upsell')) {
          obj['upsell'] = _ApiClient["default"].convertToType(data['upsell'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPartnerOrderItem;
}();
/**
 * Arbitrary unit cost for this item that differs from the listed price
 * @member {Number} arbitrary_unit_cost
 */


ChannelPartnerOrderItem.prototype['arbitrary_unit_cost'] = undefined;
/**
 * Optional date/time of the last rebill if this item is part of an auto (recurring) order
 * @member {String} auto_order_last_rebill_dts
 */

ChannelPartnerOrderItem.prototype['auto_order_last_rebill_dts'] = undefined;
/**
 * The frequency schedule for this item if this item is part of an auto (recurring) order
 * @member {module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem.AutoOrderScheduleEnum} auto_order_schedule
 */

ChannelPartnerOrderItem.prototype['auto_order_schedule'] = undefined;
/**
 * Item ID
 * @member {String} merchant_item_id
 */

ChannelPartnerOrderItem.prototype['merchant_item_id'] = undefined;
/**
 * Item options
 * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerOrderItemOption>} options
 */

ChannelPartnerOrderItem.prototype['options'] = undefined;
/**
 * Quantity
 * @member {Number} quantity
 */

ChannelPartnerOrderItem.prototype['quantity'] = undefined;
/**
 * True if this item was an upsell item.
 * @member {Boolean} upsell
 */

ChannelPartnerOrderItem.prototype['upsell'] = undefined;
/**
 * Allowed values for the <code>auto_order_schedule</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPartnerOrderItem['AutoOrderScheduleEnum'] = {
  /**
   * value: "Weekly"
   * @const
   */
  "Weekly": "Weekly",

  /**
   * value: "Every 10 Days"
   * @const
   */
  "Every 10 Days": "Every 10 Days",

  /**
   * value: "Biweekly"
   * @const
   */
  "Biweekly": "Biweekly",

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
   * value: "Every 6 Months"
   * @const
   */
  "Every 6 Months": "Every 6 Months",

  /**
   * value: "Yearly"
   * @const
   */
  "Yearly": "Yearly"
};
var _default = ChannelPartnerOrderItem;
exports["default"] = _default;