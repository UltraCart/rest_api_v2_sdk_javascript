"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoOrder = _interopRequireDefault(require("./AutoOrder"));

var _Cart = _interopRequireDefault(require("./Cart"));

var _HitPageView = _interopRequireDefault(require("./HitPageView"));

var _HitSessionStart = _interopRequireDefault(require("./HitSessionStart"));

var _HitSessionUtm = _interopRequireDefault(require("./HitSessionUtm"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationWebchatContext model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatContext
 * @version 4.0.128
 */
var ConversationWebchatContext = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebchatContext</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatContext
   */
  function ConversationWebchatContext() {
    _classCallCheck(this, ConversationWebchatContext);

    ConversationWebchatContext.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationWebchatContext, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatContext} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatContext} The populated <code>ConversationWebchatContext</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebchatContext();

        if (data.hasOwnProperty('auto_orders')) {
          obj['auto_orders'] = _ApiClient["default"].convertToType(data['auto_orders'], [_AutoOrder["default"]]);
        }

        if (data.hasOwnProperty('cart')) {
          obj['cart'] = _Cart["default"].constructFromObject(data['cart']);
        }

        if (data.hasOwnProperty('current_url')) {
          obj['current_url'] = _ApiClient["default"].convertToType(data['current_url'], 'String');
        }

        if (data.hasOwnProperty('orders')) {
          obj['orders'] = _ApiClient["default"].convertToType(data['orders'], [_Order["default"]]);
        }

        if (data.hasOwnProperty('page_view')) {
          obj['page_view'] = _ApiClient["default"].convertToType(data['page_view'], [_HitPageView["default"]]);
        }

        if (data.hasOwnProperty('session_start')) {
          obj['session_start'] = _HitSessionStart["default"].constructFromObject(data['session_start']);
        }

        if (data.hasOwnProperty('session_start_dts')) {
          obj['session_start_dts'] = _ApiClient["default"].convertToType(data['session_start_dts'], 'String');
        }

        if (data.hasOwnProperty('session_utm')) {
          obj['session_utm'] = _HitSessionUtm["default"].constructFromObject(data['session_utm']);
        }
      }

      return obj;
    }
  }]);

  return ConversationWebchatContext;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} auto_orders
 */


ConversationWebchatContext.prototype['auto_orders'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */

ConversationWebchatContext.prototype['cart'] = undefined;
/**
 * @member {String} current_url
 */

ConversationWebchatContext.prototype['current_url'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Order>} orders
 */

ConversationWebchatContext.prototype['orders'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/HitPageView>} page_view
 */

ConversationWebchatContext.prototype['page_view'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/HitSessionStart} session_start
 */

ConversationWebchatContext.prototype['session_start'] = undefined;
/**
 * Date/time that the session was started (if known)
 * @member {String} session_start_dts
 */

ConversationWebchatContext.prototype['session_start_dts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/HitSessionUtm} session_utm
 */

ConversationWebchatContext.prototype['session_utm'] = undefined;
var _default = ConversationWebchatContext;
exports["default"] = _default;