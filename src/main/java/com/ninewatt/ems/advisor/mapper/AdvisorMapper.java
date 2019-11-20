package com.ninewatt.ems.advisor.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AdvisorMapper {
    List<Map<String, Object>> selectAdvisorInfoTable(Map<String, Object> param);
}
