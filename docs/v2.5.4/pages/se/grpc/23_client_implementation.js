<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1IjOIF" title="原文 : gRPC Client Implementation">gRPCクライアント実装</span></dt>
<dd slot="desc"><p><span class="merged" id="all.bwLpP.spl1" title="原文 : Helidon gRPC client framework allows you to write gRPC clients to access any gRPC service implementation.">Helidon gRPCクライアント・フレームワークを使用すると、gRPCサービス実装にアクセスするgRPCクライアントを記述できます。</span> <span class="merged" id="all.bwLpP.spl2" title="原文 : The benefits of using Helidon gRPC Client Framework include:">Helidon gRPCクライアント・フレームワークを使用する利点は次のとおりです:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3NqpXi" title="原文 : It provides a number of helper methods that make client implementation significantly simpler.">クライアントの実装を大幅に簡素化するヘルパー・メソッドが多数用意されています。</span></p>

</li>
<li>
<p><span class="merged" id="all.1CES9e" title="原文 : It allows you to configure some of the Helidon value-added features, such as security and metrics collection and interceptors down to the method level.">これにより、<router-link @click.native="this.scrollFix('#08_security.adoc')" to="#08_security.adoc">「セキュリティ」</router-link>や<router-link @click.native="this.scrollFix('#07_metrics.adoc')" to="#07_metrics.adoc">「メトリクスの収集とインターセプタ」</router-link>など、一部のHelidonの付加価値機能をメソッド・レベルまで構成できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.4ZVyJH" title="原文 : It allows you to easily specify custom marshaller for requests and responses if protobuf does not satisfy your needs.">これにより、<code>protobuf</code>がニーズを満たさない場合に、リクエストおよびレスポンスのカスタム・マーシャラを簡単に指定できます。</span></p>

</li>
</ul></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_client_implementation_basics"><span class="merged" id="all.1oS1nV" title="原文 : Client Implementation Basics">クライアント実装の基本</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2SID8P.spl1" title="原文 : The first step to create a Helidon gRPC client application is to describe the set of methods in the gRPC service.">Helidon gRPCクライアント・アプリケーションを作成する最初のステップは、gRPCサービスの一連のメソッドを記述することです。</span> <span class="merged" id="all.2SID8P.spl2" title="原文 : Helidon gRPC Client Framework (simply called the &quot;Client framework&quot; in the remainder of the document) provides a class called ClientServiceDescriptor to describe the set of methods of a service that the client may invoke.">Helidon gRPCクライアント・フレームワーク(ドキュメントの残りの部分では単に「クライアント・フレームワーク」と呼ばれる)には、クライアントが呼び出すことができるサービスのメソッドのセットを記述する<code>ClientServiceDescriptor</code>というクラスが用意されています。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.2elnnQ.spl1" title="原文 : There are three ways to build and initialize a ClientServiceDescriptor."><code>ClientServiceDescriptor</code>をビルドおよび初期化するには、次の3つの方法があります。</span> <span class="merged" id="all.2elnnQ.spl2" title="原文 :  The first option is to initialize ClientServiceDescriptor using protoc generated artifacts like BindableService or io.grpc.ServiceDescriptor."><strong>最初のオプションは、<code>BindableService</code>や<code>io.grpc.ServiceDescriptor</code>などの<code>protoc</code>生成アーティファクトを使用して<code>ClientServiceDescriptor</code>を初期化することです。</span> <span class="merged" id="all.2elnnQ.spl3" title="原文 : This option is possible if the gRPC service was built using .proto file.">このオプションは、gRPCサービスが<code>.proto</code>ファイルを使用して構築された場合に使用できます。</span> <span class="merged" id="all.2elnnQ.spl4" title="原文 : In this case the set of gRPC methods, their types and the appropriate marshallers are detected automatically.">この場合、gRPCメソッドのセット、そのタイプおよび適切なマーシャラが自動的に検出されます。</span> <span class="merged" id="all.2elnnQ.spl5" title="原文 : This is certainly the easiest way to initialize a ClientServiceDescriptor. ">これは、<code>ClientServiceDescriptor</code>を初期化する最も簡単な方法です。</strong></span> <span class="merged" id="all.2elnnQ.spl6" title="原文 : The second option is to programmatically build the ClientServiceDescriptor.">もう一方のオプションは、<code>ClientServiceDescriptor</code>をプログラムでビルドすることです。</span> <span class="merged" id="all.2elnnQ.spl7" title="原文 : This option should be taken if the service was not built from protobuf files or if the protoc generated artifacts are not available to the client. ** The third option is to load the method descriptions from a configuration file.">このオプションは、サービスがprotobufファイルからビルドされていない場合、または<code>protoc</code>で生成されたアーティファクトがクライアントで使用できない場合に指定する必要があります。** 3つ目のオプションは、構成ファイルからメソッドの説明をロードすることです。</span> <span class="merged" id="all.2elnnQ.spl8"  title="原文:: (Not yet implemented).">(まだ実装されていません。)</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4V72Sm" title="原文 : The next step is to create a gRPC Channel to use to communicate with the server.">次のステップでは、サーバーとの通信に使用するgRPC <code>Channel</code>を作成します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3YuQV8" title="原文 : Finally, you create an instance of GrpcServiceClient passing the ClientMethodDescriptor and the Channel instances.">最後に、<code>ClientMethodDescriptor</code>および<code>Channel</code>インスタンスを渡す<code>GrpcServiceClient</code>のインスタンスを作成します。</span></p>

</li>
</ul>
</div>

<h2 id="_creating_grpc_clients_from_protoc_generated_artifacts"><span class="merged" id="all.A05eZ" title="原文 : Creating gRPC clients from protoc generated artifacts"><code>protoc</code>で生成されたアーティファクトからのgRPCクライアントの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1NJmGt.spl1" title="原文 : As mentioned above, the easiest way to create a ClientServiceDescriptor is to create it from an io.grpc.ServiceDescriptor or from a io.grpc.BindableService.">前述のように、<code>ClientServiceDescriptor</code>を作成する最も簡単な方法は、<code>io.grpc.ServiceDescriptor</code>または<code>io.grpc.BindableService</code>から作成することです。</span> <span class="merged" id="all.1NJmGt.spl2" title="原文 : It is fairly trivial to obtain these from a service generated from artifacts generated from protobuf IDL file.">protobuf IDLファイルから生成されたアーティファクトから生成されたサービスからこれらを取得することは非常に簡単です。</span> </p>

<p><span class="merged" id="all.2etVbQ" title="原文 : For this section we will assume the following proto file:">このセクションでは、次のprotoファイルを想定します:</span></p>

<markup
lang="proto"

>syntax = "proto3";
option java_package = "io.helidon.grpc.client.test";

service StringService {
  rpc Upper (StringMessage) returns (StringMessage) {}                  // (Unary)
  rpc Lower (StringMessage) returns (StringMessage) {}                  // (Unary)
  rpc Split (StringMessage) returns (stream StringMessage) {}           // (Server Streaming)
  rpc Join (stream StringMessage) returns (StringMessage) {}            // (Client Streaming)
  rpc Echo (stream StringMessage) returns (stream StringMessage) {}     // (Bidirectional Streaming)
}

message StringMessage {
  string text = 1;
}</markup>

<p><span class="merged" id="all.3nA5P6.spl1" title="原文 : If you run it through protoc it will generate a class (among other things) called StringService."><code>protoc</code>を介して実行すると、<code>StringService</code>というクラスが(特に)生成されます。</span> <span class="merged" id="all.3nA5P6.spl2" title="原文 : Assuming that the StringService server is running on port 1408, here is how you can create a Helidon gRPC Client that uses the Client Framework to invoke various types of gRPC methods."><code>StringService</code>サーバーがポート1408で実行されている場合、クライアント・フレームワークを使用して様々なタイプのgRPCメソッドを呼び出すHelidon gRPCクライアントを作成する方法を次に示します。</span> </p>


<h3 id="_creating_and_initializing_a_clientservicedescriptor_for_stringservice_generated_from_protoc"><span class="merged" id="all.2w5UAO" title="原文 : Creating and initializing a ClientServiceDescriptor for StringService (generated from protoc)">StringService用のClientServiceDescriptorの作成および初期化(<code>protoc</code>から生成)</span></h3>
<div class="section">
<p><span class="merged" id="all.BziHJ" title="原文 : Lets build a class called ProtoBasedStringServiceClient that invokes the various types of gRPC methods that our StringService offers."><code>StringService</code>が提供する様々なタイプのgRPCメソッドを呼び出す<code>ProtoBasedStringServiceClient</code>というクラスをビルドします。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() {
        ClientServiceDescriptor desc = ClientServiceDescriptor
                .builder(StringService.getServiceDescriptor())                  // (1)
                .build();

        Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)   // (2)
                .usePlaintext().build();

        this.client = GrpcServiceClient.create(channel, desc);                  // (3)
    }

    /**
     * Many gRPC methods take a {@link io.grpc.StreamObserver} as an argument. Lets
     * build a helper class that can be used in our example.
     */
    public static class StringMessageStream&lt;T&gt;                                  // (4)
        implements StreamObserver&lt;T&gt; {

        @Override
        public void onNext(T value) {
            System.out.println("Received : " + value);
        }

        @Override
        public void onError(Throwable t) {
          t.printStracktrace();
        }

        @Override
        public void onCompleted() {
          System.out.println("DONE");
        }
    }
}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1hjqOO.spl1" title="原文 : Initialize the builder by specifying the StringService&rsquo;s proto `ServiceDescriptor."><code>StringService&rsquo;s proto `ServiceDescriptor</code>を指定してビルダーを初期化します。</span> <span class="merged" id="all.1hjqOO.spl2" title="原文 : From the ServiceDescriptor the builder detects the service name, the set of method names, and for each method its type (like Unary, ServerStreaming etc.), the request and response types (and hence their corresponding Marshallers) etc."><code>ServiceDescriptor</code>から、ビルダーはサービス名、メソッド名のセット、および各メソッドのタイプ(単項、ServerStreamingなど)、リクエスト・タイプとレスポンス・タイプ(および対応するMarshaller)を検出します。</span> 

</li>
<li>
<span class="merged" id="all.46knU5" title="原文 : We create a Channel to the service that is running on localhost:1408."><code>localhost:1408</code>で実行されているサービスへの<code>Channel</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.3EX3AF.spl1" title="原文 : Finally, we create our GrpcServiceClient by using the above mentioned ClientServiceDescriptor and Channel.">最後に、前述の<code>ClientServiceDescriptor</code>および<code>Channel</code>を使用して<code>GrpcServiceClient</code>を作成します。</span> <span class="merged" id="all.3EX3AF.spl2" title="原文 : This client reference will be used to invoke various gRPC methods in our StringService">この<code>client</code>参照は、<code>StringService</code>で様々なgRPCメソッドを呼び出すために使用されます</span> 

</li>
<li>
<span class="merged" id="all.26cfBx.spl1" title="原文 : We define a static inner class that implements the io.grpc.StreamObserver interface."><code>io.grpc.StreamObserver</code>インタフェースを実装する静的な内部クラスを定義します。</span> <span class="merged" id="all.26cfBx.spl2" title="原文 : An instance of this class can be used whereever a io.grpc.StreamObserver is required (like server streaming, bi-directional streaming methods).">このクラスのインスタンスは、<code>io.grpc.StreamObserver</code>が必要な場所であればどこでも使用できます(サーバー・ストリーミング、双方向ストリーム・メソッドなど)。</span> 

</li>
</ol>
</div>

<h3 id="_invoking_a_unary_method_on_the_stringservice"><span class="merged" id="all.9lThM" title="原文 : Invoking a unary method on the StringService">StringServiceでの単項メソッドの起動</span></h3>
<div class="section">
<p><span class="merged" id="all.WQRK8" title="原文 : The Client Framework provides many helper methods to invoke gRPC unary methods.">クライアント・フレームワークには、gRPC単項メソッドを起動するためのヘルパー・メソッドが多数用意されています。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeUnaryMethod() throws Exception {
        StringMessage input = StringMessage.newBuilder().setText("ABC").build();

        CompletableFuture&lt;String&gt; result = client.unary("Lower", input);        // (1)

        String lcase = client.blockingUnary("Lower", input);                    // (2)

        StringMessageStream stream = new StringMessageStream&lt;StringMessage&gt;();
        client.blockingUnary("Lower", input);                                   // (3)
    }

    public static class StringMessageStream&lt;T&gt; { /* code omitted */ }
}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4Q65cn.spl1" title="原文 : This variant of the unary API takes the method name and a request object and returns a CompletableFuture&lt;Response&gt; where &lt;Response&gt; is the response type."><code>unary</code> APIのこのバリアントは、メソッド名とリクエスト・オブジェクトを取得し、<code>&lt;Response></code>がレスポンス・タイプである<code>CompletableFuture&lt;Response></code>を返します。</span> <span class="merged" id="all.4Q65cn.spl2" title="原文 : Here we invoke the Lower method passing the input StringMessage.">ここでは、入力<code>StringMessage</code>を渡す<code>Lower</code>メソッドを呼び出します。</span> <span class="merged" id="all.4Q65cn.spl3" title="原文 : This method returns a CompletableFuture&lt;StringMessage&gt; as response thus allowing the client to obtain the result asynchronously.">このメソッドはレスポンスとして<code>CompletableFuture&lt;StringMessage></code>を返すため、クライアントは結果を非同期的に取得できます。</span> 

</li>
<li>
<span class="merged" id="all.36PmpJ.spl1" title="原文 : This is simply a wrapper around the above method.">これは単に前述のメソッドのラッパーです。</span> <span class="merged" id="all.36PmpJ.spl2" title="原文 : This method blocks till the result is available.">このメソッドは、結果が使用可能になるまでブロックします。</span> 

</li>
<li>
<span class="merged" id="all.1GYOx6" title="原文 : Here we create invoke the unary method by passing the StringMessageStream whose onNext method will be called (once) when the result is available.">ここでは、結果が使用可能になったときに(一度) <code>onNext</code>メソッドがコールされる<code>StringMessageStream</code>を渡すことで、<code>unary</code>メソッドの起動を作成します。</span>

</li>
</ol>
</div>

<h3 id="_invoking_a_client_streaming_method_on_the_stringservice"><span class="merged" id="all.4ZId9" title="原文 : Invoking a client streaming method on the StringService">StringServiceでのクライアント・ストリーミング・メソッドの呼出し</span></h3>
<div class="section">
<p><span class="merged" id="all.1cwJmx" title="原文 : Lets invoke the Join method which causes the server to return a single result after the client has streamed the request values to the server. gRPC API expects the client application to provide an instance of io.grpc.StreamObserver as an argument during the invocation of the client streaming method.">クライアントがリクエスト値をサーバーにストリーミングした後、サーバーが単一の結果を返すようにする<code>Join</code>メソッドを呼び出します。gRPC APIは、クライアント・アプリケーションがクライアント・ストリーミング・メソッドの呼出し中に<code>io.grpc.StreamObserver</code>のインスタンスを引数として提供することを想定しています。</span></p>

<p><span class="merged" id="all.27yMGS.spl1" title="原文 : In order to simplify the task of invoking Client Streaming methods, Helidon Client Framework provides a couple of methods to invoke gRPC Client Streaming methods.">クライアント・ストリーミング・メソッドの呼出しタスクを簡略化するために、Helidonクライアント・フレームワークにはgRPCクライアント・ストリーミング・メソッドを呼び出すいくつかのメソッドが用意されています。</span> <span class="merged" id="all.27yMGS.spl2" title="原文 : The first variant takes an Iterable as argument which in turn is converted into a io.grpc.StreamObserver.">最初のバリアントは<code>Iterable</code>を引数として取り、引数は<code>io.grpc.StreamObserver</code>に変換されます。</span> <span class="merged" id="all.27yMGS.spl3" title="原文 : The second variant takes a io.grpc.StreamObserver as argument.">2番目のバリアントは、引数として<code>io.grpc.StreamObserver</code>を取ります。</span> <span class="merged" id="all.27yMGS.spl4" title="原文 : The first variant can be used if the number of values to be streamed in small and known a priori.">最初のバリアントは、小さいプリオリでストリームされる値の数がわかっている場合に使用できます。</span> </p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeClientStreamingWithIterable() throws Exception {

        String sentence = "A simple invocation of a client streaming method";
        Collection&lt;StringMessage&gt; input = Arrays.stream(sentence.split(" "))        // (1)
                  .map(w -&gt; StringMessage.newBuilder().setText(w).build())
                  .collect(Collectors.toList());

        CompletableFuture&lt;StringMessage&gt; result =
                  grpcClient.clientStreaming("Join", input);                        // (2)
    }

    public void invokeClientStreaming() throws Exception {
        String sentence = "A simple invocation of a client streaming method";
        StringMessageStream responseStream = new StringMessageStream&lt;StringMessage&gt;();
        StreamObserver&lt;StringMessage&gt; clientStream =
                  grpcClient.clientStreaming("Join", responseStream);               // (3)

        for (String word : sentence.split(" ")) {
            clientStream.onNext(StringMessage.newBuilder().setText(word).build());  // (4)
        }
        clientStream.onCompleted();                                                 // (5)
    }

    public static class StringMessageStream&lt;T&gt; { /* code imitted */ }

}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1bu3fC" title="原文 : We prepare the collection that contains the values to be streamed.">ストリームする値を含むコレクションを準備します。</span>

</li>
<li>
<span class="merged" id="all.4GtNbU.spl1" title="原文 : We call the first variant of the clientStreaming() method that takes the method name and the collection of values to be streamed from the client.">クライアントからストリームされるメソッド名と値のコレクションをとる<code>clientStreaming()</code>メソッドの最初のバリアントを呼び出します。</span> <span class="merged" id="all.4GtNbU.spl2" title="原文 : Note: The above helper method is useful if the values to be streamed is fixed and small in number.">ノート: 前述のヘルパー・メソッドは、ストリームされる値が固定され、数値が小さい場合に役立ちます。</span> 

</li>
<li>
<span class="merged" id="all.1Kp27Q.spl1" title="原文 : If the number of values to be streamed is large (or unknown), then it is better to use this variant of the clientStreaming() method that takes a io.grpc.StreamObserver as an argument.">ストリームされる値の数が多い(または不明な)場合は、<code>io.grpc.StreamObserver</code>を引数として取る<code>clientStreaming()</code>メソッドのこのバリアントを使用することをお薦めします。</span> <span class="merged" id="all.1Kp27Q.spl2" title="原文 : This method returns a client stream through which the client can stream (potentially a large number of) value to the server.">このメソッドは、クライアントが(場合によっては多数の)値をサーバーにストリームできるクライアント・ストリームを返します。</span> 

</li>
<li>
<span class="merged" id="all.1jGpTT" title="原文 : Once the client stream is obtained, the client streams the values using the onNext() method on the stream.">クライアント・ストリームが取得されると、クライアントはストリームの<code>onNext()</code>メソッドを使用して値をストリームします。</span>

</li>
<li>
<span class="merged" id="all.2OwJDp" title="原文 : When all values have been stream, the client invokes the onCompleted() method signal that all values have been streamed from the client.">すべての値がストリームされると、クライアントは、すべての値がクライアントからストリームされたことを示す<code>onCompleted()</code>メソッド・シグナルを呼び出します。</span>

</li>
</ol>
</div>

<h3 id="_invoking_a_server_streaming_method_on_the_stringservice_generated_from_protoc"><span class="merged" id="all.2HMbax" title="原文 : Invoking a server streaming method on the StringService (generated from protoc)">StringServiceでのサーバー・ストリーミング・メソッドの呼出し(<code>protoc</code>から生成)</span></h3>
<div class="section">
<p><span class="merged" id="all.6ldfI" title="原文 : Lets invoke the &quot;Split&quot; method which causes the server to stream the results back.">サーバーが結果をストリーム・バックする「Split」メソッドを呼び出します。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeServerStreaming() throws Exception {
        String sentence = "This sentence will be split into words and sent back to client";
        StringMessage input = StringMessage.newBuilder().setText(sentence).build();   // (1)

        StringMessageStream&lt;StringMessage&gt; observer = new StringMessageStream&lt;&gt;();    // (2)
        grpcClient.serverStreaming("Split", input, observer);                         // (3)
    }

    public static class StringMessageStream&lt;T&gt; { /* code imitted */ }

}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2FZeE6" title="原文 : We prepare the input StringMessage that needs to be split.">分割する必要がある入力<code>StringMessage</code>を準備します。</span>

</li>
<li>
<span class="merged" id="all.kRh6j" title="原文 : We create a StringMessageStream which will receive the results streamed from the server.">サーバーからストリームされた結果を受け取る<code>StringMessageStream</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.2f8R2j.spl1" title="原文 : We call the serverStreaming() passing the input and the StringMessageStream as arguments.">入力および<code>StringMessageStream</code>を引数として渡す<code>serverStreaming()</code>を呼び出します。</span> <span class="merged" id="all.2f8R2j.spl2" title="原文 : The server sends a stream of words by calling the onNext() method on the StringMessageStream for each word.">サーバーは、各単語に対して<code>StringMessageStream</code>で<code>onNext()</code>メソッドを呼び出すことによって、単語のストリームを送信します。</span> 

</li>
</ol>
</div>

<h3 id="_invoking_a_bi_directional_streaming_method_on_the_stringservice_generated_from_protoc"><span class="merged" id="all.D81qP" title="原文 : Invoking a bi-directional streaming method on the StringService (generated from protoc)">StringServiceでの双方向ストリーミング・メソッドの呼出し(<code>protoc</code>から生成)</span></h3>
<div class="section">
<p><span class="merged" id="all.FzJLH" title="原文 : Now lets invoke the Echo method in which both the client and the server have to stream the request and response.">ここで、クライアントとサーバーの両方がリクエストとレスポンスをストリーミングする必要がある<code>Echo</code>メソッドを呼び出します。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeBidiStreaming() throws Exception {

        StringMessageStream&lt;StringMessage&gt; observer = new StringMessageStream&lt;&gt;();      // (1)
        StringMessageStream&lt;StringMessage&gt; clientStream = grpcClient
                                .bidiStreaming("Echo", observer);                       // (2)

        String sentence = "Each word will be echoed back to the client by the server";
        for (String word : sentence.split(" ")) {
            clientStream.onNext(StringMessage.newBuilder().setText(word).build());      // (3)
        }
        clientStream.onCompleted();                                                     // (4)
    }

    public static class StringMessageStream&lt;T&gt; { /* code imitted */ }

}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.kRh6j.1" title="原文 : We create a StringMessageStream which will receive the results streamed from the server.">サーバーからストリームされた結果を受け取る<code>StringMessageStream</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.4Ioapx.spl1" title="原文 : We call the bidiStreaming() passing the observer as argument."><code>observer</code>を引数として渡す<code>bidiStreaming()</code>を呼び出します。</span> <span class="merged" id="all.4Ioapx.spl2" title="原文 : The server will send its results through this stream (basically by calling the onNext() on the observer).">サーバーは、このストリームを介して結果を送信します(基本的に、<code>observer</code>で<code>onNext()</code>を呼び出します)。</span> <span class="merged" id="all.4Ioapx.spl3" title="原文 : The method returns a (client) stream which should be used by the client to stream values to the server.">このメソッドは、クライアントが値をサーバーにストリームするために使用する(クライアント)ストリームを返します。</span> 

</li>
<li>
<span class="merged" id="all.2DfH6k" title="原文 : We stream each word in our sentence to the server by calling the onNext() method on the clientStream."><code>clientStream</code>で<code>onNext()</code>メソッドをコールして、センテンス内の各単語をサーバーにストリームします。</span>

</li>
<li>
<span class="merged" id="all.btUBn" title="原文 : We call the onCompleted() method on the clientStream to signal that the client has streamed all its values."><code>clientStream</code>で<code>onCompleted()</code>メソッドを呼び出して、クライアントがすべての値をストリーミングしたことを通知します。</span>

</li>
</ol>
</div>
</div>

<h2 id="_programmatically_creating_clientservicedescriptor_for_stringservice"><span class="merged" id="all.11cPSx" title="原文 : Programmatically creating ClientServiceDescriptor for StringService">StringService用のClientServiceDescriptorのプログラムによる作成</span></h2>
<div class="section">
<p><span class="merged" id="all.4BYko" title="原文 : Assuming that the service is still running on port 1408, lets see how to create our Client without using the StringService &apos;s proto ServiceDescriptor.">サービスがまだポート1408で実行されていると仮定すると、<code>StringService</code>のプロトコル<code>ServiceDescriptor</code>を使用せずにクライアントを作成する方法を確認できます。</span></p>

<p><span class="merged" id="all.1RWGII.spl1" title="原文 : Since we are not going to use the StringService &apos;s proto ServiceDescriptor, we need to describe the methods that the client need to invoke."><code>StringService</code>のプロトコル<code>ServiceDescriptor</code>を使用しないため、クライアントが呼び出す必要があるメソッドを記述する必要があります。</span> <span class="merged" id="all.1RWGII.spl2" title="原文 : The Helidon client framework provides a bunch of APIs to easily describe gRPC methods.">Helidonクライアント・フレームワークには、gRPCメソッドを簡単に記述するための一連のAPIが用意されています。</span> </p>

<p><span class="merged" id="all.1d5Nkq" title="原文 : For example, to register a unary method, we need to use the unary method and configure it to specify the request and response types.">たとえば、単項メソッドを登録するには、<code>unary</code>メソッドを使用して、リクエスト・タイプとレスポンス・タイプを指定するように構成する必要があります。</span></p>

<p><span class="merged" id="all.22e8s3" title="原文 : Other than describing the methods that our client will invoke, the rest of the following code should be very similar (or same) as the previous section!!">クライアントが呼び出すメソッドを記述する以外に、次のコードの残りの部分は前の項とよく似ている(または同じである)必要があります。</span></p>

<markup
lang="java"

>public class StringServiceClient {

    public static void main(String[] args) {
        ClientMethodDescriptor lower = ClientMethodDescriptor
                    .unary("StringService", "Lower")                            // (1)
                    .requestType(StringMessage.class)                           // (2)
                    .responseType(StringMessage.class)                          // (3)
                    .build();                                                   // (4)

        ClientMethodDescriptor join = ClientMethodDescriptor
                    .clientStreaming("StringService", "Join")                   // (5)
                    .requestType(StringMessage.class)
                    .responseType(StringMessage.class)
                    .build();

        ClientMethodDescriptor split = ClientMethodDescriptor
                    .serverStreaming("StringService", "Split")                  // (6)
                    .requestType(StringMessage.class)
                    .responseType(StringMessage.class)
                    .build();

        ClientMethodDescriptor echo = ClientMethodDescriptor
                    .bidirectional("StringService", "Echo")                     // (7)
                    .requestType(StringMessage.class)
                    .responseType(StringMessage.class)
                    .build();

        ClientServiceDescriptor serviceDesc = ClientServiceDescriptor           // (8)
                    .builder(StringService.class)
                    .unary(lower)
                    .clientStreaming(join)
                    .serverStreaming(split)
                    .bidirectional(echo)
                    .build();


        Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)           // (9)
                .usePlaintext().build();

        GrpcServiceClient client = GrpcServiceClient.create(channel, serviceDesc);   // (10)

    }

}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.43zSN3.spl1" title="原文 : Use the unary() method on ClientMethodDescriptor to create a builder for a gRPC unary method.">gRPC単項メソッドのビルダーを作成するには、<code>ClientMethodDescriptor</code>で<code>unary()</code>メソッドを使用します。</span> <span class="merged" id="all.43zSN3.spl2" title="原文 : The service name and the method name (&quot;Lower&quot;) are specified.">サービス名とメソッド名(「Lower」)が指定されます。</span> 

</li>
<li>
<span class="merged" id="all.4FVIbU" title="原文 : Set the request type of the method to be StringMessage (since the Lower method takes StringMessage as a parameter).">メソッドのリクエスト・タイプを<code>StringMessage</code>に設定します(<code>Lower</code>メソッドはパラメータとして<code>StringMessage</code>を使用するため)。</span>

</li>
<li>
<span class="merged" id="all.3cH1yL" title="原文 : Set the response type of the method to be StringMessage (since the Lower method returns a StringMessage as a parameter).">メソッドのレスポンス・タイプを<code>StringMessage</code>に設定します(<code>Lower</code>メソッドはパラメータとして<code>StringMessage</code>を返すため)。</span>

</li>
<li>
<span class="merged" id="all.4c0SeL.spl1" title="原文 : Build the ClientMethodDescriptor."><code>ClientMethodDescriptor</code>をビルドします。</span> <span class="merged" id="all.4c0SeL.spl2" title="原文 : Note that the return value is a ClientMethodDescriptor that contains the correct Marshallers for the request &amp; response types.">戻り値は、リクエスト&amp;レスポンス・タイプの正しいMarshallerを含む<code>ClientMethodDescriptor</code>であることに注意してください。</span> 

</li>
<li>
<span class="merged" id="all.jHz9b.spl1" title="原文 : Use the clientStreaming() method on ClientMethodDescriptor to create a builder for a gRPC client streaming method."><code>ClientMethodDescriptor</code>で<code>clientStreaming()</code>メソッドを使用して、gRPCクライアント・ストリーミング・メソッドのビルダーを作成します。</span> <span class="merged" id="all.jHz9b.spl2" title="原文 : The service name and the method name (&quot;Join&quot;) are specified.">サービス名とメソッド名(Join)が指定されます。</span> 

</li>
<li>
<span class="merged" id="all.2FqBnT.spl1" title="原文 : Use the serverStreaming() method on ClientMethodDescriptor to create a builder for a gRPC server streaming method.">gRPCサーバーのストリーミング・メソッドのビルダーを作成するには、<code>ClientMethodDescriptor</code>で<code>serverStreaming()</code>メソッドを使用します。</span> <span class="merged" id="all.2FqBnT.spl2" title="原文 : The service name and the method name (&quot;Split&quot;) are specified.">サービス名とメソッド名(「Split」)が指定されます。</span> 

</li>
<li>
<span class="merged" id="all.269tkM.spl1" title="原文 : Use the bidirectional() method on ClientMethodDescriptor to create a builder for a gRPC Bidi streaming method."><code>ClientMethodDescriptor</code>で<code>bidirectional()</code>メソッドを使用して、gRPC Bidiストリーミング・メソッドのビルダーを作成します。</span> <span class="merged" id="all.269tkM.spl2" title="原文 : The service name and the method name (&quot;Echo&quot;) are specified.">サービス名とメソッド名(Echo)が指定されます。</span> 

</li>
<li>
<span class="merged" id="all.jje6l" title="原文 : Create a ClientServiceDescriptor for service named StringService and add all our ClientMethodDescriptor s."><code>StringService</code>という名前のサービスの<code>ClientServiceDescriptor</code>を作成し、すべての<code>ClientMethodDescriptor</code>を追加します。</span>

</li>
<li>
<span class="merged" id="all.46knU5.1" title="原文 : We create a Channel to the service that is running on localhost:1408."><code>localhost:1408</code>で実行されているサービスへの<code>Channel</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.1TRhVj" title="原文 : Finally, we create our GrpcServiceClient by using the above mentioned ClientServiceDescriptor and Channel.">最後に、前述の<code>ClientServiceDescriptor</code>および<code>Channel</code>を使用して<code>GrpcServiceClient</code>を作成します。</span>

</li>
</ol>
<p><span class="merged" id="all.1IfMK0" title="原文 : At this point the client object can be used to invoke any of the four types of methods we have seen in the earlier sections!!">この時点で、<code>client</code>オブジェクトを使用して、前の項で確認した4つのタイプのメソッドのいずれかを起動できます。</span></p>

</div>

<h2 id="_creating_grpc_clients_for_non_protobuf_services"><span class="merged" id="all.VPLFz" title="原文 : Creating gRPC clients for non protobuf services">protobuf以外のサービス用のgRPCクライアントの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.4GMNv4" title="原文 : If your service is not using protobuf for serialization, then the Client framework allows you to programmatically initialize ClientMethodDescriptor and create clients to invoke methods on the service.">サービスが直列化にprotobufを使用していない場合、クライアント・フレームワークを使用すると、<code>ClientMethodDescriptor</code>をプログラムで初期化し、サービスのメソッドを呼び出すクライアントを作成できます。</span></p>

<p><span class="merged" id="all.2xdQIc.spl1" title="原文 : All you have to do is create the set of ClientMethodDescriptor s and the ClientServiceDescriptor as described in the previous section, but with one change.">必要なのは、前の項で説明したように、<code>ClientMethodDescriptor</code>と<code>ClientServiceDescriptor</code>のセットを作成することのみですが、1つの変更点があります。</span> <span class="merged" id="all.2xdQIc.spl2" title="原文 : Just do not to set the request and response types in the ClientMethodDescriptor."><code>ClientMethodDescriptor</code>でリクエスト・タイプとレスポンス・タイプを設定するには、<strong>「しない」</strong>のみを使用します。</span> <span class="merged" id="all.2xdQIc.spl3" title="原文 : That&rsquo;s all!!">これはすべてです。</span> <span class="merged" id="all.2xdQIc.spl4" title="原文 : In fact, there is an API in the ClientServiceDescriptor that makes this even simpler.">実際には、これをさらに簡単にするAPIが<code>ClientServiceDescriptor</code>にあります。</span> <span class="merged" id="all.2xdQIc.spl5" title="原文 : You can simply pass the method name.">単にメソッド名を渡すことができます。</span> <span class="merged" id="all.2xdQIc.spl6" title="原文 : For example, to create a client streaming method called &quot;JoinString&quot; that uses java serialization simply call the clientStreamin(&quot;JoinString&quot;).">たとえば、java直列化を使用する「JoinString」というクライアント・ストリーミング・メソッドを作成するには、単に<code>clientStreamin("JoinString")</code>をコールします。</span> </p>

<p><span class="merged" id="all.1i5DDh" title="原文 : Lets see an example of creating a client for a service that uses Java serialization.">Java直列化を使用するサービスのクライアントを作成する例を示します。</span></p>

<markup
lang="java"

>public static void main(String[] args) throws Exception {
    ClientServiceDescriptor descriptor = ClientServiceDescriptor.builder(HelloService.class)    // (1)
                                                                .clientStreaming("JoinString")  // (2)
                                                                .build();

    Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)
                                           .usePlaintext()
                                           .build();

    GrpcServiceClient client = GrpcServiceClient.create(channel, descriptor);

    String sentence = "A simple invocation of a client streaming method";
    Collection&lt;StringMessage&gt; input = Arrays.stream(sentence.split(" "))
                                        .map(w -&gt; StringMessage.newBuilder().setText(w).build())
                                        .collect(Collectors.toList());

  CompletableFuture&lt;StringMessage&gt; result = grpcClient.clientStreaming("Join", input);
}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2XAv7Y.1" title="原文 : Create a ClientServiceDescriptor for the HelloService."><code>HelloService</code>の<code>ClientServiceDescriptor</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.1lEGJI.spl1" title="原文 : Add the &quot;JoinString&quot; client streaming method to the ClientServiceDescriptor.">「JoinString」クライアント・ストリーミング・メソッドを<code>ClientServiceDescriptor</code>に追加します。</span> <span class="merged" id="all.1lEGJI.spl2" title="原文 : Since we didn&rsquo;t set the request or response type (like we did in the previous sections), Java serialization will be used for Marshalling and Unmarshalling the request and response values.">(前の項で設定したように)リクエスト・タイプまたはレスポンス・タイプを設定しなかったため、リクエスト値とレスポンス値のマーシャリングおよびアンマーシャリングにはJavaの直列化が使用されます。</span> 

</li>
</ol>
<p><span class="merged" id="all.1zm5Ff" title="原文 : Note that whether a ClientServiceDescriptor is built using protobuf artifacts or is built programmatically, the same set of APIs provided by the Client Framework can be used to invoke gRPC methods."><code>ClientServiceDescriptor</code>がprotobufアーティファクトを使用して構築されているか、プログラムによって構築されているかにかかわらず、クライアント・フレームワークで提供されているものと同じAPIセットを使用してgRPCメソッドを呼び出すことができます。</span></p>

</div>
</doc-view>
