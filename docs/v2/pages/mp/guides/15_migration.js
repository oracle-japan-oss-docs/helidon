<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4faxWF" title="原文 : Helidon MP Upgrade Guide">Helidon MPアップグレード・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.Szyhj.spl1" title="原文 : In Helidon 2 we have made some changes to APIs and runtime behavior.">Helidon 2では、APIおよびランタイム動作にいくつかの変更が加えられました。</span> <span class="merged" id="all.Szyhj.spl2" title="原文 : This guide will help you migrate a Helidon MP 1.x application to 2.x.">このガイドは、Helidon MP 1.xアプリケーションを2.xに移行する際に役立ちます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_java_8_runtime"><span class="merged" id="all.22v7bb"  title="原文:: Java 8 Runtime">Java 8ランタイム</span></h2>
<div class="section">
<p><span class="merged" id="all.24nd5B.spl1" title="原文 : Java 8 is no longer supported.">Java 8はサポートされなくなりました。</span> <span class="merged" id="all.24nd5B.spl2"  title="原文:: Java 11 or newer is required.">Java 11以上が必要です。</span> </p>

</div>

<h2 id="_common_utilities"><span class="merged" id="all.HKHGA"  title="原文:: Common Utilities">共通ユーティリティ</span></h2>
<div class="section">
<p><span class="merged" id="all.3YXe8g.spl1" title="原文 : Since Helidon 2.x now requires Java 11 the helper classes that were provided for Java 8 support have been removed.">Helidon 2.xにはJava 11が必要になったため、Java 8サポート用に提供されていたヘルパー・クラスは削除されました。</span> <span class="merged" id="all.3YXe8g.spl2" title="原文 : These have been replaced by the standard JDK classes:">これらは、標準のJDKクラスに置き換えられました:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.25EN3h"  title="原文:: Removed">削除</span></th>
<th><span class="merged" id="all.3qlG3x"  title="原文:: Replacement">置換</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2ufGmG"  title="原文: io.helidon.reactive.Flow"><code>io.helidon.reactive.Flow</code></span></td>
<td class=""><span class="merged" id="all.W6EVQ"  title="原文: java.util.concurrent.Flow"><code>java.util.concurrent.Flow</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rR3xh"  title="原文: io.helidon.common.CollectionsHelper"><code>io.helidon.common.CollectionsHelper</code></span></td>
<td class=""><span class="merged" id="all.G9JIY" title="原文 : Factory methods of Set, Map and List"><code>Set</code>、<code>Map</code>および<code>List</code>のファクトリ・メソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2f4nNb"  title="原文: io.helidon.common.OptionalHelper"><code>io.helidon.common.OptionalHelper</code></span></td>
<td class=""><span class="merged" id="all.41O80Z" title="原文 : Methods of java.util.Optional"><code>java.util.Optional</code>のメソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3y0tu9"  title="原文: io.helidon.common.StackWalker"><code>io.helidon.common.StackWalker</code></span></td>
<td class=""><span class="merged" id="all.VG7kk"  title="原文: java.lang.StackWalker"><code>java.lang.StackWalker</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3C4nmw"  title="原文: io.helidon.common.InputStreamHelper"><code>io.helidon.common.InputStreamHelper</code></span></td>
<td class=""><span class="merged" id="all.2BWWR5" title="原文 : Methods of java.io.InputStream"><code>java.io.InputStream</code>のメソッド</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_tracing"><span class="merged" id="all.4Mk18P.2"  title="原文:: Tracing">トレース</span></h2>
<div class="section">
<p><span class="merged" id="all.3r4piJ.spl1" title="原文 : We have upgraded to OpenTracing version 0.33.0 that is not backward compatible.">下位互換性のないOpenTracingバージョン0.33.0にアップグレードしました。</span> <span class="merged" id="all.3r4piJ.spl2" title="原文 : OpenTracing introduced the following breaking changes:">OpenTracingでは、次のブレーク変更が導入されました:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.25EN3h.1"  title="原文:: Removed">削除</span></th>
<th><span class="merged" id="all.3qlG3x.1"  title="原文:: Replacement">置換</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3SaICk"  title="原文: ScopeManager.active()"><code>ScopeManager.active()</code></span></td>
<td class=""><span class="merged" id="all.1T86OB"  title="原文: Tracer.activeSpan()"><code>Tracer.activeSpan()</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.73hiL"  title="原文: ScopeManager.activate(Span, boolean)"><code>ScopeManager.activate(Span, boolean)</code></span></td>
<td class=""><span class="merged" id="all.LD6Cm" title="原文 : ScopeManager.activate(Span) - second parameter is now always false"><code>ScopeManager.activate(Span)</code> - 第2パラメータは常に<code>false</code>になりました</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UBeTk"  title="原文: SpanBuilder.startActive()"><code>SpanBuilder.startActive()</code></span></td>
<td class=""><span class="merged" id="all.1ZLuaa"  title="原文: Tracer.activateSpan(Span)"><code>Tracer.activateSpan(Span)</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SpAsA" title="原文 : TextMapExtractAdapter and TextMapInjectAdapter"><code>TextMapExtractAdapter</code>および<code>TextMapInjectAdapter</code></span></td>
<td class=""><span class="merged" id="all.497BHA"  title="原文: TextMapAdapter"><code>TextMapAdapter</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1O7atl" title="原文 : Module name changed opentracing.api">モジュール名が<code>opentracing.api</code>を変更しました</span></td>
<td class=""><span class="merged" id="all.Y9siU" title="原文 : io.opentracing.api (same for noop and util)"><code>io.opentracing.api</code> (<code>noop</code>と<code>util</code>で同じ)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1XxbTO" title="原文 : If you use the TracerBuilder abstraction in Helidon and have no custom Spans, there is no change required">Helidonで<code>TracerBuilder</code>抽象化を使用し、カスタム・スパンがない場合、変更は必要ありません</span></p>

</div>

<h2 id="_security_oidc"><span class="merged" id="all.3PBD25" title="原文 : Security: OIDC">Security: OIDC</span></h2>
<div class="section">
<p><span class="merged" id="all.3UFMhz.spl1" title="原文 : When the OIDC provider is configured to use cookie (default configuration) to carry authentication information, the cookie Same-Site is now set to Lax (used to be Strict).">OIDCプロバイダがCookie (デフォルト構成)を使用して認証情報を送信するように構成されている場合、cookie <code>Same-Site</code>は<code>Lax</code>に設定されるようになりました(以前は<code>Strict</code>でした)。</span> <span class="merged" id="all.3UFMhz.spl2" title="原文 : This is to prevent infinite redirects, as browsers would refuse to set the cookie on redirected requests (due to this setting).">これは、(この設定により)ブラウザがリダイレクトされたリクエストにcookieを設定することを拒否するため、無限リダイレクトを防ぐためです。</span> <span class="merged" id="all.3UFMhz.spl3" title="原文 : Only in the case of the frontend host and identity host match, we leave Strict as the default">フロントエンド・ホストとアイデンティティ・ホストが一致する場合のみ、<code>Strict</code>をデフォルトのままにします</span> </p>

</div>

<h2 id="_microprofile_bundles"><span class="merged" id="all.434C1p" title="原文 : MicroProfile Bundles">MicroProfileバンドル</span></h2>
<div class="section">
<p><span class="merged" id="all.3qfYfn" title="原文 : We have removed the versioned MicroProfile bundles (i.e. helidon-microprofile-x.x), and introduced unversioned core and full bundles:">バージョニングされたMicroProfileバンドル(<code>helidon-microprofile-x.x</code>)を削除し、バージョニングされていないコアおよびフル・バンドルを導入しました:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1nRYkJ.spl1" title="原文 : io.helidon.microprofile.bundles:helidon-microprofile-core - contains only MP Server and Config."><code>io.helidon.microprofile.bundles:helidon-microprofile-core</code> - MPサーバーと構成のみが含まれます。</span> <span class="merged" id="all.1nRYkJ.spl2" title="原文 : Allows you to add only the specifications needed by your application.">アプリケーションで必要な仕様のみを追加できます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1fmSH0" title="原文 : io.helidon.microprofile.bundles:helidon-microprofile - contains the latest full MicroProfile version implemented by Helidon"><code>io.helidon.microprofile.bundles:helidon-microprofile</code> - Helidonによって実装された最新の完全なMicroProfileバージョンが含まれています</span></p>

</li>
</ul>
</div>

<h2 id="_application_main_and_startup"><span class="merged" id="all.kk3wI" title="原文 : Application Main and Startup">アプリケーションのメインと起動</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2AOjuv.spl1" title="原文 : io.helidon.microprofile.server.Main has been deprecated."><code>io.helidon.microprofile.server.Main</code>は非推奨になりました。</span> <span class="merged" id="all.2AOjuv.spl2" title="原文 : Use io.helidon.microprofile.cdi.Main instead.">かわりに<code>io.helidon.microprofile.cdi.Main</code>を使用します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4PIDZ8" title="原文 : io.helidon.microprofile.server.Server is still available, although the features are much reduced.">機能は大幅に削減されますが、<code>io.helidon.microprofile.server.Server</code>は引き続き使用可能です。</span></p>

</li>
<li>
<p><span class="merged" id="all.24b1ir.spl1" title="原文 : You no longer need to initialize Java Util Logging explicitly.">Javaユーティリティ・ロギングを明示的に初期化する必要はなくなりました。</span> <span class="merged" id="all.24b1ir.spl2" title="原文 : Put logging.properties on the classpath or in the current directory to be automatically picked up to configure Java Util Logging.">Java Util Loggingを構成するために自動的に取得されるように、<code>logging.properties</code>をクラスパスまたは現在のディレクトリに配置します。</span> </p>

</li>
</ul>
</div>

<h2 id="_jax_rs_applications"><span class="merged" id="all.1bU7de"  title="原文:: JAX-RS Applications">JAX-RSアプリケーション</span></h2>
<div class="section">
<p><span class="merged" id="all.2AWnCd.spl1" title="原文 : Helidon 1.x usually required that you have an Application subclass that returned the Application classes to scan.">Helidon 1.xでは、通常、スキャンするアプリケーション・クラスを返す<code>Application</code>サブクラスが必要です。</span> <span class="merged" id="all.2AWnCd.spl2" title="原文 : For common cases this is no longer necessary, and you might be able to remove your Application class.">一般的に、これは不要になり、<code>Application</code>クラスを削除できる場合があります。</span> </p>

<p><span class="merged" id="all.3O59Qo" title="原文 : JAX-RS applications now work similarly to how they work in application servers:">JAX-RSアプリケーションは、アプリケーション・サーバーでの動作と同様に動作するようになりました:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1oyKIp" title="原文 : if there is an Application subclass that returns anything from getClasses or getSingletons, it is used as is"><code>getClasses</code>または<code>getSingletons</code>から何かを返す<code>Application</code>サブクラスがある場合は、そのまま使用されます</span></p>

</li>
<li>
<p><span class="merged" id="all.2XhSKk" title="原文 : if there is an Application subclass that returns empty sets from these methods, all available resource classes will be part of such an application">これらのメソッドから空のセットを返す<code>Application</code>サブクラスがある場合、使用可能なすべてのリソース・クラスはそのようなアプリケーションの一部になります</span></p>

</li>
<li>
<p><span class="merged" id="all.13VKkK" title="原文 : if there is no Application subclass, a synthetic application will be created with all available resource classes"><code>Application</code>サブクラスがない場合、合成アプリケーションは使用可能なすべてのリソース・クラスで作成されます</span></p>

</li>
<li>
<p><span class="merged" id="all.3sgCYm" title="原文 : Application subclasses MUST be annotated with @ApplicationScoped, otherwise they are ignored"><code>Application</code>サブクラスには<code>@ApplicationScoped</code>の注釈を付ける必要があり、そうでない場合は無視されます</span></p>

</li>
</ul>
</div>

<h2 id="_microprofile_jwt_auth"><span class="merged" id="all.3Pppo2" title="原文 : MicroProfile JWT-Auth">MicroProfile JWT-認証</span></h2>
<div class="section">
<p><span class="merged" id="all.2tPLuX.spl1" title="原文 : If a JAX-RS application exists that is annotated with @LoginConfig with value MP-JWT, the correct authentication provider is added to security."><code>@LoginConfig</code>に値MP-JWTのアノテーションが付いたJAX-RSアプリケーションが存在する場合、正しい認証プロバイダがセキュリティに追加されます。</span> <span class="merged" id="all.2tPLuX.spl2" title="原文 : The startup would fail if the provider is required yet not configured.">プロバイダがまだ構成されていない場合、起動は失敗します。</span> </p>

</div>

<h2 id="_security_in_helidon_mp"><span class="merged" id="all.15gQfa" title="原文 : Security in Helidon MP">Helidon MPのセキュリティ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1NXxtp" title="原文 : If there is no authentication provider configured, authentication will now fail.">認証プロバイダが構成されていない場合、認証は失敗します。</span></p>

</li>
<li>
<p><span class="merged" id="all.VTaT6" title="原文 : If there is no authorization provider configured, the ABAC provider will be configured.">認可プロバイダが構成されていない場合は、ABACプロバイダが構成されます。</span></p>

</li>
</ul>
<p><span class="merged" id="all.DloJC" title="原文 : In Helidon 1.x these were configured if there was no provider configured overall.">Helidon 1.xでは、プロバイダ全体が構成されていない場合に構成されていました。</span></p>

</div>

<h2 id="_cdi_and_microprofile_server"><span class="merged" id="all.22im1V" title="原文 : CDI and MicroProfile Server">CDIおよびMicroProfileサーバー</span></h2>
<div class="section">
<p><span class="merged" id="all.lb99c.spl1" title="原文 : In order to support GraalVM native-image we have had to re-implement how CDI is initialized and started.">GraalVM <code>native-image</code>をサポートするために、CDIの初期化および起動方法を再実装する必要がありました。</span> <span class="merged" id="all.lb99c.spl2" title="原文 : This has resulted in some changes in APIs and behavior:">これにより、APIおよび動作がいくつか変更されました:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3uP25d" title="原文 : You can no longer start the CDI container yourself.">CDIコンテナを自分で起動することはできません。</span></p>

</li>
<li>
<p><span class="merged" id="all.2nR1uW" title="原文 : You can only run a single instance of Server in a JVM.">JVMでは、サーバーの単一インスタンスのみを実行できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.dE7D7" title="原文 : If you use SeContainerInitializer you will get an exception."><code>SeContainerInitializer</code>を使用すると、例外が発生します。</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.YuD6o" title="原文 : This can be worked around by configuration property mp.initializer.allow=true, and warning can be removed using mp.initializer.no-warn=true">これは構成プロパティ<code>mp.initializer.allow=true</code>で回避でき、<code>mp.initializer.no-warn=true</code>を使用して警告を削除できます</span></p>

</li>
<li>
<p><span class="merged" id="all.1iAlqq" title="原文 : Once SeContainerInitializer is used you can no longer use MP with native-image"><code>SeContainerInitializer</code>を使用すると、MPを<code>native-image</code>で使用できなくなります</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.2uqF1.spl1" title="原文 : You can no longer provide a Context instance."><code>Context</code>インスタンスを指定できなくなりました。</span> <span class="merged" id="all.2uqF1.spl2" title="原文 : The root context is now built-in.">ルート・コンテキストが組み込まれました。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1XzBox" title="原文 : MpService and MpServiceContext have been removed."><code>MpService</code>および<code>MpServiceContext</code>は削除されました。</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.4HoCVK.spl1" title="原文 : Methods from context have been moved to JaxRsCdiExtension and ServerCdiExtension.">コンテキストから<code>JaxRsCdiExtension</code>および<code>ServerCdiExtension</code>にメソッドが移動されました。</span> <span class="merged" id="all.4HoCVK.spl2" title="原文 : These can be accessed from CDI extension through BeanManager.getExtension.">これらは、CDI拡張機能から<code>BeanManager.getExtension</code>を介してアクセスできます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4dcsJK" title="原文 : Methods register can be used on current io.helidon.context.Context">現在の<code>io.helidon.context.Context</code>で<code>register</code>を使用できるメソッド</span></p>

</li>
<li>
<p><span class="merged" id="all.jLdI0.spl1" title="原文 : MpService equivalent is a CDI extension."><code>MpService</code>と同等の機能はCDI拡張です。</span> <span class="merged" id="all.jLdI0.spl2" title="原文 : All Helidon services were refactored to CDI extension (you can use these for reference).">すべてのHelidonサービスがCDI拡張機能にリファクタされました(これらは参照用として使用できます)。</span> </p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.GQRwG" title="原文 : Server.cdiContainer is removed, use CDI.current() instead."><code>Server.cdiContainer</code>が削除されました。かわりに<code>CDI.current()</code>を使用してください。</span></p>

</li>
</ul>
</div>

<h2 id="_metrics"><span class="merged" id="all.4LL0ot.5"  title="原文:: Metrics">メトリクス</span></h2>
<div class="section">
<p><span class="merged" id="all.35SMOV" title="原文 : Helidon now supports only MicroProfile Metrics 2.x. Support for Metrics 1.x has been removed, and modules for 2.x have been renamed from metrics2 to metrics.">Helidonでは、MicroProfile Metrics 2.xのみがサポートされるようになりました。メトリクス1.xのサポートは削除され、2.xのモジュールの名前が<code>metrics2</code>から<code>metrics</code>に変更されました。</span></p>

</div>

<h2 id="_java_ee_dependencies"><span class="merged" id="all.4JwUWf" title="原文 : Java EE dependencies">Java EEの依存関係</span></h2>
<div class="section">
<p><span class="merged" id="all.1dYc2H" title="原文 : We have moved from dependencies in groupId javax (Java EE modules) to dependencies in groupId jakarta (Jakarta EE modules).">groupId <code>javax</code> (Java EEモジュール)の依存関係からgroupId <code>jakarta</code> (Jakarta EEモジュール)の依存関係に移動しました。</span></p>

<p><span class="merged" id="all.1Ho09k" title="原文 : In case you declared a dependency on a javax module, you should change it to a jakarta one.">javaxモジュールへの依存関係を宣言した場合は、jakartaに変更する必要があります。</span></p>

<p><span class="merged" id="all.2apT5L"  title="原文:: Example:">例:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;javax.activation&lt;/groupId&gt;
    &lt;artifactId&gt;javax.activation-api&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.CyTte"  title="原文: should be changed to">次のように変更します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;jakarta.activation&lt;/groupId&gt;
    &lt;artifactId&gt;jakarta.activation-api&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2aSGuP" title="原文 : As the javax module is no longer in dependency management of Helidon parent pom files."><code>javax</code>モジュールがHelidon親POMファイルの依存関係管理に存在しなくなったためです。</span></p>

</div>
</doc-view>
