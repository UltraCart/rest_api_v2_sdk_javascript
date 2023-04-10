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
 * The ConversationSentiment model module.
 * @module com.ultracart.admin.v2.models/ConversationSentiment
 * @version 4.0.144
 */
var ConversationSentiment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationSentiment</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationSentiment
   */
  function ConversationSentiment() {
    _classCallCheck(this, ConversationSentiment);

    ConversationSentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationSentiment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationSentiment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationSentiment} The populated <code>ConversationSentiment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationSentiment();

        if (data.hasOwnProperty('last_detect_sentiment')) {
          obj['last_detect_sentiment'] = _ApiClient["default"].convertToType(data['last_detect_sentiment'], 'String');
        }

        if (data.hasOwnProperty('mixed')) {
          obj['mixed'] = _ApiClient["default"].convertToType(data['mixed'], 'Number');
        }

        if (data.hasOwnProperty('negative')) {
          obj['negative'] = _ApiClient["default"].convertToType(data['negative'], 'Number');
        }

        if (data.hasOwnProperty('neutral')) {
          obj['neutral'] = _ApiClient["default"].convertToType(data['neutral'], 'Number');
        }

        if (data.hasOwnProperty('positive')) {
          obj['positive'] = _ApiClient["default"].convertToType(data['positive'], 'Number');
        }

        if (data.hasOwnProperty('sentiment')) {
          obj['sentiment'] = _ApiClient["default"].convertToType(data['sentiment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationSentiment;
}();
/**
 * The last time the detect sentiment was run on this conversation
 * @member {String} last_detect_sentiment
 */


ConversationSentiment.prototype['last_detect_sentiment'] = undefined;
/**
 * The mixed score
 * @member {Number} mixed
 */

ConversationSentiment.prototype['mixed'] = undefined;
/**
 * The negative score
 * @member {Number} negative
 */

ConversationSentiment.prototype['negative'] = undefined;
/**
 * The neutral score
 * @member {Number} neutral
 */

ConversationSentiment.prototype['neutral'] = undefined;
/**
 * The positive score
 * @member {Number} positive
 */

ConversationSentiment.prototype['positive'] = undefined;
/**
 * The overall sentiment
 * @member {module:com.ultracart.admin.v2.models/ConversationSentiment.SentimentEnum} sentiment
 */

ConversationSentiment.prototype['sentiment'] = undefined;
/**
 * Allowed values for the <code>sentiment</code> property.
 * @enum {String}
 * @readonly
 */

ConversationSentiment['SentimentEnum'] = {
  /**
   * value: "POSITIVE"
   * @const
   */
  "POSITIVE": "POSITIVE",

  /**
   * value: "NEUTRAL"
   * @const
   */
  "NEUTRAL": "NEUTRAL",

  /**
   * value: "NEGATIVE"
   * @const
   */
  "NEGATIVE": "NEGATIVE",

  /**
   * value: "MIXED"
   * @const
   */
  "MIXED": "MIXED"
};
var _default = ConversationSentiment;
exports["default"] = _default;