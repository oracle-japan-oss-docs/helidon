<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2cSwr1" title="原文 : Micrometer Metrics">マイクロメーター・メトリクス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.jSYWv" title="原文 : Helidon MP simplifies how you can use Micrometer for application-specific metrics:">Helidon MPを使用すると、アプリケーション固有のメトリクスにマイクロメーターを使用する方法が簡略化されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3NPfdS" title="原文 : The endpoint /micrometer: A configurable endpoint that exposes metrics according to which Micrometer meter registry responds to the HTTP request.">エンドポイント<code>/micrometer</code>: HTTPリクエストに応答するマイクロメーター・レジストリに従ってメトリクスを公開する構成可能なエンドポイント。</span></p>

</li>
<li>
<p><span class="merged" id="all.4bSPF4" title="原文 : The Micrometer annotations @Timed and @Counted.">Micrometer注釈<code>@Timed</code>および<code>@Counted</code>。</span></p>

</li>
<li>
<p><span class="merged" id="all.2PoLMM" title="原文 : Configuration to tailor the Prometheus and other Micrometer meter registries.">Prometheusおよびその他のマイクロメーター・レジストリを調整するための構成。</span></p>

</li>
</ul>
<p><span class="merged" id="all.3ABfvE" title="原文 : In Helidon 2.5.4, Micrometer support is separate from the Helidon MP metrics API and the built-in Helidon metrics.">Helidon 2.5.4では、マイクロメーターのサポートは、Helidon MPメトリクスAPIおよび組込みHelidonメトリクスとは異なります。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.3"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4JnU1V" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存関係を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-micrometer-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1s14Rr.spl1" title="原文 : Micrometer supports different types of meter registries which have different output styles and formats.">マイクロメーターでは、異なる出力形式および書式を持つ異なるタイプのメーター・レジストリがサポートされています。</span> <span class="merged" id="all.1s14Rr.spl2" title="原文 : Helidon provides built-in support for the Prometheus meter registry.">Helidonでは、Prometheusメーター・レジストリの組込みサポートが提供されます。</span> <span class="merged" id="all.1s14Rr.spl3" title="原文 : To use other meter registry types, you will need to add dependencies for them to your pom.xml and, optionally, add configuration to set them up as you wish.">他のメーター・レジストリ・タイプを使用するには、それらの依存関係を<code>pom.xml</code>に追加し、必要に応じて構成を追加して設定する必要があります。</span> </p>

</div>

<h2 id="_using_micrometer_in_your_application"><span class="merged" id="all.3CP7lN" title="原文 : Using Micrometer in Your Application">アプリケーションでのマイクロメーターの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1omiUk" title="原文 : Add the Micrometer @Timed and @Counted annotations to methods in your application.">Micrometer <code>@Timed</code>および<code>@Counted</code>注釈をアプリケーションのメソッドに追加します。</span></p>

<p><span class="merged" id="all.2XPEKO" title="原文 : The examples below enhance the Helidon MP QuickStart application to track (by time and invocation count) all GET methods and to count all requests for a personalized greeting.">次の例では、Helidon MP QuickStartアプリケーションを拡張して、すべての<code>GET</code>メソッドを追跡し(時間と呼出し数で)、パーソナライズされた挨拶のすべてのリクエストをカウントします。</span></p>


<h3 id="_add_micrometer_annotations"><span class="merged" id="all.4T5KrO" title="原文 : Add Micrometer annotations">マイクロメーター注釈の追加</span></h3>
<div class="section">
<markup
lang="java"
title="Adding Micrometer annotations to JAX-RS resource <code>GET</code> methods"
>import io.micrometer.core.annotation.Counted;
import io.micrometer.core.annotation.Timed;
    <span class="conum" data-value="1" />
    private static final String PERSONALIZED_GETS_COUNTER_NAME = "personalizedGets";
    private static final String PERSONALIZED_GETS_COUNTER_DESCRIPTION = "Counts personalized GET operations";
    private static final String GETS_TIMER_NAME = "allGets";
    private static final String GETS_TIMER_DESCRIPTION = "Tracks all GET operations";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Timed(value = GETS_TIMER_NAME, description = GETS_TIMER_DESCRIPTION, histogram = true) <span class="conum" data-value="2" />
    public JsonObject getDefaultMessage() {
        return createResponse("World");
    }

    @Path("/{name}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Counted(value = PERSONALIZED_GETS_COUNTER_NAME, description = PERSONALIZED_GETS_COUNTER_DESCRIPTION) <span class="conum" data-value="3" />
    @Timed(value = GETS_TIMER_NAME, description = GETS_TIMER_DESCRIPTION, histogram = true) <span class="conum" data-value="2" />
    public JsonObject getMessage(@PathParam("name") String name) {
        return createResponse(name);
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1u3ZKI" title="原文 : Declare constants used in annotating multiple methods.">複数のメソッドに注釈を付けるときに使用する定数を宣言します。</span></li>
<li data-value="2"><span class="merged" id="all.2boTtY" title="原文 : Use @Timed to time and count both GET methods."><code>@Timed</code>を使用して、両方の<code>GET</code>メソッドに時間をかけてカウントします。</span></li>
<li data-value="3"><span class="merged" id="all.2N8Q85" title="原文 : Use @Counted to count the accesses to the GET method that returns a personalized greeting."><code>@Counted</code>を使用して、パーソナライズされた挨拶を返す<code>GET</code>メソッドへのアクセスをカウントします。</span></li>
</ul>
</div>

<h3 id="_using_the_helidon_provided_micrometer_meterregistry_from_code"><span class="merged" id="all.1VtEGz" title="原文 : Using the Helidon-provided Micrometer MeterRegistry from Code">コードからのHelidon提供のマイクロメーター<code>MeterRegistry</code>の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1I0LYl" title="原文 : In addition to annotating your methods, you can create, look up, and update metrics explicitly in your code.">メソッドに注釈を付ける以外に、コード内でメトリクスを明示的に作成、検索および更新できます。</span></p>

<p><span class="merged" id="all.4Y8Ebi" title="原文 : Add the following injection to a bean:">次のインジェクションをBeanに追加します:</span></p>

<markup
lang="java"
title="Inject the <code>MeterRegistry</code>"
>@Inject
private MeterRegistry registry;</markup>

<p><span class="merged" id="all.1lYlov.spl1" title="原文 : Helidon automatically injects a reference to the MeterRegistry it manages into your code.">Helidonは、管理する<code>MeterRegistry</code>への参照をコードに自動的にインジェクトします。</span> <span class="merged" id="all.1lYlov.spl2" title="原文 : Your code can use the normal Micrometer API with this registry to create, find, update, and even delete meters.">コードでは、このレジストリで通常のMicrometer APIを使用して、メーターを作成、検索、更新および削除できます。</span> </p>

</div>

<h3 id="_overriding_defaults_for_built_in_meter_registry_types"><span class="merged" id="all.NHdNc" title="原文 : Overriding Defaults for Built-in Meter Registry Types">組込みメーター・レジストリ・タイプのデフォルトの上書き</span></h3>
<div class="section">
<p><span class="merged" id="all.2mR6lq.spl1" title="原文 : Unless you specify otherwise, Helidon uses defaults for any built-in Micrometer meter registry.">特に指定しないかぎり、Helidonでは組込みマイクロメーター・レジストリのデフォルトが使用されます。</span> <span class="merged" id="all.2mR6lq.spl2" title="原文 : For example, Helidon configures the built-in Prometheus registry using PrometheusConfig.DEFAULT.">たとえば、Helidonは、<code>PrometheusConfig.DEFAULT</code>を使用して組込みPrometheusレジストリを構成します。</span> </p>

<p><span class="merged" id="all.1nRCim" title="原文 : To use configuration to control the selection and behavior of Helidon&rsquo;s built-in Micrometer meter registries, include in your configuration (such as application.yaml) a micrometer.builtin-registries section.">構成を使用してHelidonの組込みマイクロメーター・レジストリの選択および動作を制御するには、構成(<code>application.yaml</code>など)に<code>micrometer.builtin-registries</code>セクションを含めます。</span></p>

<markup
lang="yaml"
title="Enroll Prometheus built-in meter registry using default configuration"
>micrometer:
  builtin-registries:
    - type: prometheus</markup>

<markup
lang="yaml"
title="Enroll Prometheus built-in meter registry with non-default configuration"
>micrometer:
  builtin-registries:
    - type: prometheus
      prefix: myPrefix</markup>

<p><span class="merged" id="all.iHBMM" title="原文 : Note that the first config example is equivalent to the default Helidon Micrometer behavior; Helidon by default supports the Prometheus meter registry.">最初の構成例は、デフォルトのHelidon Micrometerの動作と同じです。Helidonでは、デフォルトでPrometheusメーター・レジストリがサポートされています。</span></p>

<p><span class="merged" id="all.8wLc7.spl1" title="原文 : The configuration keys that are valid for the builtin-registries child entries depend on the type of Micrometer meter registry."><code>builtin-registries</code>の子エントリに対して有効な構成キーは、マイクロメーター・レジストリのタイプによって異なります。</span> <span class="merged" id="all.8wLc7.spl2" title="原文 : For example, the Prometheus meter registry supports the prefix configuration setting but other meter registries might not and might support other settings.">たとえば、Prometheusメーター・レジストリでは<code>prefix</code>構成設定がサポートされていますが、他のメーター・レジストリではサポートされていない場合や他の設定をサポートしている場合があります。</span> <span class="merged" id="all.8wLc7.spl3" title="原文 : Refer to the documentation for the meter registry you want to configure to find out what items apply to that registry type.">構成するメーター・レジストリのドキュメントを参照して、そのレジストリ・タイプに適用される項目を確認してください。</span> </p>

<p><span class="merged" id="all.1u0oLV" title="原文 : Helidon does not validate the configuration keys you specify for meter registries.">Helidonでは、メーター・レジストリに指定した構成キーはバリデートされません。</span></p>

</div>
</div>

<h2 id="_accessing_the_helidon_micrometer_endpoint"><span class="merged" id="all.1dI07J" title="原文 : Accessing the Helidon Micrometer Endpoint">Helidon Micrometerエンドポイントへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.1iGOOf.spl1" title="原文 : By default, Helidon Micrometer integration exposes the /micrometer endpoint.">デフォルトでは、Helidon Micrometer統合は<code>/micrometer</code>エンドポイントを公開します。</span> <span class="merged" id="all.1iGOOf.spl2" title="原文 : You can override this using the micrometer.web-context configuration key.">これは、<code>micrometer.web-context</code>構成キーを使用してオーバーライドできます。</span> </p>

<p><span class="merged" id="all.3q6WHa.spl1" title="原文 : Within Helidon, each type of meter registry is paired with code that examines the incoming HTTP request and decides whether the request matches up with the associated meter registry.">Helidon内では、各タイプのメーター・レジストリは、着信HTTPリクエストを調査し、リクエストが関連するメーター・レジストリと一致するかどうかを判断するコードとペアになります。</span> <span class="merged" id="all.3q6WHa.spl2" title="原文 : The first pairing that accepts the request returns the response.">リクエストを受け入れる最初のペアがレスポンスを返します。</span> </p>

</div>
</doc-view>
