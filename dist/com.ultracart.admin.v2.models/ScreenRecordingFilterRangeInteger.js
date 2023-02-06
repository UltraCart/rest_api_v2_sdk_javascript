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
 * The ScreenRecordingFilterRangeInteger model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger
 * @version 4.0.129
 */
var ScreenRecordingFilterRangeInteger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterRangeInteger</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger
   */
  function ScreenRecordingFilterRangeInteger() {
    _classCallCheck(this, ScreenRecordingFilterRangeInteger);

    ScreenRecordingFilterRangeInteger.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterRangeInteger, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterRangeInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} The populated <code>ScreenRecordingFilterRangeInteger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterRangeInteger();

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

  return ScreenRecordingFilterRangeInteger;
}();
/**
 * @member {Number} eq
 */


ScreenRecordingFilterRangeInteger.prototype['eq'] = undefined;
/**
 * @member {Number} gt
 */

ScreenRecordingFilterRangeInteger.prototype['gt'] = undefined;
/**
 * @member {Number} gte
 */

ScreenRecordingFilterRangeInteger.prototype['gte'] = undefined;
/**
 * @member {Number} lt
 */

ScreenRecordingFilterRangeInteger.prototype['lt'] = undefined;
/**
 * @member {Number} lte
 */

ScreenRecordingFilterRangeInteger.prototype['lte'] = undefined;
var _default = ScreenRecordingFilterRangeInteger;
exports["default"] = _default;