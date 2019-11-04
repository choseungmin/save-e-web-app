package com.ninewatt.ems.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserAuthenticationProvider authenticationProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/build/**").permitAll()
                .antMatchers("/auth/admin/**").hasRole("ADMIN") // 내부적으로 접두어 "ROLE_"가 붙는다.
                .antMatchers("/auth/**").hasAnyRole("ADMIN", "MANAGER", "GROUP_USER", "BASIC_USER") // 내부적으로 접두어 "ROLE_"가 붙는다.
                .anyRequest().authenticated();

        http.formLogin()
                .loginPage("/login") // default
                .loginProcessingUrl("/authenticate")
                .failureUrl("/login?error") // default
                .defaultSuccessUrl("/")
                .usernameParameter("username")
                .passwordParameter("password")
                .permitAll();

        http.logout()
//                .logoutUrl("/logout") // default
                .logoutSuccessUrl("/login")
                .permitAll();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(authenticationProvider);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/favicon.ico", "/static/**", "/image/**", "/js/**");
    }
}
