FROM node
WORKDIR /madecare
COPY package.json /madecare
RUN npm install --save
COPY . /madecare
EXPOSE 9000
CMD gatsby serve


# FROM node:8 从 docker hub 拉取 node.js 的 docker 镜像（https://hub.docker.com/_/node/）
# WORKDIR /app 设置镜像的工作目录，下面的所有指令（COPY、RUN、CMD 等）都在这一目录下执行。
# COPY package.json /app 从宿主机复制 package.json 文件至镜像中的 /app 文件夹。
# RUN npm install 在镜像中运行这一命令，为应用安装依赖（node_modules）。
# COPY . /app 从 my-node-app 目录复制文件至镜像的 /app 目录。
# EXPOSE 8081 开放容器的 8081 端口 为什么是 8081？因为 index.js 里写了监听 8081 端口。基于 node.js 镜像创建的容器默认关闭所有端口。







# FROM jenkins/jenkins:2.122
# MAINTAINER engineer <engineer@kezaihui.com>


# USER root


# # JAVA
# RUN apt update
# RUN apt-get install openjdk-8-jre -y
# RUN ls /usr/lib/jvm/
# ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk-amd64


# # 使用淘宝镜像安装Node.js v8.9.2
# RUN wget https://npm.taobao.org/mirrors/node/v8.9.2/node-v8.9.2-linux-x64.tar.gz && \
#     tar -C /usr/local --strip-components 1 -xzf node-v8.9.2-linux-x64.tar.gz && \
#     rm node-v8.9.2-linux-x64.tar.gz


# # Install android sdk
# RUN mkdir -p opt/android/sdk \
#     && chown -R jenkins.jenkins /opt/android/sdk \
#     && cd opt/android/sdk/ \
#     && curl https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip -o android-sdk.zip && sudo unzip android-sdk.zip -d . && sudo rm android-sdk.zip \
#     && yes | ./tools/bin/sdkmanager --licenses \
#     && sudo ./tools/bin/sdkmanager "tools" \
#     && sudo ./tools/bin/sdkmanager "build-tools;27.0.3" "build-tools;26.0.2" "build-tools;26.0.1" "build-tools;25.0.3" "build-tools;25.0.2" "build-tools;25.0.1" "build-tools;25.0.0" "build-tools;23.0.1" "platforms;android-27" "platforms;android-26" "platforms;android-25" "platforms;android-23" "extras;android;m2repository" "extras;google;m2repository" --no_https \
#     && sudo ./tools/bin/sdkmanager "extras;m2repository;com;android;support;constraint;constraint-layout-solver;1.0.2" "extras;m2repository;com;android;support;constraint;constraint-layout;1.0.2" --no_https \
#     && sudo ./tools/bin/sdkmanager --list


# # Setup environment
# ENV ANDROID_HOME /opt/android/sdk
# ENV PATH ${PATH}:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools


# RUN echo ANDROID_HOME="$ANDROID_HOME" >> /etc/environment
# # drop back to the regular jenkins user - good practice
# USER jenkins
