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
 * The StateProvince model module.
 * @module com.ultracart.admin.v2.models/StateProvince
 * @version 4.0.49-RC
 */
var StateProvince = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StateProvince</code>.
   * @alias module:com.ultracart.admin.v2.models/StateProvince
   */
  function StateProvince() {
    _classCallCheck(this, StateProvince);

    StateProvince.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StateProvince, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StateProvince</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StateProvince} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StateProvince} The populated <code>StateProvince</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StateProvince();

        if (data.hasOwnProperty('abbreviation')) {
          obj['abbreviation'] = _ApiClient["default"].convertToType(data['abbreviation'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StateProvince;
}();
/**
 * abbreviation
 * @member {String} abbreviation
 */


StateProvince.prototype['abbreviation'] = undefined;
/**
 * name
 * @member {String} name
 */

StateProvince.prototype['name'] = undefined;
var _default = StateProvince;
exports["default"] = _default;