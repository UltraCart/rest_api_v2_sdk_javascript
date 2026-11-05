# UltraCartRestApiV2.ItemAutoOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_future_amount** | **Number** | Amount to try and authorize for the future rebill | [optional] 
**auth_test_amount** | **Number** | Amount to try and test authorize | [optional] 
**auto_order_cancel_charge_minimum_balance** | **Boolean** | If true, the cost of the cancel item will be the remaining balance of the minimum rebill or lifetime value | [optional] 
**auto_order_cancel_item_id** | **String** | Item id to attempt charging the customer for if they cancel | [optional] 
**auto_order_cancel_item_oid** | **Number** | Item object identifier to attempt charging the customer for if they cancel | [optional] 
**auto_order_cancel_minimum_life_time_count** | **Number** | The minimum life time count that must be billed in order to not be charged the cancellation item. | [optional] 
**auto_order_cancel_minimum_life_time_value** | **Number** | The minimum life time value that must be paid in order to not be charged the cancellation item. | [optional] 
**auto_order_cancel_minimum_rebill_count** | **Number** | The minimum rebill count that must be billed in order to not be charged the cancellation item. | [optional] 
**auto_order_cancel_minimum_rebill_value** | **Number** | The minimum rebill value that must be paid in order to not be charged the cancellation item. | [optional] 
**auto_order_downgrade_items** | **[String]** | List of downgrade items presented to customer service representatives | [optional] 
**auto_order_myaccount_frequency_day_counts** | **[Number]** | Day counts (1 to 365, at most 20) a customer may switch this auto-enrolled item to from MyAccount, for example [30, 60, 90].  Requires the advanced auto order settings to be enabled on the account.  Omit to leave unchanged; send an empty array to clear. | [optional] 
**auto_order_myaccount_frequency_last_step_only** | **Boolean** | True if the MyAccount frequency change is only offered once the item is on its last auto order step.  If auto_order_myaccount_frequency_schedules or auto_order_myaccount_frequency_day_counts is sent without this property, it is set to false; if none of the three are sent, it is left unchanged. | [optional] 
**auto_order_myaccount_frequency_schedules** | **[String]** | Standard schedules a customer may switch this auto-enrolled item to from MyAccount.  Requires the advanced auto order settings to be enabled on the account.  Omit to leave unchanged; send an empty array to clear. | [optional] 
**auto_order_paused** | **Boolean** | True if the rebill processing of this item is paused | [optional] 
**auto_order_prohibit_expiring_cards** | **Number** | Minimum number of months before expiration for the card.  Overrides the account level setting if higher.  Set to zero to disable. | [optional] 
**auto_order_schedules** | **[String]** | The user selectable schedules that are available | [optional] 
**auto_order_upgrade_items** | **[String]** | List of upgrade items presented to customer service representatives | [optional] 
**auto_order_upsell** | **Boolean** | True if this item uses a fixed upsell step schedule | [optional] 
**auto_order_upsell_no_easy_cancel** | **Boolean** | Do not send the easy cancel email to the customer | [optional] 
**auto_order_upsell_one_per_customer** | **Boolean** | Limit the purchase of this item to one per customer | [optional] 
**auto_orderable** | **Boolean** | True if this item can be automatically ordered by the customer | [optional] 
**cancel_other_auto_orders** | **Boolean** | True if other auto orders for this customer should be canceled when this item is ordered | [optional] 
**free_shipping_auto_order** | **Boolean** | True if the customer should be given free shipping | [optional] 
**refund_other_auto_orders** | **Boolean** | True if other auto orders for this customer should refunded if this item is refunded. | [optional] 
**steps** | [**[ItemAutoOrderStep]**](ItemAutoOrderStep.md) | The rebill steps if this auto order is an upsell | [optional] 


