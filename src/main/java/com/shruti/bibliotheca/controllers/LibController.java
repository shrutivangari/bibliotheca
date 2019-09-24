package com.shruti.bibliotheca.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibController {


    @GetMapping("/test")
    public String getTest() {
        return "Test";
    }
}
