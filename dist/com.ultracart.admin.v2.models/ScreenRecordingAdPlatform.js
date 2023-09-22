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
 * The ScreenRecordingAdPlatform model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingAdPlatform
 * @version 4.0.177
 */
var ScreenRecordingAdPlatform = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingAdPlatform</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform
   */
  function ScreenRecordingAdPlatform() {
    _classCallCheck(this, ScreenRecordingAdPlatform);

    ScreenRecordingAdPlatform.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingAdPlatform, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingAdPlatform</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform} The populated <code>ScreenRecordingAdPlatform</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingAdPlatform();

        if (data.hasOwnProperty('fbc')) {
          obj['fbc'] = _ApiClient["default"].convertToType(data['fbc'], 'String');
        }

        if (data.hasOwnProperty('fbclid')) {
          obj['fbclid'] = _ApiClient["default"].convertToType(data['fbclid'], 'String');
        }

        if (data.hasOwnProperty('fbp')) {
          obj['fbp'] = _ApiClient["default"].convertToType(data['fbp'], 'String');
        }

        if (data.hasOwnProperty('gacid')) {
          obj['gacid'] = _ApiClient["default"].convertToType(data['gacid'], 'String');
        }

        if (data.hasOwnProperty('glcid')) {
          obj['glcid'] = _ApiClient["default"].convertToType(data['glcid'], 'String');
        }

        if (data.hasOwnProperty('msclkid')) {
          obj['msclkid'] = _ApiClient["default"].convertToType(data['msclkid'], 'String');
        }

        if (data.hasOwnProperty('ttclid')) {
          obj['ttclid'] = _ApiClient["default"].convertToType(data['ttclid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingAdPlatform;
}();
/**
 * Facebook Click Id (Cookie)
 * @member {String} fbc
 */


ScreenRecordingAdPlatform.prototype['fbc'] = undefined;
/**
 * Facebook Click Id Parameter (Parameter)
 * @member {String} fbclid
 */

ScreenRecordingAdPlatform.prototype['fbclid'] = undefined;
/**
 * Facebook Browser Id (Cookie)
 * @member {String} fbp
 */

ScreenRecordingAdPlatform.prototype['fbp'] = undefined;
/**
 * Google Analytics CID (Cookie)
 * @member {String} gacid
 */

ScreenRecordingAdPlatform.prototype['gacid'] = undefined;
/**
 * Google Adwords Click Id (Parameter)
 * @member {String} glcid
 */

ScreenRecordingAdPlatform.prototype['glcid'] = undefined;
/**
 * Bing Click Id (Parameter
 * @member {String} msclkid
 */

ScreenRecordingAdPlatform.prototype['msclkid'] = undefined;
/**
 * TikTok Click Id (Parameter
 * @member {String} ttclid
 */

ScreenRecordingAdPlatform.prototype['ttclid'] = undefined;
var _default = ScreenRecordingAdPlatform;
exports["default"] = _default;