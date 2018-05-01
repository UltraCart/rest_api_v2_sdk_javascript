# UltraCartRestApiV2.OrderAffiliateLedger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_by_user** | **String** | UltraCart user name that assigned this commission if manually assigned | [optional] 
**item_id** | **String** | Item ID that this ledger record is associated with | [optional] 
**tier_number** | **Number** | Tier number of this affiliate in the commission calculation | [optional] 
**transaction_amount** | **Number** | Amount of the transaction | [optional] 
**transaction_amount_paid** | **Number** | The amount that has been paid so far on the transaction | [optional] 
**transaction_dts** | **String** | The date/time that the affiliate ledger was generated for the transaction | [optional] 
**transaction_memo** | **String** | Details of the transaction suitable for display to the affiliate | [optional] 
**transaction_percentage** | **Number** | The percentage earned on the transaction | [optional] 
**transaction_state** | **String** | The state of the transaction | [optional] 


<a name="TransactionStateEnum"></a>
## Enum: TransactionStateEnum


* `Pending` (value: `"Pending"`)

* `Posted` (value: `"Posted"`)

* `Approved` (value: `"Approved"`)

* `Paid` (value: `"Paid"`)

* `Rejected` (value: `"Rejected"`)

* `Partially Paid` (value: `"Partially Paid"`)




