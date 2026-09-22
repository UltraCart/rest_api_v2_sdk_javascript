# UltraCartRestApiV2.SfvbApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSfvbPageBlogPosts**](SfvbApi.md#addSfvbPageBlogPosts) | **POST** /sfvb/storefronts/{storefront_oid}/pages/blog_posts/add | Assign blog posts to a page
[**addSfvbPageItems**](SfvbApi.md#addSfvbPageItems) | **POST** /sfvb/storefronts/{storefront_oid}/pages/items/add | Assign items to a page
[**compileSfvbCjson**](SfvbApi.md#compileSfvbCjson) | **POST** /sfvb/cjson/compile | Compile CJSON to Velocity
[**createSfvbPreviewAccess**](SfvbApi.md#createSfvbPreviewAccess) | **POST** /sfvb/storefronts/{storefront_oid}/preview_access | One time link that opens a preview in a browser with no UltraCart login
[**createSfvbPreviewSession**](SfvbApi.md#createSfvbPreviewSession) | **POST** /sfvb/storefronts/{storefront_oid}/preview_sessions | Create a preview session
[**deleteSfvbFile**](SfvbApi.md#deleteSfvbFile) | **DELETE** /sfvb/storefronts/{storefront_oid}/files | Delete a storefront file
[**deleteSfvbItemMultimedia**](SfvbApi.md#deleteSfvbItemMultimedia) | **DELETE** /sfvb/storefronts/{storefront_oid}/items/multimedia | Detach an image from an item
[**deleteSfvbPageMultimedia**](SfvbApi.md#deleteSfvbPageMultimedia) | **DELETE** /sfvb/storefronts/{storefront_oid}/pages/multimedia | Detach an image from a page
[**deleteSfvbPreviewSession**](SfvbApi.md#deleteSfvbPreviewSession) | **DELETE** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id} | Delete a preview session
[**downloadSfvbFile**](SfvbApi.md#downloadSfvbFile) | **GET** /sfvb/storefronts/{storefront_oid}/files/download | Read a storefront file&#39;s raw bytes
[**duplicateSfvbPage**](SfvbApi.md#duplicateSfvbPage) | **POST** /sfvb/storefronts/{storefront_oid}/pages/duplicate | Copy a page to a new path
[**duplicateSfvbTheme**](SfvbApi.md#duplicateSfvbTheme) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/duplicate | Duplicate a theme
[**endSfvbExperiment**](SfvbApi.md#endSfvbExperiment) | **POST** /sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}/end | End an experiment
[**getSfvbCjsonUsedElements**](SfvbApi.md#getSfvbCjsonUsedElements) | **POST** /sfvb/cjson/elements | Element types used by a container
[**getSfvbContainer**](SfvbApi.md#getSfvbContainer) | **GET** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id} | Read a container stored outside the file system
[**getSfvbContainerVersion**](SfvbApi.md#getSfvbContainerVersion) | **GET** /sfvb/storefronts/{storefront_oid}/container_versions/{container_history_oid} | Read the CJSON stored in one container history entry
[**getSfvbElement**](SfvbApi.md#getSfvbElement) | **GET** /sfvb/elements/{element_type} | Configuration schema and field card for one element type
[**getSfvbExperiment**](SfvbApi.md#getSfvbExperiment) | **GET** /sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid} | Read one experiment and its statistics
[**getSfvbExperimentObjectives**](SfvbApi.md#getSfvbExperimentObjectives) | **GET** /sfvb/storefronts/{storefront_oid}/experiments/objectives | List the objectives an experiment can optimize
[**getSfvbFileContent**](SfvbApi.md#getSfvbFileContent) | **GET** /sfvb/storefronts/{storefront_oid}/files/content | Read a storefront file
[**getSfvbFileUploadUrl**](SfvbApi.md#getSfvbFileUploadUrl) | **GET** /sfvb/storefronts/{storefront_oid}/files/upload_url/{extension} | Get a URL to upload a binary asset to
[**getSfvbItem**](SfvbApi.md#getSfvbItem) | **GET** /sfvb/storefronts/{storefront_oid}/items | Read an item&#39;s storefront facing content
[**getSfvbLibraryEntry**](SfvbApi.md#getSfvbLibraryEntry) | **GET** /sfvb/storefronts/{storefront_oid}/library/{library_oid} | Read one library entry including its CJSON
[**getSfvbMenu**](SfvbApi.md#getSfvbMenu) | **GET** /sfvb/storefronts/{storefront_oid}/menus/{code} | Read one store menu and its entries
[**getSfvbMenus**](SfvbApi.md#getSfvbMenus) | **GET** /sfvb/storefronts/{storefront_oid}/menus | List a storefront&#39;s store menus
[**getSfvbPage**](SfvbApi.md#getSfvbPage) | **GET** /sfvb/storefronts/{storefront_oid}/pages | Read a page&#39;s attributes and images
[**getSfvbPageBlogPosts**](SfvbApi.md#getSfvbPageBlogPosts) | **GET** /sfvb/storefronts/{storefront_oid}/pages/blog_posts | Read the blog posts assigned to a page
[**getSfvbPageItems**](SfvbApi.md#getSfvbPageItems) | **GET** /sfvb/storefronts/{storefront_oid}/pages/items | Read the items assigned to a page
[**getSfvbPageSelectors**](SfvbApi.md#getSfvbPageSelectors) | **GET** /sfvb/storefronts/{storefront_oid}/pages/selectors | Read a page&#39;s selectors
[**getSfvbPreviewUrl**](SfvbApi.md#getSfvbPreviewUrl) | **GET** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id}/url | URL that renders a preview session
[**getSfvbSiteAttributes**](SfvbApi.md#getSfvbSiteAttributes) | **GET** /sfvb/storefronts/{storefront_oid}/attributes | Read a storefront&#39;s site attributes
[**getSfvbTheme**](SfvbApi.md#getSfvbTheme) | **GET** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid} | Get a theme
[**getSfvbThemeAttributes**](SfvbApi.md#getSfvbThemeAttributes) | **GET** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes | Read a theme&#39;s colors, fonts and settings
[**getSfvbThemeJob**](SfvbApi.md#getSfvbThemeJob) | **GET** /sfvb/storefronts/{storefront_oid}/theme_jobs/{job_id} | Status of an asynchronous theme job
[**getSfvbVersion**](SfvbApi.md#getSfvbVersion) | **GET** /sfvb/version | Compiler version for this merchant
[**getSfvbWhoami**](SfvbApi.md#getSfvbWhoami) | **GET** /sfvb/whoami | Who this token is
[**insertSfvbPage**](SfvbApi.md#insertSfvbPage) | **POST** /sfvb/storefronts/{storefront_oid}/pages | Create a page
[**installSfvbLibraryEntry**](SfvbApi.md#installSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/install | Install a library entry into a storefront
[**listSfvbBlogPosts**](SfvbApi.md#listSfvbBlogPosts) | **GET** /sfvb/storefronts/{storefront_oid}/blog_posts | List the storefront&#39;s blog posts
[**listSfvbContainerVersions**](SfvbApi.md#listSfvbContainerVersions) | **GET** /sfvb/storefronts/{storefront_oid}/container_versions | Version history for a container stored outside the file system
[**listSfvbElements**](SfvbApi.md#listSfvbElements) | **GET** /sfvb/elements | List every SFVB element type
[**listSfvbExperiments**](SfvbApi.md#listSfvbExperiments) | **GET** /sfvb/storefronts/{storefront_oid}/experiments | List the storefront&#39;s experiments
[**listSfvbFileVersions**](SfvbApi.md#listSfvbFileVersions) | **GET** /sfvb/storefronts/{storefront_oid}/files/versions | Version history for a storefront file
[**listSfvbFiles**](SfvbApi.md#listSfvbFiles) | **GET** /sfvb/storefronts/{storefront_oid}/files | List a storefront directory
[**listSfvbItemContainers**](SfvbApi.md#listSfvbItemContainers) | **GET** /sfvb/storefronts/{storefront_oid}/item_containers | List the item containers on the account
[**listSfvbPages**](SfvbApi.md#listSfvbPages) | **GET** /sfvb/storefronts/{storefront_oid}/pages/list | List the storefront&#39;s pages
[**listSfvbStorefronts**](SfvbApi.md#listSfvbStorefronts) | **GET** /sfvb/storefronts | List storefronts
[**listSfvbTemplates**](SfvbApi.md#listSfvbTemplates) | **GET** /sfvb/storefronts/{storefront_oid}/templates | List the active theme&#39;s templates
[**listSfvbThemes**](SfvbApi.md#listSfvbThemes) | **GET** /sfvb/storefronts/{storefront_oid}/themes | List themes for a storefront
[**listSfvbUpsellOffers**](SfvbApi.md#listSfvbUpsellOffers) | **GET** /sfvb/storefronts/{storefront_oid}/upsell_offers | List upsell offers
[**putSfvbContainer**](SfvbApi.md#putSfvbContainer) | **PUT** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id} | Write a container stored outside the file system
[**putSfvbExperimentVariation**](SfvbApi.md#putSfvbExperimentVariation) | **PUT** /sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}/variations/{variation_number} | Pause or resume a variation
[**putSfvbFileContent**](SfvbApi.md#putSfvbFileContent) | **PUT** /sfvb/storefronts/{storefront_oid}/files/content | Write a storefront file
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
[**putSfvbSiteAttributes**](SfvbApi.md#putSfvbSiteAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/attributes | Change a storefront&#39;s site attributes
[**putSfvbThemeAttributes**](SfvbApi.md#putSfvbThemeAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes | Change a theme&#39;s colors, fonts and settings
[**removeSfvbPageBlogPosts**](SfvbApi.md#removeSfvbPageBlogPosts) | **POST** /sfvb/storefronts/{storefront_oid}/pages/blog_posts/remove | Take blog posts off a page
[**removeSfvbPageItems**](SfvbApi.md#removeSfvbPageItems) | **POST** /sfvb/storefronts/{storefront_oid}/pages/items/remove | Take items off a page
[**renderSfvbWidgets**](SfvbApi.md#renderSfvbWidgets) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/render | Render a CJSON node to HTML
[**reserveSfvbWidgetIds**](SfvbApi.md#reserveSfvbWidgetIds) | **POST** /sfvb/storefronts/{storefront_oid}/widget_ids | Reserve a block of widget ids
[**revertSfvbContainer**](SfvbApi.md#revertSfvbContainer) | **POST** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id}/revert | Revert a container stored outside the file system
[**revertSfvbFile**](SfvbApi.md#revertSfvbFile) | **POST** /sfvb/storefronts/{storefront_oid}/files/revert | Revert a storefront file to an earlier version
[**searchSfvbFiles**](SfvbApi.md#searchSfvbFiles) | **POST** /sfvb/storefronts/{storefront_oid}/files/search | Search storefront files
[**searchSfvbLibrary**](SfvbApi.md#searchSfvbLibrary) | **GET** /sfvb/storefronts/{storefront_oid}/library | Search the element library
[**startSfvbExperiment**](SfvbApi.md#startSfvbExperiment) | **POST** /sfvb/storefronts/{storefront_oid}/experiments | Start an experiment
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


## endSfvbExperiment

> SfvbExperiment endSfvbExperiment(storefront_oid, experiment_oid, opts)

End an experiment

Ends a running experiment.  With winner_variation_number the winner gets all new visitors, and a page experiment&#39;s winning content is promoted into the page by the completion job on its next run, which also emails the merchant.  Without a winner a page experiment&#39;s id is cleared from its page body so the page shows variation 0, and a url experiment sends everyone to variation 0.  Visitors already assigned to a url experiment keep their page for up to 30 days.  Always needs sfvb_publish. 


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

> SfvbLibraryEntry getSfvbLibraryEntry(storefront_oid, library_oid)

Read one library entry including its CJSON

Returns the fragment as authored.  If it references images or other storefront files those paths will not resolve on this storefront until the entry is installed, so use install rather than this when the intent is to place the fragment. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

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


## installSfvbLibraryEntry

> SfvbLibraryEntry installSfvbLibraryEntry(storefront_oid, library_oid)

Install a library entry into a storefront

Copies the fragment&#39;s referenced assets into the storefront file system and returns the CJSON with its paths resolved, ready to place.  This writes, which is why it is a POST rather than the GET the internal admin endpoint uses.  It also requires sfvb_publish, because the assets land in the shared storefront file system, which is served to shoppers regardless of which theme is active, so no amount of working inside a duplicate theme isolates them. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 
 **library_oid** | **Number**|  | 

### Return type

[**SfvbLibraryEntry**](SfvbLibraryEntry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
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

> SfvbUpsellOffersResponse listSfvbUpsellOffers(storefront_oid)

List upsell offers

Without container JSON, so the funnel can be surveyed cheaply.  A large container size alongside a small element count is the signature of markup pasted into a single html element. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storefront_oid** | **Number**|  | 

### Return type

[**SfvbUpsellOffersResponse**](SfvbUpsellOffersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
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


## putSfvbItemAttributes

> SfvbItemResponse putSfvbItemAttributes(storefront_oid, item_attribute_update_request, opts)

Change some of an item&#39;s attributes

Partial - only the attributes named change, and an empty value clears one.  Every entry is validated before any is written, so a refusal leaves the item untouched.  The list types are checked against the shape their renderer actually parses, which matters more than it sounds: a definition list is a bare array with one letter keys, a video list is a wrapper object with keys spelled out, and an item set is comma separated text rather than JSON.  A shape the renderer cannot read is not reported at render time - it renders exactly like an attribute nobody ever set. 


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

Renders one node in the context of a theme and a page.  Unlike compile this is stateful.  Rendering resolves merchant data, so an element bound to an item renders wrongly, and silently, without a context item id.  One node per call, so a node that fails to render fails on its own rather than taking a batch with it, and a failure says why. 


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

Known-good CJSON fragments a human already built out of real elements.  This is what a lint warning about a monolithic html element should point at - a warning that names a fragment solving the same problem is an instruction, where a warning on its own is only criticism.  Results are terse; fetch a single entry for its CJSON.  Narrow with facet_{name}&#x3D;{option} query parameters. 


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

