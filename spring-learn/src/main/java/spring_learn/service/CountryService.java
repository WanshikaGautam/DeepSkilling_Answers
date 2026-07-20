package spring_learn.service;

import org.springframework.stereotype.Service;

import spring_learn.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {

        if (code.equalsIgnoreCase("IN")) {
            Country country = new Country();
            country.setCode("IN");
            country.setName("India");
            return country;
        }

        if (code.equalsIgnoreCase("US")) {
            Country country = new Country();
            country.setCode("US");
            country.setName("United States");
            return country;
        }

        if (code.equalsIgnoreCase("JP")) {
            Country country = new Country();
            country.setCode("JP");
            country.setName("Japan");
            return country;
        }

        if (code.equalsIgnoreCase("DE")) {
            Country country = new Country();
            country.setCode("DE");
            country.setName("Germany");
            return country;
        }

        return null;
    }
}