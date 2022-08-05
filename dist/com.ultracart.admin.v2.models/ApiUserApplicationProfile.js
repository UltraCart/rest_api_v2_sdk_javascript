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
 * The ApiUserApplicationProfile model module.
 * @module com.ultracart.admin.v2.models/ApiUserApplicationProfile
 * @version 4.0.50-RC
 */
var ApiUserApplicationProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiUserApplicationProfile</code>.
   * @alias module:com.ultracart.admin.v2.models/ApiUserApplicationProfile
   */
  function ApiUserApplicationProfile() {
    _classCallCheck(this, ApiUserApplicationProfile);

    ApiUserApplicationProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApiUserApplicationProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApiUserApplicationProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} The populated <code>ApiUserApplicationProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiUserApplicationProfile();

        if (data.hasOwnProperty('api_application_logo_url')) {
          obj['api_application_logo_url'] = _ApiClient["default"].convertToType(data['api_application_logo_url'], 'String');
        }

        if (data.hasOwnProperty('application_description')) {
          obj['application_description'] = _ApiClient["default"].convertToType(data['application_description'], 'String');
        }

        if (data.hasOwnProperty('application_name')) {
          obj['application_name'] = _ApiClient["default"].convertToType(data['application_name'], 'String');
        }

        if (data.hasOwnProperty('developer_name')) {
          obj['developer_name'] = _ApiClient["default"].convertToType(data['developer_name'], 'String');
        }

        if (data.hasOwnProperty('developer_website')) {
          obj['developer_website'] = _ApiClient["default"].convertToType(data['developer_website'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApiUserApplicationProfile;
}();
/**
 * Application logo URL
 * @member {String} api_application_logo_url
 */


ApiUserApplicationProfile.prototype['api_application_logo_url'] = undefined;
/**
 * Application description
 * @member {String} application_description
 */

ApiUserApplicationProfile.prototype['application_description'] = undefined;
/**
 * Application name
 * @member {String} application_name
 */

ApiUserApplicationProfile.prototype['application_name'] = undefined;
/**
 * Developer name
 * @member {String} developer_name
 */

ApiUserApplicationProfile.prototype['developer_name'] = undefined;
/**
 * Developer website
 * @member {String} developer_website
 */

ApiUserApplicationProfile.prototype['developer_website'] = undefined;
var _default = ApiUserApplicationProfile;
exports["default"] = _default;