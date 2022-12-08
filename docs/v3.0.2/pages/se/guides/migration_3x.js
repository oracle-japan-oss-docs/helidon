<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.eokJl" title="原文 : Helidon SE 3.x Upgrade Guide">Helidon SE 3.xアップグレード・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.dwv5y.spl1" title="原文 : In Helidon 3 we have made some changes to APIs and runtime behavior.">Helidon 3では、APIおよびランタイムの動作にいくつか変更を加えました。</span> <span class="merged" id="all.dwv5y.spl2" title="原文 : This guide will help you upgrade a Helidon SE 2.x application to 3.x.">このガイドは、Helidon SE 2.xアプリケーションを3.xにアップグレードする際に役立ちます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_java_17_runtime"><span class="merged" id="all.4XVaeG.1"  title="原文:: Java 17 Runtime">Java 17 Runtime</span></h2>
<div class="section">
<p><span class="merged" id="all.SRXJs.1.spl1" title="原文 : Java 11 is no longer supported in Helidon 3.">Java 11は、Helidon 3ではサポートされなくなりました。</span> <span class="merged" id="all.SRXJs.1.spl2"  title="原文:: Java 17 or newer is required.">Java 17以上が必要です。</span> <span class="merged" id="all.SRXJs.1.spl3" title="原文 : Please follow the instructions in Prerequisites for proper installation.">正しくインストールするには、<router-link to="/about/prerequisites">「事前設定」</router-link>の手順に従ってください。</span> </p>

</div>


<h2 id="_new_routing"><span class="merged" id="all.1Dygex"  title="原文:: New Routing">新規工順</span></h2>
<div class="section">
<p><span class="merged" id="all.UBIps" title="原文 : Handling routes based on the protocol version is now possible by registering specific routes on routing builder.">ルーティング・ビルダーで特定のルートを登録することで、プロトコル・バージョンに基づくルートの処理が可能になりました。</span></p>

<p><span class="merged" id="all.1S1AaE" title="原文 : For further information check WebServer Documentation">詳細は、<router-link to="/se/webserver">「WebServerドキュメント」</router-link>を参照してください</span></p>

</div>


<h2 id="_http2_support"><span class="merged" id="all.3Nb1qa" title="原文 : HTTP/2 Support">HTTP/2のサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.3ExSpq" title="原文 : Helidon support of HTTP/2 is no longer experimental.">HTTP/2のHelidonサポートはもう実験的ではありません。</span></p>

<p><span class="merged" id="all.9WDhe" title="原文 : HTTP/2 had to be explicitly enabled by configuration in Helidon 2.x:">HTTP/2は、Helidon 2.xの構成で明示的に有効にする必要がありました:</span></p>

<markup
lang="yaml"
title="Enabling Http/2 support in Helidon 2"
>server:
  port: 8080
  host: 0.0.0.0
  experimental:
    enable-http2: true
    http2-max-content-length: 16384</markup>

<p><span class="merged" id="all.1gNoQf" title="原文 : In Helidon 3.x, HTTP/2 is automatically enabled when an artifact with HTTP/2 support is available in the classpath.">Helidon 3.xでは、HTTP/2サポートを含むアーティファクトがクラスパスで使用可能になると、HTTP/2が自動的に有効になります。</span></p>

<markup
lang="xml"
title="Enabling HTTP/2 support in Helidon 3 by adding dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-http2&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3dJRu3" title="原文 : By adding the Helidon WebServer dependency in Helidon 3.x, you can upgrade HTTP/1 to HTTP/2, use without prior knowledge the HTTP/2 Cleartext (H2C) client, and extend HTTP/2 with Application-Layer Protocol Negotiation (ALPN) over TLS.">Helidon 3.xにHelidon WebServer依存関係を追加すると、HTTP/1をHTTP/2にアップグレードし、HTTP/2クリア・テキスト(H2C)クライアントを事前に知ることなく使用し、HTTP/2をTLS経由でApplication-Layerプロトコル・ネゴシエーション(ALPN)で拡張できます。</span></p>

<p><span class="merged" id="all.ORef.spl1" title="原文 : In Helidon 2.x, max content length was configurable with server.experimental.http2-max-content-length.">Helidon 2.xでは、コンテンツの最大長は<code>server.experimental.http2-max-content-length</code>で構成可能でした。</span> <span class="merged" id="all.ORef.spl2" title="原文 : In Helidon 3.x max content length can be configured with server.max-upgrade-content-length globally or per socket with the same max-upgrade-content-length key.">Helidonでは、3.xの最大コンテンツ長は、グローバルに<code>server.max-upgrade-content-length</code>を使用するか、同じ<code>max-upgrade-content-length</code>キーを持つソケットごとに構成できます。</span> </p>

<markup
lang="yaml"
title="Max upgrade content length in Helidon 3"
>server:
  port: 8080
  host: 0.0.0.0
  max-upgrade-content-length: 16384</markup>

<p><span class="merged" id="all.2paFC5" title="原文 : For more information, see WebServer Documentation">詳細は、<router-link to="/se/webserver">「WebServerドキュメント」</router-link>を参照してください</span></p>

</div>


<h2 id="_websocket"><span class="merged" id="all.3eb8Ci"  title="原文: WebSocket">WebSocket</span></h2>
<div class="section">
<p><span class="merged" id="all.2aLUEV.spl1" title="原文 : Helidon SE support is now based on the WebSocketRouting class which enables Helidon application to configure routing for both annotated and programmatic WebSocket endpoints.">Helidon SEサポートは、<code>WebSocketRouting</code>クラスに基づいており、これによってHelidonアプリケーションが注釈付きおよびプログラム的にWebSocketエンドポイントの両方のルーティングを構成できます。</span> <span class="merged" id="all.2aLUEV.spl2" title="原文 : TyrusSupport is now deprecated."><code>TyrusSupport</code>は非推奨になりました。</span> <span class="merged" id="all.2aLUEV.spl3" title="原文 : Websocket support in now placed in a different artifact.">Websocketのサポートが別のアーティファクトに配置されました。</span> </p>

<markup
lang="xml"
title="Helidon 2.x WebSocket support dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-tyrus&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"
title="Helidon 3.x WebSocket support dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-websocket&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3peuGo" title="原文 : In Helidon 2.x, WebSocket routing is defined by registering TyrusSupport as an additional service:">Helidon 2.xでは、WebSocketルーティングは、<code>TyrusSupport</code>を追加サービスとして登録することで定義されます:</span></p>

<markup
lang="java"
title="Helidon 2 WebSocket route registering"
>WebServer.builder(Routing.builder()
             .register("/rest", new SomeRestService()) <span class="conum" data-value="1" />
             .register("/websocket",TyrusSupport.builder() <span class="conum" data-value="2" />
                 .register(ServerEndpointConfig.Builder
                           .create(MessageBoardEndpoint.class, "/")
                           .encoders(encoders)
                           .build())
                 .build()
             ))
             .port(8080)
   .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4NE1Ct" title="原文 : Traditional REST routing service registration">従来のRESTルーティング・サービス登録</span></li>
<li data-value="2"><span class="merged" id="all.4P8CXC" title="原文 : WebSocket setup with Tyrus service">Tyrusサービスを使用したWebSocket設定</span></li>
</ul>

<p><span class="merged" id="all.39mW9Z" title="原文 : In Helidon 3, WebSocket routing is defined by adding another routing:">Helidon 3では、WebSocketルーティングは別のルーティングを追加することによって定義されます:</span></p>

<markup
lang="java"
title="Helidon 3 WebSocket route registering"
>WebServer.builder()
         .routing(r -&gt; r
              .register("/rest", new SomeRestService()) <span class="conum" data-value="1" />
         )
         .addRouting(WebSocketRouting.builder() <span class="conum" data-value="2" />
                        .endpoint("/websocket", ServerEndpointConfig.Builder
                                .create(MessageBoardEndpoint.class, "/board")
                                .encoders(encoders)
                                .build())
                        .build())
         .port(8080)</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4NE1Ct.1" title="原文 : Traditional REST routing service registration">従来のRESTルーティング・サービス登録</span></li>
<li data-value="2"><span class="merged" id="all.2F2ChK" title="原文 : WebSocket routing setup">WebSocketルーティング設定</span></li>
</ul>

</div>


<h2 id="_deprecations_and_api_changes"><span class="merged" id="all.4IOAp8.1" title="原文 : Deprecations and API Changes">廃止とAPIの変更</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2HguJA.1.spl1" title="原文 : The custom Helidon OCI clients have been deprecated.">カスタムHelidon OCIクライアントは非推奨になりました。</span> <span class="merged" id="all.2HguJA.1.spl2" title="原文 : Use the OCI Java SDK instead.">かわりにOCI Java SDKを使用してください。</span> <span class="merged" id="all.2HguJA.1.spl3" title="原文 : If you use Helidon MP you can inject OCI SDK clients by adding the dependency io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi.">Helidon MPを使用する場合は、依存関係<code>io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi</code>を追加して、OCI SDKクライアントをインジェクトできます。</span> </p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2RLXjd.1" title="原文 : See Resolving compatibility issue with OCI SDK for detailed information on how to work around this issue.">この問題に対処する方法の詳細は、<router-link :to="{path: '/se/integrations/oci', hash: '#oci-compatibility'}">「OCI SDKとの互換性の問題の解決」</router-link>を参照してください。</span></p>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.svBTb.1.spl1" title="原文 : The MultiPart buffered readers have been deprecated.">MultiPartバッファ・リーダーは非推奨になりました。</span> <span class="merged" id="all.svBTb.1.spl2" title="原文 : Use the MultiPart stream readers instead.">かわりにMultiPartストリーム・リーダーを使用します。</span> </p>

</li>
</ul>


<h3 id="_helidon_common"><span class="merged" id="all.3JI2tz.1" title="原文 : Helidon Common">Helidon共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.3" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.47jEsR.1" title="原文 : Resource - old configuration approach (since 2.0)"><code>Resource</code> - 古い構成アプローチ(2.0以降)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2bcNSH.1.spl1" title="原文 : Method Optional&lt;Resource&gt; create(Config, String) is removed.">メソッド<code>Optional&lt;Resource> create(Config, String)</code>が削除されます。</span> <span class="merged" id="all.2bcNSH.1.spl2" title="原文 : Use create(Config) instead;">代わりに<code>create(Config)</code>を使用してください</span> </p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2oesVM.1" title="原文 : ThreadPoolSupplier - Named thread pools (since 2.4.2)"><code>ThreadPoolSupplier</code> - 名前付きスレッド・プール(2.4.2以降)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.17FqlA.1.spl1" title="原文 : Method ThreadPoolSupplier create(Config) is removed.">メソッド<code>ThreadPoolSupplier create(Config)</code>が削除されます。</span> <span class="merged" id="all.17FqlA.1.spl2" title="原文 : Use create(Config, String) instead;">代わりに<code>create(Config, String)</code>を使用してください</span> </p>

</li>
<li>
<p><span class="merged" id="all.6gGR9.1.spl1" title="原文 : Method ThreadPoolSupplier create() is removed.">メソッド<code>ThreadPoolSupplier create()</code>が削除されます。</span> <span class="merged" id="all.6gGR9.1.spl2" title="原文 : Use create(String) instead;">代わりに<code>create(String)</code>を使用してください</span> </p>

</li>
</ul>

</li>
</ul>

<p><span class="merged" id="all.2Wr9Ks.1"  title="原文:: Configuration changes:">構成の変更:</span></p>

<markup
lang="yaml"

># old (deprecated approach) - kept so existing applications may work
resources-prefix:
  test-1.resource-path: "src/test/resources/sample.txt"
  test-2.resource-resource-path: "sample.txt"
  test-3.resource-url: "file:./src/test/resources/sample.txt"
  test-4.resource-content-plain: "content"
  test-5.resource-content: "YWJjZGVmZ8SNxZnFvsO6xa8="

# new approach that does not use a prefix
resources:
  test-1.resource.path: "src/test/resources/sample.txt"
  test-2.resource.resource-path: "sample.txt"</markup>

</div>


<h3 id="_media_common"><span class="merged" id="all.1gdXiF.1" title="原文 : Media Common">メディア共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.4" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.DWky3.1" title="原文 : ContentReaders - Methods with alternatives (since 2.0)"><code>ContentReaders</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.1fsteD.1" title="原文 : ContentTypeCharset - Class with alternative (since 2.0)"><code>ContentTypeCharset</code> - 代替クラス(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.3Yy7bC.1" title="原文 : ContentWriters - Methods with alternatives (since 2.0)"><code>ContentWriters</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.1N6fYE.1" title="原文 : MessageBodyReaderContext - Methods with alternatives (since 2.0)"><code>MessageBodyReaderContext</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.2dd6yE.1" title="原文 : MessageBodyWriterContext - Methods with alternatives (since 2.0)"><code>MessageBodyWriterContext</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.3aJQH7.1" title="原文 : ReadableByteChannelPublisher - Class with alternative (since 2.0)"><code>ReadableByteChannelPublisher</code> - 代替クラス(2.0以降)</span></p>

</li>
</ul>

</div>


<h3 id="_metrics"><span class="merged" id="all.4LL0ot.12"  title="原文:: Metrics">メトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.5" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.218zr.1" title="原文 : MetricsSupport - 3 methods, replacing Config with metrics settings"><code>MetricsSupport</code> - 3つのメソッド、構成をメトリクス設定に置き換えます</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.xYy3O.1" title="原文 : Method MetricsSupport create(MetricsSettings, RestServiceSettings) has new parameter;">メソッド<code>MetricsSupport create(MetricsSettings, RestServiceSettings)</code>には新しいパラメータがあります</span></p>

</li>
<li>
<p><span class="merged" id="all.26EK3p.1" title="原文 : New method MetricsSupport create(MetricsSettings);">新しいメソッド<code>MetricsSupport create(MetricsSettings)</code> ;</span></p>

</li>
<li>
<p><span class="merged" id="all.4UP3y.1" title="原文 : New method MetricsSupport.Builder&lt;?&gt; builder();">新しいメソッド<code>MetricsSupport.Builder&lt;?> builder()</code> ;</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.RmYE1.1" title="原文 : KeyPerformanceIndicatorMetricsSettings - new class in metrics API, for backward compatibility only"><code>KeyPerformanceIndicatorMetricsSettings</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.GbOIf.1" title="原文 : Interface KeyPerformanceIndicatorMetricsSettings - marked for removal;">インタフェース<code>KeyPerformanceIndicatorMetricsSettings</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.1ByZ6g.1" title="原文 : Interface KeyPerformanceIndicatorMetricsSettingsCompatibility - marked for removal;">インタフェース<code>KeyPerformanceIndicatorMetricsSettingsCompatibility</code> - <code>for removal</code>とマークされました</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.3ZcOZy.1" title="原文 : RegistryFactory - New class in metrics API, for backward compatibility only"><code>RegistryFactory</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.38ynqf.1" title="原文 : Method RegistryFactory create() - marked for removal;">メソッド<code>RegistryFactory create()</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.46CmYt.1" title="原文 : Method RegistryFactory create(Config config) - marked for removal;">メソッド<code>RegistryFactory create(Config config)</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.2k6EA5.1" title="原文 : Method RegistryFactory getInstance() - marked for removal;">メソッド<code>RegistryFactory getInstance()</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.2I4Lz9.1" title="原文 : Method RegistryFactory getInstance(Config config) - marked for removal;">メソッド<code>RegistryFactory getInstance(Config config)</code> - <code>for removal</code>とマークされました</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_common_context"><span class="merged" id="all.OsfrK.1" title="原文 : Common Context">共通コンテキスト</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.6" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3UV2Nn.1" title="原文 : DataPropagationProvider - clearData should use new method"><code>DataPropagationProvider</code> - clearDataは新しいメソッドを使用する必要があります</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1hskrr.1" title="原文 : Method void clearData() - marked for removal, use void clearData(T data) instead;">メソッド<code>void clearData()</code> - 削除のマークが付いています。かわりに<code>void clearData(T data)</code>を使用</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_grpc_core"><span class="merged" id="all.3iK2vn.1" title="原文 : GRPC Core">GRPCコア</span></h3>
<div class="section">
<p><span class="merged" id="all.1PPfua.1"  title="原文:: Deprecations:">非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.EiY6h.1" title="原文 : JavaMarshaller - removed support for JavaMarshaller"><code>JavaMarshaller</code> - JavaMarshallerのサポートを削除しました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2lX0Fj.1" title="原文 : New default marshaller supplier will throw an exception if the code falls to where the JavaMarshaller was returned before to inform developer of the change">新しいデフォルトのマーシャラ・サプライヤは、コードが<code>JavaMarshaller</code>が返された場所にあれば例外をスローし、開発者に変更を通知</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_lra"><span class="merged" id="all.HhhKg.1"  title="原文:: LRA">LRA</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.7" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3VMwyl.1" title="原文 : CoordinatorClient - multiple methods removed"><code>CoordinatorClient</code> - 複数のメソッドが削除されました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.14utEP.1" title="原文 : Method Single&lt;URI&gt; start(String, long) - removed;">メソッド<code>Single&lt;URI> start(String, long)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.aKZbC.1" title="原文 : Method Single&lt;URI&gt; start(URI, String, long) - removed;">メソッド<code>Single&lt;URI> start(URI, String, long)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.2b3BEm.1" title="原文 : Method Single&lt;Optional&lt;URI&gt;&gt; join(URI, long, Participant) - removed;">メソッド<code>Single&lt;Optional&lt;URI>> join(URI, long, Participant)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.XAHEm.1" title="原文 : Method Single&lt;Void&gt; cancel(URI) - removed;">メソッド<code>Single&lt;Void> cancel(URI)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.30bc8R.1" title="原文 : Method Single&lt;Void&gt; close(URI) - removed;">メソッド<code>Single&lt;Void> close(URI)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.3kojIz.1" title="原文 : Method Single&lt;Void&gt; leave(URI, Participant) - removed;">メソッド<code>Single&lt;Void> leave(URI, Participant)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.KKXTt.1" title="原文 : Method Single&lt;LRAStatus&gt; status(URI) - removed;">メソッド<code>Single&lt;LRAStatus> status(URI)</code> - removed;</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2Pc3UT.1" title="原文 : Headers - class removed"><code>Headers</code> - クラスが削除されました</span></p>

</li>
</ul>

</div>


<h3 id="_mp_messaging"><span class="merged" id="all.1uBax7.1" title="原文 : MP Messaging">MPメッセージング</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.8" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.zFYQG.1" title="原文 : FormerHealthProbe - class marked for removal"><code>FormerHealthProbe</code> - 削除対象としてマークされたクラス</span></p>

</li>
<li>
<p><span class="merged" id="all.3w69C3.1" title="原文 : MessagingCdiExtension - Alternative methods used"><code>MessagingCdiExtension</code> - 使用される代替メソッド</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2MAoPn.1" title="原文 : Method Map&lt;String, Boolean&gt; channelsLiveness() - marked for removal;">メソッド<code>Map&lt;String, Boolean> channelsLiveness()</code> - 削除対象としてマーク</span></p>

</li>
<li>
<p><span class="merged" id="all.363fp6.1" title="原文 : Method Map&lt;String, Boolean&gt; channelsReadiness() - marked for removal;">メソッド<code>Map&lt;String, Boolean> channelsReadiness()</code> - 削除対象としてマーク</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_jwt"><span class="merged" id="all.VRED4.1"  title="原文:: JWT">JWT</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.9" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.49ZVyW.1" title="原文 : Jwt - Audience can be a list (since 2.4.0)"><code>Jwt</code> - オーディエンスはリストにできます(2.4.0以降)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1Jo2wO.1" title="原文 : Method Builder audience(String) - removed, use addAudience(String) instead;">メソッド<code>Builder audience(String)</code> - 削除、かわりに<code>addAudience(String)</code>を使用</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_mp_metrics"><span class="merged" id="all.27MIlP.1" title="原文 : MP Metrics">MPメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.10" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2lBmsu.1" title="原文 : MetricUtil - multiple methods removed"><code>MetricUtil</code> - 複数のメソッドが削除されました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3kHFu2.1" title="原文 : Method public static &lt;E extends Member &amp; AnnotatedElement, A extends Annotation&gt; LookupResult&lt;A&gt; lookupAnnotation(E, Class&lt;? extends Annotation&gt;, Class&lt;?&gt;) - removed;">メソッド<code>public static &lt;E extends Member &amp; AnnotatedElement, A extends Annotation> LookupResult&lt;A> lookupAnnotation(E, Class&lt;? extends Annotation>, Class&lt;?>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.XHUC7.1" title="原文 : Method &lt;A extends Annotation&gt; LookupResult&lt;A&gt; lookupAnnotation(AnnotatedType&lt;?&gt;, AnnotatedMethod&lt;?&gt;, Class&lt;A&gt;) - removed;">メソッド<code>&lt;A extends Annotation> LookupResult&lt;A> lookupAnnotation(AnnotatedType&lt;?>, AnnotatedMethod&lt;?>, Class&lt;A>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.qzZs2.1" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(MetricRegistry, E, Class&lt;?&gt;, Annotation, MatchingType) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(MetricRegistry, E, Class&lt;?>, Annotation, MatchingType)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.3V7pt5.2" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(E, Class&lt;?&gt;, LookupResult&lt;? extends Annotation&gt;) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(E, Class&lt;?>, LookupResult&lt;? extends Annotation>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.11qwyg.1" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(E, Class&lt;?&gt;, Annotation, MatchingType) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(E, Class&lt;?>, Annotation, MatchingType)</code> - removed;</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.1WfDt2.1" title="原文 : Method MetricsCdiExtension - multiple methods removed">メソッド<code>MetricsCdiExtension</code> - 複数のメソッドが削除されました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3V7pt5.3" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(E, Class&lt;?&gt;, LookupResult&lt;? extends Annotation&gt;) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(E, Class&lt;?>, LookupResult&lt;? extends Annotation>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.YkfPZ.1" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetricInternal(List&lt;RegistrationPrep&gt;, E, Class&lt;?&gt;, LookupResult&lt;? extends Annotation&gt;, Executable) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetricInternal(List&lt;RegistrationPrep>, E, Class&lt;?>, LookupResult&lt;? extends Annotation>, Executable)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.1zQDZn.1" title="原文 : Method void registerMetricsForAnnotatedSitesFromGrpcTest() - removed;">メソッド<code>void registerMetricsForAnnotatedSitesFromGrpcTest()</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.ILFWg.1" title="原文 : Method recordMetricAnnotatedClass(@Observes @WithAnnotations({Counted.class, Metered.class, Timed.class, ConcurrentGauge.class, SimplyTimed.class, Gauge.class}) ProcessAnnotatedType&lt;?&gt;) - removed;">メソッド<code>recordMetricAnnotatedClass(@Observes @WithAnnotations({Counted.class, Metered.class, Timed.class, ConcurrentGauge.class, SimplyTimed.class, Gauge.class}) ProcessAnnotatedType&lt;?>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.4EfFTr.1" title="原文 : Method &lt;T extends org.eclipse.microprofile.metrics.Metric&gt; MetricType getMetricType(T) - removed;">メソッド<code>&lt;T extends org.eclipse.microprofile.metrics.Metric> MetricType getMetricType(T)</code> - removed;</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_http_signature_security_provider"><span class="merged" id="all.2LODwq.1" title="原文 : HTTP Signature Security Provider">HTTPシグネチャ・セキュリティ・プロバイダ</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.26prTb.1" title="原文 : backwardCompatibleEol - set to false"><code>backwardCompatibleEol</code> - falseに設定</span></p>

</li>
</ul>

</div>


<h3 id="_service_common"><span class="merged" id="all.DM9T1.1" title="原文 : Service Common">サービス共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.11" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2pJ9Hb.1" title="原文 : HelidonRestServiceSupport - method configureEndpoint(Rules) deprecated."><code>HelidonRestServiceSupport</code> - メソッド<em>configureEndpoint(Rules)</em>は非推奨です。</span></p>

</li>
</ul>

</div>


<h3 id="_webserver"><span class="merged" id="all.2mhjof.2"  title="原文: WebServer">WebServer</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2KDsTc.1.spl1" title="原文 : io.helidon.webserver.staticcontent.* in WebServer - moved to a separate module."><code>WebServer</code>の<code>io.helidon.webserver.staticcontent.*</code> - 別のモジュールに移動しました。</span> <span class="merged" id="all.2KDsTc.1.spl2" title="原文 : Fully removed from WebServer module."><code>WebServer</code>モジュールから完全に削除されました。</span> </p>

</li>
</ul>

</div>

</div>

</doc-view>
