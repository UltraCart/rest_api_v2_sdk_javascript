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
 * The CartAffiliate model module.
 * @module com.ultracart.admin.v2.models/CartAffiliate
 * @version 4.0.54-RC
 */
var CartAffiliate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.models/CartAffiliate
   */
  function CartAffiliate() {
    _classCallCheck(this, CartAffiliate);

    CartAffiliate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartAffiliate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartAffiliate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartAffiliate} The populated <code>CartAffiliate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartAffiliate();

        if (data.hasOwnProperty('affiliate_id')) {
          obj['affiliate_id'] = _ApiClient["default"].convertToType(data['affiliate_id'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_sub_id')) {
          obj['affiliate_sub_id'] = _ApiClient["default"].convertToType(data['affiliate_sub_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartAffiliate;
}();
/**
 * Affiliate id associated with the cart
 * @member {Number} affiliate_id
 */


CartAffiliate.prototype['affiliate_id'] = undefined;
/**
 * Affiliate sub id associated with the cart
 * @member {String} affiliate_sub_id
 */

CartAffiliate.prototype['affiliate_sub_id'] = undefined;
var _default = CartAffiliate;
exports["default"] = _default;