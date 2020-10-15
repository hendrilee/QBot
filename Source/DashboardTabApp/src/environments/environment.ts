export const environment = {
    production: false,
    apiBaseUrl: "https://enovade-qbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "c116d150-bd23-498d-a739-4d3d4c74c539",
        clientId: "f3b0b74e-b987-4e66-928a-6f077de4c833",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
