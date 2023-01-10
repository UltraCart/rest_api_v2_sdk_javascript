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
 * The EmailCommseqSmsSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest
 * @version 4.0.108-RC
 */
var EmailCommseqSmsSendTestRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqSmsSendTestRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest
   */
  function EmailCommseqSmsSendTestRequest() {
    _classCallCheck(this, EmailCommseqSmsSendTestRequest);

    EmailCommseqSmsSendTestRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqSmsSendTestRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqSmsSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} The populated <code>EmailCommseqSmsSendTestRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqSmsSendTestRequest();

        if (data.hasOwnProperty('esp_commseq_step_uuid')) {
          obj['esp_commseq_step_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_step_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_commseq_uuid')) {
          obj['esp_commseq_uuid'] = _ApiClient["default"].convertToType(data['esp_commseq_uuid'], 'String');
        }

        if (data.hasOwnProperty('send_to_cellphone_e164')) {
          obj['send_to_cellphone_e164'] = _ApiClient["default"].convertToType(data['send_to_cellphone_e164'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqSmsSendTestRequest;
}();
/**
 * @member {String} esp_commseq_step_uuid
 */


EmailCommseqSmsSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;
/**
 * @member {String} esp_commseq_uuid
 */

EmailCommseqSmsSendTestRequest.prototype['esp_commseq_uuid'] = undefined;
/**
 * @member {String} send_to_cellphone_e164
 */

EmailCommseqSmsSendTestRequest.prototype['send_to_cellphone_e164'] = undefined;
var _default = EmailCommseqSmsSendTestRequest;
exports["default"] = _default;