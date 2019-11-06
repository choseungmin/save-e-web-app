package com.ninewatt.ems.analysis.service;

import com.ninewatt.ems.login.vo.UserVO;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service("com.ninewatt.ems.analysis.service.AnalysisRestServiceImpl")
public class AnalysisRestServiceImpl implements AnalysisRestService {
    @Override
    public Map<String, Object> getLoginUserInfo() {

        // 시큐리티 컨텍스트 객체를 얻습니다.
        SecurityContext context = SecurityContextHolder.getContext();
        // 인증 객체를 얻습니다.
        Authentication authentication = context.getAuthentication();
        // 로그인한 사용자정보를 가진 객체를 얻습니다.
        UserVO vo = (UserVO) authentication.getPrincipal();
        // 로그인한 사용자 권한을 가진 객체럴 얻습니다.
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        Boolean roleFlag =  authorities.stream().filter(o -> o.getAuthority().equals("BASIC_USER")).findAny().isPresent();

        //return map
        Map<String, Object> returnMap = new HashMap<>();
        returnMap.put("ismartId", vo.getIsmartId());
        returnMap.put("siteName", vo.getSiteName());
        returnMap.put("userName", vo.getUserNm());

        return returnMap;
    }
}
