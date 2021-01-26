# UltraCartRestApiV2.ItemAutoOrderStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arbitrary_schedule_days** | **Number** | If the schedule is arbitrary, then this is the number of days | [optional] 
**arbitrary_unit_cost** | **Number** | Arbitrary unit cost used to override the regular item cost | [optional] 
**arbitrary_unit_cost_schedules** | [**[ItemAutoOrderStepArbitraryUnitCostSchedule]**](ItemAutoOrderStepArbitraryUnitCostSchedule.md) | Arbitrary unit costs schedules for more advanced discounting by rebill attempt | [optional] 
**grandfather_pricing** | [**[ItemAutoOrderStepGrandfatherPricing]**](ItemAutoOrderStepGrandfatherPricing.md) | Grand-father pricing configuration if the rebill schedule has changed over time | [optional] 
**managed_by** | **String** | Managed by (defaults to UltraCart) | [optional] 
**pause_days** | **Number** | Number of days to pause | [optional] 
**pause_until_date** | **String** | Wait for this step to happen until the specified date | [optional] 
**preshipment_notice_days** | **Number** | If set, a pre-shipment notice is sent to the customer this many days in advance | [optional] 
**recurring_merchant_item_id** | **String** | Item id to rebill | [optional] 
**recurring_merchant_item_oid** | **Number** | Item object identifier to rebill | [optional] 
**repeat_count** | **Number** | Number of times to rebill.  Last step can be null for infinite | [optional] 
**schedule** | **String** | Frequency of the rebill | [optional] 
**subscribe_email_list_name** | **String** | Email list name to subscribe the customer to when the rebill occurs | [optional] 
**subscribe_email_list_oid** | **Number** | Email list identifier to subscribe the customer to when this rebill occurs | [optional] 
**type** | **String** | Type of step (item or pause) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `item` (value: `"item"`)

* `pause` (value: `"pause"`)




