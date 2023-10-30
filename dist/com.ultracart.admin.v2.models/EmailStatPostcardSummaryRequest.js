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
 * The EmailStatPostcardSummaryRequest model module.
 * @module com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest
 * @version 4.0.183
 */
var EmailStatPostcardSummaryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailStatPostcardSummaryRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest
   */
  function EmailStatPostcardSummaryRequest() {
    _classCallCheck(this, EmailStatPostcardSummaryRequest);

    EmailStatPostcardSummaryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailStatPostcardSummaryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailStatPostcardSummaryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest} The populated <code>EmailStatPostcardSummaryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailStatPostcardSummaryRequest();

        if (data.hasOwnProperty('commseq_postcard_uuids')) {
          obj['commseq_postcard_uuids'] = _ApiClient["default"].convertToType(data['commseq_postcard_uuids'], ['String']);
        }

        if (data.hasOwnProperty('days')) {
          obj['days'] = _ApiClient["default"].convertToType(data['days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailStatPostcardSummaryRequest;
}();
/**
 * @member {Array.<String>} commseq_postcard_uuids
 */


EmailStatPostcardSummaryRequest.prototype['commseq_postcard_uuids'] = undefined;
/**
 * @member {Number} days
 */

EmailStatPostcardSummaryRequest.prototype['days'] = undefined;
var _default = EmailStatPostcardSummaryRequest;
exports["default"] = _default;