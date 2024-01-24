<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.75"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.73" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.53" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.50" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.41" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.29" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.26" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.97"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.pHBnD" title="原文 : Helidon provides built-in test support for Helidon testing with JUnit 5.">Helidonは、JUnit 5を使用したHelidonテストの組込みテスト・サポートを提供します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.67"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.alS5O" title="原文 : To enable Helidon Testing Framework add the following dependency to your project’s pom.xml (see Managing Dependencies).">Helidonテスト・フレームワークを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照してください)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
     &lt;groupId&gt;io.helidon.webserver.testing.junit5&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-webserver-testing-junit5&lt;/artifactId&gt;
     &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.69"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2unZXS.spl1" title="原文 : Helidon provides a rich set of extensions based on JUnit 5 for Helidon WebServer testing.">Helidonは、Helidon WebServerテスト用に、JUnit 5に基づく豊富な拡張機能セットを提供します。</span> <span class="merged" id="all.2unZXS.spl2" title="原文 : Testing can be done with automatic server start-up, configuration, and shutdown.">テストは、サーバーの自動起動、構成および停止で実行できます。</span> <span class="merged" id="all.2unZXS.spl3" title="原文 : Testing can also be done without full server start-up with DirectClient when no real sockets are created.">また、実際のソケットが作成されない場合は、<code>DirectClient</code>を使用して完全なサーバー起動なしでテストを実行することもできます。</span> </p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.28"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1iESxr" title="原文 : There are two main annotations that you can use to test Helidon WebServer.">Helidon WebServerをテストするために使用できる2つの主要な注釈があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Mwl9f" title="原文 : @ServerTest is an integration test annotation that starts the server (opens ports) and provides client injection pre-configured for the server port(s)."><code>@ServerTest</code>は、サーバーを起動(ポートを開く)し、サーバー・ポート用に事前構成されたクライアント・インジェクションを提供する統合テスト注釈です。</span></p>

</li>
<li>
<p><span class="merged" id="all.GgCfW" title="原文 : @RoutingTest is a unit test annotation that does not start the server and does not open ports but provides a direct client (with the same API as the usual network client) to test routing."><code>@RoutingTest</code>は、サーバーを起動せず、ポートを開かないが、ルーティングをテストするための直接クライアント(通常のネットワーク・クライアントと同じAPIを使用)を提供するユニット・テスト注釈です。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1lQor1" title="原文 : The additional annotation @Socket can be used to qualify the injection of parameters into test constructors or methods, such as to obtain a client configured for the named socket.">追加の注釈<code>@Socket</code>を使用すると、名前付きソケット用に構成されたクライアントを取得するなど、テスト・コンストラクタまたはメソッドへのパラメータのインジェクションを修飾できます。</span></p>

<p><span class="merged" id="all.2THpET.spl1" title="原文 : The following table lists the supported types of parameters for the @SetUpRoute annotated methods.">次の表に、<code>@SetUpRoute</code>注釈付きメソッドでサポートされるパラメータのタイプを示します。</span> <span class="merged" id="all.2THpET.spl2" title="原文 : Such methods MUST be static and may have any name.">このようなメソッドはstaticで、任意の名前を持つ必要があります。</span> <span class="merged" id="all.2THpET.spl3" title="原文 : The @SetUpRoute annotation has value with socket name (to customize the setup for a different socket)."><code>@SetUpRoute</code>注釈には、ソケット名を持つ<code>value</code>があります(別のソケットの設定をカスタマイズするため)。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3NhieN" title="原文 : Parameter type - supported class of a parameter">パラメータ・タイプ - サポートされているパラメータのクラス</span></p>

</li>
<li>
<p><span class="merged" id="all.1ovjUU" title="原文 : Annotation - which annotations support this parameter">注釈 - このパラメータをサポートする注釈</span></p>

</li>
<li>
<p><span class="merged" id="all.15RUFv" title="原文 : Modules - which webserver extension modules support this signature">モジュール - このシグネチャをサポートするwebサーバー拡張モジュール</span></p>

</li>
</ul>

<div class="block-title"><span class="merged" id="all.sq3ar" title="原文 : Parameters for the @SetUpRoute annotated methods."><span><code>@SetUpRoute</code>注釈付きメソッドのパラメータ。</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.yCK4i"  title="原文:: Parameter Type">パラメータ・タイプ</span></th>
<th><span class="merged" id="all.1mFIlG.9"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.47VrhL"  title="原文:: Modules">モジュール</span></th>
<th><span class="merged" id="all.3Wy1iS.4"  title="原文:: Notes">ノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4BKRlj"  title="原文: HttpRouting.Builder"><code>HttpRouting.Builder</code></span></td>
<td class=""><span class="merged" id="all.2WACSs" title="原文 : @ServerTest, @RoutingTest"><code>@ServerTest</code>, <code>@RoutingTest</code></span></td>


</tr>
<tr>
<td class=""><span class="merged" id="all.1Xq0gq"  title="原文: HttpRules"><code>HttpRules</code></span></td>
<td class=""><span class="merged" id="all.2WACSs.1" title="原文 : @ServerTest, @RoutingTest"><code>@ServerTest</code>, <code>@RoutingTest</code></span></td>

<td class=""><span class="merged" id="all.3uYHGR" title="原文 : Same as HttpRouting.Builder, only routing setup"><code>HttpRouting.Builder</code>と同じ、ルーティング設定のみ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1l6Kcw"  title="原文: Router.RouterBuilder&lt;?&gt;"><code>Router.RouterBuilder&lt;?></code></span></td>
<td class=""><span class="merged" id="all.2WACSs.2" title="原文 : @ServerTest, @RoutingTest"><code>@ServerTest</code>, <code>@RoutingTest</code></span></td>


</tr>
<tr>
<td class=""><span class="merged" id="all.3ommty"  title="原文: SocketListener.Builder"><code>SocketListener.Builder</code></span></td>
<td class=""><span class="merged" id="all.2WDonD"  title="原文: @ServerTest"><code>@ServerTest</code></span></td>


</tr>
<tr>
<td class=""><span class="merged" id="all.3elT0G"  title="原文: WebSocketRouting.Builder"><code>WebSocketRouting.Builder</code></span></td>
<td class=""><span class="merged" id="all.2WACSs.3" title="原文 : @ServerTest, @RoutingTest"><code>@ServerTest</code>, <code>@RoutingTest</code></span></td>
<td class=""><span class="merged" id="all.1DqszB"  title="原文:: websocket">websocket</span></td>

</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2TN4dv" title="原文 : In addition, a static method annotated with @SetUpServer can be defined for @ServerTest, which has a single parameter of WebServer.Builder.">また、<code>@SetUpServer</code>という注釈が付いた静的メソッドを、<code>WebServer.Builder</code>という単一のパラメータを持つ<code>@ServerTest</code>に定義できます。</span></p>

<p><span class="merged" id="all.1lLhAA" title="原文 : The following table lists the injectable types (through constructor or method injection).">次の表に、(コンストラクタまたはメソッド・インジェクションを介した)インジェクタブルな型を示します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3GGtjC" title="原文 : Type - type that can be injected">タイプ - インジェクトできるタイプ</span></p>

</li>
<li>
<p><span class="merged" id="all.4IZ4dL" title="原文 : Socket - if checked, you can use the @Socket annotation to obtain a value specific to that named socket">ソケット - チェックすると、<code>@Socket</code>注釈を使用して、その名前付きソケットに固有の値を取得できます</span></p>

</li>
<li>
<p><span class="merged" id="all.3xJpdK" title="原文 : Annotation - which annotations support this injection">注釈 - どの注釈がこのインジェクションをサポートするか</span></p>

</li>
<li>
<p><span class="merged" id="all.Ta3Qc" title="原文 : Modules - which WebServer extension modules support this injection">モジュール - このインジェクションをサポートするWebServer拡張モジュール</span></p>

</li>
<li>
<p><span class="merged" id="all.NJ0sO" title="原文 : Notes - additional details">ノート - 追加の詳細</span></p>

</li>
</ul>

<div class="block-title"><span class="merged" id="all.1Psmms" title="原文 : Injectable types."><span>インジェクタブルなタイプ。</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.p0YxL.11"  title="原文:: Type">タイプ</span></td>
<td class=""><span class="merged" id="all.4WwKgK" title="原文 : Socket?">ソケット?</span></td>
<td class=""><span class="merged" id="all.1mFIlG.10"  title="原文:: Annotation">注釈</span></td>
<td class=""><span class="merged" id="all.47VrhL.1"  title="原文:: Modules">モジュール</span></td>
<td class=""><span class="merged" id="all.3Wy1iS.5"  title="原文:: Notes">ノート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4BFJBt"  title="原文: WebServer"><code>WebServer</code></span></td>

<td class=""><span class="merged" id="all.2WDonD.1"  title="原文: @ServerTest"><code>@ServerTest</code></span></td>

<td class=""><span class="merged" id="all.1kihfB" title="原文 : Server instance (already started)">サーバー・インスタンス(すでに開始済)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EfS7P"  title="原文: URI"><code>URI</code></span></td>
<td class=""><span class="merged" id="all.2Zvt6B"  title="原文:: x">x</span></td>
<td class=""><span class="merged" id="all.2WDonD.2"  title="原文: @ServerTest"><code>@ServerTest</code></span></td>

<td class=""><span class="merged" id="all.u5PPZ" title="原文 : URI pointing to a port of the webserver">webサーバーのポートを指すURI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JcgQp"  title="原文: SocketHttpClient"><code>SocketHttpClient</code></span></td>
<td class=""><span class="merged" id="all.2Zvt6B.1"  title="原文:: x">x</span></td>
<td class=""><span class="merged" id="all.2WDonD.3"  title="原文: @ServerTest"><code>@ServerTest</code></span></td>

<td class=""><span class="merged" id="all.2faJkR" title="原文 : This client allows you to send anything in order to test for bad requests or other issues.">このクライアントでは、不正なリクエストやその他の問題をテストするために、何でも送信できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.WOxBO"  title="原文: Http1Client"><code>Http1Client</code></span></td>
<td class=""><span class="merged" id="all.2Zvt6B.2"  title="原文:: x">x</span></td>
<td class=""><span class="merged" id="all.2WDonD.4"  title="原文: @ServerTest"><code>@ServerTest</code></span></td>


</tr>
<tr>
<td class=""><span class="merged" id="all.4A6joW"  title="原文: DirectClient"><code>DirectClient</code></span></td>
<td class=""><span class="merged" id="all.2Zvt6B.3"  title="原文:: x">x</span></td>
<td class=""><span class="merged" id="all.1VVi3j"  title="原文: @RoutingTest"><code>@RoutingTest</code></span></td>

<td class=""><span class="merged" id="all.32pNkU" title="原文 : Implements Http1Client API"><code>Http1Client</code> APIの実装</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5BUy4"  title="原文: WsClient"><code>WsClient</code></span></td>
<td class=""><span class="merged" id="all.2Zvt6B.4"  title="原文:: x">x</span></td>
<td class=""><span class="merged" id="all.2WDonD.5"  title="原文: @ServerTest"><code>@ServerTest</code></span></td>
<td class=""><span class="merged" id="all.1DqszB.1"  title="原文:: websocket">websocket</span></td>

</tr>
<tr>
<td class=""><span class="merged" id="all.1rJJQk"  title="原文: DirectWsClient"><code>DirectWsClient</code></span></td>
<td class=""><span class="merged" id="all.2Zvt6B.5"  title="原文:: x">x</span></td>
<td class=""><span class="merged" id="all.1VVi3j.1"  title="原文: @RoutingTest"><code>@RoutingTest</code></span></td>
<td class=""><span class="merged" id="all.1DqszB.2"  title="原文:: websocket">websocket</span></td>
<td class=""><span class="merged" id="all.2eC3Hx" title="原文 : Implements WsClient API"><code>WsClient</code> APIの実装</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.c5CXt" title="原文 : Extensions can enhance the features for the module helidon-testing-junit5-webserver to support additional protocols.">拡張機能は、モジュール<code>helidon-testing-junit5-webserver</code>の機能を強化して、追加のプロトコルをサポートできます。</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.43"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.41F7CH" title="原文 : You can create the following test to validate that the server returns the correct response:">次のテストを作成して、サーバーが正しいレスポンスを返すことをバリデートできます:</span></p>

<markup
lang="java"
title="Basic Helidon test framework usage."
>@ServerTest     <span class="conum" data-value="1" />
class IntegrationTest {

    private final Http1Client client;

    protected IntegrationTest(Http1Client client) { <span class="conum" data-value="2" />
        this.client = client;
    }

    @SetUpRoute <span class="conum" data-value="3" />
    static void routing(HttpRouting.Builder builder) {
        QuickstartMain.routing(builder);
    }

    @Test <span class="conum" data-value="4" />
    void testRootRoute() {
        try (Http1ClientResponse response = client.get("/greet")
                .request()) {   <span class="conum" data-value="5" />

            assertThat(response.status(), is(Http.Status.OK_200));  <span class="conum" data-value="6" />
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3mJdAm" title="原文 : Use @ServerTest to trigger the testing framework."><code>@ServerTest</code>を使用して、テスト・フレームワークをトリガーします。</span></li>
<li data-value="2"><span class="merged" id="all.MFe0Q" title="原文 : Inject Http1Client for the test.">テストに<code>Http1Client</code>をインジェクトします。</span></li>
<li data-value="3"><span class="merged" id="all.4KgkQn" title="原文 : SetUp routing for the test.">テストのSetUpルーティング。</span></li>
<li data-value="4"><span class="merged" id="all.1KMpdE" title="原文 : Regular JUnit test method.">通常の<code>JUnit</code>テスト・メソッド。</span></li>
<li data-value="5"><span class="merged" id="all.1MkuWQ" title="原文 : Call the client to obtain server response"><code>client</code>をコールしてサーバー・レスポンスを取得</span></li>
<li data-value="6"><span class="merged" id="all.1WYHfN" title="原文 : Perform the necessary assertions.">必要なアサーションを実行します。</span></li>
</ul>

<p><span class="merged" id="all.LXHcv" title="原文 : To trigger the framework to start and configure the server, annotate the testing class with the @ServerTest annotation.">フレームワークをトリガーしてサーバーを起動および構成するには、テスト・クラスに<code>@ServerTest</code>注釈を付けます。</span></p>

<p><span class="merged" id="all.3tmixH" title="原文 : In this test, the Http1Client client is used, which means that the framework will create, configure, and inject this object as a parameter to the constructor.">このテストでは、<code>Http1Client</code>クライアントが使用されます。つまり、フレームワークは、このオブジェクトをコンストラクタのパラメータとして作成、構成およびインジェクトします。</span></p>

<p><span class="merged" id="all.3S6At0.spl1" title="原文 : To set up routing, a static method annotated with @SetUpRoute is present.">ルーティングを設定するには、<code>@SetUpRoute</code>で注釈が付けられた静的メソッドが存在します。</span> <span class="merged" id="all.3S6At0.spl2" title="原文 : The framework uses this method to inject the configured routing to the subject of testing - in the current case, the Quickstart application.">フレームワークは、このメソッドを使用して、構成されたルーティングをテスト対象にインジェクト - 現在の場合は、<code>Quickstart</code>アプリケーションです。</span> </p>

<p><span class="merged" id="all.4NqvzY.spl1" title="原文 : As everything above is performed by the testing framework, regular unit tests can be done.">上記のすべてがテスト・フレームワークによって実行されるため、通常のユニット・テストを実行できます。</span> <span class="merged" id="all.4NqvzY.spl2" title="原文 : After completing all tests, the testing framework will shut down the server.">すべてのテストが完了すると、テスト・フレームワークによってサーバーが停止されます。</span> </p>


<h3 id="_routing_tests"><span class="merged" id="all.gCnKY" title="原文 : Routing Tests">ルーティング・テスト</span></h3>
<div class="section">
<p><span class="merged" id="all.2pDK7T.spl1" title="原文 : If there is no need to set up and run a server, a DirectClient client can be used.">サーバーを設定および実行する必要がない場合は、<code>DirectClient</code>クライアントを使用できます。</span> <span class="merged" id="all.2pDK7T.spl2" title="原文 : It is a testing client that bypasses HTTP transport and directly invokes the router.">HTTPトランスポートをバイパスし、ルーターを直接呼び出すテスト・クライアントです。</span> </p>

<markup
lang="java"
title="Routing test using <code>@RoutingTest</code> and <code>DirectClient</code>."
>@RoutingTest    <span class="conum" data-value="1" />
class RoutingTest {

    private final Http1Client client;

    protected RoutingTest(DirectClient client) { <span class="conum" data-value="2" />
        this.client = client;
    }

    @SetUpRoute <span class="conum" data-value="3" />
    static void routing(HttpRouting.Builder builder) {
        QuickstartMain.routing(builder);
    }

    @Test <span class="conum" data-value="4" />
    void testRootRoute() {
        try (Http1ClientResponse response = client.get("/greet")
                .request()) {   <span class="conum" data-value="5" />

            JsonObject json = response.as(JsonObject.class);    <span class="conum" data-value="6" />
            assertThat(json.getString("message"), is("Hello World!"));
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Ttan0" title="原文 : Use @RoutingTest to trigger the testing framework."><code>@RoutingTest</code>を使用して、テスト・フレームワークをトリガーします。</span></li>
<li data-value="2"><span class="merged" id="all.3C3hCm" title="原文 : Inject DirectClient for the test.">テストに<code>DirectClient</code>をインジェクトします。</span></li>
<li data-value="3"><span class="merged" id="all.4KgkQn.1" title="原文 : SetUp routing for the test.">テストのSetUpルーティング。</span></li>
<li data-value="4"><span class="merged" id="all.38jxZ9" title="原文 : A regular JUnit test method.">通常の<code>JUnit</code>テスト・メソッド。</span></li>
<li data-value="5"><span class="merged" id="all.4U3TW" title="原文 : Call the client to obtain server response."><code>client</code>をコールして、サーバー・レスポンスを取得します。</span></li>
<li data-value="6"><span class="merged" id="all.1WYHfN.1" title="原文 : Perform the necessary assertions.">必要なアサーションを実行します。</span></li>
</ul>

<p><span class="merged" id="all.4Jbiy6.spl1" title="原文 : If only routing tests are required, this is a &quot;lighter&quot; way of testing because the framework will not configure and run the full Helidon server.">ルーティング・テストのみが必要な場合、フレームワークは完全なHelidonサーバーを構成および実行しないため、これはより軽いテスト方法です。</span> <span class="merged" id="all.4Jbiy6.spl2" title="原文 : This way, no real ports will be opened.">このようにして、実際のポートは開かれません。</span> <span class="merged" id="all.4Jbiy6.spl3" title="原文 : All the communication will be done through DirectClient, which makes the tests very effective.">すべての通信は、<code>DirectClient</code>を介して行われます。これにより、テストが非常に有効になります。</span> </p>

<p><span class="merged" id="all.42LCmX.spl1" title="原文 : It is required to annotate the test class with the @RoutingTest annotation to trigger the server to do the configuration.">構成を行うためにサーバーをトリガーするには、テスト・クラスに<code>@RoutingTest</code>注釈を付ける必要があります。</span> <span class="merged" id="all.42LCmX.spl2" title="原文 : Thus, it will inject the DirectClient client, which can then be used in unit tests.">したがって、DirectClientクライアントをインジェクトし、ユニット・テストで使用できます。</span> </p>

<p><span class="merged" id="all.2wFpCQ" title="原文 : Routing is configured the same way as in full server testing using the @SetUpRoute annotation.">ルーティングは、<code>@SetUpRoute</code>注釈を使用したフル・サーバー・テストの場合と同じように構成されます。</span></p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.33"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_websocket_testing"><span class="merged" id="all.2b0i6s" title="原文 : WebSocket Testing">WebSocketテスト</span></h3>
<div class="section">
<p><span class="merged" id="all.1TbYTV.spl1" title="原文 : If WebSocket testing is required, there is an additional module for it.">WebSocketテストが必要な場合は、追加のモジュールがあります。</span> <span class="merged" id="all.1TbYTV.spl2" title="原文 : It is necessary to include the following Maven dependency to the Project’s pom file:">プロジェクトのpomファイルへの次のMaven依存関係を含める必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.testing.junit5&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-testing-junit5-websocket&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_websocket_testing_example"><span class="merged" id="all.Wccd0" title="原文 : WebSocket Testing Example">WebSocketテストの例</span></h3>
<div class="section">
<p><span class="merged" id="all.mdM7A" title="原文 : The WebSocket Testing extension adds support for routing configuration and injection of WebSocket related artifacts, such as WebSockets and DirectWsClient in Helidon unit tests.">WebSocketテスト拡張機能は、Helidonユニット・テストのWebSocketsやDirectWsClientなど、WebSocket関連のアーティファクトのルーティング構成およびインジェクションのサポートを追加します。</span></p>

<markup
lang="java"
title="WebSocket sample test."
>@ServerTest
class WsSocketTest {

    private static final ServerSideListener WS_LISTENER = new ServerSideListener();

    private final WsClient wsClient;    <span class="conum" data-value="1" />

    protected WsSocketTest(WsClient wsClient) {
        this.wsClient = wsClient;
    }

    @SetUpRoute
    static void routing(WsRouting.Builder ws) { <span class="conum" data-value="2" />
        ws.endpoint("/testWs", WS_LISTENER);
    }

    @Test
    void testWsEndpoint() { <span class="conum" data-value="3" />
        WS_LISTENER.reset();

        ClientSideListener clientListener = new ClientSideListener();
        wsClient.connect("/testWs", clientListener);    <span class="conum" data-value="4" />

        assertThat(clientListener.message, is("ws"));   <span class="conum" data-value="5" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.MaWQp" title="原文 : Declare WsClient and later inject it in the constructor."><code>WsClient</code>を宣言し、後でコンストラクタにインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.shdc5" title="原文 : Using @SetUpRoute, create WebSocket routing and assign a serverside listener.">@SetUpRouteを使用して、WebSocketルーティングを作成し、サーバー側リスナーを割り当てます。</span></li>
<li data-value="3"><span class="merged" id="all.9bVkI" title="原文 : Test the WebSocket endpoint using the regular @Test annotation.">通常の@Test注釈を使用して、WebSocketエンドポイントをテストします。</span></li>
<li data-value="4"><span class="merged" id="all.4OJNcu" title="原文 : Create and assign the clientside listener.">クライアント側のリスナーを作成して割り当てます。</span></li>
<li data-value="5"><span class="merged" id="all.1ReSsZ" title="原文 : Check if the received message is correct.">受信したメッセージが正しいかどうかを確認します。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.20"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.hDceZ.spl1" title="原文 : The WebSocket ClientSideListener is a helper class that implements WsListener.">WebSocket <code>ClientSideListener</code>は、<code>WsListener</code>を実装するヘルパー・クラスです。</span> <span class="merged" id="all.hDceZ.spl2" title="原文 : ClientSideListener is very simple and as shown below:"><code>ClientSideListener</code>は非常に単純で、次に示すように:</span> </p>

<markup
lang="java"
title="<code>ClientSideListener</code> helper class."
>private static class ClientSideListener implements WsListener {
    private final CountDownLatch cdl = new CountDownLatch(1);
    private String message;
    private volatile Throwable throwable;

    @Override
    public void onOpen(WsSession session) { <span class="conum" data-value="1" />
        session.send("hello", true);
    }

    @Override
    public void onMessage(WsSession session, String text, boolean last) {   <span class="conum" data-value="2" />
        this.message = text;
        session.close(WsCloseCodes.NORMAL_CLOSE, "End");
    }

    @Override
    public void onClose(WsSession session, int status, String reason) { <span class="conum" data-value="3" />
        cdl.countDown();
    }

    @Override
    public void onError(WsSession session, Throwable t) {   <span class="conum" data-value="4" />
        this.throwable = t;
        cdl.countDown();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.33Hky5" title="原文 : Send &quot;Hello&quot; when a connection is opened.">接続がオープンされたときに「Hello」を送信します。</span></li>
<li data-value="2"><span class="merged" id="all.3BQkyA" title="原文 : Save the message when received and close the connection.">受信時にメッセージを保存し、接続を閉じます。</span></li>
<li data-value="3"><span class="merged" id="all.1TYOEv"  title="原文:: Close the connection.">接続を切断します。</span></li>
<li data-value="4"><span class="merged" id="all.15ssHB" title="原文 : React on an error.">エラーに対処します。</span></li>
</ul>

<p><span class="merged" id="all.1RoY5a" title="原文 : The WebSocket ClientSideListener is also a helper class that implements WsListener and is very straightforward:">WebSocket <code>ClientSideListener</code>は、<code>WsListener</code>を実装するヘルパー・クラスでもあり、非常に簡単です:</span></p>

<markup
lang="java"
title="<code>ServerSideListener</code> helper class."
>private static class ServerSideListener implements WsListener {
    boolean opened;
    boolean closed;
    String message;

    @Override
    public void onMessage(WsSession session, String text, boolean last) {   <span class="conum" data-value="1" />
        message = text;
        session.send("ws", true);
    }

    @Override
    public void onClose(WsSession session, int status, String reason) {     <span class="conum" data-value="2" />
        closed = true;
    }

    @Override
    public void onOpen(WsSession session) {     <span class="conum" data-value="3" />
        opened = true;
    }

    void reset() {          <span class="conum" data-value="4" />
        opened = false;
        closed = false;
        message = null;
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4YOcK7" title="原文 : Send &quot;ws&quot; on a received message.">受信したメッセージに「ws」を送信します。</span></li>
<li data-value="2"><span class="merged" id="all.2TCpz4" title="原文 : Called when the connection is called.">接続が呼び出されたときに呼び出されます。</span></li>
<li data-value="3"><span class="merged" id="all.1S6yqm" title="原文 : Called on connection is opened.">接続が開いているときに呼び出されます。</span></li>
<li data-value="4"><span class="merged" id="all.2DWkbd" title="原文 : Used to reset the state.">状態をリセットするために使用します。</span></li>
</ul>
</p>
</div>

<p><span class="merged" id="all.1ftq0Y.spl1" title="原文 : The testing class should be annotated with @RoutingTest only if routing tests are required without real port opening.">テスト・クラスに<code>@RoutingTest</code>の注釈を付ける必要があるのは、実際のポートを開かずにルーティング・テストが必要な場合のみです。</span> <span class="merged" id="all.1ftq0Y.spl2" title="原文 : Instead of WsClient, use DirectWsClient."><code>WsClient</code>のかわりに、<code>DirectWsClient</code>を使用します。</span> </p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.27"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1yTl5B.2" title="原文 : JUnit 5 User Guide"><a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank">JUnit 5ユーザー・ガイド</a></span></p>

</li>
</ul>

</div>

</doc-view>
