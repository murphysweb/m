/**
 * 功能: 开发者编译参数配置
 * 说明: 将编译参数配置到当前配置文件后，无需手动从命令行输入编译参数
 * 命令行指定编译参数规范: env=xxx num=xxx mini=xxx npm start
 * 命令行指定编译参数示例: env=dev num=6 mini=true npm start
 * config参数说明：g
 * env    当前开发阶段，取值范围: [''|'dev'|'beta'|'gray'|'prod']，默认''
 * num    当前开发分支，取值范围: [''|数字]，默认''
 * mini   是否资源优化，取值范围: [false|true]，默认false
 * page   src/page/目录下需要编译的页面，如'*'表示所有页面，'center'表示单页面，
 */
module.exports.default = {
  page: ['logistics_information','123'],
  webpack: true
};
