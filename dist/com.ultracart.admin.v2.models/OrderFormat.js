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
 * The OrderFormat model module.
 * @module com.ultracart.admin.v2.models/OrderFormat
 * @version 4.0.49-RC
 */
var OrderFormat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderFormat</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderFormat
   */
  function OrderFormat() {
    _classCallCheck(this, OrderFormat);

    OrderFormat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderFormat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderFormat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderFormat} The populated <code>OrderFormat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderFormat();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('dont_link_email_to_search')) {
          obj['dont_link_email_to_search'] = _ApiClient["default"].convertToType(data['dont_link_email_to_search'], 'Boolean');
        }

        if (data.hasOwnProperty('email_as_link')) {
          obj['email_as_link'] = _ApiClient["default"].convertToType(data['email_as_link'], 'Boolean');
        }

        if (data.hasOwnProperty('filter_distribution_center_oid')) {
          obj['filter_distribution_center_oid'] = _ApiClient["default"].convertToType(data['filter_distribution_center_oid'], 'Number');
        }

        if (data.hasOwnProperty('filter_to_items_in_container_oid')) {
          obj['filter_to_items_in_container_oid'] = _ApiClient["default"].convertToType(data['filter_to_items_in_container_oid'], 'Number');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('hide_bill_to_address')) {
          obj['hide_bill_to_address'] = _ApiClient["default"].convertToType(data['hide_bill_to_address'], 'Boolean');
        }

        if (data.hasOwnProperty('hide_price_information')) {
          obj['hide_price_information'] = _ApiClient["default"].convertToType(data['hide_price_information'], 'Boolean');
        }

        if (data.hasOwnProperty('link_file_attachments')) {
          obj['link_file_attachments'] = _ApiClient["default"].convertToType(data['link_file_attachments'], 'Boolean');
        }

        if (data.hasOwnProperty('show_contact_info')) {
          obj['show_contact_info'] = _ApiClient["default"].convertToType(data['show_contact_info'], 'Boolean');
        }

        if (data.hasOwnProperty('show_in_merchant_currency')) {
          obj['show_in_merchant_currency'] = _ApiClient["default"].convertToType(data['show_in_merchant_currency'], 'Boolean');
        }

        if (data.hasOwnProperty('show_internal_information')) {
          obj['show_internal_information'] = _ApiClient["default"].convertToType(data['show_internal_information'], 'Boolean');
        }

        if (data.hasOwnProperty('show_merchant_notes')) {
          obj['show_merchant_notes'] = _ApiClient["default"].convertToType(data['show_merchant_notes'], 'Boolean');
        }

        if (data.hasOwnProperty('show_non_sensitive_payment_info')) {
          obj['show_non_sensitive_payment_info'] = _ApiClient["default"].convertToType(data['show_non_sensitive_payment_info'], 'Boolean');
        }

        if (data.hasOwnProperty('show_payment_info')) {
          obj['show_payment_info'] = _ApiClient["default"].convertToType(data['show_payment_info'], 'Boolean');
        }

        if (data.hasOwnProperty('translate')) {
          obj['translate'] = _ApiClient["default"].convertToType(data['translate'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderFormat;
}();
/**
 * The context to generate the order view for.
 * @member {String} context
 */


OrderFormat.prototype['context'] = undefined;
/**
 * True to not link the email address to the order search
 * @member {Boolean} dont_link_email_to_search
 */

OrderFormat.prototype['dont_link_email_to_search'] = undefined;
/**
 * True to make the email address a clickable mailto link
 * @member {Boolean} email_as_link
 */

OrderFormat.prototype['email_as_link'] = undefined;
/**
 * Specify a distribution center oid to filter the items displayed to that particular distribution center.
 * @member {Number} filter_distribution_center_oid
 */

OrderFormat.prototype['filter_distribution_center_oid'] = undefined;
/**
 * The container oid to filter items to.
 * @member {Number} filter_to_items_in_container_oid
 */

OrderFormat.prototype['filter_to_items_in_container_oid'] = undefined;
/**
 * The desired format.
 * @member {module:com.ultracart.admin.v2.models/OrderFormat.FormatEnum} format
 */

OrderFormat.prototype['format'] = undefined;
/**
 * True to ide the bill to address
 * @member {Boolean} hide_bill_to_address
 */

OrderFormat.prototype['hide_bill_to_address'] = undefined;
/**
 * True to hide price information
 * @member {Boolean} hide_price_information
 */

OrderFormat.prototype['hide_price_information'] = undefined;
/**
 * True to link file attachments for download
 * @member {Boolean} link_file_attachments
 */

OrderFormat.prototype['link_file_attachments'] = undefined;
/**
 * True to show contact information
 * @member {Boolean} show_contact_info
 */

OrderFormat.prototype['show_contact_info'] = undefined;
/**
 * True to show the order in the merchant currency
 * @member {Boolean} show_in_merchant_currency
 */

OrderFormat.prototype['show_in_merchant_currency'] = undefined;
/**
 * True to show internal information about the order
 * @member {Boolean} show_internal_information
 */

OrderFormat.prototype['show_internal_information'] = undefined;
/**
 * True to show merchant notes
 * @member {Boolean} show_merchant_notes
 */

OrderFormat.prototype['show_merchant_notes'] = undefined;
/**
 * True to show non-sensitive payment information
 * @member {Boolean} show_non_sensitive_payment_info
 */

OrderFormat.prototype['show_non_sensitive_payment_info'] = undefined;
/**
 * True to show payment information
 * @member {Boolean} show_payment_info
 */

OrderFormat.prototype['show_payment_info'] = undefined;
/**
 * True to translate the order into the native language of the customer
 * @member {Boolean} translate
 */

OrderFormat.prototype['translate'] = undefined;
/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */

OrderFormat['FormatEnum'] = {
  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "div"
   * @const
   */
  "div": "div",

  /**
   * value: "table"
   * @const
   */
  "table": "table",

  /**
   * value: "email"
   * @const
   */
  "email": "email"
};
var _default = OrderFormat;
exports["default"] = _default;