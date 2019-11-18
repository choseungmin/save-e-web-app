package com.ninewatt.ems.schoolData.service;

import java.util.List;
import java.util.Map;

public interface SchoolDataRestService {
    List<Map<String, Object>> selectTotalBillPerClass(Map<String, Object> param);
    List<Map<String, Object>> selectTotalBillByStudent(Map<String, Object> param);
    List<Map<String, Object>> selectSexRatio(Map<String, Object> param);
    List<Map<String, Object>> selectTotalBillByArea(Map<String, Object> param);
}
