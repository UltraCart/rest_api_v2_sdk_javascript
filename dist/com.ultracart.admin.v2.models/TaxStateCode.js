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
 * The TaxStateCode model module.
 * @module com.ultracart.admin.v2.models/TaxStateCode
 * @version 4.0.110-RC
 */
var TaxStateCode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxStateCode</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxStateCode
   */
  function TaxStateCode() {
    _classCallCheck(this, TaxStateCode);

    TaxStateCode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxStateCode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxStateCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxStateCode} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxStateCode} The populated <code>TaxStateCode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxStateCode();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('state_code')) {
          obj['state_code'] = _ApiClient["default"].convertToType(data['state_code'], 'String');
        }

        if (data.hasOwnProperty('state_name')) {
          obj['state_name'] = _ApiClient["default"].convertToType(data['state_name'], 'String');
        }

        if (data.hasOwnProperty('tax_rate')) {
          obj['tax_rate'] = _ApiClient["default"].convertToType(data['tax_rate'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_formatted')) {
          obj['tax_rate_formatted'] = _ApiClient["default"].convertToType(data['tax_rate_formatted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaxStateCode;
}();
/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */


TaxStateCode.prototype['accounting_code'] = undefined;
/**
 * State code (2 characters
 * @member {String} state_code
 */

TaxStateCode.prototype['state_code'] = undefined;
/**
 * State name
 * @member {String} state_name
 */

TaxStateCode.prototype['state_name'] = undefined;
/**
 * Tax Rate
 * @member {Number} tax_rate
 */

TaxStateCode.prototype['tax_rate'] = undefined;
/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */

TaxStateCode.prototype['tax_rate_formatted'] = undefined;
var _default = TaxStateCode;
exports["default"] = _default;