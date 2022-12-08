<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.15pDPD"  title="原文:: Jaeger Tracing">Jaegerトレース</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1rtDJf" title="原文 : Helidon is integrated with the Jaeger tracer.">HelidonはJaegerトレーサと統合されています。</span></p>

<p><span class="merged" id="all.12TmTB.spl1" title="原文 : The Jaeger builder is loaded through ServiceLoader and configured.">Jaegerビルダーは、<code>ServiceLoader</code>を介してロードおよび構成されます。</span> <span class="merged" id="all.12TmTB.spl2" title="原文 : You could also use the Jaeger builder directly, though this would create a source-code dependency on the Jaeger tracer.">Jaegerビルダーを直接使用することもできますが、これによりJaegerトレーサにソース・コード依存関係が作成されます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.35"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3b9Lbv" title="原文 : To enable Jaeger Tracing add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Jaegerトレースを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_configuring_jaeger"><span class="merged" id="all.4Q7AwN" title="原文 : Configuring Jaeger">Jaegerの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1RQtos" title="原文 : The Jaeger tracer supports the following configuration options:">Jaegerトレーサは、次の構成オプションをサポートしています:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3H5QDp.1"  title="原文:: Key">キー</span></th>
<th><span class="merged" id="all.3T02MF.1"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.12txOr.1" title="原文 : Builder method">ビルダー・メソッド</span></th>
<th><span class="merged" id="all.4JM9z7.13"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48AK3O.2"  title="原文:: service">service</span></td>
<td class=""><span class="merged" id="all.2kt7dz.6"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.2ep5zp.1"  title="原文: serviceName">serviceName</span></td>
<td class=""><span class="merged" id="all.1uVeJz" title="原文 : Name of the service, to distinguish traces crossing service boundaries; Jaeger is using lower-case only, name will be automatically lower-cased">サービスの境界を越えるトレースを区別するためのサービスの名前。Jaegerでは小文字のみが使用され、名前は自動的に小文字になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fw5zI.2"  title="原文:: protocol">protocol</span></td>
<td class=""><span class="merged" id="all.2lyjLO.1"  title="原文:: http">http</span></td>
<td class=""><span class="merged" id="all.1auppA.1"  title="原文: collectorProtocol">collectorProtocol</span></td>
<td class=""><span class="merged" id="all.rpeHk" title="原文 : Protocol of the Jaeger trace collector (udp, http or https), to switch to agent mode, use udp">Jaegerトレース・コレクタ(<code>udp</code>、<code>http</code>または<code>https</code>)のプロトコル。エージェント・モードに切り替えるには、<code>udp</code>を使用</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nCbwD.2"  title="原文:: host">host</span></td>
<td class=""><span class="merged" id="all.2uFqEd.1"  title="原文:: localhost">localhost</span></td>
<td class=""><span class="merged" id="all.MSXL4.1"  title="原文: collectorHost">collectorHost</span></td>
<td class=""><span class="merged" id="all.1rUtm" title="原文 : Host of the Jaeger trace collector (IP Address, hostname, or FQDN)">Jaegerトレース・コレクタのホスト(IPアドレス、ホスト名またはFQDN)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1EiTCG.2"  title="原文:: port">port</span></td>
<td class=""><span class="merged" id="all.302hhY"  title="原文: 14268">14268</span></td>
<td class=""><span class="merged" id="all.2v5ch5.1"  title="原文: collectorPort">collectorPort</span></td>
<td class=""><span class="merged" id="all.1gVeEU" title="原文 : Port of the Jaeger trace collector">Jaegerトレース・コレクタのポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Crb5j.2"  title="原文:: path">path</span></td>
<td class=""><span class="merged" id="all.1PX6bA" title="原文 : /api/traces">/api/traces</span></td>
<td class=""><span class="merged" id="all.3wwaey.1"  title="原文: collectorPath">collectorPath</span></td>
<td class=""><span class="merged" id="all.207B4E" title="原文 : Path of the Jaeger trace collector">Jaegerトレース・コレクタのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1k6rr1"  title="原文:: token">token</span></td>
<td class=""><span class="merged" id="all.2kt7dz.7"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.1k6rr1.1"  title="原文:: token">token</span></td>
<td class=""><span class="merged" id="all.biCb4" title="原文 : Authentication token to use (token authentication)">使用する認証トークン(トークン認証)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Xzw3j"  title="原文:: username">username</span></td>
<td class=""><span class="merged" id="all.2kt7dz.8"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.4Xzw3j.1"  title="原文:: username">username</span></td>
<td class=""><span class="merged" id="all.3XbmqZ" title="原文 : User to authenticate (basic authentication)">認証するユーザー(基本認証)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.z2NmP"  title="原文:: password">password</span></td>
<td class=""><span class="merged" id="all.2kt7dz.9"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.z2NmP.1"  title="原文:: password">password</span></td>
<td class=""><span class="merged" id="all.4Yw4Js" title="原文 : Password of the user to authenticate (basic authentication)">認証するユーザーのパスワード(基本認証)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1APHLm"  title="原文:: propagation">propagation</span></td>
<td class=""><span class="merged" id="all.4L17Sd" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.4XCI7q"  title="原文: addPropagation">addPropagation</span></td>
<td class=""><span class="merged" id="all.45oMBi" title="原文 : Propagation type (jaeger or b3)">伝播タイプ(<code>jaeger</code>または<code>b3</code>)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GaW5R" title="原文 : log-spans">log-spans</span></td>
<td class=""><span class="merged" id="all.4L17Sd.1" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.4CaVye"  title="原文: logSpans">logSpans</span></td>
<td class=""><span class="merged" id="all.2ag64v" title="原文 : Whether to log spans (boolean)">スパンを記録するかどうか(ブール)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qO4tl"  title="原文:: max-queue-size">max-queue-size</span></td>
<td class=""><span class="merged" id="all.4L17Sd.2" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.2sl5r7"  title="原文: maxQueueSize">maxQueueSize</span></td>
<td class=""><span class="merged" id="all.rGe6a" title="原文 : Maximal queue size of the reporter (int)">レポータの最大キュー・サイズ(int)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ES9IN" title="原文 : flush-interval-ms">flush-interval-ms</span></td>
<td class=""><span class="merged" id="all.4L17Sd.3" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.2Gtrnm"  title="原文: flushInterval">flushInterval</span></td>
<td class=""><span class="merged" id="all.3CcAa8" title="原文 : Reporter flush interval in milliseconds">レポータのフラッシュ間隔(ミリ秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.47Vsi2" title="原文 : sampler-type">sampler-type</span></td>
<td class=""><span class="merged" id="all.4L17Sd.4" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.36V73H"  title="原文: samplerType">samplerType</span></td>
<td class=""><span class="merged" id="all.4Vt54Y" title="原文 : Sampler type (probabilistic, ratelimiting, remote)">サンプラ・タイプ(<code>probabilistic</code>, <code>ratelimiting</code>, <code>remote</code>)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ajYvB" title="原文 : sampler-param">sampler-param</span></td>
<td class=""><span class="merged" id="all.4L17Sd.5" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.3vw77y"  title="原文: samplerParam">samplerParam</span></td>
<td class=""><span class="merged" id="all.3IsYN6" title="原文 : Numeric parameter specifying details for the sampler type">サンプラ・タイプの詳細を指定する数値パラメータ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CKFvt" title="原文 : sampler-manager">sampler-manager</span></td>
<td class=""><span class="merged" id="all.4L17Sd.6" title="原文 : library default">ライブラリのデフォルト</span></td>
<td class=""><span class="merged" id="all.1JKFpk"  title="原文: samplerManager">samplerManager</span></td>
<td class=""><span class="merged" id="all.3beAu5" title="原文 : Host and port of the sampler manager for remote type"><code>remote</code>タイプのサンプラ・マネージャのホストおよびポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TwJHw.3"  title="原文:: enabled">enabled</span></td>
<td class=""><span class="merged" id="all.4eNR3V.2"  title="原文:: true">true</span></td>
<td class=""><span class="merged" id="all.1TwJHw.4"  title="原文:: enabled">enabled</span></td>
<td class=""><span class="merged" id="all.36lP7.2" title="原文 : If set to false, tracing would be disabled">falseに設定すると、トレースは無効になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22rkoQ.2"  title="原文:: tags">tags</span></td>
<td class=""><span class="merged" id="all.2kt7dz.10"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.4BwC9V.1" title="原文 : addTracerTag(String, String)">addTracerTag(String, String)</span></td>
<td class=""><span class="merged" id="all.2IRya2.1" title="原文 : String tags to add to each span">各スパンに追加する<code>String</code>タグ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PmqUy.2" title="原文 : boolean-tags">boolean-tags</span></td>
<td class=""><span class="merged" id="all.2kt7dz.11"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.1kWHb7.1" title="原文 : addTracerTag(String, boolean)">addTracerTag(String, boolean)</span></td>
<td class=""><span class="merged" id="all.1ZyRkc.1" title="原文 : boolean tags to add to each span">各スパンに追加する<code>boolean</code>タグ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kPIb3.2" title="原文 : int-tags">int-tags</span></td>
<td class=""><span class="merged" id="all.2kt7dz.12"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.4BoBQC.1" title="原文 : addTracerTag(String, int)">addTracerTag(String, int)</span></td>
<td class=""><span class="merged" id="all.b993f.1" title="原文 : int tags to add to each span">各スパンに追加する<code>int</code>タグ</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.4NI3k5" title="原文 : The following is an example of a Jaeger configuration, specified in the YAML format.">YAML形式で指定されたJaeger構成の例を次に示します。</span></p>

<markup
lang="yaml"

>tracing:
    service: "helidon-full-http"
    protocol: "https"     # JAEGER_ENDPOINT (if not udp, http is expected and endpoint is filled)
    host: "192.168.1.3"   # JAEGER_ENDPOINT
    port: 14240           # JAEGER_ENDPOINT
    path: "/api/traces/mine"   # JAEGER_ENDPOINT
    token: "token"        # JAEGER_AUTH_TOKEN
    # Either token or username/password
    #username:  "user"     # JAEGER_USER
    #password: "pass"      # JAEGER_PASSWORD
    propagation: "jaeger" # JAEGER_PROPAGATION either "jaeger" or "b3"
    log-spans: false      # JAEGER_REPORTER_LOG_SPANS
    max-queue-size: 42    # JAEGER_REPORTER_MAX_QUEUE_SIZE
    flush-interval-ms: 10001 # JAEGER_REPORTER_FLUSH_INTERVAL
    sampler-type: "remote"# JAEGER_SAMPLER_TYPE (https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration)
    sampler-param: 0.5    # JAEGER_SAMPLER_PARAM (number)
    sampler-manager: "localhost:47877" # JAEGER_SAMPLER_MANAGER_HOST_PORT
    tags:
      tag1: "tag1-value"  # JAEGER_TAGS
      tag2: "tag2-value"  # JAEGER_TAGS
    boolean-tags:
      tag3: true          # JAEGER_TAGS
      tag4: false         # JAEGER_TAGS
    int-tags:
      tag5: 145           # JAEGER_TAGS
      tag6: 741           # JAEGER_TAGS</markup>

</div>

<h2 id="_integrating_with_jaeger_tracing"><span class="merged" id="all.yhT8s" title="原文 : Integrating with Jaeger Tracing">Jaegerトレースとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.MEuQ3.spl1" title="原文 : Jaeger tracks its own behavior using metrics.">Jaegerは、メトリクスを使用して独自の動作を追跡します。</span> <span class="merged" id="all.MEuQ3.spl2" title="原文 : See Metrics Support for Jaeger to read how to integrate Jaeger metrics with Helidon.">JaegerメトリクスをHelidonと統合する方法については、<router-link to="/mp/tracing/04_jaeger_metrics">「Jaegerのメトリクス・サポート」</router-link>を参照してください。</span> </p>

</div>
</doc-view>
