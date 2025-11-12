package com.seatingplanner.api;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Response for /api/hello endpoint")
public class HelloResponse {
    @Schema(description = "Hello message")
    public String message;

    @Schema(description = "Server time in milliseconds")
    public long timestamp;

    // Default constructor for deserialization
    public HelloResponse() {
    }

    public HelloResponse(String message, long timestamp) {
        this.message = message;
        this.timestamp = timestamp;
    }
}
