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
 * The RegisterAffiliateClickResponse model module.
 * @module com.ultracart.admin.v2.models/RegisterAffiliateClickResponse
 * @version 4.0.123-RC
 */
var RegisterAffiliateClickResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegisterAffiliateClickResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse
   */
  function RegisterAffiliateClickResponse() {
    _classCallCheck(this, RegisterAffiliateClickResponse);

    RegisterAffiliateClickResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterAffiliateClickResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisterAffiliateClickResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} The populated <code>RegisterAffiliateClickResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterAffiliateClickResponse();

        if (data.hasOwnProperty('cookie_max_age')) {
          obj['cookie_max_age'] = _ApiClient["default"].convertToType(data['cookie_max_age'], 'Number');
        }

        if (data.hasOwnProperty('cookie_names')) {
          obj['cookie_names'] = _ApiClient["default"].convertToType(data['cookie_names'], ['String']);
        }

        if (data.hasOwnProperty('cookie_values')) {
          obj['cookie_values'] = _ApiClient["default"].convertToType(data['cookie_values'], ['String']);
        }

        if (data.hasOwnProperty('registered')) {
          obj['registered'] = _ApiClient["default"].convertToType(data['registered'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RegisterAffiliateClickResponse;
}();
/**
 * The cookie max age to use
 * @member {Number} cookie_max_age
 */


RegisterAffiliateClickResponse.prototype['cookie_max_age'] = undefined;
/**
 * The names of all the cookies to set on the browser
 * @member {Array.<String>} cookie_names
 */

RegisterAffiliateClickResponse.prototype['cookie_names'] = undefined;
/**
 * The values of all the cookies to set on the browser
 * @member {Array.<String>} cookie_values
 */

RegisterAffiliateClickResponse.prototype['cookie_values'] = undefined;
/**
 * True if a click was registered
 * @member {Boolean} registered
 */

RegisterAffiliateClickResponse.prototype['registered'] = undefined;
var _default = RegisterAffiliateClickResponse;
exports["default"] = _default;