<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3wmexU"  title="原文:: Helidon MP 4.x Upgrade Guide">Helidon MP 4.xアップグレード・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.49Ajnm.spl1" title="原文 : In Helidon 4.x we have made some changes to APIs and runtime behavior.">Helidon 4.xでは、APIおよびランタイム動作にいくつか変更を加えました。</span> <span class="merged" id="all.49Ajnm.spl2" title="原文 : This guide will help you upgrade a Helidon MP 3.x application to 4.x.">このガイドは、Helidon MP 3.xアプリケーションを4.xにアップグレードする際に役立ちます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_java_21_runtime"><span class="merged" id="all.22tMG1"  title="原文:: Java 21 Runtime">Java 21 Runtime</span></h2>
<div class="section">
<p><span class="merged" id="all.7KJ8g.spl1" title="原文 : Java 17 is no longer supported in Helidon 4.">Java 17は、Helidon 4でサポートされなくなりました。</span> <span class="merged" id="all.7KJ8g.spl2"  title="原文:: Java 21 or newer is required.">Java 21以上が必要です。</span> <span class="merged" id="all.7KJ8g.spl3" title="原文 : Please follow the instructions in Prerequisites for proper installation.">正しくインストールするには、<router-link to="/about/prerequisites">「事前設定」</router-link>の手順に従ってください。</span> </p>

<p><span class="merged" id="all.346jEv.spl1" title="原文 : Helidon 4 no longer uses Netty.">Helidon 4はNettyを使用しません。</span> <span class="merged" id="all.346jEv.spl2" title="原文 : Helidon MP is now running on Helidon WebServer which is based on virtual threads technology, available in Java 21.">Helidon MPは、Java 21で使用可能な仮想スレッド・テクノロジに基づくHelidon WebServerで実行されるようになりました。</span> </p>

</div>


<h2 id="_microprofile_6_0_support"><span class="merged" id="all.1K2aTW" title="原文 : MicroProfile 6.0 support">MicroProfile 6.0のサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.421lRU" title="原文 : MicroProfile 6.0 enables MicroProfile APIs to be used together with Jakarta EE 10 Core Profile.">MicroProfile 6.0を使用すると、MicroProfile APIをJakarta EE 10コア・プロファイルと一緒に使用できます。</span></p>


<h3 id="_microprofile_specifications"><span class="merged" id="all.1kjZyA.1" title="原文 : MicroProfile specifications">MicroProfile仕様</span></h3>
<div class="section">
<p><span class="merged" id="all.ShBUN.spl1" title="原文 : Most of the MicroProfile specifications had relatively minor changes.">ほとんどのMicroProfile仕様には比較的小さな変更がありました。</span> <span class="merged" id="all.ShBUN.spl2" title="原文 : The exception is Metrics which had substantial changes.">例外は、大幅な変更があったメトリクスです。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Fn0Dk.1" title="原文 : MicroProfile Config 3.0.3:"><strong>MicroProfile構成3.0.3</strong>:</span></p>
<p><span class="merged" id="all.1Wb3EK.1" title="原文 : Incompatible changes described in MicroProfile Config 3.0.3 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/microprofile-config-spec-3.0.1.html#_incompatible_changes" target="_blank">「MicroProfile構成3.0.3仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3lTfGj.1" title="原文 : MicroProfile Fault Tolerance 4.0.2:"><strong>MicroProfileフォルト・トレランス4.0.2</strong>:</span></p>
<p><span class="merged" id="all.1ljMuJ" title="原文 : Incompatible changes described in MicroProfile Fault Tolerance 4.0.2 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0.2/microprofile-fault-tolerance-spec-4.0.2.html#_backward_incompatible_changes=" target="_blank">「MicroProfileフォルト・トレランス4.0.2仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3Hv3Bn.1" title="原文 : MicroProfile Health 4.0:"><strong>MicroProfileヘルス4.0</strong>:</span></p>
<p><span class="merged" id="all.xhOnh.1" title="原文 : Incompatible changes described in MicroProfile Health 4.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html#_incompatible_changes" target="_blank">「MicroProfileヘルス4.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3eGAX1.1" title="原文 : MicroProfile JWT Authentication 2.1:"><strong>MicroProfile JWT認証2.1</strong>:</span></p>
<p><span class="merged" id="all.1jrLTJ.1" title="原文 : Incompatible changes described in MicroProfile JWT Authentication 2.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.0/microprofile-jwt-auth-spec-2.0.html#_incompatible_changes" target="_blank">「MicroProfile JWT認証2.1仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.iR5NJ.1" title="原文 : MicroProfile Metrics 5.0.1:"><strong>MicroProfileメトリクス5.0.1</strong>:</span></p>
<p><span class="merged" id="all.m4kl1" title="原文 : Incompatible changes described in MicroProfile Metrics 5.0.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-5.0/microprofile-metrics-spec-5.0.html#_incompatible_changes" target="_blank">「MicroProfileメトリクス5.0.1仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.1Bz26V.1" title="原文 : MicroProfile OpenAPI 3.1:"><strong>MicroProfile OpenAPI 3.1</strong>:</span></p>
<p><span class="merged" id="all.3YF05L" title="原文 : Incompatible changes described in MicroProfile OpenAPI 3.1 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.1/microprofile-openapi-spec-3.1.html#incompatible_changes_30" target="_blank">「MicroProfile OpenAPI 3.1仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3153JR.1" title="原文 : MicroProfile Rest Client 3.0:"><strong>MicroProfile Restクライアント3.0</strong>:</span></p>
<p><span class="merged" id="all.2pMBnQ.1" title="原文 : Incompatible changes described in MicroProfile Rest Client 3.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html#_incompatible_changes" target="_blank">「MicroProfile Restクライアント3.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3PLlpq" title="原文 : MicroProfile Telemetry Tracing 1.0:"><strong>MicroProfileテレメトリ・トレース1.0</strong>:</span></p>
<p><span class="merged" id="all.4HLDIM" title="原文 : Incompatible changes described in MicroProfile Telemetry Tracing 1.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-telemetry-1.0/tracing/microprofile-telemetry-tracing-spec-1.0.html#_incompatible_changes" target="_blank">「MicroProfileテレメトリ・トレース1.0仕様」</a>で説明されている互換性のない変更</span></p>

</li>
</ul>

</div>


<h3 id="_supported_jakarta_ee_specifications"><span class="merged" id="all.1bPkUV.1" title="原文 : Supported Jakarta EE specifications">サポートされているJakarta EE仕様</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4Ovqde.1" title="原文 : CDI (Jakarta Contexts and Dependency Injection) 4.0.1:"><strong>CDI (Jakartaコンテキストおよび依存関係インジェクション) 4.0.1</strong>:</span></p>
<p><span class="merged" id="all.20kKNV" title="原文 : Changes described in CDI (Jakarta Contexts and Dependency Injection) 4.0.1 Specification"><a href="https://jakarta.ee/specifications/cdi/4.0/jakarta-cdi-spec-4.0.html#architecture" target="_blank">「CDI (Jakartaコンテキストおよび依存関係インジェクション) 4.0.1仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3ZBcis.1" title="原文 : JAX-RS (Jakarta RESTful Web Services) 3.1.0:"><strong>JAX-RS (Jakarta RESTful Webサービス) 3.1.0</strong>:</span></p>
<p><span class="merged" id="all.1DUlWe" title="原文 : Changes described in JAX-RS (Jakarta RESTful Web Services) 3.1.0 Specification"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html#_incompatible_changes" target="_blank">「JAX-RS (Jakarta RESTful Webサービス) 3.1.0仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.35FbM2.1" title="原文 : JSON-B (Jakarta JSON Binding) 3.0:"><strong>JSON-B (Jakarta JSONバインディング) 3.0</strong>:</span></p>
<p><span class="merged" id="all.175vur" title="原文 : Changes described in JSON-B (Jakarta JSON Binding) 3.0 Specification"><a href="https://jakarta.ee/specifications/jsonb/2.0/jakarta-jsonb-spec-2.0.html#change-log" target="_blank">「JSON-B (Jakarta JSON Binding) 3.0仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3H1qZR.1" title="原文 : JSON-P (Jakarta JSON Processing) 2.1.1:"><strong>JSON-P (Jakarta JSON処理) 2.1.1</strong>:</span></p>
<p><span class="merged" id="all.246b8g" title="原文 : Changes described in JSON-P (Jakarta JSON Parsing) 2.1.1 Specification"><a href="https://jakarta.ee/specifications/jsonp/2.1/apidocs/" target="_blank">「JSON-P (Jakarta JSON解析) 2.1.1仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3xKKnd.1" title="原文 : Jakarta Annotations 2.1.1:"><strong>Jakarta注釈2.1.1</strong>:</span></p>
<p><span class="merged" id="all.1arYZE" title="原文 : Full information in Jakarta Annotations 2.1.1 Specification"><a href="https://jakarta.ee/specifications/annotations/2.0/annotations-spec-2.0.html" target="_blank">「Jakarta注釈2.1.1仕様」</a>の完全な情報</span></p>

</li>
<li>
<p><span class="merged" id="all.2SZhfS.1" title="原文 : Jakarta Persistence API 3.1.0:"><strong>Jakarta永続性API 3.1.0</strong>:</span></p>
<p><span class="merged" id="all.1BG92B" title="原文 : Changes described in Jakarta Persistence API 3.1.0 Specification"><a href="https://jakarta.ee/specifications/persistence/3.0/jakarta-persistence-spec-3.0.html#revision-history" target="_blank">「Jakarta永続性API 3.1.0仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.gfHdM.1" title="原文 : Jakarta Transactions API 2.0:"><strong>JakartaトランザクションAPI 2.0</strong>:</span></p>
<p><span class="merged" id="all.1ZN7zH" title="原文 : Changes described in Jakarta Transactions API 2.0 Specification"><a href="https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html#revision-history" target="_blank">「JakartaトランザクションAPI 2.0仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.IMFBY.1" title="原文 : Jakarta WebSocket API 2.1.0:"><strong>Jakarta WebSocket API 2.1.0</strong>:</span></p>
<p><span class="merged" id="all.464NCm" title="原文 : Changes described in Jakarta WebSocket API 2.1.0 Specification"><a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html#changes" target="_blank">「Jakarta WebSocket API 2.1.0仕様」</a>で説明されている変更</span></p>

</li>
<li>
<p><span class="merged" id="all.3ygHnY.1" title="原文 : Jakarta Bean Validation 3.0:"><strong>Jakarta Beanバリデーション3.0</strong>:</span></p>
<p><span class="merged" id="all.2gdH56" title="原文 : Changes described in Jakarta Bean Validation 3.0 Specification"><a href="https://jakarta.ee/specifications/bean-validation/2.0/bean-validation_2.0.html#changelog" target="_blank">「Jakarta Beanバリデーション3.0仕様」</a>で説明されている変更</span></p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.eDNdT.1" title="原文 : Please, read each specification carefully for incompatible changes!">互換性のない変更については、各仕様を注意深くお読みください。</span></p>
</div>

</div>


<h3 id="_significant_changes"><span class="merged" id="all.1WsQvq" title="原文 : Significant changes">重要な変更</span></h3>
<div class="section">

<h4 id="_jandex"><span class="merged" id="all.1vMPki" title="原文 : Jandex">Jandex</span></h4>
<div class="section">
<p><span class="merged" id="all.1Jrz8c" title="原文 : Jandex group id was org.jboss.jandex and now is io.smallrye.">JandexグループIDは<code>org.jboss.jandex</code>で、現在は<code>io.smallrye</code>です。</span></p>

</div>


<h4 id="_testing"><span class="merged" id="all.icyjq"  title="原文:: Testing">テスト</span></h4>
<div class="section">
<p><span class="merged" id="all.3Iz12n.spl1" title="原文 : Testing is now in a new package.">テストは新しいパッケージに含まれています。</span> <span class="merged" id="all.3Iz12n.spl2" title="原文 : It was:">次のようになりました:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.tests&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-tests-junit5&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.YDU3o" title="原文 : Now is:">現在:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.testing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-testing-junit5&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3kDfeb" title="原文 : And the Java package has changed from io.helidon.microprofile.tests.junit5 to io.helidon.microprofile.testing.junit5">また、Javaパッケージが<code>io.helidon.microprofile.tests.junit5</code>から<code>io.helidon.microprofile.testing.junit5</code>に変更されました</span></p>

</div>

</div>


<h3 id="_logging"><span class="merged" id="all.5r4dy.1"  title="原文:: Logging">ロギング</span></h3>
<div class="section">
<p><span class="merged" id="all.2gLHhb" title="原文 : The Helidon console handler has changed from io.helidon.common.HelidonConsoleHandler to io.helidon.logging.jul.HelidonConsoleHandler.">Helidonコンソール・ハンドラが<code>io.helidon.common.HelidonConsoleHandler</code>から<code>io.helidon.logging.jul.HelidonConsoleHandler</code>に変更されました。</span></p>

<p><span class="merged" id="all.MlpF5" title="原文 : If you use this handler in your logging.properties you will need to update it and add the following dependency:">このハンドラを<code>logging.properties</code>で使用する場合は、このハンドラを更新し、次の依存関係を追加する必要があります:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.logging&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-logging-jul&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_conclusion"><span class="merged" id="all.1V7peH"  title="原文:: Conclusion">まとめ</span></h2>
<div class="section">
<p><span class="merged" id="all.NGjG6" title="原文 : Please proceed to Helidon MP Introduction to find more information and documentation about each module.">各モジュールの詳細およびドキュメントについては、<router-link to="/mp/introduction">「Helidon MPの概要」</router-link>に進んでください。</span></p>

</div>

</doc-view>
