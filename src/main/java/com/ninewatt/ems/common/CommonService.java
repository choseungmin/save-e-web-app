package com.ninewatt.ems.common;

import org.springframework.beans.factory.annotation.Value;

import java.util.List;
import java.util.Map;

public interface CommonService {
    void autoLogin();
    Map<String, Object> setParamByRequest(Map<String, Object> request);
    List<Map<String, Object>> maskingSiteName(List<Map<String, Object>> list);
}
