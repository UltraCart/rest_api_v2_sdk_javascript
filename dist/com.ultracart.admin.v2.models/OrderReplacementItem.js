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
 * The OrderReplacementItem model module.
 * @module com.ultracart.admin.v2.models/OrderReplacementItem
 * @version 4.0.141
 */
var OrderReplacementItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderReplacementItem</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReplacementItem
   */
  function OrderReplacementItem() {
    _classCallCheck(this, OrderReplacementItem);

    OrderReplacementItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderReplacementItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderReplacementItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacementItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReplacementItem} The populated <code>OrderReplacementItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderReplacementItem();

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost'], 'Number');
        }

        if (data.hasOwnProperty('merchant_item_id')) {
          obj['merchant_item_id'] = _ApiClient["default"].convertToType(data['merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderReplacementItem;
}();
/**
 * Cost to charge the customer if specified.  If not specified then the default item cost is used.
 * @member {Number} arbitrary_unit_cost
 */


OrderReplacementItem.prototype['arbitrary_unit_cost'] = undefined;
/**
 * Item ID
 * @member {String} merchant_item_id
 */

OrderReplacementItem.prototype['merchant_item_id'] = undefined;
/**
 * Quantity
 * @member {Number} quantity
 */

OrderReplacementItem.prototype['quantity'] = undefined;
var _default = OrderReplacementItem;
exports["default"] = _default;