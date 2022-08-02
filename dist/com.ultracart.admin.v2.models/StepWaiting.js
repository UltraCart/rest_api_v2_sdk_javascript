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
 * The StepWaiting model module.
 * @module com.ultracart.admin.v2.models/StepWaiting
 * @version 4.0.47-RC
 */
var StepWaiting = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StepWaiting</code>.
   * @alias module:com.ultracart.admin.v2.models/StepWaiting
   */
  function StepWaiting() {
    _classCallCheck(this, StepWaiting);

    StepWaiting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StepWaiting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StepWaiting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StepWaiting} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StepWaiting} The populated <code>StepWaiting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StepWaiting();

        if (data.hasOwnProperty('commseq_step_uuid')) {
          obj['commseq_step_uuid'] = _ApiClient["default"].convertToType(data['commseq_step_uuid'], 'String');
        }

        if (data.hasOwnProperty('number_waiting')) {
          obj['number_waiting'] = _ApiClient["default"].convertToType(data['number_waiting'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return StepWaiting;
}();
/**
 * @member {String} commseq_step_uuid
 */


StepWaiting.prototype['commseq_step_uuid'] = undefined;
/**
 * @member {Number} number_waiting
 */

StepWaiting.prototype['number_waiting'] = undefined;
var _default = StepWaiting;
exports["default"] = _default;