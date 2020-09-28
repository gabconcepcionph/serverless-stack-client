export default {
    s3: {
        REGION: "ap-southeast-1",
        BUCKET: "notes-app-uploads-gab"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://fe1dosmdta.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_i2CAFSXOj",
        APP_CLIENT_ID: "5i049u1nt2a176poed31pgvr5k",
        IDENTITY_POOL_ID: "us-east-1:53316efa-b053-4a5d-bf14-590575c444d4"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HUfPnLz01NrRINEeYfEEycuL2jmVPcbApT4M3nk5sXhoqYyXdKg7sV3PF6Zs4erhDMN2MUK8pryqtnrnFbKVp9B0084suExky",
}