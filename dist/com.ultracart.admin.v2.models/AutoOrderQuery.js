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
 * The AutoOrderQuery model module.
 * @module com.ultracart.admin.v2.models/AutoOrderQuery
 * @version 4.0.140
 */
var AutoOrderQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrderQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderQuery
   */
  function AutoOrderQuery() {
    _classCallCheck(this, AutoOrderQuery);

    AutoOrderQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoOrderQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoOrderQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderQuery} The populated <code>AutoOrderQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrderQuery();

        if (data.hasOwnProperty('auto_order_code')) {
          obj['auto_order_code'] = _ApiClient["default"].convertToType(data['auto_order_code'], 'String');
        }

        if (data.hasOwnProperty('card_type')) {
          obj['card_type'] = _ApiClient["default"].convertToType(data['card_type'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('next_item_id')) {
          obj['next_item_id'] = _ApiClient["default"].convertToType(data['next_item_id'], 'String');
        }

        if (data.hasOwnProperty('next_shipment_date_begin')) {
          obj['next_shipment_date_begin'] = _ApiClient["default"].convertToType(data['next_shipment_date_begin'], 'String');
        }

        if (data.hasOwnProperty('next_shipment_date_end')) {
          obj['next_shipment_date_end'] = _ApiClient["default"].convertToType(data['next_shipment_date_end'], 'String');
        }

        if (data.hasOwnProperty('original_item_id')) {
          obj['original_item_id'] = _ApiClient["default"].convertToType(data['original_item_id'], 'String');
        }

        if (data.hasOwnProperty('original_order_date_begin')) {
          obj['original_order_date_begin'] = _ApiClient["default"].convertToType(data['original_order_date_begin'], 'String');
        }

        if (data.hasOwnProperty('original_order_date_end')) {
          obj['original_order_date_end'] = _ApiClient["default"].convertToType(data['original_order_date_end'], 'String');
        }

        if (data.hasOwnProperty('original_order_id')) {
          obj['original_order_id'] = _ApiClient["default"].convertToType(data['original_order_id'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AutoOrderQuery;
}();
/**
 * Auto order code
 * @member {String} auto_order_code
 */


AutoOrderQuery.prototype['auto_order_code'] = undefined;
/**
 * Card type
 * @member {String} card_type
 */

AutoOrderQuery.prototype['card_type'] = undefined;
/**
 * City
 * @member {String} city
 */

AutoOrderQuery.prototype['city'] = undefined;
/**
 * Company
 * @member {String} company
 */

AutoOrderQuery.prototype['company'] = undefined;
/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */

AutoOrderQuery.prototype['country_code'] = undefined;
/**
 * Customer profile object identifier
 * @member {Number} customer_profile_oid
 */

AutoOrderQuery.prototype['customer_profile_oid'] = undefined;
/**
 * Email
 * @member {String} email
 */

AutoOrderQuery.prototype['email'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

AutoOrderQuery.prototype['first_name'] = undefined;
/**
 * Item ID.  Deprecated query field.  This incorrectly meant the original order contained this item id.
 * @member {String} item_id
 */

AutoOrderQuery.prototype['item_id'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

AutoOrderQuery.prototype['last_name'] = undefined;
/**
 * Next Item ID that is supposed to ship.  This is calculated based upon the schedule associated with the original item id.
 * @member {String} next_item_id
 */

AutoOrderQuery.prototype['next_item_id'] = undefined;
/**
 * Next shipment date begin
 * @member {String} next_shipment_date_begin
 */

AutoOrderQuery.prototype['next_shipment_date_begin'] = undefined;
/**
 * Next shipment date end
 * @member {String} next_shipment_date_end
 */

AutoOrderQuery.prototype['next_shipment_date_end'] = undefined;
/**
 * Original Item ID purchased on auto order.
 * @member {String} original_item_id
 */

AutoOrderQuery.prototype['original_item_id'] = undefined;
/**
 * Original order date begin
 * @member {String} original_order_date_begin
 */

AutoOrderQuery.prototype['original_order_date_begin'] = undefined;
/**
 * Original order date end
 * @member {String} original_order_date_end
 */

AutoOrderQuery.prototype['original_order_date_end'] = undefined;
/**
 * Original order ID
 * @member {String} original_order_id
 */

AutoOrderQuery.prototype['original_order_id'] = undefined;
/**
 * Phone
 * @member {String} phone
 */

AutoOrderQuery.prototype['phone'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

AutoOrderQuery.prototype['postal_code'] = undefined;
/**
 * State
 * @member {String} state
 */

AutoOrderQuery.prototype['state'] = undefined;
/**
 * Status
 * @member {String} status
 */

AutoOrderQuery.prototype['status'] = undefined;
var _default = AutoOrderQuery;
exports["default"] = _default;