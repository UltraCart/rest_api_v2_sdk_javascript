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
 * The CartTaxes model module.
 * @module com.ultracart.admin.v2.models/CartTaxes
 * @version 4.0.43-RC
 */
var CartTaxes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartTaxes</code>.
   * @alias module:com.ultracart.admin.v2.models/CartTaxes
   */
  function CartTaxes() {
    _classCallCheck(this, CartTaxes);

    CartTaxes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartTaxes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartTaxes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartTaxes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartTaxes} The populated <code>CartTaxes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartTaxes();

        if (data.hasOwnProperty('county')) {
          obj['county'] = _ApiClient["default"].convertToType(data['county'], 'String');
        }

        if (data.hasOwnProperty('exempt')) {
          obj['exempt'] = _ApiClient["default"].convertToType(data['exempt'], 'Boolean');
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CartTaxes;
}();
/**
 * Tax county if the state requires it.
 * @member {String} county
 */


CartTaxes.prototype['county'] = undefined;
/**
 * True if tax exempt
 * @member {Boolean} exempt
 */

CartTaxes.prototype['exempt'] = undefined;
/**
 * Tax rate
 * @member {Number} rate
 */

CartTaxes.prototype['rate'] = undefined;
var _default = CartTaxes;
exports["default"] = _default;