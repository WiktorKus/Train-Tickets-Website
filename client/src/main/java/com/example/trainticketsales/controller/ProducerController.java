package com.example.trainticketsales.controller;

import com.example.trainticketsales.services.KafkaProducerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProducerController {
    private final KafkaProducerService kafkaProducerService;

    public ProducerController(KafkaProducerService kafkaProducerService) {
        this.kafkaProducerService = kafkaProducerService;
    }

    @PostMapping("/messages")
    public void sendMessageToKafka(@RequestBody String message) {
        kafkaProducerService.sendMessage(message);
    }
}
