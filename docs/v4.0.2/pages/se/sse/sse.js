<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.74"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.72" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3EycxN" title="原文 : Server API"><router-link @click.native="this.scrollFix('#_server_api')" to="#_server_api">サーバーAPI</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C.5" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.48" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1T7Gyf" title="原文 : Client API"><router-link @click.native="this.scrollFix('#_client_api')" to="#_client_api">クライアントAPI</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C.6" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.49" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.28" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.96"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.AB36A.spl1" title="原文 : Server-sent events (SSE) enable servers to push data to clients (e.g. Web browsers) using standard HTTP or HTTPS through a unidirectional server-to-client connection.">サーバー送信イベント(SSE)を使用すると、サーバーは、一方向のサーバーとクライアント間の接続を介して、標準のHTTPまたはHTTPSを使用してクライアント(Webブラウザなど)にデータをプッシュできます。</span> <span class="merged" id="all.AB36A.spl2" title="原文 : In the server-sent events communication model, the client establishes the initial connection, and the server provides the data in the form of event streams.">サーバー送信イベント通信モデルでは、クライアントは初期接続を確立し、サーバーはデータを<em>「イベント・ストリーム」</em>の形式で提供します。</span> <span class="merged" id="all.AB36A.spl3" title="原文 : For more information about server-sent events, see the Server-sent events specification.">サーバー送信イベントの詳細は、<a href="https://html.spec.whatwg.org/multipage/server-sent-events.html" target="_blank"><code>Server-sent events</code></a>仕様を参照してください。</span> </p>

<p><span class="merged" id="all.3FeFrU.spl1" title="原文 : SSE is an alternative technology to WebSockets when only server-to-client messaging is required and can be accomplished without the need to switch protocols (upgrades) and without using imperfect solutions such as long polling.">SSEは、サーバー間メッセージングのみが必要で、プロトコル(アップグレード)を切り替える必要がなく、長いポーリングなどの不完全なソリューションを使用せずに実現できる場合に、WebSocketsの代替テクノロジです。</span> <span class="merged" id="all.3FeFrU.spl2" title="原文 : A server-sent connection is typically a long-lived connection in which messages are sent to the client over a longer period of time compared to a normal request-response connection.">サーバー送信接続は、通常、通常のリクエスト/レスポンス接続と比較して、長い期間にわたってクライアントにメッセージが送信される長時間の接続です。</span> <span class="merged" id="all.3FeFrU.spl3" title="原文 : It is useful for updating live data such as stock tickers, results of live events, etc.">証券ティッカ、ライブ・イベントの結果などの<em>「ライブ・データ」</em>の更新に役立ちます。</span> </p>

<p><span class="merged" id="all.34kgq2.spl1" title="原文 : Helidon provides support for server and client APIs, although Web browsers are popular client alternatives.">HelidonはサーバーおよびクライアントAPIをサポートしていますが、Webブラウザは一般的なクライアント代替手段です。</span> <span class="merged" id="all.34kgq2.spl2" title="原文 : The following sections describe these APIs in more detail.">次の各項では、これらのAPIについて詳しく説明します。</span> </p>

</div>


<h2 id="_server_api"><span class="merged" id="all.2Dr2WL" title="原文 : Server API">サーバーAPI</span></h2>
<div class="section">
<p><span class="merged" id="all.6poL6.spl1" title="原文 : The Server API is available as a loadable service in the Helidon WebServer.">サーバーAPIは、ロード可能なサービスとしてHelidon WebServerで使用できます。</span> <span class="merged" id="all.6poL6.spl2" title="原文 : The following additional dependency is required to find and load the SSE service in the WebServer.">WebServerでSSEサービスを検索してロードするには、次の追加の依存関係が必要です。</span> </p>


<h3 id="_maven_coordinates"><span class="merged" id="all.317oeS.65"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-sse&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_usage"><span class="merged" id="all.JUOSC.67"  title="原文:: Usage">使用</span></h3>
<div class="section">
<p><span class="merged" id="all.23lrq1.spl1" title="原文 : Sending events is accomplished by obtaining an SseSink instance from a ServerResponse using the SseSink.TYPE constant.">イベントを送信するには、<code>SseSink.TYPE</code>定数を使用して<code>ServerResponse</code>から<code>SseSink</code>インスタンスを取得します。</span> <span class="merged" id="all.23lrq1.spl2" title="原文 : The following example converts the response into an SseSink, emits two string messages and then closes the connection.">次の例では、レスポンスを<code>SseSink</code>に変換し、2つの文字列メッセージを出力してから接続をクローズします。</span> </p>

<markup
lang="java"

>void sseString(ServerRequest req, ServerResponse res) {
    try (SseSink sseSink = res.sink(SseSink.TYPE)) {
        sseSink.emit(SseEvent.create("hello"))
                .emit(SseEvent.create("world"));
    }
}</markup>

<p><span class="merged" id="all.4QhdC4.spl1" title="原文 : Once an SseSink is obtained from a ServerResponse, the latter is no longer usable to send additional data to the client given that response Content-Type will be automatically set to text/event-stream."><code>SseSink</code>が<code>ServerResponse</code>から取得されると、レスポンス<code>Content-Type</code>が<code>text/event-stream</code>に自動的に設定されると、後者はクライアントに追加データを送信できなくなります。</span> <span class="merged" id="all.4QhdC4.spl2" title="原文 : Note that an SseSink is auto closeable, so it can be part of a try-with-resources block as shown above."><code>SseSink</code>は自動クローズ可能であるため、前述のようにtry-with-resourcesブロックの一部にできます。</span> </p>

<p><span class="merged" id="all.4TQrxV.spl1" title="原文 : Events can be created using any of the static create methods in SseEvent as well as via a builder obtained by calling SseEvent.builder().">イベントは、<code>SseEvent</code>の任意の静的<code>create</code>メソッドと、<code>SseEvent.builder()</code>をコールして取得したビルダーを使用して作成できます。</span> <span class="merged" id="all.4TQrxV.spl2" title="原文 : For more information see the Javadocs for those classes.">詳細は、これらのクラスのJavadocを参照してください。</span> <span class="merged" id="all.4TQrxV.spl3" title="原文 : In the example above, a simple create method with a string param is used to showcase a very common use case.">前述の例では、文字列パラメータを持つ単純なcreateメソッドを使用して、非常に一般的なユースケースを示します。</span> <span class="merged" id="all.4TQrxV.spl4" title="原文 : The API supports integration with Helidon’s media type providers, so the event data may actually be of any type as long as it is possible to convert it to a string value.">APIでは、Helidonのメディア・タイプ・プロバイダとの統合がサポートされるため、イベント・データは文字列値に変換できるかぎり、実際には任意のタイプである可能性があります。</span> </p>

</div>


<h3 id="_integration_with_media_types"><span class="merged" id="all.1qTy66" title="原文 : Integration with Media Types">メディア・タイプとの統合</span></h3>
<div class="section">
<p><span class="merged" id="all.2fOe28.spl1" title="原文 : It is possible to serialize event data using the media support.">メディア・サポートを使用してイベント・データを直列化できます。</span> <span class="merged" id="all.2fOe28.spl2" title="原文 : For example, if JSON-P is available in your class path, you can create an SSE event from a JsonObject and Helidon will find the appropriate media converter and serialize the event data on your behalf.">たとえば、クラス・パスでJSON-Pが使用可能な場合は、<code>JsonObject</code>からSSEイベントを作成し、Helidonが適切なメディア・コンバータを検出して、かわりにイベント・データを直列化できます。</span> </p>

<markup
lang="java"

>void sseJsonp(ServerRequest req, ServerResponse res) {
    JsonObject json = Json.createObjectBuilder()
            .add("hello", "world")
            .build();
    try (SseSink sseSink = res.sink(SseSink.TYPE)) {
        sseSink.emit(SseEvent.create(json));
    }
}</markup>

<p><span class="merged" id="all.2Mc2cQ" title="原文 : Similarly, if JSON-B support is available in your class path, an event can be created from an arbitrary Java class and serialized as shown next:">同様に、クラスパスでJSON-Bサポートが使用可能な場合は、任意のJavaクラスからイベントを作成し、次に示すように直列化できます:</span></p>

<markup
lang="java"

>class HelloWorld {

    private String hello;

    public String getHello() {
        return hello;
    }

    public void setHello(String hello) {
        this.hello = hello;
    }
}

void sseJsonb(ServerRequest req, ServerResponse res) {
    HelloWorld json = new HelloWorld();
    json.setHello("world");
    try (SseSink sseSink = res.sink(SseSink.TYPE)) {
        sseSink.emit(SseEvent.create(json));
    }
}</markup>

<p><span class="merged" id="all.3KqM0U.spl1" title="原文 : An optional media type can be specified alongside the event’s data, in case a different type of serialization is required or when multiple media converters are available in the class path.">オプションのメディア・タイプは、異なるタイプのシリアライズが必要な場合やクラス・パスで複数のメディア・コンバータが使用可能な場合に、イベントのデータとともに指定できます。</span> <span class="merged" id="all.3KqM0U.spl2" title="原文 : For example, when passing a Java instance, you may request XML instead of JSON serialization by using application/xml as the event’s media type.">たとえば、Javaインスタンスを渡す場合、イベントのメディア・タイプとして<code>application/xml</code>を使用して、JSONシリアライズのかわりにXMLをリクエストできます。</span> </p>

</div>

</div>


<h2 id="_client_api"><span class="merged" id="all.1l25gx"  title="原文:: Client API">クライアントAPI</span></h2>
<div class="section">
<p><span class="merged" id="all.3BpV2c.spl1" title="原文 : The Client API is available as a loadable service in the Helidon WebClient.">クライアントAPIは、ロード可能なサービスとしてHelidon WebClientで使用できます。</span> <span class="merged" id="all.3BpV2c.spl2" title="原文 : The following additional dependency is required to find and load the service in the WebClient.">WebClientでサービスを検索してロードするには、次の追加の依存関係が必要です。</span> </p>


<h3 id="_maven_coordinates_2"><span class="merged" id="all.317oeS.66"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-sse&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_usage_2"><span class="merged" id="all.JUOSC.68"  title="原文:: Usage">使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2bcTFV.spl1" title="原文 : Receiving events is accomplished by providing an SseSource handler using the source type SseSource.TYPE.">イベントの受信は、ソース・タイプ<code>SseSource.TYPE</code>を使用して<code>SseSource</code>ハンドラを提供することで実現されます。</span> <span class="merged" id="all.2bcTFV.spl2" title="原文 : An SseSource is a functional interface defined for the purpose of processing events."><code>SseSource</code>は、イベントの処理のために定義された関数型インタフェースです。</span> <span class="merged" id="all.2bcTFV.spl3" title="原文 : The following example, obtains an Http1ClientResponse from a request and registers an SseSource to process a single event.">次の例では、リクエストから<code>Http1ClientResponse</code>を取得し、<code>SseSource</code>を登録して単一のイベントを処理します。</span> </p>

<markup
lang="java"

>try (Http1ClientResponse r = client.get("/sseJson")
                                    .header(ACCEPT_EVENT_STREAM)
                                    .request()) {
    CountDownLatch latch = new CountDownLatch(1);
    r.source(SseSource.TYPE, event -&gt; {
        // ...
        latch.countDown();
    });
}</markup>

<p><span class="merged" id="all.kw4fw.spl1" title="原文 : The SseSource type defines other methods such as onOpen, onClose and onError."><code>SseSource</code>型は、<code>onOpen</code>、<code>onClose</code>、<code>onError</code>などの他のメソッドを定義します。</span> <span class="merged" id="all.kw4fw.spl2" title="原文 : The following example waits for zero or more string events until the connection is closed.">次の例では、接続が閉じられるまで、0個以上の文字列イベントを待機します。</span> <span class="merged" id="all.kw4fw.spl3" title="原文 : A CountDownLatch is a convenient way to asynchronously wait until all the events are received."><code>CountDownLatch</code>は、すべてのイベントを受信するまで非同期的に待機する便利な方法です。</span> </p>

<markup
lang="java"

>try (Http1ClientResponse r = client.get("/sseString")
                                    .header(ACCEPT_EVENT_STREAM)
                                    .request()) {
    CountDownLatch latch = new CountDownLatch(1);
    r.source(SseSource.TYPE, new SseSource() {
        @Override
        public void onEvent(SseEvent event) {
            // ...
        }

        @Override
        public void onClose() {
            latch.countDown();
        }
    });
    assertThat(latch.await(5, TimeUnit.SECONDS), is(true));
}</markup>

</div>


<h3 id="_integration_with_media_types_2"><span class="merged" id="all.1qTy66.1" title="原文 : Integration with Media Types">メディア・タイプとの統合</span></h3>
<div class="section">
<p><span class="merged" id="all.thdDh.spl1" title="原文 : The Client API is also integrated with Helidon’s media type support.">クライアントAPIは、Helidonのメディア・タイプのサポートとも統合されています。</span> <span class="merged" id="all.thdDh.spl2" title="原文 : The data received as part of an event can be deserialized using any of the media converters available in your class path.">イベントの一部として受信したデータは、クラス・パスで使用可能な任意のメディア・コンバータを使用して直列化復元できます。</span> <span class="merged" id="all.thdDh.spl3" title="原文 : There are special methods in SseEvent for this purpose.">この目的のために、<code>SseEvent</code>には特別なメソッドがあります。</span> <span class="merged" id="all.thdDh.spl4" title="原文 : Without a parameter, the method data() in SseEvent will always return a string.">パラメータを指定しない場合、<code>SseEvent</code>のメソッド<code>data()</code>は常に文字列を返します。</span> <span class="merged" id="all.thdDh.spl5" title="原文 : Other types can be requested using data(Class&lt;T&gt;) and data(Class&lt;T&gt;, MediaType).">その他のタイプは、<code>data(Class&lt;T>)</code>および<code>data(Class&lt;T>, MediaType)</code>を使用してリクエストできます。</span> <span class="merged" id="all.thdDh.spl6" title="原文 : The latter is necessary to select the correct media converter given that there is no (standard) content type available as part of each event --but only a single text/event-stream content type for the whole response.">後者は、各イベントの一部として使用できる(標準)コンテンツ・タイプがなく、レスポンス全体に対して単一の<code>text/event-stream</code>コンテンツ・タイプしかない場合に、正しいメディア・コンバータを選択する必要があります。</span> </p>

<p><span class="merged" id="all.1DEG54" title="原文 : For example, to convert an event into a Java instance using JSON-B, the application/json media type is required as a second parameter --the first parameter HelloWorld.class simply does not convey sufficient information to select the appropriate converter for the event’s data in this case.">たとえば、JSON-Bを使用してイベントをJavaインスタンスに変換するには、2番目のパラメータとして<code>application/json</code>メディア・タイプが必要です。この場合、最初のパラメータ<code>HelloWorld.class</code>では、イベントのデータの適切なコンバータを選択するための十分な情報が伝達されません。</span></p>

<markup
lang="java"

>try (Http1ClientResponse r = client.get("/sseJson")
                                    .header(ACCEPT_EVENT_STREAM)
                                    .request()) {
    CountDownLatch latch = new CountDownLatch(1);
    r.source(SseSource.TYPE, event -&gt; {
        HelloWorld json = event.data(HelloWorld.class, MediaTypes.APPLICATION_JSON);
        // ...
        latch.countDown();
    });
}</markup>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.32"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.3JDS7Z" title="原文 : The Server-sent events specification."><a href="https://html.spec.whatwg.org/multipage/server-sent-events.html" target="_blank"><code>Server-sent events</code></a>の指定。</span></p>

</div>

</doc-view>
