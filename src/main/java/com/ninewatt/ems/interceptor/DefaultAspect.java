package com.ninewatt.ems.interceptor;

import com.ninewatt.ems.common.CommonService;
import com.ninewatt.ems.security.UserAuthenticationProvider;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Aspect
@Component
public class DefaultAspect {

    @Value("${spring.profiles.active}")
    private String serverEnv;

    @Autowired
    CommonService service;

    //실행전
    @Before("execution(* com.ninewatt.ems.*.controller.*.*(..))")
    public void onBeforeHandler(JoinPoint joinPoint) {
        log.info("Aspect_onBeforeHandler");
        service.autoLogin();
    }

    //실행후
    @After("execution(* com.ninewatt.ems.analysis.controller.*.*(..))")
    public void onAfterHandler(JoinPoint joinPoint) {
        log.info("Aspect_onAfterHandler");
    }

    // 실행 후 전달하는 객체
    @AfterReturning(pointcut = "execution(* com.ninewatt.ems.analysis.controller.*.*(..))", returning = "str")
    public void onAfterReturningHandler(JoinPoint joinPoint, Object str) {
        log.info("Aspect_onAfterReturningHandler:" + str);
//        log.info("@AfterReturning : " + str); 결과 내용 출력
//        log.info("=============== onAfterReturningHandler");


        /*String result = "";

        result += "\n*****\n";
        result += joinPoint.getTarget().getClass().getName()+"."
                +joinPoint.getSignature().getName() +"(";

        int index = joinPoint.getArgs().length;
        for( Object o : joinPoint.getArgs() ){

            result += o;
            if( --index != 0 ){
                result += ", ";
            }

        }
        result += ")\n";

        result += "Completed:"+ joinPoint+"\n";
        result += "*****\n";

        log.info(result);*/
    }

    @Pointcut("execution(* com.ninewatt.ems.analysis.controller.*.*(..))")
    public void onPointcut(JoinPoint joinPoint) {
        log.info("=============== onPointcut");
    }
}
