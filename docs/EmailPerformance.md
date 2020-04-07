# UltraCartRestApiV2.EmailPerformance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_customers** | **Number** | Active customers.  The value will be -1 if calculation is pending. | [optional] 
**actual_customers** | **Number** | Actual customers that they have regardless of active state.  The value will be -1 if calculation is pending. | [optional] 
**bounce_count** | **Number** | Bounce count | [optional] 
**daily_stats** | [**[EmailPerformanceDaily]**](EmailPerformanceDaily.md) | Daily statistics used for charting | [optional] 
**delivered_count** | **Number** | Delivered count | [optional] 
**max_active_customers** | **Number** | Maximum active customers allowed under their billing plan | [optional] 
**max_emails_per_day** | **Number** | Max emails per day | [optional] 
**max_emails_per_hour** | **Number** | Max emails per hour | [optional] 
**max_emails_per_month** | **Number** | Max emails per month | [optional] 
**paused_for_spam** | **Boolean** | True if campaign/flow emails are paused due to spam complaints. | [optional] 
**revenue** | **Number** | Revenue | [optional] 
**sent_emails_per_day** | **Number** | Sent emails last 24 hours | [optional] 
**sent_emails_per_hour** | **Number** | Sent emails last hour | [optional] 
**sent_emails_per_month** | **Number** | Sent emails last 31 days | [optional] 
**sequence_send_count** | **Number** | Total sequence (campaign/flow) emails sent | [optional] 
**spam_count** | **Number** | Spam complaints | [optional] 
**spam_percentage** | **Number** | Spam percentage rate based upon our look back window.  This should be under one half a percent or the account will be paused for sending. | [optional] 
**spam_percentage_formatted** | **String** | Spam percentage rate (formatted) based upon our look back window.  This should be under one half a percent or the account will be paused for sending. | [optional] 
**transactional_send_count** | **Number** | Total transactions emails sent | [optional] 


