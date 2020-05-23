const yargs = require('yargs');
var AWS = require("aws-sdk");
var fs = require("fs");
/* If Env Variable `AWS_SDK_LOAD_CONFIG` is set to `true`, region is loaded from `~/.aws/config` */
// AWS.config.update({region: "ap-south-1"});
const tableName = "demo_data"

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

//https://www.fernandomc.com/posts/eight-examples-of-fetching-data-from-dynamodb-with-node/
async function logSingleItem(){
    try {
        var params = {
            Key: {
             "emailId": {"S": "abc@xyz.com"}
            }, 
            TableName: tableName
        };
        var result = await dynamodb.getItem(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}
async function logSingleItemDdbDc(){
    try {
        var params = {
            Key: {
             "emailId": "abc@xyz.com"             
            }, 
            TableName: tableName
        };
        var result = await ddbDocumentClient.get(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}
logSingleItemDdbDc()
// logSingleItem()