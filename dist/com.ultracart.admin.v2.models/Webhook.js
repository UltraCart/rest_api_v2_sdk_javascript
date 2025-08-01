"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApiUserApplicationProfile = _interopRequireDefault(require("./ApiUserApplicationProfile"));
var _WebhookEventCategory = _interopRequireDefault(require("./WebhookEventCategory"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Webhook model module.
 * @module com.ultracart.admin.v2.models/Webhook
 * @version 4.1.15
 */
var Webhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Webhook</code>.
   * @alias module:com.ultracart.admin.v2.models/Webhook
   */
  function Webhook() {
    _classCallCheck(this, Webhook);
    Webhook.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Webhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Webhook} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Webhook} The populated <code>Webhook</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Webhook();
        if (data.hasOwnProperty('api_user_oid')) {
          obj['api_user_oid'] = _ApiClient["default"].convertToType(data['api_user_oid'], 'Number');
        }
        if (data.hasOwnProperty('api_version')) {
          obj['api_version'] = _ApiClient["default"].convertToType(data['api_version'], 'String');
        }
        if (data.hasOwnProperty('application_profile')) {
          obj['application_profile'] = _ApiUserApplicationProfile["default"].constructFromObject(data['application_profile']);
        }
        if (data.hasOwnProperty('authentication_type')) {
          obj['authentication_type'] = _ApiClient["default"].convertToType(data['authentication_type'], 'String');
        }
        if (data.hasOwnProperty('basic_password')) {
          obj['basic_password'] = _ApiClient["default"].convertToType(data['basic_password'], 'String');
        }
        if (data.hasOwnProperty('basic_username')) {
          obj['basic_username'] = _ApiClient["default"].convertToType(data['basic_username'], 'String');
        }
        if (data.hasOwnProperty('compress_events')) {
          obj['compress_events'] = _ApiClient["default"].convertToType(data['compress_events'], 'Boolean');
        }
        if (data.hasOwnProperty('consecutive_failures')) {
          obj['consecutive_failures'] = _ApiClient["default"].convertToType(data['consecutive_failures'], 'Number');
        }
        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }
        if (data.hasOwnProperty('event_categories')) {
          obj['event_categories'] = _ApiClient["default"].convertToType(data['event_categories'], [_WebhookEventCategory["default"]]);
        }
        if (data.hasOwnProperty('iam_access_key')) {
          obj['iam_access_key'] = _ApiClient["default"].convertToType(data['iam_access_key'], 'String');
        }
        if (data.hasOwnProperty('iam_secret_key')) {
          obj['iam_secret_key'] = _ApiClient["default"].convertToType(data['iam_secret_key'], 'String');
        }
        if (data.hasOwnProperty('maximum_events')) {
          obj['maximum_events'] = _ApiClient["default"].convertToType(data['maximum_events'], 'Number');
        }
        if (data.hasOwnProperty('maximum_size')) {
          obj['maximum_size'] = _ApiClient["default"].convertToType(data['maximum_size'], 'Number');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('next_retry_after')) {
          obj['next_retry_after'] = _ApiClient["default"].convertToType(data['next_retry_after'], 'String');
        }
        if (data.hasOwnProperty('pending')) {
          obj['pending'] = _ApiClient["default"].convertToType(data['pending'], 'Number');
        }
        if (data.hasOwnProperty('webhook_oid')) {
          obj['webhook_oid'] = _ApiClient["default"].convertToType(data['webhook_oid'], 'Number');
        }
        if (data.hasOwnProperty('webhook_url')) {
          obj['webhook_url'] = _ApiClient["default"].convertToType(data['webhook_url'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Populated if webhook associated with an API user
 * @member {Number} api_user_oid
 */
Webhook.prototype['api_user_oid'] = undefined;

/**
 * Version of the API objects that are sent in notifications
 * @member {module:com.ultracart.admin.v2.models/Webhook.ApiVersionEnum} api_version
 */
Webhook.prototype['api_version'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} application_profile
 */
Webhook.prototype['application_profile'] = undefined;

/**
 * The type of authentication this webhook will use when communicating with your server
 * @member {module:com.ultracart.admin.v2.models/Webhook.AuthenticationTypeEnum} authentication_type
 */
Webhook.prototype['authentication_type'] = undefined;

/**
 * Basic authentication password
 * @member {String} basic_password
 */
Webhook.prototype['basic_password'] = undefined;

/**
 * Basic authentication user name
 * @member {String} basic_username
 */
Webhook.prototype['basic_username'] = undefined;

/**
 * Compress events with GZIP then base 64 encode them as a string
 * @member {Boolean} compress_events
 */
Webhook.prototype['compress_events'] = undefined;

/**
 * The number of consecutive failures that have occurred trying to deliver notifications to the target server
 * @member {Number} consecutive_failures
 */
Webhook.prototype['consecutive_failures'] = undefined;

/**
 * True if the webhook has been disabled
 * @member {Boolean} disabled
 */
Webhook.prototype['disabled'] = undefined;

/**
 * The categories of events.  Individual events and subscriptions are handled in the child objects.  _placeholders parameter effects the population of this on a retrieval.
 * @member {Array.<module:com.ultracart.admin.v2.models/WebhookEventCategory>} event_categories
 */
Webhook.prototype['event_categories'] = undefined;

/**
 * IAM Access Key for AWS SQS Delivery
 * @member {String} iam_access_key
 */
Webhook.prototype['iam_access_key'] = undefined;

/**
 * IAM Secret Key for AWS SQS Delivery
 * @member {String} iam_secret_key
 */
Webhook.prototype['iam_secret_key'] = undefined;

/**
 * The maximum number of events in the payload that UltraCart will deliver
 * @member {Number} maximum_events
 */
Webhook.prototype['maximum_events'] = undefined;

/**
 * The maximum size of the payload that UltraCart will deliver
 * @member {Number} maximum_size
 */
Webhook.prototype['maximum_size'] = undefined;

/**
 * The UltraCart merchant ID that owns this webhook
 * @member {String} merchant_id
 */
Webhook.prototype['merchant_id'] = undefined;

/**
 * The next time UltraCart will attempt delivery if failures have been occurring
 * @member {String} next_retry_after
 */
Webhook.prototype['next_retry_after'] = undefined;

/**
 * The number of pending events for this webhook
 * @member {Number} pending
 */
Webhook.prototype['pending'] = undefined;

/**
 * The object identifier for this webhook
 * @member {Number} webhook_oid
 */
Webhook.prototype['webhook_oid'] = undefined;

/**
 * The URL to deliver events to.  Must be HTTPS for customer related information.
 * @member {String} webhook_url
 */
Webhook.prototype['webhook_url'] = undefined;

/**
 * Allowed values for the <code>api_version</code> property.
 * @enum {String}
 * @readonly
 */
Webhook['ApiVersionEnum'] = {
  /**
   * value: "2017-03-01"
   * @const
   */
  "2017-03-01": "2017-03-01"
};

/**
 * Allowed values for the <code>authentication_type</code> property.
 * @enum {String}
 * @readonly
 */
Webhook['AuthenticationTypeEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",
  /**
   * value: "basic"
   * @const
   */
  "basic": "basic",
  /**
   * value: "api user"
   * @const
   */
  "api user": "api user",
  /**
   * value: "aws iam"
   * @const
   */
  "aws iam": "aws iam"
};
var _default = exports["default"] = Webhook;