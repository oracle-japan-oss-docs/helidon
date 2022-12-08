<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2LAv2d" title="原文 : WebServer Access Log">WebServerアクセス・ログ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3F8CBy" title="原文 : Access logging in Helidon is done by a dedicated module that can be added to WebServer and configured.">Helidonでのアクセス・ロギングは、WebServerに追加して構成できる専用モジュールによって行われます。</span></p>

<p><span class="merged" id="all.1ASudW.spl1" title="原文 : Access logging is a Helidon WebServer Service and as such is executed in the order it is registered with WebServer routing.">アクセス・ロギングはHelidon WebServer <code>Service</code>であるため、WebServerルーティングに登録された順序で実行されます。</span> <span class="merged" id="all.1ASudW.spl2" title="原文 : This implies that if you register it last and another Service or Handler finishes the request, the service will not be invoked.">これは、最後に登録し、別の<code>Service</code>または<code>Handler</code>がリクエストを終了した場合、サービスが呼び出されないことを意味します。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_access_log_in_your_code"><span class="merged" id="all.veYmD" title="原文 : Configuring Access Log in your code">コード内のアクセス・ログの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.25Gttx" title="原文 : Access log is configured in your code by registering it as a service with Routing">アクセス・ログは、<code>Routing</code>にサービスとして登録することでコード内に構成されます</span></p>

<markup
lang="java"

>Routing.builder()
    .register(AccessLogSupport.create(config.get("server.access-log")))
    .get("/greet", myService)</markup>

<p><span class="merged" id="all.1hgmN7" title="原文 : The order of registration is significant - make sure AccessLogSupport is registered first (even before security, tracing etc.).">登録の順序は重要です - <code>AccessLogSupport</code>が最初に登録されていることを確認します(セキュリティ、トレースなどの前)。</span></p>

</div>

<h2 id="_configuring_access_log_in_a_configuration_file"><span class="merged" id="all.4ge6uu" title="原文 : Configuring Access Log in a configuration file">構成ファイルでのアクセス・ログの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1FOoX1" title="原文 : Access log can be configured as follows:">アクセス・ログは次のように構成できます:</span></p>

<markup
lang="yaml"
title="Access Log configuration file"
>server:
  port: 8080
  access-log:
    format: "%h %l %u %t %r %s %b %{Referer}i"</markup>

<p><span class="merged" id="all.16o6HQ" title="原文 : All options shown above are also available programmatically when using builder.">前述のすべてのオプションは、ビルダーの使用時にプログラムで使用することもできます。</span></p>

</div>

<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.21"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.vAruj" title="原文 : The following configuration options can be defined:">次の構成オプションを定義できます:</span></p>


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
<th><span class="merged" id="all.4HTTVU" title="原文 : Config key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.7"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.12txOr.4" title="原文 : Builder method">ビルダー・メソッド</span></th>
<th><span class="merged" id="all.4JM9z7.24"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.6"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.33"  title="原文: true"><code>true</code></span></td>
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
<td class=""><span class="merged" id="all.4L3INC"  title="原文: format"><code>format</code></span></td>
<td class=""><span class="merged" id="all.V69kn.10"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.B9r07" title="原文 : helidonLogFormat(), commonLogFormat(), add(AccessLogEntry entry)"><code>helidonLogFormat()</code>, <code>commonLogFormat()</code>, <code>add(AccessLogEntry entry)</code></span></td>
<td class=""><span class="merged" id="all.2OzsUH.spl1" title="原文 : Configuration of access log output, when helidon is defined, the Helidon log format (see below) is used.">アクセス・ログ出力の構成では、<code>helidon</code>が定義されている場合、Helidonログ形式(次を参照)が使用されます。</span> <span class="merged" id="all.2OzsUH.spl2" title="原文 : Can be configured to explicitly define log entries (see below as well)">ログ・エントリを明示的に定義するように構成できます(次も参照)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aPM0d"  title="原文: exclude-paths"><code>exclude-paths</code></span></td>
<td class=""><span class="merged" id="all.2kt7dz.24"  title="原文:: N/A">該当なし</span></td>
<td class=""><span class="merged" id="all.1skXXq"  title="原文: excludePaths(List&lt;String&gt;)"><code>excludePaths(List&lt;String>)</code></span></td>
<td class=""><span class="merged" id="all.1pxeeJ.spl1" title="原文 : List of path patterns to exclude from access log.">アクセス・ログから除外するパス・パターンのリスト。</span> <span class="merged" id="all.1pxeeJ.spl2" title="原文 : Path pattern syntax is as defined in io.helidon.webserver.PathMatcher.">パス・パターンの構文は、<code>io.helidon.webserver.PathMatcher</code>で定義されています。</span> <span class="merged" id="all.1pxeeJ.spl3" title="原文 : Can be used to exclude paths such as /health or /metrics to avoid cluttering log."><code>/health</code>や<code>/metrics</code>などのパスを除外してログが複雑にならないようにするために使用できます。</span> </td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_supported_log_formats"><span class="merged" id="all.FgztW" title="原文 : Supported Log Formats">サポートされているログ形式</span></h2>
<div class="section">

<h3 id="_supported_log_entries"><span class="merged" id="all.plA8l" title="原文 : Supported Log Entries">サポートされるログ・エントリ</span></h3>
<div class="section">
<p><span class="merged" id="all.ktLCj" title="原文 : The following log entries are supported in Helidon:">Helidonでは、次のログ・エントリがサポートされます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1jELq" title="原文 : Config format">構成形式</span></th>
<th><span class="merged" id="all.2YyVUN" title="原文 : Class (to use with builder)">クラス(ビルダーで使用)</span></th>
<th><span class="merged" id="all.4JM9z7.25"  title="原文:: Description">説明</span></th>
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

<h3 id="_helidon_log_format"><span class="merged" id="all.1scEpr" title="原文 : Helidon Log Format">Helidonログ形式</span></h3>
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

<div class="listing">
<markup>192.168.0.104 - [18/Jun/2019:22:28:55 +0200] "GET /greet/test HTTP/1.1" 200 53
0:0:0:0:0:0:0:1 - [18/Jun/2019:22:29:00 +0200] "GET /metrics/vendor HTTP/1.1" 200 1658
0:0:0:0:0:0:0:1 jack [18/Jun/2019:22:29:07 +0200] "PUT /greet/greeting HTTP/1.1" 200 21
0:0:0:0:0:0:0:1 jill [18/Jun/2019:22:29:12 +0200] "PUT /greet/greeting HTTP/1.1" 403 0
0:0:0:0:0:0:0:1 - [18/Jun/2019:22:29:17 +0200] "PUT /greet/greeting HTTP/1.1" 401 0</markup>
</div>

</div>

<h3 id="_common_log_format"><span class="merged" id="all.48UqV6"  title="原文:: Common Log Format">共通ログ・フォーマット</span></h3>
<div class="section">
<p><span class="merged" id="all.3DS5Pq" title="原文 : When format is set to common, the format used is:">formatが<code>common</code>に設定されている場合、使用される形式は次のとおりです:</span></p>

<p><span class="merged" id="all.2d7E0Y"  title="原文: &quot;%h %l %u %t %r %s %b&quot;"><code>"%h %l %u %t %r %s %b"</code></span></p>

<p><span class="merged" id="all.NhCbQ.1" title="原文 : The entries logged:">記録されるエントリは次のとおりです:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1ZDJpH.1"  title="原文:: IP Address">IPアドレス</span>

</li>
<li>
<span class="merged" id="all.4AVKCx"  title="原文:: Client identity">クライアント・アイデンティティ</span>

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
</ol>
<p><span class="merged" id="all.1W3EDd.1" title="原文 : Access log example:">アクセス・ログの例:</span></p>

<div class="listing">
<markup>192.168.0.104   - - [18/Jun/2019:22:28:55 +0200] "GET /greet/test HTTP/1.1" 200 53
0:0:0:0:0:0:0:1 - - [18/Jun/2019:22:29:00 +0200] "GET /metrics/vendor HTTP/1.1" 200 1658
0:0:0:0:0:0:0:1 - jack [18/Jun/2019:22:29:07 +0200] "PUT /greet/greeting HTTP/1.1" 200 21
0:0:0:0:0:0:0:1 - jill [18/Jun/2019:22:29:12 +0200] "PUT /greet/greeting HTTP/1.1" 403 0
0:0:0:0:0:0:0:1 - - [18/Jun/2019:22:29:17 +0200] "PUT /greet/greeting HTTP/1.1" 401 0</markup>
</div>

</div>
</div>

<h2 id="_configuring_access_log_with_java_util_logging"><span class="merged" id="all.1etWp2" title="原文 : Configuring Access Log with Java util logging">Javaユーティリティ・ロギングを使用したアクセス・ログの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3yn53h" title="原文 : To support a separate file for Access log entries, Helidon provides a custom log handler, that extends the FileHandler.">アクセス・ログ・エントリ用に別のファイルをサポートするために、Helidonには、<code>FileHandler</code>を拡張するカスタム・ログ・ハンドラが用意されています。</span></p>

<p><span class="merged" id="all.f91bD" title="原文 : To log to a file access.log with appending records after restart, you can use the following configuration in logging.properties:">再起動後にレコードを追加してファイル<code>access.log</code>にログインするには、<code>logging.properties</code>で次の構成を使用できます:</span></p>

<markup
lang="properties"
title="Logging configuration file"
>io.helidon.webserver.accesslog.AccessLogHandler.level=INFO
io.helidon.webserver.accesslog.AccessLogHandler.pattern=access.log
io.helidon.webserver.accesslog.AccessLogHandler.append=true

io.helidon.webserver.AccessLog.level=INFO
io.helidon.webserver.AccessLog.useParentHandlers=false
io.helidon.webserver.AccessLog.handlers=io.helidon.webserver.accesslog.AccessLogHandler</markup>

</div>
</doc-view>
