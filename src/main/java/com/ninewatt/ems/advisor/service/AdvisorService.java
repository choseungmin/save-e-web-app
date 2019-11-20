package com.ninewatt.ems.advisor.service;

import java.util.List;
import java.util.Map;

public interface AdvisorService {
    List<Map<String, Object>> selectAdvisorInfoTable(Map<String, Object> param);
}
