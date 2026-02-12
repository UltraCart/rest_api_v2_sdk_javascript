# UltraCartRestApiV2.AutoOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_ons** | [**[AutoOrderAddonItem]**](AutoOrderAddonItem.md) | Array of addon objects instructing which items to add to auto order and how many times they should be added. | [optional] 
**auto_order_code** | **String** | Unique code assigned to this auto order | [optional] 
**auto_order_oid** | **Number** | Auto order object identifier | [optional] 
**cancel_after_next_x_orders** | **Number** | Cancel this auto order after X additional rebills | [optional] 
**cancel_downgrade** | **Boolean** | True if the auto order was canceled because the customer purchased a downgrade item | [optional] 
**cancel_reason** | **String** | The reason this auto order was canceled by either merchant or customer | [optional] 
**cancel_upgrade** | **Boolean** | True if the auto order was canceled because the customer purchased an upgrade item | [optional] 
**canceled_by_user** | **String** | The user that canceled the auto order | [optional] 
**canceled_dts** | **String** | The date/time that the auto order was canceled | [optional] 
**completed** | **Boolean** | True if the auto order ran successfully to completion | [optional] 
**credit_card_attempt** | **Number** | The number of credit card attempts that have taken place | [optional] 
**disabled_dts** | **String** | The date/time the auto order was disabled due to failed rebills | [optional] 
**enabled** | **Boolean** | True if this auto order is enabled | [optional] 
**failure_reason** | **String** | The reason this auto order failed during the last rebill attempt | [optional] 
**items** | [**[AutoOrderItem]**](AutoOrderItem.md) | The items that are setup to rebill | [optional] 
**logs** | [**[AutoOrderLog]**](AutoOrderLog.md) | Logs associated with this auto order | [optional] 
**management** | [**AutoOrderManagement**](AutoOrderManagement.md) |  | [optional] 
**merchant_id** | **String** | UltraCart merchant ID owning this order | [optional] 
**merged_dts** | **String** | The date/time the auto order was merged into another auto order | [optional] 
**merged_into_auto_order_oid** | **Number** | The auto order that this auto order was merged into | [optional] 
**next_attempt** | **String** | The next time that the auto order will be attempted for processing | [optional] 
**original_order** | [**Order**](Order.md) |  | [optional] 
**original_order_id** | **String** | The original order id that this auto order is associated with. | [optional] 
**override_affiliate_id** | **Number** | Override the affiliate id given credit for rebills of this auto order | [optional] 
**properties** | [**[AutoOrderProperty]**](AutoOrderProperty.md) | Array of property objects | [optional] 
**rebill_orders** | [**[Order]**](Order.md) | Rebill orders that have taken place on this auto order | [optional] 
**rotating_transaction_gateway_code** | **String** | The RTG code associated with this order for future rebills | [optional] 
**status** | **String** | The status of the auto order | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `canceled` (value: `"canceled"`)

* `disabled` (value: `"disabled"`)

* `merged` (value: `"merged"`)




