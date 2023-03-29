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
 * The ScreenRecordingFilterStringSearch model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch
 * @version 4.0.143
 */
var ScreenRecordingFilterStringSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterStringSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch
   */
  function ScreenRecordingFilterStringSearch() {
    _classCallCheck(this, ScreenRecordingFilterStringSearch);

    ScreenRecordingFilterStringSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterStringSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterStringSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} The populated <code>ScreenRecordingFilterStringSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterStringSearch();

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

        if (data.hasOwnProperty('starts_with')) {
          obj['starts_with'] = _ApiClient["default"].convertToType(data['starts_with'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterStringSearch;
}();
/**
 * @member {Boolean} does_not_exist
 */


ScreenRecordingFilterStringSearch.prototype['does_not_exist'] = undefined;
/**
 * @member {Boolean} exists
 */

ScreenRecordingFilterStringSearch.prototype['exists'] = undefined;
/**
 * @member {String} is
 */

ScreenRecordingFilterStringSearch.prototype['is'] = undefined;
/**
 * @member {String} is_not
 */

ScreenRecordingFilterStringSearch.prototype['is_not'] = undefined;
/**
 * @member {String} starts_with
 */

ScreenRecordingFilterStringSearch.prototype['starts_with'] = undefined;
var _default = ScreenRecordingFilterStringSearch;
exports["default"] = _default;