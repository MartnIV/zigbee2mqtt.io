"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58811],{672829:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-59fcb30f","path":"/devices/EER40030.html","title":"Schneider Electric EER40030 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric EER40030 control via MQTT","description":"Integrate your Schneider Electric EER40030 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-30T19:17:03.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Channels","slug":"channels","link":"#channels","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1672386572000},"filePathRelative":"devices/EER40030.md"}')},366241:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(166252);const o=(0,n._)("h1",{id:"schneider-electric-eer40030",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#schneider-electric-eer40030","aria-hidden":"true"},"#"),(0,n.Uk)(" Schneider Electric EER40030")],-1),r=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"EER40030")],-1),a=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee smart plug with power meter")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"switch (state), power, energy, linkquality")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EER40030.jpg",alt:"Schneider Electric EER40030"})])],-1),h=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),u=(0,n._)("h3",{id:"channels",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#channels","aria-hidden":"true"},"#"),(0,n.Uk)(" Channels")],-1),p=(0,n._)("p",null,"Due to limitations on this devices firmware, it will only join to zigbee networks on channels 11, 15, 20 and 25.",-1),g=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},w=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[r,(0,n._)("tbody",null,[l,(0,n._)("tr",null,[a,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,n.w5)((()=>[(0,n.Uk)("Schneider Electric")])),_:1})])]),d,c,s])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,u,p,(0,n.kq)(" Notes END: Do not edit below this line "),g])}]])}}]);