# Serverless-for-SSM
This codebase will help you to configure SSM parameters into serverless. This has been because right now, we are using circle-ci to pass environment variables directly. Now, we can directly fetch variables from SSM into circle-ci. 
**Steps**
1. creating a fresh serverless project 
run -> sls create --template aws-nodejs --path project-name
run -> cd project-name

2. creating SSM parameter through terminal (you can also create SSM through AWS console directly)
run -> aws ssm put-parameter --name my-secret-string --value TOPsecretData --type String

3. Also we can retrieve our recently uploaded parameter with this AWS cli command (you can check the above created parameter on AWS console)
run -> aws ssm get-parameter --name my-secret-string

4. Edit serverless.yml and handler.js according to codebase on this repository

5. run -> sls deploy.
