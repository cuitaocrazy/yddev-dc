1. nexus虚拟目录的代理
- docker-compose.yaml中对nexus服务中加入环境变量`NEXUS_CONTEXT: nexus`
2. gitlab虚拟目录的代理
- 有些说加入`external_url`环境变量, 但是没成功, 估计是没有进入gitlab容器去执行`gitlab-cli reconfigure`
- 编辑gitlab.rb, 加入`external_url "http://dev.lanxinpay.com/gitlab"`, 容器去执行`gitlab-cli reconfigure`
3. 当nginx配置location做代理时url写成`$scheme://nexus:8081/nexus`时提示错误解析不了主机, 不知道具体原因, 解决1: 去掉变量改成常量改成`http://nexus:8081/nexus`. 解决2: 加入docker的dns解析ip, location的配置中加入`resolver 127.0.0.11;`