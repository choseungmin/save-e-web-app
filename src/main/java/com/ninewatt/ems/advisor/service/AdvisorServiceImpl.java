package com.ninewatt.ems.advisor.service;

import com.ninewatt.ems.advisor.mapper.AdvisorMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.advisor.service.AdvisorService")
public class AdvisorServiceImpl implements AdvisorService {

    @Autowired
    AdvisorMapper mapper;

    @Override
    public List<Map<String, Object>> selectAdvisorInfoTable(Map<String, Object> param) {
        return mapper.selectAdvisorInfoTable(param);
    }
}
