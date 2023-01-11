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
 * The SingleSignOnAuthorizeRequest model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest
 * @version 4.0.110-RC
 */
var SingleSignOnAuthorizeRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SingleSignOnAuthorizeRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest
   */
  function SingleSignOnAuthorizeRequest() {
    _classCallCheck(this, SingleSignOnAuthorizeRequest);

    SingleSignOnAuthorizeRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SingleSignOnAuthorizeRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SingleSignOnAuthorizeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest} The populated <code>SingleSignOnAuthorizeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SingleSignOnAuthorizeRequest();

        if (data.hasOwnProperty('redirect_uri')) {
          obj['redirect_uri'] = _ApiClient["default"].convertToType(data['redirect_uri'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SingleSignOnAuthorizeRequest;
}();
/**
 * The URL that the customer should be redirected to after they have approved a single sign on session.
 * @member {String} redirect_uri
 */


SingleSignOnAuthorizeRequest.prototype['redirect_uri'] = undefined;
/**
 * An optional state variable that you provide.  It will be returned to you on the redirect.  You can inspect the state to validate the request is legitimate.  We recommend using this field.
 * @member {String} state
 */

SingleSignOnAuthorizeRequest.prototype['state'] = undefined;
var _default = SingleSignOnAuthorizeRequest;
exports["default"] = _default;