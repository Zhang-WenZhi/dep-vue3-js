<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <a-space>
          <div class="logo">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
          </div>
          <!-- <a-menu mode="horizontal">
            <a-sub-menu key="用户-sub1">
              <template #title>
                <span>
                  <user-outlined />
                  <span>用户</span>
                </span>
              </template>
              <a-menu-item key="wenzhi-1">张文治</a-menu-item>
              <a-menu-item key="zhanzai-2">张湛哉</a-menu-item>
              <a-menu-item key="exit-3" :style="{color: 'red'}">退出</a-menu-item>
            </a-sub-menu>
          </a-menu> -->
          <!-- <a-menu mode="horizontal">
            <a-sub-menu key="Python-sub2">
              <template #title>
                <span>
                  <AndroidOutlined />
                  <span>Python教程</span>
                </span>
              </template>
              <a-menu-item key="Flask-6">Flask</a-menu-item>
              <a-menu-item key="Django-8">Django</a-menu-item>
            </a-sub-menu>
          </a-menu> -->
          <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />

        </a-space>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
          Content
          <!-- <button type="primary">Primary Button</button> -->
        </div>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        Footer
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-space>
</template>
<script setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  BugOutlined,
  PartitionOutlined,
  GoldOutlined,
  FireOutlined,
  UserSwitchOutlined,
  DeleteOutlined
} from '@ant-design/icons-vue';
// import { ref } from 'vue';
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
const current = ref(['mail']);

const items = ref([
  {
    key: 'user',
    icon: () => h(UserSwitchOutlined),
    label: '用户',
    title: '用户',
    children: [
      {
        label: '张文治',
        key: 'wenzhi:1',
        icon: () => h(UserOutlined),
      },
      {
        label: '张湛哉',
        key: 'zhanzai:2',
        icon: () => h(UserOutlined),
      },
      {
        label: '退出',
        key: 'exit:3',
        icon: () => h(DeleteOutlined),
      },
    ],
  },
  {
    key: 'python',
    icon: () => h(AndroidOutlined),
    label: 'Python教程',
    title: 'Python教程',
    children: [
      {
        label: 'Flask',
        key: 'flask:1',
        icon: () => h(GoldOutlined),
      },
      {
        label: 'Django',
        key: 'django:2',
        icon: () => h(DesktopOutlined),
      },
    ],
  },
  {
    key: 'java',
    icon: () => h(AppleOutlined),
    label: 'Java教程',
    title: 'Java教程',
    children: [
      {
        label: 'Spring Boot',
        key: 'spring-boot:1',
        icon: () => h(GoldOutlined),
      },
      {
        label: 'Mybatis Flex',
        key: 'mybatix-flex:2',
        icon: () => h(DesktopOutlined),
      },
    ],
  },
  {
    key: 'go',
    icon: () => h(AppstoreOutlined),
    label: 'Go教程',
    title: 'Go教程',
    children: [
      {
        label: 'gin教程',
        key: 'gin:1',
        icon: () => h(FireOutlined),
      },
      {
        label: 'wails(桌面端)',
        key: 'wails:2',
        icon: () => h(FireOutlined),
      },
    ],
  },
  {
    key: 'typescript-javascript',
    icon: () => h(WindowsOutlined),
    label: 'Typescript+JavaScript教程',
    title: 'Typescript+JavaScript教程',
    children: [
      {
        type: 'group',
        label: '前端框架',
        children: [
          {
            label: 'React',
            key: 'react:1',
            icon: () => h(GoldOutlined),
          },
          {
            label: 'Vue3',
            key: 'vue3:2',
            icon: () => h(DesktopOutlined),
          },
        ],
      },
      {
        type: 'group',
        label: 'UI框架',

        children: [
          {
            label: 'Ant Design',
            key: 'ant-design:3',
            icon: () => h(BugOutlined),
          },
          {
            label: 'Element Plus',
            key: 'element-plus:4',
            icon: () => h(PartitionOutlined),
          },
        ],
      },
    ],
  },
  {
    key: 'rust',
    label: h(
      'a',
      {
        href: 'https://quickref.cn/',
        target: '_blank',
      },
      'Rust教程',
    ),
    title: 'Rust链接',
  },
  {
    key: 'c-plus-plus',
    label: h(
      'a',
      {
        href: 'https://vscode.dev',
        target: '_blank',
      },
      'C++教程',
    ),
    title: 'C++链接',
  },
]);


const headerStyle = {
  textAlign: 'center',
  color: 'green',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ffffff',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 800,
  lineHeight: '800px',
  color: 'red',
  // backgroundColor: '#108ee9',
  padding: '0 50px',
  marginTop: '64px'
};
const footerStyle = {
  textAlign: 'center',
  color: 'pin',
  // backgroundColor: '#fff', // #7dbcea
};
// export {};
</script>

<style scoped></style>