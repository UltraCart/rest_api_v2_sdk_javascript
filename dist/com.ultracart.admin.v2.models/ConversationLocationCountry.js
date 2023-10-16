"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationLocationStateProvince = _interopRequireDefault(require("./ConversationLocationStateProvince"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationLocationCountry model module.
 * @module com.ultracart.admin.v2.models/ConversationLocationCountry
 * @version 4.0.179
 */
var ConversationLocationCountry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationLocationCountry</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationLocationCountry
   */
  function ConversationLocationCountry() {
    _classCallCheck(this, ConversationLocationCountry);

    ConversationLocationCountry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationLocationCountry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationLocationCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationLocationCountry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationLocationCountry} The populated <code>ConversationLocationCountry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationLocationCountry();

        if (data.hasOwnProperty('iso2')) {
          obj['iso2'] = _ApiClient["default"].convertToType(data['iso2'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('state_provinces')) {
          obj['state_provinces'] = _ApiClient["default"].convertToType(data['state_provinces'], [_ConversationLocationStateProvince["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConversationLocationCountry;
}();
/**
 * @member {String} iso2
 */


ConversationLocationCountry.prototype['iso2'] = undefined;
/**
 * @member {String} name
 */

ConversationLocationCountry.prototype['name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationLocationStateProvince>} state_provinces
 */

ConversationLocationCountry.prototype['state_provinces'] = undefined;
var _default = ConversationLocationCountry;
exports["default"] = _default;