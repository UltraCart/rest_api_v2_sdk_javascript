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
 * The ItemShippingMethod model module.
 * @module com.ultracart.admin.v2.models/ItemShippingMethod
 * @version 4.0.186
 */
var ItemShippingMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingMethod</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingMethod
   */
  function ItemShippingMethod() {
    _classCallCheck(this, ItemShippingMethod);

    ItemShippingMethod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShippingMethod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShippingMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingMethod} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingMethod} The populated <code>ItemShippingMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingMethod();

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }

        if (data.hasOwnProperty('each_additional_item_markup')) {
          obj['each_additional_item_markup'] = _ApiClient["default"].convertToType(data['each_additional_item_markup'], 'Number');
        }

        if (data.hasOwnProperty('filter_to_if_available')) {
          obj['filter_to_if_available'] = _ApiClient["default"].convertToType(data['filter_to_if_available'], 'Boolean');
        }

        if (data.hasOwnProperty('first_item_markup')) {
          obj['first_item_markup'] = _ApiClient["default"].convertToType(data['first_item_markup'], 'Number');
        }

        if (data.hasOwnProperty('fixed_shipping_cost')) {
          obj['fixed_shipping_cost'] = _ApiClient["default"].convertToType(data['fixed_shipping_cost'], 'Number');
        }

        if (data.hasOwnProperty('flat_fee_markup')) {
          obj['flat_fee_markup'] = _ApiClient["default"].convertToType(data['flat_fee_markup'], 'Number');
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _ApiClient["default"].convertToType(data['free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('per_item_fee_markup')) {
          obj['per_item_fee_markup'] = _ApiClient["default"].convertToType(data['per_item_fee_markup'], 'Number');
        }

        if (data.hasOwnProperty('percentage_markup')) {
          obj['percentage_markup'] = _ApiClient["default"].convertToType(data['percentage_markup'], 'Number');
        }

        if (data.hasOwnProperty('percentage_of_item_markup')) {
          obj['percentage_of_item_markup'] = _ApiClient["default"].convertToType(data['percentage_of_item_markup'], 'Number');
        }

        if (data.hasOwnProperty('relax_restrictions_on_upsell')) {
          obj['relax_restrictions_on_upsell'] = _ApiClient["default"].convertToType(data['relax_restrictions_on_upsell'], 'Boolean');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }

        if (data.hasOwnProperty('shipping_method_oid')) {
          obj['shipping_method_oid'] = _ApiClient["default"].convertToType(data['shipping_method_oid'], 'Number');
        }

        if (data.hasOwnProperty('shipping_method_validity')) {
          obj['shipping_method_validity'] = _ApiClient["default"].convertToType(data['shipping_method_validity'], 'String');
        }

        if (data.hasOwnProperty('signature_required')) {
          obj['signature_required'] = _ApiClient["default"].convertToType(data['signature_required'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ItemShippingMethod;
}();
/**
 * Cost
 * @member {Number} cost
 */


ItemShippingMethod.prototype['cost'] = undefined;
/**
 * Each additional item markup
 * @member {Number} each_additional_item_markup
 */

ItemShippingMethod.prototype['each_additional_item_markup'] = undefined;
/**
 * Filter to this method if available
 * @member {Boolean} filter_to_if_available
 */

ItemShippingMethod.prototype['filter_to_if_available'] = undefined;
/**
 * First item markup
 * @member {Number} first_item_markup
 */

ItemShippingMethod.prototype['first_item_markup'] = undefined;
/**
 * Fixed shipping cost
 * @member {Number} fixed_shipping_cost
 */

ItemShippingMethod.prototype['fixed_shipping_cost'] = undefined;
/**
 * Flat fee markup
 * @member {Number} flat_fee_markup
 */

ItemShippingMethod.prototype['flat_fee_markup'] = undefined;
/**
 * Free shipping
 * @member {Boolean} free_shipping
 */

ItemShippingMethod.prototype['free_shipping'] = undefined;
/**
 * Per item fee markup
 * @member {Number} per_item_fee_markup
 */

ItemShippingMethod.prototype['per_item_fee_markup'] = undefined;
/**
 * Percentage markup
 * @member {Number} percentage_markup
 */

ItemShippingMethod.prototype['percentage_markup'] = undefined;
/**
 * Percentage of item markup
 * @member {Number} percentage_of_item_markup
 */

ItemShippingMethod.prototype['percentage_of_item_markup'] = undefined;
/**
 * Relax restrictions on upsell
 * @member {Boolean} relax_restrictions_on_upsell
 */

ItemShippingMethod.prototype['relax_restrictions_on_upsell'] = undefined;
/**
 * Shipping method name
 * @member {String} shipping_method
 */

ItemShippingMethod.prototype['shipping_method'] = undefined;
/**
 * Shipping method object identifier
 * @member {Number} shipping_method_oid
 */

ItemShippingMethod.prototype['shipping_method_oid'] = undefined;
/**
 * Shipping method validity
 * @member {module:com.ultracart.admin.v2.models/ItemShippingMethod.ShippingMethodValidityEnum} shipping_method_validity
 */

ItemShippingMethod.prototype['shipping_method_validity'] = undefined;
/**
 * Signature required
 * @member {Boolean} signature_required
 */

ItemShippingMethod.prototype['signature_required'] = undefined;
/**
 * Allowed values for the <code>shipping_method_validity</code> property.
 * @enum {String}
 * @readonly
 */

ItemShippingMethod['ShippingMethodValidityEnum'] = {
  /**
   * value: "invalid for"
   * @const
   */
  "invalid for": "invalid for",

  /**
   * value: "valid for"
   * @const
   */
  "valid for": "valid for",

  /**
   * value: "valid only for"
   * @const
   */
  "valid only for": "valid only for"
};
var _default = ItemShippingMethod;
exports["default"] = _default;