package com.ninewatt.ems.login.mapper;

import com.ninewatt.ems.login.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface LoginMapper {
    public UserVO authenticate(Map<String, String> loginInfo);
}
