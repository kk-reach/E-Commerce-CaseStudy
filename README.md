# E-Commerce-CaseStudy

Design Document of E-Commerce website
I will be uploading  word document for diagram


S3 Bucket(KK-MART) - I have created a Web Application using React and deployed it on AWS S3 bucket. This Web Application is calling two API’s 
1.	getProductInfo('https://s3y1m1jskh.execute-api.us-east-1.amazonaws.com/dev') 
To get product catalogue and display it on webpage.

2.	Create_order- 
To place order in DynamoDB database thru REST API
CloudFront- I used CloudFront to expose your S3 bucket as a CDN-backed web application to get improved performance, SSL/TLS Support and may other benefits.
Cognito User pool- I used for use creation and authentication. While creating user I am capturing address as well so that it can be used while delivering shipments.
API Gateway- I used API gateway to expose Lambda functions as a REST API and called these API’s thru web application.
Lambda- Created two Lambda function 
1.	Get product Info from mySQL database using lambda function.
2.	Create order in DynamoDB database using labda function
MySQL DB- created Product table to store product catalogue which can be displayed on web application.
DyanamoDB- created ORDER table to store orders with Order_id as partition key and user_id as a sort key.
