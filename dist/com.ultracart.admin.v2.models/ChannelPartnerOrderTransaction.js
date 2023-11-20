"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPartnerOrderTransactionDetail = _interopRequireDefault(require("./ChannelPartnerOrderTransactionDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPartnerOrderTransaction model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction
 * @version 4.0.189
 */
var ChannelPartnerOrderTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerOrderTransaction</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction
   */
  function ChannelPartnerOrderTransaction() {
    _classCallCheck(this, ChannelPartnerOrderTransaction);

    ChannelPartnerOrderTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerOrderTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerOrderTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} The populated <code>ChannelPartnerOrderTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerOrderTransaction();

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_ChannelPartnerOrderTransactionDetail["default"]]);
        }

        if (data.hasOwnProperty('successful')) {
          obj['successful'] = _ApiClient["default"].convertToType(data['successful'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPartnerOrderTransaction;
}();
/**
 * Transaction gateway details
 * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail>} details
 */


ChannelPartnerOrderTransaction.prototype['details'] = undefined;
/**
 * True if the transaction was successfully charged
 * @member {Boolean} successful
 */

ChannelPartnerOrderTransaction.prototype['successful'] = undefined;
var _default = ChannelPartnerOrderTransaction;
exports["default"] = _default;