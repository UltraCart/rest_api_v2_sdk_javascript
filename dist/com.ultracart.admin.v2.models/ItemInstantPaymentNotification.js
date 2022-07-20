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
 * The ItemInstantPaymentNotification model module.
 * @module com.ultracart.admin.v2.models/ItemInstantPaymentNotification
 * @version 4.0.36-RC
 */
var ItemInstantPaymentNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemInstantPaymentNotification</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification
   */
  function ItemInstantPaymentNotification() {
    _classCallCheck(this, ItemInstantPaymentNotification);

    ItemInstantPaymentNotification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemInstantPaymentNotification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemInstantPaymentNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} The populated <code>ItemInstantPaymentNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemInstantPaymentNotification();

        if (data.hasOwnProperty('post_operation')) {
          obj['post_operation'] = _ApiClient["default"].convertToType(data['post_operation'], 'Boolean');
        }

        if (data.hasOwnProperty('successful_response_text')) {
          obj['successful_response_text'] = _ApiClient["default"].convertToType(data['successful_response_text'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemInstantPaymentNotification;
}();
/**
 * True for HTTP POST instead of GET
 * @member {Boolean} post_operation
 */


ItemInstantPaymentNotification.prototype['post_operation'] = undefined;
/**
 * Successful response text
 * @member {String} successful_response_text
 */

ItemInstantPaymentNotification.prototype['successful_response_text'] = undefined;
/**
 * URL
 * @member {String} url
 */

ItemInstantPaymentNotification.prototype['url'] = undefined;
var _default = ItemInstantPaymentNotification;
exports["default"] = _default;