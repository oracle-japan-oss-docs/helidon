<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2mXgqb.1" title="原文 : WebServer Configuration">WebServerの構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.Sz4RC" title="原文 : Configure the WebServer either programmatically, or by the Helidon configuration framework.">プログラムによって、またはHelidon構成フレームワークによって、WebServerを構成します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_the_webserver_in_your_code"><span class="merged" id="all.3Ngwxt" title="原文 : Configuring the WebServer in your code">コードでのWebServerの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2Ishsa" title="原文 : The easiest way to configure the WebServer is in your application code.">WebServerを構成する最も簡単な方法は、アプリケーション・コードを使用することです。</span></p>

<markup
lang="java"

>WebServer webServer = WebServer.builder()
      .bindAddress(InetAddress.getLocalHost())
      .port(8080)
      .build();</markup>

</div>

<h2 id="_configuring_the_webserver_in_a_configuration_file"><span class="merged" id="all.3yeSxy" title="原文 : Configuring the WebServer in a configuration file">構成ファイルでのWebServerの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4bpKp9.1" title="原文 : You can also define the configuration in a file.">ファイルで構成を定義することもできます。</span></p>

<markup
lang="yaml"
title="WebServer構成ファイル<code>application.yaml</code>"
>server:
  port: 8080
  bind-address: "0.0.0.0"</markup>

<p><span class="merged" id="all.1Cq2QG.2" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="クラスパスにある<code>application.yaml</code>ファイルを使用したWebServerの初期化"
>Config config = Config.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.create(routing, config.get("server")); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2JkrRu" title="原文 : application.yaml is a default configuration source loaded when YAML support is on classpath, so we can just use Config.create()"><code>application.yaml</code>はYAMLサポートがクラスパスにある場合にロードされるデフォルトの構成ソースであるため、<code>Config.create()</code>のみを使用できます</span></li>
<li data-value="2"><span class="merged" id="all.IODyn" title="原文 : Server expects the configuration tree located on the node of server">サーバーは、<code>server</code>のノードにある構成ツリーを予期しています</span></li>
</ul>
</div>

<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.20"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.EJmRa" title="原文 : See all configuration options here.">すべての構成オプション<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" id="" target="_blank" >「こちら」</a>を参照してください。</span></p>

<p><span class="merged" id="all.1lL06P" title="原文 : Available socket configuration options:">使用可能なソケット構成オプション:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.28YvFB.2" title="原文 : Configuration key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.6"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.2fU2gv.3"  title="原文:: Java type">Javaタイプ</span></th>
<th><span class="merged" id="all.4JM9z7.16"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.kTY2u"  title="原文:: port"><strong><code>port</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.N4Pvl"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.kI4gC" title="原文 : Port to open server socket on, defaults to an available ephemeral port">サーバー・ソケットを開くポート。デフォルトは使用可能なエフェメラル・ポートです</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.U8uoh" title="原文 : bind-address"><strong><code>bind-address</code></strong></span></td>
<td class=""><span class="merged" id="all.phkHT" title="原文 : all local addresses">すべてのローカル・アドレス</span></td>
<td class=""><span class="merged" id="all.2nneiF"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.43fjaf" title="原文 : Address to listen on (may be an IPV6 address as well)">リスニングするアドレス(IPV6アドレスの場合もあります)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3QihlU"  title="原文:: backlog"><strong><code>backlog</code></strong></span></td>
<td class=""><span class="merged" id="all.lhex8"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.1"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.3JGETl" title="原文 : Maximum length of the queue of incoming connections on the server socket.">サーバー・ソケット上の受信接続のキューの最大長。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Pfmy7"  title="原文:: max-header-size"><strong><code>max-header-size</code></strong></span></td>
<td class=""><span class="merged" id="all.4aewGZ"  title="原文: 8192"><code>8192</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.2"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.Xsyp0.spl1" title="原文 : Maximal number of bytes of all header values combined.">結合されるすべてのヘッダー値の最大バイト数。</span> <span class="merged" id="all.Xsyp0.spl2" title="原文 : Returns 400 if headers are bigger">ヘッダーが大きい場合は<code>400</code>を返します</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.75r38" title="原文 : max-initial-line-length"><strong><code>max-initial-line-length</code></strong></span></td>
<td class=""><span class="merged" id="all.2q9RcG"  title="原文: 4096"><code>4096</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.3"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.NPXyQ.spl1" title="原文 : Maximal number of characters in the initial HTTP line.">最初のHTTP行の最大文字数。</span> <span class="merged" id="all.NPXyQ.spl2" title="原文 : Returns 400 if line is longer">行が長い場合は<code>400</code>を返します</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3PmeYE" title="原文 : timeout-millis"><strong><code>timeout-millis</code></strong></span></td>
<td class=""><span class="merged" id="all.1MBfrO"  title="原文:: no timeout">タイム・アウトはなし</span></td>
<td class=""><span class="merged" id="all.15f2Ma"  title="原文:: long">long</span></td>
<td class=""><span class="merged" id="all.1ZzJSO" title="原文 : Server socket timeout.">サーバー・ソケット・タイムアウト。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Gc8Oe"  title="原文:: receive-buffer-size"><strong><code>receive-buffer-size</code></strong></span></td>
<td class=""><span class="merged" id="all.1ewFos" title="原文 : implementation default">実装のデフォルト</span></td>
<td class=""><span class="merged" id="all.N4Pvl.4"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.1vQ37R" title="原文 : Proposed value of the TCP receive window that is advertised to the remote peer on the server socket.">サーバー・ソケット上のリモート・ピアに通知されるTCP受信ウィンドウの推奨値。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FMM0M"  title="原文:: name"><strong><code>name</code></strong></span></td>
<td class=""><span class="merged" id="all.iz5UI" title="原文 : @default for default socket">デフォルト・ソケット用の<code>@default</code></span></td>
<td class=""><span class="merged" id="all.2nneiF.1"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.3NiYia" title="原文 : Name used for named sockets, to support additional server sockets (and their named routing)">追加のサーバー・ソケット(およびその名前付きルーティング)をサポートするために名前付きソケットに使用される名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OQZDU"  title="原文:: enabled"><strong><code>enabled</code></strong></span></td>
<td class=""><span class="merged" id="all.xEiHU.29"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.2"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.2pXlrW" title="原文 : A socket can be disabled through configuration, in which case it is never opened">ソケットは構成を介して無効にできます。その場合、ソケットは開かれません</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Z7ZCU" title="原文 : max-chunk-size"><strong><code>max-chunk-size</code></strong></span></td>
<td class=""><span class="merged" id="all.4aewGZ.1"  title="原文: 8192"><code>8192</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.5"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.4RF1T" title="原文 : Maximal size of a chunk to read from incoming requests">受信リクエストから読み取るチャンクの最大サイズ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17Vh0q" title="原文 : max-payload-size"><strong><code>max-payload-size</code></strong></span></td>
<td class=""><span class="merged" id="all.26voHa"  title="原文: -1"><code>-1</code></span></td>
<td class=""><span class="merged" id="all.15f2Ma.1"  title="原文:: long">long</span></td>
<td class=""><span class="merged" id="all.3ZrEMs.spl1" title="原文 : Maximal size of a request payload in bytes.">リクエスト・ペイロードの最大サイズ(バイト)。</span> <span class="merged" id="all.3ZrEMs.spl2" title="原文 : If exceeded a 413 error is returned.">この値を超えると、413エラーが返されます。</span> <span class="merged" id="all.3ZrEMs.spl3" title="原文 : Negative value means no limit.">負の値は制限がないことを意味します。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Tpqna" title="原文 : validate-headers"><strong><code>validate-headers</code></strong></span></td>
<td class=""><span class="merged" id="all.xEiHU.30"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.3"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.WUWjV" title="原文 : Whether to validate header names, if they contain illegal characters.">ヘッダー名に無効な文字が含まれている場合に検証するかどうか。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dZn1w" title="原文 : initial-buffer-size"><strong><code>initial-buffer-size</code></strong></span></td>
<td class=""><span class="merged" id="all.1XYYUd"  title="原文: 128"><code>128</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.6"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.1oWBVm" title="原文 : Initial size of buffer used to parse HTTP line and headers">HTTP行およびヘッダーの解析に使用されるバッファの初期サイズ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.315yHv"  title="原文:: tls"><strong><code>tls</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3ChfkA.2"  title="原文:: Object">オブジェクト</span></td>
<td class=""><span class="merged" id="all.345Acg" title="原文 : Configuration of TLS, please see our TLS example in repository">TLSの構成については、リポジトリ内のTLSの例を参照してください</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
