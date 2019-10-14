package com.ninewatt.ems.login.service;

import com.ninewatt.ems.login.vo.UserVO;

public interface LoginService {
    public UserVO authenticate(String username, String password);
}
