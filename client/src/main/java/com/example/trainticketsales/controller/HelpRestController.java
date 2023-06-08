package com.example.trainticketsales.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class HelpRestController {

    @GetMapping("/help")
    public String getHelp() {
        return "Help";
    }
}
