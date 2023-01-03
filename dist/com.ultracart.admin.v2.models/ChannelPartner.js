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
 * The ChannelPartner model module.
 * @module com.ultracart.admin.v2.models/ChannelPartner
 * @version 4.0.104-RC
 */
var ChannelPartner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartner</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartner
   */
  function ChannelPartner() {
    _classCallCheck(this, ChannelPartner);

    ChannelPartner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartner} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartner} The populated <code>ChannelPartner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartner();

        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('communication_method')) {
          obj['communication_method'] = _ApiClient["default"].convertToType(data['communication_method'], 'String');
        }

        if (data.hasOwnProperty('inactive')) {
          obj['inactive'] = _ApiClient["default"].convertToType(data['inactive'], 'Boolean');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('skip_customer_emails')) {
          obj['skip_customer_emails'] = _ApiClient["default"].convertToType(data['skip_customer_emails'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPartner;
}();
/**
 * Channel partner object id
 * @member {Number} channel_partner_oid
 */


ChannelPartner.prototype['channel_partner_oid'] = undefined;
/**
 * Code associated with the channel partner
 * @member {String} code
 */

ChannelPartner.prototype['code'] = undefined;
/**
 * Communication method of the channel partner
 * @member {String} communication_method
 */

ChannelPartner.prototype['communication_method'] = undefined;
/**
 * True if the channel partner is inactive
 * @member {Boolean} inactive
 */

ChannelPartner.prototype['inactive'] = undefined;
/**
 * Merchant ID of the channel partner
 * @member {String} merchant_id
 */

ChannelPartner.prototype['merchant_id'] = undefined;
/**
 * Name of the channel partner
 * @member {String} name
 */

ChannelPartner.prototype['name'] = undefined;
/**
 * True if emails to the customer are skipped for this channel partner.
 * @member {Boolean} skip_customer_emails
 */

ChannelPartner.prototype['skip_customer_emails'] = undefined;
var _default = ChannelPartner;
exports["default"] = _default;