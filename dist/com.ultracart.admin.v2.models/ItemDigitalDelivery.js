"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemDigitalItem = _interopRequireDefault(require("./ItemDigitalItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemDigitalDelivery model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalDelivery
 * @version 4.0.106-RC
 */
var ItemDigitalDelivery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemDigitalDelivery</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemDigitalDelivery
   */
  function ItemDigitalDelivery() {
    _classCallCheck(this, ItemDigitalDelivery);

    ItemDigitalDelivery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemDigitalDelivery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemDigitalDelivery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} The populated <code>ItemDigitalDelivery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemDigitalDelivery();

        if (data.hasOwnProperty('activation_code_description')) {
          obj['activation_code_description'] = _ApiClient["default"].convertToType(data['activation_code_description'], 'String');
        }

        if (data.hasOwnProperty('activation_code_low_warning')) {
          obj['activation_code_low_warning'] = _ApiClient["default"].convertToType(data['activation_code_low_warning'], 'Number');
        }

        if (data.hasOwnProperty('activation_code_realtime_url')) {
          obj['activation_code_realtime_url'] = _ApiClient["default"].convertToType(data['activation_code_realtime_url'], 'String');
        }

        if (data.hasOwnProperty('activation_code_shared_secret')) {
          obj['activation_code_shared_secret'] = _ApiClient["default"].convertToType(data['activation_code_shared_secret'], 'String');
        }

        if (data.hasOwnProperty('activation_code_type')) {
          obj['activation_code_type'] = _ApiClient["default"].convertToType(data['activation_code_type'], 'String');
        }

        if (data.hasOwnProperty('digital_items')) {
          obj['digital_items'] = _ApiClient["default"].convertToType(data['digital_items'], [_ItemDigitalItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ItemDigitalDelivery;
}();
/**
 * Description of the activation code
 * @member {String} activation_code_description
 */


ItemDigitalDelivery.prototype['activation_code_description'] = undefined;
/**
 * The number of activation codes whcih should generate a warning email
 * @member {Number} activation_code_low_warning
 */

ItemDigitalDelivery.prototype['activation_code_low_warning'] = undefined;
/**
 * The URL to retrieve activation codes from in real-time
 * @member {String} activation_code_realtime_url
 */

ItemDigitalDelivery.prototype['activation_code_realtime_url'] = undefined;
/**
 * Shared secret used when communicating with the real-time URL
 * @member {String} activation_code_shared_secret
 */

ItemDigitalDelivery.prototype['activation_code_shared_secret'] = undefined;
/**
 * Type of activation code
 * @member {String} activation_code_type
 */

ItemDigitalDelivery.prototype['activation_code_type'] = undefined;
/**
 * Digital items that customer can download when this item is purchased
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemDigitalItem>} digital_items
 */

ItemDigitalDelivery.prototype['digital_items'] = undefined;
var _default = ItemDigitalDelivery;
exports["default"] = _default;