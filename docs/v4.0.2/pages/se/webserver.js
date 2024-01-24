<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.78"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.76" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.56" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.42" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.28C5Tw" title="原文 : Configuring the WebServer in Your Code"><router-link @click.native="this.scrollFix('#_configuring_the_webserver_in_your_code')" to="#_configuring_the_webserver_in_your_code">コードでのWebServerの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4CMLUz" title="原文 : Configuring the WebServer in a Configuration File"><router-link @click.native="this.scrollFix('#_configuring_the_webserver_in_a_configuration_file')" to="#_configuring_the_webserver_in_a_configuration_file">構成ファイルでのWebServerの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.oo6HE" title="原文 : Configuration Options"><router-link @click.native="this.scrollFix('#_configuration_options')" to="#_configuration_options">構成のオプション</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2HMTMb" title="原文 : Routing"><router-link @click.native="this.scrollFix('#_routing')" to="#_routing">ルーティング</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.15IqRS" title="原文 : Request Handling"><router-link @click.native="this.scrollFix('#_request_handling')" to="#_request_handling">リクエスト処理</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1cJGsV" title="原文 : Error Handling"><router-link @click.native="this.scrollFix('#_error_handling')" to="#_error_handling">エラー処理</router-link></span></p>

</li>
</ul>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.8jDDd" title="原文 : Supported Technologies"><router-link @click.native="this.scrollFix('#_supported_technologies')" to="#_supported_technologies">サポートされているテクノロジ</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1cB8Fi" title="原文 : HTTP/2 Support"><router-link @click.native="this.scrollFix('#_http2_support')" to="#_http2_support">HTTP/2のサポート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1JfcIx" title="原文 : Static Content Support"><router-link @click.native="this.scrollFix('#_static_content_support')" to="#_static_content_support">静的コンテンツのサポート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4cyebh" title="原文 : Media Types Support"><router-link @click.native="this.scrollFix('#_media_types_support')" to="#_media_types_support">メディア・タイプのサポート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Xrt2P" title="原文 : HTTP Content Encoding"><router-link @click.native="this.scrollFix('#_http_content_encoding')" to="#_http_content_encoding">HTTPコンテンツ・エンコーディング</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2NhA1l" title="原文 : Proxy Protocol Support"><router-link @click.native="this.scrollFix('#_proxy_protocol_support')" to="#_proxy_protocol_support">プロキシ・プロトコルのサポート</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.29" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.31" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.100"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4AJ2L6.spl1" title="原文 : WebServer provides an API for creating HTTP servers.">WebServerは、HTTPサーバーを作成するためのAPIを提供します。</span> <span class="merged" id="all.4AJ2L6.spl2" title="原文 : It uses virtual threads and can handle nearly unlimited concurrent requests.">仮想スレッドを使用し、ほぼ無制限の同時リクエストを処理できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.70"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3QFzTT" title="原文 : To enable WebServer add the following dependency to your project’s pom.xml (see Managing Dependencies).">WebServerを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.48"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4tUG0" title="原文 : You can configure the WebServer either programmatically or by the Helidon configuration framework.">WebServerは、プログラムまたはHelidon構成フレームワークによって構成できます。</span></p>


<h3 id="_configuring_the_webserver_in_your_code"><span class="merged" id="all.2pKdBU" title="原文 : Configuring the WebServer in Your Code">コードでのWebServerの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2Ishsa" title="原文 : The easiest way to configure the WebServer is in your application code.">WebServerを構成する最も簡単な方法は、アプリケーション・コードを使用することです。</span></p>

<markup
lang="java"

>WebServer webServer = WebServer.builder()
      .address(InetAddress.getLocalHost())
      .port(8080)
      .build();</markup>

</div>


<h3 id="_configuring_the_webserver_in_a_configuration_file"><span class="merged" id="all.fCCmO" title="原文 : Configuring the WebServer in a Configuration File">構成ファイルでのWebServerの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4bpKp9" title="原文 : You can also define the configuration in a file.">ファイルで構成を定義することもできます。</span></p>

<markup
lang="yaml"
title="WebServer configuration file <code>application.yaml</code>"
>server:
  port: 8080
  host: "0.0.0.0"</markup>

<p><span class="merged" id="all.1Cq2QG.3" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="WebServer initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.create(routing, config.get("server")); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2JkrRu" title="原文 : application.yaml is a default configuration source loaded when YAML support is on classpath, so we can just use Config.create()"><code>application.yaml</code>はYAMLサポートがクラスパスにある場合にロードされるデフォルトの構成ソースであるため、<code>Config.create()</code>のみを使用できます</span></li>
<li data-value="2"><span class="merged" id="all.IODyn" title="原文 : Server expects the configuration tree located on the node of server">サーバーは、<code>server</code>のノードにある構成ツリーを予期しています</span></li>
</ul>

</div>


<h3 id="_configuration_options"><span class="merged" id="all.276fEP"  title="原文:: Configuration Options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.2BJq2n.2" title="原文 : Type: io.helidon.webserver.WebServer">タイプ: <a href="/apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" target="_blank">io.helidon.webserver.WebServer</a></span></p>

<p><span class="merged" id="all.4BMnxa.3" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>


<h4 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.156"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.148" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.172"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.165"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.172"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.182"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf.3"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.105"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.5"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3nMQ0a.3" title="原文 : Accept backlog.">バックログの受入れ。</span></p>

<markup>@return backlog</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AjA6I.3"  title="原文: connection-config"><code>connection-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4VLGSj.3" title="原文 : ConnectionConfig"><router-link to="/config/io_helidon_webserver_ConnectionConfig">ConnectionConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1MqSXN.3" title="原文 : Configuration of a connection (established from client against our server).">接続の構成(クライアントからサーバーに対して確立)。</span></p>

<markup>@return connection configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2nITik.3"  title="原文: connection-options"><code>connection-options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3wae7e.6" title="原文 : SocketOptions"><router-link to="/config/io_helidon_common_socket_SocketOptions">SocketOptions</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kXy6u.3.spl1" title="原文 : Options for connections accepted by this listener.">このリスナーで受け入れられる接続のオプション。</span> <span class="merged" id="all.1kXy6u.3.spl2" title="原文 : This is not used to setup server connection.">サーバー接続の設定には使用されません。</span> </p>

<markup>@return socket options</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dzi1w.6"  title="原文: content-encoding"><code>content-encoding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4OZ5CZ.6" title="原文 : ContentEncodingContext"><router-link to="/config/io_helidon_http_encoding_ContentEncodingContext">ContentEncodingContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YVEkt.3.spl1" title="原文 : Configure the listener specific io.helidon.http.encoding.ContentEncodingContext.">リスナー固有のio.helidon.http.encoding.ContentEncodingContextを構成します。</span> <span class="merged" id="all.4YVEkt.3.spl2" title="原文 : This method discards all previously registered ContentEncodingContext.">このメソッドは、以前に登録されたすべてのContentEncodingContextを破棄します。</span> <span class="merged" id="all.4YVEkt.3.spl3" title="原文 : If no content encoding context is registered, content encoding context of the webserver would be used.">コンテンツ・エンコーディング・コンテキストが登録されていない場合は、webサーバーのコンテンツ・エンコーディング・コンテキストが使用されます。</span> </p>

<markup>@return content encoding context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.45mnKE.2"  title="原文: features"><code>features</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Q9eND.2" title="原文 : io.helidon.webserver.spi.ServerFeature[] (service provider interface)">io.helidon.webserver.spi.ServerFeature[] (サービス・プロバイダ・インタフェース)</span></p>

<p><span class="merged" id="all.ETeZ4.4"  title="原文:: Such as:">これには次のようなものがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.39GTfy.2" title="原文 : observe (ObserveFeature)"><router-link to="/config/io_helidon_webserver_observe_ObserveFeature">observe (ObserveFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.ukyrv.2" title="原文 : context (ContextFeature)"><router-link to="/config/io_helidon_webserver_context_ContextFeature">context (ContextFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.31lkfX.2" title="原文 : cors (CorsFeature)"><router-link to="/config/io_helidon_webserver_cors_CorsFeature">cors (CorsFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1DmZnx.2" title="原文 : security (SecurityFeature)"><router-link to="/config/io_helidon_webserver_security_SecurityFeature">security (SecurityFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4GK5Qb.2" title="原文 : access-log (AccessLogFeature)"><router-link to="/config/io_helidon_webserver_accesslog_AccessLogFeature">access-log (AccessLogFeature)</router-link></span></p>

</li>
</ul>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2E0TLT.2" title="原文 : Server features allow customization of the server, listeners, or routings.">サーバー機能を使用すると、サーバー、リスナーまたはルーティングをカスタマイズできます。</span></p>

<markup>@return server features</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.5"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.353"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.37vqK9.3"  title="原文: 0.0.0.0"><code>0.0.0.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.L7juc.3.spl1" title="原文 : Host of the default socket.">デフォルト・ソケットのホスト。</span> <span class="merged" id="all.L7juc.3.spl2" title="原文 : Defaults to all host addresses (0.0.0.0).">デフォルトは、すべてのホスト・アドレス(<code>0.0.0.0</code>)です。</span> </p>

<markup>@return host address to listen on (for the default socket)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3cxtJM.3"  title="原文: idle-connection-period"><code>idle-connection-period</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.66"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3oUo0h.3"  title="原文: PT2M"><code>PT2M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QjCrs.3.spl1" title="原文 : How often should we check for #idleConnectionTimeout().">#idleConnectionTimeout()をチェックする頻度。</span> <span class="merged" id="all.3QjCrs.3.spl2" title="原文 : Defaults to PT2M (2 minutes).">デフォルトは<code>PT2M</code> (2分)です。</span> </p>

<markup>@return period of checking for idle connections</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.F19DI.3"  title="原文: idle-connection-timeout"><code>idle-connection-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.67"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3IZFLG.3"  title="原文: PT5M"><code>PT5M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S4DrB.3.spl1" title="原文 : How long should we wait before closing a connection that has no traffic on it.">トラフィックがない接続を閉じるまで待機する時間。</span> <span class="merged" id="all.S4DrB.3.spl2" title="原文 : Defaults to PT5M (5 minutes).">デフォルトは<code>PT5M</code> (5分)です。</span> <span class="merged" id="all.S4DrB.3.spl3" title="原文 : Note that the timestamp is refreshed max. once per second, so this setting would be useless if configured for shorter periods of time (also not a very good support for connection keep alive, if the connections are killed so soon anyway).">タイムスタンプは最大リフレッシュされます。1秒当たり1回であるため、この設定は、より短い期間(とにかく接続がすぐに強制終了された場合、接続キープ・アライブに対するサポートもあまり適切ではない)に構成されている場合、役に立たないことに注意してください。</span> </p>

<markup>@return timeout of idle connections</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17bCiz.3"  title="原文: max-concurrent-requests"><code>max-concurrent-requests</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.106"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.12"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AwEgl.3.spl1" title="原文 : Limits the number of requests that can be executed at the same time (the number of active virtual threads of requests).">同時に実行できるリクエストの数(リクエストのアクティブな仮想スレッドの数)を制限します。</span> <span class="merged" id="all.2AwEgl.3.spl2" title="原文 : Defaults to -1, meaning &quot;unlimited&quot; - what the system allows.">デフォルトは<code>-1</code>で、「無制限」を意味 - システムが許すもの。</span> <span class="merged" id="all.2AwEgl.3.spl3" title="原文 : Also make sure that this number is higher than the expected time it takes to handle a single request in your application, as otherwise you may stop in-progress requests.">また、進行中のリクエストを停止する場合もあるため、この数値がアプリケーション内の単一のリクエストの処理にかかる予想時間よりも大きいことを確認してください。</span> </p>

<markup>@return number of requests that can be processed on this listener, regardless of protocol</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xrYOF.6"  title="原文: max-in-memory-entity"><code>max-in-memory-entity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.107"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Oslkg.6"  title="原文: 131072"><code>131072</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Ut8RG.3.spl1" title="原文 : If the entity is expected to be smaller that this number of bytes, it would be buffered in memory to optimize performance when writing it.">エンティティがこのバイト数より小さいと予想される場合は、書込み時のパフォーマンスを最適化するためにメモリーにバッファされます。</span> <span class="merged" id="all.4Ut8RG.3.spl2" title="原文 : If bigger, streaming will be used.">大きい場合はストリーミングが使用されます。</span> </p>

<markup>Note that for some entity types we cannot use streaming, as they are already fully in memory (String, byte[]), for such
cases, this option is ignored.</markup>
<markup>Default is 128Kb.</markup>
<markup>@return maximal number of bytes to buffer in memory for supported writers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT.3"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.40"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.13"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2NrKcV.3.spl1" title="原文 : Maximal number of bytes an entity may have.">エンティティに保持できる最大バイト数。</span> <span class="merged" id="all.2NrKcV.3.spl2" title="原文 : If io.helidon.http.HeaderNames#CONTENT_LENGTH is used, this is checked immediately, if io.helidon.http.HeaderValues#TRANSFER_ENCODING_CHUNKED is used, we will fail when the number of bytes read would exceed the max payload size.">io.helidon.http.HeaderNames#CONTENT_LENGTHが使用されている場合、これはただちにチェックされます。io.helidon.http.HeaderValues#TRANSFER_ENCODING_CHUNKEDが使用されている場合、読取りバイト数が最大ペイロード・サイズを超えると失敗します。</span> <span class="merged" id="all.2NrKcV.3.spl3" title="原文 : Defaults to unlimited (-1).">デフォルトは無制限( <code>-1</code>)です。</span> </p>

<markup>@return maximal number of bytes of entity</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WTA3q.3"  title="原文: max-tcp-connections"><code>max-tcp-connections</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.108"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.14"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ivt1t.3.spl1" title="原文 : Limits the number of connections that can be opened at a single point in time.">1つの時点でオープンできる接続の数を制限します。</span> <span class="merged" id="all.1ivt1t.3.spl2" title="原文 : Defaults to -1, meaning &quot;unlimited&quot; - what the system allows.">デフォルトは<code>-1</code>で、「無制限」を意味 - システムが許すもの。</span> </p>

<markup>@return number of TCP connections that can be opened to this listener, regardless of protocol</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2eL0SG.6"  title="原文: media-context"><code>media-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3UN167.7" title="原文 : MediaContext"><router-link to="/config/io_helidon_http_media_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2kRzka.3.spl1" title="原文 : Configure the listener specific io.helidon.http.media.MediaContext.">リスナー固有のio.helidon.http.media.MediaContextを構成します。</span> <span class="merged" id="all.2kRzka.3.spl2" title="原文 : This method discards all previously registered MediaContext.">このメソッドは、以前に登録されたすべてのMediaContextを破棄します。</span> <span class="merged" id="all.2kRzka.3.spl3" title="原文 : If no media context is registered, media context of the webserver would be used.">メディア・コンテキストが登録されていない場合は、webサーバーのメディア・コンテキストが使用されます。</span> </p>

<markup>@return media context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.16"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.354"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp.12"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ehLh0.3.spl1" title="原文 : Name of this socket.">このソケットの名前。</span> <span class="merged" id="all.3ehLh0.3.spl2" title="原文 : Defaults to @default.">デフォルトは<code>@default</code>です。</span> <span class="merged" id="all.3ehLh0.3.spl3" title="原文 : Must be defined if more than one socket is needed.">複数のソケットが必要な場合は定義する必要があります。</span> </p>

<markup>@return name of the socket</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.5"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.109"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.11"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3z4VwF.3.spl1" title="原文 : Port of the default socket.">デフォルト・ソケットのポート。</span> <span class="merged" id="all.3z4VwF.3.spl2" title="原文 : If configured to 0 (the default), server starts on a random port."><code>0</code> (デフォルト)に構成されている場合、サーバーはランダムなポートで起動します。</span> </p>

<markup>@return port to listen on (for the default socket)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lQacV.4"  title="原文: protocols"><code>protocols</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.O1GlW.3" title="原文 : io.helidon.webserver.spi.ProtocolConfig[] (service provider interface)">io.helidon.webserver.spi.ProtocolConfig[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1h03HZ.3.spl1" title="原文 : Configuration of protocols.">プロトコルの構成。</span> <span class="merged" id="all.1h03HZ.3.spl2" title="原文 : This may be either protocol selectors, or protocol upgraders from HTTP/1.1.">これは、プロトコル・セレクタか、HTTP/1.1からのプロトコル・アップグレードのいずれかです。</span> <span class="merged" id="all.1h03HZ.3.spl3" title="原文 : As the order is not important (providers are ordered by weight by default), we can use a configuration as an object, such as: &lt;pre&gt; protocols: providers: http_1_1: max-prologue-length: 8192 http_2: max-frame-size: 4096 websocket: …​. &lt;/pre&gt;">順序は重要ではないため(プロバイダはデフォルトで重み順に並べられます)、次のような構成をオブジェクトとして使用できます: &lt;pre>プロトコル: プロバイダ: http_1_1: max-prologue-length: 8192 http_2: max-frame-size: 4096ソケット: …​. &lt;/pre></span> </p>

<markup>@return all defined protocol configurations, loaded from service loader by default</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm.4"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.110"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1VYRoC.3" title="原文 : Listener receive buffer size.">リスナー受信バッファ・サイズ。</span></p>

<markup>@return buffer size in bytes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25oMqW.3"  title="原文: shutdown-grace-period"><code>shutdown-grace-period</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.68"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.AjhSo.5"  title="原文: PT0.5S"><code>PT0.5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.yXQtR.3.spl1" title="原文 : Grace period in ISO 8601 duration format to allow running tasks to complete before listener’s shutdown.">ISO 8601期間形式の猶予期間。リスナーの停止前に実行中のタスクを完了できます。</span> <span class="merged" id="all.yXQtR.3.spl2" title="原文 : Default is 500 milliseconds.">デフォルトは<code>500</code>ミリ秒です。</span> <span class="merged" id="all.yXQtR.3.spl3" title="原文 : Configuration file values example: PT0.5S, PT2S.">構成ファイルの値の例: <code>PT0.5S</code>, <code>PT2S</code>.</span> </p>

<markup>@return grace period</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3O8SGv.2"  title="原文: shutdown-hook"><code>shutdown-hook</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.276"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.141"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4dVg2u.2" title="原文 : When true the webserver registers a shutdown hook with the JVM Runtime.">trueの場合、webサーバーはJVMランタイムに停止フックを登録します。</span></p>

<markup>Defaults to true. Set this to false such that a shutdown hook is not registered.</markup>
<markup>@return whether to register a shutdown hook</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.12"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3HMyMI.2" title="原文 : Map&lt;string, ListenerConfig&gt;"><router-link to="/config/io_helidon_webserver_ListenerConfig">Map&lt;string, ListenerConfig></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f5XDN.2.spl1" title="原文 : Socket configurations.">ソケット構成。</span> <span class="merged" id="all.3f5XDN.2.spl2" title="原文 : Note that socket named WebServer#DEFAULT_SOCKET_NAME cannot be used, configure the values on the server directly."><code>WebServer#DEFAULT_SOCKET_NAME</code>という名前のソケットは使用できないことに注意してください。サーバー上で値を直接構成してください。</span> </p>

<markup>@return map of listener configurations, except for the default one</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.7"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2x5x4s.7" title="原文 : Tls"><router-link to="/config/io_helidon_common_tls_Tls">Tls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yGSZS.3" title="原文 : Listener TLS configuration.">リスナーTLS構成。</span></p>

<markup>@return tls of this configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3mhMxT.3"  title="原文: write-buffer-size"><code>write-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.111"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.9"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3BEMIm.3.spl1" title="原文 : Initial buffer size in bytes of java.io.BufferedOutputStream created internally to write data to a socket connection.">ソケット接続にデータを書き込むために内部的に作成されたjava.io.BufferedOutputStreamの初期バッファ・サイズ(バイト単位)。</span> <span class="merged" id="all.3BEMIm.3.spl2"  title="原文:: Default is 512.">デフォルトは<code>512</code>です。</span> </p>

<markup>@return initial buffer size used for writing</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32vcwz.3"  title="原文: write-queue-length"><code>write-queue-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.112"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.12"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.mPAOi.3" title="原文 : Number of buffers queued for write operations.">書込み操作のためにキューに入れられたバッファの数。</span></p>

<markup>@return maximal number of queued writes, defaults to 0</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</div>


<h2 id="_routing"><span class="merged" id="all.1wf24k"  title="原文:: Routing">ルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.45ZZ2A.spl1" title="原文 : Routing lets you use request matching criteria to bind requests to a handler that implements your custom business logic.">ルーティングでは、リクエスト一致基準を使用して、カスタム・ビジネス・ロジックを実装する<code>handler</code>にリクエストをバインドできます。</span> <span class="merged" id="all.45ZZ2A.spl2" title="原文 : Matching criteria include one or more HTTP Method(s) and, optionally, a request path matcher.">一致基準には、1つ以上の<strong>「HTTPメソッド」</strong>と、オプションでリクエスト<strong>「パス・マッチャ」</strong>が含まれます。</span> <span class="merged" id="all.45ZZ2A.spl3" title="原文 : Use the RequestPredicate class to specify more routing criteria."><code>RequestPredicate</code>クラスを使用して、さらにルーティング基準を指定します。</span> </p>


<h3 id="_routing_basics"><span class="merged" id="all.19ez8A" title="原文 : Routing Basics">ルーティングの基本</span></h3>
<div class="section">
<p><span class="merged" id="all.1tTYGh" title="原文 : Routing also supports Error Routing which binds Java Throwable to the handling logic.">ルーティングでは、Java <code>Throwable</code>を処理ロジックにバインドする<em>「エラー・ルーティング」</em>もサポートされます。</span></p>

<p><span class="merged" id="all.3hpmdd" title="原文 : Configure HTTP request routing using HttpRouting.Builder."><code>HttpRouting.Builder</code>を使用してHTTPリクエストのルーティングを構成します。</span></p>

<markup
lang="java"
title="Using HttpRouting.Builder to specify how HTTP requests are handled"
>WebServer webServer = WebServer.builder()
        .routing(routing -&gt; routing.get("/hello", (req, res) -&gt; res.send("Hello World!"))) <span class="conum" data-value="1" />
        .build(); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tb8Va.spl1" title="原文 : Handle all GETs to /hello path."><code>/hello</code>パスへのすべてのGETを処理します。</span> <span class="merged" id="all.1tb8Va.spl2" title="原文 : Send the Hello World! string."><code>Hello World!</code>文字列を送信します。</span> </li>
<li data-value="2"><span class="merged" id="all.tLom9" title="原文 : Create a server instance with the provided routing">指定されたルーティングでサーバー・インスタンスを作成</span></li>
</ul>

</div>


<h3 id="_http_method_routing"><span class="merged" id="all.2Kbf2I" title="原文 : HTTP Method Routing">HTTPメソッドのルーティング</span></h3>
<div class="section">
<p><span class="merged" id="all.1cQgx3.spl1" title="原文 : HttpRouting.Builder lets you specify how to handle each HTTP method."><code>HttpRouting.Builder</code>では、各HTTPメソッドの処理方法を指定できます。</span> <span class="merged" id="all.1cQgx3.spl2"  title="原文:: For example:">例えば:</span> </p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 83.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4IgSen"  title="原文:: HTTP Method">HTTPメソッド</span></th>
<th><span class="merged" id="all.1wI6sK" title="原文 : HttpRouting.Builder example">HttpRouting.Builderの例</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.175Cxq"  title="原文:: GET"><strong>GET</strong></span></td>
<td class=""><span class="merged" id="all.11yMwG"  title="原文: .get((req, res) -&gt; { /* handler */ })"><code>.get((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ISXfy"  title="原文:: PUT"><strong>PUT</strong></span></td>
<td class=""><span class="merged" id="all.xugZq"  title="原文: .put((req, res) -&gt; { /* handler */ })"><code>.put((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28oayy"  title="原文:: POST"><strong>POST</strong></span></td>
<td class=""><span class="merged" id="all.3MCy8R"  title="原文: .post((req, res) -&gt; { /* handler */ })"><code>.post((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2xvfKC"  title="原文:: HEAD"><strong>HEAD</strong></span></td>
<td class=""><span class="merged" id="all.3LaEMG"  title="原文: .head((req, res) -&gt; { /* handler */ })"><code>.head((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2u2Wss"  title="原文:: DELETE"><strong>DELETE</strong></span></td>
<td class=""><span class="merged" id="all.RVYUW"  title="原文: .delete((req, res) -&gt; { /* handler */ })"><code>.delete((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WJXZr"  title="原文:: TRACE"><strong>TRACE</strong></span></td>
<td class=""><span class="merged" id="all.4EH6gY"  title="原文: .trace((req, res) -&gt; { /* handler */ })"><code>.trace((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.LRlbP" title="原文 : OPTIONS"><strong>OPTIONS</strong></span></td>
<td class=""><span class="merged" id="all.2scTt7"  title="原文: .options((req, res) -&gt; { /* handler */ })"><code>.options((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CL3XO" title="原文 : any method"><em>anyメソッド</em></span></td>
<td class=""><span class="merged" id="all.3f7hdG"  title="原文: .any((req, res) -&gt; { /* handler */ })"><code>.any((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.t7aYC" title="原文 : multiple methods"><em>複数のメソッド</em></span></td>
<td class=""><span class="merged" id="all.4YFMhG"  title="原文: `+.route(Method.predicate(Method.GET, Method.POST), PathMatchers.any(), (req, res) → { /* handler */ })"><code>`+.route(Method.predicate(Method.GET, Method.POST), PathMatchers.any(), (req, res) → { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZaLp3" title="原文 : custom method"><em>カスタム・メソッド</em></span></td>
<td class=""><span class="merged" id="all.2etQtx"  title="原文: +.route(Method.create(&quot;CUSTOM&quot;), (req, res) → { /* handler */ })"><code>+.route(Method.create("CUSTOM"), (req, res) → { /* handler */ })</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_path_matcher_routing"><span class="merged" id="all.leyLp" title="原文 : Path Matcher Routing">パス・マッチャのルーティング</span></h3>
<div class="section">
<p><span class="merged" id="all.1PfD5C" title="原文 : You can combine HTTP method routing with request path matching.">HTTPメソッド・ルーティングをリクエスト・パス一致と組み合せることができます。</span></p>

<markup
lang="java"

>HttpRouting.builder()
       .post("/some/path", (req, res) -&gt; { /* handler */ })</markup>

<p><span class="merged" id="all.2uUTyQ" title="原文 : You can use path pattern instead of path with the following syntax:">次の構文を使用して、<em>「パス」</em>のかわりに<strong>「パス・パターン」</strong>を使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3MZLn" title="原文 : /foo/bar/baz - Exact path match against resolved path even with non-usual characters"><code>/foo/bar/baz</code> - 通常以外の文字が含まれる場合でも、解決されたパスと完全に一致するパス</span></p>

</li>
<li>
<p><span class="merged" id="all.3UHVLC" title="原文 : /foo/* - convenience method to match /foo or any subpath (but not /foobar)"><code>/foo/*</code> - <code>/foo</code>または任意のサブパスと一致するコンビニエンス・メソッド(ただし、<code>/foobar</code>は一致しない)</span></p>

</li>
<li>
<p><span class="merged" id="all.KZ6LM" title="原文 : /foo/{}/baz - {} Unnamed regular expression segment ([^/]+)"><code>/foo/{}/baz</code> - <code>{}</code>無名正規表現セグメント<code>([^/]+)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2Z8rD2" title="原文 : /foo/{var}/baz - Named regular expression segment ([^/]+)"><code>/foo/{var}/baz</code> - 名前付き正規表現セグメント<code>([^/]+)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2MjoB4" title="原文 : /foo/{var:\d+} - Named regular expression segment with a specified expression"><code>/foo/{var:\d+}</code> - 指定された式を持つ名前付き正規表現セグメント</span></p>

</li>
<li>
<p><span class="merged" id="all.2e1pBx" title="原文 : /foo/{:\d+} - Unnamed regular expression segment with a specified expression"><code>/foo/{:\d+}</code> - 指定された式を持つ名前のない正規表現セグメント</span></p>

</li>
<li>
<p><span class="merged" id="all.3sGWqn.spl1" title="原文 : /foo/{+var} - Convenience shortcut for {var:.+}."><code>/foo/{+var}</code> - {var:.+}の便利なショートカット。</span> <span class="merged" id="all.3sGWqn.spl2" title="原文 : A matcher is not a true URI template (as defined by RFC) but this convenience is in sync with the Apiary templates">マッチャは(RFCで定義されているように)真のURIテンプレートではありませんが、この利便性はApiaryテンプレートと同期しています</span> </p>

</li>
<li>
<p><span class="merged" id="all.4IIjcA" title="原文 : /foo/{+} - Convenience shortcut for unnamed segment with regular expression {:.+}"><code>/foo/{+}</code> - 正規表現 {:を使用した名前のないセグメントの便利なショートカット。+}</span></p>

</li>
<li>
<p><span class="merged" id="all.433CdN" title="原文 : /foo[/bar] - An optional block, which translates to the /foo(/bar)? regular expression"><code>/foo[/bar]</code> - <code>/foo(/bar)?</code>正規表現に変換されるオプションのブロック</span></p>

</li>
<li>
<p><span class="merged" id="all.2nVrgq" title="原文 : / or /foo - * Wildcard character can be matched with any number of characters."><code>/<strong></code>または<code>/foo</strong></code> - <code>*</code>ワイルドカード文字を任意の数の文字と照合できます。</span></p>

</li>
</ul>

<div class="admonition important">
<p class="admonition-inline"><span class="merged" id="all.3VYkSm.spl1" title="原文 : Path (matcher) routing is exact.">パス(正規表現エンジン)ルーティングは<strong>exact</strong>です。</span> <span class="merged" id="all.3VYkSm.spl2" title="原文 : For example, a /foo/bar request is not routed to .post(&apos;/foo&apos;, …​).">たとえば、<code>/foo/bar</code>リクエストは<code>.post('/foo', …​)</code>にルーティングされません。</span> </p>
</div>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.PYXfF" title="原文 : Always start path and path patterns with the / character."><em>「パス」</em>および<em>「パス・パターン」</em>は、常に<code>/</code>文字で始めます。</span></p>
</div>

<p><span class="merged" id="all.4ZK7KT" title="原文 : For more precise setup of path, you can use factory methods on io.helidon.http.PathMatchers and register using HttpRouting.Builder.route(Predicate&lt;Method&gt;, PathMatcher, Handler) method.">パスのより正確な設定のために、<code>io.helidon.http.PathMatchers</code>でファクトリ・メソッドを使用し、<code>HttpRouting.Builder.route(Predicate&lt;Method>, PathMatcher, Handler)</code>メソッドを使用して登録できます。</span></p>

</div>


<h3 id="_using_full_httproute"><span class="merged" id="all.RRoQ" title="原文 : Using full HttpRoute">完全な<code>HttpRoute</code>の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2Lm1fA" title="原文 : To have more control over selecting which requests should be handled by a specific route, you can use the io.helidon.webserver.http.HttpRoute interface, and either setup a route using its Builder, or implement the interface directly.">特定のルートで処理するリクエストの選択をより詳細に制御するには、<code>io.helidon.webserver.http.HttpRoute</code>インタフェースを使用し、その<code>Builder</code>を使用してルートを設定するか、インタフェースを直接実装します。</span></p>

<p><span class="merged" id="all.gsv3V" title="原文 : The HttpRoute is queried base on the request io.helidon.http.HttpPrologue."><code>HttpRoute</code>は、リクエスト<code>io.helidon.http.HttpPrologue</code>に基づいて問い合せられます。</span></p>

<markup
lang="java"

>.route(new MyCustomRoute());</markup>

</div>


<h3 id="_organizing_code_into_services"><span class="merged" id="all.1rDPa2" title="原文 : Organizing Code into Services">コードのサービスへの編成</span></h3>
<div class="section">
<p><span class="merged" id="all.iIXms" title="原文 : By implementing the io.helidon.webserver.http.HttpService interface you can organize your code into one or more services, each with its own path prefix and set of handlers."><code>io.helidon.webserver.http.HttpService</code>インタフェースを実装することで、コードを1つ以上のサービスに編成し、それぞれに独自のパス・プレフィクスとハンドラ・セットを指定できます。</span></p>

<markup
lang="java"
title="Use <code>HttpRouting.Builder.register</code> to register your service"
>.register("/hello", new HelloService())</markup>

<markup
lang="java"
title="Service implementation"
>public class HelloService implements HttpService {
    @Override
    public void routing(HttpRules rules) {
        rules.get("/subpath", this::getHandler);
    }

    private void getHandler(ServerRequest request,
                            ServerResponse response) {
        // Some logic
    }
}</markup>

<p><span class="merged" id="all.1s1yUC" title="原文 : In this example, the GET handler matches requests to /hello/subpath.">この例では、<code>GET</code>ハンドラはリクエストを<code>/hello/subpath</code>と照合します。</span></p>

</div>

</div>


<h2 id="_request_handling"><span class="merged" id="all.1A8h5x"  title="原文:: Request Handling">リクエストの処理</span></h2>
<div class="section">
<p><span class="merged" id="all.3H3gY8.spl1" title="原文 : Implement the logic to handle requests to WebServer in a Handler, which is a FunctionalInterface."><code>Handler</code> (<code>FunctionalInterface</code>)でWebServerへのリクエストを処理するロジックを実装します。</span> <span class="merged" id="all.3H3gY8.spl2"  title="原文:: Handlers:">ハンドラ:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.iOTF" title="原文 : Process the request and send a response.">リクエストおよび<router-link @click.native="this.scrollFix('#anchor-sending-response')" to="#anchor-sending-response">send</router-link>にレスポンスを処理します。</span></p>

</li>
<li>
<p><span class="merged" id="all.4PMQn5" title="原文 : Act as a filter and forward requests to downstream handlers using the response.next() method.">フィルタとして機能し、<code>response.next()</code>メソッドを使用してリクエストをダウンストリーム・ハンドラに転送します。</span></p>

</li>
<li>
<p><span class="merged" id="all.2GyHIG" title="原文 : Throw an exception to begin error handling.">例外をスローして<router-link @click.native="this.scrollFix('#_error_handling')" to="#_error_handling">「エラー処理」</router-link>を開始します。</span></p>

</li>
</ul>


<h3 id="_process_request_and_produce_response"><span class="merged" id="all.3TwiX1" title="原文 : Process Request and Produce Response">リクエストの処理とレスポンスの生産</span></h3>
<div class="section">
<p><span class="merged" id="all.1uBAgg.spl1" title="原文 : Each Handler has two parameters.">各<code>Handler</code>には2つのパラメータがあります。</span> <span class="merged" id="all.1uBAgg.spl2" title="原文 : ServerRequest and ServerResponse."><code>ServerRequest</code>および<code>ServerResponse</code>。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Dc9MP" title="原文 : Request provides access to the request method, URI, path, query parameters, headers and entity.">リクエストは、リクエスト・メソッド、URI、パス、問合せパラメータ、ヘッダーおよびエンティティへのアクセスを提供します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3UKh68" title="原文 : Response provides an ability to set response code, headers, and entity.">レスポンスでは、レスポンス・コード、ヘッダーおよびエンティティを設定できます。</span></p>

</li>
</ul>

</div>


<h3 id="anchor-filtering"><span class="merged" id="all.34Vi8Q"  title="原文:: Filtering">フィルタリング</span></h3>
<div class="section">
<p><span class="merged" id="all.2lebLt" title="原文 : Filtering can be done either using a dedicated Filter, or through routes.">フィルタリングは、専用の<code>Filter</code>を使用するか、ルートを介して実行できます。</span></p>


<h4 id="_filter"><span class="merged" id="all.2Ci9Wd"  title="原文:: Filter">フィルタ</span></h4>
<div class="section">
<p><span class="merged" id="all.2hFhH3" title="原文 : You can register a io.helidon.webserver.http.Filter with HTTP routing to handle filtering in interception style."><code>io.helidon.webserver.http.Filter</code>をHTTPルーティングに登録して、インターセプション・スタイルでフィルタリングを処理できます。</span></p>

<p><span class="merged" id="all.zUn5b" title="原文 : A simple filter example:">単純なフィルタの例:</span></p>

<markup
lang="java"

>routing.addFilter((chain, req, res) -&gt; {
   try {
       chain.proceed();
   } finally {
       // do something for any finished request
   }
})</markup>

</div>


<h4 id="_routes"><span class="merged" id="all.yiRmP"  title="原文:: Routes"> ルート</span></h4>
<div class="section">
<p><span class="merged" id="all.1a0n55.spl1" title="原文 : The handler forwards the request to the downstream handlers by nexting.">ハンドラは、<em>nexting</em>によってリクエストをダウンストリーム・ハンドラに転送します。</span> <span class="merged" id="all.1a0n55.spl2"  title="原文: There are two options:">次の2つのオプションがあります。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3dV2SU" title="原文 : call res.next()"><code>res.next()</code>のコール</span></p>
<markup
lang="java"

>.any("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // filtering logic  <span class="conum" data-value="2" />
    res.next(); <span class="conum" data-value="3" />
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2raG66" title="原文 : handler for any HTTP method using the /hello path"><code>/hello</code>パスを使用するHTTPメソッドのハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.cekkp" title="原文 : business logic implementation">ビジネス・ロジックの実装</span></li>
<li data-value="3"><span class="merged" id="all.31E7Ju" title="原文 : forward the current request to the downstream handler">現在のリクエストをダウンストリーム・ハンドラに転送</span></li>
</ul>

</li>
<li>
<p><span class="merged" id="all.4FY5LJ" title="原文 : throw an exception to forward to error handling error handling">例外をスローして<router-link @click.native="this.scrollFix('#_error_handling')" to="#_error_handling">「エラー処理」</router-link>のエラー処理に転送</span></p>
<markup
lang="java"

>.any("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // filtering logic (e.g., validating parameters) <span class="conum" data-value="2" />
    if (userParametersOk()) {
        res.next(); <span class="conum" data-value="3" />
    } else {
        throw new IllegalArgumentException("Invalid parameters."); <span class="conum" data-value="4" />
    }
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2raG66.1" title="原文 : handler for any HTTP method using the /hello path"><code>/hello</code>パスを使用するHTTPメソッドのハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.4Lwmjg" title="原文 : custom logic">カスタム・ロジック</span></li>
<li data-value="3"><span class="merged" id="all.31E7Ju.1" title="原文 : forward the current request to the downstream handler">現在のリクエストをダウンストリーム・ハンドラに転送</span></li>
<li data-value="4"><span class="merged" id="all.3xxF0x" title="原文 : forward the request to the error handler">エラー・ハンドラへのリクエストの転送</span></li>
</ul>

</li>
</ul>

</div>

</div>


<h3 id="anchor-sending-response"><span class="merged" id="all.1hvAlr" title="原文 : Sending a Response">レスポンスの送信</span></h3>
<div class="section">
<p><span class="merged" id="all.4Ho6vP" title="原文 : To complete the request handling, you must send a response by calling the res.send() method.">リクエスト処理を完了するには、<code>res.send()</code>メソッドをコールしてレスポンスを送信する必要があります。</span></p>

<div class="admonition important">
<p class="admonition-inline"><span class="merged" id="all.mKpx" title="原文 : one of the variants of send method MUST be invoked in the same thread the request is started in; as we run in Virtual Threads, you can simply wait for any asynchronous tasks that must complete before sending a response"><code>send</code>メソッドのいずれかのバリアントは、リクエストが開始されたスレッドと同じスレッドで呼び出す必要があります。仮想スレッドで実行されるため、レスポンスを送信する前に完了する必要がある非同期タスクを待機するだけです</span></p>
</div>

<markup
lang="java"

>.get("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // terminating logic
    res.status(Status.ACCEPTED_202)
       .send("Saved!"); <span class="conum" data-value="2" />
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3CfHmw" title="原文 : handler that terminates the request handling for any HTTP method using the /hello path"><code>/hello</code>パスを使用してHTTPメソッドのリクエスト処理を終了するハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.QqryT" title="原文 : send the response">レスポンスの送信</span></li>
</ul>

</div>

</div>


<h2 id="_protocol_specific_routing"><span class="merged" id="all.4D7Awz" title="原文 : Protocol-Specific Routing">プロトコル固有のルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.2aC4QI" title="原文 : Handling routes based on the protocol version is possible by registering specific routes on routing builder.">プロトコル・バージョンに基づくルートの処理は、ルーティング・ビルダーで特定のルートを登録することで可能です。</span></p>

<markup
lang="java"
title="Routing based on HTTP version"
>.routing(r -&gt; r
        .get("/any-version", (req, res) -&gt; res.send("HTTP Version " + req.prologue().protocolVersion())) <span class="conum" data-value="1" />
        .route(Http1Route.route(Method.GET, "/version-specific", (req, res) -&gt; res.send("HTTP/1.1 route"))) <span class="conum" data-value="2" />
        .route(Http2Route.route(Method.GET, "/version-specific", (req, res) -&gt; res.send("HTTP/2 route"))) <span class="conum" data-value="3" />
)</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.R0edV" title="原文 : An HTTP route registered on /any-version path that prints the version of HTTP protocol">HTTPプロトコルのバージョンを出力する<code>/any-version</code>パスに登録されたHTTPルート</span></li>
<li data-value="2"><span class="merged" id="all.378HRi" title="原文 : An HTTP/1.1 route registered on /version-specific path"><code>/version-specific</code>パスに登録されたHTTP/1.1ルート</span></li>
<li data-value="3"><span class="merged" id="all.49dyd" title="原文 : An HTTP/2 route registered on /version-specific path"><code>/version-specific</code>パスに登録されたHTTP/2ルート</span></li>
</ul>

<p><span class="merged" id="all.1f6dZg" title="原文 : While Http1Route for Http/1 is always available with Helidon webserver, other routes like Http2Route for HTTP/2 needs to be added as additional dependency.">Http/1の<code>Http1Route</code>はHelidon webサーバーでは常に使用可能ですが、<router-link @click.native="this.scrollFix('#_http2_support')" to="#_http2_support">HTTP/2</router-link>の<code>Http2Route</code>などのルートを追加依存関係として追加する必要があります。</span></p>

</div>


<h2 id="_requested_uri_discovery"><span class="merged" id="all.4PCOaH" title="原文 : Requested URI Discovery">リクエストされたURI検出</span></h2>
<div class="section">
<p><span class="merged" id="all.3tRSrN.1.spl1" title="原文 : Proxies and reverse proxies between an HTTP client and your Helidon application mask important information (for example Host header, originating IP address, protocol) about the request the client sent.">HTTPクライアントとHelidonアプリケーション間のプロキシとリバース・プロキシは、クライアントが送信したリクエストに関する重要な情報(<code>Host</code>ヘッダー、元のIPアドレス、プロトコルなど)をマスクします。</span> <span class="merged" id="all.3tRSrN.1.spl2" title="原文 : Fortunately, many of these intermediary network nodes set or update either the standard HTTP Forwarded header or the non-standard X-Forwarded-* family of headers to preserve information about the original client request.">幸いなことに、これらの仲介ネットワーク・ノードの多くは、元のクライアント・リクエストに関する情報を保持するために、<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded" target="_blank">「標準HTTP <code>Forwarded</code>ヘッダー」</a>または<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For" target="_blank">「非標準のヘッダーの<code>X-Forwarded-*</code>ファミリ」</a>を設定または更新します。</span> </p>

<p><span class="merged" id="all.1ZZ77Q.1" title="原文 : Helidon’s requested URI discovery feature allows your application-​and Helidon itself-​to reconstruct information about the original request using the Forwarded header and the X-Forwarded-* family of headers.">HelidonからリクエストされたURI検出機能を使用すると、アプリケーションおよびHelidon自体で、<code>Forwarded</code>ヘッダーおよび<code>X-Forwarded-*</code>ヘッダー・ファミリを使用して元のリクエストに関する情報を再構築できます。</span></p>

<p><span class="merged" id="all.124KK3.1" title="原文 : When you prepare the connections in your server you can include the following optional requested URI discovery settings:">サーバーで接続を準備するときに、次のリクエストされたURI検出設定を含めることができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3E5MrI.1"  title="原文:: enabled or disabled">有効化または無効化 </span></p>

</li>
<li>
<p><span class="merged" id="all.3sXLFm.1" title="原文 : which type or types of requested URI discovery to use:">使用するリクエストされたURI検出のタイプ:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.RIOfo.1" title="原文 : FORWARDED - uses the Forwarded header"><code>FORWARDED</code> - <code>Forwarded</code>ヘッダーを使用</span></p>

</li>
<li>
<p><span class="merged" id="all.24fdek.1" title="原文 : X_FORWARDED - uses the X-Forwarded-* headers"><code>X_FORWARDED</code> - <code>X-Forwarded-*</code>ヘッダーを使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2xYxud.1" title="原文 : HOST - uses the Host header"><code>HOST</code> - <code>Host</code>ヘッダーを使用</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.3u8dsh.1" title="原文 : what intermediate nodes to trust">信頼する中間ノード</span></p>

</li>
</ul>

<p><span class="merged" id="all.2Rchff.spl1" title="原文 : When your application invokes request.requestedUri() Helidon iterates through the discovery types you set up for the receiving connection, gathering information from the corresponding header(s) for that type.">アプリケーションが<code>request.requestedUri()</code>を呼び出すと、Helidonは受信接続に対して設定した検出タイプを反復処理し、そのタイプの対応するヘッダーから情報を収集します。</span> <span class="merged" id="all.2Rchff.spl2" title="原文 : If the request does not have the corresponding header(s), or your settings do not trust the intermediate nodes reflected in those headers, then Helidon tries the next discovery type you set up.">リクエストに対応するヘッダーがない場合、または設定がそれらのヘッダーに反映された中間ノードを信頼しない場合、Helidonは、設定した次の検出タイプを試みます。</span> <span class="merged" id="all.2Rchff.spl3" title="原文 : Helidon uses the HOST discovery type if you do not set up discovery yourself or if, for a particular request, it cannot assemble the request information using any discovery type you did set up for the socket.">Helidonは、検出を自分で設定しない場合、または特定のリクエストに対して、ソケットに対して設定した検出タイプを使用してリクエスト情報をアセンブルできない場合、<code>HOST</code>検出タイプを使用します。</span> </p>


<h3 id="_setting_up_requested_uri_discovery_programmatically"><span class="merged" id="all.4bZNvS" title="原文 : Setting Up Requested URI Discovery Programmatically">プログラムによるリクエストされたURI検出の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3u5fg" title="原文 : To set up requested URI discovery on the default socket for your server, use the WebServer.Builder:">サーバーのデフォルト・ソケットでリクエストされたURI検出を設定するには、<a href="/apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.Builder.html" target="_blank"><code>WebServer.Builder</code></a>を使用します:</span></p>

<markup
lang="java"
title="Requested URI set-up for the default server socket"
>import io.helidon.common.configurable.AllowList;
import static io.helidon.http.RequestedUriDiscoveryContext.RequestedUriDiscoveryType.FORWARDED;
import static io.helidon.http.RequestedUriDiscoveryContext.RequestedUriDiscoveryType.X_FORWARDED;

AllowList trustedProxies = AllowList.builder()
        .addAllowedPattern(Pattern.compile("lb.+\\.mycorp\\.com"))
        .addDenied("lbtest.mycorp.com")
        .build(); <span class="conum" data-value="1" />

WebServer.Builder builder = WebServer.builder()
        .host("localhost")
        .requestedUriDiscoveryContext(it -&gt; it.addDiscoveryType(FORWARDED) <span class="conum" data-value="2" />
                        .addDiscoveryType(X_FORWARDED)
                        .trustedProxies(trustedProxies)) <span class="conum" data-value="3" />
        .routing(Main::routing)
        .config(serverConfig);</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1EbpGT.spl1" title="原文 : Create the AllowList describing the intermediate networks nodes to trust and not trust.">信頼または信頼しない中間ネットワーク・ノードを記述する<code>AllowList</code>を作成します。</span> <span class="merged" id="all.1EbpGT.spl2" title="原文 : Presumably the lbxxx.mycorp.com nodes are trusted load balancers except for the test load balancer lbtest, and no other nodes are trusted."><code>lbxxx.mycorp.com</code>ノードは、テスト・ロード・バランサ<code>lbtest</code>を除き、信頼できるロード・バランサであり、他のノードは信頼されません。</span> <span class="merged" id="all.1EbpGT.spl3" title="原文 : AllowList accepts prefixes, suffixes, predicates, regex patterns, and exact matches."><code>AllowList</code>は、プレフィクス、サフィクス、述語、正規表現パターンおよび完全一致を受け入れます。</span> <span class="merged" id="all.1EbpGT.spl4" title="原文 : See the AllowList JavaDoc for complete information.">詳細は、<a href="/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/AllowList.html" target="_blank"><code>AllowList</code></a> JavaDocを参照してください。</span> </li>
<li data-value="2"><span class="merged" id="all.1nybs0" title="原文 : Use Forwarded first, then try X-Forwarded-* on each request.">まず<code>Forwarded</code>を使用し、次に各リクエストで<code>X-Forwarded-*</code>を試行します。</span></li>
<li data-value="3"><span class="merged" id="all.3PqhVG" title="原文 : Set the AllowList for trusted intermediaries.">信頼できる仲介者に対して<code>AllowList</code>を設定します。</span></li>
</ul>

<p><span class="merged" id="all.82Lg3" title="原文 : If you build your server with additional sockets, you can control requested URI discovery separately for each.">追加のソケットを使用してサーバーを構築する場合は、リクエストされたURI検出をそれぞれ個別に制御できます。</span></p>

</div>


<h3 id="_setting_up_requested_uri_discovery_using_configuration"><span class="merged" id="all.1iqwWs" title="原文 : Setting Up Requested URI Discovery using Configuration">構成を使用したリクエストされたURI検出の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1nbTpj.spl1" title="原文 : You can also use configuration to set up the requested URI discovery behavior.">構成を使用して、リクエストされたURI検出動作を設定することもできます。</span> <span class="merged" id="all.1nbTpj.spl2" title="原文 : The following example replicates the settings assigned programmatically in the earlier code example:">次の例では、前のコード例でプログラム的に割り当てられた設定を複製します:</span> </p>

<markup
lang="yaml"
title="Configuring requested URI behavior"
>server:
  port: 0
  requested-uri-discovery:
    types: FORWARDED,X_FORWARDED
    trusted-proxies:
      allow:
        pattern: "lb.*\\.mycorp\\.com"
      deny:
        exact: "lbtest.mycorp.com""</markup>

</div>


<h3 id="_obtaining_the_requested_uri_information"><span class="merged" id="all.2r2Cp5.1" title="原文 : Obtaining the Requested URI Information">リクエストされたURI情報の取得</span></h3>
<div class="section">
<p><span class="merged" id="all.3cliyY" title="原文 : Your code obtains the requested URI information from the Helidon server request object:">コードは、リクエストされたURI情報をHelidonサーバー・リクエスト・オブジェクトから取得します:</span></p>

<markup
lang="java"
title="Retrieving Requested URI Information"
>import io.helidon.common.uri.UriInfo;

public class MyHandler implements Handler {

    @Override
    public void accept(ServerRequest req, ServerResponse res) {
        UriInfo uriInfo = req.requestedUri();
        // ...
    }
}</markup>

<p><span class="merged" id="all.JoJCg.1" title="原文 : See the UriInfo JavaDoc for more information.">詳細は、<a href="/apidocs/io.helidon.common.uri/io/helidon/common/uri/UriInfo.html" target="_blank"><code>UriInfo</code></a> JavaDocを参照してください。</span></p>

</div>

</div>


<h2 id="_error_handling"><span class="merged" id="all.dOZbz"  title="原文:: Error Handling">エラー処理</span></h2>
<div class="section">

<h3 id="_error_routing"><span class="merged" id="all.thWvT" title="原文 : Error Routing">エラー・ルーティング</span></h3>
<div class="section">
<p><span class="merged" id="all.1VyMZq" title="原文 : You may register an error handler for a specific Throwable in a HttpRouting.Builder method."><code>HttpRouting.Builder</code>メソッドで、特定の<code>Throwable</code>のエラー・ハンドラを登録できます。</span></p>

<markup
lang="java"

>HttpRouting.Builder routing = HttpRouting.builder()
                        .error(MyException.class, (req, res, ex) -&gt; { <span class="conum" data-value="1" />
                            // handle the error, set the HTTP status code
                            res.send(errorDescriptionObject); <span class="conum" data-value="2" />
                        });</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1JsyTn" title="原文 : Registers an error handler that handles MyException that are thrown from the upstream handlers">アップストリーム・ハンドラからスローされる<code>MyException</code>を処理するエラー・ハンドラを登録</span></li>
<li data-value="2"><span class="merged" id="all.3aRXWw" title="原文 : Finishes the request handling by sending a response">レスポンスを送信してリクエスト処理を終了</span></li>
</ul>

<p><span class="merged" id="all.3DXiIi" title="原文 : Error handlers are called when">エラー・ハンドラは次の場合にコールされます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2HZIOQ" title="原文 : an exception is thrown from a handler">ハンドラから例外がスローされました</span></p>

</li>
</ul>

<p><span class="merged" id="all.1dtrMz" title="原文 : As with the standard handlers, the error handler must either">標準ハンドラと同様に、エラー・ハンドラは次のいずれかである必要があります</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2AxGtj" title="原文 : send a response">レスポンスの送信</span></p>
<markup
lang="java"

>.error(MyException.class, (req, res, ex) -&gt; {
    res.status(Http.Status.BAD_REQUEST_400);
    res.send("Unable to parse request. Message: " + ex.getMessage());
})</markup>

</li>
<li>
<p><span class="merged" id="all.I1uWK" title="原文 : or throw an exception">または例外をスロー</span></p>
<markup
lang="java"

>.error(Throwable.class, (req, res, ex) -&gt; {
    // some logic
    throw ex;
})</markup>

</li>
</ul>

<p><span class="merged" id="all.36SFJK" title="原文 : Exceptions thrown from error handlers are not error handled, and will end up in an InternalServerError.">エラー・ハンドラからスローされた例外はエラー処理されず、InternalServerErrorになります。</span></p>

</div>


<h3 id="_default_error_handling"><span class="merged" id="all.2HIBYt" title="原文 : Default Error Handling">デフォルトのエラー処理</span></h3>
<div class="section">
<p><span class="merged" id="all.1jyIvf" title="原文 : If no user-defined error handler is matched, or if the error handler of the exception threw an exception, then the exception is translated to an HTTP response as follows:">ユーザー定義エラー・ハンドラが一致しない場合、または例外のエラー・ハンドラによって例外がスローされた場合、例外は次のようにHTTPレスポンスに変換されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4XqE15" title="原文 : Subtypes of HttpException are translated to their associated HTTP error codes."><code>HttpException</code>のサブタイプは、関連付けられたHTTPエラー・コードに変換されます。</span></p>
<markup
lang="java"
title="Reply with the <code>406</code> HTTP error code by throwing an exception"
>(req, res) -&gt; throw new HttpException("Amount of money must be greater than 0.", Http.Status.NOT_ACCEPTABLE_406) <span class="conum" data-value="1" /></markup>

</li>
<li>
<p><span class="merged" id="all.2eznVB" title="原文 : Otherwise, the exceptions are translated to an Internal Server Error HTTP error code 500.">それ以外の場合、例外は内部サーバー・エラーHTTPエラー・コード<code>500</code>に変換されます。</span></p>

</li>
</ul>

</div>

</div>


<h2 id="_supported_technologies"><span class="merged" id="all.vsDj0"  title="原文:: Supported Technologies">サポートされているテクノロジ</span></h2>
<div class="section">

</div>


<h2 id="_http2_support"><span class="merged" id="all.3Nb1qa.1" title="原文 : HTTP/2 Support">HTTP/2のサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.3OsK5r.spl1" title="原文 : Helidon supports HTTP/2 upgrade from HTTP/1, HTTP/2 without prior knowledge, HTTP/2 with prior knowledge, and HTTP/2 with ALPN over TLS.">Helidonは、HTTP/1からのHTTP/2アップグレード、事前の知識のないHTTP/2、事前の知識のあるHTTP/2、およびTLS経由のALPNを使用したHTTP/2をサポートしています。</span> <span class="merged" id="all.3OsK5r.spl2" title="原文 : HTTP/2 support is enabled in WebServer by default when it’s artifact is available on classpath.">HTTP/2サポートは、アーティファクトがクラスパスで使用可能な場合、デフォルトでWebServerで有効になっています。</span> </p>


<h3 id="_maven_coordinates"><span class="merged" id="all.317oeS.71"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.3lwdo1" title="原文 : To enable HTTP/2 support add the following dependency to your project’s pom.xml.">HTTP/2サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-http2&lt;/artifactId&gt;&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_static_content_support"><span class="merged" id="all.2MmOx8" title="原文 : Static Content Support">静的コンテンツのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.2Wa8L5.spl1" title="原文 : +Use the io.helidon.webserver.staticcontent.StaticContentService class to serve files and classpath resources.">+Use:ファイルおよびクラスパス・リソースを提供する<code>io.helidon.webserver.staticcontent.StaticContentService</code>クラス。</span> <span class="merged" id="all.2Wa8L5.spl2" title="原文 : StaticContentService can be created for any readable directory or classpath context root and registered on a path in HttpRouting."><code>StaticContentService</code>は、読取り可能な任意のディレクトリまたはクラスパス・コンテキスト・ルートに対して作成し、<code>HttpRouting</code>のパスに登録できます。</span> </p>

<p><span class="merged" id="all.4ABWbd" title="原文 : You can combine dynamic handlers with StaticContentService objects: if no file matches the request path, then the request is forwarded to the next handler.">動的ハンドラを<code>StaticContentService</code>オブジェクトと組み合せることができます: リクエスト・パスに一致するファイルがない場合、リクエストは次のハンドラに転送されます。</span></p>


<h3 id="_maven_coordinates_2"><span class="merged" id="all.317oeS.72"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.4N48Vu" title="原文 : To enable Static Content Support add the following dependency to your project’s pom.xml.">静的コンテンツ・サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-static-content&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_registering_static_content"><span class="merged" id="all.3Ik1ax" title="原文 : Registering Static Content">静的コンテンツの登録</span></h3>
<div class="section">
<p><span class="merged" id="all.s4DaZ" title="原文 : To register static content based on a file system (/pictures), and classpath (/):">ファイル・システム(<code>/pictures</code>)およびクラスパス(<code>/</code>)に基づいて静的コンテンツを登録するには:</span></p>

<markup
lang="java"

>HttpRouting.builder()
       .register("/pictures", StaticContentService.create(Paths.get("/some/WEB/pics"))) <span class="conum" data-value="1" />
       .register("/", StaticContentService.builder("/static-content") <span class="conum" data-value="2" />
                                   .welcomeFileName("index.html") <span class="conum" data-value="3" />
                                   .build());</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.z7d1D" title="原文 : Create a new StaticContentService object to serve data from the file system, and associate it with the &quot;/pictures&quot; context path.">ファイル・システムからのデータを提供する新しい<code>StaticContentService</code>オブジェクトを作成し、<code>"/pictures"</code>コンテキスト・パスに関連付けます。</span></li>
<li data-value="2"><span class="merged" id="all.2ZSKbz.spl1" title="原文 : Create a StaticContentService object to serve resources from the contextual ClassLoader.">コンテキスト<code>ClassLoader</code>からリソースを提供する<code>StaticContentService</code>オブジェクトを作成します。</span> <span class="merged" id="all.2ZSKbz.spl2" title="原文 : The specific classloader can be also defined.">特定のクラス・ローダーを定義することもできます。</span> <span class="merged" id="all.2ZSKbz.spl3" title="原文 : A builder lets you provide more configuration values.">ビルダーを使用すると、より多くの構成値を指定できます。</span> </li>
<li data-value="3"><span class="merged" id="all.20Zwty" title="原文 : index.html is the file that is returned if a directory is requested."><code>index.html</code>は、ディレクトリがリクエストされた場合に返されるファイルです。</span></li>
</ul>

<p><span class="merged" id="all.TZv31.spl1" title="原文 : A StaticContentService object can be created using create(…​) factory methods or a builder."><code>StaticContentService</code>オブジェクトは、<code>create(…​)</code>ファクトリ・メソッドまたは<code>builder</code>を使用して作成できます。</span> <span class="merged" id="all.TZv31.spl2" title="原文 : The builder lets you provide more configuration values, including welcome file-name and mappings of filename extensions to media types."><code>builder</code>では、<em>welcome file-name</em>やファイル名拡張子からメディア・タイプへのマッピングなど、より多くの構成値を指定できます。</span> </p>

</div>

</div>


<h2 id="_media_types_support"><span class="merged" id="all.1ZmPqT" title="原文 : Media types support">メディア・タイプのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.36OJkC.spl1" title="原文 : WebServer and WebClient share the HTTP media support of Helidon, and any supported media type can be used in both.">WebServerとWebClientは、HelidonのHTTPメディア・サポートを共有し、サポートされているメディア・タイプを両方で使用できます。</span> <span class="merged" id="all.36OJkC.spl2" title="原文 : The media type support is automatically discovered from classpath.">メディア・タイプのサポートは、クラスパスから自動的に検出されます。</span> <span class="merged" id="all.36OJkC.spl3" title="原文 : Programmatic support is of course enabled as well through MediaContext.">もちろん、プログラムによるサポートは<code>MediaContext</code>でも可能です。</span> </p>

<p><span class="merged" id="all.1Y2yqe" title="原文 : Customized media support for WebServer">WebServerのカスタマイズされたメディア・サポート</span></p>

<markup
lang="java"

>WebServer server = WebServer.builder()
                .routing(Main::routing)
                .mediaContext(MediaContext.builder()
                                      .mediaSupportsDiscoverServices(false)
                                      .addMediaSupport(JsonpSupport.create())
                                      .build())
                .build();</markup>

<p><span class="merged" id="all.3Y6Kva" title="原文 : Each registered (or discovered) media support adds support for writing and reading entities of a specific type.">登録(または検出)された各メディア・サポートは、特定のタイプのエンティティの書込みおよび読取りのサポートを追加します。</span></p>

<p><span class="merged" id="all.24wF7b" title="原文 : The following table lists JSON media supports:">次の表に、サポートされているJSONメディアを示します:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 10%;">
<col style="width: 10%;">
<col style="width: 50%;">
<col style="width: 30%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2FyADM"  title="原文:: Media type">メディア・タイプ</span></th>
<th><span class="merged" id="all.1Jrys9"  title="原文: TypeName">TypeName</span></th>
<th><span class="merged" id="all.4ciP4G" title="原文 : Maven groupId:artifactId">Maven groupId:artifactId</span></th>
<th><span class="merged" id="all.3Bq7f2" title="原文 : Supported Java type(s)">サポートされているJavaタイプ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1qpKIR" title="原文 : JSON-P"><strong>JSON-P</strong></span></td>
<td class=""><span class="merged" id="all.EETPU"  title="原文: JsonpSupport">JsonpSupport</span></td>
<td class=""><span class="merged" id="all.2OZGhB"  title="原文: io.helidon.http.media:helidon-http-media-jsonp"><code>io.helidon.http.media:helidon-http-media-jsonp</code></span></td>
<td class=""><span class="merged" id="all.4Zyv59"  title="原文: JsonObject, JsonArray"><code>JsonObject, JsonArray</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1I12ZW" title="原文 : JSON-B"><strong>JSON-B</strong></span></td>
<td class=""><span class="merged" id="all.us6I2"  title="原文: JsonbSupport">JsonbSupport</span></td>
<td class=""><span class="merged" id="all.3Rm2mJ"  title="原文: io.helidon.http.media:helidon-http-media-jsonb"><code>io.helidon.http.media:helidon-http-media-jsonb</code></span></td>
<td class=""><span class="merged" id="all.209EFj" title="原文 : Any *">Any *</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3jUm68"  title="原文:: Jackson"><strong>Jackson</strong></span></td>
<td class=""><span class="merged" id="all.xZtgo"  title="原文: JacksonSupport">JacksonSupport</span></td>
<td class=""><span class="merged" id="all.20wHym"  title="原文: io.helidon.http.media:helidon-http-media-jackson"><code>io.helidon.http.media:helidon-http-media-jackson</code></span></td>
<td class=""><span class="merged" id="all.209EFj.1" title="原文 : Any *">Any *</span></td>
</tr>
</tbody>
</table>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2kfyn5" title="原文 : JSON-B and Jackson have lower weight, so they are used only when no other media type matched the object being written or read">JSON-BとJacksonの重みは低いため、書込みまたは読取り対象のオブジェクトと一致する他のメディア・タイプがない場合にのみ使用されます</span></p>

</li>
</ul>


<h3 id="_json_p_support"><span class="merged" id="all.3sd5NF" title="原文 : JSON-P Support">JSON-Pのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.3OJjiJ.spl1" title="原文 : The WebServer supports JSON-P.">WebServerはJSON-Pをサポートしています。</span> <span class="merged" id="all.3OJjiJ.spl2" title="原文 : When enabled, you can send and receive JSON-P objects transparently.">有効にすると、JSON-Pオブジェクトを透過的に送受信できます。</span> </p>


<h4 id="_maven_coordinates_3"><span class="merged" id="all.317oeS.73"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.ej2Tu" title="原文 : To enable JSON Support add the following dependency to your project’s pom.xml.">JSONサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_usage"><span class="merged" id="all.JUOSC.72"  title="原文:: Usage">使用</span></h4>
<div class="section">
<markup
lang="java"
title="Handler that receives and returns JSON objects"
>private static final JsonBuilderFactory JSON_FACTORY = Json.createBuilderFactory(Collections.emptyMap()); <span class="conum" data-value="1" />

private void sayHello(ServerRequest req, ServerResponse res, JsonObject json) { <span class="conum" data-value="2" />
        JsonObject msg = JSON_FACTORY.createObjectBuilder()   <span class="conum" data-value="3" />
          .add("message", "Hello " + json.getString("name"))
          .build();
        res.send(msg);                            <span class="conum" data-value="4" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3RBreb" title="原文 : Using a JsonBuilderFactory is more efficient than Json.createObjectBuilder()"><code>JsonBuilderFactory</code>の使用は、<code>Json.createObjectBuilder()</code>よりも効率的です</span></li>
<li data-value="2"><span class="merged" id="all.1Dpxm5" title="原文 : JsonObject is passed to handler">JsonObjectはハンドラに渡されます</span></li>
<li data-value="3"><span class="merged" id="all.2dvXIE" title="原文 : Create a JsonObject using JSON-P to hold return data">JSON-Pを使用して戻りデータを保持するJsonObjectの作成</span></li>
<li data-value="4"><span class="merged" id="all.2Axpbh" title="原文 : Send JsonObject in response">レスポンスでJsonObjectを送信</span></li>
</ul>

<markup
lang="bash"
title="Example of posting JSON to sayHello endpoint"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/sayhello -d '{"name":"Joe"}'</markup>

<markup
lang="json"
title="Response body"
>{"message":"Hello Joe"}</markup>

</div>

</div>


<h3 id="_json_b_support"><span class="merged" id="all.1UvfC6" title="原文 : JSON-B Support">JSON-Bのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.3HZR0c.spl1" title="原文 : The WebServer supports the JSON-B specification.">WebServerは、<a href="http://json-b.net/" target="_blank">「JSON-B仕様」</a>をサポートしています。</span> <span class="merged" id="all.3HZR0c.spl2" title="原文 : When this support is enabled, Java objects will be serialized to and deserialized from JSON automatically using Yasson, an implementation of the JSON-B specification.">このサポートが有効な場合、Javaオブジェクトは、<a href="https://jakarta.ee/specifications/jsonb/3.0/jakarta-jsonb-spec-3.0.html" target="_blank">「JSON-B仕様」</a>の実装である<a href="https://github.com/eclipse-ee4j/yasson" target="_blank">Yasson</a>を使用してJSONに対して自動的に直列化および直列化復元されます。</span> </p>


<h4 id="_maven_coordinates_4"><span class="merged" id="all.317oeS.74"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.2tDJu0" title="原文 : To enable JSON-B Support add the following dependency to your project’s pom.xml.">JSON-Bサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jsonb&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_usage_2"><span class="merged" id="all.JUOSC.73"  title="原文:: Usage">使用</span></h4>
<div class="section">
<p><span class="merged" id="all.43ND6S.spl1" title="原文 : Now that automatic JSON serialization and deserialization facilities have been set up, you can register a Handler that works with Java objects instead of raw JSON.">JSONの自動直列化および直列化復元機能が設定されたので、RAW JSONのかわりにJavaオブジェクトで動作する<code>Handler</code>を登録できます。</span> <span class="merged" id="all.43ND6S.spl2" title="原文 : Deserialization from and serialization to JSON will be handled according to the JSON-B specification.">JSONからの直列化復元およびJSONへの直列化は、<a href="https://jcp.org/en/jsr/detail?id=367" target="_blank">「JSON-B仕様」</a>に従って処理されます。</span> </p>

<p><span class="merged" id="all.4eUl55" title="原文 : Suppose you have a Person class that looks like this:">次のような<code>Person</code>クラスがあるとします:</span></p>

<markup
lang="java"
title="Hypothetical <code>Person</code> class"
>public class Person {

    private String name;

    public Person() {
        super();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}</markup>

<p><span class="merged" id="all.ZgWx9" title="原文 : Then you can set up a Handler like this:">その後、次のように<code>Handler</code>を設定できます:</span></p>

<markup
lang="java"
title="A <code>Handler</code> that works with Java objects instead of raw JSON"
>HttpRouting.Builder routing =
    routingBuilder.post("/echo", (req, res) -&gt; res.send(req.content().as(Person.class))); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.16ITsA.spl1" title="原文 : This handler consumes a Person instance and simply echoes it back.">このハンドラは、<code>Person</code>インスタンスを使用し、単にエコーして戻します。</span> <span class="merged" id="all.16ITsA.spl2" title="原文 : Note that there is no working with raw JSON here.">ここではRAW JSONを使用しないことに注意してください。</span> </li>
</ul>

<markup
lang="bash"
title="Example of posting JSON to the <code>/echo</code> endpoint"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/echo -d '{"name":"Joe"}'
{"name":"Joe"}</markup>

</div>

</div>


<h3 id="_jackson_support"><span class="merged" id="all.2DXHdl" title="原文 : Jackson Support">Jacksonのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.1U2Qxn.spl1" title="原文 : The WebServer supports Jackson.">WebServerは、<a href="https://github.com/FasterXML/jackson#jackson-project-home-github" target="_blank">Jackson</a>をサポートしています。</span> <span class="merged" id="all.1U2Qxn.spl2" title="原文 : When this support is enabled, Java objects will be serialized to and deserialized from JSON automatically using Jackson.">このサポートが有効な場合、Javaオブジェクトは、Jacksonを使用してJSONに対して自動的に直列化および直列化復元されます。</span> </p>


<h4 id="_maven_coordinates_5"><span class="merged" id="all.317oeS.75"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<p><span class="merged" id="all.iE6N6" title="原文 : To enable Jackson Support add the following dependency to your project’s pom.xml.">Jacksonサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jackson&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_usage_3"><span class="merged" id="all.JUOSC.74"  title="原文:: Usage">使用</span></h4>
<div class="section">
<p><span class="merged" id="all.1RoW5p.spl1" title="原文 : Now that automatic JSON serialization and deserialization facilities have been set up, you can register a Handler that works with Java objects instead of raw JSON.">JSONの自動直列化および直列化復元機能が設定されたので、RAW JSONのかわりにJavaオブジェクトで動作する<code>Handler</code>を登録できます。</span> <span class="merged" id="all.1RoW5p.spl2" title="原文 : Deserialization from and serialization to JSON will be handled by Jackson.">JSONからの直列化復元およびJSONへの直列化は、<a href="https://github.com/FasterXML/jackson#jackson-project-home-github" target="_blank">Jackson</a>によって処理されます。</span> </p>

<p><span class="merged" id="all.4eUl55.1" title="原文 : Suppose you have a Person class that looks like this:">次のような<code>Person</code>クラスがあるとします:</span></p>

<markup
lang="java"
title="Hypothetical <code>Person</code> class"
>public class Person {

    private String name;

    public Person() {
        super();
    }

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }
}</markup>

<p><span class="merged" id="all.ZgWx9.1" title="原文 : Then you can set up a Handler like this:">その後、次のように<code>Handler</code>を設定できます:</span></p>

<markup
lang="java"
title="A <code>Handler</code> that works with Java objects instead of raw JSON"
>HttpRouting.Builder routing =
routingBuilder.post("/echo", (req, res) -&gt; res.send(req.content().as(Person.class))); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.16ITsA.1.spl1" title="原文 : This handler consumes a Person instance and simply echoes it back.">このハンドラは、<code>Person</code>インスタンスを使用し、単にエコーして戻します。</span> <span class="merged" id="all.16ITsA.1.spl2" title="原文 : Note that there is no working with raw JSON here.">ここではRAW JSONを使用しないことに注意してください。</span> </li>
</ul>

<markup
lang="bash"
title="Example of posting JSON to the <code>/echo</code> endpoint"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/echo -d '{"name":"Joe"}'</markup>

<markup
lang="json"
title="Response body"
>{"name":"Joe"}</markup>

</div>

</div>

</div>


<h2 id="_access_log"><span class="merged" id="all.38NrJK.1"  title="原文:: Access Log">アクセス・ログ</span></h2>
<div class="section">
<p><span class="merged" id="all.3F8CBy" title="原文 : Access logging in Helidon is done by a dedicated module that can be added to WebServer and configured.">Helidonでのアクセス・ロギングは、WebServerに追加して構成できる専用モジュールによって行われます。</span></p>

<p><span class="merged" id="all.oHRTM.spl1" title="原文 : Access logging is a Helidon WebServer ServerFeature.">アクセス・ロギングは、Helidon WebServer <code>ServerFeature</code>です。</span> <span class="merged" id="all.oHRTM.spl2" title="原文 : Access Log feature has a very high weight, so it is registered before other features (such as security) that may terminate a request.">アクセス・ログ機能の重みは非常に高いため、リクエストを終了する可能性のある他の機能(セキュリティなど)の前に登録されます。</span> <span class="merged" id="all.oHRTM.spl3" title="原文 : This is to ensure the log contains all requests with appropriate status codes.">これは、ログに適切なステータス・コードを持つすべてのリクエストが含まれるようにするためです。</span> </p>

<p><span class="merged" id="all.Y2Khl.1" title="原文 : To enable Access logging add the following dependency to project’s pom.xml:">アクセス・ロギングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-access-log&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_configuring_access_log_in_your_code"><span class="merged" id="all.IBReq" title="原文 : Configuring Access Log in Your Code">コード内のアクセス・ログの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2OVhZ1.spl1" title="原文 : AccessLogFeature is discovered automatically by default, and configured through server.features.access-log."><code>AccessLogFeature</code>は、デフォルトで自動的に検出され、<code>server.features.access-log</code>を使用して構成されます。</span> <span class="merged" id="all.2OVhZ1.spl2" title="原文 : You can also configure this feature in code by registering it with WebServer (which will replace the discovered feature).">この機能をコードで構成するには、WebServer (検出された機能を置き換える)に登録します。</span> </p>

<markup
lang="java"

>WebServer.builder()
         .addFeature(AccessLogFeature.builder()
             .commonLogFormat()
             .build());</markup>

</div>


<h3 id="_configuring_access_log_in_a_configuration_file"><span class="merged" id="all.2uNXK" title="原文 : Configuring Access Log in a Configuration File">構成ファイル内のアクセス・ログの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1FOoX1.1" title="原文 : Access log can be configured as follows:">アクセス・ログは次のように構成できます:</span></p>

<markup
lang="yaml"
title="Access Log configuration file"
>server:
  port: 8080
  features:
    access-log:
      format: "%h %l %u %t %r %s %b %{Referer}i"</markup>

<p><span class="merged" id="all.2J4mzr" title="原文 : All options shown below are also available programmatically when using builder.">ビルダーを使用するときは、次に示すすべてのオプションもプログラムで使用できます。</span></p>

</div>

</div>


<h2 id="_accesslogfeature_webserver_accesslog_configuration"><span class="merged" id="all.I9TFx.3" title="原文 : AccessLogFeature (webserver.accesslog) Configuration">AccessLogFeature (webserver.accesslog)構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2p0e71.3" title="原文 : Type: io.helidon.webserver.accesslog.AccessLogFeature">タイプ: <a href="/apidocs/io.helidon.webserver.accesslog/io/helidon/webserver/accesslog/AccessLogFeature.html" target="_blank">io.helidon.webserver.accesslog.AccessLogFeature</a></span></p>

<markup
lang="text"
title="Config key"
>access-log</markup>

<p><span class="merged" id="all.31kiUh.51" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1upsag.8"  title="原文: io.helidon.webserver.spi.ServerFeatureProvider"><code>io.helidon.webserver.spi.ServerFeatureProvider</code></span></p>

</li>
</ul>


<h3 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.157"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.149" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.173"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.166"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.173"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.183"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.30"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.277"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.142"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HO27M.3" title="原文 : Whether this feature will be enabled.">この機能を有効にするかどうか。</span></p>

<markup>@return whether enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4L3INC.4"  title="原文: format"><code>format</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.355"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.20pzcR.3.spl1" title="原文 : The format for log entries (similar to the Apache LogFormat). &lt;table class=&quot;config&quot;&gt; &lt;caption&gt;Log format elements&lt;/caption&gt; &lt;tr&gt; &lt;td&gt;%h&lt;/td&gt; &lt;td&gt;IP address of the remote host&lt;/td&gt; &lt;td&gt;HostLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%l&lt;/td&gt; &lt;td&gt;The client identity.">ログ・エントリの形式(Apache <code>LogFormat</code>と同様)。&lt;table class="config"> &lt;caption>Logは、リモートのhost&lt;/td> &lt;td>HostLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%l&lt;/td> &lt;td>クライアント・アイデンティティの要素&lt;/caption> &lt;tr> &lt;td>%h&lt;/td> &lt;td>IPアドレスをフォーマットします。</span> <span class="merged" id="all.20pzcR.3.spl2" title="原文 : This is always undefined in Helidon.&lt;/td&gt; &lt;td&gt;UserIdLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%u&lt;/td&gt; &lt;td&gt;User ID as asserted by Helidon Security.&lt;/td&gt; &lt;td&gt;UserLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%t&lt;/td&gt; &lt;td&gt;The timestamp&lt;/td&gt; &lt;td&gt;TimestampLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%r&lt;/td&gt; &lt;td&gt;The request line (&quot;GET /favicon.ico HTTP/1.0&quot;)&lt;/td&gt; &lt;td&gt;RequestLineLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%s&lt;/td&gt; &lt;td&gt;The status code returned to the client&lt;/td&gt; &lt;td&gt;StatusLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%b&lt;/td&gt; &lt;td&gt;The entity size in bytes&lt;/td&gt; &lt;td&gt;SizeLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%D&lt;/td&gt; &lt;td&gt;The time taken in microseconds (start of request until last byte written)&lt;/td&gt; &lt;td&gt;TimeTakenLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%T&lt;/td&gt; &lt;td&gt;The time taken in seconds (start of request until last byte written), integer&lt;/td&gt; &lt;td&gt;TimeTakenLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%{header-name}i&lt;/td&gt; &lt;td&gt;Value of header header-name&lt;/td&gt; &lt;td&gt;HeaderLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;">これはHelidonで常に未定義です。&lt;/td> &lt;td>UserIdLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%u&lt;/td> &lt;td>HeidonセキュリティによりユーザーIDとしてアサート。&lt;/td> &lt;td>UserLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%t&lt;/td> &lt;td>The timestamp&lt;/td> &lt;td>TimestampLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%r&lt;/td> &lt;td>要求行 (<code>"GET /favicon.ico HTTP/1.0"</code>)&lt;/td> &lt;td>RequestLineLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%s&lt;/td> &lt;td>クライアントに戻されるステータス・コード。&lt;/td> &lt;td>StatusLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%b&lt;/td> &lt;td>エンティティ・サイズ(バイト)&lt;/td> &lt;td>SizeLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%D&lt;/td> &lt;td>時間 (マイクロ秒) (最後のバイト書込みまで要求の開始)&lt;/td> &lt;td>TimeTakenLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%T&lt;/td> &lt;td>時間 (秒) (最後のバイト書込みまで要求の開始), integer&lt;/td> &lt;td>TimeTakenLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%{header-name}i&lt;/td> &lt;td>ヘッダーの値 <code>header-name</code>&lt;/td> &lt;td>HeaderLogEntry&lt;/td> &lt;/tr> &lt;/table></span> </p>

<markup>@return format string, such as `%h %l %u %t %r %b %{Referer`i}</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z8Q9s.3"  title="原文: logger-name"><code>logger-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.356"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aJUwu.3"  title="原文: io.helidon.webserver.AccessLog"><code>io.helidon.webserver.AccessLog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1k8TO9.3.spl1" title="原文 : Name of the logger used to obtain access log logger from System#getLogger(String).">System#getLogger(String)からアクセス・ログ・ロガーを取得するために使用するロガーの名前。</span> <span class="merged" id="all.1k8TO9.3.spl2" title="原文 : Defaults to AccessLogFeature#DEFAULT_LOGGER_NAME.">デフォルトは<code>AccessLogFeature#DEFAULT_LOGGER_NAME</code>です。</span> </p>

<markup>@return name of the logger to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.13"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.42"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.11F0ik.3.spl1" title="原文 : List of sockets to register this feature on.">この機能を登録するソケットのリスト。</span> <span class="merged" id="all.11F0ik.3.spl2" title="原文 : If empty, it would get registered on all sockets.">空の場合は、すべてのソケットに登録されます。</span> <span class="merged" id="all.11F0ik.3.spl3" title="原文 : The logger used will have the expected logger with a suffix of the socket name.">使用するロガーには、ソケット名のサフィクスを持つ予期されるロガーが含まれます。</span> </p>

<markup>@return socket names to register on, defaults to empty (all available sockets)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.9"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.10"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3NqvMr.3"  title="原文: 1000.0"><code>1000.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.5laEM.3.spl1" title="原文 : Weight of the access log feature.">アクセス・ログ機能の重み。</span> <span class="merged" id="all.5laEM.3.spl2" title="原文 : We need to log access for anything happening on the server, so weight is high: io.helidon.webserver.accesslog.AccessLogFeature#WEIGHT.">サーバーで何が起こってもアクセスを記録する必要があるため、重みが高くなります: <code>io.helidon.webserver.accesslog.AccessLogFeature#WEIGHT</code>。</span> </p>

<markup>@return weight of the feature</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_tls_configuration"><span class="merged" id="all.vdl3i"  title="原文:: TLS Configuration">TLS構成</span></h2>
<div class="section">
<p><span class="merged" id="all.34DKy9" title="原文 : Configure TLS either programmatically, or by the Helidon configuration framework.">TLSは、プログラムによって、またはHelidon構成フレームワークによって構成します。</span></p>


<h3 id="_configuring_tls_in_your_code"><span class="merged" id="all.3B9tWP" title="原文 : Configuring TLS in Your Code">コードでのTLSの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3rNN1S" title="原文 : To configure TLS in WebServer programmatically create your keystore configuration and pass it to the WebServer builder.">WebServerでTLSをプログラムで構成するには、キーストア構成を作成してWebServerビルダーに渡します。</span></p>

<markup
lang="java"

>Tls tls = Tls.builder()
                .privateKey(pk -&gt; pk.keystore(pkKeystore -&gt; pkKeystore.keystore(Resource.create("private-key.p12"))
                        .passphrase("password".toCharArray())))
                .trust(trust -&gt; trust.keystore(trustStore -&gt; trustStore.keystore(Resource.create("trust.p12"))))
                .build();

WebServer.builder()
         .tls(tls)
         .build();</markup>

</div>


<h3 id="_configuring_tls_in_the_config_file"><span class="merged" id="all.2TqfP1" title="原文 : Configuring TLS in the Config File">構成ファイルでのTLSの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3da0mn" title="原文 : It is also possible to configure TLS via the config file.">構成ファイルを介してTLSを構成することもできます。</span></p>

<markup
lang="yaml"
title="WebServer TLS configuration file <code>application.yaml</code>"
>server:
  tls:
    #Truststore setup
    trust:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "keystore.p12"
    #Keystore with private key and server certificate
    private-key:
      keystore:
        passphrase: "password"
        resource:
          resource-path: "keystore.p12"</markup>

<p><span class="merged" id="all.1Cq2QG.4" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="WebServer initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebServer webClient = WebServer.create(routing, config.get("server"));</markup>

<p><span class="merged" id="all.2IKRt1" title="原文 : Or you can only create WebServerTls instance based on the config file.">または、構成ファイルに基づいてのみWebServerTlsインスタンスを作成できます。</span></p>

<markup
lang="java"
title="WebServerTls instance based on <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebServerTls.builder()
    .config(config.get("server.tls"))
    .build();</markup>

<p><span class="merged" id="all.2MPule" title="原文 : This can alternatively be configured with paths to PKCS#8 PEM files rather than KeyStores:">これは、KeyStoresではなくPKCS#8 PEMファイルのパスで構成することもできます:</span></p>

<markup
lang="yaml"
title="WebServer TLS configuration file <code>application.yaml</code>"
>server:
  tls:
    #Truststore setup
    trust:
      pem:
        certificates:
          resource:
            resource-path: "ca-bundle.pem"
    private-key:
      pem:
        key:
          resource:
            resource-path: "key.pem"
        cert-chain:
          resource:
            resource-path: "chain.pem"</markup>

</div>


<h3 id="_configuration_options_4"><span class="merged" id="all.276fEP.1"  title="原文:: Configuration Options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.2WdE0J.1" title="原文 : Type: io.helidon.common.tls.Tls">タイプ: <a href="/apidocs/io.helidon.common.tls/io/helidon/common/tls/Tls.html" target="_blank">io.helidon.common.tls.Tls</a></span></p>


<h4 id="_configuration_options_5"><span class="merged" id="all.3SKgM1.158"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.150" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.174"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.167"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.174"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.184"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.yFryw.1"  title="原文: cipher-suite"><code>cipher-suite</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.43"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Ama4T.1" title="原文 : Enabled cipher suites for TLS communication.">TLS通信用の暗号スイートを有効化しました。</span></p>

<markup>@return cipher suits to enable, by default (or if list is empty), all available cipher suites
        are enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zwkgn.1"  title="原文: client-auth"><code>client-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.xpxai.1" title="原文 : TlsClientAuth (REQUIRED, OPTIONAL, NONE)">TlsClientAuth (REQUIRED, OPTIONAL, NONE)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.10P0gX.6"  title="原文: NONE"><code>NONE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PxQzD.1" title="原文 : Configure requirement for mutual TLS.">相互TLSの要件を構成します。</span></p>

<markup>@return what type of mutual TLS to use, defaults to TlsClientAuth#NONE</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.31"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.278"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.143"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15tsoB.1" title="原文 : Flag indicating whether Tls is enabled.">Tlsが有効になっているかどうかを示すフラグ。</span></p>

<markup>@return enabled flag</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2f0MYM.1"  title="原文: endpoint-identification-algorithm"><code>endpoint-identification-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.357"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4XBdVS.1"  title="原文: HTTPS"><code>HTTPS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1uNqGT.1" title="原文 : Identification algorithm for SSL endpoints.">SSLエンドポイントの識別アルゴリズム。</span></p>

<markup>@return configure endpoint identification algorithm, or set to `NONE`
        to disable endpoint identification (equivalent to hostname verification).
        Defaults to `Tls#ENDPOINT_IDENTIFICATION_HTTPS`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zCAWm.1"  title="原文: internal-keystore-provider"><code>internal-keystore-provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.358"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4G4sDO.1" title="原文 : Provider of the key stores used internally to create a key and trust manager factories.">キーおよびトラスト・マネージャ・ファクトリを作成するために内部的に使用されるキー・ストアのプロバイダ。</span></p>

<markup>@return keystore provider, if not defined, provider is not specified</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4I8rc8.1"  title="原文: internal-keystore-type"><code>internal-keystore-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.359"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.Qf7Ce.1" title="原文 : Type of the key stores used internally to create a key and trust manager factories.">キーおよびトラスト・マネージャ・ファクトリを作成するために内部的に使用されるキー・ストアのタイプ。</span></p>

<markup>@return keystore type, defaults to java.security.KeyStore#getDefaultType()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4feYPC.1"  title="原文: key-manager-factory-algorithm"><code>key-manager-factory-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.360"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1D6tPP.1.spl1" title="原文 : Algorithm of the key manager factory used when private key is defined.">秘密キーの定義時に使用されるキー・マネージャ・ファクトリのアルゴリズム。</span> <span class="merged" id="all.1D6tPP.1.spl2" title="原文 : Defaults to javax.net.ssl.KeyManagerFactory#getDefaultAlgorithm().">デフォルトはjavax.net.ssl.KeyManagerFactory#getDefaultAlgorithm()です。</span> </p>

<markup>@return algorithm to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h51IP.4"  title="原文: manager"><code>manager</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.47prT3.1" title="原文 : io.helidon.common.tls.TlsManager (service provider interface)">io.helidon.common.tls.TlsManager (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.41nrRn.1.spl1" title="原文 : The Tls manager.">TLSマネージャ。</span> <span class="merged" id="all.41nrRn.1.spl2" title="原文 : If one is not explicitly defined in the config then a default manager will be created.">構成で明示的に定義されていない場合は、デフォルト・マネージャが作成されます。</span> </p>

<markup>@return the tls manager of the tls instance
@see ConfiguredTlsManager</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HVwVy.1"  title="原文: private-key"><code>private-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1MLbDa.1"  title="原文: PrivateKey">PrivateKey</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Ykg0z.1.spl1" title="原文 : Private key to use.">使用する秘密キー。</span> <span class="merged" id="all.3Ykg0z.1.spl2" title="原文 : For server side TLS, this is required.">サーバー側TLSの場合、これは必須です。</span> <span class="merged" id="all.3Ykg0z.1.spl3" title="原文 : For client side TLS, this is optional (used when mutual TLS is enabled).">クライアント側TLSの場合、これはオプションです(相互TLSが有効な場合に使用されます)。</span> </p>

<markup>@return private key to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD.1"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.361"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3v0eEP.1"  title="原文: TLS"><code>TLS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HtfuJ.1" title="原文 : Configure the protocol used to obtain an instance of javax.net.ssl.SSLContext.">javax.net.ssl.SSLContextのインスタンスを取得するために使用するプロトコルを構成します。</span></p>

<markup>@return protocol to use, defaults to `DEFAULT_PROTOCOL`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lQacV.5"  title="原文: protocols"><code>protocols</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.44"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wSXwP.1.spl1" title="原文 : Enabled protocols for TLS communication.">TLS通信用のプロトコルを有効にします。</span> <span class="merged" id="all.1wSXwP.1.spl2" title="原文 : Example of valid values for TLS protocol: TLSv1.3, TLSv1.2"><code>TLS</code>プロトコルの有効な値の例: <code>TLSv1.3</code>, <code>TLSv1.2</code></span> </p>

<markup>@return protocols to enable, by default (or if list is empty), all available protocols are enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MYSa1.1"  title="原文: provider"><code>provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.362"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WJOoR.1" title="原文 : Use explicit provider to obtain an instance of javax.net.ssl.SSLContext.">明示的なプロバイダを使用して、javax.net.ssl.SSLContextのインスタンスを取得します。</span></p>

<markup>@return provider to use, defaults to none (only #protocol() is used by default)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UYtoI.1"  title="原文: secure-random-algorithm"><code>secure-random-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.363"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4I7olt.1" title="原文 : Algorithm to use when creating a new secure random.">新しいセキュア・ランダムを作成するときに使用するアルゴリズム。</span></p>

<markup>@return algorithm to use, by default uses java.security.SecureRandom constructor</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42gsBU.1"  title="原文: secure-random-provider"><code>secure-random-provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.364"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.47I9Q4.1.spl1" title="原文 : Provider to use when creating a new secure random.">新規セキュア・ランダムの作成時に使用するプロバイダ。</span> <span class="merged" id="all.47I9Q4.1.spl2" title="原文 : When defined, #secureRandomAlgorithm() must be defined as well.">定義する場合は、#secureRandomAlgorithm()も定義する必要があります。</span> </p>

<markup>@return provider to use, by default no provider is specified</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xMi9h.1"  title="原文: session-cache-size"><code>session-cache-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.113"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.6"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GlWHE.1" title="原文 : SSL session cache size.">SSLセッション・キャッシュ・サイズ。</span></p>

<markup>@return session cache size, defaults to 1024</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Qzotx.1"  title="原文: session-timeout"><code>session-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.69"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4bxHMq.1"  title="原文: PT30M"><code>PT30M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cqCoT.1" title="原文 : SSL session timeout.">SSLセッションのタイムアウト。</span></p>

<markup>@return session timeout, defaults to 30 minutes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1m7hUC.1"  title="原文: trust"><code>trust</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3KX96i.1" title="原文 : X509Certificate[]">X509Certificate[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.9aaG.1" title="原文 : List of certificates that form the trust manager.">トラスト・マネージャを形成する証明書のリスト。</span></p>

<markup>@return certificates to be trusted</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3hBTUK.1"  title="原文: trust-all"><code>trust-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.279"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.107"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zzm52.1" title="原文 : Trust any certificate provided by the other side of communication.">通信の反対側から提供された証明書を信頼します。</span></p>

<markup>&lt;b&gt;This is a dangerous setting: &lt;/b&gt; if set to `true`, any certificate will be accepted, throwing away
most of the security advantages of TLS. &lt;b&gt;NEVER&lt;/b&gt; do this in production.</markup>
<markup>@return whether to trust all certificates, do not use in production</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Kg51b.1"  title="原文: trust-manager-factory-algorithm"><code>trust-manager-factory-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.365"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2lAUwg.1" title="原文 : Trust manager factory algorithm.">トラスト・マネージャのファクトリ・アルゴリズム。</span></p>

<markup>@return algorithm to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</div>


<h2 id="_http_content_encoding"><span class="merged" id="all.Jr4QQ" title="原文 : HTTP Content Encoding">HTTPコンテンツ・エンコーディング</span></h2>
<div class="section">
<p><span class="merged" id="all.4dHWZ2.spl1" title="原文 : HTTP encoding can improve bandwidth utilization and transfer speeds in certain scenarios.">HTTPエンコーディングは、特定のシナリオで帯域幅の使用率と転送速度を向上させることができます。</span> <span class="merged" id="all.4dHWZ2.spl2" title="原文 : It requires a few extra CPU cycles for compressing and uncompressing, but these can be offset if data is transferred over low-bandwidth network links.">圧縮および圧縮解除にはいくつかの追加のCPUサイクルが必要ですが、低帯域幅のネットワーク・リンクを介してデータが転送される場合は、これらをオフセットできます。</span> </p>

<p><span class="merged" id="all.1vdXZ4.spl1" title="原文 : A client advertises the compression encodings it supports at request time, and the WebServer responds by selecting an encoding it supports and setting it in a header, effectively negotiating the content encoding of the response.">クライアントは、リクエスト時にサポートする圧縮エンコーディングを通知し、WebServerは、サポートするエンコーディングを選択してヘッダーに設定することで応答し、効率的にレスポンスのコンテンツ・エンコーディングを<em>「ネゴシエーション」</em>します。</span> <span class="merged" id="all.1vdXZ4.spl2" title="原文 : If none of the advertised encodings is supported by the WebServer, the response is returned uncompressed.">通知されたエンコーディングのいずれもWebServerでサポートされていない場合、レスポンスは圧縮されずに返されます。</span> </p>


<h3 id="_configuring_http_encoding"><span class="merged" id="all.41AScf" title="原文 : Configuring HTTP Encoding">HTTPエンコーディングの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.bvrud" title="原文 : HTTP encoding support is discovered automatically by WebServer from the classpath, or it can be customized programmatically.">HTTPエンコーディングのサポートは、クラスパスからWebServerによって自動的に検出されるか、プログラムでカスタマイズできます。</span></p>

<p><span class="merged" id="all.1NAXv3" title="原文 : Encoding can be configured per socket.">エンコーディングはソケットごとに構成できます。</span></p>

<p><span class="merged" id="all.3U9hlk" title="原文 : Disabling discovery and registering a Gzip encoding support:">検出の無効化およびGzipエンコーディング・サポートの登録:</span></p>

<markup
lang="java"

>WebServer.builder()
         .contentEncoding(ContentEncodingContextConfig.builder()
            .contentEncodingsDiscoverServices(false)
            .addContentEncoding(GzipEncoding.create())
            .build());</markup>

<p><span class="merged" id="all.heHSy" title="原文 : Or use a config file using the following options:">または、次のオプションを使用して構成ファイルを使用します:</span></p>

<p><span class="merged" id="all.hLX0j.1" title="原文 : Type: io.helidon.http.encoding.ContentEncodingContext">タイプ: <a href="/apidocs/io.helidon.http.encoding/io/helidon/http/encoding/ContentEncodingContext.html" target="_blank">io.helidon.http.encoding.ContentEncodingContext</a></span></p>


<h4 id="_configuration_options_6"><span class="merged" id="all.3SKgM1.159"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.151" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.175"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.168"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.175"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.185"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1PHVov.1"  title="原文: content-encodings"><code>content-encodings</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.jEcKB.1" title="原文 : io.helidon.http.encoding.ContentEncoding[] (service provider interface)">io.helidon.http.encoding.ContentEncoding[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3piUHh.1.spl1" title="原文 : List of content encodings that should be used.">使用する必要があるコンテンツ・エンコーディングのリスト。</span> <span class="merged" id="all.3piUHh.1.spl2" title="原文 : Encodings configured here have priority over encodings discovered through service loader.">ここで構成されたエンコーディングは、サービス・ローダーによって検出されたエンコーディングよりも優先されます。</span> </p>

<markup>@return list of content encodings to be used (such as `gzip,deflate`)</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3eXDKR" title="原文 : The following providers are currently available (simply add the library on the classpath):">現在、次のプロバイダが使用可能です(クラスパスにライブラリを追加するだけです):</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 12.5%;">
<col style="width: 25%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4JHS4h" title="原文 : Encoding type">エンコーディング・タイプ</span></th>
<th><span class="merged" id="all.1Jrys9.1"  title="原文: TypeName">TypeName</span></th>
<th><span class="merged" id="all.4ciP4G.1" title="原文 : Maven groupId:artifactId">Maven groupId:artifactId</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.FwXuX"  title="原文:: gzip"><strong>gzip</strong></span></td>
<td class=""><span class="merged" id="all.CPSjg"  title="原文: GzipEncoding">GzipEncoding</span></td>
<td class=""><span class="merged" id="all.2I8sas"  title="原文: io.helidon.http.encoding:helidon-http-encoding-gzip"><code>io.helidon.http.encoding:helidon-http-encoding-gzip</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UXXS3"  title="原文:: deflate"><strong>deflate</strong></span></td>
<td class=""><span class="merged" id="all.44WOHw"  title="原文: DeflateSupport">DeflateSupport</span></td>
<td class=""><span class="merged" id="all.4Q29kR"  title="原文: io.helidon.http.encoding:helidon-http-encoding-deflate"><code>io.helidon.http.encoding:helidon-http-encoding-deflate</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h3 id="_http_compression_negotiation"><span class="merged" id="all.4c3bQ5" title="原文 : HTTP Compression Negotiation">HTTP圧縮ネゴシエーション</span></h3>
<div class="section">
<p><span class="merged" id="all.2nlgGL.spl1" title="原文 : HTTP compression negotiation is controlled by clients using the Accept-Encoding header.">HTTP圧縮ネゴシエーションは、<code>Accept-Encoding</code>ヘッダーを使用してクライアントによって制御されます。</span> <span class="merged" id="all.2nlgGL.spl2" title="原文 : The value of this header is a comma-separated list of encodings.">このヘッダーの値は、エンコーディングのカンマ区切りリストです。</span> <span class="merged" id="all.2nlgGL.spl3" title="原文 : The WebServer will select one of these encodings for compression purposes; it currently supports gzip and deflate.">WebServerは、圧縮のためにこれらのエンコーディングのいずれかを選択します。現在、<code>gzip</code>および<code>deflate</code>をサポートしています。</span> </p>

<p><span class="merged" id="all.4Bisrf" title="原文 : For example, if the request includes Accept-Encoding: gzip, deflate, and HTTP compression has been enabled as shown above, the response shall include the header Content-Encoding: gzip and a compressed payload.">たとえば、リクエストに<code>Accept-Encoding: gzip, deflate</code>が含まれ、前述のようにHTTP圧縮が有効になっている場合、レスポンスにはヘッダー<code>Content-Encoding: gzip</code>と圧縮ペイロードが含まれます。</span></p>

</div>

</div>


<h2 id="_proxy_protocol_support"><span class="merged" id="all.44xbGg" title="原文 : Proxy Protocol Support">プロキシ・プロトコルのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.2v6nPT.spl1" title="原文 : The Proxy Protocol provides a way to convey client information across reverse proxies or load balancers which would otherwise be lost given that new connections are established for each network hop."><a href="https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt" target="_blank">「プロキシ・プロトコル」</a>は、ネットワーク・ホップごとに新しい接続が確立されると失われるリバース・プロキシまたはロード・バランサ間でクライアント情報を伝達する方法を提供します。</span> <span class="merged" id="all.2v6nPT.spl2" title="原文 : Often times, this information can be carried in HTTP headers, but not all proxies support this feature.">多くの場合、この情報はHTTPヘッダーで伝送できますが、すべてのプロキシがこの機能をサポートしているわけではありません。</span> <span class="merged" id="all.2v6nPT.spl3" title="原文 : Helidon is capable of parsing a proxy protocol header (i.e., a network preamble) that is based on either V1 or V2 of the protocol, thus making client information available to service developers.">Helidonは、プロトコルのV1またはV2に基づくプロキシ・プロトコル・ヘッダー(ネットワーク・アンブル)を解析できるため、クライアント情報をサービス開発者が利用できるようになります。</span> </p>

<p><span class="merged" id="all.4VR0Fj.spl1" title="原文 : Proxy Protocol support is enabled via configuration, and can be done either declaratively or programmatically.">プロキシ・プロトコルのサポートは構成を介して有効化され、宣言的またはプログラム的に実行できます。</span> <span class="merged" id="all.4VR0Fj.spl2" title="原文 : Once enabled, every new connection on the corresponding port MUST be preambled by a proxy header for the connection not to be rejected as invalid --that is, proxy headers are never optional.">有効にすると、対応するポート上のすべての新しい接続はプロキシ・ヘッダーによってアンブルされなければならず、その接続は無効として拒否されない。つまり、プロキシ・ヘッダーは決してオプションではありません。</span> </p>

<p><span class="merged" id="all.NVbUP" title="原文 : Programmatically, support for the Proxy Protocol is enabled as follows:">プログラム的に、プロキシ・プロトコルのサポートは、次のように有効になります:</span></p>

<markup
lang="java"

>WebServer server = WebServer.builder()
    .enableProxyProtocol(true)
    .routing(...)
    .build()
    .start();</markup>

<p><span class="merged" id="all.2Xkat3" title="原文 : Declaratively, support for the Proxy Protocol is enabled as follows:">宣言的に、プロキシ・プロトコルのサポートは、次のように有効になります:</span></p>

<markup
lang="yaml"

>server:
  port: 8080
  host: 0.0.0.0
  enable-proxy-protocol: true</markup>


<h3 id="_accessing_proxy_protocol_data"><span class="merged" id="all.AmeoJ" title="原文 : Accessing Proxy Protocol Data">プロキシ・プロトコル・データへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.crNoG.spl1" title="原文 : There are two ways in which the header data can be accessed in your application.">アプリケーションでヘッダー・データにアクセスする方法は2つあります。</span> <span class="merged" id="all.crNoG.spl2" title="原文 : One way is by obtaining the protocol data directly from a request as shown next:">1つの方法は、次に示すように、リクエストから直接プロトコル・データを取得することです:</span> </p>

<markup
lang="java"

>routing.get("/", (req, res) -&gt; {
    ProxyProtocolData data = req.proxyProtocolData().orElse(null);
    if (data != null
            &amp;&amp; data.family() == ProxyProtocolData.Family.IPv4
            &amp;&amp; data.protocol() == ProxyProtocolData.Protocol.TCP
            &amp;&amp; data.sourceAddress().equals("192.168.0.1")
            &amp;&amp; data.destAddress().equals("192.168.0.11")
            &amp;&amp; data.sourcePort() == 56324
            &amp;&amp; data.destPort() == 443) {
        // ...
    }
});</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1pZjmZ" title="原文 : Every request associated with a certain connection shall have access to the Proxy Protocol data received when the connection was opened.">特定の接続に関連付けられたすべてのリクエストは、接続のオープン時に受信したプロキシ・プロトコル・データにアクセスできます。</span></p>
</div>

<p><span class="merged" id="all.5dBH9.spl1" title="原文 : Alternatively, the WebServer also makes the original client source address and source port available in the HTTP headers X-Forwarded-For and X-Forwarded-Port, respectively.">また、WebServerは、元のクライアント・ソース・アドレスとソース・ポートを、それぞれHTTPヘッダー<code>X-Forwarded-For</code>および<code>X-Forwarded-Port</code>で使用できるようにします。</span> <span class="merged" id="all.5dBH9.spl2" title="原文 : In some cases, it is just simpler to inspect these headers instead of getting the complete ProxyProtocolData instance as shown above.">場合によっては、前述のように、完全な<code>ProxyProtocolData</code>インスタンスを取得するのではなく、これらのヘッダーを検査する方が簡単です。</span> </p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.35"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.3F6RBt" title="原文 : Here is the code for a minimalist web application that runs on a random free port:">ランダムな空きポートで実行される最小のwebアプリケーションのコードを次に示します:</span></p>

<markup
lang="java"

>public static void main(String[] args) {
    WebServer webServer = WebServer.builder()
                .routing(routing -&gt; routing.any((req, res) -&gt; res.send("It works!"))) <span class="conum" data-value="1" />
                .build() <span class="conum" data-value="2" />
                .start(); <span class="conum" data-value="3" />

    System.out.println("Server started at: http://localhost:" + webServer.port()); <span class="conum" data-value="4" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3sUheI" title="原文 : For any kind of request, at any path, respond with It works!.">任意のタイプのリクエストについて、任意のパスで<code>It works!</code>を使用して応答します。</span></li>
<li data-value="2"><span class="merged" id="all.ubrtq" title="原文 : Build the server with the provided configuraiton">指定された構成でサーバーを構築</span></li>
<li data-value="3"><span class="merged" id="all.aLt47" title="原文 : Start the server (and wait for it to open the port).">サーバーを起動します(ポートが開くのを待ちます)。</span></li>
<li data-value="4"><span class="merged" id="all.3MUwZI" title="原文 : The server is bound to a random free port.">サーバーはランダムな空きポートにバインドされています。</span></li>
</ul>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.30"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.41SmCx" title="原文 : Helidon WebServer JavaDoc"><a href="/apidocs/io.helidon.webserver/module-summary.html" target="_blank">Helidon WebServer JavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.RhBcD" title="原文 : Helidon WebServer Static Content JavaDoc"><a href="/apidocs/io.helidon.webserver.staticcontent/module-summary.html" target="_blank">Helidon WebServer静的コンテンツJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3AVX53" title="原文 : Helidon JSON-B Support JavaDoc"><a href="/apidocs/io.helidon.http.media.jsonp/module-summary.html" target="_blank">Helidon JSON-BサポートJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1N2zbs" title="原文 : Helidon JSON-P Support JavaDoc"><a href="/apidocs/io.helidon.http.media.jsonb/module-summary.html" target="_blank">Helidon JSON-PのサポートJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.22amiX" title="原文 : Helidon Jackson Support JavaDoc"><a href="/apidocs/io.helidon.http.media.jackson/module-summary.html" target="_blank">Helidon JacksonサポートJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.HaiHy" title="原文 : Proxy Protocol Specification"><a href="https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt" target="_blank">プロキシ・プロトコル仕様</a></span></p>

</li>
</ul>

</div>

</doc-view>
