package com.example.trainticketsales.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class EnrollmentRestController {

    @PostMapping("enrollment")
    public String enrollUser() {
        return "Enrollment";
    }

    @PostMapping("login")
    public String singIn() {
        return "Login";
    }

    @PostMapping("logout")
    public String logout() {
        return "Logout";
    }
}
