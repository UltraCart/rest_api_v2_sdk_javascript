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
 * The OrderEdiDocument model module.
 * @module com.ultracart.admin.v2.models/OrderEdiDocument
 * @version 4.0.180
 */
var OrderEdiDocument = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderEdiDocument</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderEdiDocument
   */
  function OrderEdiDocument() {
    _classCallCheck(this, OrderEdiDocument);

    OrderEdiDocument.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderEdiDocument, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderEdiDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderEdiDocument} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderEdiDocument} The populated <code>OrderEdiDocument</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderEdiDocument();

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('doc_dts')) {
          obj['doc_dts'] = _ApiClient["default"].convertToType(data['doc_dts'], 'String');
        }

        if (data.hasOwnProperty('document')) {
          obj['document'] = _ApiClient["default"].convertToType(data['document'], 'String');
        }

        if (data.hasOwnProperty('document_type_description')) {
          obj['document_type_description'] = _ApiClient["default"].convertToType(data['document_type_description'], 'String');
        }

        if (data.hasOwnProperty('document_type_number')) {
          obj['document_type_number'] = _ApiClient["default"].convertToType(data['document_type_number'], 'Number');
        }

        if (data.hasOwnProperty('external_id')) {
          obj['external_id'] = _ApiClient["default"].convertToType(data['external_id'], 'String');
        }

        if (data.hasOwnProperty('functional_acknowledgement')) {
          obj['functional_acknowledgement'] = _ApiClient["default"].convertToType(data['functional_acknowledgement'], 'String');
        }

        if (data.hasOwnProperty('functional_acknowledgement_dts')) {
          obj['functional_acknowledgement_dts'] = _ApiClient["default"].convertToType(data['functional_acknowledgement_dts'], 'String');
        }

        if (data.hasOwnProperty('functional_acknowledgement_pending')) {
          obj['functional_acknowledgement_pending'] = _ApiClient["default"].convertToType(data['functional_acknowledgement_pending'], 'Boolean');
        }

        if (data.hasOwnProperty('group_control_number')) {
          obj['group_control_number'] = _ApiClient["default"].convertToType(data['group_control_number'], 'Number');
        }

        if (data.hasOwnProperty('internal_id')) {
          obj['internal_id'] = _ApiClient["default"].convertToType(data['internal_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('test_mode')) {
          obj['test_mode'] = _ApiClient["default"].convertToType(data['test_mode'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderEdiDocument;
}();
/**
 * Direction the document flowed
 * @member {module:com.ultracart.admin.v2.models/OrderEdiDocument.DirectionEnum} direction
 */


OrderEdiDocument.prototype['direction'] = undefined;
/**
 * Date/time the document was created/received
 * @member {String} doc_dts
 */

OrderEdiDocument.prototype['doc_dts'] = undefined;
/**
 * @member {String} document
 */

OrderEdiDocument.prototype['document'] = undefined;
/**
 * @member {String} document_type_description
 */

OrderEdiDocument.prototype['document_type_description'] = undefined;
/**
 * @member {Number} document_type_number
 */

OrderEdiDocument.prototype['document_type_number'] = undefined;
/**
 * @member {String} external_id
 */

OrderEdiDocument.prototype['external_id'] = undefined;
/**
 * @member {String} functional_acknowledgement
 */

OrderEdiDocument.prototype['functional_acknowledgement'] = undefined;
/**
 * @member {String} functional_acknowledgement_dts
 */

OrderEdiDocument.prototype['functional_acknowledgement_dts'] = undefined;
/**
 * @member {Boolean} functional_acknowledgement_pending
 */

OrderEdiDocument.prototype['functional_acknowledgement_pending'] = undefined;
/**
 * @member {Number} group_control_number
 */

OrderEdiDocument.prototype['group_control_number'] = undefined;
/**
 * @member {String} internal_id
 */

OrderEdiDocument.prototype['internal_id'] = undefined;
/**
 * @member {String} merchant_id
 */

OrderEdiDocument.prototype['merchant_id'] = undefined;
/**
 * @member {String} order_id
 */

OrderEdiDocument.prototype['order_id'] = undefined;
/**
 * @member {Boolean} test_mode
 */

OrderEdiDocument.prototype['test_mode'] = undefined;
/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */

OrderEdiDocument['DirectionEnum'] = {
  /**
   * value: "inbound"
   * @const
   */
  "inbound": "inbound",

  /**
   * value: "outbound"
   * @const
   */
  "outbound": "outbound"
};
var _default = OrderEdiDocument;
exports["default"] = _default;