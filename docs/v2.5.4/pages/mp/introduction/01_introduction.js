<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2LAdSE" title="原文 : Helidon MP Introduction">Helidon MPの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.9w3Ab" title="原文 : Helidon MP is an Eclipse MicroProfile runtime that allows the Jakarta EE community to run microservices in a portable way.">Helidon MPは、Jakarta EEコミュニティが移植可能な方法でマイクロサービスを実行できるようにするEclipse MicroProfileランタイムです。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_about_helidon_mp_components"><span class="merged" id="all.zXLOk" title="原文 : About Helidon MP Components">Helidon MPコンポーネントについて</span></h2>
<div class="section">
<p><span class="merged" id="all.1Tolxw.spl1" title="原文 : Helidon MP 2.5.4 is an implementation of the MicroProfile specification and supports MicroProfile 3.3.">Helidon MP 2.5.4は<a href="https://microprofile.io" id="" target="_blank" >MicroProfile</a> <a href="https://github.com/eclipse/microprofile/releases" id="" target="_blank" >specification</a>の実装であり、MicroProfile 3.3をサポートします。</span> <span class="merged" id="all.1Tolxw.spl2" title="原文 : Since MicroProfile has its roots in Java EE, the MicroProfile APIs follow a familiar, declarative approach with heavy use of annotations.">MicroProfileのルートはJava EEにあるため、MicroProfile APIは使い慣れた宣言的アプローチに従い、注釈を頻繁に使用します。</span> <span class="merged" id="all.1Tolxw.spl3" title="原文 : This makes it a good choice for Java EE developers.">これにより、Java EE開発者に適した選択肢になります。</span> </p>

<p><span class="merged" id="all.1HcFCH" title="原文 : Helidon has added additional APIs to the core set of Microprofile APIs giving you all the capabilities you need for writing modern cloud native applications.">Helidonでは、Microprofile APIのコア・セットに追加のAPIが追加され、最新のクラウド・ネイティブ・アプリケーションの作成に必要なすべての機能が提供されています。</span></p>

</div>

<h2 id="_components"><span class="merged" id="all.2wtiBh.1"  title="原文:: Components">コンポーネント</span></h2>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/aot/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.1T8wrI" title="原文 :  save "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">save</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">Ahead-of-Timeコンパイル(AOT)</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.sN4KW" title="原文 : Use GraalVM native image to compile Helidon applications into a native executable.">GraalVMネイティブ・イメージを使用して、Helidonアプリケーションをネイティブ実行可能ファイルにコンパイルします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/config/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.3aCz7D" title="原文 :  settings "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">settings</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Config</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.102tBg" title="原文 : A flexible configuration framework with support for multiple sources and formats.">複数のソースおよび形式をサポートする柔軟な構成フレームワーク。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/extensions/01_overview"><div class="card__link-hover"/>
<span class="merged" id="all.10J8g" title="原文 :  extension "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">extension</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">CDI拡張機能</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3JMMj0" title="原文 : In addition to MicroProfile support, Helidon MP provides additional CDI extensions to address areas not covered by MicroProfile.">Helidon MPでは、MicroProfileのサポートに加えて、MicroProfileでカバーされていないアドレス領域にCDI拡張機能が追加されています。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/cors/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.2hzUpA" title="原文 :  share "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">share</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">CORS</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1O8UA0" title="原文 : Add support for CORS to your application using a Helidon module.">Helidonモジュールを使用してCORSのサポートをアプリケーションに追加します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/faulttolerance/01_overview"><div class="card__link-hover"/>
<span class="merged" id="all.3cz8YM" title="原文 :  warning "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">warning</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">フォルト・トレランス</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2czUSF" title="原文 : Defines annotations that improve applications by providing support to handle error conditions (faults).">エラー状態(フォルト)を処理するためのサポートを提供することで、アプリケーションを改善する注釈を定義します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/graphql/01_mp_graphql"><div class="card__link-hover"/>
<span class="merged" id="all.2AdbHU" title="原文 :  graphic_eq "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">graphic_eq</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">GraphQL</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.JjX3A" title="原文 : Expose GraphQL API using Microprofile GraphQL.">Microprofile GraphQLを使用してGraphQL APIを公開します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/grpc/01_mp_server_side_services"><div class="card__link-hover"/>
<span class="merged" id="all.Z300G" title="原文 :  swap_horiz "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">swap_horiz</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">gRPC</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4REV8q" title="原文 : Build gRPC servers and clients.">gRPCサーバーおよびクライアントをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/health/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.4HTgDb" title="原文 :  favorite_outline "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">favorite_outline</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">ヘルス・チェック</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1pq1ME" title="原文 : Expose health statuses of your applications.">アプリケーションのヘルス・ステータスを公開します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/jaxrs/02_server-configuration"><div class="card__link-hover"/>
<span class="merged" id="all.4fDtDC" title="原文 :  settings_ethernet "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">settings_ethernet</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">JAX-RS/Jersey</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2VrDzb" title="原文 : Helidon MP supports building RESTful services using JAX-RS/Jersey.">Helidon MPでは、JAX-RS/Jerseyを使用したRESTfulサービスのビルドをサポートしています。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/jpa/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.1k3blK" title="原文 :  dns "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">dns</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">JPA</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4MwdS7" title="原文 : Work with JPA in Helidon MP in all the ways that you&rsquo;re familiar with.">使い慣れたすべての方法で、Helidon MPでJPAを操作します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/jwtauth/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.Ter77" title="原文 :  verified_user "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">verified_user</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">JWT認証</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3Gkkoc" title="原文 : Defines a compact and self-contained way for securely transmitting information between parties as a JSON object.">パーティ間でJSONオブジェクトとして情報を安全に送信するための、コンパクトで自己完結型の方法を定義します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/lra/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.Rj7Ys" title="原文 :  pending_actions "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">pending_actions</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">Long Running Actions</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.fJbPF" title="原文 : Distributed transactions for microservices following SAGA pattern.">SAGAパターンに続くマイクロサービスの分散トランザクション。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/metrics/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.4CJFDH" title="原文 :  av_timer "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">av_timer</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">メトリクス</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3VflD9" title="原文 : Instrumentation to expose metrics of your applications.">アプリケーションのメトリクスを公開するインスツルメンテーション。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/openapi/01_openapi"><div class="card__link-hover"/>
<span class="merged" id="all.4b3Cei" title="原文 :  donut_large "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">donut_large</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">OpenAPI</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4br54m" title="原文 : Support OpenAPI from your application.">アプリケーションからOpenAPIをサポートします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/reactivemessaging/01_introduction"><div class="card__link-hover"/>
<span class="merged" id="all.3lgH4p" title="原文 :  message "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">message</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">リアクティブ・メッセージング</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.26JGa3" title="原文 : Use prepared tools for repetitive use case scenarios.">反復的なユースケース・シナリオには、準備済のツールを使用します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/reactivestreams/01_overview"><div class="card__link-hover"/>
<span class="merged" id="all.2r1xi0" title="原文 :  waves "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">waves</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">リアクティブ・ストリーム</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.AsqxO" title="原文 : APIs to work with reactive streams in Helidon.">Helidonでリアクティブ・ストリームを操作するためのAPI。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/restclient/09_rest-client"><div class="card__link-hover"/>
<span class="merged" id="all.KDcU2" title="原文 :  airplay "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">airplay</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">Restクライアント</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2zSeua" title="原文 : Adds the capability to invoke remote microservices using a JAX-RS like interface to declare the operations.">JAX-RSに似たインタフェースを使用してリモート・マイクロサービスを呼び出し、操作を宣言する機能を追加します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/security/01_security"><div class="card__link-hover"/>
<span class="merged" id="all.2RILds" title="原文 :  security "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">security</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">セキュリティ</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3NrNI4" title="原文 : A tool-chain to handle authentication, authorization and context propagation.">認証、認可およびコンテキスト伝播を処理するツール・チェーン。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/tracing/01_tracing"><div class="card__link-hover"/>
<span class="merged" id="all.2VguBr" title="原文 :  timeline "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">timeline</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">トレース</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1x8qOl" title="原文 : Profile and monitor your applications across multiple services.">複数のサービスにわたってアプリケーションをプロファイルおよび監視します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/websocket/01_overview"><div class="card__link-hover"/>
<span class="merged" id="all.B2nYT" title="原文 :  sync_alt "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">sync_alt</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">WebSocket</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4C7Xnn" title="原文 : Enables Java applications to participate in WebSocket interactions as both servers and clients.">Javaアプリケーションが、サーバーとクライアントの両方としてWebSocketインタラクションに参加できるようにします。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.4"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.2PCBR4" title="原文 : Try the Helidon MP quickstart guides to get your first Helidon MP application up and running in minutes.">Helidon MPクイックスタート・ガイドを試して、最初のHelidon MPアプリケーションを数分で起動して実行します。</span></p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/mp/guides/01_overview"><div class="card__link-hover"/>
<span class="merged" id="all.1G78Lh.2" title="原文 :  explore "></router-link> <v-layout align-center justify-center class=""><v-avatar size="150px"><v-icon class="xxx-large">explore</v-icon></v-avatar></v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1CmBot" title="原文 : Follow step-by-step guides to build your applications using Helidon MP.">ステップ・バイ・ステップのガイドに従って、Helidon MPを使用してアプリケーションをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <a href="apidocs/index.html?overview-summary.html" id="" target="_blank" ><div class="card__link-hover"/>
</a><span class="merged" id="all.3UsHFe.1" title="原文 :  library_books "> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">library_books</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Javadocs</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3Xoqos.1" title="原文 : Browse the Helidon Javadocs.">Helidon Javadocを参照します。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>
</doc-view>
