package com.ninewatt.ems.analysis.service;

import com.ninewatt.ems.analysis.mapper.AnalysisMapper;
import com.ninewatt.ems.login.vo.UserVO;
import com.ninewatt.ems.security.UserAuthenticationProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.analysis.service.AnalysisRestServiceImpl")
public class AnalysisRestServiceImpl implements AnalysisRestService {

    @Autowired
    AnalysisMapper mapper;

    @Override
    public Map<String, Object> getLoginUserInfo() {

        Map<String, Object> returnMap = new HashMap<>();


        // 시큐리티 컨텍스트 객체를 얻습니다.
        SecurityContext context = SecurityContextHolder.getContext();
        // 인증 객체를 얻습니다.
        Authentication authentication = context.getAuthentication();
        // 로그인한 사용자정보를 가진 객체를 얻습니다.
        UserVO vo = (UserVO) authentication.getPrincipal();
        // 로그인한 사용자 권한을 가진 객체럴 얻습니다.
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        Boolean roleFlag =  authorities.stream().filter(o -> o.getAuthority().equals("BASIC_USER")).findAny().isPresent();

        returnMap.put("ismartId", vo.getIsmartId());
        returnMap.put("siteName", vo.getSiteName());
        returnMap.put("userName", vo.getUserNm());

        //return map



        return returnMap;
    }

    @Override
    public List<Map<String, Object>> selectAnalysisTargetList(Map<String, Object> request) {

        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        UserVO vo = (UserVO) authentication.getPrincipal();

        request.put("ismartId", vo.getIsmartId());

        return mapper.selectAnalysisTargetList(request);
    }

    @Override
    public List<Map<String, Object>> selectTargetDate() {
        return mapper.selectTargetDate();
    }
}
