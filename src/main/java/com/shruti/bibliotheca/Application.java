package com.shruti.bibliotheca;

import com.shruti.bibliotheca.entities.Book;
import com.shruti.bibliotheca.repositories.LibRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        System.out.println("Test");
        SpringApplication.run(Application.class, args);
    }


    @Bean
    CommandLineRunner init(final LibRepository libRepository) {
        return args -> {
            Stream.of("A", "B", "C", "D").forEach(bookName -> {
                Book book = new Book(bookName, "unread", "uncalssified");
                libRepository.save(book);
            });
            libRepository.findAll().forEach(System.out::println);
        };
    }
}
