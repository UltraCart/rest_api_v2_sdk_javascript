"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxCountryCode = _interopRequireDefault(require("./TaxCountryCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderSelfCountriesResponse model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse
 * @version 4.0.104-RC
 */
var TaxProviderSelfCountriesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderSelfCountriesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse
   */
  function TaxProviderSelfCountriesResponse() {
    _classCallCheck(this, TaxProviderSelfCountriesResponse);

    TaxProviderSelfCountriesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderSelfCountriesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderSelfCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} The populated <code>TaxProviderSelfCountriesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderSelfCountriesResponse();

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], [_TaxCountryCode["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TaxProviderSelfCountriesResponse;
}();
/**
 * countries
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCountryCode>} countries
 */


TaxProviderSelfCountriesResponse.prototype['countries'] = undefined;
var _default = TaxProviderSelfCountriesResponse;
exports["default"] = _default;