package com.ninewatt.ems.dashboard.service;

import java.util.List;
import java.util.Map;

public interface DashboardRestService {
    List<Map<String, Object>> selectDashboardHeaderSummary(Map<String, Object> param);
}
