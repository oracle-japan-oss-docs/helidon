<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1SiLbU" title="原文 : gRPC MicroProfile Server Services">gRPC MicroProfileサーバー・サービス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1ImFkm.spl1" title="原文 : The gRPC Microprofile APIs are an extension to Helidon MP to allow building of gRPC services and clients that integrate with the Microprofile APIs.">gRPC Microprofile APIは、<router-link @click.native="this.scrollFix('#microprofile/01_introduction.adoc')" to="#microprofile/01_introduction.adoc">Helidon MP</router-link>の拡張機能であり、Microprofile APIと統合するgRPCサービスおよびクライアントを構築できます。</span> <span class="merged" id="all.1ImFkm.spl2" title="原文 : Using Helidon gRPC MP makes building gRPC services and clients an easier process that the traditional approach using Protobuf files and code generation.">Helidon gRPC MPを使用すると、Protobufファイルおよびコード生成を使用した従来のアプローチよりもgRPCサービスおよびクライアントのビルド・プロセスが容易になります。</span> <span class="merged" id="all.1ImFkm.spl3" title="原文 : Services can be built using POJOs that are then discovered and deployed at runtime in the same way the Helidon MP discovers and deploys web resources in the MP http server.">サービスはPOJOを使用して構築できます。POJOは、Helidon MPがMP httpサーバーでwebリソースを検出およびデプロイするのと同じ方法で、実行時に検出およびデプロイされます。</span> </p>

<p><span class="merged" id="all.2SCIdr" title="原文 : Building gRPC services using Helidon gRPC MP is very simple and allows the developer to concentrate on their application logic without needing to write a lot of boilerplate gRPC code.">Helidon gRPC MPを使用したgRPCサービスのビルドは非常に単純で、開発者は多くのボイラープレートgRPCコードを記述しなくてもアプリケーション・ロジックに集中できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.10" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.jqeNc" title="原文 : To enable gRPC MicroProfile Server add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPC MicroProfile Serverを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-grpc-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_defining_a_service"><span class="merged" id="all.10hw4z"  title="原文:: Defining a Service">サービスの定義</span></h2>
<div class="section">
<p><span class="merged" id="all.TRubd.spl1" title="原文 : The traditional approach to building Java gRPC services is to write Protobuf files describing the service and then use these to generate service stubs and finally implementing the service methods by extending the generated stub classes.">Java gRPCサービスをビルドする従来の方法は、サービスを記述するProtobufファイルを記述し、それらを使用してサービス・スタブを生成し、最後に生成されたスタブ・クラスを拡張してサービス・メソッドを実装することです。</span> <span class="merged" id="all.TRubd.spl2" title="原文 : Using Helidon gRPC MP you just need to write an annotated service implementation class that is just a normal POJO.">Helidon gRPC MPを使用すると、通常のPOJOである注釈付きサービス実装クラスを記述するだけで済みます。</span> </p>

<p><span class="merged" id="all.6vDv5"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="java"
title="簡易gRPCサービス"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public class StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public String upper(String s) {
        return s == null ? null : s.toUpperCase();
    }
}</markup>

<p><span class="merged" id="all.SDYQ.spl1" title="原文 : The code above is a simple service with a single unary method that just converts a String to uppercase.">前述のコードは、Stringを大文字に変換するだけの単一の単項メソッドを持つ単純なサービスです。</span> <span class="merged" id="all.SDYQ.spl2" title="原文 : The important parts in the example are the @ApplicationScoped, @Grpc and @Unary annotations; these, along with other annotations discussed later, allow the gRPC MP APIs to discover, configure and deploy the service.">この例の重要な部分は、<code>@ApplicationScoped</code>、<code>@Grpc</code>および<code>@Unary</code>の注釈です。これらの注釈は、後で説明する他の注釈とともに、gRPC MP APIでサービスを検出、構成およびデプロイできるようにします。</span> </p>

<p><span class="merged" id="all.39fkIM" title="原文 : Of course Helidon gRPC MP does not preclude you from using the Protobuf files approach, traditional gRPC Java services also work in a gRPC MP server.">もちろん、Helidon gRPC MPではProtobufファイル・アプローチを使用できませんが、従来のgRPC JavaサービスもgRPC MPサーバーで動作します。</span></p>

<p><span class="merged" id="all.17cGJb.spl1" title="原文 : As already shown above a Helidon gRPC MP service is just an annotated POJO.">前述のように、Helidon gRPC MPサービスは単なる注釈付きPOJOです。</span> <span class="merged" id="all.17cGJb.spl2" title="原文 : To make a class a service it requires two annotations.">クラスをサービスにするには、2つの注釈が必要です。</span> </p>

<markup
lang="java"

>@ApplicationScoped                                <span class="conum" data-value="1" />
@io.helidon.microprofile.grpc.core.Grpc     <span class="conum" data-value="2" />
public class StringService {</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3ojd0g" title="原文 : The ApplicationScoped annotation is what makes the service implementation a CDI bean and hence discoverable."><code>ApplicationScoped</code>注釈は、サービス実装をCDI beanにして検出可能にするものです。</span></li>
<li data-value="2"><span class="merged" id="all.1c1Asg" title="原文 : The Grpc annotation is what defines the class as a gRPC service so that when the bean is discovered it is then deployed by the gRPC MP server."><code>Grpc</code>注釈は、Beanが検出されたときにgRPC MPサーバーによってデプロイされるように、クラスをgRPCサービスとして定義します。</span></li>
</ul>

<h3 id="_service_name"><span class="merged" id="all.1XEuaQ"  title="原文:: Service Name">サービス名</span></h3>
<div class="section">
<p><span class="merged" id="all.2V9ayo.spl1" title="原文 : By default when a class is annotated with Grpc the class name will be used as the gRPC service name.">デフォルトでは、クラスに<code>Grpc</code>の注釈が付いている場合、クラス名がgRPCサービス名として使用されます。</span> <span class="merged" id="all.2V9ayo.spl2" title="原文 : So in the example above the service name will be StringService.">したがって、前述の例では、サービス名は<code>StringService</code>になります。</span> <span class="merged" id="all.2V9ayo.spl3" title="原文 : This can be change by supplying a name to the annotation.">これは、注釈に名前を指定することで変更できます。</span> </p>

<markup
lang="java"

>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc(name="Strings") <span class="conum" data-value="1" />
public class StringService {</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.KSyAH" title="原文 : in the example above the name of the deployed service will be Strings.">前述の例では、デプロイされたサービスの名前は<code>Strings</code>です。</span></li>
</ul>
</div>
</div>

<h2 id="_defining_service_methods"><span class="merged" id="all.41uPX4" title="原文 : Defining Service Methods">サービス・メソッドの定義</span></h2>
<div class="section">
<p><span class="merged" id="all.13Sxw4.spl1" title="原文 : Once a class is properly annotated to make it a gRPC MP service it needs to have service methods that implement the application business logic.">クラスがgRPC MPサービスになるように適切に注釈を付けるには、アプリケーション・ビジネス・ロジックを実装するサービス・メソッドが必要です。</span> <span class="merged" id="all.13Sxw4.spl2" title="原文 : In gRPC there are four different types of method:">gRPCには、次の4タイプのメソッドがあります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.qaA7x" title="原文 : Unary - a simple method with at most a single request value and returning at most a single response value.">単項 - 最大で単一のリクエスト値を持ち、最大で単一のレスポンス値を返す単純なメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.23vi42" title="原文 : Server Streaming - a method that takes at most a single request value but may return zero or more response values.">サーバー・ストリーム - 最大で単一のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.1q6III" title="原文 : Client Streaming - a request that takes one or more request values and returns at most one response value.">クライアント・ストリーミング - 1つ以上のリクエスト値を取り、最大1つのレスポンス値を返すリクエスト。</span></p>

</li>
<li>
<p><span class="merged" id="all.3E2LNR" title="原文 : Bi-directional Streaming - a method that can take one or more request values and return zero or more response values.">双方向ストリーミング - 1つ以上のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
</ul>
<p><span class="merged" id="all.gF2lx" title="原文 : The Helidon gRPC MP API determines a method type by its annotation, which should be one of the following:">Helidon gRPC MP APIは、次のいずれかの注釈によってメソッド・タイプを判別します:</span></p>

<markup
lang="java"

>@io.helidon.microprofile.grpc.core.Unary
@io.helidon.microprofile.grpc.core.ServerStreaming
@io.helidon.microprofile.grpc.core.ClientStreaming
@io.helidon.microprofile.grpc.core.Bidirectional</markup>


<h3 id="_request_an_response_types"><span class="merged" id="all.4504OT" title="原文 : Request an Response Types">レスポンス・タイプのリクエスト</span></h3>
<div class="section">
<p><span class="merged" id="all.2Fns2r.spl1" title="原文 : A gRPC service method typically takes a request parameter and returns a response value (streaming methods may take or return multiple requests or responses).">gRPCサービス・メソッドは通常、リクエスト・パラメータを受け取り、レスポンス値を返します(ストリーミング・メソッドは複数のリクエストまたはレスポンスを取ることも返すこともできます)。</span> <span class="merged" id="all.2Fns2r.spl2" title="原文 : In traditional gRPC Java the types used for the request and response values must be Protobuf serializable classes but this is not the case with Helidon gRPC.">従来のgRPC Javaでは、リクエストおよびレスポンス値に使用される型はProtobuf直列化可能クラスである必要がありますが、Helidon gRPCの場合はそうではありません。</span> <span class="merged" id="all.2Fns2r.spl3" title="原文 : Helidon supports pluggable Marshallers and by default will support any Java primitive or Java Serializable as well as Protobuf types.">Helidonは<router-link @click.native="this.scrollFix('#grpc/09_marshalling.adoc')" to="#grpc/09_marshalling.adoc">「プラガブルMarshaller」</router-link>をサポートし、デフォルトでは、Protobufタイプに加えてJavaプリミティブまたはJava <code>Serializable</code>もサポートします。</span> <span class="merged" id="all.2Fns2r.spl4" title="原文 : Any type that can be marshalled by the built-in marshallers or custom supplied marshaller may be used as a request or response type.">組込みマーシャラまたはカスタム提供のマーシャラでマーシャリングできる任意のタイプを、リクエスト・タイプまたはレスポンス・タイプとして使用できます。</span> </p>

</div>

<h3 id="_unary_methods"><span class="merged" id="all.RKHF2" title="原文 : Unary Methods">単項メソッド</span></h3>
<div class="section">
<p><span class="merged" id="all.4QyVqx.spl1" title="原文 : A unary gRPC method is the simplest type of service method.">単項gRPCメソッドは、最も単純なタイプのサービス・メソッドです。</span> <span class="merged" id="all.4QyVqx.spl2" title="原文 : Typically a unary method takes a request value and returns a response value but this does not have to be the case, a unary method could just as easily take no request parameter and/or return no response.">通常、単項メソッドはリクエスト値を受け取り、レスポンス値を返しますが、単項メソッドはリクエスト・パラメータを取らず、レスポンスも返さない場合もあります。</span> </p>

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

<h3 id="_serverstreaming_methods"><span class="merged" id="all.4FHHIu" title="原文 : ServerStreaming Methods">ServerStreamingメソッド</span></h3>
<div class="section">
<p><span class="merged" id="all.2xmv9l.spl1" title="原文 : A server streaming method receives a requests from the client and when the request stream is complete it sends back a stream of response values.">サーバー・ストリーミング・メソッドは、クライアントからリクエストを受信し、リクエスト・ストリームが完了すると、レスポンス値のストリームを返します。</span> <span class="merged" id="all.2xmv9l.spl2" title="原文 : A traditional gRPC Java server streaming method takes two parameters, the request and a StreamObserver that is used to send back the single response in the same way that a unary method sends a response.">従来のgRPC Javaサーバーのストリーミング・メソッドは、単項メソッドがレスポンスを送信するのと同じ方法で単一のレスポンスを送り返すために使用されるリクエストと<code>StreamObserver</code>の2つのパラメータを取ります。</span> <span class="merged" id="all.2xmv9l.spl3" title="原文 : As with unary methods Helidon gRPC MP supports different method signatures for server streaming methods.">単項メソッドと同様に、Helidon gRPC MPでは、サーバー・ストリーミング・メソッドに対して異なるメソッド・シグネチャがサポートされています。</span> </p>

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

<h3 id="_clientstreaming_methods"><span class="merged" id="all.3KjfYR" title="原文 : ClientStreaming Methods">ClientStreamingメソッド</span></h3>
<div class="section">
<p><span class="merged" id="all.31pyQQ.spl1" title="原文 : A client streaming method receives a stream of requests from the client and when the request stream is complete it sends back a response.">クライアント・ストリーミング・メソッドは、クライアントからリクエストのストリームを受信し、リクエスト・ストリームが完了するとレスポンスを返信します。</span> <span class="merged" id="all.31pyQQ.spl2" title="原文 : A traditional gRPC Java client streaming method takes two StreamObserver parameters, one is the stream of client requests and the other is used to send back the single response in the same way that a unary method sends a response.">従来のgRPC Javaクライアント・ストリーミング・メソッドは2つの<code>StreamObserver</code>パラメータを取ります。一方はクライアント・リクエストのストリームで、もう一方は単項メソッドがレスポンスを送信するのと同じ方法で単一のレスポンスを送り返すために使用されます。</span> <span class="merged" id="all.31pyQQ.spl3" title="原文 : As with unary methods Helidon gRPC MP supports different method signatures for client streaming methods.">単項メソッドと同様に、Helidon gRPC MPでは、クライアント・ストリーミング・メソッドに対して異なるメソッド・シグネチャがサポートされています。</span> </p>

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

<h3 id="_bi_directional_streaming_methods"><span class="merged" id="all.26GE5G" title="原文 : Bi-Directional Streaming Methods">双方向ストリーム・メソッド</span></h3>
<div class="section">
<p><span class="merged" id="all.3rBmTp.spl1" title="原文 : A bidirectional streaming method is a method that is a constant stream of client requests and server responses.">双方向ストリーミング・メソッドは、クライアント・リクエストとサーバー・レスポンスの一定のストリームであるメソッドです。</span> <span class="merged" id="all.3rBmTp.spl2" title="原文 : Other than the standard gRPC Java StreamObserver there are not any other built in types that make sense to use to implement different method signatures for a bidirectional method so the only supported signature is the standard gRPC Java method.">標準gRPC Java <code>StreamObserver</code>以外には、双方向メソッドに異なるメソッド・シグネチャを実装するために使用する意味のある他の組込み型がないため、サポートされているシグネチャは標準gRPC Javaメソッドのみです。</span> </p>

<markup
lang="java"

>@io.helidon.microprofile.grpc.core.Bidirectional
public StreamObserver&lt;RequestType&gt; invoke(StreamObserver&lt;ResponseType&gt; observer)</markup>

</div>
</div>

<h2 id="_deploying_protobuf_services"><span class="merged" id="all.4KC9Fo" title="原文 : Deploying Protobuf Services">Protobufサービスのデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.17xmwj" title="原文 : Whilst the examples above show how simple it is to write gRPC services with basic POJOs there may be cases where there is a requirement to deploy services built the traditional way using gRPC Java generated classes or built as non-microprofile Helidon gRCP services.">前述の例では、基本POJOを使用してgRPCサービスを記述するのは簡単ですが、gRPC Javaで生成されたクラスを使用して従来の方法で構築されたサービスまたは<router-link @click.native="this.scrollFix('#grpc/04_service_implementation.adoc')" to="#grpc/04_service_implementation.adoc">「非マイクロプロファイルHelidon gRCPサービス」</router-link>として構築されたサービスをデプロイする必要がある場合があります。</span></p>


<h3 id="_annotate_the_service_implementation"><span class="merged" id="all.2Reswo" title="原文 : Annotate the Service Implementation">サービス実装の注釈付け</span></h3>
<div class="section">
<p><span class="merged" id="all.33JoQe.spl1" title="原文 : When the gRPC MP server is starting it will discover all CDI beans of type io.grpc.BindableService.">gRPC MPサーバーを起動すると、<code>io.grpc.BindableService</code>タイプのCDIビーンがすべて検出されます。</span> <span class="merged" id="all.33JoQe.spl2" title="原文 : Service sub-classes implemented the traditional way with code generation are instances of BindableService so by annotating the implementation class with the @ApplicationScoped annotation they become discoverable and will be deployed into the gRPC server.">コード生成を使用して従来の方法で実装されたサービス・サブクラスは<code>BindableService</code>のインスタンスであるため、実装クラスに<code>@ApplicationScoped</code>注釈を付けることで検出可能になり、gRPCサーバーにデプロイされます。</span> </p>

<markup
lang="java"

>@ApplicationScoped
public class StringService
    extends StringServiceGrpc.StringServiceImplBase {</markup>

<p><span class="merged" id="all.23vRan" title="原文 : In exactly the same way, if a class is an implementation of io.helidon.grpc.server.GrpcService then by annotating the class with the @ApplicationScoped annotation it will be discovered and deployed when the MP gRPC server starts.">まったく同じ方法で、クラスが<code>io.helidon.grpc.server.GrpcService</code>の実装である場合は、MP gRPCサーバーの起動時に検出されてデプロイされる<code>@ApplicationScoped</code>注釈でクラスに注釈を付けます。</span></p>

<markup
lang="java"

>@ApplicationScoped
public class StringService implements GrpcService {</markup>

</div>

<h3 id="_implement_a_grpcmpextension"><span class="merged" id="all.2OlKT1" title="原文 : Implement a GrpcMpExtension">GrpcMpExtensionの実装</span></h3>
<div class="section">
<p><span class="merged" id="all.4OAwIi.spl1" title="原文 : If it is not possible to annotate the service class (for example the code is built by a third party) another way to deploy none CDI bean services is to implement a gRPC MP server extension.">サービス・クラスに注釈を付けることができない場合(たとえば、コードがサード・パーティによって構築されている場合)、CDI beanサービスをデプロイしない別の方法は、gRPC MPサーバー拡張を実装することです。</span> <span class="merged" id="all.4OAwIi.spl2" title="原文 : The extension will then be called when the MP server is starting and be given the chance to add additional services for deployment.">その後、MPサーバーの起動時に拡張が呼び出され、デプロイメント用にサービスを追加する機会が与えられます。</span> <span class="merged" id="all.4OAwIi.spl3" title="原文 : An extension should implement the io.helidon.microprofile.grpc.server.spi.GrpcMpExtension interface.">拡張機能は、<code>io.helidon.microprofile.grpc.server.spi.GrpcMpExtension</code>インタフェースを実装する必要があります。</span> </p>

<p><span class="merged" id="all.3n7MjN" title="原文 : For example, assuming that there was a gRPC service class called StringService that needed to be deployed an extension class might look like this:">たとえば、拡張クラスをデプロイする必要がある<code>StringService</code>というgRPCサービス・クラスがあるとします:</span></p>

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
<li data-value="2"><span class="merged" id="all.2G5Z11" title="原文 : In this example an instance of the StringService is registered with the routing (as described in the basic gRPC server documentation).">この例では、<code>StringService</code>のインスタンスがルーティングに登録されます(<router-link @click.native="this.scrollFix('#grpc/03_routing.adoc')" to="#grpc/03_routing.adoc">「gRPCサーバーの基本ドキュメント」</router-link>を参照)。</span></li>
</ul>
<p><span class="merged" id="all.4DHytR" title="原文 : The GrpcMpExtension instances are discovered and loaded using the service loader so for the example above to work a file META-INF/services/io.helidon.microprofile.grpc.server.spi.GrpcMpExtension would need to be created that contained the names of the service implementations."><code>GrpcMpExtension</code>インスタンスはサービス・ローダーを使用して検出およびロードされるため、前述の例が機能するように、サービス実装の名前を含むファイル<code>META-INF/services/io.helidon.microprofile.grpc.server.spi.GrpcMpExtension</code>を作成する必要があります。</span></p>

</div>
</div>
</doc-view>
