package com.example.trainticketsales.controller;

import com.example.trainticketsales.filters.SearchCriteria;
import com.example.trainticketsales.model.Train;
import com.example.trainticketsales.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
@RestController
@RequestMapping("/api/v1")
public class TrainController {

    private final TrainRepository trainRepository;

    @Autowired
    public TrainController(TrainRepository trainRepository) {
        this.trainRepository = trainRepository;
    }

    @PostMapping("/trains/search")
    public ResponseEntity<List<Train>> searchTrains(@RequestBody SearchCriteria searchCriteria) {
        String source = searchCriteria.getSource();
        String destination = searchCriteria.getDestination();
        LocalDate departureDate = searchCriteria.getDepartureDate();

        LocalDateTime departureDateTimeStart = departureDate.atStartOfDay();
        LocalDateTime departureDateTimeEnd = departureDate.atTime(23, 59, 59);

        List<Train> trains = trainRepository.findByDepartureStationAndArrivalStationAndDepartureTimeBetween(
                source, destination, departureDateTimeStart, departureDateTimeEnd);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "http://localhost:4200");

        return ResponseEntity.ok().headers(headers).body(trains);
    }
}
