"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailThirdPartyProvider = _interopRequireDefault(require("./EmailThirdPartyProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailThirdPartyListImportRequest model module.
 * @module com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest
 * @version 4.0.124-RC
 */
var EmailThirdPartyListImportRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailThirdPartyListImportRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest
   */
  function EmailThirdPartyListImportRequest() {
    _classCallCheck(this, EmailThirdPartyListImportRequest);

    EmailThirdPartyListImportRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailThirdPartyListImportRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailThirdPartyListImportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} The populated <code>EmailThirdPartyListImportRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailThirdPartyListImportRequest();

        if (data.hasOwnProperty('providers')) {
          obj['providers'] = _ApiClient["default"].convertToType(data['providers'], [_EmailThirdPartyProvider["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EmailThirdPartyListImportRequest;
}();
/**
 * providers
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyProvider>} providers
 */


EmailThirdPartyListImportRequest.prototype['providers'] = undefined;
var _default = EmailThirdPartyListImportRequest;
exports["default"] = _default;