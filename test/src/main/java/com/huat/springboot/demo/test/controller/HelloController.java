package com.huat.springboot.demo.test.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HelloController {
    @GetMapping("/")
    public String testEndpoint() {
        return "API Test Successful!";
    }
    
}
