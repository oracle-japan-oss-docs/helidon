<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1WmeVx" title="原文 : MediaContext (media.common) Configuration">MediaContext (media.common)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.Jb8vL" title="原文 : Type: io.helidon.media.common.MediaContext">タイプ: <a href="./apidocs/io.helidon.media.common/io/helidon/media/common/MediaContext.html" target="_blank">io.helidon.media.common.MediaContext</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.19"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.1" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.21"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.21"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.21"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.21"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.bZKKF"  title="原文: services"><code>services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1RtY38" title="原文 : io.helidon.media.common.spi.MediaSupportProvider[] (service provider interface)">io.helidon.media.common.spi.MediaSupportProvider [] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3WdiUu.spl1" title="原文 : Configures this Builder from the supplied Config. &lt;table class=&quot;config&quot;&gt; &lt;caption&gt;Optional configuration parameters&lt;/caption&gt; &lt;tr&gt; &lt;th&gt;key&lt;/th&gt; &lt;th&gt;description&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;register-defaults&lt;/td&gt; &lt;td&gt;Whether to register default reader and writers&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;discover-services&lt;/td&gt; &lt;td&gt;Whether to discover services via service loader&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;filter-services&lt;/td&gt; &lt;td&gt;Whether to filter discovered services by service names in services section&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;services&lt;/td&gt; &lt;td&gt;Configuration section for each service.">提供された構成からこのビルダーを構成します。 &lt;table class="config"> &lt;caption>オプションの構成パラメータ &lt;/caption> &lt;tr> &lt;th>キー &lt;/th> &lt;th>説明 &lt;/th> &lt;/tr> &lt;td>レジスタ-デフォルト &lt;/td> &lt;td>デフォルト・リーダーおよびライターを登録するかどうか &lt;/td> &lt;/tr> &lt;tr> &lt;td>検出-サービス &lt;/td> &lt;td>サービス・ローダーを介してサービスを検出するかどうか &lt;/td> &lt;/tr> &lt;tr> &lt;td>フィルタ-サービス &lt;/td> &lt;td>サービス・セクション &lt;/td> &lt;/td> &lt;/tr> &lt;tr> &lt;td>サービス・セクションのサービス名でサービスをフィルタするかどうか &lt;/td> &lt;td> &lt;/td> &lt;td>構成セクション。</span> <span class="merged" id="all.3WdiUu.spl2" title="原文 : Each entry has to have &quot;name&quot; parameter.">各エントリには"name"パラメータが必要です。</span> <span class="merged" id="all.3WdiUu.spl3" title="原文 : It is also used for filtering of loaded services.&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;">ロードされたサービスのフィルタリングにも使用されます。&lt;/td> &lt;/tr> &lt;/table></span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.19" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.22"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.22"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.22"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.22"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.16Yl9A"  title="原文: discover-services"><code>discover-services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.21"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.6"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3v2ZGM" title="原文 : Whether Java Service Loader should be used to load MediaSupportProvider.">MediaSupportProviderのロードにJavaサービス・ローダーを使用するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XEctA"  title="原文: filter-services"><code>filter-services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.22"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.7"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2m19bM.spl1" title="原文 : Whether services loaded by Java Service Loader should be filtered.">Java Service Loaderによってロードされたサービスをフィルタするかどうか。</span> <span class="merged" id="all.2m19bM.spl2" title="原文 : All of the services which should pass the filter, have to be present under services section of configuration.">フィルタを渡す必要があるすべてのサービスは、構成の<code>services</code>セクションの下に存在する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Tg34i"  title="原文: register-defaults"><code>register-defaults</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.23"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.11"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uuw2o" title="原文 : Whether default readers and writers should be registered.">デフォルトのリーダーおよびライターを登録するかどうか。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
