"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSet = _interopRequireDefault(require("./ReportDataSet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportWebsocketEvent model module.
 * @module com.ultracart.admin.v2.models/ReportWebsocketEvent
 * @version 4.0.157
 */
var ReportWebsocketEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportWebsocketEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportWebsocketEvent
   */
  function ReportWebsocketEvent() {
    _classCallCheck(this, ReportWebsocketEvent);

    ReportWebsocketEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportWebsocketEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportWebsocketEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportWebsocketEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportWebsocketEvent} The populated <code>ReportWebsocketEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportWebsocketEvent();

        if (data.hasOwnProperty('event_type')) {
          obj['event_type'] = _ApiClient["default"].convertToType(data['event_type'], 'String');
        }

        if (data.hasOwnProperty('query_completion')) {
          obj['query_completion'] = _ReportDataSet["default"].constructFromObject(data['query_completion']);
        }
      }

      return obj;
    }
  }]);

  return ReportWebsocketEvent;
}();
/**
 * Event type
 * @member {module:com.ultracart.admin.v2.models/ReportWebsocketEvent.EventTypeEnum} event_type
 */


ReportWebsocketEvent.prototype['event_type'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ReportDataSet} query_completion
 */

ReportWebsocketEvent.prototype['query_completion'] = undefined;
/**
 * Allowed values for the <code>event_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportWebsocketEvent['EventTypeEnum'] = {
  /**
   * value: "ping"
   * @const
   */
  "ping": "ping",

  /**
   * value: "query completion"
   * @const
   */
  "query completion": "query completion"
};
var _default = ReportWebsocketEvent;
exports["default"] = _default;