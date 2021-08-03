# UltraCartRestApiV2.RotatingTransactionGateway

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_native_currency_codes** | [**[RtgCurrency]**](RtgCurrency.md) | An array of all currencies known to the UltraCart system and a boolean indicating whether this gateway supports that currency. | [optional] 
**auto_order_cancel_unless_response_name** | **String** | Advanced feature for canceling an auto order unless the transaction gateway response contains a field with this name.  If specified, this field must exist and the value must equal a value in the auto_order_cancel_unless_response_values array | [optional] 
**auto_order_cancel_unless_response_values** | **[String]** | Advanced feature for canceling an auto order unless the transaction gateway response contains a field with the name specified in auto_order_cancel_unless_response_name.  If specified, this field must exist and the value must equal a value in this array.  If nothing matches, the auto order is canceled. | [optional] 
**base_currency_code** | **String** | The base currency code for your gateway.  For example, USD. | [optional] 
**cascade_code** | **String** | Optional field specifying a different rotating gateway to use if this gateway fails to process the transaction. | [optional] 
**cascade_codes** | **[String]** | A list of other rotating transaction gateways that can be used as a lookup to assign actions based on failures of this gateway | [optional] 
**cascade_daily_auto_order_code** | **String** | The code for the next rotating gateway that should be used when this gateway reaches a daily limit | [optional] 
**charge_appears_on_statement_as** | **String** | Optional field providing an alternate Charge Appears As value for this rotating gateway | [optional] 
**code** | **String** | A human friendly short code used to recognize and differentiate this rotating gateway with other rotating gateways | [optional] 
**current_daily** | **Number** | The current daily dollar amount this gateway has processed.  Providing this will allow UltraCart to track the monthly amount going forward. | [optional] 
**current_daily_auto_order** | **Number** | The current daily dollar amount of auto orders (recurring) this gateway has processed.  Providing this will allow UltraCart to track the monthly amount going forward. | [optional] 
**current_monthly** | **Number** | The current monthly dollar amount this gateway has processed.  Providing this will allow UltraCart to track the monthly amount going forward. | [optional] 
**customer_service_email** | **String** | The customer service email address for this gateway | [optional] 
**customer_service_phone** | **String** | The customer service phone number for this gateway | [optional] 
**day_of_month_restrictions** | [**[RtgDayOfMonthRestriction]**](RtgDayOfMonthRestriction.md) | Array containing all 31 (possible) days and any optional restrictions for one or more days. | [optional] 
**day_of_week_restrictions** | [**[RtgDayOfWeekRestriction]**](RtgDayOfWeekRestriction.md) | Array containing all seven days of the week and any optional restrictions for one or more days | [optional] 
**deactivate_after_failures** | **Number** | If non-zero, this gateway will be deactivated after reaching this amount of consecutive failures. | [optional] 
**end_date** | **String** | Optional field to specify an absolute date when this gateway should stop accepting transactions | [optional] 
**gateways** | [**[TransactionGateway]**](TransactionGateway.md) | An array of all transaction gateways, not just the one currently configured for this rotating gateway. This allows for easy switching to another gateway.  The enabled property on the transaction gateway indicates which one is actually being used. | [optional] 
**maximum_daily** | **Number** | The maximum daily dollar amount this gateway may process | [optional] 
**maximum_daily_auto_order** | **Number** | The maximum daily dollar amount of auto orders (recurring) this gateway may process | [optional] 
**maximum_monthly** | **Number** | The maximum monthly dollar amount this gateway may process. | [optional] 
**next_daily_auto_order_reset** | **String** | The date and time when this gateway daily limit for auto orders will reset | [optional] 
**next_daily_reset** | **String** | The date and time when this gateway daily limit will reset | [optional] 
**next_monthly_reset** | **String** | The date and time when this gateway monthly limit will reset | [optional] 
**order_total** | **Number** | This optional field is combined with order_total_comparison to determine if an order should be processed thorugh this gateway. | [optional] 
**order_total_comparison** | **String** | The math operator used to determine if the order total is allowed to process through this gateway. | [optional] 
**rebill_auto_orders_against_this_rtg_code** | **String** | If specified auto orders (rebills) are routed to this rotating gateway.  This may be needed because rebills lack a credit card cvv. | [optional] 
**reserve_days** | **Number** | The number of days that your gateway holds any reserves.  This aids in profitability reporting. | [optional] 
**reserve_percentage** | **Number** | The percentage of an order which your gateway is holding in reserve.  This aids in profitability reporting. | [optional] 
**reserve_refunded** | **Boolean** | If true, reserves are refunded when an order is refunded.  This aids in profitability reporting. | [optional] 
**reserves_released_through** | **String** | An optional date specifying the date up to which your gateway has released all reserve funds.  This aids in profitability reporting. | [optional] 
**rotating_transaction_gateway_oid** | **Number** | Internal identifier used to store and retrieve this gateway information | [optional] 
**selected_gateway_name** | **String** | The name of the currently selected transaction gateway used by this rotating gateway | [optional] 
**show_cascade_codes** | **Boolean** | A boolean used by the builtin UltraCart UI to determine if cascading rtg codes should be shown | [optional] 
**show_merchant_account_profiles** | **Boolean** | A flag to help the UltraCart UI to know whether to show merchant account profiles or not. | [optional] 
**start_date** | **String** | Optional field to specify an absolute date when this gateway should begin accepting transactions | [optional] 
**status** | **String** | A field used to take a gateway offline without removing/deleting the configuration. Inactive marks the gateway as completely unusable.  Standby takes the gateway offline and will not be used unless all other active gateways fail. | [optional] 
**theme_restrictions** | [**[RtgThemeRestriction]**](RtgThemeRestriction.md) | Optional restrictions by theme/storefront | [optional] 
**traffic_percentage** | **Number** | Required field between 0 and 1 that dictates the percentage of traffic that should flow through this gateway | [optional] 
**trial_daily_amount** | **Number** | If specified, limits the total daily count of trial orders | [optional] 
**trial_daily_limit** | **Number** | If specified, limits the total daily dollar amount of trial orders | [optional] 
**trial_monthly_amount** | **Number** | If specified, limits the total month dollar amount of trial orders | [optional] 
**trial_monthly_limit** | **Number** | If specified, limits the total month count of trial orders | [optional] 


<a name="OrderTotalComparisonEnum"></a>
## Enum: OrderTotalComparisonEnum


* `LESS_THAN` (value: `"<"`)

* `LESS_THAN_OR_EQUAL_TO` (value: `"<="`)

* `EQUAL` (value: `"="`)

* `GREATER_THAN` (value: `">"`)

* `GREATER_THAN_OR_EQUAL_TO` (value: `">="`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `standby` (value: `"standby"`)




