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
package cn.topiam.employee.console.pojo.update.app;

import cn.topiam.employee.common.enums.PolicyEffect;
import cn.topiam.employee.common.enums.PolicyObjectType;
import cn.topiam.employee.common.enums.PolicySubjectType;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 修改策略入参
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2020/8/26 21:46
 */
@Data
@Schema(description = "修改策略入参")
public class AppPermissionPolicyUpdateParam implements Serializable {
    /**
     * 所属应用
     */
    @NotNull(message = "资源所属应用不能为空")
    @Parameter(description = "所属应用")
    private Long              appId;

    /**
     * 授权主体id
     */
    @NotNull(message = "主键id不能为空")
    @Parameter(description = "主键id")
    private Long              id;
    /**
     * 授权主体id
     */
    @NotNull(message = "授权主体id不能为空")
    @Parameter(description = "授权主体id")
    private String            subjectId;

    /**
     * 权限主体类型（用户、角色、分组、组织机构）
     */
    @NotNull(message = "授权主体类型不能为空")
    @Parameter(description = "授权主体类型")
    private PolicySubjectType subjectType;

    /**
     * 权限客体ID
     */
    @NotNull(message = "权限客体ID不能为空")
    @Parameter(description = "授权客体id")
    private Long              objectId;

    /**
     * 权限客体类型（权限、角色）
     */
    @NotNull(message = "权限客体类型不能为空")
    @Parameter(description = "授权客体类型")
    private PolicyObjectType  objectType;

    /**
     * 授权作用
     */
    @NotNull(message = "授权作用不能为空")
    @Parameter(description = "授权作用")
    private PolicyEffect      effect;
}
