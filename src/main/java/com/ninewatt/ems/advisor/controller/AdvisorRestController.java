package com.ninewatt.ems.advisor.controller;

import com.ninewatt.ems.advisor.service.AdvisorService;
import com.ninewatt.ems.analysis.service.AnalysisRestService;
import com.ninewatt.ems.common.CommonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = "/api/advisor")
public class AdvisorRestController {

    @Resource(name="com.ninewatt.ems.advisor.service.AdvisorService")
    AdvisorService service;

    @Resource(name="com.ninewatt.ems.common.service.CommonRestService")
    private CommonService commonService;

    @PostMapping("/selectAdvisorInfoTable")
    public List<Map<String, Object>> selectAdvisorInfoTable(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectAdvisorInfoTable(param);
    }

}
