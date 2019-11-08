package com.ninewatt.ems.dashboard.controller;

import com.ninewatt.ems.dashboard.service.DashboardRestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = "/api/dashboard")
public class DashboardRestController {

    @Resource(name="com.ninewatt.ems.analysis.service.DashboardRestServiceImpl")
    DashboardRestService service;

    @PostMapping("/selectDashboardSchoolList")
    public List<Map<String, Object>> selectDashboardSchoolList(@RequestBody Map<String, Object> request) {
        return service.selectDashboardSchoolList(request);
    }

}
