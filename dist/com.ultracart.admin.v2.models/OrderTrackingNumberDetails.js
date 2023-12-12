"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderTrackingNumberDetail = _interopRequireDefault(require("./OrderTrackingNumberDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderTrackingNumberDetails model module.
 * @module com.ultracart.admin.v2.models/OrderTrackingNumberDetails
 * @version 4.0.192
 */
var OrderTrackingNumberDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderTrackingNumberDetails</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails
   */
  function OrderTrackingNumberDetails() {
    _classCallCheck(this, OrderTrackingNumberDetails);

    OrderTrackingNumberDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderTrackingNumberDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderTrackingNumberDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails} The populated <code>OrderTrackingNumberDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderTrackingNumberDetails();

        if (data.hasOwnProperty('actual_delivery_date')) {
          obj['actual_delivery_date'] = _ApiClient["default"].convertToType(data['actual_delivery_date'], 'String');
        }

        if (data.hasOwnProperty('actual_delivery_date_formatted')) {
          obj['actual_delivery_date_formatted'] = _ApiClient["default"].convertToType(data['actual_delivery_date_formatted'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_OrderTrackingNumberDetail["default"]]);
        }

        if (data.hasOwnProperty('easypost_tracker_id')) {
          obj['easypost_tracker_id'] = _ApiClient["default"].convertToType(data['easypost_tracker_id'], 'String');
        }

        if (data.hasOwnProperty('expected_delivery_date')) {
          obj['expected_delivery_date'] = _ApiClient["default"].convertToType(data['expected_delivery_date'], 'String');
        }

        if (data.hasOwnProperty('expected_delivery_date_formatted')) {
          obj['expected_delivery_date_formatted'] = _ApiClient["default"].convertToType(data['expected_delivery_date_formatted'], 'String');
        }

        if (data.hasOwnProperty('map_url')) {
          obj['map_url'] = _ApiClient["default"].convertToType(data['map_url'], 'String');
        }

        if (data.hasOwnProperty('order_placed_date')) {
          obj['order_placed_date'] = _ApiClient["default"].convertToType(data['order_placed_date'], 'String');
        }

        if (data.hasOwnProperty('order_placed_date_formatted')) {
          obj['order_placed_date_formatted'] = _ApiClient["default"].convertToType(data['order_placed_date_formatted'], 'String');
        }

        if (data.hasOwnProperty('payment_processed_date')) {
          obj['payment_processed_date'] = _ApiClient["default"].convertToType(data['payment_processed_date'], 'String');
        }

        if (data.hasOwnProperty('payment_processed_date_formatted')) {
          obj['payment_processed_date_formatted'] = _ApiClient["default"].convertToType(data['payment_processed_date_formatted'], 'String');
        }

        if (data.hasOwnProperty('shipped_date')) {
          obj['shipped_date'] = _ApiClient["default"].convertToType(data['shipped_date'], 'String');
        }

        if (data.hasOwnProperty('shipped_date_formatted')) {
          obj['shipped_date_formatted'] = _ApiClient["default"].convertToType(data['shipped_date_formatted'], 'String');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('status_description')) {
          obj['status_description'] = _ApiClient["default"].convertToType(data['status_description'], 'String');
        }

        if (data.hasOwnProperty('tracking_number')) {
          obj['tracking_number'] = _ApiClient["default"].convertToType(data['tracking_number'], 'String');
        }

        if (data.hasOwnProperty('tracking_url')) {
          obj['tracking_url'] = _ApiClient["default"].convertToType(data['tracking_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderTrackingNumberDetails;
}();
/**
 * @member {String} actual_delivery_date
 */


OrderTrackingNumberDetails.prototype['actual_delivery_date'] = undefined;
/**
 * @member {String} actual_delivery_date_formatted
 */

OrderTrackingNumberDetails.prototype['actual_delivery_date_formatted'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail>} details
 */

OrderTrackingNumberDetails.prototype['details'] = undefined;
/**
 * @member {String} easypost_tracker_id
 */

OrderTrackingNumberDetails.prototype['easypost_tracker_id'] = undefined;
/**
 * @member {String} expected_delivery_date
 */

OrderTrackingNumberDetails.prototype['expected_delivery_date'] = undefined;
/**
 * @member {String} expected_delivery_date_formatted
 */

OrderTrackingNumberDetails.prototype['expected_delivery_date_formatted'] = undefined;
/**
 * @member {String} map_url
 */

OrderTrackingNumberDetails.prototype['map_url'] = undefined;
/**
 * @member {String} order_placed_date
 */

OrderTrackingNumberDetails.prototype['order_placed_date'] = undefined;
/**
 * @member {String} order_placed_date_formatted
 */

OrderTrackingNumberDetails.prototype['order_placed_date_formatted'] = undefined;
/**
 * @member {String} payment_processed_date
 */

OrderTrackingNumberDetails.prototype['payment_processed_date'] = undefined;
/**
 * @member {String} payment_processed_date_formatted
 */

OrderTrackingNumberDetails.prototype['payment_processed_date_formatted'] = undefined;
/**
 * @member {String} shipped_date
 */

OrderTrackingNumberDetails.prototype['shipped_date'] = undefined;
/**
 * @member {String} shipped_date_formatted
 */

OrderTrackingNumberDetails.prototype['shipped_date_formatted'] = undefined;
/**
 * @member {String} shipping_method
 */

OrderTrackingNumberDetails.prototype['shipping_method'] = undefined;
/**
 * @member {String} status
 */

OrderTrackingNumberDetails.prototype['status'] = undefined;
/**
 * @member {String} status_description
 */

OrderTrackingNumberDetails.prototype['status_description'] = undefined;
/**
 * @member {String} tracking_number
 */

OrderTrackingNumberDetails.prototype['tracking_number'] = undefined;
/**
 * @member {String} tracking_url
 */

OrderTrackingNumberDetails.prototype['tracking_url'] = undefined;
var _default = OrderTrackingNumberDetails;
exports["default"] = _default;