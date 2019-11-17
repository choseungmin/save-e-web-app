package com.ninewatt.ems.schoolData.service;

import com.ninewatt.ems.schoolData.mapper.SchoolDataMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.schoolData.service.SchoolDataRestService")
public class SchoolDataRestServiceImpl implements SchoolDataRestService {

    @Autowired
    SchoolDataMapper mapper;

    @Override
    public List<Map<String, Object>> selectTotalBillPerClass(Map<String, Object> param) {
        return mapper.selectTotalBillPerClass(param);
    }

    @Override
    public List<Map<String, Object>> selectSexRatio(Map<String, Object> param) {
        return mapper.selectSexRatio(param);
    }
}
