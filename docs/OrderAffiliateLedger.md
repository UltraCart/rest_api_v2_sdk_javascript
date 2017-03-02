# UltraCartRestApiV2.OrderAffiliateLedger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignedByUser** | **String** | UltraCart user name that assigned this commission if manually assigned | [optional] 
**itemId** | **String** | Item ID that this ledger record is associated with | [optional] 
**tierNumber** | **Integer** | Tier number of this affiliate in the commission calculation | [optional] 
**transactionAmount** | **Number** | Amount of the transaction | [optional] 
**transactionAmountPaid** | **Number** | The amount that has been paid so far on the transaction | [optional] 
**transactionDts** | **String** | The date/time that the affiliate ledger was generated for the transaction | [optional] 
**transactionMemo** | **String** | Details of the transaction suitable for display to the affiliate | [optional] 
**transactionPercentage** | **Number** | The percentage earned on the transaction | [optional] 
**transactionState** | **String** | The state of the transaction | [optional] 


<a name="TransactionStateEnum"></a>
## Enum: TransactionStateEnum


* `Pending` (value: `"Pending"`)

* `Posted` (value: `"Posted"`)

* `Approved` (value: `"Approved"`)

* `Paid` (value: `"Paid"`)

* `Rejected` (value: `"Rejected"`)

* `Partially Paid` (value: `"Partially Paid"`)




