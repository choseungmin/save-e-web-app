package com.ninewatt.ems.analysis.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AnalysisMapper {
    List<Map<String, Object>> selectAnalysisTargetListForBasicUser(Map<String, Object> param);
    List<Map<String, Object>> selectAnalysisTargetListForGroupUser(Map<String, Object> param);
    List<Map<String, Object>> selectTargetDate();
}
