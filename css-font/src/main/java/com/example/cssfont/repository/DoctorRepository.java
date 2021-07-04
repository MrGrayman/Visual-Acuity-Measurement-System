package com.example.cssfont.repository;

import com.example.cssfont.entities.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
//    Doctor findByDoctorCode(String doctorCode);

    @Query("SELECT d FROM Doctor d WHERE d.doctorCode = :doctorCode")
    Doctor findByDoctorCode(@Param("doctorCode") String doctorCode);
}
