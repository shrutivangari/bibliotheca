package com.shruti.bibliotheca.controllers;

import com.shruti.bibliotheca.entities.Book;
import com.shruti.bibliotheca.repositories.LibRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:8080")
public class LibController {

    @Autowired
    private LibRepository libRepository;

    @GetMapping("/test")
    public String getTest() {
        return "Test";
    }

    @GetMapping("books")
    public List<Book> getBooks() {
        return (List<Book>) libRepository.findAll();
    }

    @PostMapping("books")
    void addBook(@RequestBody Book book) {
        libRepository.save(book);
    }
}
