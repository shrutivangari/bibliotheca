package com.shruti.bibliotheca.repositories;

import com.shruti.bibliotheca.entities.Book;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface LibRepository extends CrudRepository<Book, Long> {


}
