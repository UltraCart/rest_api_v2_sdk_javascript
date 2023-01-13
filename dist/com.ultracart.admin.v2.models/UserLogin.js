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
 * The UserLogin model module.
 * @module com.ultracart.admin.v2.models/UserLogin
 * @version 4.0.111-RC
 */
var UserLogin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserLogin</code>.
   * @alias module:com.ultracart.admin.v2.models/UserLogin
   */
  function UserLogin() {
    _classCallCheck(this, UserLogin);

    UserLogin.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserLogin, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserLogin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UserLogin} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UserLogin} The populated <code>UserLogin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserLogin();

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('login_dts')) {
          obj['login_dts'] = _ApiClient["default"].convertToType(data['login_dts'], 'String');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserLogin;
}();
/**
 * IP Address
 * @member {String} ip_address
 */


UserLogin.prototype['ip_address'] = undefined;
/**
 * login
 * @member {String} login
 */

UserLogin.prototype['login'] = undefined;
/**
 * Login date/time
 * @member {String} login_dts
 */

UserLogin.prototype['login_dts'] = undefined;
/**
 * User Agent
 * @member {String} user_agent
 */

UserLogin.prototype['user_agent'] = undefined;
var _default = UserLogin;
exports["default"] = _default;