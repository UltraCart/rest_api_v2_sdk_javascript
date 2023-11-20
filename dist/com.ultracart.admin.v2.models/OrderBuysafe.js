"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderBuysafe model module.
 * @module com.ultracart.admin.v2.models/OrderBuysafe
 * @version 4.0.190
 */
var OrderBuysafe = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderBuysafe</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderBuysafe
   */
  function OrderBuysafe() {
    _classCallCheck(this, OrderBuysafe);

    OrderBuysafe.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderBuysafe, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderBuysafe} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderBuysafe} The populated <code>OrderBuysafe</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderBuysafe();

        if (data.hasOwnProperty('buysafe_bond_available')) {
          obj['buysafe_bond_available'] = _ApiClient["default"].convertToType(data['buysafe_bond_available'], 'Boolean');
        }

        if (data.hasOwnProperty('buysafe_bond_cost')) {
          obj['buysafe_bond_cost'] = _Currency["default"].constructFromObject(data['buysafe_bond_cost']);
        }

        if (data.hasOwnProperty('buysafe_bond_free')) {
          obj['buysafe_bond_free'] = _ApiClient["default"].convertToType(data['buysafe_bond_free'], 'Boolean');
        }

        if (data.hasOwnProperty('buysafe_bond_refunded')) {
          obj['buysafe_bond_refunded'] = _Currency["default"].constructFromObject(data['buysafe_bond_refunded']);
        }

        if (data.hasOwnProperty('buysafe_bond_wanted')) {
          obj['buysafe_bond_wanted'] = _ApiClient["default"].convertToType(data['buysafe_bond_wanted'], 'Boolean');
        }

        if (data.hasOwnProperty('buysafe_shopping_cart_id')) {
          obj['buysafe_shopping_cart_id'] = _ApiClient["default"].convertToType(data['buysafe_shopping_cart_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderBuysafe;
}();
/**
 * True if a buySAFE bond was available for purchase on this order
 * @member {Boolean} buysafe_bond_available
 */


OrderBuysafe.prototype['buysafe_bond_available'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_cost
 */

OrderBuysafe.prototype['buysafe_bond_cost'] = undefined;
/**
 * True if the buySAFE bond was free for this order
 * @member {Boolean} buysafe_bond_free
 */

OrderBuysafe.prototype['buysafe_bond_free'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_refunded
 */

OrderBuysafe.prototype['buysafe_bond_refunded'] = undefined;
/**
 * True if the buySAFE bond was wanted by the customer
 * @member {Boolean} buysafe_bond_wanted
 */

OrderBuysafe.prototype['buysafe_bond_wanted'] = undefined;
/**
 * Shopping cart ID associated with the buySAFE bond
 * @member {String} buysafe_shopping_cart_id
 */

OrderBuysafe.prototype['buysafe_shopping_cart_id'] = undefined;
var _default = OrderBuysafe;
exports["default"] = _default;