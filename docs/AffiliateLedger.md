# UltraCartRestApiV2.AffiliateLedger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliateClickOid** | **Integer** | Unique object identifier for the click associated with this ledger entry | [optional] 
**affiliateLinkOid** | **Integer** | Unique object identifier for the link that this click is associated with | [optional] 
**affiliateOid** | **Integer** | Affiliate object ID associated with this transaction | [optional] 
**assignedByUser** | **String** | User that assigned the transaction if it was done manually | [optional] 
**click** | [**AffiliateClick**](AffiliateClick.md) |  | [optional] 
**itemId** | **String** | Item ID associated with this transaction | [optional] 
**link** | [**AffiliateLink**](AffiliateLink.md) |  | [optional] 
**order** | [**Order**](Order.md) |  | [optional] 
**orderId** | **String** | Order ID associated with this transaction | [optional] 
**originalTransactionDts** | **String** | Date/time of the original transaction for reversals | [optional] 
**subId** | **String** | Sub ID associated with transaction (from the click) | [optional] 
**tierNumber** | **String** | Tier number that this transaction earned | [optional] 
**transactionAmount** | **Number** | Transaction amount | [optional] 
**transactionAmountPaid** | **Number** | Amount of the transaction that has been paid out. | [optional] 
**transactionDts** | **String** | Date/time that the transaction was made | [optional] 
**transactionMemo** | **String** | Memo explaining the transaction | [optional] 
**transactionPercentage** | **String** | Percentage associated with this transaction | [optional] 
**transactionState** | **String** | Transaction state | [optional] 


<a name="TransactionStateEnum"></a>
## Enum: TransactionStateEnum


* `Pending` (value: `"Pending"`)

* `Posted` (value: `"Posted"`)

* `Approved` (value: `"Approved"`)

* `Paid` (value: `"Paid"`)

* `Rejected` (value: `"Rejected"`)

* `Partially Paid` (value: `"Partially Paid"`)




