<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.77"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.75" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.55" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.52" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3MxYD0" title="原文 : Configuring the WebClient"><router-link @click.native="this.scrollFix('#_configuring_the_webclient')" to="#_configuring_the_webclient">WebClientの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.42" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.28" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.99"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.78ElO.spl1" title="原文 : WebClient is an HTTP client for Helidon SE.">WebClientは、Helidon SEのHTTPクライアントです。</span> <span class="merged" id="all.78ElO.spl2" title="原文 : It can be used to send requests and retrieve corresponding responses in a programmatic way.">プログラム的な方法でリクエストを送信したり、対応するレスポンスを取得したりするために使用できます。</span> </p>

<p><span class="merged" id="all.46Z5LG" title="原文 : Helidon WebClient provides the following features:">Helidon WebClientには、次の機能があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2aJGih.spl1" title="原文 : Blocking approach The Webclient uses the blocking approach to synchronously process a request and its correspond response."><strong>「ブロック・アプローチ」</strong><br>Webクライアントは、ブロック・アプローチを使用して、リクエストとその対応するレスポンスを同期的に処理します。</span> <span class="merged" id="all.2aJGih.spl2" title="原文 : Both HTTP/1.1 and HTTP/2 request and response will run in the thread of the user."><code>HTTP/1.1</code>および<code>HTTP/2</code>リクエストとレスポンスの両方が、ユーザーのスレッドで実行されます。</span> <span class="merged" id="all.2aJGih.spl3" title="原文 : Additionally, for HTTP/2, virtual thread is employed to manage the connection.">また、<code>HTTP/2</code>の場合は、接続の管理に仮想スレッドが使用されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2yvolj.spl1" title="原文 : Builder-like setup and execution Creates every client and request as a builder pattern."><strong>「ビルダーに似た設定と実行」</strong><br>すべてのクライアントおよびリクエストをビルダー・パターンとして作成します。</span> <span class="merged" id="all.2yvolj.spl2" title="原文 : This improves readability and code maintenance.">これにより、読みやすさとコード・メンテナンスが向上します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1wNOM1" title="原文 : Redirect chain Follows the redirect chain and perform requests on the correct endpoint by itself."><strong>「リダイレクト・チェーン」</strong><br>リダイレクト・チェーンに従い、適切なエンドポイントでのみリクエストを実行します。</span></p>

</li>
<li>
<p><span class="merged" id="all.31UklQ" title="原文 : Tracing and security propagation Automatically propagates the configured tracing and security settings of the Helidon WebServer to the WebClient and uses them during request and response."><strong>「トレースとセキュリティの伝播」</strong><br>Helidon WebServerの構成済トレースおよびセキュリティ設定をWebClientに自動的に伝播し、リクエストおよびレスポンス時にそれらを使用します。</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.69"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.453hu4" title="原文 : To enable WebClient add the following dependency to your project’s pom.xml (see Managing Dependencies).">WebClientを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4AeY65" title="原文 : The helidon-webclient dependency has built-in support for HTTP/1.1."><code>helidon-webclient</code>依存関係には、<code>HTTP/1.1</code>の組込みサポートがあります。</span></p>

<p><span class="merged" id="all.1OcNk8" title="原文 : If support for HTTP/2 is a requirement, below dependency needs to be added:"><code>HTTP/2</code>のサポートが要件である場合、次の依存関係を追加する必要があります:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-http2&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.71"  title="原文:: Usage">使用</span></h2>
<div class="section">

<h3 id="_instantiating_the_webclient"><span class="merged" id="all.43ZOCU" title="原文 : Instantiating the WebClient">WebClientのインスタンス化</span></h3>
<div class="section">
<p><span class="merged" id="all.3k70X3" title="原文 : You can create an instance of a WebClient by executing WebClient.create() which will have default settings and without a base uri set.">WebClientのインスタンスを作成するには、デフォルト設定を持ち、ベースURIが設定されていない<code>WebClient.create()</code>を実行します。</span></p>

<p><span class="merged" id="all.2zcdqZ" title="原文 : To change the default settings and register additional services, you can use simple builder that allows you to customize the client behavior.">デフォルト設定を変更して追加サービスを登録するには、クライアントの動作をカスタマイズできる単純なビルダーを使用できます。</span></p>

<markup
lang="java"
title="Create a WebClient with simple builder:"
>WebClient client = WebClient.builder()
        .baseUri("http://localhost")
        .build();</markup>

</div>


<h3 id="_creating_the_request"><span class="merged" id="all.2BbeTk"  title="原文:: Creating the Request"> リクエストの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.3tzGlQ.spl1" title="原文 : WebClient offers a set of request methods that are used to specify the type of action to be performed on a given resource.">WebClientは、特定のリソースに対して実行されるアクションのタイプを指定するために使用される一連のリクエスト・メソッドを提供します。</span> <span class="merged" id="all.3tzGlQ.spl2" title="原文 : Below are some examples of request methods:">次に、リクエスト・メソッドの例を示します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1PmUOg"  title="原文: get()"><code>get()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1ix3UO"  title="原文: post()"><code>post()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2q9zkA"  title="原文: put()"><code>put()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3EzeLs"  title="原文: method(String methodName)"><code>method(String methodName)</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.DkpNZ.spl1" title="原文 : Check out HttpClient API to learn more about request methods.">リクエスト・メソッドの詳細は、<a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpClient.html" target="_blank">HttpClient</a> APIを参照してください。</span> <span class="merged" id="all.DkpNZ.spl2" title="原文 : These methods will create a new instance of HttpClientRequest which can then be configured to add optional settings that will customize the behavior of the request.">これらのメソッドは、<a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpClientRequest.html" target="_blank">HttpClientRequest</a>の新しいインスタンスを作成します。その後、リクエストの動作をカスタマイズするオプション設定を追加するように構成できます。</span> </p>

</div>


<h3 id="_customizing_the_request"><span class="merged" id="all.1qEukM" title="原文 : Customizing the Request">リクエストのカスタマイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.YODg3.spl1" title="原文 : Configuration can be set for every request type before it is sent.">構成は、送信前にすべてのリクエスト・タイプに設定できます。</span> <span class="merged" id="all.YODg3.spl2" title="原文 : Below are some examples of the optional parameters.">オプション・パラメータの例を次に示します。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.35CVhz.1"  title="原文:: Parameter">パラメータ</span></th>
<th><span class="merged" id="all.4JM9z7.39"  title="原文:: Description">説明</span></th>
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

<p><span class="merged" id="all.lWoJL" title="原文 : For more information about these optional parameters, check out ClientRequestBase API, which is a parent class of HttpClientRequest.">これらのオプション・パラメータの詳細は、<a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpClientRequest.html" target="_blank">HttpClientRequest</a>の親クラスである<a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/ClientRequestBase.html" target="_blank">ClientRequestBase</a> APIを確認してください。</span></p>

<p><span class="merged" id="all.3dGDQd.spl1" title="原文 : HttpClientRequest class also provides specific header methods that help the user to set a particular header."><a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpClientRequest.html" target="_blank">HttpClientRequest</a>クラスは、ユーザーが特定のヘッダーを設定するのに役立つ特定のヘッダー・メソッドも提供します。</span> <span class="merged" id="all.3dGDQd.spl2" title="原文 : Some examples of these are:">次に例を示します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.29p0L3" title="原文 : contentType (MediaType contentType)"><code>contentType</code> (MediaType contentType)</span></p>

</li>
<li>
<p><span class="merged" id="all.4f5puq" title="原文 : accept (MediaType…​ mediaTypes)"><code>accept</code> (MediaType… mediaTypes)</span></p>

</li>
</ul>

<p><span class="merged" id="all.16js69" title="原文 : For more information about these methods, check out ClientRequest API, which is a parent class of HttpClientRequest.">これらのメソッドの詳細は、<a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpClientRequest.html" target="_blank">HttpClientRequest</a>の親クラスである<a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/ClientRequest.html" target="_blank">ClientRequest</a> APIを確認してください。</span></p>

</div>


<h3 id="_sending_the_request"><span class="merged" id="all.4Gh4vV" title="原文 : Sending the Request">リクエストの送信</span></h3>
<div class="section">
<p><span class="merged" id="all.3llXfa" title="原文 : Once the request setup is completed, the following methods can be used to send it:">リクエストの設定が完了したら、次のメソッドを使用してリクエストを送信できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3TEpvk"  title="原文: HttpClientResponse request()"><code>HttpClientResponse request()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4SXvLo"  title="原文: &lt;E&gt; ClientResponseTyped&lt;E&gt; request(Class&lt;E&gt; type)"><code>&lt;E> ClientResponseTyped&lt;E> request(Class&lt;E> type)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.30QG5t"  title="原文: &lt;E&gt; E requestEntity(Class&lt;E&gt; type)"><code>&lt;E> E requestEntity(Class&lt;E> type)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.36h3f0"  title="原文: HttpClientResponse submit(Object entity)"><code>HttpClientResponse submit(Object entity)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1JeT3J"  title="原文: &lt;T&gt; ClientResponseTyped&lt;T&gt; submit(Object entity, Class&lt;T&gt; requestedType)"><code>&lt;T> ClientResponseTyped&lt;T> submit(Object entity, Class&lt;T> requestedType)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.12akLd"  title="原文: HttpClientResponse outputStream(OutputStreamHandler outputStreamConsumer)"><code>HttpClientResponse outputStream(OutputStreamHandler outputStreamConsumer)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3xk61g"  title="原文: &lt;T&gt; ClientResponseTyped&lt;T&gt; outputStream(OutputStreamHandler outputStreamConsumer, Class&lt;T&gt; requestedType)"><code>&lt;T> ClientResponseTyped&lt;T> outputStream(OutputStreamHandler outputStreamConsumer, Class&lt;T> requestedType)</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.jWTAn.spl1" title="原文 : Each of the methods will provide a way to allow response to be retrieved in a particular response type.">各メソッドは、レスポンスを特定のレスポンス・タイプで取得できるようにする方法を提供します。</span> <span class="merged" id="all.jWTAn.spl2" title="原文 : Refer to ClientRequest API for more details about these methods.">これらのメソッドの詳細は、<a href="/apidocs/io.helidon.webclient..api/io/helidon/webclient/api/ClientRequest.html" target="_blank">ClientRequest API</a>を参照してください。</span> </p>

<markup
lang="java"
title="Execute a simple GET request to endpoint and receive a String response:"
>ClientResponseTyped&lt;String&gt; response = webClient.get()
                .path("/endpoint")
                .request(String.class);
String entityString = response.entity();</markup>

</div>


<h3 id="_protocol_used"><span class="merged" id="all.NJ33S" title="原文 : Protocol Used">使用プロトコル</span></h3>
<div class="section">
<p><span class="merged" id="all.FsIlw.spl1" title="原文 : WebClient currently supports HTTP/1.1 and HTTP/2 protocols.">WebClientは現在、<code>HTTP/1.1</code>および<code>HTTP/2</code>プロトコルをサポートしています。</span> <span class="merged" id="all.FsIlw.spl2" title="原文 : Below are the rules on which specific protocol will be used:">次に、特定のプロトコルを使用するルールを示します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1dDrOa" title="原文 : Using plain socket triggers WebClient to process a request using HTTP/1.1.">プレーン・ソケットを使用すると、WebClientがトリガーされ、<code>HTTP/1.1</code>を使用してリクエストが処理されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.5RHdc.spl1" title="原文 : When using TLS, the client will use ALPN (protocol negotiation) to use appropriate HTTP version (either 1.1, or 2).">TLSを使用する場合、クライアントはALPN (プロトコル・ネゴシエーション)を使用して適切なHTTPバージョン(1.1または2)を使用します。</span> <span class="merged" id="all.5RHdc.spl2" title="原文 : HTTP/2 has a higher weight, so it is chosen if supported by both sides."><code>HTTP/2</code>の重みは高いため、両側でサポートされている場合は選択されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.Z4FqS" title="原文 : A specific protocol can be explicitly selected by calling HttpClientRequest#protocolId(String).">特定のプロトコルは、<code>HttpClientRequest#protocolId(String)</code>をコールして明示的に選択できます。</span></p>

</li>
</ul>

<div class="listing">
<markup>String result = webClient.get()
                         .protocolId("http/1.1")
                         .requestEntity(String.class);</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Nr7Qf.spl1" title="原文 : If HTTP/2 is used, an upgrade attempt will be performed."><code>HTTP/2</code>を使用すると、アップグレード試行が実行されます。</span> <span class="merged" id="all.1Nr7Qf.spl2" title="原文 : If it fails, the client falls-back to HTTP/1.1.">失敗した場合、クライアントは<code>HTTP/1.1</code>にフォールバックします。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1ovBho.spl1" title="原文 : The parameter prior-knowledge can be defined using HTTP/2 protocol configuration.">パラメータ<code>prior-knowledge</code>は、<code>HTTP/2</code>プロトコル構成を使用して定義できます。</span> <span class="merged" id="all.1ovBho.spl2" title="原文 : Please refer to on how to customize HTTP/2."><code>HTTP/2</code>のカスタマイズ方法については、<router-link @click.native="this.scrollFix('#_setting_protocol_configuration')" to="#_setting_protocol_configuration"></router-link>を参照してください。</span> <span class="merged" id="all.1ovBho.spl3" title="原文 : In such a case, prior-knowledge will be used and fail if it is unable to switch to HTTP/2.">このような場合、<code>prior-knowledge</code>が使用され、<code>HTTP/2</code>に切り替えられないと失敗します。</span> </p>

</li>
</ul>

</div>


<h3 id="_adding_media_support"><span class="merged" id="all.3gIep6" title="原文 : Adding Media Support">メディア・サポートの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.31WvhQ" title="原文 : Webclient supports the following built-in Helidon Media Support libraries:">Webclientは、次の組込みHelidonメディア・サポート・ライブラリをサポートしています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.rsjpW" title="原文 : JSON Processing (JSON-P)">JSON Processing (JSON-P)</span>

</li>
<li>
<span class="merged" id="all.3m6csh" title="原文 : JSON Binding (JSON-B)">JSONバインディング(JSON-B)</span>

</li>
<li>
<span class="merged" id="all.2ghgYh"  title="原文:: Jackson">Jackson</span>

</li>
</ol>

<p><span class="merged" id="all.1Id94t.spl1" title="原文 : They can be activated by adding their corresponding libraries into the classpath.">これらは、対応するライブラリをクラスパスに追加することでアクティブ化できます。</span> <span class="merged" id="all.1Id94t.spl2" title="原文 : This can simply be done by adding their corresponding dependencies.">これを行うには、対応する依存関係を追加します。</span> </p>

<markup
lang="xml"
title="Add JSON-P support:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"
title="Add JSON-B support:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jsonb&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"
title="Add Jackson support:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jackson&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.Koszf" title="原文 : Users can also create their own Custom Media Support library and make them work by following either of the approaches:">ユーザーは、次のいずれかの方法に従って独自のカスタム・メディア・サポート・ライブラリを作成し、それらを機能させることもできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4VdPLF" title="原文 : Create a Provider of the Custom Media Support and expose it via Service Loader followed by adding the Media Support library to the classpath.">カスタム・メディア・サポートのプロバイダを作成し、サービス・ローダーを介して公開してから、クラスパスにメディア・サポート・ライブラリを追加します。</span></p>

</li>
<li>
<p><span class="merged" id="all.1bTkyC" title="原文 : Explicitly register the Custom Media Support from WebClient.">WebClientからカスタム・メディア・サポートを明示的に登録します。</span></p>

</li>
</ul>

<markup
lang="java"

>WebClient webclient = WebClient.builder()
        .mediaContext(MediaContext.builder()
                .addMediaSupport(CustomMediaSupport.create())   <span class="conum" data-value="1" />
                .build())
        .build()</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.slMt5" title="原文 : Register CustomMedia support from the WebClient.">WebClientからCustomMediaサポートを登録します。</span></li>
</ul>

</div>


<h3 id="_dns_resolving"><span class="merged" id="all.2nK1dT" title="原文 : DNS Resolving">DNS解決</span></h3>
<div class="section">
<p><span class="merged" id="all.4GTUoG" title="原文 : Webclient provides three DNS resolver implementations out of the box:">Webクライアントには、すぐに利用できる3つのDNSリゾルバ実装が用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3QYGGn" title="原文 : Java DNS resolution is the default."><code>Java DNS resolution</code>がデフォルトです。</span></p>

</li>
<li>
<p><span class="merged" id="all.3W5D8v.spl1" title="原文 : First DNS resolution uses the first IP address from a DNS lookup."><code><strong>First</strong> DNS resolution</code>は、DNSルックアップの最初のIPアドレスを使用します。</span> <span class="merged" id="all.3W5D8v.spl2" title="原文 : To enable this option, add below dependency:">このオプションを有効にするには、次の依存関係を追加します:</span> </p>

</li>
</ul>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient.dns.resolver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-dns-resolver-first&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.365gHZ.spl1" title="原文 : Round-Robin DNS resolution cycles through IP addresses from a DNS lookup."><code><strong>Round-Robin</strong> DNS resolution</code>は、DNSルックアップからIPアドレスを循環します。</span> <span class="merged" id="all.365gHZ.spl2" title="原文 : To enable this option, add this dependency:">このオプションを有効にするには、次の依存関係を追加します:</span> </p>

</li>
</ul>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient.dns.resolver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-dns-resolver-round-robin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_the_webclient"><span class="merged" id="all.43xHy3" title="原文 : Configuring the WebClient">WebClientの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4MReoI" title="原文 : The class responsible for WebClient configuration is:">WebClient構成を担当するクラスは、次のとおりです:</span></p>

<p><span class="merged" id="all.5fgfX.1" title="原文 : Type: io.helidon.webclient.api.WebClient">タイプ: <a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/WebClient.html" target="_blank">io.helidon.webclient.api.WebClient</a></span></p>

<p><span class="merged" id="all.2OTrtF.1" title="原文 : This is a standalone configuration type, prefix from configuration root: clients">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>clients</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.153"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.145" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.169"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.162"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.169"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.179"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.CF3tT.2"  title="原文: base-uri"><code>base-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.350"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2P597f.2" title="原文 : Base uri used by the client in all requests.">すべてのリクエストでクライアントが使用するベースURI。</span></p>

<markup>@return base uri of the client requests</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nD4yJ.5"  title="原文: connect-timeout"><code>connect-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.61"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.19Zjbm.3"  title="原文:: Connect timeout.">接続タイムアウト</span></p>

<markup>@return connect timeout
@see io.helidon.common.socket.SocketOptions#connectTimeout()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.pbmo.2"  title="原文: connection-cache-size"><code>connection-cache-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.98"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3mz6xH.3"  title="原文: 256"><code>256</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1FoH8I.2.spl1" title="原文 : Maximal size of the connection cache.">接続キャッシュの最大サイズ。</span> <span class="merged" id="all.1FoH8I.2.spl2" title="原文 : For most HTTP protocols, we may cache connections to various endpoints for keep alive (or stream reuse in case of HTTP/2).">ほとんどのHTTPプロトコルでは、キープアライブ(またはHTTP/2の場合はストリームの再利用)のために、様々なエンドポイントへの接続をキャッシュできます。</span> <span class="merged" id="all.1FoH8I.2.spl3" title="原文 : This option limits the size.">このオプションはサイズを制限します。</span> <span class="merged" id="all.1FoH8I.2.spl4" title="原文 : Setting this number lower than the &quot;usual&quot; number of target services will cause connections to be closed and reopened frequently.">この数値を「通常」のターゲット・サービス数より小さく設定すると、接続がクローズされ、頻繁に再オープンされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dzi1w.5"  title="原文: content-encoding"><code>content-encoding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4OZ5CZ.5" title="原文 : ContentEncodingContext"><router-link to="/config/io_helidon_http_encoding_ContentEncodingContext">ContentEncodingContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ukj1R.2.spl1" title="原文 : Configure the listener specific io.helidon.http.encoding.ContentEncodingContext.">リスナー固有のio.helidon.http.encoding.ContentEncodingContextを構成します。</span> <span class="merged" id="all.3ukj1R.2.spl2" title="原文 : This method discards all previously registered ContentEncodingContext.">このメソッドは、以前に登録されたすべてのContentEncodingContextを破棄します。</span> <span class="merged" id="all.3ukj1R.2.spl3" title="原文 : If no content encoding context is registered, default encoding context is used.">コンテンツ・エンコーディング・コンテキストが登録されていない場合は、デフォルトのエンコーディング・コンテキストが使用されます。</span> </p>

<markup>@return content encoding context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Us5Ei.2"  title="原文: cookie-manager"><code>cookie-manager</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4ALHvR.2" title="原文 : WebClientCookieManager"><router-link to="/config/io_helidon_webclient_api_WebClientCookieManager">WebClientCookieManager</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2GO0hC.2" title="原文 : WebClient cookie manager.">WebClient cookieマネージャ。</span></p>

<markup>@return cookie manager to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.zj79v.2"  title="原文: default-headers"><code>default-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.10" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.40tSN.2" title="原文 : Default headers to be used in every request from configuration.">構成からのすべてのリクエストで使用されるデフォルトのヘッダー。</span></p>

<markup>@return default headers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SV0kY.3"  title="原文: follow-redirects"><code>follow-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.266"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.135"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.PWDBG.3" title="原文 : Whether to follow redirects.">リダイレクトを追跡するかどうか。</span></p>

<markup>@return whether to follow redirects</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cLDv2.6"  title="原文: keep-alive"><code>keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.267"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.136"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1W33Q1.3" title="原文 : Determines if connection keep alive is enabled (NOT socket keep alive, but HTTP connection keep alive, to re-use the same connection for multiple requests).">複数のリクエストに対して同じ接続を再利用するために、接続キープ・アライブが有効かどうかを決定します(ソケット・キープ・アライブではなく、HTTP接続のキープ・アライブ)。</span></p>

<markup>@return keep alive for this connection
@see io.helidon.common.socket.SocketOptions#socketKeepAlive()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xrYOF.5"  title="原文: max-in-memory-entity"><code>max-in-memory-entity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.99"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Oslkg.5"  title="原文: 131072"><code>131072</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1GCDDQ.2.spl1" title="原文 : If the entity is expected to be smaller that this number of bytes, it would be buffered in memory to optimize performance.">エンティティがこのバイト数より小さいと予想される場合は、パフォーマンスを最適化するためにメモリーにバッファされます。</span> <span class="merged" id="all.1GCDDQ.2.spl2" title="原文 : If bigger, streaming will be used.">大きい場合はストリーミングが使用されます。</span> </p>

<markup>Note that for some entity types we cannot use streaming, as they are already fully in memory (String, byte[]), for such
cases, this option is ignored. Default is 128Kb.</markup>
<markup>@return maximal number of bytes to buffer in memory for supported writers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.7"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.100"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.8"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Ao3gH.3.spl1" title="原文 : Max number of followed redirects.">追跡リダイレクトの最大数。</span> <span class="merged" id="all.2Ao3gH.3.spl2" title="原文 : This is ignored if #followRedirects() option is false.">#followRedirects()オプションが<code>false</code>の場合、これは無視されます。</span> </p>

<markup>@return max number of followed redirects</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2eL0SG.5"  title="原文: media-context"><code>media-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3UN167.6" title="原文 : MediaContext"><router-link to="/config/io_helidon_http_media_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1YBy4O.3"  title="原文: create()"><code>create()</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2VEoqW.2.spl1" title="原文 : Configure the listener specific io.helidon.http.media.MediaContext.">リスナー固有のio.helidon.http.media.MediaContextを構成します。</span> <span class="merged" id="all.2VEoqW.2.spl2" title="原文 : This method discards all previously registered MediaContext.">このメソッドは、以前に登録されたすべてのMediaContextを破棄します。</span> <span class="merged" id="all.2VEoqW.2.spl3" title="原文 : If no media context is registered, default media context is used.">メディア・コンテキストが登録されていない場合は、デフォルトのメディア・コンテキストが使用されます。</span> </p>

<markup>@return media context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Zfdmv.2"  title="原文: media-type-parser-mode"><code>media-type-parser-mode</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2X1paD.2" title="原文 : ParserMode (STRICT, RELAXED)">ParserMode (STRICT, RELAXED)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.76GD0.2"  title="原文: STRICT"><code>STRICT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.44myiS.2" title="原文 : Configure media type parsing mode for HTTP Content-Type header.">HTTP <code>Content-Type</code>ヘッダーのメディア・タイプ解析モードを構成します。</span></p>

<markup>@return media type parsing mode</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2RiS66.3"  title="原文: properties"><code>properties</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.11" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4aBDnq.3.spl1" title="原文 : Properties configured for this client.">このクライアント用に構成されたプロパティ。</span> <span class="merged" id="all.4aBDnq.3.spl2" title="原文 : These properties are propagated through client request, to be used by services (and possibly for other purposes).">これらのプロパティは、クライアント・リクエストを介して伝播され、サービスによって使用されます(場合によってはその他の目的で使用されます)。</span> </p>

<markup>@return map of client properties</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.InPkJ.1"  title="原文: protocol-configs"><code>protocol-configs</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AHJAU.1" title="原文 : io.helidon.webclient.spi.ProtocolConfig[] (service provider interface)">io.helidon.webclient.spi.ProtocolConfig[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ExS5J.1" title="原文 : Configuration of client protocols.">クライアント・プロトコルの構成。</span></p>

<markup>@return client protocol configurations</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MC3Gg.3"  title="原文: proxy"><code>proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4PZW4v.3" title="原文 : Proxy"><router-link to="/config/io_helidon_webclient_api_Proxy">プロキシ</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.lHTI8.3" title="原文 : Proxy configuration to be used for requests.">リクエストに使用されるプロキシ構成。</span></p>

<markup>@return proxy to use, defaults to Proxy#noProxy()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3gmkJK.2"  title="原文: read-continue-timeout"><code>read-continue-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.62"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2MQRtH.3"  title="原文: PT1S"><code>PT1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Kpps2.2.spl1" title="原文 : Socket 100-Continue read timeout.">Socket 100-読取りタイムアウトを続行します。</span> <span class="merged" id="all.4Kpps2.2.spl2"  title="原文:: Default is 1 second.">デフォルトは1秒です。</span> <span class="merged" id="all.4Kpps2.2.spl3" title="原文 : This read timeout is used when 100-Continue is sent by the client, before it sends an entity.">この読取りタイムアウトは、100-Continueがエンティティを送信する前にクライアントによって送信されるときに使用されます。</span> </p>

<markup>@return read 100-Continue timeout duration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3R6xIn.5"  title="原文: read-timeout"><code>read-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.63"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ueweF.3"  title="原文:: Read timeout.">読取りタイムアウト</span></p>

<markup>@return read timeout
@see io.helidon.common.socket.SocketOptions#readTimeout()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CyX3F.6"  title="原文: relative-uris"><code>relative-uris</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.268"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.103"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LdQgO.2" title="原文 : Can be set to true to force the use of relative URIs in all requests, regardless of the presence or absence of proxies or no-proxy lists.">プロキシまたは非プロキシ・リストが存在するかどうかに関係なく、すべてのリクエストで相対URIを強制的に使用するように<code>true</code>に設定できます。</span></p>

<markup>@return relative URIs flag</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FNeSd.2"  title="原文: send-expect-continue"><code>send-expect-continue</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.269"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.137"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3S6jHE.2" title="原文 : Whether Expect-100-Continue header is sent to verify server availability before sending an entity.">エンティティを送信する前にサーバーの可用性を検証するためにExpect-100-Continueヘッダーが送信されるかどうか。</span></p>

<markup>Defaults to `true`.</markup>
<markup>@return whether Expect:100-Continue header should be sent on streamed transfers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bZKKF.5"  title="原文: services"><code>services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Mjizz.2" title="原文 : io.helidon.webclient.spi.WebClientService[] (service provider interface)">io.helidon.webclient.spi.WebClientService[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1JRig1.2" title="原文 : WebClient services.">WebClientサービス。</span></p>

<markup>@return services to use with this web client</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ZyTLO.2"  title="原文: share-connection-cache"><code>share-connection-cache</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.270"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.138"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Lel26.2" title="原文 : Whether to share connection cache between all the WebClient instances in JVM.">JVM内のすべてのWebClientインスタンス間で接続キャッシュを共有するかどうか。</span></p>

<markup>@return true if connection cache is shared</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CAuw0.2"  title="原文: socket-options"><code>socket-options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3wae7e.5" title="原文 : SocketOptions"><router-link to="/config/io_helidon_common_socket_SocketOptions">SocketOptions</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.dKr9B.2.spl1" title="原文 : Socket options for connections opened by this client.">このクライアントによってオープンされた接続のソケット・オプション。</span> <span class="merged" id="all.dKr9B.2.spl2" title="原文 : If there is a value explicitly configured on this type and on the socket options, the one configured on this type’s builder will win:">このタイプおよびソケット・オプションに明示的に構成された値がある場合、このタイプのビルダーで構成された値が優先されます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.TygD1.2"  title="原文: #readTimeout()">#readTimeout()</span></p>

</li>
<li>
<p><span class="merged" id="all.446TP0.2"  title="原文: #connectTimeout()">#connectTimeout()</span></p>

</li>
</ul>

<p><span class="merged" id="all.2WyM6d.2" title="原文 : @return socket options">@returnソケット・オプション</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.6"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2x5x4s.6" title="原文 : Tls"><router-link to="/config/io_helidon_common_tls_Tls">Tls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fm9rs.3.spl1" title="原文 : TLS configuration for any TLS request from this client.">このクライアントからの任意のTLSリクエストのTLS構成。</span> <span class="merged" id="all.3fm9rs.3.spl2" title="原文 : TLS can also be configured per request.">TLSはリクエストごとに構成することもできます。</span> <span class="merged" id="all.3fm9rs.3.spl3" title="原文 : TLS is used when the protocol is set to https.">TLSは、プロトコルが<code>https</code>に設定されている場合に使用されます。</span> </p>

<markup>@return TLS configuration to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_protocol_specific_configuration"><span class="merged" id="all.4IUX8N" title="原文 : Protocol Specific Configuration">プロトコル仕様構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4bTBtY.spl1" title="原文 : Protocol specific configuration can be set using the protocol-configs parameter.">プロトコル固有の構成は、<code>protocol-configs</code>パラメータを使用して設定できます。</span> <span class="merged" id="all.4bTBtY.spl2" title="原文 : Webclient currently supports HTTP/1.1. and HTTP/2.">Webクライアントは現在、<code>HTTP/1.1.</code>および<code>HTTP/2</code>をサポートしています。</span> <span class="merged" id="all.4bTBtY.spl3" title="原文 : Below are the options for each of the protocol type:">次に、各プロトコル・タイプのオプションを示します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1YyHyr"  title="原文: HTTP/1.1"><code>HTTP/1.1</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.1UCDJk.1" title="原文 : Type: io.helidon.webclient.http1.Http1ClientProtocolConfig">タイプ: <a href="/apidocs/io.helidon.webclient.http1/io/helidon/webclient/http1/Http1ClientProtocolConfig.html" target="_blank">io.helidon.webclient.http1.Http1ClientProtocolConfig</a></span></p>


<h4 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.154"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.146" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.170"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.163"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.170"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.180"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.ItlYF.1"  title="原文: default-keep-alive"><code>default-keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.271"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.139"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HvjYq.1" title="原文 : Whether to use keep alive by default.">デフォルトでキープ・アライブを使用するかどうか。</span></p>

<markup>@return `true` for keeping connections alive and re-using them for multiple requests (default), `false`
 to create a new connection for each request</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jcPLP.1"  title="原文: max-header-size"><code>max-header-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.101"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.4"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.447v4Y.1" title="原文 : Configure the maximum allowed header size of the response.">レスポンスの最大許容ヘッダー・サイズを構成します。</span></p>

<markup>@return  maximum header size</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FYENv.1"  title="原文: max-status-line-length"><code>max-status-line-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.102"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3mz6xH.4"  title="原文: 256"><code>256</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3vFJzz.1" title="原文 : Configure the maximum allowed length of the status line from the response.">レスポンスからステータス明細の最大許容長を構成します。</span></p>

<markup>@return maximum status line length</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.14"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.351"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2yUBkl.1"  title="原文: http_1_1"><code>http_1_1</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WWdbj.2"  title="原文: validate-request-headers"><code>validate-request-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.272"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.104"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZR8h4.1" title="原文 : Sets whether the request header format is validated or not.">リクエスト・ヘッダー形式をバリデートするかどうかを設定します。</span></p>

<markup>Defaults to `false` as user has control on the header creation.</markup>
<markup>@return whether request header validation should be enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TRpsd.2"  title="原文: validate-response-headers"><code>validate-response-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.273"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.140"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.14619U.1" title="原文 : Sets whether the response header format is validated or not.">レスポンス・ヘッダー形式をバリデートするかどうかを設定します。</span></p>

<markup>Defaults to `true`.</markup>
<markup>@return whether response header validation should be enabled</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3hicmA"  title="原文: HTTP/2"><code>HTTP/2</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.1jfUD2.1" title="原文 : Type: io.helidon.webclient.http2.Http2ClientProtocolConfig">タイプ: <a href="/apidocs/io.helidon.webclient.http2/io/helidon/webclient/http2/Http2ClientProtocolConfig.html" target="_blank">io.helidon.webclient.http2.Http2ClientProtocolConfig</a></span></p>

</div>


<h4 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.155"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.147" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.171"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.164"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.171"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.181"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1vCcQg.1"  title="原文: flow-control-block-timeout"><code>flow-control-block-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.64"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Y3D74.3"  title="原文: PT0.1S"><code>PT0.1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.20FREc.1" title="原文 : Timeout for blocking between windows size check iterations.">ウィンドウ・サイズ・チェックの反復間のブロックのタイムアウト。</span></p>

<markup>@return timeout</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1GCnSE.2"  title="原文: initial-window-size"><code>initial-window-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.103"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4E2MiZ.1"  title="原文: 65535"><code>65535</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3mOCCS.1.spl1" title="原文 : Configure INITIAL_WINDOW_SIZE setting for new HTTP/2 connections.">新しいHTTP/2接続のINITIAL_WINDOW_SIZE設定を構成します。</span> <span class="merged" id="all.3mOCCS.1.spl2" title="原文 : Sends to the server the size of the largest frame payload client is willing to receive.">最大のフレーム・ペイロード・クライアントが受信できるサイズをサーバーに送信します。</span> <span class="merged" id="all.3mOCCS.1.spl3" title="原文 : Defaults to io.helidon.http.http2.WindowSize#DEFAULT_WIN_SIZE.">デフォルトは<code>io.helidon.http.http2.WindowSize#DEFAULT_WIN_SIZE</code>です。</span> </p>

<markup>@return units of octets</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1QmwKT.2"  title="原文: max-frame-size"><code>max-frame-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.104"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.5"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2a9BCG.1.spl1" title="原文 : Configure initial MAX_FRAME_SIZE setting for new HTTP/2 connections.">新しいHTTP/2接続の初期MAX_FRAME_SIZE設定を構成します。</span> <span class="merged" id="all.2a9BCG.1.spl2" title="原文 : Maximum size of data frames in bytes the client is prepared to accept from the server.">クライアントがサーバーから受け入れる準備が整っているデータ・フレームの最大サイズ(バイト単位)。</span> <span class="merged" id="all.2a9BCG.1.spl3" title="原文 : Default value is 2^14(16_384).">デフォルト値は2^14(16_384)です。</span> </p>

<markup>@return data frame size in bytes between 2^14(16_384) and 2^24-1(16_777_215)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ekcmL.2"  title="原文: max-header-list-size"><code>max-header-list-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.39"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.11"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4KS6EY.1.spl1" title="原文 : Configure initial MAX_HEADER_LIST_SIZE setting for new HTTP/2 connections.">新しいHTTP/2接続の初期MAX_HEADER_LIST_SIZE設定を構成します。</span> <span class="merged" id="all.4KS6EY.1.spl2" title="原文 : Sends to the server the maximum header field section size client is prepared to accept.">クライアントが受け入れる準備ができる最大ヘッダー・フィールド・セクション・サイズをサーバーに送信します。</span> <span class="merged" id="all.4KS6EY.1.spl3" title="原文 : Defaults to -1, which means &quot;unconfigured&quot;.">デフォルトは<code>-1</code>で、「未構成」を意味します。</span> </p>

<markup>@return units of octets</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.15"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.352"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1wBsBV.1"  title="原文: h2"><code>h2</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10V2xc.1"  title="原文: ping"><code>ping</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.274"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.105"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.X5ZWr.1.spl1" title="原文 : Check healthiness of cached connections with HTTP/2.0 ping frame.">HTTP/2.0 pingフレームでキャッシュされた接続のヘルスをチェックします。</span> <span class="merged" id="all.X5ZWr.1.spl2"  title="原文:: Defaults to false.">デフォルトは<code>false</code>です。</span> </p>

<markup>@return use ping if true</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.16viTN.1"  title="原文: ping-timeout"><code>ping-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.65"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.AjhSo.4"  title="原文: PT0.5S"><code>PT0.5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2QSzdo.1.spl1" title="原文 : Timeout for ping probe used for checking healthiness of cached connections.">キャッシュされた接続のヘルスをチェックするために使用されるpingプローブのタイムアウト。</span> <span class="merged" id="all.2QSzdo.1.spl2" title="原文 : Defaults to PT0.5S, which means 500 milliseconds.">デフォルトは<code>PT0.5S</code>で、これは500ミリ秒を意味します。</span> </p>

<markup>@return timeout</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42TAoD.1"  title="原文: prior-knowledge"><code>prior-knowledge</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.275"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.106"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lJFmk.1.spl1" title="原文 : Prior knowledge of HTTP/2 capabilities of the server.">サーバーのHTTP/2機能に関する以前の知識。</span> <span class="merged" id="all.1lJFmk.1.spl2" title="原文 : If server we are connecting to does not support HTTP/2 and prior knowledge is set to false, only features supported by HTTP/1 will be available and attempts to use HTTP/2 specific will throw an UnsupportedOperationException. &lt;h4&gt;Plain text connection&lt;/h4&gt; If prior knowledge is set to true, we will not attempt an upgrade of connection and use prior knowledge.">接続先のサーバーがHTTP/2をサポートしておらず、以前のナレッジが<code>false</code>に設定されている場合、HTTP/1でサポートされている機能のみが使用可能になり、HTTP/2固有の使用を試行すると、UnsupportedOperationExceptionがスローされます。&lt;h4>Plainテキストconnection&lt;/h4>以前のナレッジが<code>true</code>に設定されている場合、接続のアップグレードは試行されず、以前のナレッジが使用されます。</span> <span class="merged" id="all.1lJFmk.1.spl3" title="原文 : If prior knowledge is set to false, we will initiate an HTTP/1 connection and upgrade it to HTTP/2, if supported by the server. plaintext connection (h2c). &lt;h4&gt;TLS protected connection&lt;/h4&gt; If prior knowledge is set to true, we will negotiate protocol using HTTP/2 only, failing if not supported. if prior knowledge is set to false, we will negotiate protocol using both HTTP/2 and HTTP/1, using the protocol supported by server.">以前の知識が<code>false</code>に設定されている場合、HTTP/1接続を開始し、サーバーでサポートされている場合はHTTP/2にアップグレードします。プレーンテキスト接続( <code>h2c</code>)。 &lt;h4>TLS protected connection&lt;/h4>以前の知識が設定されている場合<code>true</code>に、HTTP/2のみを使用してプロトコルをネゴシエートし、サポートされない場合は失敗します。事前の知識が<code>false</code>に設定されている場合は、サーバーでサポートされているプロトコルを使用して、HTTP/2とHTTP/1の両方を使用してプロトコルをネゴシエートします。</span> </p>

<markup>@return whether to use prior knowledge of HTTP/2</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

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
  cookie-manager: <span class="conum" data-value="2" />
    automatic-store-enabled: true
    default-cookies:
      flavor3: strawberry
      flavor4: raspberry
  default-headers: <span class="conum" data-value="3" />
    Accept: '"application/json","text/plain"'
  services: <span class="conum" data-value="4" />
    metrics:
      - methods: ["PUT", "POST", "DELETE"]
        type: METER
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
    tracing:
  protocol-configs: <span class="conum" data-value="5" />
    http_1_1:
      max-header-size: 20000
      validate-request-headers: true
    h2:
      prior-knowledge: true
  proxy: <span class="conum" data-value="6" />
    host: "hostName"
    port: 80
    no-proxy: ["localhost:8080", ".helidon.io", "192.168.1.1"]
  tls: <span class="conum" data-value="7" />
    trust:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "client.p12"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.WPIjH" title="原文 : Client functional settings">クライアントの機能設定</span></li>
<li data-value="2"><span class="merged" id="all.4QmzjG" title="原文 : Cookie management">Cookie管理</span></li>
<li data-value="3"><span class="merged" id="all.2br2Oq" title="原文 : Default client headers">デフォルトのクライアント・ヘッダー</span></li>
<li data-value="4"><span class="merged" id="all.1DI9fz" title="原文 : Client service configuration">クライアント・サービス構成</span></li>
<li data-value="5"><span class="merged" id="all.erXDn" title="原文 : Protocol configuration">プロトコル構成</span></li>
<li data-value="6"><span class="merged" id="all.1Hh9ld"  title="原文:: Proxy configuration">プロキシ構成</span></li>
<li data-value="7"><span class="merged" id="all.2NIBwt"  title="原文:: TLS configuration">TLS構成</span></li>
</ul>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.44"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_webclient_with_proxy"><span class="merged" id="all.1gz0Km" title="原文 : Webclient with Proxy">プロキシを使用するWebクライアント</span></h3>
<div class="section">
<p><span class="merged" id="all.2yd28j" title="原文 : Configure Proxy setup either programmatically or via the Helidon configuration framework.">プログラムまたはHelidon構成フレームワークを使用して、プロキシ設定を構成します。</span></p>


<h4 id="_configuring_proxy_in_your_code"><span class="merged" id="all.KmB7H" title="原文 : Configuring Proxy in your code">コードでのプロキシの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3xqoeI" title="原文 : Proxy can be set directly from WebClient builder.">プロキシは、WebClientビルダーから直接設定できます。</span></p>

<markup
lang="java"

>Proxy proxy = Proxy.builder()
                .type(Proxy.ProxyType.HTTP)
                .host(PROXY_HOST)
                .port(PROXY_PORT)
                .build();
WebClient webClient = WebClient.builder()
         .proxy(proxy)
         .build();</markup>

<p><span class="merged" id="all.22g8sj" title="原文 : Alternative is to set proxy directly from the request via HttpClientRequest.">または、<code>HttpClientRequest</code>を介してリクエストからプロキシを直接設定することもできます。</span></p>

<markup
lang="java"

>// Using System Proxy
Proxy proxy = Proxy.create();
System.setProperty("http.proxyHost", PROXY_HOST);
System.setProperty("http.proxyPort", PROXY_PORT);
System.setProperty("http.nonProxyHosts", "localhost|127.0.0.1|10.*.*.*|*.example.com|etc|" + TARGET_HOST);
webClient.get("/proxiedresource").proxy(proxy).request()</markup>

</div>


<h4 id="_configuring_proxy_in_the_config_file"><span class="merged" id="all.2XRINa" title="原文 : Configuring Proxy in the config file">構成ファイルでのプロキシの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.4Sjftq" title="原文 : Proxy can also be configured in WebClient through the application.yaml configuration file.">プロキシは、<code>application.yaml</code>構成ファイルを使用してWebClientで構成することもできます。</span></p>

<markup
lang="yaml"
title="WebClient Proxy configuration in <code>application.yaml</code>"
>webclient:
  proxy:
    host: "hostName"
    port: 80
    no-proxy: ["localhost:8080", ".helidon.io", "192.168.1.1"]</markup>

<p><span class="merged" id="all.1Cq2QG" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="WebClient initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebClient webClient = WebClient.create(config.get("webclient"));</markup>

</div>

</div>


<h3 id="_webclient_tls_setup"><span class="merged" id="all.4dvyOX" title="原文 : WebClient TLS Setup">WebClient TLS設定</span></h3>
<div class="section">
<p><span class="merged" id="all.4IDcI4" title="原文 : Configure TLS either programmatically or by the Helidon configuration framework.">プログラムまたはHelidon構成フレームワークによってTLSを構成します。</span></p>


<h4 id="_configuring_tls_in_your_code"><span class="merged" id="all.2cogWe" title="原文 : Configuring TLS in your code">コードでのTLSの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2AMEVC" title="原文 : One way to configure TLS in WebClient is in your application code as shown below.">WebClientでTLSを構成する1つの方法は、次に示すようにアプリケーション・コードにあります。</span></p>

<markup
lang="java"

>WebClient.builder()
         .tls(Tls.builder()
                     .trust(trust -&gt; trust
                             .keystore(store -&gt; store
                                     .passphrase("password")
                                     .trustStore(true)
                                     .keystore(Resource.create("client.p12"))))
                     .build())
         .build();</markup>

</div>


<h4 id="_configuring_tls_in_the_config_file"><span class="merged" id="all.2x0R1m" title="原文 : Configuring TLS in the config file">構成ファイルでのTLSの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2kEnyb" title="原文 : Another way to configure TLS in WebClient is through the application.yaml configuration file.">WebClientでTLSを構成するもう1つの方法は、<code>application.yaml</code>構成ファイルを使用することです。</span></p>

<markup
lang="yaml"
title="WebClient TLS configuration in <code>application.yaml</code>"
>webclient:
  tls:
    trust:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "client.p12"</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1ZavF7.spl1" title="原文 : The passphrase value on the config file can be encrypted if stronger security is required.">構成ファイルの<code>passphrase</code>値は、より強力なセキュリティが必要な場合に暗号化できます。</span> <span class="merged" id="all.1ZavF7.spl2" title="原文 : For more information on how secrets can be encrypted using a master password and store them in a configuration file, please see Configuration Secrets.">マスター・パスワードを使用してシークレットを暗号化し、構成ファイルに保存する方法の詳細は、<router-link to="/mp/security/configuration-secrets">「構成シークレット」</router-link>を参照してください。</span> </p>
</div>

<p><span class="merged" id="all.1QapS8" title="原文 : In the application code, load the settings from the configuration file.">アプリケーション・コードで、構成ファイルから設定をロードします。</span></p>

<markup
lang="java"
title="WebClient initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebClient webClient = WebClient.create(config.get("webclient"));</markup>

</div>

</div>


<h3 id="_adding_service_to_webclient"><span class="merged" id="all.4QtZYF" title="原文 : Adding Service to WebClient">WebClientへのサービスの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.2KJJRt" title="原文 : WebClient currently supports 3 built-in services namely metrics, tracing and security.">WebClientは現在、<code>metrics</code>、<code>tracing</code>および<code>security</code>という3つの組込みサービスをサポートしています。</span></p>


<h4 id="_enabling_the_service"><span class="merged" id="all.3xm1Hq" title="原文 : Enabling the service">サービスの有効化</span></h4>
<div class="section">
<p><span class="merged" id="all.3tuckt.spl1" title="原文 : In order for a service to function, their dependency needs to be added in the application’s pom.xml.">サービスが機能するには、その依存関係をアプリケーションのpom.xmlに追加する必要があります。</span> <span class="merged" id="all.3tuckt.spl2" title="原文 : Below are examples on how to enable the built-in services:">次に、組込みサービスを有効にする方法の例を示します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4KU3uR.5"  title="原文: metrics"><code>metrics</code></span></p>

</li>
</ul>

<div class="listing">
<markup>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Zsfo8"  title="原文: tracing"><code>tracing</code></span></p>

</li>
</ul>

<div class="listing">
<markup>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2d2KCa.17"  title="原文: security"><code>security</code></span></p>

</li>
</ul>

<div class="listing">
<markup>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-security&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>
</div>

</div>


<h4 id="_adding_a_service_in_your_code"><span class="merged" id="all.1XVEI8" title="原文 : Adding a service in your code">コードへのサービスの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1jW3tU" title="原文 : Services can be added in WebClient as shown in the code below.">サービスは、次のコードに示すように、WebClientに追加できます。</span></p>

<markup
lang="java"

>//Creates new metric which will count all GET requests and has format of example.metric.GET.&lt;host-name&gt;
WebClientService clientService = WebClientMetrics.counter()
        .methods(Method.GET)
        .nameFormat("example.metric.%1$s.%2$s")
        .build();

//This newly created metric now needs to be registered to WebClient.
WebClient client = WebClient.builder()
        .baseUri(url)
        .config(config)
        .addService(clientService)
        .build();</markup>

</div>


<h4 id="_adding_service_in_the_config_file"><span class="merged" id="all.UXHBT" title="原文 : Adding service in the config file">構成ファイルにサービスを追加しています</span></h4>
<div class="section">
<p><span class="merged" id="all.zNiVV" title="原文 : Adding service in WebClient can also be done through the application.yaml configuration file.">WebClientへのサービスの追加は、<code>application.yaml</code>構成ファイルを使用して行うこともできます。</span></p>

<markup
lang="yaml"
title="WebClient Service configuration in <code>application.yaml</code>"
>webclient:
  services:
    metrics:
      - type: METER
        name-format: "client.meter.overall"
      - type: TIMER
        # meter per method
        name-format: "client.meter.%1$s"
      - methods: ["PUT", "POST", "DELETE"]
        type: COUNTER
        success: false
        name-format: "wc.counter.%1$s.error"
        description: "Counter of failed PUT, POST and DELETE requests"
    tracing:</markup>

<p><span class="merged" id="all.1Cq2QG.1" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="WebClient initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebClient webClient = WebClient.create(config.get("webclient"));</markup>

</div>

</div>


<h3 id="_setting_protocol_configuration"><span class="merged" id="all.Bgv5W" title="原文 : Setting Protocol configuration">プロトコル構成の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1AgUeG" title="原文 : Individual protocols can be customized using the protocol-config parameter.">個々のプロトコルは、<code>protocol-config</code>パラメータを使用してカスタマイズできます。</span></p>


<h4 id="_setting_up_protocol_configuration_in_your_code"><span class="merged" id="all.541Iy" title="原文 : Setting up protocol configuration in your code">コードでのプロトコル構成の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.3cwvAG" title="原文 : Below is an example of customizing HTTP/1.1 protocol in the application code.">次に、アプリケーション・コードで<code>HTTP/1.1</code>プロトコルをカスタマイズする例を示します。</span></p>

<markup
lang="java"

>WebClient client = WebClient.builder()
    .baseUri(url)
    .config(config.get("client"))
    .addProtocolConfig(Http1ClientProtocolConfig.builder()
                    .defaultKeepAlive(false)
                    .validateRequestHeaders(true)
                    .validateResponseHeaders(false)
                    .build())
    .build();</markup>

</div>


<h4 id="_setting_up_protocol_configuration_in_the_config_file"><span class="merged" id="all.yGN66" title="原文 : Setting up protocol configuration in the config file">構成ファイルでのプロトコル構成の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.445CzE" title="原文 : Protocol configuration can also be set in the application.yaml configuration file.">プロトコル構成は、<code>application.yaml</code>構成ファイルでも設定できます。</span></p>

<markup
lang="yaml"
title="Setting up <code>HTTP/1.1</code> and <code>HTTP/2</code> protocol using <code>application.yaml</code> file."
>webclient:
  protocol-configs:
    http_1_1:
      max-header-size: 20000
      validate-request-headers: true
    h2:
      prior-knowledge: true</markup>

<p><span class="merged" id="all.1Cq2QG.2" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="WebClient initialization using the <code>application.yaml</code> file located on the classpath"
>Config config = Config.create();
WebClient webClient = WebClient.create(config.get("webclient"));</markup>

</div>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.29"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.nWF8O" title="原文 : Helidon Webclient API"><a href="/apidocs/io.helidon.webclient.api/module-summary.html" target="_blank">Helidon WebクライアントAPI</a></span></p>

</li>
<li>
<p><span class="merged" id="all.FWa7W" title="原文 : Helidon WebClient HTTP/1.1 Support"><a href="/apidocs/io.helidon.webclient.http1/module-summary.html" target="_blank">Helidon WebClient HTTP/1.1のサポート</a></span></p>

</li>
<li>
<p><span class="merged" id="all.25UCmA" title="原文 : Helidon WebClient HTTP/2 Support"><a href="/apidocs/io.helidon.webclient.http2/module-summary.html" target="_blank">Helidon WebClient HTTP/2のサポート</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4Q5jCP" title="原文 : Helidon WebClient DNS Resolver First Support"><a href="/apidocs/io.helidon.webclient.dns.resolver.first/module-summary.html" target="_blank">Helidon WebClient DNSリゾルバの最初のサポート</a></span></p>

</li>
<li>
<p><span class="merged" id="all.Y5L3t" title="原文 : Helidon WebClient DNS Resolver Round Robin Support"><a href="/apidocs/io.helidon.webclient.dns.resolver.roundrobin/module-summary.html" target="_blank">Helidon WebClient DNSリゾルバ・ラウンド・ロビンのサポート</a></span></p>

</li>
<li>
<p><span class="merged" id="all.q6dYW" title="原文 : Helidon WebClient Metrics Support"><a href="/apidocs/io.helidon.webclient.metrics/module-summary.html" target="_blank">Helidon WebClientメトリクスのサポート</a></span></p>

</li>
<li>
<p><span class="merged" id="all.dvdd4" title="原文 : Helidon WebClient Security Support"><a href="/apidocs/io.helidon.webclient.security/module-summary.html" target="_blank">Helidon WebClientセキュリティ・サポート</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3BNXWK" title="原文 : Helidon WebClient Tracing Support"><a href="/apidocs/io.helidon.webclient.tracing/module-summary.html" target="_blank">Helidon WebClientトレースのサポート</a></span></p>

</li>
</ul>

</div>

</doc-view>
