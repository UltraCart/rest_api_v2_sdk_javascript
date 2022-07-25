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
 * The CartItemVariationSelection model module.
 * @module com.ultracart.admin.v2.models/CartItemVariationSelection
 * @version 4.0.41-RC
 */
var CartItemVariationSelection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemVariationSelection</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemVariationSelection
   */
  function CartItemVariationSelection() {
    _classCallCheck(this, CartItemVariationSelection);

    CartItemVariationSelection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemVariationSelection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemVariationSelection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemVariationSelection} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemVariationSelection} The populated <code>CartItemVariationSelection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemVariationSelection();

        if (data.hasOwnProperty('variation_name')) {
          obj['variation_name'] = _ApiClient["default"].convertToType(data['variation_name'], 'String');
        }

        if (data.hasOwnProperty('variation_value')) {
          obj['variation_value'] = _ApiClient["default"].convertToType(data['variation_value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartItemVariationSelection;
}();
/**
 * Variation name
 * @member {String} variation_name
 */


CartItemVariationSelection.prototype['variation_name'] = undefined;
/**
 * Variation value
 * @member {String} variation_value
 */

CartItemVariationSelection.prototype['variation_value'] = undefined;
var _default = CartItemVariationSelection;
exports["default"] = _default;