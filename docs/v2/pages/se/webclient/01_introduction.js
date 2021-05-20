<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2nPSDE" title="原文 : WebClient Introduction">WebClient概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.47o4uv.spl1" title="原文 : WebClient is an HTTP client for Helidon SE 2.0.">WebClientは、Helidon SE 2.0のHTTPクライアントです。</span> <span class="merged" id="all.47o4uv.spl2" title="原文 : It handles the responses to the HTTP requests in a reactive way.">HTTPリクエストへのレスポンスを事後対応的に処理します。</span> </p>

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
</ul></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_the_webclient"><span class="merged" id="all.43xHy3" title="原文 : Configuring the WebClient">WebClientの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.278WU3.spl1" title="原文 : The WebClient default configuration may be suitable in most use cases.">WebClientのデフォルト構成は、ほとんどのユースケースに適しています。</span> <span class="merged" id="all.278WU3.spl2" title="原文 : However, you can configure it to suit your specific requirements.">ただし、特定の要件にあわせて構成できます。</span> </p>


<h3 id="_example_of_a_webclient_configuration"><span class="merged" id="all.fNnOj" title="原文 : Example of a WebClient Configuration">WebClient構成の例</span></h3>
<div class="section">
<markup
lang="java"

>Config config = Config.create();
WebClient client = WebClient.builder()
        .baseUri("http://localhost")
        .config(config.get("client"))
        .build();</markup>

</div>

<h3 id="_example_of_yaml_webclient_configuration"><span class="merged" id="all.42fy9h" title="原文 : Example of Yaml WebClient Configuration">Yaml WebClient構成の例</span></h3>
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
<li data-value="4"><span class="merged" id="all.1Hh9ld" title="原文 : Proxy configuration">プロキシ構成</span></li>
<li data-value="5"><span class="merged" id="all.2NIBwt" title="原文 : TLS configuration">TLS構成</span></li>
</ul>
</div>
</div>

<h2 id="_creating_the_webclient"><span class="merged" id="all.msHhD" title="原文 : Creating the WebClient">WebClientの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1Z4gfp.spl1" title="原文 : You can create WebClient by executing WebClient.create() method."><code>WebClient.create()</code>メソッドを実行して、WebClientを作成できます。</span> <span class="merged" id="all.1Z4gfp.spl2" title="原文 : This will create an instance of client with default settings and without a base uri set.">これにより、デフォルト設定で、ベースURIが設定されていないクライアントのインスタンスが作成されます。</span> </p>

<p><span class="merged" id="all.2zcdqZ" title="原文 : To change the default settings and register additional services, you can use simple builder that allows you to customize the client behavior.">デフォルト設定を変更して追加サービスを登録するには、クライアントの動作をカスタマイズできる単純なビルダーを使用できます。</span></p>


<h3 id="_example"><span class="merged" id="all.2xA7W7.4"  title="原文:: Example">Example</span></h3>
<div class="section">
<markup
lang="java"
title="単純なビルダーを使用してWebClientを作成します:"
>WebClient client = WebClient.builder()
        .baseUri("http://localhost")
        .build();</markup>

</div>
</div>

<h2 id="_creating_and_executing_the_webclient_request"><span class="merged" id="all.1gmKmz" title="原文 : Creating and Executing the WebClient Request">WebClientリクエストの作成および実行</span></h2>
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

<h3 id="_example_2"><span class="merged" id="all.2xA7W7.5"  title="原文:: Example">Example</span></h3>
<div class="section">
<markup
lang="java"
title="エンドポイントに対して単純なGETリクエストを実行します:"
>Single&lt;String&gt; response = client.get()
        .path("/endpoint")
        .request(String.class);</markup>

</div>

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
<th><span class="merged" id="all.4JM9z7.13"  title="原文:: Description">説明</span></th>
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
<p><span class="merged" id="all.2K75t1" title="原文 : For more details, see the Request Headers API.">詳細は、<a href="https://helidon.io/docs/latest/apidocs/io/helidon/webserver/RequestHeaders.html" id="" target="_blank" >「リクエスト・ヘッダー」</a> APIを参照してください。</span></p>

</div>
</div>

<h2 id="_adding_json_processing_media_support_to_the_webclient"><span class="merged" id="all.382AZC" title="原文 : Adding JSON Processing Media Support to the WebClient">WebClientへのJSON処理メディア・サポートの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.N4JLk.spl1" title="原文 : JSON Processing (JSON-P) media support is not present in the WebClient by default.">JSON Processing (JSON-P)メディア・サポートは、デフォルトではWebClientに存在しません。</span> <span class="merged" id="all.N4JLk.spl2" title="原文 : So, in this case, you must first register it before making a request.">そのため、この場合、リクエストを行う前に登録する必要があります。</span> <span class="merged" id="all.N4JLk.spl3" title="原文 : This example shows how to register JsonpSupport using the following two methods.">この例では、次のメソッドを使用して<code>JsonpSupport</code>を登録するメソッドを示します。</span> </p>


<h3 id="_example_3"><span class="merged" id="all.2xA7W7.6"  title="原文:: Example">Example</span></h3>
<div class="section">
<markup
lang="java"
title="JSON-PサポートをWebClientに登録します。"
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
title="JSON-Pサポートを特定のリクエストにのみ登録します。"
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
</div>

<h2 id="_maven_coordinates"><span class="merged" id="all.317oeS.13" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2lxcNY.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存性管理を宣言する方法について説明します。</span> <span class="merged" id="all.2lxcNY.spl2" title="原文 : You must declare the following dependency in your project&rsquo;s pom.xml:">プロジェクトのpom.xmlで次の依存性を宣言する必要があります:</span> </p>

<markup
lang="xml"
title="WebClientへの依存性。"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>
</doc-view>
