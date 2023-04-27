"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartItemOptionValue = _interopRequireDefault(require("./CartItemOptionValue"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartItemOption model module.
 * @module com.ultracart.admin.v2.models/CartItemOption
 * @version 4.0.151
 */
var CartItemOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemOption</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemOption
   */
  function CartItemOption() {
    _classCallCheck(this, CartItemOption);

    CartItemOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemOption} The populated <code>CartItemOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemOption();

        if (data.hasOwnProperty('cost_if_specified')) {
          obj['cost_if_specified'] = _Currency["default"].constructFromObject(data['cost_if_specified']);
        }

        if (data.hasOwnProperty('cost_per_letter')) {
          obj['cost_per_letter'] = _Currency["default"].constructFromObject(data['cost_per_letter']);
        }

        if (data.hasOwnProperty('cost_per_line')) {
          obj['cost_per_line'] = _Currency["default"].constructFromObject(data['cost_per_line']);
        }

        if (data.hasOwnProperty('ignore_if_default')) {
          obj['ignore_if_default'] = _ApiClient["default"].convertToType(data['ignore_if_default'], 'Boolean');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('one_time_fee')) {
          obj['one_time_fee'] = _ApiClient["default"].convertToType(data['one_time_fee'], 'Boolean');
        }

        if (data.hasOwnProperty('option_oid')) {
          obj['option_oid'] = _ApiClient["default"].convertToType(data['option_oid'], 'Number');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('selected_value')) {
          obj['selected_value'] = _ApiClient["default"].convertToType(data['selected_value'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_CartItemOptionValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CartItemOption;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_if_specified
 */


CartItemOption.prototype['cost_if_specified'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_per_letter
 */

CartItemOption.prototype['cost_per_letter'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_per_line
 */

CartItemOption.prototype['cost_per_line'] = undefined;
/**
 * True if the default answer is ignored
 * @member {Boolean} ignore_if_default
 */

CartItemOption.prototype['ignore_if_default'] = undefined;
/**
 * Display label for the option
 * @member {String} label
 */

CartItemOption.prototype['label'] = undefined;
/**
 * Name of the option
 * @member {String} name
 */

CartItemOption.prototype['name'] = undefined;
/**
 * Charge the fee a single time instead of multiplying by the quantity
 * @member {Boolean} one_time_fee
 */

CartItemOption.prototype['one_time_fee'] = undefined;
/**
 * Unique identifier for the option
 * @member {Number} option_oid
 */

CartItemOption.prototype['option_oid'] = undefined;
/**
 * True if the customer is required to select a value
 * @member {Boolean} required
 */

CartItemOption.prototype['required'] = undefined;
/**
 * The value of the option specified by the customer
 * @member {String} selected_value
 */

CartItemOption.prototype['selected_value'] = undefined;
/**
 * Type of option
 * @member {module:com.ultracart.admin.v2.models/CartItemOption.TypeEnum} type
 */

CartItemOption.prototype['type'] = undefined;
/**
 * Values that the customer can select from for radio or select type options
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemOptionValue>} values
 */

CartItemOption.prototype['values'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CartItemOption['TypeEnum'] = {
  /**
   * value: "single"
   * @const
   */
  "single": "single",

  /**
   * value: "multiline"
   * @const
   */
  "multiline": "multiline",

  /**
   * value: "dropdown"
   * @const
   */
  "dropdown": "dropdown",

  /**
   * value: "hidden"
   * @const
   */
  "hidden": "hidden",

  /**
   * value: "radio"
   * @const
   */
  "radio": "radio",

  /**
   * value: "fixed"
   * @const
   */
  "fixed": "fixed"
};
var _default = CartItemOption;
exports["default"] = _default;