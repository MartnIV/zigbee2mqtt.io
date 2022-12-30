"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67793],{496380:(e,o,t)=>{t.r(o),t.d(o,{data:()=>n});const n=JSON.parse('{"key":"v-94752a94","path":"/devices/7299760PH.html","title":"Philips 7299760PH control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 7299760PH control via MQTT","description":"Integrate your Philips 7299760PH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Pairing","slug":"pairing-1","link":"#pairing-1","children":[]},{"level":3,"title":"Power-on behavior","slug":"power-on-behavior","link":"#power-on-behavior","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Effect (enum)","slug":"effect-enum","link":"#effect-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1672386572000},"filePathRelative":"devices/7299760PH.md"}')},343390:(e,o,t)=>{t.r(o),t.d(o,{default:()=>F});var n=t(166252);const a=(0,n._)("h1",{id:"philips-7299760ph",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#philips-7299760ph","aria-hidden":"true"},"#"),(0,n.Uk)(" Philips 7299760PH")],-1),s=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),i=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"7299760PH")],-1),r=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Hue Bloom")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"light (state, brightness, color_xy, color_hs), effect, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/7299760PH.jpg",alt:"Philips 7299760PH"})])],-1),d=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Philips LivingColors IRIS and Philips LivingColors Bloom Devices that comes with Philips (HUE) Remote Gen 2 (Touch Wheel) or Gen 3 (Round Click Wheel) can be paired via Zigbee. Devices with Gen 1 Remote don&#39;t use Zigbee and can not be paired. The Philips LivingColors Remote can not be paired via Zigbee because it only support ZigBee Light Link (ZLL).</p><p>To Pair hold Button ON and Bottom Left Key (Favorite 1) on the Remote in Front of the Device until the Device Light blinks and lights Orange. If connection was successful the Device Light will light Green.</p><p><strong>WARNING</strong>: If you pair your Device to a Zigbee Network which is not using a ZLL Channel you can&#39;t reset the Device with the Philips LivingColors Remote Gen 3. The Gen 3 Remote will only try ZLL Channels to find the Device! Maybe it&#39;s possible to reset the Device with a Philips LivingColors Remote Gen 2 as it should try all Zigbee Channels to find the Device.</p><p>With IKEA Tradfri Remote Control it can maybe resetted it this case, see <a href="#tradfri-remote-control">TRADFRI remote control</a></p>',6),p={href:"https://www.download.p4c.philips.com/files/7/7099760pu/7099760pu_dfu_eng.pdf",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.download.p4c.philips.com/files/7/7099930ph/7099930ph_dfu_eng.pdf",target:"_blank",rel:"noopener noreferrer"},q=(0,n._)("h3",{id:"pairing-1",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing-1","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),b=(0,n._)("p",null,"Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.",-1),g=(0,n._)("h4",{id:"touchlink-factory-reset",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#touchlink-factory-reset","aria-hidden":"true"},"#"),(0,n.Uk)(" Touchlink factory reset")],-1),m=(0,n._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,n.Uk)(" Hue bridge")],-1),v=(0,n._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),f=(0,n._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,n.Uk)(" Hue dimmer switch")],-1),_=(0,n._)("ol",null,[(0,n._)("li",null,"Power-supply the bulb"),(0,n._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,n._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,n._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,n._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),k={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},w=(0,n._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,n.Uk)(" Bluetooth (if supported by device)")],-1),y={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},T={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},E=(0,n._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,n.Uk)(" TRADFRI remote control")],-1),N={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},x=(0,n._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,n.Uk)(" Power-on behavior")],-1),L={href:"https://www.zigbee2mqtt.io/../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttfriendly_nameset",target:"_blank",rel:"noopener noreferrer"},P=(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),D=(0,n.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string-property property">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string-property property">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string-property property">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p>',5),H=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),I=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),A=(0,n.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_xy</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_xy</code>: To control the XY color (CIE 1931 color space) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;x&quot;: X_VALUE, &quot;y&quot;: Y_VALUE}}</code> (e.g. <code>{&quot;color&quot;:{&quot;x&quot;:0.123,&quot;y&quot;:0.123}}</code>). To read the XY color send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;x&quot;:&quot;&quot;,&quot;y&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the XY color via RGB: <ul><li><code>{&quot;color&quot;: {&quot;r&quot;: R, &quot;g&quot;: G, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;r&quot;:46,&quot;g&quot;:102,&quot;b&quot;:150}}</code></li><li><code>{&quot;color&quot;: {&quot;rgb&quot;: &quot;R,G,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;rgb&quot;:&quot;46,102,150&quot;}}</code></li><li><code>{&quot;color&quot;: {&quot;hex&quot;: HEX}}</code> e.g. <code>{&quot;color&quot;:{&quot;hex&quot;:&quot;#547CFF&quot;}}</code></li></ul></li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, brightness):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string-property property">&quot;hue_move&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;hue_step&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">// Decrease hue by 90 (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;saturation_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;saturation_step&quot;</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token comment">// Increase saturation by 66 (allowed value range: -255 till 255)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),R={},F=(0,t(983744).Z)(R,[["render",function(e,o){const t=(0,n.up)("RouterLink"),R=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[s,(0,n._)("tbody",null,[i,(0,n._)("tr",null,[r,(0,n._)("td",null,[(0,n.Wm)(t,{to:"/supported-devices/#v=Philips"},{default:(0,n.w5)((()=>[(0,n.Uk)("Philips")])),_:1})])]),l,u,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),d,(0,n._)("p",null,[(0,n._)("a",p,[(0,n.Uk)("Philips LivingColors Bloom Manual"),(0,n.Wm)(R)])]),(0,n._)("p",null,[(0,n._)("a",h,[(0,n.Uk)("Philips LivingColors Iris Manual"),(0,n.Wm)(R)])]),q,b,g,(0,n._)("p",null,[(0,n.Uk)("See "),(0,n.Wm)(t,{to:"/guide/usage/touchlink.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("Touchlink")])),_:1})]),m,v,f,(0,n._)("p",null,[(0,n.Uk)("With "),(0,n.Wm)(t,{to:"/devices/324131092621.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("one")])),_:1}),(0,n.Uk)(" of the "),(0,n.Wm)(t,{to:"/devices/929002398602.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("two")])),_:1}),(0,n.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset.")]),_,(0,n._)("p",null,[(0,n.Uk)("See also the "),(0,n._)("a",k,[(0,n.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),(0,n.Wm)(R)]),(0,n.Uk)(".")]),w,(0,n._)("p",null,[(0,n.Uk)("Install the Philips Hue Bluetooth app for "),(0,n._)("a",y,[(0,n.Uk)("Android"),(0,n.Wm)(R)]),(0,n.Uk)(" or "),(0,n._)("a",T,[(0,n.Uk)("iOS"),(0,n.Wm)(R)]),(0,n.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)")]),E,(0,n._)("p",null,[(0,n.Uk)("This may also be possible with the "),(0,n._)("a",N,[(0,n.Uk)("Tradfri Remote Control"),(0,n.Wm)(R)]),(0,n.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),(0,n._)("a",U,[(0,n.Uk)("This may not always work, even if the Hue bulb starts flashing"),(0,n.Wm)(R)]),(0,n.Uk)(".")]),x,(0,n._)("p",null,[(0,n.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),(0,n._)("a",L,[P,(0,n.Wm)(R)]),(0,n.Uk)(" with the following payload.")]),D,(0,n.kq)(" Notes END: Do not edit below this line "),H,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),I,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),A])}]])}}]);