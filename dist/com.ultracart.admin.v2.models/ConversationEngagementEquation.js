"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationEngagementEquationGroup = _interopRequireDefault(require("./ConversationEngagementEquationGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationEngagementEquation model module.
 * @module com.ultracart.admin.v2.models/ConversationEngagementEquation
 * @version 4.0.104-RC
 */
var ConversationEngagementEquation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEngagementEquation</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagementEquation
   */
  function ConversationEngagementEquation() {
    _classCallCheck(this, ConversationEngagementEquation);

    ConversationEngagementEquation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEngagementEquation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEngagementEquation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementEquation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEngagementEquation} The populated <code>ConversationEngagementEquation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEngagementEquation();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_ConversationEngagementEquationGroup["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConversationEngagementEquation;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup>} groups
 */


ConversationEngagementEquation.prototype['groups'] = undefined;
var _default = ConversationEngagementEquation;
exports["default"] = _default;