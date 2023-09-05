# UltraCartRestApiV2.AutoOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arbitrary_item_id** | **String** | Arbitrary item id that should be rebilled instead of the normal schedule | [optional] 
**arbitrary_percentage_discount** | **Number** | An arbitrary percentage discount to provide on future rebills | [optional] 
**arbitrary_quantity** | **Number** | Arbitrary quantity to rebill | [optional] 
**arbitrary_schedule_days** | **Number** | The number of days to rebill if the frequency is set to an arbitrary number of days | [optional] 
**arbitrary_unit_cost** | **Number** | Arbitrary unit cost that rebills of this item should occur at | [optional] 
**arbitrary_unit_cost_remaining_orders** | **Number** | The number of rebills to give the arbitrary unit cost on before reverting to normal pricing. | [optional] 
**auto_order_item_oid** | **Number** | Primary key of AutoOrderItem | [optional] 
**first_order_dts** | **String** | Date/time of the first order of this item.  Null if item added to auto order and has not been rebilled yet. | [optional] 
**frequency** | **String** | Frequency of the rebill if not a fixed schedule | [optional] 
**future_schedules** | [**[AutoOrderItemFutureSchedule]**](AutoOrderItemFutureSchedule.md) | The future rebill schedule for this item up to the next ten rebills | [optional] 
**last_order_dts** | **String** | Date/time of the last order of this item | [optional] 
**life_time_value** | **Number** | The life time value of this item including the original purchase | [optional] 
**next_preshipment_notice_dts** | **String** | The date/time of when the next pre-shipment notice should be sent | [optional] 
**next_shipment_dts** | **String** | Date/time that this item is scheduled to rebill | [optional] 
**no_order_after_dts** | **String** | Date/time after which no additional rebills of this item should occur | [optional] 
**number_of_rebills** | **Number** | The number of times this item has rebilled | [optional] 
**options** | [**[AutoOrderItemOption]**](AutoOrderItemOption.md) | Options associated with this item | [optional] 
**original_item_id** | **String** | The original item id purchased.  This item controls scheduling.  If you wish to modify a schedule, for example, from monthly to yearly, change this item from your monthly item to your yearly item, and then change the next_shipment_dts to your desired date. | [optional] 
**original_quantity** | **Number** | The original quantity purchased | [optional] 
**paused** | **Boolean** | True if paused.  This field is an object instead of a primitive for backwards compatibility. | [optional] 
**paypal_payer_id** | **String** | The PayPal Payer ID tied to this item | [optional] 
**paypal_recurring_payment_profile_id** | **String** | The PayPal Profile ID tied to this item | [optional] 
**preshipment_notice_sent** | **Boolean** | True if the preshipment notice associated with the next rebill has been sent | [optional] 
**rebill_value** | **Number** | The value of the rebills of this item | [optional] 
**remaining_repeat_count** | **Number** | The number of rebills remaining before this item is complete | [optional] 
**simple_schedule** | [**AutoOrderItemSimpleSchedule**](AutoOrderItemSimpleSchedule.md) |  | [optional] 



## Enum: FrequencyEnum


* `Weekly` (value: `"Weekly"`)

* `Biweekly` (value: `"Biweekly"`)

* `Every...` (value: `"Every..."`)

* `Every 10 Days` (value: `"Every 10 Days"`)

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




