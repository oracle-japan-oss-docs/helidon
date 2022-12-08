<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.68"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.65" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.50" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1yTAQJ" title="原文 : Example"><router-link @click.native="this.scrollFix('#_example')" to="#_example">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.26" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.89"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2zmQpf.spl1" title="原文 : Helidon integrates with Tyrus to provide support for the Jakarta WebSocket API.">Helidonは、<a href="https://projects.eclipse.org/projects/ee4j.tyrus" target="_blank">Tyrus</a>と統合して<a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html" target="_blank">Jakarta WebSocket API</a>をサポートします。</span> <span class="merged" id="all.2zmQpf.spl2" title="原文 : The WebSocket API enables Java applications to participate in WebSocket interactions as both servers and clients.">WebSocket APIを使用すると、Javaアプリケーションは、サーバーとクライアントの両方としてWebSocketインタラクションに参加できます。</span> <span class="merged" id="all.2zmQpf.spl3" title="原文 : The server API supports two flavors: annotated and programmatic endpoints.">サーバーAPIは2つのフレーバをサポートしています: 注釈付きエンドポイントおよびプログラム的なエンドポイント。</span> </p>

<p><span class="merged" id="all.1eW7nH.1.spl1" title="原文 : Annotated endpoints, as suggested by their name, use Java annotations to provide the necessary meta-data to define WebSocket handlers; programmatic endpoints implement API interfaces and are annotation free.">注釈付きエンドポイントは、名前で示されているように、Java注釈を使用して、WebSocketハンドラの定義に必要なメタデータを提供します。プログラム的なエンドポイントはAPIインタフェースを実装し、注釈は不要です。</span> <span class="merged" id="all.1eW7nH.1.spl2" title="原文 : Annotated endpoints tend to be more flexible since they allow different method signatures depending on the application needs, whereas programmatic endpoints must implement an interface and are, therefore, bounded to its definition.">アノテーション付きエンドポイントは、アプリケーションのニーズに応じて異なるメソッド・シグネチャを許可する傾向がありますが、プログラム的なエンドポイントはインタフェースを実装する必要があるため、その定義にバインドされます。</span> </p>

<p><span class="merged" id="all.1wQoka" title="原文 : Helidon SE support is based on the WebSocketRouting class which enables Helidon application to configure routing for both annotated and programmatic WebSocket endpoints.">Helidon SEサポートは、<code>WebSocketRouting</code>クラスに基づいており、これにより、Helidonアプリケーションが注釈付きおよびプログラム的なWebSocketエンドポイントの両方のルーティングを構成できます。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.68"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.18Po3R" title="原文 : To enable {feature-name} add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">{feature-name} を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-websocket&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_example"><span class="merged" id="all.2xA7W7.5"  title="原文:: Example">例</span></h2>
<div class="section">
<p><span class="merged" id="all.3CfXDZ.spl1" title="原文 : This section describes the implementation of a simple application that uses a REST resource to push messages into a shared queue and a programmatic WebSocket endpoint to download messages from the queue, one at a time, over a connection.">この項では、RESTリソースを使用して共有キューにメッセージをプッシュし、プログラム的なWebSocketエンドポイントを使用して接続を介して一度にキューからメッセージをダウンロードする単純なアプリケーションの実装について説明します。</span> <span class="merged" id="all.3CfXDZ.spl2" title="原文 : The example will show how REST and WebSocket connections can be seamlessly combined into a Helidon application.">この例では、REST接続とWebSocket接続をHelidonアプリケーションにシームレスに結合する方法を示します。</span> </p>

<p><span class="merged" id="all.4B0SIa.spl1" title="原文 : The complete Helidon SE example is available here.">完全なHelidon SEの例は、<a href="https://github.com/oracle/helidon/tree/master/examples/webserver/websocket" target="_blank">「こちら」</a>で入手できます。</span> <span class="merged" id="all.4B0SIa.spl2" title="原文 : Let us start by looking at MessageQueueService:">まず、<code>MessageQueueService</code>について見てみましょう:</span> </p>

<markup
lang="java"

>public class MessageQueueService implements Service {

    private final MessageQueue messageQueue = MessageQueue.instance();

    @Override
    public void update(Routing.Rules routingRules) {
        routingRules.post("/board", this::handlePost);
    }

    private void handlePost(ServerRequest request, ServerResponse response) {
        request.content()
                .as(String.class)
                .thenAccept(it -&gt; {
                    messageQueue.push(it);
                    response.status(204).send();
                });
    }
}</markup>

<p><span class="merged" id="all.wMIqP.spl1" title="原文 : This class exposes a REST resource where messages can be posted.">このクラスは、メッセージを投稿できるRESTリソースを公開します。</span> <span class="merged" id="all.wMIqP.spl2" title="原文 : Upon receiving a message, it simply pushes it into a shared queue and returns 204 (No Content).">メッセージを受信すると、メッセージは共有キューにプッシュされ、204 (No Content)が返されます。</span> </p>

<p><span class="merged" id="all.4NuElu" title="原文 : Messages pushed into the queue can be obtained by opening a WebSocket connection served by MessageBoardEndpoint:">キューにプッシュされたメッセージは、<code>MessageBoardEndpoint</code>が処理するWebSocket接続をオープンすることで取得できます:</span></p>

<markup
lang="java"

>public class MessageBoardEndpoint extends Endpoint {

    private final MessageQueue messageQueue = MessageQueue.instance();

    @Override
    public void onOpen(Session session, EndpointConfig endpointConfig) {
        session.addMessageHandler(new MessageHandler.Whole&lt;String&gt;() {
            @Override
            public void onMessage(String message) {
                try {
                    // Send all messages in the queue
                    if (message.equals("SEND")) {
                        while (!messageQueue.isEmpty()) {
                            session.getBasicRemote().sendObject(messageQueue.pop());
                        }
                    }
                } catch (Exception e) {
                    // handle exception
                }
            }
        });
    }
}</markup>

<p><span class="merged" id="all.PmW9.spl1" title="原文 : This is an example of a programmatic endpoint that extends Endpoint.">これは、<code>Endpoint</code>を拡張するプログラム的なエンドポイントの例です。</span> <span class="merged" id="all.PmW9.spl2" title="原文 : The method onOpen will be invoked for every new connection.">メソッド<code>onOpen</code>は、新しい接続のたびに起動されます。</span> <span class="merged" id="all.PmW9.spl3" title="原文 : In this example, the application registers a message handler for strings, and when the special SEND message is received, it empties the shared queue sending messages one at a time over the WebSocket connection.">この例では、アプリケーションは文字列のメッセージ・ハンドラを登録し、特別な<code>SEND</code>メッセージを受信すると、WebSocket接続を介して一度にメッセージを送信する共有キューを空にします。</span> </p>

<p><span class="merged" id="all.Im2M4.spl1" title="原文 : In Helidon SE, REST and WebSocket classes need to be manually registered into the web server.">Helidon SEでは、RESTおよびWebSocketクラスをwebサーバーに手動で登録する必要があります。</span> <span class="merged" id="all.Im2M4.spl2" title="原文 : This is accomplished via a Routing builder:">これは、<code>Routing</code>ビルダーを介して実行されます:</span> </p>

<markup
lang="java"

>List&lt;Class&lt;? extends Encoder&gt;&gt; encoders =
    Collections.singletonList(UppercaseEncoder.class);

WebServer server = WebServer.builder()
        .port(8080)
        .routing(r -&gt; r
                .register("/web", StaticContentSupport.builder("/WEB")
                        .welcomeFileName("index.html")
                        .build())
                .register("/rest", new MessageQueueService())
        )
        .addRouting(WebSocketRouting.builder()
                .endpoint("/websocket", ServerEndpointConfig.Builder.create(MessageBoardEndpoint.class, "/board")
                        .encoders(encoders)
                        .build())
                .build()
        )
        .build()</markup>

<p><span class="merged" id="all.2ev7nK.spl1" title="原文 : This code snippet uses multiple builders for Routing, WebSocketRouting and ServerEndpointConfig.">このコード・スニペットでは、<code>Routing</code>、<code>WebSocketRouting</code>および<code>ServerEndpointConfig</code>に複数のビルダーを使用します。</span> <span class="merged" id="all.2ev7nK.spl2" title="原文 : In particular, it registers MessageBoardEndpoint.class at &quot;/websocket/board&quot; and associates with it a message encoder.">特に、<code>"/websocket/board"</code>で<code>MessageBoardEndpoint.class</code>を登録し、<em>「メッセージ・エンコーダ」</em>に関連付けます。</span> <span class="merged" id="all.2ev7nK.spl3" title="原文 : For more information on message encoders and decoders the reader see the websocket specification; in this example, UppercaseEncoder.class simply uppercases every message sent from the server.">メッセージ・エンコーダおよびデコーダの詳細は、<a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html" target="_blank">「websocket仕様」</a>を参照してください。この<a href="https://github.com/oracle/helidon/tree/master/examples/webserver/websocket" target="_blank">example</a>では、<code>UppercaseEncoder.class</code>は単にサーバーから送信されたすべてのメッセージを大文字にします。</span> </p>

<p><span class="merged" id="all.3uQeGx.spl1" title="原文 : Endpoint methods in Helidon SE are executed in Netty&rsquo;s worker thread pool.">Helidon SEのエンドポイント・メソッドは、Nettyのワーカー・スレッド・プールで実行されます。</span> <span class="merged" id="all.3uQeGx.spl2" title="原文 : Threads in this pool are intended to be non-blocking, thus it is recommended for any blocking or long-running operation triggered by an endpoint method to be executed using a separate thread pool.">このプールのスレッドは<em>「非ブロッキング」</em>になるように意図されているため、エンドポイント・メソッドによってトリガーされるブロック操作または長時間実行操作を別のスレッド・プールを使用して実行することをお薦めします。</span> <span class="merged" id="all.3uQeGx.spl3" title="原文 : See the documentation for io.helidon.common.configurable.ThreadPoolSupplier."><code>io.helidon.common.configurable.ThreadPoolSupplier</code>のドキュメントを参照してください。</span> </p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.27"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4c4C8P" title="原文 : Helidon WebSocket JavaDoc"><a href="./apidocs/io.helidon.webserver.websocket/module-summary.html" target="_blank">Helidon WebSocket JavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2b3SWZ" title="原文 : Jakarta WebSocket Specification"><a href="https://jakarta.ee/specifications/websocket/2.0/websocket-spec-2.0.html" target="_blank">Jakarta WebSocket仕様</a></span></p>

</li>
</ul>

</div>

</doc-view>
