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
package cn.topiam.employee.console.pojo.query.app;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springdoc.api.annotations.ParameterObject;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 分页查询角色入参
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2020/8/11 23:08
 */
@Data
@Schema(description = "查询角色列表入参")
@ParameterObject
public class AppPermissionRoleListQuery implements Serializable {

    /**
     * 角色名称
     */
    @Parameter(description = "角色名称")
    private String  name;

    /**
     * 角色编码
     */
    @Parameter(description = "角色编码")
    private String  code;

    /**
     * 所属应用
     */
    @NotNull(message = "请选择角色所属应用")
    @Parameter(description = "所属应用")
    private Long    appId;

    /**
     * 是否启用
     */
    @Parameter(description = "是否启用")
    private Boolean enabled;

}
