<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4GQ1Pn" title="原文 : gRPC Server Security">gRPCサーバー・セキュリティ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2PBoQV" title="原文 : Security integration of the gRPC server"><router-link @click.native="this.scrollFix('#grpc/01_introduction.adoc')" to="#grpc/01_introduction.adoc">「gRPCサーバー」</router-link>のセキュリティ統合</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.7"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4JnU1V.8" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"
title="Mavenの依存性"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.integration&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-integration-grpc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_bootstrapping"><span class="merged" id="all.J2gG6"  title="原文:: Bootstrapping">ブートストラップ</span></h2>
<div class="section">
<p><span class="merged" id="all.2qEc0W" title="原文 : There are two steps to configure security with gRPC server:">gRPCサーバーでセキュリティを構成するには、次の2つのステップを実行します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.23TVE1" title="原文 : Create security instance and register it with server">セキュリティ・インスタンスの作成とサーバーへの登録</span>

</li>
<li>
<span class="merged" id="all.1QX7pD" title="原文 : Protect gRPC services of server with various security features">様々なセキュリティ機能でサーバーのgRPCサービスを保護</span>

</li>
</ol>
<markup
lang="java"
title="ビルダーの使用例"
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
title="よりきめ細かいメソッド・レベルのセキュリティのためのビルダーの使用例"
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
title="構成を使用した例"
>GrpcRouting.builder()
    // helper method to load both security and gRPC server security from configuration
    .intercept(GrpcSecurity.create(config))
    // continue with gRPC server route configuration...
    .register(new GreetService())
    .build();</markup>

<markup
lang="conf"
title="構成を使用した例 - 構成(HOCON)"
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


<h3 id="_client_security"><span class="merged" id="all.1P0pp8" title="原文 : Client security">クライアント・セキュリティ</span></h3>
<div class="section">
<p><span class="merged" id="all.cJ03v.spl1" title="原文 : When using the Helidon SE gRPC client API security can be configured for a gRPC service or at the individual method level.">Helidon SE gRPCを使用する場合、gRPCサービスに対して、または個々のメソッド・レベルで、クライアントAPIセキュリティを構成できます。</span> <span class="merged" id="all.cJ03v.spl2" title="原文 : The client API has a custom CallCredentials implementation that integrates with the Helidon security APIs.">クライアントAPIには、HelidonセキュリティAPIと統合するカスタム<code>CallCredentials</code>実装があります。</span> </p>

<markup
lang="java"
title="サービスのクライアント・セキュリティの構成例"
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
<li data-value="1"><span class="merged" id="all.L34Zc" title="原文 : Create the Helidon Security instance (in this case using the basic auth provider)">Helidon <code>Security</code>インスタンスを作成します(この場合は、basic認証プロバイダを使用します)</span></li>
<li data-value="2"><span class="merged" id="all.3sv1gi" title="原文 : Create the GrpcClientSecurity gRPC CallCredentials adding the user and password property expected by the basic auth provider.">basic認証プロバイダで想定されるユーザーおよびパスワードのプロパティを追加して、<code>GrpcClientSecurity</code> gRPC <code>CallCredentials</code>を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.2cgqgY" title="原文 : Create the gRPC ClientServiceDescriptor for the StringService gRPC service."><code>StringService</code> gRPCサービスのgRPC <code>ClientServiceDescriptor</code>を作成します。</span></li>
<li data-value="4"><span class="merged" id="all.4Amgir" title="原文 : Set the GrpcClientSecurity instance as the call credentials for all methods of the service"><code>GrpcClientSecurity</code>インスタンスをサービスのすべてのメソッドのコール資格証明として設定</span></li>
<li data-value="5"><span class="merged" id="all.eEQXq" title="原文 : Create a GrpcServiceClient that will allow methods to be called on the service">サービスでのメソッドのコールを可能にする<code>GrpcServiceClient</code>の作成</span></li>
<li data-value="6"><span class="merged" id="all.4Lcanu" title="原文 : Call the &quot;Lower&quot; method which will use the configured basic auth credentials">構成済の基本認証資格証明を使用するLowerメソッドをコール</span></li>
</ul>
<markup
lang="java"
title="特定のメソッドのクライアント・セキュリティを構成する例"
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

<h3 id="_outbound_security"><span class="merged" id="all.2FhlDk"  title="原文:: Outbound security">アウトバウンド・セキュリティ</span></h3>
<div class="section">
<p><span class="merged" id="all.YAAIr" title="原文 : Outbound security covers three scenarios:">アウトバウンド・セキュリティは、次の3つのシナリオに対応しています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2glHZI" title="原文 : Calling a secure gRPC service from inside a gRPC service method handler">gRPCサービス・メソッド・ハンドラ内からのセキュアgRPCサービスの呼出し</span></p>

</li>
<li>
<p><span class="merged" id="all.3S8P65" title="原文 : Calling a secure gRPC service from inside a web server method handler">webサーバー・メソッド・ハンドラ内からのセキュアgRPCサービスのコール</span></p>

</li>
<li>
<p><span class="merged" id="all.s8yiG" title="原文 : Calling a secure web endpoint from inside a gRPC service method handler">gRPCサービス・メソッド・ハンドラ内からのセキュアなwebエンドポイントの呼出し</span></p>

</li>
</ul>
<p><span class="merged" id="all.18i7Sh" title="原文 : Within each scenario credentials can be propagated if the gRPC/http method handler is executing within a security context or credentials can be overridden to provide a different set of credentials to use to call the outbound endpoint.">gRPC/httpメソッド・ハンドラがセキュリティ・コンテキスト内で実行されている場合、または資格証明をオーバーライドして、アウトバウンド・エンドポイントの呼出しに使用する別の資格証明セットを提供できる場合は、各シナリオ内で資格証明を伝播できます。</span></p>

<markup
lang="java"
title="gRPCサービス・メソッド・ハンドラ内からのセキュアgRPCサービスのコール例"
>// Obtain the SecurityContext from the current gRPC call Context
SecurityContext securityContext = GrpcSecurity.SECURITY_CONTEXT.get();

// Create a gRPC CallCredentials that will use the current request's
// security context to configure outbound credentials
GrpcClientSecurity clientSecurity = GrpcClientSecurity.create(securityContext);

// Create the gRPC stub using the CallCredentials
EchoServiceGrpc.EchoServiceBlockingStub stub = noCredsEchoStub.withCallCredentials(clientSecurity);</markup>

<markup
lang="java"
title="webサーバー・メソッド・ハンドラ内からのセキュアgRPCサービスのコール例"
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
title="gRPCサービス・メソッド・ハンドラ内からのセキュアなwebエンドポイントのコール例"
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
</doc-view>
