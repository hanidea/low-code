<template>
  <div>
    <div style="">
      <a-row type="flex" >
        <a-col span:4>
          <div v-for="(itemtt,indextt) in headerArray" :key="indextt">
            <div v-for="(itemw,indexww) in itemtt" :key="indexww">
              <div v-if="indexww==='he0'" class="list_header_left height_40">{{itemw}}</div>
              <div v-else-if="indexww==='he1'" class="list_header_left height_80">{{itemw}}</div>
              <div v-else class="list_header_left height_120">{{itemw}}</div>
            </div>
          </div>
        </a-col>
        <a-col span:20>
          <a-row v-for="(item, index) in sampleArray" :key="index" type="flex">
            <template v-for="items in item">
              <div v-for="(itemss, indexs) in items" class="list_style" :key="indexs" >
                <a-col v-if="indexs==='key1'||indexs==='key2'||indexs==='key3'||indexs==='key4'||indexs==='key5'||indexs==='key6'||indexs==='key7'||indexs==='key8'" :flex="width" class="item_bg item_style">
                  <span class="line">|</span> {{itemss}}
                </a-col>
                <a-col v-else :flex="width" class="item_style">
                  {{itemss}}
                </a-col>
              </div>
            </template>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div style="margin-top:20px;">
      <a-row type="flex" >
        <a-col span:4>
          <div v-for="(itemtt,indextt) in salesHeaderArray" :key="indextt">
            <div v-for="(itemw,indexww) in itemtt" :key="indexww">
              <div v-if="indexww==='he0'" class="list_header_left height_40">{{itemw}}</div>
              <div v-else-if="indexww==='he1'" class="list_header_left height_40_no">{{itemw}}</div>
            </div>
          </div>
        </a-col>
        <a-col span:20>
          <a-row v-for="(item, index) in salesSampleArray" :key="index" type="flex">
            <template v-for="items in item">
              <div v-for="(itemss, indexs) in items" class="list_style" :key="indexs" >
                <a-col v-if="indexs==='key1'||indexs==='key2'||indexs==='key3'||indexs==='key4'||indexs==='key5'||indexs==='key6'||indexs==='key7'||indexs==='key8'||indexs==='key9'||indexs==='key10'||indexs==='key11'||indexs==='key12'" :flex="width" class="item_bg sales_item_style">
                  <span class="line">|</span> {{itemss}}
                </a-col>
                <a-col v-else :flex="width" class="sales_item_style">
                    <span v-if="itemss!='0'"><a>{{itemss}}</a></span>
                    <span v-else>{{itemss}}</span>
                </a-col>
              </div>
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
      salesHeaderArray:[{
        he0:"",
        he1:"CP销售培训销售收入",
      }],
      salesSampleArray:[
        [{
          key1:"22W01",
          key2:"22W02",
          key3:"22W03",
          key4:"22W04",
          key5:"22W05",
          key6:"22W06",
          key7:"22W07",
          key8:"22W08",
          key9:"22W09",
          key10:"22W10",
          key11:"22W11",
          key12:"22W12",
        }],
        [{
          S1:"0",
          S2:"1599",
          S3:"0",
          S4:"0",
          S5:"0",
          S6:"0",
          S7:"0",
          S8:"0",
          S9:"0",
          S10:"0",
          S11:"0",
          S12:"1599",
        }],
      ],
      headerArray:[{
        he0:"",
        he1:"业绩",
        he2:"去年同期增长",
        he3:"今年目标完成比例"
      }],
      sampleArray:[
        [{
          key1:"本期",
          key2:"上期",
          key3:"本月",
          key4:"上月",
          key5:"本季",
          key6:"上季",
          key7:"本年",
          key8:"上年",
        }],
        [{
          C1:"22W12-22W12",
          C2:"22W13-22W13",
          C3:"22W14-22W14",
          C4:"22W15-22W15",
          C5:"22W15-22W15",
          C6:"22W17-22W17",
          C7:"22W18-22W18",
          C8:"22W19-22W19",
        }],
        [{
          C1:0,
          C2:0,
          C3:0,
          C4:0,
          C5:0,
          C6:0,
          C7:0,
          C8:0,
        }],
        [{
          C1:"22W12-22W12",
          C2:"22W13-22W13",
          C3:"22W14-22W14",
          C4:"22W15-22W15",
          C5:"22W15-22W15",
          C6:"22W17-22W17",
          C7:"22W18-22W18",
          C8:"22W19-22W19",
        }],
        [{
          C1:0,
          C2:0,
          C3:0,
          C4:0,
          C5:0,
          C6:0,
          C7:0,
          C8:0,
        }],
        [{
          C1:"-",
          C2:"-",
          C3:"-",
          C4:"-",
          C5:"-",
          C6:"-",
          C7:"-",
          C8:"-",
        }],
        [{
          C1:"22W12-22W12",
          C2:"22W13-22W13",
          C3:"22W14-22W14",
          C4:"22W15-22W15",
          C5:"22W15-22W15",
          C6:"22W17-22W17",
          C7:"22W18-22W18",
          C8:"22W19-22W19",
        }],
        [{
          C1:0,
          C2:0,
          C3:0,
          C4:0,
          C5:0,
          C6:0,
          C7:0,
          C8:0,
        }],
        [{
          C1:"-",
          C2:"-",
          C3:"-",
          C4:"-",
          C5:"-",
          C6:"-",
          C7:"-",
          C8:"-",
        }]

      ],
    };
  },
};
</script>
<style>
.list_header_left{
  border-bottom:1px solid #E4E7EB;padding-left:10px;padding-right:10px;text-align:center;
  width: 150px;
}
.height_40{
  height:40px;
  line-height: 40px;
  background-color:#F4F6FA;
}
.height_40_no{
  height:40px;
  line-height: 40px;
}
.height_80{
  height:80px;
  line-height: 80px;
}
.height_120{
  height:120px;
  line-height: 120px;
}
.list_style:nth-child(odd)>.item_style{
  background-color: #EEF5FF;
}
.list_style:nth-child(even)>.item_style{
  background-color: #FFFFFF;
}
.line{
  color:#E4E7EB;
  margin-right:5px;
}
.item_bg{
  background-color:#F4F6FA !important;
  padding-left:0px !important;
}
.item_style{
  padding-left:10px;
  border-bottom:1px solid #E4E7EB;
  width: 150px;
  height: 40px;
  line-height:40px;
}
.sales_item_style{
  padding-left:10px;
  border-bottom:1px solid #E4E7EB;
  width: 100px;
  height: 40px;
  line-height:40px;
}
</style>
