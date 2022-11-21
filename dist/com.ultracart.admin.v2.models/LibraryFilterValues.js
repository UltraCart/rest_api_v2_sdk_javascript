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
 * The LibraryFilterValues model module.
 * @module com.ultracart.admin.v2.models/LibraryFilterValues
 * @version 4.0.86-RC
 */
var LibraryFilterValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryFilterValues</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryFilterValues
   */
  function LibraryFilterValues() {
    _classCallCheck(this, LibraryFilterValues);

    LibraryFilterValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryFilterValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryFilterValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryFilterValues} The populated <code>LibraryFilterValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryFilterValues();

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], ['String']);
        }

        if (data.hasOwnProperty('industries')) {
          obj['industries'] = _ApiClient["default"].convertToType(data['industries'], ['String']);
        }

        if (data.hasOwnProperty('styles')) {
          obj['styles'] = _ApiClient["default"].convertToType(data['styles'], ['String']);
        }

        if (data.hasOwnProperty('types')) {
          obj['types'] = _ApiClient["default"].convertToType(data['types'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return LibraryFilterValues;
}();
/**
 * @member {Array.<String>} categories
 */


LibraryFilterValues.prototype['categories'] = undefined;
/**
 * @member {Array.<String>} industries
 */

LibraryFilterValues.prototype['industries'] = undefined;
/**
 * @member {Array.<String>} styles
 */

LibraryFilterValues.prototype['styles'] = undefined;
/**
 * @member {Array.<String>} types
 */

LibraryFilterValues.prototype['types'] = undefined;
var _default = LibraryFilterValues;
exports["default"] = _default;