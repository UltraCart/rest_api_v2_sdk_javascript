# UltraCartRestApiV2.UserApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteGroup**](UserApi.md#deleteGroup) | **DELETE** /user/groups/{group_oid} | Delete a group
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/users/{user_id} | Delete a user
[**getGroup**](UserApi.md#getGroup) | **GET** /user/groups/{group_oid} | Retrieve a group
[**getGroups**](UserApi.md#getGroups) | **GET** /user/groups | Get groups
[**getUser**](UserApi.md#getUser) | **GET** /user/users/{user_id} | Retrieve a user
[**getUserLogins**](UserApi.md#getUserLogins) | **GET** /user/users/{user_id}/logins | Retrieve a user&#39;s login history
[**getUsers**](UserApi.md#getUsers) | **GET** /user/users | Get users
[**insertGroup**](UserApi.md#insertGroup) | **POST** /user/groups | Insert a group
[**insertUser**](UserApi.md#insertUser) | **POST** /user/users | Insert a user
[**updateGroup**](UserApi.md#updateGroup) | **PUT** /user/groups/{group_oid} | Update a group
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/users/{user_id} | Update a user



## deleteGroup

> deleteGroup(group_oid)

Delete a group

Delete a group on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_oid** | **Number**| The group_oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUser

> deleteUser(user_id)

Delete a user

Delete a user on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**| The user_id to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroup

> getGroup(group_oid)

Retrieve a group

Retrieves a single group using the specified group id. 


### Example

```javascript

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_oid** | **Number**| The group id to retrieve. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroups

> GroupsResponse getGroups()

Get groups


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**GroupsResponse**](GroupsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> UserResponse getUser(user_id)

Retrieve a user

Retrieves a single user using the specified user id. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**| The user id to retrieve. | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserLogins

> UserLoginsResponse getUserLogins(user_id)

Retrieve a user&#39;s login history

Retrieves logins for a single user using the specified user id. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**| The user id to retrieve. | 

### Return type

[**UserLoginsResponse**](UserLoginsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> UsersResponse getUsers()

Get users


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**UsersResponse**](UsersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertGroup

> GroupResponse insertGroup(group)

Insert a group

Insert a group on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)| Group to insert | 

### Return type

[**GroupResponse**](GroupResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertUser

> UserResponse insertUser(user)

Insert a user

Insert a user on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User to insert | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateGroup

> GroupResponse updateGroup(group_oid, group)

Update a group

Update a group on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_oid** | **Number**| The group_oid to update. | 
 **group** | [**Group**](Group.md)| Group to update | 

### Return type

[**GroupResponse**](GroupResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateUser

> UserResponse updateUser(user_id, user)

Update a user

Update a user on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**| The user_id to update. | 
 **user** | [**User**](User.md)| User to update | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

