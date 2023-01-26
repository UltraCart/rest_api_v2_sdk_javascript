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
 * The ScreenRecordingStoreFront model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingStoreFront
 * @version 4.0.124-RC
 */
var ScreenRecordingStoreFront = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingStoreFront</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront
   */
  function ScreenRecordingStoreFront() {
    _classCallCheck(this, ScreenRecordingStoreFront);

    ScreenRecordingStoreFront.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingStoreFront, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingStoreFront</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront} The populated <code>ScreenRecordingStoreFront</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingStoreFront();

        if (data.hasOwnProperty('storefront_host_name')) {
          obj['storefront_host_name'] = _ApiClient["default"].convertToType(data['storefront_host_name'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingStoreFront;
}();
/**
 * @member {String} storefront_host_name
 */


ScreenRecordingStoreFront.prototype['storefront_host_name'] = undefined;
/**
 * @member {Number} storefront_oid
 */

ScreenRecordingStoreFront.prototype['storefront_oid'] = undefined;
var _default = ScreenRecordingStoreFront;
exports["default"] = _default;