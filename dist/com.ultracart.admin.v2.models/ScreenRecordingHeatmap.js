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
 * The ScreenRecordingHeatmap model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmap
 * @version 4.0.123-RC
 */
var ScreenRecordingHeatmap = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingHeatmap</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmap
   */
  function ScreenRecordingHeatmap() {
    _classCallCheck(this, ScreenRecordingHeatmap);

    ScreenRecordingHeatmap.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingHeatmap, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingHeatmap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmap} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmap} The populated <code>ScreenRecordingHeatmap</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingHeatmap();

        if (data.hasOwnProperty('large_click_thumbnail_url')) {
          obj['large_click_thumbnail_url'] = _ApiClient["default"].convertToType(data['large_click_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('large_click_url')) {
          obj['large_click_url'] = _ApiClient["default"].convertToType(data['large_click_url'], 'String');
        }

        if (data.hasOwnProperty('large_movement_thumbnail_url')) {
          obj['large_movement_thumbnail_url'] = _ApiClient["default"].convertToType(data['large_movement_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('large_movement_url')) {
          obj['large_movement_url'] = _ApiClient["default"].convertToType(data['large_movement_url'], 'String');
        }

        if (data.hasOwnProperty('large_regular_thumbnail_url')) {
          obj['large_regular_thumbnail_url'] = _ApiClient["default"].convertToType(data['large_regular_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('large_regular_url')) {
          obj['large_regular_url'] = _ApiClient["default"].convertToType(data['large_regular_url'], 'String');
        }

        if (data.hasOwnProperty('large_scroll_thumbnail_url')) {
          obj['large_scroll_thumbnail_url'] = _ApiClient["default"].convertToType(data['large_scroll_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('large_scroll_url')) {
          obj['large_scroll_url'] = _ApiClient["default"].convertToType(data['large_scroll_url'], 'String');
        }

        if (data.hasOwnProperty('medium_click_thumbnail_url')) {
          obj['medium_click_thumbnail_url'] = _ApiClient["default"].convertToType(data['medium_click_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('medium_click_url')) {
          obj['medium_click_url'] = _ApiClient["default"].convertToType(data['medium_click_url'], 'String');
        }

        if (data.hasOwnProperty('medium_movement_thumbnail_url')) {
          obj['medium_movement_thumbnail_url'] = _ApiClient["default"].convertToType(data['medium_movement_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('medium_movement_url')) {
          obj['medium_movement_url'] = _ApiClient["default"].convertToType(data['medium_movement_url'], 'String');
        }

        if (data.hasOwnProperty('medium_regular_thumbnail_url')) {
          obj['medium_regular_thumbnail_url'] = _ApiClient["default"].convertToType(data['medium_regular_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('medium_regular_url')) {
          obj['medium_regular_url'] = _ApiClient["default"].convertToType(data['medium_regular_url'], 'String');
        }

        if (data.hasOwnProperty('medium_scroll_thumbnail_url')) {
          obj['medium_scroll_thumbnail_url'] = _ApiClient["default"].convertToType(data['medium_scroll_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('medium_scroll_url')) {
          obj['medium_scroll_url'] = _ApiClient["default"].convertToType(data['medium_scroll_url'], 'String');
        }

        if (data.hasOwnProperty('small_click_thumbnail_url')) {
          obj['small_click_thumbnail_url'] = _ApiClient["default"].convertToType(data['small_click_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('small_click_url')) {
          obj['small_click_url'] = _ApiClient["default"].convertToType(data['small_click_url'], 'String');
        }

        if (data.hasOwnProperty('small_movement_thumbnail_url')) {
          obj['small_movement_thumbnail_url'] = _ApiClient["default"].convertToType(data['small_movement_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('small_movement_url')) {
          obj['small_movement_url'] = _ApiClient["default"].convertToType(data['small_movement_url'], 'String');
        }

        if (data.hasOwnProperty('small_regular_thumbnail_url')) {
          obj['small_regular_thumbnail_url'] = _ApiClient["default"].convertToType(data['small_regular_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('small_regular_url')) {
          obj['small_regular_url'] = _ApiClient["default"].convertToType(data['small_regular_url'], 'String');
        }

        if (data.hasOwnProperty('small_scroll_thumbnail_url')) {
          obj['small_scroll_thumbnail_url'] = _ApiClient["default"].convertToType(data['small_scroll_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('small_scroll_url')) {
          obj['small_scroll_url'] = _ApiClient["default"].convertToType(data['small_scroll_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingHeatmap;
}();
/**
 * @member {String} large_click_thumbnail_url
 */


ScreenRecordingHeatmap.prototype['large_click_thumbnail_url'] = undefined;
/**
 * @member {String} large_click_url
 */

ScreenRecordingHeatmap.prototype['large_click_url'] = undefined;
/**
 * @member {String} large_movement_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['large_movement_thumbnail_url'] = undefined;
/**
 * @member {String} large_movement_url
 */

ScreenRecordingHeatmap.prototype['large_movement_url'] = undefined;
/**
 * @member {String} large_regular_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['large_regular_thumbnail_url'] = undefined;
/**
 * @member {String} large_regular_url
 */

ScreenRecordingHeatmap.prototype['large_regular_url'] = undefined;
/**
 * @member {String} large_scroll_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['large_scroll_thumbnail_url'] = undefined;
/**
 * @member {String} large_scroll_url
 */

ScreenRecordingHeatmap.prototype['large_scroll_url'] = undefined;
/**
 * @member {String} medium_click_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['medium_click_thumbnail_url'] = undefined;
/**
 * @member {String} medium_click_url
 */

ScreenRecordingHeatmap.prototype['medium_click_url'] = undefined;
/**
 * @member {String} medium_movement_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['medium_movement_thumbnail_url'] = undefined;
/**
 * @member {String} medium_movement_url
 */

ScreenRecordingHeatmap.prototype['medium_movement_url'] = undefined;
/**
 * @member {String} medium_regular_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['medium_regular_thumbnail_url'] = undefined;
/**
 * @member {String} medium_regular_url
 */

ScreenRecordingHeatmap.prototype['medium_regular_url'] = undefined;
/**
 * @member {String} medium_scroll_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['medium_scroll_thumbnail_url'] = undefined;
/**
 * @member {String} medium_scroll_url
 */

ScreenRecordingHeatmap.prototype['medium_scroll_url'] = undefined;
/**
 * @member {String} small_click_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['small_click_thumbnail_url'] = undefined;
/**
 * @member {String} small_click_url
 */

ScreenRecordingHeatmap.prototype['small_click_url'] = undefined;
/**
 * @member {String} small_movement_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['small_movement_thumbnail_url'] = undefined;
/**
 * @member {String} small_movement_url
 */

ScreenRecordingHeatmap.prototype['small_movement_url'] = undefined;
/**
 * @member {String} small_regular_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['small_regular_thumbnail_url'] = undefined;
/**
 * @member {String} small_regular_url
 */

ScreenRecordingHeatmap.prototype['small_regular_url'] = undefined;
/**
 * @member {String} small_scroll_thumbnail_url
 */

ScreenRecordingHeatmap.prototype['small_scroll_thumbnail_url'] = undefined;
/**
 * @member {String} small_scroll_url
 */

ScreenRecordingHeatmap.prototype['small_scroll_url'] = undefined;
var _default = ScreenRecordingHeatmap;
exports["default"] = _default;