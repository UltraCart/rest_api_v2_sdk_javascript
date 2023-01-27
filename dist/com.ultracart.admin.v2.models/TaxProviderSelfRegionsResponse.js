"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxStateCode = _interopRequireDefault(require("./TaxStateCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderSelfRegionsResponse model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse
 * @version 4.0.126-RC
 */
var TaxProviderSelfRegionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderSelfRegionsResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse
   */
  function TaxProviderSelfRegionsResponse() {
    _classCallCheck(this, TaxProviderSelfRegionsResponse);

    TaxProviderSelfRegionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderSelfRegionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderSelfRegionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse} The populated <code>TaxProviderSelfRegionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderSelfRegionsResponse();

        if (data.hasOwnProperty('regions')) {
          obj['regions'] = _ApiClient["default"].convertToType(data['regions'], [_TaxStateCode["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TaxProviderSelfRegionsResponse;
}();
/**
 * regions
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxStateCode>} regions
 */


TaxProviderSelfRegionsResponse.prototype['regions'] = undefined;
var _default = TaxProviderSelfRegionsResponse;
exports["default"] = _default;