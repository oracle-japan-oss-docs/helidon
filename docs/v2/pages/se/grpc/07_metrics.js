<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.21P8WV" title="原文 : gRPC Service Metrics">gRPCサービス・メトリクス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2zovL9" title="原文 : Helidon gRPC Server has built-in support for metrics capture, which allows service developers to easily enable application-level metrics for their services.">Helidon gRPCサーバーにはメトリクス・キャプチャのサポートが組み込まれているため、サービス開発者はサービスに対してアプリケーション・レベルのメトリクスを簡単に有効にできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_enabling_metrics_capture"><span class="merged" id="all.3rCPS0" title="原文 : Enabling Metrics Capture">メトリクス取得の有効化</span></h2>
<div class="section">
<p><span class="merged" id="all.1sf2z5.spl1" title="原文 : By default, gRPC Server only captures two vendor-level metrics: grpc.request.count and grpc.request.meter.">デフォルトでは、gRPCサーバーは2つのベンダー・レベル・メトリクスのみを取得します: <code>grpc.request.count</code>および<code>grpc.request.meter</code>。</span> <span class="merged" id="all.1sf2z5.spl2" title="原文 : These metrics provide aggregate view of requests across all services, and serve as an indication of the overall server load.">これらのメトリクスは、すべてのサービスのリクエストの集計ビューを提供し、サーバー全体の負荷を示します。</span> </p>

<p><span class="merged" id="all.4HEidQ" title="原文 : However, users can enable more fine grained metrics by simply configuring a built-in GrpcMetrics interceptor within the routing:">ただし、ルーティング内に組込み<code>GrpcMetrics</code>インターセプタを構成するだけで、よりきめ細かいメトリクスを有効にできます:</span></p>

<markup
lang="java"

>    private static GrpcRouting createRouting(Config config) {
        return GrpcRouting.builder()
                .intercept(GrpcMetrics.timed())       <span class="conum" data-value="1" />
                .register(new GreetService(config))
                .register(new EchoService())
                .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.41lLNY" title="原文 : Capture metrics for all methods of all services as a timer">すべてのサービスのすべてのメソッドのメトリクスを<code>timer</code>として取得</span></li>
</ul>
<p><span class="merged" id="all.3OCEGX.spl1" title="原文 : In the example above we have chosen to create and keep a timer metric type for each method of each service.">前述の例では、各サービスのメソッドごとに<code>timer</code>メトリック・タイプを作成して保持することを選択しました。</span> <span class="merged" id="all.3OCEGX.spl2" title="原文 : Alternatively, we could&rsquo;ve chosen to use a counter, meter or a histogram instead.">かわりに、<code>counter</code>、<code>meter</code>または<code>histogram</code>を使用することもできます。</span> </p>

</div>

<h2 id="_overriding_metrics_capture"><span class="merged" id="all.40WAp" title="原文 : Overriding Metrics Capture">メトリクス取得のオーバーライド</span></h2>
<div class="section">
<p><span class="merged" id="all.2jbM4C.spl1" title="原文 : While global metrics capture is certainly useful, it is not always sufficient.">グローバル・メトリクスの取得は確実に有用ですが、必ずしも十分ではありません。</span> <span class="merged" id="all.2jbM4C.spl2" title="原文 : Keeping a separate timer for each gRPC method may be an overkill, so the user could decide to use a lighter-weight metric type, such as counter or a meter.">gRPCメソッドごとに個別の<code>timer</code>を保持することは過剰な場合があるため、ユーザーは、<code>counter</code>や<code>meter</code>などの軽量なメトリック・タイプを使用することを決定できます。</span> </p>

<p><span class="merged" id="all.1d1zMk" title="原文 : However, she may still want to enable histogram or a timer for some services, or even only some methods of some services.">ただし、一部のサービスまたは一部のサービスの一部のメソッドに対してのみ<code>histogram</code>または<code>timer</code>を有効にすることもできます。</span></p>

<p><span class="merged" id="all.1s1F9R" title="原文 : This can be easily accomplished by overriding the type of the captured metric at either service or the method level:">これは、取得したメトリックのタイプをサービス・レベルまたはメソッド・レベルでオーバーライドすることで簡単に実行できます:</span></p>

<markup
lang="java"

>    private static GrpcRouting createRouting(Config config) {
        return GrpcRouting.builder()
                .intercept(GrpcMetrics.counted())   <span class="conum" data-value="1" />
                .register(new MyService())
                .build();
    }

    public static class MyService implements GrpcService {

        @Override
        public void update(ServiceDescriptor.Rules rules) {
            rules
                .intercept(GrpcMetrics.metered())                     <span class="conum" data-value="2" />
                .unary("MyMethod", this::myMethod,
                           cfg -&gt; cfg.intercept(GrpcMetrics.timer())) <span class="conum" data-value="3" />
        }

        private &lt;ReqT, ResT&gt; void myMethod(ReqT request, StreamObserver&lt;ResT&gt; observer) {
            // do something
        }
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2APC5" title="原文 : Use counter for all methods of all services, unless overridden">オーバーライドされないかぎり、すべてのサービスのすべてのメソッドに<code>counter</code>を使用</span></li>
<li data-value="2"><span class="merged" id="all.3X3WOD" title="原文 : Use meter for all methods of MyService"><code>MyService</code>のすべてのメソッドに<code>meter</code>を使用</span></li>
<li data-value="3"><span class="merged" id="all.1Z2Z8f" title="原文 : Use timer for MyService::MyMethod"><code>MyService::MyMethod</code>での<code>timer</code>の使用</span></li>
</ul>
</div>

<h2 id="_exposing_metrics_externally"><span class="merged" id="all.szp" title="原文 : Exposing Metrics Externally">外部へのメトリクスの公開</span></h2>
<div class="section">
<p><span class="merged" id="all.2Zlhup" title="原文 : Collected metrics are stored in the standard Helidon Metric Registries, such as vendor and application registry, and can be exposed via standard /metrics REST API.">収集されたメトリクスは、ベンダーやアプリケーション・レジストリなどの標準のHelidonメトリック・レジストリに格納され、標準の<code>/metrics</code> REST APIを介して公開できます。</span></p>

<markup
lang="java"

>        Routing routing = Routing.builder()
                .register(MetricsSupport.create())    <span class="conum" data-value="1" />
                .build();

        WebServer.create(webServerConfig(), routing)  <span class="conum" data-value="2" />
                 .start()</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1sfLFD" title="原文 : Add MetricsSupport instance to web server routing">webサーバー・ルーティングへの<code>MetricsSupport</code>インスタンスの追加</span></li>
<li data-value="2"><span class="merged" id="all.48IMie" title="原文 : Create and start Helidon web server">Helidon webサーバーの作成および起動</span></li>
</ul>
<p><span class="merged" id="all.4Gx6GB" title="原文 : See Helidon Metrics documentation for more details.">詳細は、<router-link @click.native="this.scrollFix('#metrics/01_metrics.adoc')" to="#metrics/01_metrics.adoc">「Helidonメトリクス」</router-link>のドキュメントを参照してください。</span></p>

</div>

<h2 id="_specifying_metric_meta_data"><span class="merged" id="all.3i4l59" title="原文 : Specifying Metric Meta-data">メトリック・メタデータの指定</span></h2>
<div class="section">
<p><span class="merged" id="all.2INaFL" title="原文 : Helidon metrics contain meta-data such as tags, a description, units etc. It is possible to add this additional meta-data when specifying the metrics.">Helidonメトリクスには、タグ、説明、単位などのメタデータが含まれます。メトリクスを指定するときに、このメタデータを追加できます。</span></p>


<h3 id="_adding_tags"><span class="merged" id="all.2XusaB"  title="原文:: Adding Tags">タグの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.3fF7Hj.spl1" title="原文 : To add tags to a metric a Map of key/value tags can be supplied.">メトリックにタグを追加するには、キー/バリュー・タグの<code>Map</code>を指定できます。</span> <span class="merged" id="all.3fF7Hj.spl2"  title="原文:: For example:">次に例を示します。</span> </p>

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
<li data-value="1"><span class="merged" id="all.AkL78" title="原文 : the tags() method is used to add the Map of tags to the metric."><code>tags()</code>メソッドを使用して、タグの<code>Map</code>をメトリックに追加します。</span></li>
</ul>
</div>

<h3 id="_adding_a_description"><span class="merged" id="all.1rRi2n" title="原文 : Adding a Description">説明の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.1rvo6D" title="原文 : A meaningful description can be added to a metric: For example:">意味のある説明をメトリックに追加できます : 次に例を示します:</span></p>

<markup
lang="java"

>GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.counted().description("Something useful")) <span class="conum" data-value="1" />
        .register(new MyService())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4C2mfB" title="原文 : the description() method is used to add the description to the metric."><code>description()</code>メソッドを使用して、メトリックに説明を追加します。</span></li>
</ul>
</div>

<h3 id="_adding_metric_units"><span class="merged" id="all.2dFgRM" title="原文 : Adding Metric Units">メトリック単位の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.3wnitx" title="原文 : A units value can be added to the Metric: For example:">単位の値をメトリックに追加できます : 次に例を示します:</span></p>

<markup
lang="java"

>GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.timed().units(MetricUnits.SECONDS)) <span class="conum" data-value="1" />
        .register(new MyService())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1nwWoC.spl1" title="原文 : the units() method is used to add the metric units to the metric.">メトリックにメトリック単位を追加するには、<code>units()</code>メソッドを使用します。</span> <span class="merged" id="all.1nwWoC.spl2" title="原文 : Typically the units value is one of the constants from org.eclipse.microprofile.metrics.MetricUnits class.">通常、単位の値は<code>org.eclipse.microprofile.metrics.MetricUnits</code>クラスの定数のいずれかです。</span> </li>
</ul>
</div>
</div>

<h2 id="_overriding_the_metric_name"><span class="merged" id="all.35YPyd" title="原文 : Overriding the Metric Name">メトリック名のオーバーライド</span></h2>
<div class="section">
<p><span class="merged" id="all.2cXtHs.spl1" title="原文 : By default the metric name is the gRPC service name followed by a dot (&apos;.&apos;) followed by the method name.">デフォルトでは、メトリック名はgRPCサービス名の後にドット(.)が続き、その後にメソッド名が続きます。</span> <span class="merged" id="all.2cXtHs.spl2" title="原文 : It is possible to supply a function that can be used to override the default behaviour.">デフォルトの動作をオーバーライドするために使用できる関数を指定できます。</span> </p>

<p><span class="merged" id="all.33Ioks" title="原文 : The function should implement the io.helidon.grpc.metrics.GrpcMetrics.NamingFunction interface">この関数は、<code>io.helidon.grpc.metrics.GrpcMetrics.NamingFunction</code>インタフェースを実装する必要があります</span></p>

<markup
lang="java"

>    @FunctionalInterface
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

<p><span class="merged" id="all.1HdpMN" title="原文 : This is a functional interface so lambda can be used too.">これは関数型インタフェースであるため、ラムダも使用できます。</span></p>

<p><span class="merged" id="all.6vDv5.1"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="java"

>GrpcRouting routing = GrpcRouting.builder()
        .intercept(GrpcMetrics.counted()
                .nameFunction((svc, method, metric) -&gt; "grpc." + service.name() + '.' + method) <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2fcubm" title="原文 : the NamingFunction is just a lambda that returns the concatenated service name and method name with the prefix grpc. So for a service &quot;Foo&quot;, method &quot;bar&quot; the above example would produce a name &quot;grpc.Foo.bar&quot;."><code>NamingFunction</code>は、プレフィクス<code>grpc.</code>を使用して連結されたサービス名とメソッド名を返す単なるラムダであるため、サービス"Foo"の場合はメソッド"bar"、前述の例では名前"grpc.Foo.bar"が生産されます。</span></li>
</ul>
</div>
</doc-view>
