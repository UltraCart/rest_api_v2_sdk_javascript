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
 * The ItemSalesforce model module.
 * @module com.ultracart.admin.v2.models/ItemSalesforce
 * @version 4.0.109-RC
 */
var ItemSalesforce = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemSalesforce</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemSalesforce
   */
  function ItemSalesforce() {
    _classCallCheck(this, ItemSalesforce);

    ItemSalesforce.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemSalesforce, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemSalesforce</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemSalesforce} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemSalesforce} The populated <code>ItemSalesforce</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemSalesforce();

        if (data.hasOwnProperty('sfdc_pricebook_id')) {
          obj['sfdc_pricebook_id'] = _ApiClient["default"].convertToType(data['sfdc_pricebook_id'], 'String');
        }

        if (data.hasOwnProperty('sfdc_product_id')) {
          obj['sfdc_product_id'] = _ApiClient["default"].convertToType(data['sfdc_product_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemSalesforce;
}();
/**
 * Salesforce.com pricebook id
 * @member {String} sfdc_pricebook_id
 */


ItemSalesforce.prototype['sfdc_pricebook_id'] = undefined;
/**
 * Salesforce.com product id
 * @member {String} sfdc_product_id
 */

ItemSalesforce.prototype['sfdc_product_id'] = undefined;
var _default = ItemSalesforce;
exports["default"] = _default;