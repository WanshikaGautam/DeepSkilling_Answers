package spring_learn.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("START");

        String user = getUser(authHeader);

        String token = generateJwt(user);

        Map<String, String> map = new HashMap<>();

        // Actual JWT token return hoga
        map.put("token", token);

        LOGGER.debug("User: {}", user);

        LOGGER.info("END");

        return map;
    }

    private String getUser(String authHeader) {

        LOGGER.debug("Authorization Header: {}", authHeader);

        String encodedCredentials =
                authHeader.substring("Basic ".length());

        byte[] decodedBytes =
                java.util.Base64.getDecoder()
                        .decode(encodedCredentials);

        String credentials =
                new String(decodedBytes);

        String username =
                credentials.substring(
                        0,
                        credentials.indexOf(":")
                );

        LOGGER.debug("Username: {}", username);

        return username;
    }

    private String generateJwt(String user) {

        return Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(
                                System.currentTimeMillis() + 1200000
                        )
                )
                .signWith(
                        SignatureAlgorithm.HS256,
                        "secretkey"
                )
                .compact();
    }
}