"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxProviderAvalaraCompany = _interopRequireDefault(require("./TaxProviderAvalaraCompany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderAvalaraCompaniesResult model module.
 * @module com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult
 * @version 4.0.120-RC
 */
var TaxProviderAvalaraCompaniesResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderAvalaraCompaniesResult</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult
   */
  function TaxProviderAvalaraCompaniesResult() {
    _classCallCheck(this, TaxProviderAvalaraCompaniesResult);

    TaxProviderAvalaraCompaniesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderAvalaraCompaniesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderAvalaraCompaniesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} The populated <code>TaxProviderAvalaraCompaniesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderAvalaraCompaniesResult();

        if (data.hasOwnProperty('companies')) {
          obj['companies'] = _ApiClient["default"].convertToType(data['companies'], [_TaxProviderAvalaraCompany["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TaxProviderAvalaraCompaniesResult;
}();
/**
 * Tax companies configured by the merchant
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany>} companies
 */


TaxProviderAvalaraCompaniesResult.prototype['companies'] = undefined;
var _default = TaxProviderAvalaraCompaniesResult;
exports["default"] = _default;