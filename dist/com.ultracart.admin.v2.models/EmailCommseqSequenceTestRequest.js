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
 * The EmailCommseqSequenceTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest
 * @version 4.0.55-RC
 */
var EmailCommseqSequenceTestRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqSequenceTestRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest
   */
  function EmailCommseqSequenceTestRequest() {
    _classCallCheck(this, EmailCommseqSequenceTestRequest);

    EmailCommseqSequenceTestRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqSequenceTestRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqSequenceTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest} The populated <code>EmailCommseqSequenceTestRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqSequenceTestRequest();

        if (data.hasOwnProperty('cart_id')) {
          obj['cart_id'] = _ApiClient["default"].convertToType(data['cart_id'], 'String');
        }

        if (data.hasOwnProperty('cart_item_ids')) {
          obj['cart_item_ids'] = _ApiClient["default"].convertToType(data['cart_item_ids'], ['String']);
        }

        if (data.hasOwnProperty('esp_commseq_uuid')) {
          obj['esp_commseq_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('please_review')) {
          obj['please_review'] = _ApiClient["default"].convertToType(data['please_review'], 'Boolean');
        }

        if (data.hasOwnProperty('send_to_email')) {
          obj['send_to_email'] = _ApiClient["default"].convertToType(data['send_to_email'], 'String');
        }

        if (data.hasOwnProperty('send_to_logged_in_user')) {
          obj['send_to_logged_in_user'] = _ApiClient["default"].convertToType(data['send_to_logged_in_user'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqSequenceTestRequest;
}();
/**
 * @member {String} cart_id
 */


EmailCommseqSequenceTestRequest.prototype['cart_id'] = undefined;
/**
 * @member {Array.<String>} cart_item_ids
 */

EmailCommseqSequenceTestRequest.prototype['cart_item_ids'] = undefined;
/**
 * @member {String} esp_commseq_uuid
 */

EmailCommseqSequenceTestRequest.prototype['esp_commseq_uuid'] = undefined;
/**
 * @member {String} name
 */

EmailCommseqSequenceTestRequest.prototype['name'] = undefined;
/**
 * @member {String} order_id
 */

EmailCommseqSequenceTestRequest.prototype['order_id'] = undefined;
/**
 * @member {Boolean} please_review
 */

EmailCommseqSequenceTestRequest.prototype['please_review'] = undefined;
/**
 * @member {String} send_to_email
 */

EmailCommseqSequenceTestRequest.prototype['send_to_email'] = undefined;
/**
 * @member {Boolean} send_to_logged_in_user
 */

EmailCommseqSequenceTestRequest.prototype['send_to_logged_in_user'] = undefined;
var _default = EmailCommseqSequenceTestRequest;
exports["default"] = _default;