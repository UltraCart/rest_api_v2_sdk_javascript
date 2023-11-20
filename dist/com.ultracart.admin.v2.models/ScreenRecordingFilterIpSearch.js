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
 * The ScreenRecordingFilterIpSearch model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch
 * @version 4.0.189
 */
var ScreenRecordingFilterIpSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterIpSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch
   */
  function ScreenRecordingFilterIpSearch() {
    _classCallCheck(this, ScreenRecordingFilterIpSearch);

    ScreenRecordingFilterIpSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterIpSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterIpSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} The populated <code>ScreenRecordingFilterIpSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterIpSearch();

        if (data.hasOwnProperty('does_not_exist')) {
          obj['does_not_exist'] = _ApiClient["default"].convertToType(data['does_not_exist'], 'Boolean');
        }

        if (data.hasOwnProperty('exists')) {
          obj['exists'] = _ApiClient["default"].convertToType(data['exists'], 'Boolean');
        }

        if (data.hasOwnProperty('is')) {
          obj['is'] = _ApiClient["default"].convertToType(data['is'], 'String');
        }

        if (data.hasOwnProperty('is_not')) {
          obj['is_not'] = _ApiClient["default"].convertToType(data['is_not'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterIpSearch;
}();
/**
 * @member {Boolean} does_not_exist
 */


ScreenRecordingFilterIpSearch.prototype['does_not_exist'] = undefined;
/**
 * @member {Boolean} exists
 */

ScreenRecordingFilterIpSearch.prototype['exists'] = undefined;
/**
 * @member {String} is
 */

ScreenRecordingFilterIpSearch.prototype['is'] = undefined;
/**
 * @member {String} is_not
 */

ScreenRecordingFilterIpSearch.prototype['is_not'] = undefined;
var _default = ScreenRecordingFilterIpSearch;
exports["default"] = _default;