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
 * The Metric model module.
 * @module com.ultracart.admin.v2.models/Metric
 * @version 4.0.110-RC
 */
var Metric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Metric</code>.
   * @alias module:com.ultracart.admin.v2.models/Metric
   */
  function Metric() {
    _classCallCheck(this, Metric);

    Metric.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Metric, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Metric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Metric} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Metric} The populated <code>Metric</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Metric();

        if (data.hasOwnProperty('all_time')) {
          obj['all_time'] = _ApiClient["default"].convertToType(data['all_time'], 'Number');
        }

        if (data.hasOwnProperty('all_time_formatted')) {
          obj['all_time_formatted'] = _ApiClient["default"].convertToType(data['all_time_formatted'], 'String');
        }

        if (data.hasOwnProperty('last_30')) {
          obj['last_30'] = _ApiClient["default"].convertToType(data['last_30'], 'Number');
        }

        if (data.hasOwnProperty('last_30_formatted')) {
          obj['last_30_formatted'] = _ApiClient["default"].convertToType(data['last_30_formatted'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('prior_30')) {
          obj['prior_30'] = _ApiClient["default"].convertToType(data['prior_30'], 'Number');
        }

        if (data.hasOwnProperty('prior_30_formatted')) {
          obj['prior_30_formatted'] = _ApiClient["default"].convertToType(data['prior_30_formatted'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Metric;
}();
/**
 * @member {Number} all_time
 */


Metric.prototype['all_time'] = undefined;
/**
 * @member {String} all_time_formatted
 */

Metric.prototype['all_time_formatted'] = undefined;
/**
 * @member {Number} last_30
 */

Metric.prototype['last_30'] = undefined;
/**
 * @member {String} last_30_formatted
 */

Metric.prototype['last_30_formatted'] = undefined;
/**
 * @member {String} name
 */

Metric.prototype['name'] = undefined;
/**
 * @member {Number} prior_30
 */

Metric.prototype['prior_30'] = undefined;
/**
 * @member {String} prior_30_formatted
 */

Metric.prototype['prior_30_formatted'] = undefined;
/**
 * @member {String} type
 */

Metric.prototype['type'] = undefined;
var _default = Metric;
exports["default"] = _default;