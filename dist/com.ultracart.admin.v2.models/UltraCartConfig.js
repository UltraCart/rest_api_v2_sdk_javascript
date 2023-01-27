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
 * The UltraCartConfig model module.
 * @module com.ultracart.admin.v2.models/UltraCartConfig
 * @version 4.0.127
 */
var UltraCartConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UltraCartConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/UltraCartConfig
   */
  function UltraCartConfig() {
    _classCallCheck(this, UltraCartConfig);

    UltraCartConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UltraCartConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UltraCartConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UltraCartConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UltraCartConfig} The populated <code>UltraCartConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UltraCartConfig();

        if (data.hasOwnProperty('tax_billing')) {
          obj['tax_billing'] = _ApiClient["default"].convertToType(data['tax_billing'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UltraCartConfig;
}();
/**
 * True if sales tax should be collected based on billing address instead of shipping address
 * @member {Boolean} tax_billing
 */


UltraCartConfig.prototype['tax_billing'] = undefined;
var _default = UltraCartConfig;
exports["default"] = _default;