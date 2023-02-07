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
 * The TempMultimedia model module.
 * @module com.ultracart.admin.v2.models/TempMultimedia
 * @version 4.0.131
 */
var TempMultimedia = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TempMultimedia</code>.
   * @alias module:com.ultracart.admin.v2.models/TempMultimedia
   */
  function TempMultimedia() {
    _classCallCheck(this, TempMultimedia);

    TempMultimedia.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TempMultimedia, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TempMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TempMultimedia} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TempMultimedia} The populated <code>TempMultimedia</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TempMultimedia();

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('multimedia_type')) {
          obj['multimedia_type'] = _ApiClient["default"].convertToType(data['multimedia_type'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('temp_multimedia_oid')) {
          obj['temp_multimedia_oid'] = _ApiClient["default"].convertToType(data['temp_multimedia_oid'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TempMultimedia;
}();
/**
 * Filename
 * @member {String} filename
 */


TempMultimedia.prototype['filename'] = undefined;
/**
 * Height
 * @member {Number} height
 */

TempMultimedia.prototype['height'] = undefined;
/**
 * Multimedia type
 * @member {module:com.ultracart.admin.v2.models/TempMultimedia.MultimediaTypeEnum} multimedia_type
 */

TempMultimedia.prototype['multimedia_type'] = undefined;
/**
 * Size
 * @member {Number} size
 */

TempMultimedia.prototype['size'] = undefined;
/**
 * Temporary multimedia object identifier
 * @member {Number} temp_multimedia_oid
 */

TempMultimedia.prototype['temp_multimedia_oid'] = undefined;
/**
 * URL
 * @member {String} url
 */

TempMultimedia.prototype['url'] = undefined;
/**
 * Width
 * @member {Number} width
 */

TempMultimedia.prototype['width'] = undefined;
/**
 * Allowed values for the <code>multimedia_type</code> property.
 * @enum {String}
 * @readonly
 */

TempMultimedia['MultimediaTypeEnum'] = {
  /**
   * value: "Image"
   * @const
   */
  "Image": "Image",

  /**
   * value: "PDF"
   * @const
   */
  "PDF": "PDF",

  /**
   * value: "Text"
   * @const
   */
  "Text": "Text",

  /**
   * value: "Video"
   * @const
   */
  "Video": "Video"
};
var _default = TempMultimedia;
exports["default"] = _default;