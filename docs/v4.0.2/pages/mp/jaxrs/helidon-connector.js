<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.12"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.11" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.8" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.4" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.7" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.8" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.5" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.5" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.11"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.UYZOb.spl1" title="原文 : Helidon uses Jersey as the Jakarta REST (JAX-RS) implementation.">Helidonは、JerseyをJakarta REST (JAX-RS)実装として使用します。</span> <span class="merged" id="all.UYZOb.spl2" title="原文 : Jersey supports the concept of connectors which is an SPI to handle low-level HTTP connections when using the Jakarta REST Client API.">Jerseyでは、Jakarta RESTクライアントAPIの使用時に低レベルのHTTP接続を処理するSPIである<em>「コネクタ」</em>の概念がサポートされています。</span> <span class="merged" id="all.UYZOb.spl3" title="原文 : Helidon provides a connector that is based on its WebClient implementation and that has a few benefits, most notably, configuration using Config and support for HTTP/2.">Helidonは、その<code>WebClient</code>実装に基づくコネクタを提供し、特にConfigを使用した構成とHTTP/2のサポートを使用するいくつかの利点があります。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.10"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3DwxtV" title="原文 : To enable Helidon Connector add the following dependency to your project’s pom.xml (see Managing Dependencies).">Helidon Connectorを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

> &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.jersey&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-jersey-connector&lt;/artifactId&gt;
 &lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.4"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.4H1BCC" title="原文 : Enabling the Helidon connector is possible at creation time using Jersey’s ClientConfig instance as shown below:">Helidonコネクタの有効化は、次に示すように、Jerseyの<code>ClientConfig</code>インスタンスを使用して作成時に可能です:</span></p>

<markup
lang="java"

>  ClientConfig clientConfig = new ClientConfig();
  clientConfig.connectorProvider(HelidonConnectorProvider.create());       // Helidon connector
  Client client = ClientBuilder.newClient(clientConfig);</markup>

<p><span class="merged" id="all.12Ou1I" title="原文 : Any subsequent requests using a Client instance configured this way will defer to the Helidon connector to handle the underlying HTTP connection.">このように構成された<code>Client</code>インスタンスを使用する後続のリクエストは、基礎となるHTTP接続を処理するためにHelidonコネクタに遅延します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.8"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2hg03S.spl1" title="原文 : The Helidon connector implementation is based on WebClient, so it can be configured using config in the same way as any other instance of that class.">Helidonコネクタの実装は、<code>WebClient</code>に基づいているため、そのクラスの他のインスタンスと同じ方法でconfigを使用して構成できます。</span> <span class="merged" id="all.2hg03S.spl2" title="原文 : The config root used by the Helidon connector to initialize all instances of WebClient is rooted at jersey.connector.helidon.config."><code>WebClient</code>のすべてのインスタンスを初期化するためにHelidonコネクタによって使用される構成ルートは、<code>jersey.connector.helidon.config</code>にルートされています。</span> <span class="merged" id="all.2hg03S.spl3" title="原文 : Thus, if using a properties file, use this prefix for all the properties that you want to set in the connector.">したがって、プロパティ・ファイルを使用する場合は、コネクタに設定するすべてのプロパティにこのプレフィクスを使用します。</span> </p>

<p><span class="merged" id="all.5PWVy" title="原文 : For example, suppose you need to enable automatic storage for server cookies and to turn off redirects, you can add the following lines to your microprofile-config.properties file:">たとえば、サーバーcookieの自動ストレージを有効にし、リダイレクトをオフにする必要がある場合、<code>microprofile-config.properties</code>ファイルに次の行を追加できます:</span></p>

<markup
lang="properties"

>  jersey.connector.helidon.config.cookie-manager.automatic-store-enabled=true
  jersey.connector.helidon.config.follow-redirects=false</markup>

<p><span class="merged" id="all.2eV0JX" title="原文 : Alternatively, assuming the root of the WebClient configuration is located at my.webclient, this can be done programmatically when building the ClientConfig instance as follows:">または、<code>WebClient</code>構成のルートが<code>my.webclient</code>にあると仮定すると、次のように<code>ClientConfig</code>インスタンスを構築するときにプログラムによって実行できます:</span></p>

<markup
lang="java"

>  clientConfig.property(HelidonProperties.CONFIG, config.get("my.webclient"));</markup>

<p><span class="merged" id="all.2SIvk.spl1" title="原文 : There are additional properties that can be set programmatically and that shall override any related property set via config.">プログラムで設定できる追加プロパティがあり、configを使用して設定した関連プロパティをオーバーライドします。</span> <span class="merged" id="all.2SIvk.spl2" title="原文 : The following table lists all the properties supported by the connector, their types, scopes and default values.">次の表に、コネクタでサポートされるすべてのプロパティ、そのタイプ、スコープおよびデフォルト値を示します。</span> </p>


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
<th><span class="merged" id="all.ldfpp"  title="原文:: Property Name">プロパティ名</span></th>
<th><span class="merged" id="all.p0YxL.2"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.3XchyZ"  title="原文:: Scope">有効範囲</span></th>
<th><span class="merged" id="all.oxso7"  title="原文:: Default">デフォルト</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1MNoWL"  title="原文: jersey.config.client.connectTimeout">jersey.config.client.connectTimeout</span></td>
<td class=""><span class="merged" id="all.4Za3A0"  title="原文: Integer"><code>Integer</code></span></td>
<td class=""><span class="merged" id="all.3eFP9R"  title="原文:: client">クライアント</span></td>
<td class=""><span class="merged" id="all.4V3qWK"  title="原文:: 10000 (millis)">10000 (millis)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dDSg"  title="原文: jersey.config.client.readTimeout">jersey.config.client.readTimeout</span></td>
<td class=""><span class="merged" id="all.4Za3A0.1"  title="原文: Integer"><code>Integer</code></span></td>
<td class=""><span class="merged" id="all.3oEjiT" title="原文 : client, invocation">クライアント、起動</span></td>
<td class=""><span class="merged" id="all.4V3qWK.1"  title="原文:: 10000 (millis)">10000 (millis)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3avGBh"  title="原文: jersey.config.client.followRedirects">jersey.config.client.followRedirects</span></td>
<td class=""><span class="merged" id="all.Zw9Rq"  title="原文: Boolean"><code>Boolean</code></span></td>
<td class=""><span class="merged" id="all.3oEjiT.1" title="原文 : client, invocation">クライアント、起動</span></td>
<td class=""><span class="merged" id="all.4eNR3V"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.35MEUk" title="原文 : jersey.connector.helidon.config">jersey.connector.helidon.config</span></td>
<td class=""><span class="merged" id="all.4OAc8N"  title="原文: io.helidon.config.Config"><code>io.helidon.config.Config</code></span></td>
<td class=""><span class="merged" id="all.3eFP9R.1"  title="原文:: client">クライアント</span></td>
<td class=""><span class="merged" id="all.802hp"  title="原文:: (none)">(なし)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjeW" title="原文 : jersey.connector.helidon.tls">jersey.connector.helidon.tls</span></td>
<td class=""><span class="merged" id="all.3xDaEB"  title="原文: io.helidon.common.tls.Tls"><code>io.helidon.common.tls.Tls</code></span></td>
<td class=""><span class="merged" id="all.3eFP9R.2"  title="原文:: client">クライアント</span></td>
<td class=""><span class="merged" id="all.802hp.1"  title="原文:: (none)">(なし)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jbnKw"  title="原文: jersey.connector.helidon.protocolConfigs">jersey.connector.helidon.protocolConfigs</span></td>
<td class=""><span class="merged" id="all.11cghR"  title="原文: List&lt;? extends ProtocolConfig&gt;"><code>List&lt;? extends ProtocolConfig></code></span></td>
<td class=""><span class="merged" id="all.3eFP9R.3"  title="原文:: client">クライアント</span></td>
<td class=""><span class="merged" id="all.802hp.2"  title="原文:: (none)">(なし)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2mYEHC"  title="原文: jersey.connector.helidon.defaultHeaders">jersey.connector.helidon.defaultHeaders</span></td>
<td class=""><span class="merged" id="all.v2eCc.1"  title="原文: Map&lt;String, String&gt;"><code>Map&lt;String, String></code></span></td>
<td class=""><span class="merged" id="all.3eFP9R.4"  title="原文:: client">クライアント</span></td>
<td class=""><span class="merged" id="all.802hp.3"  title="原文:: (none)">(なし)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rhHdP"  title="原文: jersey.connector.helidon.protocolId">jersey.connector.helidon.protocolId</span></td>
<td class=""><span class="merged" id="all.3D2UxH"  title="原文: String"><code>String</code></span></td>
<td class=""><span class="merged" id="all.2Z5j9H"  title="原文:: invocation">起動</span></td>
<td class=""><span class="merged" id="all.802hp.4"  title="原文:: (none)">(なし)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OrizD"  title="原文: jersey.connector.helidon.shareConnectionCache">jersey.connector.helidon.shareConnectionCache</span></td>
<td class=""><span class="merged" id="all.Zw9Rq.1"  title="原文: Boolean"><code>Boolean</code></span></td>
<td class=""><span class="merged" id="all.3eFP9R.5"  title="原文:: client">クライアント</span></td>
<td class=""><span class="merged" id="all.njUKu"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>


<h3 id="_http2_support"><span class="merged" id="all.3Nb1qa" title="原文 : HTTP/2 Support">HTTP/2のサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.njsJ4.spl1" title="原文 : One clear advantage of using the Helidon connector, as opposed to the default one provided by Jersey, is the ability to issue HTTP/2 requests.">Jerseyによって提供されるデフォルトのコネクタとは対照的に、Helidonコネクタを使用する明確な利点の1つは、HTTP/2リクエストを発行する機能です。</span> <span class="merged" id="all.njsJ4.spl2" title="原文 : There are three ways to enable HTTP/2:">HTTP/2を有効にするには、次の3つの方法があります:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4f7Cmt" title="原文 : Via content negotiation from HTTP/1.1, where the initial request is HTTP/1.1 (text) and the first response is HTTP/2 (binary), assuming the negotiation is successful.">HTTP/1.1からのコンテンツ・ネゴシエーション。最初のリクエストはHTTP/1.1 (テキスト)で、最初のレスポンスはHTTP/2 (バイナリ)で、ネゴシエーションが成功すると仮定します。</span>

</li>
<li>
<span class="merged" id="all.D0rid.spl1" title="原文 : Similar to (1) except that a TLS extension called ALPN is used to convey the upgrade negotiation.">(1)と同様ですが、ALPNというTLS拡張がアップグレード・ネゴシエーションの伝達に使用される点が異なります。</span> <span class="merged" id="all.D0rid.spl2" title="原文 : Naturally, this only works with secure connections, so TLS is a requirement here.">当然、これはセキュアな接続でのみ機能するため、ここではTLSが要件となります。</span> 

</li>
<li>
<span class="merged" id="all.1RGknN.spl1" title="原文 : Using prior knowledge, where the client simply sends an HTTP/2 request knowing a priori that the server is capable of handling it.">以前の知識を使用して、クライアントがHTTP/2リクエストを送信するだけで、サーバーが処理できることが<em>先験的に</em>わかります。</span> <span class="merged" id="all.1RGknN.spl2" title="原文 : This option always requires TLS.">このオプションには常にTLSが必要です。</span> 

</li>
</ol>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.8"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_http2_negotiation_without_tls"><span class="merged" id="all.3yxN1k" title="原文 : HTTP/2 Negotiation Without TLS">TLSなしのHTTP/2ネゴシエーション</span></h3>
<div class="section">
<p><span class="merged" id="all.yZ5pN.spl1" title="原文 : Without TLS, HTTP/2 negotiation is accomplished by setting a single property.">TLSを使用しない場合、HTTP/2ネゴシエーションは単一のプロパティを設定することによって実行されます。</span> <span class="merged" id="all.yZ5pN.spl2" title="原文 : In the example below, the property is set on the correspoding WebTarget, which indicates that it applies to all requests created from it.">次の例では、プロパティが対応する<code>WebTarget</code>に設定されています。このプロパティは、このプロパティから作成されたすべてのリクエストに適用されます。</span> </p>

<markup
lang="java"

>  ClientConfig clientConfig = new ClientConfig();
  clientConfig.connectorProvider(HelidonConnectorProvider.create());
  Client client = ClientBuilder.newClient(clientConfig);

  WebTarget webTarget = client.target(...).path(...)
      .property(HelidonProperties.PROTOCOL_ID, Http2Client.PROTOCOL_ID);      // HTTP/2 upgrade
  try (Response response = webTarget.request().get()) {
      // ...
  }</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3a1AvQ" title="原文 : Properties in the Jakarta REST Client API can be set on Client, WebTarget and Invocation and are inherited accordingly.">Jakarta RESTクライアントAPIのプロパティは、<code>Client</code>、<code>WebTarget</code>および<code>Invocation</code>に設定でき、それに応じて継承されます。</span></p>
</div>

<p><span class="merged" id="all.1NNKzI" title="原文 : The request invocation in the example above will include an HTTP/2 protocol upgrade request which may be granted by the server if HTTP/2 support is enabled.">前述の例のリクエスト呼出しには、HTTP/2サポートが有効な場合にサーバーによって付与されるHTTP/2プロトコル・アップグレード・リクエストが含まれます。</span></p>

</div>


<h3 id="_http2_negotiation_with_tlsalpn"><span class="merged" id="all.47uxLF" title="原文 : HTTP/2 Negotiation With TLS/ALPN">TLS/ALPNによるHTTP/2ネゴシエーション</span></h3>
<div class="section">
<p><span class="merged" id="all.3peAqU.spl1" title="原文 : ALPN is a TLS extension that can be used for HTTP/2 negotiation.">ALPNは、HTTP/2ネゴシエーションに使用できるTLS拡張です。</span> <span class="merged" id="all.3peAqU.spl2" title="原文 : The Helidon connector accepts a Tls instance to enable protocol security and also to negotiate an HTTP/2 upgrade as shown below.">Helidonコネクタは、プロトコル・セキュリティを有効にする<code>Tls</code>インスタンスを受け入れ、次に示すようにHTTP/2アップグレードをネゴシエートします。</span> </p>

<markup
lang="java"

>  Tls tls = Tls.builder()
               .trustAll(true)
               .addApplicationProtocol(Http2Client.PROTOCOL_ID)        // HTTP/2 upgrade
               .endpointIdentificationAlgorithm(Tls.ENDPOINT_IDENTIFICATION_NONE)
               .build();

  ClientConfig clientConfig = new ClientConfig();
  clientConfig.connectorProvider(HelidonConnectorProvider.create());
  config.property(HelidonProperties.TLS, tls);
  Client client = ClientBuilder.newClient(clientConfig);

  WebTarget webTarget = client.target(...).path(...);
  try (Response response = webTarget.request().get()) {
      // ...
  }</markup>

<p><span class="merged" id="all.jUCVJ.spl1" title="原文 : The call to addApplicationProtocol() indicates the desire to negotiate a protocol upgrade."><code>addApplicationProtocol()</code>へのコールは、プロトコル・アップグレードをネゴシエートすることを示します。</span> <span class="merged" id="all.jUCVJ.spl2" title="原文 : Naturally, ALPN only works on secure connections, so TLS is always configured at the same time.">当然、ALPNはセキュアな接続でのみ機能するため、TLSは常に同時に構成されます。</span> </p>

</div>


<h3 id="_http2_prior_knowledge"><span class="merged" id="all.341j7D" title="原文 : HTTP/2 Prior Knowledge">HTTP/2以前のナレッジ</span></h3>
<div class="section">
<p><span class="merged" id="all.2YCSNQ.spl1" title="原文 : The last example shows how to enable HTTP/2 when prior knowledge of the server’s capabilities is known ahead of time.">最後の例は、サーバーの機能に関する以前の知識が事前にわかっている場合にHTTP/2を有効にする方法を示しています。</span> <span class="merged" id="all.2YCSNQ.spl2" title="原文 : In order to force HTTP/2 for the initial request, we must provide an Http2ClientProtocolConfig instance that is properly configured for that purpose.">初期リクエストにHTTP/2を強制するには、その目的のために適切に構成された<code>Http2ClientProtocolConfig</code>インスタンスを指定する必要があります。</span> <span class="merged" id="all.2YCSNQ.spl3" title="原文 : Passing protocol configurations is a general mechanism supported by the connector; in this example, we take advantage of this mechanism to pre-configure the desired HTTP/2 support as shown next.">プロトコル構成を渡すことは、コネクタでサポートされる一般的なメカニズムです。この例では、このメカニズムを利用して、次に示すように目的のHTTP/2サポートを事前構成します。</span> </p>

<markup
lang="java"

>  Tls tls = Tls.builder()
               .trustAll(true)
               .endpointIdentificationAlgorithm(Tls.ENDPOINT_IDENTIFICATION_NONE)
               .build();

  ClientConfig clientConfig = new ClientConfig();
  clientConfig.connectorProvider(HelidonConnectorProvider.create());
  clientConfig.property(HelidonProperties.TLS, tls);
  clientConfig.property(HelidonProperties.PROTOCOL_CONFIGS,
                        List.of(Http2ClientProtocolConfig.builder()
                                                   .priorKnowledge(true)    // HTTP/2 knowlege
                                                   .build()));
  Client client = ClientBuilder.newClient(clientConfig);

  WebTarget webTarget = client.target(...).path(...);
  try (Response response = webTarget.request().get()) {
      // ...
  }</markup>

<p><span class="merged" id="all.2JA2LZ" title="原文 : The property HelidonProperties.PROTOCOL_CONFIGS accepts a list of protocol configurations that are passed directly to the underlying WebClient layer.">プロパティ<code>HelidonProperties.PROTOCOL_CONFIGS</code>は、基礎となる<code>WebClient</code>レイヤーに直接渡されるプロトコル構成のリストを受け入れます。</span></p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.6"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.1ER03c" title="原文 : For additional information, see the Jakarta REST Javadocs.">詳細は、<a href="https://jakarta.ee/specifications/restful-ws/3.1.0/apidocs" target="_blank">Jakarta REST Javadocs</a>を参照してください。</span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.5"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.34yWq4" title="原文 : Jakarta REST Client Specification"><a href="https://jakarta.ee/specifications/restful-ws/3.1.0/jakarta-restful-ws-spec-3.1.0.html#client_api" target="_blank">Jakarta RESTクライアント仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.LVu8R"  title="原文:: Jersey User Guide"><a href="https://eclipse-ee4j.github.io/jersey.github.io/documentation/latest31x/index.html" target="_blank">Jersey ユーザー・ガイド</a></span></p>

</li>
</ul>

</div>

</doc-view>
