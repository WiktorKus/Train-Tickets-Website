package com.example.trainticketsales.repository;

import com.example.trainticketsales.model.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TrainRepository extends JpaRepository<Train, Long> {

    List<Train> findByDepartureStationAndArrivalStationAndDepartureTimeBetween(
            String departureStation, String arrivalStation, LocalDateTime departureTimeStart, LocalDateTime departureTimeEnd);
}
