package com.ninewatt.ems.login.service;

import com.ninewatt.ems.login.mapper.LoginMapper;
import com.ninewatt.ems.login.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.login.service.LoginServiceImpl")
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginMapper mapper;

    @Override
    public UserVO authenticate(String username, String password) {
        Map<String, String> loginInfo = new HashMap<>();
        loginInfo.put("username", username);
        loginInfo.put("password", password);
        return mapper.authenticate(loginInfo);
    }
}
