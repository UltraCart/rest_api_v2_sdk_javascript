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
 * The LibraryItemScreenshot model module.
 * @module com.ultracart.admin.v2.models/LibraryItemScreenshot
 * @version 4.0.138
 */
var LibraryItemScreenshot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItemScreenshot</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemScreenshot
   */
  function LibraryItemScreenshot() {
    _classCallCheck(this, LibraryItemScreenshot);

    LibraryItemScreenshot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryItemScreenshot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryItemScreenshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemScreenshot} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemScreenshot} The populated <code>LibraryItemScreenshot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItemScreenshot();

        if (data.hasOwnProperty('default_url')) {
          obj['default_url'] = _ApiClient["default"].convertToType(data['default_url'], 'Boolean');
        }

        if (data.hasOwnProperty('screenshot_url')) {
          obj['screenshot_url'] = _ApiClient["default"].convertToType(data['screenshot_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LibraryItemScreenshot;
}();
/**
 * @member {Boolean} default_url
 */


LibraryItemScreenshot.prototype['default_url'] = undefined;
/**
 * @member {String} screenshot_url
 */

LibraryItemScreenshot.prototype['screenshot_url'] = undefined;
var _default = LibraryItemScreenshot;
exports["default"] = _default;