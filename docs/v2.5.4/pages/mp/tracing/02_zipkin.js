<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3gf1D4" title="原文 : Zipkin Tracing">Zipkinトレース</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ivog2" title="原文 : Helidon is integrated with the Zipkin tracer.">HelidonはZipkinトレーサと統合されています。</span></p>

<p><span class="merged" id="all.4dClhA.spl1" title="原文 : The Zipkin builder is loaded through ServiceLoader and configured.">Zipkinビルダーは、<code>ServiceLoader</code>を介してロードおよび構成されます。</span> <span class="merged" id="all.4dClhA.spl2" title="原文 : You could also use the Zipkin builder directly, though this would create a source-code dependency on the Zipkin tracer.">Zipkinビルダーを直接使用することもできますが、この場合はZipkinトレーサにソース・コード依存関係が作成されます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.34"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.43wMmm" title="原文 : To enable Zipkin Tracing add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Zipkinトレースを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_configuring_zipkin"><span class="merged" id="all.NQtxT" title="原文 : Configuring Zipkin">Zipkinの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3JC2X2" title="原文 : The Zipkin tracer supports the following configuration options:">Zipkinトレーサは、次の構成オプションをサポートしています:</span></p>


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
<th><span class="merged" id="all.3H5QDp"  title="原文:: Key">キー</span></th>
<th><span class="merged" id="all.3T02MF"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.12txOr" title="原文 : Builder method">ビルダー・メソッド</span></th>
<th><span class="merged" id="all.4JM9z7.12"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48AK3O.1"  title="原文:: service">service</span></td>
<td class=""><span class="merged" id="all.2kt7dz.2"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.2ep5zp"  title="原文: serviceName">serviceName</span></td>
<td class=""><span class="merged" id="all.35IGbk" title="原文 : Name of the service, to distinguish traces crossing service boundaries; Zipkin is using lower-case only, name will be automatically lower-cased">サービスの境界を越えるトレースを区別するサービスの名前。Zipkinでは小文字のみが使用され、名前は自動的に小文字になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fw5zI.1"  title="原文:: protocol">protocol</span></td>
<td class=""><span class="merged" id="all.2lyjLO"  title="原文:: http">http</span></td>
<td class=""><span class="merged" id="all.1auppA"  title="原文: collectorProtocol">collectorProtocol</span></td>
<td class=""><span class="merged" id="all.3Y6nCV" title="原文 : Protocol of the Zipkin trace collector (http or https)">Zipkinトレース・コレクタのプロトコル(httpまたはhttps)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nCbwD.1"  title="原文:: host">host</span></td>
<td class=""><span class="merged" id="all.2uFqEd"  title="原文:: localhost">localhost</span></td>
<td class=""><span class="merged" id="all.MSXL4"  title="原文: collectorHost">collectorHost</span></td>
<td class=""><span class="merged" id="all.4S43gx" title="原文 : Host of the Zipkin trace collector (IP Address, hostname, or FQDN)">Zipkinトレース・コレクタのホスト(IPアドレス、ホスト名またはFQDN)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1EiTCG.1"  title="原文:: port">port</span></td>
<td class=""><span class="merged" id="all.RqNMp"  title="原文: 9411">9411</span></td>
<td class=""><span class="merged" id="all.2v5ch5"  title="原文: collectorPort">collectorPort</span></td>
<td class=""><span class="merged" id="all.1qwIsw" title="原文 : Port of the Zipkin trace collector">Zipkinトレース・コレクタのポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Crb5j.1"  title="原文:: path">path</span></td>
<td class=""><span class="merged" id="all.4Zkg0o" title="原文 : defined by version">バージョン別の定義</span></td>
<td class=""><span class="merged" id="all.3wwaey"  title="原文: collectorPath">collectorPath</span></td>
<td class=""><span class="merged" id="all.1gcTAG" title="原文 : Path of the Zipkin trace collector, each version uses a different path by default.">Zipkinトレース・コレクタのパス。バージョンごとに異なるパスがデフォルトで使用されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3RqKLp" title="原文 : api-version">api-version</span></td>
<td class=""><span class="merged" id="all.UT3bJ.1"  title="原文: 2">2</span></td>
<td class=""><span class="merged" id="all.3UzSqZ"  title="原文:: version">version</span></td>
<td class=""><span class="merged" id="all.lw6AU" title="原文 : Zipkin specific method, set the protocol version to communicate with trace collector">Zipkin固有のメソッド。トレース・コレクタと通信するためのプロトコル・バージョンを設定</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TwJHw.1"  title="原文:: enabled">enabled</span></td>
<td class=""><span class="merged" id="all.4eNR3V.1"  title="原文:: true">true</span></td>
<td class=""><span class="merged" id="all.1TwJHw.2"  title="原文:: enabled">enabled</span></td>
<td class=""><span class="merged" id="all.36lP7.1" title="原文 : If set to false, tracing would be disabled">falseに設定すると、トレースは無効になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22rkoQ.1"  title="原文:: tags">tags</span></td>
<td class=""><span class="merged" id="all.2kt7dz.3"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.4BwC9V" title="原文 : addTracerTag(String, String)">addTracerTag(String, String)</span></td>
<td class=""><span class="merged" id="all.2IRya2" title="原文 : String tags to add to each span">各スパンに追加する<code>String</code>タグ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PmqUy.1" title="原文 : boolean-tags">boolean-tags</span></td>
<td class=""><span class="merged" id="all.2kt7dz.4"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.1kWHb7" title="原文 : addTracerTag(String, boolean)">addTracerTag(String, boolean)</span></td>
<td class=""><span class="merged" id="all.1ZyRkc" title="原文 : boolean tags to add to each span">各スパンに追加する<code>boolean</code>タグ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kPIb3.1" title="原文 : int-tags">int-tags</span></td>
<td class=""><span class="merged" id="all.2kt7dz.5"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.4BoBQC" title="原文 : addTracerTag(String, int)">addTracerTag(String, int)</span></td>
<td class=""><span class="merged" id="all.b993f" title="原文 : int tags to add to each span">各スパンに追加する<code>int</code>タグ</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.4YAMMG" title="原文 : The following is an example of a Zipkin configuration, specified in the YAML format.">YAML形式で指定されたZipkin構成の例を次に示します。</span></p>

<markup
lang="yaml"

>tracing:
  zipkin:
    service: "helidon-service"
    protocol: "https"
    host: "192.168.1.1"
    port: 9987
    api-version: 1
    # this is the default path for API version 2
    path: "/api/v2/spans"
    tags:
      tag1: "tag1-value"
      tag2: "tag2-value"
    boolean-tags:
      tag3: true
      tag4: false
    int-tags:
      tag5: 145
      tag6: 741</markup>

<p><span class="merged" id="all.lg6Si" title="原文 : Example of Zipkin trace:">Zipkinトレースの例:</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="Zipkinの例" src="./images/webserver/zipkin.png" /> </v-card-text> </v-card>

</div>
</doc-view>
