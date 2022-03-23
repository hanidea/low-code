<template>
  <div>
  <div>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
  <div>
    <a-row>
      <a-col :span="12">
        col-12
      </a-col>
      <a-col :span="12">
        col-12
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
        col-8
      </a-col>
      <a-col :span="8">
        col-8
      </a-col>
      <a-col :span="8">
        col-8
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        col-6
      </a-col>
      <a-col :span="6">
        col-6
      </a-col>
      <a-col :span="6">
        col-6
      </a-col>
      <a-col :span="6">
        col-6
      </a-col>
    </a-row>
   </div>
      <div>
        <p>Align Top</p>
        <a-row type="flex" justify="center" align="top">
          <a-col :span="4">
            <p class="height-100">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-50">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-120">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-80">
              col-4
            </p>
          </a-col>
        </a-row>

        <p>Align Center</p>
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="4">
            <p class="height-100">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-50">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-120">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-80">
              col-4
            </p>
          </a-col>
        </a-row>

        <p>Align Bottom</p>
        <a-row type="flex" justify="space-between" align="bottom">
          <a-col :span="4">
            <p class="height-100">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-50">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-120">
              col-4
            </p>
          </a-col>
          <a-col :span="4">
            <p class="height-80">
              col-4
            </p>
          </a-col>
        </a-row>
      </div>
    <div>
      <p>sub-element align left</p>
      <a-row type="flex" justify="start">
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
      </a-row>

      <p>sub-element align center</p>
      <a-row type="flex" justify="center">
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
      </a-row>

      <p>sub-element align right</p>
      <a-row type="flex" justify="end">
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
      </a-row>

      <p>sub-element monospaced arrangement</p>
      <a-row type="flex" justify="space-between">
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
      </a-row>

      <p>sub-element align full</p>
      <a-row type="flex" justify="space-around">
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
        <a-col :span="4">
          col-4
        </a-col>
      </a-row>
    </div>
    <div>
      <a-divider orientation="left">
        Percentage columns
      </a-divider>
      <a-row type="flex">
        <a-col :flex="2">2 / 5</a-col>
        <a-col :flex="3">3 / 5</a-col>
      </a-row>
      <a-divider orientation="left">
        Fill rest
      </a-divider>
      <a-row type="flex">
        <a-col flex="100px">100px</a-col>
        <a-col flex="auto">auto</a-col>
      </a-row>
      <a-divider orientation="left">
        Raw flex style
      </a-divider>
      <a-row type="flex">
        <a-col flex="1 1 200px">1 1 200px</a-col>
        <a-col flex="0 1 300px">0 1 300px</a-col>
      </a-row>
    </div>
    <div class="gutter-example">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="6">
          <div class="gutter-box">
            col-6
          </div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="gutter-box">
            col-6
          </div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="gutter-box">
            col-6
          </div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="gutter-box">
            col-6
          </div>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row>
        <a-col :span="8">
          col-8
        </a-col>
        <a-col :span="8" :offset="8">
          col-8
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6" :offset="6">
          col-6 col-offset-6
        </a-col>
        <a-col :span="6" :offset="6">
          col-6 col-offset-6
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" :offset="6">
          col-12 col-offset-6
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row>
        <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
          Col
        </a-col>
        <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
          Col
        </a-col>
        <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
          Col
        </a-col>
      </a-row>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
