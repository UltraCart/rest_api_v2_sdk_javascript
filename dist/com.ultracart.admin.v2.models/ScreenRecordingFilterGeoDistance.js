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
 * The ScreenRecordingFilterGeoDistance model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance
 * @version 4.0.190
 */
var ScreenRecordingFilterGeoDistance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterGeoDistance</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance
   */
  function ScreenRecordingFilterGeoDistance() {
    _classCallCheck(this, ScreenRecordingFilterGeoDistance);

    ScreenRecordingFilterGeoDistance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterGeoDistance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterGeoDistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} The populated <code>ScreenRecordingFilterGeoDistance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterGeoDistance();

        if (data.hasOwnProperty('distance')) {
          obj['distance'] = _ApiClient["default"].convertToType(data['distance'], 'Number');
        }

        if (data.hasOwnProperty('distance_uom')) {
          obj['distance_uom'] = _ApiClient["default"].convertToType(data['distance_uom'], 'String');
        }

        if (data.hasOwnProperty('from_address')) {
          obj['from_address'] = _ApiClient["default"].convertToType(data['from_address'], 'String');
        }

        if (data.hasOwnProperty('lat')) {
          obj['lat'] = _ApiClient["default"].convertToType(data['lat'], 'Number');
        }

        if (data.hasOwnProperty('lon')) {
          obj['lon'] = _ApiClient["default"].convertToType(data['lon'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterGeoDistance;
}();
/**
 * @member {Number} distance
 */


ScreenRecordingFilterGeoDistance.prototype['distance'] = undefined;
/**
 * @member {String} distance_uom
 */

ScreenRecordingFilterGeoDistance.prototype['distance_uom'] = undefined;
/**
 * @member {String} from_address
 */

ScreenRecordingFilterGeoDistance.prototype['from_address'] = undefined;
/**
 * @member {Number} lat
 */

ScreenRecordingFilterGeoDistance.prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

ScreenRecordingFilterGeoDistance.prototype['lon'] = undefined;
var _default = ScreenRecordingFilterGeoDistance;
exports["default"] = _default;