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
 * The ItemPaymentProcessing model module.
 * @module com.ultracart.admin.v2.models/ItemPaymentProcessing
 * @version 4.0.40-RC
 */
var ItemPaymentProcessing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemPaymentProcessing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPaymentProcessing
   */
  function ItemPaymentProcessing() {
    _classCallCheck(this, ItemPaymentProcessing);

    ItemPaymentProcessing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemPaymentProcessing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemPaymentProcessing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} The populated <code>ItemPaymentProcessing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemPaymentProcessing();

        if (data.hasOwnProperty('block_prepaid')) {
          obj['block_prepaid'] = _ApiClient["default"].convertToType(data['block_prepaid'], 'Boolean');
        }

        if (data.hasOwnProperty('credit_card_transaction_type')) {
          obj['credit_card_transaction_type'] = _ApiClient["default"].convertToType(data['credit_card_transaction_type'], 'String');
        }

        if (data.hasOwnProperty('no_realtime_charge')) {
          obj['no_realtime_charge'] = _ApiClient["default"].convertToType(data['no_realtime_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('payment_method_validity')) {
          obj['payment_method_validity'] = _ApiClient["default"].convertToType(data['payment_method_validity'], ['String']);
        }

        if (data.hasOwnProperty('rotating_transaction_gateway_codes')) {
          obj['rotating_transaction_gateway_codes'] = _ApiClient["default"].convertToType(data['rotating_transaction_gateway_codes'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ItemPaymentProcessing;
}();
/**
 * True if prepaid cards should be blocked from buying this item
 * @member {Boolean} block_prepaid
 */


ItemPaymentProcessing.prototype['block_prepaid'] = undefined;
/**
 * Credit card transaction type
 * @member {String} credit_card_transaction_type
 */

ItemPaymentProcessing.prototype['credit_card_transaction_type'] = undefined;
/**
 * True if no real-time charge should be performed on this item.
 * @member {Boolean} no_realtime_charge
 */

ItemPaymentProcessing.prototype['no_realtime_charge'] = undefined;
/**
 * Payment method validity
 * @member {Array.<String>} payment_method_validity
 */

ItemPaymentProcessing.prototype['payment_method_validity'] = undefined;
/**
 * Rotating transaction gateway codes
 * @member {Array.<String>} rotating_transaction_gateway_codes
 */

ItemPaymentProcessing.prototype['rotating_transaction_gateway_codes'] = undefined;
var _default = ItemPaymentProcessing;
exports["default"] = _default;