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
 * The CartItemProperty model module.
 * @module com.ultracart.admin.v2.models/CartItemProperty
 * @version 4.0.182
 */
var CartItemProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemProperty</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemProperty
   */
  function CartItemProperty() {
    _classCallCheck(this, CartItemProperty);

    CartItemProperty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemProperty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemProperty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemProperty} The populated <code>CartItemProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemProperty();

        if (data.hasOwnProperty('display')) {
          obj['display'] = _ApiClient["default"].convertToType(data['display'], 'Boolean');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartItemProperty;
}();
/**
 * True if this property is displayed to the customer
 * @member {Boolean} display
 */


CartItemProperty.prototype['display'] = undefined;
/**
 * The date/time that the property expires and is deleted
 * @member {String} expiration_dts
 */

CartItemProperty.prototype['expiration_dts'] = undefined;
/**
 * Name
 * @member {String} name
 */

CartItemProperty.prototype['name'] = undefined;
/**
 * Value
 * @member {String} value
 */

CartItemProperty.prototype['value'] = undefined;
var _default = CartItemProperty;
exports["default"] = _default;