"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationEngagementEquationFunction = _interopRequireDefault(require("./ConversationEngagementEquationFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationEngagementEquationGroup model module.
 * @module com.ultracart.admin.v2.models/ConversationEngagementEquationGroup
 * @version 4.0.106-RC
 */
var ConversationEngagementEquationGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEngagementEquationGroup</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup
   */
  function ConversationEngagementEquationGroup() {
    _classCallCheck(this, ConversationEngagementEquationGroup);

    ConversationEngagementEquationGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEngagementEquationGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEngagementEquationGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup} The populated <code>ConversationEngagementEquationGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEngagementEquationGroup();

        if (data.hasOwnProperty('functions')) {
          obj['functions'] = _ApiClient["default"].convertToType(data['functions'], [_ConversationEngagementEquationFunction["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConversationEngagementEquationGroup;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction>} functions
 */


ConversationEngagementEquationGroup.prototype['functions'] = undefined;
var _default = ConversationEngagementEquationGroup;
exports["default"] = _default;