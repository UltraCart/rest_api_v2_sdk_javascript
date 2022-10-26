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
 * The IntegrationLogFile model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogFile
 * @version 4.0.74-RC
 */
var IntegrationLogFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationLogFile</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogFile
   */
  function IntegrationLogFile() {
    _classCallCheck(this, IntegrationLogFile);

    IntegrationLogFile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationLogFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationLogFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogFile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogFile} The populated <code>IntegrationLogFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationLogFile();

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IntegrationLogFile;
}();
/**
 * @member {String} mime_type
 */


IntegrationLogFile.prototype['mime_type'] = undefined;
/**
 * @member {String} name
 */

IntegrationLogFile.prototype['name'] = undefined;
/**
 * @member {Number} size
 */

IntegrationLogFile.prototype['size'] = undefined;
/**
 * @member {String} uuid
 */

IntegrationLogFile.prototype['uuid'] = undefined;
var _default = IntegrationLogFile;
exports["default"] = _default;