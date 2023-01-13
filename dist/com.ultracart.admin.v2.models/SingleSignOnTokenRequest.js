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
 * The SingleSignOnTokenRequest model module.
 * @module com.ultracart.admin.v2.models/SingleSignOnTokenRequest
 * @version 4.0.111-RC
 */
var SingleSignOnTokenRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SingleSignOnTokenRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest
   */
  function SingleSignOnTokenRequest() {
    _classCallCheck(this, SingleSignOnTokenRequest);

    SingleSignOnTokenRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SingleSignOnTokenRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SingleSignOnTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest} The populated <code>SingleSignOnTokenRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SingleSignOnTokenRequest();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('grant_type')) {
          obj['grant_type'] = _ApiClient["default"].convertToType(data['grant_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SingleSignOnTokenRequest;
}();
/**
 * The code received on the redirect URI after the customer approved the single sign on request.
 * @member {String} code
 */


SingleSignOnTokenRequest.prototype['code'] = undefined;
/**
 * Grant type.  The value should be simple_key.
 * @member {String} grant_type
 */

SingleSignOnTokenRequest.prototype['grant_type'] = undefined;
var _default = SingleSignOnTokenRequest;
exports["default"] = _default;