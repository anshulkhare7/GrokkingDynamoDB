## Dynamo DB setup

Set Env Variable `AWS_SDK_LOAD_CONFIG` to `true` so that the region is loaded from `~/.aws/config`

### Local Dynamo DB

Using Docker

`docker pull amazon/dynamodb-local`
`docker run -p 8042:8000 amazon/dynamodb-local`

Using Docker compose
`docker-compose -f docker-compose-dynamodb.yaml up -d` 

If you've setup the AWS keys, regions etc. using `aws configure`, then you can work with remote dynamodb by omitting the `--endpoint-url` option.

### List tables
`aws dynamodb --endpoint-url http://localhost:8042 list-tables`

### Create table
`aws dynamodb --endpoint-url http://localhost:8042 create-table --cli-input-json file://dev_data.json`

### Get record
`aws dynamodb get-item --endpoint-url http://localhost:8042 --table-name dev_data --key '{"emailId": {"S": "abc@xyz.com"}}'`

### Create record
`aws dynamodb put-item --endpoint-url http://localhost:8042 --table-name dev_data --item '{"emailId": {"S": "abc@xyz.com"}}'`
