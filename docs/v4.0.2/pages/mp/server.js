<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_content"><span class="merged" id="all.uANyX"  title="原文:: Content">コンテンツ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.33" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C.1" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.22" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.12" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.23" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.20" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.14" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.49"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.5hwli" title="原文 : Helidon provides a MicroProfile server implementation (io.helidon.microprofile.server.Server) that encapsulates the Helidon WebServer.">Helidonは、Helidon WebServerをカプセル化するMicroProfileサーバー実装(<code>io.helidon.microprofile.server.Server</code>)を提供します。</span></p>

</div>


<h2 id="_maven_coordinates"><span class="merged" id="all.14HN3q" title="原文 : Maven-Coordinates">Maven-Coordinates</span></h2>
<div class="section">
<p><span class="merged" id="all.kLEzY" title="原文 : To enable MicroProfile Server add the helidon-microprofile-core bundle dependency to your project’s pom.xml (see Managing Dependencies).">MicroProfileサーバーを有効にするには、helidon-microprofile-coreバンドル依存関係をプロジェクトの<code>pom.xml</code>に追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-core&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1CvDs0" title="原文 : MicroProfile Server is already included in the bundle.">MicroProfileサーバーはすでにバンドルに含まれています。</span></p>

<p><span class="merged" id="all.pfCbN.spl1" title="原文 : If full control over the dependencies is required, and you want to minimize the quantity of the dependencies - Helidon MicroProfile Server should be used.">依存関係を完全に制御する必要がある場合は、依存関係の数を最小限に抑えます - <code>Helidon MicroProfile Server</code>を使用する必要があります。</span> <span class="merged" id="all.pfCbN.spl2" title="原文 : In this case the following dependencies should be included in your project’s pom.xml:">この場合、プロジェクトの<code>pom.xml</code>に次の依存関係を含める必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.server&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.27"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2Xe27b.spl1" title="原文 : Helidon Microprofile Server is used to collect and deploy JAX-RS application(s).">Helidon Microprofile Serverは、JAX-RSアプリケーションを収集およびデプロイするために使用されます。</span> <span class="merged" id="all.2Xe27b.spl2" title="原文 : When starting Helidon MP, it is recommended to use the io.helidon.Main main class, which will take care of starting Helidon.">Helidon MPを起動する場合は、<code>io.helidon.Main</code>メイン・クラスを使用することをお薦めします。これにより、Helidonが起動されます。</span> <span class="merged" id="all.2Xe27b.spl3" title="原文 : CDI will then discover all extensions, including the Server extension and start it.">CDIは、サーバー拡張を含むすべての拡張を検出して起動します。</span> </p>

<p><span class="merged" id="all.1r2XNf.spl1" title="原文 : See the Helidon MP Quickstart example."><router-link to="/mp/guides/quickstart">「Helidon MPクイックスタートの例」</router-link>を参照してください。</span> <span class="merged" id="all.1r2XNf.spl2" title="原文 : Note that the server lifecycle is bound to CDI.">サーバーのライフサイクルはCDIにバインドされています。</span> </p>

<p><span class="merged" id="all.4XcdTZ" title="原文 : Usage of the io.helidon.microprofile.server.Server API is discouraged, as Helidon MP uses convention to discover and configure features, which makes the applications easier to understand and maintain.">Helidon MPは機能の検出と構成に規則を使用するため、<code>io.helidon.microprofile.server.Server</code> APIの使用はお薦めしません。これにより、アプリケーションの理解とメンテナンスが容易になります。</span></p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.13"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.2ziW8f.spl1" title="原文 : The following table provides a brief description of routing annotations, including its parameters.">次の表に、ルーティング注釈とそのパラメータを含む簡単な説明を示します。</span> <span class="merged" id="all.2ziW8f.spl2" title="原文 : More information in Configuring a WebServer route section.">詳細は、<code>Configuring a WebServer route</code>セクションを参照してください。</span> </p>


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 37.5%;">
<col style="width: 62.5%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG.5"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.4JM9z7.29"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@RoutingName(
    value = ""
    required = false
)</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.479gbK" title="原文 : Binds a JAX-RS Application or Helidon Service to a specific (named) routing on WebServer.The routing should have a corresponding named socket configured on the WebServer to run the routing on.">JAX-RSアプリケーションまたはHelidonサービスを<code>WebServer</code>の特定の(名前付き)ルーティングにバインドします。ルーティングを実行するには、対応する名前付きソケットがWebServerで構成されている必要があります。</span></td>
</tr>
<tr>
<td class=""><doc-view>
<div class="listing">
<markup>@RoutingPath("/path")</markup>
</div>

</doc-view>
</td>
<td class=""><span class="merged" id="all.LBAkA" title="原文 : Path of a Helidon Service to register with routing.">ルーティングに登録するHelidonサービスのパス。</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.27"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2fBKMj" title="原文 : By default, the server uses the MicroProfile Config, but you may also want to use Helidon configuration.">デフォルトでは、サーバーはMicroProfile構成を使用しますが、<router-link to="/mp/config/introduction">「Helidon構成」</router-link>を使用することもできます。</span></p>

<p><span class="merged" id="all.2D7Pev" title="原文 : In this example, the configuration is in a file, and it includes Helidon configuration options.">この例では、構成はファイル内にあり、Helidon構成オプションが含まれています。</span></p>

<p><span class="merged" id="all.4ffvKp" title="原文 : Configuration reference:">構成リファレンス:</span></p>

<p><span class="merged" id="all.2BJq2n.1" title="原文 : Type: io.helidon.webserver.WebServer">タイプ: <a href="/apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" target="_blank">io.helidon.webserver.WebServer</a></span></p>

<p><span class="merged" id="all.4BMnxa.2" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.126"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.119" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.136"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.132"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.136"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.138"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf.2"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.78"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.4"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3nMQ0a.2" title="原文 : Accept backlog.">バックログの受入れ。</span></p>

<markup>@return backlog</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AjA6I.2"  title="原文: connection-config"><code>connection-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4VLGSj.2" title="原文 : ConnectionConfig"><router-link to="/config/io_helidon_webserver_ConnectionConfig">ConnectionConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1MqSXN.2" title="原文 : Configuration of a connection (established from client against our server).">接続の構成(クライアントからサーバーに対して確立)。</span></p>

<markup>@return connection configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2nITik.2"  title="原文: connection-options"><code>connection-options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3wae7e.4" title="原文 : SocketOptions"><router-link to="/config/io_helidon_common_socket_SocketOptions">SocketOptions</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kXy6u.2.spl1" title="原文 : Options for connections accepted by this listener.">このリスナーで受け入れられる接続のオプション。</span> <span class="merged" id="all.1kXy6u.2.spl2" title="原文 : This is not used to setup server connection.">サーバー接続の設定には使用されません。</span> </p>

<markup>@return socket options</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dzi1w.4"  title="原文: content-encoding"><code>content-encoding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4OZ5CZ.4" title="原文 : ContentEncodingContext"><router-link to="/config/io_helidon_http_encoding_ContentEncodingContext">ContentEncodingContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YVEkt.2.spl1" title="原文 : Configure the listener specific io.helidon.http.encoding.ContentEncodingContext.">リスナー固有のio.helidon.http.encoding.ContentEncodingContextを構成します。</span> <span class="merged" id="all.4YVEkt.2.spl2" title="原文 : This method discards all previously registered ContentEncodingContext.">このメソッドは、以前に登録されたすべてのContentEncodingContextを破棄します。</span> <span class="merged" id="all.4YVEkt.2.spl3" title="原文 : If no content encoding context is registered, content encoding context of the webserver would be used.">コンテンツ・エンコーディング・コンテキストが登録されていない場合は、webサーバーのコンテンツ・エンコーディング・コンテキストが使用されます。</span> </p>

<markup>@return content encoding context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.45mnKE.1"  title="原文: features"><code>features</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Q9eND.1" title="原文 : io.helidon.webserver.spi.ServerFeature[] (service provider interface)">io.helidon.webserver.spi.ServerFeature[] (サービス・プロバイダ・インタフェース)</span></p>

<p><span class="merged" id="all.ETeZ4.3"  title="原文:: Such as:">これには次のようなものがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.39GTfy.1" title="原文 : observe (ObserveFeature)"><router-link to="/config/io_helidon_webserver_observe_ObserveFeature">observe (ObserveFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.ukyrv.1" title="原文 : context (ContextFeature)"><router-link to="/config/io_helidon_webserver_context_ContextFeature">context (ContextFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.31lkfX.1" title="原文 : cors (CorsFeature)"><router-link to="/config/io_helidon_webserver_cors_CorsFeature">cors (CorsFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1DmZnx.1" title="原文 : security (SecurityFeature)"><router-link to="/config/io_helidon_webserver_security_SecurityFeature">security (SecurityFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4GK5Qb.1" title="原文 : access-log (AccessLogFeature)"><router-link to="/config/io_helidon_webserver_accesslog_AccessLogFeature">access-log (AccessLogFeature)</router-link></span></p>

</li>
</ul>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2E0TLT.1" title="原文 : Server features allow customization of the server, listeners, or routings.">サーバー機能を使用すると、サーバー、リスナーまたはルーティングをカスタマイズできます。</span></p>

<markup>@return server features</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.4"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.298"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.37vqK9.2"  title="原文: 0.0.0.0"><code>0.0.0.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.L7juc.2.spl1" title="原文 : Host of the default socket.">デフォルト・ソケットのホスト。</span> <span class="merged" id="all.L7juc.2.spl2" title="原文 : Defaults to all host addresses (0.0.0.0).">デフォルトは、すべてのホスト・アドレス(<code>0.0.0.0</code>)です。</span> </p>

<markup>@return host address to listen on (for the default socket)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3cxtJM.2"  title="原文: idle-connection-period"><code>idle-connection-period</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.45"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3oUo0h.2"  title="原文: PT2M"><code>PT2M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QjCrs.2.spl1" title="原文 : How often should we check for #idleConnectionTimeout().">#idleConnectionTimeout()をチェックする頻度。</span> <span class="merged" id="all.3QjCrs.2.spl2" title="原文 : Defaults to PT2M (2 minutes).">デフォルトは<code>PT2M</code> (2分)です。</span> </p>

<markup>@return period of checking for idle connections</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.F19DI.2"  title="原文: idle-connection-timeout"><code>idle-connection-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.46"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3IZFLG.2"  title="原文: PT5M"><code>PT5M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S4DrB.2.spl1" title="原文 : How long should we wait before closing a connection that has no traffic on it.">トラフィックがない接続を閉じるまで待機する時間。</span> <span class="merged" id="all.S4DrB.2.spl2" title="原文 : Defaults to PT5M (5 minutes).">デフォルトは<code>PT5M</code> (5分)です。</span> <span class="merged" id="all.S4DrB.2.spl3" title="原文 : Note that the timestamp is refreshed max. once per second, so this setting would be useless if configured for shorter periods of time (also not a very good support for connection keep alive, if the connections are killed so soon anyway).">タイムスタンプは最大リフレッシュされます。1秒当たり1回であるため、この設定は、より短い期間(とにかく接続がすぐに強制終了された場合、接続キープ・アライブに対するサポートもあまり適切ではない)に構成されている場合、役に立たないことに注意してください。</span> </p>

<markup>@return timeout of idle connections</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17bCiz.2"  title="原文: max-concurrent-requests"><code>max-concurrent-requests</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.79"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.8"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AwEgl.2.spl1" title="原文 : Limits the number of requests that can be executed at the same time (the number of active virtual threads of requests).">同時に実行できるリクエストの数(リクエストのアクティブな仮想スレッドの数)を制限します。</span> <span class="merged" id="all.2AwEgl.2.spl2" title="原文 : Defaults to -1, meaning &quot;unlimited&quot; - what the system allows.">デフォルトは<code>-1</code>で、「無制限」を意味 - システムが許すもの。</span> <span class="merged" id="all.2AwEgl.2.spl3" title="原文 : Also make sure that this number is higher than the expected time it takes to handle a single request in your application, as otherwise you may stop in-progress requests.">また、進行中のリクエストを停止する場合もあるため、この数値がアプリケーション内の単一のリクエストの処理にかかる予想時間よりも大きいことを確認してください。</span> </p>

<markup>@return number of requests that can be processed on this listener, regardless of protocol</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xrYOF.4"  title="原文: max-in-memory-entity"><code>max-in-memory-entity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.80"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Oslkg.4"  title="原文: 131072"><code>131072</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Ut8RG.2.spl1" title="原文 : If the entity is expected to be smaller that this number of bytes, it would be buffered in memory to optimize performance when writing it.">エンティティがこのバイト数より小さいと予想される場合は、書込み時のパフォーマンスを最適化するためにメモリーにバッファされます。</span> <span class="merged" id="all.4Ut8RG.2.spl2" title="原文 : If bigger, streaming will be used.">大きい場合はストリーミングが使用されます。</span> </p>

<markup>Note that for some entity types we cannot use streaming, as they are already fully in memory (String, byte[]), for such
cases, this option is ignored.</markup>
<markup>Default is 128Kb.</markup>
<markup>@return maximal number of bytes to buffer in memory for supported writers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT.2"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.33"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.9"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2NrKcV.2.spl1" title="原文 : Maximal number of bytes an entity may have.">エンティティに保持できる最大バイト数。</span> <span class="merged" id="all.2NrKcV.2.spl2" title="原文 : If io.helidon.http.HeaderNames#CONTENT_LENGTH is used, this is checked immediately, if io.helidon.http.HeaderValues#TRANSFER_ENCODING_CHUNKED is used, we will fail when the number of bytes read would exceed the max payload size.">io.helidon.http.HeaderNames#CONTENT_LENGTHが使用されている場合、これはただちにチェックされます。io.helidon.http.HeaderValues#TRANSFER_ENCODING_CHUNKEDが使用されている場合、読取りバイト数が最大ペイロード・サイズを超えると失敗します。</span> <span class="merged" id="all.2NrKcV.2.spl3" title="原文 : Defaults to unlimited (-1).">デフォルトは無制限( <code>-1</code>)です。</span> </p>

<markup>@return maximal number of bytes of entity</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WTA3q.2"  title="原文: max-tcp-connections"><code>max-tcp-connections</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.81"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.10"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ivt1t.2.spl1" title="原文 : Limits the number of connections that can be opened at a single point in time.">1つの時点でオープンできる接続の数を制限します。</span> <span class="merged" id="all.1ivt1t.2.spl2" title="原文 : Defaults to -1, meaning &quot;unlimited&quot; - what the system allows.">デフォルトは<code>-1</code>で、「無制限」を意味 - システムが許すもの。</span> </p>

<markup>@return number of TCP connections that can be opened to this listener, regardless of protocol</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2eL0SG.4"  title="原文: media-context"><code>media-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3UN167.5" title="原文 : MediaContext"><router-link to="/config/io_helidon_http_media_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2kRzka.2.spl1" title="原文 : Configure the listener specific io.helidon.http.media.MediaContext.">リスナー固有のio.helidon.http.media.MediaContextを構成します。</span> <span class="merged" id="all.2kRzka.2.spl2" title="原文 : This method discards all previously registered MediaContext.">このメソッドは、以前に登録されたすべてのMediaContextを破棄します。</span> <span class="merged" id="all.2kRzka.2.spl3" title="原文 : If no media context is registered, media context of the webserver would be used.">メディア・コンテキストが登録されていない場合は、webサーバーのメディア・コンテキストが使用されます。</span> </p>

<markup>@return media context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.12"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.299"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp.9"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ehLh0.2.spl1" title="原文 : Name of this socket.">このソケットの名前。</span> <span class="merged" id="all.3ehLh0.2.spl2" title="原文 : Defaults to @default.">デフォルトは<code>@default</code>です。</span> <span class="merged" id="all.3ehLh0.2.spl3" title="原文 : Must be defined if more than one socket is needed.">複数のソケットが必要な場合は定義する必要があります。</span> </p>

<markup>@return name of the socket</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.4"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.82"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.8"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3z4VwF.2.spl1" title="原文 : Port of the default socket.">デフォルト・ソケットのポート。</span> <span class="merged" id="all.3z4VwF.2.spl2" title="原文 : If configured to 0 (the default), server starts on a random port."><code>0</code> (デフォルト)に構成されている場合、サーバーはランダムなポートで起動します。</span> </p>

<markup>@return port to listen on (for the default socket)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lQacV.3"  title="原文: protocols"><code>protocols</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.O1GlW.2" title="原文 : io.helidon.webserver.spi.ProtocolConfig[] (service provider interface)">io.helidon.webserver.spi.ProtocolConfig[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1h03HZ.2.spl1" title="原文 : Configuration of protocols.">プロトコルの構成。</span> <span class="merged" id="all.1h03HZ.2.spl2" title="原文 : This may be either protocol selectors, or protocol upgraders from HTTP/1.1.">これは、プロトコル・セレクタか、HTTP/1.1からのプロトコル・アップグレードのいずれかです。</span> <span class="merged" id="all.1h03HZ.2.spl3" title="原文 : As the order is not important (providers are ordered by weight by default), we can use a configuration as an object, such as: &lt;pre&gt; protocols: providers: http_1_1: max-prologue-length: 8192 http_2: max-frame-size: 4096 websocket: …​. &lt;/pre&gt;">順序は重要ではないため(プロバイダはデフォルトで重み順に並べられます)、次のような構成をオブジェクトとして使用できます: &lt;pre>プロトコル: プロバイダ: http_1_1: max-prologue-length: 8192 http_2: max-frame-size: 4096ソケット: …​. &lt;/pre></span> </p>

<markup>@return all defined protocol configurations, loaded from service loader by default</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm.3"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.83"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1VYRoC.2" title="原文 : Listener receive buffer size.">リスナー受信バッファ・サイズ。</span></p>

<markup>@return buffer size in bytes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25oMqW.2"  title="原文: shutdown-grace-period"><code>shutdown-grace-period</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.47"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.AjhSo.3"  title="原文: PT0.5S"><code>PT0.5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.yXQtR.2.spl1" title="原文 : Grace period in ISO 8601 duration format to allow running tasks to complete before listener’s shutdown.">ISO 8601期間形式の猶予期間。リスナーの停止前に実行中のタスクを完了できます。</span> <span class="merged" id="all.yXQtR.2.spl2" title="原文 : Default is 500 milliseconds.">デフォルトは<code>500</code>ミリ秒です。</span> <span class="merged" id="all.yXQtR.2.spl3" title="原文 : Configuration file values example: PT0.5S, PT2S.">構成ファイルの値の例: <code>PT0.5S</code>, <code>PT2S</code>.</span> </p>

<markup>@return grace period</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3O8SGv.1"  title="原文: shutdown-hook"><code>shutdown-hook</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.214"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.109"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4dVg2u.1" title="原文 : When true the webserver registers a shutdown hook with the JVM Runtime.">trueの場合、webサーバーはJVMランタイムに停止フックを登録します。</span></p>

<markup>Defaults to true. Set this to false such that a shutdown hook is not registered.</markup>
<markup>@return whether to register a shutdown hook</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.10"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3HMyMI.1" title="原文 : Map&lt;string, ListenerConfig&gt;"><router-link to="/config/io_helidon_webserver_ListenerConfig">Map&lt;string, ListenerConfig></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f5XDN.1.spl1" title="原文 : Socket configurations.">ソケット構成。</span> <span class="merged" id="all.3f5XDN.1.spl2" title="原文 : Note that socket named WebServer#DEFAULT_SOCKET_NAME cannot be used, configure the values on the server directly."><code>WebServer#DEFAULT_SOCKET_NAME</code>という名前のソケットは使用できないことに注意してください。サーバー上で値を直接構成してください。</span> </p>

<markup>@return map of listener configurations, except for the default one</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.5"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2x5x4s.5" title="原文 : Tls"><router-link to="/config/io_helidon_common_tls_Tls">Tls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yGSZS.2" title="原文 : Listener TLS configuration.">リスナーTLS構成。</span></p>

<markup>@return tls of this configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3mhMxT.2"  title="原文: write-buffer-size"><code>write-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.84"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.4"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3BEMIm.2.spl1" title="原文 : Initial buffer size in bytes of java.io.BufferedOutputStream created internally to write data to a socket connection.">ソケット接続にデータを書き込むために内部的に作成されたjava.io.BufferedOutputStreamの初期バッファ・サイズ(バイト単位)。</span> <span class="merged" id="all.3BEMIm.2.spl2"  title="原文:: Default is 512.">デフォルトは<code>512</code>です。</span> </p>

<markup>@return initial buffer size used for writing</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32vcwz.2"  title="原文: write-queue-length"><code>write-queue-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.85"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.9"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.mPAOi.2" title="原文 : Number of buffers queued for write operations.">書込み操作のためにキューに入れられたバッファの数。</span></p>

<markup>@return maximal number of queued writes, defaults to 0</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.22"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_access_log"><span class="merged" id="all.38NrJK"  title="原文:: Access Log">アクセス・ログ</span></h3>
<div class="section">
<p><span class="merged" id="all.3ooX6J" title="原文 : Access logging in Helidon is done by a dedicated module that can be added to Maven and configured.">Helidonのアクセス・ロギングは、Mavenに追加および構成できる専用モジュールによって行われます。</span></p>

<p><span class="merged" id="all.Y2Khl" title="原文 : To enable Access logging add the following dependency to project’s pom.xml:">アクセス・ロギングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-access-log&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_configuring_access_log_in_a_configuration_file"><span class="merged" id="all.4ge6uu" title="原文 : Configuring Access Log in a configuration file">構成ファイルでのアクセス・ログの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1FOoX1" title="原文 : Access log can be configured as follows:">アクセス・ログは次のように構成できます:</span></p>

<markup
lang="properties"
title="Access Log configuration file"
>server.port=8080
server.host=0.0.0.0
server.features.access-log.format=helidon</markup>

</div>

</div>


<h2 id="_accesslogfeature_webserver_accesslog_configuration"><span class="merged" id="all.I9TFx.2" title="原文 : AccessLogFeature (webserver.accesslog) Configuration">AccessLogFeature (webserver.accesslog)構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2p0e71.2" title="原文 : Type: io.helidon.webserver.accesslog.AccessLogFeature">タイプ: <a href="/apidocs/io.helidon.webserver.accesslog/io/helidon/webserver/accesslog/AccessLogFeature.html" target="_blank">io.helidon.webserver.accesslog.AccessLogFeature</a></span></p>

<markup
lang="text"
title="Config key"
>access-log</markup>

<p><span class="merged" id="all.31kiUh.39" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1upsag.7"  title="原文: io.helidon.webserver.spi.ServerFeatureProvider"><code>io.helidon.webserver.spi.ServerFeatureProvider</code></span></p>

</li>
</ul>


<h3 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.127"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.120" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.137"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.133"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.137"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.139"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.24"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.215"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.110"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HO27M.2" title="原文 : Whether this feature will be enabled.">この機能を有効にするかどうか。</span></p>

<markup>@return whether enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4L3INC.3"  title="原文: format"><code>format</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.300"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.20pzcR.2.spl1" title="原文 : The format for log entries (similar to the Apache LogFormat). &lt;table class=&quot;config&quot;&gt; &lt;caption&gt;Log format elements&lt;/caption&gt; &lt;tr&gt; &lt;td&gt;%h&lt;/td&gt; &lt;td&gt;IP address of the remote host&lt;/td&gt; &lt;td&gt;HostLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%l&lt;/td&gt; &lt;td&gt;The client identity.">ログ・エントリの形式(Apache <code>LogFormat</code>と同様)。&lt;table class="config"> &lt;caption>Logは、リモートのhost&lt;/td> &lt;td>HostLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%l&lt;/td> &lt;td>クライアント・アイデンティティの要素&lt;/caption> &lt;tr> &lt;td>%h&lt;/td> &lt;td>IPアドレスをフォーマットします。</span> <span class="merged" id="all.20pzcR.2.spl2" title="原文 : This is always undefined in Helidon.&lt;/td&gt; &lt;td&gt;UserIdLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%u&lt;/td&gt; &lt;td&gt;User ID as asserted by Helidon Security.&lt;/td&gt; &lt;td&gt;UserLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%t&lt;/td&gt; &lt;td&gt;The timestamp&lt;/td&gt; &lt;td&gt;TimestampLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%r&lt;/td&gt; &lt;td&gt;The request line (&quot;GET /favicon.ico HTTP/1.0&quot;)&lt;/td&gt; &lt;td&gt;RequestLineLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%s&lt;/td&gt; &lt;td&gt;The status code returned to the client&lt;/td&gt; &lt;td&gt;StatusLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%b&lt;/td&gt; &lt;td&gt;The entity size in bytes&lt;/td&gt; &lt;td&gt;SizeLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%D&lt;/td&gt; &lt;td&gt;The time taken in microseconds (start of request until last byte written)&lt;/td&gt; &lt;td&gt;TimeTakenLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%T&lt;/td&gt; &lt;td&gt;The time taken in seconds (start of request until last byte written), integer&lt;/td&gt; &lt;td&gt;TimeTakenLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%{header-name}i&lt;/td&gt; &lt;td&gt;Value of header header-name&lt;/td&gt; &lt;td&gt;HeaderLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;">これはHelidonで常に未定義です。&lt;/td> &lt;td>UserIdLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%u&lt;/td> &lt;td>HeidonセキュリティによりユーザーIDとしてアサート。&lt;/td> &lt;td>UserLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%t&lt;/td> &lt;td>The timestamp&lt;/td> &lt;td>TimestampLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%r&lt;/td> &lt;td>要求行 (<code>"GET /favicon.ico HTTP/1.0"</code>)&lt;/td> &lt;td>RequestLineLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%s&lt;/td> &lt;td>クライアントに戻されるステータス・コード。&lt;/td> &lt;td>StatusLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%b&lt;/td> &lt;td>エンティティ・サイズ(バイト)&lt;/td> &lt;td>SizeLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%D&lt;/td> &lt;td>時間 (マイクロ秒) (最後のバイト書込みまで要求の開始)&lt;/td> &lt;td>TimeTakenLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%T&lt;/td> &lt;td>時間 (秒) (最後のバイト書込みまで要求の開始), integer&lt;/td> &lt;td>TimeTakenLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%{header-name}i&lt;/td> &lt;td>ヘッダーの値 <code>header-name</code>&lt;/td> &lt;td>HeaderLogEntry&lt;/td> &lt;/tr> &lt;/table></span> </p>

<markup>@return format string, such as `%h %l %u %t %r %b %{Referer`i}</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z8Q9s.2"  title="原文: logger-name"><code>logger-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.301"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aJUwu.2"  title="原文: io.helidon.webserver.AccessLog"><code>io.helidon.webserver.AccessLog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1k8TO9.2.spl1" title="原文 : Name of the logger used to obtain access log logger from System#getLogger(String).">System#getLogger(String)からアクセス・ログ・ロガーを取得するために使用するロガーの名前。</span> <span class="merged" id="all.1k8TO9.2.spl2" title="原文 : Defaults to AccessLogFeature#DEFAULT_LOGGER_NAME.">デフォルトは<code>AccessLogFeature#DEFAULT_LOGGER_NAME</code>です。</span> </p>

<markup>@return name of the logger to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.11"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.39"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.11F0ik.2.spl1" title="原文 : List of sockets to register this feature on.">この機能を登録するソケットのリスト。</span> <span class="merged" id="all.11F0ik.2.spl2" title="原文 : If empty, it would get registered on all sockets.">空の場合は、すべてのソケットに登録されます。</span> <span class="merged" id="all.11F0ik.2.spl3" title="原文 : The logger used will have the expected logger with a suffix of the socket name.">使用するロガーには、ソケット名のサフィクスを持つ予期されるロガーが含まれます。</span> </p>

<markup>@return socket names to register on, defaults to empty (all available sockets)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.8"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.9"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3NqvMr.2"  title="原文: 1000.0"><code>1000.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.5laEM.2.spl1" title="原文 : Weight of the access log feature.">アクセス・ログ機能の重み。</span> <span class="merged" id="all.5laEM.2.spl2" title="原文 : We need to log access for anything happening on the server, so weight is high: io.helidon.webserver.accesslog.AccessLogFeature#WEIGHT.">サーバーで何が起こってもアクセスを記録する必要があるため、重みが高くなります: <code>io.helidon.webserver.accesslog.AccessLogFeature#WEIGHT</code>。</span> </p>

<markup>@return weight of the feature</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_configuring_tls"><span class="merged" id="all.3iyelh" title="原文 : Configuring TLS">TLSの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4JOn4V" title="原文 : Helidon MP also supports custom TLS configuration.">Helidon MPは、カスタムTLS構成もサポートしています。</span></p>

<p><span class="merged" id="all.R1Md0"  title="原文: You can set the following properties:">次のプロパティを設定できます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3ZfuzY" title="原文 : Server truststore">サーバー・トラストストア</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3RbyFt" title="原文 : Keystore with trusted certificates">信頼できる証明書を含むキーストア</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.35j6lq" title="原文 : Private key and certificate">秘密キーと証明書</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1fI1ci" title="原文 : Server certificate which will be used in TLS handshake">TLSハンドシェイクで使用されるサーバー証明書</span></p>

</li>
</ul>

</li>
</ul>

<markup
lang="properties"
title="META-INF/microprofile-config.properties - Server configuration"
>#Truststore setup
server.tls.trust.keystore.resource.resource-path=server.p12
server.tls.trust.keystore.passphrase=password
server.tls.trust.keystore.trust-store=true

#Keystore with private key and server certificate
server.tls.private-key.keystore.resource.resource-path=server.p12
server.tls.private-key.keystore.passphrase=password</markup>

<p><span class="merged" id="all.4QjB6G" title="原文 : Or the same configuration done in application.yaml file.">または、同じ構成がapplication.yamlファイルで実行されました。</span></p>

<markup
lang="yaml"
title="application.yaml - Server configuration"
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

</div>


<h3 id="conf-additional-ports"><span class="merged" id="all.3uDA6e" title="原文 : Configuring additional ports">追加ポートの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3tXYqy" title="原文 : Helidon MP can expose multiple ports, with the following limitations:">Helidon MPでは複数のポートを公開できますが、次の制限があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.28pb0y" title="原文 : The default port is the port that serves your application (JAX-RS applications and resources)">デフォルト・ポートは、アプリケーション(JAX-RSアプリケーションおよびリソース)を提供するポートです</span></p>

</li>
<li>
<p><span class="merged" id="all.1eVgIT" title="原文 : Other ports (in this example we configure one &quot;admin&quot; port) can be assigned endpoints that are exposed by Helidon components, currently supported by MP Health and MP Metrics">他のポート(この例では管理ポートを構成)には、MPヘルスおよびMPメトリクスで現在サポートされているHelidonコンポーネントによって公開されているエンドポイントを割り当てることができます</span></p>

</li>
</ul>

<p><span class="merged" id="all.2iTgva" title="原文 : For this example, we will use a YAML file:">この例では、<code>YAML</code>ファイルを使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.13L73C" title="原文 : The port 7011 is the default port and will serve your application">ポート<code>7011</code>はデフォルト・ポートであり、アプリケーションを提供</span></p>

</li>
<li>
<p><span class="merged" id="all.1YBSaN" title="原文 : The port 8011 is named &quot;admin&quot; (this is an arbitrary name)">ポート<code>8011</code>の名前はadminです(これは任意の名前です)</span></p>

</li>
<li>
<p><span class="merged" id="all.3UFTi1" title="原文 : MP Metrics are configured to use the &quot;admin&quot; port through the routing configuration (reference is by name)">MPメトリクスは、<code>routing</code>構成を介して管理ポートを使用するように構成されています(参照は名前で行われます)</span></p>

</li>
<li>
<p><span class="merged" id="all.1gl7fK" title="原文 : MP Health is configured the same way to reference the &quot;admin&quot; port">MPヘルスは、管理ポートを参照する場合と同じ方法で構成されます</span></p>

</li>
</ul>

<markup
lang="yaml"
title="application.yaml - Server configuration"
>server:
  port: 7011
  host: "some.host"
  sockets:
    admin:
      port: 8011
      bind-address: "some.host"

metrics:
  routing: "admin"

health:
  routing: "admin"</markup>

</div>


<h3 id="_configuring_a_webserver_route"><span class="merged" id="all.227iuo" title="原文 : Configuring A WebServer Route [[">WebServerルート[[の構成</span></h3>
<div class="section">
<p><span class="merged" id="all.169Scq" title="原文 : Helidon MP Server will pick up CDI beans that implement the io.helidon.webserver.HttpService interface and configure them with the underlying WebServer.">Helidon MPサーバーは、<code>io.helidon.webserver.HttpService</code>インタフェースを実装するCDI beanを取得し、基礎となるWebServerで構成します。</span></p>

<p><span class="merged" id="all.3lZ3Eg" title="原文 : This allows configuration of WebServer routes to run alongside a JAX-RS application.">これにより、WebServerルートの構成をJAX-RSアプリケーションとともに実行できます。</span></p>

<p><span class="merged" id="all.3agqZo" title="原文 : The bean is expected to be either ApplicationScoped or Dependent and will be requested only once during the boot of the Server.">Beanは<code>ApplicationScoped</code>または<code>Dependent</code>のいずれかである必要があり、<code>Server</code>の起動時に一度のみリクエストされます。</span></p>

<p><span class="merged" id="all.23KB4w.spl1" title="原文 : The bean will support injection of ApplicationScoped and Dependent scoped beans.">Beanは、<code>ApplicationScoped</code>および<code>Dependent</code>スコープのbeanのインジェクションをサポートします。</span> <span class="merged" id="all.23KB4w.spl2" title="原文 : You cannot inject RequestScoped beans."><code>RequestScoped</code> beanはインジェクトできません。</span> <span class="merged" id="all.23KB4w.spl3" title="原文 : Please use WebServer features to handle request related objects.">リクエスト関連オブジェクトを処理するには、WebServer機能を使用してください。</span> </p>


<h4 id="_customizing_the_http_service"><span class="merged" id="all.181MXf" title="原文 : Customizing the HTTP service">HTTPサービスのカスタマイズ</span></h4>
<div class="section">
<p><span class="merged" id="all.gxsb7" title="原文 : The service can be customized using annotations and/or configuration to be">サービスは、次のように注釈または構成(あるいはその両方)を使用してカスタマイズできます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2IKoEc" title="原文 : registered on a specific path">特定のパスに登録済</span></p>

</li>
<li>
<p><span class="merged" id="all.1osxWr" title="原文 : registered with a named routing">名前付きルーティングに登録済</span></p>

</li>
</ul>

</div>


<h4 id="_assigning_an_http_service_to_named_ports"><span class="merged" id="all.Ld7A4" title="原文 : Assigning an HTTP service to named ports">名前付きポートへのHTTPサービスの割当て</span></h4>
<div class="section">
<p><span class="merged" id="all.2rgRwz.spl1" title="原文 : Helidon has the concept of named routing.">Helidonには、名前付きルーティングの概念があります。</span> <span class="merged" id="all.2rgRwz.spl2" title="原文 : These correspond to the named ports configured with WebServer.">これらは、WebServerで構成された名前付きポートに対応します。</span> </p>

<p><span class="merged" id="all.3O7MaO" title="原文 : You can assign an HTTP service to a named routing (and as a result to a named port) using either an annotation or configuration (or both to override the value from annotation).">注釈または構成(あるいはその両方)を使用して、名前付きルーティング(および名前付きポートの結果)にHTTPサービスを割り当てて、注釈の値をオーバーライドできます。</span></p>


<h5 id="annotation-routing-name"><span class="merged" id="all.3Pn5Xy" title="原文 : Annotation @RoutingName">注釈<code>@RoutingName</code></span></h5>
<div class="section">
<p><span class="merged" id="all.2zy2k1" title="原文 : You can annotate a service bean with this annotation to assign it to a specific named routing, that is (most likely) going to be bound to a specific port.">サービスBeanにこの注釈を付けて、特定の名前付きルーティング(おそらく特定のポートにバインドされる)に割り当てることができます。</span></p>

<p><span class="merged" id="all.1TxjbJ" title="原文 : The annotation has two attributes: - value that defines the routing name - required to mark that the routing name MUST be configured in Helidon server">注釈には2つの属性があります: - <code>value</code>はルーティング名を定義します - <code>required</code>はルーティング名をHelidonサーバーで構成する必要があることを示します</span></p>

<markup
lang="java"
title="<code>@RoutingName</code> example"
>@ApplicationScoped
@RoutingName(value="admin", required="true")
@RoutingPath("/admin")
public class AdminService implements HttpService {
}</markup>

<p><span class="merged" id="all.3jexaQ" title="原文 : The example above will be bound to admin routing (and port) and will fail if such a port is not configured.">前述の例は、<code>admin</code>ルーティング(およびポート)にバインドされ、そのようなポートが構成されていない場合は失敗します。</span></p>

</div>


<h5 id="_configuration_override_of_routing_name"><span class="merged" id="all.1jqoi9" title="原文 : Configuration override of routing name">ルーティング名の構成オーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.evfxA.spl1" title="原文 : For each service bean you can define the routing name and its required flag by specifying a configuration option bean-class-name.routing-name.name and bean-class-name.routing-name.required.">サービスBeanごとに、構成オプション<code>bean-class-name.routing-name.name</code>および<code>bean-class-name.routing-name.required</code>を指定して、ルーティング名とその必須フラグを定義できます。</span> <span class="merged" id="all.evfxA.spl2" title="原文 : For service beans produced with producer method replace bean-class-name with class-name.producer-method-name.">プロデューサ・メソッドを使用して生成されたサービスBeanの場合は、<code>bean-class-name</code>を<code>class-name.producer-method-name</code>に置き換えます。</span> </p>

<p><span class="merged" id="all.2LQ61V" title="原文 : Example (YAML) configuration for a service bean io.helidon.examples.AdminService that changes the routing name to management and its required flag to false:">ルーティング名を<code>management</code>に変更し、その必須フラグを<code>false</code>に変更するサービスBean <code>io.helidon.examples.AdminService</code>の構成例(YAML):</span></p>

<markup
lang="yaml"

>io.helidon.examples.AdminService:
  routing-name:
    name: "management"
    required: false</markup>

</div>

</div>


<h4 id="_configuring_an_http_service_path"><span class="merged" id="all.x8dpn" title="原文 : Configuring an HTTP service path">HTTPサービス・パスの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.262xNw.spl1" title="原文 : Each service is registered on a path.">各サービスはパスに登録されます。</span> <span class="merged" id="all.262xNw.spl2" title="原文 : If none is configured, then the service would be configured on the root path.">構成されていない場合、サービスはルート・パスで構成されます。</span> </p>

<p><span class="merged" id="all.35hyq" title="原文 : You can configure service path using an annotation or configuration (or both to override value from annotation)">注釈または構成(あるいはその両方)を使用してサービス・パスを構成し、注釈の値をオーバーライドできます</span></p>


<h5 id="_annotation_routingpath"><span class="merged" id="all.43PmL2" title="原文 : Annotation @RoutingPath">注釈<code>@RoutingPath</code></span></h5>
<div class="section">
<p><span class="merged" id="all.fDAue" title="原文 : You can configure @RoutingPath to define the path a service is registered on."><code>@RoutingPath</code>を構成して、サービスが登録されるパスを定義できます。</span></p>

</div>


<h5 id="_configuration_override_of_routing_path"><span class="merged" id="all.D6Ugy" title="原文 : Configuration override of routing path">ルーティング・パスの構成オーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.2jox5n" title="原文 : For each HTTP service class you can define the routing path by specifying a configuration option class-name.routing-path.path.">HTTPサービス・クラスごとに、構成オプション<code>class-name.routing-path.path</code>を指定してルーティング・パスを定義できます。</span></p>

<p><span class="merged" id="all.I15il" title="原文 : Example (YAML) configuration for a class io.helidon.example.AdminService that changes the routing path to /management:">ルーティング・パスを<code>/management</code>に変更するクラス<code>io.helidon.example.AdminService</code>の例(YAML)構成:</span></p>

<markup
lang="yaml"

>io.helidon.examples.AdminService:
  routing-path:
    path: "/management"</markup>

</div>

</div>

</div>


<h3 id="_serving_static_content"><span class="merged" id="all.1hRQ5W" title="原文 : Serving Static Content">静的コンテンツの提供</span></h3>
<div class="section">
<markup
lang="properties"
title="META-INF/microprofile-config.properties - File system static content"
># Location of content on file system
server.static.path.location=/var/www/html
# default is index.html
server.static.path.welcome=resource.html
# static content path - default is "/"
# server.static.path.context=/static-file</markup>

<markup
lang="properties"
title="META-INF/microprofile-config.properties - Classpath static content"
># src/main/resources/WEB in your source tree
server.static.classpath.location=/WEB
# default is index.html
server.static.classpath.welcome=resource.html
# static content path - default is "/"
# server.static.classpath.context=/static-cp</markup>

</div>


<h3 id="_example_configuration_of_routing"><span class="merged" id="all.1ZlwW9" title="原文 : Example configuration of routing">ルーティングの構成例</span></h3>
<div class="section">
<p><span class="merged" id="all.Uu6pj" title="原文 : A full configuration example (YAML):">完全な構成例(YAML):</span></p>

<markup
lang="yaml"

>server:
  port: 8080
  sockets:
   management:
   port: 8090

io.helidon.examples.AdminApplication:
  routing-name:
    name: "management"
    required: true
  routing-path:
    path: "/management"</markup>

</div>


<h3 id="_using_requested_uri_discovery"><span class="merged" id="all.33cbQN" title="原文 : Using Requested URI Discovery">リクエストされたURI検出の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3tRSrN.spl1" title="原文 : Proxies and reverse proxies between an HTTP client and your Helidon application mask important information (for example Host header, originating IP address, protocol) about the request the client sent.">HTTPクライアントとHelidonアプリケーション間のプロキシとリバース・プロキシは、クライアントが送信したリクエストに関する重要な情報(<code>Host</code>ヘッダー、元のIPアドレス、プロトコルなど)をマスクします。</span> <span class="merged" id="all.3tRSrN.spl2" title="原文 : Fortunately, many of these intermediary network nodes set or update either the standard HTTP Forwarded header or the non-standard X-Forwarded-* family of headers to preserve information about the original client request.">幸いなことに、これらの仲介ネットワーク・ノードの多くは、元のクライアント・リクエストに関する情報を保持するために、<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded" target="_blank">「標準HTTP <code>Forwarded</code>ヘッダー」</a>または<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For" target="_blank">「非標準のヘッダーの<code>X-Forwarded-*</code>ファミリ」</a>を設定または更新します。</span> </p>

<p><span class="merged" id="all.1ZZ77Q" title="原文 : Helidon’s requested URI discovery feature allows your application-​and Helidon itself-​to reconstruct information about the original request using the Forwarded header and the X-Forwarded-* family of headers.">HelidonからリクエストされたURI検出機能を使用すると、アプリケーションおよびHelidon自体で、<code>Forwarded</code>ヘッダーおよび<code>X-Forwarded-*</code>ヘッダー・ファミリを使用して元のリクエストに関する情報を再構築できます。</span></p>

<p><span class="merged" id="all.124KK3" title="原文 : When you prepare the connections in your server you can include the following optional requested URI discovery settings:">サーバーで接続を準備するときに、次のリクエストされたURI検出設定を含めることができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3E5MrI"  title="原文:: enabled or disabled">有効化または無効化 </span></p>

</li>
<li>
<p><span class="merged" id="all.3sXLFm" title="原文 : which type or types of requested URI discovery to use:">使用するリクエストされたURI検出のタイプ:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.RIOfo" title="原文 : FORWARDED - uses the Forwarded header"><code>FORWARDED</code> - <code>Forwarded</code>ヘッダーを使用</span></p>

</li>
<li>
<p><span class="merged" id="all.24fdek" title="原文 : X_FORWARDED - uses the X-Forwarded-* headers"><code>X_FORWARDED</code> - <code>X-Forwarded-*</code>ヘッダーを使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2xYxud" title="原文 : HOST - uses the Host header"><code>HOST</code> - <code>Host</code>ヘッダーを使用</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.3u8dsh" title="原文 : what intermediate nodes to trust">信頼する中間ノード</span></p>

</li>
</ul>

<p><span class="merged" id="all.3NxRe0.spl1" title="原文 : When your application receives a request Helidon iterates through the discovery types you set up for the receiving connection, gathering information from the corresponding header(s) for that type.">アプリケーションがリクエストを受信すると、Helidonは、受信接続に対して設定した検出タイプを繰り返し、そのタイプの対応するヘッダーから情報を収集します。</span> <span class="merged" id="all.3NxRe0.spl2" title="原文 : If the request does not have the corresponding header(s), or your settings do not trust the intermediate nodes reflected in those headers, then Helidon tries the next discovery type you set up.">リクエストに対応するヘッダーがない場合、または設定がそれらのヘッダーに反映された中間ノードを信頼しない場合、Helidonは、設定した次の検出タイプを試みます。</span> <span class="merged" id="all.3NxRe0.spl3" title="原文 : Helidon uses the HOST discovery type if you do not set up discovery yourself or if, for a particular request, it cannot assemble the request information using any discovery type you did set up for the socket.">Helidonは、検出を自分で設定しない場合、または特定のリクエストに対して、ソケットに対して設定した検出タイプを使用してリクエスト情報をアセンブルできない場合、<code>HOST</code>検出タイプを使用します。</span> </p>


<h4 id="_setting_up_requested_uri_discovery"><span class="merged" id="all.12StCb" title="原文 : Setting Up Requested URI Discovery">リクエストされたURI検出の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.3KsA9Q" title="原文 : You can use configuration to set up the requested URI discovery behavior.">構成を使用して、リクエストされたURI検出動作を設定できます。</span></p>

<markup
lang="properties"
title="Configuring Request URI Discovery (properties format)"
>server.port=8080
server.requested-uri-discovery.types=FORWARDED,X_FORWARDED
server.requested-uri-discovery.trusted-proxies.allow.pattern=lb.*\\.mycorp\\.com
server.requested-uri-discovery.trusted-proxies.deny.exact=lbtest.mycorp.com</markup>

<p><span class="merged" id="all.2lnQg2" title="原文 : This example might apply if mycorp.com had trusted load balancers named lbxxx.mycorp.com except for an untrusted test load balancer lbtest.mycorp.com.">この例は、<code>mycorp.com</code>に、信頼できないテスト・ロード・バランサ<code>lbtest.mycorp.com</code>を除き、<code>lbxxx.mycorp.com</code>という名前の信頼できるロード・バランサがある場合に適用できます。</span></p>

</div>


<h4 id="_obtaining_the_requested_uri_information"><span class="merged" id="all.2r2Cp5" title="原文 : Obtaining the Requested URI Information">リクエストされたURI情報の取得</span></h4>
<div class="section">
<p><span class="merged" id="all.1EePyi" title="原文 : Helidon makes the requested URI information available as a property in the request context:">Helidonは、リクエストされたURI情報をリクエスト・コンテキストのプロパティとして使用できるようにします:</span></p>

<markup
lang="java"
title="Retrieving Requested URI Information"
>import io.helidon.common.uri.UriInfo;

public class MyFilter implements ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext requestContext) {
        UriInfo uriInfo = (UriInfo) requestContext.getProperty("io.helidon.jaxrs.requested-uri");
        // ...
    }
}</markup>

<p><span class="merged" id="all.JoJCg" title="原文 : See the UriInfo JavaDoc for more information.">詳細は、<a href="/apidocs/io.helidon.common.uri/io/helidon/common/uri/UriInfo.html" target="_blank"><code>UriInfo</code></a> JavaDocを参照してください。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3I4ezW" title="原文 : The requestContext.getUriInfo() method returns the Jakarta RESTful web services UriInfo object, not the Helidon-provided requested URI information UriInfo record."><code>requestContext.getUriInfo()</code>メソッドは、Helidon提供のリクエストされたURI情報<code>UriInfo</code>レコード<em>ではなく</em>、Jakarta RESTful webサービス<code>UriInfo</code>オブジェクトを返します。</span></p>
</div>

</div>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.14"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1JQVaN" title="原文 : Helidon MicroProfile Server Javadoc"><a href="https://helidon.io/docs/v2/apidocs/io.helidon.microprofile.server/module-summary.html" target="_blank">Helidon MicroProfileサーバーのJavadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.Eup1" title="原文 : Helidon MicroProfile Server on GitHub"><a href="https://github.com/oracle/helidon/tree/master/microprofile/server" target="_blank">GitHub上のHelidon MicroProfileサーバー</a></span></p>

</li>
</ul>

</div>

</doc-view>
