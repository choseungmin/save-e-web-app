package com.ninewatt.ems.login.controller;

import com.ninewatt.ems.login.vo.LoginVO;
import com.ninewatt.ems.login.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;

@Slf4j
@Controller
public class LoginController {

    @RequestMapping(value = "/login", method= RequestMethod.GET)
    public String login(@ModelAttribute("loginVO") LoginVO loginVO, Model model) { return "../html/login"; }

    @RequestMapping(value = "/logout", method= RequestMethod.GET)
    public String logout() { return "../html/logout"; }

    @GetMapping("/")
    public String index(@ModelAttribute("loginVO") LoginVO loginVO, Model model) {
        // 시큐리티 컨텍스트 객체를 얻습니다.
         SecurityContext context = SecurityContextHolder.getContext();
        // 인증 객체를 얻습니다.
         Authentication authentication = context.getAuthentication();
        // 로그인한 사용자정보를 가진 객체를 얻습니다.
        UserVO vo = (UserVO) authentication.getPrincipal();
        // 로그인한 사용자 권한을 가진 객체럴 얻습니다.
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        Boolean roleFlag =  authorities.stream().filter(o -> o.getAuthority().equals("BASIC_USER")).findAny().isPresent();


        return "index";
    }
}
