"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportDataSetRow = _interopRequireDefault(require("./ReportDataSetRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReportDataSetPage model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetPage
 * @version 4.0.168
 */
var ReportDataSetPage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportDataSetPage</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetPage
   */
  function ReportDataSetPage() {
    _classCallCheck(this, ReportDataSetPage);

    ReportDataSetPage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportDataSetPage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportDataSetPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetPage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetPage} The populated <code>ReportDataSetPage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportDataSetPage();

        if (data.hasOwnProperty('data_set_uuid')) {
          obj['data_set_uuid'] = _ApiClient["default"].convertToType(data['data_set_uuid'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('next_page_token')) {
          obj['next_page_token'] = _ApiClient["default"].convertToType(data['next_page_token'], 'String');
        }

        if (data.hasOwnProperty('next_start_index')) {
          obj['next_start_index'] = _ApiClient["default"].convertToType(data['next_start_index'], 'Number');
        }

        if (data.hasOwnProperty('page_number')) {
          obj['page_number'] = _ApiClient["default"].convertToType(data['page_number'], 'Number');
        }

        if (data.hasOwnProperty('row_count')) {
          obj['row_count'] = _ApiClient["default"].convertToType(data['row_count'], 'Number');
        }

        if (data.hasOwnProperty('rows')) {
          obj['rows'] = _ApiClient["default"].convertToType(data['rows'], [_ReportDataSetRow["default"]]);
        }

        if (data.hasOwnProperty('rows_s3_url')) {
          obj['rows_s3_url'] = _ApiClient["default"].convertToType(data['rows_s3_url'], 'String');
        }

        if (data.hasOwnProperty('start_index')) {
          obj['start_index'] = _ApiClient["default"].convertToType(data['start_index'], 'Number');
        }

        if (data.hasOwnProperty('table_id')) {
          obj['table_id'] = _ApiClient["default"].convertToType(data['table_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReportDataSetPage;
}();
/**
 * A unique identifier assigned to the data set that is returned.
 * @member {String} data_set_uuid
 */


ReportDataSetPage.prototype['data_set_uuid'] = undefined;
/**
 * Merchant that owns this data set
 * @member {String} merchant_id
 */

ReportDataSetPage.prototype['merchant_id'] = undefined;
/**
 * @member {String} next_page_token
 */

ReportDataSetPage.prototype['next_page_token'] = undefined;
/**
 * @member {Number} next_start_index
 */

ReportDataSetPage.prototype['next_start_index'] = undefined;
/**
 * @member {Number} page_number
 */

ReportDataSetPage.prototype['page_number'] = undefined;
/**
 * @member {Number} row_count
 */

ReportDataSetPage.prototype['row_count'] = undefined;
/**
 * Rows returned for the data set
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetRow>} rows
 */

ReportDataSetPage.prototype['rows'] = undefined;
/**
 * Signed S3 URL where the page rows can be downloaded from
 * @member {String} rows_s3_url
 */

ReportDataSetPage.prototype['rows_s3_url'] = undefined;
/**
 * Zero based index of the starting row
 * @member {Number} start_index
 */

ReportDataSetPage.prototype['start_index'] = undefined;
/**
 * The BigQuery destination table id that contains the result.
 * @member {String} table_id
 */

ReportDataSetPage.prototype['table_id'] = undefined;
var _default = ReportDataSetPage;
exports["default"] = _default;