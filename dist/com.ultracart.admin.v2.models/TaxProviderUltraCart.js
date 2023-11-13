"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxProviderUltraCartState = _interopRequireDefault(require("./TaxProviderUltraCartState"));

var _UltraCartConfig = _interopRequireDefault(require("./UltraCartConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxProviderUltraCart model module.
 * @module com.ultracart.admin.v2.models/TaxProviderUltraCart
 * @version 4.0.187
 */
var TaxProviderUltraCart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderUltraCart</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderUltraCart
   */
  function TaxProviderUltraCart() {
    _classCallCheck(this, TaxProviderUltraCart);

    TaxProviderUltraCart.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderUltraCart, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderUltraCart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} The populated <code>TaxProviderUltraCart</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderUltraCart();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _UltraCartConfig["default"].constructFromObject(data['configuration']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }

        if (data.hasOwnProperty('states')) {
          obj['states'] = _ApiClient["default"].convertToType(data['states'], [_TaxProviderUltraCartState["default"]]);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaxProviderUltraCart;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/UltraCartConfig} configuration
 */


TaxProviderUltraCart.prototype['configuration'] = undefined;
/**
 * Description
 * @member {String} description
 */

TaxProviderUltraCart.prototype['description'] = undefined;
/**
 * Selected
 * @member {Boolean} selected
 */

TaxProviderUltraCart.prototype['selected'] = undefined;
/**
 * States in the union showing their management status
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxProviderUltraCartState>} states
 */

TaxProviderUltraCart.prototype['states'] = undefined;
/**
 * Title
 * @member {String} title
 */

TaxProviderUltraCart.prototype['title'] = undefined;
var _default = TaxProviderUltraCart;
exports["default"] = _default;