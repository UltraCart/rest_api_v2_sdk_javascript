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
 * The Error model module.
 * @module com.ultracart.admin.v2.models/Error
 * @version 4.0.23-RC
 */
var Error = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:com.ultracart.admin.v2.models/Error
   */
  function Error() {
    _classCallCheck(this, Error);

    Error.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Error, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Error} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Error} The populated <code>Error</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Error();

        if (data.hasOwnProperty('developer_message')) {
          obj['developer_message'] = _ApiClient["default"].convertToType(data['developer_message'], 'String');
        }

        if (data.hasOwnProperty('error_code')) {
          obj['error_code'] = _ApiClient["default"].convertToType(data['error_code'], 'String');
        }

        if (data.hasOwnProperty('more_info')) {
          obj['more_info'] = _ApiClient["default"].convertToType(data['more_info'], 'String');
        }

        if (data.hasOwnProperty('object_id')) {
          obj['object_id'] = _ApiClient["default"].convertToType(data['object_id'], 'String');
        }

        if (data.hasOwnProperty('user_message')) {
          obj['user_message'] = _ApiClient["default"].convertToType(data['user_message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Error;
}();
/**
 * A technical message meant to be read by a developer
 * @member {String} developer_message
 */


Error.prototype['developer_message'] = undefined;
/**
 * HTTP status code
 * @member {String} error_code
 */

Error.prototype['error_code'] = undefined;
/**
 * Additional information often a link to additional documentation
 * @member {String} more_info
 */

Error.prototype['more_info'] = undefined;
/**
 * Object id that the error is associated with
 * @member {String} object_id
 */

Error.prototype['object_id'] = undefined;
/**
 * An end-user friendly message suitable for display to the customer
 * @member {String} user_message
 */

Error.prototype['user_message'] = undefined;
var _default = Error;
exports["default"] = _default;