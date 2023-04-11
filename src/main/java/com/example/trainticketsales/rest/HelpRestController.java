package com.example.trainticketsales.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelpRestController {

    @GetMapping("/help")
    public String getHelp() {
        return "Help";
    }
}
