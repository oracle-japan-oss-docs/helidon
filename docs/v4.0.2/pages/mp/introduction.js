<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.10"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.2Wig9S.spl1" title="原文 : Helidon MP is an Eclipse MicroProfile 6.0 runtime that allows the Jakarta EE community to run microservices in a portable way.">Helidon MPは、Jakarta EEコミュニティが移植可能な方法でマイクロサービスを実行できるEclipse MicroProfile 6.0ランタイムです。</span> <span class="merged" id="all.2Wig9S.spl2" title="原文 : It is designed for ease of use and provides Spring Boot like development experience with heavy usage of dependency injection and annotations.">使いやすく設計されており、依存関係のインジェクションおよび注釈を大量に使用して、Spring Bootのような開発エクスペリエンスを提供します。</span> </p>

<p><span class="merged" id="all.3ZFtbp.spl1" title="原文 : Even though Helidon MP supports Jakarta EE APIs it does not require an application server.">Helidon MPはJakarta EE APIをサポートしていますが、アプリケーション・サーバーは必要ありません。</span> <span class="merged" id="all.3ZFtbp.spl2" title="原文 : Helidon MP applications are stand-alone Java applications running in their own JVM powered by Helidon WebServer.">Helidon MPアプリケーションは、Helidon WebServerを搭載した独自のJVMで実行されるスタンドアロンのJavaアプリケーションです。</span> <span class="merged" id="all.3ZFtbp.spl3" title="原文 : So you get all the benefits of a low overhead server built on Java virtual threads.">そのため、Java仮想スレッド上に構築された低オーバーヘッド・サーバーのメリットをすべて享受できます。</span> </p>

</div>


<h2 id="_supported_jakarta_ee_specifications"><span class="merged" id="all.2ptdhT" title="原文 : Supported Jakarta EE Specifications">サポートされているJakarta EE仕様</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3Sshw7"  title="原文:: Specification">仕様</span></th>
<th><span class="merged" id="all.23sokp"  title="原文:: Version">バージョン</span></th>
<th><span class="merged" id="all.4JM9z7.8"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.21RFer" title="原文 : Jakarta Bean Validation"><router-link to="/mp/beanvalidation">Jakarta Beanバリデーション</router-link></span></td>
<td class=""><span class="merged" id="all.1TcGO1" title="原文 : 3.0"><a href="https://jakarta.ee/specifications/bean-validation/3.0/bean-validation_3.0.html" target="_blank">3.0</a></span></td>
<td class=""><span class="merged" id="all.2XNgay" title="原文 : Object level constraint declaration and validation facility">オブジェクト・レベル制約の宣言およびバリデーション機能</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1vq5Xp" title="原文 : Jakarta Context and Dependency Injection (CDI)">Jakartaコンテキストおよび依存関係インジェクション(CDI)</span></td>
<td class=""><span class="merged" id="all.2drhkK" title="原文 : 4.0.1"><a href="https://jakarta.ee/specifications/cdi/4.0.1/jakarta-cdi-spec-4.0.1.html" target="_blank">4.0.1</a></span></td>
<td class=""><span class="merged" id="all.2dkWMV" title="原文 : Declarative dependency injection and supporting services">宣言的な依存関係のインジェクションおよびサポート・サービス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.646C4" title="原文 : Jakarta JSON Processing (JSON-P)">Jakarta JSON処理(JSON-P)</span></td>
<td class=""><span class="merged" id="all.27TZYK" title="原文 : 2.1.1"><a href="https://jakarta.ee/specifications/jsonp/2.1.1/apidocs" target="_blank">2.1.1</a></span></td>
<td class=""><span class="merged" id="all.4eHJXS" title="原文 : API to parse, generate, transform, and query JSON docs">JSONドキュメントを解析、生成、変換および問合せするためのAPI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UaSB3" title="原文 : Jakarta JSON Binding (JSON-B)">Jakarta JSON Binding (JSON-B)</span></td>
<td class=""><span class="merged" id="all.3QLhVw" title="原文 : 3.0"><a href="https://jakarta.ee/specifications/jsonb/3.0/jakarta-jsonb-spec-3.0.html" target="_blank">3.0</a></span></td>
<td class=""><span class="merged" id="all.1UUGY9" title="原文 : Binding framework for converting POJOs to/from JSON docs">POJOをJSONドキュメントに変換するためのバインディング・フレームワーク</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1o04vu" title="原文 : Jakarta RESTful Web Services (JAX-RS)"><router-link to="/mp/server">Jakarta RESTful Webサービス(JAX-RS)</router-link></span></td>
<td class=""><span class="merged" id="all.16moYN" title="原文 : 3.1.0"><a href="https://jakarta.ee/specifications/restful-ws/3.1.0/jakarta-restful-ws-spec-3.1.0.html" target="_blank">3.1.0</a></span></td>
<td class=""><span class="merged" id="all.36aibi" title="原文 : API to develop web services following the REST pattern">RESTパターンに従ってwebサービスを開発するためのAPI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49mUDq" title="原文 : Jakarta Persistence (JPA)"><router-link :to="{path: '/mp/persistence', hash: '#JPA'}">Jakarta永続性(JPA)</router-link></span></td>
<td class=""><span class="merged" id="all.lUHIG" title="原文 : 3.1.0"><a href="https://jakarta.ee/specifications/persistence/3.1.0/jakarta-persistence-spec-3.1.0.html" target="_blank">3.1.0</a></span></td>
<td class=""><span class="merged" id="all.4NgLZG" title="原文 : Management of persistence and object/relational mapping">永続性およびオブジェクト/リレーショナル・マッピングの管理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.mHkGh" title="原文 : Jakarta Transactions (JTA)"><router-link :to="{path: '/mp/persistence', hash: '#JTA'}">Jakartaトランザクション(JTA)</router-link></span></td>
<td class=""><span class="merged" id="all.4cYRYD" title="原文 : 2.0"><a href="https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html" target="_blank">2.0</a></span></td>
<td class=""><span class="merged" id="all.1W0Oji" title="原文 : Allows handling transactions consistent with X/Open XA-spec">X/Open XA-specと一致するトランザクションの処理を許可</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4eTUlO" title="原文 : Jakarta WebSocket"><router-link to="/mp/websocket">Jakarta WebSocket</router-link></span></td>
<td class=""><span class="merged" id="all.EGUWG" title="原文 : 2.1.0"><a href="https://jakarta.ee/specifications/websocket/2.1.0/websocket-spec-2.1.0.html" target="_blank">2.1.0</a></span></td>
<td class=""><span class="merged" id="all.ihlX4" title="原文 : API for Server and Client Endpoints for WebSocket protocol">WebSocketプロトコルのサーバーおよびクライアント・エンドポイントのAPI</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_supported_microprofile_specifications"><span class="merged" id="all.2ExJGJ" title="原文 : Supported MicroProfile Specifications">サポートされるMicroProfile仕様</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3Sshw7.1"  title="原文:: Specification">仕様</span></th>
<th><span class="merged" id="all.23sokp.1"  title="原文:: Version">バージョン</span></th>
<th><span class="merged" id="all.4JM9z7.9"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2PuI30" title="原文 : MicroProfile Config"><router-link to="/mp/config/introduction">MicroProfile構成</router-link></span></td>
<td class=""><span class="merged" id="all.3Zz5kB" title="原文 : 3.0.3"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.3/microprofile-config-spec-3.0.3.html" target="_blank">3.0.3</a></span></td>
<td class=""><span class="merged" id="all.36gtGs" title="原文 : A flexible configuration framework with support for multiple sources and formats">複数のソースおよび形式をサポートする柔軟な構成フレームワーク</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Kuk5D" title="原文 : MicroProfile Fault Tolerance"><router-link to="/mp/fault-tolerance">MicroProfileフォルト・トレランス</router-link></span></td>
<td class=""><span class="merged" id="all.2ybZno" title="原文 : 4.0.2"><a href="https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0.2/microprofile-fault-tolerance-spec-4.0.2.html" target="_blank">4.0.2</a></span></td>
<td class=""><span class="merged" id="all.Y0PtJ" title="原文 : Common strategies for various system problems such as time-outs, retries, Circuit Breaker, etc.">タイムアウト、リトライ、サーキットブレーカなど、さまざまなシステム問題に共通する戦略。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ELZXw" title="原文 : MicroProfile GraphQL"><router-link to="/mp/graphql">MicroProfile GraphQL</router-link></span></td>
<td class=""><span class="merged" id="all.1PRlfL" title="原文 : 2.0"><a href="https://download.eclipse.org/microprofile/microprofile-graphql-2.0/microprofile-graphql-spec-2.0.html" target="_blank">2.0</a></span></td>
<td class=""><span class="merged" id="all.2UnG0R" title="原文 : API for working with GraphQL">GraphQLを操作するためのAPI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Di7Do" title="原文 : MicroProfile Health"><router-link to="/mp/health">MicroProfile Health</router-link></span></td>
<td class=""><span class="merged" id="all.2Sd3Nx" title="原文 : 4.0"><a href="https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html" target="_blank">4.0</a></span></td>
<td class=""><span class="merged" id="all.3kc5ts" title="原文 : Health checks for automatic service restart/shutdown">サービスの自動再起動/停止のヘルス・チェック</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hVcAn" title="原文 : MicroProfile JWT Auth"><router-link to="/mp/jwt">MicroProfile JWT認証</router-link></span></td>
<td class=""><span class="merged" id="all.2ZRete" title="原文 : 2.1"><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.1/microprofile-jwt-auth-spec-2.1.html" target="_blank">2.1</a></span></td>
<td class=""><span class="merged" id="all.b49M9" title="原文 : Defines a compact and self-contained way for securely transmitting information between parties as a JSON object">パーティ間で情報をJSONオブジェクトとして安全に転送するための、コンパクトで自己完結する方法を定義</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1lVOsh" title="原文 : MicroProfile Long-Running Actions (LRA)"><router-link to="/mp/lra">MicroProfile Long Running Actions (LRA)</router-link></span></td>
<td class=""><span class="merged" id="all.1Z3Iaz" title="原文 : 2.0"><a href="https://download.eclipse.org/microprofile/microprofile-lra-2.0/microprofile-lra-spec-2.0.html" target="_blank">2.0</a></span></td>
<td class=""><span class="merged" id="all.3xajff" title="原文 : Distributed transactions for microservices following SAGA pattern">SAGAパターンに続くマイクロサービスの分散トランザクション</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZMnEl" title="原文 : MicroProfile Metrics"><router-link to="/mp/metrics/metrics">MicroProfileメトリクス</router-link></span></td>
<td class=""><span class="merged" id="all.1k0wA8" title="原文 : 5.0.1"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-5.0.1/microprofile-metrics-spec-5.0.1.html" target="_blank">5.0.1</a></span></td>
<td class=""><span class="merged" id="all.1PBQui" title="原文 : Defining and exposing telemetry data in Prometheus and JSON formats">PrometheusおよびJSON形式のテレメトリ・データの定義および公開</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.g15K6" title="原文 : MicroProfile Open API"><router-link to="/mp/openapi/openapi">MicroProfileオープンAPI</router-link></span></td>
<td class=""><span class="merged" id="all.2fzgze" title="原文 : 3.1"><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.1/microprofile-openapi-spec-3.1.html" target="_blank">3.1</a></span></td>
<td class=""><span class="merged" id="all.2vhPKv" title="原文 : Annotations for documenting your application endpoints">アプリケーション・エンドポイントをドキュメント化するための注釈</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HsYUN" title="原文 : MicroProfile OpenTracing"><router-link to="/mp/tracing">MicroProfile OpenTracing</router-link></span></td>
<td class=""><span class="merged" id="all.46nYsE" title="原文 : 3.0"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/microprofile-opentracing-spec-3.0.html" target="_blank">3.0</a></span></td>
<td class=""><span class="merged" id="all.GbhZR" title="原文 : Profile and monitor your applications across multiple services">複数のサービスにわたるアプリケーションのプロファイリングと監視</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37Qs3W" title="原文 : MicroProfile Reactive Messaging"><router-link to="/mp/reactivemessaging/introduction">MicroProfileリアクティブ・メッセージング</router-link></span></td>
<td class=""><span class="merged" id="all.3v0BMd" title="原文 : 3.0"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0/microprofile-reactive-messaging-spec-3.0.html" target="_blank">3.0</a></span></td>
<td class=""><span class="merged" id="all.1X9mPL" title="原文 : Standard API for sending and receiving messages/events using streams">ストリームを使用したメッセージ/イベントの送受信用Standard API</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1gG3ol" title="原文 : MicroProfile Reactive Streams Operators"><router-link to="/mp/reactivestreams/rsoperators">MicroProfileリアクティブ・ストリーム・オペレータ</router-link></span></td>
<td class=""><span class="merged" id="all.424efp" title="原文 : 3.1.1"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-streams-operators-3.1.1/microprofile-reactive-streams-operators-spec-3.1.1.html" target="_blank">3.1.1</a></span></td>
<td class=""><span class="merged" id="all.eFetC" title="原文 : Control flow and error processing for event streams">イベント・ストリームのフローおよびエラー処理を制御</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3j4Q85" title="原文 : MicroProfile REST Client"><router-link to="/mp/restclient">MicroProfile RESTクライアント</router-link></span></td>
<td class=""><span class="merged" id="all.27SdFr" title="原文 : 3.0"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html" target="_blank">3.0</a></span></td>
<td class=""><span class="merged" id="all.29adoN" title="原文 : Type-safe API for RESTful Web Services">RESTful Webサービスのタイプ・セーフAPI</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_other_components"><span class="merged" id="all.1lAIbn"  title="原文:: Other Components">その他のコンポーネント</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3iYRkK"  title="原文:: Component">コンポーネント</span></th>
<th><span class="merged" id="all.4JM9z7.10"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1RNSFu" title="原文 : CORS"><router-link to="/mp/cors/cors">CORS</router-link></span></td>
<td class=""><span class="merged" id="all.Ewd65" title="原文 : Cross Origin Resource Sharing - API to control if and how REST resources served by their applications can be shared across origins">クロス・オリジン・リソース共有 - アプリケーションが提供するRESTリソースをオリジン間で共有できるかどうか、またどのように共有できるかを制御するAPI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3oJmNA" title="原文 : gRPC"><router-link to="/mp/grpc/server">gRPC</router-link></span></td>
<td class=""><span class="merged" id="all.1lkBJc" title="原文 : gRPC server and client">gRPCサーバーおよびクライアント</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.62b28" title="原文 : OCI SDK"><router-link to="/mp/integrations/oci">OCI SDK</router-link></span></td>
<td class=""><span class="merged" id="all.q6u6W" title="原文 : Full set of APIs for working with OCI services">OCIサービスを操作するためのAPIのフル・セット</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ayawB" title="原文 : Scheduling"><router-link to="/mp/scheduling">Scheduling</router-link></span></td>
<td class=""><span class="merged" id="all.1Pdb5C" title="原文 : Scheduling functionality based on Cron-utils"><a href="https://github.com/jmrozanec/cron-utils" target="_blank">Cron-utils</a>に基づくスケジューリング機能</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1LCF6M" title="原文 : Security"><router-link to="/mp/security/security">Security</router-link></span></td>
<td class=""><span class="merged" id="all.1u0YM3" title="原文 : A tool-chain to handle authentication, authorization and context propagation">認証、認可およびコンテキストの伝播を処理するツール・チェーン</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_upgrade"><span class="merged" id="all.2DDlJ8.1"  title="原文:: Upgrade">アップグレード</span></h2>
<div class="section">
<p><span class="merged" id="all.l5eYx" title="原文 : In case you need to upgrade the version of Helidon, follow the Upgrade Guides.">Helidonのバージョンをアップグレードする必要がある場合は、<code>Upgrade Guides</code>に従います。</span></p>

<p><span class="merged" id="all.1qNxKp" title="原文 : For upgrade from Helidon 1.x to 2.x:">Helidon 1.xから2.xへのアップグレードの場合:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2xQYuJ.1" title="原文 : Helidon MP 2x Upgrade Guide"><router-link to="/mp/guides/upgrade">Helidon MP 2xアップグレード・ガイド</router-link></span></p>

</li>
</ul>

<p><span class="merged" id="all.1HL2vT" title="原文 : For upgrade from Helidon 2.x to 3.x:">Helidon 2.xから3.xへのアップグレードの場合:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1nOu6O.1" title="原文 : Helidon MP 3x Upgrade Guide"><router-link to="/mp/guides/upgrade_3x">Helidon MP 3xアップグレード・ガイド</router-link></span></p>

</li>
</ul>

<p><span class="merged" id="all.TCsWw" title="原文 : For upgrade from Helidon 3.x to 4.x:">Helidon 3.xから4.xへのアップグレードの場合:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.CluVO.1" title="原文 : Helidon MP 4x Upgrade Guide"><router-link to="/mp/guides/upgrade_4x">Helidon MP 4xアップグレード・ガイド</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_next_steps"><span class="merged" id="all.iDczO.1"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3Tcy7F" title="原文 : Try the Helidon MP quickstart guides to get your first Helidon MP application up and running in minutes."><router-link to="/mp/guides/overview">「Helidon MPクイックスタート・ガイド」</router-link>を試行して、最初のHelidon MPアプリケーションを数分で稼働させます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1GpN32" title="原文 : Browse the Helidon Javadocs"><a href="/apidocs/index.html?overview-summary.html" target="_blank">Helidon Javadocs</a>の参照</span></p>

</li>
</ul>

</div>

</doc-view>
