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
 * The OrderTransactionalMerchantNote model module.
 * @module com.ultracart.admin.v2.models/OrderTransactionalMerchantNote
 * @version 4.0.148
 */
var OrderTransactionalMerchantNote = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderTransactionalMerchantNote</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote
   */
  function OrderTransactionalMerchantNote() {
    _classCallCheck(this, OrderTransactionalMerchantNote);

    OrderTransactionalMerchantNote.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderTransactionalMerchantNote, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderTransactionalMerchantNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote} The populated <code>OrderTransactionalMerchantNote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderTransactionalMerchantNote();

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('note_dts')) {
          obj['note_dts'] = _ApiClient["default"].convertToType(data['note_dts'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderTransactionalMerchantNote;
}();
/**
 * IP Address
 * @member {String} ip_address
 */


OrderTransactionalMerchantNote.prototype['ip_address'] = undefined;
/**
 * note
 * @member {String} note
 */

OrderTransactionalMerchantNote.prototype['note'] = undefined;
/**
 * Timestamp when the note was added
 * @member {String} note_dts
 */

OrderTransactionalMerchantNote.prototype['note_dts'] = undefined;
/**
 * User that wrote the merchant note
 * @member {String} user
 */

OrderTransactionalMerchantNote.prototype['user'] = undefined;
var _default = OrderTransactionalMerchantNote;
exports["default"] = _default;