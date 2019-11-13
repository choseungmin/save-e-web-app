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

    @Resource(name="com.ninewatt.ems.dashboard.service.DashboardRestService")
    DashboardRestService service;

    @Resource(name="com.ninewatt.ems.analysis.service.AnalysisRestService")
    private AnalysisRestService analysisService;

    @PostMapping("/selectDashboardHeaderSummary")
    public List<Map<String, Object>> selectDashboardHeaderSummary(@RequestBody Map<String, Object> request) {
        List<Map<String, Object>> ismartList = analysisService.selectAnalysisTargetList(request);
        Map<String, Object> param = new HashMap<>();
        param.put("ismartList", ismartList);
        param.put("tgtDate", request.get("tgtDate"));
        return service.selectDashboardHeaderSummary(param);
    }

    @PostMapping("/selectDashboardServiceRanking")
    public List<Map<String, Object>> selectDashboardServiceRanking(@RequestBody Map<String, Object> request) {
        List<Map<String, Object>> ismartList = analysisService.selectAnalysisTargetList(request);
        Map<String, Object> param = new HashMap<>();
        param.put("ismartList", ismartList);
        param.put("tgtDate", request.get("tgtDate"));
        return service.selectDashboardServiceRanking(param);
    }

    @PostMapping("/selectDashboardChart")
    public Map<String, Object> selectDashboardChart(@RequestBody Map<String, Object> request) {
        List<Map<String, Object>> ismartList = analysisService.selectAnalysisTargetList(request);
        Map<String, Object> param = new HashMap<>();
        param.put("ismartList", ismartList);
        param.put("tgtDate", request.get("tgtDate"));
        return service.selectDashboardChart(param);
    }

}
