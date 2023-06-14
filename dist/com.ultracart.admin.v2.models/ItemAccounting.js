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
 * The ItemAccounting model module.
 * @module com.ultracart.admin.v2.models/ItemAccounting
 * @version 4.0.159
 */
var ItemAccounting = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemAccounting</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAccounting
   */
  function ItemAccounting() {
    _classCallCheck(this, ItemAccounting);

    ItemAccounting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemAccounting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemAccounting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAccounting} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAccounting} The populated <code>ItemAccounting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemAccounting();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('qb_class')) {
          obj['qb_class'] = _ApiClient["default"].convertToType(data['qb_class'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemAccounting;
}();
/**
 * QuickBooks item name if different than the item id
 * @member {String} accounting_code
 */


ItemAccounting.prototype['accounting_code'] = undefined;
/**
 * QuickBooks class if you are classifying items on your invoices/receipts
 * @member {String} qb_class
 */

ItemAccounting.prototype['qb_class'] = undefined;
var _default = ItemAccounting;
exports["default"] = _default;