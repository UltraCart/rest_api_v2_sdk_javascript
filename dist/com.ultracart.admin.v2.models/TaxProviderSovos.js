"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SovosConfig = _interopRequireDefault(require("./SovosConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderSovos model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSovos
 * @version 4.0.137
 */
var TaxProviderSovos = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderSovos</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderSovos
   */
  function TaxProviderSovos() {
    _classCallCheck(this, TaxProviderSovos);

    TaxProviderSovos.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderSovos, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderSovos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSovos} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSovos} The populated <code>TaxProviderSovos</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderSovos();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _SovosConfig["default"].constructFromObject(data['configuration']);
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

  return TaxProviderSovos;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/SovosConfig} configuration
 */


TaxProviderSovos.prototype['configuration'] = undefined;
/**
 * Description
 * @member {String} description
 */

TaxProviderSovos.prototype['description'] = undefined;
/**
 * Selected
 * @member {Boolean} selected
 */

TaxProviderSovos.prototype['selected'] = undefined;
/**
 * Title
 * @member {String} title
 */

TaxProviderSovos.prototype['title'] = undefined;
var _default = TaxProviderSovos;
exports["default"] = _default;