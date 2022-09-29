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
 * The EmailStepWaitingRequest model module.
 * @module com.ultracart.admin.v2.models/EmailStepWaitingRequest
 * @version 4.0.69-RC
 */
var EmailStepWaitingRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailStepWaitingRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStepWaitingRequest
   */
  function EmailStepWaitingRequest() {
    _classCallCheck(this, EmailStepWaitingRequest);

    EmailStepWaitingRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailStepWaitingRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailStepWaitingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStepWaitingRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStepWaitingRequest} The populated <code>EmailStepWaitingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailStepWaitingRequest();

        if (data.hasOwnProperty('commseq_step_uuids')) {
          obj['commseq_step_uuids'] = _ApiClient["default"].convertToType(data['commseq_step_uuids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return EmailStepWaitingRequest;
}();
/**
 * @member {Array.<String>} commseq_step_uuids
 */


EmailStepWaitingRequest.prototype['commseq_step_uuids'] = undefined;
var _default = EmailStepWaitingRequest;
exports["default"] = _default;