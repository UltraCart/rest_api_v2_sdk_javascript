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
 * The CouponDeletesRequest model module.
 * @module com.ultracart.admin.v2.models/CouponDeletesRequest
 * @version 4.0.45-RC
 */
var CouponDeletesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponDeletesRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponDeletesRequest
   */
  function CouponDeletesRequest() {
    _classCallCheck(this, CouponDeletesRequest);

    CouponDeletesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponDeletesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponDeletesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponDeletesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponDeletesRequest} The populated <code>CouponDeletesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponDeletesRequest();

        if (data.hasOwnProperty('coupon_codes')) {
          obj['coupon_codes'] = _ApiClient["default"].convertToType(data['coupon_codes'], ['String']);
        }

        if (data.hasOwnProperty('coupon_oids')) {
          obj['coupon_oids'] = _ApiClient["default"].convertToType(data['coupon_oids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return CouponDeletesRequest;
}();
/**
 * Coupon codes
 * @member {Array.<String>} coupon_codes
 */


CouponDeletesRequest.prototype['coupon_codes'] = undefined;
/**
 * Coupon oids
 * @member {Array.<Number>} coupon_oids
 */

CouponDeletesRequest.prototype['coupon_oids'] = undefined;
var _default = CouponDeletesRequest;
exports["default"] = _default;