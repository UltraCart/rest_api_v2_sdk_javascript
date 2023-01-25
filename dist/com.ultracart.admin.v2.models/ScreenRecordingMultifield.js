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
 * The ScreenRecordingMultifield model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingMultifield
 * @version 4.0.122-RC
 */
var ScreenRecordingMultifield = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingMultifield</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingMultifield
   */
  function ScreenRecordingMultifield() {
    _classCallCheck(this, ScreenRecordingMultifield);

    ScreenRecordingMultifield.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingMultifield, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingMultifield</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingMultifield} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingMultifield} The populated <code>ScreenRecordingMultifield</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingMultifield();

        if (data.hasOwnProperty('bd')) {
          obj['bd'] = _ApiClient["default"].convertToType(data['bd'], 'Number');
        }

        if (data.hasOwnProperty('bool')) {
          obj['bool'] = _ApiClient["default"].convertToType(data['bool'], 'Boolean');
        }

        if (data.hasOwnProperty('json')) {
          obj['json'] = _ApiClient["default"].convertToType(data['json'], 'String');
        }

        if (data.hasOwnProperty('num')) {
          obj['num'] = _ApiClient["default"].convertToType(data['num'], 'Number');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingMultifield;
}();
/**
 * @member {Number} bd
 */


ScreenRecordingMultifield.prototype['bd'] = undefined;
/**
 * @member {Boolean} bool
 */

ScreenRecordingMultifield.prototype['bool'] = undefined;
/**
 * @member {String} json
 */

ScreenRecordingMultifield.prototype['json'] = undefined;
/**
 * @member {Number} num
 */

ScreenRecordingMultifield.prototype['num'] = undefined;
/**
 * @member {String} text
 */

ScreenRecordingMultifield.prototype['text'] = undefined;
var _default = ScreenRecordingMultifield;
exports["default"] = _default;