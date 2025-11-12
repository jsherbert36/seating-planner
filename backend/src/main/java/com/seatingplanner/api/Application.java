package com.seatingplanner.api;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.ee10.servlet.ServletContextHandler;
import org.eclipse.jetty.ee10.servlet.ServletHolder;
import org.eclipse.jetty.ee10.servlet.FilterHolder;
import org.glassfish.jersey.servlet.ServletContainer;
import java.util.EnumSet;
import jakarta.servlet.DispatcherType;

public class Application {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);

        // Add CORS filter (register with a FilterHolder and DispatcherTypes)
        FilterHolder corsFilter = new FilterHolder(new CorsFilter());
        context.addFilter(corsFilter, "/*", EnumSet.of(DispatcherType.REQUEST, DispatcherType.ASYNC));

        // Register Jersey servlet for JAX-RS
        ServletHolder jerseyServlet = new ServletHolder(new ServletContainer(new ApplicationConfig()));
        jerseyServlet.setInitParameter("jersey.config.server.provider.packages", "com.seatingplanner.api");
        context.addServlet(jerseyServlet, "/api/*");

        server.start();
        System.out.println("Server started on http://localhost:8080");
        server.join();
    }
}