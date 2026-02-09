package com.example.Booking.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Booking.Entity.Booking;
import com.example.Booking.Repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    public Booking createBooking(Booking booking) {
        return repository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    public Booking getBookingById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    public Booking updateBooking(Long id, Booking booking) {
        Booking existing = getBookingById(id);
        existing.setCustomerName(booking.getCustomerName());
        existing.setEventType(booking.getEventType());
        existing.setEventDate(booking.getEventDate());
        existing.setPrice(booking.getPrice());
        return repository.save(existing);
    }

    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }
}
