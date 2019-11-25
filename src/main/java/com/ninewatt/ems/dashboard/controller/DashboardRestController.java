package com.ninewatt.ems.dashboard.controller;

import com.ninewatt.ems.analysis.service.AnalysisRestService;
import com.ninewatt.ems.common.CommonService;
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

    @Resource(name="com.ninewatt.ems.common.service.CommonRestService")
    private CommonService commonService;

    @PostMapping("/selectDashboardHeaderSummary")
    public List<Map<String, Object>> selectDashboardHeaderSummary(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectDashboardHeaderSummary(param);
    }

    @PostMapping("/selectDashboardHeaderSummaryTotal")
    public List<Map<String, Object>> selectDashboardHeaderSummaryTotal(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectDashboardHeaderSummaryTotal(param);
    }

    @PostMapping("/selectDashboardServiceRanking")
    public List<Map<String, Object>> selectDashboardServiceRanking(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectDashboardServiceRanking(param);
    }

    @PostMapping("/selectDashboardChart")
    public Map<String, Object> selectDashboardChart(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectDashboardChart(param);
    }

}
