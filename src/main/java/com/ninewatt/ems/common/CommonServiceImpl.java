package com.ninewatt.ems.common;

import com.ninewatt.ems.security.UserAuthenticationProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Slf4j
@Service
public class CommonServiceImpl implements CommonService {

    @Value("${spring.profiles.active}")
    private String serverEnv;

    @Autowired
    UserAuthenticationProvider auth;

    public void autoLogin() {
        String username = "test";
        String password = "test";
        if(serverEnv.equals("dev")) {

            // 시큐리티 컨텍스트 객체를 얻습니다.
            SecurityContext context = SecurityContextHolder.getContext();
            // 인증 객체를 얻습니다.
            Authentication authentication = context.getAuthentication();
            if(authentication.getPrincipal().equals("anonymousUser")) {
                auth.devAuthenticate(username, password);
            }
        }
    }
}
