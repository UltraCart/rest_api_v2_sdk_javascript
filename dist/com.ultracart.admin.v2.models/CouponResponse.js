"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Coupon = _interopRequireDefault(require("./Coupon"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CouponResponse model module.
 * @module com.ultracart.admin.v2.models/CouponResponse
 * @version 4.0.184
 */
var CouponResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponResponse
   */
  function CouponResponse() {
    _classCallCheck(this, CouponResponse);

    CouponResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponResponse} The populated <code>CouponResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponResponse();

        if (data.hasOwnProperty('coupon')) {
          obj['coupon'] = _Coupon["default"].constructFromObject(data['coupon']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('items_invalid_for_coupons')) {
          obj['items_invalid_for_coupons'] = _ApiClient["default"].convertToType(data['items_invalid_for_coupons'], ['String']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return CouponResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Coupon} coupon
 */


CouponResponse.prototype['coupon'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

CouponResponse.prototype['error'] = undefined;
/**
 * Items invalid for coupons.  These will display as warnings within the UI.
 * @member {Array.<String>} items_invalid_for_coupons
 */

CouponResponse.prototype['items_invalid_for_coupons'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

CouponResponse.prototype['metadata'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

CouponResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

CouponResponse.prototype['warning'] = undefined;
var _default = CouponResponse;
exports["default"] = _default;