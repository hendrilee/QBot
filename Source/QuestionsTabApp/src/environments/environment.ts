export const environment = {
    production: false,
    apiBaseUrl: "https://enovade-qbot.azurewebsites.net/api/Request/",
    selfUrl: "https://enovade-qbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "f3b0b74e-b987-4e66-928a-6f077de4c833",
        clientId: "d671d879-8e2d-441b-9b3e-286a1a6a84c3",
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
    gid: "",
    cname: ""
};
