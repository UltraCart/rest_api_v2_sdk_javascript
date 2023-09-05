# UltraCartRestApiV2.ChannelPartnerOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arbitrary_unit_cost** | **Number** | Arbitrary unit cost for this item that differs from the listed price | [optional] 
**auto_order_last_rebill_dts** | **String** | Optional date/time of the last rebill if this item is part of an auto (recurring) order | [optional] 
**auto_order_schedule** | **String** | The frequency schedule for this item if this item is part of an auto (recurring) order | [optional] 
**merchant_item_id** | **String** | Item ID | [optional] 
**options** | [**[ChannelPartnerOrderItemOption]**](ChannelPartnerOrderItemOption.md) | Item options | [optional] 
**quantity** | **Number** | Quantity | [optional] 
**upsell** | **Boolean** | True if this item was an upsell item. | [optional] 



## Enum: AutoOrderScheduleEnum


* `Weekly` (value: `"Weekly"`)

* `Every 10 Days` (value: `"Every 10 Days"`)

* `Biweekly` (value: `"Biweekly"`)

* `Every 24 Days` (value: `"Every 24 Days"`)

* `Every 28 Days` (value: `"Every 28 Days"`)

* `Monthly` (value: `"Monthly"`)

* `Every 45 Days` (value: `"Every 45 Days"`)

* `Every 2 Months` (value: `"Every 2 Months"`)

* `Every 3 Months` (value: `"Every 3 Months"`)

* `Every 4 Months` (value: `"Every 4 Months"`)

* `Every 6 Months` (value: `"Every 6 Months"`)

* `Yearly` (value: `"Yearly"`)

* `Every 4 Weeks` (value: `"Every 4 Weeks"`)

* `Every 6 Weeks` (value: `"Every 6 Weeks"`)

* `Every 8 Weeks` (value: `"Every 8 Weeks"`)




