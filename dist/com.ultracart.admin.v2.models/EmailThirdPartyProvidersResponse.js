"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailThirdPartyProvider = _interopRequireDefault(require("./EmailThirdPartyProvider"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailThirdPartyProvidersResponse model module.
 * @module com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse
 * @version 4.0.189
 */
var EmailThirdPartyProvidersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailThirdPartyProvidersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse
   */
  function EmailThirdPartyProvidersResponse() {
    _classCallCheck(this, EmailThirdPartyProvidersResponse);

    EmailThirdPartyProvidersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailThirdPartyProvidersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailThirdPartyProvidersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse} The populated <code>EmailThirdPartyProvidersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailThirdPartyProvidersResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('providers')) {
          obj['providers'] = _ApiClient["default"].convertToType(data['providers'], [_EmailThirdPartyProvider["default"]]);
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

  return EmailThirdPartyProvidersResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


EmailThirdPartyProvidersResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

EmailThirdPartyProvidersResponse.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyProvider>} providers
 */

EmailThirdPartyProvidersResponse.prototype['providers'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

EmailThirdPartyProvidersResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

EmailThirdPartyProvidersResponse.prototype['warning'] = undefined;
var _default = EmailThirdPartyProvidersResponse;
exports["default"] = _default;