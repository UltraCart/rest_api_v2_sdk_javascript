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
 * The TaxProviderTestResult model module.
 * @module com.ultracart.admin.v2.models/TaxProviderTestResult
 * @version 4.0.5
 */
var TaxProviderTestResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderTestResult</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderTestResult
   */
  function TaxProviderTestResult() {
    _classCallCheck(this, TaxProviderTestResult);

    TaxProviderTestResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderTestResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderTestResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTestResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderTestResult} The populated <code>TaxProviderTestResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderTestResult();

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], 'String');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TaxProviderTestResult;
}();
/**
 * @member {String} details
 */


TaxProviderTestResult.prototype['details'] = undefined;
/**
 * True if the connection was successful
 * @member {Boolean} success
 */

TaxProviderTestResult.prototype['success'] = undefined;
var _default = TaxProviderTestResult;
exports["default"] = _default;