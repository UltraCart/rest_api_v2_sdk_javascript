"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Distance = _interopRequireDefault(require("./Distance"));

var _Weight = _interopRequireDefault(require("./Weight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartItemPhysical model module.
 * @module com.ultracart.admin.v2.models/CartItemPhysical
 * @version 4.0.168
 */
var CartItemPhysical = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemPhysical</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemPhysical
   */
  function CartItemPhysical() {
    _classCallCheck(this, CartItemPhysical);

    CartItemPhysical.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemPhysical, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemPhysical</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemPhysical} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemPhysical} The populated <code>CartItemPhysical</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemPhysical();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _Distance["default"].constructFromObject(data['height']);
        }

        if (data.hasOwnProperty('length')) {
          obj['length'] = _Distance["default"].constructFromObject(data['length']);
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _Weight["default"].constructFromObject(data['weight']);
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _Distance["default"].constructFromObject(data['width']);
        }
      }

      return obj;
    }
  }]);

  return CartItemPhysical;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */


CartItemPhysical.prototype['height'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */

CartItemPhysical.prototype['length'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight
 */

CartItemPhysical.prototype['weight'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */

CartItemPhysical.prototype['width'] = undefined;
var _default = CartItemPhysical;
exports["default"] = _default;