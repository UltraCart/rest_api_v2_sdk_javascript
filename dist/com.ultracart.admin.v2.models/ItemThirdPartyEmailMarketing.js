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
 * The ItemThirdPartyEmailMarketing model module.
 * @module com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing
 * @version 4.0.49-RC
 */
var ItemThirdPartyEmailMarketing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemThirdPartyEmailMarketing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing
   */
  function ItemThirdPartyEmailMarketing() {
    _classCallCheck(this, ItemThirdPartyEmailMarketing);

    ItemThirdPartyEmailMarketing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemThirdPartyEmailMarketing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemThirdPartyEmailMarketing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing} The populated <code>ItemThirdPartyEmailMarketing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemThirdPartyEmailMarketing();

        if (data.hasOwnProperty('add_tags')) {
          obj['add_tags'] = _ApiClient["default"].convertToType(data['add_tags'], ['String']);
        }

        if (data.hasOwnProperty('provider_name')) {
          obj['provider_name'] = _ApiClient["default"].convertToType(data['provider_name'], 'String');
        }

        if (data.hasOwnProperty('remove_tags')) {
          obj['remove_tags'] = _ApiClient["default"].convertToType(data['remove_tags'], ['String']);
        }

        if (data.hasOwnProperty('subscribe_lists')) {
          obj['subscribe_lists'] = _ApiClient["default"].convertToType(data['subscribe_lists'], ['String']);
        }

        if (data.hasOwnProperty('unsubscribe_lists')) {
          obj['unsubscribe_lists'] = _ApiClient["default"].convertToType(data['unsubscribe_lists'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ItemThirdPartyEmailMarketing;
}();
/**
 * Add tags
 * @member {Array.<String>} add_tags
 */


ItemThirdPartyEmailMarketing.prototype['add_tags'] = undefined;
/**
 * Provider name
 * @member {module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing.ProviderNameEnum} provider_name
 */

ItemThirdPartyEmailMarketing.prototype['provider_name'] = undefined;
/**
 * Remove tags
 * @member {Array.<String>} remove_tags
 */

ItemThirdPartyEmailMarketing.prototype['remove_tags'] = undefined;
/**
 * Subscribe to lists
 * @member {Array.<String>} subscribe_lists
 */

ItemThirdPartyEmailMarketing.prototype['subscribe_lists'] = undefined;
/**
 * Unsubscribe from lists
 * @member {Array.<String>} unsubscribe_lists
 */

ItemThirdPartyEmailMarketing.prototype['unsubscribe_lists'] = undefined;
/**
 * Allowed values for the <code>provider_name</code> property.
 * @enum {String}
 * @readonly
 */

ItemThirdPartyEmailMarketing['ProviderNameEnum'] = {
  /**
   * value: "ActiveCampaign"
   * @const
   */
  "ActiveCampaign": "ActiveCampaign",

  /**
   * value: "AWeber"
   * @const
   */
  "AWeber": "AWeber",

  /**
   * value: "Campaign Monitor"
   * @const
   */
  "Campaign Monitor": "Campaign Monitor",

  /**
   * value: "ConstantContact"
   * @const
   */
  "ConstantContact": "ConstantContact",

  /**
   * value: "Emma"
   * @const
   */
  "Emma": "Emma",

  /**
   * value: "GetResponse"
   * @const
   */
  "GetResponse": "GetResponse",

  /**
   * value: "iContact"
   * @const
   */
  "iContact": "iContact",

  /**
   * value: "Klaviyo"
   * @const
   */
  "Klaviyo": "Klaviyo",

  /**
   * value: "Lyris"
   * @const
   */
  "Lyris": "Lyris",

  /**
   * value: "LyrisHQ"
   * @const
   */
  "LyrisHQ": "LyrisHQ",

  /**
   * value: "MailChimp"
   * @const
   */
  "MailChimp": "MailChimp",

  /**
   * value: "SilverPop"
   * @const
   */
  "SilverPop": "SilverPop"
};
var _default = ItemThirdPartyEmailMarketing;
exports["default"] = _default;