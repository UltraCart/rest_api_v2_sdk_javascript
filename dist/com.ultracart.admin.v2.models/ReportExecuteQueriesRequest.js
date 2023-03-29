"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSetQuery = _interopRequireDefault(require("./ReportDataSetQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportExecuteQueriesRequest model module.
 * @module com.ultracart.admin.v2.models/ReportExecuteQueriesRequest
 * @version 4.0.143
 */
var ReportExecuteQueriesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportExecuteQueriesRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest
   */
  function ReportExecuteQueriesRequest() {
    _classCallCheck(this, ReportExecuteQueriesRequest);

    ReportExecuteQueriesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportExecuteQueriesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportExecuteQueriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} The populated <code>ReportExecuteQueriesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportExecuteQueriesRequest();

        if (data.hasOwnProperty('client_uuid')) {
          obj['client_uuid'] = _ApiClient["default"].convertToType(data['client_uuid'], 'String');
        }

        if (data.hasOwnProperty('connection_id')) {
          obj['connection_id'] = _ApiClient["default"].convertToType(data['connection_id'], 'String');
        }

        if (data.hasOwnProperty('default_dataset_id')) {
          obj['default_dataset_id'] = _ApiClient["default"].convertToType(data['default_dataset_id'], 'String');
        }

        if (data.hasOwnProperty('default_project_id')) {
          obj['default_project_id'] = _ApiClient["default"].convertToType(data['default_project_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('queries')) {
          obj['queries'] = _ApiClient["default"].convertToType(data['queries'], [_ReportDataSetQuery["default"]]);
        }

        if (data.hasOwnProperty('security_level')) {
          obj['security_level'] = _ApiClient["default"].convertToType(data['security_level'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportExecuteQueriesRequest;
}();
/**
 * Unique UUID assigned to this client during the auth.  This will be used to locate the websocket connect id.
 * @member {String} client_uuid
 */


ReportExecuteQueriesRequest.prototype['client_uuid'] = undefined;
/**
 * The websocket connection id that should receive back notices of query completion.
 * @member {String} connection_id
 */

ReportExecuteQueriesRequest.prototype['connection_id'] = undefined;
/**
 * @member {String} default_dataset_id
 */

ReportExecuteQueriesRequest.prototype['default_dataset_id'] = undefined;
/**
 * @member {String} default_project_id
 */

ReportExecuteQueriesRequest.prototype['default_project_id'] = undefined;
/**
 * @member {String} merchant_id
 */

ReportExecuteQueriesRequest.prototype['merchant_id'] = undefined;
/**
 * An array of queries that we want the lambda function to execute.
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetQuery>} queries
 */

ReportExecuteQueriesRequest.prototype['queries'] = undefined;
/**
 * Security level to execute report under
 * @member {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest.SecurityLevelEnum} security_level
 */

ReportExecuteQueriesRequest.prototype['security_level'] = undefined;
/**
 * Allowed values for the <code>security_level</code> property.
 * @enum {String}
 * @readonly
 */

ReportExecuteQueriesRequest['SecurityLevelEnum'] = {
  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",

  /**
   * value: "low"
   * @const
   */
  "low": "low",

  /**
   * value: "medium"
   * @const
   */
  "medium": "medium",

  /**
   * value: "high"
   * @const
   */
  "high": "high"
};
var _default = ReportExecuteQueriesRequest;
exports["default"] = _default;