"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxCity = _interopRequireDefault(require("./TaxCity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxCounty model module.
 * @module com.ultracart.admin.v2.models/TaxCounty
 * @version 4.0.165
 */
var TaxCounty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxCounty</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCounty
   */
  function TaxCounty() {
    _classCallCheck(this, TaxCounty);

    TaxCounty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxCounty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxCounty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCounty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCounty} The populated <code>TaxCounty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxCounty();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('cities')) {
          obj['cities'] = _ApiClient["default"].convertToType(data['cities'], [_TaxCity["default"]]);
        }

        if (data.hasOwnProperty('county')) {
          obj['county'] = _ApiClient["default"].convertToType(data['county'], 'String');
        }

        if (data.hasOwnProperty('county_oid')) {
          obj['county_oid'] = _ApiClient["default"].convertToType(data['county_oid'], 'Number');
        }

        if (data.hasOwnProperty('dont_collect_city')) {
          obj['dont_collect_city'] = _ApiClient["default"].convertToType(data['dont_collect_city'], 'Boolean');
        }

        if (data.hasOwnProperty('dont_collect_county')) {
          obj['dont_collect_county'] = _ApiClient["default"].convertToType(data['dont_collect_county'], 'Boolean');
        }

        if (data.hasOwnProperty('dont_collect_postal_code')) {
          obj['dont_collect_postal_code'] = _ApiClient["default"].convertToType(data['dont_collect_postal_code'], 'Boolean');
        }

        if (data.hasOwnProperty('state_oid')) {
          obj['state_oid'] = _ApiClient["default"].convertToType(data['state_oid'], 'Number');
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

  return TaxCounty;
}();
/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */


TaxCounty.prototype['accounting_code'] = undefined;
/**
 * Cities within this city
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCity>} cities
 */

TaxCounty.prototype['cities'] = undefined;
/**
 * County
 * @member {String} county
 */

TaxCounty.prototype['county'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} county_oid
 */

TaxCounty.prototype['county_oid'] = undefined;
/**
 * Flag instructing engine to not collect city tax for this county
 * @member {Boolean} dont_collect_city
 */

TaxCounty.prototype['dont_collect_city'] = undefined;
/**
 * Flag instructing engine to not collect county tax for this county
 * @member {Boolean} dont_collect_county
 */

TaxCounty.prototype['dont_collect_county'] = undefined;
/**
 * Flag instructing engine to not collect postal code tax for this county
 * @member {Boolean} dont_collect_postal_code
 */

TaxCounty.prototype['dont_collect_postal_code'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} state_oid
 */

TaxCounty.prototype['state_oid'] = undefined;
/**
 * Tax Rate
 * @member {Number} tax_rate
 */

TaxCounty.prototype['tax_rate'] = undefined;
/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */

TaxCounty.prototype['tax_rate_formatted'] = undefined;
var _default = TaxCounty;
exports["default"] = _default;