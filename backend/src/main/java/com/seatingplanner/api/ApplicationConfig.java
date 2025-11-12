package com.seatingplanner.api;

import org.glassfish.jersey.server.ResourceConfig;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

/**
 * Jersey application configuration.
 * Registers resource classes and features for the REST API.
 */
@OpenAPIDefinition(info = @Info(title = "Seating Planner API", version = "1.0.0", description = "REST API for the seating planner application"))
public class ApplicationConfig extends ResourceConfig {

    public ApplicationConfig() {
        // Register resource classes
        register(HelloServlet.class);

        // Register Jackson provider for JSON serialization
        register(org.glassfish.jersey.jackson.JacksonFeature.class);

        // Register Swagger OpenAPI resource to serve /openapi.json
        register(io.swagger.v3.jaxrs2.integration.resources.OpenApiResource.class);
    }
}
