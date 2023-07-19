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
 * The ItemContentAssignment model module.
 * @module com.ultracart.admin.v2.models/ItemContentAssignment
 * @version 4.0.167
 */
var ItemContentAssignment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemContentAssignment</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContentAssignment
   */
  function ItemContentAssignment() {
    _classCallCheck(this, ItemContentAssignment);

    ItemContentAssignment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemContentAssignment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemContentAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentAssignment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentAssignment} The populated <code>ItemContentAssignment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemContentAssignment();

        if (data.hasOwnProperty('default_assignment')) {
          obj['default_assignment'] = _ApiClient["default"].convertToType(data['default_assignment'], 'Boolean');
        }

        if (data.hasOwnProperty('group_oid')) {
          obj['group_oid'] = _ApiClient["default"].convertToType(data['group_oid'], 'Number');
        }

        if (data.hasOwnProperty('group_path')) {
          obj['group_path'] = _ApiClient["default"].convertToType(data['group_path'], 'String');
        }

        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
        }

        if (data.hasOwnProperty('sort_order')) {
          obj['sort_order'] = _ApiClient["default"].convertToType(data['sort_order'], 'Number');
        }

        if (data.hasOwnProperty('url_part')) {
          obj['url_part'] = _ApiClient["default"].convertToType(data['url_part'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemContentAssignment;
}();
/**
 * True if this group is the default assignment for this item
 * @member {Boolean} default_assignment
 */


ItemContentAssignment.prototype['default_assignment'] = undefined;
/**
 * Page (group) object identifier
 * @member {Number} group_oid
 */

ItemContentAssignment.prototype['group_oid'] = undefined;
/**
 * Page (group) path
 * @member {String} group_path
 */

ItemContentAssignment.prototype['group_path'] = undefined;
/**
 * StoreFront host name
 * @member {String} host
 */

ItemContentAssignment.prototype['host'] = undefined;
/**
 * Sort order (optional)
 * @member {Number} sort_order
 */

ItemContentAssignment.prototype['sort_order'] = undefined;
/**
 * URL part if the item id is not used
 * @member {String} url_part
 */

ItemContentAssignment.prototype['url_part'] = undefined;
var _default = ItemContentAssignment;
exports["default"] = _default;