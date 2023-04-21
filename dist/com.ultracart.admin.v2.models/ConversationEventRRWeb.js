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
 * The ConversationEventRRWeb model module.
 * @module com.ultracart.admin.v2.models/ConversationEventRRWeb
 * @version 4.0.149
 */
var ConversationEventRRWeb = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventRRWeb</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventRRWeb
   */
  function ConversationEventRRWeb() {
    _classCallCheck(this, ConversationEventRRWeb);

    ConversationEventRRWeb.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEventRRWeb, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEventRRWeb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} The populated <code>ConversationEventRRWeb</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventRRWeb();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('data_part')) {
          obj['data_part'] = _ApiClient["default"].convertToType(data['data_part'], 'Number');
        }

        if (data.hasOwnProperty('data_sha256')) {
          obj['data_sha256'] = _ApiClient["default"].convertToType(data['data_sha256'], 'String');
        }

        if (data.hasOwnProperty('data_total_parts')) {
          obj['data_total_parts'] = _ApiClient["default"].convertToType(data['data_total_parts'], 'Number');
        }

        if (data.hasOwnProperty('data_total_sha256')) {
          obj['data_total_sha256'] = _ApiClient["default"].convertToType(data['data_total_sha256'], 'String');
        }

        if (data.hasOwnProperty('event_index')) {
          obj['event_index'] = _ApiClient["default"].convertToType(data['event_index'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationEventRRWeb;
}();
/**
 * @member {String} data
 */


ConversationEventRRWeb.prototype['data'] = undefined;
/**
 * @member {Number} data_part
 */

ConversationEventRRWeb.prototype['data_part'] = undefined;
/**
 * @member {String} data_sha256
 */

ConversationEventRRWeb.prototype['data_sha256'] = undefined;
/**
 * @member {Number} data_total_parts
 */

ConversationEventRRWeb.prototype['data_total_parts'] = undefined;
/**
 * @member {String} data_total_sha256
 */

ConversationEventRRWeb.prototype['data_total_sha256'] = undefined;
/**
 * @member {Number} event_index
 */

ConversationEventRRWeb.prototype['event_index'] = undefined;
/**
 * Type of event
 * @member {module:com.ultracart.admin.v2.models/ConversationEventRRWeb.TypeEnum} type
 */

ConversationEventRRWeb.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEventRRWeb['TypeEnum'] = {
  /**
   * value: "init"
   * @const
   */
  "init": "init",

  /**
   * value: "events"
   * @const
   */
  "events": "events"
};
var _default = ConversationEventRRWeb;
exports["default"] = _default;