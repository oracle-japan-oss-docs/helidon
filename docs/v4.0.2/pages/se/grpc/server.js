<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.53"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.52" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.37" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.30" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1kbeCX" title="原文 : gRPC Server Routing"><router-link @click.native="this.scrollFix('#_grpc_server_routing')" to="#_grpc_server_routing">gRPCサーバーのルーティング</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4LgFPh" title="原文 : Service Implementation"><router-link @click.native="this.scrollFix('#_service_implementation')" to="#_service_implementation">サービス実装</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.26FILD.30" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.4eLZMD" title="原文 : Configuring the gRPC Server in the Code"><router-link @click.native="this.scrollFix('#_configuring_the_grpc_server_in_the_code')" to="#_configuring_the_grpc_server_in_the_code">コード内のgRPCサーバーの構成</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.29" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.68"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1jp4Vq" title="原文 : gRPC scope is temporarily smaller in Helidon, please follow issue https://github.com/helidon-io/helidon/issues/5418 As this is still work in progress, the WebServer gRPC module is release in preview mode, as we may introduce backward incompatible changes to our APIs, so we can re-introduce features.">gRPCスコープは、Helidonで一時的に小さくなっています。問題<a class="bare" href="https://github.com/helidon-io/helidon/issues/5418" target="_blank">https://github.com/helidon-io/helidon/issues/5418</a>に従ってください。これはまだ機能しているため、WebServer gRPCモジュールはプレビュー・モードでリリースされます。これは、APIに下位互換性のない変更を導入する可能性があるため、機能を再導入できるためです。</span></p>

<p><span class="merged" id="all.3x83Rq.spl1" title="原文 : The Helidon gRPC server provides a framework for creating gRPC applications.">Helidon gRPCサーバーは、<a href="http://grpc.io/" target="_blank">gRPC</a>アプリケーションを作成するためのフレームワークを提供します。</span> <span class="merged" id="all.3x83Rq.spl2" title="原文 : While it allows you to deploy any standard gRPC service that implements io.grpc.BindableService interface, including services generated from the Protobuf IDL files (and even allows you to customize them to a certain extent), using Helidon gRPC framework to implement your services has a number of benefits:">Protobuf IDLファイルから生成されたサービス(および特定の範囲にカスタマイズできるサービス)を含む<code>io.grpc.BindableService</code>インタフェースを実装する標準のgRPCサービスをデプロイできますが、Helidon gRPCフレームワークを使用してサービスを実装すると、いくつかの利点があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3VCFqE" title="原文 : It allows you to define both HTTP and gRPC services using a similar programming model, simplifying the learning curve for developers.">同様のプログラミング・モデルを使用してHTTPサービスおよびgRPCサービスの両方を定義できるため、開発者の学習曲線が簡素化されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3Py7wH" title="原文 : It provides a number of helper methods that make service implementation significantly simpler.">サービスの実装を大幅に簡素化するヘルパー・メソッドが多数用意されています。</span></p>

</li>
<li>
<p><span class="merged" id="all.4SXc3R" title="原文 : It allows you to run gRPC and HTTP endpoints on the same WebServer, and even on the same port.">これにより、同じWebServer上および同じポート上でもgRPCおよびHTTPエンドポイントを実行できます。</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.45"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.kAt3f" title="原文 : To enable gRPC Server add the following dependency to your project’s pom.xml (see Managing Dependencies).">gRPCサーバーを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-grpc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.47"  title="原文:: Usage">使用</span></h2>
<div class="section">

<h3 id="_grpc_server_routing"><span class="merged" id="all.44qCVp" title="原文 : gRPC Server Routing">gRPCサーバーのルーティング</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4VEr5D" title="原文 : Customizing Service Definitions"><router-link @click.native="this.scrollFix('#_customizing_service_definitions')" to="#_customizing_service_definitions">サービス定義のカスタマイズ</router-link></span></p>

</li>
</ul>

<p><span class="merged" id="all.1BoDVo.spl1" title="原文 : Unlike the HTTP server, which allows you to route requests based on path expression and the HTTP verb, the gRPC server always routes requests based on the service and method name.">パス式とHTTP動詞に基づいてリクエストをルーティングできるHTTPサーバーとは異なり、gRPCサーバーは常にサービスとメソッド名に基づいてリクエストをルーティングします。</span> <span class="merged" id="all.1BoDVo.spl2" title="原文 : This makes routing configuration somewhat simpler - all you need to do is register your services:">これにより、ルーティング構成が若干簡単になります。必要なのは、サービスの登録のみです:</span> </p>

<markup
lang="java"

>private static GrpcRouting.Builder createRouting(Config config) {
    return GrpcRouting.builder()
            .service(new GreetService(config)) <span class="conum" data-value="1" />
            .service(new EchoService())        <span class="conum" data-value="2" />
            .service(new MathService())        <span class="conum" data-value="3" />
            .unary(Strings.getDescriptor(),    <span class="conum" data-value="4" />
                    "StringService",
                    "Upper",
                    Main::grpcUpper);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.25UOG8" title="原文 : Register GreetService instance."><code>GreetService</code>インスタンスを登録します。</span></li>
<li data-value="2"><span class="merged" id="all.23FrRS" title="原文 : Register EchoService instance."><code>EchoService</code>インスタンスを登録します。</span></li>
<li data-value="3"><span class="merged" id="all.3QRvSM" title="原文 : Register MathService instance."><code>MathService</code>インスタンスを登録します。</span></li>
<li data-value="4"><span class="merged" id="all.35LRDE" title="原文 : Register a custom unary gRPC route">カスタム単項gRPCルートの登録</span></li>
</ul>

<p><span class="merged" id="all.3Rc9el.spl1" title="原文 : Both &quot;standard&quot; gRPC services that implement io.grpc.BindableService interface (typically implemented by extending the generated server-side stub and overriding its methods), and Helidon gRPC services that implement io.helidon.grpc.server.GrpcService interface can be registered."><code>io.grpc.BindableService</code>インタフェースを実装する標準gRPCサービス(通常は、生成されたサーバー側のスタブを拡張してそのメソッドをオーバーライドすることによって実装される)と、<code>io.helidon.grpc.server.GrpcService</code>インタフェースを実装するHelidon gRPCサービスを登録できます。</span> <span class="merged" id="all.3Rc9el.spl2" title="原文 : The difference is that Helidon gRPC services allow you to customize behavior down to the method level, and provide a number of useful helper methods that make service implementation easier, as we’ll see in a moment.">違いは、Helidon gRPCサービスでは、メソッド・レベルまで動作をカスタマイズできることと、サービスの実装を簡単にする便利なヘルパー・メソッドが数多く用意されていることです。</span> </p>


<h4 id="_customizing_service_definitions"><span class="merged" id="all.24RC3j" title="原文 : Customizing Service Definitions">サービス定義のカスタマイズ</span></h4>
<div class="section">
<p><span class="merged" id="all.448Tn8" title="原文 : When registering a service, regardless of its type, you can customize its descriptor by providing an instance of ServerServiceDefinition to service method.">サービスを登録する場合、そのタイプに関係なく、<code>ServerServiceDefinition</code>のインスタンスを<code>service</code>メソッドに提供することで、その記述子をカスタマイズできます。</span></p>

</div>

</div>


<h3 id="_service_implementation"><span class="merged" id="all.3veEN6" title="原文 : Service Implementation">サービス実装</span></h3>
<div class="section">

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
    public Descriptors.FileDescriptor proto() {
        return Echo.getDescriptor(); <span class="conum" data-value="1" />
    }

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.unary("Echo", this::echo); <span class="conum" data-value="2" />
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
<li data-value="2"><span class="merged" id="all.2UbjlY" title="原文 : Define unary method Echo and map it to the this::echo handler.">単項メソッド<code>Echo</code>を定義し、<code>this::echo</code>ハンドラにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.1RHvNy" title="原文 : Create a handler for the Echo method, using Protobuf message types for request and response.">リクエストおよびレスポンスのProtobufメッセージ・タイプを使用して、<code>Echo</code>メソッドのハンドラを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.3ddQPJ" title="原文 : Extract message string from the request.">リクエストからメッセージ文字列を抽出します。</span></li>
<li data-value="5"><span class="merged" id="all.cJSee" title="原文 : Create the response containing extracted message.">抽出されたメッセージを含むレスポンスを作成します。</span></li>
<li data-value="6"><span class="merged" id="all.3221x8" title="原文 : Send the response back to the client by completing response observer.">レスポンス・オブザーバを完了して、レスポンスをクライアントに返信します。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4METER.spl1" title="原文 : The complete method shown in the example above is just one of many helper methods available in the ResponseHelper class.">前述の例に示されている<code>complete</code>メソッドは、<code>ResponseHelper</code>クラスで使用可能な多くのヘルパー・メソッドのうちの1つです。</span> <span class="merged" id="all.4METER.spl2" title="原文 : See the full list here."><a href="/apidocs/io.helidon.webserver.grpc/io/helidon/webserver/grpc/ResponseHelper.html" target="_blank">「こちら」</a>の完全なリストを参照してください。</span> </p>
</div>

</div>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.34"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2ek9BR" title="原文 : Configure the gRPC server using the Helidon configuration framework, either programmatically or via a configuration file.">プログラムまたは構成ファイルを使用して、Helidon構成フレームワークを使用してgRPCサーバーを構成します。</span></p>


<h3 id="_configuring_the_grpc_server_in_the_code"><span class="merged" id="all.3EUjeT" title="原文 : Configuring the gRPC Server in the Code">コード内のgRPCサーバーの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.ALLrj" title="原文 : Currently we do not have any custom configuration options for gRPC protocol.">現在、gRPCプロトコルのカスタム構成オプションはありません。</span></p>

<p><span class="merged" id="all.3obGa8" title="原文 : To register a routing with Helidon WebServer, simply add the routing to the listener (WebServer configuration is itself the default listener configuration)">ルーティングをHelidon WebServerに登録するには、単にリスナーにルーティングを追加します(WebServer構成自体がデフォルトのリスナー構成です)</span></p>

<markup
lang="java"

>WebServer.builder()
    .port(8080)
    .routing(httpRouting -&gt; httpRouting.get("/greet", (req, res) -&gt; res.send("Hi!"))) <span class="conum" data-value="1" />
    .addRouting(GrpcRouting.builder()  <span class="conum" data-value="2" />
                   .unary(String.getDescriptor(),
                          "StringService",
                          "Upper",
                          Main::grpcUpper))
   .build()
   .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3TOCWW" title="原文 : Configure HTTP routing of the server">サーバーのHTTPルーティングの構成</span></li>
<li data-value="2"><span class="merged" id="all.3iESSx" title="原文 : Configure gRPC routing of the server">サーバーのgRPCルーティングの構成</span></li>
</ul>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.31"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.2zb92a" title="原文 : The following gRPC examples for Helidon SE are available:">Helidon SEの次のgRPCの例を使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1FYiIG" title="原文 : Multiple protocols on a single WebServer"><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/webserver/protocols" target="_blank">単一のWebServer上の複数のプロトコル</a></span></p>

</li>
</ul>

</div>

</doc-view>
