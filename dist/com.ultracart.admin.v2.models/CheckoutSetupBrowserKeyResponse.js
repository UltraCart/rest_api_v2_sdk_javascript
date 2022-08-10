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
 * The CheckoutSetupBrowserKeyResponse model module.
 * @module com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse
 * @version 4.0.52-RC
 */
var CheckoutSetupBrowserKeyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckoutSetupBrowserKeyResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse
   */
  function CheckoutSetupBrowserKeyResponse() {
    _classCallCheck(this, CheckoutSetupBrowserKeyResponse);

    CheckoutSetupBrowserKeyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckoutSetupBrowserKeyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckoutSetupBrowserKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse} The populated <code>CheckoutSetupBrowserKeyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckoutSetupBrowserKeyResponse();

        if (data.hasOwnProperty('browser_key')) {
          obj['browser_key'] = _ApiClient["default"].convertToType(data['browser_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckoutSetupBrowserKeyResponse;
}();
/**
 * Browser key that is used to authenticate against the new linked application.
 * @member {String} browser_key
 */


CheckoutSetupBrowserKeyResponse.prototype['browser_key'] = undefined;
var _default = CheckoutSetupBrowserKeyResponse;
exports["default"] = _default;