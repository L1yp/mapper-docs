(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{302:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_2022年4月17日-1-2-2-发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022年4月17日-1-2-2-发布"}},[t._v("#")]),t._v(" 2022年4月17日 - 1.2.2 发布")]),t._v(" "),s("h4",{attrs:{id:"mybatis-mapper-项目升级到-1-2-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-mapper-项目升级到-1-2-2"}},[t._v("#")]),t._v(" mybatis-mapper 项目升级到 1.2.2")]),t._v(" "),s("p",[t._v("针对 "),s("a",{attrs:{href:"https://github.com/mybatis-mapper/mapper/issues/29",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues#29"),s("OutboundLink")],1),t._v(" 修复的问题，mybatis-mapper 项目升级到 1.2.2。")]),t._v(" "),s("p",[t._v("当通过方法引用获取列信息时，使用的 Java Bean 规范，如果存在列 "),s("code",[t._v("a_tag")]),t._v(" 对应如 "),s("code",[t._v("aTag")]),t._v(" 这样的 Java 字段，生成的 "),s("code",[t._v("getATag")]),t._v(" 会认为字段为 "),s("code",[t._v("ATag")]),t._v("，和 "),s("code",[t._v("aTag")]),t._v(" 匹配不上导致出错。")]),t._v(" "),s("p",[t._v("修改后，在匹配字段时会先区分大小写进行匹配，匹配不到时会再进行不区分大小写的匹配，仍然无效时会抛出异常。")]),t._v(" "),s("h3",{attrs:{id:"_2022年4月17日-1-2-1-发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022年4月17日-1-2-1-发布"}},[t._v("#")]),t._v(" 2022年4月17日 - 1.2.1 发布")]),t._v(" "),s("h4",{attrs:{id:"mybatis-mapper-项目升级到-1-2-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-mapper-项目升级到-1-2-1"}},[t._v("#")]),t._v(" mybatis-mapper 项目升级到 1.2.1")]),t._v(" "),s("p",[s("code",[t._v("ExampleWrapper")]),t._v(" 方法增加 "),s("code",[t._v("boolean useCondition")]),t._v(" 参数，当值为 "),s("code",[t._v("true")]),t._v(" 时，条件生效，反之无效")]),t._v(" "),s("p",[t._v("用法：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("mapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("or")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("or")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderByAsc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当 "),s("code",[t._v("StrUtil.isNotEmpty(sex)")]),t._v(" 结果为 "),s("code",[t._v("true")]),t._v(" 时，该条件有效，为 "),s("code",[t._v("false")]),t._v(" 时无效。")]),t._v(" "),s("p",[t._v("有效时输出的 SQL 如下：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sex "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" sex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Parameters: 女(String), 40(Integer), 张%(String)")]),t._v("\n")])])]),s("p",[t._v("无效时输出的 SQL 如下：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sex "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Parameters: 40(Integer), 张%(String)")]),t._v("\n")])])]),s("p",[t._v("通过这种用法可以保证当需要判断来设置条件时，可以仍然在链式调用中使用。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意 "),s("code",[t._v("or()")]),t._v(" 和 "),s("code",[t._v("or(参数)")]),t._v(" 方法的区别，详细用法和区别请看 "),s("RouterLink",{attrs:{to:"/releases/1.2.0.html"}},[t._v("1.2.0 更新日志")]),t._v("。")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);