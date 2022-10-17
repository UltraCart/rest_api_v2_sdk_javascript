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
 * The ResultSet model module.
 * @module com.ultracart.admin.v2.models/ResultSet
 * @version 4.0.73-RC
 */
var ResultSet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResultSet</code>.
   * @alias module:com.ultracart.admin.v2.models/ResultSet
   */
  function ResultSet() {
    _classCallCheck(this, ResultSet);

    ResultSet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResultSet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResultSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ResultSet} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ResultSet} The populated <code>ResultSet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResultSet();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('more')) {
          obj['more'] = _ApiClient["default"].convertToType(data['more'], 'Boolean');
        }

        if (data.hasOwnProperty('next_offset')) {
          obj['next_offset'] = _ApiClient["default"].convertToType(data['next_offset'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('total_records')) {
          obj['total_records'] = _ApiClient["default"].convertToType(data['total_records'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ResultSet;
}();
/**
 * Number of results in this set
 * @member {Number} count
 */


ResultSet.prototype['count'] = undefined;
/**
 * Maximum number of results that can be returned in a set
 * @member {Number} limit
 */

ResultSet.prototype['limit'] = undefined;
/**
 * True if there are more results to query
 * @member {Boolean} more
 */

ResultSet.prototype['more'] = undefined;
/**
 * The next offset that you should query to retrieve more results
 * @member {Number} next_offset
 */

ResultSet.prototype['next_offset'] = undefined;
/**
 * Offset of this result set (zero based)
 * @member {Number} offset
 */

ResultSet.prototype['offset'] = undefined;
/**
 * The total number of records in the result set.  May be null if the number is not known and the client should continue iterating as long as more is true.
 * @member {Number} total_records
 */

ResultSet.prototype['total_records'] = undefined;
var _default = ResultSet;
exports["default"] = _default;