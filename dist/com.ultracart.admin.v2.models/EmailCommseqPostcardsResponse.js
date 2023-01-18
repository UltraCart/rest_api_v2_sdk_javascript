"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailCommseqPostcard = _interopRequireDefault(require("./EmailCommseqPostcard"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailCommseqPostcardsResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse
 * @version 4.0.115-RC
 */
var EmailCommseqPostcardsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqPostcardsResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse
   */
  function EmailCommseqPostcardsResponse() {
    _classCallCheck(this, EmailCommseqPostcardsResponse);

    EmailCommseqPostcardsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqPostcardsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqPostcardsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse} The populated <code>EmailCommseqPostcardsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqPostcardsResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('postcards')) {
          obj['postcards'] = _ApiClient["default"].convertToType(data['postcards'], [_EmailCommseqPostcard["default"]]);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqPostcardsResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


EmailCommseqPostcardsResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

EmailCommseqPostcardsResponse.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseqPostcard>} postcards
 */

EmailCommseqPostcardsResponse.prototype['postcards'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

EmailCommseqPostcardsResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

EmailCommseqPostcardsResponse.prototype['warning'] = undefined;
var _default = EmailCommseqPostcardsResponse;
exports["default"] = _default;