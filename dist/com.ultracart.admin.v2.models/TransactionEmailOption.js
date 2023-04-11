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
 * The TransactionEmailOption model module.
 * @module com.ultracart.admin.v2.models/TransactionEmailOption
 * @version 4.0.145
 */
var TransactionEmailOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionEmailOption</code>.
   * @alias module:com.ultracart.admin.v2.models/TransactionEmailOption
   */
  function TransactionEmailOption() {
    _classCallCheck(this, TransactionEmailOption);

    TransactionEmailOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionEmailOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionEmailOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TransactionEmailOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TransactionEmailOption} The populated <code>TransactionEmailOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionEmailOption();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('merchantEmailDeliveryOptionOid')) {
          obj['merchantEmailDeliveryOptionOid'] = _ApiClient["default"].convertToType(data['merchantEmailDeliveryOptionOid'], 'Number');
        }

        if (data.hasOwnProperty('merchantId')) {
          obj['merchantId'] = _ApiClient["default"].convertToType(data['merchantId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }

        if (data.hasOwnProperty('storeFrontOid')) {
          obj['storeFrontOid'] = _ApiClient["default"].convertToType(data['storeFrontOid'], 'Number');
        }

        if (data.hasOwnProperty('templateDisplay')) {
          obj['templateDisplay'] = _ApiClient["default"].convertToType(data['templateDisplay'], 'String');
        }

        if (data.hasOwnProperty('templateType')) {
          obj['templateType'] = _ApiClient["default"].convertToType(data['templateType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionEmailOption;
}();
/**
 * @member {String} description
 */


TransactionEmailOption.prototype['description'] = undefined;
/**
 * @member {Number} merchantEmailDeliveryOptionOid
 */

TransactionEmailOption.prototype['merchantEmailDeliveryOptionOid'] = undefined;
/**
 * @member {String} merchantId
 */

TransactionEmailOption.prototype['merchantId'] = undefined;
/**
 * @member {String} name
 */

TransactionEmailOption.prototype['name'] = undefined;
/**
 * @member {Boolean} selected
 */

TransactionEmailOption.prototype['selected'] = undefined;
/**
 * @member {Number} storeFrontOid
 */

TransactionEmailOption.prototype['storeFrontOid'] = undefined;
/**
 * @member {String} templateDisplay
 */

TransactionEmailOption.prototype['templateDisplay'] = undefined;
/**
 * @member {String} templateType
 */

TransactionEmailOption.prototype['templateType'] = undefined;
var _default = TransactionEmailOption;
exports["default"] = _default;