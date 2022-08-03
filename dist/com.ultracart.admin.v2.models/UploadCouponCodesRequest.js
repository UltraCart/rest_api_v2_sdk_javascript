"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UploadCouponCodesRequest model module.
 * @module com.ultracart.admin.v2.models/UploadCouponCodesRequest
 * @version 4.0.49-RC
 */
var UploadCouponCodesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UploadCouponCodesRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/UploadCouponCodesRequest
   */
  function UploadCouponCodesRequest() {
    _classCallCheck(this, UploadCouponCodesRequest);

    UploadCouponCodesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UploadCouponCodesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UploadCouponCodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UploadCouponCodesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UploadCouponCodesRequest} The populated <code>UploadCouponCodesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UploadCouponCodesRequest();

        if (data.hasOwnProperty('coupon_codes')) {
          obj['coupon_codes'] = _ApiClient["default"].convertToType(data['coupon_codes'], ['String']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
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

  return UploadCouponCodesRequest;
}();
/**
 * Coupon codes
 * @member {Array.<String>} coupon_codes
 */


UploadCouponCodesRequest.prototype['coupon_codes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

UploadCouponCodesRequest.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

UploadCouponCodesRequest.prototype['metadata'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

UploadCouponCodesRequest.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

UploadCouponCodesRequest.prototype['warning'] = undefined;
var _default = UploadCouponCodesRequest;
exports["default"] = _default;