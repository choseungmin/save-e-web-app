package com.ninewatt.ems.dashboard.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DashboardMapper {
    List<Map<String, Object>> selectDashboardSchoolList(Map<String, Object> param);
}
