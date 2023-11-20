"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BrowserDevice = _interopRequireDefault(require("./BrowserDevice"));

var _BrowserOS = _interopRequireDefault(require("./BrowserOS"));

var _BrowserUserAgent = _interopRequireDefault(require("./BrowserUserAgent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Browser model module.
 * @module com.ultracart.admin.v2.models/Browser
 * @version 4.0.190
 */
var Browser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Browser</code>.
   * @alias module:com.ultracart.admin.v2.models/Browser
   */
  function Browser() {
    _classCallCheck(this, Browser);

    Browser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Browser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Browser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Browser} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Browser} The populated <code>Browser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Browser();

        if (data.hasOwnProperty('device')) {
          obj['device'] = _BrowserDevice["default"].constructFromObject(data['device']);
        }

        if (data.hasOwnProperty('os')) {
          obj['os'] = _BrowserOS["default"].constructFromObject(data['os']);
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _BrowserUserAgent["default"].constructFromObject(data['user_agent']);
        }
      }

      return obj;
    }
  }]);

  return Browser;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/BrowserDevice} device
 */


Browser.prototype['device'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/BrowserOS} os
 */

Browser.prototype['os'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/BrowserUserAgent} user_agent
 */

Browser.prototype['user_agent'] = undefined;
var _default = Browser;
exports["default"] = _default;