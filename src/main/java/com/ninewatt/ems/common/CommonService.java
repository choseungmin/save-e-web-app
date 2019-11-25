package com.ninewatt.ems.common;

import org.springframework.beans.factory.annotation.Value;

import java.util.List;
import java.util.Map;

public interface CommonService {
    public void autoLogin();
    List<Map<String, Object>> maskingSiteName(List<Map<String, Object>> list);
}
