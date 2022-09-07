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
 * The CustomerLoyaltyLedger model module.
 * @module com.ultracart.admin.v2.models/CustomerLoyaltyLedger
 * @version 4.0.60-RC
 */
var CustomerLoyaltyLedger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerLoyaltyLedger</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger
   */
  function CustomerLoyaltyLedger() {
    _classCallCheck(this, CustomerLoyaltyLedger);

    CustomerLoyaltyLedger.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerLoyaltyLedger, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerLoyaltyLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger} The populated <code>CustomerLoyaltyLedger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerLoyaltyLedger();

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _ApiClient["default"].convertToType(data['created_by'], 'String');
        }

        if (data.hasOwnProperty('created_dts')) {
          obj['created_dts'] = _ApiClient["default"].convertToType(data['created_dts'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('item_index')) {
          obj['item_index'] = _ApiClient["default"].convertToType(data['item_index'], 'Number');
        }

        if (data.hasOwnProperty('ledger_dts')) {
          obj['ledger_dts'] = _ApiClient["default"].convertToType(data['ledger_dts'], 'String');
        }

        if (data.hasOwnProperty('loyalty_campaign_oid')) {
          obj['loyalty_campaign_oid'] = _ApiClient["default"].convertToType(data['loyalty_campaign_oid'], 'Number');
        }

        if (data.hasOwnProperty('loyalty_ledger_oid')) {
          obj['loyalty_ledger_oid'] = _ApiClient["default"].convertToType(data['loyalty_ledger_oid'], 'Number');
        }

        if (data.hasOwnProperty('loyalty_points')) {
          obj['loyalty_points'] = _ApiClient["default"].convertToType(data['loyalty_points'], 'Number');
        }

        if (data.hasOwnProperty('modified_by')) {
          obj['modified_by'] = _ApiClient["default"].convertToType(data['modified_by'], 'String');
        }

        if (data.hasOwnProperty('modified_dts')) {
          obj['modified_dts'] = _ApiClient["default"].convertToType(data['modified_dts'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('vesting_dts')) {
          obj['vesting_dts'] = _ApiClient["default"].convertToType(data['vesting_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerLoyaltyLedger;
}();
/**
 * Created By
 * @member {String} created_by
 */


CustomerLoyaltyLedger.prototype['created_by'] = undefined;
/**
 * Created date
 * @member {String} created_dts
 */

CustomerLoyaltyLedger.prototype['created_dts'] = undefined;
/**
 * Description
 * @member {String} description
 */

CustomerLoyaltyLedger.prototype['description'] = undefined;
/**
 * Email
 * @member {String} email
 */

CustomerLoyaltyLedger.prototype['email'] = undefined;
/**
 * Item Id
 * @member {String} item_id
 */

CustomerLoyaltyLedger.prototype['item_id'] = undefined;
/**
 * Item Index
 * @member {Number} item_index
 */

CustomerLoyaltyLedger.prototype['item_index'] = undefined;
/**
 * Ledger date
 * @member {String} ledger_dts
 */

CustomerLoyaltyLedger.prototype['ledger_dts'] = undefined;
/**
 * Loyalty campaign oid
 * @member {Number} loyalty_campaign_oid
 */

CustomerLoyaltyLedger.prototype['loyalty_campaign_oid'] = undefined;
/**
 * Loyalty ledger oid
 * @member {Number} loyalty_ledger_oid
 */

CustomerLoyaltyLedger.prototype['loyalty_ledger_oid'] = undefined;
/**
 * Loyalty points
 * @member {Number} loyalty_points
 */

CustomerLoyaltyLedger.prototype['loyalty_points'] = undefined;
/**
 * Modified By
 * @member {String} modified_by
 */

CustomerLoyaltyLedger.prototype['modified_by'] = undefined;
/**
 * Modified date
 * @member {String} modified_dts
 */

CustomerLoyaltyLedger.prototype['modified_dts'] = undefined;
/**
 * Order Id
 * @member {String} order_id
 */

CustomerLoyaltyLedger.prototype['order_id'] = undefined;
/**
 * Quantity
 * @member {Number} quantity
 */

CustomerLoyaltyLedger.prototype['quantity'] = undefined;
/**
 * Vesting date
 * @member {String} vesting_dts
 */

CustomerLoyaltyLedger.prototype['vesting_dts'] = undefined;
var _default = CustomerLoyaltyLedger;
exports["default"] = _default;