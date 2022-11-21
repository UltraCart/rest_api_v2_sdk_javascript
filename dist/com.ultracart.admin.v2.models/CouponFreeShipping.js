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
 * The CouponFreeShipping model module.
 * @module com.ultracart.admin.v2.models/CouponFreeShipping
 * @version 4.0.85-RC
 */
var CouponFreeShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponFreeShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeShipping
   */
  function CouponFreeShipping() {
    _classCallCheck(this, CouponFreeShipping);

    CouponFreeShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponFreeShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponFreeShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeShipping} The populated <code>CouponFreeShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponFreeShipping();

        if (data.hasOwnProperty('shipping_methods')) {
          obj['shipping_methods'] = _ApiClient["default"].convertToType(data['shipping_methods'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponFreeShipping;
}();
/**
 * One or more shipping methods that may be used with this coupon
 * @member {Array.<String>} shipping_methods
 */


CouponFreeShipping.prototype['shipping_methods'] = undefined;
var _default = CouponFreeShipping;
exports["default"] = _default;