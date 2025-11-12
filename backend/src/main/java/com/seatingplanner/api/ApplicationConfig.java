package com.seatingplanner.api;

import org.glassfish.jersey.server.ResourceConfig;

/**
 * Jersey application configuration.
 * Registers resource classes and features for the REST API.
 */
public class ApplicationConfig extends ResourceConfig {

    public ApplicationConfig() {
        // Register resource classes
        register(HelloServlet.class);

        // Register Jackson provider for JSON serialization
        register(org.glassfish.jersey.jackson.JacksonFeature.class);
    }
}
