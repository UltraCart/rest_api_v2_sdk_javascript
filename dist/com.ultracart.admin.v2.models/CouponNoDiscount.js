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
 * The CouponNoDiscount model module.
 * @module com.ultracart.admin.v2.models/CouponNoDiscount
 * @version 4.0.164
 */
var CouponNoDiscount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponNoDiscount</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponNoDiscount
   */
  function CouponNoDiscount() {
    _classCallCheck(this, CouponNoDiscount);

    CouponNoDiscount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponNoDiscount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponNoDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponNoDiscount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponNoDiscount} The populated <code>CouponNoDiscount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponNoDiscount();

        if (data.hasOwnProperty('ignore_this_property')) {
          obj['ignore_this_property'] = _ApiClient["default"].convertToType(data['ignore_this_property'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CouponNoDiscount;
}();
/**
 * This property does nothing but is included in this object to ensure the object is generated by our sdk builders.
 * @member {Boolean} ignore_this_property
 */


CouponNoDiscount.prototype['ignore_this_property'] = undefined;
var _default = CouponNoDiscount;
exports["default"] = _default;