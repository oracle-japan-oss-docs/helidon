<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_interceptors"><span class="merged" id="all.3RQCCM"  title="原文:: Interceptors">インターセプタ</span></h2>
<div class="section">
<p><span class="merged" id="all.49DlMk" title="原文 : Helidon gRPC allows you to configure standard `io.grpc.ServerInterceptor`s.">Helidon gRPCを使用すると、標準のio.grpc.ServerInterceptorを構成できます。</span></p>

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
<li data-value="1"><span class="merged" id="all.2Rc9hQ" title="原文 : Implement io.grpc.ServerInterceptor"><code>io.grpc.ServerInterceptor</code>の実装</span></li>
<li data-value="2"><span class="merged" id="all.3bArEF" title="原文 : Implement the logging logic">ロギング・ロジックの実装</span></li>
<li data-value="3"><span class="merged" id="all.1BvyNJ" title="原文 : Start intercepted call">インターセプトされたコールの開始</span></li>
</ul>
</div>

<h2 id="_registering_interceptors"><span class="merged" id="all.3qSKJG" title="原文 : Registering Interceptors">インターセプタの登録</span></h2>
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
<li data-value="1"><span class="merged" id="all.18qgCb" title="原文 : Adds LoggingInterceptor to all methods of GreetService and EchoService"><code>GreetService</code>および<code>EchoService</code>のすべてのメソッドに<code>LoggingInterceptor</code>を追加</span></li>
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
<li data-value="1"><span class="merged" id="all.1rOEro" title="原文 : Adds LoggingInterceptor to all methods of MyService"><code>MyService</code>のすべてのメソッドに<code>LoggingInterceptor</code>を追加</span></li>
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
<li data-value="1"><span class="merged" id="all.4EvDhR" title="原文 : Adds LoggingInterceptor to all methods of GreetService only"><code>LoggingInterceptor</code>を<code>GreetService</code>のすべてのメソッドにのみ追加</span></li>
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
<li data-value="1"><span class="merged" id="all.3J9jgs" title="原文 : Adds LoggingInterceptor to MyService::MyMethod only"><code>LoggingInterceptor</code>を<code>MyService::MyMethod</code>にのみ追加</span></li>
</ul>
</div>
</doc-view>
