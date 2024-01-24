<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.35"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.34" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.27" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.23" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.24" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.21" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.15" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.50"  title="原文:: Overview">概要</span></h2>
<div class="section">

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.31"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1J5Pnm" title="原文 : To enable MicroProfile Telemetry either add a dependency on the helidon-microprofile bundle or add the following dependency to your project’s pom.xml (see Managing Dependencies).">MicroProfileテレメトリを有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>への依存関係を追加するか、プロジェクトの<code>pom.xml</code>への次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.telemetry&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-telemetry&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.28"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2cAKNV.spl1" title="原文 : OpenTelemetry comprises a collection of APIs, SDKs, integration tools, and other software components intended to facilitate the generation and control of telemetry data, including traces, metrics, and logs."><a href="https://opentelemetry.io/" target="_blank">OpenTelemetry</a>は、API、SDK、統合ツール、およびトレース、メトリクス、ログなどのテレメトリ・データの生成と制御を容易にすることを目的としたその他のソフトウェア・コンポーネントのコレクションで構成されます。</span> <span class="merged" id="all.2cAKNV.spl2" title="原文 : In an environment where distributed tracing is enabled via OpenTelemetry (which combines OpenTracing and OpenCensus), this specification establishes the necessary behaviors for MicroProfile applications to participate seamlessly.">分散トレースがOpenTelemetry (OpenTracingとOpenCensusを組み合せた)を介して有効になっている環境では、この仕様により、MicroProfileアプリケーションがシームレスに参加するために必要な動作が確立されます。</span> </p>

<p><span class="merged" id="all.OGf2A" title="原文 : MicroProfile Telemetry 1.0 allows for the exportation of the data it collects to Jaeger or Zipkin and to other systems using a variety of exporters.">MicroProfile Telemetry 1.0では、収集したデータをJaegerまたはZipkin、および様々なエクスポータを使用して他のシステムにエクスポートできます。</span></p>

<p><span class="merged" id="all.4XLujp.spl1" title="原文 : In a distributed tracing system, traces are used to capture a series of requests and are composed of multiple spans that represent individual operations within those requests.">分散トレース・システムでは、<strong>「トレース」</strong>は一連のリクエストを取得するために使用され、それらのリクエスト内の個々の操作を表す複数の<strong>「スパン」</strong>で構成されます。</span> <span class="merged" id="all.4XLujp.spl2" title="原文 : Each span includes a name, timestamps, and metadata that provide insights into the corresponding operation.">各<strong>span</strong>には、対応する操作に関するインサイトを提供する名前、タイムスタンプおよびメタデータが含まれます。</span> </p>

<p><span class="merged" id="all.2b70F2.spl1" title="原文 : Context is included in each span to identify the specific request that it belongs to."><strong>「コンテキスト」</strong>は、それが属する特定のリクエストを識別するために、各スパンに含まれます。</span> <span class="merged" id="all.2b70F2.spl2" title="原文 : This context information is crucial for tracking requests across various components in a distributed system, enabling developers to trace a single request as it traverses through multiple services.">このコンテキスト情報は、分散システム内の様々なコンポーネント間でリクエストをトラッキングするために重要であり、開発者は複数のサービスを経由する単一のリクエストをトレースできます。</span> </p>

<p><span class="merged" id="all.27FKC.spl1" title="原文 : Finally, exporters are responsible for transmitting the collected trace data to a backend service for monitoring and visualization.">最後に、<strong>「エクスポータ」</strong>は、収集されたトレース・データをモニタリングおよび可視化のためにバックエンド・サービスに送信します。</span> <span class="merged" id="all.27FKC.spl2" title="原文 : This enables developers to gain a comprehensive understanding of the system’s behavior and detect any issues or bottlenecks that may arise.">これにより、開発者はシステムの動作を包括的に理解し、発生する可能性のある問題やボトルネックを検出できます。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="OpenTelemetryトレースの一般的な理解" src="images/telemetry/telemetry-general.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.2bxBJv" title="原文 : There are two ways to work with Telemetry, using:">Telemetryを操作するには、次の2つの方法があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1FTY6Z" title="原文 : Automatic Instrumentation">自動計測</span></p>

</li>
<li>
<p><span class="merged" id="all.3OQj1A" title="原文 : Manual Instrumentation">手動計測</span></p>

</li>
</ul>

<p><span class="merged" id="all.GMaHe.spl1" title="原文 : For Automatic Instrumentation, OpenTelemetry provides a JavaAgent.">自動インストゥルメンテーションの場合、OpenTelemetryはJavaAgentを提供します。</span> <span class="merged" id="all.GMaHe.spl2" title="原文 : The Tracing API allows for the automatic participation in distributed tracing of Jakarta RESTful Web Services (both server and client) as well as MicroProfile REST Clients, without requiring any modifications to the code.">トレースAPIを使用すると、コードを変更することなく、Jakarta RESTful Webサービス(サーバーとクライアントの両方)およびMicroProfile RESTクライアントの分散トレースに自動的に参加できます。</span> <span class="merged" id="all.GMaHe.spl3" title="原文 : This is achieved through automatic instrumentation.">これは、自動計測によって実現されます。</span> </p>

<p><span class="merged" id="all.bgYAf" title="原文 : For Manual Instrumentation, there is a set of annotations and access to OpenTelemetry API.">手動インストゥルメンテーションの場合、注釈のセットとOpenTelemetry APIへのアクセスがあります。</span></p>

<p><span class="merged" id="all.35UeXs.spl1" title="原文 : @WithSpan - By adding this annotation to a method in any Jakarta CDI aware bean, a new span will be created and any necessary connections to the current Trace context will be established."><code>@WithSpan</code> - この注釈をJakarta CDI対応Beanのメソッドに追加すると、新しいスパンが作成され、現在のトレース・コンテキストへの必要な接続が確立されます。</span> <span class="merged" id="all.35UeXs.spl2" title="原文 : Additionally, the SpanAttribute annotation can be used to mark method parameters that should be included in the Trace.">さらに、<code>SpanAttribute</code>注釈を使用して、トレースに含めるメソッド・パラメータをマークできます。</span> </p>

<p><span class="merged" id="all.179X0F" title="原文 : Helidon provides full access to OpenTelemetry Tracing API:">Helidonは、OpenTelemetryトレースAPIへのフル・アクセスを提供します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4P3u3S"  title="原文: io.opentelemetry.api.OpenTelemetry"><code>io.opentelemetry.api.OpenTelemetry</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3ow7aA"  title="原文: io.opentelemetry.api.trace.Tracer"><code>io.opentelemetry.api.trace.Tracer</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4bz96T"  title="原文: io.opentelemetry.api.trace.Span"><code>io.opentelemetry.api.trace.Span</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3jqebA"  title="原文: io.opentelemetry.api.baggage.Baggage"><code>io.opentelemetry.api.baggage.Baggage</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.4QD9NZ.spl1" title="原文 : Accessing and using these objects can be done as follows.">これらのオブジェクトへのアクセスおよび使用は、次のように実行できます。</span> <span class="merged" id="all.4QD9NZ.spl2" title="原文 : For span:">スパン:</span> </p>

<markup
lang="java"
title="Span sample"
>@ApplicationScoped
class HelidonBean {

    @WithSpan   <span class="conum" data-value="1" />
    void doSomethingWithinSpan() {
        // do something here
    }

    @WithSpan("name") <span class="conum" data-value="2" />
    void complexSpan(@SpanAttribute(value = "arg") String arg) {
        // do something here
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2RYHyx" title="原文 : Simple @WithSpan annotation usage.">単純な<code>@WithSpan</code>注釈の使用方法。</span></li>
<li data-value="2"><span class="merged" id="all.1ayiTj" title="原文 : Additional attributes can be set on a method.">メソッドに追加の属性を設定できます。</span></li>
</ul>


<h3 id="_working_with_tracers"><span class="merged" id="all.EWb4s" title="原文 : Working With Tracers">トレーサの操作</span></h3>
<div class="section">
<p><span class="merged" id="all.qBnfv" title="原文 : You can inject OpenTelemetry Tracer using the regular @Inject annotation and use SpanBuilder to manually create, star and stop spans.">通常の<code>@Inject</code>注釈を使用してOpenTelemetry <code>Tracer</code>をインジェクトし、<code>SpanBuilder</code>を使用してスパンを手動で作成、スター・リングおよび停止できます。</span></p>

<markup
lang="java"
title="SpanBuilder usage"
>@Path("/")
public class HelidonEndpoint {

    @Inject
    Tracer tracer;  <span class="conum" data-value="1" />

    @GET
    @Path("/span")
    public Response span() {
        Span span = tracer.spanBuilder("new")   <span class="conum" data-value="2" />
                .setSpanKind(SpanKind.CLIENT)
                .setAttribute("someAttribute", "someValue")
                .startSpan();

        span.end();

        return Response.ok().build();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.ZMWh2" title="原文 : Inject Tracer."><code>Tracer</code>をインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.39oHHt" title="原文 : Use Tracer.spanBuilder to create and start new Span."><code>Tracer.spanBuilder</code>を使用して、新しい<code>Span</code>を作成および開始します。</span></li>
</ul>

<p><span class="merged" id="all.1EZyab.spl1" title="原文 : Helidon Microprofile Telemetry is integrated with Helidon Tracing API.">Helidon Microprofile Telemetryは、<router-link to="/mp/tracing">「HelidonトレースAPI」</router-link>と統合されています。</span> <span class="merged" id="all.1EZyab.spl2" title="原文 : This means that both APIs can be mixed, and all parent hierarchies will be kept.">つまり、両方のAPIを混在させることができ、すべての親階層が保持されます。</span> <span class="merged" id="all.1EZyab.spl3" title="原文 : In the case below, @WithSpan annotated method is mixed with manually created io.helidon.tracing.Span:">次の場合、<code>@WithSpan</code>注釈付きメソッドが、手動で作成された<code>io.helidon.tracing.Span</code>と混在します:</span> </p>

<markup
lang="java"
title="Inject Helidon Tracer"
>private io.helidon.tracing.Tracer helidonTracerInjected;

@Inject
GreetResource(io.helidon.tracing.Tracer helidonTracerInjected) {
    this.helidonTracerInjected = helidonTracerInjected; <span class="conum" data-value="1" />
}

@GET
@Path("mixed_injected")
@Produces(MediaType.APPLICATION_JSON)
@WithSpan("mixed_parent_injected")
public GreetingMessage mixedSpanInjected() {
    io.helidon.tracing.Span mixedSpan = helidonTracerInjected.spanBuilder("mixed_injected") <span class="conum" data-value="2" />
            .kind(io.helidon.tracing.Span.Kind.SERVER)
            .tag("attribute", "value")
            .start();
    mixedSpan.end();

    return new GreetingMessage("Mixed Span Injected" + span);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.12fKVP" title="原文 : Inject io.helidon.tracing.Tracer."><code>io.helidon.tracing.Tracer</code>をインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.haLle" title="原文 : Use the injected tracer to create io.helidon.tracing.Span using the spanBuilder() method.">インジェクトされたトレーサを使用して、<code>spanBuilder()</code>メソッドを使用して<code>io.helidon.tracing.Span</code>を作成します。</span></li>
</ul>

<p><span class="merged" id="all.vmC6h.spl1" title="原文 : The span is then started and ended manually.">スパンは手動で開始および終了します。</span> <span class="merged" id="all.vmC6h.spl2" title="原文 : Span parent relations will be preserved.">スパン親関係は保持されます。</span> <span class="merged" id="all.vmC6h.spl3" title="原文 : This means that span named &quot;mixed_injected&quot; with have parent span named &quot;mixed_parent_injected&quot;, which will have parent span named &quot;mixed_injected&quot;.">つまり、"mixed_injected"という名前のスパンには"mixed_parent_injected"という名前の親スパンがあり、"mixed_injected"という名前の親スパンがあります。</span> </p>

<p><span class="merged" id="all.SKU3H" title="原文 : Another option is to use the Global Tracer:">もう1つのオプションは、グローバル・トレーサを使用することです:</span></p>

<markup
lang="java"
title="Obtain the Global tracer"
>@GET
@Path("mixed")
@Produces(MediaType.APPLICATION_JSON)
@WithSpan("mixed_parent")
public GreetingMessage mixedSpan() {

    io.helidon.tracing.Tracer helidonTracer = io.helidon.tracing.Tracer.global();   <span class="conum" data-value="1" />
    io.helidon.tracing.Span mixedSpan = helidonTracer.spanBuilder("mixed")  <span class="conum" data-value="2" />
            .kind(io.helidon.tracing.Span.Kind.SERVER)
            .tag("attribute", "value")
            .start();
    mixedSpan.end();

    return new GreetingMessage("Mixed Span" + span);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.DLHmI" title="原文 : Obtain tracer using the io.helidon.tracing.Tracer.global() method;"><code>io.helidon.tracing.Tracer.global()</code>メソッドを使用してトレーサを取得</span></li>
<li data-value="2"><span class="merged" id="all.2S2tqf" title="原文 : Use the created tracer to create a span.">作成したトレーサを使用して、スパンを作成します。</span></li>
</ul>

<p><span class="merged" id="all.1iHJiY.spl1" title="原文 : The span is then started and ended manually.">スパンは手動で開始および終了します。</span> <span class="merged" id="all.1iHJiY.spl2" title="原文 : Span parent relations will be preserved.">スパン親関係は保持されます。</span> </p>

</div>


<h3 id="_working_with_spans"><span class="merged" id="all.16vQ0r" title="原文 : Working With Spans">スパンの操作</span></h3>
<div class="section">
<p><span class="merged" id="all.1m68H6.spl1" title="原文 : To obtain the current span, it can be injected by CDI.">現在のスパンを得るために、それはCDIによってインジェクトすることができます。</span> <span class="merged" id="all.1m68H6.spl2" title="原文 : The current span can also be obtained using the static method Span.current().">現在のスパンは、静的メソッド<code>Span.current()</code>を使用して取得することもできます。</span> </p>

<markup
lang="java"
title="Inject the current span"
>@Path("/")
public class HelidonEndpoint {
    @Inject
    Span span;  <span class="conum" data-value="1" />

    @GET
    @Path("/current")
    public Response currentSpan() {
        return Response.ok(span.getAttribute("someAttribute")).build(); <span class="conum" data-value="2" />
    }


    @GET
    @Path("/current/static")
    public Response currentSpanStatic() {
        return Response.ok(Span.current().getAttribute("someAttribute")).build(); <span class="conum" data-value="3" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2SEMTC" title="原文 : Inject the current span.">現在のスパンをインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.2iTMTU" title="原文 : Use the injected span.">インジェクトされたスパンを使用します。</span></li>
<li data-value="3"><span class="merged" id="all.2vk6xf" title="原文 : Use Span.current() to access the current span."><code>Span.current()</code>を使用して、現在のスパンにアクセスします。</span></li>
</ul>

</div>


<h3 id="_working_with_baggage"><span class="merged" id="all.1LnL8X" title="原文 : Working With Baggage">ゲージの操作</span></h3>
<div class="section">
<p><span class="merged" id="all.1XKe52" title="原文 : The same functionality is available for the Baggage API:"><code>Baggage</code> APIでも同じ機能を使用できます:</span></p>

<markup
lang="java"
title="Inject the current baggage"
>@Path("/")
public class HelidonEndpoint {
    @Inject
    Baggage baggage;  <span class="conum" data-value="1" />

    @GET
    @Path("/current")
    public Response currentBaggage() {
        return Response.ok(baggage.get("baggageKey")).build(); <span class="conum" data-value="2" />
    }


    @GET
    @Path("/current/static")
    public Response currentBaggageStatic() {
        return Response.ok(Baggage.current().get("baggageKey")).build(); <span class="conum" data-value="3" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2sUOoN" title="原文 : Inject the current baggage.">現在のゲージをインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.2Iyxga" title="原文 : Use the injected baggage.">インジェクトされたゲージを使用します。</span></li>
<li data-value="3"><span class="merged" id="all.2kcLEa" title="原文 : Use Baggage.current() to access the current baggage."><code>Baggage.current()</code>を使用して、現在のゲージにアクセスします。</span></li>
</ul>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.28"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<div class="admonition important">
<p class="admonition-inline"><span class="merged" id="all.4GEDju.spl1" title="原文 : MicroProfile Telemetry is not activated by default.">MicroProfileテレメトリはデフォルトではアクティブ化されません。</span> <span class="merged" id="all.4GEDju.spl2" title="原文 : To activate this feature, you need to specify the configuration otel.sdk.disabled=false in one of the MicroProfile Config or other config sources.">この機能をアクティブにするには、構成<code>otel.sdk.disabled=false</code>をMicroProfile構成またはその他の構成ソースの1つに指定する必要があります。</span> </p>
</div>

<p><span class="merged" id="all.3z66YR" title="原文 : To configure OpenTelemetry, MicroProfile Config must be used, and the configuration properties outlined in the following sections must be followed:">OpenTelemetryを構成するには、MicroProfile構成を使用し、次の項で説明する構成プロパティに従う必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2e5Ng9" title="原文 : OpenTelemetry SDK Autoconfigure (excluding properties related to Metrics and Logging)"><a href="https://github.com/open-telemetry/opentelemetry-java/tree/v1.19.0/sdk-extensions/autoconfigure" target="_blank">「OpenTelemetry SDKの自動構成」</a> (メトリクスおよびロギングに関連するプロパティを除く)</span></p>

</li>
<li>
<p><span class="merged" id="all.aXhNf" title="原文 : Manual Instrumentation"><a href="https://opentelemetry.io/docs/instrumentation/java/manual/" target="_blank">手動計測</a></span></p>

</li>
</ul>

<p><span class="merged" id="all.12GAwK" title="原文 : Please consult with the links above for all configurations&apos; properties usage.">すべての構成のプロパティの使用方法については、上のリンクを参照してください。</span></p>

<p><span class="merged" id="all.3dENoK" title="原文 : The property should be declared in microprofile-config.properties file to be processed correctly.">プロパティを正しく処理するには、<code>microprofile-config.properties</code>ファイルで宣言する必要があります。</span></p>


<h3 id="_opentelemetry_java_agent"><span class="merged" id="all.2uvwBq" title="原文 : OpenTelemetry Java Agent">OpenTelemetry Javaエージェント</span></h3>
<div class="section">
<p><span class="merged" id="all.2HnxLg.spl1" title="原文 : The OpenTelemetry Java Agent may influence the work of MicroProfile Telemetry, on how the objects are created and configured.">OpenTelemetry Javaエージェントは、オブジェクトの作成方法と構成方法に関するMicroProfileテレメトリの作業に影響を与える可能性があります。</span> <span class="merged" id="all.2HnxLg.spl2" title="原文 : Helidon will do &quot;best effort&quot; to detect the use of the agent.">Helidonは、エージェントの使用を検出するために最善の努力をします。</span> <span class="merged" id="all.2HnxLg.spl3" title="原文 : But if there is a decision to run the Helidon app with the agent, a configuration property should be set:">ただし、エージェントでHelidonアプリケーションを実行するディシジョンがある場合は、構成プロパティを設定する必要があります:</span> </p>

<p><span class="merged" id="all.34Fuxz"  title="原文: otel.agent.present=true"><code>otel.agent.present=true</code></span></p>

<p><span class="merged" id="all.eQCZg" title="原文 : This way, Helidon will explicitly get all the configuration and objects from the Agent, thus allowing correct span hierarchy settings.">このようにして、Helidonはエージェントからすべての構成およびオブジェクトを明示的に取得するため、正しいスパン階層設定が可能になります。</span></p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.23"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4BIRuh.spl1" title="原文 : This guide demonstrates how to incorporate MicroProfile Telemetry into Helidon and provides illustrations of how to view traces.">このガイドでは、MicroProfileテレメトリをHelidonに組み込む方法を示し、トレースの表示方法を説明します。</span> <span class="merged" id="all.4BIRuh.spl2" title="原文 : Jaeger is employed in all the examples, and the Jaeger UI is used to view the traces.">Jaegerはすべての例で使用され、Jaeger UIはトレースの表示に使用されます。</span> </p>


<h3 id="_set_up_jaeger"><span class="merged" id="all.3Ril1s" title="原文 : Set Up Jaeger">Jaegerの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3dAQ2I" title="原文 : For example, Jaeger will be used for gathering of the tracing information.">たとえば、Jaegerはトレース情報の収集に使用されます。</span></p>

<markup
lang="bash"
title="Run Jaeger in a docker container."
>docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.50</markup>

<p><span class="merged" id="all.40dZbi" title="原文 : All the tracing information gathered from the examples runs is accessible from the browser in the Jaeger UI under http://localhost:16686/">例の実行から収集されたすべてのトレース情報は、ブラウザのJaeger UIの<a class="bare" href="http://localhost:16686/" target="_blank">http://localhost:16686/</a>からアクセスできます</span></p>

</div>


<h3 id="_enable_microprofile_telemetry_in_helidon_application"><span class="merged" id="all.s9oTE" title="原文 : Enable MicroProfile Telemetry in Helidon Application">HelidonアプリケーションでのMicroProfileテレメトリの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.ggZCf" title="原文 : Together with Helidon Telemetry dependency, an OpenTelemetry Exporter dependency should be added to project’s pom.xml file.">Helidonテレメトリ依存関係とともに、OpenTelemetryエクスポータ依存関係をプロジェクトのpom.xmlファイルに追加する必要があります。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.telemetry&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-telemetry&lt;/artifactId&gt; <span class="conum" data-value="1" />
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.opentelemetry&lt;/groupId&gt;
    &lt;artifactId&gt;opentelemetry-exporter-jaeger&lt;/artifactId&gt;  <span class="conum" data-value="2" />
&lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3vRf4A" title="原文 : Helidon Telemetry dependency.">Helidonテレメトリ依存関係。</span></li>
<li data-value="2"><span class="merged" id="all.14Tav3" title="原文 : OpenTelemetry Jaeger exporter.">OpenTelemetry Jaegerエクスポータ。</span></li>
</ul>

<p><span class="merged" id="all.4NVDQk" title="原文 : Add these lines to META-INF/microprofile-config.properties:">次の行を<code>META-INF/microprofile-config.properties</code>に追加します:</span></p>

<markup
lang="properties"
title="MicroProfile Telemetry properties"
>otel.sdk.disabled=false     <span class="conum" data-value="1" />
otel.traces.exporter=jaeger <span class="conum" data-value="2" />
otel.exporter.name=greeting-service <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4TX064" title="原文 : Enable MicroProfile Telemetry.">MicroProfileテレメトリを有効にします。</span></li>
<li data-value="2"><span class="merged" id="all.3D5ZfI" title="原文 : Set exporter to Jaeger.">エクスポータをJaegerに設定します。</span></li>
<li data-value="3"><span class="merged" id="all.1yxjBf" title="原文 : Name of our service.">サービス名。</span></li>
</ul>

<p><span class="merged" id="all.RFQ18" title="原文 : Here we enable MicroProfile Telemetry, set tracer to &quot;jaeger&quot; and give a name, which will be used to identify our service in the tracer.">ここでは、MicroProfileテレメトリを有効にし、トレーサを「jaeger」に設定し、トレーサ内のサービスを識別するために使用される名前を付けます。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.10"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2ezfWR.spl1" title="原文 : For this example, you will use Jaeger to manage data tracing.">この例では、Jaegerを使用してデータ・トレースを管理します。</span> <span class="merged" id="all.2ezfWR.spl2" title="原文 : If you prefer to use Zipkin, please set otel.traces.exporter property to &quot;zipkin&quot;.">Zipkinを使用する場合は、<code>otel.traces.exporter</code>プロパティを「zipkin」に設定してください。</span> <span class="merged" id="all.2ezfWR.spl3" title="原文 : For more information using about Zipkin, see https://zipkin.io/.">Zipkinの詳細については、<a class="bare" href="https://zipkin.io/" target="_blank">https://zipkin.io/</a>を参照してください。</span> <span class="merged" id="all.2ezfWR.spl4" title="原文 : Also, a corresponding Maven dependency for the exporter should be added:">また、エクスポータに対応するMaven依存関係を追加する必要があります:</span> </p>

<div class="listing">
<markup>&lt;dependency&gt;
    &lt;groupId&gt;io.opentelemetry&lt;/groupId&gt;
    &lt;artifactId&gt;opentelemetry-exporter-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>
</div>
</p>
</div>

</div>


<h3 id="_tracing_at_method_level"><span class="merged" id="all.nasj" title="原文 : Tracing at Method Level">メソッド・レベルでのトレース</span></h3>
<div class="section">
<p><span class="merged" id="all.hiJxF" title="原文 : To create simple services, use @WithSpan and Tracer to create span and let MicroProfile OpenTelemetry handle them.">単純なサービスを作成するには、<code>@WithSpan</code>および<code>Tracer</code>を使用してスパンを作成し、MicroProfile OpenTelemetryでそれらを処理します。</span></p>

<markup
lang="java"

>@Path("/greet")
public class GreetResource {

    @GET
    @WithSpan("default")                <span class="conum" data-value="1" />
    public String getDefaultMessage() {
        return "Hello World";
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2FQaC6" title="原文 : Use of @WithSpan with name &quot;default&quot;."><code>@WithSpan</code>をdefaultという名前で使用します。</span></li>
</ul>

<p><span class="merged" id="all.3tYj9x" title="原文 : Now let’s call the Greeting endpoint:">次に、Greetingエンドポイントを呼び出します:</span></p>

<markup
lang="bash"

>curl localhost:8080/greet
Hello World</markup>

<p><span class="merged" id="all.SmzWR.spl1" title="原文 : Next, launch the Jaeger UI at http://localhost:16686/.">次に、<a class="bare" href="http://localhost:16686/" target="_blank">http://localhost:16686/</a>でJaeger UIを起動します。</span> <span class="merged" id="all.SmzWR.spl2"  title="原文: The expected output is:">予想される出力は次のとおりです。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="グリーティング・サービス・トレース出力" src="images/telemetry/telemetry-greeting-jaeger.png" /> </v-card-text> </v-card>


<markup
lang="java"
title="Custom method"
>@Inject
private Tracer tracer;  <span class="conum" data-value="1" />

@GET
@Path("custom")
@Produces(MediaType.APPLICATION_JSON)
@WithSpan                                           <span class="conum" data-value="2" />
public JsonObject useCustomSpan(){
    Span span = tracer.spanBuilder("custom")        <span class="conum" data-value="3" />
            .setSpanKind(SpanKind.INTERNAL)
            .setAttribute("attribute", "value")
            .startSpan();
    span.end();                                     <span class="conum" data-value="4" />

    return JSON.createObjectBuilder()
            .add("Custom Span", span.toString())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.25r77j" title="原文 : Inject Opentelemetry Tracer.">Opentelemetry <code>Tracer</code>をインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.1Ysk7" title="原文 : Create a span around the method useCustomSpan().">メソッド<code>useCustomSpan()</code>の周りにスパンを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.42MyJO" title="原文 : Create a custom INTERNAL span and start it.">カスタムの<code>INTERNAL</code>スパンを作成して起動します。</span></li>
<li data-value="4"><span class="merged" id="all.qGRZE" title="原文 : End the custom span.">カスタム・スパンを終了します。</span></li>
</ul>

<p><span class="merged" id="all.3Pzwiq" title="原文 : Let us call the custom endpoint:">カスタム・エンドポイントをコールします:</span></p>

<markup
lang="bash"

>curl localhost:8080/greeting/custom</markup>

<p><span class="merged" id="all.3rGra7.spl1" title="原文 : Again you can launch the Jaeger UI at http://localhost:16686/.">再度、<a class="bare" href="http://localhost:16686/" target="_blank">http://localhost:16686/</a>でJaeger UIを起動できます。</span> <span class="merged" id="all.3rGra7.spl2"  title="原文: The expected output is:">予想される出力は次のとおりです。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="カスタム・スパン使用" src="images/telemetry/telemetry-custom-jaeger.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.2Cc0Tc.spl1" title="原文 : Now let us use multiple services calls.">次に、複数のサービス・コールを使用します。</span> <span class="merged" id="all.2Cc0Tc.spl2" title="原文 : In the example below our main service will call the secondary services.">次の例では、メイン・サービスが<code>secondary</code>サービスをコールします。</span> <span class="merged" id="all.2Cc0Tc.spl3" title="原文 : Each method in each service will be annotated with @WithSpan annotation.">各サービスの各メソッドには、<code>@WithSpan</code>注釈が付けられます。</span> </p>

<markup
lang="java"
title="Outbound method"
>@Uri("http://localhost:8081/secondary")
private WebTarget target;       <span class="conum" data-value="1" />

@GET
@Path("/outbound")
@WithSpan("outbound")   <span class="conum" data-value="2" />
public String outbound() {
    return target.request().accept(MediaType.TEXT_PLAIN).get(String.class); <span class="conum" data-value="3" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.h2lfA" title="原文 : Inject WebTarget pointing to Secondary service.">セカンダリ・サービスを指す<code>WebTarget</code>をインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.3oH6OQ" title="原文 : Wrap method using WithSpan."><code>WithSpan</code>を使用してメソッドをラップします。</span></li>
<li data-value="3"><span class="merged" id="all.2GrarU" title="原文 : Call the secondary service.">セカンダリ・サービスをコールします。</span></li>
</ul>

<p><span class="merged" id="all.1v3oa" title="原文 : The secondary service is basic; it has only one method, which is also annotated with @WithSpan.">セカンダリ・サービスは基本です。このサービスには1つのメソッドのみがあり、<code>@WithSpan</code>という注釈も付けられています。</span></p>

<markup
lang="java"
title="Secondary service"
>@GET
@WithSpan   <span class="conum" data-value="1" />
public String getSecondaryMessage() {
    return "Secondary"; <span class="conum" data-value="2" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1LjYPy" title="原文 : Wrap method in a span.">スパンでのラップ・メソッド。</span></li>
<li data-value="2"><span class="merged" id="all.2aIn3N" title="原文 : Return a string.">文字列を返します。</span></li>
</ul>

<p><span class="merged" id="all.9OJqy" title="原文 : Let us call the Outbound endpoint:"><em>「アウトバウンド」</em>エンドポイントをコールします:</span></p>

<markup
lang="bash"

>curl localhost:8080/greet/outbound
Secondary</markup>

<p><span class="merged" id="all.2e86O6.spl1" title="原文 : The greeting-service call secondary-service."><code>greeting-service</code>は、<code>secondary-service</code>をコールします。</span> <span class="merged" id="all.2e86O6.spl2" title="原文 : Each service will create spans with corresponding names, and a service class hierarchy will be created.">各サービスは対応する名前でスパンを作成し、サービス・クラス階層を作成します。</span> </p>

<p><span class="merged" id="all.XCwIm" title="原文 : Launch the Jaeger UI at http://localhost:16686/ to see the expected output (shown below)."><a class="bare" href="http://localhost:16686/" target="_blank">http://localhost:16686/</a>でJaeger UIを起動して、予想される出力を確認します(次を参照)。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="セカンダリ・サービス発信コール" src="images/telemetry/telemetry-outbound-jaeger.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.3vNxhD" title="原文 : This example is available at the Helidon official GitHub repository.">この例は、<a href="https://github.com/helidon-io/helidon/tree/main/examples/microprofile/telemetry" target="_blank">「Helidon公式GitHubリポジトリ」</a>にあります。</span></p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.15"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2yJL3i" title="原文 : MicroProfile Telemetry Specification"><a href="https://download.eclipse.org/microprofile/microprofile-telemetry-1.0/tracing/microprofile-telemetry-tracing-spec-1.0.pdf" target="_blank">MicroProfileテレメトリ仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3NEHH3"  title="原文:: OpenTelemetry Documentation"><a href="https://opentelemetry.io/docs/" target="_blank">OpenTelemetryのドキュメント</a></span></p>

</li>
</ul>

</div>

</doc-view>
