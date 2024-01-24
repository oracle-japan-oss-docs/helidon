<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3pueI" title="原文 : Helidon SE 4.x Upgrade Guide">Helidon SE 4.xアップグレード・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ulKt3.spl1" title="原文 : In Helidon 4.x we have made some major changes to Helidon.">Helidon 4.xで、Helidonにいくつかの大きな変更を加えました。</span> <span class="merged" id="all.2ulKt3.spl2" title="原文 : Reactive engine has been removed.">リアクティブ・エンジンは削除されました。</span> <span class="merged" id="all.2ulKt3.spl3" title="原文 : APIS and implementations are rewritten in &quot;blocking&quot; paradigm.">APISと実装は、「ブロッキング」パラダイムで書き換えられます。</span> <span class="merged" id="all.2ulKt3.spl4" title="原文 : This guide will help you upgrade a Helidon MP 3.x application to 4.x.">このガイドは、Helidon MP 3.xアプリケーションを4.xにアップグレードする際に役立ちます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_java_21_runtime"><span class="merged" id="all.22tMG1.1"  title="原文:: Java 21 Runtime">Java 21 Runtime</span></h2>
<div class="section">
<p><span class="merged" id="all.7KJ8g.1.spl1" title="原文 : Java 17 is no longer supported in Helidon 4.">Java 17は、Helidon 4でサポートされなくなりました。</span> <span class="merged" id="all.7KJ8g.1.spl2"  title="原文:: Java 21 or newer is required.">Java 21以上が必要です。</span> <span class="merged" id="all.7KJ8g.1.spl3" title="原文 : Please follow the instructions in Prerequisites for proper installation.">正しくインストールするには、<router-link to="/about/prerequisites">「事前設定」</router-link>の手順に従ってください。</span> </p>

<p><span class="merged" id="all.2uUKgP.spl1" title="原文 : Helidon 4 no longer uses Netty.">Helidon 4はNettyを使用しません。</span> <span class="merged" id="all.2uUKgP.spl2" title="原文 : Helidon SE is now running on Helidon WebServer which is based on virtual threads technology, available in Java 21.">Helidon SEは、Java 21で使用可能な仮想スレッド・テクノロジに基づくHelidon WebServerで実行されるようになりました。</span> </p>

</div>


<h2 id="_programming_paradigm"><span class="merged" id="all.3iPMqQ" title="原文 : Programming paradigm">プログラミングのパラダイム</span></h2>
<div class="section">
<p><span class="merged" id="all.1astN0.spl1" title="原文 : Helidon SE has changed from an asynchronous style API to an imperative/blocking style API that is optimized for use with virtual threads.">Helidon SEは、非同期スタイルAPIから、仮想スレッドで使用するために最適化された必須/ブロッキング・スタイルAPIに変更されました。</span> <span class="merged" id="all.1astN0.spl2" title="原文 : Currently, there is no compatibility API available">現在、互換性APIはありません</span> </p>

</div>


<h2 id="_server_initialization_and_start_up"><span class="merged" id="all.2jp6Ai" title="原文 : Server Initialization and Start Up">サーバーの初期化と起動</span></h2>
<div class="section">
<p><span class="merged" id="all.1i0tUh" title="原文 : In Helidon 1.x-3.x you started a server like this:">Helidon 1.x-3.xで、次のようなサーバーを起動しました:</span></p>

<markup
lang="java"
title="Start Helidon SE 3.x Server"
>static Single&lt;WebServer&gt; startServer() {

    Config config = Config.create();

    WebServer server = WebServer.builder(createRouting(config))
            .config(config.get("server"))
            .addMediaSupport(JsonpSupport.create())
            .build();

    Single&lt;WebServer&gt; webserver = server.start();   <span class="conum" data-value="1" />

    webserver.thenAccept(ws -&gt; {    <span class="conum" data-value="2" />
                System.out.println("WEB server is up! http://localhost:" + ws.port() + "/greet");
                ws.whenShutdown().thenRun(() -&gt; System.out.println("WEB server is DOWN. Good bye!"));
            })
            .exceptionallyAccept(t -&gt; { <span class="conum" data-value="3" />
                System.err.println("Startup failed: " + t.getMessage());
                t.printStackTrace(System.err);
            });

    return webserver;
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3sFIMN.spl1" title="原文 : Server is started in an asynchronous way.">サーバーは非同期的に起動されます。</span> <span class="merged" id="all.3sFIMN.spl2" title="原文 : A Single object is returned."><code>Single</code>オブジェクトが返されます。</span> </li>
<li data-value="2"><span class="merged" id="all.1l8chT" title="原文 : Wait for the Server to start and print the message in an asynchronous way.">サーバーが起動するのを待って、非同期的にメッセージを出力します。</span></li>
<li data-value="3"><span class="merged" id="all.2NDzJR" title="原文 : Gracefully handle exceptions if they occur during the initialization process.">初期化プロセス中に発生した例外を適切に処理します。</span></li>
</ul>

<p><span class="merged" id="all.4OBvfu.spl1" title="原文 : Since Helidon SE in 3.x was reactive, during the start a Single object is returned, the server has been started in asynchronous way.">3.xのHelidon SEはリアクティブだったため、起動時に<code>Single</code>オブジェクトが返されると、サーバーは非同期的に起動されます。</span> <span class="merged" id="all.4OBvfu.spl2" title="原文 : We have to use reactive methods like thenAccept to wait for the server to start and then to perform the desired action."><code>thenAccept</code>などのリアクティブ・メソッドを使用して、サーバーの起動を待機し、必要なアクションを実行する必要があります。</span> <span class="merged" id="all.4OBvfu.spl3" title="原文 : The exception handling should also be done in reactive way using the corresponding method.">例外処理は、対応するメソッドを使用してリアクティブに実行する必要があります。</span> </p>

<p><span class="merged" id="all.wI5a0" title="原文 : In Helidon 4.x asynchronous programming is no longer required so the server startup is much simpler:">Helidon 4.xでは、非同期プログラミングが不要になったため、サーバーの起動が非常に簡単になります:</span></p>

<markup
lang="java"
title="Start Helidon SE 4.x Server"
>public static void main(String[] args) {

    Config config = Config.create();
    Config.global(config);

    WebServer server = WebServer.builder()  <span class="conum" data-value="1" />
            .config(config.get("server"))
            .routing(Main::routing)
            .build()
            .start();   <span class="conum" data-value="2" />

    System.out.println("WEB server is up! http://localhost:" + server.port() + "/greet");   <span class="conum" data-value="3" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3d56L"  title="原文:: Configure the Server.">サーバーの構成</span></li>
<li data-value="2"><span class="merged" id="all.1QxHJE.spl1" title="原文 : Start the Server.">サーバーを起動します。</span> <span class="merged" id="all.1QxHJE.spl2" title="原文 : No reactive objects returned.">リアクティブ・オブジェクトが返されませんでした。</span> </li>
<li data-value="3"><span class="merged" id="all.2qLopi" title="原文 : Print a message when the Server is started.">サーバーの起動時にメッセージを出力します。</span></li>
</ul>

<p><span class="merged" id="all.3xsfPp.spl1" title="原文 : Just create it, configure it, and wait for it to start.">作成して構成し、起動するまで待ちます。</span> <span class="merged" id="all.3xsfPp.spl2" title="原文 : If any exceptions happen, they are handled the traditional way using available language constructions.">例外が発生した場合は、使用可能な言語構造を使用して従来の方法で処理されます。</span> </p>

</div>


<h2 id="_server_features_and_media_support_discovery"><span class="merged" id="all.1CtzOo" title="原文 : Server Features and Media Support Discovery">サーバー機能およびメディア・サポートの検出</span></h2>
<div class="section">
<p><span class="merged" id="all.1L4VQX.spl1" title="原文 : In previous versions of Helidon you had to explicitly register WebServer features (register(MetricsSupport.create())) and explicitly add media support (addMediaSupport(JsonpSupport.create())).">以前のバージョンのHelidonでは、WebServer機能(<code>register(MetricsSupport.create())</code>)を明示的に登録し、メディア・サポート(<code>addMediaSupport(JsonpSupport.create())</code>)を明示的に追加する必要がありました。</span> <span class="merged" id="all.1L4VQX.spl2" title="原文 : In Helidon 4 the default behavior is to automatically discover these components from the classpath.">Helidon 4では、デフォルトの動作は、クラスパスからこれらのコンポーネントを自動的に検出することです。</span> <span class="merged" id="all.1L4VQX.spl3" title="原文 : So all you need to do is add the dependencies to your pom.xml and optionally add configuration to customize them.">そのため、依存関係をpom.xmlに追加し、必要に応じて構成を追加してカスタマイズするだけで済みます。</span> </p>

<p><span class="merged" id="all.4PuTPO" title="原文 : If you want full control using the API, you still have that option.">APIを使用して完全な制御を行う場合でも、そのオプションを使用できます。</span></p>

<p><span class="merged" id="all.32kNS3"  title="原文: For more information see:">詳細は、次のドキュメントを参照してください。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1yvQyF" title="原文 : Observability feature support"><router-link to="/se/observability">可観測性機能サポート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.21RpNF" title="原文 : Media types support"><router-link :to="{path: '/se/webserver', hash: '#_media_types_support'}">メディア・タイプのサポート</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_routing_configuration"><span class="merged" id="all.3japUB"  title="原文:: Routing Configuration">ルーティング構成</span></h2>
<div class="section">
<p><span class="merged" id="all.Ox5jD" title="原文 : In Helidon 1.x-3.x the routing config was done the following way:">Helidon 1.x-3.xでは、ルーティング構成が次のように実行されました:</span></p>

<markup
lang="java"
title="Routing in Helidon SE 3.x Server"
>private static Routing createRouting(Config config) {

    MetricsSupport metrics = MetricsSupport.create();   <span class="conum" data-value="1" />
    HealthSupport health = HealthSupport.builder()
            .addLiveness(HealthChecks.healthChecks())
            .build();

    GreetService greetService = new GreetService(config);   <span class="conum" data-value="2" />

    return Routing.builder()
            .register(health)   <span class="conum" data-value="3" />
            .register(metrics)
            .register("/greet", greetService)   <span class="conum" data-value="4" />
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Hufch" title="原文 : Create and configure Metrics and Heath support."><code>Metrics</code>および<code>Heath</code>サポートを作成および構成します。</span></li>
<li data-value="2"><span class="merged" id="all.24tVkj" title="原文 : Create a regular Helidon Service.">通常のHelidonサービスを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.4Gow2O" title="原文 : Register Metrics and Heath support as Helidon Services."><code>Metrics</code>および<code>Heath</code>サポートをHelidonサービスとして登録します。</span></li>
<li data-value="4"><span class="merged" id="all.nvV6H" title="原文 : Register the regular Greeting service.">通常のグリーティング・サービスを登録します。</span></li>
</ul>

<p><span class="merged" id="all.2VYk96.spl1" title="原文 : Services are created and assigned to the desired path.">サービスが作成され、目的のパスに割り当てられます。</span> <span class="merged" id="all.2VYk96.spl2" title="原文 : Observability and other features are being created as usual Helidon services, available as part of the framework.">可観測性およびその他の機能は、フレームワークの一部として使用可能な通常のHelidon <code>services</code>として作成されています。</span> <span class="merged" id="all.2VYk96.spl3" title="原文 : User-defined services are also registered the same way.">ユーザー定義サービスも同様に登録されます。</span> </p>

<p><span class="merged" id="all.33Ooow" title="原文 : In Helidon 4, the routing is configured the following way:">Helidon 4では、ルーティングは次のように構成されます:</span></p>

<markup
lang="java"
title="Start Helidon SE 4.x Server"
>static void routing(HttpRouting.Builder routing) {
    routing.register("/greet", new GreetService());  <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1h1BWa" title="原文 : Register Greeting service as in previous versions of Helidon.">以前のバージョンのHelidonのようにサービスを登録します。</span></li>
</ul>

<p><span class="merged" id="all.axjsM" title="原文 : As described previously, the Metrics and Health features will be discovered automatically as long as you have added the dependencies for them to your project.">前述のとおり、メトリクスおよびヘルス機能は、それらの依存関係をプロジェクトに追加しているかぎり、自動的に検出されます。</span></p>

<p><span class="merged" id="all.OAQ17" title="原文 : If you wanteded to add these features to the server programatically you would do so using WebServer.builder().addFeature() method.">これらの機能をプログラム的にサーバーに追加する場合は、<code>WebServer.builder().addFeature()</code>メソッドを使用します。</span></p>

<p><span class="merged" id="all.4ImNRE.spl1" title="原文 : Feature encapsulates a set of endpoints, services and/or filters."><code>Feature</code>は、一連のエンドポイント、サービスまたはフィルタ(あるいはその両方)をカプセル化します。</span> <span class="merged" id="all.4ImNRE.spl2" title="原文 : It is similar to HttpService but gives more freedom in setup."><code>HttpService</code>と似ていますが、設定の自由度が向上します。</span> <span class="merged" id="all.4ImNRE.spl3" title="原文 : Main difference is that a feature can add Filters and it cannot be registered on a path.">主な違いは、機能は<code>Filters</code>を追加でき、パスに登録できないことです。</span> <span class="merged" id="all.4ImNRE.spl4" title="原文 : Features are not registered immediately-each feature can define a Weight or implement Weighted to order features according to their weight.">機能はすぐには登録されません。各機能は、<code>Weight</code>を定義するか、<code>Weighted</code>を実装して、重みに従って機能を順序付けできます。</span> <span class="merged" id="all.4ImNRE.spl5" title="原文 : Higher-weighted features are registered first.">重み付けされたフィーチャが最初に登録されます。</span> <span class="merged" id="all.4ImNRE.spl6" title="原文 : This is to allow ordering of features in a meaningful way (e.g. Context should be first, Tracing second, Security third etc.).">これは、意味のある方法でフィーチャを並べ替えることを可能にするためです(例:コンテキストは最初、トレースは2番目、セキュリティは3番目)。</span> </p>

</div>


<h2 id="_services"><span class="merged" id="all.2WzPrj"  title="原文:: Services">サービス</span></h2>
<div class="section">
<p><span class="merged" id="all.26Pfxo" title="原文 : There are also significant changes in Helidon Service.">また、Helidon <code>Service</code>にも大きな変更があります。</span></p>

<p><span class="merged" id="all.4Wn6Qb" title="原文 : In prior versions, a service looks this way:">以前のバージョンでは、サービスは次のようになります:</span></p>

<markup
lang="java"
title="Helidon SE 3.x Service"
>public class GreetService implements Service {

    @Override
    public void update(Routing.Rules rules) {   <span class="conum" data-value="1" />
        rules
            .get("/", this::getDefaultMessageHandler)
            .get("/{name}", this::getMessageHandler)
            .put("/greeting", this::updateGreetingHandler);
    }

    private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {   <span class="conum" data-value="2" />
        sendResponse(response, "World");
    }

    // other methods omitted
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4O1p4u" title="原文 : Use update() method to set up routing.">ルーティングを設定するには、<code>update()</code>メソッドを使用します。</span></li>
<li data-value="2"><span class="merged" id="all.1RBJXe" title="原文 : Handle a Request and return a Responce."><code>Request</code>を処理し、<code>Responce</code>を返します。</span></li>
</ul>

<p><span class="merged" id="all.3uZ4qU" title="原文 : In Helidon 4, the same service:">Helidon 4では、同じサービスは次のとおりです:</span></p>

<markup
lang="java"
title="Helidon SE 4.x Service"
>public class GreetService implements HttpService {  <span class="conum" data-value="1" />

    @Override
    public void routing(HttpRules rules) {  <span class="conum" data-value="2" />
        rules.get("/", this::getDefaultMessageHandler)
             .get("/{name}", this::getMessageHandler)
             .put("/greeting", this::updateGreetingHandler);
    }


    private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) { <span class="conum" data-value="3" />
        sendResponse(response, "World");
    }

    // other methods omitted
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1fxpuX" title="原文 : Implement HttpService for the GreetingService."><code>GreetingService</code>に<code>HttpService</code>を実装します。</span></li>
<li data-value="2"><span class="merged" id="all.4SpSNq" title="原文 : Use routing(HttpRules rules) to set up routing.">ルーティングを設定するには、<code>routing(HttpRules rules)</code>を使用します。</span></li>
<li data-value="3"><span class="merged" id="all.1RBJXe.1" title="原文 : Handle a Request and return a Responce."><code>Request</code>を処理し、<code>Responce</code>を返します。</span></li>
</ul>

<p><span class="merged" id="all.4fTwWt.spl1" title="原文 : Helidon 4 introduced HttpService that should be implemented in order to process HTTP requests.">Helidon 4では、HTTPリクエストを処理するために実装する必要がある<code>HttpService</code>が導入されました。</span> <span class="merged" id="all.4fTwWt.spl2" title="原文 : To set up routing, the method routing(HttpRules rules) should now be used.">ルーティングを設定するには、メソッド<code>routing(HttpRules rules)</code>を使用する必要があります。</span> <span class="merged" id="all.4fTwWt.spl3" title="原文 : It receives HttpRules object with routes description.">ルートの説明を含む<code>HttpRules</code>オブジェクトを受け取ります。</span> </p>

<p><span class="merged" id="all.1Yrviq" title="原文 : ServerRequest and ServerResponse are now in the io.helidon.webserver.http package;"><code>ServerRequest</code>および<code>ServerResponse</code>は、<code>io.helidon.webserver.http</code>パッケージに含まれています</span></p>

<p><span class="merged" id="all.2uRl4j" title="原文 : Http.Status is now io.helidon.http.Status"><code>Http.Status</code>は現在<code>io.helidon.http.Status</code>です</span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.1cbn5e" title="原文 : These changes make Helidon 4 incompatible with previous versions.">これらの変更により、Helidon 4は以前のバージョンと互換性がありません。</span></p>
</div>

<p><span class="merged" id="all.4EDb5R" title="原文 : Learn more about HttpService and Routing at Helidon SE WebServer"><code>HttpService</code>および<code>Routing</code>の詳細は、<router-link to="/se/webserver">Helidon SE WebServer</router-link>を参照してください</span></p>


<h3 id="_other_significant_changes"><span class="merged" id="all.47Bck0" title="原文 : Other Significant Changes">その他の重要な変更</span></h3>
<div class="section">

<h4 id="_media_support"><span class="merged" id="all.4FqJq5.1" title="原文 : Media Support">メディアのサポート</span></h4>
<div class="section">
<p><span class="merged" id="all.49Rxbf.spl1" title="原文 : Media support has moved from the io.helidon.media Java package to io.helidon.http.media and has new dependency coordinates.">メディア・サポートは、<code>io.helidon.media</code> Javaパッケージから<code>io.helidon.http.media</code>に移動し、新しい依存関係座標があります。</span> <span class="merged" id="all.49Rxbf.spl2"  title="原文:: For example:">例えば:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3jb0qU.spl1" title="原文 : In Helidon 4 media support is discovered by default, so you simple need to add the dependency.">Helidon 4では、メディア・サポートがデフォルトで検出されるため、依存関係を簡単に追加する必要があります。</span> <span class="merged" id="all.3jb0qU.spl2" title="原文 : You no longer need to explicitly add media support using the WebServer builder."><code>WebServer</code>ビルダーを使用してメディア・サポートを明示的に追加する必要はなくなりました。</span> </p>

<p><span class="merged" id="all.4HGBmf.spl1" title="原文 : Media support no long transitively brings the Jakarta API dependencies.">メディア・サポートは、Jakarta APIの依存関係を一時的にもたらすことはありません。</span> <span class="merged" id="all.4HGBmf.spl2" title="原文 : So you might need to add these explicitly.">そのため、これらを明示的に追加する必要がある場合があります。</span> <span class="merged" id="all.4HGBmf.spl3"  title="原文:: For example:">例えば:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;jakarta.json&lt;/groupId&gt;
    &lt;artifactId&gt;jakarta.json-api&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_testing"><span class="merged" id="all.icyjq.1"  title="原文:: Testing">テスト</span></h4>
<div class="section">
<p><span class="merged" id="all.25ogoO" title="原文 : There is a new testing framework for Helidon SE.">Helidon SEの新しいテスト・フレームワークがあります。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.testing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-testing-junit5&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3xMzLg" title="原文 : Find more information, see Helidon SE testing">詳細は、<router-link to="/se/introduction">「Helidon SEテスト」</router-link>を参照してください</span></p>

</div>


<h4 id="_observability"><span class="merged" id="all.X6GsN"  title="原文:: Observability">可観測性</span></h4>
<div class="section">
<p><span class="merged" id="all.1P8BuA.spl1" title="原文 : Observability features of Helidon have now moved to different package.">Helidonの可観測性機能が別のパッケージに移動されました。</span> <span class="merged" id="all.1P8BuA.spl2" title="原文 : For Health and Metrics please use:"><code>Health</code>および<code>Metrics</code>については、次を使用してください:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-health&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3kAY4P.spl1" title="原文 : Observability has new endpoints.">可観測性には新しいエンドポイントがあります。</span> <span class="merged" id="all.3kAY4P.spl2" title="原文 : See them here."><router-link to="/se/observability">「こちら」</router-link>を参照してください。</span> </p>

<p><span class="merged" id="all.4WAxAE" title="原文 : For System Metrics, please use:">システム・メトリクスの場合は、次を使用してください:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-system-meters&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.lCKSH.spl1" title="原文 : By default Observability features are discovered automatically if you add the above dependencies.">デフォルトでは、前述の依存関係を追加すると、可観測性が自動的に検出されます。</span> <span class="merged" id="all.lCKSH.spl2" title="原文 : If you choose to add them programmatically (using addFeature) you will need to add the following dependency:">プログラムで(<code>addFeature</code>を使用して)追加する場合は、次の依存関係を追加する必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3Pd36k.spl1" title="原文 : Metrics has changed significantly in Helidon 4.">メトリクスは、Helidon 4で大幅に変化しました。</span> <span class="merged" id="all.3Pd36k.spl2" title="原文 : See Helidon SE Metrics for more information.">詳細は、<router-link to="/se/metrics/metrics">「Helidon SEメトリクス」</router-link>を参照してください。</span> </p>

</div>


<h4 id="_security"><span class="merged" id="all.17B62B"  title="原文:: Security">セキュリティ</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3lJN1i" title="原文 : Changed modules:">変更されたモジュール:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.12M8DQ" title="原文 : helidon-security-integration-jersey moved to the module helidon-microprofile-security"><code>helidon-security-integration-jersey</code>がモジュール<code>helidon-microprofile-security</code>に移動されました</span></p>

</li>
<li>
<p><span class="merged" id="all.1o0Nk0" title="原文 : helidon-security-integration-jersey-client moved to the module helidon-microprofile-security"><code>helidon-security-integration-jersey-client</code>がモジュール<code>helidon-microprofile-security</code>に移動されました</span></p>

</li>
<li>
<p><span class="merged" id="all.1n6oQJ" title="原文 : helidon-security-integration-grpc was removed"><code>helidon-security-integration-grpc</code>が削除されました</span></p>

</li>
<li>
<p><span class="merged" id="all.3gy0Fx" title="原文 : helidon-security-integration-webserver moved to the module helidon-webserver-security"><code>helidon-security-integration-webserver</code>がモジュール<code>helidon-webserver-security</code>に移動されました</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.18FmhN" title="原文 : Significant class name changes:">重要なクラス名の変更:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.RLzVi" title="原文 : OidcSupport renamed to OidcFeature"><code>OidcSupport</code>の名前が<code>OidcFeature</code>に変更されました</span></p>

</li>
<li>
<p><span class="merged" id="all.3HrvGz" title="原文 : WebSecurity renamed to SecurityFeature"><code>WebSecurity</code>の名前が<code>SecurityFeature</code>に変更されました</span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.jVftc"  title="原文:: Other:">その他:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2YFzIw" title="原文 : SynchronousProvider removed - SynchronousProvider usage is no longer needed, since all security providers are synchronous."><code>SynchronousProvider removed</code> - すべてのセキュリティ・プロバイダが同期しているため、<code>SynchronousProvider</code>の使用は不要になりました。</span></p>

</li>
</ul>

</li>
</ul>

</div>

</div>


<h3 id="_global_configuration"><span class="merged" id="all.2y9A1j.1"  title="原文:: Global Configuration">グローバル構成</span></h3>
<div class="section">
<p><span class="merged" id="all.D0JbG.spl1" title="原文 : The global configuration represents a single instance of the Config class, which is implicitly employed by certain Helidon components.">グローバル構成は、<code>Config</code>クラスの単一インスタンスを表します。このクラスは、特定のHelidonコンポーネントによって暗黙的に使用されます。</span> <span class="merged" id="all.D0JbG.spl2" title="原文 : Furthermore, it offers a handy approach for your application to access configuration information from any part of your code.">さらに、コードの一部から構成情報にアクセスするために、アプリケーションで便利なアプローチが提供されます。</span> </p>

<p><span class="merged" id="all.3ZZ6cC" title="原文 : It is recommended that you explicitly initialize global configuration before using any Helidon components:">Helidonコンポーネントを使用する前に、グローバル構成を明示的に初期化することをお薦めします:</span></p>

<markup


>Config config = Config.create();  // Uses default config sources
Config.global(config);</markup>

<p><span class="merged" id="all.2kO0HZ" title="原文 : You can then utilize the global configuration for easy retrieval of your application’s configuration:">次に、グローバル構成を使用して、アプリケーションの構成を簡単に取得できます:</span></p>

<markup


>Config config = Config.global();</markup>

<p><span class="merged" id="all.203AiO" title="原文 : More information at Helidon SE Config.">詳細は、<router-link to="/se/config/introduction">「Helidon SE構成」</router-link>を参照してください。</span></p>

</div>


<h3 id="_logging"><span class="merged" id="all.5r4dy.2"  title="原文:: Logging">ロギング</span></h3>
<div class="section">
<p><span class="merged" id="all.1yGb6A" title="原文 : The class LogConfig has moved to the io.helidon.logging.common Java package.">クラス<code>LogConfig</code>は、<code>io.helidon.logging.common</code> Javaパッケージに移動しました。</span></p>

<p><span class="merged" id="all.2gLHhb.1" title="原文 : The Helidon console handler has changed from io.helidon.common.HelidonConsoleHandler to io.helidon.logging.jul.HelidonConsoleHandler.">Helidonコンソール・ハンドラが<code>io.helidon.common.HelidonConsoleHandler</code>から<code>io.helidon.logging.jul.HelidonConsoleHandler</code>に変更されました。</span></p>

<p><span class="merged" id="all.MlpF5.1" title="原文 : If you use this handler in your logging.properties you will need to update it and add the following dependency:">このハンドラを<code>logging.properties</code>で使用する場合は、このハンドラを更新し、次の依存関係を追加する必要があります:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.logging&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-logging-jul&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_conclusion"><span class="merged" id="all.1V7peH.1"  title="原文:: Conclusion">まとめ</span></h2>
<div class="section">
<p><span class="merged" id="all.2zuk2i" title="原文 : Please proceed to Helidon SE Introduction to find more information and documentation about each module.">各モジュールの詳細およびドキュメントについては、<router-link to="/se/introduction">「Helidon SEの概要」</router-link>に進んでください。</span></p>

<p><span class="merged" id="all.2947tE" title="原文 : Also, the Helidon examples are a good resource for seeing how things are done in Helidon 4.">また、<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/" target="_blank">「Helidonの例」</a>は、Helidon 4でどのように処理が行われるかを確認するための適切なリソースです。</span></p>

</div>

</doc-view>
