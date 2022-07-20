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
 * The ItemShippingCase model module.
 * @module com.ultracart.admin.v2.models/ItemShippingCase
 * @version 4.0.36-RC
 */
var ItemShippingCase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingCase</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingCase
   */
  function ItemShippingCase() {
    _classCallCheck(this, ItemShippingCase);

    ItemShippingCase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShippingCase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShippingCase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingCase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingCase} The populated <code>ItemShippingCase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingCase();

        if (data.hasOwnProperty('case_label')) {
          obj['case_label'] = _ApiClient["default"].convertToType(data['case_label'], 'String');
        }

        if (data.hasOwnProperty('case_merchant_item_id')) {
          obj['case_merchant_item_id'] = _ApiClient["default"].convertToType(data['case_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('case_merchant_item_oid')) {
          obj['case_merchant_item_oid'] = _ApiClient["default"].convertToType(data['case_merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemShippingCase;
}();
/**
 * Case label
 * @member {String} case_label
 */


ItemShippingCase.prototype['case_label'] = undefined;
/**
 * Case item id
 * @member {String} case_merchant_item_id
 */

ItemShippingCase.prototype['case_merchant_item_id'] = undefined;
/**
 * Case item object identifier
 * @member {Number} case_merchant_item_oid
 */

ItemShippingCase.prototype['case_merchant_item_oid'] = undefined;
/**
 * Case quantity
 * @member {Number} quantity
 */

ItemShippingCase.prototype['quantity'] = undefined;
var _default = ItemShippingCase;
exports["default"] = _default;