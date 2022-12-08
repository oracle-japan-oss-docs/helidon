<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.66"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.63" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.48" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.44" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3MxYD0" title="原文 : Configuring the WebClient"><router-link @click.native="this.scrollFix('#_configuring_the_webclient')" to="#_configuring_the_webclient">WebClientの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.41" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.24" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.87"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4dojxr.spl1" title="原文 : WebClient is an HTTP client of Helidon SE.">WebClientは、Helidon SEのHTTPクライアントです。</span> <span class="merged" id="all.4dojxr.spl2" title="原文 : It handles the responses to the HTTP requests in a reactive way.">HTTPリクエストへのレスポンスを事後対応的に処理します。</span> </p>

<p><span class="merged" id="all.46Z5LG" title="原文 : Helidon WebClient provides the following features:">Helidon WebClientには、次の機能があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3KV5zQ.spl1" title="原文 : Reactive approach Allows you to execute HTTP requests and handle the responses without having to wait for the server response."><strong>「リアクティブ・アプローチ」</strong><br>サーバー・レスポンスを待たずに、HTTPリクエストを実行してレスポンスを処理できます。</span> <span class="merged" id="all.3KV5zQ.spl2" title="原文 : When the response is received, the client requests only the amount of data that it can handle at that time.">レスポンスを受信すると、クライアントはその時点で処理できるデータ量のみをリクエストします。</span> <span class="merged" id="all.3KV5zQ.spl3" title="原文 : So, there is no overflow of memory.">したがって、メモリーのオーバーフローはありません。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2yvolj.spl1" title="原文 : Builder-like setup and execution Creates every client and request as a builder pattern."><strong>「ビルダーに似た設定と実行」</strong><br>すべてのクライアントおよびリクエストをビルダー・パターンとして作成します。</span> <span class="merged" id="all.2yvolj.spl2" title="原文 : This improves readability and code maintenance.">これにより、読みやすさとコード・メンテナンスが向上します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1wNOM1" title="原文 : Redirect chain Follows the redirect chain and perform requests on the correct endpoint by itself."><strong>「リダイレクト・チェーン」</strong><br>リダイレクト・チェーンに従い、適切なエンドポイントでのみリクエストを実行します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3uSpEN" title="原文 : Tracing, metrics and security propagation Automatically propagates the configured tracing, metrics and security settings of the Helidon WebServer to the WebClient and uses them during request and response."><strong>「トレース、メトリクスおよびセキュリティ伝播」</strong><br>Helidon WebServerの構成済トレース、メトリクスおよびセキュリティ設定をWebClientに自動的に伝播し、リクエストおよびレスポンス時に使用します。</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.60"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.453hu4" title="原文 : To enable WebClient add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">WebClientを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.64"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_creating_the_webclient"><span class="merged" id="all.msHhD" title="原文 : Creating the WebClient">WebClientの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1Z4gfp.spl1" title="原文 : You can create WebClient by executing WebClient.create() method."><code>WebClient.create()</code>メソッドを実行して、WebClientを作成できます。</span> <span class="merged" id="all.1Z4gfp.spl2" title="原文 : This will create an instance of client with default settings and without a base uri set.">これにより、デフォルト設定で、ベースURIが設定されていないクライアントのインスタンスが作成されます。</span> </p>

<p><span class="merged" id="all.2zcdqZ" title="原文 : To change the default settings and register additional services, you can use simple builder that allows you to customize the client behavior.">デフォルト設定を変更して追加サービスを登録するには、クライアントの動作をカスタマイズできる単純なビルダーを使用できます。</span></p>

<markup
lang="java"
title="Create a WebClient with simple builder:"
>WebClient client = WebClient.builder()
        .baseUri("http://localhost")
        .build();</markup>

</div>


<h3 id="_creating_and_executing_the_webclient_request"><span class="merged" id="all.1gmKmz" title="原文 : Creating and Executing the WebClient Request">WebClientリクエストの作成および実行</span></h3>
<div class="section">
<p><span class="merged" id="all.2KFeNm" title="原文 : WebClient executes requests to the target endpoints and returns specific response type.">WebClientは、ターゲット・エンドポイントに対してリクエストを実行し、特定のレスポンス・タイプを返します。</span></p>

<p><span class="merged" id="all.riTNf" title="原文 : It offers variety of methods to specify the type of request you want to execute:">実行するリクエストのタイプを指定する様々なメソッドが用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2q9zkA"  title="原文: put()"><code>put()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1PmUOg"  title="原文: get()"><code>get()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3EzeLs"  title="原文: method(String methodName)"><code>method(String methodName)</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2LINO0" title="原文 : These methods set specific request type based on their name or parameter to the new instance of WebClientRequesBuilder and return this instance based on configurations for specific request type.">これらのメソッドは、名前またはパラメータに基づいて特定のリクエスト・タイプを<code>WebClientRequesBuilder</code>の新しいインスタンスに設定し、特定のリクエスト・タイプの構成に基づいてこのインスタンスを返します。</span></p>

<p><span class="merged" id="all.3h0jt4" title="原文 : You can set configuration for every request type before it is sent as described in ."><router-link @click.native="this.scrollFix('#_request_configuration')" to="#_request_configuration"></router-link>で説明されているように、送信前にすべてのリクエスト・タイプに対して構成を設定できます。</span></p>

<p><span class="merged" id="all.1GxBUq" title="原文 : For the final execution, use the following methods with variations and different parameters:">最後の実行では、次のメソッドをバリエーションおよび様々なパラメータとともに使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Erb3y"  title="原文: Single&lt;T&gt; submit(Object entity, Class&lt;T&gt; responseType)"><code>Single&lt;T> submit(Object entity, Class&lt;T> responseType)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.20yZEc"  title="原文: Single&lt;T&gt; request(Class&lt;T&gt; responseType)"><code>Single&lt;T> request(Class&lt;T> responseType)</code></span></p>

</li>
</ul>

<markup
lang="java"
title="Execute a simple GET request to endpoint:"
>Single&lt;String&gt; response = client.get()
        .path("/endpoint")
        .request(String.class);</markup>

</div>

</div>


<h2 id="_configuring_the_webclient"><span class="merged" id="all.43xHy3" title="原文 : Configuring the WebClient">WebClientの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4MReoI" title="原文 : The class responsible for WebClient configuration is:">WebClient構成を担当するクラスは、次のとおりです:</span></p>

<p><span class="merged" id="all.2Sjvs0.1" title="原文 : Configuration of the HTTP client">HTTPクライアントの構成</span></p>

<p><span class="merged" id="all.eoVIq.1" title="原文 : Type: io.helidon.webclient.WebClientConfiguration">タイプ: <a href="./apidocs/io.helidon.webclient/io/helidon/webclient/WebClientConfiguration.html" target="_blank">io.helidon.webclient.WebClientConfiguration</a></span></p>

<p><span class="merged" id="all.3fstMN.1" title="原文 : This is a standalone configuration type, prefix from configuration root: client">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>client</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.105"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.106" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.129"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.124"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.131"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.139"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3QxsGz.1"  title="原文: connect-timeout-millis"><code>connect-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.43"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xzmO.2"  title="原文: 60000"><code>60000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4FK4qc.1" title="原文 : Sets new connection timeout of the request.">リクエストの新しい接続タイムアウトを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qqvlY.1"  title="原文: cookies.automatic-store-enabled"><code>cookies.automatic-store-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.208"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1TfWdT.1" title="原文 : Whether to allow automatic cookie storing">cookieの自動格納を許可するかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.mROOo.1"  title="原文: cookies.default-cookies"><code>cookies.default-cookies</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.399TfH.2"  title="原文:: Map">マップ</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2gH13q.1.spl1" title="原文 : Default cookies to be used in each request.">各リクエストで使用されるデフォルトのcookie。</span> <span class="merged" id="all.2gH13q.1.spl2" title="原文 : Each list entry has to have &quot;name&quot; and &quot;value&quot; node">各リスト・エントリには「name」および「value」ノードが必要です</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SV0kY.1"  title="原文: follow-redirects"><code>follow-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.209"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.87"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3rNAWb.1" title="原文 : Whether to follow any response redirections or not.">レスポンス方向に従うかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.VPmDa.4"  title="原文: headers"><code>headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.399TfH.3"  title="原文:: Map">マップ</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.39lP8L.1.spl1" title="原文 : Default headers to be used in each request.">各リクエストで使用されるデフォルト・ヘッダー。</span> <span class="merged" id="all.39lP8L.1.spl2" title="原文 : Each list entry has to have &quot;name&quot; and &quot;value&quot; node">各リスト・エントリには「name」および「value」ノードが必要です</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.5"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.80"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4XADpA.7"  title="原文: 5"><code>5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sRpMV.1" title="原文 : Sets max number of followed redirects.">続くリダイレクトの最大数を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DSTeZ.1"  title="原文: media-support"><code>media-support</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1SwiJp.1" title="原文 : MediaContext"><router-link to="/config/io_helidon_media_common_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MC3Gg.1"  title="原文: proxy"><code>proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2iwerL.1" title="原文 : Proxy"><router-link to="/config/io_helidon_webclient_Proxy">プロキシ</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4mOC6.1" title="原文 : Sets new request proxy.">新しいリクエスト・プロキシを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jwl7Q.1"  title="原文: read-timeout-millis"><code>read-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.44"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2xWSpi.1"  title="原文: 600000"><code>600000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.oJM9I.1" title="原文 : Sets new read timeout of the response.">レスポンスの新しい読取りタイムアウトを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CyX3F.1"  title="原文: relative-uris"><code>relative-uris</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.210"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.88"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LdQgO.1" title="原文 : Can be set to true to force the use of relative URIs in all requests, regardless of the presence or absence of proxies or no-proxy lists.">プロキシまたは非プロキシ・リストが存在するかどうかに関係なく、すべてのリクエストで相対URIを強制的に使用するように<code>true</code>に設定できます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.7"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yF3lC.1" title="原文 : WebClientTls"><router-link to="/config/io_helidon_webclient_WebClientTls">WebClientTls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Kq4si.1" title="原文 : New TLS configuration.">新しいTLS構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QKN54.2"  title="原文: uri"><code>uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.352"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1U5Qc9.1" title="原文 : Base uri for each request.">各リクエストのベースURI。</span></p>

<markup>@return updated builder instance</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1lbO0E.1"  title="原文: user-agent"><code>user-agent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.353"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.eDNda.1" title="原文 : Name of the user agent which should be used.">使用するユーザー・エージェントの名前。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_example_of_a_webclient_runtime_configuration"><span class="merged" id="all.1WRyfS" title="原文 : Example of a WebClient Runtime Configuration">WebClientランタイム構成の例</span></h3>
<div class="section">
<markup
lang="java"

>Config config = Config.create();
WebClient client = WebClient.builder()
        .baseUri("http://localhost")
        .config(config.get("client"))
        .build();</markup>

</div>


<h3 id="_example_of_a_webclient_yaml_configuration"><span class="merged" id="all.1OEozh" title="原文 : Example of a WebClient YAML Configuration">WebClient YAML構成の例</span></h3>
<div class="section">
<markup
lang="java"

>client:
  connect-timeout-millis: 2000
  read-timeout-millis: 2000
  follow-redirects: true <span class="conum" data-value="1" />
  max-redirects: 5
  cookies:
    automatic-store-enabled: true
    default-cookies:
      - name: "env"
        value: "dev"
  headers:
    - name: "Accept"
      value: ["application/json","text/plain"] <span class="conum" data-value="2" />
  services: <span class="conum" data-value="3" />
    config:
      metrics:
        - methods: ["PUT", "POST", "DELETE"]
        - type: METER
          name-format: "client.meter.overall"
        - type: TIMER
          # meter per method
          name-format: "client.meter.%1$s"
        - methods: ["GET"]
          type: COUNTER
          errors: false
          name-format: "client.counter.%1$s.success"
          description: "Counter of successful GET requests"
        - methods: ["PUT", "POST", "DELETE"]
          type: COUNTER
          success: false
          name-format: "wc.counter.%1$s.error"
          description: "Counter of failed PUT, POST and DELETE requests"
        - methods: ["GET"]
          type: GAUGE_IN_PROGRESS
          name-format: "client.inprogress.%2$s"
          description: "In progress requests to host"
      tracing:
  proxy: <span class="conum" data-value="4" />
    use-system-selector: false
    host: "hostName"
    port: 80
    no-proxy: ["localhost:8080", ".helidon.io", "192.168.1.1"]
  tls: <span class="conum" data-value="5" />
    server:
      trust-all: true
      disable-hostname-verification: true
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "client.p12"
    client:
      keystore:
        passphrase: "password"
        resource:
          resource-path: "client.p12"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.WPIjH" title="原文 : Client functional settings">クライアントの機能設定</span></li>
<li data-value="2"><span class="merged" id="all.3IghP4" title="原文 : Default client headers and cookies">デフォルトのクライアント・ヘッダーおよびcookie</span></li>
<li data-value="3"><span class="merged" id="all.1DI9fz" title="原文 : Client service configuration">クライアント・サービス構成</span></li>
<li data-value="4"><span class="merged" id="all.1Hh9ld"  title="原文:: Proxy configuration">プロキシ構成</span></li>
<li data-value="5"><span class="merged" id="all.2NIBwt" title="原文 : TLS configuration">TLS構成</span></li>
</ul>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.45"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_request_configuration"><span class="merged" id="all.3KLTx0"  title="原文:: Request Configuration">リクエスト構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2JqPUo" title="原文 : The request settings are based on the following optional parameters, and change when a specific request is executed.">リクエスト設定は次のオプション・パラメータに基づいており、特定のリクエストが実行されると変更されます。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.35CVhz.1"  title="原文:: Parameter">パラメータ</span></th>
<th><span class="merged" id="all.4JM9z7.40"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1zkQyZ"  title="原文: uri(&quot;http://example.com&quot;)"><code>uri("http://example.com")</code></span></td>
<td class=""><span class="merged" id="all.3pgpHU" title="原文 : Overrides baseUri from WebClient">WebClientからのbaseUriのオーバーライド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Bz4xJ"  title="原文: path(&quot;/path&quot;)"><code>path("/path")</code></span></td>
<td class=""><span class="merged" id="all.jKtzF" title="原文 : Adds path to the uri">URIにパスを追加</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.43mncu"  title="原文: queryParam(&quot;query&quot;, &quot;parameter&quot;)"><code>queryParam("query", "parameter")</code></span></td>
<td class=""><span class="merged" id="all.1MqhSV" title="原文 : Adds query parameter to the request">問合せパラメータをリクエストに追加</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DlrF3"  title="原文: fragment(&quot;someFragment&quot;)"><code>fragment("someFragment")</code></span></td>
<td class=""><span class="merged" id="all.2tYNpm" title="原文 : Adds fragment to the request">リクエストにフラグメントを追加</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Uktr8"  title="原文: headers(headers → headers.addAccept(MediaType.APPLICATION_JSON))"><code>headers(headers → headers.addAccept(MediaType.APPLICATION_JSON))</code></span></td>
<td class=""><span class="merged" id="all.2Bb9cV" title="原文 : Adds header to the request">リクエストにヘッダーを追加</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1gPrBE.spl1" title="原文 : WebClientRequestBuilder class also provides specific header methods that help the user to set a particular header."><code>WebClientRequestBuilder</code>クラスには、ユーザーが特定のヘッダーを設定するのに役立つ特定のヘッダー・メソッドも用意されています。</span> <span class="merged" id="all.1gPrBE.spl2"  title="原文:: The methods are:">方法は次のとおりです。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.29p0L3" title="原文 : contentType (MediaType contentType)"><code>contentType</code> (MediaType contentType)</span></p>

</li>
<li>
<p><span class="merged" id="all.4f5puq" title="原文 : accept (MediaType…​ mediaTypes)"><code>accept</code> (MediaType… mediaTypes)</span></p>

</li>
</ul>

<p><span class="merged" id="all.CtbY9" title="原文 : For more details, see the Request Headers API.">詳細は、<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/RequestHeaders.html" target="_blank">「リクエスト・ヘッダー」</a> APIを参照してください。</span></p>

</div>


<h3 id="_adding_json_processing_media_support_to_the_webclient"><span class="merged" id="all.382AZC" title="原文 : Adding JSON Processing Media Support to the WebClient">WebClientへのJSON処理メディア・サポートの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.N4JLk.spl1" title="原文 : JSON Processing (JSON-P) media support is not present in the WebClient by default.">JSON Processing (JSON-P)メディア・サポートは、デフォルトではWebClientに存在しません。</span> <span class="merged" id="all.N4JLk.spl2" title="原文 : So, in this case, you must first register it before making a request.">そのため、この場合、リクエストを行う前に登録する必要があります。</span> <span class="merged" id="all.N4JLk.spl3" title="原文 : This example shows how to register JsonpSupport using the following two methods.">この例では、次のメソッドを使用して<code>JsonpSupport</code>を登録するメソッドを示します。</span> </p>

<markup
lang="java"
title="Register JSON-P support to the WebClient."
>WebClient.builder()
        .baseUri("http://localhost")
        .addReader(JsonpSupport.reader()) <span class="conum" data-value="1" />
        .addWriter(JsonpSupport.writer()) <span class="conum" data-value="2" />
        .addMediaService(JsonpSupport.create()) <span class="conum" data-value="3" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1zFMoP" title="原文 : Adds JSON-P reader to all client requests.">JSON-Pリーダーをすべてのクライアント・リクエストに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.2SGCue" title="原文 : Adds JSON-P writer to all client requests.">JSON-Pライターをすべてのクライアント・リクエストに追加します。</span></li>
<li data-value="3"><span class="merged" id="all.2JHXsb" title="原文 : Adds JSON-P writer and reader to all client requests.">JSON-Pライターおよびリーダーをすべてのクライアント・リクエストに追加します。</span></li>
</ul>

<markup
lang="java"
title="Register JSON-P support only to the specific request."
>WebClient webClient = WebClient.create();

WebClientRequestBuilder requestBuilder = webClient.get();
requestBuilder.writerContext().registerWriter(JsonSupport.writer()); <span class="conum" data-value="1" />
requestBuilder.readerContext().registerReader(JsonSupport.reader()); <span class="conum" data-value="2" />

requestBuilder.request(JsonObject.class)</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1QJP8I" title="原文 : Adds JSON-P writer only to this request.">JSON-Pライターのみをこのリクエストに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.3ikIGE" title="原文 : Adds JSON-P reader only to this request.">JSON-Pリーダーのみをこのリクエストに追加します。</span></li>
</ul>

</div>


<h3 id="_webclient_tls_setup"><span class="merged" id="all.16WGtx" title="原文 : WebClient TLS setup">WebClient TLS設定</span></h3>
<div class="section">
<p><span class="merged" id="all.4IDcI4" title="原文 : Configure TLS either programmatically or by the Helidon configuration framework.">プログラムまたはHelidon構成フレームワークによってTLSを構成します。</span></p>


<h4 id="_configuring_tls_in_your_code"><span class="merged" id="all.2cogWe" title="原文 : Configuring TLS in your code">コードでのTLSの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2AMEVC" title="原文 : One way to configure TLS in WebClient is in your application code as shown below.">WebClientでTLSを構成する1つの方法は、次に示すようにアプリケーション・コードにあります。</span></p>

<markup
lang="java"

>KeyConfig keyConfig = KeyConfig.keystoreBuilder()
                //Whether this keystore is also trust store
                .trustStore()
                //Keystore location/name
                .keystore(Resource.create("client.p12"))
                //Password to the keystore
                .keystorePassphrase("password")
                .build();

WebClient.builder()
         .tls(WebClientTls.builder()
               .certificateTrustStore(keyConfig)
               .clientKeyStore(keyConfig)
               .build())
         .build();</markup>

</div>


<h4 id="_configuring_tls_in_the_config_file"><span class="merged" id="all.2x0R1m" title="原文 : Configuring TLS in the config file">構成ファイルでのTLSの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2kEnyb" title="原文 : Another way to configure TLS in WebClient is through the application.yaml configuration file.">WebClientでTLSを構成するもう1つの方法は、<code>application.yaml</code>構成ファイルを使用することです。</span></p>

<markup
lang="yaml"
title="WebClient TLS configuration file <code>application.yaml</code>"
>webclient:
  tls:
    #Server part defines settings for server certificate validation and truststore
    server:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "keystore.p12"
    #Client part defines access to the keystore with client private key or certificate
    client:
      keystore:
        passphrase: "password"
        resource:
          resource-path: "keystore.p12"</markup>

<p><span class="merged" id="all.1Cq2QG.1" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="WebClient initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebClient webClient = WebClient.create(config.get("webclient"));</markup>

<p><span class="merged" id="all.RC1ee" title="原文 : Or you can only create WebClientTls instance based on the config file.">または、構成ファイルに基づいてのみWebClientTlsインスタンスを作成できます。</span></p>

<markup
lang="java"
title="WebClientTls instance based on <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebClientTls.builder()
    .config(config.get("webclient.tls"))
    .build();</markup>

</div>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.25"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.mCuYD" title="原文 : Helidon WebClient JavaDoc"><a href="https://helidon.io/docs/v2/apidocs/io.helidon.webclient/module-summary.html" target="_blank">Helidon WebClient JavaDoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
