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
 * The ReportAuth model module.
 * @module com.ultracart.admin.v2.models/ReportAuth
 * @version 4.0.179
 */
var ReportAuth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportAuth</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportAuth
   */
  function ReportAuth() {
    _classCallCheck(this, ReportAuth);

    ReportAuth.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportAuth, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportAuth} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportAuth} The populated <code>ReportAuth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportAuth();

        if (data.hasOwnProperty('client_uuid')) {
          obj['client_uuid'] = _ApiClient["default"].convertToType(data['client_uuid'], 'String');
        }

        if (data.hasOwnProperty('jwt')) {
          obj['jwt'] = _ApiClient["default"].convertToType(data['jwt'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('websocket_url')) {
          obj['websocket_url'] = _ApiClient["default"].convertToType(data['websocket_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportAuth;
}();
/**
 * Unique UUID assigned to this client
 * @member {String} client_uuid
 */


ReportAuth.prototype['client_uuid'] = undefined;
/**
 * @member {String} jwt
 */

ReportAuth.prototype['jwt'] = undefined;
/**
 * @member {String} merchant_id
 */

ReportAuth.prototype['merchant_id'] = undefined;
/**
 * @member {String} websocket_url
 */

ReportAuth.prototype['websocket_url'] = undefined;
var _default = ReportAuth;
exports["default"] = _default;