package emsBackend.Api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {


    @RequestMapping(value = "/{path:[^\\.]*}")  // Match any path without a dot (for Angular routes)
    public String redirect() {
        return "forward:/index.html";
    }
}
