<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1QuKDa" title="原文 : Helidon SE Upgrade Guide">Helidon SEアップグレード・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.45GGbh.spl1" title="原文 : In Helidon 2 we have made some changes to APIs and runtime behavior.">Helidon 2では、APIおよびランタイム動作にいくつかの変更が加えられました。</span> <span class="merged" id="all.45GGbh.spl2" title="原文 : This guide will help you migrate a Helidon SE 1.x application to 2.x.">このガイドは、Helidon SE 1.xアプリケーションを2.xに移行する際に役立ちます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_java_8_runtime"><span class="merged" id="all.22v7bb.1"  title="原文:: Java 8 Runtime">Java 8ランタイム</span></h2>
<div class="section">
<p><span class="merged" id="all.24nd5B.1.spl1" title="原文 : Java 8 is no longer supported.">Java 8はサポートされなくなりました。</span> <span class="merged" id="all.24nd5B.1.spl2"  title="原文:: Java 11 or newer is required.">Java 11以上が必要です。</span> </p>

</div>

<h2 id="_common_utilities"><span class="merged" id="all.HKHGA.1"  title="原文:: Common Utilities">共通ユーティリティ</span></h2>
<div class="section">
<p><span class="merged" id="all.3YXe8g.1.spl1" title="原文 : Since Helidon 2.x now requires Java 11 the helper classes that were provided for Java 8 support have been removed.">Helidon 2.xにはJava 11が必要になったため、Java 8サポート用に提供されていたヘルパー・クラスは削除されました。</span> <span class="merged" id="all.3YXe8g.1.spl2" title="原文 : These have been replaced by the standard JDK classes:">これらは、標準のJDKクラスに置き換えられました:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.25EN3h.2"  title="原文:: Removed">削除</span></th>
<th><span class="merged" id="all.3qlG3x.2"  title="原文:: Replacement">置換</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2ufGmG.1"  title="原文: io.helidon.reactive.Flow"><code>io.helidon.reactive.Flow</code></span></td>
<td class=""><span class="merged" id="all.W6EVQ.1"  title="原文: java.util.concurrent.Flow"><code>java.util.concurrent.Flow</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rR3xh.1"  title="原文: io.helidon.common.CollectionsHelper"><code>io.helidon.common.CollectionsHelper</code></span></td>
<td class=""><span class="merged" id="all.G9JIY.1" title="原文 : Factory methods of Set, Map and List"><code>Set</code>、<code>Map</code>および<code>List</code>のファクトリ・メソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2f4nNb.1"  title="原文: io.helidon.common.OptionalHelper"><code>io.helidon.common.OptionalHelper</code></span></td>
<td class=""><span class="merged" id="all.41O80Z.1" title="原文 : Methods of java.util.Optional"><code>java.util.Optional</code>のメソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3y0tu9.1"  title="原文: io.helidon.common.StackWalker"><code>io.helidon.common.StackWalker</code></span></td>
<td class=""><span class="merged" id="all.VG7kk.1"  title="原文: java.lang.StackWalker"><code>java.lang.StackWalker</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3C4nmw.1"  title="原文: io.helidon.common.InputStreamHelper"><code>io.helidon.common.InputStreamHelper</code></span></td>
<td class=""><span class="merged" id="all.2BWWR5.1" title="原文 : Methods of java.io.InputStream"><code>java.io.InputStream</code>のメソッド</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_tracing"><span class="merged" id="all.4Mk18P.6"  title="原文:: Tracing">トレース</span></h2>
<div class="section">
<p><span class="merged" id="all.3r4piJ.1.spl1" title="原文 : We have upgraded to OpenTracing version 0.33.0 that is not backward compatible.">下位互換性のないOpenTracingバージョン0.33.0にアップグレードしました。</span> <span class="merged" id="all.3r4piJ.1.spl2" title="原文 : OpenTracing introduced the following breaking changes:">OpenTracingでは、次のブレーク変更が導入されました:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.25EN3h.3"  title="原文:: Removed">削除</span></th>
<th><span class="merged" id="all.3qlG3x.3"  title="原文:: Replacement">置換</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3SaICk.1"  title="原文: ScopeManager.active()"><code>ScopeManager.active()</code></span></td>
<td class=""><span class="merged" id="all.1T86OB.1"  title="原文: Tracer.activeSpan()"><code>Tracer.activeSpan()</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.73hiL.1"  title="原文: ScopeManager.activate(Span, boolean)"><code>ScopeManager.activate(Span, boolean)</code></span></td>
<td class=""><span class="merged" id="all.LD6Cm.1" title="原文 : ScopeManager.activate(Span) - second parameter is now always false"><code>ScopeManager.activate(Span)</code> - 第2パラメータは常に<code>false</code>になりました</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UBeTk.1"  title="原文: SpanBuilder.startActive()"><code>SpanBuilder.startActive()</code></span></td>
<td class=""><span class="merged" id="all.1ZLuaa.1"  title="原文: Tracer.activateSpan(Span)"><code>Tracer.activateSpan(Span)</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SpAsA.1" title="原文 : TextMapExtractAdapter and TextMapInjectAdapter"><code>TextMapExtractAdapter</code>および<code>TextMapInjectAdapter</code></span></td>
<td class=""><span class="merged" id="all.497BHA.1"  title="原文: TextMapAdapter"><code>TextMapAdapter</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1O7atl.1" title="原文 : Module name changed opentracing.api">モジュール名が<code>opentracing.api</code>を変更しました</span></td>
<td class=""><span class="merged" id="all.Y9siU.1" title="原文 : io.opentracing.api (same for noop and util)"><code>io.opentracing.api</code> (<code>noop</code>と<code>util</code>で同じ)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1XxbTO.1" title="原文 : If you use the TracerBuilder abstraction in Helidon and have no custom Spans, there is no change required">Helidonで<code>TracerBuilder</code>抽象化を使用し、カスタム・スパンがない場合、変更は必要ありません</span></p>

</div>

<h2 id="_security_oidc"><span class="merged" id="all.3PBD25.1" title="原文 : Security: OIDC">Security: OIDC</span></h2>
<div class="section">
<p><span class="merged" id="all.3UFMhz.1.spl1" title="原文 : When the OIDC provider is configured to use cookie (default configuration) to carry authentication information, the cookie Same-Site is now set to Lax (used to be Strict).">OIDCプロバイダがCookie (デフォルト構成)を使用して認証情報を送信するように構成されている場合、cookie <code>Same-Site</code>は<code>Lax</code>に設定されるようになりました(以前は<code>Strict</code>でした)。</span> <span class="merged" id="all.3UFMhz.1.spl2" title="原文 : This is to prevent infinite redirects, as browsers would refuse to set the cookie on redirected requests (due to this setting).">これは、(この設定により)ブラウザがリダイレクトされたリクエストにcookieを設定することを拒否するため、無限リダイレクトを防ぐためです。</span> <span class="merged" id="all.3UFMhz.1.spl3" title="原文 : Only in the case of the frontend host and identity host match, we leave Strict as the default">フロントエンド・ホストとアイデンティティ・ホストが一致する場合のみ、<code>Strict</code>をデフォルトのままにします</span> </p>

</div>

<h2 id="_getters"><span class="merged" id="all.10N9gb" title="原文 : Getters">Getters</span></h2>
<div class="section">
<p><span class="merged" id="all.2WqyDd.spl1" title="原文 : Some methods that act as getters of type T have been modified to return Optional&lt;T&gt;."><code>T</code>型のgetterとして機能する一部のメソッドは、<code>Optional&lt;T></code>を返すように変更されました。</span> <span class="merged" id="all.2WqyDd.spl2" title="原文 : You will need to change your code to handle the Optional return type."><code>Optional</code>の戻り型を処理するには、コードを変更する必要があります。</span> <span class="merged" id="all.2WqyDd.spl3" title="原文 : For example ServerRequest.spanContext() in 1.x had a return type of SpanContext.">たとえば、1.xの<code>ServerRequest.spanContext()</code>の戻り型は<code>SpanContext</code>でした。</span> <span class="merged" id="all.2WqyDd.spl4" title="原文 : In 2.x it has a return type of Optional&lt;SpanContext&gt;.">2.xでは、戻り型は<code>Optional&lt;SpanContext></code>です。</span> <span class="merged" id="all.2WqyDd.spl5" title="原文 : So if you had code like:">そのため、次のようなコードがあるとします:</span> </p>

<markup
lang="java"
title="Helidon 1.x Code"
>Span myNewSpan = GlobalTracer.get()
        .buildSpan(&ldquo;my-operation&rdquo;)
        .asChildOf(serverRequest.spanContext())
        .start();</markup>

<p><span class="merged" id="all.2Ewshg" title="原文 : you will need to change it to something like:">次のように変更する必要があります:</span></p>

<markup
lang="java"
title="Helidon 2.x Code"
>Tracer.SpanBuilder spanBuilder = serverRequest.tracer()
        .buildSpan("my-operation");
serverRequest.spanContext().ifPresent(spanBuilder::asChildOf);
Span myNewSpan = spanBuilder.start();</markup>

<p><span class="merged" id="all.3Gv3eQ" title="原文 : Note the use of ifPresent() on the returned Optional&lt;SpanContext&gt;.">戻された<code>Optional&lt;SpanContext></code>での<code>ifPresent()</code>の使用に注意してください。</span></p>

</div>

<h2 id="_configuration"><span class="merged" id="all.Pfqvy.4"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2pf8S5" title="原文 : File watching is now done through a ChangeWatcher - use of PollingStrategies.watch() needs to be refactored to FileSystemWatcher.create() and the method to configure it on config source builder has changed to changeWatcher(ChangeWatcher).">ファイル監視が<code>ChangeWatcher</code>を介して実行されるようになりました - <code>PollingStrategies.watch()</code>の使用は<code>FileSystemWatcher.create()</code>にリファクタする必要があり、構成ソース・ビルダーで構成するメソッドが<code>changeWatcher(ChangeWatcher)</code>に変更されました。</span>

</li>
<li>
<span class="merged" id="all.3ZF6Ak.spl1" title="原文 : Methods on ConfigSources now return specific builders (they used to return AbstractParsableConfigSource.Builder with a complex type declaration)."><code>ConfigSources</code>のメソッドは、特定のビルダーを返すようになりました(複合型宣言を使用して<code>AbstractParsableConfigSource.Builder</code>を返すために使用されました)。</span> <span class="merged" id="all.3ZF6Ak.spl2" title="原文 : If you store such a builder in a variable, either change it to the correct type, or use var">このようなビルダーを変数に格納する場合は、正しいタイプに変更するか、<code>var</code>を使用</span> 

</li>
<li>
<span class="merged" id="all.5Ibqo.spl1" title="原文 : Some APIs were cleaned up to be aligned with the development guidelines of Helidon.">一部のAPIは、Helidonの開発ガイドラインに合わせてクリーンアップされました。</span> <span class="merged" id="all.5Ibqo.spl2" title="原文 : When using Git config source, or etcd config source, the factory methods moved to the config source itself, and the builder now accepts all configuration options through methods">Git構成ソースまたはetcd構成ソースを使用する場合、ファクトリ・メソッドは構成ソース自体に移動され、ビルダーはメソッドを介してすべての構成オプションを受け入れるようになりました</span> 

</li>
<li>
<span class="merged" id="all.3Si5jH.spl1" title="原文 : The API of config source builders has been cleaned, so now only methods that are relevant to a specific config source type can be invoked on such a builder.">構成ソース・ビルダーのAPIがクリーンアップされたため、このようなビルダーで起動できるのは、特定の構成ソース・タイプに関連するメソッドのみになりました。</span> <span class="merged" id="all.3Si5jH.spl2" title="原文 : Previously you could configure a polling strategy on a source that did not support polling">以前は、ポーリングをサポートしていないソースでポーリング戦略を構成できました</span> 

</li>
<li>
<span class="merged" id="all.GLUj.spl1" title="原文 : There is a small change in behavior of Helidon Config vs. MicroProfile Config: The MP TCK require that system properties are fully mutable (e.g. as soon as the property is changed, it must be used), so MP Config methods work in this manner (with a certain performance overhead).">Helidon構成とMicroProfile構成の動作にわずかな変更があります: MP TCKでは、システム・プロパティが完全に可変である必要があるため(たとえば、プロパティが変更されるとすぐに使用する必要があります)、MP Configメソッドはこのように動作します(特定のパフォーマンス・オーバーヘッドがあります)。</span> <span class="merged" id="all.GLUj.spl2" title="原文 : Helidon Config treats System properties as a mutable config source, with a (optional) time based polling strategy.">Helidon Configは、システム・プロパティを可変の構成ソースとして扱い、(オプションの)時間ベースのポーリング戦略を使用します。</span> <span class="merged" id="all.GLUj.spl3" title="原文 : So the change is reflected as well, though not immediately (this is only relevant if you use change notifications).">したがって、変更はすぐに反映されますが、反映されません(これは変更通知を使用する場合にのみ該当します)。</span> 

</li>
<li>
<span class="merged" id="all.1VtpBH.spl1" title="原文 : CompositeConfigSource has been removed from Config."><code>CompositeConfigSource</code>が<code>Config</code>から削除されました。</span> <span class="merged" id="all.1VtpBH.spl2" title="原文 : If you need to configure MerginStrategy, you can do it now on Config Builder"><code>MerginStrategy</code>を構成する必要がある場合は、<code>Config</code> <code>Builder</code>ですぐに構成できます</span> 

</li>
</ol>
<p><span class="merged" id="all.2BqYFV" title="原文 : Example of advanced configuration of config:">構成の拡張構成の例:</span></p>

<markup
lang="java"

>Config.builder()
       // system properties with a polling strategy of 10 seconds
       .addSource(ConfigSources.systemProperties()
            .pollingStrategy(PollingStrategies.regular(Duration.ofSeconds(10))))
       // environment variables
       .addSource(ConfigSources.environmentVariables())
       // optional file config source with change watcher
       .addSource(ConfigSources.file(Paths.get("/conf/app.yaml"))
                          .optional()
                          .changeWatcher(FileSystemWatcher.create()))
       // classpath config source
       .addSource(ConfigSources.classpath("application.yaml"))
       // map config source (also supports polling strategy)
       .addSource(ConfigSources.create(Map.of("key", "value")))
       .build();</markup>

</div>

<h2 id="_resource_class_when_loaded_from_config"><span class="merged" id="all.2o0UyI" title="原文 : Resource Class When Loaded from Config">構成からロードされた場合のリソース区分</span></h2>
<div class="section">
<p><span class="merged" id="all.2Lpawb.spl1" title="原文 : The configuration approach to Resource class was using prefixes which was not aligned with our approach to configuration."><code>Resource</code>クラスへの構成アプローチで、構成へのアプローチと一致しないプレフィクスが使用されていました。</span> <span class="merged" id="all.2Lpawb.spl2" title="原文 : All usages were refactored as follows:">すべての使用方法が次のようにリファクタされました:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3hTby2" title="原文 : The Resource class expects a config node resource that will be used to read it"><code>Resource</code>クラスでは、読取りに使用される構成ノード<code>resource</code>が必要です</span>

</li>
<li>
<span class="merged" id="all.2L5o31" title="原文 : The feature set remains unchanged - we support path, classpath, url, content as plain text, and content as base64">機能セットは変更されません - パス、クラスパス、URL、プレーン・テキストのコンテンツおよびbase64のコンテンツをサポートしています</span>

</li>
<li>
<span class="merged" id="all.300BSH" title="原文 : Classes using resources are changed as well, such as KeyConfig - see details below">リソースを使用するクラス(<code>KeyConfig</code>など)も変更されます - 次の詳細を参照</span>

</li>
</ol>
</div>

<h2 id="_media_support"><span class="merged" id="all.4FqJq5" title="原文 : Media Support">メディアのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.4ZrxKJ.spl1" title="原文 : In Helidon 1.x support for JSON and other media types was configured when constructing webserver.Routing using the register method.">Helidonでは、<code>register</code>メソッドを使用して<code>webserver.Routing</code>を構築するときに、JSONおよびその他のメディア・タイプの1.xサポートが構成されていました。</span> <span class="merged" id="all.4ZrxKJ.spl2" title="原文 : In Helidon 2 Media Support has been refactored so that it can be shared between the Helidon WebServer and WebClient.">Helidon 2では、Helidon <code>WebServer</code>と<code>WebClient</code>の間で共有できるように、メディア・サポートがリファクタされています。</span> <span class="merged" id="all.4ZrxKJ.spl3" title="原文 : You now specify media support as part of the WebServer build:">WebServerビルドの一部としてメディア・サポートを指定します:</span> </p>

<markup
lang="java"

>WebServer.builder()
    .addMediaSupport(JsonpSupport.create()) //registers reader and writer for Json-P
    .build()</markup>

<p><span class="merged" id="all.3GUbdb" title="原文 : This replaces Routing.builder().register(JsonSupport.create())…​">これにより、<code>Routing.builder().register(JsonSupport.create())…​</code>が置換されます</span></p>

<p><span class="merged" id="all.2akSqE" title="原文 : The new JSON MediaSupport classes are:">新しいJSON MediaSupportクラスは次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1e6y9E" title="原文 : io.helidon.media.jsonp.JsonpSupport in module io.helidon.media:helidon-media-jsonp">モジュール<code>io.helidon.media:helidon-media-jsonp</code>の<code>io.helidon.media.jsonp.JsonpSupport</code></span></p>

</li>
<li>
<p><span class="merged" id="all.t4r1P" title="原文 : io.helidon.media.jsonb.JsonbSupport in module io.helidon.media:helidon-media-jsonb">モジュール<code>io.helidon.media:helidon-media-jsonb</code>の<code>io.helidon.media.jsonb.JsonbSupport</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1k1Pmz" title="原文 : io.helidon.media.jackson.JacksonSupport in module io.helidon.media:helidon-media-jackson">モジュール<code>io.helidon.media:helidon-media-jackson</code>の<code>io.helidon.media.jackson.JacksonSupport</code></span></p>

</li>
</ul>
</div>

<h2 id="_reactive"><span class="merged" id="all.1UTgB7"  title="原文:: Reactive">リアクティブ</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.25EN3h.4"  title="原文:: Removed">削除</span></th>
<th><span class="merged" id="all.3qlG3x.4"  title="原文:: Replacement">置換</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1fKLmF"  title="原文: io.helidon.common.reactive.ReactiveStreamsAdapter"><code>io.helidon.common.reactive.ReactiveStreamsAdapter</code></span></td>
<td class=""><span class="merged" id="all.1LXY4K"  title="原文: org.reactivestreams.FlowAdapters"><code>org.reactivestreams.FlowAdapters</code></span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_security_oidcconfig"><span class="merged" id="all.28dxYR" title="原文 : Security: OidcConfig">Security: OidcConfig</span></h2>
<div class="section">
<p><span class="merged" id="all.24Xq2K" title="原文 : Configuration has been updated to use the new Resource approach:">新しい<code>Resource</code>アプローチを使用するように構成が更新されました:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1gQUZe" title="原文 : oidc-metadata.resource is the new key for loading oidc-metadata from local resource"><code>oidc-metadata.resource</code>は、ローカル・リソースから<code>oidc-metadata</code>をロードするための新しいキーです</span>

</li>
<li>
<span class="merged" id="all.Kqp3L" title="原文 : sign-jwk.resource is the new key for loading signing JWK resource"><code>sign-jwk.resource</code>は、署名JWKリソースをロードするための新しいキーです</span>

</li>
</ol>
</div>

<h2 id="_security_jwtprovider_and_jwtauthprovider"><span class="merged" id="all.4ZluTk" title="原文 : Security: JwtProvider and JwtAuthProvider">Security: JwtProviderおよびJwtAuthProvider</span></h2>
<div class="section">
<p><span class="merged" id="all.24Xq2K.1" title="原文 : Configuration has been updated to use the new Resource approach:">新しい<code>Resource</code>アプローチを使用するように構成が更新されました:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.Im3tu" title="原文 : jwk.resource is the new key for loading JWK for verifying signatures"><code>jwk.resource</code>は、シグネチャを検証するためのJWKをロードする新しいキーです</span>

</li>
<li>
<span class="merged" id="all.1ZRuuF" title="原文 : jwt.resource is also used for outbound as key for loading JWK for signing tokens"><code>jwt.resource</code>は、署名トークンのJWKをロードするためのキーとしてアウトバウンドにも使用されます</span>

</li>
</ol>
</div>

<h2 id="_pki_key_configuration"><span class="merged" id="all.12eEX3" title="原文 : PKI Key Configuration">PKIキーの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1f7FyL" title="原文 : The configuration has been updated to have a nicer tree structure:">構成が更新され、よりよいツリー構造になりました:</span></p>

<p><span class="merged" id="all.1xMiwr" title="原文 : Example of a public key from keystore:">キーストアからの公開キーの例:</span></p>

<markup
lang="yaml"

>keystore:
   cert.alias: "service_cert"
   resource.path: "/conf/keystore.p12"
   type: "PKCS12"
   passphrase: "password"</markup>

<p><span class="merged" id="all.2nkIL8" title="原文 : Example of a private key from keystore:">キーストアからの秘密キーの例:</span></p>

<markup
lang="yaml"

>keystore:
  key:
    alias: "myPrivateKey"
    passphrase: "password"
  resource.resource-path: "keystore/keystore.p12"
  passphrase: "password"</markup>

<p><span class="merged" id="all.94YyZ" title="原文 : Example of a pem resource with private key and certificate chain:">秘密キーと証明書チェーンを持つpemリソースの例:</span></p>

<markup
lang="yaml"

>pem:
  key:
    passphrase: "password"
    resource.resource-path: "keystore/id_rsa.p8"
  cert-chain:
    resource.resource-path: "keystore/public_key_cert.pem"</markup>

</div>

<h2 id="_grpctlsdescriptor"><span class="merged" id="all.10OH30"  title="原文: GrpcTlsDescriptor">GrpcTlsDescriptor</span></h2>
<div class="section">
<p><span class="merged" id="all.24Xq2K.2" title="原文 : Configuration has been updated to use the new Resource approach:">新しい<code>Resource</code>アプローチを使用するように構成が更新されました:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3o2uIh" title="原文 : tls-cert.resource is the new key for certificate"><code>tls-cert.resource</code>は証明書の新しいキーです</span>

</li>
<li>
<span class="merged" id="all.105kLp" title="原文 : tls-key.resource is the new key for private key"><code>tls-key.resource</code>は秘密キーの新しいキーです</span>

</li>
<li>
<span class="merged" id="all.Xip5w" title="原文 : tl-ca-cert is the the new key for certificate"><code>tl-ca-cert</code>は証明書の新しいキーです</span>

</li>
</ol>
</div>

<h2 id="_webserver_configuration"><span class="merged" id="all.2mXgqb" title="原文 : WebServer Configuration">WebServerの構成</span></h2>
<div class="section">

<h3 id="_ssltls"><span class="merged" id="all.31M2Ss"  title="原文:: SSL/TLS">SSL/TLS</span></h3>
<div class="section">
<p><span class="merged" id="all.UYkq1.spl1" title="原文 : There is a new class io.helidon.webserver.WebServerTls that can be used to configure TLS for a WebServer socket.">WebServerソケットのTLSを構成するために使用できる新しいクラス<code>io.helidon.webserver.WebServerTls</code>があります。</span> <span class="merged" id="all.UYkq1.spl2" title="原文 : Class io.helidon.webserver.SSLContextBuilder has been deprecated and will be removed.">クラス<code>io.helidon.webserver.SSLContextBuilder</code>は非推奨になり、削除されます。</span> </p>

<p><span class="merged" id="all.3gsi0Y" title="原文 : The class uses a Builder pattern:">このクラスは、<code>Builder</code>パターンを使用します:</span></p>

<markup
lang="java"

>WebServerTls.builder()
   .privateKey(KeyConfig.keystoreBuilder()
   .keystore(Resource.create("certificate.p12"))
   .keystorePassphrase("helidon")</markup>

<p><span class="merged" id="all.4LQReO" title="原文 : The builder or built instance can be registered with a socket configuration builder including the WebServer.Builder itself:">ビルダーまたはビルドされたインスタンスは、<code>WebServer.Builder</code>自体を含むソケット構成ビルダーに登録できます:</span></p>

<markup
lang="java"

>WebServer.builder(routing())
                .tls(webServerTls)
                .build();</markup>

</div>

<h3 id="_additional_sockets"><span class="merged" id="all.2xchTH" title="原文 : Additional Sockets">追加ソケット</span></h3>
<div class="section">
<p><span class="merged" id="all.3m3grm" title="原文 : Additional socket configuration has changed both in config and in API.">追加のソケット構成が構成とAPIの両方で変更されました。</span></p>

<p><span class="merged" id="all.2NJplK" title="原文 : The configuration now accepts following structure:">これで、構成で次の構造が受け入れられます:</span></p>

<markup
lang="yaml"

>server:
   port: 8000
   sockets:
     - name: "admin"
       port: 8001
     - name: "static"
       port: 8002
       enabled: false</markup>

<p><span class="merged" id="all.47KlTF.spl1" title="原文 : Socket name is now a value of a property, allowing more freedom in naming.">ソケット名がプロパティの値になり、より自由に命名できるようになりました。</span> <span class="merged" id="all.47KlTF.spl2" title="原文 : The default socket name is implicit (and set to @default).">デフォルトのソケット名は暗黙的です(<code>@default</code>に設定されます)。</span> </p>

<p><span class="merged" id="all.1fQPdT" title="原文 : We have added the enabled flag to support disabling sockets through configuration.">構成を介したソケットの無効化をサポートする<code>enabled</code>フラグが追加されました。</span></p>

<p><span class="merged" id="all.1tyi3h" title="原文 : To add socket using a builder, you can use:">ビルダーを使用してソケットを追加するには、次を使用できます:</span></p>

<markup
lang="java"

>WebServer.builder()
   .addSocket(SocketConfigurationBuilder.builder()
      .port(8001)
      .name("admin")));</markup>

<p><span class="merged" id="all.3IF4sW" title="原文 : There is also a specialized method to add a socket and routing together, to remove mapping through a name.">また、ソケットとルーティングを一緒に追加して、名前によるマッピングを削除するための特殊なメソッドもあります。</span></p>

</div>

<h3 id="_deprecation_of_serverconfiguration"><span class="merged" id="all.4ISRMe" title="原文 : Deprecation of ServerConfiguration">ServerConfigurationの非推奨</span></h3>
<div class="section">
<p><span class="merged" id="all.3cD97G" title="原文 : io.helidon.webserver.ServerConfiguration.Builder is no longer used to configure WebServer."><code>io.helidon.webserver.ServerConfiguration.Builder</code>は、<code>WebServer</code>の構成に使用されなくなりました。</span></p>

<p><span class="merged" id="all.4PAnVv" title="原文 : Most methods from this class have been moved to WebServer.Builder or deprecated.">このクラスのほとんどのメソッドは、<code>WebServer.Builder</code>に移動されたか、非推奨になりました。</span></p>

<p><span class="merged" id="all.4IfseQ" title="原文 : Example of a simple WebServer setup:">単純なWebServer設定の例:</span></p>

<markup
lang="java"

>WebServer.builder()
   .port(8001)
   .host("localhost")
   .routing(createRouting())
   .build();</markup>

</div>

<h3 id="_other_significant_webserver_deprecations"><span class="merged" id="all.2Cjyoy" title="原文 : Other Significant WebServer Deprecations">その他の重要なWebServer非推奨</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3N0aki" title="原文 : io.helidon.webserver.WebServer.Builder - all methods that accept ServerConfiguration or its builder are deprecated, please use methods on WebServer.Builder instead"><code>io.helidon.webserver.WebServer.Builder</code> - <code>ServerConfiguration</code>またはそのビルダーを受け入れるすべてのメソッドは非推奨です。かわりに<code>WebServer.Builder</code>のメソッドを使用してください</span></p>

</li>
<li>
<p><span class="merged" id="all.2mz9oA" title="原文 : io.helidon.webserver.WebServer.Builder - all methods for socket configuration that accept a name and socket are deprecated, socket name is now part of socket configuration itself"><code>io.helidon.webserver.WebServer.Builder</code> - 名前とソケットを受け入れるソケット構成のすべてのメソッドは非推奨になり、ソケット名はソケット構成自体の一部になりました</span></p>

</li>
<li>
<p><span class="merged" id="all.5t8jq" title="原文 : io.helidon.webserver.ResponseHeaders.whenSend() - please use whenSent()"><code>io.helidon.webserver.ResponseHeaders.whenSend()</code> - <code>whenSent()</code>を使用してください</span></p>

</li>
<li>
<p><span class="merged" id="all.oYtFV" title="原文 : io.helidon.webserver.Routing.createServer(ServerConfiguration) - please use WebServer.builder()"><code>io.helidon.webserver.Routing.createServer(ServerConfiguration)</code> - <code>WebServer.builder()</code>を使用してください</span></p>

</li>
<li>
<p><span class="merged" id="all.JL5mX" title="原文 : io.helidon.webserver.Routing.createServer() - please use WebServer.builder()"><code>io.helidon.webserver.Routing.createServer()</code> - <code>WebServer.builder()</code>を使用してください</span></p>

</li>
<li>
<p><span class="merged" id="all.1nGTkX" title="原文 : io.helidon.webserver.SocketConfiguration.DEFAULT - use a builder to create a named configuration"><code>io.helidon.webserver.SocketConfiguration.DEFAULT</code> - 名前付き構成の作成するにはビルダーを使用します</span></p>

</li>
<li>
<p><span class="merged" id="all.3aEWOf" title="原文 : io.helidon.webserver.SocketConfiguration.Builder.ssl(SSLContext) - use `WebServerTls instead"><code>io.helidon.webserver.SocketConfiguration.Builder.ssl(SSLContext) - かわりに`WebServerTls</code>を使用します</span></p>

</li>
<li>
<p><span class="merged" id="all.oBWjP" title="原文 : io.helidon.webserver.SocketConfiguration.Builder.enabledSSlProtocols(String…​) - use `WebServerTls instead"><code>io.helidon.webserver.SocketConfiguration.Builder.enabledSSlProtocols(String…​)</code> - かわりに`WebServerTlsを使用します</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
