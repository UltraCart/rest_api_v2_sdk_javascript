# UltraCartRestApiV2.Experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_id** | **String** | Contained ID where the experiment element was located | [optional] 
**duration_days** | **Number** | Duration in days | [optional] 
**end_dts** | **String** | End date/time | [optional] 
**equal_weighting** | **Boolean** | Whether or not traffic is equally weighted or shifts over time during the experiment | [optional] 
**experiment_type** | **String** | The type of experiment | [optional] 
**id** | **String** | Experiment id | [optional] 
**name** | **String** | Experiment name | [optional] 
**notes** | **String** | Notes about the experiment | [optional] 
**objective** | **String** | Objective that is being optimized | [optional] 
**objective_parameter** | **String** | Objective parameter (such as event name) that is being optimized | [optional] 
**openai_current_iteration** | **Number** | The current iteration of the OpenAI related experiment | [optional] 
**openai_element_type** | **String** | The type of OpenAI element being experimented on | [optional] 
**openai_model** | **String** | The type of OpenAI model used | [optional] 
**openai_total_iterations** | **Number** | The total number of iterations to perform on the experiment | [optional] 
**optimization_type** | **String** | Type of optimization | [optional] 
**p_value** | **Number** | Statistics p-value for the experiment | [optional] 
**session_count** | **Number** | Total number of sessions in the experiment | [optional] 
**start_dts** | **String** | Start date/time | [optional] 
**status** | **String** | Status of the experiment | [optional] 
**storefront_experiment_oid** | **Number** | Storefront Experiment Oid | [optional] 
**storefront_oid** | **Number** | Storefront oid | [optional] 
**uri** | **String** | URI the experiment was started on | [optional] 
**variations** | [**[ExperimentVariation]**](ExperimentVariation.md) | Variations being tested in the experiment | [optional] 



## Enum: OpenaiElementTypeEnum


* `headline` (value: `"headline"`)

* `text` (value: `"text"`)

* `textblock` (value: `"textblock"`)





## Enum: StatusEnum


* `Running` (value: `"Running"`)

* `Ended` (value: `"Ended"`)

* `Deleted` (value: `"Deleted"`)




