package com.example.trainticketsales.controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1")
public class TicketsRestController {

    @GetMapping("/tickets")
    public String getTickets() {
        return "Tickets";
    }

    @GetMapping("/ticket")
    public String getTicket() {
        return "Ticket";
    }

    @GetMapping("/trains")
    public String searchTrains(
            @RequestParam("source") String source,
            @RequestParam("destination") String destination,
            @RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        return "Search trains";
    }

    @PostMapping("bookings")
    public String bookTicket() {
        return "Bookings";
    }

    @DeleteMapping("bookings/{bookingId}")
    public String deleteTicket(@PathVariable String bookingId) {
        return "Delete";
    }

    @GetMapping("bookings")
    public String getBookings() {
        return "Bookings";
    }

    @GetMapping("bookings/{bookingId}")
    public String getBooking(@PathVariable String bookingId) {
        return "Booking";
    }
}
