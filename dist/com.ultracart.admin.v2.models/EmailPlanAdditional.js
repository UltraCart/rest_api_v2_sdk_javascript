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
 * The EmailPlanAdditional model module.
 * @module com.ultracart.admin.v2.models/EmailPlanAdditional
 * @version 4.0.151
 */
var EmailPlanAdditional = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailPlanAdditional</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPlanAdditional
   */
  function EmailPlanAdditional() {
    _classCallCheck(this, EmailPlanAdditional);

    EmailPlanAdditional.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailPlanAdditional, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailPlanAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPlanAdditional} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPlanAdditional} The populated <code>EmailPlanAdditional</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailPlanAdditional();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('can_downgrade')) {
          obj['can_downgrade'] = _ApiClient["default"].convertToType(data['can_downgrade'], 'Boolean');
        }

        if (data.hasOwnProperty('can_upgrade')) {
          obj['can_upgrade'] = _ApiClient["default"].convertToType(data['can_upgrade'], 'Boolean');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }

        if (data.hasOwnProperty('cost_change')) {
          obj['cost_change'] = _ApiClient["default"].convertToType(data['cost_change'], 'Number');
        }

        if (data.hasOwnProperty('cost_change_formatted')) {
          obj['cost_change_formatted'] = _ApiClient["default"].convertToType(data['cost_change_formatted'], 'String');
        }

        if (data.hasOwnProperty('cost_formatted')) {
          obj['cost_formatted'] = _ApiClient["default"].convertToType(data['cost_formatted'], 'String');
        }

        if (data.hasOwnProperty('customers')) {
          obj['customers'] = _ApiClient["default"].convertToType(data['customers'], 'Number');
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailPlanAdditional;
}();
/**
 * @member {Boolean} active
 */


EmailPlanAdditional.prototype['active'] = undefined;
/**
 * @member {Boolean} can_downgrade
 */

EmailPlanAdditional.prototype['can_downgrade'] = undefined;
/**
 * @member {Boolean} can_upgrade
 */

EmailPlanAdditional.prototype['can_upgrade'] = undefined;
/**
 * @member {Number} cost
 */

EmailPlanAdditional.prototype['cost'] = undefined;
/**
 * @member {Number} cost_change
 */

EmailPlanAdditional.prototype['cost_change'] = undefined;
/**
 * @member {String} cost_change_formatted
 */

EmailPlanAdditional.prototype['cost_change_formatted'] = undefined;
/**
 * @member {String} cost_formatted
 */

EmailPlanAdditional.prototype['cost_formatted'] = undefined;
/**
 * @member {Number} customers
 */

EmailPlanAdditional.prototype['customers'] = undefined;
/**
 * @member {Number} emails
 */

EmailPlanAdditional.prototype['emails'] = undefined;
var _default = EmailPlanAdditional;
exports["default"] = _default;