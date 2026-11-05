# UltraCartRestApiV2.SfvbCommsPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_customers** | **Number** | Customers being mailed now. | [optional] 
**allow_list_import** | **Boolean** | True when the account may import lists from another email provider. | [optional] 
**allow_tracking_emails** | **Boolean** | True when shipment tracking emails are allowed. | [optional] 
**bounce_count** | **Number** | Emails bounced. | [optional] 
**bounce_percentage** | **Number** | The bounce percentage. | [optional] 
**delivered_count** | **Number** | Emails delivered. | [optional] 
**initial_sending_limits** | **Number** | The starting sending limit for a new account. | [optional] 
**max_active_customers** | **Number** | The most customers the plan mails. | [optional] 
**max_emails_per_day** | **Number** | The daily sending cap. | [optional] 
**max_emails_per_hour** | **Number** | The hourly sending cap. | [optional] 
**max_emails_per_month** | **Number** | The monthly sending cap. | [optional] 
**paused_for_spam** | **Boolean** | True when sending is paused for spam complaints. | [optional] 
**plan_customers** | **Number** | Customers the plan covers. | [optional] 
**plan_emails** | **Number** | Emails a month the plan covers. | [optional] 
**plan_name** | **String** | The plan, such as small. | [optional] 
**plan_name_formatted** | **String** | The plan&#39;s display name. | [optional] 
**require_order_within_last_days** | **Number** | When set, only customers who ordered within this many days are mailed. | [optional] 
**sent_emails_per_day** | **Number** | Emails sent in the last day. | [optional] 
**sent_emails_per_hour** | **Number** | Emails sent in the last hour. | [optional] 
**sent_emails_per_month** | **Number** | Emails sent in the last month. | [optional] 
**spam_count** | **Number** | Spam complaints. | [optional] 
**spam_percent_limit** | **Number** | The spam complaint percentage at which sending pauses. | [optional] 
**spam_percentage** | **Number** | The spam complaint percentage. | [optional] 
**total_customers** | **Number** | Customers allowed in all. | [optional] 
**total_emails** | **Number** | Emails a month allowed in all. | [optional] 


