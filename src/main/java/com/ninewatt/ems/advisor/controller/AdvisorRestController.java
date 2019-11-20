package com.ninewatt.ems.advisor.controller;

import com.ninewatt.ems.advisor.service.AdvisorService;
import com.ninewatt.ems.analysis.service.AnalysisRestService;
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

    @Resource(name="com.ninewatt.ems.analysis.service.AnalysisRestService")
    private AnalysisRestService analysisService;

    @PostMapping("/selectAdvisorInfoTable")
    public List<Map<String, Object>> selectAdvisorInfoTable(@RequestBody Map<String, Object> request) {
        List<Map<String, Object>> ismartList = analysisService.selectAnalysisTargetList(request);
        Map<String, Object> param = new HashMap<>();
        param.put("ismartList", ismartList);
        param.put("tgtDate", request.get("tgtDate"));
        return service.selectAdvisorInfoTable(param);
    }

}
