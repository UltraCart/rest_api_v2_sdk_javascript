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
 * The ThumbnailParametersRequest model module.
 * @module com.ultracart.admin.v2.models/ThumbnailParametersRequest
 * @version 4.0.95-RC
 */
var ThumbnailParametersRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThumbnailParametersRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ThumbnailParametersRequest
   */
  function ThumbnailParametersRequest() {
    _classCallCheck(this, ThumbnailParametersRequest);

    ThumbnailParametersRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThumbnailParametersRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThumbnailParametersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ThumbnailParametersRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ThumbnailParametersRequest} The populated <code>ThumbnailParametersRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThumbnailParametersRequest();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('pngFormat')) {
          obj['pngFormat'] = _ApiClient["default"].convertToType(data['pngFormat'], 'Boolean');
        }

        if (data.hasOwnProperty('squareThumbnail')) {
          obj['squareThumbnail'] = _ApiClient["default"].convertToType(data['squareThumbnail'], 'Boolean');
        }

        if (data.hasOwnProperty('webp')) {
          obj['webp'] = _ApiClient["default"].convertToType(data['webp'], 'Boolean');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ThumbnailParametersRequest;
}();
/**
 * @member {Number} height
 */


ThumbnailParametersRequest.prototype['height'] = undefined;
/**
 * @member {Boolean} pngFormat
 */

ThumbnailParametersRequest.prototype['pngFormat'] = undefined;
/**
 * @member {Boolean} squareThumbnail
 */

ThumbnailParametersRequest.prototype['squareThumbnail'] = undefined;
/**
 * @member {Boolean} webp
 */

ThumbnailParametersRequest.prototype['webp'] = undefined;
/**
 * @member {Number} width
 */

ThumbnailParametersRequest.prototype['width'] = undefined;
var _default = ThumbnailParametersRequest;
exports["default"] = _default;