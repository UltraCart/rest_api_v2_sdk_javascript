"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPartnerEstimateTaxResponse model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse
 * @version 4.0.162
 */
var ChannelPartnerEstimateTaxResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerEstimateTaxResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse
   */
  function ChannelPartnerEstimateTaxResponse() {
    _classCallCheck(this, ChannelPartnerEstimateTaxResponse);

    ChannelPartnerEstimateTaxResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerEstimateTaxResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerEstimateTaxResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse} The populated <code>ChannelPartnerEstimateTaxResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerEstimateTaxResponse();

        if (data.hasOwnProperty('arbitrary_tax')) {
          obj['arbitrary_tax'] = _ApiClient["default"].convertToType(data['arbitrary_tax'], 'Number');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
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

  return ChannelPartnerEstimateTaxResponse;
}();
/**
 * @member {Number} arbitrary_tax
 */


ChannelPartnerEstimateTaxResponse.prototype['arbitrary_tax'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

ChannelPartnerEstimateTaxResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

ChannelPartnerEstimateTaxResponse.prototype['metadata'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

ChannelPartnerEstimateTaxResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

ChannelPartnerEstimateTaxResponse.prototype['warning'] = undefined;
var _default = ChannelPartnerEstimateTaxResponse;
exports["default"] = _default;