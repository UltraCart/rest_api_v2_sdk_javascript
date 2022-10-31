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
 * The OrderMarketing model module.
 * @module com.ultracart.admin.v2.models/OrderMarketing
 * @version 4.0.75-RC
 */
var OrderMarketing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderMarketing</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderMarketing
   */
  function OrderMarketing() {
    _classCallCheck(this, OrderMarketing);

    OrderMarketing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderMarketing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderMarketing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderMarketing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderMarketing} The populated <code>OrderMarketing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderMarketing();

        if (data.hasOwnProperty('advertising_source')) {
          obj['advertising_source'] = _ApiClient["default"].convertToType(data['advertising_source'], 'String');
        }

        if (data.hasOwnProperty('cell_phone_opt_in')) {
          obj['cell_phone_opt_in'] = _ApiClient["default"].convertToType(data['cell_phone_opt_in'], 'Boolean');
        }

        if (data.hasOwnProperty('mailing_list')) {
          obj['mailing_list'] = _ApiClient["default"].convertToType(data['mailing_list'], 'Boolean');
        }

        if (data.hasOwnProperty('referral_code')) {
          obj['referral_code'] = _ApiClient["default"].convertToType(data['referral_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderMarketing;
}();
/**
 * Advertising source
 * @member {String} advertising_source
 */


OrderMarketing.prototype['advertising_source'] = undefined;
/**
 * True if the customer has opted into SMS marketing
 * @member {Boolean} cell_phone_opt_in
 */

OrderMarketing.prototype['cell_phone_opt_in'] = undefined;
/**
 * True if the customer has opted into mailing list subscription
 * @member {Boolean} mailing_list
 */

OrderMarketing.prototype['mailing_list'] = undefined;
/**
 * Referral code
 * @member {String} referral_code
 */

OrderMarketing.prototype['referral_code'] = undefined;
var _default = OrderMarketing;
exports["default"] = _default;