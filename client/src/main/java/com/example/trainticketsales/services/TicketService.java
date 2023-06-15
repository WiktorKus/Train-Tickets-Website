package com.example.trainticketsales.services;

import com.example.trainticketsales.exception.TicketNotFoundException;
import com.example.trainticketsales.model.Ticket;
import com.example.trainticketsales.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public Ticket updateTicket(Long ticketId, String passengerName, int seatNumber) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(ticketId);

        if (optionalTicket.isPresent()) {
            Ticket ticket = optionalTicket.get();
            ticket.setPassengerName(passengerName);
            ticket.setSeatNumber(seatNumber);
            return ticketRepository.save(ticket);
        } else {
            throw new TicketNotFoundException("Ticket not found");
        }
    }

    public void deleteTicket(Long ticketId) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(ticketId);

        if (optionalTicket.isPresent()) {
            ticketRepository.delete(optionalTicket.get());
        } else {
            throw new TicketNotFoundException("Ticket not found");
        }
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Ticket getTicketById(Long ticketId) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(ticketId);

        if (optionalTicket.isPresent()) {
            return optionalTicket.get();
        } else {
            throw new TicketNotFoundException("Ticket not found");
        }
    }
}
