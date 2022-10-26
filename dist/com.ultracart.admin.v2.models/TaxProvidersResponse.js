"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _TaxProviderAvalara = _interopRequireDefault(require("./TaxProviderAvalara"));

var _TaxProviderSelf = _interopRequireDefault(require("./TaxProviderSelf"));

var _TaxProviderSovos = _interopRequireDefault(require("./TaxProviderSovos"));

var _TaxProviderTaxJar = _interopRequireDefault(require("./TaxProviderTaxJar"));

var _TaxProviderUltraCart = _interopRequireDefault(require("./TaxProviderUltraCart"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProvidersResponse model module.
 * @module com.ultracart.admin.v2.models/TaxProvidersResponse
 * @version 4.0.74-RC
 */
var TaxProvidersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProvidersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProvidersResponse
   */
  function TaxProvidersResponse() {
    _classCallCheck(this, TaxProvidersResponse);

    TaxProvidersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProvidersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProvidersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProvidersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProvidersResponse} The populated <code>TaxProvidersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProvidersResponse();

        if (data.hasOwnProperty('avalara')) {
          obj['avalara'] = _TaxProviderAvalara["default"].constructFromObject(data['avalara']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _TaxProviderSelf["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('sovos')) {
          obj['sovos'] = _TaxProviderSovos["default"].constructFromObject(data['sovos']);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('taxjar')) {
          obj['taxjar'] = _TaxProviderTaxJar["default"].constructFromObject(data['taxjar']);
        }

        if (data.hasOwnProperty('ultracart')) {
          obj['ultracart'] = _TaxProviderUltraCart["default"].constructFromObject(data['ultracart']);
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return TaxProvidersResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderAvalara} avalara
 */


TaxProvidersResponse.prototype['avalara'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

TaxProvidersResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

TaxProvidersResponse.prototype['metadata'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderSelf} self
 */

TaxProvidersResponse.prototype['self'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderSovos} sovos
 */

TaxProvidersResponse.prototype['sovos'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

TaxProvidersResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} taxjar
 */

TaxProvidersResponse.prototype['taxjar'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} ultracart
 */

TaxProvidersResponse.prototype['ultracart'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

TaxProvidersResponse.prototype['warning'] = undefined;
var _default = TaxProvidersResponse;
exports["default"] = _default;