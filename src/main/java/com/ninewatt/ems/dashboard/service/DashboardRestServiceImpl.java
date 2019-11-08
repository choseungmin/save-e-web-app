package com.ninewatt.ems.dashboard.service;

import com.ninewatt.ems.dashboard.mapper.DashboardMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.analysis.service.DashboardRestServiceImpl")
public class DashboardRestServiceImpl implements DashboardRestService {

    @Autowired
    DashboardMapper mapper;

    @Override
    public List<Map<String, Object>> selectDashboardSchoolList(Map<String, Object> param) {
        return mapper.selectDashboardSchoolList(param);
    }
}
