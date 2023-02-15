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
 * The ConversationSearchRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationSearchRequest
 * @version 4.0.133
 */
var ConversationSearchRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationSearchRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationSearchRequest
   */
  function ConversationSearchRequest() {
    _classCallCheck(this, ConversationSearchRequest);

    ConversationSearchRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationSearchRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationSearchRequest} The populated <code>ConversationSearchRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationSearchRequest();

        if (data.hasOwnProperty('date_end')) {
          obj['date_end'] = _ApiClient["default"].convertToType(data['date_end'], 'String');
        }

        if (data.hasOwnProperty('date_start')) {
          obj['date_start'] = _ApiClient["default"].convertToType(data['date_start'], 'String');
        }

        if (data.hasOwnProperty('email_filter')) {
          obj['email_filter'] = _ApiClient["default"].convertToType(data['email_filter'], 'String');
        }

        if (data.hasOwnProperty('language_filter')) {
          obj['language_filter'] = _ApiClient["default"].convertToType(data['language_filter'], 'String');
        }

        if (data.hasOwnProperty('medium_filter')) {
          obj['medium_filter'] = _ApiClient["default"].convertToType(data['medium_filter'], 'String');
        }

        if (data.hasOwnProperty('order_by_newest')) {
          obj['order_by_newest'] = _ApiClient["default"].convertToType(data['order_by_newest'], 'Boolean');
        }

        if (data.hasOwnProperty('order_by_oldest')) {
          obj['order_by_oldest'] = _ApiClient["default"].convertToType(data['order_by_oldest'], 'Boolean');
        }

        if (data.hasOwnProperty('range_begin')) {
          obj['range_begin'] = _ApiClient["default"].convertToType(data['range_begin'], 'Number');
        }

        if (data.hasOwnProperty('range_end')) {
          obj['range_end'] = _ApiClient["default"].convertToType(data['range_end'], 'Number');
        }

        if (data.hasOwnProperty('sms_phone_number_filter')) {
          obj['sms_phone_number_filter'] = _ApiClient["default"].convertToType(data['sms_phone_number_filter'], 'String');
        }

        if (data.hasOwnProperty('text_search')) {
          obj['text_search'] = _ApiClient["default"].convertToType(data['text_search'], 'String');
        }

        if (data.hasOwnProperty('visible_filter')) {
          obj['visible_filter'] = _ApiClient["default"].convertToType(data['visible_filter'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ConversationSearchRequest;
}();
/**
 * End of the range
 * @member {String} date_end
 */


ConversationSearchRequest.prototype['date_end'] = undefined;
/**
 * Start of the range
 * @member {String} date_start
 */

ConversationSearchRequest.prototype['date_start'] = undefined;
/**
 * @member {String} email_filter
 */

ConversationSearchRequest.prototype['email_filter'] = undefined;
/**
 * @member {String} language_filter
 */

ConversationSearchRequest.prototype['language_filter'] = undefined;
/**
 * @member {String} medium_filter
 */

ConversationSearchRequest.prototype['medium_filter'] = undefined;
/**
 * @member {Boolean} order_by_newest
 */

ConversationSearchRequest.prototype['order_by_newest'] = undefined;
/**
 * @member {Boolean} order_by_oldest
 */

ConversationSearchRequest.prototype['order_by_oldest'] = undefined;
/**
 * @member {Number} range_begin
 */

ConversationSearchRequest.prototype['range_begin'] = undefined;
/**
 * @member {Number} range_end
 */

ConversationSearchRequest.prototype['range_end'] = undefined;
/**
 * @member {String} sms_phone_number_filter
 */

ConversationSearchRequest.prototype['sms_phone_number_filter'] = undefined;
/**
 * @member {String} text_search
 */

ConversationSearchRequest.prototype['text_search'] = undefined;
/**
 * @member {Boolean} visible_filter
 */

ConversationSearchRequest.prototype['visible_filter'] = undefined;
var _default = ConversationSearchRequest;
exports["default"] = _default;