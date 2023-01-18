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
 * The AvalaraConfig model module.
 * @module com.ultracart.admin.v2.models/AvalaraConfig
 * @version 4.0.115-RC
 */
var AvalaraConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvalaraConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/AvalaraConfig
   */
  function AvalaraConfig() {
    _classCallCheck(this, AvalaraConfig);

    AvalaraConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvalaraConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvalaraConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AvalaraConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AvalaraConfig} The populated <code>AvalaraConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvalaraConfig();

        if (data.hasOwnProperty('account_id')) {
          obj['account_id'] = _ApiClient["default"].convertToType(data['account_id'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('avalara_oid')) {
          obj['avalara_oid'] = _ApiClient["default"].convertToType(data['avalara_oid'], 'Number');
        }

        if (data.hasOwnProperty('company_id')) {
          obj['company_id'] = _ApiClient["default"].convertToType(data['company_id'], 'String');
        }

        if (data.hasOwnProperty('enable_upc')) {
          obj['enable_upc'] = _ApiClient["default"].convertToType(data['enable_upc'], 'Boolean');
        }

        if (data.hasOwnProperty('estimate_only')) {
          obj['estimate_only'] = _ApiClient["default"].convertToType(data['estimate_only'], 'Boolean');
        }

        if (data.hasOwnProperty('guest_customer_code')) {
          obj['guest_customer_code'] = _ApiClient["default"].convertToType(data['guest_customer_code'], 'String');
        }

        if (data.hasOwnProperty('last_test_dts')) {
          obj['last_test_dts'] = _ApiClient["default"].convertToType(data['last_test_dts'], 'String');
        }

        if (data.hasOwnProperty('license_key')) {
          obj['license_key'] = _ApiClient["default"].convertToType(data['license_key'], 'String');
        }

        if (data.hasOwnProperty('sandbox')) {
          obj['sandbox'] = _ApiClient["default"].convertToType(data['sandbox'], 'Boolean');
        }

        if (data.hasOwnProperty('send_test_orders')) {
          obj['send_test_orders'] = _ApiClient["default"].convertToType(data['send_test_orders'], 'Boolean');
        }

        if (data.hasOwnProperty('service_url')) {
          obj['service_url'] = _ApiClient["default"].convertToType(data['service_url'], 'String');
        }

        if (data.hasOwnProperty('test_results')) {
          obj['test_results'] = _ApiClient["default"].convertToType(data['test_results'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvalaraConfig;
}();
/**
 * Avalara account ID
 * @member {String} account_id
 */


AvalaraConfig.prototype['account_id'] = undefined;
/**
 * True if Avalara is active for this merchant
 * @member {Boolean} active
 */

AvalaraConfig.prototype['active'] = undefined;
/**
 * Unique identifier for this avalara config object
 * @member {Number} avalara_oid
 */

AvalaraConfig.prototype['avalara_oid'] = undefined;
/**
 * Avalara company ID
 * @member {String} company_id
 */

AvalaraConfig.prototype['company_id'] = undefined;
/**
 * True if this Avalara configuration is set to enable tax valuation by UPC
 * @member {Boolean} enable_upc
 */

AvalaraConfig.prototype['enable_upc'] = undefined;
/**
 * True if this Avalara configuration is to estimate taxes only and not report placed orders to Avalara
 * @member {Boolean} estimate_only
 */

AvalaraConfig.prototype['estimate_only'] = undefined;
/**
 * Optional customer code for customers without profiles, defaults to GuestCustomer
 * @member {String} guest_customer_code
 */

AvalaraConfig.prototype['guest_customer_code'] = undefined;
/**
 * Date/time of the connection test to Avalara
 * @member {String} last_test_dts
 */

AvalaraConfig.prototype['last_test_dts'] = undefined;
/**
 * Avalara license key
 * @member {String} license_key
 */

AvalaraConfig.prototype['license_key'] = undefined;
/**
 * True if this Avalara instance is pointed at the Avalara Sandbox
 * @member {Boolean} sandbox
 */

AvalaraConfig.prototype['sandbox'] = undefined;
/**
 * Send test orders through to Avalara.  The default is to not transmit test orders to Avalara.
 * @member {Boolean} send_test_orders
 */

AvalaraConfig.prototype['send_test_orders'] = undefined;
/**
 * Avalara service URL
 * @member {String} service_url
 */

AvalaraConfig.prototype['service_url'] = undefined;
/**
 * Test results of the last connection test to Avalara
 * @member {String} test_results
 */

AvalaraConfig.prototype['test_results'] = undefined;
var _default = AvalaraConfig;
exports["default"] = _default;