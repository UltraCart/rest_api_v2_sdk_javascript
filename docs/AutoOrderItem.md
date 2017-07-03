# UltraCartRestApiV2.AutoOrderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arbitraryItemId** | **String** | Arbitrary item id that should be rebilled instead of the normal schedule | [optional] 
**arbitraryPercentageDiscount** | **Number** | An arbitrary percentage discount to provide on future rebills | [optional] 
**arbitraryQuantity** | **Number** | Arbitrary quantity to rebill | [optional] 
**arbitraryScheduleDays** | **Integer** | The number of days to rebill if the frequency is set to an arbitrary number of days | [optional] 
**arbitraryUnitCost** | **Number** | Arbitrary unit cost that rebills of this item should occur at | [optional] 
**arbitraryUnitCostRemainingOrders** | **Integer** | The number of rebills to give the arbitrary unit cost on before reverting to normal pricing. | [optional] 
**autoOrderItemOid** | **Integer** | Primary key of AutoOrderItem | [optional] 
**frequency** | **String** | Frequency of the rebill if not a fixed schedule | [optional] 
**lastOrderDts** | **String** | Date/time of the last order of this item | [optional] 
**lifeTimeValue** | **Number** | The life time value of this item including the original purchase | [optional] 
**nextPreshipmentNoticeDts** | **String** | The date/time of when the next pre-shipment notice should be sent | [optional] 
**nextShipmentDts** | **String** | Date/time that this item is scheduled to rebill | [optional] 
**noOrderAfterDts** | **String** | Date/time after which no additional rebills of this item should occur | [optional] 
**numberOfRebills** | **Integer** | The number of times this item has rebilled | [optional] 
**options** | [**[AutoOrderItemOption]**](AutoOrderItemOption.md) | Options associated with this item | [optional] 
**originalItemId** | **String** | The original item id purchased | [optional] 
**originalQuantity** | **Number** | The original quantity purchased | [optional] 
**paypalPayerId** | **String** | The PayPal Payer ID tied to this item | [optional] 
**paypalRecurringPaymentProfileId** | **String** | The PayPal Profile ID tied to this item | [optional] 
**preshipmentNoticeSent** | **Boolean** | True if the preshipment notice associated with the next rebill has been sent | [optional] 
**rebillValue** | **Number** | The value of the rebills of this item | [optional] 
**remainingRepeatCount** | **Integer** | The number of rebills remaining before this item is complete | [optional] 


<a name="FrequencyEnum"></a>
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




