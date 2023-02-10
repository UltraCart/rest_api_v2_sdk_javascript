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
 * The OrderDigitalItem model module.
 * @module com.ultracart.admin.v2.models/OrderDigitalItem
 * @version 4.0.132
 */
var OrderDigitalItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDigitalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderDigitalItem
   */
  function OrderDigitalItem() {
    _classCallCheck(this, OrderDigitalItem);

    OrderDigitalItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderDigitalItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderDigitalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderDigitalItem} The populated <code>OrderDigitalItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDigitalItem();

        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }

        if (data.hasOwnProperty('last_download')) {
          obj['last_download'] = _ApiClient["default"].convertToType(data['last_download'], 'String');
        }

        if (data.hasOwnProperty('last_download_ip_address')) {
          obj['last_download_ip_address'] = _ApiClient["default"].convertToType(data['last_download_ip_address'], 'String');
        }

        if (data.hasOwnProperty('original_filename')) {
          obj['original_filename'] = _ApiClient["default"].convertToType(data['original_filename'], 'String');
        }

        if (data.hasOwnProperty('product_code')) {
          obj['product_code'] = _ApiClient["default"].convertToType(data['product_code'], 'String');
        }

        if (data.hasOwnProperty('product_description')) {
          obj['product_description'] = _ApiClient["default"].convertToType(data['product_description'], 'String');
        }

        if (data.hasOwnProperty('remaining_downloads')) {
          obj['remaining_downloads'] = _ApiClient["default"].convertToType(data['remaining_downloads'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderDigitalItem;
}();
/**
 * File size
 * @member {Number} file_size
 */


OrderDigitalItem.prototype['file_size'] = undefined;
/**
 * Last download
 * @member {String} last_download
 */

OrderDigitalItem.prototype['last_download'] = undefined;
/**
 * IP address that performed the last download
 * @member {String} last_download_ip_address
 */

OrderDigitalItem.prototype['last_download_ip_address'] = undefined;
/**
 * Original file name
 * @member {String} original_filename
 */

OrderDigitalItem.prototype['original_filename'] = undefined;
/**
 * Item id associated with this item
 * @member {String} product_code
 */

OrderDigitalItem.prototype['product_code'] = undefined;
/**
 * Item description associated with this item
 * @member {String} product_description
 */

OrderDigitalItem.prototype['product_description'] = undefined;
/**
 * Remaining number of downloads
 * @member {Number} remaining_downloads
 */

OrderDigitalItem.prototype['remaining_downloads'] = undefined;
/**
 * URL that the customer can click to download the specific digital item
 * @member {String} url
 */

OrderDigitalItem.prototype['url'] = undefined;
var _default = OrderDigitalItem;
exports["default"] = _default;