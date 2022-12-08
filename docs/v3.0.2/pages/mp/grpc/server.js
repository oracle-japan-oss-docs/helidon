<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.8"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.6" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.6" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.5" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.3" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.6" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.5" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.6"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.45R72G.spl1" title="原文 : The gRPC Microprofile APIs are an extension to Helidon MP to allow building of gRPC services and clients that integrate with the Microprofile APIs.">gRPC Microprofile APIは、<router-link to="/mp/introduction">Helidon MP</router-link>の拡張機能であり、Microprofile APIと統合するgRPCサービスおよびクライアントを構築できます。</span> <span class="merged" id="all.45R72G.spl2" title="原文 : Using Helidon gRPC MP makes building gRPC services and clients an easier process compared to the traditional approach using Protobuf files and code generation.">Helidon gRPC MPを使用すると、Protobufファイルおよびコード生成を使用する従来のアプローチと比較して、gRPCサービスおよびクライアントの構築が容易になります。</span> <span class="merged" id="all.45R72G.spl3" title="原文 : Services can be built using POJOs that are then discovered and deployed at runtime in the same way the Helidon MP discovers and deploys web resources in the MP HTTP server.">サービスは、Helidon MPがMP HTTPサーバーにwebリソースを検出してデプロイするのと同じ方法で、実行時に検出およびデプロイされるPOJOを使用して構築できます。</span> </p>

<p><span class="merged" id="all.2SCIdr" title="原文 : Building gRPC services using Helidon gRPC MP is very simple and allows the developer to concentrate on their application logic without needing to write a lot of boilerplate gRPC code.">Helidon gRPC MPを使用したgRPCサービスのビルドは非常に単純で、開発者は多くのボイラープレートgRPCコードを記述しなくてもアプリケーション・ロジックに集中できます。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.6"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3IyVMj" title="原文 : To enable gRPC MicroProfile Server add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPC MicroProfile Serverを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-grpc-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.5"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3xQHxY" title="原文 : The following annotations are used to implement Helidon MP gRPC Services:">次の注釈は、Helidon MP gRPCサービスの実装に使用されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1LRmjS.1" title="原文 : @Grpc - an annotation used to mark a class as representing a gRPC service."><code>@Grpc</code> - クラスをgRPCサービスを表すために使用する注釈。</span></p>

</li>
<li>
<p><span class="merged" id="all.Ni7jh" title="原文 : @GrpcMarshaller - an annotation used to annotate a type or method to specify the named marshaller supplier to use for rpc method calls."><code>@GrpcMarshaller</code> - rpcメソッド呼出しに使用する名前付きマーシャラ・サプライヤを指定するために、タイプまたはメソッドに注釈を付けるために使用される注釈。</span></p>

</li>
</ul>

<p><span class="merged" id="all.3n2DhL" title="原文 : gRPC method types:">gRPCメソッド・タイプ:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2UcY3L" title="原文 : @Unary - a simple method with at most a single request value and returning at most a single response value."><router-link @click.native="this.scrollFix('#_unary_methods')" to="#_unary_methods"><code>@Unary</code></router-link> - 最大で単一のリクエスト値を持ち、最大で単一のレスポンス値を返す単純なメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.1ntQPH" title="原文 : @ServerStreaming - a method that takes at most a single request value but may return zero or more response values."><router-link @click.native="this.scrollFix('#_serverstreaming_methods')" to="#_serverstreaming_methods"><code>@ServerStreaming</code></router-link> - 最大で単一のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.oN2tQ" title="原文 : @ClientStreaming - a request that takes one or more request values and returns at most one response value."><router-link @click.native="this.scrollFix('#_clientstreaming_methods')" to="#_clientstreaming_methods"><code>@ClientStreaming</code></router-link> - 1つ以上のリクエスト値を取り、最大1つのレスポンス値を返すリクエスト。</span></p>

</li>
<li>
<p><span class="merged" id="all.1K5d6R" title="原文 : @Bidirectional - a method that can take one or more request values and return zero or more response values."><router-link @click.native="this.scrollFix('#_bi_directional_streaming_methods')" to="#_bi_directional_streaming_methods"><code>@Bidirectional</code></router-link> - 1つ以上のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
</ul>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.3"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_defining_a_service"><span class="merged" id="all.10hw4z"  title="原文:: Defining a Service">サービスの定義</span></h3>
<div class="section">
<p><span class="merged" id="all.1ZcLjz.spl1" title="原文 : The traditional approach to building Java gRPC services is to write Protobuf files describing the service, use these files to generate service stubs, and then implement the service methods by extending the generated stub classes.">Java gRPCサービスを構築する従来のアプローチは、サービスを記述するProtobufファイルを記述し、これらのファイルを使用してサービス・スタブを生成し、生成されたスタブ・クラスを拡張することによってサービス・メソッドを実装することです。</span> <span class="merged" id="all.1ZcLjz.spl2" title="原文 : Using Helidon gRPC MP, all you need to do is write an annotated service implementation class that is just a normal POJO.">Helidon gRPC MPを使用すると、通常のPOJOである注釈付きサービス実装クラスを記述することだけです。</span> </p>

<p><span class="merged" id="all.6vDv5"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="java"
title="Simple gRPC Service"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public class StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public String upper(String s) {
        return s == null ? null : s.toUpperCase();
    }
}</markup>

<p><span class="merged" id="all.1Ryg6R.spl1" title="原文 : The code above is a simple service with a single unary method that just converts a String to uppercase.">前述のコードは、Stringを大文字に変換するだけの単一の単項メソッドを持つ単純なサービスです。</span> <span class="merged" id="all.1Ryg6R.spl2" title="原文 : The important parts in the example are the @ApplicationScoped, @Grpc and @Unary annotations.">例の重要な部分は、<code>@ApplicationScoped</code>、<code>@Grpc</code>および<code>@Unary</code>注釈です。</span> <span class="merged" id="all.1Ryg6R.spl3" title="原文 : These, along with other annotations discussed later, allow the gRPC MP APIs to discover, configure and deploy the service.">これらは、後述するほかの注釈とともに、gRPC MP APIがサービスを検出、構成、およびデプロイできるようにします。</span> </p>

<p><span class="merged" id="all.4Gsexe" title="原文 : Of course Helidon gRPC MP does not preclude you from using the Protobuf files approach as traditional gRPC Java services also work in a gRPC MP server.">もちろん、Helidon gRPC MPは、従来のgRPC JavaサービスもgRPC MPサーバーで動作するため、Protobufファイル・アプローチの使用を禁止しません。</span></p>

<p><span class="merged" id="all.3acRYG.spl1" title="原文 : As already shown above, a Helidon gRPC MP service is just an annotated POJO.">前述のように、Helidon gRPC MPサービスは注釈付きPOJOだけです。</span> <span class="merged" id="all.3acRYG.spl2" title="原文 : To make a class a service, it requires two annotations.">クラスをサービスにするには、2つの注釈が必要です。</span> </p>

<markup
lang="java"

>@ApplicationScoped                             <span class="conum" data-value="1" />
@io.helidon.microprofile.grpc.core.Grpc        <span class="conum" data-value="2" />
public class StringService {
    /* code is omitted */
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3ojd0g" title="原文 : The ApplicationScoped annotation is what makes the service implementation a CDI bean and hence discoverable."><code>ApplicationScoped</code>注釈は、サービス実装をCDI beanにして検出可能にするものです。</span></li>
<li data-value="2"><span class="merged" id="all.1j1iqg" title="原文 : The Grpc annotation is what defines the class as a gRPC service so that when the bean is discovered, it is then deployed by the gRPC MP server."><code>Grpc</code>注釈は、Beanが検出されるとgRPC MPサーバーによってデプロイされるように、クラスをgRPCサービスとして定義するものです。</span></li>
</ul>

</div>


<h3 id="_service_name"><span class="merged" id="all.1XEuaQ"  title="原文:: Service Name">サービス名</span></h3>
<div class="section">
<p><span class="merged" id="all.1oFWlb.spl1" title="原文 : By default when a class is annotated with Grpc, the class name will be used as the gRPC service name.">デフォルトでは、クラスに<code>Grpc</code>の注釈が付けられている場合、クラス名はgRPCサービス名として使用されます。</span> <span class="merged" id="all.1oFWlb.spl2" title="原文 : So in the example above, the service name will be StringService.">したがって、上の例では、サービス名は<code>StringService</code>になります。</span> <span class="merged" id="all.1oFWlb.spl3" title="原文 : This can be changed by supplying a name to the annotation.">これは、注釈に名前を指定することで変更できます。</span> </p>

<markup
lang="java"

>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc(name="Strings") <span class="conum" data-value="1" />
public class StringService {</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4QoN09" title="原文 : The name of the deployed service will be Strings.">デプロイされたサービスの名前は<code>Strings</code>になります。</span></li>
</ul>

</div>


<h3 id="_defining_service_methods"><span class="merged" id="all.41uPX4" title="原文 : Defining Service Methods">サービス・メソッドの定義</span></h3>
<div class="section">
<p><span class="merged" id="all.3j5TbR.spl1" title="原文 : Once a class is properly annotated to make it a gRPC MP service, it needs to have service methods that implement the application business logic.">クラスにgRPC MPサービスを作成するように適切に注釈が付けられると、アプリケーション・ビジネス・ロジックを実装するサービス・メソッドが必要です。</span> <span class="merged" id="all.3j5TbR.spl2" title="原文 : In gRPC there are four different types of method:">gRPCには、次の4タイプのメソッドがあります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.25GSA8.1" title="原文 : Unary - a simple method with at most a single request value and returning at most a single response value."><code>Unary</code> - 最大で単一のリクエスト値を持ち、最大で単一のレスポンス値を返す単純なメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.4Aeby4.1" title="原文 : Server Streaming - a method that takes at most a single request value but may return zero or more response values."><code>Server Streaming</code> - 最大で単一のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.2QsCZl.1" title="原文 : Client Streaming - a request that takes one or more request values and returns at most one response value."><code>Client Streaming</code> - 1つ以上のリクエスト値を取り、最大1つのレスポンス値を返すリクエスト。</span></p>

</li>
<li>
<p><span class="merged" id="all.3oou88.1" title="原文 : Bi-directional Streaming - a method that can take one or more request values and return zero or more response values."><code>Bi-directional Streaming</code> - 1つ以上のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
</ul>

<p><span class="merged" id="all.gF2lx" title="原文 : The Helidon gRPC MP API determines a method type by its annotation, which should be one of the following:">Helidon gRPC MP APIは、次のいずれかの注釈によってメソッド・タイプを判別します:</span></p>

<markup
lang="java"

>@io.helidon.microprofile.grpc.core.Unary
@io.helidon.microprofile.grpc.core.ServerStreaming
@io.helidon.microprofile.grpc.core.ClientStreaming
@io.helidon.microprofile.grpc.core.Bidirectional</markup>


<h4 id="_request_and_response_types"><span class="merged" id="all.4WDXx9" title="原文 : Request and Response Types">リクエストおよびレスポンス・タイプ</span></h4>
<div class="section">
<p><span class="merged" id="all.27HweE.spl1" title="原文 : A gRPC service method typically takes a request parameter and returns a response value (streaming methods may take or return multiple requests or responses).">gRPCサービス・メソッドは通常、リクエスト・パラメータを受け取り、レスポンス値を返します(<code>streaming</code>メソッドは、複数のリクエストまたはレスポンスを取得または返す場合があります)。</span> <span class="merged" id="all.27HweE.spl2" title="原文 : In traditional gRPC Java, the types used for the request and response values must be Protobuf serializable classes but this is not the case with Helidon gRPC.">従来のgRPC Javaでは、リクエスト値とレスポンス値に使用される型は、Protobuf直列化可能なクラスである必要がありますが、これはHelidon gRPCでは当てはまりません。</span> <span class="merged" id="all.27HweE.spl3" title="原文 : Helidon supports pluggable Marshallers and by default will support Protobuf types.">Helidonは<router-link @click.native="this.scrollFix('#_custom_marshalling')" to="#_custom_marshalling">「プラガブルMarshaller」</router-link>をサポートし、デフォルトではProtobufタイプをサポートします。</span> <span class="merged" id="all.27HweE.spl4" title="原文 : Any type that can be marshalled by the built-in marshallers or custom supplied marshaller may be used as a request or response type.">組込みマーシャラまたはカスタム提供のマーシャラでマーシャリングできる任意のタイプを、リクエスト・タイプまたはレスポンス・タイプとして使用できます。</span> </p>

</div>


<h4 id="_unary_methods"><span class="merged" id="all.RKHF2" title="原文 : Unary Methods">単項メソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.3e529F.spl1" title="原文 : A unary gRPC method is the simplest type of service method.">単項gRPCメソッドは、最も単純なタイプのサービス・メソッドです。</span> <span class="merged" id="all.3e529F.spl2" title="原文 : Typically a unary method takes a request value and returns a response value, but this is not always the case.">通常、単項メソッドはリクエスト値を取ってレスポンス値を返しますが、この限りではありません。</span> <span class="merged" id="all.3e529F.spl3" title="原文 : A unary method could just as easily take no request parameter and/or return no response.">単項メソッドは、リクエスト・パラメータを簡単に取得したり、レスポンスを返さなかったりするだけです。</span> </p>

<p><span class="merged" id="all.bONwg" title="原文 : All of the signatures below are valid unary methods in Helidon gRPC MP.">次のシグネチャはすべて、Helidon gRPC MPの有効な単項メソッドです。</span></p>

<markup
lang="java"

>// A unary method with a simple request and response
@io.helidon.microprofile.grpc.core.Unary
public ResponseType invoke(RequestType req)

// A unary method that just returns a response
@io.helidon.microprofile.grpc.core.Unary
public ResponseType invoke()

// A unary method that takes a request but returns no response
@io.helidon.microprofile.grpc.core.Unary
public void invoke(RequestType req)

// A unary method that takes no request and returns no response
@io.helidon.microprofile.grpc.core.Unary
public void invoke()

// An async unary request that takes a request and returns a future
// that will complete when the response is ready
@io.helidon.microprofile.grpc.core.Unary
public CompletableFuture&lt;ResponseType&gt; invoke(RequestType req)

// An async unary request that takes no request and returns a future
// that will complete when the response is ready
@io.helidon.microprofile.grpc.core.Unary
public CompletableFuture&lt;ResponseType&gt; invoke()

// The standard gRPC Java unary method signature
@io.helidon.microprofile.grpc.core.Unary
public void invoke(RequestType req, StreamObserver&lt;ResponseType&gt; observer)

// The standard gRPC Java unary method signature but without a request type
@io.helidon.microprofile.grpc.core.Unary
public void invoke(StreamObserver&lt;ResponseType&gt; observer)

// A unary method that takes a request type and a future to complete
// with the response type
@io.helidon.microprofile.grpc.core.Unary
public void invoke(RequestType req, CompletableFuture&lt;ResponseType&gt; observer)

// A unary method that takes no request type but just takes a future
// to complete with the response type
@io.helidon.microprofile.grpc.core.Unary
public void invoke(CompletableFuture&lt;ResponseType&gt; observer)</markup>

<p><span class="merged" id="all.1qnUan.spl1" title="原文 : The various signatures supported above allow the service developer to choose the method signature that best fits their application business logic without needing to worry about handling standard gRPC Java requests and StreamObservers.">前述のサポートされている様々なシグネチャにより、サービス開発者は、標準gRPC JavaリクエストおよびStreamObserversの処理を気にすることなく、アプリケーション・ビジネス・ロジックに最適なメソッド・シグネチャを選択できます。</span> <span class="merged" id="all.1qnUan.spl2" title="原文 : The standard gRPC Java method signature is in the list above so it can still be used if required.">標準gRPC Javaメソッド・シグネチャは前述のリストにあるため、必要に応じて引き続き使用できます。</span> </p>

</div>


<h4 id="_serverstreaming_methods"><span class="merged" id="all.4FHHIu" title="原文 : ServerStreaming Methods">ServerStreamingメソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.2a9BtJ.spl1" title="原文 : A server streaming method receives a requests from the client and when the request stream is complete, it sends back a stream of response values.">サーバー・ストリーミング・メソッドは、クライアントからリクエストを受信し、リクエスト・ストリームが完了すると、レスポンス値のストリームを返します。</span> <span class="merged" id="all.2a9BtJ.spl2" title="原文 : A traditional gRPC Java server streaming method takes two parameters, the request and a StreamObserver that is used to send back the single response in the same way that a unary method sends a response.">従来のgRPC Javaサーバーのストリーミング・メソッドは、単項メソッドがレスポンスを送信するのと同じ方法で単一のレスポンスを送り返すために使用されるリクエストと<code>StreamObserver</code>の2つのパラメータを取ります。</span> <span class="merged" id="all.2a9BtJ.spl3" title="原文 : As with unary methods, Helidon gRPC MP supports different method signatures for server streaming methods.">単項メソッドと同様に、Helidon gRPC MPは、サーバー・ストリーミング・メソッドに対して異なるメソッド・シグネチャをサポートしています。</span> </p>

<p><span class="merged" id="all.u23qs" title="原文 : All of the signatures below are valid server streaming methods in Helidon gRPC MP.">次のシグネチャはすべて、Helidon gRPC MPの有効なサーバー・ストリーミング・メソッドです。</span></p>

<markup
lang="java"

>// The standard gRPC Java server streaming method signature
@io.helidon.microprofile.grpc.core.ServerStreaming
public void invoke(RequestType req, StreamObserver&lt;ResponseType&gt; observer)

// A server streaming method that uses a Stream to send the responses to the client
@io.helidon.microprofile.grpc.core.ServerStreaming
public Stream&lt;ResponseType&gt; invoke(RequestType req)

// The server streaming method without a request parameter
@io.helidon.microprofile.grpc.core.ServerStreaming
public void invoke(StreamObserver&lt;ResponseType&gt; observer)

// A server streaming method without a request parameter
// that uses a Stream to send the responses to the client
@io.helidon.microprofile.grpc.core.ServerStreaming
public Stream&lt;ResponseType&gt; invoke(RequestType req)</markup>

<p><span class="merged" id="all.30roMQ" title="原文 : As with unary methods, the Helidon gRPC MP API supports multiple different method signatures for implementing server streaming methods.">単項メソッドと同様に、Helidon gRPC MP APIは、サーバー・ストリーミング・メソッドを実装するために複数の異なるメソッド・シグネチャをサポートしています。</span></p>

</div>


<h4 id="_clientstreaming_methods"><span class="merged" id="all.3KjfYR" title="原文 : ClientStreaming Methods">ClientStreamingメソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.1BfJpE.spl1" title="原文 : A client streaming method receives a stream of requests from the client and when the request stream is complete, it sends back a response.">クライアント・ストリーミング・メソッドは、クライアントからリクエストのストリームを受信し、リクエスト・ストリームが完了するとレスポンスを返します。</span> <span class="merged" id="all.1BfJpE.spl2" title="原文 : A traditional gRPC Java client streaming method takes two StreamObserver parameters, one is the stream of client requests and the other is used to send back the single response in the same way that a unary method sends a response.">従来のgRPC Javaクライアント・ストリーミング・メソッドは2つの<code>StreamObserver</code>パラメータを取ります。一方はクライアント・リクエストのストリームで、もう一方は単項メソッドがレスポンスを送信するのと同じ方法で単一のレスポンスを送り返すために使用されます。</span> <span class="merged" id="all.1BfJpE.spl3" title="原文 : As with unary methods, Helidon gRPC MP supports different method signatures for client streaming methods.">単項メソッドと同様に、Helidon gRPC MPはクライアント・ストリーミング・メソッドに対して異なるメソッド・シグネチャをサポートします。</span> </p>

<p><span class="merged" id="all.1gO4eP" title="原文 : All of the signatures below are valid client streaming methods in Helidon gRPC MP.">次のシグネチャはすべて、Helidon gRPC MPの有効なクライアント・ストリーミング・メソッドです。</span></p>

<markup
lang="java"

>// The standard gRPC Java client streaming method signature
@io.helidon.microprofile.grpc.core.ClientStreaming
public StreamObserver&lt;RequestType&gt; invoke(StreamObserver&lt;ResponseType&gt; observer)

// The gRPC Java client streaming method with an asynchronous response
@io.helidon.microprofile.grpc.core.ClientStreaming
public StreamObserver&lt;RequestType&gt; invoke(CompletableFuture&lt;ResponseType&gt; observer)</markup>

</div>


<h4 id="_bi_directional_streaming_methods"><span class="merged" id="all.26GE5G" title="原文 : Bi-Directional Streaming Methods">双方向ストリーム・メソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.3gSij8.spl1" title="原文 : A bidirectional streaming method is a method that is a constant stream of client requests and server responses.">双方向ストリーミング・メソッドは、クライアント・リクエストとサーバー・レスポンスの一定のストリームであるメソッドです。</span> <span class="merged" id="all.3gSij8.spl2" title="原文 : Other than the standard gRPC Java StreamObserver, there are no other built-in types that make sense to use to implement different method signatures for a bidirectional method so the only supported signature is the standard gRPC Java method.">標準のgRPC Java <code>StreamObserver</code>以外には、双方向メソッドに異なるメソッド・シグネチャを実装するために意味を持つその他の組み込み型がないため、サポートされるシグネチャだけが標準のgRPC Javaメソッドです。</span> </p>

<markup
lang="java"

>@io.helidon.microprofile.grpc.core.Bidirectional
public StreamObserver&lt;RequestType&gt; invoke(StreamObserver&lt;ResponseType&gt; observer)</markup>

</div>

</div>


<h3 id="_deploying_protobuf_services"><span class="merged" id="all.4KC9Fo" title="原文 : Deploying Protobuf Services">Protobufサービスのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.44bTQP.spl1" title="原文 : The examples above show how simple it is to write gRPC services with basic POJOs.">上記の例は、基本的なPOJOを使用してgRPCサービスを作成する方法を示しています。</span> <span class="merged" id="all.44bTQP.spl2" title="原文 : There may be cases, however, where there is a requirement to deploy services built the traditional way using gRPC Java generated classes or built as non-microprofile Helidon gRPC services.">ただし、gRPC Java生成クラスを使用して従来の方法でサービスをデプロイしたり、<router-link :to="{path: '/se/grpc/server', hash: '#_service_implementation'}">「microprofile Helidon gRPCサービス以外」</router-link>として構築したりする必要が生じる場合があります。</span> </p>


<h4 id="_annotate_the_service_implementation"><span class="merged" id="all.2Reswo" title="原文 : Annotate the Service Implementation">サービス実装の注釈付け</span></h4>
<div class="section">
<p><span class="merged" id="all.u4pt4.spl1" title="原文 : When the gRPC MP server is starting, it will discover all CDI beans of type io.grpc.BindableService.">gRPC MPサーバーを起動すると、タイプ<code>io.grpc.BindableService</code>のすべてのCDI beansが検出されます。</span> <span class="merged" id="all.u4pt4.spl2" title="原文 : Service sub-classes implemented the traditional way with code generation are instances of BindableService so by annotating the implementation class with the @ApplicationScoped annotation, they become discoverable and will be deployed into the gRPC server.">コード生成で従来の方法で実装されたサービス・サブクラスは<code>BindableService</code>のインスタンスであるため、<code>@ApplicationScoped</code>注釈で実装クラスに注釈を付けることで、検出可能になり、gRPCサーバーにデプロイされます。</span> </p>

<markup
lang="java"

>@ApplicationScoped
public class StringService
    extends StringServiceGrpc.StringServiceImplBase {</markup>

<p><span class="merged" id="all.29GX7n" title="原文 : In exactly the same way, if a class is an implementation of io.helidon.grpc.server.GrpcService, then it will be discovered and deployed when the MP gRPC server starts by simply annotating the class with the @ApplicationScoped annotation.">まったく同じ方法で、クラスが<code>io.helidon.grpc.server.GrpcService</code>の実装である場合、MP gRPCサーバーが起動すると、<code>@ApplicationScoped</code>注釈でクラスに注釈を付けるだけで検出およびデプロイされます。</span></p>

<markup
lang="java"

>@ApplicationScoped
public class StringService implements GrpcService {</markup>

</div>


<h4 id="_implement_a_grpcmpextension"><span class="merged" id="all.2OlKT1" title="原文 : Implement a GrpcMpExtension">GrpcMpExtensionの実装</span></h4>
<div class="section">
<p><span class="merged" id="all.1oArC1.spl1" title="原文 : If it is not possible to annotate the service class (for example the code is built by a third party), another way to deploy non-CDI bean services is to implement a gRPC MP server extension.">サービス・クラスに注釈を付けられない場合(たとえば、コードがサード・パーティによって構築される場合)、CDI以外のBeanサービスをデプロイする別の方法は、gRPC MPサーバー拡張を実装することです。</span> <span class="merged" id="all.1oArC1.spl2" title="原文 : The extension will then be called when the MP server is starting and be given the chance to add additional services for deployment.">その後、MPサーバーの起動時に拡張が呼び出され、デプロイメント用にサービスを追加する機会が与えられます。</span> <span class="merged" id="all.1oArC1.spl3" title="原文 : An extension should implement the io.helidon.microprofile.grpc.server.spi.GrpcMpExtension interface.">拡張機能は、<code>io.helidon.microprofile.grpc.server.spi.GrpcMpExtension</code>インタフェースを実装する必要があります。</span> </p>

<p><span class="merged" id="all.1eJ5PR" title="原文 : For example, assuming that there was a gRPC service class called StringService that needed to be deployed, an extension class might look like this:">たとえば、<code>StringService</code>というgRPCサービス・クラスをデプロイする必要があるとすると、拡張クラスは次のようになります:</span></p>

<markup
lang="java"

>public class MyExtension
        implements GrpcMpExtension {
    @Override
    public void configure(GrpcMpContext context) {  <span class="conum" data-value="1" />
        context.routing()
               .register(new ServiceService());     <span class="conum" data-value="2" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4179rK" title="原文 : The configure method of the extension will be called to allow the extension to add extra configuration to the server.">拡張機能の<code>configure</code>メソッドが呼び出され、拡張機能がサーバーに追加構成を追加できるようになります。</span></li>
<li data-value="2"><span class="merged" id="all.2g0g5I" title="原文 : In this example, an instance of the StringService is registered with the routing (as described in the gRPC server routing documentation).">この例では、<code>StringService</code>のインスタンスがルーティングに登録されます(<router-link :to="{path: '/se/grpc/server', hash: '#_grpc_server_routing'}">「gRPCサーバー・ルーティング」</router-link>のドキュメントを参照)。</span></li>
</ul>

<p><span class="merged" id="all.3tENIY" title="原文 : The GrpcMpExtension instances are discovered and loaded using the service loader so for the example above to work, a file META-INF/services/io.helidon.microprofile.grpc.server.spi.GrpcMpExtension would need to be created that contained the names of the service implementations."><code>GrpcMpExtension</code>インスタンスは、サービス・ローダーを使用して検出およびロードされるため、前述の例では、サービス実装の名前を含むファイル<code>META-INF/services/io.helidon.microprofile.grpc.server.spi.GrpcMpExtension</code>を作成する必要があります。</span></p>

</div>

</div>


<h3 id="_marshalling"><span class="merged" id="all.2am2Cj"  title="原文:: Marshalling">マーシャリング</span></h3>
<div class="section">

<h4 id="_default_marshalling_support"><span class="merged" id="all.2pYYX7" title="原文 : Default Marshalling Support">デフォルトのマーシャリング・サポート</span></h4>
<div class="section">
<p><span class="merged" id="all.1lBbBA.spl1" title="原文 : Helidon gRPC supports Protobuf out of the box.">Helidon gRPCは、すぐに使用できるProtobufをサポートします。</span> <span class="merged" id="all.1lBbBA.spl2" title="原文 : The Protobuf marshaller will be used by default for any request and response classes that extend com.google.protobuf.MessageLite, which is the case for all classes generated from a proto file using protoc compiler.">Protobuf marshallerは、<code>com.google.protobuf.MessageLite</code>を拡張するリクエストおよびレスポンス・クラスに対してデフォルトで使用されます。これは、<code>protoc</code>コンパイラを使用して<code>proto</code>ファイルから生成されるすべてのクラスの場合です。</span> </p>

<p><span class="merged" id="all.qahU9" title="原文 : That means that you don&rsquo;t need any special handling or configuration in order to support Protobuf serialization of requests and responses.">つまり、リクエストとレスポンスのProtobufシリアライズをサポートするために特別な処理や構成は必要ありません。</span></p>

</div>


<h4 id="_custom_marshalling"><span class="merged" id="all.3E6Yvy" title="原文 : Custom Marshalling">カスタム・マーシャリング</span></h4>
<div class="section">
<p><span class="merged" id="all.1OEmCk" title="原文 : Helidon makes the use of custom marshallers trivial and provides one custom implementation, JsonbMarshaller, out of the box.">Helidonは、カスタム・マーシャラを簡単に使用し、すぐに使用できるカスタム実装<a href="https://github.com/oracle/helidon/tree/master/grpc/core/src/main/java/io/helidon/grpc/core/JsonbMarshaller.java" target="_blank">JsonbMarshaller</a>を提供します。</span></p>

<p><span class="merged" id="all.1VannX.spl1" title="原文 : You can also easily implement your own marshaller to support serialization formats that are not supported natively by Helidon, by implementing Marshaller and MarshallerSupplier interfaces."><code>Marshaller</code>および<code>MarshallerSupplier</code>インタフェースを実装することで、Helidonでネイティブにサポートされないシリアライズ形式をサポートするために、独自のマーシャラを簡単に実装することもできます。</span> <span class="merged" id="all.1VannX.spl2" title="原文 : As an example, check out the source code of the built-in marshaller: JsonbMarshaller.java.">例として、組込みマーシャラのソース・コードを確認: <a href="https://github.com/oracle/helidon/tree/master/grpc/core/src/main/java/io/helidon/grpc/core/JsonbMarshaller.java" target="_blank">JsonbMarshaller.java</a>。</span> </p>

<p><span class="merged" id="all.6pteM.spl1" title="原文 : Furthermore, Oracle Coherence CE provides a marshaller for a highly optimized, binary, platform independent Portable Object Format (POF).">さらに、<a href="https://coherence.community/" target="_blank">Oracle Coherence CE</a>は、高度に最適化されたバイナリ、プラットフォームに依存しないポータブル・オブジェクト・フォーマット(POF)のためのマーシャラを提供します。</span> <span class="merged" id="all.6pteM.spl2" title="原文 : You can find more information about POF in Coherence documentation">POFの詳細は、<a href="https://coherence.community/20.12/docs/#/docs/core/04_portable_types" target="_blank">「Coherenceのドキュメント」</a>を参照してください</span> </p>


<h5 id="_setting_the_custom_marshaller"><span class="merged" id="all.1gHLoI" title="原文 : Setting the custom marshaller">カスタム・マーシャラの設定</span></h5>
<div class="section">
<p><span class="merged" id="all.4CxGSD" title="原文 : You can annotate your service&rsquo;s class or interface with @GrpcMarshaller:">@GrpcMarshallerを使用して、サービスのクラスまたはインタフェースに注釈を付けることができます:</span></p>

<markup
lang="java"
title="Sample code with <code>@GrpcMarshaller</code> annotation"
>@Grpc
@ApplicationScoped
@GrpcMarshaller("jsonb")  <span class="conum" data-value="1" />
public class AsyncStringService {
    // code is omitted
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1v2rvy" title="原文 : Set the named marshaller supplier via the @GrpcMarshaller annotation.">指定されたマーシャラ・サプライヤを@GrpcMarshaller注釈を使用して設定します。</span></li>
</ul>

</div>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.6"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2NRLeq.spl1" title="原文 : Configure the gRPC server using the Helidon microprofile configuration framework by which the ConfigSource defaults to microprofile-config.properties.">ConfigSourceがデフォルトで<code>microprofile-config.properties</code>に設定されるHelidonマイクロプロファイル構成フレームワークを使用して、gRPCサーバーを構成します。</span> <span class="merged" id="all.2NRLeq.spl2" title="原文 : Alternatively, you can also use other ConfigSources such as application.yaml.">または、<code>application.yaml</code>などの他のConfigSourcesを使用することもできます。</span> <span class="merged" id="all.2NRLeq.spl3" title="原文 : Refer to MicroProfile Config for more details about the different options for ConfigSources.">ConfigSourcesの様々なオプションの詳細は、<router-link to="/mp/config/introduction">「MicroProfile構成」</router-link>を参照してください。</span> </p>

<p><span class="merged" id="all.2H6mAf.1" title="原文 : Type: io.helidon.grpc.server.GrpcServerConfiguration">タイプ: <a href="./apidocs/io.helidon.grpc.server/io/helidon/grpc/server/GrpcServerConfiguration.html" target="_blank">io.helidon.grpc.server.GrpcServerConfiguration</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.68"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.69" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.81"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.79"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.81"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.82"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.7"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.183"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.18ZckH.1"  title="原文: grpc.server"><code>grpc.server</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.nAZ49.1" title="原文 : Set the name of the gRPC server.">gRPCサーバーの名前を設定します。</span></p>

<markup>Configuration key: `name`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0DZR.1"  title="原文: native"><code>native</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.106"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.44"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1XATWJ.1" title="原文 : Specify if native transport should be used.">ネイティブ・トランスポートを使用するかどうかを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.12"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.49"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1eyLYf.3"  title="原文: 1408"><code>1408</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JZRAy.1.spl1" title="原文 : Sets server port.">サーバー・ポートを設定します。</span> <span class="merged" id="all.4JZRAy.1.spl2" title="原文 : If port is 0 or less then any available ephemeral port will be used.">ポートが<code>0</code>以下の場合は、使用可能なエフェメラル・ポートが使用されます。</span> </p>

<markup>Configuration key: `port`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZTtEy.1"  title="原文: workers"><code>workers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.50"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lxuei.1"  title="原文: Number of processors available to the JVM"><code>Number of processors available to the JVM</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XV1dm.2.spl1" title="原文 : Sets a count of threads in pool used to process HTTP requests.">HTTPリクエストの処理に使用されるプール内のスレッド数を設定します。</span> <span class="merged" id="all.2XV1dm.2.spl2" title="原文 : Default value is CPU_COUNT * 2.">デフォルト値は<code>CPU_COUNT * 2</code>です。</span> </p>

<markup>Configuration key: `workers`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<markup
lang="yaml"
title="GrpcServer configuration file example using <code>application.yaml</code>"
>grpc:
  name: test.server  <span class="conum" data-value="1" />
  port: 3333  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.necDl" title="原文 : Specifies the name of the gRPC server.">gRPCサーバーの名前を指定します。</span></li>
<li data-value="2"><span class="merged" id="all.2tOROY" title="原文 : Sets the server port.">サーバー・ポートを設定します。</span></li>
</ul>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.5"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.3d2O3c" title="原文 : Helidon MP includes some examples that demonstrate the gRPC server usage:">Helidon MPには、gRPCサーバーの使用方法を示す例がいくつか含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.fYpuF.spl1" title="原文 : Basic gRPC Server example provides a simple gRPC application that deploys a gRPC service that will be discovered by CDI."><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/microprofile/basic-server-implicit" target="_blank">「基本的なgRPCサーバーの例」</a>は、CDIによって検出されるgRPCサービスをデプロイする単純なgRPCアプリケーションを提供します。</span> <span class="merged" id="all.fYpuF.spl2" title="原文 : Two additional services are included that are not normally CDI managed beans, but are manually added as CDI managed beans so that they can also be discovered by Helidon MP.">通常はCDIマネージドBeanではない2つの追加サービスが含まれていますが、手動でCDIマネージドBeanとして追加されるため、Helidon MPでも検出できます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3qwT5p" title="原文 : gRPC Server Metrics example demonstrates a Helidon MP application that enables metrics and tracing on a gRPC Service."><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/microprofile/metrics" target="_blank">「gRPCサーバー・メトリクスの例」</a>は、gRPCサービス上で<code>metrics</code>および<code>tracing</code>を有効にするHelidon MPアプリケーションを示しています。</span></p>

</li>
</ul>

</div>

</doc-view>
