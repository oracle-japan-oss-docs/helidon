<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_content"><span class="merged" id="all.uANyX"  title="原文:: Content">コンテンツ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.28" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.21" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.12" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.20" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.21" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.13" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.44"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4AqtqF" title="原文 : Helidon provides a MicroProfile server implementation (io.helidon.microprofile.server) that encapsulates the Helidon WebServer.">Helidonは、Helidon WebServerをカプセル化するMicroProfileサーバー実装(<code>io.helidon.microprofile.server</code>)を提供します。</span></p>

</div>


<h2 id="_maven_coordinates"><span class="merged" id="all.14HN3q" title="原文 : Maven-Coordinates">Maven-Coordinates</span></h2>
<div class="section">
<p><span class="merged" id="all.kLEzY" title="原文 : To enable MicroProfile Server add the helidon-microprofile-core bundle dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfileサーバーを有効にするには、helidon-microprofile-coreバンドル依存関係をプロジェクトの<code>pom.xml</code>に追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-core&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1CvDs0" title="原文 : MicroProfile Server is already included in the bundle.">MicroProfileサーバーはすでにバンドルに含まれています。</span></p>

<p><span class="merged" id="all.pfCbN.spl1" title="原文 : If full control over the dependencies is required, and you want to minimize the quantity of the dependencies - Helidon MicroProfile Server should be used.">依存関係を完全に制御する必要がある場合は、依存関係の数を最小限に抑えます - <code>Helidon MicroProfile Server</code>を使用する必要があります。</span> <span class="merged" id="all.pfCbN.spl2" title="原文 : In this case the following dependencies should be included in your project&rsquo;s pom.xml:">この場合、プロジェクトの<code>pom.xml</code>に次の依存関係を含める必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.server&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.26"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.1mCTFX.spl1" title="原文 : Helidon Microprofile Server is used to collect and deploy JAX-RS application.">Helidon Microprofileサーバーは、JAX-RSアプリケーションを収集およびデプロイするために使用されます。</span> <span class="merged" id="all.1mCTFX.spl2" title="原文 : It is recommended to instantiate the server directly as is done in the Helidon MP Quickstart example."><router-link to="/mp/guides/quickstart">「Helidon MPクイックスタートの例」</router-link>のように、サーバーを直接インスタンス化することをお勧めします。</span> <span class="merged" id="all.1mCTFX.spl3" title="原文 : Note that the server lifecycle is bound to CDI.">サーバーのライフサイクルはCDIにバインドされています。</span> </p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.13"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.2Rxsnj.1" title="原文 : Configuration of Helidon Microprofile Server">Helidon Microprofileサーバーの構成</span></p>

<p><span class="merged" id="all.X0ZDA.1" title="原文 : Type: io.helidon.microprofile.server.Server">タイプ: <a href="./apidocs/io.helidon.microprofile.server/io/helidon/microprofile/server/Server.html" target="_blank">io.helidon.microprofile.server.Server</a></span></p>

<p><span class="merged" id="all.4BMnxa.2" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.276fEP.4"  title="原文:: Configuration Options">構成オプション</span></h3>
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
<th><span class="merged" id="all.2XKMH3.103"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.100"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.104"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.105"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.32jqso.1"  title="原文: executor-service"><code>executor-service</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1a6F7k.1"  title="原文: ExecutorService&gt;">ExecutorService></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2qT0Do.1" title="原文 : Set a supplier of an executor service to use for tasks connected with application processing (JAX-RS).">アプリケーション処理(JAX-RS)で接続されたタスクに使用するエグゼキュータ・サービスのサプライヤを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.11"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.276"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3FFE0q.1" title="原文 : Configure listen host.">リスニング・ホストを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.13"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.54"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.46oJHs.1" title="原文 : Configure listen port.">リスニング・ポートを構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2RVCok.spl1" title="原文 : The following table provides a brief description of routing annotations, including its parameters.">次の表に、ルーティング注釈とそのパラメータを含む簡単な説明を示します。</span> <span class="merged" id="all.2RVCok.spl2" title="原文 : More information in Configuring a reactive route section.">詳細は、<code>Configuring a reactive route</code>セクションを参照してください。</span> </p>


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
<th><span class="merged" id="all.4JM9z7.25"  title="原文:: Description">説明</span></th>
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

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.25"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2fBKMj" title="原文 : By default, the server uses the MicroProfile Config, but you may also want to use Helidon configuration.">デフォルトでは、サーバーはMicroProfile構成を使用しますが、<router-link to="/mp/config/introduction">「Helidon構成」</router-link>を使用することもできます。</span></p>

<p><span class="merged" id="all.2D7Pev" title="原文 : In this example, the configuration is in a file, and it includes Helidon configuration options.">この例では、構成はファイル内にあり、Helidon構成オプションが含まれています。</span></p>

<p><span class="merged" id="all.1hCUkb.1" title="原文 : Configuration of the HTTP server.">HTTPサーバーの構成。</span></p>

<p><span class="merged" id="all.5fjNt.1" title="原文 : Type: io.helidon.webserver.WebServer">タイプ: <a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" target="_blank">io.helidon.webserver.WebServer</a></span></p>

<p><span class="merged" id="all.4BMnxa.3" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>


<h3 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.84"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.85" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.104"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.101"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.105"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.106"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf.3"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.55"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.3"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ppdwn.3" title="原文 : Configures a maximum length of the queue of incoming connections on the server socket.">サーバー・ソケット上の受信接続のキューの最大長を構成します。</span></p>

<markup>Default value is #DEFAULT_BACKLOG_SIZE.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5GfIr.3" title="原文 : bind-address"><s><code>bind-address</code></s></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.277"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2a0Vgb.3.spl1" title="原文 : Deprecated Configures local address where the server listens on with the server socket."><strong>「非推奨」</strong>サーバーがサーバー・ソケットでリスニングするローカル・アドレスを構成します。</span> <span class="merged" id="all.2a0Vgb.3.spl2" title="原文 : If not configured, then listens an all local addresses.">構成されていない場合は、すべてのローカル・アドレスを一覧表示します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38IOv4.3"  title="原文: enable-compression"><code>enable-compression</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.151"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.66"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1OIhFY.3.spl1" title="原文 : Enable negotiation for gzip/deflate content encodings.">gzip/deflateコンテンツ・エンコーディングのネゴシエーションを有効にします。</span> <span class="merged" id="all.1OIhFY.3.spl2" title="原文 : Clients can request compression using the &quot;Accept-Encoding&quot; header.">クライアントは「Accept-Encoding」ヘッダーを使用して圧縮をリクエストできます。</span> </p>

<markup>Default is `false`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XagGR.1"  title="原文: features.print-details"><code>features.print-details</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.152"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.67"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HCC9z.1" title="原文 : Set to true to print detailed feature information on startup.">起動時に機能の詳細情報を出力するには、<code>true</code>に設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.12"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.278"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3cE2fa.3" title="原文 : A helper method that just calls #bindAddress(String).">#bindAddress(String)を呼び出すだけのヘルパー・メソッド。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jcPLP.3"  title="原文: max-header-size"><code>max-header-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.56"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.3"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RY8ot.3.spl1" title="原文 : Maximal number of bytes of all header values combined.">結合されるすべてのヘッダー値の最大バイト数。</span> <span class="merged" id="all.3RY8ot.3.spl2" title="原文 : When a bigger value is received, a io.helidon.common.http.Http.Status#BAD_REQUEST_400 is returned.">より大きい値が受信されると、io.helidon.common.http.Http.Status#BAD_REQUEST_400が返されます。</span> </p>

<markup>Default is `8192`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hkMJV.3"  title="原文: max-initial-line-length"><code>max-initial-line-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.57"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2q9RcG.3"  title="原文: 4096"><code>4096</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.iVXAw.3" title="原文 : Maximal number of characters in the initial HTTP line.">最初のHTTP行の最大文字数。</span></p>

<markup>Default is `4096`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT.3"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.37"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3y8vQC.3.spl1" title="原文 : Set a maximum payload size for a client request.">クライアント・リクエストの最大ペイロード・サイズを設定します。</span> <span class="merged" id="all.3y8vQC.3.spl2" title="原文 : Can prevent DoS attacks.">DoS攻撃を防ぐことができます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4W5u6n.3"  title="原文: max-upgrade-content-length"><code>max-upgrade-content-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.58"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1uOVpQ.3"  title="原文: 65536"><code>65536</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4H6CoA.3" title="原文 : Set a maximum length of the content of an upgrade request.">アップグレード・リクエストの内容の最大長を設定します。</span></p>

<markup>Default is `64*1024`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4CKSkW.1"  title="原文: backpressure-buffer-size"><code>backpressure-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.38"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1xioaP.1"  title="原文: 5242880"><code>5242880</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ol0yG.1.spl1" title="原文 : Set a maximum length of the unflushed response data sending buffer can keep without applying backpressure.">バック・プレスを適用せずに、フラッシュされていないレスポンス・データ送信バッファが保持できる最大長を設定します。</span> <span class="merged" id="all.3ol0yG.1.spl2" title="原文 : Depends on backpressure-policy what happens if max buffer size is reached.">最大バッファ・サイズに達した場合の処理は、<code>backpressure-policy</code>によって異なります。</span> </p>

<markup>Default is `5*1024*1024` - 5Mb</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z9rIk.1"  title="原文: backpressure-policy"><code>backpressure-policy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2nneiF.1"  title="原文:: String">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Ur2JU.1"  title="原文: LINEAR"><code>LINEAR</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.49aFgZ.1" title="原文 : Sets the strategy for applying backpressure to the reactive stream of response data.">レスポンス・データのリアクティブ・ストリームにバックプレッシャを適用するための戦略を設定します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1XlbLL.1" title="原文 : LINEAR - Data chunks are requested one-by-one after previous data chunk has been written to Netty&rsquo;s buffer, when backpressure-buffer-size watermark is reached, new chunks are not requested until buffer size decrease under the watermark value.">線形 - データ・チャンクは、以前のデータ・チャンクがNettyバッファに書き込まれた後に1回ずつリクエストされ、<code>backpressure-buffer-size</code>ウォーターマークに達すると、ウォーターマーク値でバッファ・サイズが減少するまで新しいチャンクはリクエストされません。</span></p>

</li>
<li>
<p><span class="merged" id="all.483227.1" title="原文 : PREFETCH - After first data chunk arrives, expected number of chunks needed to fill the buffer up to watermark is calculated and requested.">プリフェッチ - 最初のデータ・チャンクが到着すると、バッファをウォーターマークまで埋めるために必要なチャンクの数が計算され、リクエストされます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3bEg0x.1" title="原文 : AUTO_FLUSH - Data are requested one-by-one, in case buffer reaches watermark, no other data is requested and extra flush is initiated.">AUTO_FLUSH - データは1つずつリクエストされます。バッファがウォーターマークに達した場合、他のデータはリクエストされず、余分なフラッシュが開始されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3iu9Oz.1" title="原文 : UNBOUNDED - No backpressure is applied, Long.MAX_VALUE(unbounded) is requested from upstream.">バインドなし - バック・プレッシャは適用されず、Long.MAX_VALUE(unbounded)はアップストリームからリクエストされます。</span></p>
<markup>Default is `LINEAR`</markup>
</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.14"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.59"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.7"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Oucwf.3.spl1" title="原文 : Configures a server port to listen on with the server socket.">サーバー・ソケットでリスニングするようにサーバー・ポートを構成します。</span> <span class="merged" id="all.3Oucwf.3.spl2" title="原文 : If port is 0 then any available ephemeral port will be used.">ポートが<code>0</code>の場合、使用可能なエフェメラル・ポートが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm.3"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.60"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.ttbiK.3" title="原文 : Configures proposed value of the TCP receive window that is advertised to the remote peer on the server socket.">サーバー・ソケット上のリモート・ピアにアドバタイズされるTCP受信ウィンドウの提案値を構成します。</span></p>

<markup>If `0` then use implementation default.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.1"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1PxXg3.1" title="原文 : SocketConfiguration[]"><router-link to="/config/io_helidon_webserver_SocketConfiguration">SocketConfiguration[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.RAmBx.1.spl1" title="原文 : Adds an additional named server socket configuration.">追加の名前付きサーバー・ソケット構成を追加します。</span> <span class="merged" id="all.RAmBx.1.spl2" title="原文 : As a result, the server will listen on multiple ports.">その結果、サーバーは複数のポートで待機します。</span> </p>

<markup>An additional named server socket may have a dedicated Routing configured
through io.helidon.webserver.WebServer.Builder#addNamedRouting(String, Routing).</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kI2ET.5"  title="原文: timeout-millis"><code>timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.39"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.8"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1JHIrv.3" title="原文 : Socket timeout in milliseconds">ソケットのタイムアウト(ミリ秒)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.6"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3teVO3.3" title="原文 : WebServerTls"><router-link to="/config/io_helidon_webserver_WebServerTls">WebServerTls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3b3Qwr.3.spl1" title="原文 : Configures SSL for this socket.">このソケットのSSLを構成します。</span> <span class="merged" id="all.3b3Qwr.3.spl2" title="原文 : When configured, the server enforces SSL configuration.">構成されている場合、サーバーはSSL構成を適用します。</span> <span class="merged" id="all.3b3Qwr.3.spl3" title="原文 : If this method is called, any other method except for #tls(java.util.function.Supplier)¨ and repeated invocation of this method would be ignored.">このメソッドが呼び出されると、#tls(java.util.function.Supplier)以外のメソッドやこのメソッドを繰返し呼び出すことは無視されます。</span> </p>

<markup>If this method is called again, the previous configuration would be ignored.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fmzI9.1"  title="原文: worker-count"><code>worker-count</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.61"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XV1dm.3.spl1" title="原文 : Sets a count of threads in pool used to process HTTP requests.">HTTPリクエストの処理に使用されるプール内のスレッド数を設定します。</span> <span class="merged" id="all.2XV1dm.3.spl2" title="原文 : Default value is CPU_COUNT * 2.">デフォルト値は<code>CPU_COUNT * 2</code>です。</span> </p>

<markup>Configuration key: `workers`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.24"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_access_log"><span class="merged" id="all.38NrJK.1"  title="原文:: Access Log">アクセス・ログ</span></h3>
<div class="section">
<p><span class="merged" id="all.3ooX6J" title="原文 : Access logging in Helidon is done by a dedicated module that can be added to Maven and configured.">Helidonのアクセス・ロギングは、Mavenに追加および構成できる専用モジュールによって行われます。</span></p>

<p><span class="merged" id="all.Y2Khl" title="原文 : To enable Access logging add the following dependency to project&rsquo;s pom.xml:">アクセス・ロギングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します:</span></p>

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
server.access-log.format=helidon</markup>

<p><span class="merged" id="all.16o6HQ" title="原文 : All options shown above are also available programmatically when using builder.">前述のすべてのオプションは、ビルダーの使用時にプログラムで使用することもできます。</span></p>

</div>


<h3 id="_configuration_options_3"><span class="merged" id="all.276fEP.5"  title="原文:: Configuration Options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.vAruj" title="原文 : The following configuration options can be defined:">次の構成オプションを定義できます:</span></p>


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 18.182%;">
<col style="width: 18.182%;">
<col style="width: 18.182%;">
<col style="width: 45.455%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4HTTVU" title="原文 : Config key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.3"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.12txOr" title="原文 : Builder method">ビルダー・メソッド</span></th>
<th><span class="merged" id="all.4JM9z7.26"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.19"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.72"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.lSyxs"  title="原文: enabled(boolean)"><code>enabled(boolean)</code></span></td>
<td class=""><span class="merged" id="all.4FRJdM" title="原文 : When this option is set to false, access logging will be disabled">このオプションを<code>false</code>に設定すると、アクセス・ロギングが無効になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z8Q9s"  title="原文: logger-name"><code>logger-name</code></span></td>
<td class=""><span class="merged" id="all.2aJUwu"  title="原文: io.helidon.webserver.AccessLog"><code>io.helidon.webserver.AccessLog</code></span></td>
<td class=""><span class="merged" id="all.1NxN1"  title="原文: loggerName(String)"><code>loggerName(String)</code></span></td>
<td class=""><span class="merged" id="all.NvHXm" title="原文 : Name of the logger to use when writing log entries">ログ・エントリの書込み時に使用するログ出力の名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4L3INC.1"  title="原文: format"><code>format</code></span></td>
<td class=""><span class="merged" id="all.V69kn.6"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.B9r07" title="原文 : helidonLogFormat(), commonLogFormat(), add(AccessLogEntry entry)"><code>helidonLogFormat()</code>, <code>commonLogFormat()</code>, <code>add(AccessLogEntry entry)</code></span></td>
<td class=""><span class="merged" id="all.2OzsUH.spl1" title="原文 : Configuration of access log output, when helidon is defined, the Helidon log format (see below) is used.">アクセス・ログ出力の構成では、<code>helidon</code>が定義されている場合、Helidonログ形式(次を参照)が使用されます。</span> <span class="merged" id="all.2OzsUH.spl2" title="原文 : Can be configured to explicitly define log entries (see below as well)">ログ・エントリを明示的に定義するように構成できます(次も参照)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aPM0d"  title="原文: exclude-paths"><code>exclude-paths</code></span></td>
<td class=""><span class="merged" id="all.2kt7dz.2"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.1skXXq"  title="原文: excludePaths(List&lt;String&gt;)"><code>excludePaths(List&lt;String>)</code></span></td>
<td class=""><span class="merged" id="all.1pxeeJ.spl1" title="原文 : List of path patterns to exclude from access log.">アクセス・ログから除外するパス・パターンのリスト。</span> <span class="merged" id="all.1pxeeJ.spl2" title="原文 : Path pattern syntax is as defined in io.helidon.webserver.PathMatcher.">パス・パターンの構文は、<code>io.helidon.webserver.PathMatcher</code>で定義されています。</span> <span class="merged" id="all.1pxeeJ.spl3" title="原文 : Can be used to exclude paths such as /health or /metrics to avoid cluttering log."><code>/health</code>や<code>/metrics</code>などのパスを除外してログが複雑にならないようにするために使用できます。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_supported_log_formats"><span class="merged" id="all.FgztW" title="原文 : Supported Log Formats">サポートされているログ形式</span></h3>
<div class="section">

<h4 id="_supported_log_entries"><span class="merged" id="all.plA8l" title="原文 : Supported Log Entries">サポートされるログ・エントリ</span></h4>
<div class="section">
<p><span class="merged" id="all.ktLCj" title="原文 : The following log entries are supported in Helidon:">Helidonでは、次のログ・エントリがサポートされます:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1jELq" title="原文 : Config format">構成形式</span></th>
<th><span class="merged" id="all.2YyVUN" title="原文 : Class (to use with builder)">クラス(ビルダーで使用)</span></th>
<th><span class="merged" id="all.4JM9z7.27"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Hz0uw"  title="原文:: %h">%h</span></td>
<td class=""><span class="merged" id="all.4PqpSZ"  title="原文: HostLogEntry"><code>HostLogEntry</code></span></td>
<td class=""><span class="merged" id="all.3oNhU7" title="原文 : IP address of the remote host">リモート・ホストのIPアドレス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4LIdVD"  title="原文:: %l">%l</span></td>
<td class=""><span class="merged" id="all.2Ebcfk"  title="原文: UserIdLogEntry"><code>UserIdLogEntry</code></span></td>
<td class=""><span class="merged" id="all.1yXZvM" title="原文 : Client identity, always undefined in Helidon">クライアント・アイデンティティ(Helidonでは常に未定義)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2VrEQV" title="原文 : %u">%u</span></td>
<td class=""><span class="merged" id="all.5dT8L"  title="原文: UserLogEntry"><code>UserLogEntry</code></span></td>
<td class=""><span class="merged" id="all.DOgPR" title="原文 : The username of logged-in user (when Security is used)">ログイン・ユーザーのユーザー名(セキュリティが使用されている場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4egjK1"  title="原文:: %t">%t</span></td>
<td class=""><span class="merged" id="all.1ApKKm"  title="原文: TimestampLogEntry"><code>TimestampLogEntry</code></span></td>
<td class=""><span class="merged" id="all.4DP1tm"  title="原文:: The current timestamp">現在のタイムスタンプ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.QGOZE"  title="原文:: %r">%r</span></td>
<td class=""><span class="merged" id="all.3uMjWO"  title="原文: RequestLineLogEntry"><code>RequestLineLogEntry</code></span></td>
<td class=""><span class="merged" id="all.28v7jv" title="原文 : The request line (method, path and HTTP version)">リクエスト・ライン(メソッド、パスおよびHTTPバージョン)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1lAeti"  title="原文:: %s">%s</span></td>
<td class=""><span class="merged" id="all.17adkp"  title="原文: StatusLogEntry"><code>StatusLogEntry</code></span></td>
<td class=""><span class="merged" id="all.2CYaQE" title="原文 : The HTTP status returned to the client">クライアントに返されるHTTPステータス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.C1PUC"  title="原文:: %b">%b</span></td>
<td class=""><span class="merged" id="all.222Ct4"  title="原文: SizeLogEntry"><code>SizeLogEntry</code></span></td>
<td class=""><span class="merged" id="all.1ufMv6" title="原文 : The response entity size (if available)">レスポンス・エンティティ・サイズ(使用可能な場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xw7jF"  title="原文:: %D">%D</span></td>
<td class=""><span class="merged" id="all.30eTd6"  title="原文: TimeTakenLogEntry"><code>TimeTakenLogEntry</code></span></td>
<td class=""><span class="merged" id="all.1iH9WH" title="原文 : The time taken in microseconds">所要時間(マイクロ秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bs6VR"  title="原文:: %T">%T</span></td>
<td class=""><span class="merged" id="all.30eTd6.1"  title="原文: TimeTakenLogEntry"><code>TimeTakenLogEntry</code></span></td>
<td class=""><span class="merged" id="all.4DrhZg" title="原文 : The time taken in seconds">所要時間(秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.7tTHp" title="原文 : %{header-name}i">%{<code>header-name</code>}i</span></td>
<td class=""><span class="merged" id="all.14OQ05"  title="原文: HeaderLogEntry"><code>HeaderLogEntry</code></span></td>
<td class=""><span class="merged" id="all.24GCaX" title="原文 : Value of a header (can have multiple such specification to write multiple headers)">ヘッダーの値(複数のヘッダーを書き込むために複数の指定が可能)</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.39PCFU" title="原文 : Currently we only support the entries defined above, with NO support for free text.">現在、前述のように定義されたエントリのみがサポートされており、フリー・テキストはサポートされていません。</span></p>

</div>


<h4 id="_helidon_log_format"><span class="merged" id="all.1scEpr" title="原文 : Helidon Log Format">Helidonログ形式</span></h4>
<div class="section">
<p><span class="merged" id="all.4D2BYu" title="原文 : When format is set to helidon, the format used is:">formatが<code>helidon</code>に設定されている場合、使用される形式は次のとおりです:</span></p>

<p><span class="merged" id="all.4M5dYl"  title="原文: &quot;%h %u %t %r %s %b %D&quot;"><code>"%h %u %t %r %s %b %D"</code></span></p>

<p><span class="merged" id="all.NhCbQ" title="原文 : The entries logged:">記録されるエントリは次のとおりです:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1ZDJpH"  title="原文:: IP Address">IPアドレス</span>

</li>
<li>
<span class="merged" id="all.1wsZSM" title="原文 : Username of a logged-in user">ログイン・ユーザーのユーザー名</span>

</li>
<li>
<span class="merged" id="all.iSFtl"  title="原文:: Timestamp">タイムスタンプ</span>

</li>
<li>
<span class="merged" id="all.1zz0nk"  title="原文:: Request Line">要求明細</span>

</li>
<li>
<span class="merged" id="all.1Eo6op" title="原文 : HTTP Status code">HTTPステータス・コード</span>

</li>
<li>
<span class="merged" id="all.1D19yq" title="原文 : Entity size">エンティティ・サイズ</span>

</li>
<li>
<span class="merged" id="all.1Sc0NN" title="原文 : Time taken (microseconds)">所要時間(マイクロ秒)</span>

</li>
</ol>

<p><span class="merged" id="all.1W3EDd" title="原文 : Access log example:">アクセス・ログの例:</span></p>

<markup
lang="listing"

>192.168.0.104 - [18/Jun/2019:22:28:55 +0200] "GET /greet/test HTTP/1.1" 200 53
0:0:0:0:0:0:0:1 - [18/Jun/2019:22:29:00 +0200] "GET /metrics/vendor HTTP/1.1" 200 1658
0:0:0:0:0:0:0:1 jack [18/Jun/2019:22:29:07 +0200] "PUT /greet/greeting HTTP/1.1" 200 21
0:0:0:0:0:0:0:1 jill [18/Jun/2019:22:29:12 +0200] "PUT /greet/greeting HTTP/1.1" 403 0
0:0:0:0:0:0:0:1 - [18/Jun/2019:22:29:17 +0200] "PUT /greet/greeting HTTP/1.1" 401 0</markup>

</div>

</div>


<h3 id="_configuring_tls"><span class="merged" id="all.3iyelh.1" title="原文 : Configuring TLS">TLSの構成</span></h3>
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


<h3 id="_configuring_a_reactive_route"><span class="merged" id="all.rNP8T" title="原文 : Configuring A Reactive Route">リアクティブ・ルートの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.41WzgC" title="原文 : Helidon MP Server will pick up CDI beans that implement the io.helidon.webserver.Service interface and configure them with the underlying WebServer.">Helidon MPサーバーは、<code>io.helidon.webserver.Service</code>インタフェースを実装するCDI beanを取得し、基礎となるWebServerで構成します。</span></p>

<p><span class="merged" id="all.2vC9Db" title="原文 : This allows configuration of reactive routes to run alongside a JAX-RS application.">これにより、JAX-RSアプリケーションとともに実行するようにリアクティブ・ルートを構成できます。</span></p>

<p><span class="merged" id="all.3agqZo" title="原文 : The bean is expected to be either ApplicationScoped or Dependent and will be requested only once during the boot of the Server.">Beanは<code>ApplicationScoped</code>または<code>Dependent</code>のいずれかである必要があり、<code>Server</code>の起動時に一度のみリクエストされます。</span></p>

<p><span class="merged" id="all.23KB4w.spl1" title="原文 : The bean will support injection of ApplicationScoped and Dependent scoped beans.">Beanは、<code>ApplicationScoped</code>および<code>Dependent</code>スコープのbeanのインジェクションをサポートします。</span> <span class="merged" id="all.23KB4w.spl2" title="原文 : You cannot inject RequestScoped beans."><code>RequestScoped</code> beanはインジェクトできません。</span> <span class="merged" id="all.23KB4w.spl3" title="原文 : Please use WebServer features to handle request related objects.">リクエスト関連オブジェクトを処理するには、WebServer機能を使用してください。</span> </p>


<h4 id="_customizing_the_reactive_service"><span class="merged" id="all.3AcIGx" title="原文 : Customizing the reactive service">リアクティブ・サービスのカスタマイズ</span></h4>
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


<h4 id="_assigning_a_reactive_service_to_named_ports"><span class="merged" id="all.xaE2V" title="原文 : Assigning a reactive service to named ports">名前付きポートへのリアクティブ・サービスの割り当て</span></h4>
<div class="section">
<p><span class="merged" id="all.2rgRwz.spl1" title="原文 : Helidon has the concept of named routing.">Helidonには、名前付きルーティングの概念があります。</span> <span class="merged" id="all.2rgRwz.spl2" title="原文 : These correspond to the named ports configured with WebServer.">これらは、WebServerで構成された名前付きポートに対応します。</span> </p>

<p><span class="merged" id="all.2s4EDH" title="原文 : You can assign a reactive service to a named routing (and as a result to a named port) using either an annotation or configuration (or both to override the value from annotation).">注釈または構成(あるいはその両方)を使用して、名前付きルーティングにリアクティブ・サービスを割り当てることができます(その結果、注釈の値をオーバーライドします)。</span></p>


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
public class AdminService implements Service {
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


<h4 id="_configuring_a_reactive_service_path"><span class="merged" id="all.452eRd" title="原文 : Configuring a reactive service path">リアクティブ・サービス・パスの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.262xNw.spl1" title="原文 : Each service is registered on a path.">各サービスはパスに登録されます。</span> <span class="merged" id="all.262xNw.spl2" title="原文 : If none is configured, then the service would be configured on the root path.">構成されていない場合、サービスはルート・パスで構成されます。</span> </p>

<p><span class="merged" id="all.35hyq" title="原文 : You can configure service path using an annotation or configuration (or both to override value from annotation)">注釈または構成(あるいはその両方)を使用してサービス・パスを構成し、注釈の値をオーバーライドできます</span></p>


<h5 id="_annotation_routingpath"><span class="merged" id="all.43PmL2" title="原文 : Annotation @RoutingPath">注釈<code>@RoutingPath</code></span></h5>
<div class="section">
<p><span class="merged" id="all.fDAue" title="原文 : You can configure @RoutingPath to define the path a service is registered on."><code>@RoutingPath</code>を構成して、サービスが登録されるパスを定義できます。</span></p>

</div>


<h5 id="_configuration_override_of_routing_path"><span class="merged" id="all.D6Ugy" title="原文 : Configuration override of routing path">ルーティング・パスの構成オーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.428E8z" title="原文 : For each reactive service class you can define the routing path by specifying a configuration option class-name.routing-path.path.">リアクティブ・サービス・クラスごとに、構成オプション<code>class-name.routing-path.path</code>を指定してルーティング・パスを定義できます。</span></p>

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

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.13"  title="原文:: Reference">リファレンス</span></h2>
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
