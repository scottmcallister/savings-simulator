package com.mrscottmcallister.savingssimulator.resources;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ContentResource {
    @GetMapping("/")
    public String mainPage() {
        return "index";
    }
    
}
