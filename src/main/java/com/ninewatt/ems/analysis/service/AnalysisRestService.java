package com.ninewatt.ems.analysis.service;

import java.util.List;
import java.util.Map;

public interface AnalysisRestService {
    public Map<String, Object> getLoginUserInfo();
    List<Map<String, Object>> selectAnalysisTargetList(Map<String, Object> request);
    List<Map<String, Object>> selectTargetDate();
}
