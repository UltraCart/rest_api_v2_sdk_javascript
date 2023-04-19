"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResultSet = _interopRequireDefault(require("./ResultSet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ResponseMetadata model module.
 * @module com.ultracart.admin.v2.models/ResponseMetadata
 * @version 4.0.147
 */
var ResponseMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseMetadata</code>.
   * @alias module:com.ultracart.admin.v2.models/ResponseMetadata
   */
  function ResponseMetadata() {
    _classCallCheck(this, ResponseMetadata);

    ResponseMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResponseMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ResponseMetadata} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ResponseMetadata} The populated <code>ResponseMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseMetadata();

        if (data.hasOwnProperty('payload_name')) {
          obj['payload_name'] = _ApiClient["default"].convertToType(data['payload_name'], 'String');
        }

        if (data.hasOwnProperty('result_set')) {
          obj['result_set'] = _ResultSet["default"].constructFromObject(data['result_set']);
        }
      }

      return obj;
    }
  }]);

  return ResponseMetadata;
}();
/**
 * Payload name
 * @member {String} payload_name
 */


ResponseMetadata.prototype['payload_name'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResultSet} result_set
 */

ResponseMetadata.prototype['result_set'] = undefined;
var _default = ResponseMetadata;
exports["default"] = _default;