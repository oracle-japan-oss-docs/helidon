<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4WT5O7" title="原文 : Helidon MP 3.x Upgrade Guide">Helidon MP 3.xアップグレード・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.20Expk.spl1" title="原文 : In Helidon 3.x we have made some changes to APIs and runtime behavior.">Helidon 3.xでは、APIおよびランタイム動作にいくつか変更を加えました。</span> <span class="merged" id="all.20Expk.spl2" title="原文 : This guide will help you upgrade a Helidon MP 2.x application to 3.x.">このガイドは、Helidon MP 2.xアプリケーションを3.xにアップグレードする際に役立ちます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_java_17_runtime"><span class="merged" id="all.4XVaeG"  title="原文:: Java 17 Runtime">Java 17 Runtime</span></h2>
<div class="section">
<p><span class="merged" id="all.SRXJs.spl1" title="原文 : Java 11 is no longer supported in Helidon 3.">Java 11は、Helidon 3ではサポートされなくなりました。</span> <span class="merged" id="all.SRXJs.spl2"  title="原文:: Java 17 or newer is required.">Java 17以上が必要です。</span> <span class="merged" id="all.SRXJs.spl3" title="原文 : Please follow the instructions in Prerequisites for proper installation.">正しくインストールするには、<router-link to="/about/prerequisites">「事前設定」</router-link>の手順に従ってください。</span> </p>

</div>


<h2 id="_javax_namespace_to_jakarta_namespace"><span class="merged" id="all.ScCSb" title="原文 : javax namespace to jakarta namespace"><code>javax</code>ネームスペースから<code>jakarta</code>ネームスペース</span></h2>
<div class="section">
<p><span class="merged" id="all.4J29Ih.spl1" title="原文 : Helidon 3 supports MicroProfile 5.0 and selected Jakarta EE 9.1 APIs.">Helidon 3では、MicroProfile 5.0および<em>「選択した」</em> Jakarta EE 9.1 APIがサポートされています。</span> <span class="merged" id="all.4J29Ih.spl2" title="原文 : In Jakarta EE 9.1 the Java package namespace was changed from javax to jakarta.">Jakarta EE 9.1で、Javaパッケージ・ネームスペースは<code>javax</code>から<code>jakarta</code>に変更されました。</span> <span class="merged" id="all.4J29Ih.spl3" title="原文 : Therefore, you must change your application to use jakarta instead of corresponding javax for Jakarta EE packages.">そのため、Jakarta EEパッケージに対応する<code>javax</code>のかわりに<code>jakarta</code>を使用するようにアプリケーションを変更する必要があります。</span> </p>

<p><span class="merged" id="all.4LzkQz" title="原文 : In version 3.x Helidon supports MicroProfile 5.0 specification, which now is fully migrated to jakarta namespace.">バージョン3.xでは、HelidonはMicroProfile 5.0仕様をサポートしており、現在は<code>jakarta</code>ネームスペースに完全に移行されています。</span></p>

<p><span class="merged" id="all.O9WTm" title="原文 : As a result, javax module is no longer in dependency management of Helidon parent pom files.">その結果、<code>javax</code>モジュールは、Helidon親のpomファイルの依存関係管理ではなくなりました。</span></p>

</div>


<h2 id="_microprofile_5_0_support"><span class="merged" id="all.YCFgp" title="原文 : MicroProfile 5.0 Support">MicroProfile 5.0のサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.1iz6qe.spl1" title="原文 : MicroProfile 5.0 enables MicroProfile APIs to be used together with Jakarta EE 9.1 (Jakarta EE namespace).">MicroProfile 5.0では、MicroProfile APIをJakarta EE 9.1 (Jakarta EEネームスペース)と一緒に使用できます。</span> <span class="merged" id="all.1iz6qe.spl2" title="原文 : This release was mainly focused on updating dependencies from javax to jakarta, as well as overall stability and usability improvements.">このリリースは主に、<code>javax</code>から<code>jakarta</code>への依存関係の更新と、全体的な安定性と使いやすさの改善に焦点を当てました。</span> </p>

<p><span class="merged" id="all.FWqq6" title="原文 : MicroProfile 5.0 lays the foundation for the rapid innovation of MicroProfile APIs for its 2022 releases.">MicroProfile 5.0は、2022リリースに対するMicroProfile APIの迅速なイノベーションの基盤を提供します。</span></p>

<p><span class="merged" id="all.uNGpI" title="原文 : MicroProfile 5.0 is an umbrella for the following specifications and their corresponding versions:">MicroProfile 5.0は、次の仕様および対応するバージョンの傘です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1RbrJz" title="原文 : MicroProfile Config 3.0.1">MicroProfile構成3.0.1</span></p>

</li>
<li>
<p><span class="merged" id="all.ztjpc" title="原文 : MicroProfile Fault Tolerance 4.0">MicroProfileフォルト・トレランス4.0</span></p>

</li>
<li>
<p><span class="merged" id="all.ULCg8" title="原文 : MicroProfile Health 4.0">MicroProfileヘルス4.0</span></p>

</li>
<li>
<p><span class="merged" id="all.1myLtt" title="原文 : MicroProfile JWT Authentication 2.0">MicroProfile JWT認証2.0</span></p>

</li>
<li>
<p><span class="merged" id="all.4ahTla" title="原文 : MicroProfile Metrics 4.0">MicroProfileメトリクス4.0</span></p>

</li>
<li>
<p><span class="merged" id="all.1p5KiZ" title="原文 : MicroProfile OpenAPI 3.0">MicroProfile OpenAPI 3.0</span></p>

</li>
<li>
<p><span class="merged" id="all.3836Lg" title="原文 : MicroProfile OpenTracing 3.0">MicroProfile OpenTracing 3.0</span></p>

</li>
<li>
<p><span class="merged" id="all.1OHHp0" title="原文 : MicroProfile Rest Client 3.0">MicroProfile Restクライアント3.0</span></p>

</li>
</ul>

<p><span class="merged" id="all.44hXIx" title="原文 : Helidon 3.x supports the following Jakarta EE specifications:">Helidon 3.xでは、次のJakarta EE仕様がサポートされます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1pJUUC" title="原文 : CDI (Jakarta Contexts and Dependency Injection) 3.0">CDI (Jakartaコンテキストおよび依存関係インジェクション) 3.0</span></p>

</li>
<li>
<p><span class="merged" id="all.25tMsa" title="原文 : JAX-RS (Jakarta RESTful Web Services) 3.0">JAX-RS (Jakarta RESTful Webサービス) 3.0</span></p>

</li>
<li>
<p><span class="merged" id="all.RBOwI" title="原文 : JSON-B (Jakarta JSON Binding) 2.0">JSON-B (Jakarta JSONバインディング) 2.0</span></p>

</li>
<li>
<p><span class="merged" id="all.1sGyUD" title="原文 : JSON-P (Jakarta JSON Processing) 2.0.1">JSON-P (Jakarta JSON処理) 2.0.1</span></p>

</li>
<li>
<p><span class="merged" id="all.1HXGM9" title="原文 : Jakarta Annotations 2.0">Jakarta注釈2.0</span></p>

</li>
<li>
<p><span class="merged" id="all.1Qy2lN" title="原文 : Jakarta Persistence API 3.0">Jakarta永続性API 3.0</span></p>

</li>
<li>
<p><span class="merged" id="all.3yh6uQ" title="原文 : Jakarta Transactions API 2.0">JakartaトランザクションAPI 2.0</span></p>

</li>
<li>
<p><span class="merged" id="all.3oObl9" title="原文 : Jakarta WebSocket API 2.0">Jakarta WebSocket API 2.0</span></p>

</li>
<li>
<p><span class="merged" id="all.2LKDz7" title="原文 : Jakarta Bean Validation 2.0">Jakarta Beanバリデーション2.0</span></p>

</li>
</ul>

<p><span class="merged" id="all.4KHy9u" title="原文 : Helidon code was modified to support the corresponding specification&rsquo;s versions.">対応する仕様のバージョンをサポートするようにHelidonコードが変更されました。</span></p>


<h3 id="_incompatible_changes_for_each_specification"><span class="merged" id="all.1P1Cq6" title="原文 : Incompatible changes for each specification">各仕様の互換性のない変更</span></h3>
<div class="section">
<p><span class="merged" id="all.2FTjMr.spl1" title="原文 : The migration from javax to jakarta namespace makes this release backward incompatible with previous versions of MicroProfile."><code>javax</code>から<code>jakarta</code>ネームスペースに移行すると、このリリースは以前のバージョンのMicroProfileとの互換性がなくなります。</span> <span class="merged" id="all.2FTjMr.spl2" title="原文 : For each specification there are also API and functional changes that are described below.">各仕様には、次に説明するAPIおよび機能変更もあります。</span> </p>

</div>


<h3 id="_microprofile_specifications"><span class="merged" id="all.1kjZyA" title="原文 : MicroProfile specifications">MicroProfile仕様</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.eFQU9" title="原文 : MicroProfile Config 3.0.1:"><strong>MicroProfile構成3.0.1</strong>:</span></p>
<p><span class="merged" id="all.jILTp" title="原文 : Incompatible changes described in MicroProfile Config 3.0.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/microprofile-config-spec-3.0.1.html#_incompatible_changes" target="_blank">「MicroProfile構成3.0.1仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.4HXlZQ" title="原文 : MicroProfile Fault Tolerance 4.0:"><strong>MicroProfileフォルト・トレランス4.0</strong>:</span></p>
<p><span class="merged" id="all.4N8lD6" title="原文 : Incompatible changes described in MicroProfile Fault Tolerance 4.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0/microprofile-fault-tolerance-spec-4.0.html#_backward_incompatible_changes=" target="_blank">「MicroProfileフォルト・トレランス4.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3Hv3Bn" title="原文 : MicroProfile Health 4.0:"><strong>MicroProfileヘルス4.0</strong>:</span></p>
<p><span class="merged" id="all.xhOnh" title="原文 : Incompatible changes described in MicroProfile Health 4.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html#_incompatible_changes" target="_blank">「MicroProfileヘルス4.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.7hOEh" title="原文 : MicroProfile JWT Authentication 2.0:"><strong>MicroProfile JWT認証2.0</strong>:</span></p>
<p><span class="merged" id="all.2VgLIT" title="原文 : Incompatible changes described in MicroProfile JWT Authentication 2.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.0/microprofile-jwt-auth-spec-2.0.html#_incompatible_changes" target="_blank">「MicroProfile JWT認証2.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.2v0xDC" title="原文 : MicroProfile Metrics 4.0:"><strong>MicroProfileメトリクス4.0</strong>:</span></p>
<p><span class="merged" id="all.13W1e2" title="原文 : Incompatible changes described in MicroProfile Metrics 4.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/microprofile-metrics-spec-4.0.html#_incompatible_changes" target="_blank">「MicroProfileメトリクス4.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.2M4neF" title="原文 : MicroProfile OpenAPI 3.0:"><strong>MicroProfile OpenAPI 3.0</strong>:</span></p>
<p><span class="merged" id="all.2mF9HK" title="原文 : Incompatible changes described in MicroProfile OpenAPI 3.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-open-api-2.0.1/microprofile-openapi-spec-2.0.1.html#_incompatible_changes" target="_blank">「MicroProfile OpenAPI 3.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.2Y5Qf8" title="原文 : MicroProfile OpenTracing 3.0:"><strong>MicroProfile OpenTracing 3.0</strong>:</span></p>
<p><span class="merged" id="all.3fgYAr" title="原文 : Incompatible changes described in MicroProfile OpenTracing 3.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/microprofile-opentracing-spec-3.0.html#_incompatible_changes" target="_blank">「MicroProfile OpenTracing 3.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3153JR" title="原文 : MicroProfile Rest Client 3.0:"><strong>MicroProfile Restクライアント3.0</strong>:</span></p>
<p><span class="merged" id="all.2pMBnQ" title="原文 : Incompatible changes described in MicroProfile Rest Client 3.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html#_incompatible_changes" target="_blank">「MicroProfile Restクライアント3.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
</ul>

</div>


<h3 id="_supported_jakarta_ee_specifications"><span class="merged" id="all.1bPkUV" title="原文 : Supported Jakarta EE specifications">サポートされているJakarta EE仕様</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.488YeO" title="原文 : CDI (Jakarta Contexts and Dependency Injection) 3.0:"><strong>CDI (Jakartaコンテキストおよび依存関係インジェクション) 3.0</strong>:</span></p>
<p><span class="merged" id="all.3c5dvS" title="原文 : Changes described in CDI (Jakarta Contexts and Dependency Injection) 3.0 Specification"><a href="https://jakarta.ee/specifications/cdi/3.0/jakarta-cdi-spec-3.0.html#architecture" target="_blank">「CDI (Jakartaコンテキストおよび依存関係インジェクション) 3.0仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.14U3ty" title="原文 : JAX-RS (Jakarta RESTful Web Services) 3.0:"><strong>JAX-RS (Jakarta RESTful Webサービス) 3.0</strong>:</span></p>
<p><span class="merged" id="all.ErK0C.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.ErK0C.spl2" title="原文 : Changes described in JAX-RS (Jakarta RESTful Web Services) 3.0Specification"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html#_incompatible_changes" target="_blank">「JAX-RS (Jakarta RESTful Webサービス) 3.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.29rwHv" title="原文 : JSON-B (Jakarta JSON Binding) 2.0:"><strong>JSON-B (Jakarta JSONバインディング) 2.0</strong>:</span></p>
<p><span class="merged" id="all.1BBbgY.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.1BBbgY.spl2" title="原文 : Changes described in JSON-B (Jakarta JSON Binding) 2.0 Specification"><a href="https://jakarta.ee/specifications/jsonb/2.0/jakarta-jsonb-spec-2.0.html#change-log" target="_blank">「JSON-B (Jakarta JSON Binding) 2.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.22LCfo" title="原文 : JSON-P (Jakarta JSON Processing) 2.0.1:"><strong>JSON-P (Jakarta JSON処理) 2.0.1</strong>:</span></p>
<p><span class="merged" id="all.J3IS4" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span></p>

</li>
<li>
<p><span class="merged" id="all.3gRsje" title="原文 : Jakarta Annotations 2.0:"><strong>Jakarta注釈2.0</strong>:</span></p>
<p><span class="merged" id="all.1dGcpA.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.1dGcpA.spl2" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.1dGcpA.spl3" title="原文 : Full information in Jakarta Annotations 2.0 Specification"><a href="https://jakarta.ee/specifications/annotations/2.0/annotations-spec-2.0.html" target="_blank">「Jakarta注釈2.0仕様」</a>の完全な情報</span> </p>

</li>
<li>
<p><span class="merged" id="all.Dq4F3" title="原文 : Jakarta Persistence API 3.0:"><strong>Jakarta永続性API 3.0</strong>:</span></p>
<p><span class="merged" id="all.4QEyB5.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.4QEyB5.spl2" title="原文 : Changes described in Jakarta Persistence API 3.0 Specification"><a href="https://jakarta.ee/specifications/persistence/3.0/jakarta-persistence-spec-3.0.html#revision-history" target="_blank">「Jakarta永続性API 3.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.gfHdM" title="原文 : Jakarta Transactions API 2.0:"><strong>JakartaトランザクションAPI 2.0</strong>:</span></p>
<p><span class="merged" id="all.23Dpfx.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.23Dpfx.spl2" title="原文 : Changes described in Jakarta Transactions API 2.0 Specification"><a href="https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html#revision-history" target="_blank">「JakartaトランザクションAPI 2.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.3PP7fR" title="原文 : Jakarta WebSocket API 2.0:"><strong>Jakarta WebSocket API 2.0</strong>:</span></p>
<p><span class="merged" id="all.2U6cn7.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.2U6cn7.spl2" title="原文 : Changes described in Jakarta WebSocket API 2.0 Specification"><a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html#changes" target="_blank">「Jakarta WebSocket API 2.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.5UQT3" title="原文 : Jakarta Bean Validation 2.0:"><strong>Jakarta Beanバリデーション2.0</strong>:</span></p>
<p><span class="merged" id="all.4Mi9BL.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.4Mi9BL.spl2" title="原文 : Changes described in Jakarta Bean Validation 2.0 Specification"><a href="https://jakarta.ee/specifications/bean-validation/2.0/bean-validation_2.0.html#changelog" target="_blank">「Jakarta Beanバリデーション2.0仕様」</a>で説明されている変更</span> </p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.14TAfL" title="原文 : Before you migrate to Helidon 3.x, make sure that you have read each specification for a complete list of incompatible changes.">Helidon 3.xに移行する前に、互換性のない変更の完全なリストについて各指定を読み取っていることを確認してください。</span></p>
</div>

</div>

</div>


<h2 id="_deprecations_and_api_changes"><span class="merged" id="all.4IOAp8" title="原文 : Deprecations and API Changes">廃止とAPIの変更</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2HguJA.spl1" title="原文 : The custom Helidon OCI clients have been deprecated.">カスタムHelidon OCIクライアントは非推奨になりました。</span> <span class="merged" id="all.2HguJA.spl2" title="原文 : Use the OCI Java SDK instead.">かわりにOCI Java SDKを使用してください。</span> <span class="merged" id="all.2HguJA.spl3" title="原文 : If you use Helidon MP you can inject OCI SDK clients by adding the dependency io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi.">Helidon MPを使用する場合は、依存関係<code>io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi</code>を追加して、OCI SDKクライアントをインジェクトできます。</span> </p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2RLXjd" title="原文 : See Resolving compatibility issue with OCI SDK for detailed information on how to work around this issue.">この問題に対処する方法の詳細は、<router-link :to="{path: '/se/integrations/oci', hash: '#oci-compatibility'}">「OCI SDKとの互換性の問題の解決」</router-link>を参照してください。</span></p>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.svBTb.spl1" title="原文 : The MultiPart buffered readers have been deprecated.">MultiPartバッファ・リーダーは非推奨になりました。</span> <span class="merged" id="all.svBTb.spl2" title="原文 : Use the MultiPart stream readers instead.">かわりにMultiPartストリーム・リーダーを使用します。</span> </p>

</li>
</ul>


<h3 id="_helidon_common"><span class="merged" id="all.3JI2tz" title="原文 : Helidon Common">Helidon共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.47jEsR" title="原文 : Resource - old configuration approach (since 2.0)"><code>Resource</code> - 古い構成アプローチ(2.0以降)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2bcNSH.spl1" title="原文 : Method Optional&lt;Resource&gt; create(Config, String) is removed.">メソッド<code>Optional&lt;Resource> create(Config, String)</code>が削除されます。</span> <span class="merged" id="all.2bcNSH.spl2" title="原文 : Use create(Config) instead;">代わりに<code>create(Config)</code>を使用してください</span> </p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2oesVM" title="原文 : ThreadPoolSupplier - Named thread pools (since 2.4.2)"><code>ThreadPoolSupplier</code> - 名前付きスレッド・プール(2.4.2以降)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.17FqlA.spl1" title="原文 : Method ThreadPoolSupplier create(Config) is removed.">メソッド<code>ThreadPoolSupplier create(Config)</code>が削除されます。</span> <span class="merged" id="all.17FqlA.spl2" title="原文 : Use create(Config, String) instead;">代わりに<code>create(Config, String)</code>を使用してください</span> </p>

</li>
<li>
<p><span class="merged" id="all.6gGR9.spl1" title="原文 : Method ThreadPoolSupplier create() is removed.">メソッド<code>ThreadPoolSupplier create()</code>が削除されます。</span> <span class="merged" id="all.6gGR9.spl2" title="原文 : Use create(String) instead;">代わりに<code>create(String)</code>を使用してください</span> </p>

</li>
</ul>

</li>
</ul>

<p><span class="merged" id="all.2Wr9Ks"  title="原文:: Configuration changes:">構成の変更:</span></p>

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


<h3 id="_media_common"><span class="merged" id="all.1gdXiF" title="原文 : Media Common">メディア共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.1" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.DWky3" title="原文 : ContentReaders - Methods with alternatives (since 2.0)"><code>ContentReaders</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.1fsteD" title="原文 : ContentTypeCharset - Class with alternative (since 2.0)"><code>ContentTypeCharset</code> - 代替クラス(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.3Yy7bC" title="原文 : ContentWriters - Methods with alternatives (since 2.0)"><code>ContentWriters</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.1N6fYE" title="原文 : MessageBodyReaderContext - Methods with alternatives (since 2.0)"><code>MessageBodyReaderContext</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.2dd6yE" title="原文 : MessageBodyWriterContext - Methods with alternatives (since 2.0)"><code>MessageBodyWriterContext</code> - 代替メソッド(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.3aJQH7" title="原文 : ReadableByteChannelPublisher - Class with alternative (since 2.0)"><code>ReadableByteChannelPublisher</code> - 代替クラス(2.0以降)</span></p>

</li>
</ul>

</div>


<h3 id="_metrics"><span class="merged" id="all.4LL0ot.5"  title="原文:: Metrics">メトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.2" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.218zr" title="原文 : MetricsSupport - 3 methods, replacing Config with metrics settings"><code>MetricsSupport</code> - 3つのメソッド、構成をメトリクス設定に置き換えます</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.xYy3O" title="原文 : Method MetricsSupport create(MetricsSettings, RestServiceSettings) has new parameter;">メソッド<code>MetricsSupport create(MetricsSettings, RestServiceSettings)</code>には新しいパラメータがあります</span></p>

</li>
<li>
<p><span class="merged" id="all.26EK3p" title="原文 : New method MetricsSupport create(MetricsSettings);">新しいメソッド<code>MetricsSupport create(MetricsSettings)</code> ;</span></p>

</li>
<li>
<p><span class="merged" id="all.4UP3y" title="原文 : New method MetricsSupport.Builder&lt;?&gt; builder();">新しいメソッド<code>MetricsSupport.Builder&lt;?> builder()</code> ;</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.RmYE1" title="原文 : KeyPerformanceIndicatorMetricsSettings - new class in metrics API, for backward compatibility only"><code>KeyPerformanceIndicatorMetricsSettings</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.GbOIf" title="原文 : Interface KeyPerformanceIndicatorMetricsSettings - marked for removal;">インタフェース<code>KeyPerformanceIndicatorMetricsSettings</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.1ByZ6g" title="原文 : Interface KeyPerformanceIndicatorMetricsSettingsCompatibility - marked for removal;">インタフェース<code>KeyPerformanceIndicatorMetricsSettingsCompatibility</code> - <code>for removal</code>とマークされました</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.3ZcOZy" title="原文 : RegistryFactory - New class in metrics API, for backward compatibility only"><code>RegistryFactory</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.38ynqf" title="原文 : Method RegistryFactory create() - marked for removal;">メソッド<code>RegistryFactory create()</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.46CmYt" title="原文 : Method RegistryFactory create(Config config) - marked for removal;">メソッド<code>RegistryFactory create(Config config)</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.2k6EA5" title="原文 : Method RegistryFactory getInstance() - marked for removal;">メソッド<code>RegistryFactory getInstance()</code> - <code>for removal</code>とマークされました</span></p>

</li>
<li>
<p><span class="merged" id="all.2I4Lz9" title="原文 : Method RegistryFactory getInstance(Config config) - marked for removal;">メソッド<code>RegistryFactory getInstance(Config config)</code> - <code>for removal</code>とマークされました</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_common_context"><span class="merged" id="all.OsfrK" title="原文 : Common Context">共通コンテキスト</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3UV2Nn" title="原文 : DataPropagationProvider - clearData should use new method"><code>DataPropagationProvider</code> - clearDataは新しいメソッドを使用する必要があります</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1hskrr" title="原文 : Method void clearData() - marked for removal, use void clearData(T data) instead;">メソッド<code>void clearData()</code> - 削除のマークが付いています。かわりに<code>void clearData(T data)</code>を使用</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_grpc_core"><span class="merged" id="all.3iK2vn" title="原文 : GRPC Core">GRPCコア</span></h3>
<div class="section">
<p><span class="merged" id="all.1PPfua"  title="原文:: Deprecations:">非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.EiY6h" title="原文 : JavaMarshaller - removed support for JavaMarshaller"><code>JavaMarshaller</code> - JavaMarshallerのサポートを削除しました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2lX0Fj" title="原文 : New default marshaller supplier will throw an exception if the code falls to where the JavaMarshaller was returned before to inform developer of the change">新しいデフォルトのマーシャラ・サプライヤは、コードが<code>JavaMarshaller</code>が返された場所にあれば例外をスローし、開発者に変更を通知</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_lra"><span class="merged" id="all.HhhKg"  title="原文:: LRA">LRA</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.1" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3VMwyl" title="原文 : CoordinatorClient - multiple methods removed"><code>CoordinatorClient</code> - 複数のメソッドが削除されました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.14utEP" title="原文 : Method Single&lt;URI&gt; start(String, long) - removed;">メソッド<code>Single&lt;URI> start(String, long)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.aKZbC" title="原文 : Method Single&lt;URI&gt; start(URI, String, long) - removed;">メソッド<code>Single&lt;URI> start(URI, String, long)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.2b3BEm" title="原文 : Method Single&lt;Optional&lt;URI&gt;&gt; join(URI, long, Participant) - removed;">メソッド<code>Single&lt;Optional&lt;URI>> join(URI, long, Participant)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.XAHEm" title="原文 : Method Single&lt;Void&gt; cancel(URI) - removed;">メソッド<code>Single&lt;Void> cancel(URI)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.30bc8R" title="原文 : Method Single&lt;Void&gt; close(URI) - removed;">メソッド<code>Single&lt;Void> close(URI)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.3kojIz" title="原文 : Method Single&lt;Void&gt; leave(URI, Participant) - removed;">メソッド<code>Single&lt;Void> leave(URI, Participant)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.KKXTt" title="原文 : Method Single&lt;LRAStatus&gt; status(URI) - removed;">メソッド<code>Single&lt;LRAStatus> status(URI)</code> - removed;</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2Pc3UT" title="原文 : Headers - class removed"><code>Headers</code> - クラスが削除されました</span></p>

</li>
</ul>

</div>


<h3 id="_mp_messaging"><span class="merged" id="all.1uBax7" title="原文 : MP Messaging">MPメッセージング</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.2" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.zFYQG" title="原文 : FormerHealthProbe - class marked for removal"><code>FormerHealthProbe</code> - 削除対象としてマークされたクラス</span></p>

</li>
<li>
<p><span class="merged" id="all.3w69C3" title="原文 : MessagingCdiExtension - Alternative methods used"><code>MessagingCdiExtension</code> - 使用される代替メソッド</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2MAoPn" title="原文 : Method Map&lt;String, Boolean&gt; channelsLiveness() - marked for removal;">メソッド<code>Map&lt;String, Boolean> channelsLiveness()</code> - 削除対象としてマーク</span></p>

</li>
<li>
<p><span class="merged" id="all.363fp6" title="原文 : Method Map&lt;String, Boolean&gt; channelsReadiness() - marked for removal;">メソッド<code>Map&lt;String, Boolean> channelsReadiness()</code> - 削除対象としてマーク</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_jwt"><span class="merged" id="all.VRED4"  title="原文:: JWT">JWT</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.3" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.49ZVyW" title="原文 : Jwt - Audience can be a list (since 2.4.0)"><code>Jwt</code> - オーディエンスはリストにできます(2.4.0以降)</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1Jo2wO" title="原文 : Method Builder audience(String) - removed, use addAudience(String) instead;">メソッド<code>Builder audience(String)</code> - 削除、かわりに<code>addAudience(String)</code>を使用</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_mp_metrics"><span class="merged" id="all.27MIlP" title="原文 : MP Metrics">MPメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.4" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2lBmsu" title="原文 : MetricUtil - multiple methods removed"><code>MetricUtil</code> - 複数のメソッドが削除されました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3kHFu2" title="原文 : Method public static &lt;E extends Member &amp; AnnotatedElement, A extends Annotation&gt; LookupResult&lt;A&gt; lookupAnnotation(E, Class&lt;? extends Annotation&gt;, Class&lt;?&gt;) - removed;">メソッド<code>public static &lt;E extends Member &amp; AnnotatedElement, A extends Annotation> LookupResult&lt;A> lookupAnnotation(E, Class&lt;? extends Annotation>, Class&lt;?>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.XHUC7" title="原文 : Method &lt;A extends Annotation&gt; LookupResult&lt;A&gt; lookupAnnotation(AnnotatedType&lt;?&gt;, AnnotatedMethod&lt;?&gt;, Class&lt;A&gt;) - removed;">メソッド<code>&lt;A extends Annotation> LookupResult&lt;A> lookupAnnotation(AnnotatedType&lt;?>, AnnotatedMethod&lt;?>, Class&lt;A>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.qzZs2" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(MetricRegistry, E, Class&lt;?&gt;, Annotation, MatchingType) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(MetricRegistry, E, Class&lt;?>, Annotation, MatchingType)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.3V7pt5" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(E, Class&lt;?&gt;, LookupResult&lt;? extends Annotation&gt;) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(E, Class&lt;?>, LookupResult&lt;? extends Annotation>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.11qwyg" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(E, Class&lt;?&gt;, Annotation, MatchingType) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(E, Class&lt;?>, Annotation, MatchingType)</code> - removed;</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.1WfDt2" title="原文 : Method MetricsCdiExtension - multiple methods removed">メソッド<code>MetricsCdiExtension</code> - 複数のメソッドが削除されました</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3V7pt5.1" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetric(E, Class&lt;?&gt;, LookupResult&lt;? extends Annotation&gt;) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetric(E, Class&lt;?>, LookupResult&lt;? extends Annotation>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.YkfPZ" title="原文 : Method &lt;E extends Member &amp; AnnotatedElement&gt; void registerMetricInternal(List&lt;RegistrationPrep&gt;, E, Class&lt;?&gt;, LookupResult&lt;? extends Annotation&gt;, Executable) - removed;">メソッド<code>&lt;E extends Member &amp; AnnotatedElement> void registerMetricInternal(List&lt;RegistrationPrep>, E, Class&lt;?>, LookupResult&lt;? extends Annotation>, Executable)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.1zQDZn" title="原文 : Method void registerMetricsForAnnotatedSitesFromGrpcTest() - removed;">メソッド<code>void registerMetricsForAnnotatedSitesFromGrpcTest()</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.ILFWg" title="原文 : Method recordMetricAnnotatedClass(@Observes @WithAnnotations({Counted.class, Metered.class, Timed.class, ConcurrentGauge.class, SimplyTimed.class, Gauge.class}) ProcessAnnotatedType&lt;?&gt;) - removed;">メソッド<code>recordMetricAnnotatedClass(@Observes @WithAnnotations({Counted.class, Metered.class, Timed.class, ConcurrentGauge.class, SimplyTimed.class, Gauge.class}) ProcessAnnotatedType&lt;?>)</code> - removed;</span></p>

</li>
<li>
<p><span class="merged" id="all.4EfFTr" title="原文 : Method &lt;T extends org.eclipse.microprofile.metrics.Metric&gt; MetricType getMetricType(T) - removed;">メソッド<code>&lt;T extends org.eclipse.microprofile.metrics.Metric> MetricType getMetricType(T)</code> - removed;</span></p>

</li>
</ul>

</li>
</ul>

</div>


<h3 id="_http_signature_security_provider"><span class="merged" id="all.2LODwq" title="原文 : HTTP Signature Security Provider">HTTPシグネチャ・セキュリティ・プロバイダ</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.26prTb" title="原文 : backwardCompatibleEol - set to false"><code>backwardCompatibleEol</code> - falseに設定</span></p>

</li>
</ul>

</div>


<h3 id="_service_common"><span class="merged" id="all.DM9T1" title="原文 : Service Common">サービス共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.5" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2pJ9Hb" title="原文 : HelidonRestServiceSupport - method configureEndpoint(Rules) deprecated."><code>HelidonRestServiceSupport</code> - メソッド<em>configureEndpoint(Rules)</em>は非推奨です。</span></p>

</li>
</ul>

</div>


<h3 id="_webserver"><span class="merged" id="all.2mhjof"  title="原文: WebServer">WebServer</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2KDsTc.spl1" title="原文 : io.helidon.webserver.staticcontent.* in WebServer - moved to a separate module."><code>WebServer</code>の<code>io.helidon.webserver.staticcontent.*</code> - 別のモジュールに移動しました。</span> <span class="merged" id="all.2KDsTc.spl2" title="原文 : Fully removed from WebServer module."><code>WebServer</code>モジュールから完全に削除されました。</span> </p>

</li>
</ul>

</div>

</div>

</doc-view>
