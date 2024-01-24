<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4WT5O7"  title="原文:: Helidon MP 3.x Upgrade Guide">Helidon MP 3.xアップグレード・ガイド</span></dt>
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


<h2 id="_javax_namespace_to_jakarta_namespace"><span class="merged" id="all.3Kv64F" title="原文 : javax.* namespace to jakarta.* namespace">javax.*ネームスペースからjakarta.*ネームスペース</span></h2>
<div class="section">
<p><span class="merged" id="all.4J29Ih.spl1" title="原文 : Helidon 3 supports MicroProfile 5.0 and selected Jakarta EE 9.1 APIs.">Helidon 3では、MicroProfile 5.0および<em>「選択した」</em> Jakarta EE 9.1 APIがサポートされています。</span> <span class="merged" id="all.4J29Ih.spl2" title="原文 : In Jakarta EE 9.1 the Java package namespace was changed from javax to jakarta.">Jakarta EE 9.1で、Javaパッケージ・ネームスペースは<code>javax</code>から<code>jakarta</code>に変更されました。</span> <span class="merged" id="all.4J29Ih.spl3" title="原文 : Therefore, you must change your application to use jakarta instead of corresponding javax for Jakarta EE packages.">そのため、Jakarta EEパッケージに対応する<code>javax</code>のかわりに<code>jakarta</code>を使用するようにアプリケーションを変更する必要があります。</span> </p>

<p><span class="merged" id="all.4LzkQz" title="原文 : In version 3.x Helidon supports MicroProfile 5.0 specification, which now is fully migrated to jakarta namespace.">バージョン3.xでは、HelidonはMicroProfile 5.0仕様をサポートしており、現在は<code>jakarta</code>ネームスペースに完全に移行されています。</span></p>

<p><span class="merged" id="all.O9WTm" title="原文 : As a result, javax module is no longer in dependency management of Helidon parent pom files.">その結果、<code>javax</code>モジュールは、Helidon親のpomファイルの依存関係管理ではなくなりました。</span></p>

</div>


<h2 id="_microprofile_5_0_support"><span class="merged" id="all.3q1g19" title="原文 : MicroProfile 5.0 support">MicroProfile 5.0のサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.1iz6qe.spl1" title="原文 : MicroProfile 5.0 enables MicroProfile APIs to be used together with Jakarta EE 9.1 (Jakarta EE namespace).">MicroProfile 5.0では、MicroProfile APIをJakarta EE 9.1 (Jakarta EEネームスペース)と一緒に使用できます。</span> <span class="merged" id="all.1iz6qe.spl2" title="原文 : This release was mainly focused on updating dependencies from javax to jakarta, as well as overall stability and usability improvements.">このリリースは主に、<code>javax</code>から<code>jakarta</code>への依存関係の更新と、全体的な安定性と使いやすさの改善に焦点を当てました。</span> </p>

<p><span class="merged" id="all.FWqq6" title="原文 : MicroProfile 5.0 lays the foundation for the rapid innovation of MicroProfile APIs for its 2022 releases.">MicroProfile 5.0は、2022リリースに対するMicroProfile APIの迅速なイノベーションの基盤を提供します。</span></p>

<p><span class="merged" id="all.uNGpI" title="原文 : MicroProfile 5.0 is an umbrella for the following specifications and their corresponding versions:">MicroProfile 5.0は、次の仕様および対応するバージョンの傘です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2wfRBH" title="原文 : MicroProfile Config 3.0.3">MicroProfile構成3.0.3</span></p>

</li>
<li>
<p><span class="merged" id="all.12JpRX" title="原文 : MicroProfile Fault Tolerance 4.0.2">MicroProfileフォルト・トレランス4.0.2</span></p>

</li>
<li>
<p><span class="merged" id="all.ULCg8" title="原文 : MicroProfile Health 4.0">MicroProfileヘルス4.0</span></p>

</li>
<li>
<p><span class="merged" id="all.Pnsl9" title="原文 : MicroProfile JWT Authentication 2.1">MicroProfile JWT認証2.1</span></p>

</li>
<li>
<p><span class="merged" id="all.UNEWN" title="原文 : MicroProfile Metrics 5.0.1">MicroProfileメトリクス5.0.1</span></p>

</li>
<li>
<p><span class="merged" id="all.NPRpd" title="原文 : MicroProfile OpenAPI 3.1">MicroProfile OpenAPI 3.1</span></p>

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
<p><span class="merged" id="all.2bbJqI" title="原文 : CDI (Jakarta Contexts and Dependency Injection) 4.0.1">CDI (Jakartaコンテキストおよび依存関係インジェクション) 4.0.1</span></p>

</li>
<li>
<p><span class="merged" id="all.2shi6K" title="原文 : JAX-RS (Jakarta RESTful Web Services) 3.1.0">JAX-RS (Jakarta RESTful Webサービス) 3.1.0</span></p>

</li>
<li>
<p><span class="merged" id="all.PCnvV" title="原文 : JSON-B (Jakarta JSON Binding) 3.0">JSON-B (Jakarta JSONバインディング) 3.0</span></p>

</li>
<li>
<p><span class="merged" id="all.1thYmM" title="原文 : JSON-P (Jakarta JSON Processing) 2.1.1">JSON-P (Jakarta JSON処理) 2.1.1</span></p>

</li>
<li>
<p><span class="merged" id="all.1fjBR6" title="原文 : Jakarta Annotations 2.1.1">Jakarta注釈2.1.1</span></p>

</li>
<li>
<p><span class="merged" id="all.1BHgFy" title="原文 : Jakarta Persistence API 3.1.0">Jakarta永続性API 3.1.0</span></p>

</li>
<li>
<p><span class="merged" id="all.3yh6uQ" title="原文 : Jakarta Transactions API 2.0">JakartaトランザクションAPI 2.0</span></p>

</li>
<li>
<p><span class="merged" id="all.3jsLzJ" title="原文 : Jakarta WebSocket API 2.1.0">Jakarta WebSocket API 2.1.0</span></p>

</li>
<li>
<p><span class="merged" id="all.2JKZh0" title="原文 : Jakarta Bean Validation 3.0">Jakarta Beanバリデーション3.0</span></p>

</li>
</ul>

<p><span class="merged" id="all.3itAXn" title="原文 : Corresponding changes to Helidon code were made to support the corresponding specifications&apos; versions.">対応する仕様のバージョンをサポートするために、Helidonコードへの対応する変更が行われました。</span></p>


<h3 id="_incompatible_changes_for_each_specification"><span class="merged" id="all.1P1Cq6" title="原文 : Incompatible changes for each specification">各仕様の互換性のない変更</span></h3>
<div class="section">
<p><span class="merged" id="all.3BmBAg.spl1" title="原文 : Migration from javax to jakarta namespace is making this release backward incompatible with previous version of MicroProfile."><code>javax</code>から<code>jakarta</code>ネームスペースへの移行により、このリリースは以前のバージョンのMicroProfileとの互換性を低下させています。</span> <span class="merged" id="all.3BmBAg.spl2" title="原文 : For each specification there are also API and functional changes, described below.">仕様ごとに、次に説明するAPIおよび機能の変更もあります。</span> </p>


<h4 id="_microprofile_specifications"><span class="merged" id="all.1kjZyA" title="原文 : MicroProfile specifications">MicroProfile仕様</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2Fn0Dk" title="原文 : MicroProfile Config 3.0.3:"><strong>MicroProfile構成3.0.3</strong>:</span></p>
<p><span class="merged" id="all.1Wb3EK" title="原文 : Incompatible changes described in MicroProfile Config 3.0.3 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/microprofile-config-spec-3.0.1.html#_incompatible_changes" target="_blank">「MicroProfile構成3.0.3仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3lTfGj" title="原文 : MicroProfile Fault Tolerance 4.0.2:"><strong>MicroProfileフォルト・トレランス4.0.2</strong>:</span></p>
<p><span class="merged" id="all.1ec3L6" title="原文 : Incompatible changes described in MicroProfile Fault Tolerance 4.0.2 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0/microprofile-fault-tolerance-spec-4.0.html#_backward_incompatible_changes=" target="_blank">「MicroProfileフォルト・トレランス4.0.2仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3Hv3Bn" title="原文 : MicroProfile Health 4.0:"><strong>MicroProfileヘルス4.0</strong>:</span></p>
<p><span class="merged" id="all.xhOnh" title="原文 : Incompatible changes described in MicroProfile Health 4.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html#_incompatible_changes" target="_blank">「MicroProfileヘルス4.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3eGAX1" title="原文 : MicroProfile JWT Authentication 2.1:"><strong>MicroProfile JWT認証2.1</strong>:</span></p>
<p><span class="merged" id="all.1jrLTJ" title="原文 : Incompatible changes described in MicroProfile JWT Authentication 2.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.0/microprofile-jwt-auth-spec-2.0.html#_incompatible_changes" target="_blank">「MicroProfile JWT認証2.1仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.iR5NJ" title="原文 : MicroProfile Metrics 5.0.1:"><strong>MicroProfileメトリクス5.0.1</strong>:</span></p>
<p><span class="merged" id="all.3CpYMG" title="原文 : Incompatible changes described in MicroProfile Metrics 5.0.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/microprofile-metrics-spec-4.0.html#_incompatible_changes" target="_blank">「MicroProfileメトリクス5.0.1仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.1Bz26V" title="原文 : MicroProfile OpenAPI 3.1:"><strong>MicroProfile OpenAPI 3.1</strong>:</span></p>
<p><span class="merged" id="all.1B1ehq" title="原文 : Incompatible changes described in MicroProfile OpenAPI 3.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-open-api-2.0.1/microprofile-openapi-spec-2.0.1.html#_incompatible_changes" target="_blank">「MicroProfile OpenAPI 3.1仕様」</a>で説明されている互換性のない変更</span></p>

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

</div>


<h3 id="_supported_jakarta_ee_specifications"><span class="merged" id="all.1bPkUV" title="原文 : Supported Jakarta EE specifications">サポートされているJakarta EE仕様</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4Ovqde" title="原文 : CDI (Jakarta Contexts and Dependency Injection) 4.0.1:"><strong>CDI (Jakartaコンテキストおよび依存関係インジェクション) 4.0.1</strong>:</span></p>
<p><span class="merged" id="all.k6DOL" title="原文 : Changes described in CDI (Jakarta Contexts and Dependency Injection) 4.0.1 Specification"><a href="https://jakarta.ee/specifications/cdi/3.0/jakarta-cdi-spec-3.0.html#architecture" target="_blank">「CDI (Jakartaコンテキストおよび依存関係インジェクション) 4.0.1仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3ZBcis" title="原文 : JAX-RS (Jakarta RESTful Web Services) 3.1.0:"><strong>JAX-RS (Jakarta RESTful Webサービス) 3.1.0</strong>:</span></p>
<p><span class="merged" id="all.m8OcM.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.m8OcM.spl2" title="原文 : Changes described in JAX-RS (Jakarta RESTful Web Services) 3.1.0Specification"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html#_incompatible_changes" target="_blank">「JAX-RS (Jakarta RESTful Webサービス) 3.1.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.35FbM2" title="原文 : JSON-B (Jakarta JSON Binding) 3.0:"><strong>JSON-B (Jakarta JSONバインディング) 3.0</strong>:</span></p>
<p><span class="merged" id="all.45yZbI.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.45yZbI.spl2" title="原文 : Changes described in JSON-B (Jakarta JSON Binding) 3.0 Specification"><a href="https://jakarta.ee/specifications/jsonb/2.0/jakarta-jsonb-spec-2.0.html#change-log" target="_blank">「JSON-B (Jakarta JSON Binding) 3.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.3H1qZR" title="原文 : JSON-P (Jakarta JSON Processing) 2.1.1:"><strong>JSON-P (Jakarta JSON処理) 2.1.1</strong>:</span></p>
<p><span class="merged" id="all.J3IS4" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span></p>

</li>
<li>
<p><span class="merged" id="all.3xKKnd" title="原文 : Jakarta Annotations 2.1.1:"><strong>Jakarta注釈2.1.1</strong>:</span></p>
<p><span class="merged" id="all.4TP3CW.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.4TP3CW.spl2" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.4TP3CW.spl3" title="原文 : Full information in Jakarta Annotations 2.1.1 Specification"><a href="https://jakarta.ee/specifications/annotations/2.0/annotations-spec-2.0.html" target="_blank">「Jakarta注釈2.1.1仕様」</a>の完全な情報</span> </p>

</li>
<li>
<p><span class="merged" id="all.2SZhfS" title="原文 : Jakarta Persistence API 3.1.0:"><strong>Jakarta永続性API 3.1.0</strong>:</span></p>
<p><span class="merged" id="all.47YJir.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.47YJir.spl2" title="原文 : Changes described in Jakarta Persistence API 3.1.0 Specification"><a href="https://jakarta.ee/specifications/persistence/3.0/jakarta-persistence-spec-3.0.html#revision-history" target="_blank">「Jakarta永続性API 3.1.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.gfHdM" title="原文 : Jakarta Transactions API 2.0:"><strong>JakartaトランザクションAPI 2.0</strong>:</span></p>
<p><span class="merged" id="all.23Dpfx.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.23Dpfx.spl2" title="原文 : Changes described in Jakarta Transactions API 2.0 Specification"><a href="https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html#revision-history" target="_blank">「JakartaトランザクションAPI 2.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.IMFBY" title="原文 : Jakarta WebSocket API 2.1.0:"><strong>Jakarta WebSocket API 2.1.0</strong>:</span></p>
<p><span class="merged" id="all.vtPaE.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.vtPaE.spl2" title="原文 : Changes described in Jakarta WebSocket API 2.1.0 Specification"><a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html#changes" target="_blank">「Jakarta WebSocket API 2.1.0仕様」</a>で説明されている変更</span> </p>

</li>
<li>
<p><span class="merged" id="all.3ygHnY" title="原文 : Jakarta Bean Validation 3.0:"><strong>Jakarta Beanバリデーション3.0</strong>:</span></p>
<p><span class="merged" id="all.257COb.spl1" title="原文 : Moved to jakarta namespace."><code>jakarta</code>ネームスペースに移動しました。</span> <span class="merged" id="all.257COb.spl2" title="原文 : Changes described in Jakarta Bean Validation 3.0 Specification"><a href="https://jakarta.ee/specifications/bean-validation/2.0/bean-validation_2.0.html#changelog" target="_blank">「Jakarta Beanバリデーション3.0仕様」</a>で説明されている変更</span> </p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.eDNdT" title="原文 : Please, read each specification carefully for incompatible changes!">互換性のない変更については、各仕様を注意深くお読みください。</span></p>
</div>

</div>

</div>


<h2 id="_deprecations"><span class="merged" id="all.2qNGyj"  title="原文:: Deprecations">非推奨</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2HguJA.spl1" title="原文 : The custom Helidon OCI clients have been deprecated.">カスタムHelidon OCIクライアントは非推奨になりました。</span> <span class="merged" id="all.2HguJA.spl2" title="原文 : Use the OCI Java SDK instead.">かわりにOCI Java SDKを使用してください。</span> <span class="merged" id="all.2HguJA.spl3" title="原文 : If you use Helidon MP you can inject OCI SDK clients by adding the dependency io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi.">Helidon MPを使用する場合は、依存関係<code>io.helidon.integrations.oci.sdk:helidon-integrations-oci-sdk-cdi</code>を追加して、OCI SDKクライアントをインジェクトできます。</span> </p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3ZfeIK" title="原文 : See Resolving compatibility issue with OCI SDK for detailed information on how to work around this issue.">この問題に対処する方法の詳細は、<router-link :to="{path: '/mp/integrations/oci', hash: '#oci-compatibility'}">「OCI SDKとの互換性の問題の解決」</router-link>を参照してください。</span></p>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2mlOhZ.spl1" title="原文 : The MultiPart buffered readers have been deprecated."><code>MultiPart buffered readers</code>は非推奨になりました。</span> <span class="merged" id="all.2mlOhZ.spl2" title="原文 : Use the MultiPart stream readers instead.">かわりに<code>MultiPart stream readers</code>を使用してください。</span> </p>

</li>
</ul>


<h3 id="_helidon_common"><span class="merged" id="all.3JI2tz" title="原文 : Helidon Common">Helidon共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.47jEsR" title="原文 : Resource - old configuration approach (since 2.0)"><code>Resource</code> - 古い構成アプローチ(2.0以降)</span></p>

</li>
<li>
<p><span class="merged" id="all.2oesVM" title="原文 : ThreadPoolSupplier - Named thread pools (since 2.4.2)"><code>ThreadPoolSupplier</code> - 名前付きスレッド・プール(2.4.2以降)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1Lcpz1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4363" target="_blank">「タスク」</a>を参照してください。</span></p>

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

<p><span class="merged" id="all.1QCX4a" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4364" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_metrics"><span class="merged" id="all.4LL0ot.2"  title="原文:: Metrics">メトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3sgKNw.2" title="原文 : Deprecations in the following classes:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.218zr" title="原文 : MetricsSupport - 3 methods, replacing Config with metrics settings"><code>MetricsSupport</code> - 3つのメソッド、構成をメトリクス設定に置き換えます</span></p>

</li>
<li>
<p><span class="merged" id="all.3RAsoh" title="原文 : KeyPerformanceIndicatorMetricsSettings - New class in metrics API, for backward compatibility only"><code>KeyPerformanceIndicatorMetricsSettings</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>

</li>
<li>
<p><span class="merged" id="all.3ZcOZy" title="原文 : RegistryFactory - New class in metrics API, for backward compatibility only"><code>RegistryFactory</code> - メトリクスAPIの新しいクラス(下位互換性のみ)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1OPWJh" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4365" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_common_context"><span class="merged" id="all.OsfrK" title="原文 : Common Context">共通コンテキスト</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3UV2Nn" title="原文 : DataPropagationProvider - clearData should use new method"><code>DataPropagationProvider</code> - clearDataは新しいメソッドを使用する必要があります</span></p>

</li>
</ul>

<p><span class="merged" id="all.1RR3c2" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4366" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_grpc_core"><span class="merged" id="all.1xNpcX" title="原文 : GRPC core">GRPCコア</span></h3>
<div class="section">
<p><span class="merged" id="all.1PPfua"  title="原文:: Deprecations:">非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.EiY6h" title="原文 : JavaMarshaller - removed support for JavaMarshaller"><code>JavaMarshaller</code> - JavaMarshallerのサポートを削除しました</span></p>

</li>
</ul>

<p><span class="merged" id="all.1SCHQN" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4367" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_lra"><span class="merged" id="all.HhhKg"  title="原文:: LRA">LRA</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.1" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3XXrcE" title="原文 : CoordinatorClient - multiple methods"><code>CoordinatorClient</code> - 複数のメソッド</span></p>

</li>
<li>
<p><span class="merged" id="all.3vtbis"  title="原文: Headers"><code>Headers</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.1IQk1s" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4368" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_mp_messaging"><span class="merged" id="all.1uBax7" title="原文 : MP Messaging">MPメッセージング</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.2" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3w69C3" title="原文 : MessagingCdiExtension - Alternative methods used"><code>MessagingCdiExtension</code> - 使用される代替メソッド</span></p>

</li>
</ul>

<p><span class="merged" id="all.1J3MWn" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4369" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_jwt"><span class="merged" id="all.VRED4"  title="原文:: JWT">JWT</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.3" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.49ZVyW" title="原文 : Jwt - Audience can be a list (since 2.4.0)"><code>Jwt</code> - オーディエンスはリストにできます(2.4.0以降)</span></p>

</li>
</ul>

<p><span class="merged" id="all.jyjGC" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4370" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_mp_metrics"><span class="merged" id="all.27MIlP" title="原文 : MP Metrics">MPメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.4" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.34Ex3N" title="原文 : MetricUtil - multiple methods"><code>MetricUtil</code> - 複数のメソッド</span></p>

</li>
<li>
<p><span class="merged" id="all.3dmwHe" title="原文 : MetricsCdiExtension - multiple methods"><code>MetricsCdiExtension</code> - 複数のメソッド</span></p>

</li>
</ul>

<p><span class="merged" id="all.lS2tZ" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4371" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_http_signature_security_provider"><span class="merged" id="all.2LODwq" title="原文 : HTTP Signature Security Provider">HTTPシグネチャ・セキュリティ・プロバイダ</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.26prTb" title="原文 : backwardCompatibleEol - set to false"><code>backwardCompatibleEol</code> - falseに設定</span></p>

</li>
</ul>

<p><span class="merged" id="all.munNK" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4372" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_service_common"><span class="merged" id="all.DM9T1" title="原文 : Service Common">サービス共通</span></h3>
<div class="section">
<p><span class="merged" id="all.3mbBTT.5" title="原文 : Deprecations in the following class:">次のクラスの非推奨:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.35rFv6" title="原文 : HelidonRestServiceSupport - method configureEndpoint(Rules)"><code>HelidonRestServiceSupport</code> - メソッド<em>configureEndpoint(Rules)</em></span></p>

</li>
</ul>

<p><span class="merged" id="all.lS2tZ.1" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4371" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>


<h3 id="_webserver"><span class="merged" id="all.2mhjof"  title="原文: WebServer">WebServer</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.21GbHz.spl1" title="原文 : Static content support in WebServer - moved to a separate module."><code>WebServer</code>の<code>Static content support</code> - 別のモジュールに移動しました。</span> <span class="merged" id="all.21GbHz.spl2" title="原文 : Fully removed from WebServer module."><code>WebServer</code>モジュールから完全に削除されました。</span> </p>

</li>
</ul>

<p><span class="merged" id="all.qyfG0" title="原文 : More information in the following Task.">詳細は、次の<a href="https://github.com/oracle/helidon/issues/4374" target="_blank">「タスク」</a>を参照してください。</span></p>

</div>

</div>

</doc-view>
