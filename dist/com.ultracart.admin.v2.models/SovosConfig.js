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
 * The SovosConfig model module.
 * @module com.ultracart.admin.v2.models/SovosConfig
 * @version 4.0.41-RC
 */
var SovosConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SovosConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/SovosConfig
   */
  function SovosConfig() {
    _classCallCheck(this, SovosConfig);

    SovosConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SovosConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SovosConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SovosConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SovosConfig} The populated <code>SovosConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SovosConfig();

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('estimate_only')) {
          obj['estimate_only'] = _ApiClient["default"].convertToType(data['estimate_only'], 'Boolean');
        }

        if (data.hasOwnProperty('last_test_dts')) {
          obj['last_test_dts'] = _ApiClient["default"].convertToType(data['last_test_dts'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('send_test_orders')) {
          obj['send_test_orders'] = _ApiClient["default"].convertToType(data['send_test_orders'], 'Boolean');
        }

        if (data.hasOwnProperty('test_results')) {
          obj['test_results'] = _ApiClient["default"].convertToType(data['test_results'], 'String');
        }

        if (data.hasOwnProperty('uat')) {
          obj['uat'] = _ApiClient["default"].convertToType(data['uat'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SovosConfig;
}();
/**
 * Sovos access key
 * @member {String} access_key
 */


SovosConfig.prototype['access_key'] = undefined;
/**
 * True if this Sovos configuration is to estimate taxes only and not report placed orders to Sovos
 * @member {Boolean} estimate_only
 */

SovosConfig.prototype['estimate_only'] = undefined;
/**
 * Date/time of the connection test to Sovos
 * @member {String} last_test_dts
 */

SovosConfig.prototype['last_test_dts'] = undefined;
/**
 * Sovos secret key
 * @member {String} secret_key
 */

SovosConfig.prototype['secret_key'] = undefined;
/**
 * Send test orders through to Sovos.  The default is to not transmit test orders to Sovos.
 * @member {Boolean} send_test_orders
 */

SovosConfig.prototype['send_test_orders'] = undefined;
/**
 * Test results of the last connection test to Sovos
 * @member {String} test_results
 */

SovosConfig.prototype['test_results'] = undefined;
/**
 * True if this Sovos configuration is currently undergoing user acceptance testing
 * @member {Boolean} uat
 */

SovosConfig.prototype['uat'] = undefined;
var _default = SovosConfig;
exports["default"] = _default;