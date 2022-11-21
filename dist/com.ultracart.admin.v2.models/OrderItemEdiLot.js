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
 * The OrderItemEdiLot model module.
 * @module com.ultracart.admin.v2.models/OrderItemEdiLot
 * @version 4.0.85-RC
 */
var OrderItemEdiLot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderItemEdiLot</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemEdiLot
   */
  function OrderItemEdiLot() {
    _classCallCheck(this, OrderItemEdiLot);

    OrderItemEdiLot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderItemEdiLot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderItemEdiLot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemEdiLot} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemEdiLot} The populated <code>OrderItemEdiLot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderItemEdiLot();

        if (data.hasOwnProperty('lot_expiration')) {
          obj['lot_expiration'] = _ApiClient["default"].convertToType(data['lot_expiration'], 'String');
        }

        if (data.hasOwnProperty('lot_number')) {
          obj['lot_number'] = _ApiClient["default"].convertToType(data['lot_number'], 'String');
        }

        if (data.hasOwnProperty('lot_quantity')) {
          obj['lot_quantity'] = _ApiClient["default"].convertToType(data['lot_quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderItemEdiLot;
}();
/**
 * Log expiration
 * @member {String} lot_expiration
 */


OrderItemEdiLot.prototype['lot_expiration'] = undefined;
/**
 * Lot number
 * @member {String} lot_number
 */

OrderItemEdiLot.prototype['lot_number'] = undefined;
/**
 * Lot quantity
 * @member {Number} lot_quantity
 */

OrderItemEdiLot.prototype['lot_quantity'] = undefined;
var _default = OrderItemEdiLot;
exports["default"] = _default;