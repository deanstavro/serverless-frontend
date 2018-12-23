const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "scalerep-app-upload-dev"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://s44m99t8g2.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Jf3pSJRys",
    APP_CLIENT_ID: "3i2297iemgalgpja8jsm7hhtv0",
    IDENTITY_POOL_ID: "us-east-1:727e9056-5213-4515-bb03-8278dd683e68"
  }
};

const prod = {
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

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};