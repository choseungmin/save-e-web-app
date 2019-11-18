package com.ninewatt.ems.schoolData.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SchoolDataMapper {
    List<Map<String, Object>> selectTotalBillPerClass(Map<String, Object> param);
    List<Map<String, Object>> selectTotalBillByStudent(Map<String, Object> param);
    List<Map<String, Object>> selectTotalBillBySexRatio(Map<String, Object> param);
    List<Map<String, Object>> selectSexRatio(Map<String, Object> param);
    List<Map<String, Object>> selectTotalBillByArea(Map<String, Object> param);
}
