"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportPageFilter = _interopRequireDefault(require("./ReportPageFilter"));

var _ReportPageVisualization = _interopRequireDefault(require("./ReportPageVisualization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportPage model module.
 * @module com.ultracart.admin.v2.models/ReportPage
 * @version 4.0.183
 */
var ReportPage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportPage</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPage
   */
  function ReportPage() {
    _classCallCheck(this, ReportPage);

    ReportPage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportPage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPage} The populated <code>ReportPage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportPage();

        if (data.hasOwnProperty('filters')) {
          obj['filters'] = _ApiClient["default"].convertToType(data['filters'], [_ReportPageFilter["default"]]);
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('settings')) {
          obj['settings'] = _ApiClient["default"].convertToType(data['settings'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('visualizations')) {
          obj['visualizations'] = _ApiClient["default"].convertToType(data['visualizations'], [_ReportPageVisualization["default"]]);
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReportPage;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageFilter>} filters
 */


ReportPage.prototype['filters'] = undefined;
/**
 * Height of the report page in inches
 * @member {Number} height
 */

ReportPage.prototype['height'] = undefined;
/**
 * A JSON representation of the settings for this report
 * @member {String} settings
 */

ReportPage.prototype['settings'] = undefined;
/**
 * @member {String} title
 */

ReportPage.prototype['title'] = undefined;
/**
 * Visualizations on the report page.
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualization>} visualizations
 */

ReportPage.prototype['visualizations'] = undefined;
/**
 * Width of the report page in inches
 * @member {Number} width
 */

ReportPage.prototype['width'] = undefined;
var _default = ReportPage;
exports["default"] = _default;