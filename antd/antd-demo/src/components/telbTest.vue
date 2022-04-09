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
  </div>
  </div>
</template>

<script>

export default {
  data() {
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
    };
  },
};
</script>
<style>
</style>
