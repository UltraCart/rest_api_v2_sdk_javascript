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
 * The EmailClick model module.
 * @module com.ultracart.admin.v2.models/EmailClick
 * @version 4.0.55-RC
 */
var EmailClick = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailClick</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailClick
   */
  function EmailClick() {
    _classCallCheck(this, EmailClick);

    EmailClick.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailClick, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailClick</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailClick} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailClick} The populated <code>EmailClick</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailClick();

        if (data.hasOwnProperty('click_count')) {
          obj['click_count'] = _ApiClient["default"].convertToType(data['click_count'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailClick;
}();
/**
 * Click Count
 * @member {Number} click_count
 */


EmailClick.prototype['click_count'] = undefined;
/**
 * url
 * @member {String} url
 */

EmailClick.prototype['url'] = undefined;
var _default = EmailClick;
exports["default"] = _default;