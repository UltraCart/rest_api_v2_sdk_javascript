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
 * The EmailStatSummaryRequest model module.
 * @module com.ultracart.admin.v2.models/EmailStatSummaryRequest
 * @version 4.0.141
 */
var EmailStatSummaryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailStatSummaryRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStatSummaryRequest
   */
  function EmailStatSummaryRequest() {
    _classCallCheck(this, EmailStatSummaryRequest);

    EmailStatSummaryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailStatSummaryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailStatSummaryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStatSummaryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStatSummaryRequest} The populated <code>EmailStatSummaryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailStatSummaryRequest();

        if (data.hasOwnProperty('commseq_email_uuids')) {
          obj['commseq_email_uuids'] = _ApiClient["default"].convertToType(data['commseq_email_uuids'], ['String']);
        }

        if (data.hasOwnProperty('commseq_step_uuids')) {
          obj['commseq_step_uuids'] = _ApiClient["default"].convertToType(data['commseq_step_uuids'], ['String']);
        }

        if (data.hasOwnProperty('days')) {
          obj['days'] = _ApiClient["default"].convertToType(data['days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailStatSummaryRequest;
}();
/**
 * @member {Array.<String>} commseq_email_uuids
 */


EmailStatSummaryRequest.prototype['commseq_email_uuids'] = undefined;
/**
 * @member {Array.<String>} commseq_step_uuids
 */

EmailStatSummaryRequest.prototype['commseq_step_uuids'] = undefined;
/**
 * @member {Number} days
 */

EmailStatSummaryRequest.prototype['days'] = undefined;
var _default = EmailStatSummaryRequest;
exports["default"] = _default;