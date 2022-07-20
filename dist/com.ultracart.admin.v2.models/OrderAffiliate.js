"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderAffiliateLedger = _interopRequireDefault(require("./OrderAffiliateLedger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderAffiliate model module.
 * @module com.ultracart.admin.v2.models/OrderAffiliate
 * @version 4.0.36-RC
 */
var OrderAffiliate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderAffiliate
   */
  function OrderAffiliate() {
    _classCallCheck(this, OrderAffiliate);

    OrderAffiliate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderAffiliate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderAffiliate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderAffiliate} The populated <code>OrderAffiliate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderAffiliate();

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('ledger_entries')) {
          obj['ledger_entries'] = _ApiClient["default"].convertToType(data['ledger_entries'], [_OrderAffiliateLedger["default"]]);
        }

        if (data.hasOwnProperty('sub_id')) {
          obj['sub_id'] = _ApiClient["default"].convertToType(data['sub_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderAffiliate;
}();
/**
 * Affiliate ID
 * @member {Number} affiliate_oid
 */


OrderAffiliate.prototype['affiliate_oid'] = undefined;
/**
 * Ledger entries associated with all the commissions earned on this order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderAffiliateLedger>} ledger_entries
 */

OrderAffiliate.prototype['ledger_entries'] = undefined;
/**
 * Sub identifier provided by the affiliate on the click that generated this order
 * @member {String} sub_id
 */

OrderAffiliate.prototype['sub_id'] = undefined;
var _default = OrderAffiliate;
exports["default"] = _default;