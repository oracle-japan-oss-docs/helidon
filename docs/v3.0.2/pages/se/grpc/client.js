<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.47"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.45" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.33" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.28" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.27" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.29" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.61"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2QZxGj.spl1" title="原文 : Helidon gRPC client provides a framework for creating gRPC client applications.">Helidon gRPCクライアントは、<a href="http://grpc.io/" target="_blank">gRPC</a>クライアント・アプリケーションを作成するためのフレームワークを提供します。</span> <span class="merged" id="all.2QZxGj.spl2" title="原文 : The client framework allows a uniform way to access gRPC services that use either Protobuf or some custom serialization format.">クライアント・フレームワークを使用すると、Protobufまたは一部のカスタム直列化フォーマットを使用するgRPCサービスに均一にアクセスできます。</span> <span class="merged" id="all.2QZxGj.spl3" title="原文 : The benefits of using Helidon gRPC client Framework include:">Helidon gRPCクライアント・フレームワークを使用する利点は次のとおりです:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3NqpXi" title="原文 : It provides a number of helper methods that make client implementation significantly simpler.">クライアントの実装を大幅に簡素化するヘルパー・メソッドが多数用意されています。</span></p>

</li>
<li>
<p><span class="merged" id="all.5aybi" title="原文 : It allows you to configure some of the Helidon value-added features, such as security, metrics collection and interceptors down to the method level."><router-link :to="{path: '/se/grpc/server', hash: '#_security'}">security</router-link>、<router-link :to="{path: '/se/grpc/server', hash: '#_service_metrics'}">「メトリクス収集」</router-link>、<router-link :to="{path: '/se/grpc/server', hash: '#_interceptors'}">「インターセプタ」</router-link>など、一部のHelidon値追加機能をメソッド・レベルまで構成できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1E8Kj6" title="原文 : It allows you to easily specify custom marshallers for requests and responses if protobuf does not satisfy your needs."><code>protobuf</code>がニーズを満たさない場合、リクエストおよびレスポンスに対してカスタム・マーシャラを簡単に指定できます。</span></p>

</li>
</ul>

<p><span class="merged" id="all.zOacr.spl1" title="原文 : The class GrpcServiceClient acts as the client object for accessing a gRPC service.">クラス<code>GrpcServiceClient</code>は、gRPCサービスにアクセスするためのクライアント・オブジェクトとして機能します。</span> <span class="merged" id="all.zOacr.spl2" title="原文 : Creating a GrpcServiceClient involves:"><code>GrpcServiceClient</code>の作成には、次の作業が含まれます:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.125IVt" title="原文 : Creating a ClientServiceDescriptor which describes the methods in the service that this client can invoke.">このクライアントが呼び出せるサービスのメソッドを記述する<code>ClientServiceDescriptor</code>の作成。</span>

</li>
<li>
<span class="merged" id="all.2HVobl" title="原文 : Creating a gRPC Channel through which the client communicates with the server.">クライアントがサーバーとの通信に使用するgRPC <code>Channel</code>の作成。</span>

</li>
</ol>

<p><span class="merged" id="all.2urLdn" title="原文 : In later sections in this document, you will see how to customize both ClientServiceDescriptor and the Channel.">このドキュメントの後半の項では、<code>ClientServiceDescriptor</code>と<code>Channel</code>の両方をカスタマイズする方法について説明します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.43"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1P7e6S" title="原文 : To enable gRPC Client add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPCクライアントを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-grpc-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.45"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_client_implementation_basics"><span class="merged" id="all.1oS1nV" title="原文 : Client Implementation Basics">クライアント実装の基本</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.28KfGu.spl1" title="原文 : The first step to create a Helidon gRPC client application is to describe the set of methods in the gRPC service.">Helidon gRPCクライアント・アプリケーションを作成する最初のステップは、gRPCサービスの一連のメソッドを記述することです。</span> <span class="merged" id="all.28KfGu.spl2" title="原文 : Helidon gRPC client Framework (simply called the &quot;Client framework&quot; in the remainder of the document) provides a class called ClientServiceDescriptor to describe the set of methods of a service that the client may invoke.">Helidon gRPCクライアント・フレームワーク(ドキュメントの残りの部分でクライアント・フレームワークと呼ばれるのみ)は、<code>ClientServiceDescriptor</code>というクラスを提供し、クライアントが呼び出せるサービスのメソッド・セットを記述します。</span> <span class="merged" id="all.28KfGu.spl3" title="原文 : There are several ways to build and initialize a ClientServiceDescriptor."><code>ClientServiceDescriptor</code>を構築および初期化するには、いくつかの方法があります。</span> 
<ul class="ulist">
<li>
<p><span class="merged" id="all.3yxIJI.spl1" title="原文 : The first option is to initialize ClientServiceDescriptor using protoc generated artifacts like BindableService or io.grpc.ServiceDescriptor.">最初のオプションは、<code>BindableService</code>や<code>io.grpc.ServiceDescriptor</code>などの<code>protoc</code>で生成されたアーティファクトを使用して<code>ClientServiceDescriptor</code>を初期化することです。</span> <span class="merged" id="all.3yxIJI.spl2" title="原文 : This option is possible if the gRPC service was built using .proto file.">このオプションは、gRPCサービスが<code>.proto</code>ファイルを使用して構築された場合に使用できます。</span> <span class="merged" id="all.3yxIJI.spl3" title="原文 : In this case, the set of gRPC methods, their types and the appropriate marshallers are detected automatically.">この場合、一連のgRPCメソッド、それらの型、および適切なマーシャラが自動的に検出されます。</span> <span class="merged" id="all.3yxIJI.spl4" title="原文 : This is certainly the easiest way to initialize a ClientServiceDescriptor.">これは、<code>ClientServiceDescriptor</code>を初期化する最も簡単な方法です。</span> </p>

</li>
<li>
<p><span class="merged" id="all.vlwvi.spl1" title="原文 : The other option is to programmatically build the ClientServiceDescriptor.">もう1つのオプションは、プログラムによって<code>ClientServiceDescriptor</code>を構築することです。</span> <span class="merged" id="all.vlwvi.spl2" title="原文 : This option should be taken if the service was not built from protobuf files or if the protoc generated artifacts are not available to the client.">このオプションは、サービスがprotobufファイルから構築され<strong>「なかった」</strong>場合、または<code>protoc</code>で生成されたアーティファクトがクライアントで使用できない場合に使用する必要があります。</span> </p>

</li>
</ul>

</li>
<li>
<span class="merged" id="all.4V72Sm" title="原文 : The next step is to create a gRPC Channel to use to communicate with the server.">次のステップでは、サーバーとの通信に使用するgRPC <code>Channel</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.4TZjLy" title="原文 : Finally, we create an instance of GrpcServiceClient passing the ClientMethodDescriptor and the Channel instances.">最後に、<code>ClientMethodDescriptor</code>および<code>Channel</code>インスタンスを渡す<code>GrpcServiceClient</code>のインスタンスを作成します。</span>

</li>
</ol>

</div>


<h3 id="_creating_grpc_clients_from_protoc_generated_artifacts"><span class="merged" id="all.A05eZ" title="原文 : Creating gRPC clients from protoc generated artifacts"><code>protoc</code>で生成されたアーティファクトからのgRPCクライアントの作成</span></h3>
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

<p><span class="merged" id="all.33qyUV.spl1" title="原文 : If you run it through protoc, it will generate a class (among other things) called StringService."><code>protoc</code>を使用して実行すると、<code>StringService</code>というクラス(他のもの)が生成されます。</span> <span class="merged" id="all.33qyUV.spl2" title="原文 : Assuming that the StringService server is running on port 1408, here is how you can create a Helidon gRPC Client that uses the Client Framework to invoke various types of gRPC methods."><code>StringService</code>サーバーがポート1408で実行されている場合、クライアント・フレームワークを使用して様々なタイプのgRPCメソッドを呼び出すHelidon gRPCクライアントを作成する方法を次に示します。</span> </p>


<h4 id="_creating_and_initializing_a_clientservicedescriptor_for_stringservice_generated_from_protoc"><span class="merged" id="all.2w5UAO" title="原文 : Creating and initializing a ClientServiceDescriptor for StringService (generated from protoc)">StringService用のClientServiceDescriptorの作成および初期化(<code>protoc</code>から生成)</span></h4>
<div class="section">
<p><span class="merged" id="all.46RsN0" title="原文 : Let&rsquo;s build a class called ProtoBasedStringServiceClient that invokes the various types of gRPC methods that our StringService offers."><code>StringService</code>が提供する様々なタイプのgRPCメソッドを起動する<code>ProtoBasedStringServiceClient</code>というクラスを作成します。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() {
        ClientServiceDescriptor desc = ClientServiceDescriptor
                .builder(StringService.getServiceDescriptor())  <span class="conum" data-value="1" />
                .build();

        Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)  <span class="conum" data-value="2" />
                .usePlaintext().build();

        this.client = GrpcServiceClient.create(channel, desc);  <span class="conum" data-value="3" />
    }

    /**
     * Many gRPC methods take a {@link io.grpc.StreamObserver} as an argument. Lets
     * build a helper class that can be used in our example.
     */
    public static class StringMessageStream&lt;T&gt; implements StreamObserver&lt;T&gt; {  <span class="conum" data-value="4" />
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

<ul class="colist">
<li data-value="1"><span class="merged" id="all.48pyhL.spl1" title="原文 : Initialize the builder by specifying the StringService&rsquo;s proto ServiceDescriptor."><code>StringService&rsquo;s</code> proto <code>ServiceDescriptor</code>を指定してビルダーを初期化します。</span> <span class="merged" id="all.48pyhL.spl2" title="原文 : From the ServiceDescriptor, the builder detects the service name, the set of method names, the type of each method (like Unary, ServerStreaming, etc.), the request and response types (and hence their corresponding Marshallers), etc."><code>ServiceDescriptor</code>から、ビルダーはサービス名、メソッド名のセット、各メソッドのタイプ(Unary、ServerStreamingなど)、リクエストとレスポンスのタイプ(したがって対応するMarshallersなどを検出します。</span> </li>
<li data-value="2"><span class="merged" id="all.46knU5" title="原文 : We create a Channel to the service that is running on localhost:1408."><code>localhost:1408</code>で実行されているサービスへの<code>Channel</code>を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.V8xgY.spl1" title="原文 : Finally, we create our GrpcServiceClient by using the above mentioned ClientServiceDescriptor. and Channel.">最後に、前述の<code>ClientServiceDescriptor</code>と<code>Channel</code>を使用して<code>GrpcServiceClient</code>を作成します。</span> <span class="merged" id="all.V8xgY.spl2" title="原文 : This client reference will be used to invoke various gRPC methods in our StringService.">この<code>client</code>参照は、<code>StringService</code>で様々なgRPCメソッドを呼び出すために使用されます。</span> </li>
<li data-value="4"><span class="merged" id="all.2QYVaa.spl1" title="原文 : We define a static inner class that implements the io.grpc.StreamObserver interface."><code>io.grpc.StreamObserver</code>インタフェースを実装する静的な内部クラスを定義します。</span> <span class="merged" id="all.2QYVaa.spl2" title="原文 : An instance of this class can be used wherever a io.grpc.StreamObserver is required (like server streaming, bi-directional streaming methods).">このクラスのインスタンスは、<code>io.grpc.StreamObserver</code>が必要な場合(サーバー・ストリーミング、双方向ストリーミング・メソッドなど)で使用できます。</span> </li>
</ul>

</div>


<h4 id="_invoking_a_unary_method_on_the_stringservice"><span class="merged" id="all.9lThM" title="原文 : Invoking a unary method on the StringService">StringServiceでの単項メソッドの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.WQRK8" title="原文 : The Client Framework provides many helper methods to invoke gRPC unary methods.">クライアント・フレームワークには、gRPC単項メソッドを起動するためのヘルパー・メソッドが多数用意されています。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeUnaryMethod() throws Exception {
        StringMessage input = StringMessage.newBuilder().setText("ABC").build();

        CompletableFuture&lt;String&gt; result = client.unary("Lower", input);  <span class="conum" data-value="1" />

        String lcase = client.blockingUnary("Lower", input);  <span class="conum" data-value="2" />

        StringMessageStream stream = new StringMessageStream&lt;StringMessage&gt;();
        client.blockingUnary("Lower", stream);  <span class="conum" data-value="3" />
    }

    public static class StringMessageStream&lt;T&gt; { /* code omitted */ }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.35xmX2.spl1" title="原文 : This variant of the unary API takes the method name and a request object and returns a CompletableFuture&lt;Response&gt; where &lt;Response&gt; is the response type."><code>unary</code> APIのこのバリアントは、メソッド名とリクエスト・オブジェクトを取得し、<code>&lt;Response></code>がレスポンス・タイプである<code>CompletableFuture&lt;Response></code>を返します。</span> <span class="merged" id="all.35xmX2.spl2" title="原文 : Here we invoke the Lower method passing the input StringMessage.">ここでは、入力<code>StringMessage</code>を渡す<code>Lower</code>メソッドを呼び出します。</span> <span class="merged" id="all.35xmX2.spl3" title="原文 : This method returns a CompletableFuture&lt;StringMessage&gt; as its response thus allowing the client to obtain the result asynchronously.">このメソッドでは、レスポンスとして<code>CompletableFuture&lt;StringMessage></code>が返されるため、クライアントは結果を非同期で取得できます。</span> </li>
<li data-value="2"><span class="merged" id="all.LZTgJ.spl1" title="原文 : This is simply a wrapper around the above method.">これは単に前述のメソッドのラッパーです。</span> <span class="merged" id="all.LZTgJ.spl2" title="原文 : This method blocks until the result is available.">このメソッドは、結果が使用可能になるまでブロックします。</span> </li>
<li data-value="3"><span class="merged" id="all.34niDo" title="原文 : Here, we invoke the unary method by passing the StringMessageStream whose onNext method will be called (once) when the result is available.">ここでは、結果が使用可能になると<code>onNext</code>メソッドがコール(1回)される<code>StringMessageStream</code>を渡して、<code>unary</code>メソッドを起動します。</span></li>
</ul>

</div>


<h4 id="_invoking_a_client_streaming_method_on_the_stringservice"><span class="merged" id="all.4ZId9" title="原文 : Invoking a client streaming method on the StringService">StringServiceでのクライアント・ストリーミング・メソッドの呼出し</span></h4>
<div class="section">
<p><span class="merged" id="all.4bE9yX.spl1" title="原文 : Let&rsquo;s invoke the Join method which causes the server to return a single result after the client has streamed the request values to the server."><code>Join</code>メソッドを呼び出して、クライアントがリクエスト値をサーバーにストリームした<strong>後で</strong>サーバーが単一の結果を返すようにします。</span> <span class="merged" id="all.4bE9yX.spl2" title="原文 : The gRPC API expects the client application to provide an instance of io.grpc.StreamObserver as an argument during the invocation of the client streaming method.">gRPC APIは、クライアント・アプリケーションがクライアント・ストリーミング・メソッドの起動時に引数として<code>io.grpc.StreamObserver</code>のインスタンスを提供することを想定しています。</span> </p>

<p><span class="merged" id="all.2ujiuX.spl1" title="原文 : In order to simplify the task of invoking Client Streaming methods, the Helidon Client Framework provides two methods to invoke gRPC client Streaming methods.">クライアント・ストリーミング・メソッドを起動するタスクを簡略化するために、Helidonクライアント・フレームワークでは、gRPCクライアント・ストリーミング・メソッドを呼び出す2つのメソッドが提供されます。</span> <span class="merged" id="all.2ujiuX.spl2" title="原文 : The first variant takes an Iterable as argument which in turn is converted into a io.grpc.StreamObserver.">最初のバリアントは<code>Iterable</code>を引数として取り、引数は<code>io.grpc.StreamObserver</code>に変換されます。</span> <span class="merged" id="all.2ujiuX.spl3" title="原文 : The second variant takes a io.grpc.StreamObserver as argument.">2番目のバリアントは、引数として<code>io.grpc.StreamObserver</code>を取ります。</span> <span class="merged" id="all.2ujiuX.spl4" title="原文 : The first variant can be used if the number of values to be streamed in small and known a priori.">最初のバリアントは、小さいプリオリでストリームされる値の数がわかっている場合に使用できます。</span> </p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeClientStreamingWithIterable() throws Exception {

        String sentence = "A simple invocation of a client streaming method";
        Collection&lt;StringMessage&gt; input = Arrays.stream(sentence.split(" "))  <span class="conum" data-value="1" />
                  .map(w -&gt; StringMessage.newBuilder().setText(w).build())
                  .collect(Collectors.toList());

        CompletableFuture&lt;StringMessage&gt; result =
                  grpcClient.clientStreaming("Join", input);  <span class="conum" data-value="2" />
    }

    public void invokeClientStreaming() throws Exception {
        String sentence = "A simple invocation of a client streaming method";
        StringMessageStream responseStream = new StringMessageStream&lt;StringMessage&gt;();
        StreamObserver&lt;StringMessage&gt; clientStream =
                  grpcClient.clientStreaming("Join", responseStream);  <span class="conum" data-value="3" />

        for (String word : sentence.split(" ")) {
            clientStream.onNext(StringMessage.newBuilder().setText(word).build());  <span class="conum" data-value="4" />
        }
        clientStream.onCompleted();  <span class="conum" data-value="5" />
    }

    public static class StringMessageStream&lt;T&gt; { /* code is omitted */ }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1bu3fC" title="原文 : We prepare the collection that contains the values to be streamed.">ストリームする値を含むコレクションを準備します。</span></li>
<li data-value="2"><span class="merged" id="all.4GtNbU.spl1" title="原文 : We call the first variant of the clientStreaming() method that takes the method name and the collection of values to be streamed from the client.">クライアントからストリームされるメソッド名と値のコレクションをとる<code>clientStreaming()</code>メソッドの最初のバリアントを呼び出します。</span> <span class="merged" id="all.4GtNbU.spl2" title="原文 : Note: The above helper method is useful if the values to be streamed is fixed and small in number.">ノート: 前述のヘルパー・メソッドは、ストリームされる値が固定され、数値が小さい場合に役立ちます。</span> </li>
<li data-value="3"><span class="merged" id="all.1Kp27Q.spl1" title="原文 : If the number of values to be streamed is large (or unknown), then it is better to use this variant of the clientStreaming() method that takes a io.grpc.StreamObserver as an argument.">ストリームされる値の数が多い(または不明な)場合は、<code>io.grpc.StreamObserver</code>を引数として取る<code>clientStreaming()</code>メソッドのこのバリアントを使用することをお薦めします。</span> <span class="merged" id="all.1Kp27Q.spl2" title="原文 : This method returns a client stream through which the client can stream (potentially a large number of) value to the server.">このメソッドは、クライアントが(場合によっては多数の)値をサーバーにストリームできるクライアント・ストリームを返します。</span> </li>
<li data-value="4"><span class="merged" id="all.1jGpTT" title="原文 : Once the client stream is obtained, the client streams the values using the onNext() method on the stream.">クライアント・ストリームが取得されると、クライアントはストリームの<code>onNext()</code>メソッドを使用して値をストリームします。</span></li>
<li data-value="5"><span class="merged" id="all.2OwJDp" title="原文 : When all values have been stream, the client invokes the onCompleted() method signal that all values have been streamed from the client.">すべての値がストリームされると、クライアントは、すべての値がクライアントからストリームされたことを示す<code>onCompleted()</code>メソッド・シグナルを呼び出します。</span></li>
</ul>

</div>

</div>


<h3 id="_invoking_a_server_streaming_method_on_the_stringservice_generated_from_protoc"><span class="merged" id="all.2HMbax" title="原文 : Invoking a server streaming method on the StringService (generated from protoc)">StringServiceでのサーバー・ストリーミング・メソッドの呼出し(<code>protoc</code>から生成)</span></h3>
<div class="section">
<p><span class="merged" id="all.2N62Lx" title="原文 : Let&rsquo;s invoke the &quot;Split&quot; method which causes the server to stream the results back.">結果をストリーミングするSplitメソッドを呼び出します。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeServerStreaming() throws Exception {
        String sentence = "This sentence will be split into words and sent back to client";
        StringMessage input = StringMessage.newBuilder().setText(sentence).build();  <span class="conum" data-value="1" />

        StringMessageStream&lt;StringMessage&gt; observer = new StringMessageStream&lt;&gt;();  <span class="conum" data-value="2" />
        grpcClient.serverStreaming("Split", input, observer);  <span class="conum" data-value="3" />
    }

    public static class StringMessageStream&lt;T&gt; { /* code is omitted */ }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2FZeE6" title="原文 : We prepare the input StringMessage that needs to be split.">分割する必要がある入力<code>StringMessage</code>を準備します。</span></li>
<li data-value="2"><span class="merged" id="all.kRh6j" title="原文 : We create a StringMessageStream which will receive the results streamed from the server.">サーバーからストリームされた結果を受け取る<code>StringMessageStream</code>を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.2f8R2j.spl1" title="原文 : We call the serverStreaming() passing the input and the StringMessageStream as arguments.">入力および<code>StringMessageStream</code>を引数として渡す<code>serverStreaming()</code>を呼び出します。</span> <span class="merged" id="all.2f8R2j.spl2" title="原文 : The server sends a stream of words by calling the onNext() method on the StringMessageStream for each word.">サーバーは、各単語に対して<code>StringMessageStream</code>で<code>onNext()</code>メソッドを呼び出すことによって、単語のストリームを送信します。</span> </li>
</ul>

</div>


<h3 id="_invoking_a_bi_directional_streaming_method_on_the_stringservice_generated_from_protoc"><span class="merged" id="all.D81qP" title="原文 : Invoking a bi-directional streaming method on the StringService (generated from protoc)">StringServiceでの双方向ストリーミング・メソッドの呼出し(<code>protoc</code>から生成)</span></h3>
<div class="section">
<p><span class="merged" id="all.1K4j2j" title="原文 : Now let&rsquo;s invoke the Echo method in which both the client and the server have to stream the request and response.">次に、クライアントとサーバーの両方がリクエストとレスポンスをストリーミングする必要がある<code>Echo</code>メソッドを呼び出します。</span></p>

<markup
lang="java"

>public class ProtoBasedStringServiceClient {

    private GrpcServiceClient client;

    public ProtoBasedStringServiceClient() { /* code omitted */ }

    public void invokeBidiStreaming() throws Exception {

        StringMessageStream&lt;StringMessage&gt; observer = new StringMessageStream&lt;&gt;();  <span class="conum" data-value="1" />
        StringMessageStream&lt;StringMessage&gt; clientStream = grpcClient
                                .bidiStreaming("Echo", observer);  <span class="conum" data-value="2" />

        String sentence = "Each word will be echoed back to the client by the server";
        for (String word : sentence.split(" ")) {
            clientStream.onNext(StringMessage.newBuilder().setText(word).build());  <span class="conum" data-value="3" />
        }
        clientStream.onCompleted();  <span class="conum" data-value="4" />
    }

    public static class StringMessageStream&lt;T&gt; { /* code is omitted */ }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.kRh6j.1" title="原文 : We create a StringMessageStream which will receive the results streamed from the server.">サーバーからストリームされた結果を受け取る<code>StringMessageStream</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.4Ioapx.spl1" title="原文 : We call the bidiStreaming() passing the observer as argument."><code>observer</code>を引数として渡す<code>bidiStreaming()</code>を呼び出します。</span> <span class="merged" id="all.4Ioapx.spl2" title="原文 : The server will send its results through this stream (basically by calling the onNext() on the observer).">サーバーは、このストリームを介して結果を送信します(基本的に、<code>observer</code>で<code>onNext()</code>を呼び出します)。</span> <span class="merged" id="all.4Ioapx.spl3" title="原文 : The method returns a (client) stream which should be used by the client to stream values to the server.">このメソッドは、クライアントが値をサーバーにストリームするために使用する(クライアント)ストリームを返します。</span> </li>
<li data-value="3"><span class="merged" id="all.2DfH6k" title="原文 : We stream each word in our sentence to the server by calling the onNext() method on the clientStream."><code>clientStream</code>で<code>onNext()</code>メソッドをコールして、センテンス内の各単語をサーバーにストリームします。</span></li>
<li data-value="4"><span class="merged" id="all.btUBn" title="原文 : We call the onCompleted() method on the clientStream to signal that the client has streamed all its values."><code>clientStream</code>で<code>onCompleted()</code>メソッドを呼び出して、クライアントがすべての値をストリーミングしたことを通知します。</span></li>
</ul>

</div>


<h3 id="_programmatically_creating_clientservicedescriptor_for_stringservice"><span class="merged" id="all.11cPSx" title="原文 : Programmatically creating ClientServiceDescriptor for StringService">StringService用のClientServiceDescriptorのプログラムによる作成</span></h3>
<div class="section">
<p><span class="merged" id="all.iwUIX" title="原文 : Assuming that the service is still running on port 1408, let&rsquo;s see how to create our Client without using the StringService&apos;s proto ServiceDescriptor.">サービスがまだポート1408上で実行されていると仮定して、<code>StringService</code>のproto <code>ServiceDescriptor</code>を使用せずにクライアントを作成する方法を確認します。</span></p>

<p><span class="merged" id="all.4TXNJz.spl1" title="原文 : Since we are not going to use the StringService&apos;s proto ServiceDescriptor, we need to describe the methods that the client needs to invoke."><code>StringService</code>のproto <code>ServiceDescriptor</code>は使用<strong>「しない」</strong>ため、クライアントで起動する必要があるメソッドを記述する必要があります。</span> <span class="merged" id="all.4TXNJz.spl2" title="原文 : The Helidon client framework provides several methods to easily describe gRPC methods.">Helidonクライアント・フレームワークは、gRPCメソッドを簡単に記述するためのいくつかのメソッドを提供します。</span> </p>

<p><span class="merged" id="all.1d5Nkq" title="原文 : For example, to register a unary method, we need to use the unary method and configure it to specify the request and response types.">たとえば、単項メソッドを登録するには、<code>unary</code>メソッドを使用して、リクエスト・タイプとレスポンス・タイプを指定するように構成する必要があります。</span></p>

<p><span class="merged" id="all.2sHX13" title="原文 : Other than describing the methods that our client will invoke, the rest of the code should be very similar to (or the same as) the previous section!!">クライアントが呼び出すメソッドを記述する以外は、コードの残りの部分が前のセクションと非常に似ている(または同じ)必要があります。</span></p>

<markup
lang="java"

>public class StringServiceClient {

    public static void main(String[] args) {
        ClientMethodDescriptor lower = ClientMethodDescriptor
                    .unary("StringService", "Lower")  <span class="conum" data-value="1" />
                    .requestType(StringMessage.class)  <span class="conum" data-value="2" />
                    .responseType(StringMessage.class)   <span class="conum" data-value="3" />
                    .build();  <span class="conum" data-value="4" />

        ClientMethodDescriptor join = ClientMethodDescriptor
                    .clientStreaming("StringService", "Join")   <span class="conum" data-value="5" />
                    .requestType(StringMessage.class)
                    .responseType(StringMessage.class)
                    .build();

        ClientMethodDescriptor split = ClientMethodDescriptor
                    .serverStreaming("StringService", "Split")  <span class="conum" data-value="6" />
                    .requestType(StringMessage.class)
                    .responseType(StringMessage.class)
                    .build();

        ClientMethodDescriptor echo = ClientMethodDescriptor
                    .bidirectional("StringService", "Echo")  <span class="conum" data-value="7" />
                    .requestType(StringMessage.class)
                    .responseType(StringMessage.class)
                    .build();

        ClientServiceDescriptor serviceDesc = ClientServiceDescriptor  <span class="conum" data-value="8" />
                    .builder(StringService.class)
                    .unary(lower)
                    .clientStreaming(join)
                    .serverStreaming(split)
                    .bidirectional(echo)
                    .build();


        Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)  <span class="conum" data-value="9" />
                .usePlaintext().build();

        GrpcServiceClient client = GrpcServiceClient.create(channel, serviceDesc);  // (<span class="conum" data-value="10" />

    }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.43zSN3.spl1" title="原文 : Use the unary() method on ClientMethodDescriptor to create a builder for a gRPC unary method.">gRPC単項メソッドのビルダーを作成するには、<code>ClientMethodDescriptor</code>で<code>unary()</code>メソッドを使用します。</span> <span class="merged" id="all.43zSN3.spl2" title="原文 : The service name and the method name (&quot;Lower&quot;) are specified.">サービス名とメソッド名(「Lower」)が指定されます。</span> </li>
<li data-value="2"><span class="merged" id="all.4FVIbU" title="原文 : Set the request type of the method to be StringMessage (since the Lower method takes StringMessage as a parameter).">メソッドのリクエスト・タイプを<code>StringMessage</code>に設定します(<code>Lower</code>メソッドはパラメータとして<code>StringMessage</code>を使用するため)。</span></li>
<li data-value="3"><span class="merged" id="all.3cH1yL" title="原文 : Set the response type of the method to be StringMessage (since the Lower method returns a StringMessage as a parameter).">メソッドのレスポンス・タイプを<code>StringMessage</code>に設定します(<code>Lower</code>メソッドはパラメータとして<code>StringMessage</code>を返すため)。</span></li>
<li data-value="4"><span class="merged" id="all.2pZSTm.spl1" title="原文 : Build the ClientMethodDescriptor."><code>ClientMethodDescriptor</code>をビルドします。</span> <span class="merged" id="all.2pZSTm.spl2" title="原文 : Note that the return value is a ClientMethodDescriptor that contains the correct marshaller for the request &amp; response types.">戻り値は<code>ClientMethodDescriptor</code>で、リクエスト&amp;レスポンス・タイプに対する正しいマーシャラが含まれています。</span> </li>
<li data-value="5"><span class="merged" id="all.jHz9b.spl1" title="原文 : Use the clientStreaming() method on ClientMethodDescriptor to create a builder for a gRPC client streaming method."><code>ClientMethodDescriptor</code>で<code>clientStreaming()</code>メソッドを使用して、gRPCクライアント・ストリーミング・メソッドのビルダーを作成します。</span> <span class="merged" id="all.jHz9b.spl2" title="原文 : The service name and the method name (&quot;Join&quot;) are specified.">サービス名とメソッド名(Join)が指定されます。</span> </li>
<li data-value="6"><span class="merged" id="all.2FqBnT.spl1" title="原文 : Use the serverStreaming() method on ClientMethodDescriptor to create a builder for a gRPC server streaming method.">gRPCサーバーのストリーミング・メソッドのビルダーを作成するには、<code>ClientMethodDescriptor</code>で<code>serverStreaming()</code>メソッドを使用します。</span> <span class="merged" id="all.2FqBnT.spl2" title="原文 : The service name and the method name (&quot;Split&quot;) are specified.">サービス名とメソッド名(「Split」)が指定されます。</span> </li>
<li data-value="7"><span class="merged" id="all.269tkM.spl1" title="原文 : Use the bidirectional() method on ClientMethodDescriptor to create a builder for a gRPC Bidi streaming method."><code>ClientMethodDescriptor</code>で<code>bidirectional()</code>メソッドを使用して、gRPC Bidiストリーミング・メソッドのビルダーを作成します。</span> <span class="merged" id="all.269tkM.spl2" title="原文 : The service name and the method name (&quot;Echo&quot;) are specified.">サービス名とメソッド名(Echo)が指定されます。</span> </li>
<li data-value="8"><span class="merged" id="all.3CxjTb" title="原文 : Create a ClientServiceDescriptor for a service named StringService and add all the defined ClientMethodDescriptors."><code>StringService</code>という名前のサービスの<code>ClientServiceDescriptor</code>を作成し、定義されているすべての<code>ClientMethodDescriptor</code>を追加します。</span></li>
<li data-value="9"><span class="merged" id="all.46knU5.1" title="原文 : We create a Channel to the service that is running on localhost:1408."><code>localhost:1408</code>で実行されているサービスへの<code>Channel</code>を作成します。</span></li>
<li data-value="10"><span class="merged" id="all.X9gV1" title="原文 : Finally, we create our GrpcServiceClient by using the above-mentioned ClientServiceDescriptor and Channel.">最後に、前述の<code>ClientServiceDescriptor</code>および<code>Channel</code>を使用して<code>GrpcServiceClient</code>を作成します。</span></li>
</ul>

<p><span class="merged" id="all.iFDWy" title="原文 : At this point the client object can be used to invoke any of the four types of methods we have seen in the earlier sections.">この時点で、<code>client</code>オブジェクトを使用して、前の項で確認した4つのメソッドのいずれかを起動できます。</span></p>

</div>


<h3 id="_creating_grpc_clients_for_non_protobuf_services"><span class="merged" id="all.4FQR6m" title="原文 : Creating gRPC clients for non-protobuf services">非protobufサービスのgRPCクライアントの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2gCtLu" title="原文 : If your service is not using protobuf for serialization, then the client framework allows you to programmatically initialize ClientMethodDescriptor and create clients to invoke methods on the service.">サービスがシリアライズにprotobufを使用して<strong>「いない」</strong>場合、クライアント・フレームワークでは<code>ClientMethodDescriptor</code>をプログラム的に初期化し、クライアントを作成してサービスでメソッドを呼び出すことができます。</span></p>

<p><span class="merged" id="all.2MiCEO.spl1" title="原文 : All you have to do is create the set of ClientMethodDescriptors and the ClientServiceDescriptor as described in the previous section.">前述の項で説明するように、<code>ClientMethodDescriptor</code>のセットと<code>ClientServiceDescriptor</code>を作成することのみが必要になります。</span> <span class="merged" id="all.2MiCEO.spl2" title="原文 : Just do not set the request and response types in the ClientMethodDescriptor anymore."><code>ClientMethodDescriptor</code>のリクエストおよびレスポンス・タイプをこれ以上設定<strong>「しない」</strong>でください。</span> <span class="merged" id="all.2MiCEO.spl3" title="原文 : Furthermore, there is an API in the ClientServiceDescriptor that makes this even simpler where you can simply pass the method name.">さらに、<code>ClientServiceDescriptor</code>には、メソッド名を単純に渡すことができる、さらに簡素化するAPIがあります。</span> <span class="merged" id="all.2MiCEO.spl4" title="原文 : For example, to create a client streaming method called &quot;JoinString&quot; that uses some custom marshalling, simply call the clientStreaming(&quot;JoinString&quot;).">たとえば、カスタム・マーシャリングを使用する<code>"JoinString"</code>というクライアント・ストリーミング・メソッドを作成するには、<code>clientStreaming("JoinString")</code>をコールします。</span> </p>

<markup
lang="java"

>public static void main(String[] args) throws Exception {
    ClientServiceDescriptor descriptor = ClientServiceDescriptor.builder(HelloService.class)  <span class="conum" data-value="1" />
                                                                .marshallerSupplier(new JsonbMarshaller.Supplier())  <span class="conum" data-value="2" />
                                                                .clientStreaming("JoinString")  <span class="conum" data-value="3" />
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

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XAv7Y" title="原文 : Create a ClientServiceDescriptor for the HelloService."><code>HelloService</code>の<code>ClientServiceDescriptor</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.aDC0J" title="原文 : Specify a custom marshaller using the built-in JSON-B marshaller to serialize/deserialize requests and responses.">組込みのJSON-Bマーシャラを使用してカスタム・マーシャラを指定し、リクエストとレスポンスをシリアライズ/直列化復元します。</span></li>
<li data-value="3"><span class="merged" id="all.UO70N" title="原文 : Add the &quot;JoinString&quot; client streaming method to the ClientServiceDescriptor.">「JoinString」クライアント・ストリーミング・メソッドを<code>ClientServiceDescriptor</code>に追加します。</span></li>
</ul>

<p><span class="merged" id="all.1K5n1s" title="原文 : Since we didn&rsquo;t set the request or response type (like we did in the previous sections), the custom marshaller will be used for Marshalling and Unmarshalling the request and response values.">リクエストまたはレスポンス・タイプ(前の項で行ったように)を設定しなかったため、カスタム・マーシャラがリクエストおよびレスポンス値のマーシャリングおよびアンマーシャリングに使用されます。</span></p>

<p><span class="merged" id="all.1zm5Ff" title="原文 : Note that whether a ClientServiceDescriptor is built using protobuf artifacts or is built programmatically, the same set of APIs provided by the Client Framework can be used to invoke gRPC methods."><code>ClientServiceDescriptor</code>がprotobufアーティファクトを使用して構築されているか、プログラムによって構築されているかにかかわらず、クライアント・フレームワークで提供されているものと同じAPIセットを使用してgRPCメソッドを呼び出すことができます。</span></p>

</div>


<h3 id="_marshalling"><span class="merged" id="all.2am2Cj.1"  title="原文:: Marshalling">マーシャリング</span></h3>
<div class="section">

<h4 id="_default_marshalling_support"><span class="merged" id="all.2pYYX7.1" title="原文 : Default Marshalling Support">デフォルトのマーシャリング・サポート</span></h4>
<div class="section">
<p><span class="merged" id="all.1lBbBA.1.spl1" title="原文 : Helidon gRPC supports Protobuf out of the box.">Helidon gRPCは、すぐに使用できるProtobufをサポートします。</span> <span class="merged" id="all.1lBbBA.1.spl2" title="原文 : The Protobuf marshaller will be used by default for any request and response classes that extend com.google.protobuf.MessageLite, which is the case for all classes generated from a proto file using protoc compiler.">Protobuf marshallerは、<code>com.google.protobuf.MessageLite</code>を拡張するリクエストおよびレスポンス・クラスに対してデフォルトで使用されます。これは、<code>protoc</code>コンパイラを使用して<code>proto</code>ファイルから生成されるすべてのクラスの場合です。</span> </p>

<p><span class="merged" id="all.qahU9.1" title="原文 : That means that you don&rsquo;t need any special handling or configuration in order to support Protobuf serialization of requests and responses.">つまり、リクエストとレスポンスのProtobufシリアライズをサポートするために特別な処理や構成は必要ありません。</span></p>

</div>


<h4 id="_custom_marshalling"><span class="merged" id="all.3E6Yvy.1" title="原文 : Custom Marshalling">カスタム・マーシャリング</span></h4>
<div class="section">
<p><span class="merged" id="all.1OEmCk.1" title="原文 : Helidon makes the use of custom marshallers trivial and provides one custom implementation, JsonbMarshaller, out of the box.">Helidonは、カスタム・マーシャラを簡単に使用し、すぐに使用できるカスタム実装<a href="https://github.com/oracle/helidon/tree/master/grpc/core/src/main/java/io/helidon/grpc/core/JsonbMarshaller.java" target="_blank">JsonbMarshaller</a>を提供します。</span></p>

<p><span class="merged" id="all.1VannX.1.spl1" title="原文 : You can also easily implement your own marshaller to support serialization formats that are not supported natively by Helidon, by implementing Marshaller and MarshallerSupplier interfaces."><code>Marshaller</code>および<code>MarshallerSupplier</code>インタフェースを実装することで、Helidonでネイティブにサポートされないシリアライズ形式をサポートするために、独自のマーシャラを簡単に実装することもできます。</span> <span class="merged" id="all.1VannX.1.spl2" title="原文 : As an example, check out the source code of the built-in marshaller: JsonbMarshaller.java.">例として、組込みマーシャラのソース・コードを確認: <a href="https://github.com/oracle/helidon/tree/master/grpc/core/src/main/java/io/helidon/grpc/core/JsonbMarshaller.java" target="_blank">JsonbMarshaller.java</a>。</span> </p>

<p><span class="merged" id="all.6pteM.1.spl1" title="原文 : Furthermore, Oracle Coherence CE provides a marshaller for a highly optimized, binary, platform independent Portable Object Format (POF).">さらに、<a href="https://coherence.community/" target="_blank">Oracle Coherence CE</a>は、高度に最適化されたバイナリ、プラットフォームに依存しないポータブル・オブジェクト・フォーマット(POF)のためのマーシャラを提供します。</span> <span class="merged" id="all.6pteM.1.spl2" title="原文 : You can find more information about POF in Coherence documentation">POFの詳細は、<a href="https://coherence.community/20.12/docs/#/docs/core/04_portable_types" target="_blank">「Coherenceのドキュメント」</a>を参照してください</span> </p>


<h5 id="_setting_the_custom_marshaller"><span class="merged" id="all.1gHLoI.1" title="原文 : Setting the custom marshaller">カスタム・マーシャラの設定</span></h5>
<div class="section">
<p><span class="merged" id="all.2O6myj" title="原文 : You can set the custom marshaller supplier via the ClientServiceDescriptor.builder.marshallerSupplier() method:">カスタム・マーシャラ・サプライヤは、<code>ClientServiceDescriptor.builder.marshallerSupplier()</code>メソッドを使用して設定できます:</span></p>

<markup
lang="java"
title="Sample code for setting the marshaller on the ClientServiceDescriptor"
>ClientServiceDescriptor descriptor = ClientServiceDescriptor
        .builder(HelloService.class)
        .marshallerSupplier(new JsonbMarshaller.Supplier())  <span class="conum" data-value="1" />
        .clientStreaming("JoinString")
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1IWU9i" title="原文 : Specify the custom marshaller to use.">使用するカスタム・マーシャラを指定します。</span></li>
</ul>

</div>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.32"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3dNW8X.spl1" title="原文 : Configure the gRPC client using the Helidon configuration framework, either programmatically or via a configuration file.">Helidon構成フレームワークを使用して、プログラムまたは構成ファイルを介してgRPCクライアントを構成します。</span> <span class="merged" id="all.3dNW8X.spl2" title="原文 : As mentioned earlier, creating a GrpcServiceClient involves:">前述のように、<code>GrpcServiceClient</code>の作成には次の作業が含まれます:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.125IVt.1" title="原文 : Creating a ClientServiceDescriptor which describes the methods in the service that this client can invoke.">このクライアントが呼び出せるサービスのメソッドを記述する<code>ClientServiceDescriptor</code>の作成。</span>

</li>
<li>
<span class="merged" id="all.2HVobl.1" title="原文 : Creating a gRPC Channel through which the client communicates with the server.">クライアントがサーバーとの通信に使用するgRPC <code>Channel</code>の作成。</span>

</li>
</ol>


<h3 id="_configuring_the_clientservicedescriptor"><span class="merged" id="all.3scOM1" title="原文 : Configuring the ClientServiceDescriptor">ClientServiceDescriptorの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1WLzXx" title="原文 : The only way to configure the ClientServiceDescriptor is in your application code."><code>ClientServiceDescriptor</code>を構成する唯一の方法は、アプリケーション・コード内で行うことです。</span></p>

<markup
lang="java"

>ClientServiceDescriptor descriptor = ClientServiceDescriptor
        .builder(HelloService.class)  <span class="conum" data-value="1" />
        .unary("SayHello")  <span class="conum" data-value="2" />
        .build();  <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.keDUt" title="原文 : Create a builder for a ClientServiceDescriptor for the HelloService."><code>HelloService</code>用の<code>ClientServiceDescriptor</code>のビルダーを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.g1yMK.spl1" title="原文 : Specify that the HelloService has a unary method named SayHello."><code>HelloService</code>に<code>SayHello</code>という名前の単項メソッドがあることを指定します。</span> <span class="merged" id="all.g1yMK.spl2" title="原文 : There are many other methods in this class that allow you to define ClientStreaming, ServerStreaming and Bidirectional methods.">このクラスには、<code>ClientStreaming</code>、<code>ServerStreaming</code>および<code>Bidirectional</code>メソッドを定義できる他の多くのメソッドがあります。</span> </li>
<li data-value="3"><span class="merged" id="all.40tQ0Y" title="原文 : Build the ClientServiceDescriptor."><code>ClientServiceDescriptor</code>をビルドします。</span></li>
</ul>

</div>


<h3 id="_configuring_the_grpc_channel"><span class="merged" id="all.ak6Vd" title="原文 : Configuring the gRPC Channel">gRPCチャネルの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.18rBuO" title="原文 : gRPC allows various channel configurations (deadlines, retries, interceptors etc.)">gRPCでは、様々なチャネル構成(期限、再試行、インターセプタなど)が可能です。)</span></p>

<p><span class="merged" id="all.4cFatf" title="原文 : Please refer to gRPC documentation: https://grpc.io/grpc-java/javadoc/io/grpc/ManagedChannelBuilder.html.">gRPCのドキュメントを参照してください : <a class="bare" href="https://grpc.io/grpc-java/javadoc/io/grpc/ManagedChannelBuilder.html" target="_blank">https://grpc.io/grpc-java/javadoc/io/grpc/ManagedChannelBuilder.html</a>。</span></p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.32"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_quick_start"><span class="merged" id="all.2FbcJI"  title="原文:: Quick Start">クイック・スタート</span></h3>
<div class="section">
<p><span class="merged" id="all.2nsCta" title="原文 : First, create and run a minimalist HelloService gRPC server application as described in the gRPC server quick start example.">まず、<router-link :to="{path: '/se/grpc/server', hash: '#_quick_start'}">「gRPCサーバーのクイックスタートの例」</router-link>の説明に従って、ミニ・マリ・ストの<code>HelloService</code> gRPCサーバー・アプリケーションを作成して実行します。</span></p>

<p><span class="merged" id="all.21UkBP" title="原文 : Assuming that the server is running on port 1408, create a client as follows:">サーバーがポート1408で実行されていると仮定して、次のようにクライアントを作成します:</span></p>

<markup
lang="java"

>public static void main(String[] args) throws Exception {
    ClientServiceDescriptor descriptor = ClientServiceDescriptor.builder(HelloService.class)  <span class="conum" data-value="1" />
                                                                .marshallerSupplier(new JsonbMarshaller.Supplier()) <span class="conum" data-value="2" />
                                                                .unary("SayHello")  <span class="conum" data-value="3" />
                                                                .build();

    Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)  <span class="conum" data-value="4" />
                                           .usePlaintext()
                                           .build();

    GrpcServiceClient client = GrpcServiceClient.create(channel, descriptor);  <span class="conum" data-value="5" />

    CompletionStage&lt;String&gt; future = client.unary("SayHello", "Helidon gRPC!!");  <span class="conum" data-value="6" />
    System.out.println(future.get());  <span class="conum" data-value="7" />

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XAv7Y.1" title="原文 : Create a ClientServiceDescriptor for the HelloService."><code>HelloService</code>の<code>ClientServiceDescriptor</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3wUUcK" title="原文 : Specify a custom marshaller using the built-in JSON-B marshaller to serialize/deserialize request and response values.">組込みのJSON-Bマーシャラを使用してカスタム・マーシャラを指定し、リクエスト値とレスポンス値をシリアライズ/直列化復元します。</span></li>
<li data-value="3"><span class="merged" id="all.4cF6R" title="原文 : Add the SayHello unary method to the ClientServiceDescriptor which will use the specified custom marshaller.">指定されたカスタム・マーシャラを使用する<code>ClientServiceDescriptor</code>に<code>SayHello</code>単項メソッドを追加します。</span></li>
<li data-value="4"><span class="merged" id="all.if3en" title="原文 : Create a gRPC Channel that will communicate with the server running in localhost and on port 1408 (using plaintext).">localhostおよびポート1408 (プレーン・テキストを使用)で実行されているサーバーと通信するgRPC <code>Channel</code>を作成します。</span></li>
<li data-value="5"><span class="merged" id="all.Mo9I8.spl1" title="原文 : Create the GrpcServiceClient that uses the above Channel and ClientServiceDescriptor.">前述の<code>Channel</code>および<code>ClientServiceDescriptor</code>を使用する<code>GrpcServiceClient</code>を作成します。</span> <span class="merged" id="all.Mo9I8.spl2" title="原文 : GrpcClientService represents a client that can be used to define the set of methods described by the specified ClientServiceDescriptor."><code>GrpcClientService</code>は、指定された<code>ClientServiceDescriptor</code>で記述される一連のメソッドを定義するために使用できるクライアントを表します。</span> <span class="merged" id="all.Mo9I8.spl3" title="原文 : In our case, the ClientServiceDescriptor defines one unary method called SayHello.">この場合、<code>ClientServiceDescriptor</code>では、<code>SayHello</code>と呼ばれる単項メソッドが定義されます。</span> </li>
<li data-value="6"><span class="merged" id="all.2iVIxZ" title="原文 : Invoke the SayHello method which returns a CompletionStage&lt;String&gt;."><code>CompletionStage&lt;String></code>を返す<code>SayHello</code>メソッドを起動します。</span></li>
<li data-value="7"><span class="merged" id="all.3Toecs" title="原文 : Print the result.">結果を出力します。</span></li>
</ul>

</div>


<h3 id="_additional_grpc_client_examples"><span class="merged" id="all.eKNLU" title="原文 : Additional gRPC client examples">追加のgRPCクライアントの例</span></h3>
<div class="section">
<p><span class="merged" id="all.1JTioo" title="原文 : A set of gRPC client examples for Helidon SE can be found in the following links:">Helidon SEのgRPCクライアントの例は、次のリンクで見つけることができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4Q5EVh" title="原文 : Basic gRPC Standalone Client"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/client-standalone" target="_blank">基本的なgRPCスタンドアロン・クライアント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3lJgJe" title="原文 : gRPC Server Metrics"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/metrics" target="_blank">gRPCサーバー・メトリクス</a></span></p>

</li>
<li>
<p><span class="merged" id="all.PHKeo" title="原文 : OpenTracing on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/opentracing" target="_blank">gRPCサーバー上のOpenTracing</a></span></p>

</li>
<li>
<p><span class="merged" id="all.14yf4W" title="原文 : Basic Auth Security on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/security" target="_blank">gRPCサーバー上の基本的な認証セキュリティ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3eT7Rk" title="原文 : Attribute-Based Access Control (ABAC) security on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/security-abac" target="_blank">gRPCサーバー上の属性ベースのアクセス制御(ABAC)セキュリティ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3yqiBr" title="原文 : Outbound Security on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/security-outbound" target="_blank">gRPCサーバー上のアウトバウンド・セキュリティ</a></span></p>

</li>
</ul>

</div>

</div>

</doc-view>
