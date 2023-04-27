"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HitPageViewMetaData = _interopRequireDefault(require("./HitPageViewMetaData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The HitPageView model module.
 * @module com.ultracart.admin.v2.models/HitPageView
 * @version 4.0.151
 */
var HitPageView = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HitPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/HitPageView
   */
  function HitPageView() {
    _classCallCheck(this, HitPageView);

    HitPageView.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HitPageView, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HitPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/HitPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/HitPageView} The populated <code>HitPageView</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HitPageView();

        if (data.hasOwnProperty('bounce')) {
          obj['bounce'] = _ApiClient["default"].convertToType(data['bounce'], 'Boolean');
        }

        if (data.hasOwnProperty('meta_data')) {
          obj['meta_data'] = _ApiClient["default"].convertToType(data['meta_data'], [_HitPageViewMetaData["default"]]);
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('prefetch')) {
          obj['prefetch'] = _ApiClient["default"].convertToType(data['prefetch'], 'Boolean');
        }

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('recording')) {
          obj['recording'] = _ApiClient["default"].convertToType(data['recording'], 'Boolean');
        }

        if (data.hasOwnProperty('redirect')) {
          obj['redirect'] = _ApiClient["default"].convertToType(data['redirect'], 'Boolean');
        }

        if (data.hasOwnProperty('referrer')) {
          obj['referrer'] = _ApiClient["default"].convertToType(data['referrer'], 'String');
        }

        if (data.hasOwnProperty('time_on_page')) {
          obj['time_on_page'] = _ApiClient["default"].convertToType(data['time_on_page'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HitPageView;
}();
/**
 * @member {Boolean} bounce
 */


HitPageView.prototype['bounce'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/HitPageViewMetaData>} meta_data
 */

HitPageView.prototype['meta_data'] = undefined;
/**
 * @member {String} method
 */

HitPageView.prototype['method'] = undefined;
/**
 * @member {Boolean} prefetch
 */

HitPageView.prototype['prefetch'] = undefined;
/**
 * @member {String} query
 */

HitPageView.prototype['query'] = undefined;
/**
 * @member {Boolean} recording
 */

HitPageView.prototype['recording'] = undefined;
/**
 * @member {Boolean} redirect
 */

HitPageView.prototype['redirect'] = undefined;
/**
 * @member {String} referrer
 */

HitPageView.prototype['referrer'] = undefined;
/**
 * @member {Number} time_on_page
 */

HitPageView.prototype['time_on_page'] = undefined;
/**
 * @member {String} title
 */

HitPageView.prototype['title'] = undefined;
/**
 * @member {String} url
 */

HitPageView.prototype['url'] = undefined;
var _default = HitPageView;
exports["default"] = _default;