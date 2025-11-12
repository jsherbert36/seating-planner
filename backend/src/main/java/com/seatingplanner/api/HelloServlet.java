package com.seatingplanner.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class HelloServlet {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get hello", description = "Returns a greeting message with timestamp", responses = {
            @ApiResponse(responseCode = "200", description = "Success", content = @Content(schema = @Schema(implementation = HelloResponse.class)))
    })
    public HelloResponse sayHello() {
        HelloResponse response = new HelloResponse();
        response.message = "Hello from Jetty + Jersey!";
        response.timestamp = System.currentTimeMillis();
        return response;
    }
}