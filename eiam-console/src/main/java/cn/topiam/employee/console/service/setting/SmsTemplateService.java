/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.console.service.setting;

import cn.topiam.employee.common.enums.Language;
import cn.topiam.employee.console.pojo.result.setting.SmsTemplateListResult;

import java.util.List;

/**
 * <p>
 * 短信模版 服务类
 * </p>
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2020-08-13
 */
public interface SmsTemplateService extends SettingService {

    /**
     * 获取短信模版列表
     *
     * @param language {@link Language}
     * @return {@link SmsTemplateListResult}
     */
    List<SmsTemplateListResult> getSmsTemplateList(Language language);
}
