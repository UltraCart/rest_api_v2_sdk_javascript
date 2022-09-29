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
 * The CartItemAttribute model module.
 * @module com.ultracart.admin.v2.models/CartItemAttribute
 * @version 4.0.69-RC
 */
var CartItemAttribute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemAttribute</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemAttribute
   */
  function CartItemAttribute() {
    _classCallCheck(this, CartItemAttribute);

    CartItemAttribute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemAttribute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemAttribute} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemAttribute} The populated <code>CartItemAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemAttribute();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartItemAttribute;
}();
/**
 * Name of the attribute
 * @member {String} name
 */


CartItemAttribute.prototype['name'] = undefined;
/**
 * Type of attribute
 * @member {String} type
 */

CartItemAttribute.prototype['type'] = undefined;
/**
 * Value of the attribute
 * @member {String} value
 */

CartItemAttribute.prototype['value'] = undefined;
var _default = CartItemAttribute;
exports["default"] = _default;