"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailCommseqStep = _interopRequireDefault(require("./EmailCommseqStep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailCommseq model module.
 * @module com.ultracart.admin.v2.models/EmailCommseq
 * @version 4.0.54-RC
 */
var EmailCommseq = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseq</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseq
   */
  function EmailCommseq() {
    _classCallCheck(this, EmailCommseq);

    EmailCommseq.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseq, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseq} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseq} The populated <code>EmailCommseq</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseq();

        if (data.hasOwnProperty('email_communication_sequence_steps')) {
          obj['email_communication_sequence_steps'] = _ApiClient["default"].convertToType(data['email_communication_sequence_steps'], [_EmailCommseqStep["default"]]);
        }

        if (data.hasOwnProperty('email_communication_sequence_uuid')) {
          obj['email_communication_sequence_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_uuid'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseq;
}();
/**
 * Array of steps
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseqStep>} email_communication_sequence_steps
 */


EmailCommseq.prototype['email_communication_sequence_steps'] = undefined;
/**
 * Email commseq UUID
 * @member {String} email_communication_sequence_uuid
 */

EmailCommseq.prototype['email_communication_sequence_uuid'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailCommseq.prototype['merchant_id'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailCommseq.prototype['storefront_oid'] = undefined;
var _default = EmailCommseq;
exports["default"] = _default;