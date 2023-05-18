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
 * The ListSegmentMembership model module.
 * @module com.ultracart.admin.v2.models/ListSegmentMembership
 * @version 4.0.154
 */
var ListSegmentMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSegmentMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/ListSegmentMembership
   */
  function ListSegmentMembership() {
    _classCallCheck(this, ListSegmentMembership);

    ListSegmentMembership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSegmentMembership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListSegmentMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ListSegmentMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ListSegmentMembership} The populated <code>ListSegmentMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSegmentMembership();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSegmentMembership;
}();
/**
 * @member {String} name
 */


ListSegmentMembership.prototype['name'] = undefined;
/**
 * @member {String} type
 */

ListSegmentMembership.prototype['type'] = undefined;
/**
 * @member {String} uuid
 */

ListSegmentMembership.prototype['uuid'] = undefined;
var _default = ListSegmentMembership;
exports["default"] = _default;