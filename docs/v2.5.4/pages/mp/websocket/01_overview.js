<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3AaYXY" title="原文 : WebSocket Introduction">WebSocket概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3vyP0t.spl1" title="原文 : Helidon integrates with Tyrus to provide support for the Jakarta WebSocket API.">Helidonは、<a href="https://projects.eclipse.org/projects/ee4j.tyrus" id="" target="_blank" >Tyrus</a>と統合して<a href="https://projects.eclipse.org/projects/ee4j.websocket" id="" target="_blank" >Jakarta WebSocket API</a>をサポートします。</span> <span class="merged" id="all.3vyP0t.spl2" title="原文 : The WebSocket API enables Java applications to participate in WebSocket interactions as both servers and clients.">WebSocket APIを使用すると、Javaアプリケーションは、サーバーとクライアントの両方としてWebSocketインタラクションに参加できます。</span> <span class="merged" id="all.3vyP0t.spl3" title="原文 : The server API supports two flavors: annotated and programmatic endpoints.">サーバーAPIは2つのフレーバをサポートしています: 注釈付きエンドポイントおよびプログラム的なエンドポイント。</span> </p>

<p><span class="merged" id="all.1eW7nH.spl1" title="原文 : Annotated endpoints, as suggested by their name, use Java annotations to provide the necessary meta-data to define WebSocket handlers; programmatic endpoints implement API interfaces and are annotation free.">注釈付きエンドポイントは、名前で示されているように、Java注釈を使用して、WebSocketハンドラの定義に必要なメタデータを提供します。プログラム的なエンドポイントはAPIインタフェースを実装し、注釈は不要です。</span> <span class="merged" id="all.1eW7nH.spl2" title="原文 : Annotated endpoints tend to be more flexible since they allow different method signatures depending on the application needs, whereas programmatic endpoints must implement an interface and are, therefore, bounded to its definition.">アノテーション付きエンドポイントは、アプリケーションのニーズに応じて異なるメソッド・シグネチャを許可する傾向がありますが、プログラム的なエンドポイントはインタフェースを実装する必要があるため、その定義にバインドされます。</span> </p>

<p><span class="merged" id="all.3UOloG.spl1" title="原文 : Helidon MP support is centered around annotations and bean discovery using CDI.">Helidon MPのサポートは、CDIを使用した注釈およびBeanの検出を中心としています。</span> <span class="merged" id="all.3UOloG.spl2" title="原文 : Developers can choose between annotated and programmatic endpoints or use any combination of them.">開発者は、アノテーション付きエンドポイントとプログラム的なエンドポイントのいずれかを選択することも、それらを任意に組み合せて使用することもできます。</span> <span class="merged" id="all.3UOloG.spl3" title="原文 : Using annotated endpoints is recommended in MP as they usually result in more succinct and easier-to-read code.">MPでは、注釈付きエンドポイントを使用することをお薦めします。これは、通常、エンドポイントを使用するとコードがより簡潔になり、読みやすくなるためです。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_helidon_mp_example"><span class="merged" id="all.3X4poz" title="原文 : Helidon MP Example">Helidon MPの例</span></h2>
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

<p><span class="merged" id="all.3pWZ8V" title="原文 : For more information see the example.">詳細は、<a href="https://github.com/oracle/helidon/tree/master/examples/webserver/websocket" id="" target="_blank" >example</a>を参照してください。</span></p>

</div>
</doc-view>
