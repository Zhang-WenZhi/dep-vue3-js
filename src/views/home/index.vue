<template>
    <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
      <a-layout>
        <a-layout-header :style="headerStyle">Header</a-layout-header>
        <a-layout-content :style="contentStyle">Content</a-layout-content>
        <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
      </a-layout>
  
      <a-layout>
        <a-layout-header :style="headerStyle">Header</a-layout-header>
        <a-layout>
          <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
          <a-layout-content :style="contentStyle">Content</a-layout-content>
        </a-layout>
        <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
      </a-layout>
  
      <a-layout>
        <a-layout-header :style="headerStyle">Header</a-layout-header>
        <a-layout>
          <a-layout-content :style="contentStyle">Content</a-layout-content>
          <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
        </a-layout>
        <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
      </a-layout>
  
      <a-layout>
        <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
        <a-layout>
          <a-layout-header :style="headerStyle">Header</a-layout-header>
          <a-layout-content :style="contentStyle">Content</a-layout-content>
          <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
        </a-layout>
      </a-layout>
    </a-space>
  </template>
  <script setup>
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  export {};
  </script>

<style scoped>

</style>