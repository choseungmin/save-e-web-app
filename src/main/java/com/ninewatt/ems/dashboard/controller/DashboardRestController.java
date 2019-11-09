package com.ninewatt.ems.dashboard.controller;

import com.ninewatt.ems.analysis.service.AnalysisRestService;
import com.ninewatt.ems.dashboard.service.DashboardRestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = "/api/dashboard")
public class DashboardRestController {

    @Resource(name="com.ninewatt.ems.analysis.service.DashboardRestServiceImpl")
    DashboardRestService service;

    @Resource(name="com.ninewatt.ems.analysis.service.AnalysisRestServiceImpl")
    private AnalysisRestService analysisService;

    @PostMapping("/selectDashboardHeaderSummary")
    public List<Map<String, Object>> selectDashboardHeaderSummary(@RequestBody Map<String, Object> request) {
        List<Map<String, Object>> ismartList = analysisService.selectAnalysisTargetList(request);
        Map<String, Object> param = new HashMap<>();
        param.put("ismartList", ismartList);
        param.put("tgtDate", request.get("tgtDate"));
        return service.selectDashboardHeaderSummary(param);
    }

}