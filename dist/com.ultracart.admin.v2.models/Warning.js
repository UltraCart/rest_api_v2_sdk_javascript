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
 * The Warning model module.
 * @module com.ultracart.admin.v2.models/Warning
 * @version 4.0.101-RC
 */
var Warning = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Warning</code>.
   * @alias module:com.ultracart.admin.v2.models/Warning
   */
  function Warning() {
    _classCallCheck(this, Warning);

    Warning.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Warning, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Warning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Warning} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Warning} The populated <code>Warning</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Warning();

        if (data.hasOwnProperty('more_info')) {
          obj['more_info'] = _ApiClient["default"].convertToType(data['more_info'], 'String');
        }

        if (data.hasOwnProperty('warning_message')) {
          obj['warning_message'] = _ApiClient["default"].convertToType(data['warning_message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Warning;
}();
/**
 * Additional information often a link to additional documentation
 * @member {String} more_info
 */


Warning.prototype['more_info'] = undefined;
/**
 * A technical message meant to be read by a developer
 * @member {String} warning_message
 */

Warning.prototype['warning_message'] = undefined;
var _default = Warning;
exports["default"] = _default;