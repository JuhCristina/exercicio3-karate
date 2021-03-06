function setup() {
    var config = {
        baseUrl: "https://petstore.swagger.io/v2"
    }

    karate.configure("headers", {
        operador: "Juliana",
        framework: "Karate"
    })

    karate.configure("readTimeout", 40000);
    
    var ambiente = karate.env;

    if(ambiente == "dev") {
        karate.configure("logPrettyRequest", true);
        karate.configure("logPrettyResponse", true);
    
    }

    return config;

}