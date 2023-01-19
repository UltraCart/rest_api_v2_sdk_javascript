"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationSummary = _interopRequireDefault(require("./ConversationSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationSearchResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationSearchResponse
 * @version 4.0.118-RC
 */
var ConversationSearchResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationSearchResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationSearchResponse
   */
  function ConversationSearchResponse() {
    _classCallCheck(this, ConversationSearchResponse);

    ConversationSearchResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationSearchResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationSearchResponse} The populated <code>ConversationSearchResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationSearchResponse();

        if (data.hasOwnProperty('range_begin')) {
          obj['range_begin'] = _ApiClient["default"].convertToType(data['range_begin'], 'Number');
        }

        if (data.hasOwnProperty('range_end')) {
          obj['range_end'] = _ApiClient["default"].convertToType(data['range_end'], 'Number');
        }

        if (data.hasOwnProperty('records')) {
          obj['records'] = _ApiClient["default"].convertToType(data['records'], [_ConversationSummary["default"]]);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConversationSearchResponse;
}();
/**
 * @member {Number} range_begin
 */


ConversationSearchResponse.prototype['range_begin'] = undefined;
/**
 * @member {Number} range_end
 */

ConversationSearchResponse.prototype['range_end'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationSummary>} records
 */

ConversationSearchResponse.prototype['records'] = undefined;
/**
 * @member {Number} total
 */

ConversationSearchResponse.prototype['total'] = undefined;
var _default = ConversationSearchResponse;
exports["default"] = _default;