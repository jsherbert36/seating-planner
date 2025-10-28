package com.seatingplanner.api;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("application/json");
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Jetty!");
        response.put("timestamp", String.valueOf(System.currentTimeMillis()));
        
        objectMapper.writeValue(resp.getWriter(), response);
    }
}