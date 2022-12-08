<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.48"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.46" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.34" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.29" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.28" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.30" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.62"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3x83Rq.spl1" title="原文 : The Helidon gRPC server provides a framework for creating gRPC applications.">Helidon gRPCサーバーは、<a href="http://grpc.io/" target="_blank">gRPC</a>アプリケーションを作成するためのフレームワークを提供します。</span> <span class="merged" id="all.3x83Rq.spl2" title="原文 : While it allows you to deploy any standard gRPC service that implements io.grpc.BindableService interface, including services generated from the Protobuf IDL files (and even allows you to customize them to a certain extent), using Helidon gRPC framework to implement your services has a number of benefits:">Protobuf IDLファイルから生成されたサービス(および特定の範囲にカスタマイズできるサービス)を含む<code>io.grpc.BindableService</code>インタフェースを実装する標準のgRPCサービスをデプロイできますが、Helidon gRPCフレームワークを使用してサービスを実装すると、いくつかの利点があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3VCFqE" title="原文 : It allows you to define both HTTP and gRPC services using a similar programming model, simplifying the learning curve for developers.">同様のプログラミング・モデルを使用してHTTPサービスおよびgRPCサービスの両方を定義できるため、開発者の学習曲線が簡素化されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3Py7wH" title="原文 : It provides a number of helper methods that make service implementation significantly simpler.">サービスの実装を大幅に簡素化するヘルパー・メソッドが多数用意されています。</span></p>

</li>
<li>
<p><span class="merged" id="all.37PhMR" title="原文 : It allows you to configure some of the Helidon value-added features, such as security and metrics collection down to the method level.">これにより、<router-link @click.native="this.scrollFix('#_security')" to="#_security">「セキュリティ」</router-link>や<router-link @click.native="this.scrollFix('#_service_metrics')" to="#_service_metrics">「メトリクス収集」</router-link>など、一部のHelidonの付加価値機能をメソッド・レベルまで構成できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1ccU0H" title="原文 : It allows you to easily specify custom marshallers for requests and responses if Protobuf does not satisfy your needs.">Protobufがニーズを満たさない場合、リクエストやレスポンスに対するカスタム・マーシャラを簡単に指定できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.QOAwq" title="原文 : It provides built-in support for health checks."><router-link @click.native="this.scrollFix('#_service_health_checks')" to="#_service_health_checks">「ヘルス・チェック」</router-link>の組込みサポートを提供します。</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.44"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.kAt3f" title="原文 : To enable gRPC Server add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPCサーバーを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-grpc-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p id="security_maven_coordinartes"><span class="merged" id="all.2qNGay" title="原文 : If gRPC server security is required as described in the section, add the following dependency to your project&rsquo;s pom.xml:"><router-link @click.native="this.scrollFix('#_security')" to="#_security"></router-link>セクションの説明に従って<code>gRPC server security</code>が必要な場合は、プロジェクトのpom.xmlに次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.integration&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-integration-grpc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.46"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_grpc_server_routing"><span class="merged" id="all.44qCVp" title="原文 : gRPC Server Routing">gRPCサーバーのルーティング</span></h3>
<div class="section">
<p><span class="merged" id="all.3igVGO.spl1" title="原文 : Unlike the webserver, which allows you to route requests based on path expression and the HTTP verb, the gRPC server always routes requests based on the service and method name.">パス式およびHTTP動詞に基づいてリクエストをルーティングできるwebサーバーとは異なり、gRPCサーバーは常に、サービスおよびメソッド名に基づいてリクエストをルーティングします。</span> <span class="merged" id="all.3igVGO.spl2" title="原文 : This makes routing configuration somewhat simpler - all you need to do is register your services:">これにより、ルーティング構成が若干簡単になります。必要なのは、サービスの登録のみです:</span> </p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .register(new GreetService(config)) <span class="conum" data-value="1" />
            .register(new EchoService())        <span class="conum" data-value="2" />
            .register(new MathService())        <span class="conum" data-value="3" />
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.25UOG8" title="原文 : Register GreetService instance."><code>GreetService</code>インスタンスを登録します。</span></li>
<li data-value="2"><span class="merged" id="all.23FrRS" title="原文 : Register EchoService instance."><code>EchoService</code>インスタンスを登録します。</span></li>
<li data-value="3"><span class="merged" id="all.3QRvSM" title="原文 : Register MathService instance."><code>MathService</code>インスタンスを登録します。</span></li>
</ul>

<p><span class="merged" id="all.3Rc9el.spl1" title="原文 : Both &quot;standard&quot; gRPC services that implement io.grpc.BindableService interface (typically implemented by extending the generated server-side stub and overriding its methods), and Helidon gRPC services that implement io.helidon.grpc.server.GrpcService interface can be registered."><code>io.grpc.BindableService</code>インタフェースを実装する標準gRPCサービス(通常は、生成されたサーバー側のスタブを拡張してそのメソッドをオーバーライドすることによって実装される)と、<code>io.helidon.grpc.server.GrpcService</code>インタフェースを実装するHelidon gRPCサービスを登録できます。</span> <span class="merged" id="all.3Rc9el.spl2" title="原文 : The difference is that Helidon gRPC services allow you to customize behavior down to the method level, and provide a number of useful helper methods that make service implementation easier, as we&rsquo;ll see in a moment.">違いは、Helidon gRPCサービスでは、メソッド・レベルまで動作をカスタマイズできることと、サービスの実装を簡単にする便利なヘルパー・メソッドが数多く用意されていることです。</span> </p>


<h4 id="_customizing_service_definitions"><span class="merged" id="all.24RC3j" title="原文 : Customizing Service Definitions">サービス定義のカスタマイズ</span></h4>
<div class="section">
<p><span class="merged" id="all.3vgHuz" title="原文 : When registering a service, regardless of its type, you can customize its descriptor by providing a configuration consumer as a second argument to the register method.">サービスを登録するとき、そのタイプに関係なく、構成コンシューマを<code>register</code>メソッドへの2番目の引数として指定することによって、その記述子をカスタマイズできます。</span></p>

<p><span class="merged" id="all.189g7C" title="原文 : This is particularly useful when registering standard BindableService instances, as it allows you to add certain Helidon-specific behaviors, such as health checks and metrics to them:">これは、<router-link @click.native="this.scrollFix('#_service_health_checks')" to="#_service_health_checks">「ヘルス・チェック」</router-link>や<router-link @click.native="this.scrollFix('#_service_metrics')" to="#_service_metrics">metrics</router-link>などの特定のHelidon-specific動作を追加できるため、標準の<code>BindableService</code>インスタンスを登録する場合に特に便利です:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .register(new GreetService(config))
            .register(new EchoService(), service -&gt; {
                service.healthCheck(CustomHealthChecks::echoHealthCheck)  <span class="conum" data-value="1" />
                       .metered();                                        <span class="conum" data-value="2" />
            })
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1TnZj4" title="原文 : Add custom health check to the service.">サービスにカスタム・ヘルス・チェックを追加します。</span></li>
<li data-value="2"><span class="merged" id="all.nIWxH" title="原文 : Specify that all the calls to service methods should be metered.">サービス・メソッドへのすべてのコールを従量制するように指定します。</span></li>
</ul>

</div>


<h4 id="_specifying_global_interceptors"><span class="merged" id="all.1MN7Ao" title="原文 : Specifying Global Interceptors">グローバル・インターセプタの指定</span></h4>
<div class="section">
<p><span class="merged" id="all.D3YuN" title="原文 : GrpcRouting also allows you to specify custom interceptors that will be applied to all registered services."><code>GrpcRouting</code>では、すべての登録済サービスに適用される<router-link @click.native="this.scrollFix('#_interceptors')" to="#_interceptors">「カスタム・インターセプタ」</router-link>を指定することもできます。</span></p>

<p><span class="merged" id="all.3fCvov" title="原文 : This is useful to configure features such as tracing, security and metrics collection, and we provide built-in interceptors for those purposes that you can simply register with the routing definition:">これは、トレース、セキュリティ、メトリクス収集などの機能を構成する場合に役立ちます。また、ルーティング定義に登録するだけの目的で組込みインターセプタを提供します:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .intercept(GrpcMetrics.timed())     <span class="conum" data-value="1" />
            .register(new GreetService(config))
            .register(new EchoService())
            .register(new MathService())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1clVzO" title="原文 : Register GrpcMetrics interceptor that will collect timers for all methods of all services (but can be overridden at the individual service or even method level).">すべてのサービスのすべてのメソッドのタイマーを収集する<code>GrpcMetrics</code>インターセプタを登録します(ただし、個々のサービス・レベルまたはメソッド・レベルでオーバーライドできます)。</span></li>
</ul>

</div>

</div>


<h3 id="_service_implementation"><span class="merged" id="all.3veEN6" title="原文 : Service Implementation">サービス実装</span></h3>
<div class="section">
<p><span class="merged" id="all.4O94ok" title="原文 : At the very basic level, all you need to do in order to implement a Helidon gRPC service is create a class that implements the io.helidon.grpc.server.GrpcService interface and define one or more methods for the service:">非常に基本的なレベルでは、Helidon gRPCサービスを実装するために必要なことは、<code>io.helidon.grpc.server.GrpcService</code>インタフェースを実装するクラスを作成し、サービスに対して1つ以上のメソッドを定義することです:</span></p>

<markup
lang="java"

>class EchoService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.marshallerSupplier(new JsonbMarshaller.Supplier()) <span class="conum" data-value="1" />
             .unary("Echo", this::echo); <span class="conum" data-value="2" />
    }

    /**
     * Echo the message back to the caller.
     *
     * @param request   the echo request containing the message to echo
     * @param observer  the response observer
     */
    public void echo(String request, StreamObserver&lt;String&gt; observer) {  <span class="conum" data-value="3" />
        complete(observer, request);  <span class="conum" data-value="4" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.NgGF0" title="原文 : Specify a custom marshaller to marshall requests and responses.">リクエストおよびレスポンスをマーシャリングするためのカスタム・マーシャラを指定します。</span></li>
<li data-value="2"><span class="merged" id="all.2UbjlY" title="原文 : Define unary method Echo and map it to the this::echo handler.">単項メソッド<code>Echo</code>を定義し、<code>this::echo</code>ハンドラにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.1FyXf2" title="原文 : Create a handler for the Echo method."><code>Echo</code>メソッドのハンドラを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.UepiB" title="原文 : Send the request string back to the client by completing response observer.">レスポンス・オブザーバを完了して、リクエスト文字列をクライアントに返信します。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3iecpW.spl1" title="原文 : The complete method shown in the example above is just one of many helper methods available in the GrpcService class.">前述の例に示されている<code>complete</code>メソッドは、<code>GrpcService</code>クラスで使用可能な多くのヘルパー・メソッドのうちの1つです。</span> <span class="merged" id="all.3iecpW.spl2" title="原文 : See the full list here."><a href="./apidocs/io.helidon.grpc.server/io/helidon/grpc/server/GrpcService.html" target="_blank">「こちら」</a>の完全なリストを参照してください。</span> </p>
</div>

<p><span class="merged" id="all.1oBRWC.spl1" title="原文 : The example above implements a service with a single unary method which will be exposed at the `EchoService/Echo&apos; endpoint.">前述の例では、`EchoService/Echo'エンドポイントで公開される単一の単項メソッドのサービスを実装しています。</span> <span class="merged" id="all.1oBRWC.spl2" title="原文 : The service explicitly defines a marshaller for requests and responses, so this implies that you will have to implement clients by hand and configure them to use the same marshaller as the server.">サービスはリクエストとレスポンスのマーシャラを明示的に定義するため、クライアントを手作業で実装し、サーバーと同じマーシャラを使用するように構成する必要があることを意味します。</span> <span class="merged" id="all.1oBRWC.spl3" title="原文 : Obviously, one of the major selling points of gRPC is that it makes it easy to generate clients for a number of languages (as long as you use Protobuf for marshalling), so let&rsquo;s see how we would implement Protobuf enabled Helidon gRPC service.">gRPCの主なセールス・ポイントの1つは、(マーシャリングにProtobufを使用するかぎり)多数の言語のクライアントを簡単に生成できることです。したがって、Protobuf対応のHelidon gRPCサービスを実装する方法を見てみましょう。</span> </p>


<h4 id="_implementing_protobuf_services"><span class="merged" id="all.4edg3w" title="原文 : Implementing Protobuf Services">Protobufサービスの実装</span></h4>
<div class="section">
<p><span class="merged" id="all.4Fyo1o" title="原文 : In order to implement Protobuf-based service, you would follow the official instructions on the gRPC web site, which boil down to the following:">プロトコル・ベースのサービスを実装するには、gRPC webサイトの公式の<a href="https://grpc.io/docs/quickstart/java.html" target="_blank">「インストラクション」</a>に従います。これは次のようになります:</span></p>


<h5 id="_define_the_service_idl"><span class="merged" id="all.Hj81Q" title="原文 : Define the Service IDL">サービスIDLの定義</span></h5>
<div class="section">
<p><span class="merged" id="all.1Hw4GQ" title="原文 : For this example, we will re-implement the EchoService above as a Protobuf service in echo.proto file.">この例では、前述の<code>EchoService</code>をProtobufサービスとして<code>echo.proto</code>ファイルに再実装します。</span></p>

<markup
lang="proto"

>syntax = "proto3";
option java_package = "org.example.services.echo";

service EchoService {
  rpc Echo (EchoRequest) returns (EchoResponse) {}
}

message EchoRequest {
  string message = 1;
}

message EchoResponse {
  string message = 1;
}</markup>

<p><span class="merged" id="all.1SqIsS" title="原文 : Based on this IDL, the gRPC compiler will generate message classes (EchoRequest and EchoResponse), client stubs that can be used to make RPC calls to the server, as well as the base class for the server-side service implementation.">gRPCコンパイラは、このIDLに基づいて、メッセージ・クラス(<code>EchoRequest</code>および<code>EchoResponse</code>)、サーバーへのRPC呼出しに使用できるクライアント・スタブ、およびサーバー側サービス実装のベース・クラスを生成します。</span></p>

<p><span class="merged" id="all.2Cxi42" title="原文 : We can ignore the last one, and implement the service using Helidon gRPC framework instead.">最後のものは無視し、かわりにHelidon gRPCフレームワークを使用してサービスを実装できます。</span></p>

</div>


<h5 id="_implement_the_service"><span class="merged" id="all.hrmhF" title="原文 : Implement the Service">サービスの実装</span></h5>
<div class="section">
<p><span class="merged" id="all.2sc85E" title="原文 : The service implementation will be very similar to our original implementation:">サービスの実装は、元の実装とよく似ています:</span></p>

<markup
lang="java"

>class EchoService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.proto(Echo.getDescriptor())  <span class="conum" data-value="1" />
             .unary("Echo", this::echo);   <span class="conum" data-value="2" />
    }

    /**
     * Echo the message back to the caller.
     *
     * @param request   the echo request containing the message to echo
     * @param observer  the response observer
     */
    public void echo(Echo.EchoRequest request, StreamObserver&lt;Echo.EchoResponse&gt; observer) {  <span class="conum" data-value="3" />
        String message = request.getMessage();  <span class="conum" data-value="4" />
        Echo.EchoResponse response = Echo.EchoResponse.newBuilder().setMessage(message).build();  <span class="conum" data-value="5" />
        complete(observer, response);  <span class="conum" data-value="6" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.y0Xcz" title="原文 : Specify the proto descriptor in order to provide necessary type information and enable Protobuf marshalling.">プロト記述子を指定して、必要なタイプ情報を提供し、Protobufマーシャリングを有効にします。</span></li>
<li data-value="2"><span class="merged" id="all.2UbjlY.1" title="原文 : Define unary method Echo and map it to the this::echo handler.">単項メソッド<code>Echo</code>を定義し、<code>this::echo</code>ハンドラにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.1RHvNy" title="原文 : Create a handler for the Echo method, using Protobuf message types for request and response.">リクエストおよびレスポンスのProtobufメッセージ・タイプを使用して、<code>Echo</code>メソッドのハンドラを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.3ddQPJ" title="原文 : Extract message string from the request.">リクエストからメッセージ文字列を抽出します。</span></li>
<li data-value="5"><span class="merged" id="all.cJSee" title="原文 : Create the response containing extracted message.">抽出されたメッセージを含むレスポンスを作成します。</span></li>
<li data-value="6"><span class="merged" id="all.3221x8" title="原文 : Send the response back to the client by completing response observer.">レスポンス・オブザーバを完了して、レスポンスをクライアントに返信します。</span></li>
</ul>

</div>

</div>

</div>


<h3 id="_interceptors"><span class="merged" id="all.3RQCCM"  title="原文:: Interceptors">インターセプタ</span></h3>
<div class="section">
<p><span class="merged" id="all.444qn6" title="原文 : Helidon gRPC allows you to configure standard interceptors using io.grpc.ServerInterceptor.">Helidon gRPCを使用すると、<code>io.grpc.ServerInterceptor</code>を使用して標準インターセプタを構成できます。</span></p>

<p><span class="merged" id="all.4Fp4oA" title="原文 : For example, you could implement an interceptor that logs each RPC call:">たとえば、各RPC呼出しをログに記録するインターセプタを実装できます:</span></p>

<markup
lang="java"

>class LoggingInterceptor implements ServerInterceptor {   <span class="conum" data-value="1" />

    private static final Logger LOG = Logger.getLogger(LoggingInterceptor.class.getName());

    @Override
    public &lt;ReqT, ResT&gt; ServerCall.Listener&lt;ReqT&gt; interceptCall(ServerCall&lt;ReqT, ResT&gt; call,
                                                                 Metadata metadata,
                                                                 ServerCallHandler&lt;ReqT, ResT&gt; handler) {

        LOG.info(() -&gt; "CALL: " + call.getMethodDescriptor());  <span class="conum" data-value="2" />
        return handler.startCall(call, metadata);               <span class="conum" data-value="3" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3E5lff" title="原文 : Implement the interceptor class using io.grpc.ServerInterceptor."><code>io.grpc.ServerInterceptor</code>を使用してインターセプタ・クラスを実装します。</span></li>
<li data-value="2"><span class="merged" id="all.t3eu3" title="原文 : Implement the logging logic.">ロギング・ロジックを実装します。</span></li>
<li data-value="3"><span class="merged" id="all.27oXjn" title="原文 : The intercepted call is started.">インターセプトされたコールが開始されます。</span></li>
</ul>


<h4 id="_registering_interceptors"><span class="merged" id="all.3qSKJG" title="原文 : Registering Interceptors">インターセプタの登録</span></h4>
<div class="section">
<p><span class="merged" id="all.4dybmw" title="原文 : You can register interceptors globally, in which case they will be applied to all methods of all services, by simply adding them to the GrpcRouting instance:">インターセプタをグローバルに登録できます。この場合、インターセプタは<code>GrpcRouting</code>インスタンスに追加するだけで、すべてのサービスのすべてのメソッドに適用されます:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .intercept(new LoggingInterceptor())  <span class="conum" data-value="1" />
            .register(new GreetService(config))
            .register(new EchoService())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.qolXl" title="原文 : Adds LoggingInterceptor to all methods of GreetService and EchoService."><code>GreetService</code>および<code>EchoService</code>のすべてのメソッドに<code>LoggingInterceptor</code>を追加します。</span></li>
</ul>

<p><span class="merged" id="all.q3DWe" title="原文 : You can also register an interceptor for a specific service, either by implementing GrpcService.update method:"><code>GrpcService.update</code>メソッドを実装することで、特定のサービスのインターセプタを登録することもできます:</span></p>

<markup
lang="java"

>public class MyService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.intercept(new LoggingInterceptor())   <span class="conum" data-value="1" />
                .unary("MyMethod", this::myMethod);
    }

    private &lt;ReqT, ResT&gt; void myMethod(ReqT request, StreamObserver&lt;ResT&gt; observer) {
        // do something
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3cbMi3" title="原文 : Adds LoggingInterceptor to all methods of MyService."><code>MyService</code>のすべてのメソッドに<code>LoggingInterceptor</code>を追加します。</span></li>
</ul>

<p><span class="merged" id="all.17o5nl" title="原文 : Or by configuring ServiceDescriptor externally, when creating GrpcRouting, which allows you to add interceptors to plain io.grpc.BindableService services as well:">または、<code>GrpcRouting</code>の作成時に<code>ServiceDescriptor</code>を外部で構成することで、次のようにインターセプタをプレーン<code>io.grpc.BindableService</code>サービスに追加することもできます:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .register(new GreetService(config), cfg -&gt; cfg.intercept(new LoggingInterceptor()))  <span class="conum" data-value="1" />
            .register(new EchoService())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.KrGKd" title="原文 : Adds LoggingInterceptor to all methods of GreetService only."><code>GreetService</code>のすべてのメソッドにのみ<code>LoggingInterceptor</code>を追加します。</span></li>
</ul>

<p><span class="merged" id="all.4c6qA" title="原文 : Finally, you can also register an interceptor at the method level:">最後に、メソッド・レベルでインターセプタを登録することもできます:</span></p>

<markup
lang="java"

>public class MyService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.unary("MyMethod",
                     this::myMethod,
                     cfg -&gt; cfg.intercept(new LoggingInterceptor()));  <span class="conum" data-value="1" />
    }

    private &lt;ReqT, ResT&gt; void myMethod(ReqT request, StreamObserver&lt;ResT&gt; observer) {
        // do something
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.TLGH6" title="原文 : Adds LoggingInterceptor to MyService::MyMethod only."><code>LoggingInterceptor</code>を<code>MyService::MyMethod</code>にのみ追加します。</span></li>
</ul>

</div>

</div>


<h3 id="_service_health_checks"><span class="merged" id="all.3F4lnA" title="原文 : Service Health Checks">Service Health Checks</span></h3>
<div class="section">
<p><span class="merged" id="all.1Ubc0S" title="原文 : Helidon gRPC services provide built-in support for Helidon Health Checks.">Helidon gRPCサービスは、Helidonヘルス・チェックの組込みサポートを提供します。</span></p>

<p><span class="merged" id="all.1aFfww" title="原文 : Unless a custom health check is implemented by the service developer, each service deployed to the gRPC server will be provisioned with a default health check, which always returns status of UP.">サービス開発者がカスタム・ヘルス・チェックを実装しないかぎり、gRPCサーバーにデプロイされた各サービスには、常に<code>UP</code>のステータスを返すデフォルトのヘルス・チェックがプロビジョニングされます。</span></p>

<p><span class="merged" id="all.4FItGm" title="原文 : This allows all services, including the ones that don&rsquo;t have a meaningful health check, to show up in the health report (or to be queried for health) without service developer having to do anything.">これにより、意味のあるヘルス・チェックのないサービスを含むすべてのサービスを、サービス開発者が何もしなくてもヘルス・レポートに表示(またはヘルスを問合せ)できます。</span></p>

<p><span class="merged" id="all.3TaJ7K" title="原文 : However, services that do need custom health checks can easily define one, directly within GrpcService implementation:">ただし、カスタム・ヘルス・チェックを必要とするサービスでは、<code>GrpcService</code>実装内で直接カスタム・ヘルス・チェックを簡単に定義できます:</span></p>

<markup
lang="java"

>public class MyService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.unary("MyMethod", this::myMethod)
                .healthCheck(this::healthCheck);  <span class="conum" data-value="1" />
    }

    private HealthC
heckResponse healthCheck() {
        boolean fUp = isMyServiceUp();            <span class="conum" data-value="2" />
        return HealthCheckResponse
                .named(name())                    <span class="conum" data-value="3" />
                .state(fUp)                       <span class="conum" data-value="4" />
                .withData("ts", System.currentTimeMillis())  <span class="conum" data-value="5" />
                .build();
    }

    private &lt;ReqT, ResT&gt; void myMethod(ReqT request, StreamObserver&lt;ResT&gt; observer) {
        // do something
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.39fcTd" title="原文 : Configure a custom health check for the service.">サービスのカスタム・ヘルス・チェックを構成します。</span></li>
<li data-value="2"><span class="merged" id="all.2lgrP1" title="原文 : Determine the service status.">サービス・ステータスを決定します。</span></li>
<li data-value="3"><span class="merged" id="all.2yQZTC" title="原文 : Use service name as a health check name for consistency.">整合性のヘルス・チェック名としてサービス名を使用します。</span></li>
<li data-value="4"><span class="merged" id="all.1f7vVH" title="原文 : Set the determined service status.">決定されたサービス・ステータスを設定します。</span></li>
<li data-value="5"><span class="merged" id="all.3iUck3" title="原文 : Optionally provide additional metadata.">オプションで、追加のメタデータを指定します。</span></li>
</ul>

<p><span class="merged" id="all.46vwrg" title="原文 : You can also define custom health checks for an existing service, including plain io.grpc.BindableService implementations, using a service configurer inside the GrpcRouting definition:"><code>GrpcRouting</code>定義内のサービス構成を使用して、既存のサービス(プレーン<code>io.grpc.BindableService</code>実装など)のカスタム・ヘルス・チェックを定義することもできます:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting() {
    return GrpcRouting.builder()
            .register(new EchoService(), cfg -&gt; cfg.healthCheck(MyCustomHealthChecks::echoHealthCheck))  <span class="conum" data-value="1" />
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.F6NyV" title="原文 : Configure custom health check for an existing or legacy service.">既存またはレガシー・サービスのカスタム・ヘルス・チェックを構成します。</span></li>
</ul>


<h4 id="_exposing_health_checks"><span class="merged" id="all.3Q3xOn" title="原文 : Exposing Health Checks">ヘルス・チェックの公開</span></h4>
<div class="section">
<p><span class="merged" id="all.o64Zc" title="原文 : All gRPC service health checks are managed by the Helidon gRPC server, and are automatically exposed to the gRPC clients using a custom implementation of the standard gRPC HealthService API.">すべてのgRPCサービスのヘルス・チェックはHelidon gRPCサーバーによって管理され、標準のgRPC <code>HealthService</code> APIのカスタム実装を使用してgRPCクライアントに自動的に公開されます。</span></p>

<p><span class="merged" id="all.4P0qaL" title="原文 : However, they can also be exposed to REST clients via the standard Helidon/Microprofile /health endpoint:">ただし、標準のHelidon/Microprofile <code>/health</code>エンドポイントを介してRESTクライアントに公開することもできます:</span></p>

<markup
lang="java"

>        GrpcServer grpcServer = GrpcServer.create(grpcServerConfig(), createRouting(config));  <span class="conum" data-value="1" />
        grpcServer.start();                                                                    <span class="conum" data-value="2" />

        HealthSupport health = HealthSupport.builder()
                .add(grpcServer.healthChecks())     <span class="conum" data-value="3" />
                .build();

        Routing routing = Routing.builder()
                .register(health)                   <span class="conum" data-value="4" />
                .build();

        WebServer.create(webServerConfig(), routing).start();   <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2U6dy7" title="原文 : Create the GrpcServer instance."><code>GrpcServer</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.MCd5M" title="原文 : Start the gRPC server which will deploy all the services and register default and custom health checks.">すべてのサービスをデプロイし、デフォルトおよびカスタムのヘルス・チェックを登録するgRPCサーバーを起動します。</span></li>
<li data-value="3"><span class="merged" id="all.d0a82" title="原文 : Add gRPC server managed health checks to HealthSupport instance.">gRPCサーバー管理ヘルス・チェックを<code>HealthSupport</code>インスタンスに追加します。</span></li>
<li data-value="4"><span class="merged" id="all.1oQyTw" title="原文 : Add HealthSupport to the web server routing definition.">webサーバーのルーティング定義に<code>HealthSupport</code>を追加します。</span></li>
<li data-value="5"><span class="merged" id="all.429RRi" title="原文 : Create and start the web server.">webサーバーを作成して起動します。</span></li>
</ul>

<p><span class="merged" id="all.4SM9cP" title="原文 : All gRPC health checks will now be available via the /health REST endpoint, in addition to the standard gRPC HealthService">すべてのgRPCヘルス・チェックは、標準のgRPC <code>HealthService</code>に加えて、<code>/health</code> RESTエンドポイントを介して使用可能になります</span></p>

</div>

</div>


<h3 id="_service_metrics"><span class="merged" id="all.45Dyar"  title="原文:: Service Metrics">サービス・メトリック</span></h3>
<div class="section">
<p><span class="merged" id="all.1Zj5sC" title="原文 : The Helidon gRPC server has built-in support for metrics capture, which allows service developers to easily enable application-level metrics for their services.">Helidon gRPCサーバーにはメトリクス取得の組込みサポートがあり、これによりサービス開発者はサービスに対してアプリケーション・レベルのメトリクスを簡単に有効にできます。</span></p>


<h4 id="_enabling_metrics_capture"><span class="merged" id="all.3rCPS0" title="原文 : Enabling Metrics Capture">メトリクス取得の有効化</span></h4>
<div class="section">
<p><span class="merged" id="all.YK2uw.spl1" title="原文 : By default, the gRPC server only captures two vendor-level metrics: grpc.request.count and grpc.request.meter.">デフォルトでは、gRPCサーバーは2つのベンダー・レベルのメトリクスだけを取得: <code>grpc.request.count</code>および<code>grpc.request.meter</code>。</span> <span class="merged" id="all.YK2uw.spl2" title="原文 : These metrics provide an aggregate view of requests across all services, and serve as an indication of the overall server load.">これらのメトリクスは、すべてのサービスにわたるリクエストの集計ビューを提供し、サーバー全体の負荷を示す役割を果たします。</span> </p>

<p><span class="merged" id="all.3I9aSa" title="原文 : However, users can enable more fine-grained metrics by simply configuring a built-in GrpcMetrics interceptor within the routing:">ただし、ルーティング内で組込みの<code>GrpcMetrics</code>インターセプタを構成するだけで、より詳細なメトリクスを有効にできます:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .intercept(GrpcMetrics.timed())       <span class="conum" data-value="1" />
            .register(new GreetService(config))
            .register(new EchoService())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3lngwe" title="原文 : Capture the metrics for all methods of all services as a timer.">すべてのサービスのすべてのメソッドのメトリクスを<code>timer</code>として取得します。</span></li>
</ul>

<p><span class="merged" id="all.3OCEGX.spl1" title="原文 : In the example above we have chosen to create and keep a timer metric type for each method of each service.">前述の例では、各サービスのメソッドごとに<code>timer</code>メトリック・タイプを作成して保持することを選択しました。</span> <span class="merged" id="all.3OCEGX.spl2" title="原文 : Alternatively, we could&rsquo;ve chosen to use a counter, meter or a histogram instead.">かわりに、<code>counter</code>、<code>meter</code>または<code>histogram</code>を使用することもできます。</span> </p>

</div>


<h4 id="_overriding_metrics_capture"><span class="merged" id="all.40WAp" title="原文 : Overriding Metrics Capture">メトリクス取得のオーバーライド</span></h4>
<div class="section">
<p><span class="merged" id="all.B3qxw.spl1" title="原文 : While global metrics capture is certainly useful, it is not always sufficient.">グローバル・メトリクスの取得は確実に有用ですが、必ずしも十分ではありません。</span> <span class="merged" id="all.B3qxw.spl2" title="原文 : Keeping a separate timer for each gRPC method may be excessive, so the user could decide to use a lighter-weight metric type, such as a counter or a meter.">gRPCメソッドごとに個別の<code>timer</code>を保持すると、過度になる可能性があるため、ユーザーは<code>counter</code>や<code>meter</code>などの軽量メトリック・タイプを使用することを決定できます。</span> </p>

<p><span class="merged" id="all.1IgEA0" title="原文 : However, the user may still want to enable a histogram or a timer for some services, or even only some methods of some services.">ただし、一部のサービスでは<code>histogram</code>または<code>timer</code>を有効にすることも、一部のサービスでは一部のメソッドのみを有効にすることもできます。</span></p>

<p><span class="merged" id="all.3FLC3i" title="原文 : This can be easily accomplished by overriding the type of the captured metric at either the service or the method level:">これは、取得したメトリックのタイプをサービス・レベルまたはメソッド・レベルでオーバーライドすることで簡単に実行できます:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting(Config config) {
    return GrpcRouting.builder()
            .intercept(GrpcMetrics.counted())  <span class="conum" data-value="1" />
            .register(new MyService())
            .build();
}

public static class MyService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules
            .intercept(GrpcMetrics.metered())  <span class="conum" data-value="2" />
            .unary("MyMethod", this::myMethod,
                       cfg -&gt; cfg.intercept(GrpcMetrics.timer())); <span class="conum" data-value="3" />
    }

    private &lt;ReqT, ResT&gt; void myMethod(ReqT request, StreamObserver&lt;ResT&gt; observer) {
        // do something
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1DlpJs" title="原文 : Use counter for all methods of all services, unless overridden.">オーバーライドされないかぎり、すべてのサービスのすべてのメソッドに<code>counter</code>を使用します。</span></li>
<li data-value="2"><span class="merged" id="all.3aGkgH" title="原文 : Use meter for all methods of MyService."><code>MyService</code>のすべてのメソッドには、<code>meter</code>を使用します。</span></li>
<li data-value="3"><span class="merged" id="all.351QNK" title="原文 : Use timer for MyService::MyMethod."><code>MyService::MyMethod</code>には<code>timer</code>を使用します。</span></li>
</ul>

</div>


<h4 id="_exposing_metrics_externally"><span class="merged" id="all.szp" title="原文 : Exposing Metrics Externally">外部へのメトリクスの公開</span></h4>
<div class="section">
<p><span class="merged" id="all.2oqiXj" title="原文 : Collected metrics are stored in the standard Helidon metric registries, such as the vendor and application registries, and can be exposed via the standard /metrics REST API.">収集されたメトリクスは、ベンダーやアプリケーション・レジストリなどの標準のHelidonメトリック・レジストリに格納され、標準の<code>/metrics</code> REST APIで公開できます。</span></p>

<markup
lang="java"

>Routing routing = Routing.builder()
        .register(MetricsSupport.create())    <span class="conum" data-value="1" />
        .build();

WebServer.create(webServerConfig(), routing)  <span class="conum" data-value="2" />
         .start()</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3euzpO" title="原文 : Add the MetricsSupport instance to web server routing."><code>MetricsSupport</code>インスタンスをwebサーバーのルーティングに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.1jV7Ug" title="原文 : Create and start the Helidon web server.">Helidon webサーバーを作成して起動します。</span></li>
</ul>

<p><span class="merged" id="all.490Ui5" title="原文 : See Helidon Metrics documentation for more details.">詳細は、<router-link to="/se/metrics/metrics">「Helidonメトリクス」</router-link>のドキュメントを参照してください。</span></p>

</div>


<h4 id="_specifying_metric_metadata"><span class="merged" id="all.39XznR" title="原文 : Specifying Metric Metadata">メトリックMetadataの指定</span></h4>
<div class="section">
<p><span class="merged" id="all.2lWaEu" title="原文 : Helidon metrics contain metadata such as tags, a description, units etc. It is possible to add this additional metadata when specifying the metrics.">Helidonメトリクスには、タグ、説明、ユニットなどのメタデータが含まれます。メトリクスを指定するときに、この追加のメタデータを追加できます。</span></p>


<h5 id="_adding_tags"><span class="merged" id="all.2XusaB"  title="原文:: Adding Tags">タグの追加</span></h5>
<div class="section">
<p><span class="merged" id="all.3tiipY" title="原文 : To add tags to a metric, a Map of key/value tags can be supplied.">メトリックにタグを追加するには、キー/バリュー・タグの<code>Map</code>を指定できます。</span></p>

<markup
lang="java"

>Map&lt;String, String&gt; tagMap = new HashMap&lt;&gt;();
tagMap.put("keyOne", "valueOne");
tagMap.put("keyTwo", "valueTwo");

GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.counted().tags(tagMap))   <span class="conum" data-value="1" />
        .register(new MyService())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.12aDvJ" title="原文 : The tags() method is used to add the Map of tags to the metric."><code>tags()</code>メソッドを使用して、タグの<code>Map</code>をメトリックに追加します。</span></li>
</ul>

</div>


<h5 id="_adding_a_description"><span class="merged" id="all.1rRi2n" title="原文 : Adding a Description">説明の追加</span></h5>
<div class="section">
<p><span class="merged" id="all.1o9h6F" title="原文 : A meaningful description can be added to a metric.">メトリックにわかりやすい説明を追加できます。</span></p>

<markup
lang="java"

>GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.counted().description("Something useful")) <span class="conum" data-value="1" />
        .register(new MyService())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.mlJDl" title="原文 : The description() method is used to add the description to the metric."><code>description()</code>メソッドを使用して、メトリックに説明を追加します。</span></li>
</ul>

</div>


<h5 id="_adding_metric_units"><span class="merged" id="all.2dFgRM" title="原文 : Adding Metric Units">メトリック単位の追加</span></h5>
<div class="section">
<p><span class="merged" id="all.TsBGf" title="原文 : A units value can be added to a metric."><code>units</code>値をメトリックに追加できます。</span></p>

<markup
lang="java"

>GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.timed().units(MetricUnits.SECONDS)) <span class="conum" data-value="1" />
        .register(new MyService())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3WAw0x" title="原文 : The units() method is used to specify the metric units, the value of which is one of the constants from the org.eclipse.microprofile.metrics.MetricUnits class."><code>units()</code>メソッドは、メトリック・ユニット(<code>org.eclipse.microprofile.metrics.MetricUnits</code>クラスの定数の1つ)を指定するために使用されます。</span></li>
</ul>

</div>

</div>


<h4 id="_overriding_the_metric_name"><span class="merged" id="all.35YPyd" title="原文 : Overriding the Metric Name">メトリック名のオーバーライド</span></h4>
<div class="section">
<p><span class="merged" id="all.4Ozmha.spl1" title="原文 : By default, the metric name is the gRPC service name followed by a dot (&apos;.&apos;) followed by the method name.">デフォルトでは、メトリック名はgRPCサービス名で、そのあとにドット('.')とそれに続くメソッド名です。</span> <span class="merged" id="all.4Ozmha.spl2" title="原文 : It is possible to supply a function that can be used to override the default behaviour.">デフォルトの動作をオーバーライドするために使用できる関数を指定できます。</span> </p>

<p><span class="merged" id="all.3BL9xF" title="原文 : The function should implement the io.helidon.grpc.metrics.GrpcMetrics.NamingFunction interface.">この関数は、<code>io.helidon.grpc.metrics.GrpcMetrics.NamingFunction</code>インタフェースを実装する必要があります。</span></p>

<markup
lang="java"

>@FunctionalInterface
public interface NamingFunction {
    /**
     * Create a metric name.
     *
     * @param service    the service descriptor
     * @param methodName the method name
     * @param metricType the metric type
     * @return the metric name
     */
    String createName(ServiceDescriptor service, String methodName, MetricType metricType);
}</markup>

<p><span class="merged" id="all.2ZNZMv" title="原文 : This is a functional interface so a lambda expression can be used too.">これは機能インタフェースであるため、ラムダ式も使用できます。</span></p>

<markup
lang="java"

>GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.counted()
                .nameFunction((svc, method, metric) -&gt; "grpc." + service.name() + '.' + method) <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4TQvau.spl1" title="原文 : The NamingFunction is just a lambda that returns the concatenated service name and method name with the prefix grpc.."><code>NamingFunction</code>は、プレフィクス<code>grpc.</code>が付いた連結サービス名およびメソッド名を返すラムダにすぎません。</span> <span class="merged" id="all.4TQvau.spl2" title="原文 : So for a service &quot;Foo&quot; and method &quot;bar&quot;, the above example would produce a name &quot;grpc.Foo.bar&quot;.">そのため、サービス"Foo"およびメソッド"bar"の場合、前述の例では、"grpc.Foo.bar"という名前が生成されます。</span> </li>
</ul>

</div>

</div>


<h3 id="_security"><span class="merged" id="all.17B62B.4"  title="原文:: Security">セキュリティ</span></h3>
<div class="section">
<p><span class="merged" id="all.1xCIlm" title="原文 : To enable server security, refer to the earlier section about Security maven coordinates for guidance on what dependency to add in the project&rsquo;s pom.xml.">サーバー・セキュリティを有効にするには、プロジェクトのpom.xmlでどの依存関係を追加するかに関するガイダンスについては、<router-link @click.native="this.scrollFix('#security_maven_coordinartes')" to="#security_maven_coordinartes">「セキュリティ・ヘブン・コンシューマ」</router-link>に関する前の項を参照してください。</span></p>


<h4 id="_bootstrapping"><span class="merged" id="all.J2gG6"  title="原文:: Bootstrapping">ブートストラップ</span></h4>
<div class="section">
<p><span class="merged" id="all.oBDcl" title="原文 : There are two steps to configure security with the gRPC server:">gRPCサーバーでセキュリティを構成するステップは2つあります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1Lhnto" title="原文 : Create the security instance and register it the with server.">セキュリティ・インスタンスを作成し、サーバーに登録します。</span>

</li>
<li>
<span class="merged" id="all.3ssVB4" title="原文 : Protect the gRPC services of the server with various security features.">様々なセキュリティ機能を使用して、サーバーのgRPCサービスを保護します。</span>

</li>
</ol>

<markup
lang="java"
title="Example using builders"
>// gRPC server's routing
GrpcRouting.builder()
    // This is step 1 - register security instance with gRPC server processing
    // security - instance of security either from config or from a builder
    // securityDefaults - default enforcement for each service that has a security definition
    .intercept(GrpcSecurity.create(security).securityDefaults(GrpcSecurity.authenticate()))
    // this is step 2 - protect a service
    // register and protect this service with authentication (from defaults) and role "user"
    .register(greetService, GrpcSecurity.rolesAllowed("user"))
    .build();</markup>

<markup
lang="java"
title="Example using builders for more fine grained method level security"
>// create the service descriptor
ServiceDescriptor greetService = ServiceDescriptor.builder(new GreetService())
        // Add an instance of gRPC security that will apply to all methods of
        // the service - in this case require the "user" role
        .intercept(GrpcSecurity.rolesAllowed("user"))
        // Add an instance of gRPC security that will apply to the "SetGreeting"
        // method of the service - in this case require the "admin" role
        .intercept("SetGreeting", GrpcSecurity.rolesAllowed("admin"))
        .build();

// Create the gRPC server's routing
GrpcRouting.builder()
    // This is step 1 - register security instance with gRPC server processing
    // security - instance of security either from config or from a builder
    // securityDefaults - default enforcement for each service that has a security definition
    .intercept(GrpcSecurity.create(security).securityDefaults(GrpcSecurity.authenticate()))
    // this is step 2 - add the service descriptor
    .register(greetService)
    .build();</markup>

<markup
lang="java"
title="Example using configuration"
>GrpcRouting.builder()
    // helper method to load both security and gRPC server security from configuration
    .intercept(GrpcSecurity.create(config))
    // continue with gRPC server route configuration...
    .register(new GreetService())
    .build();</markup>

<markup
lang="conf"
title="Example using configuration - configuration (HOCON)"
># This may change in the future - to align with gRPC server configuration,
# once it is supported
security
  grpc-server:
    # Configuration of integration with gRPC server
    defaults:
        authenticate: true
    # Configuration security for individual services
    services:
    - name: "GreetService"
      defaults:
      roles-allowed: ["user"]
      # Configuration security for individual methods of the service
      methods:
      - name: "SetGreeting"
        roles-allowed: ["admin"]</markup>


<h5 id="_client_security"><span class="merged" id="all.1P0pp8" title="原文 : Client security">クライアント・セキュリティ</span></h5>
<div class="section">
<p><span class="merged" id="all.4MQ7GZ.spl1" title="原文 : When using the Helidon SE gRPC client, API security can be configured for a gRPC service or at the individual method level.">Helidon SE gRPCクライアントを使用する場合、APIセキュリティは、gRPCサービスまたは個々のメソッド・レベルで構成できます。</span> <span class="merged" id="all.4MQ7GZ.spl2" title="原文 : The client API has a custom CallCredentials implementation that integrates with the Helidon security APIs.">クライアントAPIには、HelidonセキュリティAPIと統合するカスタム<code>CallCredentials</code>実装があります。</span> </p>

<markup
lang="java"
title="Example configuring client security for a service"
>Security security = Security.builder()  <span class="conum" data-value="1" />
        .addProvider(HttpBasicAuthProvider.create(config.get("http-basic-auth")))
        .build();

GrpcClientSecurity clientSecurity = GrpcClientSecurity.builder(security.createContext("test.client")) <span class="conum" data-value="2" />
        .property(HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_USER, user)
        .property(HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_PASSWORD, password)
        .build();

ClientServiceDescriptor descriptor = ClientServiceDescriptor <span class="conum" data-value="3" />
        .builder(StringService.class)
        .unary("Lower")
        .callCredentials(clientSecurity)                     <span class="conum" data-value="4" />
        .build();

GrpcServiceClient client = GrpcServiceClient.create(channel, descriptor); <span class="conum" data-value="5" />

String response = client.blockingUnary("Lower", "ABCD"); <span class="conum" data-value="6" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3kYmo6" title="原文 : Create the Helidon Security instance which, in this case, will use the basic auth provider.">Helidon <code>Security</code>インスタンスを作成します。この場合、基本的なauthプロバイダを使用します。</span></li>
<li data-value="2"><span class="merged" id="all.3sv1gi" title="原文 : Create the GrpcClientSecurity gRPC CallCredentials adding the user and password property expected by the basic auth provider.">basic認証プロバイダで想定されるユーザーおよびパスワードのプロパティを追加して、<code>GrpcClientSecurity</code> gRPC <code>CallCredentials</code>を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.2cgqgY" title="原文 : Create the gRPC ClientServiceDescriptor for the StringService gRPC service."><code>StringService</code> gRPCサービスのgRPC <code>ClientServiceDescriptor</code>を作成します。</span></li>
<li data-value="4"><span class="merged" id="all.1GZXuv" title="原文 : Set the GrpcClientSecurity instance as the call credentials for all methods of the service."><code>GrpcClientSecurity</code>インスタンスをサービスのすべてのメソッドのコール資格証明として設定します。</span></li>
<li data-value="5"><span class="merged" id="all.12fSMI" title="原文 : Create a GrpcServiceClient that will allow methods to be called on the service.">サービスでメソッドをコールできるようにする<code>GrpcServiceClient</code>を作成します。</span></li>
<li data-value="6"><span class="merged" id="all.2fEJXx" title="原文 : Call the &quot;Lower&quot; method which will use the configured basic auth credentials.">構成された基本認証資格証明を使用する「Lower」メソッドを呼び出します。</span></li>
</ul>

<markup
lang="java"
title="Example configuring client security for a specific method"
>GrpcClientSecurity clientSecurity = GrpcClientSecurity.builder(security.createContext("test.client")) <span class="conum" data-value="1" />
        .property(HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_USER, user)
        .property(HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_PASSWORD, password)
        .build();

ClientServiceDescriptor descriptor = ClientServiceDescriptor <span class="conum" data-value="2" />
        .builder(StringService.class)
        .unary("Lower")
        .unary("Upper", rules -&gt; rules.callCredentials(clientSecurity)) <span class="conum" data-value="3" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Fu0GN" title="原文 : Create the GrpcClientSecurity call credentials in the same way as above.">前述と同じ方法で<code>GrpcClientSecurity</code>コール資格証明を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.b5ND0" title="原文 : Create the ClientServiceDescriptor, this time with two unary methods, &quot;Lower&quot; and &quot;Upper&quot;.">今度は「Lower」と「Upper」の2つの単項メソッドを使用して、<code>ClientServiceDescriptor</code>を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.2PAyTq" title="原文 : The &quot;Upper&quot; method is configured to use the GrpcClientSecurity call credentials, the &quot;Lower&quot; method will be called without any credentials.">Upperメソッドは<code>GrpcClientSecurity</code>コール資格証明を使用するように構成され、Lowerメソッドは資格証明なしでコールされます。</span></li>
</ul>

</div>


<h5 id="_outbound_security"><span class="merged" id="all.2FhlDk"  title="原文:: Outbound security">アウトバウンド・セキュリティ</span></h5>
<div class="section">
<p><span class="merged" id="all.YAAIr" title="原文 : Outbound security covers three scenarios:">アウトバウンド・セキュリティは、次の3つのシナリオに対応しています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3jbaM5" title="原文 : Calling a secure gRPC service from inside a gRPC service method handler.">gRPCサービス・メソッド・ハンドラ内からのセキュアgRPCサービスの呼び出し。</span></p>

</li>
<li>
<p><span class="merged" id="all.3lCpnq" title="原文 : Calling a secure gRPC service from inside a web server method handler.">webサーバー・メソッド・ハンドラ内からのセキュアgRPCサービスの呼び出し。</span></p>

</li>
<li>
<p><span class="merged" id="all.2qI0S2" title="原文 : Calling a secure web endpoint from inside a gRPC service method handler.">gRPCサービス・メソッド・ハンドラ内からセキュアなwebエンドポイントを呼び出します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.3TErc0" title="原文 : Within each scenario, credentials can be propagated if the gRPC/http method handler is executing within a security context or credentials can be overridden to provide a different set of credentials to use for calling the outbound endpoint.">各シナリオ内で、gRPC/httpメソッド・ハンドラがセキュリティ・コンテキスト内で実行されている場合、または資格証明をオーバーライドして、アウトバウンド・エンドポイントのコールに使用する別の資格証明セットを提供できます。</span></p>

<markup
lang="java"
title="Example calling a secure gRPC service from inside a gRPC service method handler"
>// Obtain the SecurityContext from the current gRPC call Context
SecurityContext securityContext = GrpcSecurity.SECURITY_CONTEXT.get();

// Create a gRPC CallCredentials that will use the current request's
// security context to configure outbound credentials
GrpcClientSecurity clientSecurity = GrpcClientSecurity.create(securityContext);

// Create the gRPC stub using the CallCredentials
EchoServiceGrpc.EchoServiceBlockingStub stub = noCredsEchoStub.withCallCredentials(clientSecurity);</markup>

<markup
lang="java"
title="Example calling a secure gRPC service from inside a web server method handler"
>private static void propagateCredentialsWebRequest(ServerRequest req, ServerResponse res) {
    try {
        // Create a gRPC CallCredentials that will use the current request's
        // security context to configure outbound credentials
        GrpcClientSecurity clientSecurity = GrpcClientSecurity.create(req);

        // Create the gRPC stub using the CallCredentials
        EchoServiceGrpc.EchoServiceBlockingStub stub = noCredsEchoStub.withCallCredentials(clientSecurity);

        String message = req.queryParams().first("message").orElse(null);
        Echo.EchoResponse echoResponse = stub.echo(Echo.EchoRequest.newBuilder().setMessage(message).build());
        res.send(echoResponse.getMessage());
    } catch (StatusRuntimeException e) {
        res.status(GrpcHelper.toHttpResponseStatus(e)).send();
    } catch (Throwable thrown) {
        res.status(Http.ResponseStatus.create(500, thrown.getMessage())).send();
    }
}</markup>

<markup
lang="java"
title="Example calling a secure web endpoint from inside a gRPC service method handler"
>// Obtain the SecurityContext from the gRPC call Context
SecurityContext securityContext = GrpcSecurity.SECURITY_CONTEXT.get();

// Use the SecurityContext as normal to make a http request
Response webResponse = client.target(url)
        .path("/test")
        .request()
        .property(ClientSecurity.PROPERTY_CONTEXT, securityContext)
        .get();</markup>

</div>

</div>

</div>


<h3 id="_marshalling"><span class="merged" id="all.2am2Cj.2"  title="原文:: Marshalling">マーシャリング</span></h3>
<div class="section">

<h4 id="_default_marshalling_support"><span class="merged" id="all.2pYYX7.2" title="原文 : Default Marshalling Support">デフォルトのマーシャリング・サポート</span></h4>
<div class="section">
<p><span class="merged" id="all.1lBbBA.2.spl1" title="原文 : Helidon gRPC supports Protobuf out of the box.">Helidon gRPCは、すぐに使用できるProtobufをサポートします。</span> <span class="merged" id="all.1lBbBA.2.spl2" title="原文 : The Protobuf marshaller will be used by default for any request and response classes that extend com.google.protobuf.MessageLite, which is the case for all classes generated from a proto file using protoc compiler.">Protobuf marshallerは、<code>com.google.protobuf.MessageLite</code>を拡張するリクエストおよびレスポンス・クラスに対してデフォルトで使用されます。これは、<code>protoc</code>コンパイラを使用して<code>proto</code>ファイルから生成されるすべてのクラスの場合です。</span> </p>

<p><span class="merged" id="all.qahU9.2" title="原文 : That means that you don&rsquo;t need any special handling or configuration in order to support Protobuf serialization of requests and responses.">つまり、リクエストとレスポンスのProtobufシリアライズをサポートするために特別な処理や構成は必要ありません。</span></p>

</div>


<h4 id="_custom_marshalling"><span class="merged" id="all.3E6Yvy.2" title="原文 : Custom Marshalling">カスタム・マーシャリング</span></h4>
<div class="section">
<p><span class="merged" id="all.1OEmCk.2" title="原文 : Helidon makes the use of custom marshallers trivial and provides one custom implementation, JsonbMarshaller, out of the box.">Helidonは、カスタム・マーシャラを簡単に使用し、すぐに使用できるカスタム実装<a href="https://github.com/oracle/helidon/tree/master/grpc/core/src/main/java/io/helidon/grpc/core/JsonbMarshaller.java" target="_blank">JsonbMarshaller</a>を提供します。</span></p>

<p><span class="merged" id="all.1VannX.2.spl1" title="原文 : You can also easily implement your own marshaller to support serialization formats that are not supported natively by Helidon, by implementing Marshaller and MarshallerSupplier interfaces."><code>Marshaller</code>および<code>MarshallerSupplier</code>インタフェースを実装することで、Helidonでネイティブにサポートされないシリアライズ形式をサポートするために、独自のマーシャラを簡単に実装することもできます。</span> <span class="merged" id="all.1VannX.2.spl2" title="原文 : As an example, check out the source code of the built-in marshaller: JsonbMarshaller.java.">例として、組込みマーシャラのソース・コードを確認: <a href="https://github.com/oracle/helidon/tree/master/grpc/core/src/main/java/io/helidon/grpc/core/JsonbMarshaller.java" target="_blank">JsonbMarshaller.java</a>。</span> </p>

<p><span class="merged" id="all.6pteM.2.spl1" title="原文 : Furthermore, Oracle Coherence CE provides a marshaller for a highly optimized, binary, platform independent Portable Object Format (POF).">さらに、<a href="https://coherence.community/" target="_blank">Oracle Coherence CE</a>は、高度に最適化されたバイナリ、プラットフォームに依存しないポータブル・オブジェクト・フォーマット(POF)のためのマーシャラを提供します。</span> <span class="merged" id="all.6pteM.2.spl2" title="原文 : You can find more information about POF in Coherence documentation">POFの詳細は、<a href="https://coherence.community/20.12/docs/#/docs/core/04_portable_types" target="_blank">「Coherenceのドキュメント」</a>を参照してください</span> </p>


<h5 id="_setting_the_custom_marshaller"><span class="merged" id="all.1gHLoI.2" title="原文 : Setting the custom marshaller">カスタム・マーシャラの設定</span></h5>
<div class="section">
<p><span class="merged" id="all.Q5u5P" title="原文 : You can implement the update method on your service&rsquo;s class and set the custom marshaller supplier via the ServiceDescriptor.Rules.marshallerSupplier() method:">サービスのクラスに<code>update</code>メソッドを実装し、<code>ServiceDescriptor.Rules.marshallerSupplier()</code>メソッドを使用してカスタム・マーシャラ・サプライヤを設定できます:</span></p>

<markup
lang="java"
title="Sample code for setting the marshaller on the gRPC service"
>public class GreetServiceJava
        implements GrpcService {
    private String greeting;


    public GreetServiceJava(Config config) {
        this.greeting = config.get("app.greeting").asString().orElse("Ciao");
    }

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.marshallerSupplier(new JsonbMarshaller.Supplier())  <span class="conum" data-value="1" />
                .unary("Greet", this::greet)
                .unary("SetGreeting", this::setGreeting);
    }

    // Implement Service methods
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1IWU9i.1" title="原文 : Specify the custom marshaller to use.">使用するカスタム・マーシャラを指定します。</span></li>
</ul>

</div>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.33"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2ek9BR" title="原文 : Configure the gRPC server using the Helidon configuration framework, either programmatically or via a configuration file.">プログラムまたは構成ファイルを使用して、Helidon構成フレームワークを使用してgRPCサーバーを構成します。</span></p>


<h3 id="_configuring_the_grpc_server_in_your_code"><span class="merged" id="all.4fq75K" title="原文 : Configuring the gRPC server in your code">コードでのgRPCサーバーの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.YOYnF" title="原文 : The easiest way to configure the gRPC server is in your application code.">gRPCサーバーを構成するもっとも簡単な方法は、アプリケーション・コードにあります。</span></p>

<markup
lang="java"

>GrpcServerConfiguration configuration = GrpcServerConfiguration.builder()
                                                       .port(8080)
                                                       .build();
GrpcServer grpcServer = GrpcServer.create(configuration, routing);</markup>

<p><span class="merged" id="all.YAmBe" title="原文 : See all configuration options here.">すべての構成オプション<a href="./apidocs/io.helidon.grpc/GrpcServerConfiguration.html" target="_blank">「こちら」</a>を参照してください。</span></p>

</div>


<h3 id="_configuring_the_grpc_server_in_a_configuration_file"><span class="merged" id="all.48nZ06" title="原文 : Configuring the gRPC server in a configuration file">構成ファイル内のgRPCサーバーの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.13y98L" title="原文 : You can also define the gRPC server configuration in a file.">ファイル内にgRPCサーバー構成を定義することもできます。</span></p>

<p><span class="merged" id="all.2H6mAf.2" title="原文 : Type: io.helidon.grpc.server.GrpcServerConfiguration">タイプ: <a href="./apidocs/io.helidon.grpc.server/io/helidon/grpc/server/GrpcServerConfiguration.html" target="_blank">io.helidon.grpc.server.GrpcServerConfiguration</a></span></p>

</div>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.88"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.89" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.110"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.106"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.111"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.116"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.8"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.291"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.18ZckH.2"  title="原文: grpc.server"><code>grpc.server</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.nAZ49.2" title="原文 : Set the name of the gRPC server.">gRPCサーバーの名前を設定します。</span></p>

<markup>Configuration key: `name`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0DZR.2"  title="原文: native"><code>native</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.166"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.69"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1XATWJ.2" title="原文 : Specify if native transport should be used.">ネイティブ・トランスポートを使用するかどうかを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.18"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.72"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1eyLYf.4"  title="原文: 1408"><code>1408</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JZRAy.2.spl1" title="原文 : Sets server port.">サーバー・ポートを設定します。</span> <span class="merged" id="all.4JZRAy.2.spl2" title="原文 : If port is 0 or less then any available ephemeral port will be used.">ポートが<code>0</code>以下の場合は、使用可能なエフェメラル・ポートが使用されます。</span> </p>

<markup>Configuration key: `port`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZTtEy.2"  title="原文: workers"><code>workers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.73"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lxuei.2"  title="原文: Number of processors available to the JVM"><code>Number of processors available to the JVM</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XV1dm.4.spl1" title="原文 : Sets a count of threads in pool used to process HTTP requests.">HTTPリクエストの処理に使用されるプール内のスレッド数を設定します。</span> <span class="merged" id="all.2XV1dm.4.spl2" title="原文 : Default value is CPU_COUNT * 2.">デフォルト値は<code>CPU_COUNT * 2</code>です。</span> </p>

<markup>Configuration key: `workers`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<markup
lang="yaml"
title="GrpcServer configuration file example using  <code>application.yaml</code>"
>grpc:
  port: 3333</markup>

<p><span class="merged" id="all.1Cq2QG" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="GrpcServer initialization using the <code>application.conf</code> file located on the classpath"
>GrpcServerConfiguration configuration = GrpcServerConfiguration.create(
        Config.builder()
              .sources(classpath("application.conf"))
              .build());

GrpcServer grpcServer = GrpcServer.create(configuration, routing);</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.33"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_quick_start"><span class="merged" id="all.2FbcJI.1"  title="原文:: Quick Start">クイック・スタート</span></h3>
<div class="section">
<p><span class="merged" id="all.4WbR52" title="原文 : Here is the code for a minimalist gRPC application that runs on a default port (1408):">次に、デフォルト・ポート(1408)で実行される最小のgRPCアプリケーションのコードを示します:</span></p>

<markup
lang="java"

>public static void main(String[] args) throws Exception {
    GrpcServer grpcServer = GrpcServer
            .create(GrpcRouting.builder()
                            .register(new HelloService()) <span class="conum" data-value="1" />
                            .build())
            .start() <span class="conum" data-value="2" />
            .toCompletableFuture()
            .get(10, TimeUnit.SECONDS); // Implement the simplest possible gRPC service. <span class="conum" data-value="3" />

    System.out.println("gRPC server started at: http://localhost:" + grpcServer.port()); <span class="conum" data-value="4" />
}

static class HelloService implements GrpcService { <span class="conum" data-value="5" />
    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.marshallerSupplier(new JsonbMarshaller.Supplier()) <span class="conum" data-value="6" />
             .unary("SayHello", ((request, responseObserver) -&gt; complete(responseObserver, "Hello " + request))); <span class="conum" data-value="7" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2UCX7G" title="原文 : Register the gRPC service.">gRPCサービスを登録します。</span></li>
<li data-value="2"><span class="merged" id="all.4MC0LP"  title="原文:: Start the server.">サーバーを起動します。</span></li>
<li data-value="3"><span class="merged" id="all.3ZVyyY" title="原文 : Wait for the server to start while throwing possible errors as exceptions.">例外として発生する可能性のあるエラーをスローしている間、サーバーが起動するまで待機します。</span></li>
<li data-value="4"><span class="merged" id="all.LZyih" title="原文 : The server is bound to a default port (1408).">サーバーはデフォルト・ポート(1408)にバインドされています。</span></li>
<li data-value="5"><span class="merged" id="all.46XzQr" title="原文 : Implement the simplest possible gRPC service.">可能なかぎり単純なgRPCサービスを実装します。</span></li>
<li data-value="6"><span class="merged" id="all.25yNzL" title="原文 : Specify a custom marshaller using the built-in JsonB marshaller to marshall requests and responses.">組込みのJsonBマーシャラを使用してカスタム・マーシャラを指定し、リクエストとレスポンスをマーシャリングします。</span></li>
<li data-value="7"><span class="merged" id="all.3VfwKj" title="原文 : Add unary method HelloService/SayHello to the service definition.">単項メソッド<code>HelloService/SayHello</code>をサービス定義に追加します。</span></li>
</ul>

</div>


<h3 id="_additional_grpc_server_examples"><span class="merged" id="all.3nuhh3" title="原文 : Additional gRPC server examples">追加のgRPCサーバーの例</span></h3>
<div class="section">
<p><span class="merged" id="all.3VEKuv" title="原文 : A set of gRPC server examples for Helidon SE can be found in the following links:">Helidon SEのgRPCサーバーの例については、次のリンクを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1oeolb" title="原文 : Basic gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/basics" target="_blank">基本的なgRPCサーバー</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3lJgJe.1" title="原文 : gRPC Server Metrics"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/metrics" target="_blank">gRPCサーバー・メトリクス</a></span></p>

</li>
<li>
<p><span class="merged" id="all.PHKeo.1" title="原文 : OpenTracing on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/opentracing" target="_blank">gRPCサーバー上のOpenTracing</a></span></p>

</li>
<li>
<p><span class="merged" id="all.14yf4W.1" title="原文 : Basic Auth Security on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/security" target="_blank">gRPCサーバー上の基本的な認証セキュリティ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3eT7Rk.1" title="原文 : Attribute-Based Access Control (ABAC) security on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/security-abac" target="_blank">gRPCサーバー上の属性ベースのアクセス制御(ABAC)セキュリティ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3yqiBr.1" title="原文 : Outbound Security on a gRPC Server"><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/security-outbound" target="_blank">gRPCサーバー上のアウトバウンド・セキュリティ</a></span></p>

</li>
</ul>

</div>

</div>

</doc-view>
