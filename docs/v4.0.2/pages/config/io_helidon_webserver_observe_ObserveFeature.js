<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1amK7v" title="原文 : ObserveFeature (webserver.observe) Configuration">ObserveFeature (webserver.observe)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4DxrdP" title="原文 : Type: io.helidon.webserver.observe.ObserveFeature">タイプ: <a href="/apidocs/io.helidon.webserver.observe/io/helidon/webserver/observe/ObserveFeature.html" target="_blank">io.helidon.webserver.observe.ObserveFeature</a></span></p>

<markup
lang="text"
title="Config key"
>observe</markup>

<p><span class="merged" id="all.31kiUh.18" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1upsag.5"  title="原文: io.helidon.webserver.spi.ServerFeatureProvider"><code>io.helidon.webserver.spi.ServerFeatureProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.89"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.84" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.91"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.91"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.91"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.91"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.3"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2cqsnT.4" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2r6K0i"  title="原文: @io.helidon.cors.CrossOriginConfig@.create()"><code>@io.helidon.cors.CrossOriginConfig@.create()</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1IHEgE" title="原文 : Cors support inherited by each observe provider, unless explicitly configured.">明示的に構成されていないかぎり、各監視プロバイダによって継承されるCorsサポート。</span></p>

<markup>@return cors support to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.14"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.142"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.77"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3AT79U" title="原文 : Whether the observe support is enabled.">監視サポートが有効かどうか。</span></p>

<markup>@return `false` to disable observe feature</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QMdx0"  title="原文: endpoint"><code>endpoint</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.181"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4YkJI9"  title="原文: /observe"><code>/observe</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4KrmwC.spl1" title="原文 : Root endpoint to use for observe providers.">監視プロバイダに使用するルート・エンドポイント。</span> <span class="merged" id="all.4KrmwC.spl2" title="原文 : By default, all observe endpoint are under this root endpoint.">デフォルトでは、すべての監視エンドポイントがこのルート・エンドポイントの下にあります。</span> </p>

<markup>Example:
&lt;br&gt;
If root endpoint is `/observe` (the default), and default health endpoint is `health` (relative),
health endpoint would be `/observe/health`.</markup>
<markup>@return endpoint to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2xbIrX"  title="原文: observers"><code>observers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4C2P1H" title="原文 : io.helidon.webserver.observe.spi.Observer[] (service provider interface)">io.helidon.webserver.observe.spi.Observer[] (サービス・プロバイダ・インタフェース)</span></p>

<p><span class="merged" id="all.ETeZ4.2"  title="原文:: Such as:">これには次のようなものがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.29f3Mj" title="原文 : ConfigObserver"><router-link to="/config/io_helidon_webserver_observe_config_ConfigObserver">ConfigObserver</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3REM3l" title="原文 : InfoObserver"><router-link to="/config/io_helidon_webserver_observe_info_InfoObserver">InfoObserver</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Ogdo6" title="原文 : LogObserver"><router-link to="/config/io_helidon_webserver_observe_log_LogObserver">LogObserver</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3TGRP3" title="原文 : TracingObserver"><router-link to="/config/io_helidon_webserver_observe_tracing_TracingObserver">TracingObserver</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Qk3DQ" title="原文 : metrics (MetricsObserver)"><router-link to="/config/io_helidon_webserver_observe_metrics_MetricsObserver">メトリクス(MetricsObserver)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.38yfAj" title="原文 : health (HealthObserver)"><router-link to="/config/io_helidon_webserver_observe_health_HealthObserver">ヘルス(HealthObserver)</router-link></span></p>

</li>
</ul>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3rXrfi.spl1" title="原文 : Observers to use with this observe features.">この監視機能で使用するオブザーバ。</span> <span class="merged" id="all.3rXrfi.spl2" title="原文 : Each observer type is registered only once, unless it uses a custom name (default name is the same as the type).">各オブザーバ・タイプは、カスタム名を使用しないかぎり、1回のみ登録されます(デフォルト名はタイプと同じです)。</span> </p>

<markup>@return list of observers to use in this feature</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.6"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.28"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3mGiIc.spl1" title="原文 : Sockets the observability endpoint should be exposed on.">可観測性エンドポイントを公開するソケット。</span> <span class="merged" id="all.3mGiIc.spl2" title="原文 : If not defined, defaults to the default socket (io.helidon.webserver.WebServer#DEFAULT_SOCKET_NAME.">定義されていない場合は、デフォルトのソケット(<code>io.helidon.webserver.WebServer#DEFAULT_SOCKET_NAME</code>)にデフォルト設定されます。</span> <span class="merged" id="all.3mGiIc.spl3" title="原文 : Each observer may have its own configuration of sockets that are relevant to it, this only controls the endpoints!">各オブザーバは、それに関連するソケットの独自の構成を持つことができます。これはエンドポイントのみを制御します。</span> </p>

<markup>@return list of sockets to register observe endpoint on</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.5"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.6"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2vaxpQ"  title="原文: 80.0"><code>80.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1mtHuP.spl1" title="原文 : Change the weight of this feature.">この機能の重みを変更します。</span> <span class="merged" id="all.1mtHuP.spl2" title="原文 : This may change the order of registration of this feature.">これにより、この機能の登録順序が変更される場合があります。</span> <span class="merged" id="all.1mtHuP.spl3" title="原文 : By default, observability weight is ObserveFeature#WEIGHT so it is registered after routing.">デフォルトでは、可観測性の重みは<code>ObserveFeature#WEIGHT</code>であるため、ルーティング後に登録されます。</span> </p>

<markup>@return weight to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
