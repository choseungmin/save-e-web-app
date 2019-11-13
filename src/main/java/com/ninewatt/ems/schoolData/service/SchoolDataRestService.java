package com.ninewatt.ems.schoolData.service;

import java.util.List;
import java.util.Map;

public interface SchoolDataRestService {
    List<Map<String, Object>> selectTotalBillPerClass(Map<String, Object> param);
}
