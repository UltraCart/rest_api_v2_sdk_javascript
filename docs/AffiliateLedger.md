# UltraCartRestApiV2.AffiliateLedger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_click_oid** | **Number** | Unique object identifier for the click associated with this ledger entry | [optional] 
**affiliate_link_oid** | **Number** | Unique object identifier for the link that this click is associated with | [optional] 
**affiliate_oid** | **Number** | Affiliate object ID associated with this transaction | [optional] 
**assigned_by_user** | **String** | User that assigned the transaction if it was done manually | [optional] 
**click** | [**AffiliateClick**](AffiliateClick.md) |  | [optional] 
**item_id** | **String** | Item ID associated with this transaction | [optional] 
**link** | [**AffiliateLink**](AffiliateLink.md) |  | [optional] 
**order** | [**Order**](Order.md) |  | [optional] 
**order_id** | **String** | Order ID associated with this transaction | [optional] 
**original_transaction_dts** | **String** | Date/time of the original transaction for reversals | [optional] 
**sub_id** | **String** | Sub ID associated with transaction (from the click) | [optional] 
**tier_number** | **String** | Tier number that this transaction earned | [optional] 
**transaction_amount** | **Number** | Transaction amount | [optional] 
**transaction_amount_paid** | **Number** | Amount of the transaction that has been paid out. | [optional] 
**transaction_dts** | **String** | Date/time that the transaction was made | [optional] 
**transaction_memo** | **String** | Memo explaining the transaction | [optional] 
**transaction_percentage** | **String** | Percentage associated with this transaction | [optional] 
**transaction_state** | **String** | Transaction state | [optional] 


<a name="TransactionStateEnum"></a>
## Enum: TransactionStateEnum


* `Pending` (value: `"Pending"`)

* `Posted` (value: `"Posted"`)

* `Approved` (value: `"Approved"`)

* `Paid` (value: `"Paid"`)

* `Rejected` (value: `"Rejected"`)

* `Partially_Paid` (value: `"Partially Paid"`)




