"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Country = _interopRequireDefault(require("./Country"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CheckoutAllowedCountriesResponse model module.
 * @module com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse
 * @version 4.0.115-RC
 */
var CheckoutAllowedCountriesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckoutAllowedCountriesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse
   */
  function CheckoutAllowedCountriesResponse() {
    _classCallCheck(this, CheckoutAllowedCountriesResponse);

    CheckoutAllowedCountriesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckoutAllowedCountriesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckoutAllowedCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} The populated <code>CheckoutAllowedCountriesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckoutAllowedCountriesResponse();

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], [_Country["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CheckoutAllowedCountriesResponse;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Country>} countries
 */


CheckoutAllowedCountriesResponse.prototype['countries'] = undefined;
var _default = CheckoutAllowedCountriesResponse;
exports["default"] = _default;