"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WebhookEventSubscription = _interopRequireDefault(require("./WebhookEventSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WebhookEventCategory model module.
 * @module com.ultracart.admin.v2.models/WebhookEventCategory
 * @version 4.0.146
 */
var WebhookEventCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookEventCategory</code>.
   * @alias module:com.ultracart.admin.v2.models/WebhookEventCategory
   */
  function WebhookEventCategory() {
    _classCallCheck(this, WebhookEventCategory);

    WebhookEventCategory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookEventCategory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WebhookEventCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookEventCategory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookEventCategory} The populated <code>WebhookEventCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookEventCategory();

        if (data.hasOwnProperty('any_subscribed')) {
          obj['any_subscribed'] = _ApiClient["default"].convertToType(data['any_subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('available_expansions')) {
          obj['available_expansions'] = _ApiClient["default"].convertToType(data['available_expansions'], ['String']);
        }

        if (data.hasOwnProperty('event_category')) {
          obj['event_category'] = _ApiClient["default"].convertToType(data['event_category'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_WebhookEventSubscription["default"]]);
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return WebhookEventCategory;
}();
/**
 * True if any events are subscribed to.
 * @member {Boolean} any_subscribed
 */


WebhookEventCategory.prototype['any_subscribed'] = undefined;
/**
 * Array of available expansion constants
 * @member {Array.<String>} available_expansions
 */

WebhookEventCategory.prototype['available_expansions'] = undefined;
/**
 * Name of the event category
 * @member {String} event_category
 */

WebhookEventCategory.prototype['event_category'] = undefined;
/**
 * The events within the category.  Individual subscription flags contained within the child object.
 * @member {Array.<module:com.ultracart.admin.v2.models/WebhookEventSubscription>} events
 */

WebhookEventCategory.prototype['events'] = undefined;
/**
 * True if all the events within this category are subscribed.  This is a convenience flag to make user interfaces easier.
 * @member {Boolean} subscribed
 */

WebhookEventCategory.prototype['subscribed'] = undefined;
var _default = WebhookEventCategory;
exports["default"] = _default;