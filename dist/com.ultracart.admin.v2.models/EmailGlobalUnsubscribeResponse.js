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
 * The EmailGlobalUnsubscribeResponse model module.
 * @module com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse
 * @version 4.0.121-RC
 */
var EmailGlobalUnsubscribeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailGlobalUnsubscribeResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse
   */
  function EmailGlobalUnsubscribeResponse() {
    _classCallCheck(this, EmailGlobalUnsubscribeResponse);

    EmailGlobalUnsubscribeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailGlobalUnsubscribeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailGlobalUnsubscribeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse} The populated <code>EmailGlobalUnsubscribeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailGlobalUnsubscribeResponse();

        if (data.hasOwnProperty('listsUnsubscribed')) {
          obj['listsUnsubscribed'] = _ApiClient["default"].convertToType(data['listsUnsubscribed'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailGlobalUnsubscribeResponse;
}();
/**
 * @member {Number} listsUnsubscribed
 */


EmailGlobalUnsubscribeResponse.prototype['listsUnsubscribed'] = undefined;
var _default = EmailGlobalUnsubscribeResponse;
exports["default"] = _default;