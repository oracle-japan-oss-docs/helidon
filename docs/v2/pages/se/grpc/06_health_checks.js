<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_service_health_checks"><span class="merged" id="all.3F4lnA" title="原文 : Service Health Checks">Service Health Checks</span></h2>
<div class="section">
<p><span class="merged" id="all.zZf4C" title="原文 : Helidon gRPC services provide a built-in support for Helidon Health Checks.">Helidon gRPCサービスは、Helidon Health Checksの組込みサポートを提供します。</span></p>

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

    private HealthCheckResponse healthCheck() {
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
<li data-value="1"><span class="merged" id="all.4DYQd9" title="原文 : Configure a custom health check for the service">サービスのカスタム・ヘルス・チェックの構成</span></li>
<li data-value="2"><span class="merged" id="all.S3Wuc" title="原文 : Determine service status">サービス・ステータスの決定</span></li>
<li data-value="3"><span class="merged" id="all.7u6Dz" title="原文 : Use service name as a health check name for consistency">一貫性のためにサービス名をヘルス・チェック名として使用</span></li>
<li data-value="4"><span class="merged" id="all.3BuOaT" title="原文 : Use determined service status">決定されたサービス・ステータスの使用</span></li>
<li data-value="5"><span class="merged" id="all.2EdlaT" title="原文 : Optionally, provide additional metadata">オプションで、追加のメタデータを指定</span></li>
</ul>
<p><span class="merged" id="all.18tuBZ" title="原文 : You can also define custom health check for an existing service, including plain io.grpc.BindableService implementations, using service configurer inside the GrpcRouting deefinition:"><code>GrpcRouting</code>定義内のサービス・コンフィグレータを使用して、プレーン<code>io.grpc.BindableService</code>実装を含む既存のサービスのカスタム・ヘルス・チェックを定義することもできます:</span></p>

<markup
lang="java"

>private static GrpcRouting createRouting() {
    return GrpcRouting.builder()
            .register(new EchoService(), cfg -&gt; cfg.healthCheck(MyCustomHealthChecks::echoHealthCheck))  <span class="conum" data-value="1" />
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.ret6Y" title="原文 : Configure custom health check for an existing or legacy service">既存またはレガシー・サービスのカスタム・ヘルス・チェックの構成</span></li>
</ul>
</div>

<h2 id="_exposing_health_checks"><span class="merged" id="all.3Q3xOn" title="原文 : Exposing Health Checks">ヘルス・チェックの公開</span></h2>
<div class="section">
<p><span class="merged" id="all.2N4Byj" title="原文 : All gRPC service health checks are managed by the Helidon gRPC Server, and are automatically exposed to the gRPC clients using custom implementation of the standard gRPC HealthService API.">すべてのgRPCサービス・ヘルス・チェックはHelidon gRPCサーバーによって管理され、標準gRPC <code>HealthService</code> APIのカスタム実装を使用してgRPCクライアントに自動的に公開されます。</span></p>

<p><span class="merged" id="all.41Uewe" title="原文 : However, they can also be exposed to REST clients via standard Helidon/Microprofile /health endpoint:">ただし、標準のHelidon/Microprofile <code>/health</code>エンドポイントを介してRESTクライアントに公開することもできます:</span></p>

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
<li data-value="1"><span class="merged" id="all.M5OYf" title="原文 : Create GrpcServer instance"><code>GrpcServer</code>インスタンスの作成</span></li>
<li data-value="2"><span class="merged" id="all.3aC4ef" title="原文 : Start gRPC server, which will deploy all services and register default and custom health checks">gRPCサーバーを起動します。すべてのサービスがデプロイされ、デフォルトおよびカスタムのヘルス・チェックが登録されます</span></li>
<li data-value="3"><span class="merged" id="all.1ZjZhW" title="原文 : Add gRPC server managed health checks to HealthSupport instance">gRPCサーバー管理ヘルス・チェックを<code>HealthSupport</code>インスタンスに追加</span></li>
<li data-value="4"><span class="merged" id="all.HlnJV" title="原文 : Add HealthSupport to the web server routing definition">webサーバーのルーティング定義への<code>HealthSupport</code>の追加</span></li>
<li data-value="5"><span class="merged" id="all.3N29el" title="原文 : Create and start web server">webサーバーの作成および起動</span></li>
</ul>
<p><span class="merged" id="all.3kCZ39" title="原文 : All gRPC health checks will now be available via /health REST endpoint, in addition to the standard gRPC HealthService">すべてのgRPCヘルス・チェックは、標準gRPC <code>HealthService</code>に加えて、<code>/health</code> RESTエンドポイントを介して使用できるようになります</span></p>

</div>
</doc-view>
