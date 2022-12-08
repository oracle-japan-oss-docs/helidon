<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.67"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.64" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.49" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.45" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.37" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.25" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.26" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.88"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.28V0b1.spl1" title="原文 : WebServer provides an asynchronous and reactive API for creating web applications.">WebServerは、Webアプリケーションを作成するための非同期のリアクティブAPIを提供します。</span> <span class="merged" id="all.28V0b1.spl2" title="原文 : The API is inspired by popular NodeJS and Java frameworks.">APIは、一般的なNodeJSおよびJavaフレームワークによってインスピレーションされます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.61"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3QFzTT" title="原文 : To enable WebServer add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">WebServerを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.65"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.mYB1U" title="原文 : The following sections describe how to use WebServer.">次の項では、WebServerの使用方法について説明します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.43"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.Sz4RC" title="原文 : Configure the WebServer either programmatically, or by the Helidon configuration framework.">プログラムによって、またはHelidon構成フレームワークによって、WebServerを構成します。</span></p>


<h3 id="_configuring_the_webserver_in_your_code"><span class="merged" id="all.2pKdBU" title="原文 : Configuring the WebServer in Your Code">コードでのWebServerの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2Ishsa" title="原文 : The easiest way to configure the WebServer is in your application code.">WebServerを構成する最も簡単な方法は、アプリケーション・コードを使用することです。</span></p>

<markup
lang="java"

>WebServer webServer = WebServer.builder()
      .bindAddress(InetAddress.getLocalHost())
      .port(8080)
      .build();</markup>

</div>


<h3 id="_configuring_the_webserver_in_a_configuration_file"><span class="merged" id="all.3yeSxy" title="原文 : Configuring the WebServer in a configuration file">構成ファイルでのWebServerの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4bpKp9" title="原文 : You can also define the configuration in a file.">ファイルで構成を定義することもできます。</span></p>

<markup
lang="yaml"
title="WebServer configuration file <code>application.yaml</code>"
>server:
  port: 8080
  bind-address: "0.0.0.0"</markup>

<p><span class="merged" id="all.1Cq2QG.2" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

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


<h3 id="_configuration_options"><span class="merged" id="all.276fEP.7"  title="原文:: Configuration Options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.1hCUkb.2" title="原文 : Configuration of the HTTP server.">HTTPサーバーの構成。</span></p>

<p><span class="merged" id="all.5fjNt.2" title="原文 : Type: io.helidon.webserver.WebServer">タイプ: <a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" target="_blank">io.helidon.webserver.WebServer</a></span></p>

<p><span class="merged" id="all.4BMnxa.4" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>


<h4 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.106"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.107" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.130"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.125"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.132"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.140"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf.4"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.81"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.4"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ppdwn.4" title="原文 : Configures a maximum length of the queue of incoming connections on the server socket.">サーバー・ソケット上の受信接続のキューの最大長を構成します。</span></p>

<markup>Default value is #DEFAULT_BACKLOG_SIZE.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5GfIr.4" title="原文 : bind-address"><s><code>bind-address</code></s></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.354"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2a0Vgb.4.spl1" title="原文 : Deprecated Configures local address where the server listens on with the server socket."><strong>「非推奨」</strong>サーバーがサーバー・ソケットでリスニングするローカル・アドレスを構成します。</span> <span class="merged" id="all.2a0Vgb.4.spl2" title="原文 : If not configured, then listens an all local addresses.">構成されていない場合は、すべてのローカル・アドレスを一覧表示します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38IOv4.4"  title="原文: enable-compression"><code>enable-compression</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.211"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.89"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1OIhFY.4.spl1" title="原文 : Enable negotiation for gzip/deflate content encodings.">gzip/deflateコンテンツ・エンコーディングのネゴシエーションを有効にします。</span> <span class="merged" id="all.1OIhFY.4.spl2" title="原文 : Clients can request compression using the &quot;Accept-Encoding&quot; header.">クライアントは「Accept-Encoding」ヘッダーを使用して圧縮をリクエストできます。</span> </p>

<markup>Default is `false`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XagGR.2"  title="原文: features.print-details"><code>features.print-details</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.212"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.90"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HCC9z.2" title="原文 : Set to true to print detailed feature information on startup.">起動時に機能の詳細情報を出力するには、<code>true</code>に設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.19"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.355"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3cE2fa.4" title="原文 : A helper method that just calls #bindAddress(String).">#bindAddress(String)を呼び出すだけのヘルパー・メソッド。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jcPLP.4"  title="原文: max-header-size"><code>max-header-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.82"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.4"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RY8ot.4.spl1" title="原文 : Maximal number of bytes of all header values combined.">結合されるすべてのヘッダー値の最大バイト数。</span> <span class="merged" id="all.3RY8ot.4.spl2" title="原文 : When a bigger value is received, a io.helidon.common.http.Http.Status#BAD_REQUEST_400 is returned.">より大きい値が受信されると、io.helidon.common.http.Http.Status#BAD_REQUEST_400が返されます。</span> </p>

<markup>Default is `8192`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hkMJV.4"  title="原文: max-initial-line-length"><code>max-initial-line-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.83"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2q9RcG.4"  title="原文: 4096"><code>4096</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.iVXAw.4" title="原文 : Maximal number of characters in the initial HTTP line.">最初のHTTP行の最大文字数。</span></p>

<markup>Default is `4096`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT.4"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.45"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3y8vQC.4.spl1" title="原文 : Set a maximum payload size for a client request.">クライアント・リクエストの最大ペイロード・サイズを設定します。</span> <span class="merged" id="all.3y8vQC.4.spl2" title="原文 : Can prevent DoS attacks.">DoS攻撃を防ぐことができます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4W5u6n.4"  title="原文: max-upgrade-content-length"><code>max-upgrade-content-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.84"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1uOVpQ.4"  title="原文: 65536"><code>65536</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4H6CoA.4" title="原文 : Set a maximum length of the content of an upgrade request.">アップグレード・リクエストの内容の最大長を設定します。</span></p>

<markup>Default is `64*1024`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4CKSkW.2"  title="原文: backpressure-buffer-size"><code>backpressure-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.46"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1xioaP.2"  title="原文: 5242880"><code>5242880</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ol0yG.2.spl1" title="原文 : Set a maximum length of the unflushed response data sending buffer can keep without applying backpressure.">バック・プレスを適用せずに、フラッシュされていないレスポンス・データ送信バッファが保持できる最大長を設定します。</span> <span class="merged" id="all.3ol0yG.2.spl2" title="原文 : Depends on backpressure-policy what happens if max buffer size is reached.">最大バッファ・サイズに達した場合の処理は、<code>backpressure-policy</code>によって異なります。</span> </p>

<markup>Default is `5*1024*1024` - 5Mb</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z9rIk.2"  title="原文: backpressure-policy"><code>backpressure-policy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2nneiF.6"  title="原文:: String">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Ur2JU.2"  title="原文: LINEAR"><code>LINEAR</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.49aFgZ.2" title="原文 : Sets the strategy for applying backpressure to the reactive stream of response data.">レスポンス・データのリアクティブ・ストリームにバックプレッシャを適用するための戦略を設定します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1XlbLL.2" title="原文 : LINEAR - Data chunks are requested one-by-one after previous data chunk has been written to Netty&rsquo;s buffer, when backpressure-buffer-size watermark is reached, new chunks are not requested until buffer size decrease under the watermark value.">線形 - データ・チャンクは、以前のデータ・チャンクがNettyバッファに書き込まれた後に1回ずつリクエストされ、<code>backpressure-buffer-size</code>ウォーターマークに達すると、ウォーターマーク値でバッファ・サイズが減少するまで新しいチャンクはリクエストされません。</span></p>

</li>
<li>
<p><span class="merged" id="all.483227.2" title="原文 : PREFETCH - After first data chunk arrives, expected number of chunks needed to fill the buffer up to watermark is calculated and requested.">プリフェッチ - 最初のデータ・チャンクが到着すると、バッファをウォーターマークまで埋めるために必要なチャンクの数が計算され、リクエストされます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3bEg0x.2" title="原文 : AUTO_FLUSH - Data are requested one-by-one, in case buffer reaches watermark, no other data is requested and extra flush is initiated.">AUTO_FLUSH - データは1つずつリクエストされます。バッファがウォーターマークに達した場合、他のデータはリクエストされず、余分なフラッシュが開始されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3iu9Oz.2" title="原文 : UNBOUNDED - No backpressure is applied, Long.MAX_VALUE(unbounded) is requested from upstream.">バインドなし - バック・プレッシャは適用されず、Long.MAX_VALUE(unbounded)はアップストリームからリクエストされます。</span></p>
<markup>Default is `LINEAR`</markup>
</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.22"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.85"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.9"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Oucwf.4.spl1" title="原文 : Configures a server port to listen on with the server socket.">サーバー・ソケットでリスニングするようにサーバー・ポートを構成します。</span> <span class="merged" id="all.3Oucwf.4.spl2" title="原文 : If port is 0 then any available ephemeral port will be used.">ポートが<code>0</code>の場合、使用可能なエフェメラル・ポートが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm.4"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.86"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.ttbiK.4" title="原文 : Configures proposed value of the TCP receive window that is advertised to the remote peer on the server socket.">サーバー・ソケット上のリモート・ピアにアドバタイズされるTCP受信ウィンドウの提案値を構成します。</span></p>

<markup>If `0` then use implementation default.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.2"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1PxXg3.2" title="原文 : SocketConfiguration[]"><router-link to="/config/io_helidon_webserver_SocketConfiguration">SocketConfiguration[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.RAmBx.2.spl1" title="原文 : Adds an additional named server socket configuration.">追加の名前付きサーバー・ソケット構成を追加します。</span> <span class="merged" id="all.RAmBx.2.spl2" title="原文 : As a result, the server will listen on multiple ports.">その結果、サーバーは複数のポートで待機します。</span> </p>

<markup>An additional named server socket may have a dedicated Routing configured
through io.helidon.webserver.WebServer.Builder#addNamedRouting(String, Routing).</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kI2ET.6"  title="原文: timeout-millis"><code>timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.47"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.10"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1JHIrv.4" title="原文 : Socket timeout in milliseconds">ソケットのタイムアウト(ミリ秒)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.8"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3teVO3.4" title="原文 : WebServerTls"><router-link to="/config/io_helidon_webserver_WebServerTls">WebServerTls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3b3Qwr.4.spl1" title="原文 : Configures SSL for this socket.">このソケットのSSLを構成します。</span> <span class="merged" id="all.3b3Qwr.4.spl2" title="原文 : When configured, the server enforces SSL configuration.">構成されている場合、サーバーはSSL構成を適用します。</span> <span class="merged" id="all.3b3Qwr.4.spl3" title="原文 : If this method is called, any other method except for #tls(java.util.function.Supplier)¨ and repeated invocation of this method would be ignored.">このメソッドが呼び出されると、#tls(java.util.function.Supplier)以外のメソッドやこのメソッドを繰返し呼び出すことは無視されます。</span> </p>

<markup>If this method is called again, the previous configuration would be ignored.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fmzI9.2"  title="原文: worker-count"><code>worker-count</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.87"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XV1dm.5.spl1" title="原文 : Sets a count of threads in pool used to process HTTP requests.">HTTPリクエストの処理に使用されるプール内のスレッド数を設定します。</span> <span class="merged" id="all.2XV1dm.5.spl2" title="原文 : Default value is CPU_COUNT * 2.">デフォルト値は<code>CPU_COUNT * 2</code>です。</span> </p>

<markup>Configuration key: `workers`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</div>


<h2 id="routing"><span class="merged" id="all.1wf24k"  title="原文:: Routing">ルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.45ZZ2A.spl1" title="原文 : Routing lets you use request matching criteria to bind requests to a handler that implements your custom business logic.">ルーティングでは、リクエスト一致基準を使用して、カスタム・ビジネス・ロジックを実装する<code>handler</code>にリクエストをバインドできます。</span> <span class="merged" id="all.45ZZ2A.spl2" title="原文 : Matching criteria include one or more HTTP Method(s) and, optionally, a request path matcher.">一致基準には、1つ以上の<strong>「HTTPメソッド」</strong>と、オプションでリクエスト<strong>「パス・マッチャ」</strong>が含まれます。</span> <span class="merged" id="all.45ZZ2A.spl3" title="原文 : Use the RequestPredicate class to specify more routing criteria."><code>RequestPredicate</code>クラスを使用して、さらにルーティング基準を指定します。</span> </p>


<h3 id="_basics"><span class="merged" id="all.4MaJfC"  title="原文:: Basics">基本</span></h3>
<div class="section">
<p><span class="merged" id="all.1tTYGh" title="原文 : Routing also supports Error Routing which binds Java Throwable to the handling logic.">ルーティングでは、Java <code>Throwable</code>を処理ロジックにバインドする<em>「エラー・ルーティング」</em>もサポートされます。</span></p>

<p><span class="merged" id="all.2n3P0p" title="原文 : Configure HTTP request routing using Routing.Builder."><code>Routing.Builder</code>を使用してHTTPリクエストのルーティングを構成します。</span></p>

<markup
lang="java"
title="Using Routing.Builder to specify how HTTP requests are handled"
>Routing routing = Routing.builder()
                         .get("/hello", (req, res) -&gt; res.send("Hello World!")) <span class="conum" data-value="1" />
                         .build();

WebServer webServer = WebServer.create(routing); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tb8Va.spl1" title="原文 : Handle all GETs to /hello path."><code>/hello</code>パスへのすべてのGETを処理します。</span> <span class="merged" id="all.1tb8Va.spl2" title="原文 : Send the Hello World! string."><code>Hello World!</code>文字列を送信します。</span> </li>
<li data-value="2"><span class="merged" id="all.1yZnB7" title="原文 : Add the routing to the WebServer."><code>routing</code>をWebServerに追加します。</span></li>
</ul>

</div>


<h3 id="_http_method_routing"><span class="merged" id="all.2Kbf2I" title="原文 : HTTP Method Routing">HTTPメソッドのルーティング</span></h3>
<div class="section">
<p><span class="merged" id="all.2cnHVC.spl1" title="原文 : Routing.Builder lets you specify how to handle each HTTP method."><code>Routing.Builder</code>では、各HTTPメソッドの処理方法を指定できます。</span> <span class="merged" id="all.2cnHVC.spl2"  title="原文:: For example:">次に例を示します。</span> </p>


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
<th><span class="merged" id="all.31NidK" title="原文 : Routing.Builder example">Routing.Builderの例</span></th>
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
<td class=""><span class="merged" id="all.4Xe0jz"  title="原文: .anyOf(List.of(Http.Method.GET, Http.Method.POST), (req, res) -&gt; { /* handler */ })"><code>.anyOf(List.of(Http.Method.GET, Http.Method.POST), (req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZaLp3" title="原文 : custom method"><em>カスタム・メソッド</em></span></td>
<td class=""><span class="merged" id="all.1jSIs3"  title="原文: .anyOf(Set.of(Http.RequestMethod.create(&quot;CUSTOM&quot;)), (req, res) -&gt; { /* handler */ })"><code>.anyOf(Set.of(Http.RequestMethod.create("CUSTOM")), (req, res) -> { /* handler */ })</code></span></td>
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

>Routing.builder()
       .post("/some/path", (req, res) -&gt; { /* handler */ })</markup>

<p><span class="merged" id="all.2uUTyQ" title="原文 : You can use path pattern instead of path with the following syntax:">次の構文を使用して、<em>「パス」</em>のかわりに<strong>「パス・パターン」</strong>を使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3MZLn" title="原文 : /foo/bar/baz - Exact path match against resolved path even with non-usual characters"><code>/foo/bar/baz</code> - 通常以外の文字が含まれる場合でも、解決されたパスと完全に一致するパス</span></p>

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

</div>


<h3 id="anchor-requestpredicate"><span class="merged" id="all.3pH40u" title="原文 : Request Predicate">リクエスト述語</span></h3>
<div class="section">
<p><span class="merged" id="all.3V5exc.spl1" title="原文 : Use the RequestPredicate utility class to identify more criteria."><code>RequestPredicate</code>ユーティリティ・クラスを使用して、より多くの基準を識別します。</span> <span class="merged" id="all.3V5exc.spl2" title="原文 : You can construct (build) a predicate based on typical request criteria such as content type, or the existence of a header or cookie.">コンテンツ・タイプなどの一般的なリクエスト基準、またはヘッダーやCookieの存在に基づいて述語を構成(ビルド)できます。</span> <span class="merged" id="all.3V5exc.spl3" title="原文 : You can also construct a handler that only processes requests accepted by the predicate.">述語で受け入れられたリクエストのみを処理するハンドラを作成することもできます。</span> <span class="merged" id="all.3V5exc.spl4" title="原文 : All other requests are nexted, meaning that they are routed to the next valid handler.">その他のリクエストはすべて<em>nexted</em>になります。つまり、次の有効なハンドラにルーティングされます。</span> </p>

<markup
lang="java"

>.post("/foo",
      RequestPredicate.create()
                      .containsHeader("my-gr8-header")
                      .accepts(MediaType.TEXT_PLAIN)
                      .and(this::isUserAuthenticated)
                      .thenApply((req, resp) -&gt; {
                           // Some logic
                      })
                      .otherwise((req, resp) -&gt; { /* Otherwise logic */ }); // Optional. Default logic is req.next()</markup>

</div>


<h3 id="_organizing_code_into_services"><span class="merged" id="all.1rDPa2" title="原文 : Organizing Code into Services">コードのサービスへの編成</span></h3>
<div class="section">
<p><span class="merged" id="all.7rfNO" title="原文 : By implementing the Service interface you can organize your code into one or more services, each with its own path prefix and set of handlers."><code>Service</code>インタフェースを実装することで、コードを1つ以上のサービスに編成し、それぞれに独自のパス・プレフィクスとハンドラ・セットを指定できます。</span></p>

<markup
lang="java"
title="Use <code>Routing.Builder.register</code> to register your service"
>.register("/hello", new HelloService())</markup>

<markup
lang="java"
title="Service implementation"
>public class HelloService implements Service {
    @Override
    public void update(Routing.Rules rules) {
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
<p><span class="merged" id="all.2HkWPH" title="原文 : Act as a filter and forward requests to downstream handlers using the request.next() method.">フィルタとして機能し、<code>request.next()</code>メソッドを使用してリクエストをダウンストリーム・ハンドラに転送します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3KqLEy" title="原文 : Throw an exception or call request.next(exception) to begin error handling.">例外をスローするか、<code>request.next(exception)</code>をコールして<router-link @click.native="this.scrollFix('#_error_handling')" to="#_error_handling">「エラー処理」</router-link>を起動します。</span></p>

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


<h3 id="anchor-filtering"><span class="merged" id="all.2dfZSo" title="原文 : Handler as a Filter">フィルタとしてのハンドラ</span></h3>
<div class="section">
<p><span class="merged" id="all.1a0n55.spl1" title="原文 : The handler forwards the request to the downstream handlers by nexting.">ハンドラは、<em>nexting</em>によってリクエストをダウンストリーム・ハンドラに転送します。</span> <span class="merged" id="all.1a0n55.spl2"  title="原文: There are two options:">次の2つのオプションがあります。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.211hwN" title="原文 : call req.next()"><code>req.next()</code>のコール</span></p>
<markup
lang="java"

>.any("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // filtering logic  <span class="conum" data-value="2" />
    req.next(); <span class="conum" data-value="3" />
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2raG66" title="原文 : handler for any HTTP method using the /hello path"><code>/hello</code>パスを使用するHTTPメソッドのハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.cekkp" title="原文 : business logic implementation">ビジネス・ロジックの実装</span></li>
<li data-value="3"><span class="merged" id="all.31E7Ju" title="原文 : forward the current request to the downstream handler">現在のリクエストをダウンストリーム・ハンドラに転送</span></li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2Hw8Kh" title="原文 : call req.next(throwable) to forward the handling to the error handling"><code>req.next(throwable)</code>をコールして、処理を<router-link @click.native="this.scrollFix('#_error_handling')" to="#_error_handling">「エラー処理」</router-link>に転送</span></p>
<markup
lang="java"

>.any("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // filtering logic (e.g., validating parameters) <span class="conum" data-value="2" />
    if (userParametersOk()) {
        req.next(); <span class="conum" data-value="3" />
    } else {
        req.next(new IllegalArgumentException("Invalid parameters."); <span class="conum" data-value="4" />
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

<p><span class="merged" id="all.3mogOh.spl1" title="原文 : The handling logic can explicitly forward the execution to a different thread.">処理ロジックは、実行を別のスレッドに明示的に転送できます。</span> <span class="merged" id="all.3mogOh.spl2" title="原文 : This is the reason why returning from the handler can&rsquo;t automatically trigger calling the next handler.">このため、ハンドラから戻ると、次のハンドラの呼出しが自動的にトリガーされません。</span> </p>

</div>


<h3 id="anchor-sending-response"><span class="merged" id="all.30TRJJ" title="原文 : Sending a response">レスポンスの送信</span></h3>
<div class="section">
<p><span class="merged" id="all.4Ho6vP" title="原文 : To complete the request handling, you must send a response by calling the res.send() method.">リクエスト処理を完了するには、<code>res.send()</code>メソッドをコールしてレスポンスを送信する必要があります。</span></p>

<markup
lang="java"

>.get("/hello", (req, res) -&gt; { <span class="conum" data-value="1" />
    // terminating logic
    res.status(Http.Status.ACCEPTED_201);
    res.send("Saved!"); <span class="conum" data-value="2" />
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3CfHmw" title="原文 : handler that terminates the request handling for any HTTP method using the /hello path"><code>/hello</code>パスを使用してHTTPメソッドのリクエスト処理を終了するハンドラ</span></li>
<li data-value="2"><span class="merged" id="all.QqryT" title="原文 : send the response">レスポンスの送信</span></li>
</ul>

</div>

</div>


<h2 id="_protocol_specific_routing"><span class="merged" id="all.4WlFHv" title="原文 : Protocol Specific Routing">プロトコル固有のルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.2aC4QI" title="原文 : Handling routes based on the protocol version is possible by registering specific routes on routing builder.">プロトコル・バージョンに基づくルートの処理は、ルーティング・ビルダーで特定のルートを登録することで可能です。</span></p>

<markup
lang="java"
title="Routing based on HTTP version"
>.routing(r -&gt; r
        .get("/any-version", (req, res) -&gt; res.send("HTTP Version " + req.version()))
        .route(Http1Route.route(GET, "/version-specific", (req, res) -&gt; res.send("HTTP/1.1 route")))
        .route(Http2Route.route(GET, "/version-specific", (req, res) -&gt; res.send("HTTP/2 route")))
)</markup>

<p><span class="merged" id="all.1f6dZg" title="原文 : While Http1Route for Http/1 is always available with Helidon webserver, other routes like Http2Route for HTTP/2 needs to be added as additional dependency.">Http/1の<code>Http1Route</code>はHelidon webサーバーでは常に使用可能ですが、<router-link @click.native="this.scrollFix('#_http2_support')" to="#_http2_support">HTTP/2</router-link>の<code>Http2Route</code>などのルートを追加依存関係として追加する必要があります。</span></p>

</div>


<h2 id="_error_handling"><span class="merged" id="all.dOZbz"  title="原文:: Error Handling">エラー処理</span></h2>
<div class="section">

<h3 id="_error_routing"><span class="merged" id="all.thWvT" title="原文 : Error Routing">エラー・ルーティング</span></h3>
<div class="section">
<p><span class="merged" id="all.4VgbCx" title="原文 : You may register an error handler for a specific Throwable in the Routing.Builder method.">特定の<code>Throwable</code>のエラー・ハンドラを<code>Routing.Builder</code>メソッドに登録できます。</span></p>

<markup
lang="java"

>Routing routing = Routing.builder()
                        .error(MyException.class, (req, res, ex) -&gt; { <span class="conum" data-value="1" />
                            // handle the error, set the HTTP status code
                            res.send(errorDescriptionObject); <span class="conum" data-value="2" />
                        })
                        .build</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1JsyTn" title="原文 : Registers an error handler that handles MyException that are thrown from the upstream handlers">アップストリーム・ハンドラからスローされる<code>MyException</code>を処理するエラー・ハンドラを登録</span></li>
<li data-value="2"><span class="merged" id="all.3aRXWw" title="原文 : Finishes the request handling by sending a response">レスポンスを送信してリクエスト処理を終了</span></li>
</ul>

<p><span class="merged" id="all.3DXiIi" title="原文 : Error handlers are called when">エラー・ハンドラは次の場合にコールされます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2HZIOQ" title="原文 : an exception is thrown from a handler">ハンドラから例外がスローされました</span></p>

</li>
<li>
<p><span class="merged" id="all.5GY1T" title="原文 : req.next(ex) is called, where ex is an instance of Throwable"><code>req.next(ex)</code>がコールされます。<code>ex</code>は<code>Throwable</code>のインスタンスです</span></p>

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
<p><span class="merged" id="all.1mdPto" title="原文 : or, forward the error handling to the downstream error handlers">または、エラー処理をダウンストリーム・エラー・ハンドラに転送</span></p>
<markup
lang="java"

>.error(Throwable.class, (req, res, ex) -&gt; {
    // some logic
    req.next(ex);
})</markup>

</li>
</ul>

<p><span class="merged" id="all.4Ra0nY.spl1" title="原文 : Error handling can&rsquo;t be forwarded to the standard handlers.">エラー処理は標準ハンドラに転送できません。</span> <span class="merged" id="all.4Ra0nY.spl2" title="原文 : In fact, invoking req.next(ex) or req.next() in an error handler are equivalent.">実際、エラー・ハンドラでの<code>req.next(ex)</code>または<code>req.next()</code>の起動は同等です。</span> </p>

<markup
lang="java"

>.error(Throwable.class, (req, res, ex) -&gt; {
    if (condition) {
        req.next(ex); <span class="conum" data-value="1" />
    } else {
        req.next(); <span class="conum" data-value="2" />
    }
})</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.KJM5" title="原文 : Call a downstream error handler with the Throwable instance."><code>Throwable</code>インスタンスでダウンストリーム・エラー・ハンドラをコールします。</span></li>
<li data-value="2"><span class="merged" id="all.39bDTk.spl1" title="原文 : Here, req.next() is the same as req.next(ex).">ここで、<code>req.next()</code>は<code>req.next(ex)</code>と同じです。</span> <span class="merged" id="all.39bDTk.spl2" title="原文 : In both cases, the downstream error handler is called.">どちらの場合も、ダウンストリーム・エラー・ハンドラがコールされます。</span> </li>
</ul>

</div>


<h3 id="_default_error_handling"><span class="merged" id="all.1KBnFZ" title="原文 : Default error handling">デフォルトのエラー処理</span></h3>
<div class="section">
<p><span class="merged" id="all.20glG1" title="原文 : If no user-defined error handler is matched, or if the last error handler of the exception called req.next(), then the exception is translated to an HTTP response as follows:">一致するユーザー定義のエラー・ハンドラがない場合、または<code>req.next()</code>という例外の最後のエラー・ハンドラがある場合、例外は次のようにHTTPレスポンスに変換されます:</span></p>

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


<h2 id="_http2_support"><span class="merged" id="all.3Nb1qa.1" title="原文 : HTTP/2 Support">HTTP/2のサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.4KsZUy.spl1" title="原文 : Helidon supports HTTP/2 upgrade from HTTP/1, HTTP/2 without prior knowledge and HTTP/2 with ALPN over TLS.">Helidonでは、HTTP/1からのHTTP/2アップグレード、知識のないHTTP/2、およびTLS経由でALPNを使用するHTTP/2アップグレードがサポートされています。</span> <span class="merged" id="all.4KsZUy.spl2" title="原文 : HTTP/2 support is enabled in webserver by default when it&rsquo;s artifact is available on classpath.">HTTP/2のサポートは、アーティファクトがクラスパスで使用可能な場合、webサーバーでデフォルトで有効になります。</span> </p>


<h3 id="_maven_coordinates"><span class="merged" id="all.317oeS.62"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.1vtRXm" title="原文 : To enable Http/2 support add the following dependency to your project&rsquo;s pom.xml.">Http/2のサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-http2&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_static_content_support"><span class="merged" id="all.2MmOx8" title="原文 : Static Content Support">静的コンテンツのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.46jkQ5.spl1" title="原文 : Use the io.helidon.webserver.staticcontent.StaticContentSupport class to serve files and classpath resources."><code>io.helidon.webserver.staticcontent.StaticContentSupport</code>クラスを使用して、ファイルおよびクラスパス・リソースを提供します。</span> <span class="merged" id="all.46jkQ5.spl2" title="原文 : StaticContentSupport can be created for any readable directory or classpath context root and registered on a path in Routing."><code>StaticContentSupport</code>は、読取り可能な任意のディレクトリまたはクラスパス・コンテキスト・ルートに対して作成し、<code>Routing</code>のパスに登録できます。</span> </p>

<p><span class="merged" id="all.4EQgAP" title="原文 : You can combine dynamic handlers with StaticContentSupport objects: if no file matches the request path, then the request is forwarded to the next handler.">動的ハンドラを<code>StaticContentSupport</code>オブジェクトと組み合せることができます: リクエスト・パスに一致するファイルがない場合、リクエストは次のハンドラに転送されます。</span></p>


<h3 id="_maven_coordinates_2"><span class="merged" id="all.317oeS.63"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.4N48Vu" title="原文 : To enable Static Content Support add the following dependency to your project&rsquo;s pom.xml.">静的コンテンツ・サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

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

>Routing.builder()
       .register("/pictures", StaticContentSupport.create(Paths.get("/some/WEB/pics"))) <span class="conum" data-value="1" />
       .register("/", StaticContentSupport.builder("/static-content") <span class="conum" data-value="2" />
                                   .welcomeFileName("index.html") <span class="conum" data-value="3" />
                                   .build());</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2WwnOv" title="原文 : Create a new StaticContentSupport object to serve data from the file system, and associate it with the &quot;/pictures&quot; context path.">ファイル・システムからのデータを提供する新しい<code>StaticContentSupport</code>オブジェクトを作成し、<code>"/pictures"</code>コンテキスト・パスに関連付けます。</span></li>
<li data-value="2"><span class="merged" id="all.4DyGS5.spl1" title="原文 : Create a StaticContentSupport object to serve resources from the contextual ClassLoader.">コンテキスト<code>ClassLoader</code>からリソースを提供する<code>StaticContentSupport</code>オブジェクトを作成します。</span> <span class="merged" id="all.4DyGS5.spl2" title="原文 : The specific classloader can be also defined.">特定のクラス・ローダーを定義することもできます。</span> <span class="merged" id="all.4DyGS5.spl3" title="原文 : A builder lets you provide more configuration values.">ビルダーを使用すると、より多くの構成値を指定できます。</span> </li>
<li data-value="3"><span class="merged" id="all.20Zwty" title="原文 : index.html is the file that is returned if a directory is requested."><code>index.html</code>は、ディレクトリがリクエストされた場合に返されるファイルです。</span></li>
</ul>

<p><span class="merged" id="all.29u1iU.spl1" title="原文 : A StaticContentSupport object can be created using create(…​) factory methods or a builder."><code>StaticContentSupport</code>オブジェクトは、<code>create(…​)</code>ファクトリ・メソッドまたは<code>builder</code>を使用して作成できます。</span> <span class="merged" id="all.29u1iU.spl2" title="原文 : The builder lets you provide more configuration values, including welcome file-name and mappings of filename extensions to media types."><code>builder</code>では、<em>welcome file-name</em>やファイル名拡張子からメディア・タイプへのマッピングなど、より多くの構成値を指定できます。</span> </p>

</div>

</div>


<h2 id="_jersey_jax_rs_support"><span class="merged" id="all.3Z9y8N" title="原文 : Jersey (JAX-RS) Support">Jersey (JAX-RS)サポート</span></h2>
<div class="section">

<h3 id="_maven_coordinates_3"><span class="merged" id="all.317oeS.64"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.TUOs4" title="原文 : To enable Jersey (JAX-RS) Support add the following dependency to your project&rsquo;s pom.xml.">Jersey (JAX-RS)サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-jersey&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_jax_rs_support"><span class="merged" id="all.2VK4t4" title="原文 : JAX-RS Support">JAX-RSのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.4efXgj" title="原文 : You can register a Jersey (JAX-RS) application at a context root using the JerseySupport class."><code>JerseySupport</code>クラスを使用して、Jersey (JAX-RS)アプリケーションを<em>「コンテキスト・ルート」</em>に登録できます。</span></p>


<h4 id="_registering_a_jersey_application"><span class="merged" id="all.3iRrG4" title="原文 : Registering a Jersey Application">Jerseyアプリケーションの登録</span></h4>
<div class="section">
<p><span class="merged" id="all.1jVYEw" title="原文 : To register a Jersey application at a context root, use the JerseySupport class and its JerseySupport.Builder builder.">コンテキスト・ルートで<strong>Jersey</strong>アプリケーションを登録するには、<code>JerseySupport</code>クラスとその<code>JerseySupport.Builder</code>ビルダーを使用します。</span></p>

<p><span class="merged" id="all.1dmjV0" title="原文 : JerseySupport can register the JAX-RS resources directly."><code>JerseySupport</code>はJAX-RSリソースを直接登録できます。</span></p>

<markup
lang="java"
title="Jersey (JAX-RS) <code>HelloWorld</code> resource"
>@Path("/")
public class HelloWorld {

    @GET
    @Path("hello")
    public Response hello() {
        return Response.ok("Hello World!").build();
    }
}</markup>

<markup
lang="java"
title="Registering the <code>HelloWorld</code> resource"
>Routing.builder()
       .register("/jersey", <span class="conum" data-value="1" />
                 JerseySupport.builder()
                              .register(HelloWorld.class) <span class="conum" data-value="2" />
                              .build())
       .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2VZgb1" title="原文 : Register the Jersey application at /jersey context root"><code>/jersey</code>コンテキスト・ルートでのJerseyアプリケーションの登録</span></li>
<li data-value="2"><span class="merged" id="all.oufh1" title="原文 : The Jersey Application stays hidden and consists of a single HelloWorld resource class">Jersey <code>Application</code>は非表示のままで、単一の<code>HelloWorld</code>リソース・クラスで構成されます</span></li>
</ul>

<p><span class="merged" id="all.4ddCgm" title="原文 : As a result, an HTTP GET request to /jersey/hello would yield a Hello World! response string.">その結果、<code>/jersey/hello</code>へのHTTP GETリクエストによって<code>Hello World!</code>レスポンス文字列が生成されます。</span></p>


<h5 id="_registering_a_jax_rs_application"><span class="merged" id="all.1SpqnE" title="原文 : Registering a JAX-RS Application">JAX-RSアプリケーションの登録</span></h5>
<div class="section">
<p><span class="merged" id="all.2T1zEE" title="原文 : You can also register the JAX-RS Application object.">JAX-RS <code>Application</code>オブジェクトを登録することもできます。</span></p>

<markup
lang="java"
title="Register the <code>HelloWorld</code> resource"
>Routing.builder()
       .register("/jersey", <span class="conum" data-value="1" />
                 JerseySupport.builder(new MyApplication()) <span class="conum" data-value="2" />
                              .build())
       .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2VZgb1.1" title="原文 : Register the Jersey application at /jersey context root"><code>/jersey</code>コンテキスト・ルートでのJerseyアプリケーションの登録</span></li>
<li data-value="2"><span class="merged" id="all.1qDemE" title="原文 : MyApplication handles requests made to /jersey context root."><code>MyApplication</code>は、 /jerseyコンテキスト・ルートに対して行われたリクエストを処理します。</span></li>
</ul>

</div>


<h5 id="_accessing_webserver_internals_from_a_jax_rs_application"><span class="merged" id="all.34gm6B" title="原文 : Accessing WebServer Internals from a JAX-RS Application">JAX-RSアプリケーションからのWebServer内部へのアクセス</span></h5>
<div class="section">
<p><span class="merged" id="all.3PkpHQ" title="原文 : You can inject WebServer request and response objects into your JAX-RS application using @Context."><code>@Context</code>を使用して、WebServerリクエストおよびレスポンス・オブジェクトをJAX-RSアプリケーションにインジェクトできます。</span></p>

<markup
lang="java"
title="Injection of WebServer internal objects"
>@Path("/")
@RequestScoped
public class HelloWorld {
    @Context
    private ServerRequest request;

    @Context
    private ServerResponse response;
}</markup>

</div>

</div>

</div>

</div>


<h2 id="_json_support"><span class="merged" id="all.L93YY"  title="原文:: JSON Support">JSONのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.3OJjiJ.spl1" title="原文 : The WebServer supports JSON-P.">WebServerはJSON-Pをサポートしています。</span> <span class="merged" id="all.3OJjiJ.spl2" title="原文 : When enabled, you can send and receive JSON-P objects transparently.">有効にすると、JSON-Pオブジェクトを透過的に送受信できます。</span> </p>


<h3 id="_maven_coordinates_4"><span class="merged" id="all.317oeS.65"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.ej2Tu" title="原文 : To enable JSON Support add the following dependency to your project&rsquo;s pom.xml.">JSONサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_usage_2"><span class="merged" id="all.JUOSC.66"  title="原文:: Usage">使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.1mX58H.spl1" title="原文 : To enable JSON-P support, first register it with the web server.">JSON-Pサポートを有効にするには、まずwebサーバーに登録します。</span> <span class="merged" id="all.1mX58H.spl2" title="原文 : Then you can add routes that handle and return JSON.">その後、JSONを処理して返すルートを追加できます。</span> </p>

<markup
lang="java"
title="Configure JsonpSupport and use it for reading and writing of entities"
>JsonpSupport jsonbSupport = JsonpSupport.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.builder()
    .addMediaSupport(jsonpSupport) <span class="conum" data-value="2" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.44kSS1" title="原文 : Register JsonpSupport to enable transformation from and to JsonObject objects">JsonpSupportを登録して、<code>JsonObject</code>オブジェクトとの間の変換を可能にします</span></li>
<li data-value="2"><span class="merged" id="all.2RtWLx" title="原文 : Register that JsonpSupport instance to enable automatic deserialization of Java objects from and serialization of Java objects to JSON.">そのJsonpSupportインスタンスを登録して、JavaオブジェクトのJSONからの自動直列化復元およびJSONへの直列化を有効にします。</span></li>
</ul>

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


<h3 id="_configuring_json_readerwriter_factories"><span class="merged" id="all.203xz0" title="原文 : Configuring Json Reader/Writer factories">Jsonリーダー/ライター・ファクトリの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.24D4D" title="原文 : To configure JSON-P JsonReaderFactory and JsonWriterFactory that are used by the JsonpSupport instance, create the JsonpSupport object:"><code>JsonpSupport</code>インスタンスで使用されるJSON-P <code>JsonReaderFactory</code>および<code>JsonWriterFactory</code>を構成するには、<code>JsonpSupport</code>オブジェクトを作成します:</span></p>

<markup
lang="java"
title="Create <code>JsonpSupport</code> with the provided configuration"
>JsonpSupport.create(Map.of(JsonGenerator.PRETTY_PRINTING, false));</markup>

</div>

</div>


<h2 id="_json_b_support"><span class="merged" id="all.1UvfC6" title="原文 : JSON-B Support">JSON-Bのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.2teR6I.spl1" title="原文 : The WebServer supports the JSON-B specification.">WebServerは、<a href="http://json-b.net/" target="_blank">「JSON-B仕様」</a>をサポートしています。</span> <span class="merged" id="all.2teR6I.spl2" title="原文 : When this support is enabled, Java objects will be serialized to and deserialized from JSON automatically using Yasson, an implementation of the JSON-B specification.">このサポートが有効な場合、Javaオブジェクトは、<a href="https://jakarta.ee/specifications/jsonb/2.0/jakarta-jsonb-spec-2.0.html" target="_blank">「JSON-B仕様」</a>の実装である<a href="https://github.com/eclipse-ee4j/yasson" target="_blank">Yasson</a>を使用してJSONに対して自動的に直列化および直列化復元されます。</span> </p>


<h3 id="_maven_coordinates_5"><span class="merged" id="all.317oeS.66"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.2tDJu0" title="原文 : To enable JSON-B Support add the following dependency to your project&rsquo;s pom.xml.">JSON-Bサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_usage_3"><span class="merged" id="all.JUOSC.67"  title="原文:: Usage">使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.37BLq2" title="原文 : To enable JSON-B support, first create and register a JsonbSupport instance with a WebServer.Builder.">JSON-Bサポートを有効にするには、最初に<a href="./apidocs/io.helidon.media.jsonb/io/helidon/media/jsonb/JsonbSupport.html" target="_blank"><code>JsonbSupport</code></a>インスタンスを作成し、<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.Builder.html" target="_blank"><code>WebServer.Builder</code></a>に登録します。</span></p>

<markup
lang="java"
title="Registration of the <code>JsonbSupport</code> via <code>WebServer</code>"
>JsonbSupport jsonbSupport = JsonbSupport.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.builder()
    .addMediaSupport(jsonbSupport) <span class="conum" data-value="2" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.hRIZt.spl1" title="原文 : Create a JsonbSupport instance."><code>JsonbSupport</code>インスタンスを作成します。</span> <span class="merged" id="all.hRIZt.spl2" title="原文 : This instance may be reused freely.">このインスタンスは自由に再利用できます。</span> </li>
<li data-value="2"><span class="merged" id="all.Ymkbj" title="原文 : Register that JsonbSupport instance to enable automatic deserialization of Java objects from and serialization of Java objects to JSON.">その<code>JsonbSupport</code>インスタンスを登録して、JavaオブジェクトのJSONからの自動直列化復元およびJSONへの直列化を有効にします。</span></li>
</ul>

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

    public void setName(final String name) {
        this.name = name;
    }
}</markup>

<p><span class="merged" id="all.ZgWx9" title="原文 : Then you can set up a Handler like this:">その後、次のように<code>Handler</code>を設定できます:</span></p>

<markup
lang="java"
title="A <code>Handler</code> that works with Java objects instead of raw JSON"
>final Routing routing =
    routingBuilder.post("/echo", <span class="conum" data-value="1" />
                        Handler.create(Person.class, <span class="conum" data-value="2" />
                                       (req, res, person) -&gt; res.send(person)))) <span class="conum" data-value="3" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2nJ11x" title="原文 : Set up a route for POST requests using the Routing.Builder#post(String, Handler…​) method"><a href="./apidocs/io.helidon.webserver/io/helidon/webserver/Routing.Builder.html#post-java.lang.String-io.helidon.webserver.Handler…​-" target="_blank">「<code>Routing.Builder#post(String, Handler…​)</code>メソッド」</a>を使用した<code>POST</code>リクエストのルートの設定</span></li>
<li data-value="2"><span class="merged" id="all.qEeIk" title="原文 : Use the Handler#create(Class, Handler.EntityHandler) method to install a Handler.EntityHandler that works with Person instances."><a href="./apidocs/io.helidon.webserver/io/helidon/webserver/Handler.html#create-java.lang.Class-io.helidon.webserver.Handler.EntityHandler-" target="_blank">「<code>Handler#create(Class, Handler.EntityHandler)</code>メソッド」</a>を使用して、<code>Person</code>インスタンスで動作する<code>Handler.EntityHandler</code>をインストールします。</span></li>
<li data-value="3"><span class="merged" id="all.OxlEj.spl1" title="原文 : This Handler.EntityHandler consumes a Person instance (person) and simply echoes it back.">この<code>Handler.EntityHandler</code>は、<code>Person</code>インスタンス(<code>person</code>)を使用し、単にエコー・バックします。</span> <span class="merged" id="all.OxlEj.spl2" title="原文 : Note that there is no working with raw JSON here.">ここではRAW JSONを使用しないことに注意してください。</span> </li>
</ul>

<markup
lang="bash"
title="Example of posting JSON to the <code>/echo</code> endpoint"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/echo -d '{"name":"Joe"}'
{"name":"Joe"}</markup>

</div>

</div>


<h2 id="_jackson_support"><span class="merged" id="all.2DXHdl" title="原文 : Jackson Support">Jacksonのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.1U2Qxn.spl1" title="原文 : The WebServer supports Jackson.">WebServerは、<a href="https://github.com/FasterXML/jackson#jackson-project-home-github" target="_blank">Jackson</a>をサポートしています。</span> <span class="merged" id="all.1U2Qxn.spl2" title="原文 : When this support is enabled, Java objects will be serialized to and deserialized from JSON automatically using Jackson.">このサポートが有効な場合、Javaオブジェクトは、Jacksonを使用してJSONに対して自動的に直列化および直列化復元されます。</span> </p>


<h3 id="_maven_coordinates_6"><span class="merged" id="all.317oeS.67"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.iE6N6" title="原文 : To enable Jackson Support add the following dependency to your project&rsquo;s pom.xml.">Jacksonサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jackson&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_usage_4"><span class="merged" id="all.JUOSC.68"  title="原文:: Usage">使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.F9DyP" title="原文 : To enable Jackson support, first create and register a JacksonSupport instance with a WebServer.Builder.">Jacksonサポートを有効にするには、まず<a href="./apidocs/io.helidon.media.jackson/io/helidon/media/jackson/JacksonSupport.html" target="_blank"><code>JacksonSupport</code></a>インスタンスを作成し、<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.Builder.html" target="_blank"><code>WebServer.Builder</code></a>に登録します。</span></p>

<markup
lang="java"
title="Registration of the <code>JacksonSupport</code> via <code>WebServer</code>"
>JacksonSupport jacksonSupport = JacksonSupport.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.builder()
    .addMediaSupport(jacksonSupport) <span class="conum" data-value="2" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.31xHCQ.spl1" title="原文 : Create a JacksonSupport instance."><code>JacksonSupport</code>インスタンスを作成します。</span> <span class="merged" id="all.31xHCQ.spl2" title="原文 : This instance may be reused freely.">このインスタンスは自由に再利用できます。</span> </li>
<li data-value="2"><span class="merged" id="all.1QJSpD" title="原文 : Register that JacksonSupport instance to enable automatic deserialization of Java objects from and serialization of Java objects to JSON.">その<code>JacksonSupport</code>インスタンスを登録して、JavaオブジェクトのJSONからの自動直列化復元およびJSONへの直列化を有効にします。</span></li>
</ul>

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
>final Routing routing =
    routingBuilder.post("/echo", <span class="conum" data-value="1" />
                        Handler.create(Person.class, <span class="conum" data-value="2" />
                                       (req, res, person) -&gt; res.send(person)))) <span class="conum" data-value="3" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2nJ11x.1" title="原文 : Set up a route for POST requests using the Routing.Builder#post(String, Handler…​) method"><a href="./apidocs/io.helidon.webserver/io/helidon/webserver/Routing.Builder.html#post-java.lang.String-io.helidon.webserver.Handler…​-" target="_blank">「<code>Routing.Builder#post(String, Handler…​)</code>メソッド」</a>を使用した<code>POST</code>リクエストのルートの設定</span></li>
<li data-value="2"><span class="merged" id="all.qEeIk.1" title="原文 : Use the Handler#create(Class, Handler.EntityHandler) method to install a Handler.EntityHandler that works with Person instances."><a href="./apidocs/io.helidon.webserver/io/helidon/webserver/Handler.html#create-java.lang.Class-io.helidon.webserver.Handler.EntityHandler-" target="_blank">「<code>Handler#create(Class, Handler.EntityHandler)</code>メソッド」</a>を使用して、<code>Person</code>インスタンスで動作する<code>Handler.EntityHandler</code>をインストールします。</span></li>
<li data-value="3"><span class="merged" id="all.OxlEj.1.spl1" title="原文 : This Handler.EntityHandler consumes a Person instance (person) and simply echoes it back.">この<code>Handler.EntityHandler</code>は、<code>Person</code>インスタンス(<code>person</code>)を使用し、単にエコー・バックします。</span> <span class="merged" id="all.OxlEj.1.spl2" title="原文 : Note that there is no working with raw JSON here.">ここではRAW JSONを使用しないことに注意してください。</span> </li>
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


<h2 id="_access_log"><span class="merged" id="all.38NrJK.3"  title="原文:: Access Log">アクセス・ログ</span></h2>
<div class="section">
<p><span class="merged" id="all.3F8CBy" title="原文 : Access logging in Helidon is done by a dedicated module that can be added to WebServer and configured.">Helidonでのアクセス・ロギングは、WebServerに追加して構成できる専用モジュールによって行われます。</span></p>

<p><span class="merged" id="all.1ASudW.spl1" title="原文 : Access logging is a Helidon WebServer Service and as such is executed in the order it is registered with WebServer routing.">アクセス・ロギングはHelidon WebServer <code>Service</code>であるため、WebServerルーティングに登録された順序で実行されます。</span> <span class="merged" id="all.1ASudW.spl2" title="原文 : This implies that if you register it last and another Service or Handler finishes the request, the service will not be invoked.">これは、最後に登録し、別の<code>Service</code>または<code>Handler</code>がリクエストを終了した場合、サービスが呼び出されないことを意味します。</span> </p>

<p><span class="merged" id="all.Y2Khl.1" title="原文 : To enable Access logging add the following dependency to project&rsquo;s pom.xml:">アクセス・ロギングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-access-log&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_configuring_access_log_in_your_code"><span class="merged" id="all.veYmD" title="原文 : Configuring Access Log in your code">コード内のアクセス・ログの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.25Gttx" title="原文 : Access log is configured in your code by registering it as a service with Routing">アクセス・ログは、<code>Routing</code>にサービスとして登録することでコード内に構成されます</span></p>

<markup
lang="java"

>Routing.builder()
    .register(AccessLogSupport.create(config.get("server.access-log")))
    .get("/greet", myService)</markup>

<p><span class="merged" id="all.1hgmN7" title="原文 : The order of registration is significant - make sure AccessLogSupport is registered first (even before security, tracing etc.).">登録の順序は重要です - <code>AccessLogSupport</code>が最初に登録されていることを確認します(セキュリティ、トレースなどの前)。</span></p>

</div>


<h3 id="_configuring_access_log_in_a_configuration_file"><span class="merged" id="all.4ge6uu.1" title="原文 : Configuring Access Log in a configuration file">構成ファイルでのアクセス・ログの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1FOoX1.1" title="原文 : Access log can be configured as follows:">アクセス・ログは次のように構成できます:</span></p>

<markup
lang="yaml"
title="Access Log configuration file"
>server:
  port: 8080
  access-log:
    format: "%h %l %u %t %r %s %b %{Referer}i"</markup>

<p><span class="merged" id="all.16o6HQ.1" title="原文 : All options shown above are also available programmatically when using builder.">前述のすべてのオプションは、ビルダーの使用時にプログラムで使用することもできます。</span></p>

</div>


<h3 id="_configuration_options_3"><span class="merged" id="all.276fEP.8"  title="原文:: Configuration Options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.vAruj.1" title="原文 : The following configuration options can be defined:">次の構成オプションを定義できます:</span></p>


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
<th><span class="merged" id="all.4HTTVU.1" title="原文 : Config key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.4"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.12txOr.1" title="原文 : Builder method">ビルダー・メソッド</span></th>
<th><span class="merged" id="all.4JM9z7.41"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.29"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.102"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.lSyxs.1"  title="原文: enabled(boolean)"><code>enabled(boolean)</code></span></td>
<td class=""><span class="merged" id="all.4FRJdM.1" title="原文 : When this option is set to false, access logging will be disabled">このオプションを<code>false</code>に設定すると、アクセス・ロギングが無効になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z8Q9s.1"  title="原文: logger-name"><code>logger-name</code></span></td>
<td class=""><span class="merged" id="all.2aJUwu.1"  title="原文: io.helidon.webserver.AccessLog"><code>io.helidon.webserver.AccessLog</code></span></td>
<td class=""><span class="merged" id="all.1NxN1.1"  title="原文: loggerName(String)"><code>loggerName(String)</code></span></td>
<td class=""><span class="merged" id="all.NvHXm.1" title="原文 : Name of the logger to use when writing log entries">ログ・エントリの書込み時に使用するログ出力の名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4L3INC.2"  title="原文: format"><code>format</code></span></td>
<td class=""><span class="merged" id="all.V69kn.10"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.B9r07.1" title="原文 : helidonLogFormat(), commonLogFormat(), add(AccessLogEntry entry)"><code>helidonLogFormat()</code>, <code>commonLogFormat()</code>, <code>add(AccessLogEntry entry)</code></span></td>
<td class=""><span class="merged" id="all.2OzsUH.1.spl1" title="原文 : Configuration of access log output, when helidon is defined, the Helidon log format (see below) is used.">アクセス・ログ出力の構成では、<code>helidon</code>が定義されている場合、Helidonログ形式(次を参照)が使用されます。</span> <span class="merged" id="all.2OzsUH.1.spl2" title="原文 : Can be configured to explicitly define log entries (see below as well)">ログ・エントリを明示的に定義するように構成できます(次も参照)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aPM0d.1"  title="原文: exclude-paths"><code>exclude-paths</code></span></td>
<td class=""><span class="merged" id="all.2kt7dz.3"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.1skXXq.1"  title="原文: excludePaths(List&lt;String&gt;)"><code>excludePaths(List&lt;String>)</code></span></td>
<td class=""><span class="merged" id="all.1pxeeJ.1.spl1" title="原文 : List of path patterns to exclude from access log.">アクセス・ログから除外するパス・パターンのリスト。</span> <span class="merged" id="all.1pxeeJ.1.spl2" title="原文 : Path pattern syntax is as defined in io.helidon.webserver.PathMatcher.">パス・パターンの構文は、<code>io.helidon.webserver.PathMatcher</code>で定義されています。</span> <span class="merged" id="all.1pxeeJ.1.spl3" title="原文 : Can be used to exclude paths such as /health or /metrics to avoid cluttering log."><code>/health</code>や<code>/metrics</code>などのパスを除外してログが複雑にならないようにするために使用できます。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_supported_log_formats"><span class="merged" id="all.FgztW.1" title="原文 : Supported Log Formats">サポートされているログ形式</span></h3>
<div class="section">

<h4 id="_supported_log_entries"><span class="merged" id="all.plA8l.1" title="原文 : Supported Log Entries">サポートされるログ・エントリ</span></h4>
<div class="section">
<p><span class="merged" id="all.ktLCj.1" title="原文 : The following log entries are supported in Helidon:">Helidonでは、次のログ・エントリがサポートされます:</span></p>


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
<th><span class="merged" id="all.1jELq.1" title="原文 : Config format">構成形式</span></th>
<th><span class="merged" id="all.2YyVUN.1" title="原文 : Class (to use with builder)">クラス(ビルダーで使用)</span></th>
<th><span class="merged" id="all.4JM9z7.42"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Hz0uw.1"  title="原文:: %h">%h</span></td>
<td class=""><span class="merged" id="all.4PqpSZ.1"  title="原文: HostLogEntry"><code>HostLogEntry</code></span></td>
<td class=""><span class="merged" id="all.3oNhU7.1" title="原文 : IP address of the remote host">リモート・ホストのIPアドレス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4LIdVD.1"  title="原文:: %l">%l</span></td>
<td class=""><span class="merged" id="all.2Ebcfk.1"  title="原文: UserIdLogEntry"><code>UserIdLogEntry</code></span></td>
<td class=""><span class="merged" id="all.1yXZvM.1" title="原文 : Client identity, always undefined in Helidon">クライアント・アイデンティティ(Helidonでは常に未定義)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2VrEQV.1" title="原文 : %u">%u</span></td>
<td class=""><span class="merged" id="all.5dT8L.1"  title="原文: UserLogEntry"><code>UserLogEntry</code></span></td>
<td class=""><span class="merged" id="all.DOgPR.1" title="原文 : The username of logged-in user (when Security is used)">ログイン・ユーザーのユーザー名(セキュリティが使用されている場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4egjK1.1"  title="原文:: %t">%t</span></td>
<td class=""><span class="merged" id="all.1ApKKm.1"  title="原文: TimestampLogEntry"><code>TimestampLogEntry</code></span></td>
<td class=""><span class="merged" id="all.4DP1tm.1"  title="原文:: The current timestamp">現在のタイムスタンプ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.QGOZE.1"  title="原文:: %r">%r</span></td>
<td class=""><span class="merged" id="all.3uMjWO.1"  title="原文: RequestLineLogEntry"><code>RequestLineLogEntry</code></span></td>
<td class=""><span class="merged" id="all.28v7jv.1" title="原文 : The request line (method, path and HTTP version)">リクエスト・ライン(メソッド、パスおよびHTTPバージョン)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1lAeti.1"  title="原文:: %s">%s</span></td>
<td class=""><span class="merged" id="all.17adkp.1"  title="原文: StatusLogEntry"><code>StatusLogEntry</code></span></td>
<td class=""><span class="merged" id="all.2CYaQE.1" title="原文 : The HTTP status returned to the client">クライアントに返されるHTTPステータス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.C1PUC.1"  title="原文:: %b">%b</span></td>
<td class=""><span class="merged" id="all.222Ct4.1"  title="原文: SizeLogEntry"><code>SizeLogEntry</code></span></td>
<td class=""><span class="merged" id="all.1ufMv6.1" title="原文 : The response entity size (if available)">レスポンス・エンティティ・サイズ(使用可能な場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xw7jF.1"  title="原文:: %D">%D</span></td>
<td class=""><span class="merged" id="all.30eTd6.2"  title="原文: TimeTakenLogEntry"><code>TimeTakenLogEntry</code></span></td>
<td class=""><span class="merged" id="all.1iH9WH.1" title="原文 : The time taken in microseconds">所要時間(マイクロ秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bs6VR.1"  title="原文:: %T">%T</span></td>
<td class=""><span class="merged" id="all.30eTd6.3"  title="原文: TimeTakenLogEntry"><code>TimeTakenLogEntry</code></span></td>
<td class=""><span class="merged" id="all.4DrhZg.1" title="原文 : The time taken in seconds">所要時間(秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.7tTHp.1" title="原文 : %{header-name}i">%{<code>header-name</code>}i</span></td>
<td class=""><span class="merged" id="all.14OQ05.1"  title="原文: HeaderLogEntry"><code>HeaderLogEntry</code></span></td>
<td class=""><span class="merged" id="all.24GCaX.1" title="原文 : Value of a header (can have multiple such specification to write multiple headers)">ヘッダーの値(複数のヘッダーを書き込むために複数の指定が可能)</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.39PCFU.1" title="原文 : Currently we only support the entries defined above, with NO support for free text.">現在、前述のように定義されたエントリのみがサポートされており、フリー・テキストはサポートされていません。</span></p>

</div>


<h4 id="_helidon_log_format"><span class="merged" id="all.1scEpr.1" title="原文 : Helidon Log Format">Helidonログ形式</span></h4>
<div class="section">
<p><span class="merged" id="all.4D2BYu.1" title="原文 : When format is set to helidon, the format used is:">formatが<code>helidon</code>に設定されている場合、使用される形式は次のとおりです:</span></p>

<p><span class="merged" id="all.4M5dYl.1"  title="原文: &quot;%h %u %t %r %s %b %D&quot;"><code>"%h %u %t %r %s %b %D"</code></span></p>

<p><span class="merged" id="all.NhCbQ.1" title="原文 : The entries logged:">記録されるエントリは次のとおりです:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1ZDJpH.1"  title="原文:: IP Address">IPアドレス</span>

</li>
<li>
<span class="merged" id="all.1wsZSM.1" title="原文 : Username of a logged-in user">ログイン・ユーザーのユーザー名</span>

</li>
<li>
<span class="merged" id="all.iSFtl.1"  title="原文:: Timestamp">タイムスタンプ</span>

</li>
<li>
<span class="merged" id="all.1zz0nk.1"  title="原文:: Request Line">要求明細</span>

</li>
<li>
<span class="merged" id="all.1Eo6op.1" title="原文 : HTTP Status code">HTTPステータス・コード</span>

</li>
<li>
<span class="merged" id="all.1D19yq.1" title="原文 : Entity size">エンティティ・サイズ</span>

</li>
<li>
<span class="merged" id="all.1Sc0NN.1" title="原文 : Time taken (microseconds)">所要時間(マイクロ秒)</span>

</li>
</ol>

<p><span class="merged" id="all.1W3EDd.1" title="原文 : Access log example:">アクセス・ログの例:</span></p>

<markup
lang="listing"

>192.168.0.104 - [18/Jun/2019:22:28:55 +0200] "GET /greet/test HTTP/1.1" 200 53
0:0:0:0:0:0:0:1 - [18/Jun/2019:22:29:00 +0200] "GET /metrics/vendor HTTP/1.1" 200 1658
0:0:0:0:0:0:0:1 jack [18/Jun/2019:22:29:07 +0200] "PUT /greet/greeting HTTP/1.1" 200 21
0:0:0:0:0:0:0:1 jill [18/Jun/2019:22:29:12 +0200] "PUT /greet/greeting HTTP/1.1" 403 0
0:0:0:0:0:0:0:1 - [18/Jun/2019:22:29:17 +0200] "PUT /greet/greeting HTTP/1.1" 401 0</markup>

</div>

</div>

</div>


<h2 id="_tls_configuration"><span class="merged" id="all.vdl3i"  title="原文:: TLS Configuration">TLS構成</span></h2>
<div class="section">
<p><span class="merged" id="all.34DKy9" title="原文 : Configure TLS either programmatically, or by the Helidon configuration framework.">TLSは、プログラムによって、またはHelidon構成フレームワークによって構成します。</span></p>


<h3 id="_configuring_tls_in_your_code"><span class="merged" id="all.2cogWe.1" title="原文 : Configuring TLS in your code">コードでのTLSの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3rNN1S" title="原文 : To configure TLS in WebServer programmatically create your keystore configuration and pass it to the WebServer builder.">WebServerでTLSをプログラムで構成するには、キーストア構成を作成してWebServerビルダーに渡します。</span></p>

<markup
lang="java"

>KeyConfig keyConfig = KeyConfig.keystoreBuilder()
                //Whether this keystore is also trust store
                .trustStore()
                //Keystore location/name
                .keystore(Resource.create("keystore.p12"))
                //Password to the keystore
                .keystorePassphrase("password")
                .build();

WebServer.builder()
         .tls(WebServerTls.builder()
               .trust(keyConfig)
               .privateKey(keyConfig)
               .build())
         .build();</markup>

</div>


<h3 id="_configuring_tls_in_the_config_file"><span class="merged" id="all.2x0R1m.1" title="原文 : Configuring TLS in the config file">構成ファイルでのTLSの構成</span></h3>
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

<p><span class="merged" id="all.1Cq2QG.3" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

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


<h3 id="_configuration_options_4"><span class="merged" id="all.3SKgM1.107"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.2z5dMO.1" title="原文 : Type: io.helidon.webserver.WebServerTls">タイプ: <a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServerTls.html" target="_blank">io.helidon.webserver.WebServerTls</a></span></p>


<h4 id="_configuration_options_5"><span class="merged" id="all.3SKgM1.108"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.6" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.131"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.126"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.133"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.141"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3HVwVy.1"  title="原文: private-key"><code>private-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK.5" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Dxe3p.1" title="原文 : Configure private key to use for SSL context.">SSLコンテキストに使用する秘密キーを構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.108" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.132"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.127"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.134"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.142"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.yFryw.1"  title="原文: cipher-suite"><code>cipher-suite</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.41"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ImMQU.1.spl1" title="原文 : Set allowed cipher suite.">許可される暗号スイートを設定します。</span> <span class="merged" id="all.1ImMQU.1.spl2" title="原文 : If an empty collection is set, an exception is thrown since it is required to support at least some ciphers.">空のコレクションが設定されている場合、少なくとも一部の暗号をサポートする必要があるため、例外がスローされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zwkgn.1"  title="原文: client-auth"><code>client-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3uTQuQ.1" title="原文 : ClientAuthentication (REQUIRE, OPTIONAL, NONE)">ClientAuthentication (必須、オプション、なし)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2Qehz5.1"  title="原文: none"><code>none</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2CTK3J.1" title="原文 : Configures whether client authentication will be required or not.">クライアント認証が必要かどうかを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.30"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.213"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.103"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2FntKK.1" title="原文 : Can be used to disable TLS even if keys are configured.">キーが構成されている場合でもTLSを無効にできます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xMi9h.1"  title="原文: session-cache-size"><code>session-cache-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.48"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PC4d.1" title="原文 : Set the size of the cache used for storing SSL session objects. 0 to use the default value.">SSLセッション・オブジェクトの格納に使用されるキャッシュのサイズを設定します。デフォルト値を使用するには、<code>0</code>を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.cqnGh.1"  title="原文: session-timeout-seconds"><code>session-timeout-seconds</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.49"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3JLKYD.1" title="原文 : Set the timeout for the cached SSL session objects, in seconds. 0 to use the default value.">キャッシュされたSSLセッション・オブジェクトのタイムアウトを秒単位で設定します。デフォルト値を使用するには、<code>0</code>を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1m7hUC.1"  title="原文: trust"><code>trust</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK.6" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1CjG5T.1" title="原文 : Set the trust key configuration to be used to validate certificates.">証明書のバリデートに使用するトラスト・キー構成を設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</div>


<h2 id="_http_compression"><span class="merged" id="all.ZWqWG" title="原文 : HTTP Compression">HTTP圧縮</span></h2>
<div class="section">
<p><span class="merged" id="all.4CIO2t.spl1" title="原文 : HTTP compression can improve bandwidth utilization and transfer speeds in certain scenarios.">HTTP圧縮により、特定のシナリオで帯域幅の使用率と転送速度を向上させることができます。</span> <span class="merged" id="all.4CIO2t.spl2" title="原文 : It requires a few extra CPU cycles for compressing and uncompressing, but these can be offset if data is transferred over low-bandwidth network links.">圧縮および圧縮解除にはいくつかの追加のCPUサイクルが必要ですが、低帯域幅のネットワーク・リンクを介してデータが転送される場合は、これらをオフセットできます。</span> </p>

<p><span class="merged" id="all.1vdXZ4.spl1" title="原文 : A client advertises the compression encodings it supports at request time, and the WebServer responds by selecting an encoding it supports and setting it in a header, effectively negotiating the content encoding of the response.">クライアントは、リクエスト時にサポートする圧縮エンコーディングを通知し、WebServerは、サポートするエンコーディングを選択してヘッダーに設定することで応答し、効率的にレスポンスのコンテンツ・エンコーディングを<em>「ネゴシエーション」</em>します。</span> <span class="merged" id="all.1vdXZ4.spl2" title="原文 : If none of the advertised encodings is supported by the WebServer, the response is returned uncompressed.">通知されたエンコーディングのいずれもWebServerでサポートされていない場合、レスポンスは圧縮されずに返されます。</span> </p>


<h3 id="_configuring_http_compression"><span class="merged" id="all.3bg4N2" title="原文 : Configuring HTTP Compression">HTTP圧縮の構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1C7imt.spl1" title="原文 : HTTP compression in the Helidon WebServer is disabled by default.">Helidon WebServerでのHTTP圧縮は、デフォルトでは<em>「無効」</em>です。</span> <span class="merged" id="all.1C7imt.spl2" title="原文 : It can sometimes interfere with certain applications that use streaming, even if a compression encoding has not been negotiated with the client.">圧縮エンコーディングがクライアントとネゴシエーションされていない場合でも、ストリーミングを使用する特定のアプリケーションに干渉することがあります。</span> </p>

<p><span class="merged" id="all.4XPxiL.spl1" title="原文 : It can be enabled either programmatically or via configuration, and it can also be enabled on a per-socket basis.">プログラムまたは構成を介して有効にすることも、ソケット単位で有効にすることもできます。</span> <span class="merged" id="all.4XPxiL.spl2" title="原文 : When configured at the server level, it applies only to the default socket.">サーバー・レベルで構成されている場合、<em>「デフォルト」</em>ソケットにのみ適用されます。</span> </p>

<p><span class="merged" id="all.lqcLj" title="原文 : Programmatically, simply use the enableCompression method during server creation:">プログラム的には、サーバーの作成時に<code>enableCompression</code>メソッドを使用します:</span></p>

<markup
lang="java"

>WebServer.builder()
         .port(8080)
         .routing(...)
         .enableCompression(true)        // compression enabled
         .build()</markup>

<p><span class="merged" id="all.14fr3v" title="原文 : Or use a config file as follows and make sure the WebServer is created using it:">または、次のように構成ファイルを使用し、それを使用してWebServerが作成されていることを確認します:</span></p>

<markup
lang="yaml"
title="WebServer HTTP Compression configuration file <code>application.yaml</code>"
>server:
  port: 8080
  enable-compression: true</markup>

</div>


<h3 id="_http_compression_negotiation"><span class="merged" id="all.4c3bQ5" title="原文 : HTTP Compression Negotiation">HTTP圧縮ネゴシエーション</span></h3>
<div class="section">
<p><span class="merged" id="all.2nlgGL.spl1" title="原文 : HTTP compression negotiation is controlled by clients using the Accept-Encoding header.">HTTP圧縮ネゴシエーションは、<code>Accept-Encoding</code>ヘッダーを使用してクライアントによって制御されます。</span> <span class="merged" id="all.2nlgGL.spl2" title="原文 : The value of this header is a comma-separated list of encodings.">このヘッダーの値は、エンコーディングのカンマ区切りリストです。</span> <span class="merged" id="all.2nlgGL.spl3" title="原文 : The WebServer will select one of these encodings for compression purposes; it currently supports gzip and deflate.">WebServerは、圧縮のためにこれらのエンコーディングのいずれかを選択します。現在、<code>gzip</code>および<code>deflate</code>をサポートしています。</span> </p>

<p><span class="merged" id="all.4Bisrf" title="原文 : For example, if the request includes Accept-Encoding: gzip, deflate, and HTTP compression has been enabled as shown above, the response shall include the header Content-Encoding: gzip and a compressed payload.">たとえば、リクエストに<code>Accept-Encoding: gzip, deflate</code>が含まれ、前述のようにHTTP圧縮が有効になっている場合、レスポンスにはヘッダー<code>Content-Encoding: gzip</code>と圧縮ペイロードが含まれます。</span></p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.30"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.3F6RBt" title="原文 : Here is the code for a minimalist web application that runs on a random free port:">ランダムな空きポートで実行される最小のwebアプリケーションのコードを次に示します:</span></p>

<markup
lang="java"

>public static void main(String[] args) {
    WebServer webServer = WebServer
            .create(Routing.builder()
                            .any((req, res) -&gt; res.send("It works!"))) <span class="conum" data-value="1" />
            .start() <span class="conum" data-value="2" />
            .await(10, TimeUnit.SECONDS); <span class="conum" data-value="3" />

    System.out.println("Server started at: http://localhost:" + webServer.port()); <span class="conum" data-value="4" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3sUheI" title="原文 : For any kind of request, at any path, respond with It works!.">任意のタイプのリクエストについて、任意のパスで<code>It works!</code>を使用して応答します。</span></li>
<li data-value="2"><span class="merged" id="all.4MC0LP.1"  title="原文:: Start the server.">サーバーを起動します。</span></li>
<li data-value="3"><span class="merged" id="all.1WukzX" title="原文 : Wait for the server to start while throwing possible errors as runtime exceptions.">サーバーが起動するまで待機し、実行時例外として発生する可能性のあるエラーをスローします。</span></li>
<li data-value="4"><span class="merged" id="all.3MUwZI" title="原文 : The server is bound to a random free port.">サーバーはランダムな空きポートにバインドされています。</span></li>
</ul>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.26"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4XOypN" title="原文 : Helidon WebServer JavaDoc"><a href="./apidocs/io.helidon.webserver/module-summary.html" target="_blank">Helidon WebServer JavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3zEAKP" title="原文 : Helidon WebServer Static Content JavaDoc"><a href="./apidocs/io.helidon.webserver.staticcontent/module-summary.html" target="_blank">Helidon WebServer静的コンテンツJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3aH2aY" title="原文 : Helidon WebServer Jersey JavaDoc"><a href="./apidocs/io.helidon.webserver.jersey/module-summary.html" target="_blank">Helidon WebServer Jersey JavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.ULhyS" title="原文 : Helidon JSON-B Support JavaDoc"><a href="./apidocs/io.helidon.media.jsonp/module-summary.html" target="_blank">Helidon JSON-BサポートJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4dbbhd" title="原文 : Helidon JSON-P Support JavaDoc"><a href="./apidocs/io.helidon.media.jsonb/module-summary.html" target="_blank">Helidon JSON-PのサポートJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4LcNPi" title="原文 : Helidon Jackson Support JavaDoc"><a href="./apidocs/io.helidon.media.jackson/module-summary.html" target="_blank">Helidon JacksonサポートJavaDoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
