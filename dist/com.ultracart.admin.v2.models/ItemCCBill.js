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
 * The ItemCCBill model module.
 * @module com.ultracart.admin.v2.models/ItemCCBill
 * @version 4.0.144
 */
var ItemCCBill = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemCCBill</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemCCBill
   */
  function ItemCCBill() {
    _classCallCheck(this, ItemCCBill);

    ItemCCBill.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemCCBill, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemCCBill</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemCCBill} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemCCBill} The populated <code>ItemCCBill</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemCCBill();

        if (data.hasOwnProperty('ccbill_allowed_currencies')) {
          obj['ccbill_allowed_currencies'] = _ApiClient["default"].convertToType(data['ccbill_allowed_currencies'], 'String');
        }

        if (data.hasOwnProperty('ccbill_allowed_types')) {
          obj['ccbill_allowed_types'] = _ApiClient["default"].convertToType(data['ccbill_allowed_types'], 'String');
        }

        if (data.hasOwnProperty('ccbill_currency_code')) {
          obj['ccbill_currency_code'] = _ApiClient["default"].convertToType(data['ccbill_currency_code'], 'String');
        }

        if (data.hasOwnProperty('ccbill_form_name')) {
          obj['ccbill_form_name'] = _ApiClient["default"].convertToType(data['ccbill_form_name'], 'String');
        }

        if (data.hasOwnProperty('ccbill_subaccount_id')) {
          obj['ccbill_subaccount_id'] = _ApiClient["default"].convertToType(data['ccbill_subaccount_id'], 'String');
        }

        if (data.hasOwnProperty('ccbill_subscription_type_id')) {
          obj['ccbill_subscription_type_id'] = _ApiClient["default"].convertToType(data['ccbill_subscription_type_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemCCBill;
}();
/**
 * Allowed currencies
 * @member {String} ccbill_allowed_currencies
 */


ItemCCBill.prototype['ccbill_allowed_currencies'] = undefined;
/**
 * Allowed types
 * @member {String} ccbill_allowed_types
 */

ItemCCBill.prototype['ccbill_allowed_types'] = undefined;
/**
 * Currency code
 * @member {String} ccbill_currency_code
 */

ItemCCBill.prototype['ccbill_currency_code'] = undefined;
/**
 * Form name
 * @member {String} ccbill_form_name
 */

ItemCCBill.prototype['ccbill_form_name'] = undefined;
/**
 * Sub-account id
 * @member {String} ccbill_subaccount_id
 */

ItemCCBill.prototype['ccbill_subaccount_id'] = undefined;
/**
 * Subscription type id
 * @member {String} ccbill_subscription_type_id
 */

ItemCCBill.prototype['ccbill_subscription_type_id'] = undefined;
var _default = ItemCCBill;
exports["default"] = _default;