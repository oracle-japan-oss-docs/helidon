<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.34"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.32" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.27" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.25" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.14" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.25" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.17" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.48"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1jA9TS" title="原文 : Helidon integrates with Tyrus to provide support for the Jakarta WebSocket API.">Helidonは、<a href="https://projects.eclipse.org/projects/ee4j.tyrus" target="_blank">Tyrus</a>と統合して<a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html" target="_blank">Jakarta WebSocket API</a>をサポートします。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.33"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.C1dTM" title="原文 : To enable Jakarta Websocket add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Jakarta Websocketを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.websocket&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-websocket&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.32"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.2qgcID.spl1" title="原文 : The WebSocket API enables Java applications to participate in WebSocket interactions as both servers and clients.">WebSocket APIを使用すると、Javaアプリケーションは、サーバーとクライアントの両方としてWebSocketインタラクションに参加できます。</span> <span class="merged" id="all.2qgcID.spl2" title="原文 : The server API supports two flavors: annotated and programmatic endpoints.">サーバーAPIは2つのフレーバをサポートしています: 注釈付きエンドポイントおよびプログラム的なエンドポイント。</span> </p>

<p><span class="merged" id="all.1eW7nH.spl1" title="原文 : Annotated endpoints, as suggested by their name, use Java annotations to provide the necessary meta-data to define WebSocket handlers; programmatic endpoints implement API interfaces and are annotation free.">注釈付きエンドポイントは、名前で示されているように、Java注釈を使用して、WebSocketハンドラの定義に必要なメタデータを提供します。プログラム的なエンドポイントはAPIインタフェースを実装し、注釈は不要です。</span> <span class="merged" id="all.1eW7nH.spl2" title="原文 : Annotated endpoints tend to be more flexible since they allow different method signatures depending on the application needs, whereas programmatic endpoints must implement an interface and are, therefore, bounded to its definition.">アノテーション付きエンドポイントは、アプリケーションのニーズに応じて異なるメソッド・シグネチャを許可する傾向がありますが、プログラム的なエンドポイントはインタフェースを実装する必要があるため、その定義にバインドされます。</span> </p>

<p><span class="merged" id="all.3UOloG.spl1" title="原文 : Helidon MP support is centered around annotations and bean discovery using CDI.">Helidon MPのサポートは、CDIを使用した注釈およびBeanの検出を中心としています。</span> <span class="merged" id="all.3UOloG.spl2" title="原文 : Developers can choose between annotated and programmatic endpoints or use any combination of them.">開発者は、アノテーション付きエンドポイントとプログラム的なエンドポイントのいずれかを選択することも、それらを任意に組み合せて使用することもできます。</span> <span class="merged" id="all.3UOloG.spl3" title="原文 : Using annotated endpoints is recommended in MP as they usually result in more succinct and easier-to-read code.">MPでは、注釈付きエンドポイントを使用することをお薦めします。これは、通常、エンドポイントを使用するとコードがより簡潔になり、読みやすくなるためです。</span> </p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.16"  title="原文:: API">API</span></h2>
<div class="section">

<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 75%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG.8"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.4JM9z7.28"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.14wZ2H"  title="原文: @ServerEndpoint">@ServerEndpoint</span></td>
<td class=""><span class="merged" id="all.UQuDl.spl1" title="原文 : This class level annotation declares that the class it decorates is a web socket endpoint that will be deployed and made available in the URI-space of a web socket server.">このクラス・レベルの注釈は、装飾するクラスがwebソケット・エンドポイントであることを宣言します。このエンドポイントはデプロイされ、Webソケット・サーバーのURI空間で使用可能になります。</span> <span class="merged" id="all.UQuDl.spl2" title="原文 : The annotation allows the developer to define the URL (or URI template) which this endpoint will be published, and other important properties of the endpoint to the websocket runtime, such as the encoders it uses to send messages.">注釈を使用すると、開発者は、このエンドポイントが公開されるURL (またはURIテンプレート)と、メッセージの送信に使用するエンコーダなど、エンドポイントの他の重要なプロパティをwebsocketランタイムに定義できます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UKWG8"  title="原文: @ClientEndpoint">@ClientEndpoint</span></td>
<td class=""><span class="merged" id="all.1Rhclu.spl1" title="原文 : The ClientEndpoint annotation, a class level annotation, is used to denote that a POJO is a web socket client and can be deployed as such.">ClientEndpoint注釈(クラス・レベルの注釈)は、POJOがwebソケット・クライアントであることを示すために使用され、そのようにデプロイできます。</span> <span class="merged" id="all.1Rhclu.spl2" title="原文 : Similar to @ServerEndpoint, POJOs that are annotated with this annotation can have methods that, using the web socket method level annotations, are web socket lifecycle methods."><code>@ServerEndpoint</code>と同様に、この注釈で注釈付けされたPOJOには、webソケット・メソッド・レベルの注釈を使用してWebソケットのライフサイクル・メソッドであるメソッドを含めることができます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fMFjI"  title="原文: @OnOpen">@OnOpen</span></td>
<td class=""><span class="merged" id="all.Ga3Vg" title="原文 : This method level annotation can be used to decorate a Java method that will be called when a new web socket session is open.">このメソッド・レベルの注釈を使用すると、新しいwebソケット・セッションが開いているときに呼び出されるJavaメソッドを装飾できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1hh2ii"  title="原文: @OnMessage">@OnMessage</span></td>
<td class=""><span class="merged" id="all.1BNVm4.spl1" title="原文 : This method level annotation can be used to make a Java method receive incoming web socket messages.">このメソッド・レベルの注釈を使用して、Javaメソッドが受信webソケット・メッセージを受信するようにできます。</span> <span class="merged" id="all.1BNVm4.spl2" title="原文 : Each websocket endpoint may only have one message handling method for each of the native websocket message formats: text, binary and pong.">各webSocketエンドポイントには、ネイティブのwebsocketメッセージ・フォーマットごとに1つのメッセージ処理メソッドのみを指定できます: text、binaryおよびpong。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kZqCM"  title="原文: @OnError">@OnError</span></td>
<td class=""><span class="merged" id="all.4ep9dX" title="原文 : This method level annotation can be used to decorate a Java method that will be called in order to handle errors.">このメソッド・レベルの注釈を使用すると、エラーを処理するためにコールされるJavaメソッドを装飾できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3yF4Wh"  title="原文: @OnClose">@OnClose</span></td>
<td class=""><span class="merged" id="all.hnBBr" title="原文 : This method level annotation can be used to decorate a Java method that will be called when a web socket session is closing.">このメソッド・レベルの注釈は、webソケット・セッションのクローズ時に呼び出されるJavaメソッドを装飾するために使用できます。</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.28"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.kB3e7.spl1" title="原文 : This section describes the implementation of a simple application that uses a REST resource to push messages into a shared queue and a WebSocket endpoint to download messages from the queue, one at a time, over a connection.">この項では、RESTリソースを使用して共有キューにメッセージをプッシュし、WebSocketエンドポイントを使用してキューから接続を介して一度にメッセージをダウンロードする単純なアプリケーションの実装について説明します。</span> <span class="merged" id="all.kB3e7.spl2" title="原文 : The example will show how REST and WebSocket connections can be seamlessly combined into a Helidon application.">この例では、REST接続とWebSocket接続をHelidonアプリケーションにシームレスに結合する方法を示します。</span> </p>

<p><span class="merged" id="all.4GrlyE" title="原文 : The Helidon MP application shown here takes full advantage of CDI and class scanning and does not require any additional code given that the necessary information is available from the code annotations.">ここに示すHelidon MPアプリケーションはCDIおよびクラス・スキャンを最大限に活用しており、必要な情報がコード注釈から入手できる場合は追加のコードを必要としません。</span></p>

<p><span class="merged" id="all.1pIPBW" title="原文 : The REST endpoint is implemented as a JAX-RS resource, and the shared queue (in application scope) is directly injected:">RESTエンドポイントはJAX-RSリソースとして実装され、共有キュー(アプリケーション・スコープ内)は直接インジェクトされます:</span></p>

<markup
lang="java"

>@Path("rest")
public class MessageQueueResource {

    @Inject
    private MessageQueue messageQueue;

    @POST
    @Consumes("text/plain")
    public void push(String s) {
        messageQueue.push(s);
    }
}</markup>

<p><span class="merged" id="all.2Flkiu" title="原文 : Here we opt for the use of an annotated WebSocket endpoint decorated by @ServerEndpoint that provides all the meta-data necessary for Helidon to create the endpoint.">ここでは、Helidonがエンドポイントを作成するために必要なすべてのメタデータを提供する、<code>@ServerEndpoint</code>によって修飾された注釈付きWebSocketエンドポイントの使用を選択します。</span></p>

<markup
lang="java"

>@ServerEndpoint(
        value = "/websocket",
        encoders = { UppercaseEncoder.class })
public class MessageBoardEndpoint {

    @Inject
    private MessageQueue messageQueue;

    @OnMessage
    public void onMessage(Session session, String message) {
        if (message.equals("SEND")) {
            while (!messageQueue.isEmpty()) {
                session.getBasicRemote().sendObject(messageQueue.pop());
            }
        }
    }
}</markup>

<p><span class="merged" id="all.2BRQtG.spl1" title="原文 : Since MessageBoardEndpoint is just a POJO, it uses additional annotations for event handlers such as @OnMessage."><code>MessageBoardEndpoint</code>は単なるPOJOであるため、<code>@OnMessage</code>などのイベント・ハンドラに追加の注釈を使用します。</span> <span class="merged" id="all.2BRQtG.spl2" title="原文 : One advantage of this approach, much like in the JAX-RS API, is that method signatures are not fixed.">JAX-RS APIと同様に、このアプローチの利点の1つは、メソッド・シグネチャが修正されていないことです。</span> <span class="merged" id="all.2BRQtG.spl3" title="原文 : In the snipped above, the parameters (which could be specified in any order!) include the WebSocket session and the message received that triggered the call.">前述のスニペットで、パラメータ(任意の順序で指定可能)には、WebSocketセッションおよびコールをトリガーした受信メッセージが含まれます。</span> </p>

<p><span class="merged" id="all.2AQbgz.spl1" title="原文 : So what else is needed to run this Helidon MP app?">それでは、このHelidon MPアプリケーションを実行するには他に何が必要ですか。</span> <span class="merged" id="all.2AQbgz.spl2" title="原文 : Nothing else other than the supporting classes MessageQueue and UppercaseEncoder."><code>MessageQueue</code>および<code>UppercaseEncoder</code>をサポートするクラス以外には何もありません。</span> <span class="merged" id="all.2AQbgz.spl3" title="原文 : Helidon MP declares both @Path and @ServerEndpoint as bean defining annotation, so all that is needed is for CDI discovery to be enabled --typically in your beans.xml file.">Helidon MPでは、<code>@Path</code>と<code>@ServerEndpoint</code>の両方をBean定義注釈として宣言しているため、CDI検出を有効にするために必要なのは、通常は<code>beans.xml</code>ファイルのみです。</span> </p>

<p><span class="merged" id="all.4gP56c.spl1" title="原文 : By default, both JAX-RS resources and WebSocket endpoints will be available under the root path &quot;/&quot;.">デフォルトでは、JAX-RSリソースとWebSocketエンドポイントの両方を<em>「ルート・パス」</em> <code>"/"</code>で使用できます。</span> <span class="merged" id="all.4gP56c.spl2" title="原文 : This default value can be overridden by providing subclasses/implementations for jakarta.ws.rs.Application and jakarta.websocket.server.ServerApplicationConfig, respectively.">このデフォルト値は、<code>jakarta.ws.rs.Application</code>および<code>jakarta.websocket.server.ServerApplicationConfig</code>のサブクラス/実装をそれぞれ指定することでオーバーライドできます。</span> <span class="merged" id="all.4gP56c.spl3" title="原文 : JAX-RS uses @ApplicationPath on application subclasses to provide this root path, but since there is no equivalent in the WebSocket API, Helidon MP uses its own annotation @RoutingPath on jakarta.websocket.server.ServerApplicationConfig implementations.">JAX-RSは、このルート・パスを提供するためにアプリケーション・サブクラスで<code>@ApplicationPath</code>を使用しますが、WebSocket APIには同等のものがないため、Helidon MPは<code>jakarta.websocket.server.ServerApplicationConfig</code>実装で独自の注釈<code>@RoutingPath</code>を使用します。</span> </p>

<p><span class="merged" id="all.3tV5Vq" title="原文 : For instance, if in our example we include the following class:">たとえば、この例に次のクラスが含まれているとします:</span></p>

<markup
lang="java"

>@ApplicationScoped
@RoutingPath("/web")
public class MessageBoardApplication implements ServerApplicationConfig {
    @Override
    public Set&lt;ServerEndpointConfig&gt; getEndpointConfigs(
            Set&lt;Class&lt;? extends Endpoint&gt;&gt; endpoints) {
        assert endpoints.isEmpty();
        return Collections.emptySet();      // No programmatic endpoints
    }

    @Override
    public Set&lt;Class&lt;?&gt;&gt; getAnnotatedEndpointClasses(Set&lt;Class&lt;?&gt;&gt; endpoints) {
        return endpoints;       // Returned scanned endpoints
    }
}</markup>

<p><span class="merged" id="all.3L3lwW.spl1" title="原文 : the root path for WebSocket endpoints will be &quot;/web&quot; instead of the default &quot;/&quot;.">WebSocketエンドポイントのルート・パスは、デフォルトの<code>"/"</code>ではなく<code>"/web"</code>になります。</span> <span class="merged" id="all.3L3lwW.spl2" title="原文 : Note that @RoutingPath is not a bean defining annotation, thus the need to use @ApplicationScoped --which, as before, requires CDI bean discovery mode to be annotated."><code>@RoutingPath</code>はBean定義の注釈では<em>「ない」</em>ため、以前と同様にCDI Bean検出モードが<code>annotated</code>である必要がある<code>@ApplicationScoped</code>を使用する必要があります。</span> <span class="merged" id="all.3L3lwW.spl3" title="原文 : In addition to @RoutingPath, these classes can be annotated with @RoutingName to associate an endpoint with a Helidon named socket."><code>@RoutingPath</code>に加えて、これらのクラスに<code>@RoutingName</code>の注釈を付けて、エンドポイントをHelidon名前付きソケットに関連付けることができます。</span> <span class="merged" id="all.3L3lwW.spl4" title="原文 : Please refer to the Javadoc of that annotation for additional information.">詳細は、その注釈のJavadocを参照してください。</span> </p>

<p><span class="merged" id="all.2Sic3a.spl1" title="原文 : All endpoint methods in Helidon MP are executed in a separate thread pool, independently of Netty.">Helidon MPのすべてのエンドポイント・メソッドは、Nettyとは別に個別のスレッド・プールで実行されます。</span> <span class="merged" id="all.2Sic3a.spl2" title="原文 : Therefore, there is no need to create additional threads for blocking or long-running operations as these will not affect Netty&rsquo;s ability to process networking data.">したがって、Nettyがネットワーキング・データを処理する機能に影響を与えないため、ブロック操作または長時間実行操作用に追加のスレッドを作成する必要はありません。</span> </p>

<p><span class="merged" id="all.1wkVp5" title="原文 : For more information see the example.">詳細は、<a href="https://github.com/oracle/helidon/tree/master/examples/webserver/websocket" target="_blank">example</a>を参照してください。</span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.17"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2JA6KS" title="原文 : Eclipse Tyrus"><a href="https://projects.eclipse.org/proposals/eclipse-tyrus" target="_blank">Eclipseタイ・ラス</a></span></p>

</li>
<li>
<p><span class="merged" id="all.19QdG4" title="原文 : WebSocket RFC 6455"><a href="https://datatracker.ietf.org/doc/html/rfc6455" target="_blank">WebSocket RFC 6455</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2ccF0A" title="原文 : Helidon MicroProfile Tyrus Javadoc"><a href="./apidocs/io.helidon.microprofile.tyrus/module-summary.html" target="_blank">Helidon MicroProfile Tyrus Javadoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
