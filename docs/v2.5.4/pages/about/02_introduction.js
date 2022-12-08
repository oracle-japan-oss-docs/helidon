<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Z8xVH" title="原文 : About Helidon">Helidonについて</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4FNhmt.spl1" title="原文 : Helidon is a collection of Java libraries for writing microservices that run on a fast web core powered by Netty.">Helidonは、Nettyを活用した高速webコア上で実行されるマイクロサービスを記述するためのJavaライブラリのコレクションです。</span> <span class="merged" id="all.4FNhmt.spl2" title="原文 : Its available in two frameworks: Helidon SE and Helidon MP.">2つのフレームワークで使用可能です: Helidon SEおよびHelidon MP。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_a_collection_of_java_libraries"><span class="merged" id="all.4ZGTxF" title="原文 : A Collection of Java Libraries">Javaライブラリのコレクション</span></h2>
<div class="section">
<p><span class="merged" id="all.20gT17.spl1"  title="原文: Helidon provides an open source, lightweight, fast, reactive, cloud native framework for developing Java microservices.">Helidonは、Javaマイクロサービスを開発するためのオープン・ソース、軽量、高速、リアクティブ、クラウド・ネイティブ・フレームワークを提供します。</span> <span class="merged" id="all.20gT17.spl2" title="原文 : Helidon implements and supports MicroProfile, a baseline platform definition that leverages Java EE and Jakarta EE technologies for microservices and delivers application portability across multiple runtimes.">Helidonは、マイクロサービスのためにJava EEおよびJakarta EEテクノロジを利用し、複数のランタイムにわたるアプリケーションの移植性を提供するベースライン・プラットフォーム定義であるMicroProfileを実装およびサポートしています。</span> </p>

</div>

<h2 id="_using_cloud_native_tools_with_helidon"><span class="merged" id="all.152exk" title="原文 : Using Cloud-native Tools with Helidon">Helidonでのクラウド・ネイティブ・ツールの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3DEA31.spl1" title="原文 : Helidon libraries interoperate with popular tools from the cloud-native space, so there&rsquo;s no need for any specific tooling or deployment model.">Helidonライブラリは、クラウド・ネイティブ領域から一般的なツールと相互運用できるため、特定のツールやデプロイメント・モデルは必要ありません。</span> <span class="merged" id="all.3DEA31.spl2" title="原文 : Helidon can be used with:">Helidonは、次のものとともに使用できます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1qE19a"  title="原文:: Docker"><a href="https://www.docker.com/" id="" target="_blank" >Docker</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1QFw4W"  title="原文:: Kubernetes"><a href="https://kubernetes.io/" id="" target="_blank" >Kubernetes</a></span></p>

</li>
<li>
<p><span class="merged" id="all.Czd6H"  title="原文:: Prometheus"><a href="https://prometheus.io/" id="" target="_blank" >Prometheus</a></span></p>

</li>
<li>
<p><span class="merged" id="all.31ULg6" title="原文 : OpenTracing"><a href="https://opentracing.io/" id="" target="_blank" >OpenTracing</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3KiuQt" title="原文 : Etcd"><a href="https://coreos.com/etcd/" id="" target="_blank" >Etcd</a></span></p>

</li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1qHfRj" title="原文 : The Helidon Quickstart Examples contain support for Docker and Kubernetes."><router-link to="/about/03_prerequisites">「Helidonクイックスタートの例」</router-link>には、DockerおよびKubernetesのサポートが含まれます。</span></p>
</div>
</div>

<h2 id="_understanding_the_helidon_frameworks"><span class="merged" id="all.1ja97Q" title="原文 : Understanding the Helidon Frameworks">Helidonフレームワークの理解</span></h2>
<div class="section">
<p><span class="merged" id="all.2HbwoT" title="原文 : Helidon supports two programming models for writing microservices: Helidon SE and Helidon MP.">Helidonは、マイクロサービスを記述するための2つのプログラミング・モデルをサポートしています: <strong>Helidon SE</strong>および<strong>Helidon MP</strong>。</span></p>

<p><span class="merged" id="all.kbZ9W" title="原文 : SE is designed to be a microframework that supports the reactive programming model, while Helidon MP is an Eclipse MicroProfile runtime that allows the Jakarta EE community to run microservices in a portable way.">SEはリアクティブ・プログラミング・モデルをサポートするマイクロ・フレームワークとして設計されていますが、Helidon MPはJakarta EEコミュニティが移植可能な方法でマイクロサービスを実行できるようにするEclipse MicroProfileランタイムです。</span></p>

<p><span class="merged" id="all.3v8YFk" title="原文 : The table below shows to primary differences between Helidon SE and Helidon MP.">次の表に、Helidon SEとHelidon MPの主な違いを示します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1CNEMU" title="原文 : Helidon SE"><strong>Helidon SE</strong></span></th>
<th><span class="merged" id="all.2HO33T" title="原文 : Helidon MP"><strong>Helidon MP</strong></span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3E5DIV" title="原文 : Helidon SE gives you full transparency and puts you in control.">Helidon SEでは、完全な透過性が提供され、制御が可能です。</span></td>
<td class=""><span class="merged" id="all.3E96x4" title="原文 : Helidon MP is built on top of the Helidon libraries and provides platform definition that is familiar to enterprise Java developers.">Helidon MPは、Helidonライブラリ上に構築され、エンタープライズJava開発者になじみのあるプラットフォーム定義を提供します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.14DQzr" title="原文 : Microframework model with a very small footprint and limited functionality (~7 MB)">フットプリントが非常に小さく、機能が制限されたマイクロ・フレームワーク・モデル(~7 MB)</span></td>
<td class=""><span class="merged" id="all.3hCGC0" title="原文 : Eclipse MicroProfile implementation; slightly larger footprint than SE (~13 MB)"><a href="https://projects.eclipse.org/proposals/eclipse-microprofile" id="" target="_blank" >Eclipse MicroProfile</a>実装。SEよりもわずかに大きいフットプリント(~13 MB)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.7Lsi4" title="原文 : Functional style is reactive non-blocking">機能スタイルはリアクティブ非ブロッキングです</span></td>
<td class=""><span class="merged" id="all.4K6iFE" title="原文 : Declarative style with dependency injection">依存関係インジェクションを使用した宣言スタイル</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wH8Mk" title="原文 : Transparent &quot;no magic&quot; development experience; pure java application development with no annotations and no dependency injections">透過的な「マジックなし」開発体験、注釈なしの純粋なjavaアプリケーション開発、および依存関係インジェクションなし</span></td>
<td class=""><span class="merged" id="all.35qjYh" title="原文 : Jakarta EE microprofile development experience; all Jakarta components (CDI, JAX-RS, JSON-P/B)">Jakarta EEマイクロプロファイル開発エクスペリエンス。すべてのJakartaコンポーネント(CDI、JAX-RS、JSON-P/B)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39jK4B" title="原文 : Learn more about Helidon SE."><router-link to="/se/introduction/01_introduction">Helidon SE</router-link>についてさらに学習します。</span></td>
<td class=""><span class="merged" id="all.1qImOh" title="原文 : Learn more about Helidon MP."><router-link to="/mp/introduction/01_introduction">Helidon MP</router-link>についてさらに学習します。</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_whats_new_in_helidon_2_0"><span class="merged" id="all.2E7mXU" title="原文 : What&rsquo;s New in Helidon 2.0">Helidon 2.0の新機能</span></h2>
<div class="section">
<p><span class="merged" id="all.1h5Gt1" title="原文 : The Helidon 2.0 release contains significant new features, enhancements and fixes.">Helidon 2.0リリースには、重要な新機能、拡張機能および修正が含まれています。</span></p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.2rGpfS" title="原文 : For a complete list of fixes and enhancements, see the Helidon 2.0 changelog.">修正および拡張機能の完全なリストは、Helidon 2.0 <a href="https://github.com/oracle/helidon/blob/2.0.0/CHANGELOG.md" id="" target="_blank" >changelog</a>を参照してください。</span></p>
</div>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1VnQvR.spl1" title="原文 : GraalVM Native-image Support in Helidon MP Helidon SE already supports GraalVM, but in 2.0 GraalVM native image support will also be available in Helidon MP."><strong>「Helidon MPでのGraalVMネイティブ・イメージのサポート」</strong><br>Helidon SEではすでにGraalVMがサポートされていますが、2.0 GraalVMネイティブ・イメージのサポートはHelidon MPでも使用できます。</span> <span class="merged" id="all.1VnQvR.spl2" title="原文 : GraalVM Native Images Guide "><router-link to="/mp/guides/36_graalnative">「GraalVMネイティブ・イメージ・ガイド」</router-link><br></span> </p>

</li>
<li>
<p><span class="merged" id="all.217dBy.spl1" title="原文 : Helidon Command Line Tool One of the new features in Helidon 2.0 is the addition of a command line interface."><strong>「Helidonコマンドライン・ツール」</strong><br>Helidon 2.0の新機能の1つは、コマンドライン・インタフェースの追加です。</span> <span class="merged" id="all.217dBy.spl2" title="原文 : The Helidon CLI enables developers to get started with Helidon with minimal effort: you can create a new application, build it, run it, and more, by writing some simple commands.">Helidon CLIを使用すると、開発者は最小限の労力でHelidonを開始できます: いくつかの簡単なコマンドを記述することで、新しいアプリケーションを作成したり、ビルドしたり、実行したりできます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1jBW0m.spl1" title="原文 : DB Client for Helidon SE The new database client for Helidon SE will include support for the MongoDB reactive driver and brings Health Checks, Metrics, and Tracing support to every Helidon API."><strong>「Helidon SEのDBクライアント」</strong><br>Helidon SEの新しいデータベース・クライアントには、MongoDBリアクティブ・ドライバのサポートが含まれ、ヘルス・チェック、メトリクスおよびトレースのサポートがすべてのHelidon APIに提供されます。</span> <span class="merged" id="all.1jBW0m.spl2" title="原文 : Learn more about the DB Client."><router-link to="/se/dbclient/01_introduction">「DBクライアントについて学習します」</router-link>。</span> </p>

</li>
<li>
<p><span class="merged" id="all.lidfg.spl1" title="原文 : Extending MicroProfile Reactive Messaging and Reactive Operators Support MP Reactive Operators will be included in both frameworks, while MP Reactive Messaging will only be included in Helidon MP."><strong>「MicroProfileリアクティブ・メッセージングおよびリアクティブ・オペレータのサポートの拡張」</strong><br>MPリアクティブ・オペレータは両方のフレームワークに含まれますが、MPリアクティブ・メッセージングはHelidon MPにのみ含まれます。</span> <span class="merged" id="all.lidfg.spl2" title="原文 : Learn more about Reactive Messaging and Reactive Streams."><router-link to="/mp/reactivemessaging/01_introduction">「リアクティブ・メッセージング」</router-link>および<router-link to="/mp/reactivestreams/01_overview">「リアクティブ・ストリーム」</router-link>についてさらに学習します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1mOkAA.spl1" title="原文 : Helidon Web Client The new reactive web client can integrate with other Helidon SE APIs."><strong>「Helidon Webクライアント」</strong><br>新しいリアクティブwebクライアントは、他のHelidon SE APIと統合できます。</span> <span class="merged" id="all.1mOkAA.spl2" title="原文 : Learn more about the Helidon Web Client."><router-link to="/se/webclient/01_introduction">「Helidon Webクライアントについてさらに学習します」</router-link>。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1N7nls.spl1" title="原文 : Additional Websocket Support Based upon the Tyrus implementation, Helidon receives WebSocket API support."><strong>「追加のWebSocketサポート」</strong><br>Tyrusの実装に基づいて、HelidonはWebSocket APIサポートを受け取ります。</span> <span class="merged" id="all.1N7nls.spl2" title="原文 : Learn more about Websocket Support."><router-link to="/se/websocket/01_overview">「Websocketサポートについてさらに学習します」</router-link>。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4CG8jp.spl1" title="原文 : Support for Java 11 APIs Helidon will require Java 11 or newer."><strong>「Java 11 APIのサポート」</strong><br>Helidonには、Java 11以降が必要です。</span> <span class="merged" id="all.4CG8jp.spl2" title="原文 : Learn more about the prerequisites for Helidon 2.0."><router-link to="/about/03_prerequisites">「Helidon 2.0の前提条件のについてさらに学習します」</router-link>。</span> </p>

</li>
<li>
<p><span class="merged" id="all.37R8Ul.spl1" title="原文 : CORS support for MP and SE Although it is possible for any Helidon application to implement its own support for CORS, there are common tasks (such as processing preflight requests) that can be provided in a Helidon module."><strong>「MPおよびSEのCORSサポート」</strong><br>どのHelidonアプリケーションでもCORSに対する独自のサポートを実装できますが、Helidonモジュールで提供できる共通のタスク(フライト・リクエストの処理など)があります。</span> <span class="merged" id="all.37R8Ul.spl2" title="原文 : Learn more about CORS support."><router-link to="/se/cors/01_introduction">「CORSサポートについてさらに学習します」</router-link>。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4MLbU1" title="原文 : Backward Incompatible Changes View the changelog for information about potential breaking changes, including package name changes."><strong>「後方互換性のない変更」</strong><br>パッケージ名の変更など、潜在的な中断の変更の詳細は、<a href="https://github.com/oracle/helidon/blob/2.0.0-M1/CHANGELOG.md#backward-incompatible-changes" id="" target="_blank" >changelog</a>を参照してください。</span></p>

</li>
</ul>
</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.2Qfgny" title="原文 : Try the Helidon Quickstart Examples."><router-link to="/about/03_prerequisites">「Helidonクイックスタートの例」</router-link>を試します。</span></p>

</div>
</doc-view>
