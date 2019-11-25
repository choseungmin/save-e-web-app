package com.ninewatt.ems.dashboard.service;

import com.ninewatt.ems.common.CommonService;
import com.ninewatt.ems.dashboard.mapper.DashboardMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service("com.ninewatt.ems.dashboard.service.DashboardRestService")
public class DashboardRestServiceImpl implements DashboardRestService {

    @Autowired
    DashboardMapper mapper;

    @Resource(name="package com.ninewatt.ems.common.CommonService")
    CommonService commonService;

    @Override
    public List<Map<String, Object>> selectDashboardHeaderSummary(Map<String, Object> param) {
        return mapper.selectDashboardHeaderSummary(param);
    }

    @Override
    public List<Map<String, Object>> selectDashboardHeaderSummaryTotal(Map<String, Object> param) {
        return mapper.selectDashboardHeaderSummaryTotal(param);
    }

    @Override
    public List<Map<String, Object>> selectDashboardServiceRanking(Map<String, Object> param) {
        return commonService.maskingSiteName(mapper.selectDashboardServiceRanking(param));
    }

    @Override
    public Map<String, Object> selectDashboardChart(Map<String, Object> param) {

        Map<String,Object> resultMap = new HashMap<>();

        resultMap.put("hourChart",mapper.selectDashboardChartByHour(param));
        resultMap.put("dayChart",mapper.selectDashboardChartByDay(param));
        resultMap.put("monthChart",mapper.selectDashboardChartByMonth(param));

        return resultMap;
    }
}
