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
 * The OrderLinkedShipment model module.
 * @module com.ultracart.admin.v2.models/OrderLinkedShipment
 * @version 4.0.110-RC
 */
var OrderLinkedShipment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderLinkedShipment</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderLinkedShipment
   */
  function OrderLinkedShipment() {
    _classCallCheck(this, OrderLinkedShipment);

    OrderLinkedShipment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderLinkedShipment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderLinkedShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderLinkedShipment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderLinkedShipment} The populated <code>OrderLinkedShipment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderLinkedShipment();

        if (data.hasOwnProperty('has_linked_shipment')) {
          obj['has_linked_shipment'] = _ApiClient["default"].convertToType(data['has_linked_shipment'], 'Boolean');
        }

        if (data.hasOwnProperty('linked_shipment')) {
          obj['linked_shipment'] = _ApiClient["default"].convertToType(data['linked_shipment'], 'Boolean');
        }

        if (data.hasOwnProperty('linked_shipment_channel_partner_order_ids')) {
          obj['linked_shipment_channel_partner_order_ids'] = _ApiClient["default"].convertToType(data['linked_shipment_channel_partner_order_ids'], ['String']);
        }

        if (data.hasOwnProperty('linked_shipment_order_ids')) {
          obj['linked_shipment_order_ids'] = _ApiClient["default"].convertToType(data['linked_shipment_order_ids'], ['String']);
        }

        if (data.hasOwnProperty('linked_shipment_to_order_id')) {
          obj['linked_shipment_to_order_id'] = _ApiClient["default"].convertToType(data['linked_shipment_to_order_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderLinkedShipment;
}();
/**
 * True if this order has child linked shipments
 * @member {Boolean} has_linked_shipment
 */


OrderLinkedShipment.prototype['has_linked_shipment'] = undefined;
/**
 * True if this order is linked to another parent order
 * @member {Boolean} linked_shipment
 */

OrderLinkedShipment.prototype['linked_shipment'] = undefined;
/**
 * The child linked shipment channel partner order ids
 * @member {Array.<String>} linked_shipment_channel_partner_order_ids
 */

OrderLinkedShipment.prototype['linked_shipment_channel_partner_order_ids'] = undefined;
/**
 * The child linked shipment order ids
 * @member {Array.<String>} linked_shipment_order_ids
 */

OrderLinkedShipment.prototype['linked_shipment_order_ids'] = undefined;
/**
 * The parent order id that this one is linked to
 * @member {String} linked_shipment_to_order_id
 */

OrderLinkedShipment.prototype['linked_shipment_to_order_id'] = undefined;
var _default = OrderLinkedShipment;
exports["default"] = _default;