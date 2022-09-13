"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilterRangeBigDecimal = _interopRequireDefault(require("./ScreenRecordingFilterRangeBigDecimal"));

var _ScreenRecordingFilterRangeInteger = _interopRequireDefault(require("./ScreenRecordingFilterRangeInteger"));

var _ScreenRecordingFilterStringSearch = _interopRequireDefault(require("./ScreenRecordingFilterStringSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingFilterPageViewEventParam model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam
 * @version 4.0.62-RC
 */
var ScreenRecordingFilterPageViewEventParam = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterPageViewEventParam</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam
   */
  function ScreenRecordingFilterPageViewEventParam() {
    _classCallCheck(this, ScreenRecordingFilterPageViewEventParam);

    ScreenRecordingFilterPageViewEventParam.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterPageViewEventParam, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterPageViewEventParam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam} The populated <code>ScreenRecordingFilterPageViewEventParam</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterPageViewEventParam();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value_bd')) {
          obj['value_bd'] = _ScreenRecordingFilterRangeBigDecimal["default"].constructFromObject(data['value_bd']);
        }

        if (data.hasOwnProperty('value_bool')) {
          obj['value_bool'] = _ApiClient["default"].convertToType(data['value_bool'], 'Boolean');
        }

        if (data.hasOwnProperty('value_num')) {
          obj['value_num'] = _ScreenRecordingFilterRangeInteger["default"].constructFromObject(data['value_num']);
        }

        if (data.hasOwnProperty('value_text')) {
          obj['value_text'] = _ScreenRecordingFilterStringSearch["default"].constructFromObject(data['value_text']);
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterPageViewEventParam;
}();
/**
 * @member {String} name
 */


ScreenRecordingFilterPageViewEventParam.prototype['name'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} value_bd
 */

ScreenRecordingFilterPageViewEventParam.prototype['value_bd'] = undefined;
/**
 * @member {Boolean} value_bool
 */

ScreenRecordingFilterPageViewEventParam.prototype['value_bool'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} value_num
 */

ScreenRecordingFilterPageViewEventParam.prototype['value_num'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} value_text
 */

ScreenRecordingFilterPageViewEventParam.prototype['value_text'] = undefined;
var _default = ScreenRecordingFilterPageViewEventParam;
exports["default"] = _default;