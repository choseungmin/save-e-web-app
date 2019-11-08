package com.ninewatt.ems.analysis.controller;

import com.ninewatt.ems.analysis.service.AnalysisRestService;
import com.ninewatt.ems.login.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = "/api/analysis")
public class AnalysisRestController {

    @Resource(name="com.ninewatt.ems.analysis.service.AnalysisRestServiceImpl")
    private AnalysisRestService service;

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @PostMapping("/getLoginUserInfo")
    public @ResponseBody Map<String, Object> getLoginUserInfo() {
        return service.getLoginUserInfo();
    }

    @PostMapping("/selectAnalysisTargetList")
    public @ResponseBody List<Map<String, Object>> selectAnalysisTargetList(@RequestBody Map<String, Object> request) {
        return service.selectAnalysisTargetList(request);
    }
}
