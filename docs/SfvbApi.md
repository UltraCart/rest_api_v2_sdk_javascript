# UltraCartRestApiV2.SfvbApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSfvbPageBlogPosts**](SfvbApi.md#addSfvbPageBlogPosts) | **POST** /sfvb/storefronts/{storefront_oid}/pages/blog_posts/add | Assign blog posts to a page
[**addSfvbPageItems**](SfvbApi.md#addSfvbPageItems) | **POST** /sfvb/storefronts/{storefront_oid}/pages/items/add | Assign items to a page
[**archiveSfvbUpsellPath**](SfvbApi.md#archiveSfvbUpsellPath) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid}/archive | Archive an upsell path
[**attachSfvbBlogPostImage**](SfvbApi.md#attachSfvbBlogPostImage) | **POST** /sfvb/storefronts/{storefront_oid}/blog_posts/{blog_post_oid}/images/attach | Attach an image to a blog post
[**checkSfvbRedirect**](SfvbApi.md#checkSfvbRedirect) | **POST** /sfvb/storefronts/{storefront_oid}/redirects/check | Check a redirect rule without creating it
[**clearSfvbLibraryScreenshot**](SfvbApi.md#clearSfvbLibraryScreenshot) | **DELETE** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/screenshot | Remove a library entry&#39;s screenshot
[**compileSfvbCjson**](SfvbApi.md#compileSfvbCjson) | **POST** /sfvb/cjson/compile | Compile CJSON to Velocity
[**createSfvbLibraryEntry**](SfvbApi.md#createSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library | Save a fragment to the library
[**createSfvbPreviewAccess**](SfvbApi.md#createSfvbPreviewAccess) | **POST** /sfvb/storefronts/{storefront_oid}/preview_access | One time link that opens a preview in a browser with no UltraCart login
[**createSfvbPreviewSession**](SfvbApi.md#createSfvbPreviewSession) | **POST** /sfvb/storefronts/{storefront_oid}/preview_sessions | Create a preview session
[**deleteSfvbBlogPost**](SfvbApi.md#deleteSfvbBlogPost) | **DELETE** /sfvb/storefronts/{storefront_oid}/blog_posts/{blog_post_oid} | Delete a blog post
[**deleteSfvbFile**](SfvbApi.md#deleteSfvbFile) | **DELETE** /sfvb/storefronts/{storefront_oid}/files | Delete a storefront file
[**deleteSfvbItemAttribute**](SfvbApi.md#deleteSfvbItemAttribute) | **DELETE** /sfvb/storefronts/{storefront_oid}/items/attributes | Delete an attribute from an item
[**deleteSfvbItemMultimedia**](SfvbApi.md#deleteSfvbItemMultimedia) | **DELETE** /sfvb/storefronts/{storefront_oid}/items/multimedia | Detach an image from an item
[**deleteSfvbLibraryEntry**](SfvbApi.md#deleteSfvbLibraryEntry) | **DELETE** /sfvb/storefronts/{storefront_oid}/library/{library_oid} | Delete or retire a library entry
[**deleteSfvbPageMultimedia**](SfvbApi.md#deleteSfvbPageMultimedia) | **DELETE** /sfvb/storefronts/{storefront_oid}/pages/multimedia | Detach an image from a page
[**deleteSfvbPreviewSession**](SfvbApi.md#deleteSfvbPreviewSession) | **DELETE** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id} | Delete a preview session
[**deleteSfvbRedirect**](SfvbApi.md#deleteSfvbRedirect) | **DELETE** /sfvb/storefronts/{storefront_oid}/redirects/{redirect_id} | Delete a redirect rule
[**detachSfvbBlogPostImage**](SfvbApi.md#detachSfvbBlogPostImage) | **POST** /sfvb/storefronts/{storefront_oid}/blog_posts/{blog_post_oid}/images/detach | Detach an image from a blog post
[**disableSfvbI18nLanguage**](SfvbApi.md#disableSfvbI18nLanguage) | **POST** /sfvb/storefronts/{storefront_oid}/i18n/languages/{code}/disable | Disable a language
[**disableSfvbUpsellOffer**](SfvbApi.md#disableSfvbUpsellOffer) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_offers/{upsell_offer_oid}/disable | Disable an upsell offer
[**disableSfvbUpsellPath**](SfvbApi.md#disableSfvbUpsellPath) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid}/disable | Disable an upsell path
[**downloadSfvbFile**](SfvbApi.md#downloadSfvbFile) | **GET** /sfvb/storefronts/{storefront_oid}/files/download | Read a storefront file&#39;s raw bytes
[**dryRunSfvbRedirectImport**](SfvbApi.md#dryRunSfvbRedirectImport) | **POST** /sfvb/storefronts/{storefront_oid}/redirects/import/dry_run | Check a redirect import without writing it
[**duplicateSfvbLibraryEntry**](SfvbApi.md#duplicateSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/duplicate | Copy a library entry into a new private entry
[**duplicateSfvbPage**](SfvbApi.md#duplicateSfvbPage) | **POST** /sfvb/storefronts/{storefront_oid}/pages/duplicate | Copy a page to a new path
[**duplicateSfvbTheme**](SfvbApi.md#duplicateSfvbTheme) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/duplicate | Duplicate a theme
[**duplicateSfvbUpsellOffer**](SfvbApi.md#duplicateSfvbUpsellOffer) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_offers/{upsell_offer_oid}/duplicate | Duplicate an upsell offer
[**duplicateSfvbUpsellPath**](SfvbApi.md#duplicateSfvbUpsellPath) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid}/duplicate | Duplicate an upsell path or one of its variations
[**enableSfvbI18nLanguage**](SfvbApi.md#enableSfvbI18nLanguage) | **POST** /sfvb/storefronts/{storefront_oid}/i18n/languages/{code}/enable | Enable a language
[**endSfvbExperiment**](SfvbApi.md#endSfvbExperiment) | **POST** /sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}/end | End an experiment
[**favoriteSfvbLibraryEntry**](SfvbApi.md#favoriteSfvbLibraryEntry) | **PUT** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/favorite | Favorite a library entry
[**getSfvbBlogPost**](SfvbApi.md#getSfvbBlogPost) | **GET** /sfvb/storefronts/{storefront_oid}/blog_posts/{blog_post_oid} | Read a blog post
[**getSfvbCjsonUsedElements**](SfvbApi.md#getSfvbCjsonUsedElements) | **POST** /sfvb/cjson/elements | Element types used by a container
[**getSfvbContainer**](SfvbApi.md#getSfvbContainer) | **GET** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id} | Read a container stored outside the file system
[**getSfvbContainerVersion**](SfvbApi.md#getSfvbContainerVersion) | **GET** /sfvb/storefronts/{storefront_oid}/container_versions/{container_history_oid} | Read the CJSON stored in one container history entry
[**getSfvbElement**](SfvbApi.md#getSfvbElement) | **GET** /sfvb/elements/{element_type} | Configuration schema and field card for one element type
[**getSfvbExperiment**](SfvbApi.md#getSfvbExperiment) | **GET** /sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid} | Read one experiment and its statistics
[**getSfvbExperimentObjectives**](SfvbApi.md#getSfvbExperimentObjectives) | **GET** /sfvb/storefronts/{storefront_oid}/experiments/objectives | List the objectives an experiment can optimize
[**getSfvbFileContent**](SfvbApi.md#getSfvbFileContent) | **GET** /sfvb/storefronts/{storefront_oid}/files/content | Read a storefront file
[**getSfvbFileUploadUrl**](SfvbApi.md#getSfvbFileUploadUrl) | **GET** /sfvb/storefronts/{storefront_oid}/files/upload_url/{extension} | Get a URL to upload a binary asset to
[**getSfvbI18nGlossary**](SfvbApi.md#getSfvbI18nGlossary) | **GET** /sfvb/storefronts/{storefront_oid}/i18n/glossary | Read the storefront&#39;s translation glossary
[**getSfvbI18nLanguages**](SfvbApi.md#getSfvbI18nLanguages) | **GET** /sfvb/storefronts/{storefront_oid}/i18n/languages | List a storefront&#39;s languages
[**getSfvbI18nMachineTranslations**](SfvbApi.md#getSfvbI18nMachineTranslations) | **GET** /sfvb/storefronts/{storefront_oid}/i18n/machine_translations | Read where a widget setting&#39;s translations come from
[**getSfvbI18nMessage**](SfvbApi.md#getSfvbI18nMessage) | **GET** /sfvb/storefronts/{storefront_oid}/i18n/messages/{key} | Read one built-in message
[**getSfvbI18nMessageMachineTranslations**](SfvbApi.md#getSfvbI18nMessageMachineTranslations) | **GET** /sfvb/storefronts/{storefront_oid}/i18n/messages/{key}/machine_translations | Read where a message&#39;s translations come from
[**getSfvbItem**](SfvbApi.md#getSfvbItem) | **GET** /sfvb/storefronts/{storefront_oid}/items | Read an item&#39;s storefront facing content
[**getSfvbLibraryEntry**](SfvbApi.md#getSfvbLibraryEntry) | **GET** /sfvb/storefronts/{storefront_oid}/library/{library_oid} | Read one library entry including its CJSON
[**getSfvbLibraryHistory**](SfvbApi.md#getSfvbLibraryHistory) | **GET** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/history | List a library entry&#39;s published revisions
[**getSfvbLibraryShareTargets**](SfvbApi.md#getSfvbLibraryShareTargets) | **GET** /sfvb/storefronts/{storefront_oid}/library/share_targets | List the accounts a library entry can be shared with
[**getSfvbLibraryTaxonomy**](SfvbApi.md#getSfvbLibraryTaxonomy) | **GET** /sfvb/storefronts/{storefront_oid}/library/taxonomy | List the allowed library tags
[**getSfvbMenu**](SfvbApi.md#getSfvbMenu) | **GET** /sfvb/storefronts/{storefront_oid}/menus/{code} | Read one store menu and its entries
[**getSfvbMenus**](SfvbApi.md#getSfvbMenus) | **GET** /sfvb/storefronts/{storefront_oid}/menus | List a storefront&#39;s store menus
[**getSfvbNotFound**](SfvbApi.md#getSfvbNotFound) | **GET** /sfvb/storefronts/{storefront_oid}/not_found | List the paths that answered 404
[**getSfvbNotFoundEntry**](SfvbApi.md#getSfvbNotFoundEntry) | **GET** /sfvb/storefronts/{storefront_oid}/not_found/{not_found_id} | Read one 404 path with its recent hits
[**getSfvbNotFoundPage**](SfvbApi.md#getSfvbNotFoundPage) | **GET** /sfvb/storefronts/{storefront_oid}/not_found_page | What renders the storefront&#39;s 404 page
[**getSfvbPage**](SfvbApi.md#getSfvbPage) | **GET** /sfvb/storefronts/{storefront_oid}/pages | Read a page&#39;s attributes and images
[**getSfvbPageBlogPosts**](SfvbApi.md#getSfvbPageBlogPosts) | **GET** /sfvb/storefronts/{storefront_oid}/pages/blog_posts | Read the blog posts assigned to a page
[**getSfvbPageItems**](SfvbApi.md#getSfvbPageItems) | **GET** /sfvb/storefronts/{storefront_oid}/pages/items | Read the items assigned to a page
[**getSfvbPageSelectors**](SfvbApi.md#getSfvbPageSelectors) | **GET** /sfvb/storefronts/{storefront_oid}/pages/selectors | Read a page&#39;s selectors
[**getSfvbPreviewUrl**](SfvbApi.md#getSfvbPreviewUrl) | **GET** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id}/url | URL that renders a preview session
[**getSfvbRecording**](SfvbApi.md#getSfvbRecording) | **GET** /sfvb/storefronts/{storefront_oid}/recordings/{screen_recording_uuid} | Get a screen recording
[**getSfvbRecordingPageViewEvents**](SfvbApi.md#getSfvbRecordingPageViewEvents) | **GET** /sfvb/storefronts/{storefront_oid}/recordings/{screen_recording_uuid}/page_views/{screen_recording_page_view_uuid}/events | Get one recorded page view&#39;s replay events
[**getSfvbRecordingSettings**](SfvbApi.md#getSfvbRecordingSettings) | **GET** /sfvb/storefronts/{storefront_oid}/recording_settings | Get the storefront&#39;s screen recording settings
[**getSfvbRedirect**](SfvbApi.md#getSfvbRedirect) | **GET** /sfvb/storefronts/{storefront_oid}/redirects/{redirect_id} | Read one redirect rule
[**getSfvbRedirects**](SfvbApi.md#getSfvbRedirects) | **GET** /sfvb/storefronts/{storefront_oid}/redirects | List the storefront&#39;s redirect rules
[**getSfvbServerLog**](SfvbApi.md#getSfvbServerLog) | **GET** /sfvb/storefronts/{storefront_oid}/logs/{log_id} | Get one storefront render log
[**getSfvbSiteAttributes**](SfvbApi.md#getSfvbSiteAttributes) | **GET** /sfvb/storefronts/{storefront_oid}/attributes | Read a storefront&#39;s site attributes
[**getSfvbTheme**](SfvbApi.md#getSfvbTheme) | **GET** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid} | Get a theme
[**getSfvbThemeAttributes**](SfvbApi.md#getSfvbThemeAttributes) | **GET** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes | Read a theme&#39;s colors, fonts and settings
[**getSfvbThemeJob**](SfvbApi.md#getSfvbThemeJob) | **GET** /sfvb/storefronts/{storefront_oid}/theme_jobs/{job_id} | Status of an asynchronous theme job
[**getSfvbUpsellOffer**](SfvbApi.md#getSfvbUpsellOffer) | **GET** /sfvb/storefronts/{storefront_oid}/upsell_offers/{upsell_offer_oid} | Get an upsell offer
[**getSfvbUpsellPath**](SfvbApi.md#getSfvbUpsellPath) | **GET** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid} | Get an upsell path
[**getSfvbVersion**](SfvbApi.md#getSfvbVersion) | **GET** /sfvb/version | Compiler version for this merchant
[**getSfvbWhoami**](SfvbApi.md#getSfvbWhoami) | **GET** /sfvb/whoami | Who this token is
[**ignoreSfvbNotFoundEntry**](SfvbApi.md#ignoreSfvbNotFoundEntry) | **POST** /sfvb/storefronts/{storefront_oid}/not_found/{not_found_id}/ignore | Ignore a 404 path
[**importSfvbRedirects**](SfvbApi.md#importSfvbRedirects) | **POST** /sfvb/storefronts/{storefront_oid}/redirects/import | Apply a reviewed redirect import
[**insertSfvbBlogPost**](SfvbApi.md#insertSfvbBlogPost) | **POST** /sfvb/storefronts/{storefront_oid}/blog_posts | Create a blog post
[**insertSfvbPage**](SfvbApi.md#insertSfvbPage) | **POST** /sfvb/storefronts/{storefront_oid}/pages | Create a page
[**insertSfvbRedirect**](SfvbApi.md#insertSfvbRedirect) | **POST** /sfvb/storefronts/{storefront_oid}/redirects | Create a 301 redirect rule
[**insertSfvbUpsellOffer**](SfvbApi.md#insertSfvbUpsellOffer) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_offers | Create an upsell offer
[**insertSfvbUpsellPath**](SfvbApi.md#insertSfvbUpsellPath) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_paths | Create an upsell path
[**installSfvbLibraryEntry**](SfvbApi.md#installSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/install | Install a library entry into a storefront
[**listSfvbBlogPosts**](SfvbApi.md#listSfvbBlogPosts) | **GET** /sfvb/storefronts/{storefront_oid}/blog_posts | List the storefront&#39;s blog posts
[**listSfvbContainerVersions**](SfvbApi.md#listSfvbContainerVersions) | **GET** /sfvb/storefronts/{storefront_oid}/container_versions | Version history for a container stored outside the file system
[**listSfvbElements**](SfvbApi.md#listSfvbElements) | **GET** /sfvb/elements | List every SFVB element type
[**listSfvbExperiments**](SfvbApi.md#listSfvbExperiments) | **GET** /sfvb/storefronts/{storefront_oid}/experiments | List the storefront&#39;s experiments
[**listSfvbFileVersions**](SfvbApi.md#listSfvbFileVersions) | **GET** /sfvb/storefronts/{storefront_oid}/files/versions | Version history for a storefront file
[**listSfvbFiles**](SfvbApi.md#listSfvbFiles) | **GET** /sfvb/storefronts/{storefront_oid}/files | List a storefront directory
[**listSfvbI18nMessages**](SfvbApi.md#listSfvbI18nMessages) | **GET** /sfvb/storefronts/{storefront_oid}/i18n/messages | List built-in messages
[**listSfvbItemContainers**](SfvbApi.md#listSfvbItemContainers) | **GET** /sfvb/storefronts/{storefront_oid}/item_containers | List the item containers on the account
[**listSfvbLibraryInstalls**](SfvbApi.md#listSfvbLibraryInstalls) | **GET** /sfvb/storefronts/{storefront_oid}/library/installs | List the library entries installed on a storefront
[**listSfvbPages**](SfvbApi.md#listSfvbPages) | **GET** /sfvb/storefronts/{storefront_oid}/pages/list | List the storefront&#39;s pages
[**listSfvbServerLogs**](SfvbApi.md#listSfvbServerLogs) | **GET** /sfvb/storefronts/{storefront_oid}/logs | List recent storefront render logs
[**listSfvbStorefronts**](SfvbApi.md#listSfvbStorefronts) | **GET** /sfvb/storefronts | List storefronts
[**listSfvbTemplates**](SfvbApi.md#listSfvbTemplates) | **GET** /sfvb/storefronts/{storefront_oid}/templates | List the active theme&#39;s templates
[**listSfvbThemes**](SfvbApi.md#listSfvbThemes) | **GET** /sfvb/storefronts/{storefront_oid}/themes | List themes for a storefront
[**listSfvbUpsellOffers**](SfvbApi.md#listSfvbUpsellOffers) | **GET** /sfvb/storefronts/{storefront_oid}/upsell_offers | List upsell offers
[**listSfvbUpsellPaths**](SfvbApi.md#listSfvbUpsellPaths) | **GET** /sfvb/storefronts/{storefront_oid}/upsell_paths | List upsell paths
[**moveSfvbUpsellPath**](SfvbApi.md#moveSfvbUpsellPath) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid}/move | Move an upsell path
[**publishSfvbLibraryEntry**](SfvbApi.md#publishSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/publish | Publish a library entry&#39;s draft
[**putSfvbContainer**](SfvbApi.md#putSfvbContainer) | **PUT** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id} | Write a container stored outside the file system
[**putSfvbExperimentVariation**](SfvbApi.md#putSfvbExperimentVariation) | **PUT** /sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}/variations/{variation_number} | Pause or resume a variation
[**putSfvbFileContent**](SfvbApi.md#putSfvbFileContent) | **PUT** /sfvb/storefronts/{storefront_oid}/files/content | Write a storefront file
[**putSfvbI18nGlossary**](SfvbApi.md#putSfvbI18nGlossary) | **PUT** /sfvb/storefronts/{storefront_oid}/i18n/glossary | Replace the storefront&#39;s translation glossary
[**putSfvbI18nMessage**](SfvbApi.md#putSfvbI18nMessage) | **PUT** /sfvb/storefronts/{storefront_oid}/i18n/messages/{key} | Change one built-in message
[**putSfvbItemAttributes**](SfvbApi.md#putSfvbItemAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/items/attributes | Change some of an item&#39;s attributes
[**putSfvbItemContent**](SfvbApi.md#putSfvbItemContent) | **PUT** /sfvb/storefronts/{storefront_oid}/items/content | Change an item&#39;s title or long description
[**putSfvbItemMultimedia**](SfvbApi.md#putSfvbItemMultimedia) | **PUT** /sfvb/storefronts/{storefront_oid}/items/multimedia | Attach an image to an item
[**putSfvbItemSeo**](SfvbApi.md#putSfvbItemSeo) | **PUT** /sfvb/storefronts/{storefront_oid}/items/seo | Change an item&#39;s search metadata
[**putSfvbMenu**](SfvbApi.md#putSfvbMenu) | **PUT** /sfvb/storefronts/{storefront_oid}/menus/{code} | Replace a store menu&#39;s entries
[**putSfvbPageAttributes**](SfvbApi.md#putSfvbPageAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/pages/attributes | Change a page&#39;s attributes
[**putSfvbPageMultimedia**](SfvbApi.md#putSfvbPageMultimedia) | **PUT** /sfvb/storefronts/{storefront_oid}/pages/multimedia | Attach an image to a page
[**putSfvbPageSelectors**](SfvbApi.md#putSfvbPageSelectors) | **PUT** /sfvb/storefronts/{storefront_oid}/pages/selectors | Replace a page&#39;s selectors
[**putSfvbPageSettings**](SfvbApi.md#putSfvbPageSettings) | **PUT** /sfvb/storefronts/{storefront_oid}/pages/settings | Change a page&#39;s settings
[**putSfvbPreviewSession**](SfvbApi.md#putSfvbPreviewSession) | **PUT** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id} | Push containers into a preview session
[**putSfvbRecordingSettings**](SfvbApi.md#putSfvbRecordingSettings) | **PUT** /sfvb/storefronts/{storefront_oid}/recording_settings | Turn the storefront&#39;s screen recording on or off
[**putSfvbSiteAttributes**](SfvbApi.md#putSfvbSiteAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/attributes | Change a storefront&#39;s site attributes
[**putSfvbThemeAttributes**](SfvbApi.md#putSfvbThemeAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes | Change a theme&#39;s colors, fonts and settings
[**refreshSfvbPage**](SfvbApi.md#refreshSfvbPage) | **POST** /sfvb/storefronts/{storefront_oid}/pages/refresh | Drop one page&#39;s cached copy
[**removeSfvbPageBlogPosts**](SfvbApi.md#removeSfvbPageBlogPosts) | **POST** /sfvb/storefronts/{storefront_oid}/pages/blog_posts/remove | Take blog posts off a page
[**removeSfvbPageItems**](SfvbApi.md#removeSfvbPageItems) | **POST** /sfvb/storefronts/{storefront_oid}/pages/items/remove | Take items off a page
[**renderSfvbWidgets**](SfvbApi.md#renderSfvbWidgets) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/render | Render a CJSON node to HTML
[**reserveSfvbWidgetIds**](SfvbApi.md#reserveSfvbWidgetIds) | **POST** /sfvb/storefronts/{storefront_oid}/widget_ids | Reserve a block of widget ids
[**resetSfvbI18nMessage**](SfvbApi.md#resetSfvbI18nMessage) | **DELETE** /sfvb/storefronts/{storefront_oid}/i18n/messages/{key} | Reset one built-in message
[**resolveSfvbRedirect**](SfvbApi.md#resolveSfvbRedirect) | **GET** /sfvb/storefronts/{storefront_oid}/redirects/resolve | What a shopper gets for a path
[**resolveSfvbTemplate**](SfvbApi.md#resolveSfvbTemplate) | **GET** /sfvb/storefronts/{storefront_oid}/templates/resolve | Resolve a template name to the file a page renders
[**revertSfvbContainer**](SfvbApi.md#revertSfvbContainer) | **POST** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id}/revert | Revert a container stored outside the file system
[**revertSfvbFile**](SfvbApi.md#revertSfvbFile) | **POST** /sfvb/storefronts/{storefront_oid}/files/revert | Revert a storefront file to an earlier version
[**searchSfvbFiles**](SfvbApi.md#searchSfvbFiles) | **POST** /sfvb/storefronts/{storefront_oid}/files/search | Search storefront files
[**searchSfvbLibrary**](SfvbApi.md#searchSfvbLibrary) | **GET** /sfvb/storefronts/{storefront_oid}/library | Search the element library
[**setSfvbLibraryScreenshot**](SfvbApi.md#setSfvbLibraryScreenshot) | **PUT** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/screenshot | Set a library entry&#39;s screenshot
[**shareSfvbLibraryEntry**](SfvbApi.md#shareSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/shares | Share a published library entry with a linked account
[**startSfvbExperiment**](SfvbApi.md#startSfvbExperiment) | **POST** /sfvb/storefronts/{storefront_oid}/experiments | Start an experiment
[**unarchiveSfvbUpsellPath**](SfvbApi.md#unarchiveSfvbUpsellPath) | **POST** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid}/unarchive | Unarchive an upsell path
[**unfavoriteSfvbLibraryEntry**](SfvbApi.md#unfavoriteSfvbLibraryEntry) | **DELETE** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/favorite | Remove a library entry from favorites
[**unignoreSfvbNotFoundEntry**](SfvbApi.md#unignoreSfvbNotFoundEntry) | **DELETE** /sfvb/storefronts/{storefront_oid}/not_found/{not_found_id}/ignore | Stop ignoring a 404 path
[**unpublishSfvbLibraryEntry**](SfvbApi.md#unpublishSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/unpublish | Narrow who can see a library entry
[**unshareSfvbLibraryEntry**](SfvbApi.md#unshareSfvbLibraryEntry) | **DELETE** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/shares/{merchant_id} | Stop sharing a library entry with an account
[**updateSfvbBlogPost**](SfvbApi.md#updateSfvbBlogPost) | **PUT** /sfvb/storefronts/{storefront_oid}/blog_posts/{blog_post_oid} | Change a blog post
[**updateSfvbLibraryEntry**](SfvbApi.md#updateSfvbLibraryEntry) | **PUT** /sfvb/storefronts/{storefront_oid}/library/{library_oid} | Update a library entry&#39;s draft
[**updateSfvbRedirect**](SfvbApi.md#updateSfvbRedirect) | **PUT** /sfvb/storefronts/{storefront_oid}/redirects/{redirect_id} | Change a redirect rule
[**updateSfvbUpsellOffer**](SfvbApi.md#updateSfvbUpsellOffer) | **PUT** /sfvb/storefronts/{storefront_oid}/upsell_offers/{upsell_offer_oid} | Update an upsell offer
[**updateSfvbUpsellPath**](SfvbApi.md#updateSfvbUpsellPath) | **PUT** /sfvb/storefronts/{storefront_oid}/upsell_paths/{upsell_path_oid} | Update an upsell path
[**uploadSfvbFile**](SfvbApi.md#uploadSfvbFile) | **POST** /sfvb/storefronts/{storefront_oid}/files/upload | Store a binary asset that was already uploaded
[**validateSfvbCjson**](SfvbApi.md#validateSfvbCjson) | **POST** /sfvb/cjson/validate | Validate CJSON
[**validateSfvbVelocity**](SfvbApi.md#validateSfvbVelocity) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/velocity/validate | Validate a Velocity template against a theme



## addSfvbPageBlogPosts

> SfvbPageBlogPostsResponse addSfvbPageBlogPosts(storefront_oid, path, page_blog_posts_request)

Assign blog posts to a page

Adds posts by blog_post_oid, at most 500 at a time.  Every oid must be a post on this storefront, and one that is not changes nothing.  Refused on a page whose selectors choose its blog posts.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /blog/ | 
 **page_blog_posts_request** | [**SfvbPageBlogPostsRequest**](SfvbPageBlogPostsRequest.md)| Blog posts to assign | 

### Return type

[**SfvbPageBlogPostsResponse**](SfvbPageBlogPostsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## addSfvbPageItems

> SfvbPageItemsResponse addSfvbPageItems(storefront_oid, path, page_items_add_request)

Assign items to a page

Adds items by item id, at most 500 at a time, or changes the sort order or url part of items already on the page.  Every id is checked first and one unknown id changes nothing.  Refused on a page whose selectors choose its items.  sort_order is refused unless the page sorts its items by a custom order.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /lp/spring-sale/ | 
 **page_items_add_request** | [**SfvbPageItemsAddRequest**](SfvbPageItemsAddRequest.md)| Items to assign | 

### Return type

[**SfvbPageItemsResponse**](SfvbPageItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## archiveSfvbUpsellPath

> SfvbUpsellPath archiveSfvbUpsellPath(storefront_oid, upsell_path_oid)

Archive an upsell path

Files the path out of the default list.  An archived path does not run.  Archiving one that is switched on is a live change and needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachSfvbBlogPostImage

> SfvbBlogPostDetail attachSfvbBlogPostImage(storefront_oid, blog_post_oid, blog_post_image_request)

Attach an image to a blog post

Three calls, like the admin blog editor&#39;s upload.  Request an upload URL with files/upload_url, send the bytes to it, then attach with the key and a filename.  No storefront file is created, and the key is redeemed, so it cannot be used twice.  default_image replaces the post&#39;s default image and code replaces the image with that code; with neither, the image is added for use in the body at the url the response reports.  JPEG, PNG, GIF or WebP, checked by content.  A post that is not a draft needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **blog_post_oid** | **Number**|  | 
 **blog_post_image_request** | [**SfvbBlogPostImageRequest**](SfvbBlogPostImageRequest.md)| Image to attach | 

### Return type

[**SfvbBlogPostDetail**](SfvbBlogPostDetail.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## checkSfvbRedirect

> SfvbRedirectCheckResponse checkSfvbRedirect(storefront_oid, redirect_request)

Check a redirect rule without creating it

Runs every check a create runs (loops, chains, duplicates, missing or external targets, system paths, live pages, the rule limit) and returns the findings.  Writes nothing. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_request** | [**SfvbRedirectRequest**](SfvbRedirectRequest.md)| The request | 

### Return type

[**SfvbRedirectCheckResponse**](SfvbRedirectCheckResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## clearSfvbLibraryScreenshot

> SfvbLibraryEntry clearSfvbLibraryScreenshot(storefront_oid, library_oid, If_Match)

Remove a library entry&#39;s screenshot

Owner only, with the draft&#39;s hash_sha256 as If-Match.  Clears the screenshot and thumbnail.  Published revisions and copies that used the image keep it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## compileSfvbCjson

> SfvbCompileResponse compileSfvbCjson(compile_request)

Compile CJSON to Velocity

Compiles a container document to Velocity without storing anything.  Supply theme_oid to compile with the theme&#39;s inherit groups applied; omit it to compile standalone. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compile_request** | [**SfvbCompileRequest**](SfvbCompileRequest.md)| CJSON to compile | 

### Return type

[**SfvbCompileResponse**](SfvbCompileResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSfvbLibraryEntry

> SfvbLibraryEntry createSfvbLibraryEntry(storefront_oid, library_entry)

Save a fragment to the library

Creates a private draft owned by the calling user.  The fragment is one widget and its children, and it must validate.  Images it references on this storefront are copied into the entry before this returns, so it installs anywhere with its images.  The fragment is scanned; card skimming or obfuscation signals are refused outright.  Nothing other merchants or shoppers see changes, so sfvb_write is enough.  Publish it to share it.  An optional screenshot takes a staged PNG key, exactly as the library screenshot endpoint does; a refused screenshot refuses the whole create. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_entry** | [**SfvbLibraryEntryRequest**](SfvbLibraryEntryRequest.md)| The entry | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## createSfvbPreviewAccess

> SfvbPreviewAccessResponse createSfvbPreviewAccess(storefront_oid, opts)

One time link that opens a preview in a browser with no UltraCart login

The preview URL only works in a browser already signed in to UltraCart on the storefront&#39;s own host, and an agent&#39;s built in browser never is.  This returns a single use access_url on the storefront host instead.  Opening it gets past the storefront lock, shows the requested theme and applies the requested preview session for the rest of that browser session, then redirects to path.  It expires two minutes after issue or on first use.  Pages opened afterwards carry an X-UltraCart-Preview header of applied or not-applied.  Requires a token that resolves to a user, so use the device authorization flow. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **preview_access** | [**SfvbPreviewAccessRequest**](SfvbPreviewAccessRequest.md)| What the browser should see | [optional] 

### Return type

[**SfvbPreviewAccessResponse**](SfvbPreviewAccessResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSfvbPreviewSession

> SfvbPreviewSessionResponse createSfvbPreviewSession(storefront_oid)

Create a preview session

Returns a server generated session id to push containers into, and opens the session so that id exists rather than merely being random.  The id is not caller supplied, because concurrent agents choosing their own would be free to collide, and the browser editor&#39;s habit of minting one with Math.random is not a property worth carrying into an API.  Expires after eight hours and can be deleted sooner.  Requires a token that resolves to a user, so use the device authorization flow. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbPreviewSessionResponse**](SfvbPreviewSessionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbBlogPost

> deleteSfvbBlogPost(storefront_oid, blog_post_oid)

Delete a blog post

Takes the post off every page and deletes it.  There is no undo.  A post that is not a draft needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **blog_post_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbFile

> deleteSfvbFile(storefront_oid, If_Match, opts)

Delete a storefront file

Recoverable from the recycle bin. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **If_Match** | **String**| Content hash of the file being deleted.  Required; 428 when absent, 412 when stale. | 
 **path** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbItemAttribute

> SfvbItemResponse deleteSfvbItemAttribute(storefront_oid, name, opts)

Delete an attribute from an item

Removes one attribute that no template on the item&#39;s pages declares - a test name, a misspelling, one a retired template used.  A declared attribute is refused, because the template would list it again, empty; send an empty value through the attributes update to clear one of those instead. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **name** | **String**| The attribute name, matched without regard to case | 
 **merchant_item_id** | **String**|  | [optional] 
 **merchant_item_oid** | **Number**|  | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbItemMultimedia

> SfvbItemResponse deleteSfvbItemMultimedia(storefront_oid, opts)

Detach an image from an item

Removes the item&#39;s copy of the image in one slot.  The file you uploaded is left where it is, so the same source can be attached again or used elsewhere. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **merchant_item_id** | **String**|  | [optional] 
 **merchant_item_oid** | **Number**|  | [optional] 
 **code** | **String**| The image code to detach | [optional] 
 **_default** | **Boolean**| Detach the default image instead of a coded one | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbLibraryEntry

> SfvbLibraryDeleteResult deleteSfvbLibraryEntry(storefront_oid, library_oid, If_Match)

Delete or retire a library entry

Owner only, with the draft&#39;s hash_sha256 as If-Match.  An entry that was never published, installed or shared is deleted.  Anything else is retired - kept so the storefronts that installed it still resolve, but out of search and refusing new installs and publishes.  The result says which happened. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 

### Return type

[**SfvbLibraryDeleteResult**](SfvbLibraryDeleteResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbPageMultimedia

> SfvbPageResponse deleteSfvbPageMultimedia(storefront_oid, path, opts)

Detach an image from a page

Name exactly one of code or default.  Removes the page&#39;s copy of the image; the source file in the page folder is left alone.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /catalog/dispensers/ | 
 **code** | **String**| Image code to detach | [optional] 
 **_default** | **Boolean**| True to detach the default image | [optional] 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbPreviewSession

> deleteSfvbPreviewSession(storefront_oid, preview_session_id)

Delete a preview session

Releases the session before its eight hour expiry.  Without this the only way to free one is to wait, which is a poor answer for a tool that may open a dozen in an afternoon. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **preview_session_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSfvbRedirect

> deleteSfvbRedirect(storefront_oid, redirect_id, If_Match)

Delete a redirect rule

Deletes one rule.  The source path answers again as it would without the rule.  Send the hash_sha256 you read as If-Match.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_id** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  428 when absent, 412 when stale. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## detachSfvbBlogPostImage

> SfvbBlogPostDetail detachSfvbBlogPostImage(storefront_oid, blog_post_oid, blog_post_image_request)

Detach an image from a blog post

Name exactly one of default_image, code or blog_post_multimedia_oid.  Removes the image from the post and deletes its stored copy.  Take it out of the body too, or the body keeps a broken image.  A post that is not a draft needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **blog_post_oid** | **Number**|  | 
 **blog_post_image_request** | [**SfvbBlogPostImageRequest**](SfvbBlogPostImageRequest.md)| Image to detach | 

### Return type

[**SfvbBlogPostDetail**](SfvbBlogPostDetail.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## disableSfvbI18nLanguage

> SfvbI18nLanguagesResponse disableSfvbI18nLanguage(storefront_oid, code, If_Match)

Disable a language

Stops serving a language.  Its hand and machine translations are kept and come back when it is enabled again.  The default language cannot be disabled.  Already disabled answers changed false.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **code** | **String**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 

### Return type

[**SfvbI18nLanguagesResponse**](SfvbI18nLanguagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disableSfvbUpsellOffer

> SfvbUpsellOffer disableSfvbUpsellOffer(storefront_oid, upsell_offer_oid)

Disable an upsell offer

Switches the offer off.  Disabling one that is switched on is a live change and needs sfvb_publish.  An offer that is already off is returned unchanged.  There is no delete. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_offer_oid** | **Number**|  | 

### Return type

[**SfvbUpsellOffer**](SfvbUpsellOffer.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disableSfvbUpsellPath

> SfvbUpsellPath disableSfvbUpsellPath(storefront_oid, upsell_path_oid)

Disable an upsell path

Switches the path off.  Disabling a running path is a live change and needs sfvb_publish.  A path that is already off is returned unchanged.  There is no delete. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadSfvbFile

> downloadSfvbFile(storefront_oid, opts)

Read a storefront file&#39;s raw bytes

Returns the file itself rather than a JSON envelope, for any type including binaries that files/content refuses.  Use this to verify what you uploaded, and note it is the only way to read a file inside a theme that is not active - such a file is served to nobody until the theme is promoted, so it has no public URL to fetch instead.  On success the body is the file; on failure it is the usual JSON error object, so do not assume the content type without checking the status. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## dryRunSfvbRedirectImport

> SfvbRedirectImportResponse dryRunSfvbRedirectImport(storefront_oid, redirect_import_request)

Check a redirect import without writing it

Checks up to 5,000 rows against the existing rules and each other, and returns the findings per row with a plan_hash.  Writes nothing.  Rows are merged with the existing rules; nothing is ever deleted. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_import_request** | [**SfvbRedirectImportRequest**](SfvbRedirectImportRequest.md)| The request | 

### Return type

[**SfvbRedirectImportResponse**](SfvbRedirectImportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## duplicateSfvbLibraryEntry

> SfvbLibraryEntry duplicateSfvbLibraryEntry(storefront_oid, library_oid, opts)

Copy a library entry into a new private entry

The copy is owned by the calling user and private.  From an entry you own it copies the draft; from one shared with you it copies the published revision.  It is scanned on its own and inherits nothing but content, its images and its screenshot. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **name** | **String**| Name for the copy.  Defaults to Copy of and the source name. | [optional] 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## duplicateSfvbPage

> SfvbPageResponse duplicateSfvbPage(storefront_oid, page_duplicate_request)

Copy a page to a new path

Copies what the store admin&#39;s duplicate copies - settings, items, blog posts, permissions, attributes, selectors, images and the page folder with its body.  The copy goes to the path you choose, under any existing page, with the same path rules as creating a page, and a 409 with the code sfvb.page_exists when that path is taken.  The root page and pages with pages under them cannot be copied.  A page whose folder holds a started experiment is refused, because the copy would share the experiment - end it first.  Translated title and description text is not copied.  Always needs sfvb_publish, because the copy is live as soon as it exists. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **page_duplicate_request** | [**SfvbPageDuplicateRequest**](SfvbPageDuplicateRequest.md)| The page to copy and where | 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## duplicateSfvbTheme

> SfvbThemeJobResponse duplicateSfvbTheme(storefront_oid, theme_oid, duplicate_request)

Duplicate a theme

Copies a theme into a new one and returns a job handle to poll.  Asynchronous, because copying a theme copies every file in it.  Needs sfvb_write rather than sfvb_publish, because the job explicitly does not activate what it creates, so the worst outcome of a mistaken call is a spare theme.  This is how you get somewhere safe to work - duplicate, edit the copy with an ordinary write scope, and let a human promote it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | 
 **duplicate_request** | [**SfvbThemeDuplicateRequest**](SfvbThemeDuplicateRequest.md)| Theme duplication details | 

### Return type

[**SfvbThemeJobResponse**](SfvbThemeJobResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## duplicateSfvbUpsellOffer

> SfvbUpsellOffer duplicateSfvbUpsellOffer(storefront_oid, upsell_offer_oid)

Duplicate an upsell offer

A copy named Copy of, switched off, with its own copy of the container.  Put it on a path with a path update to have it shown. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_offer_oid** | **Number**|  | 

### Return type

[**SfvbUpsellOffer**](SfvbUpsellOffer.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## duplicateSfvbUpsellPath

> SfvbUpsellPath duplicateSfvbUpsellPath(storefront_oid, upsell_path_oid, opts)

Duplicate an upsell path or one of its variations

Without a variation, copies the whole path right after it, switched off.  With a variation, appends a copy of that variation to the same path, which needs sfvb_publish when the path is running.  Every offer the copy uses is copied too and switched off.  Within this storefront only. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 
 **duplicate_request** | [**SfvbUpsellPathDuplicateRequest**](SfvbUpsellPathDuplicateRequest.md)| What to duplicate | [optional] 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## enableSfvbI18nLanguage

> SfvbI18nLanguagesResponse enableSfvbI18nLanguage(storefront_oid, code, If_Match, language_enable_request)

Enable a language

Turns a language on.  It is served to shoppers and machine translated, which is billed per character, so acknowledge_cost must be true and the caller must be a person (device authorization).  Records the same billing note as the merchant admin.  Already enabled answers changed false.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **code** | **String**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **language_enable_request** | [**SfvbI18nLanguageEnableRequest**](SfvbI18nLanguageEnableRequest.md)| The cost acknowledgement | 

### Return type

[**SfvbI18nLanguagesResponse**](SfvbI18nLanguagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## endSfvbExperiment

> SfvbExperiment endSfvbExperiment(storefront_oid, experiment_oid, opts)

End an experiment

Ends a running experiment.  With winner_variation_number the winner gets every visitor, including visitors already assigned to another variation, and a page experiment&#39;s winning content is promoted into the page by the completion job on its next run, which also emails the merchant.  Without a winner a page experiment&#39;s id is cleared from its page body so the page shows variation 0, and a url experiment sends everyone to variation 0.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **experiment_oid** | **Number**|  | 
 **experiment_end_request** | [**SfvbExperimentEndRequest**](SfvbExperimentEndRequest.md)| The winner, if any | [optional] 

### Return type

[**SfvbExperiment**](SfvbExperiment.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## favoriteSfvbLibraryEntry

> favoriteSfvbLibraryEntry(storefront_oid, library_oid)

Favorite a library entry

Bookmarks the entry for the calling user.  Idempotent.  Owner or anyone the entry is shared with. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbBlogPost

> SfvbBlogPostDetail getSfvbBlogPost(storefront_oid, blog_post_oid)

Read a blog post

The whole post - body, excerpt, tags, images and where it is shown.  An image&#39;s url is the address to use for it in the body. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **blog_post_oid** | **Number**|  | 

### Return type

[**SfvbBlogPostDetail**](SfvbBlogPostDetail.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbCjsonUsedElements

> SfvbElementsResponse getSfvbCjsonUsedElements(compile_request)

Element types used by a container


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compile_request** | [**SfvbCompileRequest**](SfvbCompileRequest.md)| CJSON to inspect | 

### Return type

[**SfvbElementsResponse**](SfvbElementsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSfvbContainer

> SfvbContainerResponse getSfvbContainer(storefront_oid, owner_type, owner_object_id, opts)

Read a container stored outside the file system

owner_type is one of upsell, email, postcardfront, postcardback, item or itemid.  It also says how owner_object_id is read - item and upsell take an oid, itemid takes a merchant item id, and the rest take an esp uuid.  itemid reaches the same containers as item and is the way to address one from a storefront, where data-context-item-id carries the merchant item id and the oid appears nowhere.  Item containers also require container_name.  Theme and page containers are files; read those through files/content. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **owner_type** | **String**|  | 
 **owner_object_id** | **String**|  | 
 **container_name** | **String**|  | [optional] 

### Return type

[**SfvbContainerResponse**](SfvbContainerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbContainerVersion

> SfvbContainerVersion getSfvbContainerVersion(storefront_oid, container_history_oid, opts)

Read the CJSON stored in one container history entry

Inspect or diff an earlier version without reverting to it.  The version is addressed through the container that owns it, so a history oid belonging to some other resource cannot be read through this route.  owner_type also says how owner_object_id is read, and itemid addresses an item container by merchant item id. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **container_history_oid** | **Number**|  | 
 **owner_type** | **String**|  | [optional] 
 **owner_object_id** | **String**|  | [optional] 
 **container_name** | **String**|  | [optional] 

### Return type

[**SfvbContainerVersion**](SfvbContainerVersion.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbElement

> SfvbElementSchemaResponse getSfvbElement(element_type)

Configuration schema and field card for one element type

schema is the draft-07 JSON schema for the element config object and doc is the markdown field card, both as strings.  Either is omitted when none has been published for the element, which is still a 200.  The catalog is published by the visual builder release process, and a republish can take up to an hour to appear here. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **element_type** | **String**|  | 

### Return type

[**SfvbElementSchemaResponse**](SfvbElementSchemaResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbExperiment

> SfvbExperiment getSfvbExperiment(storefront_oid, experiment_oid, opts)

Read one experiment and its statistics

The experiment, its variations and their statistics, and with daily&#x3D;true each variation&#39;s daily rows.  p95_sessions_needed is estimated only after 1000 sessions, and sessions_needed_computed_dts says when.  For a url experiment, router_url is the address visitors must enter through. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **experiment_oid** | **Number**|  | 
 **daily** | **Boolean**| Include each variation&#39;s daily statistics | [optional] 

### Return type

[**SfvbExperiment**](SfvbExperiment.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbExperimentObjectives

> SfvbExperimentObjectivesResponse getSfvbExperimentObjectives(storefront_oid)

List the objectives an experiment can optimize

Each objective with what is measured per session and compared between variations, the usual optimization type, and whether it needs an event name. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbExperimentObjectivesResponse**](SfvbExperimentObjectivesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbFileContent

> SfvbFileContentResponse getSfvbFileContent(storefront_oid, opts)

Read a storefront file

Returns the current content, or an earlier version when version is supplied.  Send the body&#39;s hash_sha256 back as If-Match when writing.  The ETag header carries the same hash, but a compressing proxy may append a suffix such as -gzip to it, so prefer the body value. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**|  | [optional] 
 **version** | **Number**|  | [optional] 

### Return type

[**SfvbFileContentResponse**](SfvbFileContentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbFileUploadUrl

> SfvbFileUploadUrlResponse getSfvbFileUploadUrl(storefront_oid, extension)

Get a URL to upload a binary asset to

Binary content does not travel through this API as JSON, so uploading an image, font, video or PDF is two steps.  Ask here for a URL, PUT the raw bytes straight to it, then call uploadSfvbFile quoting the key you were given.  The bytes never pass through the API server.  The extension is checked against the accepted type list before a URL is issued, so an unsupported type fails here rather than after you have sent the file.  The URL is short lived and the key is bound to your account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **extension** | **String**|  | 

### Return type

[**SfvbFileUploadUrlResponse**](SfvbFileUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbI18nGlossary

> SfvbI18nGlossary getSfvbI18nGlossary(storefront_oid)

Read the storefront&#39;s translation glossary

The storefront&#39;s glossary, plain markdown with terms not to translate, required translations, tone and words to avoid.  Read it before translating anything.  Empty when none has been saved.  Each storefront has its own, because a storefront is often its own brand. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbI18nGlossary**](SfvbI18nGlossary.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbI18nLanguages

> SfvbI18nLanguagesResponse getSfvbI18nLanguages(storefront_oid)

List a storefront&#39;s languages

Every language the storefront can be translated into, with UltraCart&#39;s three-letter code (ESP for Spanish), the other spellings accepted, whether it is enabled, the default and right to left.  Language maps in CJSON and render take the code.  English is the source of every string.  Also gives the machine translation estimate for one more language, and the hash_sha256 an enable or disable sends back. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbI18nLanguagesResponse**](SfvbI18nLanguagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbI18nMachineTranslations

> SfvbI18nMachineTranslationsResponse getSfvbI18nMachineTranslations(storefront_oid, opts)

Read where a widget setting&#39;s translations come from

For one multilingual widget setting, named by widget_id and property on a theme (the active theme unless theme_oid is given), each enabled language&#39;s text and whether a shopper sees a hand translation from the language map, a machine translation, one still queued (pending) or none yet.  The setting is registered when its container is saved.  Nothing is generated by reading it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | [optional] 
 **widget_id** | **String**|  | [optional] 
 **property** | **String**|  | [optional] 

### Return type

[**SfvbI18nMachineTranslationsResponse**](SfvbI18nMachineTranslationsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbI18nMessage

> SfvbI18nMessage getSfvbI18nMessage(storefront_oid, key, opts)

Read one built-in message

One message by key, with the hash_sha256 a set or reset sends back. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **key** | **String**|  | 
 **theme_oid** | **Number**|  | [optional] 

### Return type

[**SfvbI18nMessage**](SfvbI18nMessage.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbI18nMessageMachineTranslations

> SfvbI18nMachineTranslationsResponse getSfvbI18nMessageMachineTranslations(storefront_oid, key, opts)

Read where a message&#39;s translations come from

For one message, each enabled language&#39;s text and whether a shopper sees a hand translation, a machine translation, one still queued (pending) or none yet.  Nothing is generated by reading it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **key** | **String**|  | 
 **theme_oid** | **Number**|  | [optional] 

### Return type

[**SfvbI18nMachineTranslationsResponse**](SfvbI18nMachineTranslationsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbItem

> SfvbItemResponse getSfvbItem(storefront_oid, opts)

Read an item&#39;s storefront facing content

The attributes, images, title, description and search metadata a StoreFront element can render, reconciled against the templates behind the pages this item sits on.  An attribute a template declares but nothing has set comes back present with an empty value, which is how you discover what the page is asking for.  Pricing, shipping, inventory, tax, variants and kit structure are not here because no element reads them; use the item API for those.  Address by merchant_item_id, the value data-context-item-id carries, or by merchant_item_oid. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **merchant_item_id** | **String**| The merchant item id, as a storefront carries it | [optional] 
 **merchant_item_oid** | **Number**| The item oid.  Send this or merchant_item_id, not both | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbLibraryEntry

> SfvbLibraryEntry getSfvbLibraryEntry(storefront_oid, library_oid, opts)

Read one library entry including its CJSON

The owner gets the draft with its hash_sha256, which an update, delete or publish sends back as If-Match.  Everyone else gets the latest published revision.  Pin a published revision with revision_number.  Read content_manifest before installing.  If the fragment references images or other storefront files those paths will not resolve on this storefront until the entry is installed, so use install rather than this when the intent is to place the fragment. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **revision_number** | **Number**| A published revision to read instead of the default. | [optional] 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbLibraryHistory

> SfvbLibraryHistoryResponse getSfvbLibraryHistory(storefront_oid, library_oid)

List a library entry&#39;s published revisions

Newest first, each with its release notes and hash.  Read one with getSfvbLibraryEntry and revision_number.  The owner and anyone the entry is shared with can list it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 

### Return type

[**SfvbLibraryHistoryResponse**](SfvbLibraryHistoryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbLibraryShareTargets

> SfvbLibraryShareTargetsResponse getSfvbLibraryShareTargets(storefront_oid)

List the accounts a library entry can be shared with

The calling account&#39;s linked accounts, each with its merchant id and company.  These are the only merchants a share can name. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbLibraryShareTargetsResponse**](SfvbLibraryShareTargetsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbLibraryTaxonomy

> SfvbLibraryTaxonomyCatalog getSfvbLibraryTaxonomy(storefront_oid)

List the allowed library tags

The fixed tag list for purpose, section, industry and style, each tag with a one line description.  Saving an entry refuses any tag not on it with sfvb.library_taxonomy_unknown, naming the closest one.  The same tags are the facet_purpose, facet_section, facet_industry and facet_style search facets. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbLibraryTaxonomyCatalog**](SfvbLibraryTaxonomyCatalog.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbMenu

> SfvbMenu getSfvbMenu(storefront_oid, code)

Read one store menu and its entries

The whole tree, in render order.  Page entries carry the page_path they resolve to and item entries the merchant_item_id, rather than the oids the storage keeps.  Menu item oids are not returned at all because a write regenerates every one of them.  Keep hash_sha256 - it is the If-Match a write needs. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **code** | **String**| Menu code, matched without regard to case | 

### Return type

[**SfvbMenu**](SfvbMenu.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbMenus

> SfvbMenusResponse getSfvbMenus(storefront_oid)

List a storefront&#39;s store menus

The menus a menu element&#39;s menuName can name, sorted by code and without their entries.  A code the active theme&#39;s templates ask for but nothing has created is included with unconfigured true - that code renders an empty list today, and writing it creates it.  A menu no template names is marked undeclared, which usually means a menuName is misspelled. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbMenusResponse**](SfvbMenusResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbNotFound

> SfvbNotFoundResponse getSfvbNotFound(storefront_oid, opts)

List the paths that answered 404

The paths shoppers asked for that answered 404, most hits first or by last_seen.  Paths only, never query strings.  Bots are left out unless include_bots.  Token-like path segments show as {token} unless include_tokens.  limit is 1 to 100, default 50. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **since** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **include_bots** | **Boolean**|  | [optional] 
 **include_tokens** | **Boolean**|  | [optional] 
 **q** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**SfvbNotFoundResponse**](SfvbNotFoundResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbNotFoundEntry

> SfvbNotFoundEntryResponse getSfvbNotFoundEntry(storefront_oid, not_found_id, opts)

Read one 404 path with its recent hits

One entry with up to 100 recent hits, each with its time, the linking host, the user agent and whether it was a bot.  Client IP addresses are never returned. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **not_found_id** | **String**|  | 
 **include_tokens** | **Boolean**|  | [optional] 

### Return type

[**SfvbNotFoundEntryResponse**](SfvbNotFoundEntryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbNotFoundPage

> SfvbNotFoundPage getSfvbNotFoundPage(storefront_oid)

What renders the storefront&#39;s 404 page

The site_404.vm the active theme renders for a 404, found the way the storefront finds it, and whether it exists.  Without it the storefront serves a plain fallback.  Edit it with the file endpoints. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbNotFoundPage**](SfvbNotFoundPage.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbPage

> SfvbPageResponse getSfvbPage(storefront_oid, path)

Read a page&#39;s attributes and images

What the pageattribute and pageimage elements render for this page.  These are not in any file, which is why a page folder can be empty and its elements still render something.  Attributes and image codes a template declares but nothing has set are included, so the response describes what the page can show rather than only what has been saved. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /catalog/dispensers/ | 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbPageBlogPosts

> SfvbPageBlogPostsResponse getSfvbPageBlogPosts(storefront_oid, path)

Read the blog posts assigned to a page

The posts the page shows.  uses_selectors is true when the page&#39;s blog post selectors choose them instead. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /blog/ | 

### Return type

[**SfvbPageBlogPostsResponse**](SfvbPageBlogPostsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbPageItems

> SfvbPageItemsResponse getSfvbPageItems(storefront_oid, path)

Read the items assigned to a page

The items on the page with their sort order and url part.  uses_selectors is true when the page&#39;s selectors choose its items instead. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /lp/spring-sale/ | 

### Return type

[**SfvbPageItemsResponse**](SfvbPageItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbPageSelectors

> SfvbPageSelectors getSfvbPageSelectors(storefront_oid, path)

Read a page&#39;s selectors

The conditions that choose the page&#39;s items and blog posts, and whether each set must all match. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /lp/spring-sale/ | 

### Return type

[**SfvbPageSelectors**](SfvbPageSelectors.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbPreviewUrl

> SfvbPreviewUrlResponse getSfvbPreviewUrl(storefront_oid, preview_session_id, opts)

URL that renders a preview session

Refuses a session that does not exist, so a URL you receive is for a session that was really there.  expires_in_seconds is the time actually remaining, not the configured lifetime.  Needs a token that resolves to a user, because a preview session belongs to the person who created it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **preview_session_id** | **String**|  | 
 **path** | **String**|  | [optional] 

### Return type

[**SfvbPreviewUrlResponse**](SfvbPreviewUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbRecording

> SfvbRecordingResponse getSfvbRecording(storefront_oid, screen_recording_uuid)

Get a screen recording

One recorded visitor session and its page views, with each page view&#39;s named events such as rage clicks, script errors and checkout errors, but without the replay data.  Fetch a page view&#39;s replay events separately.  Find recordings to look at from the heatmaps or the analytics warehouse.  The visitor&#39;s email, IP address and visitor id are not returned, nor what they typed into form fields.  Reading a recording does not mark it watched. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 

### Return type

[**SfvbRecordingResponse**](SfvbRecordingResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbRecordingPageViewEvents

> SfvbRecordingEventsResponse getSfvbRecordingPageViewEvents(storefront_oid, screen_recording_uuid, screen_recording_page_view_uuid)

Get one recorded page view&#39;s replay events

The rrweb events for one page view, as a JSON array in a string, for replaying on the caller&#39;s own machine.  Card fields are masked by the recorder, but other text the visitor typed can appear.  Limited per account to 30 page views a minute, 300 an hour and 1000 a day.  Reading the events does not mark the recording watched. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **screen_recording_uuid** | **String**|  | 
 **screen_recording_page_view_uuid** | **String**|  | 

### Return type

[**SfvbRecordingEventsResponse**](SfvbRecordingEventsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbRecordingSettings

> SfvbRecordingSettingsResponse getSfvbRecordingSettings(storefront_oid)

Get the storefront&#39;s screen recording settings

Whether real shoppers&#39; sessions on this storefront are being recorded, what recording costs per 1,000 sessions after the 14 day free trial, how long recordings are kept, and how many sessions were recorded in the current and last billing periods.  Recording only collects from the moment it is turned on, so when it is on but was turned on recently, check the analytics warehouse for rows before reporting that there is no data. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbRecordingSettingsResponse**](SfvbRecordingSettingsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbRedirect

> SfvbRedirect getSfvbRedirect(storefront_oid, redirect_id)

Read one redirect rule

One rule, with the hash_sha256 to send as If-Match when updating or deleting it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_id** | **Number**|  | 

### Return type

[**SfvbRedirect**](SfvbRedirect.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbRedirects

> SfvbRedirectsResponse getSfvbRedirects(storefront_oid, opts)

List the storefront&#39;s redirect rules

Every redirect rule, exact and pattern.  Filter with q (searches source, target and note), type (exact or pattern) and status (301, 302 or rewrite).  count and limit say how close the storefront is to its rule limit. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **q** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**SfvbRedirectsResponse**](SfvbRedirectsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbServerLog

> SfvbServerLogDetail getSfvbServerLog(storefront_oid, log_id, opts)

Get one storefront render log

One render&#39;s server log with its lines, each with a level, a category such as VELOCITY or FLOW, and the message.  log_id comes from the list, or from the X-UltraCart-Storefront-Log-Id header a page sends inside an SFVB preview session.  min_level is debug, info, warn or error, default debug. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **log_id** | **String**|  | 
 **min_level** | **String**|  | [optional] 

### Return type

[**SfvbServerLogDetail**](SfvbServerLogDetail.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbSiteAttributes

> SfvbSiteAttributesResponse getSfvbSiteAttributes(storefront_oid)

Read a storefront&#39;s site attributes

The values the siteattribute element and $site.attr render.  These are not in any file or theme.  Attributes a template declares but nothing has set are included with the template&#39;s default, so the response describes what the templates can render rather than only what has been saved.  Credentials stored as site attributes are never included. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbSiteAttributesResponse**](SfvbSiteAttributesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbTheme

> SfvbTheme getSfvbTheme(storefront_oid, theme_oid)

Get a theme


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | 

### Return type

[**SfvbTheme**](SfvbTheme.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbThemeAttributes

> SfvbThemeAttributesResponse getSfvbThemeAttributes(storefront_oid, theme_oid)

Read a theme&#39;s colors, fonts and settings

The values theme.css and the compiled containers resolve at render time.  These do NOT live in any file.  settings.json contains a palette and looks like the answer, but it is the theme&#39;s factory template - it supplies defaults for slots that have never been set and is ignored for slots that have, so editing it will not change a color and reading it will not tell you the current one.  Slots a template declares but nothing has ever set are included here, carrying the default they will render with, so the response describes the whole theme rather than the rows that happen to exist. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | 

### Return type

[**SfvbThemeAttributesResponse**](SfvbThemeAttributesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbThemeJob

> SfvbThemeJobResponse getSfvbThemeJob(storefront_oid, job_id)

Status of an asynchronous theme job

Poll until complete is true, then check success.  Note that the new theme&#39;s oid is not returned.  The job&#39;s product is a plain text report rather than a structured result, so once it completes, list themes and match on the target_path the start call gave you. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **job_id** | **Number**|  | 

### Return type

[**SfvbThemeJobResponse**](SfvbThemeJobResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbUpsellOffer

> SfvbUpsellOffer getSfvbUpsellOffer(storefront_oid, upsell_offer_oid, opts)

Get an upsell offer

The whole offer, with the hash an update sends back in If-Match, which upsell items are out of stock now, and whether loyalty, TowerData and Everflow are set up.  Stats as on the path list. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_offer_oid** | **Number**|  | 
 **stats** | **Boolean**| Include stats | [optional] 
 **stats_start** | **String**| Stats window start, YYYY-MM-DD | [optional] 
 **stats_end** | **String**| Stats window end, YYYY-MM-DD | [optional] 
 **stats_weekdays** | **String**| Only these weekdays, comma separated mon to sun | [optional] 

### Return type

[**SfvbUpsellOffer**](SfvbUpsellOffer.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbUpsellPath

> SfvbUpsellPath getSfvbUpsellPath(storefront_oid, upsell_path_oid, opts)

Get an upsell path

The whole path, with the hash an update sends back in If-Match.  Stats as on the list. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 
 **stats** | **Boolean**| Include stats | [optional] 
 **stats_start** | **String**| Stats window start, YYYY-MM-DD | [optional] 
 **stats_end** | **String**| Stats window end, YYYY-MM-DD | [optional] 
 **stats_weekdays** | **String**| Only these weekdays, comma separated mon to sun | [optional] 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbVersion

> SfvbVersionResponse getSfvbVersion()

Compiler version for this merchant

The visual builder release channel is per merchant, so a CLI holding cached schema or element data should compare against this to know when it has gone stale. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbVersionResponse**](SfvbVersionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSfvbWhoami

> SfvbWhoamiResponse getSfvbWhoami()

Who this token is

Returns the merchant, user, granted scopes and reachable storefronts for the calling token.  Declared for any scope so an application can always discover which account it is connected to. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbWhoamiResponse**](SfvbWhoamiResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ignoreSfvbNotFoundEntry

> SfvbNotFoundEntry ignoreSfvbNotFoundEntry(storefront_oid, not_found_id)

Ignore a 404 path

Hides one path from the list and stops counting its hits, for example scanner noise.  Reversible. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **not_found_id** | **String**|  | 

### Return type

[**SfvbNotFoundEntry**](SfvbNotFoundEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importSfvbRedirects

> SfvbRedirectImportResponse importSfvbRedirects(storefront_oid, redirect_import_request)

Apply a reviewed redirect import

Applies exactly the rows of a dry run, given its plan_hash, in one transaction.  Refused with 412 when the rows or the storefront&#39;s rules changed since the dry run, and refused when any row has a blocking finding.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_import_request** | [**SfvbRedirectImportRequest**](SfvbRedirectImportRequest.md)| The request | 

### Return type

[**SfvbRedirectImportResponse**](SfvbRedirectImportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertSfvbBlogPost

> SfvbBlogPostDetail insertSfvbBlogPost(storefront_oid, blog_post_request)

Create a blog post

title and url_part are required.  The post is a draft unless visibility says otherwise, and anything but a draft needs sfvb_publish.  The body and excerpt are refused with sfvb.unsafe_html if they could run script, and a url_part another post uses is refused with a 409 and sfvb.blog_post_exists.  Assign the post to a page with pages/blog_posts/add, or let the page&#39;s selectors choose it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **blog_post_request** | [**SfvbBlogPostRequest**](SfvbBlogPostRequest.md)| The blog post to create | 

### Return type

[**SfvbBlogPostDetail**](SfvbBlogPostDetail.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertSfvbPage

> SfvbPageResponse insertSfvbPage(storefront_oid, page_create_request)

Create a page

Creates the page and its folder, the way the store admin&#39;s add page does.  The parent page must already exist, and the last part of the path may only contain letters, digits, hyphens and underscores - it is refused, not cleaned.  A path that already has a page is refused with a 409 and the code sfvb.page_exists.  Without a group_template the page inherits its parent&#39;s templates, or catalog_group.vm directly under the root.  Set attributes and images afterwards with the page attribute and image endpoints, and push the body to the page folder.  Always needs sfvb_publish, because the page is live as soon as it exists.  Deleting, moving and renaming pages stay in the store admin. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **page_create_request** | [**SfvbPageCreateRequest**](SfvbPageCreateRequest.md)| The page to create | 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertSfvbRedirect

> SfvbRedirectResponse insertSfvbRedirect(storefront_oid, redirect_request)

Create a 301 redirect rule

Creates one permanent (301) redirect, live for shoppers at once.  Refused for a loop, a chain longer than the storefront follows, a duplicate source, a target that is missing or on another site, a system path, a live page (unless over_live_page) and a full storefront.  A chain is allowed with a warning naming the final target.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_request** | [**SfvbRedirectRequest**](SfvbRedirectRequest.md)| The request | 

### Return type

[**SfvbRedirectResponse**](SfvbRedirectResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertSfvbUpsellOffer

> SfvbUpsellOffer insertSfvbUpsellOffer(storefront_oid, upsell_offer)

Create an upsell offer

Every item it names must exist, and every shipping method, payment method and loyalty tier must be one the merchant has.  Put it on a path with a path update to have it shown.  Creating it switched on, or with upsell_item_id_javascript or offsite_content_url, needs sfvb_publish.  Its page content is its container, written with the container endpoints and owner type upsell. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_offer** | [**SfvbUpsellOffer**](SfvbUpsellOffer.md)| The offer to create | 

### Return type

[**SfvbUpsellOffer**](SfvbUpsellOffer.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertSfvbUpsellPath

> SfvbUpsellPath insertSfvbUpsellPath(storefront_oid, upsell_path)

Create an upsell path

Placed last in path order.  Every offer a step names must be an offer of this storefront, and every item in the item logic must exist.  Creating it switched on needs sfvb_publish; create it with active false to build it without that scope. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path** | [**SfvbUpsellPath**](SfvbUpsellPath.md)| The path to create | 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## installSfvbLibraryEntry

> SfvbLibraryInstallReceipt installSfvbLibraryEntry(storefront_oid, library_oid, opts)

Install a library entry into a storefront

Copies the fragment&#39;s referenced files into the storefront file system and returns a receipt with the CJSON&#39;s paths resolved, ready to place.  It never places the CJSON.  Read content_manifest first; executable content needs acknowledge_executable true.  A file that already exists with different content is a conflict - on_conflict fail (the default) refuses with 409 and writes nothing, skip keeps the existing file, overwrite replaces it.  A recipient installs a published revision.  This writes, which is why it is a POST, and it requires sfvb_publish because the files land in the shared storefront file system, which is served to shoppers whichever theme is active. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **install_request** | [**SfvbLibraryInstallRequest**](SfvbLibraryInstallRequest.md)| Revision, conflict handling and acknowledgement | [optional] 

### Return type

[**SfvbLibraryInstallReceipt**](SfvbLibraryInstallReceipt.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## listSfvbBlogPosts

> SfvbBlogPostsResponse listSfvbBlogPosts(storefront_oid, opts)

List the storefront&#39;s blog posts

One page of blog posts, newest first, without their bodies.  search matches the title, body, excerpt, url part or author, or a tag exactly.  unassigned marks posts no page shows yet.  Use a post&#39;s blog_post_oid to assign it to a page. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **search** | **String**| Text to search for | [optional] 
 **page** | **Number**| Page number, starting at 1 | [optional] 
 **page_size** | **Number**| Posts per page, 1 to 100, default 50 | [optional] 

### Return type

[**SfvbBlogPostsResponse**](SfvbBlogPostsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbContainerVersions

> SfvbContainerVersionsResponse listSfvbContainerVersions(storefront_oid, opts)

Version history for a container stored outside the file system

Addressed the same way as the container itself, so owner_type also says how owner_object_id is read and itemid lists the history of the item container that merchant item id names. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **owner_type** | **String**|  | [optional] 
 **owner_object_id** | **String**|  | [optional] 
 **container_name** | **String**|  | [optional] 

### Return type

[**SfvbContainerVersionsResponse**](SfvbContainerVersionsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbElements

> SfvbElementsResponse listSfvbElements()

List every SFVB element type

The authoritative vocabulary, taken from the same lookup the compiler uses.  A type absent from this list compiles to a literal placeholder line in the page rather than failing, which is why validation treats an unknown type as an error. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbElementsResponse**](SfvbElementsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbExperiments

> SfvbExperimentsResponse listSfvbExperiments(storefront_oid, opts)

List the storefront&#39;s experiments

Every experiment that is not deleted, with its variations and their statistics - the same numbers the store admin shows.  Filter by status, by type (page, url, theme, openai), or by the page an experiment runs on.  auto_ends_at says when the engine will end an experiment by itself, and p_value is a one-way ANOVA across all variations.  Read one experiment for its daily statistics. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **status** | **String**| Running or Ended | [optional] 
 **type** | **String**| page, url, theme or openai | [optional] 
 **path** | **String**| Only experiments on this page, for example /lp/spring-sale/ | [optional] 

### Return type

[**SfvbExperimentsResponse**](SfvbExperimentsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbFileVersions

> SfvbFileVersionsResponse listSfvbFileVersions(storefront_oid, opts)

Version history for a storefront file

Version history is the undo for anything in the storefront file system, which is what makes an agent&#39;s writes recoverable. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**|  | [optional] 

### Return type

[**SfvbFileVersionsResponse**](SfvbFileVersionsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbFiles

> SfvbFilesResponse listSfvbFiles(storefront_oid, opts)

List a storefront directory

Directories first, then files, each sorted by name.  Address by path or by directory oid; supplying theme_oid also retries a path that does not resolve at the storefront root relative to that theme, so /theme/css/ works without knowing the theme&#39;s directory name.  Each file carries its content hash, so a listing is enough to start an If-Match write without a separate read. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**|  | [optional] 
 **storefront_fs_directory_oid** | **Number**|  | [optional] 
 **theme_oid** | **Number**|  | [optional] 
 **max_entries** | **Number**|  | [optional] 

### Return type

[**SfvbFilesResponse**](SfvbFilesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbI18nMessages

> SfvbI18nMessagesResponse listSfvbI18nMessages(storefront_oid, opts)

List built-in messages

The system text templates render by key, such as checkout labels, for one theme (the active theme unless theme_oid is given).  Each message has its English, whether it was edited, and each enabled language&#39;s text with its source (hand, machine, pending or none).  A message appears the first time a page renders it.  q matches the key or the English.  overridden keeps messages with an edited English or a hand translation.  Paged by offset and limit (default 200, at most 500). 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | [optional] 
 **q** | **String**|  | [optional] 
 **language** | **String**|  | [optional] 
 **overridden** | **Boolean**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**SfvbI18nMessagesResponse**](SfvbI18nMessagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbItemContainers

> SfvbItemContainersResponse listSfvbItemContainers(storefront_oid, opts)

List the item containers on the account

An itemcontainer element renders nothing of its own.  It names a slot, and a separate container is resolved per item for that slot, so a catalog of five hundred products with three slots is fifteen hundred containers.  This says which of them exist.  Filter by container_name to find every item carrying one slot, or by merchant_item_id to see what one item has.  Which items are missing a slot is a set difference against pages/items, because a listing can only report containers that exist.  Each row carries hash_sha256, so a listing is enough to start an If-Match write without reading the container first.  Item containers are stored per account rather than per storefront, so storefront_oid identifies the caller&#39;s storefront but does not narrow the result. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **merchant_item_id** | **String**| Restrict to one item, by the merchant item id a storefront carries | [optional] 
 **merchant_item_oid** | **Number**| Restrict to one item, by oid.  Send this or merchant_item_id, not both | [optional] 
 **container_name** | **String**| Restrict to one slot name, matched without regard to case | [optional] 
 **max_results** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 

### Return type

[**SfvbItemContainersResponse**](SfvbItemContainersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbLibraryInstalls

> SfvbLibraryInstallsResponse listSfvbLibraryInstalls(storefront_oid)

List the library entries installed on a storefront

Each entry&#39;s most recently installed revision, its latest published revision and update_available.  Nothing updates automatically.  An entry this account can no longer see is listed without its name. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbLibraryInstallsResponse**](SfvbLibraryInstallsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbPages

> SfvbPageListResponse listSfvbPages(storefront_oid, opts)

List the storefront&#39;s pages

Every page with its settings, sorted by path with the root first.  Hidden pages are included.  Pass under to list one page and everything below it.  Read from the same cached catalog the admin page tree uses, so a page created a moment ago can take a moment to appear here - read it directly with the single-page read to confirm a write. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **under** | **String**| Only this page and the pages below it, for example /lp/ | [optional] 

### Return type

[**SfvbPageListResponse**](SfvbPageListResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbServerLogs

> SfvbServerLogsResponse listSfvbServerLogs(storefront_oid, opts)

List recent storefront render logs

The server log the storefront Developer Tools panel shows, one per page render, newest first and without the log text.  Each carries counts of error and warning lines, including Velocity problems such as a null #set, so a failing render stands out without reading every log.  Filter by uri (a case insensitive contains match on the rendered address) and errors_only.  since is 15m, 2h or 1d, or an ISO-8601 time, default 1h; logs are kept for seven days and only the newest 1000.  With a filter the newest 200 logs in the window are searched, and more_available says whether older ones were left unread. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **uri** | **String**|  | [optional] 
 **since** | **String**|  | [optional] 
 **errors_only** | **Boolean**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**SfvbServerLogsResponse**](SfvbServerLogsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbStorefronts

> SfvbStorefrontsResponse listSfvbStorefronts()

List storefronts


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbStorefrontsResponse**](SfvbStorefrontsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbTemplates

> SfvbTemplatesResponse listSfvbTemplates(storefront_oid, opts)

List the active theme&#39;s templates

Each template with the page type it declares and what it can render - items, sub-pages, blog posts, pagination, visual builder containers.  A page&#39;s group_template names one of these.  The storefront&#39;s fixed templates, such as checkout and my account, are flagged system and must never be assigned to a page. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **page_type** | **String**| Only templates declaring this page type, for example group | [optional] 

### Return type

[**SfvbTemplatesResponse**](SfvbTemplatesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbThemes

> SfvbThemesResponse listSfvbThemes(storefront_oid)

List themes for a storefront

Exactly one theme is flagged active.  Writing to the active theme is writing live and requires the sfvb_publish scope. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbThemesResponse**](SfvbThemesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbUpsellOffers

> SfvbUpsellOffersResponse listSfvbUpsellOffers(storefront_oid, opts)

List upsell offers

Every offer on one of this storefront&#39;s paths that are not archived, the same list the admin shows, with each offer&#39;s full settings but not its container JSON.  An offer on no path yet is still read by oid.  A large container size alongside a small element count is the signature of markup pasted into a single html element.  Stats as on the path list. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **stats** | **Boolean**| Include stats | [optional] 
 **stats_start** | **String**| Stats window start, YYYY-MM-DD | [optional] 
 **stats_end** | **String**| Stats window end, YYYY-MM-DD | [optional] 
 **stats_weekdays** | **String**| Only these weekdays, comma separated mon to sun | [optional] 

### Return type

[**SfvbUpsellOffersResponse**](SfvbUpsellOffersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSfvbUpsellPaths

> SfvbUpsellPathsResponse listSfvbUpsellPaths(storefront_oid, opts)

List upsell paths

In path order, first to last.  status current (the default) leaves out archived paths.  Stats are computed only with stats&#x3D;true, over stats_start to stats_end (YYYY-MM-DD, the last 30 days when both are omitted, at most 366 days), because they are the expensive part of the read. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **status** | **String**| current, archived or all | [optional] 
 **location** | **String**| pre checkout or post checkout | [optional] 
 **search** | **String**| Only paths whose name contains this | [optional] 
 **stats** | **Boolean**| Include stats | [optional] 
 **stats_start** | **String**| Stats window start, YYYY-MM-DD | [optional] 
 **stats_end** | **String**| Stats window end, YYYY-MM-DD | [optional] 
 **stats_weekdays** | **String**| Only these weekdays, comma separated mon to sun | [optional] 
 **max_results** | **Number**| Page size, 1 to 500, default 100 | [optional] 
 **offset** | **Number**| Offset of the first path returned | [optional] 

### Return type

[**SfvbUpsellPathsResponse**](SfvbUpsellPathsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveSfvbUpsellPath

> SfvbUpsellPath moveSfvbUpsellPath(storefront_oid, upsell_path_oid, move_request)

Move an upsell path

Up, down, to the top or to the bottom of the storefront&#39;s paths.  Order decides which running path a shopper meets first, so moving a running path needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 
 **move_request** | [**SfvbUpsellPathMoveRequest**](SfvbUpsellPathMoveRequest.md)| Where to move it | 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## publishSfvbLibraryEntry

> SfvbLibraryEntry publishSfvbLibraryEntry(storefront_oid, library_oid, If_Match, publish_request)

Publish a library entry&#39;s draft

Freezes the draft as a published revision at its revision_number and sets who can see it.  Owner only, with the draft&#39;s hash_sha256 as If-Match.  Always needs sfvb_publish, because it changes what other merchants can install.  Images, fonts, stylesheets and media must be relative paths, and credential shaped strings are refused.  Public also needs the library publisher property on the account and no executable content at all - no script, html, embed, css or velocity elements.  After those checks an automated AI review reads the fragment, which can take up to about a minute.  A clear violation both of its models agree on refuses any publish with sfvb.library_ai_review_blocked.  A public publish also needs its approval, otherwise sfvb.library_ai_review_inconclusive.  The result is in content_manifest.ai_review. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **publish_request** | [**SfvbLibraryPublishRequest**](SfvbLibraryPublishRequest.md)| Visibility and release notes | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbContainer

> SfvbContainerResponse putSfvbContainer(storefront_oid, owner_type, owner_object_id, If_Match, container_write_request, opts)

Write a container stored outside the file system

Validation is mandatory and runs here regardless of whether the caller validated first.  The previous value is snapshotted before the write, so the change can be reverted.  Side effects the visual builder performs on save, such as upsell screenshot regeneration and email content review flagging, are applied too.  owner_type also says how owner_object_id is read; send itemid to address an item container by merchant item id rather than by oid.  Either way the history records the one canonical address, so a container written under one spelling is listed and reverted under the other. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **owner_type** | **String**|  | 
 **owner_object_id** | **String**|  | 
 **If_Match** | **String**| CJSON hash from the last read.  Required; 428 when absent, 412 when stale. | 
 **container_write_request** | [**SfvbContainerWriteRequest**](SfvbContainerWriteRequest.md)| Container CJSON to write | 
 **container_name** | **String**|  | [optional] 

### Return type

[**SfvbContainerResponse**](SfvbContainerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbExperimentVariation

> SfvbExperiment putSfvbExperimentVariation(storefront_oid, experiment_oid, variation_number, experiment_variation_update_request)

Pause or resume a variation

Stops or resumes sending new visitors to one variation of a running experiment.  Visitors already assigned keep seeing it.  Variation 0 cannot be paused, because the split falls back to it, and the last variation still receiving visitors cannot be paused.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **experiment_oid** | **Number**|  | 
 **variation_number** | **Number**|  | 
 **experiment_variation_update_request** | [**SfvbExperimentVariationUpdateRequest**](SfvbExperimentVariationUpdateRequest.md)| Pause or resume | 

### Return type

[**SfvbExperiment**](SfvbExperiment.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbFileContent

> SfvbFileWriteResponse putSfvbFileContent(storefront_oid, If_Match, file_write_request, opts)

Write a storefront file

Runs the template sandbox, Velocity validation and the internationalization check, records a version, and compiles the sibling .vm when the file is a .cjson under a theme.  Send If-Match with the hash from the last read to avoid clobbering a concurrent change.  Writing into the active theme requires sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **If_Match** | **String**| Content hash from the last read.  Required; 428 when absent, 412 when stale. | 
 **file_write_request** | [**SfvbFileWriteRequest**](SfvbFileWriteRequest.md)| File content to write | 
 **path** | **String**|  | [optional] 

### Return type

[**SfvbFileWriteResponse**](SfvbFileWriteResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbI18nGlossary

> SfvbI18nGlossary putSfvbI18nGlossary(storefront_oid, glossary_request, opts)

Replace the storefront&#39;s translation glossary

Replaces the whole glossary, plain markdown up to 64 KB.  The server stores it and never interprets it; the agent follows it.  Send the hash_sha256 you read as If-Match, except for the first save.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **glossary_request** | [**SfvbI18nGlossaryRequest**](SfvbI18nGlossaryRequest.md)| The glossary | 
 **If_Match** | **String**| hash_sha256 from the last read.  Not needed for the first save; otherwise 428 when absent, 412 when stale. | [optional] 

### Return type

[**SfvbI18nGlossary**](SfvbI18nGlossary.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbI18nMessage

> SfvbI18nMessage putSfvbI18nMessage(storefront_oid, key, If_Match, message_write_request, opts)

Change one built-in message

Sets one message in any number of languages.  ENG replaces the English, which drops its machine translations so they regenerate.  Any other language becomes a hand translation.  Languages not named are left alone; empty text is refused.  Shoppers see it at once.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **key** | **String**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **message_write_request** | [**SfvbI18nMessageWriteRequest**](SfvbI18nMessageWriteRequest.md)| The languages to change | 
 **theme_oid** | **Number**|  | [optional] 

### Return type

[**SfvbI18nMessage**](SfvbI18nMessage.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbItemAttributes

> SfvbItemResponse putSfvbItemAttributes(storefront_oid, item_attribute_update_request, opts)

Change some of an item&#39;s attributes

Partial - only the attributes named change, and an empty value empties one but keeps it on the item.  To remove an attribute no template declares, use the attribute DELETE.  Every entry is validated before any is written, so a refusal leaves the item untouched.  The list types are checked against the shape their renderer actually parses, which matters more than it sounds: a definition list is a bare array with one letter keys, a video list is a wrapper object with keys spelled out, and an item set is comma separated text rather than JSON.  A shape the renderer cannot read is not reported at render time - it renders exactly like an attribute nobody ever set. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **item_attribute_update_request** | [**SfvbItemAttributeUpdateRequest**](SfvbItemAttributeUpdateRequest.md)| Attributes to change | 
 **merchant_item_id** | **String**|  | [optional] 
 **merchant_item_oid** | **Number**|  | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbItemContent

> SfvbItemResponse putSfvbItemContent(storefront_oid, item_content_request, opts)

Change an item&#39;s title or long description

Partial - a field left out is untouched, a field sent empty is cleared, and those are different things.  These are what itemtitle and itemdescription render.  Writing the matching config keys into a container does nothing, because they are dialog buffers bound to the item and the render never reads them.  Both are the catalog&#39;s own fields, so a change here reaches the item everywhere, not only on this storefront. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **item_content_request** | [**SfvbItemContentRequest**](SfvbItemContentRequest.md)| Title and description to change | 
 **merchant_item_id** | **String**|  | [optional] 
 **merchant_item_oid** | **Number**|  | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbItemMultimedia

> SfvbItemResponse putSfvbItemMultimedia(storefront_oid, item_multimedia_request, opts)

Attach an image to an item

One slot at a time - the default image or one code - and every other image on the item is left alone.  That is the difference from the item API, where images are reachable only through a full item update whose multimedia array is reconciled destructively, so adding one means resending the rest or losing them.  Upload the file with files/upload first and name its storefront path here; unlike a page image it does not have to live in any particular folder, because the bytes are copied into the item&#39;s own storage on attach. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **item_multimedia_request** | [**SfvbItemMultimediaRequest**](SfvbItemMultimediaRequest.md)| Image to attach | 
 **merchant_item_id** | **String**|  | [optional] 
 **merchant_item_oid** | **Number**|  | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbItemSeo

> SfvbItemResponse putSfvbItemSeo(storefront_oid, item_seo_request, opts)

Change an item&#39;s search metadata

Partial - a field left out is untouched, a field sent empty is cleared and the page falls back to what it fell back to before.  Underneath these are three item attributes with reserved names, so this and the attributes endpoint reach the same storage; it exists separately because the names are not discoverable from the templates.  Two things worth knowing.  A title set here changes the document title only - og:title and twitter:title render the item&#39;s description either way.  And there is no canonical or noindex field, because both are site wide switches rather than per item values. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **item_seo_request** | [**SfvbItemSeoRequest**](SfvbItemSeoRequest.md)| Search metadata to change | 
 **merchant_item_id** | **String**|  | [optional] 
 **merchant_item_oid** | **Number**|  | [optional] 

### Return type

[**SfvbItemResponse**](SfvbItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbMenu

> SfvbMenu putSfvbMenu(storefront_oid, code, menu_write_request, opts)

Replace a store menu&#39;s entries

A whole menu replace, not a merge - what you send is what the menu holds afterwards, so read it, change the tree and send it back.  Omitting items changes only the title; sending an empty array empties the menu.  Writing a code that does not exist creates it.  Every entry is checked before any of it is written, including that a merchant_item_id and a page_path actually resolve, so a tree with one bad entry changes nothing.  Always needs sfvb_publish, because a menu is shared by every theme and there is no dormant copy to change instead. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **code** | **String**| Menu code, matched without regard to case | 
 **menu_write_request** | [**SfvbMenuWriteRequest**](SfvbMenuWriteRequest.md)| The menu&#39;s replacement contents | 
 **If_Match** | **String**| Content hash from the last read.  Required when the menu already exists; 428 when absent, 412 when stale. | [optional] 

### Return type

[**SfvbMenu**](SfvbMenu.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbPageAttributes

> SfvbPageResponse putSfvbPageAttributes(storefront_oid, path, page_attribute_update_request)

Change a page&#39;s attributes

A partial update.  Only the attributes you name are changed.  Every entry is checked before any is written.  List, slider, item set, page collection and video list attributes are refused - edit those in the page editor.  Always needs sfvb_publish, because a page&#39;s attributes are shared by every theme and there is no dormant copy to change instead. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /catalog/dispensers/ | 
 **page_attribute_update_request** | [**SfvbPageAttributeUpdateRequest**](SfvbPageAttributeUpdateRequest.md)| Attributes to change | 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbPageMultimedia

> SfvbPageResponse putSfvbPageMultimedia(storefront_oid, path, page_multimedia_request)

Attach an image to a page

Upload the image with files/upload to the page path followed by a filename first, then name that filename here as either the default image or an image code.  The default image is what a pageimage element with no pageImageCode renders, and what a subgroup tile shows.  Replaces whatever that slot held.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /catalog/dispensers/ | 
 **page_multimedia_request** | [**SfvbPageMultimediaRequest**](SfvbPageMultimediaRequest.md)| Image to attach | 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbPageSelectors

> SfvbPageSelectors putSfvbPageSelectors(storefront_oid, path, page_selectors_request)

Replace a page&#39;s selectors

Each list you send replaces that whole set, and an empty list clears it.  A list you leave out is not touched.  The page&#39;s items or blog posts are recalculated from the new selectors straight away.  While a page has item selectors its items cannot be assigned by hand.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /lp/spring-sale/ | 
 **page_selectors_request** | [**SfvbPageSelectors**](SfvbPageSelectors.md)| The selector sets to replace | 

### Return type

[**SfvbPageSelectors**](SfvbPageSelectors.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbPageSettings

> SfvbPageResponse putSfvbPageSettings(storefront_oid, path, page_settings_request)

Change a page&#39;s settings

A partial update.  Only the fields you send change - title, description, templates, visibility, sitemap exclusion, sort orders, items per page and page type.  Unlike the store admin&#39;s page save, the page&#39;s attributes, images, items, selectors and permissions are left exactly as they are.  Fields that would move or rename the page, and fields this endpoint does not know, are refused.  The root page cannot be hidden.  Always needs sfvb_publish, because page settings are live. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /lp/spring-sale/ | 
 **page_settings_request** | [**SfvbPageSettingsRequest**](SfvbPageSettingsRequest.md)| The settings to change | 

### Return type

[**SfvbPageResponse**](SfvbPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbPreviewSession

> SfvbPreviewSessionResponse putSfvbPreviewSession(storefront_oid, preview_session_id, preview_session, opts)

Push containers into a preview session

Stores compiled containers against a session created by createSfvbPreviewSession.  Replaces whatever the session held.  The session must exist - this does not create one, so a deleted, expired or never issued id is a 404 rather than a new session.  Nothing durable is written.  Requires a token that resolves to a user, so use the device authorization flow. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **preview_session_id** | **String**|  | 
 **preview_session** | [**SfvbPreviewSessionRequest**](SfvbPreviewSessionRequest.md)| Containers to stage in the preview session | 
 **theme_oid** | **Number**|  | [optional] 

### Return type

[**SfvbPreviewSessionResponse**](SfvbPreviewSessionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbRecordingSettings

> SfvbRecordingSettingsResponse putSfvbRecordingSettings(storefront_oid, recording_settings_request)

Turn the storefront&#39;s screen recording on or off

Turning it on records real shoppers&#39; sessions from that moment, with no history before it.  The first time starts a 14 day free trial, after which recorded sessions are billed per 1,000.  Only change it when the merchant has asked for it.  Asking for the state it is already in changes nothing, and changed comes back false.  Always needs sfvb_publish, in both directions, because it decides whether live shoppers are recorded.  Limited per storefront to 5 changes a minute, 20 an hour and 50 a day. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **recording_settings_request** | [**SfvbRecordingSettingsRequest**](SfvbRecordingSettingsRequest.md)| Whether to record | 

### Return type

[**SfvbRecordingSettingsResponse**](SfvbRecordingSettingsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## putSfvbSiteAttributes

> SfvbSiteAttributesResponse putSfvbSiteAttributes(storefront_oid, site_attribute_update_request)

Change a storefront&#39;s site attributes

A partial update.  Only the attributes you name are changed.  Every entry is checked before any is written.  List, video list, mailing list and item set attributes are refused, and so are the General screen settings other than the title, the SEO description and keywords and the social account names.  Credentials are refused.  Always needs sfvb_publish, because every theme reads the same attributes and there is no dormant copy to change instead.  The admin General screen saves the whole storefront, so a merchant with it open can still overwrite a change made here. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **site_attribute_update_request** | [**SfvbSiteAttributeUpdateRequest**](SfvbSiteAttributeUpdateRequest.md)| Attributes to change | 

### Return type

[**SfvbSiteAttributesResponse**](SfvbSiteAttributesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putSfvbThemeAttributes

> SfvbThemeAttributesResponse putSfvbThemeAttributes(storefront_oid, theme_oid, attribute_update_request)

Change a theme&#39;s colors, fonts and settings

A partial update.  Only the slots you name are changed and every other slot on the theme keeps its value, so there is no need to send the whole set back to change one color.  Send a whole palette in one call rather than one call per color - they are applied together, so the storefront never renders half of a change.  Needs sfvb_publish when the theme is the one serving live traffic, because a color is referenced by name from every template that uses it and one write repaints the whole storefront at once.  On a dormant theme sfvb_write is enough, which is what makes duplicate-then-restyle work. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | 
 **attribute_update_request** | [**SfvbThemeAttributeUpdateRequest**](SfvbThemeAttributeUpdateRequest.md)| Slots to change | 

### Return type

[**SfvbThemeAttributesResponse**](SfvbThemeAttributesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshSfvbPage

> SfvbPageRefreshResponse refreshSfvbPage(storefront_oid, page_refresh_request)

Drop one page&#39;s cached copy

The next request renders the page fresh.  Use it when a write succeeded, a read shows the new value, and the public page still shows the old one.  Writes normally refresh the pages they affect, so a stale page after a write is a bug worth reporting with its URL.  One page per request.  The response says whether the page had a cached copy and whether anything was dropped. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **page_refresh_request** | [**SfvbPageRefreshRequest**](SfvbPageRefreshRequest.md)| The page to refresh | 

### Return type

[**SfvbPageRefreshResponse**](SfvbPageRefreshResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeSfvbPageBlogPosts

> SfvbPageBlogPostsResponse removeSfvbPageBlogPosts(storefront_oid, path, page_blog_posts_request)

Take blog posts off a page

Removes posts by blog_post_oid, at most 500 at a time.  Every oid must be on the page, and one that is not changes nothing.  The posts themselves are not touched.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /blog/ | 
 **page_blog_posts_request** | [**SfvbPageBlogPostsRequest**](SfvbPageBlogPostsRequest.md)| Blog posts to take off the page | 

### Return type

[**SfvbPageBlogPostsResponse**](SfvbPageBlogPostsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## removeSfvbPageItems

> SfvbPageItemsResponse removeSfvbPageItems(storefront_oid, path, page_items_remove_request)

Take items off a page

Removes items by item id, at most 500 at a time.  Every id must be on the page, and one that is not changes nothing.  The items themselves are not touched.  Refused on a page whose selectors choose its items.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**| Page path, for example /lp/spring-sale/ | 
 **page_items_remove_request** | [**SfvbPageItemsRemoveRequest**](SfvbPageItemsRemoveRequest.md)| Items to take off the page | 

### Return type

[**SfvbPageItemsResponse**](SfvbPageItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## renderSfvbWidgets

> SfvbRenderResponse renderSfvbWidgets(storefront_oid, theme_oid, render_request)

Render a CJSON node to HTML

Renders one node in the context of a theme and a page.  Unlike compile this is stateful.  Rendering resolves merchant data, so an element bound to an item renders wrongly, and silently, without a context item id.  One node per call, so a node that fails to render fails on its own rather than taking a batch with it, and a failure says why.  By default the node renders as a shopper sees it, with conditions, prices and sale state evaluated against the context item.  Set edit_mode to render every branch the way the builder shows it, for styling content a shopper only sometimes sees. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | 
 **render_request** | [**SfvbRenderRequest**](SfvbRenderRequest.md)| Widgets to render | 

### Return type

[**SfvbRenderResponse**](SfvbRenderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reserveSfvbWidgetIds

> SfvbWidgetIdsResponse reserveSfvbWidgetIds(storefront_oid, opts)

Reserve a block of widget ids

Widget ids are allocated by the server, not invented by the caller.  Reserve a block, then form ids as elementType-number.  This is the single most likely thing to get wrong on a first write.  A POST rather than a GET because it consumes a sequence.  A GET that mutates will eventually be prefetched, retried or cached by something that assumed it was safe. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **count** | **Number**|  | [optional] 

### Return type

[**SfvbWidgetIdsResponse**](SfvbWidgetIdsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetSfvbI18nMessage

> SfvbI18nResetResponse resetSfvbI18nMessage(storefront_oid, key, If_Match, opts)

Reset one built-in message

Puts a message back to the template&#39;s text.  The merchant&#39;s English edit and hand translations stop serving at once and every language falls back to machine translation; the message comes back the next time a page renders it.  A message imported from an older theme&#39;s locale file is refused.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **key** | **String**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **theme_oid** | **Number**|  | [optional] 

### Return type

[**SfvbI18nResetResponse**](SfvbI18nResetResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resolveSfvbRedirect

> SfvbRedirectResolveResponse resolveSfvbRedirect(storefront_oid, opts)

What a shopper gets for a path

Follows the redirect rules for a path exactly as the storefront does and reports each step, the final path, its status and what it lands on (a live page, a hidden page, an item, a 404 or something else).  Read only.  Use it to check every change. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **path** | **String**|  | [optional] 

### Return type

[**SfvbRedirectResolveResponse**](SfvbRedirectResolveResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resolveSfvbTemplate

> SfvbTemplateResolveResponse resolveSfvbTemplate(storefront_oid, name, opts)

Resolve a template name to the file a page renders

A page stores only its template&#39;s file name.  This runs the storefront&#39;s own template search for that name and returns the file a page naming it renders, relative to the theme.  It also lists the theme&#39;s resource paths in search order with every file of that name below each, so a theme copy overriding a shared core copy, or a copy in a snippets folder that is never used, is visible.  exists is false when a page naming the template cannot render. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **name** | **String**| The template file name, such as catalog.vm | 
 **theme_oid** | **Number**| Resolve in this theme instead of the active theme | [optional] 

### Return type

[**SfvbTemplateResolveResponse**](SfvbTemplateResolveResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revertSfvbContainer

> SfvbContainerResponse revertSfvbContainer(storefront_oid, owner_type, owner_object_id, If_Match, container_revert_request, opts)

Revert a container stored outside the file system

The restore is itself snapshotted, so a revert can be undone in turn.  Reverting to an entry recorded before the container existed removes it again.  Addressed through the owning container and guarded by If-Match, because a revert overwrites live content just as much as an ordinary write does.  owner_type also says how owner_object_id is read, so a version written by oid can be reverted by merchant item id and the other way round. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **owner_type** | **String**|  | 
 **owner_object_id** | **String**|  | 
 **If_Match** | **String**| CJSON hash of the container being reverted.  Required; 428 when absent, 412 when stale. | 
 **container_revert_request** | [**SfvbContainerRevertRequest**](SfvbContainerRevertRequest.md)| Version to revert the container to | 
 **container_name** | **String**|  | [optional] 

### Return type

[**SfvbContainerResponse**](SfvbContainerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## revertSfvbFile

> SfvbFileWriteResponse revertSfvbFile(storefront_oid, If_Match, file_revert_request)

Revert a storefront file to an earlier version

The revert lands as a new version, so it is itself undoable. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **If_Match** | **String**| Content hash of the file being reverted.  Required; 428 when absent, 412 when stale. | 
 **file_revert_request** | [**SfvbFileRevertRequest**](SfvbFileRevertRequest.md)| Version to revert the file to | 

### Return type

[**SfvbFileWriteResponse**](SfvbFileWriteResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchSfvbFiles

> SfvbFileSearchResponse searchSfvbFiles(storefront_oid, search_request)

Search storefront files

Searches names and, when text is supplied, file contents.  For a CLI with no local copy this is the only way to answer where something is defined without walking the whole tree.  Results are capped and truncation is always reported. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **search_request** | [**SfvbFileSearchRequest**](SfvbFileSearchRequest.md)| File search | 

### Return type

[**SfvbFileSearchResponse**](SfvbFileSearchResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchSfvbLibrary

> SfvbLibraryResponse searchSfvbLibrary(storefront_oid, opts)

Search the element library

Known-good CJSON fragments a human already built out of real elements.  This is what a lint warning about a monolithic html element should point at - a warning that names a fragment solving the same problem is an instruction, where a warning on its own is only criticism.  Results are terse; fetch a single entry for its CJSON.  Narrow with a query parameter named after a facet, such as facet_purpose, whose value is the facet name, a colon and one of its options.  Besides element type and author, the facets include purpose, section, industry and style from library/taxonomy, and the search text matches those tags too.  Results follow the same rules as reading one entry, so others see published revisions only. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **segment** | **String**|  | [optional] 
 **search** | **String**|  | [optional] 
 **page_number** | **Number**|  | [optional] 
 **results_per_page** | **Number**|  | [optional] 

### Return type

[**SfvbLibraryResponse**](SfvbLibraryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setSfvbLibraryScreenshot

> SfvbLibraryEntry setSfvbLibraryScreenshot(storefront_oid, library_oid, If_Match, screenshot_request)

Set a library entry&#39;s screenshot

Three calls, like the other uploads.  Request an upload URL with files/upload_url/png, PUT the PNG bytes to it, then call this with the key, the sha256 of those bytes and where the image came from.  Owner only, with the draft&#39;s hash_sha256 as If-Match.  The PNG must be at most 5 MB and 4096 pixels a side; it is re-encoded, which drops any metadata, and a thumbnail is made from it before this returns.  Capture it with test data only.  A refused image leaves the previous screenshot in place.  Other merchants see a new screenshot only after the next publish, whose review checks it. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **screenshot_request** | [**SfvbLibraryScreenshotRequest**](SfvbLibraryScreenshotRequest.md)| The staged PNG | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## shareSfvbLibraryEntry

> SfvbLibraryEntry shareSfvbLibraryEntry(storefront_oid, library_oid, share_request)

Share a published library entry with a linked account

Owner only, and always needs sfvb_publish.  The merchant must be one share_targets lists, and the entry must have a published revision, which is what the recipient sees.  The published revision is checked again for absolute asset URLs and credentials.  Idempotent. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **share_request** | [**SfvbLibraryShareRequest**](SfvbLibraryShareRequest.md)| The linked account | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## startSfvbExperiment

> SfvbExperiment startSfvbExperiment(storefront_oid, experiment_start_request)

Start an experiment

type page starts an experiment element already saved in a page body - send path, slot and widget_id, and its name, objective, duration and variations are read from the element with the builder&#39;s rules (2 to 5 variations numbered 0 up with no gaps, 3 to 90 days, traffic on all or none adding up to 100).  The new id is written into the element and the body is saved, so pull it again before the next edit.  type url splits visitors between existing pages at router_url, and always ends by itself after duration_days.  Always needs sfvb_publish, because visitors are split as soon as it starts. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **experiment_start_request** | [**SfvbExperimentStartRequest**](SfvbExperimentStartRequest.md)| The experiment to start | 

### Return type

[**SfvbExperiment**](SfvbExperiment.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## unarchiveSfvbUpsellPath

> SfvbUpsellPath unarchiveSfvbUpsellPath(storefront_oid, upsell_path_oid)

Unarchive an upsell path

Brings the path back into the default list.  Unarchiving one that is switched on starts it, so that needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unfavoriteSfvbLibraryEntry

> unfavoriteSfvbLibraryEntry(storefront_oid, library_oid)

Remove a library entry from favorites

Removes the calling user&#39;s bookmark.  Idempotent. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unignoreSfvbNotFoundEntry

> SfvbNotFoundEntry unignoreSfvbNotFoundEntry(storefront_oid, not_found_id)

Stop ignoring a 404 path

The path lists and counts hits again. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **not_found_id** | **String**|  | 

### Return type

[**SfvbNotFoundEntry**](SfvbNotFoundEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unpublishSfvbLibraryEntry

> SfvbLibraryEntry unpublishSfvbLibraryEntry(storefront_oid, library_oid, unpublish_request)

Narrow who can see a library entry

Sets visibility to shared or private.  Owner only, and always needs sfvb_publish.  Published revisions are kept and storefronts that already installed the entry keep their copies. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **unpublish_request** | [**SfvbLibraryPublishRequest**](SfvbLibraryPublishRequest.md)| The narrower visibility | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## unshareSfvbLibraryEntry

> SfvbLibraryUnshareResult unshareSfvbLibraryEntry(storefront_oid, library_oid, merchant_id)

Stop sharing a library entry with an account

Owner only, and always needs sfvb_publish.  Stops further installs by that account.  Its existing installs keep their copies and are listed in the result.  Idempotent, and still works while the library is turned off. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **merchant_id** | **String**|  | 

### Return type

[**SfvbLibraryUnshareResult**](SfvbLibraryUnshareResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSfvbBlogPost

> SfvbBlogPostDetail updateSfvbBlogPost(storefront_oid, blog_post_oid, blog_post_request)

Change a blog post

Only the fields sent change; tags, when sent, replaces every tag.  The post&#39;s images and attributes are left alone.  Publish or unpublish with visibility.  A post that is not a draft before or after the change needs sfvb_publish.  The same content rules as create apply. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **blog_post_oid** | **Number**|  | 
 **blog_post_request** | [**SfvbBlogPostRequest**](SfvbBlogPostRequest.md)| The fields to change | 

### Return type

[**SfvbBlogPostDetail**](SfvbBlogPostDetail.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateSfvbLibraryEntry

> SfvbLibraryEntry updateSfvbLibraryEntry(storefront_oid, library_oid, If_Match, library_entry)

Update a library entry&#39;s draft

A full replace of the draft&#39;s fields.  Owner only.  Send the hash_sha256 you read as If-Match.  Every save increments revision_number; nothing other merchants see changes until the draft is published.  A changed fragment is re-scanned and its images copied again, and screenshot_stale tells you to retake the screenshot. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **library_entry** | [**SfvbLibraryEntryRequest**](SfvbLibraryEntryRequest.md)| The whole entry | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateSfvbRedirect

> SfvbRedirectResponse updateSfvbRedirect(storefront_oid, redirect_id, If_Match, redirect_request)

Change a redirect rule

Changes the source, target or note, and can turn an admin rule into a 301.  Fields left out keep their value.  A changed source or target is checked like a new rule.  Send the hash_sha256 you read as If-Match.  Always needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **redirect_id** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  428 when absent, 412 when stale. | 
 **redirect_request** | [**SfvbRedirectRequest**](SfvbRedirectRequest.md)| The request | 

### Return type

[**SfvbRedirectResponse**](SfvbRedirectResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateSfvbUpsellOffer

> SfvbUpsellOffer updateSfvbUpsellOffer(storefront_oid, upsell_offer_oid, If_Match, upsell_offer)

Update an upsell offer

A full replace.  Send back the whole offer you read, changed, with its hash_sha256 in If-Match.  Read only fields are ignored and a writable field left out is cleared.  Changing an offer that is switched on, switching one on, or changing upsell_item_id_javascript or offsite_content_url needs sfvb_publish.  Settings the API does not show, such as the offer&#39;s screenshots, are kept. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_offer_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **upsell_offer** | [**SfvbUpsellOffer**](SfvbUpsellOffer.md)| The whole offer | 

### Return type

[**SfvbUpsellOffer**](SfvbUpsellOffer.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateSfvbUpsellPath

> SfvbUpsellPath updateSfvbUpsellPath(storefront_oid, upsell_path_oid, If_Match, upsell_path)

Update an upsell path

A full replace.  Send back the whole path you read, changed, with its hash_sha256 in If-Match.  Read only fields are ignored and a writable field left out is cleared.  Order and archived keep their stored values; change them with the move, archive and unarchive calls.  Changing a running path, or switching one on, needs sfvb_publish. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **upsell_path_oid** | **Number**|  | 
 **If_Match** | **String**| hash_sha256 from the last read.  Required; 428 when absent, 412 when stale. | 
 **upsell_path** | [**SfvbUpsellPath**](SfvbUpsellPath.md)| The whole path | 

### Return type

[**SfvbUpsellPath**](SfvbUpsellPath.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## uploadSfvbFile

> SfvbFileWriteResponse uploadSfvbFile(storefront_oid, file_upload_request, opts)

Store a binary asset that was already uploaded

The second half of the two step upload.  The bytes are fetched from the key, checked against the extension they claim to be, and written exactly as a text write is - so the same If-Match precondition, the same read only refusal and the same publish gate apply.  An SVG is sanitized before it is stored.  Writing outside /themes/ requires sfvb_publish, because anything served off the storefront root is live by definition. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **file_upload_request** | [**SfvbFileUploadRequest**](SfvbFileUploadRequest.md)| Where to store the uploaded bytes | 
 **If_Match** | **String**| Content hash from the last read.  Required when the file already exists; 428 when absent, 412 when stale. | [optional] 

### Return type

[**SfvbFileWriteResponse**](SfvbFileWriteResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateSfvbCjson

> SfvbValidationResponse validateSfvbCjson(validate_request)

Validate CJSON

Runs the structural schema, the contextual business rules for the destination owner type, and the quality lint.  A document that fails returns HTTP 200 with valid false rather than a transport error - the request was well formed, the document was not. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validate_request** | [**SfvbValidateRequest**](SfvbValidateRequest.md)| CJSON to validate | 

### Return type

[**SfvbValidationResponse**](SfvbValidationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateSfvbVelocity

> SfvbValidationResponse validateSfvbVelocity(storefront_oid, theme_oid, velocity_validate_request)

Validate a Velocity template against a theme

Theme scoped rather than stateless.  Validation builds a theme template context and evaluates against it.  Also applies the template sandbox, so an agent learns the rule before a write fails. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **theme_oid** | **Number**|  | 
 **velocity_validate_request** | [**SfvbVelocityValidateRequest**](SfvbVelocityValidateRequest.md)| Velocity template to validate | 

### Return type

[**SfvbValidationResponse**](SfvbValidationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

