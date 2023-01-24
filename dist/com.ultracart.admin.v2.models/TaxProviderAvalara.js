"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvalaraConfig = _interopRequireDefault(require("./AvalaraConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderAvalara model module.
 * @module com.ultracart.admin.v2.models/TaxProviderAvalara
 * @version 4.0.121-RC
 */
var TaxProviderAvalara = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderAvalara</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalara
   */
  function TaxProviderAvalara() {
    _classCallCheck(this, TaxProviderAvalara);

    TaxProviderAvalara.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderAvalara, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderAvalara</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalara} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalara} The populated <code>TaxProviderAvalara</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderAvalara();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _AvalaraConfig["default"].constructFromObject(data['configuration']);
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

  return TaxProviderAvalara;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/AvalaraConfig} configuration
 */


TaxProviderAvalara.prototype['configuration'] = undefined;
/**
 * Description
 * @member {String} description
 */

TaxProviderAvalara.prototype['description'] = undefined;
/**
 * Selected
 * @member {Boolean} selected
 */

TaxProviderAvalara.prototype['selected'] = undefined;
/**
 * Title
 * @member {String} title
 */

TaxProviderAvalara.prototype['title'] = undefined;
var _default = TaxProviderAvalara;
exports["default"] = _default;