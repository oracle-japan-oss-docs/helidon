<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4LJMHk.19"  title="原文:: Introduction">導入</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3wfRGv" title="原文 : Helidon SE is Helidon’s foundational set of APIs and, as of Helidon 4, it uses virtual threads to enable these APIs to change from asynchronous to blocking.">Helidon SEはHelidonのAPIの基本セットであり、Helidon 4の時点で仮想スレッドを使用して、これらのAPIを非同期からブロックに変更できるようにします。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_components"><span class="merged" id="all.2wtiBh"  title="原文:: Components">コンポーネント</span></h2>
<div class="section">
<p><span class="merged" id="all.32abl5.spl1" title="原文 : The REST framework for Helidon SE is the Helidon WebServer.">Helidon SE用のRESTフレームワークは、Helidon WebServerです。</span> <span class="merged" id="all.32abl5.spl2" title="原文 : It was built from the ground up to take full advantage of Java 21’s virtual threads.">これは、Java 21の仮想スレッドを最大限に活用するためにゼロから構築されました。</span> </p>

<p><span class="merged" id="all.2gnzjf" title="原文 : Helidon SE supports a number of additional Helidon features:">Helidon SEでは、次の追加のHelidon機能がサポートされています:</span></p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/config/introduction"><div class="card__link-hover"/>
<span class="merged" id="all.3aCz7D" title="原文 :  settings "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">settings</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Config</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.102tBg" title="原文 : A flexible configuration framework with support for multiple sources and formats.">複数のソースおよび形式をサポートする柔軟な構成フレームワーク。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/cors"><div class="card__link-hover"/>
<span class="merged" id="all.2hzUpA" title="原文 :  share "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">share</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">CORS</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1O8UA0" title="原文 : Add support for CORS to your application using a Helidon module.">Helidonモジュールを使用してCORSのサポートをアプリケーションに追加します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/dbclient"><div class="card__link-hover"/>
<span class="merged" id="all.3GkRry" title="原文 :  storage "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">storage</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">DBクライアント</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.mJBRk" title="原文 : Provides a unified, reactive API for working with databases in non-blocking way.">非ブロック方法でデータベースを操作するための統合されたリアクティブAPIを提供します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/graphql"><div class="card__link-hover"/>
<span class="merged" id="all.2AdbHU" title="原文 :  graphic_eq "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">graphic_eq</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">GraphQL</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2DGuvG" title="原文 : Build GraphQL servers.">GraphQLサーバーをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/grpc/server"><div class="card__link-hover"/>
<span class="merged" id="all.Z300G" title="原文 :  swap_horiz "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">swap_horiz</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">gRPC</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4REV8q" title="原文 : Build gRPC servers and clients.">gRPCサーバーおよびクライアントをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/health"><div class="card__link-hover"/>
<span class="merged" id="all.4HTgDb" title="原文 :  favorite_outline "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">favorite_outline</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">ヘルス・チェック</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1pq1ME" title="原文 : Expose health statuses of your applications.">アプリケーションのヘルス・ステータスを公開します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/metrics/metrics"><div class="card__link-hover"/>
<span class="merged" id="all.4CJFDH" title="原文 :  av_timer "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">av_timer</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">メトリクス</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3VflD9" title="原文 : Instrumentation to expose metrics of your applications.">アプリケーションのメトリクスを公開するインスツルメンテーション。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/openapi/openapi"><div class="card__link-hover"/>
<span class="merged" id="all.4b3Cei" title="原文 :  donut_large "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">donut_large</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">OpenAPI</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4br54m" title="原文 : Support OpenAPI from your application.">アプリケーションからOpenAPIをサポートします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/reactive-messaging"><div class="card__link-hover"/>
<span class="merged" id="all.3lgH4p" title="原文 :  message "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">message</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">リアクティブ・メッセージング</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.26JGa3" title="原文 : Use prepared tools for repetitive use case scenarios.">反復的なユースケース・シナリオには、準備済のツールを使用します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/reactivestreams/engine"><div class="card__link-hover"/>
<span class="merged" id="all.2r1xi0" title="原文 :  waves "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">waves</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">リアクティブ・ストリーム</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.AsqxO" title="原文 : APIs to work with reactive streams in Helidon.">Helidonでリアクティブ・ストリームを操作するためのAPI。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/security/introduction"><div class="card__link-hover"/>
<span class="merged" id="all.2RILds" title="原文 :  security "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">security</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">セキュリティ</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3NrNI4" title="原文 : A tool-chain to handle authentication, authorization and context propagation.">認証、認可およびコンテキスト伝播を処理するツール・チェーン。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/tracing"><div class="card__link-hover"/>
<span class="merged" id="all.2VguBr" title="原文 :  timeline "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">timeline</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">トレース</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1x8qOl" title="原文 : Profile and monitor your applications across multiple services.">複数のサービスにわたってアプリケーションをプロファイルおよび監視します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/webclient"><div class="card__link-hover"/>
<span class="merged" id="all.s7wrx" title="原文 :  http "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">http</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">WebClient</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4GkGr4" title="原文 : HTTP client that handles responses to the HTTP requests.">HTTPリクエストへのレスポンスを処理するHTTPクライアント。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/webserver"><div class="card__link-hover"/>
<span class="merged" id="all.4fDtDC" title="原文 :  settings_ethernet "></router-link> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">settings_ethernet</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">WebServer</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3Bgwn9" title="原文 : A programmatic HTTP API that uses virtual threads to handle nearly unlimited concurrent requests without blocking a platform thread or starving other requests.">仮想スレッドを使用して、プラットフォーム・スレッドをブロックしたり、他のリクエストを飢えさせたりすることなく、ほぼ無制限の同時リクエストを処理するプログラムHTTP API。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/websocket"><div class="card__link-hover"/>
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


<h2 id="_upgrade"><span class="merged" id="all.2DDlJ8.2"  title="原文:: Upgrade">アップグレード</span></h2>
<div class="section">
<p><span class="merged" id="all.17YMGT" title="原文 : In case you need to upgrade the version of Helidon, follow the upgrade guides:">Helidonのバージョンをアップグレードする必要がある場合は、アップグレード・ガイドに従います:</span></p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/guides/upgrade_4x"><div class="card__link-hover"/>
<span class="merged" id="all.13v6lI" title="原文 :  upgrade "></router-link> <v-layout align-center justify-center class="">「<v-avatar size="150px"><v-icon class="xxx-large">アップグレード</v-icon></v-avatar>」</v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">Helidon SE 4xアップグレード・ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4Ho2fy" title="原文 : Follow this guide to migrate your application from Helidon 3.x to 4.x.">このガイドに従って、アプリケーションをHelidon 3.xから4.xに移行します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/guides/upgrade_3x"><div class="card__link-hover"/>
<span class="merged" id="all.13v6lI.1" title="原文 :  upgrade "></router-link> <v-layout align-center justify-center class="">「<v-avatar size="150px"><v-icon class="xxx-large">アップグレード</v-icon></v-avatar>」</v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">Helidon SE 3xアップグレード・ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3KwIjD" title="原文 : Follow this guide to migrate your application from Helidon 2.x to 3.x.">このガイドに従って、アプリケーションをHelidon 2.xから3.xに移行します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/guides/upgrade"><div class="card__link-hover"/>
<span class="merged" id="all.13v6lI.2" title="原文 :  upgrade "></router-link> <v-layout align-center justify-center class="">「<v-avatar size="150px"><v-icon class="xxx-large">アップグレード</v-icon></v-avatar>」</v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">Helidon SE 2.xアップグレード・ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2lZanf" title="原文 : Follow this guide to migrate your application from Helidon 1.x to 2.x.">このガイドに従って、アプリケーションをHelidon 1.xから2.xに移行します。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>

</div>


<h2 id="_next_steps"><span class="merged" id="all.iDczO.2"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.1RG84N" title="原文 : Try the Helidon SE quickstart guides to get your first Helidon SE application up and running in minutes.">Helidon SEクイックスタート・ガイドを試して、最初のHelidon SEアプリケーションを数分で起動して実行します。</span></p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/guides/overview"><div class="card__link-hover"/>
<span class="merged" id="all.1G78Lh" title="原文 :  explore "></router-link> <v-layout align-center justify-center class=""><v-avatar size="150px"><v-icon class="xxx-large">explore</v-icon></v-avatar></v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"><span style="text-align:center">ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1lwyrh" title="原文 : Follow step-by-step guides to build your applications using Helidon SE.">ステップ・バイ・ステップのガイドに従って、Helidon SEを使用してアプリケーションをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <a href="/apidocs/index.html?overview-summary.html" target="_blank"><div class="card__link-hover"/>
</a><span class="merged" id="all.3UsHFe" title="原文 :  library_books "> <v-layout align-center justify-center class=""> <v-avatar size="150px"> <v-icon class="xxx-large">library_books</v-icon> </v-avatar> </v-layout></span>
<div class="px-3">
<v-divider class="indigo lighten-4"/>
</div>
<v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Javadocs</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3Xoqos" title="原文 : Browse the Helidon Javadocs.">Helidon Javadocを参照します。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>

</div>

</doc-view>
