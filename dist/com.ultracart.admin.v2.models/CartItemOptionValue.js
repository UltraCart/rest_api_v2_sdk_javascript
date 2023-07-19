"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _Weight = _interopRequireDefault(require("./Weight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartItemOptionValue model module.
 * @module com.ultracart.admin.v2.models/CartItemOptionValue
 * @version 4.0.166
 */
var CartItemOptionValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemOptionValue</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemOptionValue
   */
  function CartItemOptionValue() {
    _classCallCheck(this, CartItemOptionValue);

    CartItemOptionValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemOptionValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemOptionValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemOptionValue} The populated <code>CartItemOptionValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemOptionValue();

        if (data.hasOwnProperty('additional_cost')) {
          obj['additional_cost'] = _Currency["default"].constructFromObject(data['additional_cost']);
        }

        if (data.hasOwnProperty('additional_weight')) {
          obj['additional_weight'] = _Weight["default"].constructFromObject(data['additional_weight']);
        }

        if (data.hasOwnProperty('default_value')) {
          obj['default_value'] = _ApiClient["default"].convertToType(data['default_value'], 'Boolean');
        }

        if (data.hasOwnProperty('display_order')) {
          obj['display_order'] = _ApiClient["default"].convertToType(data['display_order'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartItemOptionValue;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} additional_cost
 */


CartItemOptionValue.prototype['additional_cost'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} additional_weight
 */

CartItemOptionValue.prototype['additional_weight'] = undefined;
/**
 * True if this is the default value
 * @member {Boolean} default_value
 */

CartItemOptionValue.prototype['default_value'] = undefined;
/**
 * Display order of the option value
 * @member {Number} display_order
 */

CartItemOptionValue.prototype['display_order'] = undefined;
/**
 * Value of the option the customer can select
 * @member {String} value
 */

CartItemOptionValue.prototype['value'] = undefined;
var _default = CartItemOptionValue;
exports["default"] = _default;