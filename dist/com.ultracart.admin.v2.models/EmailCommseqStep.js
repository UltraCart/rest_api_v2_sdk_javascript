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
 * The EmailCommseqStep model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqStep
 * @version 4.0.149
 */
var EmailCommseqStep = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqStep</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqStep
   */
  function EmailCommseqStep() {
    _classCallCheck(this, EmailCommseqStep);

    EmailCommseqStep.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqStep, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqStep} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqStep} The populated <code>EmailCommseqStep</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqStep();

        if (data.hasOwnProperty('alt_child_email_communication_sequence_steps')) {
          obj['alt_child_email_communication_sequence_steps'] = _ApiClient["default"].convertToType(data['alt_child_email_communication_sequence_steps'], [EmailCommseqStep]);
        }

        if (data.hasOwnProperty('child_email_communication_sequence_steps')) {
          obj['child_email_communication_sequence_steps'] = _ApiClient["default"].convertToType(data['child_email_communication_sequence_steps'], [EmailCommseqStep]);
        }

        if (data.hasOwnProperty('email_communication_sequence_step_uuid')) {
          obj['email_communication_sequence_step_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_step_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_pending_review')) {
          obj['email_pending_review'] = _ApiClient["default"].convertToType(data['email_pending_review'], 'Boolean');
        }

        if (data.hasOwnProperty('email_rejected')) {
          obj['email_rejected'] = _ApiClient["default"].convertToType(data['email_rejected'], 'Boolean');
        }

        if (data.hasOwnProperty('email_requires_review')) {
          obj['email_requires_review'] = _ApiClient["default"].convertToType(data['email_requires_review'], 'Boolean');
        }

        if (data.hasOwnProperty('filter_profile_equation_json')) {
          obj['filter_profile_equation_json'] = _ApiClient["default"].convertToType(data['filter_profile_equation_json'], 'String');
        }

        if (data.hasOwnProperty('merchant_notes')) {
          obj['merchant_notes'] = _ApiClient["default"].convertToType(data['merchant_notes'], 'String');
        }

        if (data.hasOwnProperty('step_config_json')) {
          obj['step_config_json'] = _ApiClient["default"].convertToType(data['step_config_json'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqStep;
}();
/**
 * Array of child steps for the alternate path
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseqStep>} alt_child_email_communication_sequence_steps
 */


EmailCommseqStep.prototype['alt_child_email_communication_sequence_steps'] = undefined;
/**
 * Array of child steps
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseqStep>} child_email_communication_sequence_steps
 */

EmailCommseqStep.prototype['child_email_communication_sequence_steps'] = undefined;
/**
 * Email commseq step UUID
 * @member {String} email_communication_sequence_step_uuid
 */

EmailCommseqStep.prototype['email_communication_sequence_step_uuid'] = undefined;
/**
 * True if the content of the email associated with this step is pending review by UltraCart
 * @member {Boolean} email_pending_review
 */

EmailCommseqStep.prototype['email_pending_review'] = undefined;
/**
 * True if the content of the email associated with this step was rejected during review by UltraCart
 * @member {Boolean} email_rejected
 */

EmailCommseqStep.prototype['email_rejected'] = undefined;
/**
 * True if the content of the email associated with this step requires review by UltraCart
 * @member {Boolean} email_requires_review
 */

EmailCommseqStep.prototype['email_requires_review'] = undefined;
/**
 * Filter profile equation JSON
 * @member {String} filter_profile_equation_json
 */

EmailCommseqStep.prototype['filter_profile_equation_json'] = undefined;
/**
 * Internal merchant notes
 * @member {String} merchant_notes
 */

EmailCommseqStep.prototype['merchant_notes'] = undefined;
/**
 * Arbitrary Configuration for a step
 * @member {String} step_config_json
 */

EmailCommseqStep.prototype['step_config_json'] = undefined;
/**
 * Type of step
 * @member {module:com.ultracart.admin.v2.models/EmailCommseqStep.TypeEnum} type
 */

EmailCommseqStep.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

EmailCommseqStep['TypeEnum'] = {
  /**
   * value: "begin"
   * @const
   */
  "begin": "begin",

  /**
   * value: "wait"
   * @const
   */
  "wait": "wait",

  /**
   * value: "email"
   * @const
   */
  "email": "email",

  /**
   * value: "merge"
   * @const
   */
  "merge": "merge",

  /**
   * value: "condition"
   * @const
   */
  "condition": "condition",

  /**
   * value: "end"
   * @const
   */
  "end": "end"
};
var _default = EmailCommseqStep;
exports["default"] = _default;