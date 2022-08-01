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
 * The ConversationEventQueuePosition model module.
 * @module com.ultracart.admin.v2.models/ConversationEventQueuePosition
 * @version 4.0.46-RC
 */
var ConversationEventQueuePosition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventQueuePosition</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventQueuePosition
   */
  function ConversationEventQueuePosition() {
    _classCallCheck(this, ConversationEventQueuePosition);

    ConversationEventQueuePosition.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEventQueuePosition, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEventQueuePosition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} The populated <code>ConversationEventQueuePosition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventQueuePosition();

        if (data.hasOwnProperty('available')) {
          obj['available'] = _ApiClient["default"].convertToType(data['available'], 'Boolean');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConversationEventQueuePosition;
}();
/**
 * True if agents are logged into the queue
 * @member {Boolean} available
 */


ConversationEventQueuePosition.prototype['available'] = undefined;
/**
 * Position in the queue.  Value will be -1 if they cant be found in the queue.
 * @member {Number} position
 */

ConversationEventQueuePosition.prototype['position'] = undefined;
var _default = ConversationEventQueuePosition;
exports["default"] = _default;