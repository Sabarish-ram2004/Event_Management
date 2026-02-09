package com.example.Booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Booking.Entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
