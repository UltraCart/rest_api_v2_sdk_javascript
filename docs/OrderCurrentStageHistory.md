# UltraCartRestApiV2.OrderCurrentStageHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after_stage** | **String** | New stage that the order is in. | [optional] 
**before_stage** | **String** | Previous stage that the order was in. | [optional] 
**transition_dts** | **String** | Date/time that the stage transitioned | [optional] 


<a name="AfterStageEnum"></a>
## Enum: AfterStageEnum


* `Accounts_Receivable` (value: `"Accounts Receivable"`)

* `Pending_Clearance` (value: `"Pending Clearance"`)

* `Fraud_Review` (value: `"Fraud Review"`)

* `Rejected` (value: `"Rejected"`)

* `Shipping_Department` (value: `"Shipping Department"`)

* `Completed_Order` (value: `"Completed Order"`)

* `Quote_Request` (value: `"Quote Request"`)

* `Quote_Sent` (value: `"Quote Sent"`)

* `Least_Cost_Routing` (value: `"Least Cost Routing"`)

* `Unknown` (value: `"Unknown"`)

* `Pre_ordered` (value: `"Pre-ordered"`)

* `Advanced_Order_Routing` (value: `"Advanced Order Routing"`)

* `Hold` (value: `"Hold"`)




<a name="BeforeStageEnum"></a>
## Enum: BeforeStageEnum


* `Accounts_Receivable` (value: `"Accounts Receivable"`)

* `Pending_Clearance` (value: `"Pending Clearance"`)

* `Fraud_Review` (value: `"Fraud Review"`)

* `Rejected` (value: `"Rejected"`)

* `Shipping_Department` (value: `"Shipping Department"`)

* `Completed_Order` (value: `"Completed Order"`)

* `Quote_Request` (value: `"Quote Request"`)

* `Quote_Sent` (value: `"Quote Sent"`)

* `Least_Cost_Routing` (value: `"Least Cost Routing"`)

* `Unknown` (value: `"Unknown"`)

* `Pre_ordered` (value: `"Pre-ordered"`)

* `Advanced_Order_Routing` (value: `"Advanced Order Routing"`)

* `Hold` (value: `"Hold"`)




