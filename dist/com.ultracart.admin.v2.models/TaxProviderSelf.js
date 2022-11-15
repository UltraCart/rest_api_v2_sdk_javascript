"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SelfConfig = _interopRequireDefault(require("./SelfConfig"));

var _TaxCountry = _interopRequireDefault(require("./TaxCountry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderSelf model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSelf
 * @version 4.0.83-RC
 */
var TaxProviderSelf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderSelf</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderSelf
   */
  function TaxProviderSelf() {
    _classCallCheck(this, TaxProviderSelf);

    TaxProviderSelf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderSelf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderSelf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelf} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSelf} The populated <code>TaxProviderSelf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderSelf();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _SelfConfig["default"].constructFromObject(data['configuration']);
        }

        if (data.hasOwnProperty('countries')) {
          obj['countries'] = _ApiClient["default"].convertToType(data['countries'], [_TaxCountry["default"]]);
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

  return TaxProviderSelf;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/SelfConfig} configuration
 */


TaxProviderSelf.prototype['configuration'] = undefined;
/**
 * Countries that collect sales tax
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCountry>} countries
 */

TaxProviderSelf.prototype['countries'] = undefined;
/**
 * Description
 * @member {String} description
 */

TaxProviderSelf.prototype['description'] = undefined;
/**
 * Selected
 * @member {Boolean} selected
 */

TaxProviderSelf.prototype['selected'] = undefined;
/**
 * Title
 * @member {String} title
 */

TaxProviderSelf.prototype['title'] = undefined;
var _default = TaxProviderSelf;
exports["default"] = _default;