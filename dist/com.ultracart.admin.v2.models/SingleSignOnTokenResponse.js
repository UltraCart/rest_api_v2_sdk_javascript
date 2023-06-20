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
 * The SingleSignOnTokenResponse model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnTokenResponse
 * @version 4.0.161
 */
var SingleSignOnTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SingleSignOnTokenResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse
   */
  function SingleSignOnTokenResponse() {
    _classCallCheck(this, SingleSignOnTokenResponse);

    SingleSignOnTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SingleSignOnTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SingleSignOnTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} The populated <code>SingleSignOnTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SingleSignOnTokenResponse();

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('simple_key')) {
          obj['simple_key'] = _ApiClient["default"].convertToType(data['simple_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SingleSignOnTokenResponse;
}();
/**
 * Expiration date/time after which time the key is no longer valid
 * @member {String} expiration_dts
 */


SingleSignOnTokenResponse.prototype['expiration_dts'] = undefined;
/**
 * IP address of the user which we recommend you lock the simple key's usage to.
 * @member {String} ip_address
 */

SingleSignOnTokenResponse.prototype['ip_address'] = undefined;
/**
 * The simple key that can then be used to make SDK calls on the users behalf.
 * @member {String} simple_key
 */

SingleSignOnTokenResponse.prototype['simple_key'] = undefined;
var _default = SingleSignOnTokenResponse;
exports["default"] = _default;