package com.ninewatt.ems.schoolData.controller;

import com.ninewatt.ems.analysis.service.AnalysisRestService;
import com.ninewatt.ems.common.CommonService;
import com.ninewatt.ems.schoolData.service.SchoolDataRestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value = "/api/schoolData")
public class SchoolDataRestController {

    @Resource(name="com.ninewatt.ems.schoolData.service.SchoolDataRestService")
    SchoolDataRestService service;

    @Resource(name="com.ninewatt.ems.common.service.CommonRestService")
    private CommonService commonService;

    @PostMapping("/selectTotalBillPerClass")
    public List<Map<String, Object>> selectTotalBillPerClass(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectTotalBillPerClass(param);
    }

    @PostMapping("/selectTotalBillByStudent")
    public List<Map<String, Object>> selectTotalBillByStudent(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectTotalBillByStudent(param);
    }

    @PostMapping("/selectTotalBillBySexRatio")
    public List<Map<String, Object>> selectTotalBillBySexRatio(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectTotalBillBySexRatio(param);
    }

    @PostMapping("/selectSexRatio")
    public List<Map<String, Object>> selectSexRatio(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectSexRatio(param);
    }

    @PostMapping("/selectTotalBillByArea")
    public List<Map<String, Object>> selectTotalBillByArea(@RequestBody Map<String, Object> request) {
        Map<String, Object> param = commonService.setParamByRequest(request);
        return service.selectTotalBillByArea(param);
    }
}
