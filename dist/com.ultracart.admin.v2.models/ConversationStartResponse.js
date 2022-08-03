"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Conversation = _interopRequireDefault(require("./Conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationStartResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationStartResponse
 * @version 4.0.49-RC
 */
var ConversationStartResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationStartResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationStartResponse
   */
  function ConversationStartResponse() {
    _classCallCheck(this, ConversationStartResponse);

    ConversationStartResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationStartResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationStartResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationStartResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationStartResponse} The populated <code>ConversationStartResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationStartResponse();

        if (data.hasOwnProperty('conversation')) {
          obj['conversation'] = _Conversation["default"].constructFromObject(data['conversation']);
        }
      }

      return obj;
    }
  }]);

  return ConversationStartResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Conversation} conversation
 */


ConversationStartResponse.prototype['conversation'] = undefined;
var _default = ConversationStartResponse;
exports["default"] = _default;