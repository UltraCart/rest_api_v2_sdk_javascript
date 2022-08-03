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
 * The EmailCommseqStepLog model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqStepLog
 * @version 4.0.49-RC
 */
var EmailCommseqStepLog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqStepLog</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqStepLog
   */
  function EmailCommseqStepLog() {
    _classCallCheck(this, EmailCommseqStepLog);

    EmailCommseqStepLog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqStepLog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqStepLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqStepLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqStepLog} The populated <code>EmailCommseqStepLog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqStepLog();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('log')) {
          obj['log'] = _ApiClient["default"].convertToType(data['log'], 'String');
        }

        if (data.hasOwnProperty('log_dts')) {
          obj['log_dts'] = _ApiClient["default"].convertToType(data['log_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqStepLog;
}();
/**
 * Email
 * @member {String} email
 */


EmailCommseqStepLog.prototype['email'] = undefined;
/**
 * Log text
 * @member {String} log
 */

EmailCommseqStepLog.prototype['log'] = undefined;
/**
 * Log date/time
 * @member {String} log_dts
 */

EmailCommseqStepLog.prototype['log_dts'] = undefined;
var _default = EmailCommseqStepLog;
exports["default"] = _default;