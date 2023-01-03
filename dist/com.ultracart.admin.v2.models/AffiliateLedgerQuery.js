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
 * The AffiliateLedgerQuery model module.
 * @module com.ultracart.admin.v2.models/AffiliateLedgerQuery
 * @version 4.0.104-RC
 */
var AffiliateLedgerQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateLedgerQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateLedgerQuery
   */
  function AffiliateLedgerQuery() {
    _classCallCheck(this, AffiliateLedgerQuery);

    AffiliateLedgerQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AffiliateLedgerQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AffiliateLedgerQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateLedgerQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateLedgerQuery} The populated <code>AffiliateLedgerQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateLedgerQuery();

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('sub_id')) {
          obj['sub_id'] = _ApiClient["default"].convertToType(data['sub_id'], 'String');
        }

        if (data.hasOwnProperty('transaction_dts_begin')) {
          obj['transaction_dts_begin'] = _ApiClient["default"].convertToType(data['transaction_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('transaction_dts_end')) {
          obj['transaction_dts_end'] = _ApiClient["default"].convertToType(data['transaction_dts_end'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AffiliateLedgerQuery;
}();
/**
 * Affiliate ID associated with the ledger
 * @member {Number} affiliate_oid
 */


AffiliateLedgerQuery.prototype['affiliate_oid'] = undefined;
/**
 * Item id associated with the ledger entry
 * @member {String} item_id
 */

AffiliateLedgerQuery.prototype['item_id'] = undefined;
/**
 * Order ID associated with the ledger entries
 * @member {String} order_id
 */

AffiliateLedgerQuery.prototype['order_id'] = undefined;
/**
 * Sub ID value passed on the click that generated the ledger
 * @member {String} sub_id
 */

AffiliateLedgerQuery.prototype['sub_id'] = undefined;
/**
 * Minimum transaction date/time to return
 * @member {String} transaction_dts_begin
 */

AffiliateLedgerQuery.prototype['transaction_dts_begin'] = undefined;
/**
 * Maximum transaction date/time to return
 * @member {String} transaction_dts_end
 */

AffiliateLedgerQuery.prototype['transaction_dts_end'] = undefined;
var _default = AffiliateLedgerQuery;
exports["default"] = _default;