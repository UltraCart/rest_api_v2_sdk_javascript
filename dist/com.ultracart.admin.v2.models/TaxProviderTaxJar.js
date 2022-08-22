"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxJarConfig = _interopRequireDefault(require("./TaxJarConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderTaxJar model module.
 * @module com.ultracart.admin.v2.models/TaxProviderTaxJar
 * @version 4.0.56-RC
 */
var TaxProviderTaxJar = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderTaxJar</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderTaxJar
   */
  function TaxProviderTaxJar() {
    _classCallCheck(this, TaxProviderTaxJar);

    TaxProviderTaxJar.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderTaxJar, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderTaxJar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} The populated <code>TaxProviderTaxJar</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderTaxJar();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _TaxJarConfig["default"].constructFromObject(data['configuration']);
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

  return TaxProviderTaxJar;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/TaxJarConfig} configuration
 */


TaxProviderTaxJar.prototype['configuration'] = undefined;
/**
 * Description
 * @member {String} description
 */

TaxProviderTaxJar.prototype['description'] = undefined;
/**
 * Selected
 * @member {Boolean} selected
 */

TaxProviderTaxJar.prototype['selected'] = undefined;
/**
 * Title
 * @member {String} title
 */

TaxProviderTaxJar.prototype['title'] = undefined;
var _default = TaxProviderTaxJar;
exports["default"] = _default;