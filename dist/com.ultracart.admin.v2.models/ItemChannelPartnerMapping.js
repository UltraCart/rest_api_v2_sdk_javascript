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
 * The ItemChannelPartnerMapping model module.
 * @module com.ultracart.admin.v2.models/ItemChannelPartnerMapping
 * @version 4.0.58-RC
 */
var ItemChannelPartnerMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemChannelPartnerMapping</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping
   */
  function ItemChannelPartnerMapping() {
    _classCallCheck(this, ItemChannelPartnerMapping);

    ItemChannelPartnerMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemChannelPartnerMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemChannelPartnerMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping} The populated <code>ItemChannelPartnerMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemChannelPartnerMapping();

        if (data.hasOwnProperty('barcode_ua')) {
          obj['barcode_ua'] = _ApiClient["default"].convertToType(data['barcode_ua'], 'String');
        }

        if (data.hasOwnProperty('barcode_uc')) {
          obj['barcode_uc'] = _ApiClient["default"].convertToType(data['barcode_uc'], 'String');
        }

        if (data.hasOwnProperty('barcode_ui')) {
          obj['barcode_ui'] = _ApiClient["default"].convertToType(data['barcode_ui'], 'String');
        }

        if (data.hasOwnProperty('barcode_uk')) {
          obj['barcode_uk'] = _ApiClient["default"].convertToType(data['barcode_uk'], 'String');
        }

        if (data.hasOwnProperty('buyer_catalog_number')) {
          obj['buyer_catalog_number'] = _ApiClient["default"].convertToType(data['buyer_catalog_number'], 'String');
        }

        if (data.hasOwnProperty('buyer_dpci')) {
          obj['buyer_dpci'] = _ApiClient["default"].convertToType(data['buyer_dpci'], 'String');
        }

        if (data.hasOwnProperty('buyer_item_number')) {
          obj['buyer_item_number'] = _ApiClient["default"].convertToType(data['buyer_item_number'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_code')) {
          obj['channel_partner_code'] = _ApiClient["default"].convertToType(data['channel_partner_code'], 'String');
        }

        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }

        if (data.hasOwnProperty('from_item_id')) {
          obj['from_item_id'] = _ApiClient["default"].convertToType(data['from_item_id'], 'String');
        }

        if (data.hasOwnProperty('from_sku')) {
          obj['from_sku'] = _ApiClient["default"].convertToType(data['from_sku'], 'String');
        }

        if (data.hasOwnProperty('mutually_defined_number')) {
          obj['mutually_defined_number'] = _ApiClient["default"].convertToType(data['mutually_defined_number'], 'String');
        }

        if (data.hasOwnProperty('quantity_ratio_cp')) {
          obj['quantity_ratio_cp'] = _ApiClient["default"].convertToType(data['quantity_ratio_cp'], 'Number');
        }

        if (data.hasOwnProperty('quantity_ratio_uc')) {
          obj['quantity_ratio_uc'] = _ApiClient["default"].convertToType(data['quantity_ratio_uc'], 'Number');
        }

        if (data.hasOwnProperty('sku')) {
          obj['sku'] = _ApiClient["default"].convertToType(data['sku'], 'String');
        }

        if (data.hasOwnProperty('unit_of_measure')) {
          obj['unit_of_measure'] = _ApiClient["default"].convertToType(data['unit_of_measure'], 'String');
        }

        if (data.hasOwnProperty('vendor_number')) {
          obj['vendor_number'] = _ApiClient["default"].convertToType(data['vendor_number'], 'String');
        }

        if (data.hasOwnProperty('vendor_style_number')) {
          obj['vendor_style_number'] = _ApiClient["default"].convertToType(data['vendor_style_number'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemChannelPartnerMapping;
}();
/**
 * Barcode UA (EDI only)
 * @member {String} barcode_ua
 */


ItemChannelPartnerMapping.prototype['barcode_ua'] = undefined;
/**
 * Barcode UC (EDI only)
 * @member {String} barcode_uc
 */

ItemChannelPartnerMapping.prototype['barcode_uc'] = undefined;
/**
 * Barcode UI (EDI only)
 * @member {String} barcode_ui
 */

ItemChannelPartnerMapping.prototype['barcode_ui'] = undefined;
/**
 * Barcode UK (EDI only)
 * @member {String} barcode_uk
 */

ItemChannelPartnerMapping.prototype['barcode_uk'] = undefined;
/**
 * Buyer catalog number (EDI only)
 * @member {String} buyer_catalog_number
 */

ItemChannelPartnerMapping.prototype['buyer_catalog_number'] = undefined;
/**
 * Buyer DPCI (EDI only)
 * @member {String} buyer_dpci
 */

ItemChannelPartnerMapping.prototype['buyer_dpci'] = undefined;
/**
 * Buyer item number (EDI only)
 * @member {String} buyer_item_number
 */

ItemChannelPartnerMapping.prototype['buyer_item_number'] = undefined;
/**
 * Channel partner code
 * @member {String} channel_partner_code
 */

ItemChannelPartnerMapping.prototype['channel_partner_code'] = undefined;
/**
 * Channel partner object identifier
 * @member {Number} channel_partner_oid
 */

ItemChannelPartnerMapping.prototype['channel_partner_oid'] = undefined;
/**
 * Cost given to this channel partner
 * @member {Number} cost
 */

ItemChannelPartnerMapping.prototype['cost'] = undefined;
/**
 * From Item ID
 * @member {String} from_item_id
 */

ItemChannelPartnerMapping.prototype['from_item_id'] = undefined;
/**
 * From SKU
 * @member {String} from_sku
 */

ItemChannelPartnerMapping.prototype['from_sku'] = undefined;
/**
 * Mutually defined number (EDI only)
 * @member {String} mutually_defined_number
 */

ItemChannelPartnerMapping.prototype['mutually_defined_number'] = undefined;
/**
 * Ratio (Channel Partner)
 * @member {Number} quantity_ratio_cp
 */

ItemChannelPartnerMapping.prototype['quantity_ratio_cp'] = undefined;
/**
 * Ratio (UltraCart)
 * @member {Number} quantity_ratio_uc
 */

ItemChannelPartnerMapping.prototype['quantity_ratio_uc'] = undefined;
/**
 * SKU
 * @member {String} sku
 */

ItemChannelPartnerMapping.prototype['sku'] = undefined;
/**
 * Unit of measure
 * @member {String} unit_of_measure
 */

ItemChannelPartnerMapping.prototype['unit_of_measure'] = undefined;
/**
 * Vendor number (EDI only)
 * @member {String} vendor_number
 */

ItemChannelPartnerMapping.prototype['vendor_number'] = undefined;
/**
 * Vendor style number (EDI only)
 * @member {String} vendor_style_number
 */

ItemChannelPartnerMapping.prototype['vendor_style_number'] = undefined;
var _default = ItemChannelPartnerMapping;
exports["default"] = _default;