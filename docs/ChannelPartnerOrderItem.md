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


<a name="AutoOrderScheduleEnum"></a>
## Enum: AutoOrderScheduleEnum


* `Weekly` (value: `"Weekly"`)

* `Every_10_Days` (value: `"Every 10 Days"`)

* `Biweekly` (value: `"Biweekly"`)

* `Every_24_Days` (value: `"Every 24 Days"`)

* `Every_28_Days` (value: `"Every 28 Days"`)

* `Monthly` (value: `"Monthly"`)

* `Every_45_Days` (value: `"Every 45 Days"`)

* `Every_2_Months` (value: `"Every 2 Months"`)

* `Every_3_Months` (value: `"Every 3 Months"`)

* `Every_4_Months` (value: `"Every 4 Months"`)

* `Every_5_Months` (value: `"Every 5 Months"`)

* `Every_6_Months` (value: `"Every 6 Months"`)

* `Yearly` (value: `"Yearly"`)

* `Every_4_Weeks` (value: `"Every 4 Weeks"`)

* `Every_6_Weeks` (value: `"Every 6 Weeks"`)

* `Every_8_Weeks` (value: `"Every 8 Weeks"`)




