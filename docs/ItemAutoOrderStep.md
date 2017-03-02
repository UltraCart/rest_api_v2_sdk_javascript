# UltraCartRestApiV2.ItemAutoOrderStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arbitraryScheduleDays** | **Integer** | If the schedule is arbitrary, then this is the number of days | [optional] 
**arbitraryUnitCost** | **Number** | Arbitrary unit cost used to override the regular item cost | [optional] 
**arbitraryUnitCostSchedules** | [**[ItemAutoOrderStepArbitraryUnitCostSchedule]**](ItemAutoOrderStepArbitraryUnitCostSchedule.md) | Arbitrary unit costs schedules for more advanced discounting by rebill attempt | [optional] 
**grandfatherPricing** | [**[ItemAutoOrderStepGrandfatherPricing]**](ItemAutoOrderStepGrandfatherPricing.md) | Grand-father pricing configuration if the rebill schedule has changed over time | [optional] 
**managedBy** | **String** | Managed by (defaults to UltraCart) | [optional] 
**pauseDays** | **Integer** | Number of days to pause | [optional] 
**pauseUntilDate** | **String** | Wait for this step to happen until the specified date | [optional] 
**preshipmentNoticeDays** | **Integer** | If set, a pre-shipment notice is sent to the customer this many days in advance | [optional] 
**recurringMerchantItemId** | **String** | Item id to rebill | [optional] 
**recurringMerchantItemOid** | **Integer** | Item object identifier to rebill | [optional] 
**repeatCount** | **Integer** | Number of times to rebill.  Last step can be null for infinite | [optional] 
**schedule** | **String** | Frequency of the rebill | [optional] 
**subscribeEmailListName** | **String** | Email list name to subscribe the customer to when the rebill occurs | [optional] 
**subscribeEmailListOid** | **Integer** | Email list identifier to subscribe the customer to when this rebill occurs | [optional] 
**type** | **String** | Type of step (item or pause) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `item` (value: `"item"`)

* `pause` (value: `"pause"`)




