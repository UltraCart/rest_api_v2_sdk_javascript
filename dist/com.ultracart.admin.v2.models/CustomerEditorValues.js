"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPartner = _interopRequireDefault(require("./ChannelPartner"));

var _Country = _interopRequireDefault(require("./Country"));

var _CustomerAffiliate = _interopRequireDefault(require("./CustomerAffiliate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomerEditorValues model module.
 * @module com.ultracart.admin.v2.models/CustomerEditorValues
 * @version 4.0.93-RC
 */
var CustomerEditorValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerEditorValues</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEditorValues
   */
  function CustomerEditorValues() {
    _classCallCheck(this, CustomerEditorValues);

    CustomerEditorValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerEditorValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerEditorValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEditorValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEditorValues} The populated <code>CustomerEditorValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerEditorValues();

        if (data.hasOwnProperty('affiliates')) {
          obj['affiliates'] = _ApiClient["default"].convertToType(data['affiliates'], [_CustomerAffiliate["default"]]);
        }

        if (data.hasOwnProperty('card_exp_months')) {
          obj['card_exp_months'] = _ApiClient["default"].convertToType(data['card_exp_months'], ['String']);
        }

        if (data.hasOwnProperty('card_exp_years')) {
          obj['card_exp_years'] = _ApiClient["default"].convertToType(data['card_exp_years'], ['String']);
        }

        if (data.hasOwnProperty('card_types')) {
          obj['card_types'] = _ApiClient["default"].convertToType(data['card_types'], ['String']);
        }

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], [_Country["default"]]);
        }

        if (data.hasOwnProperty('edi_channel_partners')) {
          obj['edi_channel_partners'] = _ApiClient["default"].convertToType(data['edi_channel_partners'], [_ChannelPartner["default"]]);
        }

        if (data.hasOwnProperty('loyalty_ledger_descriptions')) {
          obj['loyalty_ledger_descriptions'] = _ApiClient["default"].convertToType(data['loyalty_ledger_descriptions'], ['String']);
        }

        if (data.hasOwnProperty('loyalty_program_type')) {
          obj['loyalty_program_type'] = _ApiClient["default"].convertToType(data['loyalty_program_type'], 'String');
        }

        if (data.hasOwnProperty('qb_classes')) {
          obj['qb_classes'] = _ApiClient["default"].convertToType(data['qb_classes'], ['String']);
        }

        if (data.hasOwnProperty('sales_rep_codes')) {
          obj['sales_rep_codes'] = _ApiClient["default"].convertToType(data['sales_rep_codes'], ['String']);
        }

        if (data.hasOwnProperty('state_optional_countries')) {
          obj['state_optional_countries'] = _ApiClient["default"].convertToType(data['state_optional_countries'], [_Country["default"]]);
        }

        if (data.hasOwnProperty('terms')) {
          obj['terms'] = _ApiClient["default"].convertToType(data['terms'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CustomerEditorValues;
}();
/**
 * affiliates
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerAffiliate>} affiliates
 */


CustomerEditorValues.prototype['affiliates'] = undefined;
/**
 * card_exp_months
 * @member {Array.<String>} card_exp_months
 */

CustomerEditorValues.prototype['card_exp_months'] = undefined;
/**
 * card_exp_years
 * @member {Array.<String>} card_exp_years
 */

CustomerEditorValues.prototype['card_exp_years'] = undefined;
/**
 * card_types
 * @member {Array.<String>} card_types
 */

CustomerEditorValues.prototype['card_types'] = undefined;
/**
 * countries
 * @member {Array.<module:com.ultracart.admin.v2.models/Country>} countries
 */

CustomerEditorValues.prototype['countries'] = undefined;
/**
 * EDI channel partners
 * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartner>} edi_channel_partners
 */

CustomerEditorValues.prototype['edi_channel_partners'] = undefined;
/**
 * loyalty_ledger_descriptions
 * @member {Array.<String>} loyalty_ledger_descriptions
 */

CustomerEditorValues.prototype['loyalty_ledger_descriptions'] = undefined;
/**
 * loyalty_program_type
 * @member {String} loyalty_program_type
 */

CustomerEditorValues.prototype['loyalty_program_type'] = undefined;
/**
 * qb_classes
 * @member {Array.<String>} qb_classes
 */

CustomerEditorValues.prototype['qb_classes'] = undefined;
/**
 * sales_rep_codes
 * @member {Array.<String>} sales_rep_codes
 */

CustomerEditorValues.prototype['sales_rep_codes'] = undefined;
/**
 * state_optional_countries
 * @member {Array.<module:com.ultracart.admin.v2.models/Country>} state_optional_countries
 */

CustomerEditorValues.prototype['state_optional_countries'] = undefined;
/**
 * terms
 * @member {Array.<String>} terms
 */

CustomerEditorValues.prototype['terms'] = undefined;
var _default = CustomerEditorValues;
exports["default"] = _default;