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
 * The SingleSignOnAuthorizeResponse model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse
 * @version 4.0.77-RC
 */
var SingleSignOnAuthorizeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SingleSignOnAuthorizeResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse
   */
  function SingleSignOnAuthorizeResponse() {
    _classCallCheck(this, SingleSignOnAuthorizeResponse);

    SingleSignOnAuthorizeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SingleSignOnAuthorizeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SingleSignOnAuthorizeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} The populated <code>SingleSignOnAuthorizeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SingleSignOnAuthorizeResponse();

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('login_url')) {
          obj['login_url'] = _ApiClient["default"].convertToType(data['login_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SingleSignOnAuthorizeResponse;
}();
/**
 * Expiration date/time after which the single sign-on login operation will have timed out
 * @member {String} expiration_dts
 */


SingleSignOnAuthorizeResponse.prototype['expiration_dts'] = undefined;
/**
 * The URL that you should redirect the customer's browser to.  This URL will begin the login process.
 * @member {String} login_url
 */

SingleSignOnAuthorizeResponse.prototype['login_url'] = undefined;
var _default = SingleSignOnAuthorizeResponse;
exports["default"] = _default;