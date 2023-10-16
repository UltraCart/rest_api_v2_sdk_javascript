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
 * The WebhookEventSubscription model module.
 * @module com.ultracart.admin.v2.models/WebhookEventSubscription
 * @version 4.0.179
 */
var WebhookEventSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookEventSubscription</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookEventSubscription
   */
  function WebhookEventSubscription() {
    _classCallCheck(this, WebhookEventSubscription);

    WebhookEventSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookEventSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WebhookEventSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookEventSubscription} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookEventSubscription} The populated <code>WebhookEventSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookEventSubscription();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('deprecated_flag')) {
          obj['deprecated_flag'] = _ApiClient["default"].convertToType(data['deprecated_flag'], 'Boolean');
        }

        if (data.hasOwnProperty('discontinued_flag')) {
          obj['discontinued_flag'] = _ApiClient["default"].convertToType(data['discontinued_flag'], 'Boolean');
        }

        if (data.hasOwnProperty('event_description')) {
          obj['event_description'] = _ApiClient["default"].convertToType(data['event_description'], 'String');
        }

        if (data.hasOwnProperty('event_name')) {
          obj['event_name'] = _ApiClient["default"].convertToType(data['event_name'], 'String');
        }

        if (data.hasOwnProperty('expansion')) {
          obj['expansion'] = _ApiClient["default"].convertToType(data['expansion'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('supports_reflow')) {
          obj['supports_reflow'] = _ApiClient["default"].convertToType(data['supports_reflow'], 'Boolean');
        }

        if (data.hasOwnProperty('webhook_event_oid')) {
          obj['webhook_event_oid'] = _ApiClient["default"].convertToType(data['webhook_event_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WebhookEventSubscription;
}();
/**
 * Comment about the event to provide further clarification to the end user
 * @member {String} comments
 */


WebhookEventSubscription.prototype['comments'] = undefined;
/**
 * True if the event is deprecated.  See the API change log for details on when it will be discontinued.
 * @member {Boolean} deprecated_flag
 */

WebhookEventSubscription.prototype['deprecated_flag'] = undefined;
/**
 * True if the event is discontinued.  See the API change log for details on migration details.
 * @member {Boolean} discontinued_flag
 */

WebhookEventSubscription.prototype['discontinued_flag'] = undefined;
/**
 * Description of the event
 * @member {String} event_description
 */

WebhookEventSubscription.prototype['event_description'] = undefined;
/**
 * Event name
 * @member {String} event_name
 */

WebhookEventSubscription.prototype['event_name'] = undefined;
/**
 * The expand string for the notification object.  See the individual resource _expand documentation for valid values.
 * @member {String} expansion
 */

WebhookEventSubscription.prototype['expansion'] = undefined;
/**
 * True if this is event is subscribed to
 * @member {Boolean} subscribed
 */

WebhookEventSubscription.prototype['subscribed'] = undefined;
/**
 * True if the event can be triggered to reflow existing records
 * @member {Boolean} supports_reflow
 */

WebhookEventSubscription.prototype['supports_reflow'] = undefined;
/**
 * The webhook event object identifier
 * @member {Number} webhook_event_oid
 */

WebhookEventSubscription.prototype['webhook_event_oid'] = undefined;
var _default = WebhookEventSubscription;
exports["default"] = _default;