/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
// 虚拟DOM结构需要更新的模块
const modules = platformModules.concat(baseModules)

// 创建 patch 方法
export const patch: Function = createPatchFunction({ nodeOps, modules })
