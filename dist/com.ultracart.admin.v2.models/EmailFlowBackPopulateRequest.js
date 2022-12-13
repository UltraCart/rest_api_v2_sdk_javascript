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
 * The EmailFlowBackPopulateRequest model module.
 * @module com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest
 * @version 4.0.96-RC
 */
var EmailFlowBackPopulateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailFlowBackPopulateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest
   */
  function EmailFlowBackPopulateRequest() {
    _classCallCheck(this, EmailFlowBackPopulateRequest);

    EmailFlowBackPopulateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailFlowBackPopulateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailFlowBackPopulateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} The populated <code>EmailFlowBackPopulateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailFlowBackPopulateRequest();

        if (data.hasOwnProperty('order_days_old')) {
          obj['order_days_old'] = _ApiClient["default"].convertToType(data['order_days_old'], 'Number');
        }

        if (data.hasOwnProperty('relative_to_event')) {
          obj['relative_to_event'] = _ApiClient["default"].convertToType(data['relative_to_event'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmailFlowBackPopulateRequest;
}();
/**
 * The age of the orders that should be considered for order triggers.
 * @member {Number} order_days_old
 */


EmailFlowBackPopulateRequest.prototype['order_days_old'] = undefined;
/**
 * True if the age of the event should be considered when reducing the initial flow wait step
 * @member {Boolean} relative_to_event
 */

EmailFlowBackPopulateRequest.prototype['relative_to_event'] = undefined;
var _default = EmailFlowBackPopulateRequest;
exports["default"] = _default;