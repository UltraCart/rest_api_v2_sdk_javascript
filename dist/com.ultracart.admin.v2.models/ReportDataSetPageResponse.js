"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ReportDataSetPage = _interopRequireDefault(require("./ReportDataSetPage"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSetPageResponse model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetPageResponse
 * @version 4.0.162
 */
var ReportDataSetPageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetPageResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetPageResponse
   */
  function ReportDataSetPageResponse() {
    _classCallCheck(this, ReportDataSetPageResponse);

    ReportDataSetPageResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetPageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetPageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetPageResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetPageResponse} The populated <code>ReportDataSetPageResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetPageResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ReportDataSetPage["default"].constructFromObject(data['page']);
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

  return ReportDataSetPageResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


ReportDataSetPageResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

ReportDataSetPageResponse.prototype['metadata'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ReportDataSetPage} page
 */

ReportDataSetPageResponse.prototype['page'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

ReportDataSetPageResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

ReportDataSetPageResponse.prototype['warning'] = undefined;
var _default = ReportDataSetPageResponse;
exports["default"] = _default;