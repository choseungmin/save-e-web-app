package com.ninewatt.ems.common;

import com.ninewatt.ems.analysis.service.AnalysisRestService;
import com.ninewatt.ems.login.vo.UserVO;
import com.ninewatt.ems.security.UserAuthenticationProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.common.service.CommonRestService")
public class CommonServiceImpl implements CommonService {

    @Value("${spring.profiles.active}")
    private String serverEnv;


    @Resource(name="com.ninewatt.ems.analysis.service.AnalysisRestService")
    private AnalysisRestService analysisService;

    @Autowired
    UserAuthenticationProvider auth;

    public void autoLogin() {
        String username = "동부교육지원청"; // GROUP_USER
//        String username = "송명초등학교"; // BASIC_USER
        String password = "1234";
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

    @Override
    public Map<String, Object> setParamByRequest(Map<String, Object> request) {

        List<Map<String, Object>> ismartList = analysisService.selectAnalysisTargetList(request);
        Map<String, Object> param = new HashMap<>();
        param.put("ismartList", ismartList);
        param.put("tgtDate", request.get("tgtDate"));

        return param;
    }

    public List<Map<String, Object>> maskingSiteName(List<Map<String, Object>> list) {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        UserVO vo = (UserVO) authentication.getPrincipal();

        if(vo.getRoleName().equals("BASIC_USER") && list.size() > 0) {
            HashMap tmpMap = (HashMap) list.get(0);
            if(tmpMap.containsKey("siteName")) {
                for(Map<String, Object> map : list) {
                    if(vo.getIsmartId().equals(map.get("ismartId"))) {
                        continue;
                    }
                    String sclDiv = (String) map.get("sclDiv");
                    if(sclDiv.equals("1")) {
                        map.put("siteName", "**초등학교");
                    } else if(sclDiv.equals("2")) {
                        map.put("siteName", "**중학교");
                    } else {
                        map.put("siteName", "**고등학교");
                    }
                }
            }
        }

        return list;
    }
}
