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
 * The TaxProviderAvalaraCompany model module.
 * @module com.ultracart.admin.v2.models/TaxProviderAvalaraCompany
 * @version 4.0.59-RC
 */
var TaxProviderAvalaraCompany = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderAvalaraCompany</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany
   */
  function TaxProviderAvalaraCompany() {
    _classCallCheck(this, TaxProviderAvalaraCompany);

    TaxProviderAvalaraCompany.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderAvalaraCompany, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderAvalaraCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany} The populated <code>TaxProviderAvalaraCompany</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderAvalaraCompany();

        if (data.hasOwnProperty('company_code')) {
          obj['company_code'] = _ApiClient["default"].convertToType(data['company_code'], 'String');
        }

        if (data.hasOwnProperty('company_name')) {
          obj['company_name'] = _ApiClient["default"].convertToType(data['company_name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaxProviderAvalaraCompany;
}();
/**
 * Company code
 * @member {String} company_code
 */


TaxProviderAvalaraCompany.prototype['company_code'] = undefined;
/**
 * Company name
 * @member {String} company_name
 */

TaxProviderAvalaraCompany.prototype['company_name'] = undefined;
/**
 * Description
 * @member {String} description
 */

TaxProviderAvalaraCompany.prototype['description'] = undefined;
/**
 * Selected
 * @member {Boolean} selected
 */

TaxProviderAvalaraCompany.prototype['selected'] = undefined;
/**
 * Title
 * @member {String} title
 */

TaxProviderAvalaraCompany.prototype['title'] = undefined;
var _default = TaxProviderAvalaraCompany;
exports["default"] = _default;