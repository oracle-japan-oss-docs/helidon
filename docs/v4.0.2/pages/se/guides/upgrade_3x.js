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


<h2 id="_http2_support"><span class="merged" id="all.2jVSxW" title="原文 : Http/2 Support">Http/2 Support</span></h2>
<div class="section">
<p><span class="merged" id="all.1yjVQH" title="原文 : Helidon support of Http/2 is no longer experimental.">Http/2のHelidonサポートは、実験的ではなくなりました。</span></p>

<p><span class="merged" id="all.4XFxAk" title="原文 : Http/2 needed to be explicitly enabled by configuration in Helidon 2:">Http/2は、Helidon 2の構成によって明示的に有効にする必要があります:</span></p>

<markup
lang="yaml"
title="Enabling Http/2 support in Helidon 2"
>server:
  port: 8080
  host: 0.0.0.0
  experimental:
    enable-http2: true
    http2-max-content-length: 16384</markup>

<p><span class="merged" id="all.1Sd9qP" title="原文 : In Helidon 3 Http/2 is automatically enabled when artifact with Http/2 support is available on the classpath.">Helidon 3では、Http/2サポートのあるアーティファクトがクラスパスで使用可能な場合、Http/2は自動的に有効になります。</span></p>

<markup
lang="xml"
title="Enabling Http/2 support in Helidon 3 by adding dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-reactive-webserver-http2&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4ObaIi" title="原文 : With above dependency Helidon 3 supports Http/2 upgrade from Http/1, cleartext Http/2 without prior knowledge and Http/2 with ALPN over TLS.">上の依存関係では、Helidon 3は、Http/1からのHttp/2アップグレード、事前の知識のないクリア・テキストHttp/2、およびTLS経由のALPNを使用したHttp/2をサポートしています。</span></p>

<p><span class="merged" id="all.CuXQf" title="原文 : In Helidon 2, max content length was configurable with server.experimental.http2-max-content-length, in Helidon 3 can be configured with server.max-upgrade-content-length globally or per socket with the same max-upgrade-content-length key.">Helidon 2では、最大コンテンツ長は<code>server.experimental.http2-max-content-length</code>で構成でき、Helidon 3では、<code>server.max-upgrade-content-length</code>を使用してグローバルに構成することも、同じ<code>max-upgrade-content-length</code>キーを使用してソケットごとに構成することもできます。</span></p>

<markup
lang="yaml"
title="Max upgrade content length in Helidon 3"
>server:
  port: 8080
  host: 0.0.0.0
  max-upgrade-content-length: 16384</markup>

<p><span class="merged" id="all.1S1AaE.1" title="原文 : For further information check WebServer Documentation">詳細は、<router-link to="/se/webserver">「WebServerドキュメント」</router-link>を参照してください</span></p>

</div>


<h2 id="_websocket"><span class="merged" id="all.3eb8Ci"  title="原文: WebSocket">WebSocket</span></h2>
<div class="section">
<p><span class="merged" id="all.3l4ngV.spl1" title="原文 : Helidon SE support is now based on the WebSocketRouting class which enables Helidon application to configure routing for both annotated and programmatic WebSocket endpoints.">Helidon SEサポートは、<code>WebSocketRouting</code>クラスに基づいており、これによってHelidonアプリケーションが注釈付きおよびプログラム的にWebSocketエンドポイントの両方のルーティングを構成できます。</span> <span class="merged" id="all.3l4ngV.spl2" title="原文 : TyrusSupport is now deprecated."><code>TyrusSupport</code>は非推奨になりました。</span> <span class="merged" id="all.3l4ngV.spl3" title="原文 : Websocket support in now placed in different artifact.">Websocketのサポートは別のアーティファクトに配置されるようになりました。</span> </p>

<markup
lang="xml"
title="Helidon 2 WebSocket support dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-reactive-webserver-tyrus&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"
title="Helidon 3 WebSocket support dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-reactive-webserver-websocket&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.HrpBw" title="原文 : In Helidon 2, WebSocket routing is defined by registering TyrusSupport as additional service:">Helidon 2では、WebSocketルーティングは、追加サービスとして<code>TyrusSupport</code>を登録することによって定義されます:</span></p>

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


<h2 id="_deprecations"><span class="merged" id="all.2qNGyj.1"  title="原文:: Deprecations">非推奨</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3V9nS7.spl1" title="原文 : The custom Helidon OCI clients have been deprecated (See PR).">カスタムのHelidon OCIクライアントは非推奨になりました(<a href="https://github.com/oracle/helidon/pull/4015" target="_blank">「PRを見る」</a>)。</span> <span class="merged" id="all.3V9nS7.spl2" title="原文 : Use the OCI Java SDK instead.">かわりにOCI Java SDKを使用してください。</span> <span class="merged" id="all.3V9nS7.spl3" title="原文 : If you use Helidon MP you can inject OCI SDK clients by adding the dependency io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi.">Helidon MPを使用する場合は、依存関係<code>io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi</code>を追加して、OCI SDKクライアントをインジェクトできます。</span> </p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2RLXjd" title="原文 : See Resolving compatibility issue with OCI SDK for detailed information on how to work around this issue.">この問題に対処する方法の詳細は、<router-link :to="{path: '/se/integrations/oci', hash: '#oci-compatibility'}">「OCI SDKとの互換性の問題の解決」</router-link>を参照してください。</span></p>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Uzv2B.spl1" title="原文 : The MultiPart buffered readers have been deprecated (See PR).">MultiPartバッファ・リーダーは非推奨になりました(<a href="https://github.com/oracle/helidon/pull/4096" target="_blank">「PRを見る」</a>)。</span> <span class="merged" id="all.Uzv2B.spl2" title="原文 : Use the MultiPart stream readers instead.">かわりにMultiPartストリーム・リーダーを使用します。</span> </p>

</li>
</ul>


<h3 id="_helidon_common"><span class="merged" id="all.3JI2tz.1" title="原文 : Helidon Common">Helidon共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.3" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.47jEsR.1" title="原文 : Resource - old configuration approach (since 2.0)"><code>Resource</code> - 古い構成アプローチ(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.2oesVM.1" title="原文 : ThreadPoolSupplier - Named thread pools (since 2.4.2)"><code>ThreadPoolSupplier</code> - 名前付きスレッド・プール(2.4.2以降)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1Lcpz1.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4363" target="_blank">「タスク」</a>を参照してください。</span></p>

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

<p><span class="merged" id="all.1QCX4a.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4364" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_metrics"><span class="merged" id="all.4LL0ot.3"  title="原文:: Metrics">メトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.5" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.218zr.1" title="原文 : MetricsSupport - 3 methods, replacing Config with metrics settings"><code>MetricsSupport</code> - 3つのメソッド、構成をメトリクス設定に置き換えます</span></p>

</li>
<li>
<p><span class="merged" id="all.3RAsoh.1" title="原文 : KeyPerformanceIndicatorMetricsSettings - New class in metrics API, for backward compatibility only"><code>KeyPerformanceIndicatorMetricsSettings</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>

</li>
<li>
<p><span class="merged" id="all.3ZcOZy.1" title="原文 : RegistryFactory - New class in metrics API, for backward compatibility only"><code>RegistryFactory</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1OPWJh.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4365" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_common_context"><span class="merged" id="all.OsfrK.1" title="原文 : Common Context">共通コンテキスト</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.6" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3UV2Nn.1" title="原文 : DataPropagationProvider - clearData should use new method"><code>DataPropagationProvider</code> - clearDataは新しいメソッドを使用する必要があります</span></p>

</li>
</ul>

<p><span class="merged" id="all.1RR3c2.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4366" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_grpc_core"><span class="merged" id="all.1xNpcX.1" title="原文 : GRPC core">GRPCコア</span></h3>
<div class="section">
<p><span class="merged" id="all.1PPfua.1"  title="原文:: Deprecations:">非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.EiY6h.1" title="原文 : JavaMarshaller - removed support for JavaMarshaller"><code>JavaMarshaller</code> - JavaMarshallerのサポートを削除しました</span></p>

</li>
</ul>

<p><span class="merged" id="all.1SCHQN.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4367" target="_blank">「タスク」</a>を参照してください。</span></p>

<p><span class="merged" id="all.4FwGBP" title="原文 : gRPC scope is temporarily smaller in Helidon, please follow issue https://github.com/helidon-io/helidon/issues/5418">gRPCスコープは、Helidonで一時的に小さくなっています。問題<a class="bare" href="https://github.com/helidon-io/helidon/issues/5418" target="_blank">https://github.com/helidon-io/helidon/issues/5418</a>に従ってください</span></p>

</div>


<h3 id="_lra"><span class="merged" id="all.HhhKg.1"  title="原文:: LRA">LRA</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.7" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3XXrcE.1" title="原文 : CoordinatorClient - multiple methods"><code>CoordinatorClient</code> - 複数のメソッド</span></p>

</li>
<li>
<p><span class="merged" id="all.3vtbis.1"  title="原文: Headers"><code>Headers</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.1IQk1s.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4368" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_mp_messaging"><span class="merged" id="all.1uBax7.1" title="原文 : MP Messaging">MPメッセージング</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.8" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3w69C3.1" title="原文 : MessagingCdiExtension - Alternative methods used"><code>MessagingCdiExtension</code> - 使用される代替メソッド</span></p>

</li>
</ul>

<p><span class="merged" id="all.1J3MWn.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4369" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_jwt"><span class="merged" id="all.VRED4.1"  title="原文:: JWT">JWT</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.9" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.49ZVyW.1" title="原文 : Jwt - Audience can be a list (since 2.4.0)"><code>Jwt</code> - オーディエンスはリストにできます(2.4.0以降)</span></p>

</li>
</ul>

<p><span class="merged" id="all.jyjGC.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4370" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_mp_metrics"><span class="merged" id="all.27MIlP.1" title="原文 : MP Metrics">MPメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.10" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.34Ex3N.1" title="原文 : MetricUtil - multiple methods"><code>MetricUtil</code> - 複数のメソッド</span></p>

</li>
<li>
<p><span class="merged" id="all.3dmwHe.1" title="原文 : MetricsCdiExtension - multiple methods"><code>MetricsCdiExtension</code> - 複数のメソッド</span></p>

</li>
</ul>

<p><span class="merged" id="all.lS2tZ.2" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4371" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_http_signature_security_provider"><span class="merged" id="all.2LODwq.1" title="原文 : HTTP Signature Security Provider">HTTPシグネチャ・セキュリティ・プロバイダ</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.26prTb.1" title="原文 : backwardCompatibleEol - set to false"><code>backwardCompatibleEol</code> - falseに設定</span></p>

</li>
</ul>

<p><span class="merged" id="all.munNK.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4372" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_service_common"><span class="merged" id="all.DM9T1.1" title="原文 : Service Common">サービス共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.11" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.35rFv6.1" title="原文 : HelidonRestServiceSupport - method configureEndpoint(Rules)"><code>HelidonRestServiceSupport</code> - メソッド<em>configureEndpoint(Rules)</em></span></p>

</li>
</ul>

<p><span class="merged" id="all.lS2tZ.3" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4371" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_webserver"><span class="merged" id="all.2mhjof.1"  title="原文: WebServer">WebServer</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.21GbHz.1.spl1" title="原文 : Static content support in WebServer - moved to a separate module."><code>WebServer</code>の<code>Static content support</code> - 別のモジュールに移動しました。</span> <span class="merged" id="all.21GbHz.1.spl2" title="原文 : Fully removed from WebServer module."><code>WebServer</code>モジュールから完全に削除されました。</span> </p>

</li>
</ul>

<p><span class="merged" id="all.qyfG0.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4374" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>

</div>

</doc-view>
