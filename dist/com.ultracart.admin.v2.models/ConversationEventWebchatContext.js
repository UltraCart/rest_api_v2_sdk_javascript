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
 * The ConversationEventWebchatContext model module.
 * @module com.ultracart.admin.v2.models/ConversationEventWebchatContext
 * @version 4.0.92-RC
 */
var ConversationEventWebchatContext = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventWebchatContext</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventWebchatContext
   */
  function ConversationEventWebchatContext() {
    _classCallCheck(this, ConversationEventWebchatContext);

    ConversationEventWebchatContext.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEventWebchatContext, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEventWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventWebchatContext} The populated <code>ConversationEventWebchatContext</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventWebchatContext();

        if (data.hasOwnProperty('cart_id')) {
          obj['cart_id'] = _ApiClient["default"].convertToType(data['cart_id'], 'String');
        }

        if (data.hasOwnProperty('ucacid')) {
          obj['ucacid'] = _ApiClient["default"].convertToType(data['ucacid'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationEventWebchatContext;
}();
/**
 * @member {String} cart_id
 */


ConversationEventWebchatContext.prototype['cart_id'] = undefined;
/**
 * @member {String} ucacid
 */

ConversationEventWebchatContext.prototype['ucacid'] = undefined;
/**
 * @member {String} url
 */

ConversationEventWebchatContext.prototype['url'] = undefined;
var _default = ConversationEventWebchatContext;
exports["default"] = _default;