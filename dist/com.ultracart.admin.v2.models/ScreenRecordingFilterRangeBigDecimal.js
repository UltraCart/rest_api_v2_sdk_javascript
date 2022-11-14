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
 * The ScreenRecordingFilterRangeBigDecimal model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal
 * @version 4.0.79-RC
 */
var ScreenRecordingFilterRangeBigDecimal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterRangeBigDecimal</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal
   */
  function ScreenRecordingFilterRangeBigDecimal() {
    _classCallCheck(this, ScreenRecordingFilterRangeBigDecimal);

    ScreenRecordingFilterRangeBigDecimal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterRangeBigDecimal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterRangeBigDecimal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} The populated <code>ScreenRecordingFilterRangeBigDecimal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterRangeBigDecimal();

        if (data.hasOwnProperty('eq')) {
          obj['eq'] = _ApiClient["default"].convertToType(data['eq'], 'Number');
        }

        if (data.hasOwnProperty('gt')) {
          obj['gt'] = _ApiClient["default"].convertToType(data['gt'], 'Number');
        }

        if (data.hasOwnProperty('gte')) {
          obj['gte'] = _ApiClient["default"].convertToType(data['gte'], 'Number');
        }

        if (data.hasOwnProperty('lt')) {
          obj['lt'] = _ApiClient["default"].convertToType(data['lt'], 'Number');
        }

        if (data.hasOwnProperty('lte')) {
          obj['lte'] = _ApiClient["default"].convertToType(data['lte'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterRangeBigDecimal;
}();
/**
 * @member {Number} eq
 */


ScreenRecordingFilterRangeBigDecimal.prototype['eq'] = undefined;
/**
 * @member {Number} gt
 */

ScreenRecordingFilterRangeBigDecimal.prototype['gt'] = undefined;
/**
 * @member {Number} gte
 */

ScreenRecordingFilterRangeBigDecimal.prototype['gte'] = undefined;
/**
 * @member {Number} lt
 */

ScreenRecordingFilterRangeBigDecimal.prototype['lt'] = undefined;
/**
 * @member {Number} lte
 */

ScreenRecordingFilterRangeBigDecimal.prototype['lte'] = undefined;
var _default = ScreenRecordingFilterRangeBigDecimal;
exports["default"] = _default;