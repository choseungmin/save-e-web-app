package com.ninewatt.ems.dashboard.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DashboardMapper {
    List<Map<String, Object>> selectDashboardHeaderSummary(Map<String, Object> param);
    List<Map<String, Object>> selectDashboardServiceRanking(Map<String, Object> param);
    List<Map<String, Object>> selectDashboardChartByHour(Map<String, Object> param);
    List<Map<String, Object>> selectDashboardChartByDay(Map<String, Object> param);
    List<Map<String, Object>> selectDashboardChartByMonth(Map<String, Object> param);
}
