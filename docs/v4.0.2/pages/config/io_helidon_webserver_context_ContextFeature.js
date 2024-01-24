<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3hNwPr" title="原文 : ContextFeature (webserver.context) Configuration">ContextFeature (webserver.context)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.u8Ujh" title="原文 : Type: io.helidon.webserver.context.ContextFeature">タイプ: <a href="/apidocs/io.helidon.webserver.context/io/helidon/webserver/context/ContextFeature.html" target="_blank">io.helidon.webserver.context.ContextFeature</a></span></p>

<markup
lang="text"
title="Config key"
>context</markup>

<p><span class="merged" id="all.31kiUh.12" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1upsag.2"  title="原文: io.helidon.webserver.spi.ServerFeatureProvider"><code>io.helidon.webserver.spi.ServerFeatureProvider</code></span></p>

</li>
</ul>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.83"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.79" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.86"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.86"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.86"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.86"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.5HZ82.3"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.25"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3r8rb9.spl1" title="原文 : List of sockets to register this feature on.">この機能を登録するソケットのリスト。</span> <span class="merged" id="all.3r8rb9.spl2" title="原文 : If empty, it would get registered on all sockets.">空の場合は、すべてのソケットに登録されます。</span> </p>

<markup>@return socket names to register on, defaults to empty (all available sockets)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.2"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.3"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.eGLDu"  title="原文: 1100.0"><code>1100.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3mSlTb.spl1" title="原文 : Weight of the context feature.">コンテキスト機能の重み。</span> <span class="merged" id="all.3mSlTb.spl2" title="原文 : As it is used by other features, the default is quite high: io.helidon.webserver.context.ContextFeature#WEIGHT.">他の機能で使用されているので、既定値は非常に高い: <code>io.helidon.webserver.context.ContextFeature#WEIGHT</code>。</span> </p>

<markup>@return weight of the feature</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
