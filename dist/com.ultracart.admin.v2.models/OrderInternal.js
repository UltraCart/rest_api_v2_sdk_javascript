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
 * The OrderInternal model module.
 * @module com.ultracart.admin.v2.models/OrderInternal
 * @version 4.0.5
 */
var OrderInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderInternal</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderInternal
   */
  function OrderInternal() {
    _classCallCheck(this, OrderInternal);

    OrderInternal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderInternal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderInternal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderInternal} The populated <code>OrderInternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderInternal();

        if (data.hasOwnProperty('exported_to_accounting')) {
          obj['exported_to_accounting'] = _ApiClient["default"].convertToType(data['exported_to_accounting'], 'Boolean');
        }

        if (data.hasOwnProperty('merchant_notes')) {
          obj['merchant_notes'] = _ApiClient["default"].convertToType(data['merchant_notes'], 'String');
        }

        if (data.hasOwnProperty('placed_by_user')) {
          obj['placed_by_user'] = _ApiClient["default"].convertToType(data['placed_by_user'], 'String');
        }

        if (data.hasOwnProperty('refund_by_user')) {
          obj['refund_by_user'] = _ApiClient["default"].convertToType(data['refund_by_user'], 'String');
        }

        if (data.hasOwnProperty('sales_rep_code')) {
          obj['sales_rep_code'] = _ApiClient["default"].convertToType(data['sales_rep_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderInternal;
}();
/**
 * True if the order has been exported to QuickBooks. If QuickBooks is not configured, then this will already be true
 * @member {Boolean} exported_to_accounting
 */


OrderInternal.prototype['exported_to_accounting'] = undefined;
/**
 * Merchant notes
 * @member {String} merchant_notes
 */

OrderInternal.prototype['merchant_notes'] = undefined;
/**
 * If placed via the BEOE, this is the user that placed the order
 * @member {String} placed_by_user
 */

OrderInternal.prototype['placed_by_user'] = undefined;
/**
 * User that issued the refund
 * @member {String} refund_by_user
 */

OrderInternal.prototype['refund_by_user'] = undefined;
/**
 * Sales rep code associated with the order
 * @member {String} sales_rep_code
 */

OrderInternal.prototype['sales_rep_code'] = undefined;
var _default = OrderInternal;
exports["default"] = _default;