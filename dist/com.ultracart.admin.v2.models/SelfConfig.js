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
 * The SelfConfig model module.
 * @module com.ultracart.admin.v2.models/SelfConfig
 * @version 4.0.46-RC
 */
var SelfConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SelfConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/SelfConfig
   */
  function SelfConfig() {
    _classCallCheck(this, SelfConfig);

    SelfConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SelfConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SelfConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SelfConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SelfConfig} The populated <code>SelfConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SelfConfig();

        if (data.hasOwnProperty('tax_billing')) {
          obj['tax_billing'] = _ApiClient["default"].convertToType(data['tax_billing'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SelfConfig;
}();
/**
 * True if sales tax should be collected based on billing address instead of shipping address
 * @member {Boolean} tax_billing
 */


SelfConfig.prototype['tax_billing'] = undefined;
var _default = SelfConfig;
exports["default"] = _default;