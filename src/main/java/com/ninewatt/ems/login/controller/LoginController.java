package com.ninewatt.ems.login.controller;

import com.ninewatt.ems.login.vo.LoginVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Slf4j
@Controller
public class LoginController {

    @RequestMapping(value = "/login", method= RequestMethod.GET)
    public String login(@ModelAttribute("loginVO") LoginVO loginVO, Model model) { return "html/login"; }

    @RequestMapping(value = "/logout", method= RequestMethod.GET)
    public String logout() { return "html/logout"; }

    @GetMapping("/**")
    public String index(@ModelAttribute("loginVO") LoginVO loginVO, Model model) {
        return "build/index";
    }
}
