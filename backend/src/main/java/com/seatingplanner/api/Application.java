package com.seatingplanner.api;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

public class Application {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);

        // Add CORS filter
        context.addFilter(CorsFilter.class, "/*", null);

        // Add your servlets
        context.addServlet(new ServletHolder(new HelloServlet()), "/api/hello");
        
        server.start();
        System.out.println("Server started on http://localhost:8080");
        server.join();
    }
}