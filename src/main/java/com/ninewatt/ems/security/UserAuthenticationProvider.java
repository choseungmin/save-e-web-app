package com.ninewatt.ems.security;

import com.ninewatt.ems.login.service.LoginService;
import com.ninewatt.ems.login.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    LoginService loginService;

    /*
    * 로그인-운영환경(수동 로그인)
    * */
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = (String) authentication.getCredentials();

        return getAuthentication(username, password);
    }

    public void doAutoLogin(String nm, String pw) {

    }

    /*
    * 로그인-개발환경(자동 로그인)
    * */
    public void devAuthenticate(String username, String password) throws AuthenticationException {

        // do auto login
        UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) getAuthentication(username, password);
        AuthenticationProvider authenticationProvider = new AuthenticationProvider() {
            @Override
            public Authentication authenticate(Authentication authentication) throws AuthenticationException {
                return (UsernamePasswordAuthenticationToken) getAuthentication(username, password);
            }

            @Override
            public boolean supports(Class<?> authentication) {
                return false;
            }
        };
        Authentication authentication = authenticationProvider.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    /*
    * 사용자 정보 획득
    * */
    private Authentication getAuthentication(String username, String password) {
        UserVO userVO = loginService.authenticate(username, password);
        if (userVO == null) {
            throw new BadCredentialsException("Login Error !!");
        }
        userVO.setPassword(null);

        ArrayList<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + userVO.getRoleName())); //role 설정
        return new UsernamePasswordAuthenticationToken(userVO, null, authorities);
    }

    @Override
    public boolean supports(Class authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
