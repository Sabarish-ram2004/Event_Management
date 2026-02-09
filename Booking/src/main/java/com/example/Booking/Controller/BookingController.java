package com.example.Booking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Booking.Entity.Booking;
import com.example.Booking.Service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public Booking create(@RequestBody Booking booking) {
        return service.createBooking(booking);
    }

    @GetMapping
    public List<Booking> getAll() {
        return service.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getById(@PathVariable Long id) {
        return service.getBookingById(id);
    }

    @PutMapping("/{id}")
    public Booking update(@PathVariable Long id,
                          @RequestBody Booking booking) {
        return service.updateBooking(id, booking);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteBooking(id);
        return "Booking deleted successfully";
    }
}
