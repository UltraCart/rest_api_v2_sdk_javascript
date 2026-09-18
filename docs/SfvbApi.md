# UltraCartRestApiV2.SfvbApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compileSfvbCjson**](SfvbApi.md#compileSfvbCjson) | **POST** /sfvb/cjson/compile | Compile CJSON to Velocity
[**createSfvbPreviewAccess**](SfvbApi.md#createSfvbPreviewAccess) | **POST** /sfvb/storefronts/{storefront_oid}/preview_access | One time link that opens a preview in a browser with no UltraCart login
[**createSfvbPreviewSession**](SfvbApi.md#createSfvbPreviewSession) | **POST** /sfvb/storefronts/{storefront_oid}/preview_sessions | Create a preview session
[**deleteSfvbFile**](SfvbApi.md#deleteSfvbFile) | **DELETE** /sfvb/storefronts/{storefront_oid}/files | Delete a storefront file
[**deleteSfvbPageMultimedia**](SfvbApi.md#deleteSfvbPageMultimedia) | **DELETE** /sfvb/storefronts/{storefront_oid}/pages/multimedia | Detach an image from a page
[**deleteSfvbPreviewSession**](SfvbApi.md#deleteSfvbPreviewSession) | **DELETE** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id} | Delete a preview session
[**downloadSfvbFile**](SfvbApi.md#downloadSfvbFile) | **GET** /sfvb/storefronts/{storefront_oid}/files/download | Read a storefront file&#39;s raw bytes
[**duplicateSfvbTheme**](SfvbApi.md#duplicateSfvbTheme) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/duplicate | Duplicate a theme
[**getSfvbCjsonUsedElements**](SfvbApi.md#getSfvbCjsonUsedElements) | **POST** /sfvb/cjson/elements | Element types used by a container
[**getSfvbContainer**](SfvbApi.md#getSfvbContainer) | **GET** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id} | Read a container stored outside the file system
[**getSfvbContainerVersion**](SfvbApi.md#getSfvbContainerVersion) | **GET** /sfvb/storefronts/{storefront_oid}/container_versions/{container_history_oid} | Read the CJSON stored in one container history entry
[**getSfvbElement**](SfvbApi.md#getSfvbElement) | **GET** /sfvb/elements/{element_type} | Configuration schema and field card for one element type
[**getSfvbFileContent**](SfvbApi.md#getSfvbFileContent) | **GET** /sfvb/storefronts/{storefront_oid}/files/content | Read a storefront file
[**getSfvbFileUploadUrl**](SfvbApi.md#getSfvbFileUploadUrl) | **GET** /sfvb/storefronts/{storefront_oid}/files/upload_url/{extension} | Get a URL to upload a binary asset to
[**getSfvbLibraryEntry**](SfvbApi.md#getSfvbLibraryEntry) | **GET** /sfvb/storefronts/{storefront_oid}/library/{library_oid} | Read one library entry including its CJSON
[**getSfvbMenu**](SfvbApi.md#getSfvbMenu) | **GET** /sfvb/storefronts/{storefront_oid}/menus/{code} | Read one store menu and its entries
[**getSfvbMenus**](SfvbApi.md#getSfvbMenus) | **GET** /sfvb/storefronts/{storefront_oid}/menus | List a storefront&#39;s store menus
[**getSfvbPage**](SfvbApi.md#getSfvbPage) | **GET** /sfvb/storefronts/{storefront_oid}/pages | Read a page&#39;s attributes and images
[**getSfvbPreviewUrl**](SfvbApi.md#getSfvbPreviewUrl) | **GET** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id}/url | URL that renders a preview session
[**getSfvbSiteAttributes**](SfvbApi.md#getSfvbSiteAttributes) | **GET** /sfvb/storefronts/{storefront_oid}/attributes | Read a storefront&#39;s site attributes
[**getSfvbTheme**](SfvbApi.md#getSfvbTheme) | **GET** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid} | Get a theme
[**getSfvbThemeAttributes**](SfvbApi.md#getSfvbThemeAttributes) | **GET** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes | Read a theme&#39;s colors, fonts and settings
[**getSfvbThemeJob**](SfvbApi.md#getSfvbThemeJob) | **GET** /sfvb/storefronts/{storefront_oid}/theme_jobs/{job_id} | Status of an asynchronous theme job
[**getSfvbVersion**](SfvbApi.md#getSfvbVersion) | **GET** /sfvb/version | Compiler version for this merchant
[**getSfvbWhoami**](SfvbApi.md#getSfvbWhoami) | **GET** /sfvb/whoami | Who this token is
[**installSfvbLibraryEntry**](SfvbApi.md#installSfvbLibraryEntry) | **POST** /sfvb/storefronts/{storefront_oid}/library/{library_oid}/install | Install a library entry into a storefront
[**listSfvbContainerVersions**](SfvbApi.md#listSfvbContainerVersions) | **GET** /sfvb/storefronts/{storefront_oid}/container_versions | Version history for a container stored outside the file system
[**listSfvbElements**](SfvbApi.md#listSfvbElements) | **GET** /sfvb/elements | List every SFVB element type
[**listSfvbFileVersions**](SfvbApi.md#listSfvbFileVersions) | **GET** /sfvb/storefronts/{storefront_oid}/files/versions | Version history for a storefront file
[**listSfvbFiles**](SfvbApi.md#listSfvbFiles) | **GET** /sfvb/storefronts/{storefront_oid}/files | List a storefront directory
[**listSfvbStorefronts**](SfvbApi.md#listSfvbStorefronts) | **GET** /sfvb/storefronts | List storefronts
[**listSfvbThemes**](SfvbApi.md#listSfvbThemes) | **GET** /sfvb/storefronts/{storefront_oid}/themes | List themes for a storefront
[**listSfvbUpsellOffers**](SfvbApi.md#listSfvbUpsellOffers) | **GET** /sfvb/storefronts/{storefront_oid}/upsell_offers | List upsell offers
[**putSfvbContainer**](SfvbApi.md#putSfvbContainer) | **PUT** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id} | Write a container stored outside the file system
[**putSfvbFileContent**](SfvbApi.md#putSfvbFileContent) | **PUT** /sfvb/storefronts/{storefront_oid}/files/content | Write a storefront file
[**putSfvbMenu**](SfvbApi.md#putSfvbMenu) | **PUT** /sfvb/storefronts/{storefront_oid}/menus/{code} | Replace a store menu&#39;s entries
[**putSfvbPageAttributes**](SfvbApi.md#putSfvbPageAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/pages/attributes | Change a page&#39;s attributes
[**putSfvbPageMultimedia**](SfvbApi.md#putSfvbPageMultimedia) | **PUT** /sfvb/storefronts/{storefront_oid}/pages/multimedia | Attach an image to a page
[**putSfvbPreviewSession**](SfvbApi.md#putSfvbPreviewSession) | **PUT** /sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id} | Push containers into a preview session
[**putSfvbSiteAttributes**](SfvbApi.md#putSfvbSiteAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/attributes | Change a storefront&#39;s site attributes
[**putSfvbThemeAttributes**](SfvbApi.md#putSfvbThemeAttributes) | **PUT** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes | Change a theme&#39;s colors, fonts and settings
[**renderSfvbWidgets**](SfvbApi.md#renderSfvbWidgets) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/render | Render a CJSON node to HTML
[**reserveSfvbWidgetIds**](SfvbApi.md#reserveSfvbWidgetIds) | **POST** /sfvb/storefronts/{storefront_oid}/widget_ids | Reserve a block of widget ids
[**revertSfvbContainer**](SfvbApi.md#revertSfvbContainer) | **POST** /sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id}/revert | Revert a container stored outside the file system
[**revertSfvbFile**](SfvbApi.md#revertSfvbFile) | **POST** /sfvb/storefronts/{storefront_oid}/files/revert | Revert a storefront file to an earlier version
[**searchSfvbFiles**](SfvbApi.md#searchSfvbFiles) | **POST** /sfvb/storefronts/{storefront_oid}/files/search | Search storefront files
[**searchSfvbLibrary**](SfvbApi.md#searchSfvbLibrary) | **GET** /sfvb/storefronts/{storefront_oid}/library | Search the element library
[**uploadSfvbFile**](SfvbApi.md#uploadSfvbFile) | **POST** /sfvb/storefronts/{storefront_oid}/files/upload | Store a binary asset that was already uploaded
[**validateSfvbCjson**](SfvbApi.md#validateSfvbCjson) | **POST** /sfvb/cjson/validate | Validate CJSON
[**validateSfvbVelocity**](SfvbApi.md#validateSfvbVelocity) | **POST** /sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/velocity/validate | Validate a Velocity template against a theme



## compileSfvbCjson

> SfvbCompileResponse compileSfvbCjson(compile_request)

Compile CJSON to Velocity

Compiles a container document to Velocity without storing anything.  Supply theme_oid to compile with the theme&#39;s inherit groups applied; omit it to compile standalone. 


### Example

<!-- UC_START_EXAMPLE compileSfvbCjson -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let compile_request = new UltraCartRestApiV2.SfvbCompileRequest(); // SfvbCompileRequest | CJSON to compile
apiInstance.compileSfvbCjson(compile_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE compileSfvbCjson -->

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

<!-- UC_START_EXAMPLE createSfvbPreviewAccess -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'preview_access': new UltraCartRestApiV2.SfvbPreviewAccessRequest() // SfvbPreviewAccessRequest | What the browser should see
};
apiInstance.createSfvbPreviewAccess(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE createSfvbPreviewAccess -->

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

<!-- UC_START_EXAMPLE createSfvbPreviewSession -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.createSfvbPreviewSession(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE createSfvbPreviewSession -->

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

<!-- UC_START_EXAMPLE deleteSfvbFile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let If_Match = "If_Match_example"; // String | Content hash of the file being deleted.  Required; 428 when absent, 412 when stale.
let opts = {
  'path': "path_example" // String | 
};
apiInstance.deleteSfvbFile(storefront_oid, If_Match, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteSfvbFile -->

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


## deleteSfvbPageMultimedia

> SfvbPageResponse deleteSfvbPageMultimedia(storefront_oid, path, opts)

Detach an image from a page

Name exactly one of code or default.  Removes the page&#39;s copy of the image; the source file in the page folder is left alone.  Always needs sfvb_publish. 


### Example

<!-- UC_START_EXAMPLE deleteSfvbPageMultimedia -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let path = "path_example"; // String | Page path, for example /catalog/dispensers/
let opts = {
  'code': "code_example", // String | Image code to detach
  '_default': true // Boolean | True to detach the default image
};
apiInstance.deleteSfvbPageMultimedia(storefront_oid, path, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteSfvbPageMultimedia -->

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

<!-- UC_START_EXAMPLE deleteSfvbPreviewSession -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let preview_session_id = "preview_session_id_example"; // String | 
apiInstance.deleteSfvbPreviewSession(storefront_oid, preview_session_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteSfvbPreviewSession -->

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

<!-- UC_START_EXAMPLE downloadSfvbFile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'path': "path_example" // String | 
};
apiInstance.downloadSfvbFile(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE downloadSfvbFile -->

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


## duplicateSfvbTheme

> SfvbThemeJobResponse duplicateSfvbTheme(storefront_oid, theme_oid, duplicate_request)

Duplicate a theme

Copies a theme into a new one and returns a job handle to poll.  Asynchronous, because copying a theme copies every file in it.  Needs sfvb_write rather than sfvb_publish, because the job explicitly does not activate what it creates, so the worst outcome of a mistaken call is a spare theme.  This is how you get somewhere safe to work - duplicate, edit the copy with an ordinary write scope, and let a human promote it. 


### Example

<!-- UC_START_EXAMPLE duplicateSfvbTheme -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let theme_oid = 56; // Number | 
let duplicate_request = new UltraCartRestApiV2.SfvbThemeDuplicateRequest(); // SfvbThemeDuplicateRequest | Theme duplication details
apiInstance.duplicateSfvbTheme(storefront_oid, theme_oid, duplicate_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE duplicateSfvbTheme -->

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


## getSfvbCjsonUsedElements

> SfvbElementsResponse getSfvbCjsonUsedElements(compile_request)

Element types used by a container


### Example

<!-- UC_START_EXAMPLE getSfvbCjsonUsedElements -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let compile_request = new UltraCartRestApiV2.SfvbCompileRequest(); // SfvbCompileRequest | CJSON to inspect
apiInstance.getSfvbCjsonUsedElements(compile_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbCjsonUsedElements -->

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

<!-- UC_START_EXAMPLE getSfvbContainer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let owner_type = "owner_type_example"; // String | 
let owner_object_id = "owner_object_id_example"; // String | 
let opts = {
  'container_name': "container_name_example" // String | 
};
apiInstance.getSfvbContainer(storefront_oid, owner_type, owner_object_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbContainer -->

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

<!-- UC_START_EXAMPLE getSfvbContainerVersion -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let container_history_oid = 56; // Number | 
let opts = {
  'owner_type': "owner_type_example", // String | 
  'owner_object_id': "owner_object_id_example", // String | 
  'container_name': "container_name_example" // String | 
};
apiInstance.getSfvbContainerVersion(storefront_oid, container_history_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbContainerVersion -->

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

<!-- UC_START_EXAMPLE getSfvbElement -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let element_type = "element_type_example"; // String | 
apiInstance.getSfvbElement(element_type, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbElement -->

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


## getSfvbFileContent

> SfvbFileContentResponse getSfvbFileContent(storefront_oid, opts)

Read a storefront file

Returns the current content, or an earlier version when version is supplied.  Send the body&#39;s hash_sha256 back as If-Match when writing.  The ETag header carries the same hash, but a compressing proxy may append a suffix such as -gzip to it, so prefer the body value. 


### Example

<!-- UC_START_EXAMPLE getSfvbFileContent -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'path': "path_example", // String | 
  'version': 56 // Number | 
};
apiInstance.getSfvbFileContent(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbFileContent -->

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

<!-- UC_START_EXAMPLE getSfvbFileUploadUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let extension = "extension_example"; // String | 
apiInstance.getSfvbFileUploadUrl(storefront_oid, extension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbFileUploadUrl -->

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


## getSfvbLibraryEntry

> SfvbLibraryEntry getSfvbLibraryEntry(storefront_oid, library_oid)

Read one library entry including its CJSON

Returns the fragment as authored.  If it references images or other storefront files those paths will not resolve on this storefront until the entry is installed, so use install rather than this when the intent is to place the fragment. 


### Example

<!-- UC_START_EXAMPLE getSfvbLibraryEntry -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let library_oid = 56; // Number | 
apiInstance.getSfvbLibraryEntry(storefront_oid, library_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbLibraryEntry -->

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

<!-- UC_START_EXAMPLE getSfvbMenu -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let code = "code_example"; // String | Menu code, matched without regard to case
apiInstance.getSfvbMenu(storefront_oid, code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbMenu -->

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

<!-- UC_START_EXAMPLE getSfvbMenus -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getSfvbMenus(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbMenus -->

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

<!-- UC_START_EXAMPLE getSfvbPage -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let path = "path_example"; // String | Page path, for example /catalog/dispensers/
apiInstance.getSfvbPage(storefront_oid, path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbPage -->

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


## getSfvbPreviewUrl

> SfvbPreviewUrlResponse getSfvbPreviewUrl(storefront_oid, preview_session_id, opts)

URL that renders a preview session

Refuses a session that does not exist, so a URL you receive is for a session that was really there.  expires_in_seconds is the time actually remaining, not the configured lifetime.  Needs a token that resolves to a user, because a preview session belongs to the person who created it. 


### Example

<!-- UC_START_EXAMPLE getSfvbPreviewUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let preview_session_id = "preview_session_id_example"; // String | 
let opts = {
  'path': "path_example" // String | 
};
apiInstance.getSfvbPreviewUrl(storefront_oid, preview_session_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbPreviewUrl -->

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

<!-- UC_START_EXAMPLE getSfvbSiteAttributes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.getSfvbSiteAttributes(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbSiteAttributes -->

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

<!-- UC_START_EXAMPLE getSfvbTheme -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let theme_oid = 56; // Number | 
apiInstance.getSfvbTheme(storefront_oid, theme_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbTheme -->

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

<!-- UC_START_EXAMPLE getSfvbThemeAttributes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let theme_oid = 56; // Number | 
apiInstance.getSfvbThemeAttributes(storefront_oid, theme_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbThemeAttributes -->

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

<!-- UC_START_EXAMPLE getSfvbThemeJob -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let job_id = 56; // Number | 
apiInstance.getSfvbThemeJob(storefront_oid, job_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbThemeJob -->

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

<!-- UC_START_EXAMPLE getSfvbVersion -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getSfvbVersion((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbVersion -->

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

<!-- UC_START_EXAMPLE getSfvbWhoami -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getSfvbWhoami((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSfvbWhoami -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbWhoamiResponse**](SfvbWhoamiResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## installSfvbLibraryEntry

> SfvbLibraryEntry installSfvbLibraryEntry(storefront_oid, library_oid)

Install a library entry into a storefront

Copies the fragment&#39;s referenced assets into the storefront file system and returns the CJSON with its paths resolved, ready to place.  This writes, which is why it is a POST rather than the GET the internal admin endpoint uses.  It also requires sfvb_publish, because the assets land in the shared storefront file system, which is served to shoppers regardless of which theme is active, so no amount of working inside a duplicate theme isolates them. 


### Example

<!-- UC_START_EXAMPLE installSfvbLibraryEntry -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let library_oid = 56; // Number | 
apiInstance.installSfvbLibraryEntry(storefront_oid, library_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE installSfvbLibraryEntry -->

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


## listSfvbContainerVersions

> SfvbContainerVersionsResponse listSfvbContainerVersions(storefront_oid, opts)

Version history for a container stored outside the file system

Addressed the same way as the container itself, so owner_type also says how owner_object_id is read and itemid lists the history of the item container that merchant item id names. 


### Example

<!-- UC_START_EXAMPLE listSfvbContainerVersions -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'owner_type': "owner_type_example", // String | 
  'owner_object_id': "owner_object_id_example", // String | 
  'container_name': "container_name_example" // String | 
};
apiInstance.listSfvbContainerVersions(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbContainerVersions -->

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

<!-- UC_START_EXAMPLE listSfvbElements -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.listSfvbElements((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbElements -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbElementsResponse**](SfvbElementsResponse.md)

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

<!-- UC_START_EXAMPLE listSfvbFileVersions -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'path': "path_example" // String | 
};
apiInstance.listSfvbFileVersions(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbFileVersions -->

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

<!-- UC_START_EXAMPLE listSfvbFiles -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'path': "path_example", // String | 
  'storefront_fs_directory_oid': 56, // Number | 
  'theme_oid': 56, // Number | 
  'max_entries': 56 // Number | 
};
apiInstance.listSfvbFiles(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbFiles -->

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


## listSfvbStorefronts

> SfvbStorefrontsResponse listSfvbStorefronts()

List storefronts


### Example

<!-- UC_START_EXAMPLE listSfvbStorefronts -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.listSfvbStorefronts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbStorefronts -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**SfvbStorefrontsResponse**](SfvbStorefrontsResponse.md)

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

<!-- UC_START_EXAMPLE listSfvbThemes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.listSfvbThemes(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbThemes -->

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

<!-- UC_START_EXAMPLE listSfvbUpsellOffers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
apiInstance.listSfvbUpsellOffers(storefront_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE listSfvbUpsellOffers -->

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

<!-- UC_START_EXAMPLE putSfvbContainer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let owner_type = "owner_type_example"; // String | 
let owner_object_id = "owner_object_id_example"; // String | 
let If_Match = "If_Match_example"; // String | CJSON hash from the last read.  Required; 428 when absent, 412 when stale.
let container_write_request = new UltraCartRestApiV2.SfvbContainerWriteRequest(); // SfvbContainerWriteRequest | Container CJSON to write
let opts = {
  'container_name': "container_name_example" // String | 
};
apiInstance.putSfvbContainer(storefront_oid, owner_type, owner_object_id, If_Match, container_write_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbContainer -->

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


## putSfvbFileContent

> SfvbFileWriteResponse putSfvbFileContent(storefront_oid, If_Match, file_write_request, opts)

Write a storefront file

Runs the template sandbox, Velocity validation and the internationalization check, records a version, and compiles the sibling .vm when the file is a .cjson under a theme.  Send If-Match with the hash from the last read to avoid clobbering a concurrent change.  Writing into the active theme requires sfvb_publish. 


### Example

<!-- UC_START_EXAMPLE putSfvbFileContent -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let If_Match = "If_Match_example"; // String | Content hash from the last read.  Required; 428 when absent, 412 when stale.
let file_write_request = new UltraCartRestApiV2.SfvbFileWriteRequest(); // SfvbFileWriteRequest | File content to write
let opts = {
  'path': "path_example" // String | 
};
apiInstance.putSfvbFileContent(storefront_oid, If_Match, file_write_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbFileContent -->

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


## putSfvbMenu

> SfvbMenu putSfvbMenu(storefront_oid, code, menu_write_request, opts)

Replace a store menu&#39;s entries

A whole menu replace, not a merge - what you send is what the menu holds afterwards, so read it, change the tree and send it back.  Omitting items changes only the title; sending an empty array empties the menu.  Writing a code that does not exist creates it.  Every entry is checked before any of it is written, including that a merchant_item_id and a page_path actually resolve, so a tree with one bad entry changes nothing.  Always needs sfvb_publish, because a menu is shared by every theme and there is no dormant copy to change instead. 


### Example

<!-- UC_START_EXAMPLE putSfvbMenu -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let code = "code_example"; // String | Menu code, matched without regard to case
let menu_write_request = new UltraCartRestApiV2.SfvbMenuWriteRequest(); // SfvbMenuWriteRequest | The menu's replacement contents
let opts = {
  'If_Match': "If_Match_example" // String | Content hash from the last read.  Required when the menu already exists; 428 when absent, 412 when stale.
};
apiInstance.putSfvbMenu(storefront_oid, code, menu_write_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbMenu -->

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

<!-- UC_START_EXAMPLE putSfvbPageAttributes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let path = "path_example"; // String | Page path, for example /catalog/dispensers/
let page_attribute_update_request = new UltraCartRestApiV2.SfvbPageAttributeUpdateRequest(); // SfvbPageAttributeUpdateRequest | Attributes to change
apiInstance.putSfvbPageAttributes(storefront_oid, path, page_attribute_update_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbPageAttributes -->

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

<!-- UC_START_EXAMPLE putSfvbPageMultimedia -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let path = "path_example"; // String | Page path, for example /catalog/dispensers/
let page_multimedia_request = new UltraCartRestApiV2.SfvbPageMultimediaRequest(); // SfvbPageMultimediaRequest | Image to attach
apiInstance.putSfvbPageMultimedia(storefront_oid, path, page_multimedia_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbPageMultimedia -->

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


## putSfvbPreviewSession

> SfvbPreviewSessionResponse putSfvbPreviewSession(storefront_oid, preview_session_id, preview_session, opts)

Push containers into a preview session

Stores compiled containers against a session created by createSfvbPreviewSession.  Replaces whatever the session held.  The session must exist - this does not create one, so a deleted, expired or never issued id is a 404 rather than a new session.  Nothing durable is written.  Requires a token that resolves to a user, so use the device authorization flow. 


### Example

<!-- UC_START_EXAMPLE putSfvbPreviewSession -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let preview_session_id = "preview_session_id_example"; // String | 
let preview_session = new UltraCartRestApiV2.SfvbPreviewSessionRequest(); // SfvbPreviewSessionRequest | Containers to stage in the preview session
let opts = {
  'theme_oid': 56 // Number | 
};
apiInstance.putSfvbPreviewSession(storefront_oid, preview_session_id, preview_session, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbPreviewSession -->

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

<!-- UC_START_EXAMPLE putSfvbSiteAttributes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let site_attribute_update_request = new UltraCartRestApiV2.SfvbSiteAttributeUpdateRequest(); // SfvbSiteAttributeUpdateRequest | Attributes to change
apiInstance.putSfvbSiteAttributes(storefront_oid, site_attribute_update_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbSiteAttributes -->

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

<!-- UC_START_EXAMPLE putSfvbThemeAttributes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let theme_oid = 56; // Number | 
let attribute_update_request = new UltraCartRestApiV2.SfvbThemeAttributeUpdateRequest(); // SfvbThemeAttributeUpdateRequest | Slots to change
apiInstance.putSfvbThemeAttributes(storefront_oid, theme_oid, attribute_update_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE putSfvbThemeAttributes -->

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


## renderSfvbWidgets

> SfvbRenderResponse renderSfvbWidgets(storefront_oid, theme_oid, render_request)

Render a CJSON node to HTML

Renders one node in the context of a theme and a page.  Unlike compile this is stateful.  Rendering resolves merchant data, so an element bound to an item renders wrongly, and silently, without a context item id.  One node per call, so a node that fails to render fails on its own rather than taking a batch with it, and a failure says why. 


### Example

<!-- UC_START_EXAMPLE renderSfvbWidgets -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let theme_oid = 56; // Number | 
let render_request = new UltraCartRestApiV2.SfvbRenderRequest(); // SfvbRenderRequest | Widgets to render
apiInstance.renderSfvbWidgets(storefront_oid, theme_oid, render_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE renderSfvbWidgets -->

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

<!-- UC_START_EXAMPLE reserveSfvbWidgetIds -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'count': 56 // Number | 
};
apiInstance.reserveSfvbWidgetIds(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE reserveSfvbWidgetIds -->

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

<!-- UC_START_EXAMPLE revertSfvbContainer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let owner_type = "owner_type_example"; // String | 
let owner_object_id = "owner_object_id_example"; // String | 
let If_Match = "If_Match_example"; // String | CJSON hash of the container being reverted.  Required; 428 when absent, 412 when stale.
let container_revert_request = new UltraCartRestApiV2.SfvbContainerRevertRequest(); // SfvbContainerRevertRequest | Version to revert the container to
let opts = {
  'container_name': "container_name_example" // String | 
};
apiInstance.revertSfvbContainer(storefront_oid, owner_type, owner_object_id, If_Match, container_revert_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE revertSfvbContainer -->

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

<!-- UC_START_EXAMPLE revertSfvbFile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let If_Match = "If_Match_example"; // String | Content hash of the file being reverted.  Required; 428 when absent, 412 when stale.
let file_revert_request = new UltraCartRestApiV2.SfvbFileRevertRequest(); // SfvbFileRevertRequest | Version to revert the file to
apiInstance.revertSfvbFile(storefront_oid, If_Match, file_revert_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE revertSfvbFile -->

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

<!-- UC_START_EXAMPLE searchSfvbFiles -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let search_request = new UltraCartRestApiV2.SfvbFileSearchRequest(); // SfvbFileSearchRequest | File search
apiInstance.searchSfvbFiles(storefront_oid, search_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchSfvbFiles -->

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

<!-- UC_START_EXAMPLE searchSfvbLibrary -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let opts = {
  'segment': "segment_example", // String | 
  'search': "search_example", // String | 
  'page_number': 56, // Number | 
  'results_per_page': 56 // Number | 
};
apiInstance.searchSfvbLibrary(storefront_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchSfvbLibrary -->

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


## uploadSfvbFile

> SfvbFileWriteResponse uploadSfvbFile(storefront_oid, file_upload_request, opts)

Store a binary asset that was already uploaded

The second half of the two step upload.  The bytes are fetched from the key, checked against the extension they claim to be, and written exactly as a text write is - so the same If-Match precondition, the same read only refusal and the same publish gate apply.  An SVG is sanitized before it is stored.  Writing outside /themes/ requires sfvb_publish, because anything served off the storefront root is live by definition. 


### Example

<!-- UC_START_EXAMPLE uploadSfvbFile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let file_upload_request = new UltraCartRestApiV2.SfvbFileUploadRequest(); // SfvbFileUploadRequest | Where to store the uploaded bytes
let opts = {
  'If_Match': "If_Match_example" // String | Content hash from the last read.  Required when the file already exists; 428 when absent, 412 when stale.
};
apiInstance.uploadSfvbFile(storefront_oid, file_upload_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE uploadSfvbFile -->

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

<!-- UC_START_EXAMPLE validateSfvbCjson -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let validate_request = new UltraCartRestApiV2.SfvbValidateRequest(); // SfvbValidateRequest | CJSON to validate
apiInstance.validateSfvbCjson(validate_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE validateSfvbCjson -->

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

<!-- UC_START_EXAMPLE validateSfvbVelocity -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SfvbApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let storefront_oid = 56; // Number | 
let theme_oid = 56; // Number | 
let velocity_validate_request = new UltraCartRestApiV2.SfvbVelocityValidateRequest(); // SfvbVelocityValidateRequest | Velocity template to validate
apiInstance.validateSfvbVelocity(storefront_oid, theme_oid, velocity_validate_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE validateSfvbVelocity -->

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

