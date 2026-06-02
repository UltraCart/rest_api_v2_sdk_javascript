# UltraCartRestApiV2.StorefrontApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToLibrary**](StorefrontApi.md#addToLibrary) | **POST** /storefront/code_library | Add to library
[**applyToStoreFront**](StorefrontApi.md#applyToStoreFront) | **POST** /storefront/code_library/apply | Apply library item to storefront.
[**archiveEmailList**](StorefrontApi.md#archiveEmailList) | **POST** /storefront/{storefront_oid}/email/lists/{email_list_uuid}/archive | Archive email list
[**archiveEmailSegment**](StorefrontApi.md#archiveEmailSegment) | **POST** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/archive | Archive email segment
[**backPopulateEmailFlow**](StorefrontApi.md#backPopulateEmailFlow) | **POST** /storefront/{storefront_oid}/email/flows/{email_flow_uuid}/backfill | Back populate email flow
[**checkDownloadEmailSegment**](StorefrontApi.md#checkDownloadEmailSegment) | **POST** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/downloadPrepare/{email_segment_rebuild_uuid} | Check download of email segment
[**cloneEmailCampaign**](StorefrontApi.md#cloneEmailCampaign) | **POST** /storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}/clone | Clone email campaign
[**cloneEmailFlow**](StorefrontApi.md#cloneEmailFlow) | **POST** /storefront/{storefront_oid}/email/flows/{email_flow_uuid}/clone | Clone email flow
[**createEmailSendingDomain**](StorefrontApi.md#createEmailSendingDomain) | **POST** /storefront/email/sending_domains/{domain}/create | Create email campaign
[**createEmailSendingDomain2**](StorefrontApi.md#createEmailSendingDomain2) | **POST** /storefront/email/sending_domains | Create email sending domain for various providers
[**createFsDirectory**](StorefrontApi.md#createFsDirectory) | **POST** /storefront/{id}/fs/dir | Create file manager directory
[**createTwilioAccount**](StorefrontApi.md#createTwilioAccount) | **POST** /storefront/twilio/accounts | Create Twilio account
[**deleteEmailCampaignFolder**](StorefrontApi.md#deleteEmailCampaignFolder) | **DELETE** /storefront/{storefront_oid}/email/campaign_folders/{email_campaign_folder_uuid} | Delete email campaignFolder
[**deleteEmailCommseqStat**](StorefrontApi.md#deleteEmailCommseqStat) | **DELETE** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/stat | Delete communication sequence stats
[**deleteEmailEmail**](StorefrontApi.md#deleteEmailEmail) | **DELETE** /storefront/{storefront_oid}/email/emails/{commseq_email_uuid} | Delete email email
[**deleteEmailFlowFolder**](StorefrontApi.md#deleteEmailFlowFolder) | **DELETE** /storefront/{storefront_oid}/email/flow_folders/{email_flow_folder_uuid} | Delete email flowFolder
[**deleteEmailListCustomer**](StorefrontApi.md#deleteEmailListCustomer) | **DELETE** /storefront/{storefront_oid}/email/lists/{email_list_uuid}/customers/{email_customer_uuid} | Delete email list customer
[**deleteEmailListSegmentFolder**](StorefrontApi.md#deleteEmailListSegmentFolder) | **DELETE** /storefront/{storefront_oid}/email/list_segment_folders/{email_list_segment_folder_uuid} | Delete email ListSegmentFolder
[**deleteEmailPostcard**](StorefrontApi.md#deleteEmailPostcard) | **DELETE** /storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid} | Delete email postcard
[**deleteEmailSendingDomain**](StorefrontApi.md#deleteEmailSendingDomain) | **DELETE** /storefront/email/sending_domains/{domain} | delete email campaign
[**deleteExperiment**](StorefrontApi.md#deleteExperiment) | **DELETE** /storefront/{storefront_oid}/experiments/{storefront_experiment_oid} | Delete experiment
[**deleteFsFile**](StorefrontApi.md#deleteFsFile) | **DELETE** /storefront/{id}/fs/file | Delete file manager directory
[**deleteHeatmap**](StorefrontApi.md#deleteHeatmap) | **DELETE** /storefront/{storefront_oid}/screen_recordings/heatmap | Delete screen recording heatmap
[**deleteLibraryItem**](StorefrontApi.md#deleteLibraryItem) | **DELETE** /storefront/code_library/{library_item_oid} | Delete library item
[**deleteLibraryItemPublishedVersions**](StorefrontApi.md#deleteLibraryItemPublishedVersions) | **DELETE** /storefront/code_library/{library_item_oid}/published_versions | Delete all published versions for a library item, including anything in review.
[**deleteScreenRecordingSegment**](StorefrontApi.md#deleteScreenRecordingSegment) | **DELETE** /storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid} | Delete screen recording segment
[**deleteTwilioAccount**](StorefrontApi.md#deleteTwilioAccount) | **DELETE** /storefront/twilio/accounts/{esp_twilio_uuid} | delete Twilio account
[**duplicateLibraryItem**](StorefrontApi.md#duplicateLibraryItem) | **POST** /storefront/code_library/{library_item_oid}/duplicate | Duplicate library item.
[**favoriteScreenRecording**](StorefrontApi.md#favoriteScreenRecording) | **POST** /storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/favorite | Update favorite flag on screen recording
[**geocodeAddress**](StorefrontApi.md#geocodeAddress) | **POST** /storefront/{storefront_oid}/email/geocode | Obtain lat/long for an address
[**getCountries**](StorefrontApi.md#getCountries) | **GET** /storefront/{storefront_oid}/email/countries | Get countries
[**getEditorToken**](StorefrontApi.md#getEditorToken) | **GET** /storefront/{storefront_oid}/editor_token | Gets editor token
[**getEmailBaseTemplates**](StorefrontApi.md#getEmailBaseTemplates) | **GET** /storefront/{storefront_oid}/email/baseTemplates | Get email communication base templates
[**getEmailCampaign**](StorefrontApi.md#getEmailCampaign) | **GET** /storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid} | Get email campaign
[**getEmailCampaignFolder**](StorefrontApi.md#getEmailCampaignFolder) | **GET** /storefront/{storefront_oid}/email/campaign_folders/{email_campaign_folder_uuid} | Get email campaign folder
[**getEmailCampaignFolders**](StorefrontApi.md#getEmailCampaignFolders) | **GET** /storefront/{storefront_oid}/email/campaign_folders | Get email campaign folders
[**getEmailCampaignScreenshots**](StorefrontApi.md#getEmailCampaignScreenshots) | **GET** /storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}/screenshots | Get email campaign screenshots
[**getEmailCampaigns**](StorefrontApi.md#getEmailCampaigns) | **GET** /storefront/{storefront_oid}/email/campaigns | Get email campaigns
[**getEmailCampaignsWithStats**](StorefrontApi.md#getEmailCampaignsWithStats) | **GET** /storefront/{storefront_oid}/email/campaignsWithStats/{stat_days} | Get email campaigns with stats
[**getEmailCommseq**](StorefrontApi.md#getEmailCommseq) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid} | Get email commseq
[**getEmailCommseqEditorValues**](StorefrontApi.md#getEmailCommseqEditorValues) | **GET** /storefront/{storefront_oid}/email/commseqs/editorValues | Get email merchant specific editor values
[**getEmailCommseqEmailStats**](StorefrontApi.md#getEmailCommseqEmailStats) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/emailStats | Get email communication sequence emails stats
[**getEmailCommseqPostcardStats**](StorefrontApi.md#getEmailCommseqPostcardStats) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/postcardStats | Get email communication sequence postcard stats
[**getEmailCommseqPostcardTracking**](StorefrontApi.md#getEmailCommseqPostcardTracking) | **GET** /storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}/tracking | Get email communication postcard tracking
[**getEmailCommseqRateLimiters**](StorefrontApi.md#getEmailCommseqRateLimiters) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/rate_limiters | Get email commseq rate limiters
[**getEmailCommseqSmsStats**](StorefrontApi.md#getEmailCommseqSmsStats) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/smsStats | Get email communication sequence sms stats
[**getEmailCommseqStatOverall**](StorefrontApi.md#getEmailCommseqStatOverall) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/stat | Get communication sequence stats overall
[**getEmailCommseqStepStats**](StorefrontApi.md#getEmailCommseqStepStats) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/stepStats | Get email communication sequence step stats
[**getEmailCommseqStepWaiting**](StorefrontApi.md#getEmailCommseqStepWaiting) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/waiting | Get email communication sequence customers waiting at each requested step
[**getEmailCommseqWebhookEditorValues**](StorefrontApi.md#getEmailCommseqWebhookEditorValues) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/webhookEditorValues | Get email webhook editor values
[**getEmailCommseqs**](StorefrontApi.md#getEmailCommseqs) | **GET** /storefront/{storefront_oid}/email/commseqs | Get email commseqs
[**getEmailCustomerEditorUrl**](StorefrontApi.md#getEmailCustomerEditorUrl) | **GET** /storefront/{storefront_oid}/email/customers/{email_customer_uuid}/editor_url | Get customers editor URL
[**getEmailCustomers**](StorefrontApi.md#getEmailCustomers) | **GET** /storefront/{storefront_oid}/email/customers | Get email customers
[**getEmailDashboardActivity**](StorefrontApi.md#getEmailDashboardActivity) | **GET** /storefront/{storefront_oid}/email/dashboard_activity | Get email dashboard activity
[**getEmailDashboardStats**](StorefrontApi.md#getEmailDashboardStats) | **GET** /storefront/{storefront_oid}/email/dashboard_stats | Get dashboard stats
[**getEmailDispatchLogs**](StorefrontApi.md#getEmailDispatchLogs) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/logs | Get email dispatch logs
[**getEmailEmail**](StorefrontApi.md#getEmailEmail) | **GET** /storefront/{storefront_oid}/email/emails/{commseq_email_uuid} | Get email email
[**getEmailEmailClicks**](StorefrontApi.md#getEmailEmailClicks) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/emails/{commseq_email_uuid}/clicks | Get email email clicks
[**getEmailEmailCustomerEditorUrl**](StorefrontApi.md#getEmailEmailCustomerEditorUrl) | **GET** /storefront/{storefront_oid}/email/emails/{commseq_email_uuid}/orders/{order_id}/editor_url | Get email order customer editor url
[**getEmailEmailOrders**](StorefrontApi.md#getEmailEmailOrders) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/emails/{commseq_email_uuid}/orders | Get email email orders
[**getEmailEmails**](StorefrontApi.md#getEmailEmails) | **GET** /storefront/{storefront_oid}/email/emails | Get email emails
[**getEmailEmailsMultiple**](StorefrontApi.md#getEmailEmailsMultiple) | **POST** /storefront/{storefront_oid}/email/emails/multiple | Get email emails multiple
[**getEmailFlow**](StorefrontApi.md#getEmailFlow) | **GET** /storefront/{storefront_oid}/email/flows/{email_flow_uuid} | Get email flow
[**getEmailFlowFolder**](StorefrontApi.md#getEmailFlowFolder) | **GET** /storefront/{storefront_oid}/email/flow_folders/{email_flow_folder_uuid} | Get email flow folder
[**getEmailFlowFolders**](StorefrontApi.md#getEmailFlowFolders) | **GET** /storefront/{storefront_oid}/email/flow_folders | Get email flow folders
[**getEmailFlowScreenshots**](StorefrontApi.md#getEmailFlowScreenshots) | **GET** /storefront/{storefront_oid}/email/flows/{email_flow_uuid}/screenshots | Get email flow screenshots
[**getEmailFlows**](StorefrontApi.md#getEmailFlows) | **GET** /storefront/{storefront_oid}/email/flows | Get email flows
[**getEmailGlobalSettings**](StorefrontApi.md#getEmailGlobalSettings) | **GET** /storefront/email/global_settings | Get email globalsettings
[**getEmailList**](StorefrontApi.md#getEmailList) | **GET** /storefront/{storefront_oid}/email/lists/{email_list_uuid} | Get email list
[**getEmailListCustomerEditorUrl**](StorefrontApi.md#getEmailListCustomerEditorUrl) | **GET** /storefront/{storefront_oid}/email/lists/{email_list_uuid}/customers/{email_customer_uuid}/editor_url | Get email list customer editor url
[**getEmailListCustomers**](StorefrontApi.md#getEmailListCustomers) | **GET** /storefront/{storefront_oid}/email/lists/{email_list_uuid}/customers | Get email list customers
[**getEmailListSegmentFolder**](StorefrontApi.md#getEmailListSegmentFolder) | **GET** /storefront/{storefront_oid}/email/list_segment_folders/{email_list_segment_folder_uuid} | Get email campaign folder
[**getEmailListSegmentFolders**](StorefrontApi.md#getEmailListSegmentFolders) | **GET** /storefront/{storefront_oid}/email/list_segment_folders | Get email campaign folders
[**getEmailLists**](StorefrontApi.md#getEmailLists) | **GET** /storefront/{storefront_oid}/email/lists | Get email lists
[**getEmailPerformance**](StorefrontApi.md#getEmailPerformance) | **GET** /storefront/{storefront_oid}/email/performance | Get email performance
[**getEmailPlan**](StorefrontApi.md#getEmailPlan) | **GET** /storefront/{storefront_oid}/email/plan | Get email plan
[**getEmailPostcard**](StorefrontApi.md#getEmailPostcard) | **GET** /storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid} | Get email postcard
[**getEmailPostcards**](StorefrontApi.md#getEmailPostcards) | **GET** /storefront/{storefront_oid}/email/postcards | Get email postcards
[**getEmailPostcardsMultiple**](StorefrontApi.md#getEmailPostcardsMultiple) | **POST** /storefront/{storefront_oid}/email/postcards/multiple | Get email postcards multiple
[**getEmailSegment**](StorefrontApi.md#getEmailSegment) | **GET** /storefront/{storefront_oid}/email/segments/{email_segment_uuid} | Get email segment
[**getEmailSegmentCustomerEditorUrl**](StorefrontApi.md#getEmailSegmentCustomerEditorUrl) | **GET** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/customers/{email_customer_uuid}/editor_url | Get email segment customers editor URL
[**getEmailSegmentCustomers**](StorefrontApi.md#getEmailSegmentCustomers) | **GET** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/customers | Get email segment customers
[**getEmailSegments**](StorefrontApi.md#getEmailSegments) | **GET** /storefront/{storefront_oid}/email/segments | Get email segments
[**getEmailSendingDomain**](StorefrontApi.md#getEmailSendingDomain) | **GET** /storefront/email/sending_domain/{domain} | Get email sending domain
[**getEmailSendingDomainStatus**](StorefrontApi.md#getEmailSendingDomainStatus) | **POST** /storefront/email/sending_domains/{domain}/status | Get email sending domain status
[**getEmailSendingDomains**](StorefrontApi.md#getEmailSendingDomains) | **GET** /storefront/email/sending_domains | Get email sending domains
[**getEmailSettings**](StorefrontApi.md#getEmailSettings) | **GET** /storefront/{storefront_oid}/email/settings | Get email settings
[**getEmailSmsOrders**](StorefrontApi.md#getEmailSmsOrders) | **GET** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/sms/orders | Get email sms orders
[**getEmailTemplate**](StorefrontApi.md#getEmailTemplate) | **GET** /storefront/{storefront_oid}/email/templates/{email_template_oid} | Get email template
[**getEmailTemplates**](StorefrontApi.md#getEmailTemplates) | **GET** /storefront/{storefront_oid}/email/templates | Get email templates
[**getEmailThirdPartyProviders**](StorefrontApi.md#getEmailThirdPartyProviders) | **GET** /storefront/{storefront_oid}/email/third_party_providers | Get a list of third party email providers
[**getExperiments**](StorefrontApi.md#getExperiments) | **GET** /storefront/{storefront_oid}/experiments | Get experiments
[**getFsDirectory**](StorefrontApi.md#getFsDirectory) | **GET** /storefront/{id}/fs/dir | Get file manager directory
[**getHeatmap**](StorefrontApi.md#getHeatmap) | **POST** /storefront/{storefront_oid}/screen_recordings/heatmap | Get screen recording heatmap
[**getHeatmapIndex**](StorefrontApi.md#getHeatmapIndex) | **POST** /storefront/{storefront_oid}/screen_recordings/heatmap/index | Get screen recording heatmap index
[**getHistogramPropertyNames**](StorefrontApi.md#getHistogramPropertyNames) | **GET** /storefront/{storefront_oid}/email/histogram/property_names | Get histogram property names
[**getHistogramPropertyValues**](StorefrontApi.md#getHistogramPropertyValues) | **GET** /storefront/{storefront_oid}/email/histogram/property_values | Get histogram property values
[**getLibraryFilterValues**](StorefrontApi.md#getLibraryFilterValues) | **GET** /storefront/code_library/filter_values | Get library values used to populate drop down boxes for filtering.
[**getLibraryItem**](StorefrontApi.md#getLibraryItem) | **GET** /storefront/code_library/{library_item_oid} | Get library item.
[**getLibraryItemPublishedVersions**](StorefrontApi.md#getLibraryItemPublishedVersions) | **GET** /storefront/code_library/{library_item_oid}/published_versions | Get all published versions for a library item.
[**getScreenRecording**](StorefrontApi.md#getScreenRecording) | **GET** /storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid} | Get screen recording
[**getScreenRecordingPageViewData**](StorefrontApi.md#getScreenRecordingPageViewData) | **GET** /storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/page_view_data/{screen_recording_page_view_uuid} | Get screen recording page view data
[**getScreenRecordingSegment**](StorefrontApi.md#getScreenRecordingSegment) | **GET** /storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid} | Get screen recording segment
[**getScreenRecordingSegments**](StorefrontApi.md#getScreenRecordingSegments) | **GET** /storefront/{storefront_oid}/screen_recordings/segments | Get screen recording segments
[**getScreenRecordingSettings**](StorefrontApi.md#getScreenRecordingSettings) | **GET** /storefront/{storefront_oid}/screen_recordings/settings | Get screen recording settings
[**getScreenRecordingTags**](StorefrontApi.md#getScreenRecordingTags) | **POST** /storefront/{storefront_oid}/screen_recordings/tags | Get tags used by screen recording
[**getScreenRecordingsByQuery**](StorefrontApi.md#getScreenRecordingsByQuery) | **POST** /storefront/{storefront_oid}/screen_recordings/query | Query screen recordings
[**getScreenRecordingsBySegment**](StorefrontApi.md#getScreenRecordingsBySegment) | **POST** /storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid}/query | Get screen recordings by segment
[**getStoreFrontPricingTiers**](StorefrontApi.md#getStoreFrontPricingTiers) | **GET** /storefront/pricing_tiers | Retrieve pricing tiers
[**getStoreFronts**](StorefrontApi.md#getStoreFronts) | **GET** /storefront | Get storefronts (internal use only for security reasons)
[**getThumbnailParameters**](StorefrontApi.md#getThumbnailParameters) | **POST** /storefront/thumbnailParameters | Get thumbnail parameters
[**getTransactionEmail**](StorefrontApi.md#getTransactionEmail) | **GET** /storefront/{storefront_oid}/transaction_email/list/{email_id} | Gets a transaction email object
[**getTransactionEmailList**](StorefrontApi.md#getTransactionEmailList) | **GET** /storefront/{storefront_oid}/transaction_email/list | Gets a list of transaction email names
[**getTransactionEmailScreenshots**](StorefrontApi.md#getTransactionEmailScreenshots) | **GET** /storefront/{storefront_oid}/transaction_email/list/{email_id}/screenshots | Get transactional email screenshots
[**getTwilioAccount**](StorefrontApi.md#getTwilioAccount) | **GET** /storefront/twilio/accounts/{esp_twilio_uuid} | Get Twilio account
[**getTwilioAccounts**](StorefrontApi.md#getTwilioAccounts) | **GET** /storefront/twilio/accounts | Get all Twilio accounts
[**getUploadFsFileUrl**](StorefrontApi.md#getUploadFsFileUrl) | **GET** /storefront/{id}/fs/upload_url/{extension} | Retrieves a S3 url where a file may be uploaded. Once uploaded, use uploadFsFile to trigger the server into reading the S3 bucket and retrieving the file.
[**globalUnsubscribe**](StorefrontApi.md#globalUnsubscribe) | **POST** /storefront/{storefront_oid}/email/globalUnsubscribe | Globally unsubscribe a customer
[**importEmailThirdPartyProviderList**](StorefrontApi.md#importEmailThirdPartyProviderList) | **POST** /storefront/{storefront_oid}/email/third_party_providers/import | Import a third party provider list
[**insertEmailCampaign**](StorefrontApi.md#insertEmailCampaign) | **POST** /storefront/{storefront_oid}/email/campaigns | Insert email campaign
[**insertEmailCampaignFolder**](StorefrontApi.md#insertEmailCampaignFolder) | **POST** /storefront/{storefront_oid}/email/campaign_folders | Insert email campaign folder
[**insertEmailCommseq**](StorefrontApi.md#insertEmailCommseq) | **POST** /storefront/{storefront_oid}/email/commseqs | Insert email commseq
[**insertEmailEmail**](StorefrontApi.md#insertEmailEmail) | **POST** /storefront/{storefront_oid}/email/emails | Insert email email
[**insertEmailFlow**](StorefrontApi.md#insertEmailFlow) | **POST** /storefront/{storefront_oid}/email/flows | Insert email flow
[**insertEmailFlowFolder**](StorefrontApi.md#insertEmailFlowFolder) | **POST** /storefront/{storefront_oid}/email/flow_folders | Insert email flow folder
[**insertEmailList**](StorefrontApi.md#insertEmailList) | **POST** /storefront/{storefront_oid}/email/lists | Insert email list
[**insertEmailListSegmentFolder**](StorefrontApi.md#insertEmailListSegmentFolder) | **POST** /storefront/{storefront_oid}/email/list_segment_folders | Insert email campaign folder
[**insertEmailPostcard**](StorefrontApi.md#insertEmailPostcard) | **POST** /storefront/{storefront_oid}/email/postcards | Insert email postcard
[**insertEmailSegment**](StorefrontApi.md#insertEmailSegment) | **POST** /storefront/{storefront_oid}/email/segments | Insert email segment
[**insertScreenRecordingSegment**](StorefrontApi.md#insertScreenRecordingSegment) | **POST** /storefront/{storefront_oid}/screen_recordings/segments | Insert screen recording segment
[**insertUpdatePageContentAttribute**](StorefrontApi.md#insertUpdatePageContentAttribute) | **POST** /storefront/{storefront_oid}/pages/{page_oid}/content/attributes | Upsert a page content attribute
[**prepareDownloadEmailSegment**](StorefrontApi.md#prepareDownloadEmailSegment) | **POST** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/downloadPrepare | Prepare download of email segment
[**publishLibraryItem**](StorefrontApi.md#publishLibraryItem) | **POST** /storefront/code_library/{library_item_oid}/publish | Publish library item.
[**purchaseLibraryItem**](StorefrontApi.md#purchaseLibraryItem) | **POST** /storefront/code_library/{library_item_oid}/purchase | Purchase public library item, which creates a copy of the item in your personal code library
[**releaseEmailCommseqStepWaiting**](StorefrontApi.md#releaseEmailCommseqStepWaiting) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/waiting/{commseq_step_uuid} | Release email communication sequence customers waiting at the specified step
[**resetEmailCommseqRateLimiters**](StorefrontApi.md#resetEmailCommseqRateLimiters) | **DELETE** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/rate_limiters | Reset email commseq rate limiters (only callable by UltraCart Support)
[**review**](StorefrontApi.md#review) | **POST** /storefront/{storefront_oid}/email/emails/{commseq_email_uuid}/review | Request a review of an email
[**search**](StorefrontApi.md#search) | **GET** /storefront/search | Searches for all matching values
[**search2**](StorefrontApi.md#search2) | **POST** /storefront/search | Searches for all matching values (using POST)
[**searchEmailListCustomers**](StorefrontApi.md#searchEmailListCustomers) | **GET** /storefront/{storefront_oid}/email/lists/{email_list_uuid}/search | Search email list customers
[**searchEmailSegmentCustomers**](StorefrontApi.md#searchEmailSegmentCustomers) | **GET** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/search | Search email segment customers
[**searchLibraryItems**](StorefrontApi.md#searchLibraryItems) | **POST** /storefront/code_library/search | Retrieve library items
[**searchPublishedItems**](StorefrontApi.md#searchPublishedItems) | **POST** /storefront/code_library/search_published | Retrieve library items
[**searchReviewItems**](StorefrontApi.md#searchReviewItems) | **POST** /storefront/code_library/search_review | Retrieve library items needing review or rejected
[**searchSharedItems**](StorefrontApi.md#searchSharedItems) | **POST** /storefront/code_library/search_shared | Retrieve library items
[**sendEmailTest**](StorefrontApi.md#sendEmailTest) | **POST** /storefront/{storefront_oid}/email/emails/{commseq_email_uuid}/test | Send email test
[**sendPostcardTest**](StorefrontApi.md#sendPostcardTest) | **POST** /storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}/test | Send postcard test
[**sendSmsTest**](StorefrontApi.md#sendSmsTest) | **POST** /storefront/{storefront_oid}/email/sms/{commseq_uuid}/{commseq_step_uuid}/test | Send SMS test
[**sendWebhookTest**](StorefrontApi.md#sendWebhookTest) | **POST** /storefront/{storefront_oid}/email/webhooks/test | Send webhook test
[**sequenceTest**](StorefrontApi.md#sequenceTest) | **POST** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/test | Sequence test
[**startEmailCampaign**](StorefrontApi.md#startEmailCampaign) | **PUT** /storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}/start | Start email campaign
[**subscribeToEmailList**](StorefrontApi.md#subscribeToEmailList) | **POST** /storefront/{storefront_oid}/email/lists/{email_list_uuid}/subscribe | Subscribe customers to email list
[**sunsetEmailSegment**](StorefrontApi.md#sunsetEmailSegment) | **PUT** /storefront/{storefront_oid}/email/segments/{email_segment_uuid}/sunset | Sunset email segment
[**unfavoriteScreenRecording**](StorefrontApi.md#unfavoriteScreenRecording) | **DELETE** /storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/favorite | Remove favorite flag on screen recording
[**updateEmailCampaign**](StorefrontApi.md#updateEmailCampaign) | **PUT** /storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid} | Update email campaign
[**updateEmailCampaignFolder**](StorefrontApi.md#updateEmailCampaignFolder) | **PUT** /storefront/{storefront_oid}/email/campaign_folders/{email_campaign_folder_uuid} | Update email campaign folder
[**updateEmailCommseq**](StorefrontApi.md#updateEmailCommseq) | **PUT** /storefront/{storefront_oid}/email/commseqs/{commseq_uuid} | Update email commseq
[**updateEmailCustomer**](StorefrontApi.md#updateEmailCustomer) | **PUT** /storefront/{storefront_oid}/email/customers/{email_customer_uuid} | Update email customer
[**updateEmailEmail**](StorefrontApi.md#updateEmailEmail) | **PUT** /storefront/{storefront_oid}/email/emails/{commseq_email_uuid} | Update email email
[**updateEmailFlow**](StorefrontApi.md#updateEmailFlow) | **PUT** /storefront/{storefront_oid}/email/flows/{email_flow_uuid} | Update email flow
[**updateEmailFlowFolder**](StorefrontApi.md#updateEmailFlowFolder) | **PUT** /storefront/{storefront_oid}/email/flow_folders/{email_flow_folder_uuid} | Update email flow folder
[**updateEmailGlobalSettings**](StorefrontApi.md#updateEmailGlobalSettings) | **POST** /storefront/email/global_settings | Update email global settings
[**updateEmailList**](StorefrontApi.md#updateEmailList) | **PUT** /storefront/{storefront_oid}/email/lists/{email_list_uuid} | Update email list
[**updateEmailListSegmentFolder**](StorefrontApi.md#updateEmailListSegmentFolder) | **PUT** /storefront/{storefront_oid}/email/list_segment_folders/{email_list_segment_folder_uuid} | Update email campaign folder
[**updateEmailPlan**](StorefrontApi.md#updateEmailPlan) | **POST** /storefront/{storefront_oid}/email/plan | Update email plan
[**updateEmailPostcard**](StorefrontApi.md#updateEmailPostcard) | **PUT** /storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid} | Update email postcard
[**updateEmailSegment**](StorefrontApi.md#updateEmailSegment) | **PUT** /storefront/{storefront_oid}/email/segments/{email_segment_uuid} | Update email segment
[**updateEmailSendingDomain**](StorefrontApi.md#updateEmailSendingDomain) | **PUT** /storefront/email/sending_domains/{domain} | Update email sending domain
[**updateEmailSettings**](StorefrontApi.md#updateEmailSettings) | **POST** /storefront/{storefront_oid}/email/settings | Update email settings
[**updateExperiment**](StorefrontApi.md#updateExperiment) | **PUT** /storefront/{storefront_oid}/experiments/{storefront_experiment_oid} | Update experiment
[**updateLibraryItem**](StorefrontApi.md#updateLibraryItem) | **PUT** /storefront/code_library/{library_item_oid} | Update library item. Note that only certain fields may be updated via this method.
[**updateScreenRecordingMerchantNotes**](StorefrontApi.md#updateScreenRecordingMerchantNotes) | **POST** /storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/merchant_notes | Update merchant notes on a screen recording
[**updateScreenRecordingSegment**](StorefrontApi.md#updateScreenRecordingSegment) | **POST** /storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid} | Update screen recording segment
[**updateScreenRecordingSettings**](StorefrontApi.md#updateScreenRecordingSettings) | **POST** /storefront/{storefront_oid}/screen_recordings/settings | Update screen recording settings
[**updateScreenRecordingTags**](StorefrontApi.md#updateScreenRecordingTags) | **POST** /storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/tags | Update tags on a screen recording
[**updateTransactionEmail**](StorefrontApi.md#updateTransactionEmail) | **PUT** /storefront/{storefront_oid}/transaction_email/list/{email_id} | Updates a transaction email object
[**updateTwilioAccount**](StorefrontApi.md#updateTwilioAccount) | **PUT** /storefront/twilio/accounts/{esp_twilio_uuid} | Update Twilio account
[**uploadFsFile**](StorefrontApi.md#uploadFsFile) | **POST** /storefront/{id}/fs/upload | This is the last step in uploading a file after 1) calling getUploadFsFileUrl and 2) uploading a file to the provided url, then finally 3) calling this method and providing the key to trigger the server into reading the S3 bucket and retrieving the file.
[**validateRuler**](StorefrontApi.md#validateRuler) | **POST** /storefront/ruler/validate | Validate AWS Event Ruler



## addToLibrary

> LibraryItemResponse addToLibrary(add_library_request)

Add to library


### Example

<!-- UC_START_EXAMPLE addToLibrary -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let add_library_request = new UltraCartRestApiV2.AddLibraryItemRequest(); // AddLibraryItemRequest | New library item request
apiInstance.addToLibrary(add_library_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE addToLibrary -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_library_request** | [**AddLibraryItemRequest**](AddLibraryItemRequest.md)| New library item request | 

### Return type

[**LibraryItemResponse**](LibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyToStoreFront

> ApplyLibraryItemResponse applyToStoreFront(apply_library_request)

Apply library item to storefront.


### Example

<!-- UC_START_EXAMPLE applyToStoreFront -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let apply_library_request = new UltraCartRestApiV2.ApplyLibraryItemRequest(); // ApplyLibraryItemRequest | New library item
apiInstance.applyToStoreFront(apply_library_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE applyToStoreFront -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apply_library_request** | [**ApplyLibraryItemRequest**](ApplyLibraryItemRequest.md)| New library item | 

### Return type

[**ApplyLibraryItemResponse**](ApplyLibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## archiveEmailList

> EmailListArchiveResponse archiveEmailList(storefront_oid, email_list_uuid)

Archive email list


### Example

<!-- UC_START_EXAMPLE archiveEmailList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
apiInstance.archiveEmailList(storefront_oid, email_list_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE archiveEmailList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 

### Return type

[**EmailListArchiveResponse**](EmailListArchiveResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## archiveEmailSegment

> EmailSegmentArchiveResponse archiveEmailSegment(storefront_oid, email_segment_uuid)

Archive email segment


### Example

<!-- UC_START_EXAMPLE archiveEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
apiInstance.archiveEmailSegment(storefront_oid, email_segment_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE archiveEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 

### Return type

[**EmailSegmentArchiveResponse**](EmailSegmentArchiveResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backPopulateEmailFlow

> EmailFlowBackPopulateResponse backPopulateEmailFlow(storefront_oid, email_flow_uuid, back_populate_request)

Back populate email flow


### Example

<!-- UC_START_EXAMPLE backPopulateEmailFlow -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_uuid = "email_flow_uuid_example"; // String | 
let back_populate_request = new UltraCartRestApiV2.EmailFlowBackPopulateRequest(); // EmailFlowBackPopulateRequest | The request to back populate
apiInstance.backPopulateEmailFlow(storefront_oid, email_flow_uuid, back_populate_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE backPopulateEmailFlow -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_uuid** | **String**|  | 
 **back_populate_request** | [**EmailFlowBackPopulateRequest**](EmailFlowBackPopulateRequest.md)| The request to back populate | 

### Return type

[**EmailFlowBackPopulateResponse**](EmailFlowBackPopulateResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checkDownloadEmailSegment

> EmailSegmentDownloadPrepareResponse checkDownloadEmailSegment(storefront_oid, email_segment_uuid, email_segment_rebuild_uuid)

Check download of email segment


### Example

<!-- UC_START_EXAMPLE checkDownloadEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
let email_segment_rebuild_uuid = "email_segment_rebuild_uuid_example"; // String | 
apiInstance.checkDownloadEmailSegment(storefront_oid, email_segment_uuid, email_segment_rebuild_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE checkDownloadEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 
 **email_segment_rebuild_uuid** | **String**|  | 

### Return type

[**EmailSegmentDownloadPrepareResponse**](EmailSegmentDownloadPrepareResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloneEmailCampaign

> EmailCampaignResponse cloneEmailCampaign(storefront_oid, email_campaign_uuid, opts)

Clone email campaign


### Example

<!-- UC_START_EXAMPLE cloneEmailCampaign -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_uuid = "email_campaign_uuid_example"; // String | 
let opts = {
  'target_storefront_oid': 56 // Number | 
};
apiInstance.cloneEmailCampaign(storefront_oid, email_campaign_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE cloneEmailCampaign -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_uuid** | **String**|  | 
 **target_storefront_oid** | **Number**|  | [optional] 

### Return type

[**EmailCampaignResponse**](EmailCampaignResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloneEmailFlow

> EmailFlowResponse cloneEmailFlow(storefront_oid, email_flow_uuid, opts)

Clone email flow


### Example

<!-- UC_START_EXAMPLE cloneEmailFlow -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_uuid = "email_flow_uuid_example"; // String | 
let opts = {
  'target_storefront_oid': 56 // Number | 
};
apiInstance.cloneEmailFlow(storefront_oid, email_flow_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE cloneEmailFlow -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_uuid** | **String**|  | 
 **target_storefront_oid** | **Number**|  | [optional] 

### Return type

[**EmailFlowResponse**](EmailFlowResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createEmailSendingDomain

> EmailSendingDomainResponse createEmailSendingDomain(domain)

Create email campaign


### Example

<!-- UC_START_EXAMPLE createEmailSendingDomain -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let domain = "domain_example"; // String | 
apiInstance.createEmailSendingDomain(domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE createEmailSendingDomain -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**EmailSendingDomainResponse**](EmailSendingDomainResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createEmailSendingDomain2

> EmailSendingDomainResponse createEmailSendingDomain2(email_domain)

Create email sending domain for various providers


### Example

<!-- UC_START_EXAMPLE createEmailSendingDomain2 -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let email_domain = new UltraCartRestApiV2.EmailDomain(); // EmailDomain | EmailDomain
apiInstance.createEmailSendingDomain2(email_domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE createEmailSendingDomain2 -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_domain** | [**EmailDomain**](EmailDomain.md)| EmailDomain | 

### Return type

[**EmailSendingDomainResponse**](EmailSendingDomainResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFsDirectory

> FileManagerPageResponse createFsDirectory(id, opts)

Create file manager directory


### Example

<!-- UC_START_EXAMPLE createFsDirectory -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let id = 56; // Number | 
let opts = {
  'name': "name_example", // String | 
  'parent_storefront_fs_directory_oid': 56 // Number | 
};
apiInstance.createFsDirectory(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE createFsDirectory -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **name** | **String**|  | [optional] 
 **parent_storefront_fs_directory_oid** | **Number**|  | [optional] 

### Return type

[**FileManagerPageResponse**](FileManagerPageResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createTwilioAccount

> TwilioResponse createTwilioAccount(twilio)

Create Twilio account


### Example

<!-- UC_START_EXAMPLE createTwilioAccount -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let twilio = new UltraCartRestApiV2.Twilio(); // Twilio | Twilio
apiInstance.createTwilioAccount(twilio, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE createTwilioAccount -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **twilio** | [**Twilio**](Twilio.md)| Twilio | 

### Return type

[**TwilioResponse**](TwilioResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEmailCampaignFolder

> BaseResponse deleteEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid)

Delete email campaignFolder


### Example

<!-- UC_START_EXAMPLE deleteEmailCampaignFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_folder_uuid = "email_campaign_folder_uuid_example"; // String | 
apiInstance.deleteEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailCampaignFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_folder_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailCommseqStat

> deleteEmailCommseqStat(storefront_oid, commseq_uuid)

Delete communication sequence stats


### Example

<!-- UC_START_EXAMPLE deleteEmailCommseqStat -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
apiInstance.deleteEmailCommseqStat(storefront_oid, commseq_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailCommseqStat -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailEmail

> BaseResponse deleteEmailEmail(storefront_oid, commseq_email_uuid)

Delete email email


### Example

<!-- UC_START_EXAMPLE deleteEmailEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
apiInstance.deleteEmailEmail(storefront_oid, commseq_email_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_email_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailFlowFolder

> BaseResponse deleteEmailFlowFolder(storefront_oid, email_flow_folder_uuid)

Delete email flowFolder


### Example

<!-- UC_START_EXAMPLE deleteEmailFlowFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_folder_uuid = "email_flow_folder_uuid_example"; // String | 
apiInstance.deleteEmailFlowFolder(storefront_oid, email_flow_folder_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailFlowFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_folder_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailListCustomer

> BaseResponse deleteEmailListCustomer(storefront_oid, email_list_uuid, email_customer_uuid)

Delete email list customer


### Example

<!-- UC_START_EXAMPLE deleteEmailListCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
let email_customer_uuid = "email_customer_uuid_example"; // String | 
apiInstance.deleteEmailListCustomer(storefront_oid, email_list_uuid, email_customer_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailListCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 
 **email_customer_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailListSegmentFolder

> BaseResponse deleteEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid)

Delete email ListSegmentFolder


### Example

<!-- UC_START_EXAMPLE deleteEmailListSegmentFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_segment_folder_uuid = "email_list_segment_folder_uuid_example"; // String | 
apiInstance.deleteEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailListSegmentFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_segment_folder_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailPostcard

> BaseResponse deleteEmailPostcard(storefront_oid, commseq_postcard_uuid)

Delete email postcard


### Example

<!-- UC_START_EXAMPLE deleteEmailPostcard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_postcard_uuid = "commseq_postcard_uuid_example"; // String | 
apiInstance.deleteEmailPostcard(storefront_oid, commseq_postcard_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailPostcard -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_postcard_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailSendingDomain

> BaseResponse deleteEmailSendingDomain(domain)

delete email campaign


### Example

<!-- UC_START_EXAMPLE deleteEmailSendingDomain -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let domain = "domain_example"; // String | 
apiInstance.deleteEmailSendingDomain(domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteEmailSendingDomain -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteExperiment

> deleteExperiment(storefront_oid, storefront_experiment_oid)

Delete experiment


### Example

<!-- UC_START_EXAMPLE deleteExperiment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let storefront_experiment_oid = 56; // Number | 
apiInstance.deleteExperiment(storefront_oid, storefront_experiment_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteExperiment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **storefront_experiment_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFsFile

> FileManagerPageResponse deleteFsFile(id, opts)

Delete file manager directory


### Example

<!-- UC_START_EXAMPLE deleteFsFile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let id = 56; // Number | 
let opts = {
  'parent_storefront_fs_directory_oid': 56, // Number | 
  'storefront_fs_file_oid': 56 // Number | 
};
apiInstance.deleteFsFile(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteFsFile -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parent_storefront_fs_directory_oid** | **Number**|  | [optional] 
 **storefront_fs_file_oid** | **Number**|  | [optional] 

### Return type

[**FileManagerPageResponse**](FileManagerPageResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteHeatmap

> deleteHeatmap(storefront_oid, query)

Delete screen recording heatmap

Delete screen recording heatmap 


### Example

<!-- UC_START_EXAMPLE deleteHeatmap -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let query = new UltraCartRestApiV2.ScreenRecordingHeatmapReset(); // ScreenRecordingHeatmapReset | Query
apiInstance.deleteHeatmap(storefront_oid, query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteHeatmap -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **query** | [**ScreenRecordingHeatmapReset**](ScreenRecordingHeatmapReset.md)| Query | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLibraryItem

> deleteLibraryItem(library_item_oid)

Delete library item


### Example

<!-- UC_START_EXAMPLE deleteLibraryItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
apiInstance.deleteLibraryItem(library_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteLibraryItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteLibraryItemPublishedVersions

> deleteLibraryItemPublishedVersions(library_item_oid)

Delete all published versions for a library item, including anything in review.


### Example

<!-- UC_START_EXAMPLE deleteLibraryItemPublishedVersions -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
apiInstance.deleteLibraryItemPublishedVersions(library_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteLibraryItemPublishedVersions -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteScreenRecordingSegment

> deleteScreenRecordingSegment(storefront_oid, screen_recording_segment_oid)

Delete screen recording segment


### Example

<!-- UC_START_EXAMPLE deleteScreenRecordingSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_segment_oid = 56; // Number | 
apiInstance.deleteScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteScreenRecordingSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_segment_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTwilioAccount

> BaseResponse deleteTwilioAccount(esp_twilio_uuid)

delete Twilio account


### Example

<!-- UC_START_EXAMPLE deleteTwilioAccount -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let esp_twilio_uuid = "esp_twilio_uuid_example"; // String | 
apiInstance.deleteTwilioAccount(esp_twilio_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteTwilioAccount -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **esp_twilio_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## duplicateLibraryItem

> LibraryItemResponse duplicateLibraryItem(library_item_oid)

Duplicate library item.


### Example

<!-- UC_START_EXAMPLE duplicateLibraryItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
apiInstance.duplicateLibraryItem(library_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE duplicateLibraryItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 

### Return type

[**LibraryItemResponse**](LibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## favoriteScreenRecording

> favoriteScreenRecording(storefront_oid, screen_recording_uuid)

Update favorite flag on screen recording

Update favorite flag on screen recording 


### Example

<!-- UC_START_EXAMPLE favoriteScreenRecording -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_uuid = "screen_recording_uuid_example"; // String | 
apiInstance.favoriteScreenRecording(storefront_oid, screen_recording_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE favoriteScreenRecording -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## geocodeAddress

> GeocodeResponse geocodeAddress(storefront_oid, geocode_request)

Obtain lat/long for an address


### Example

<!-- UC_START_EXAMPLE geocodeAddress -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let geocode_request = new UltraCartRestApiV2.GeocodeRequest(); // GeocodeRequest | geocode request
apiInstance.geocodeAddress(storefront_oid, geocode_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE geocodeAddress -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **geocode_request** | [**GeocodeRequest**](GeocodeRequest.md)| geocode request | 

### Return type

[**GeocodeResponse**](GeocodeResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCountries

> CountriesResponse getCountries(storefront_oid)

Get countries

Obtain a list of all the countries 


### Example

<!-- UC_START_EXAMPLE getCountries -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getCountries(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCountries -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**CountriesResponse**](CountriesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEditorToken

> EmailEditorTokenResponse getEditorToken(storefront_oid)

Gets editor token

Fetches a temporary authentication token for the editor 


### Example

<!-- UC_START_EXAMPLE getEditorToken -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEditorToken(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEditorToken -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailEditorTokenResponse**](EmailEditorTokenResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailBaseTemplates

> EmailBaseTemplateListResponse getEmailBaseTemplates(storefront_oid)

Get email communication base templates


### Example

<!-- UC_START_EXAMPLE getEmailBaseTemplates -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailBaseTemplates(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailBaseTemplates -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailBaseTemplateListResponse**](EmailBaseTemplateListResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCampaign

> EmailCampaignResponse getEmailCampaign(storefront_oid, email_campaign_uuid)

Get email campaign


### Example

<!-- UC_START_EXAMPLE getEmailCampaign -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_uuid = "email_campaign_uuid_example"; // String | 
apiInstance.getEmailCampaign(storefront_oid, email_campaign_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCampaign -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_uuid** | **String**|  | 

### Return type

[**EmailCampaignResponse**](EmailCampaignResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCampaignFolder

> EmailCampaignFolderResponse getEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid)

Get email campaign folder


### Example

<!-- UC_START_EXAMPLE getEmailCampaignFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_folder_uuid = "email_campaign_folder_uuid_example"; // String | 
apiInstance.getEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCampaignFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_folder_uuid** | **String**|  | 

### Return type

[**EmailCampaignFolderResponse**](EmailCampaignFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCampaignFolders

> EmailCampaignFoldersResponse getEmailCampaignFolders(storefront_oid)

Get email campaign folders


### Example

<!-- UC_START_EXAMPLE getEmailCampaignFolders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailCampaignFolders(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCampaignFolders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailCampaignFoldersResponse**](EmailCampaignFoldersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCampaignScreenshots

> ScreenshotsResponse getEmailCampaignScreenshots(storefront_oid, email_campaign_uuid)

Get email campaign screenshots


### Example

<!-- UC_START_EXAMPLE getEmailCampaignScreenshots -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_uuid = "email_campaign_uuid_example"; // String | 
apiInstance.getEmailCampaignScreenshots(storefront_oid, email_campaign_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCampaignScreenshots -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_uuid** | **String**|  | 

### Return type

[**ScreenshotsResponse**](ScreenshotsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCampaigns

> EmailCampaignsResponse getEmailCampaigns(storefront_oid)

Get email campaigns


### Example

<!-- UC_START_EXAMPLE getEmailCampaigns -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailCampaigns(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCampaigns -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailCampaignsResponse**](EmailCampaignsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCampaignsWithStats

> EmailCampaignsResponse getEmailCampaignsWithStats(storefront_oid, stat_days)

Get email campaigns with stats


### Example

<!-- UC_START_EXAMPLE getEmailCampaignsWithStats -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let stat_days = "stat_days_example"; // String | 
apiInstance.getEmailCampaignsWithStats(storefront_oid, stat_days, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCampaignsWithStats -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **stat_days** | **String**|  | 

### Return type

[**EmailCampaignsResponse**](EmailCampaignsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseq

> EmailCommseqResponse getEmailCommseq(storefront_oid, commseq_uuid)

Get email commseq


### Example

<!-- UC_START_EXAMPLE getEmailCommseq -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
apiInstance.getEmailCommseq(storefront_oid, commseq_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseq -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 

### Return type

[**EmailCommseqResponse**](EmailCommseqResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseqEditorValues

> EmailEditorValuesResponse getEmailCommseqEditorValues(storefront_oid)

Get email merchant specific editor values


### Example

<!-- UC_START_EXAMPLE getEmailCommseqEditorValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailCommseqEditorValues(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqEditorValues -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailEditorValuesResponse**](EmailEditorValuesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseqEmailStats

> EmailStatSummaryResponse getEmailCommseqEmailStats(storefront_oid, commseq_uuid, statsRequest)

Get email communication sequence emails stats


### Example

<!-- UC_START_EXAMPLE getEmailCommseqEmailStats -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let statsRequest = new UltraCartRestApiV2.EmailStatSummaryRequest(); // EmailStatSummaryRequest | StatsRequest
apiInstance.getEmailCommseqEmailStats(storefront_oid, commseq_uuid, statsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqEmailStats -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **statsRequest** | [**EmailStatSummaryRequest**](EmailStatSummaryRequest.md)| StatsRequest | 

### Return type

[**EmailStatSummaryResponse**](EmailStatSummaryResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailCommseqPostcardStats

> EmailStatPostcardSummaryResponse getEmailCommseqPostcardStats(storefront_oid, commseq_uuid, statsRequest)

Get email communication sequence postcard stats


### Example

<!-- UC_START_EXAMPLE getEmailCommseqPostcardStats -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let statsRequest = new UltraCartRestApiV2.EmailStatPostcardSummaryRequest(); // EmailStatPostcardSummaryRequest | StatsRequest
apiInstance.getEmailCommseqPostcardStats(storefront_oid, commseq_uuid, statsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqPostcardStats -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **statsRequest** | [**EmailStatPostcardSummaryRequest**](EmailStatPostcardSummaryRequest.md)| StatsRequest | 

### Return type

[**EmailStatPostcardSummaryResponse**](EmailStatPostcardSummaryResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailCommseqPostcardTracking

> EmailPostcardTrackingResponse getEmailCommseqPostcardTracking(storefront_oid, commseq_postcard_uuid)

Get email communication postcard tracking


### Example

<!-- UC_START_EXAMPLE getEmailCommseqPostcardTracking -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_postcard_uuid = "commseq_postcard_uuid_example"; // String | 
apiInstance.getEmailCommseqPostcardTracking(storefront_oid, commseq_postcard_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqPostcardTracking -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_postcard_uuid** | **String**|  | 

### Return type

[**EmailPostcardTrackingResponse**](EmailPostcardTrackingResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseqRateLimiters

> EmailRateLimitersResponse getEmailCommseqRateLimiters(storefront_oid, commseq_uuid)

Get email commseq rate limiters


### Example

<!-- UC_START_EXAMPLE getEmailCommseqRateLimiters -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
apiInstance.getEmailCommseqRateLimiters(storefront_oid, commseq_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqRateLimiters -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 

### Return type

[**EmailRateLimitersResponse**](EmailRateLimitersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseqSmsStats

> EmailStatSmsSummaryResponse getEmailCommseqSmsStats(storefront_oid, commseq_uuid, statsRequest)

Get email communication sequence sms stats


### Example

<!-- UC_START_EXAMPLE getEmailCommseqSmsStats -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let statsRequest = new UltraCartRestApiV2.EmailStatSmsSummaryRequest(); // EmailStatSmsSummaryRequest | StatsRequest
apiInstance.getEmailCommseqSmsStats(storefront_oid, commseq_uuid, statsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqSmsStats -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **statsRequest** | [**EmailStatSmsSummaryRequest**](EmailStatSmsSummaryRequest.md)| StatsRequest | 

### Return type

[**EmailStatSmsSummaryResponse**](EmailStatSmsSummaryResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailCommseqStatOverall

> EmailCommseqStatResponse getEmailCommseqStatOverall(storefront_oid, commseq_uuid)

Get communication sequence stats overall


### Example

<!-- UC_START_EXAMPLE getEmailCommseqStatOverall -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
apiInstance.getEmailCommseqStatOverall(storefront_oid, commseq_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqStatOverall -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 

### Return type

[**EmailCommseqStatResponse**](EmailCommseqStatResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseqStepStats

> EmailStepStatResponse getEmailCommseqStepStats(storefront_oid, commseq_uuid, statsRequest)

Get email communication sequence step stats


### Example

<!-- UC_START_EXAMPLE getEmailCommseqStepStats -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let statsRequest = new UltraCartRestApiV2.EmailStepStatRequest(); // EmailStepStatRequest | StatsRequest
apiInstance.getEmailCommseqStepStats(storefront_oid, commseq_uuid, statsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqStepStats -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **statsRequest** | [**EmailStepStatRequest**](EmailStepStatRequest.md)| StatsRequest | 

### Return type

[**EmailStepStatResponse**](EmailStepStatResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailCommseqStepWaiting

> EmailStepWaitingResponse getEmailCommseqStepWaiting(storefront_oid, commseq_uuid, waitingRequest)

Get email communication sequence customers waiting at each requested step


### Example

<!-- UC_START_EXAMPLE getEmailCommseqStepWaiting -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let waitingRequest = new UltraCartRestApiV2.EmailStepWaitingRequest(); // EmailStepWaitingRequest | WaitingRequest
apiInstance.getEmailCommseqStepWaiting(storefront_oid, commseq_uuid, waitingRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqStepWaiting -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **waitingRequest** | [**EmailStepWaitingRequest**](EmailStepWaitingRequest.md)| WaitingRequest | 

### Return type

[**EmailStepWaitingResponse**](EmailStepWaitingResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailCommseqWebhookEditorValues

> EmailWebhookEditorValuesResponse getEmailCommseqWebhookEditorValues(storefront_oid, commseq_uuid)

Get email webhook editor values


### Example

<!-- UC_START_EXAMPLE getEmailCommseqWebhookEditorValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
apiInstance.getEmailCommseqWebhookEditorValues(storefront_oid, commseq_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqWebhookEditorValues -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 

### Return type

[**EmailWebhookEditorValuesResponse**](EmailWebhookEditorValuesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCommseqs

> EmailCommseqsResponse getEmailCommseqs(storefront_oid)

Get email commseqs


### Example

<!-- UC_START_EXAMPLE getEmailCommseqs -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailCommseqs(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCommseqs -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailCommseqsResponse**](EmailCommseqsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCustomerEditorUrl

> EmailCustomerEditorUrlResponse getEmailCustomerEditorUrl(storefront_oid, email_customer_uuid)

Get customers editor URL


### Example

<!-- UC_START_EXAMPLE getEmailCustomerEditorUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_customer_uuid = "email_customer_uuid_example"; // String | 
apiInstance.getEmailCustomerEditorUrl(storefront_oid, email_customer_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCustomerEditorUrl -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_customer_uuid** | **String**|  | 

### Return type

[**EmailCustomerEditorUrlResponse**](EmailCustomerEditorUrlResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailCustomers

> EmailCustomersResponse getEmailCustomers(storefront_oid, opts)

Get email customers


### Example

<!-- UC_START_EXAMPLE getEmailCustomers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchEmailPrefix': "searchEmailPrefix_example" // String | 
};
apiInstance.getEmailCustomers(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailCustomers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **searchEmailPrefix** | **String**|  | [optional] 

### Return type

[**EmailCustomersResponse**](EmailCustomersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailDashboardActivity

> EmailDashboardActivityResponse getEmailDashboardActivity(storefront_oid, opts)

Get email dashboard activity


### Example

<!-- UC_START_EXAMPLE getEmailDashboardActivity -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'last_records': 56 // Number | 
};
apiInstance.getEmailDashboardActivity(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailDashboardActivity -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **last_records** | **Number**|  | [optional] 

### Return type

[**EmailDashboardActivityResponse**](EmailDashboardActivityResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailDashboardStats

> EmailDashboardStatsResponse getEmailDashboardStats(storefront_oid, opts)

Get dashboard stats


### Example

<!-- UC_START_EXAMPLE getEmailDashboardStats -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'days': 56 // Number | 
};
apiInstance.getEmailDashboardStats(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailDashboardStats -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **days** | **Number**|  | [optional] 

### Return type

[**EmailDashboardStatsResponse**](EmailDashboardStatsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailDispatchLogs

> EmailCommseqStepLogsResponse getEmailDispatchLogs(storefront_oid, commseq_uuid, commseq_step_uuid)

Get email dispatch logs


### Example

<!-- UC_START_EXAMPLE getEmailDispatchLogs -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let commseq_step_uuid = "commseq_step_uuid_example"; // String | 
apiInstance.getEmailDispatchLogs(storefront_oid, commseq_uuid, commseq_step_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailDispatchLogs -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **commseq_step_uuid** | **String**|  | 

### Return type

[**EmailCommseqStepLogsResponse**](EmailCommseqStepLogsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailEmail

> EmailCommseqEmailResponse getEmailEmail(storefront_oid, commseq_email_uuid)

Get email email


### Example

<!-- UC_START_EXAMPLE getEmailEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
apiInstance.getEmailEmail(storefront_oid, commseq_email_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_email_uuid** | **String**|  | 

### Return type

[**EmailCommseqEmailResponse**](EmailCommseqEmailResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailEmailClicks

> EmailClicksResponse getEmailEmailClicks(storefront_oid, commseq_uuid, commseq_step_uuid, commseq_email_uuid, opts)

Get email email clicks


### Example

<!-- UC_START_EXAMPLE getEmailEmailClicks -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let commseq_step_uuid = "commseq_step_uuid_example"; // String | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
let opts = {
  'days': 56 // Number | 
};
apiInstance.getEmailEmailClicks(storefront_oid, commseq_uuid, commseq_step_uuid, commseq_email_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailEmailClicks -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **commseq_step_uuid** | **String**|  | 
 **commseq_email_uuid** | **String**|  | 
 **days** | **Number**|  | [optional] 

### Return type

[**EmailClicksResponse**](EmailClicksResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailEmailCustomerEditorUrl

> EmailCustomerEditorUrlResponse getEmailEmailCustomerEditorUrl(storefront_oid, commseq_email_uuid, order_id)

Get email order customer editor url


### Example

<!-- UC_START_EXAMPLE getEmailEmailCustomerEditorUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
let order_id = "order_id_example"; // String | 
apiInstance.getEmailEmailCustomerEditorUrl(storefront_oid, commseq_email_uuid, order_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailEmailCustomerEditorUrl -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_email_uuid** | **String**|  | 
 **order_id** | **String**|  | 

### Return type

[**EmailCustomerEditorUrlResponse**](EmailCustomerEditorUrlResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailEmailOrders

> EmailOrdersResponse getEmailEmailOrders(storefront_oid, commseq_uuid, commseq_step_uuid, commseq_email_uuid, opts)

Get email email orders


### Example

<!-- UC_START_EXAMPLE getEmailEmailOrders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let commseq_step_uuid = "commseq_step_uuid_example"; // String | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
let opts = {
  'days': 56 // Number | 
};
apiInstance.getEmailEmailOrders(storefront_oid, commseq_uuid, commseq_step_uuid, commseq_email_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailEmailOrders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **commseq_step_uuid** | **String**|  | 
 **commseq_email_uuid** | **String**|  | 
 **days** | **Number**|  | [optional] 

### Return type

[**EmailOrdersResponse**](EmailOrdersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailEmails

> EmailCommseqEmailsResponse getEmailEmails(storefront_oid)

Get email emails


### Example

<!-- UC_START_EXAMPLE getEmailEmails -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailEmails(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailEmails -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailCommseqEmailsResponse**](EmailCommseqEmailsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailEmailsMultiple

> EmailCommseqEmailsResponse getEmailEmailsMultiple(storefront_oid, email_commseq_emails_request)

Get email emails multiple


### Example

<!-- UC_START_EXAMPLE getEmailEmailsMultiple -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_commseq_emails_request = new UltraCartRestApiV2.EmailCommseqEmailsRequest(); // EmailCommseqEmailsRequest | Request of email uuids
apiInstance.getEmailEmailsMultiple(storefront_oid, email_commseq_emails_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailEmailsMultiple -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_commseq_emails_request** | [**EmailCommseqEmailsRequest**](EmailCommseqEmailsRequest.md)| Request of email uuids | 

### Return type

[**EmailCommseqEmailsResponse**](EmailCommseqEmailsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailFlow

> EmailFlowResponse getEmailFlow(storefront_oid, email_flow_uuid)

Get email flow


### Example

<!-- UC_START_EXAMPLE getEmailFlow -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_uuid = "email_flow_uuid_example"; // String | 
apiInstance.getEmailFlow(storefront_oid, email_flow_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailFlow -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_uuid** | **String**|  | 

### Return type

[**EmailFlowResponse**](EmailFlowResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailFlowFolder

> EmailFlowFolderResponse getEmailFlowFolder(storefront_oid, email_flow_folder_uuid)

Get email flow folder


### Example

<!-- UC_START_EXAMPLE getEmailFlowFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_folder_uuid = "email_flow_folder_uuid_example"; // String | 
apiInstance.getEmailFlowFolder(storefront_oid, email_flow_folder_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailFlowFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_folder_uuid** | **String**|  | 

### Return type

[**EmailFlowFolderResponse**](EmailFlowFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailFlowFolders

> EmailFlowFoldersResponse getEmailFlowFolders(storefront_oid)

Get email flow folders


### Example

<!-- UC_START_EXAMPLE getEmailFlowFolders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailFlowFolders(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailFlowFolders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailFlowFoldersResponse**](EmailFlowFoldersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailFlowScreenshots

> ScreenshotsResponse getEmailFlowScreenshots(storefront_oid, email_flow_uuid)

Get email flow screenshots


### Example

<!-- UC_START_EXAMPLE getEmailFlowScreenshots -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_uuid = "email_flow_uuid_example"; // String | 
apiInstance.getEmailFlowScreenshots(storefront_oid, email_flow_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailFlowScreenshots -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_uuid** | **String**|  | 

### Return type

[**ScreenshotsResponse**](ScreenshotsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailFlows

> EmailFlowsResponse getEmailFlows(storefront_oid)

Get email flows


### Example

<!-- UC_START_EXAMPLE getEmailFlows -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailFlows(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailFlows -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailFlowsResponse**](EmailFlowsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailGlobalSettings

> EmailGlobalSettingsResponse getEmailGlobalSettings()

Get email globalsettings


### Example

<!-- UC_START_EXAMPLE getEmailGlobalSettings -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getEmailGlobalSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailGlobalSettings -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**EmailGlobalSettingsResponse**](EmailGlobalSettingsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailList

> EmailListResponse getEmailList(storefront_oid, email_list_uuid)

Get email list


### Example

<!-- UC_START_EXAMPLE getEmailList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
apiInstance.getEmailList(storefront_oid, email_list_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailListCustomerEditorUrl

> EmailCustomerEditorUrlResponse getEmailListCustomerEditorUrl(storefront_oid, email_list_uuid, email_customer_uuid)

Get email list customer editor url


### Example

<!-- UC_START_EXAMPLE getEmailListCustomerEditorUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
let email_customer_uuid = "email_customer_uuid_example"; // String | 
apiInstance.getEmailListCustomerEditorUrl(storefront_oid, email_list_uuid, email_customer_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailListCustomerEditorUrl -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 
 **email_customer_uuid** | **String**|  | 

### Return type

[**EmailCustomerEditorUrlResponse**](EmailCustomerEditorUrlResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailListCustomers

> EmailListCustomersResponse getEmailListCustomers(storefront_oid, email_list_uuid, opts)

Get email list customers


### Example

<!-- UC_START_EXAMPLE getEmailListCustomers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.getEmailListCustomers(storefront_oid, email_list_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailListCustomers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**EmailListCustomersResponse**](EmailListCustomersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailListSegmentFolder

> EmailListSegmentFolderResponse getEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid)

Get email campaign folder


### Example

<!-- UC_START_EXAMPLE getEmailListSegmentFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_segment_folder_uuid = "email_list_segment_folder_uuid_example"; // String | 
apiInstance.getEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailListSegmentFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_segment_folder_uuid** | **String**|  | 

### Return type

[**EmailListSegmentFolderResponse**](EmailListSegmentFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailListSegmentFolders

> EmailListSegmentFoldersResponse getEmailListSegmentFolders(storefront_oid)

Get email campaign folders


### Example

<!-- UC_START_EXAMPLE getEmailListSegmentFolders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailListSegmentFolders(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailListSegmentFolders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailListSegmentFoldersResponse**](EmailListSegmentFoldersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailLists

> EmailListsResponse getEmailLists(storefront_oid)

Get email lists


### Example

<!-- UC_START_EXAMPLE getEmailLists -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailLists(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailLists -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailListsResponse**](EmailListsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailPerformance

> EmailPerformanceResponse getEmailPerformance(storefront_oid)

Get email performance


### Example

<!-- UC_START_EXAMPLE getEmailPerformance -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailPerformance(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailPerformance -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailPerformanceResponse**](EmailPerformanceResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailPlan

> EmailPlanResponse getEmailPlan(storefront_oid)

Get email plan


### Example

<!-- UC_START_EXAMPLE getEmailPlan -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailPlan(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailPlan -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailPlanResponse**](EmailPlanResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailPostcard

> EmailCommseqPostcardResponse getEmailPostcard(storefront_oid, commseq_postcard_uuid)

Get email postcard


### Example

<!-- UC_START_EXAMPLE getEmailPostcard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_postcard_uuid = "commseq_postcard_uuid_example"; // String | 
apiInstance.getEmailPostcard(storefront_oid, commseq_postcard_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailPostcard -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_postcard_uuid** | **String**|  | 

### Return type

[**EmailCommseqPostcardResponse**](EmailCommseqPostcardResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailPostcards

> EmailCommseqPostcardsResponse getEmailPostcards(storefront_oid)

Get email postcards


### Example

<!-- UC_START_EXAMPLE getEmailPostcards -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailPostcards(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailPostcards -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailCommseqPostcardsResponse**](EmailCommseqPostcardsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailPostcardsMultiple

> EmailCommseqPostcardsResponse getEmailPostcardsMultiple(storefront_oid, email_commseq_postcards_request)

Get email postcards multiple


### Example

<!-- UC_START_EXAMPLE getEmailPostcardsMultiple -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_commseq_postcards_request = new UltraCartRestApiV2.EmailCommseqPostcardsRequest(); // EmailCommseqPostcardsRequest | Request of postcard uuids
apiInstance.getEmailPostcardsMultiple(storefront_oid, email_commseq_postcards_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailPostcardsMultiple -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_commseq_postcards_request** | [**EmailCommseqPostcardsRequest**](EmailCommseqPostcardsRequest.md)| Request of postcard uuids | 

### Return type

[**EmailCommseqPostcardsResponse**](EmailCommseqPostcardsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailSegment

> EmailSegmentResponse getEmailSegment(storefront_oid, email_segment_uuid)

Get email segment


### Example

<!-- UC_START_EXAMPLE getEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
apiInstance.getEmailSegment(storefront_oid, email_segment_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 

### Return type

[**EmailSegmentResponse**](EmailSegmentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSegmentCustomerEditorUrl

> EmailCustomerEditorUrlResponse getEmailSegmentCustomerEditorUrl(storefront_oid, email_segment_uuid, email_customer_uuid)

Get email segment customers editor URL


### Example

<!-- UC_START_EXAMPLE getEmailSegmentCustomerEditorUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
let email_customer_uuid = "email_customer_uuid_example"; // String | 
apiInstance.getEmailSegmentCustomerEditorUrl(storefront_oid, email_segment_uuid, email_customer_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSegmentCustomerEditorUrl -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 
 **email_customer_uuid** | **String**|  | 

### Return type

[**EmailCustomerEditorUrlResponse**](EmailCustomerEditorUrlResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSegmentCustomers

> EmailSegmentCustomersResponse getEmailSegmentCustomers(storefront_oid, email_segment_uuid, opts)

Get email segment customers


### Example

<!-- UC_START_EXAMPLE getEmailSegmentCustomers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
let opts = {
  'pageNumber': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.getEmailSegmentCustomers(storefront_oid, email_segment_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSegmentCustomers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**EmailSegmentCustomersResponse**](EmailSegmentCustomersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSegments

> EmailSegmentsResponse getEmailSegments(storefront_oid)

Get email segments


### Example

<!-- UC_START_EXAMPLE getEmailSegments -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailSegments(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSegments -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailSegmentsResponse**](EmailSegmentsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSendingDomain

> EmailSendingDomainResponse getEmailSendingDomain(domain)

Get email sending domain


### Example

<!-- UC_START_EXAMPLE getEmailSendingDomain -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let domain = "domain_example"; // String | 
apiInstance.getEmailSendingDomain(domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSendingDomain -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**EmailSendingDomainResponse**](EmailSendingDomainResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSendingDomainStatus

> EmailSendingDomainResponse getEmailSendingDomainStatus(domain)

Get email sending domain status


### Example

<!-- UC_START_EXAMPLE getEmailSendingDomainStatus -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let domain = "domain_example"; // String | 
apiInstance.getEmailSendingDomainStatus(domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSendingDomainStatus -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**EmailSendingDomainResponse**](EmailSendingDomainResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSendingDomains

> EmailSendingDomainsResponse getEmailSendingDomains()

Get email sending domains


### Example

<!-- UC_START_EXAMPLE getEmailSendingDomains -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getEmailSendingDomains((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSendingDomains -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**EmailSendingDomainsResponse**](EmailSendingDomainsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSettings

> EmailSettingsResponse getEmailSettings(storefront_oid)

Get email settings


### Example

<!-- UC_START_EXAMPLE getEmailSettings -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailSettings(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSettings -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailSettingsResponse**](EmailSettingsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSmsOrders

> EmailSmsOrdersResponse getEmailSmsOrders(storefront_oid, commseq_uuid, commseq_step_uuid, opts)

Get email sms orders


### Example

<!-- UC_START_EXAMPLE getEmailSmsOrders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let commseq_step_uuid = "commseq_step_uuid_example"; // String | 
let opts = {
  'days': 56 // Number | 
};
apiInstance.getEmailSmsOrders(storefront_oid, commseq_uuid, commseq_step_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailSmsOrders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **commseq_step_uuid** | **String**|  | 
 **days** | **Number**|  | [optional] 

### Return type

[**EmailSmsOrdersResponse**](EmailSmsOrdersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailTemplate

> EmailTemplate getEmailTemplate(storefront_oid, email_template_oid)

Get email template


### Example

<!-- UC_START_EXAMPLE getEmailTemplate -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_template_oid = 56; // Number | 
apiInstance.getEmailTemplate(storefront_oid, email_template_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailTemplate -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_template_oid** | **Number**|  | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailTemplates

> EmailTemplatesResponse getEmailTemplates(storefront_oid, opts)

Get email templates


### Example

<!-- UC_START_EXAMPLE getEmailTemplates -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'trigger_type': "trigger_type_example" // String | 
};
apiInstance.getEmailTemplates(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailTemplates -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **trigger_type** | **String**|  | [optional] 

### Return type

[**EmailTemplatesResponse**](EmailTemplatesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailThirdPartyProviders

> EmailThirdPartyProvidersResponse getEmailThirdPartyProviders(storefront_oid)

Get a list of third party email providers


### Example

<!-- UC_START_EXAMPLE getEmailThirdPartyProviders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getEmailThirdPartyProviders(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailThirdPartyProviders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**EmailThirdPartyProvidersResponse**](EmailThirdPartyProvidersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperiments

> ExperimentsResponse getExperiments(storefront_oid)

Get experiments


### Example

<!-- UC_START_EXAMPLE getExperiments -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getExperiments(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getExperiments -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**ExperimentsResponse**](ExperimentsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFsDirectory

> FileManagerPageResponse getFsDirectory(id, opts)

Get file manager directory


### Example

<!-- UC_START_EXAMPLE getFsDirectory -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let id = 56; // Number | 
let opts = {
  'path': "path_example", // String | 
  'storefront_fs_directory_oid': 56, // Number | 
  'storefront_theme_oid': 56 // Number | 
};
apiInstance.getFsDirectory(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getFsDirectory -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **path** | **String**|  | [optional] 
 **storefront_fs_directory_oid** | **Number**|  | [optional] 
 **storefront_theme_oid** | **Number**|  | [optional] 

### Return type

[**FileManagerPageResponse**](FileManagerPageResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHeatmap

> ScreenRecordingHeatmapResponse getHeatmap(storefront_oid, query)

Get screen recording heatmap

Get screen recording heatmap 


### Example

<!-- UC_START_EXAMPLE getHeatmap -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let query = new UltraCartRestApiV2.ScreenRecordingHeatmapRequest(); // ScreenRecordingHeatmapRequest | Query
apiInstance.getHeatmap(storefront_oid, query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getHeatmap -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **query** | [**ScreenRecordingHeatmapRequest**](ScreenRecordingHeatmapRequest.md)| Query | 

### Return type

[**ScreenRecordingHeatmapResponse**](ScreenRecordingHeatmapResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHeatmapIndex

> ScreenRecordingHeatmapIndexResponse getHeatmapIndex(storefront_oid, query, opts)

Get screen recording heatmap index

Get screen recording heatmap index 


### Example

<!-- UC_START_EXAMPLE getHeatmapIndex -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let query = new UltraCartRestApiV2.ScreenRecordingHeatmapIndexRequest(); // ScreenRecordingHeatmapIndexRequest | Query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Default 100, Max 500)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.getHeatmapIndex(storefront_oid, query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getHeatmapIndex -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **query** | [**ScreenRecordingHeatmapIndexRequest**](ScreenRecordingHeatmapIndexRequest.md)| Query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 500) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**ScreenRecordingHeatmapIndexResponse**](ScreenRecordingHeatmapIndexResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHistogramPropertyNames

> EmailHistogramPropertyNamesResponse getHistogramPropertyNames(storefront_oid, opts)

Get histogram property names

Obtain a list of property names for a given property type 


### Example

<!-- UC_START_EXAMPLE getHistogramPropertyNames -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'property_type': "property_type_example" // String | 
};
apiInstance.getHistogramPropertyNames(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getHistogramPropertyNames -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **property_type** | **String**|  | [optional] 

### Return type

[**EmailHistogramPropertyNamesResponse**](EmailHistogramPropertyNamesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHistogramPropertyValues

> EmailHistogramPropertyValuesResponse getHistogramPropertyValues(storefront_oid, opts)

Get histogram property values

Obtain a list of property values for a given property name and type 


### Example

<!-- UC_START_EXAMPLE getHistogramPropertyValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'property_name': "property_name_example", // String | 
  'property_type': "property_type_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.getHistogramPropertyValues(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getHistogramPropertyValues -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **property_name** | **String**|  | [optional] 
 **property_type** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**EmailHistogramPropertyValuesResponse**](EmailHistogramPropertyValuesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLibraryFilterValues

> LibraryFilterValuesResponse getLibraryFilterValues()

Get library values used to populate drop down boxes for filtering.


### Example

<!-- UC_START_EXAMPLE getLibraryFilterValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getLibraryFilterValues((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getLibraryFilterValues -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**LibraryFilterValuesResponse**](LibraryFilterValuesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLibraryItem

> LibraryItemResponse getLibraryItem(library_item_oid)

Get library item.


### Example

<!-- UC_START_EXAMPLE getLibraryItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
apiInstance.getLibraryItem(library_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getLibraryItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 

### Return type

[**LibraryItemResponse**](LibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLibraryItemPublishedVersions

> LibraryItemsResponse getLibraryItemPublishedVersions(library_item_oid)

Get all published versions for a library item.


### Example

<!-- UC_START_EXAMPLE getLibraryItemPublishedVersions -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
apiInstance.getLibraryItemPublishedVersions(library_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getLibraryItemPublishedVersions -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 

### Return type

[**LibraryItemsResponse**](LibraryItemsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecording

> ScreenRecordingResponse getScreenRecording(storefront_oid, screen_recording_uuid)

Get screen recording

Get screen recording 


### Example

<!-- UC_START_EXAMPLE getScreenRecording -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_uuid = "screen_recording_uuid_example"; // String | 
apiInstance.getScreenRecording(storefront_oid, screen_recording_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecording -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 

### Return type

[**ScreenRecordingResponse**](ScreenRecordingResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecordingPageViewData

> ScreenRecordingPageViewDataResponse getScreenRecordingPageViewData(storefront_oid, screen_recording_uuid, screen_recording_page_view_uuid)

Get screen recording page view data

Get screen recording page view data 


### Example

<!-- UC_START_EXAMPLE getScreenRecordingPageViewData -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_uuid = "screen_recording_uuid_example"; // String | 
let screen_recording_page_view_uuid = "screen_recording_page_view_uuid_example"; // String | 
apiInstance.getScreenRecordingPageViewData(storefront_oid, screen_recording_uuid, screen_recording_page_view_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingPageViewData -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 
 **screen_recording_page_view_uuid** | **String**|  | 

### Return type

[**ScreenRecordingPageViewDataResponse**](ScreenRecordingPageViewDataResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecordingSegment

> ScreenRecordingSegmentResponse getScreenRecordingSegment(storefront_oid, screen_recording_segment_oid)

Get screen recording segment


### Example

<!-- UC_START_EXAMPLE getScreenRecordingSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_segment_oid = 56; // Number | 
apiInstance.getScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_segment_oid** | **Number**|  | 

### Return type

[**ScreenRecordingSegmentResponse**](ScreenRecordingSegmentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecordingSegments

> ScreenRecordingSegmentsResponse getScreenRecordingSegments(storefront_oid)

Get screen recording segments


### Example

<!-- UC_START_EXAMPLE getScreenRecordingSegments -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getScreenRecordingSegments(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingSegments -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**ScreenRecordingSegmentsResponse**](ScreenRecordingSegmentsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecordingSettings

> ScreenRecordingSettingsResponse getScreenRecordingSettings(storefront_oid)

Get screen recording settings


### Example

<!-- UC_START_EXAMPLE getScreenRecordingSettings -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getScreenRecordingSettings(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingSettings -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**ScreenRecordingSettingsResponse**](ScreenRecordingSettingsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecordingTags

> ScreenRecordingTagsResponse getScreenRecordingTags(storefront_oid)

Get tags used by screen recording

Get tags used by screen recording 


### Example

<!-- UC_START_EXAMPLE getScreenRecordingTags -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getScreenRecordingTags(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingTags -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**ScreenRecordingTagsResponse**](ScreenRecordingTagsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenRecordingsByQuery

> ScreenRecordingQueryResponse getScreenRecordingsByQuery(storefront_oid, query, opts)

Query screen recordings

Query screen recordings 


### Example

<!-- UC_START_EXAMPLE getScreenRecordingsByQuery -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let query = new UltraCartRestApiV2.ScreenRecordingQueryRequest(); // ScreenRecordingQueryRequest | Query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Default 100, Max 500)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.getScreenRecordingsByQuery(storefront_oid, query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingsByQuery -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **query** | [**ScreenRecordingQueryRequest**](ScreenRecordingQueryRequest.md)| Query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 500) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**ScreenRecordingQueryResponse**](ScreenRecordingQueryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getScreenRecordingsBySegment

> ScreenRecordingQueryResponse getScreenRecordingsBySegment(storefront_oid, screen_recording_segment_oid, opts)

Get screen recordings by segment

Get screen recordings by segment 


### Example

<!-- UC_START_EXAMPLE getScreenRecordingsBySegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_segment_oid = 56; // Number | 
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Default 100, Max 500)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.getScreenRecordingsBySegment(storefront_oid, screen_recording_segment_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getScreenRecordingsBySegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_segment_oid** | **Number**|  | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 500) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**ScreenRecordingQueryResponse**](ScreenRecordingQueryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreFrontPricingTiers

> PricingTiersResponse getStoreFrontPricingTiers(opts)

Retrieve pricing tiers

Retrieves the pricing tiers 


### Example

<!-- UC_START_EXAMPLE getStoreFrontPricingTiers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getStoreFrontPricingTiers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getStoreFrontPricingTiers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**PricingTiersResponse**](PricingTiersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreFronts

> StoreFrontsResponse getStoreFronts()

Get storefronts (internal use only for security reasons)


### Example

<!-- UC_START_EXAMPLE getStoreFronts -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getStoreFronts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getStoreFronts -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**StoreFrontsResponse**](StoreFrontsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getThumbnailParameters

> ThumbnailParametersResponse getThumbnailParameters(thumbnail_parameters)

Get thumbnail parameters


### Example

<!-- UC_START_EXAMPLE getThumbnailParameters -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let thumbnail_parameters = new UltraCartRestApiV2.ThumbnailParametersRequest(); // ThumbnailParametersRequest | Thumbnail Parameters
apiInstance.getThumbnailParameters(thumbnail_parameters, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getThumbnailParameters -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thumbnail_parameters** | [**ThumbnailParametersRequest**](ThumbnailParametersRequest.md)| Thumbnail Parameters | 

### Return type

[**ThumbnailParametersResponse**](ThumbnailParametersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionEmail

> TransactionEmailResponse getTransactionEmail(storefront_oid, email_id)

Gets a transaction email object

Fetch a transactional email 


### Example

<!-- UC_START_EXAMPLE getTransactionEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_id = "email_id_example"; // String | 
apiInstance.getTransactionEmail(storefront_oid, email_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTransactionEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_id** | **String**|  | 

### Return type

[**TransactionEmailResponse**](TransactionEmailResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactionEmailList

> TransactionEmailListResponse getTransactionEmailList(storefront_oid)

Gets a list of transaction email names

Obtain a list of all transactional emails and return back just their names 


### Example

<!-- UC_START_EXAMPLE getTransactionEmailList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getTransactionEmailList(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTransactionEmailList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**TransactionEmailListResponse**](TransactionEmailListResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactionEmailScreenshots

> ScreenshotsResponse getTransactionEmailScreenshots(storefront_oid, email_id)

Get transactional email screenshots


### Example

<!-- UC_START_EXAMPLE getTransactionEmailScreenshots -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_id = "email_id_example"; // String | 
apiInstance.getTransactionEmailScreenshots(storefront_oid, email_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTransactionEmailScreenshots -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_id** | **String**|  | 

### Return type

[**ScreenshotsResponse**](ScreenshotsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTwilioAccount

> TwilioResponse getTwilioAccount(esp_twilio_uuid)

Get Twilio account


### Example

<!-- UC_START_EXAMPLE getTwilioAccount -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let esp_twilio_uuid = "esp_twilio_uuid_example"; // String | 
apiInstance.getTwilioAccount(esp_twilio_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTwilioAccount -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **esp_twilio_uuid** | **String**|  | 

### Return type

[**TwilioResponse**](TwilioResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTwilioAccounts

> TwiliosResponse getTwilioAccounts()

Get all Twilio accounts


### Example

<!-- UC_START_EXAMPLE getTwilioAccounts -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTwilioAccounts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTwilioAccounts -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TwiliosResponse**](TwiliosResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUploadFsFileUrl

> FileManagerUploadUrlResponse getUploadFsFileUrl(id, extension)

Retrieves a S3 url where a file may be uploaded. Once uploaded, use uploadFsFile to trigger the server into reading the S3 bucket and retrieving the file.


### Example

<!-- UC_START_EXAMPLE getUploadFsFileUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let id = 56; // Number | 
let extension = "extension_example"; // String | 
apiInstance.getUploadFsFileUrl(id, extension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getUploadFsFileUrl -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **extension** | **String**|  | 

### Return type

[**FileManagerUploadUrlResponse**](FileManagerUploadUrlResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## globalUnsubscribe

> EmailGlobalUnsubscribeResponse globalUnsubscribe(storefront_oid, unsubscribe)

Globally unsubscribe a customer


### Example

<!-- UC_START_EXAMPLE globalUnsubscribe -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let unsubscribe = new UltraCartRestApiV2.EmailGlobalUnsubscribeRequest(); // EmailGlobalUnsubscribeRequest | Unsubscribe
apiInstance.globalUnsubscribe(storefront_oid, unsubscribe, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE globalUnsubscribe -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **unsubscribe** | [**EmailGlobalUnsubscribeRequest**](EmailGlobalUnsubscribeRequest.md)| Unsubscribe | 

### Return type

[**EmailGlobalUnsubscribeResponse**](EmailGlobalUnsubscribeResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## importEmailThirdPartyProviderList

> importEmailThirdPartyProviderList(storefront_oid, import_request)

Import a third party provider list


### Example

<!-- UC_START_EXAMPLE importEmailThirdPartyProviderList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let import_request = new UltraCartRestApiV2.EmailThirdPartyListImportRequest(); // EmailThirdPartyListImportRequest | lists to import
apiInstance.importEmailThirdPartyProviderList(storefront_oid, import_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE importEmailThirdPartyProviderList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **import_request** | [**EmailThirdPartyListImportRequest**](EmailThirdPartyListImportRequest.md)| lists to import | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailCampaign

> EmailCampaignResponse insertEmailCampaign(storefront_oid, email_campaign)

Insert email campaign


### Example

<!-- UC_START_EXAMPLE insertEmailCampaign -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign = new UltraCartRestApiV2.EmailCampaign(); // EmailCampaign | Email campaign
apiInstance.insertEmailCampaign(storefront_oid, email_campaign, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailCampaign -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign** | [**EmailCampaign**](EmailCampaign.md)| Email campaign | 

### Return type

[**EmailCampaignResponse**](EmailCampaignResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailCampaignFolder

> EmailCampaignFolderResponse insertEmailCampaignFolder(storefront_oid, email_campaign_folder)

Insert email campaign folder


### Example

<!-- UC_START_EXAMPLE insertEmailCampaignFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_folder = new UltraCartRestApiV2.EmailCampaignFolder(); // EmailCampaignFolder | Email campaign folder
apiInstance.insertEmailCampaignFolder(storefront_oid, email_campaign_folder, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailCampaignFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_folder** | [**EmailCampaignFolder**](EmailCampaignFolder.md)| Email campaign folder | 

### Return type

[**EmailCampaignFolderResponse**](EmailCampaignFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailCommseq

> EmailCommseqResponse insertEmailCommseq(storefront_oid, email_commseq)

Insert email commseq


### Example

<!-- UC_START_EXAMPLE insertEmailCommseq -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_commseq = new UltraCartRestApiV2.EmailCommseq(); // EmailCommseq | Email commseq
apiInstance.insertEmailCommseq(storefront_oid, email_commseq, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailCommseq -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_commseq** | [**EmailCommseq**](EmailCommseq.md)| Email commseq | 

### Return type

[**EmailCommseqResponse**](EmailCommseqResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailEmail

> EmailCommseqEmailResponse insertEmailEmail(storefront_oid, email_commseq_email)

Insert email email


### Example

<!-- UC_START_EXAMPLE insertEmailEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_commseq_email = new UltraCartRestApiV2.EmailCommseqEmail(); // EmailCommseqEmail | Email email
apiInstance.insertEmailEmail(storefront_oid, email_commseq_email, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_commseq_email** | [**EmailCommseqEmail**](EmailCommseqEmail.md)| Email email | 

### Return type

[**EmailCommseqEmailResponse**](EmailCommseqEmailResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailFlow

> EmailFlowResponse insertEmailFlow(storefront_oid, email_flow)

Insert email flow


### Example

<!-- UC_START_EXAMPLE insertEmailFlow -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow = new UltraCartRestApiV2.EmailFlow(); // EmailFlow | Email flow
apiInstance.insertEmailFlow(storefront_oid, email_flow, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailFlow -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow** | [**EmailFlow**](EmailFlow.md)| Email flow | 

### Return type

[**EmailFlowResponse**](EmailFlowResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailFlowFolder

> EmailFlowFolderResponse insertEmailFlowFolder(storefront_oid, email_flow_folder)

Insert email flow folder


### Example

<!-- UC_START_EXAMPLE insertEmailFlowFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_folder = new UltraCartRestApiV2.EmailFlowFolder(); // EmailFlowFolder | Email flow folder
apiInstance.insertEmailFlowFolder(storefront_oid, email_flow_folder, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailFlowFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_folder** | [**EmailFlowFolder**](EmailFlowFolder.md)| Email flow folder | 

### Return type

[**EmailFlowFolderResponse**](EmailFlowFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailList

> EmailListResponse insertEmailList(storefront_oid, email_list)

Insert email list


### Example

<!-- UC_START_EXAMPLE insertEmailList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list = new UltraCartRestApiV2.EmailList(); // EmailList | Email list
apiInstance.insertEmailList(storefront_oid, email_list, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list** | [**EmailList**](EmailList.md)| Email list | 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailListSegmentFolder

> EmailListSegmentFolderResponse insertEmailListSegmentFolder(storefront_oid, email_list_segment_folder)

Insert email campaign folder


### Example

<!-- UC_START_EXAMPLE insertEmailListSegmentFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_segment_folder = new UltraCartRestApiV2.EmailListSegmentFolder(); // EmailListSegmentFolder | Email campaign folder
apiInstance.insertEmailListSegmentFolder(storefront_oid, email_list_segment_folder, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailListSegmentFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_segment_folder** | [**EmailListSegmentFolder**](EmailListSegmentFolder.md)| Email campaign folder | 

### Return type

[**EmailListSegmentFolderResponse**](EmailListSegmentFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailPostcard

> EmailCommseqPostcardResponse insertEmailPostcard(storefront_oid, email_commseq_postcard)

Insert email postcard


### Example

<!-- UC_START_EXAMPLE insertEmailPostcard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_commseq_postcard = new UltraCartRestApiV2.EmailCommseqPostcard(); // EmailCommseqPostcard | Email postcard
apiInstance.insertEmailPostcard(storefront_oid, email_commseq_postcard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailPostcard -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_commseq_postcard** | [**EmailCommseqPostcard**](EmailCommseqPostcard.md)| Email postcard | 

### Return type

[**EmailCommseqPostcardResponse**](EmailCommseqPostcardResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertEmailSegment

> EmailSegmentResponse insertEmailSegment(storefront_oid, email_segment)

Insert email segment


### Example

<!-- UC_START_EXAMPLE insertEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment = new UltraCartRestApiV2.EmailSegment(); // EmailSegment | Email segment
apiInstance.insertEmailSegment(storefront_oid, email_segment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment** | [**EmailSegment**](EmailSegment.md)| Email segment | 

### Return type

[**EmailSegmentResponse**](EmailSegmentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertScreenRecordingSegment

> ScreenRecordingSegmentResponse insertScreenRecordingSegment(storefront_oid, segment)

Insert screen recording segment


### Example

<!-- UC_START_EXAMPLE insertScreenRecordingSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let segment = new UltraCartRestApiV2.ScreenRecordingSegment(); // ScreenRecordingSegment | Segment
apiInstance.insertScreenRecordingSegment(storefront_oid, segment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertScreenRecordingSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **segment** | [**ScreenRecordingSegment**](ScreenRecordingSegment.md)| Segment | 

### Return type

[**ScreenRecordingSegmentResponse**](ScreenRecordingSegmentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertUpdatePageContentAttribute

> insertUpdatePageContentAttribute(storefront_oid, page_oid, page_attribute)

Upsert a page content attribute

Update a page content attribute, creating it new if it does not yet exist. 


### Example

<!-- UC_START_EXAMPLE insertUpdatePageContentAttribute -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let page_oid = 56; // Number | The page oid to modify.
let page_attribute = new UltraCartRestApiV2.StoreFrontPageContentAttribute(); // StoreFrontPageContentAttribute | Page content attribute to upsert
apiInstance.insertUpdatePageContentAttribute(storefront_oid, page_oid, page_attribute, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE insertUpdatePageContentAttribute -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **page_oid** | **Number**| The page oid to modify. | 
 **page_attribute** | [**StoreFrontPageContentAttribute**](StoreFrontPageContentAttribute.md)| Page content attribute to upsert | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## prepareDownloadEmailSegment

> EmailSegmentDownloadPrepareResponse prepareDownloadEmailSegment(storefront_oid, email_segment_uuid)

Prepare download of email segment


### Example

<!-- UC_START_EXAMPLE prepareDownloadEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
apiInstance.prepareDownloadEmailSegment(storefront_oid, email_segment_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE prepareDownloadEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 

### Return type

[**EmailSegmentDownloadPrepareResponse**](EmailSegmentDownloadPrepareResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## publishLibraryItem

> LibraryItemResponse publishLibraryItem(library_item_oid, publish_library_request)

Publish library item.


### Example

<!-- UC_START_EXAMPLE publishLibraryItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
let publish_library_request = new UltraCartRestApiV2.PublishLibraryItemRequest(); // PublishLibraryItemRequest | Publish library item request
apiInstance.publishLibraryItem(library_item_oid, publish_library_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE publishLibraryItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 
 **publish_library_request** | [**PublishLibraryItemRequest**](PublishLibraryItemRequest.md)| Publish library item request | 

### Return type

[**LibraryItemResponse**](LibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchaseLibraryItem

> LibraryItemResponse purchaseLibraryItem(library_item_oid, opts)

Purchase public library item, which creates a copy of the item in your personal code library


### Example

<!-- UC_START_EXAMPLE purchaseLibraryItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
let opts = {
  'storefront_oid': 56 // Number | 
};
apiInstance.purchaseLibraryItem(library_item_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE purchaseLibraryItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 
 **storefront_oid** | **Number**|  | [optional] 

### Return type

[**LibraryItemResponse**](LibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## releaseEmailCommseqStepWaiting

> releaseEmailCommseqStepWaiting(storefront_oid, commseq_uuid, commseq_step_uuid)

Release email communication sequence customers waiting at the specified step


### Example

<!-- UC_START_EXAMPLE releaseEmailCommseqStepWaiting -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let commseq_step_uuid = "commseq_step_uuid_example"; // String | 
apiInstance.releaseEmailCommseqStepWaiting(storefront_oid, commseq_uuid, commseq_step_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE releaseEmailCommseqStepWaiting -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **commseq_step_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetEmailCommseqRateLimiters

> resetEmailCommseqRateLimiters(storefront_oid, commseq_uuid)

Reset email commseq rate limiters (only callable by UltraCart Support)


### Example

<!-- UC_START_EXAMPLE resetEmailCommseqRateLimiters -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
apiInstance.resetEmailCommseqRateLimiters(storefront_oid, commseq_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE resetEmailCommseqRateLimiters -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## review

> EmailCommseqEmailSendTestResponse review(storefront_oid, commseq_email_uuid, email_commseq_email_review_request)

Request a review of an email


### Example

<!-- UC_START_EXAMPLE review -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
let email_commseq_email_review_request = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest(); // EmailCommseqEmailSendTestRequest | Email commseq email review request
apiInstance.review(storefront_oid, commseq_email_uuid, email_commseq_email_review_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE review -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_email_uuid** | **String**|  | 
 **email_commseq_email_review_request** | [**EmailCommseqEmailSendTestRequest**](EmailCommseqEmailSendTestRequest.md)| Email commseq email review request | 

### Return type

[**EmailCommseqEmailSendTestResponse**](EmailCommseqEmailSendTestResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## search

> LookupResponse search(opts)

Searches for all matching values


### Example

<!-- UC_START_EXAMPLE search -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  'category': "category_example", // String | 
  'matches': "matches_example", // String | 
  'storefront_oid': "storefront_oid_example", // String | 
  'max_hits': 56, // Number | 
  'subcategory': "subcategory_example" // String | 
};
apiInstance.search(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE search -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] 
 **matches** | **String**|  | [optional] 
 **storefront_oid** | **String**|  | [optional] 
 **max_hits** | **Number**|  | [optional] 
 **subcategory** | **String**|  | [optional] 

### Return type

[**LookupResponse**](LookupResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## search2

> LookupResponse search2(lookup_request)

Searches for all matching values (using POST)


### Example

<!-- UC_START_EXAMPLE search2 -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let lookup_request = new UltraCartRestApiV2.LookupRequest(); // LookupRequest | LookupRequest
apiInstance.search2(lookup_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE search2 -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookup_request** | [**LookupRequest**](LookupRequest.md)| LookupRequest | 

### Return type

[**LookupResponse**](LookupResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchEmailListCustomers

> EmailListCustomersResponse searchEmailListCustomers(storefront_oid, email_list_uuid, opts)

Search email list customers


### Example

<!-- UC_START_EXAMPLE searchEmailListCustomers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
let opts = {
  'startsWith': "startsWith_example" // String | 
};
apiInstance.searchEmailListCustomers(storefront_oid, email_list_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchEmailListCustomers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 
 **startsWith** | **String**|  | [optional] 

### Return type

[**EmailListCustomersResponse**](EmailListCustomersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchEmailSegmentCustomers

> EmailSegmentCustomersResponse searchEmailSegmentCustomers(storefront_oid, email_segment_uuid, opts)

Search email segment customers


### Example

<!-- UC_START_EXAMPLE searchEmailSegmentCustomers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
let opts = {
  'startsWith': "startsWith_example" // String | 
};
apiInstance.searchEmailSegmentCustomers(storefront_oid, email_segment_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchEmailSegmentCustomers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 
 **startsWith** | **String**|  | [optional] 

### Return type

[**EmailSegmentCustomersResponse**](EmailSegmentCustomersResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchLibraryItems

> LibraryItemsResponse searchLibraryItems(item_query, opts)

Retrieve library items

Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE searchLibraryItems -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let item_query = new UltraCartRestApiV2.LibraryItemQuery(); // LibraryItemQuery | Item query
let opts = {
  '_limit': 10000, // Number | The maximum number of records to return on this one API call. (Maximum 10000)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.searchLibraryItems(item_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchLibraryItems -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_query** | [**LibraryItemQuery**](LibraryItemQuery.md)| Item query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 10000) | [optional] [default to 10000]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**LibraryItemsResponse**](LibraryItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchPublishedItems

> LibraryItemsResponse searchPublishedItems(item_query, opts)

Retrieve library items

Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE searchPublishedItems -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let item_query = new UltraCartRestApiV2.LibraryItemQuery(); // LibraryItemQuery | Item query
let opts = {
  '_limit': 10000, // Number | The maximum number of records to return on this one API call. (Maximum 10000)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.searchPublishedItems(item_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchPublishedItems -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_query** | [**LibraryItemQuery**](LibraryItemQuery.md)| Item query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 10000) | [optional] [default to 10000]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**LibraryItemsResponse**](LibraryItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchReviewItems

> LibraryItemsResponse searchReviewItems(item_query, opts)

Retrieve library items needing review or rejected

Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE searchReviewItems -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let item_query = new UltraCartRestApiV2.LibraryItemQuery(); // LibraryItemQuery | Item query
let opts = {
  '_limit': 10000, // Number | The maximum number of records to return on this one API call. (Maximum 10000)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.searchReviewItems(item_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchReviewItems -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_query** | [**LibraryItemQuery**](LibraryItemQuery.md)| Item query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 10000) | [optional] [default to 10000]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**LibraryItemsResponse**](LibraryItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchSharedItems

> LibraryItemsResponse searchSharedItems(item_query, opts)

Retrieve library items

Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE searchSharedItems -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let item_query = new UltraCartRestApiV2.LibraryItemQuery(); // LibraryItemQuery | Item query
let opts = {
  '_limit': 10000, // Number | The maximum number of records to return on this one API call. (Maximum 10000)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.searchSharedItems(item_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchSharedItems -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_query** | [**LibraryItemQuery**](LibraryItemQuery.md)| Item query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 10000) | [optional] [default to 10000]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**LibraryItemsResponse**](LibraryItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendEmailTest

> EmailCommseqEmailSendTestResponse sendEmailTest(storefront_oid, commseq_email_uuid, email_commseq_email_test_request)

Send email test


### Example

<!-- UC_START_EXAMPLE sendEmailTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
let email_commseq_email_test_request = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest(); // EmailCommseqEmailSendTestRequest | Email commseq email test request
apiInstance.sendEmailTest(storefront_oid, commseq_email_uuid, email_commseq_email_test_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE sendEmailTest -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_email_uuid** | **String**|  | 
 **email_commseq_email_test_request** | [**EmailCommseqEmailSendTestRequest**](EmailCommseqEmailSendTestRequest.md)| Email commseq email test request | 

### Return type

[**EmailCommseqEmailSendTestResponse**](EmailCommseqEmailSendTestResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendPostcardTest

> EmailCommseqPostcardSendTestResponse sendPostcardTest(storefront_oid, commseq_postcard_uuid, email_commseq_postcard_test_request)

Send postcard test


### Example

<!-- UC_START_EXAMPLE sendPostcardTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_postcard_uuid = "commseq_postcard_uuid_example"; // String | 
let email_commseq_postcard_test_request = new UltraCartRestApiV2.EmailCommseqPostcardSendTestRequest(); // EmailCommseqPostcardSendTestRequest | Email commseq email test request
apiInstance.sendPostcardTest(storefront_oid, commseq_postcard_uuid, email_commseq_postcard_test_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE sendPostcardTest -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_postcard_uuid** | **String**|  | 
 **email_commseq_postcard_test_request** | [**EmailCommseqPostcardSendTestRequest**](EmailCommseqPostcardSendTestRequest.md)| Email commseq email test request | 

### Return type

[**EmailCommseqPostcardSendTestResponse**](EmailCommseqPostcardSendTestResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendSmsTest

> EmailCommseqSmsSendTestResponse sendSmsTest(storefront_oid, commseq_uuid, commseq_step_uuid, email_commseq_sms_test_request)

Send SMS test


### Example

<!-- UC_START_EXAMPLE sendSmsTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let commseq_step_uuid = "commseq_step_uuid_example"; // String | 
let email_commseq_sms_test_request = new UltraCartRestApiV2.EmailCommseqSmsSendTestRequest(); // EmailCommseqSmsSendTestRequest | Email commseq sms test request
apiInstance.sendSmsTest(storefront_oid, commseq_uuid, commseq_step_uuid, email_commseq_sms_test_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE sendSmsTest -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **commseq_step_uuid** | **String**|  | 
 **email_commseq_sms_test_request** | [**EmailCommseqSmsSendTestRequest**](EmailCommseqSmsSendTestRequest.md)| Email commseq sms test request | 

### Return type

[**EmailCommseqSmsSendTestResponse**](EmailCommseqSmsSendTestResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendWebhookTest

> EmailCommseqWebhookSendTestResponse sendWebhookTest(storefront_oid, email_commseq_webhook_test_request)

Send webhook test


### Example

<!-- UC_START_EXAMPLE sendWebhookTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_commseq_webhook_test_request = new UltraCartRestApiV2.EmailCommseqWebhookSendTestRequest(); // EmailCommseqWebhookSendTestRequest | Email commseq webhook test request
apiInstance.sendWebhookTest(storefront_oid, email_commseq_webhook_test_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE sendWebhookTest -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_commseq_webhook_test_request** | [**EmailCommseqWebhookSendTestRequest**](EmailCommseqWebhookSendTestRequest.md)| Email commseq webhook test request | 

### Return type

[**EmailCommseqWebhookSendTestResponse**](EmailCommseqWebhookSendTestResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sequenceTest

> EmailCommseqSequenceTestResponse sequenceTest(storefront_oid, commseq_uuid, email_commseq_sequence_test_request)

Sequence test


### Example

<!-- UC_START_EXAMPLE sequenceTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let email_commseq_sequence_test_request = new UltraCartRestApiV2.EmailCommseqSequenceTestRequest(); // EmailCommseqSequenceTestRequest | Commseq test request
apiInstance.sequenceTest(storefront_oid, commseq_uuid, email_commseq_sequence_test_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE sequenceTest -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **email_commseq_sequence_test_request** | [**EmailCommseqSequenceTestRequest**](EmailCommseqSequenceTestRequest.md)| Commseq test request | 

### Return type

[**EmailCommseqSequenceTestResponse**](EmailCommseqSequenceTestResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startEmailCampaign

> BaseResponse startEmailCampaign(storefront_oid, email_campaign_uuid)

Start email campaign


### Example

<!-- UC_START_EXAMPLE startEmailCampaign -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_uuid = "email_campaign_uuid_example"; // String | 
apiInstance.startEmailCampaign(storefront_oid, email_campaign_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE startEmailCampaign -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_uuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeToEmailList

> EmailListSubscribeResponse subscribeToEmailList(storefront_oid, email_list_uuid, customers)

Subscribe customers to email list


### Example

<!-- UC_START_EXAMPLE subscribeToEmailList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
let customers = [new UltraCartRestApiV2.EmailCustomer()]; // [EmailCustomer] | Customers
apiInstance.subscribeToEmailList(storefront_oid, email_list_uuid, customers, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE subscribeToEmailList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 
 **customers** | [**[EmailCustomer]**](EmailCustomer.md)| Customers | 

### Return type

[**EmailListSubscribeResponse**](EmailListSubscribeResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sunsetEmailSegment

> sunsetEmailSegment(storefront_oid, email_segment_uuid)

Sunset email segment


### Example

<!-- UC_START_EXAMPLE sunsetEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
apiInstance.sunsetEmailSegment(storefront_oid, email_segment_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE sunsetEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unfavoriteScreenRecording

> unfavoriteScreenRecording(storefront_oid, screen_recording_uuid)

Remove favorite flag on screen recording

Remove favorite flag on screen recording 


### Example

<!-- UC_START_EXAMPLE unfavoriteScreenRecording -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_uuid = "screen_recording_uuid_example"; // String | 
apiInstance.unfavoriteScreenRecording(storefront_oid, screen_recording_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE unfavoriteScreenRecording -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEmailCampaign

> EmailCampaignResponse updateEmailCampaign(storefront_oid, email_campaign_uuid, email_campaign)

Update email campaign


### Example

<!-- UC_START_EXAMPLE updateEmailCampaign -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_uuid = "email_campaign_uuid_example"; // String | 
let email_campaign = new UltraCartRestApiV2.EmailCampaign(); // EmailCampaign | Email campaign
apiInstance.updateEmailCampaign(storefront_oid, email_campaign_uuid, email_campaign, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailCampaign -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_uuid** | **String**|  | 
 **email_campaign** | [**EmailCampaign**](EmailCampaign.md)| Email campaign | 

### Return type

[**EmailCampaignResponse**](EmailCampaignResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailCampaignFolder

> EmailCampaignFolderResponse updateEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, email_campaign_folder)

Update email campaign folder


### Example

<!-- UC_START_EXAMPLE updateEmailCampaignFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_campaign_folder_uuid = "email_campaign_folder_uuid_example"; // String | 
let email_campaign_folder = new UltraCartRestApiV2.EmailCampaignFolder(); // EmailCampaignFolder | Email campaign folder
apiInstance.updateEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, email_campaign_folder, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailCampaignFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_campaign_folder_uuid** | **String**|  | 
 **email_campaign_folder** | [**EmailCampaignFolder**](EmailCampaignFolder.md)| Email campaign folder | 

### Return type

[**EmailCampaignFolderResponse**](EmailCampaignFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailCommseq

> EmailCommseqResponse updateEmailCommseq(storefront_oid, commseq_uuid, email_commseq)

Update email commseq


### Example

<!-- UC_START_EXAMPLE updateEmailCommseq -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_uuid = "commseq_uuid_example"; // String | 
let email_commseq = new UltraCartRestApiV2.EmailCommseq(); // EmailCommseq | Email commseq
apiInstance.updateEmailCommseq(storefront_oid, commseq_uuid, email_commseq, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailCommseq -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_uuid** | **String**|  | 
 **email_commseq** | [**EmailCommseq**](EmailCommseq.md)| Email commseq | 

### Return type

[**EmailCommseqResponse**](EmailCommseqResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailCustomer

> updateEmailCustomer(storefront_oid, email_customer_uuid, email_customer)

Update email customer


### Example

<!-- UC_START_EXAMPLE updateEmailCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_customer_uuid = "email_customer_uuid_example"; // String | 
let email_customer = new UltraCartRestApiV2.EmailCustomer(); // EmailCustomer | Email customer
apiInstance.updateEmailCustomer(storefront_oid, email_customer_uuid, email_customer, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE updateEmailCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_customer_uuid** | **String**|  | 
 **email_customer** | [**EmailCustomer**](EmailCustomer.md)| Email customer | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailEmail

> EmailCommseqEmailResponse updateEmailEmail(storefront_oid, commseq_email_uuid, email_commseq_email)

Update email email


### Example

<!-- UC_START_EXAMPLE updateEmailEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_email_uuid = "commseq_email_uuid_example"; // String | 
let email_commseq_email = new UltraCartRestApiV2.EmailCommseqEmail(); // EmailCommseqEmail | Email commseq email
apiInstance.updateEmailEmail(storefront_oid, commseq_email_uuid, email_commseq_email, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_email_uuid** | **String**|  | 
 **email_commseq_email** | [**EmailCommseqEmail**](EmailCommseqEmail.md)| Email commseq email | 

### Return type

[**EmailCommseqEmailResponse**](EmailCommseqEmailResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailFlow

> EmailFlowResponse updateEmailFlow(storefront_oid, email_flow_uuid, email_flow)

Update email flow


### Example

<!-- UC_START_EXAMPLE updateEmailFlow -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_uuid = "email_flow_uuid_example"; // String | 
let email_flow = new UltraCartRestApiV2.EmailFlow(); // EmailFlow | Email flow
apiInstance.updateEmailFlow(storefront_oid, email_flow_uuid, email_flow, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailFlow -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_uuid** | **String**|  | 
 **email_flow** | [**EmailFlow**](EmailFlow.md)| Email flow | 

### Return type

[**EmailFlowResponse**](EmailFlowResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailFlowFolder

> EmailFlowFolderResponse updateEmailFlowFolder(storefront_oid, email_flow_folder_uuid, email_flow_folder)

Update email flow folder


### Example

<!-- UC_START_EXAMPLE updateEmailFlowFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_flow_folder_uuid = "email_flow_folder_uuid_example"; // String | 
let email_flow_folder = new UltraCartRestApiV2.EmailFlowFolder(); // EmailFlowFolder | Email flow folder
apiInstance.updateEmailFlowFolder(storefront_oid, email_flow_folder_uuid, email_flow_folder, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailFlowFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_flow_folder_uuid** | **String**|  | 
 **email_flow_folder** | [**EmailFlowFolder**](EmailFlowFolder.md)| Email flow folder | 

### Return type

[**EmailFlowFolderResponse**](EmailFlowFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailGlobalSettings

> EmailGlobalSettingsResponse updateEmailGlobalSettings(global_settings)

Update email global settings


### Example

<!-- UC_START_EXAMPLE updateEmailGlobalSettings -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let global_settings = new UltraCartRestApiV2.EmailGlobalSettings(); // EmailGlobalSettings | global settings request
apiInstance.updateEmailGlobalSettings(global_settings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailGlobalSettings -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_settings** | [**EmailGlobalSettings**](EmailGlobalSettings.md)| global settings request | 

### Return type

[**EmailGlobalSettingsResponse**](EmailGlobalSettingsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailList

> EmailListResponse updateEmailList(storefront_oid, email_list_uuid, email_list)

Update email list


### Example

<!-- UC_START_EXAMPLE updateEmailList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_uuid = "email_list_uuid_example"; // String | 
let email_list = new UltraCartRestApiV2.EmailList(); // EmailList | Email list
apiInstance.updateEmailList(storefront_oid, email_list_uuid, email_list, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_uuid** | **String**|  | 
 **email_list** | [**EmailList**](EmailList.md)| Email list | 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailListSegmentFolder

> EmailListSegmentFolderResponse updateEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, email_list_segment_folder)

Update email campaign folder


### Example

<!-- UC_START_EXAMPLE updateEmailListSegmentFolder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_list_segment_folder_uuid = "email_list_segment_folder_uuid_example"; // String | 
let email_list_segment_folder = new UltraCartRestApiV2.EmailListSegmentFolder(); // EmailListSegmentFolder | Email campaign folder
apiInstance.updateEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, email_list_segment_folder, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailListSegmentFolder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_list_segment_folder_uuid** | **String**|  | 
 **email_list_segment_folder** | [**EmailListSegmentFolder**](EmailListSegmentFolder.md)| Email campaign folder | 

### Return type

[**EmailListSegmentFolderResponse**](EmailListSegmentFolderResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailPlan

> EmailPlanResponse updateEmailPlan(storefront_oid, settings)

Update email plan


### Example

<!-- UC_START_EXAMPLE updateEmailPlan -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let settings = new UltraCartRestApiV2.EmailPlan(); // EmailPlan | plan request
apiInstance.updateEmailPlan(storefront_oid, settings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailPlan -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **settings** | [**EmailPlan**](EmailPlan.md)| plan request | 

### Return type

[**EmailPlanResponse**](EmailPlanResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailPostcard

> EmailCommseqPostcardResponse updateEmailPostcard(storefront_oid, commseq_postcard_uuid, email_commseq_postcard)

Update email postcard


### Example

<!-- UC_START_EXAMPLE updateEmailPostcard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let commseq_postcard_uuid = "commseq_postcard_uuid_example"; // String | 
let email_commseq_postcard = new UltraCartRestApiV2.EmailCommseqPostcard(); // EmailCommseqPostcard | Email commseq postcard
apiInstance.updateEmailPostcard(storefront_oid, commseq_postcard_uuid, email_commseq_postcard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailPostcard -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **commseq_postcard_uuid** | **String**|  | 
 **email_commseq_postcard** | [**EmailCommseqPostcard**](EmailCommseqPostcard.md)| Email commseq postcard | 

### Return type

[**EmailCommseqPostcardResponse**](EmailCommseqPostcardResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailSegment

> EmailSegmentResponse updateEmailSegment(storefront_oid, email_segment_uuid, email_segment)

Update email segment


### Example

<!-- UC_START_EXAMPLE updateEmailSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_segment_uuid = "email_segment_uuid_example"; // String | 
let email_segment = new UltraCartRestApiV2.EmailSegment(); // EmailSegment | Email segment
apiInstance.updateEmailSegment(storefront_oid, email_segment_uuid, email_segment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_segment_uuid** | **String**|  | 
 **email_segment** | [**EmailSegment**](EmailSegment.md)| Email segment | 

### Return type

[**EmailSegmentResponse**](EmailSegmentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailSendingDomain

> EmailSendingDomainResponse updateEmailSendingDomain(domain, email_domain)

Update email sending domain


### Example

<!-- UC_START_EXAMPLE updateEmailSendingDomain -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let domain = "domain_example"; // String | 
let email_domain = new UltraCartRestApiV2.EmailDomain(); // EmailDomain | EmailDomain
apiInstance.updateEmailSendingDomain(domain, email_domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailSendingDomain -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **email_domain** | [**EmailDomain**](EmailDomain.md)| EmailDomain | 

### Return type

[**EmailSendingDomainResponse**](EmailSendingDomainResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailSettings

> EmailSettingsResponse updateEmailSettings(storefront_oid, settings)

Update email settings


### Example

<!-- UC_START_EXAMPLE updateEmailSettings -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let settings = new UltraCartRestApiV2.EmailSettings(); // EmailSettings | settings request
apiInstance.updateEmailSettings(storefront_oid, settings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateEmailSettings -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **settings** | [**EmailSettings**](EmailSettings.md)| settings request | 

### Return type

[**EmailSettingsResponse**](EmailSettingsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExperiment

> ExperimentResponse updateExperiment(storefront_oid, storefront_experiment_oid, experiment)

Update experiment


### Example

<!-- UC_START_EXAMPLE updateExperiment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let storefront_experiment_oid = 56; // Number | 
let experiment = new UltraCartRestApiV2.Experiment(); // Experiment | Experiment
apiInstance.updateExperiment(storefront_oid, storefront_experiment_oid, experiment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateExperiment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **storefront_experiment_oid** | **Number**|  | 
 **experiment** | [**Experiment**](Experiment.md)| Experiment | 

### Return type

[**ExperimentResponse**](ExperimentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateLibraryItem

> LibraryItemResponse updateLibraryItem(library_item_oid, library_item)

Update library item. Note that only certain fields may be updated via this method.


### Example

<!-- UC_START_EXAMPLE updateLibraryItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let library_item_oid = 56; // Number | 
let library_item = new UltraCartRestApiV2.LibraryItem(); // LibraryItem | Library item
apiInstance.updateLibraryItem(library_item_oid, library_item, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateLibraryItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **library_item_oid** | **Number**|  | 
 **library_item** | [**LibraryItem**](LibraryItem.md)| Library item | 

### Return type

[**LibraryItemResponse**](LibraryItemResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateScreenRecordingMerchantNotes

> updateScreenRecordingMerchantNotes(storefront_oid, screen_recording_uuid, merchant_notes_request)

Update merchant notes on a screen recording

Update merchant notes on a screen recording 


### Example

<!-- UC_START_EXAMPLE updateScreenRecordingMerchantNotes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_uuid = "screen_recording_uuid_example"; // String | 
let merchant_notes_request = new UltraCartRestApiV2.ScreenRecordingMerchantNotesRequest(); // ScreenRecordingMerchantNotesRequest | Merchant Notes
apiInstance.updateScreenRecordingMerchantNotes(storefront_oid, screen_recording_uuid, merchant_notes_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE updateScreenRecordingMerchantNotes -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 
 **merchant_notes_request** | [**ScreenRecordingMerchantNotesRequest**](ScreenRecordingMerchantNotesRequest.md)| Merchant Notes | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateScreenRecordingSegment

> ScreenRecordingSegmentResponse updateScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, segment)

Update screen recording segment


### Example

<!-- UC_START_EXAMPLE updateScreenRecordingSegment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_segment_oid = 56; // Number | 
let segment = new UltraCartRestApiV2.ScreenRecordingSegment(); // ScreenRecordingSegment | Segment
apiInstance.updateScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, segment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateScreenRecordingSegment -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_segment_oid** | **Number**|  | 
 **segment** | [**ScreenRecordingSegment**](ScreenRecordingSegment.md)| Segment | 

### Return type

[**ScreenRecordingSegmentResponse**](ScreenRecordingSegmentResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateScreenRecordingSettings

> ScreenRecordingSettingsResponse updateScreenRecordingSettings(storefront_oid, settings)

Update screen recording settings


### Example

<!-- UC_START_EXAMPLE updateScreenRecordingSettings -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let settings = new UltraCartRestApiV2.ScreenRecordingSettings(); // ScreenRecordingSettings | Settings
apiInstance.updateScreenRecordingSettings(storefront_oid, settings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateScreenRecordingSettings -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **settings** | [**ScreenRecordingSettings**](ScreenRecordingSettings.md)| Settings | 

### Return type

[**ScreenRecordingSettingsResponse**](ScreenRecordingSettingsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateScreenRecordingTags

> updateScreenRecordingTags(storefront_oid, screen_recording_uuid, tags)

Update tags on a screen recording

Update tags on a screen recording 


### Example

<!-- UC_START_EXAMPLE updateScreenRecordingTags -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let screen_recording_uuid = "screen_recording_uuid_example"; // String | 
let tags = new UltraCartRestApiV2.ScreenRecordingTagsRequest(); // ScreenRecordingTagsRequest | Tags
apiInstance.updateScreenRecordingTags(storefront_oid, screen_recording_uuid, tags, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE updateScreenRecordingTags -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 
 **tags** | [**ScreenRecordingTagsRequest**](ScreenRecordingTagsRequest.md)| Tags | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTransactionEmail

> TransactionEmailResponse updateTransactionEmail(storefront_oid, email_id, transaction_email)

Updates a transaction email object

Updates a transactional email 


### Example

<!-- UC_START_EXAMPLE updateTransactionEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let email_id = "email_id_example"; // String | 
let transaction_email = new UltraCartRestApiV2.TransactionEmail(); // TransactionEmail | TransactionEmail
apiInstance.updateTransactionEmail(storefront_oid, email_id, transaction_email, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTransactionEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **email_id** | **String**|  | 
 **transaction_email** | [**TransactionEmail**](TransactionEmail.md)| TransactionEmail | 

### Return type

[**TransactionEmailResponse**](TransactionEmailResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTwilioAccount

> TwilioResponse updateTwilioAccount(esp_twilio_uuid, twilio)

Update Twilio account


### Example

<!-- UC_START_EXAMPLE updateTwilioAccount -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let esp_twilio_uuid = "esp_twilio_uuid_example"; // String | 
let twilio = new UltraCartRestApiV2.Twilio(); // Twilio | Twilio
apiInstance.updateTwilioAccount(esp_twilio_uuid, twilio, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTwilioAccount -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **esp_twilio_uuid** | **String**|  | 
 **twilio** | [**Twilio**](Twilio.md)| Twilio | 

### Return type

[**TwilioResponse**](TwilioResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadFsFile

> uploadFsFile(id, upload_request)

This is the last step in uploading a file after 1) calling getUploadFsFileUrl and 2) uploading a file to the provided url, then finally 3) calling this method and providing the key to trigger the server into reading the S3 bucket and retrieving the file.


### Example

<!-- UC_START_EXAMPLE uploadFsFile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let id = 56; // Number | 
let upload_request = new UltraCartRestApiV2.FileManagerUploadRequest(); // FileManagerUploadRequest | UploadRequest
apiInstance.uploadFsFile(id, upload_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE uploadFsFile -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **upload_request** | [**FileManagerUploadRequest**](FileManagerUploadRequest.md)| UploadRequest | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateRuler

> RulerValidationResponse validateRuler(ruler_validate_request)

Validate AWS Event Ruler


### Example

<!-- UC_START_EXAMPLE validateRuler -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.StorefrontApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let ruler_validate_request = new UltraCartRestApiV2.RulerValidationRequest(); // RulerValidationRequest | Ruler Validate Request
apiInstance.validateRuler(ruler_validate_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE validateRuler -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruler_validate_request** | [**RulerValidationRequest**](RulerValidationRequest.md)| Ruler Validate Request | 

### Return type

[**RulerValidationResponse**](RulerValidationResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

