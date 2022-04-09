<template>
  <div>
  <div>
    <a-row type="flex">
    <a-col span:4>
      <div v-for="(itemtt,indextt) in headerArray" :key="indextt" style="width:100px;margin-top:23px;">
      <div v-for="(itemw,indexww) in itemtt" :key="indexww">
        <div style="border:1px solid darkgreen;">{{itemw}}</div>
      </div>
      </div>
    </a-col>
    <a-col span:16>
      <a-row v-for="(item, index) in sampleArray" :key="index" type="flex" style="width: 1200px;">
        <template v-for="items in item">
          <template v-for="(itemss, indexs) in items" >
            <a-col :flex="width" :key="indexs" style="border:1px solid blue;width: 100px;">{{itemss}}</a-col>
          </template>
        </template>
      </a-row>
    </a-col>
    </a-row>
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
        <Pivot
            :data="data"
            v-model="fields"
            :reducer="reducer"
            :showSettings="defaultShowSettings"
        >
        </Pivot>
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
    <div>
      <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="Password" prop="pass">
          <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="Confirm" prop="checkPass">
          <a-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="Age" prop="age">
          <a-input v-model.number="ruleForm.age" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="submitForm('ruleForm')">
            Submit
          </a-button>
          <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
            Reset
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div>
      <a-table
          :columns="columns"
          :data-source="data"
          bordered
          size="middle"
          :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
      />
    </div>
    <div>
      <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input v-model="formInline.password" type="password" placeholder="Password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
              type="primary"
              html-type="submit"
              :disabled="formInline.user === '' || formInline.password === ''"
          >
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>

</template>

<script>
import { Pivot } from 'vue-pivot-table-plus'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 200,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

export default {
  components:{Pivot},
  data() {

    let checkPending;
    let checkAge = (rule, value, callback) => {
      clearTimeout(checkPending);
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      checkPending = setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      headerArray:[{
        he1:"he1",
        he2:"he2"
      }],
      sampleArray:[
        [{
          key1:"header1",
          key2:"header2",
          key3:"header3",
          key4:"header4",
          key5:"header5",
          key6:"header6",
          key7:"header7",
          key8:"header8",
          key9:"header9",
          key10:"header10"
        }],
        [{
          key1:95,
          key2:27,
          key3:31,
          key4:80,
          key5:43,
          key6:70,
          key7:28,
          key8:70,
          key9:95,
          key10:41
        }],
        [{
          key1:66,
          key2:36,
          key3:90,
          key4:59,
          key5:1,
          key6:31,
          key7:45,
          key8:58,
          key9:72,
          key10:32,
        }]
      ],
      data: Object.freeze([{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]),
      fields: {
        availableFields: [],
        rowFields: [{
          getter: item => item.x,
          label: 'X-axis'
        }, {
          getter: item => item.y,
          label: 'Y-axis',
        }],
        colFields: [{
          getter: item => item.z,
          label: 'Z-axis'
        }],
        fieldsOrder: {}
      },
      //reducer: (sum, item) => sum + 1,
      defaultShowSettings: true,
      tableHeight: '400px',
      formInline: {
        user: '',
        password: '',
      },
      columns,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        age: [{ validator: checkAge, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSubmit() {
      console.log(this.formInline);
    },
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
