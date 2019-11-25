package com.ninewatt.ems.common;

import org.springframework.beans.factory.annotation.Value;

import java.util.Map;

public interface CommonService {
    public void autoLogin();
    public Map<String, Object> setParamByRequest(Map<String, Object> request);
}
