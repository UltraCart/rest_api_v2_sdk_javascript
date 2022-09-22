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
 * The FulfillmentShipment model module.
 * @module com.ultracart.admin.v2.models/FulfillmentShipment
 * @version 4.0.65-RC
 */
var FulfillmentShipment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FulfillmentShipment</code>.
   * @alias module:com.ultracart.admin.v2.models/FulfillmentShipment
   */
  function FulfillmentShipment() {
    _classCallCheck(this, FulfillmentShipment);

    FulfillmentShipment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FulfillmentShipment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FulfillmentShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FulfillmentShipment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FulfillmentShipment} The populated <code>FulfillmentShipment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FulfillmentShipment();

        if (data.hasOwnProperty('fulfillment_fee')) {
          obj['fulfillment_fee'] = _ApiClient["default"].convertToType(data['fulfillment_fee'], 'Number');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('package_cost')) {
          obj['package_cost'] = _ApiClient["default"].convertToType(data['package_cost'], 'Number');
        }

        if (data.hasOwnProperty('shipping_cost')) {
          obj['shipping_cost'] = _ApiClient["default"].convertToType(data['shipping_cost'], 'Number');
        }

        if (data.hasOwnProperty('tracking_numbers')) {
          obj['tracking_numbers'] = _ApiClient["default"].convertToType(data['tracking_numbers'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return FulfillmentShipment;
}();
/**
 * Fees charged by the fulfillment company other than the shipping cost to process the order.
 * @member {Number} fulfillment_fee
 */


FulfillmentShipment.prototype['fulfillment_fee'] = undefined;
/**
 * Order ID that was shipped
 * @member {String} order_id
 */

FulfillmentShipment.prototype['order_id'] = undefined;
/**
 * The cost of the packaging used to sent this shipment
 * @member {Number} package_cost
 */

FulfillmentShipment.prototype['package_cost'] = undefined;
/**
 * The actual total cost of shipping this order
 * @member {Number} shipping_cost
 */

FulfillmentShipment.prototype['shipping_cost'] = undefined;
/**
 * Tracking numbers associated with the shipment
 * @member {Array.<String>} tracking_numbers
 */

FulfillmentShipment.prototype['tracking_numbers'] = undefined;
var _default = FulfillmentShipment;
exports["default"] = _default;