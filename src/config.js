export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "scalerep-app-upload"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://whtu6lyby0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_quImiy094",
    APP_CLIENT_ID: "4u7eabppfege62jk52f3u48jql",
    IDENTITY_POOL_ID: "us-east-1:84208557-ea58-4f6e-a001-f407a7d3da46"
  }
};
