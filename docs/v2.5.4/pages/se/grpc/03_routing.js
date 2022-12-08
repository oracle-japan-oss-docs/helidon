<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_grpc_server_routing"><span class="merged" id="all.44qCVp" title="原文 : gRPC Server Routing">gRPCサーバーのルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.2bLadb.spl1" title="原文 : Unlike Webserver, which allows you to route requests based on path expression and the HTTP verb, gRPC server always routes requests based on the service and method name.">パス表現およびHTTP動詞に基づいてリクエストをルーティングできるWebserverとは異なり、gRPCサーバーは常にサービスおよびメソッド名に基づいてリクエストをルーティングします。</span> <span class="merged" id="all.2bLadb.spl2" title="原文 : This makes routing configuration somewhat simpler - all you need to do is register your services:">これにより、ルーティング構成が若干簡単になります。必要なのは、サービスの登録のみです:</span> </p>

<markup
lang="java"

>    private static GrpcRouting createRouting(Config config) {
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
<p><span class="merged" id="all.2GSpOc" title="原文 : Both &quot;standard&quot; gRPC services that implement io.grpc.BindableService interface (typically implemented by extending generated server-side stub and overriding its methods), and Helidon gRPC services that implement io.helidon.grpc.server.GrpcService interface can be registered."><code>io.grpc.BindableService</code>インタフェースを実装する「標準」gRPCサービス(通常は、生成されたサーバー側スタブを拡張し、そのメソッドをオーバーライドすることによって実装される)と、<code>io.helidon.grpc.server.GrpcService</code>インタフェースを実装するHelidon gRPCサービスの両方を登録できます。</span></p>

<p><span class="merged" id="all.mXeHs" title="原文 : The difference is that Helidon gRPC services allow you to customize behavior down to the method level, and provide a number of useful helper methods that make service implementation easier, as we&rsquo;ll see in a moment.">違いは、Helidon gRPCサービスでは、メソッド・レベルまで動作をカスタマイズできることと、サービスの実装を簡単にする便利なヘルパー・メソッドが数多く用意されていることです。</span></p>

</div>

<h2 id="_customizing_service_definitions"><span class="merged" id="all.24RC3j" title="原文 : Customizing Service Definitions">サービス定義のカスタマイズ</span></h2>
<div class="section">
<p><span class="merged" id="all.51gnE" title="原文 : When registering a service, regardless of its type, you can customize its descriptor by providing configuration consumer as a second argument to the register method.">サービスを登録する場合、そのタイプに関係なく、構成コンシューマを<code>register</code>メソッドの別の引数として指定することで、ディスクリプタをカスタマイズできます。</span></p>

<p><span class="merged" id="all.3RODY4" title="原文 : This is particularly useful when registering standard BindableService instances, as it allows you to add certain Helidon-specific behaviors, such as health checks and metrics to them:">これは、<router-link @click.native="this.scrollFix('#06_health_checks.adoc')" to="#06_health_checks.adoc">「ヘルス・チェック」</router-link>や<router-link @click.native="this.scrollFix('#07_metrics.adoc')" to="#07_metrics.adoc">metrics</router-link>などの特定のHelidon-specific動作を追加できるため、標準の<code>BindableService</code>インスタンスを登録する場合に特に便利です:</span></p>

<markup
lang="java"

>    private static GrpcRouting createRouting(Config config) {
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

<h2 id="_specifying_global_interceptors"><span class="merged" id="all.1MN7Ao" title="原文 : Specifying Global Interceptors">グローバル・インターセプタの指定</span></h2>
<div class="section">
<p><span class="merged" id="all.2krczF" title="原文 : GrpcRouting also allows you to specify custom interceptors that will be applied to all registered services."><code>GrpcRouting</code>では、すべての登録済サービスに適用される<router-link @click.native="this.scrollFix('#05_interceptors.adoc')" to="#05_interceptors.adoc">「カスタム・インターセプタ」</router-link>を指定することもできます。</span></p>

<p><span class="merged" id="all.3fCvov" title="原文 : This is useful to configure features such as tracing, security and metrics collection, and we provide built-in interceptors for those purposes that you can simply register with the routing definition:">これは、トレース、セキュリティ、メトリクス収集などの機能を構成する場合に役立ちます。また、ルーティング定義に登録するだけの目的で組込みインターセプタを提供します:</span></p>

<markup
lang="java"

>    private static GrpcRouting createRouting(Config config) {
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
</doc-view>
