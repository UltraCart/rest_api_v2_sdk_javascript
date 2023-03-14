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
 * The ChannelPartnerShipToPreference model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerShipToPreference
 * @version 4.0.138
 */
var ChannelPartnerShipToPreference = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerShipToPreference</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference
   */
  function ChannelPartnerShipToPreference() {
    _classCallCheck(this, ChannelPartnerShipToPreference);

    ChannelPartnerShipToPreference.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerShipToPreference, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerShipToPreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} The populated <code>ChannelPartnerShipToPreference</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerShipToPreference();

        if (data.hasOwnProperty('additional_kit_component_item_ids')) {
          obj['additional_kit_component_item_ids'] = _ApiClient["default"].convertToType(data['additional_kit_component_item_ids'], ['String']);
        }

        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }

        if (data.hasOwnProperty('channel_partner_ship_to_preference_oid')) {
          obj['channel_partner_ship_to_preference_oid'] = _ApiClient["default"].convertToType(data['channel_partner_ship_to_preference_oid'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('return_policy')) {
          obj['return_policy'] = _ApiClient["default"].convertToType(data['return_policy'], 'String');
        }

        if (data.hasOwnProperty('ship_to_edi_code')) {
          obj['ship_to_edi_code'] = _ApiClient["default"].convertToType(data['ship_to_edi_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPartnerShipToPreference;
}();
/**
 * Additional item ids to add as kit components to the order with a zero price.
 * @member {Array.<String>} additional_kit_component_item_ids
 */


ChannelPartnerShipToPreference.prototype['additional_kit_component_item_ids'] = undefined;
/**
 * The channel partner object identifier this preference is associated with
 * @member {Number} channel_partner_oid
 */

ChannelPartnerShipToPreference.prototype['channel_partner_oid'] = undefined;
/**
 * Object identifier for the ship to preference
 * @member {Number} channel_partner_ship_to_preference_oid
 */

ChannelPartnerShipToPreference.prototype['channel_partner_ship_to_preference_oid'] = undefined;
/**
 * A description that is meaningful to the merchant.
 * @member {String} description
 */

ChannelPartnerShipToPreference.prototype['description'] = undefined;
/**
 * The merchant id that owns the channel partner
 * @member {String} merchant_id
 */

ChannelPartnerShipToPreference.prototype['merchant_id'] = undefined;
/**
 * Alternate return policy to print on the packing slip.
 * @member {String} return_policy
 */

ChannelPartnerShipToPreference.prototype['return_policy'] = undefined;
/**
 * The ship to EDI code that the preferences are for
 * @member {String} ship_to_edi_code
 */

ChannelPartnerShipToPreference.prototype['ship_to_edi_code'] = undefined;
var _default = ChannelPartnerShipToPreference;
exports["default"] = _default;