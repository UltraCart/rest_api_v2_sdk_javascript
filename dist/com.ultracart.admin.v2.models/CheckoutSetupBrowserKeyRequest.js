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
 * The CheckoutSetupBrowserKeyRequest model module.
 * @module com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest
 * @version 4.0.80-RC
 */
var CheckoutSetupBrowserKeyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckoutSetupBrowserKeyRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest
   */
  function CheckoutSetupBrowserKeyRequest() {
    _classCallCheck(this, CheckoutSetupBrowserKeyRequest);

    CheckoutSetupBrowserKeyRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckoutSetupBrowserKeyRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckoutSetupBrowserKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} The populated <code>CheckoutSetupBrowserKeyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckoutSetupBrowserKeyRequest();

        if (data.hasOwnProperty('allowed_referrers')) {
          obj['allowed_referrers'] = _ApiClient["default"].convertToType(data['allowed_referrers'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CheckoutSetupBrowserKeyRequest;
}();
/**
 * Allowed referrers.  If URLs are specified, automatic translation will convert them to proper allowed referrer maskes.
 * @member {Array.<String>} allowed_referrers
 */


CheckoutSetupBrowserKeyRequest.prototype['allowed_referrers'] = undefined;
var _default = CheckoutSetupBrowserKeyRequest;
exports["default"] = _default;