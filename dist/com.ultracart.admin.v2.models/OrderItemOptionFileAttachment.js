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
 * The OrderItemOptionFileAttachment model module.
 * @module com.ultracart.admin.v2.models/OrderItemOptionFileAttachment
 * @version 4.0.173
 */
var OrderItemOptionFileAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderItemOptionFileAttachment</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment
   */
  function OrderItemOptionFileAttachment() {
    _classCallCheck(this, OrderItemOptionFileAttachment);

    OrderItemOptionFileAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderItemOptionFileAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderItemOptionFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} The populated <code>OrderItemOptionFileAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderItemOptionFileAttachment();

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderItemOptionFileAttachment;
}();
/**
 * Expiration date/time
 * @member {String} expiration_dts
 */


OrderItemOptionFileAttachment.prototype['expiration_dts'] = undefined;
/**
 * File name
 * @member {String} file_name
 */

OrderItemOptionFileAttachment.prototype['file_name'] = undefined;
/**
 * Mime type
 * @member {String} mime_type
 */

OrderItemOptionFileAttachment.prototype['mime_type'] = undefined;
/**
 * Size
 * @member {Number} size
 */

OrderItemOptionFileAttachment.prototype['size'] = undefined;
var _default = OrderItemOptionFileAttachment;
exports["default"] = _default;