<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_service_implementation"><span class="merged" id="all.3veEN6" title="原文 : Service Implementation">サービス実装</span></h2>
<div class="section">
<p><span class="merged" id="all.3iLbaI" title="原文 : While Helidon gRPC Server allows you to deploy any standard gRPC service that implements io.grpc.BindableService interface, including services generated from the Protobuf IDL files (and even allows you to customize them to a certain extent), using Helidon gRPC framework to implement your services has a number of benefits:">Helidon gRPCサーバーを使用すると、Protobuf IDLファイルから生成されたサービスを含む、<code>io.grpc.BindableService</code>インタフェースを実装する任意の標準gRPCサービスをデプロイできますが(特定の範囲までカスタマイズすることもできます)、Helidon gRPCフレームワークを使用してサービスを実装することには、次のような多くの利点があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3MyONY" title="原文 : It allows you to define both HTTP and gRPC services using similar programming model, simplifying learning curve for developers.">これにより、同様のプログラミング・モデルを使用してHTTPサービスとgRPCサービスの両方を定義でき、開発者の学習を簡素化できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3Py7wH" title="原文 : It provides a number of helper methods that make service implementation significantly simpler.">サービスの実装を大幅に簡素化するヘルパー・メソッドが多数用意されています。</span></p>

</li>
<li>
<p><span class="merged" id="all.47fO64" title="原文 : It allows you to configure some of the Helidon value-added features, such as security and metrics collection down to the method level.">これにより、<router-link @click.native="this.scrollFix('#08_security.adoc')" to="#08_security.adoc">「セキュリティ」</router-link>や<router-link @click.native="this.scrollFix('#07_metrics.adoc')" to="#07_metrics.adoc">「メトリック収集」</router-link>など、一部のHelidonの付加価値機能をメソッド・レベルまで構成できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.25UzgG" title="原文 : It allows you to easily specify custom marshaller for requests and responses if Protobuf does not satisfy your needs.">Protobufがニーズを満たさない場合、リクエストおよびレスポンスのカスタム・マーシャラを簡単に指定できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1UYZ3v" title="原文 : It provides built in support for health checks."><router-link @click.native="this.scrollFix('#06_health_checks.adoc')" to="#06_health_checks.adoc">「ヘルス・チェック」</router-link>の組込みサポートを提供します。</span></p>

</li>
</ul>
</div>

<h2 id="_service_implementation_basics"><span class="merged" id="all.4fKSEI" title="原文 : Service Implementation Basics">サービス実装の基本</span></h2>
<div class="section">
<p><span class="merged" id="all.23y1dp" title="原文 : At the very basic level, all you need to do in order to implement a Helidon gRPC service is create a class that implements io.helidon.grpc.server.GrpcService interface and define one or more methods for the service:">非常に基本的なレベルでは、Helidon gRPCサービスを実装するために必要なことは、<code>io.helidon.grpc.server.GrpcService</code>インタフェースを実装するクラスを作成し、そのサービスに対して1つ以上のメソッドを定義することのみです:</span></p>

<markup
lang="java"

>class EchoService implements GrpcService {

    @Override
    public void update(ServiceDescriptor.Rules rules) {
        rules.unary("Echo", this::echo); <span class="conum" data-value="1" />
    }

    /**
     * Echo the message back to the caller.
     *
     * @param request   the echo request containing the message to echo
     * @param observer  the response observer
     */
    public void echo(String request, StreamObserver&lt;String&gt; observer) {  <span class="conum" data-value="2" />
        complete(observer, request);  <span class="conum" data-value="3" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2UbjlY" title="原文 : Define unary method Echo and map it to the this::echo handler.">単項メソッド<code>Echo</code>を定義し、<code>this::echo</code>ハンドラにマップします。</span></li>
<li data-value="2"><span class="merged" id="all.1FyXf2" title="原文 : Create a handler for the Echo method."><code>Echo</code>メソッドのハンドラを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.UepiB" title="原文 : Send the request string back to the client by completing response observer.">レスポンス・オブザーバを完了して、リクエスト文字列をクライアントに返信します。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3RPNj9.spl1" title="原文 : The complete method shown in the example above is just one of many helper methods available in the GrpcService class.">前述の例に示されている<code>complete</code>メソッドは、<code>GrpcService</code>クラスで使用可能な多くのヘルパー・メソッドのうちの1つです。</span> <span class="merged" id="all.3RPNj9.spl2" title="原文 : See the full list here."><a href="./apidocs/io.helidon.grpc.server/io/helidon/grpc/server/GrpcService.html" id="" target="_blank" >「こちら」</a>の完全なリストを参照してください。</span> </p>
</div>
<p><span class="merged" id="all.3twL7Y.spl1" title="原文 : The example above implements a service with a single unary method, which will be exposed at the `EchoService/Echo&apos; endpoint.">前述の例では、`EchoService/Echo'エンドポイントで公開される単一の単項メソッドを使用してサービスを実装します。</span> <span class="merged" id="all.3twL7Y.spl2" title="原文 : The service does not explicitly define a marshaller for requests and responses, so Java serialization will be used as a default.">サービスは、リクエストとレスポンスのマーシャラを明示的に定義しないため、Java直列化がデフォルトとして使用されます。</span> </p>

<p><span class="merged" id="all.bCcDs.spl1" title="原文 : Unfortunately, this implies that you will have to implement clients by hand and configure them to use the same marshaller as the server.">これは、クライアントを手動で実装し、サーバーと同じマーシャラを使用するように構成する必要があることを意味します。</span> <span class="merged" id="all.bCcDs.spl2" title="原文 : Obviously, one of the major selling points of gRPC is that it makes it easy to generate clients for a number of languages (as long as you use Protobuf for marshalling), so let&rsquo;s see how we would implement Protobuf enabled Helidon gRPC service.">gRPCの主なセールス・ポイントの1つは、(マーシャリングにProtobufを使用するかぎり)多数の言語のクライアントを簡単に生成できることです。したがって、Protobuf対応のHelidon gRPCサービスを実装する方法を見てみましょう。</span> </p>

</div>

<h2 id="_implementing_protobuf_services"><span class="merged" id="all.4edg3w" title="原文 : Implementing Protobuf Services">Protobufサービスの実装</span></h2>
<div class="section">
<p><span class="merged" id="all.2XgE5q" title="原文 : In order to implement Protobuf-based service, you would follow the official instructions on the gRPC web site, which boil down to the following:">プロトコル・ベースのサービスを実装するには、gRPC webサイトの公式の<a href="https://grpc.io/docs/quickstart/java.html" id="" target="_blank" >「インストラクション」</a>に従います。これは次のようになります:</span></p>


<h3 id="_define_the_service_idl"><span class="merged" id="all.Hj81Q" title="原文 : Define the Service IDL">サービスIDLの定義</span></h3>
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

<h3 id="_implement_the_service"><span class="merged" id="all.hrmhF" title="原文 : Implement the Service">サービスの実装</span></h3>
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
<li data-value="1"><span class="merged" id="all.30uYUy" title="原文 : Specify proto descriptor in order to provide necessary type information and enable Protobuf marshalling.">必要なタイプ情報を提供し、Protobufマーシャリングを有効にするには、proto記述子を指定します。</span></li>
<li data-value="2"><span class="merged" id="all.2UbjlY.1" title="原文 : Define unary method Echo and map it to the this::echo handler.">単項メソッド<code>Echo</code>を定義し、<code>this::echo</code>ハンドラにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.1RHvNy" title="原文 : Create a handler for the Echo method, using Protobuf message types for request and response.">リクエストおよびレスポンスのProtobufメッセージ・タイプを使用して、<code>Echo</code>メソッドのハンドラを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.3ddQPJ" title="原文 : Extract message string from the request.">リクエストからメッセージ文字列を抽出します。</span></li>
<li data-value="5"><span class="merged" id="all.cJSee" title="原文 : Create the response containing extracted message.">抽出されたメッセージを含むレスポンスを作成します。</span></li>
<li data-value="6"><span class="merged" id="all.3221x8" title="原文 : Send the response back to the client by completing response observer.">レスポンス・オブザーバを完了して、レスポンスをクライアントに返信します。</span></li>
</ul>
</div>
</div>
</doc-view>
