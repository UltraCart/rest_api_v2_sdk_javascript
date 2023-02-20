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
 * The ConversationCannedMessagesSearch model module.
 * @module com.ultracart.admin.v2.models/ConversationCannedMessagesSearch
 * @version 4.0.135
 */
var ConversationCannedMessagesSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationCannedMessagesSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch
   */
  function ConversationCannedMessagesSearch() {
    _classCallCheck(this, ConversationCannedMessagesSearch);

    ConversationCannedMessagesSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationCannedMessagesSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationCannedMessagesSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} The populated <code>ConversationCannedMessagesSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationCannedMessagesSearch();

        if (data.hasOwnProperty('max_results')) {
          obj['max_results'] = _ApiClient["default"].convertToType(data['max_results'], 'Number');
        }

        if (data.hasOwnProperty('short_code')) {
          obj['short_code'] = _ApiClient["default"].convertToType(data['short_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationCannedMessagesSearch;
}();
/**
 * @member {Number} max_results
 */


ConversationCannedMessagesSearch.prototype['max_results'] = undefined;
/**
 * @member {String} short_code
 */

ConversationCannedMessagesSearch.prototype['short_code'] = undefined;
var _default = ConversationCannedMessagesSearch;
exports["default"] = _default;