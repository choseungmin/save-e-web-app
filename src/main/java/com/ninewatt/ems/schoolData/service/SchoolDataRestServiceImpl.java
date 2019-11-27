package com.ninewatt.ems.schoolData.service;

import com.ninewatt.ems.common.CommonService;
import com.ninewatt.ems.schoolData.mapper.SchoolDataMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.schoolData.service.SchoolDataRestService")
public class SchoolDataRestServiceImpl implements SchoolDataRestService {

    @Autowired
    SchoolDataMapper mapper;

    @Resource(name="com.ninewatt.ems.common.service.CommonRestService")
    CommonService commonService;

    @Override
    public List<Map<String, Object>> selectTotalBillPerClass(Map<String, Object> param) {
        return commonService.maskingSiteName(mapper.selectTotalBillPerClass(param));
    }

    @Override
    public List<Map<String, Object>> selectTotalBillByStudent(Map<String, Object> param) {
        return commonService.maskingSiteName(mapper.selectTotalBillByStudent(param));
    }

    @Override
    public List<Map<String, Object>> selectTotalBillBySexRatio(Map<String, Object> param) {
        return commonService.maskingSiteName(mapper.selectTotalBillBySexRatio(param));
    }

    @Override
    public List<Map<String, Object>> selectSexRatio(Map<String, Object> param) {
        return commonService.maskingSiteName(mapper.selectSexRatio(param));
    }

    @Override
    public List<Map<String, Object>> selectTotalBillByArea(Map<String, Object> param) {
        return commonService.maskingSiteName(mapper.selectTotalBillByArea(param));
    }
}
