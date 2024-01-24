<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.18"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.17" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.13" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.10" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.9" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.12" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.14" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.10" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.17"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.jSYWv" title="原文 : Helidon MP simplifies how you can use Micrometer for application-specific metrics:">Helidon MPを使用すると、アプリケーション固有のメトリクスにマイクロメーターを使用する方法が簡略化されます:</span></p>

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

<p><span class="merged" id="all.NShYb" title="原文 : In Helidon 4.0.2, Micrometer support is separate from the Helidon MP metrics API and the built-in Helidon metrics.">Helidon 4.0.2では、マイクロメーターのサポートは、Helidon MPメトリクスAPIおよび組込みのHelidonメトリクスとは異なります。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.15"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.4eQpnm" title="原文 : To enable Micrometer support add the following dependency to your project’s pom.xml (see Managing Dependencies).">Micrometerサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-micrometer-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1s14Rr.spl1" title="原文 : Micrometer supports different types of meter registries which have different output styles and formats.">マイクロメーターでは、異なる出力形式および書式を持つ異なるタイプのメーター・レジストリがサポートされています。</span> <span class="merged" id="all.1s14Rr.spl2" title="原文 : Helidon provides built-in support for the Prometheus meter registry.">Helidonでは、Prometheusメーター・レジストリの組込みサポートが提供されます。</span> <span class="merged" id="all.1s14Rr.spl3" title="原文 : To use other meter registry types, you will need to add dependencies for them to your pom.xml and, optionally, add configuration to set them up as you wish.">他のメーター・レジストリ・タイプを使用するには、それらの依存関係を<code>pom.xml</code>に追加し、必要に応じて構成を追加して設定する必要があります。</span> </p>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.11"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.kmzi2" title="原文 : Your application registers and updates Micrometer meters using annotations or direct use of the Micrometer API.">アプリケーションは、Micrometer APIの注釈または直接使用を使用してMicrometerメーターを登録および更新します。</span></p>

<p><span class="merged" id="all.2FaTuI" title="原文 : Your users retrieve Micrometer meters using an endpoint which Helidon creates automatically.">ユーザーは、Helidonによって自動的に作成されるエンドポイントを使用してMicrometerメーターを取得します。</span></p>


<h3 id="_registering_and_updating_meters"><span class="merged" id="all.3IJSx7" title="原文 : Registering and Updating Meters">メーターの登録および更新</span></h3>
<div class="section">
<p><span class="merged" id="all.2XwhWd.spl1" title="原文 : To use Micrometer support, you can simply add the Micrometer @Timed and @Counted annotations to methods in your application.">Micrometerサポートを使用するには、アプリケーションのメソッドにMicrometer <code>@Timed</code>および<code>@Counted</code>注釈を追加するだけです。</span> <span class="merged" id="all.2XwhWd.spl2" title="原文 : Helidon automatically registers those meters with the Micrometer composite MeterRegistry.">Helidonは、これらのメーターを自動的にMicrometerコンポジット<code>MeterRegistry</code>に登録します。</span> </p>

<p><span class="merged" id="all.tQsNg.spl1" title="原文 : In addition to annotating your methods, your code can create, look up, and update metrics programmatically using the Micrometer MeterRegistry API.">メソッドの注釈付けに加えて、コードはMicrometer <code>MeterRegistry</code> APIを使用してプログラム的にメトリクスを作成、検索および更新できます。</span> <span class="merged" id="all.tQsNg.spl2" title="原文 : The Micrometer concepts document provides a good starting point for learning how to use Micrometer’s interfaces and classes."><a href="https://micrometer.io/docs/concepts" target="_blank">「マイクロメーター概念ドキュメント」</a>は、Micrometerのインタフェースおよびクラスの使用方法を学習するためのよい出発点です。</span> </p>

</div>


<h3 id="_accessing_the_helidon_micrometer_endpoint"><span class="merged" id="all.1dI07J" title="原文 : Accessing the Helidon Micrometer Endpoint">Helidon Micrometerエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.26XEfQ" title="原文 : Helidon MP Micrometer integration automatically creates a REST endpoint which clients can access to retrieve Micrometer metrics, by default at the /micrometer endpoint.">Helidon MP Micrometer統合は、クライアントが<code>/micrometer</code>エンドポイントでデフォルトでMicrometerメトリクスを取得するためにアクセスできるRESTエンドポイントを自動的に作成します。</span></p>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.9"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3FeisV" title="原文 : To incorporate Micrometer metrics into your code, you will work with two APIs: a small one specific to Helidon, and the Micrometer API itself.">Micrometerのメトリクスをコードに組み込むには、2つのAPIを操作: Helidonに固有の小さいもの、およびMicrometer API自体。</span></p>


<h3 id="_the_helidon_micrometer_api"><span class="merged" id="all.3vX2XB" title="原文 : The Helidon Micrometer API">The Helidon Micrometer API</span></h3>
<div class="section">
<p><span class="merged" id="all.4BcyFi" title="原文 : Helidon automatically registers and updates meters associated with methods in your service where you add the Micrometer annotations.">Helidonは、Micrometer注釈を追加するサービスのメソッドに関連付けられたメーターを自動的に登録および更新します。</span></p>

<p><span class="merged" id="all.3nOwHx.spl1" title="原文 : If you want to use the Micrometer MeterRegistry directly from your own code, simply @Inject the MeterRegistry into one of your REST resource classes or any other bean which CDI recognizes.">マイクロメーター<code>MeterRegistry</code>を独自のコードから直接使用する場合は、<code>MeterRegistry</code>をRESTリソース・クラスまたはCDIが認識する他のBeanのいずれかに<code>@Inject</code>するだけです。</span> <span class="merged" id="all.3nOwHx.spl2" title="原文 : Helidon injects the same Micrometer MeterRegistry that it uses for handling Micrometer annotations you add to your code.">Helidonは、コードに追加したMicrometer注釈に使用するMicrometerの<code>MeterRegistry</code>をインジェクトします。</span> </p>

</div>


<h3 id="_the_micrometer_api"><span class="merged" id="all.2fn5Ey" title="原文 : The Micrometer API">マイクロメーターAPI</span></h3>
<div class="section">
<p><span class="merged" id="all.RoOQ6.spl1" title="原文 : Your code can create, look up, and update metrics programmatically using the Micrometer MeterRegistry API.">コードは、Micrometer <code>MeterRegistry</code> APIを使用してメトリクスをプログラムで作成、参照および更新できます。</span> <span class="merged" id="all.RoOQ6.spl2" title="原文 : The Micrometer concepts document provides a good starting point for learning how to use Micrometer’s interfaces and classes."><a href="https://micrometer.io/docs/concepts" target="_blank">「マイクロメーター概念ドキュメント」</a>は、Micrometerのインタフェースおよびクラスの使用方法を学習するためのよい出発点です。</span> </p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.13"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3Jzfcg" title="原文 : You can configure the Helidon Micrometer REST service as you can other built-in Helidon services by adding configuration settings under the micrometer top-level key.">Helidon Micrometer RESTサービスは、<code>micrometer</code>最上位キーに構成設定を追加することで、他の組込みHelidonサービスと同様に構成できます。</span></p>

<p><span class="merged" id="all.4EPY05.1" title="原文 : Type: io.helidon.integrations.micrometer.MicrometerFeature">タイプ: <a href="/apidocs/io.helidon.integrations.micrometer/io/helidon/integrations/micrometer/MicrometerFeature.html" target="_blank">io.helidon.integrations.micrometer.MicrometerFeature</a></span></p>

<markup
lang="text"
title="Config key"
>micrometer</markup>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.110"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.105" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.116"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.114"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.116"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.117"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.32ANVF.2"  title="原文: cross-origin-config"><code>cross-origin-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2cqsnT.6" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.38IWdR.2" title="原文 : Set the CORS config from the specified CrossOriginConfig object.">指定された<code>CrossOriginConfig</code>オブジェクトからCORS構成を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.5"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.243"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3P8Bb4.2" title="原文 : Set the root context for the REST API of the service.">サービスのREST APIのルート・コンテキストを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1cYY24.spl1" title="原文 : By default, Helidon Micrometer integration exposes the /micrometer endpoint.">デフォルトでは、Helidon Micrometer統合は<code>/micrometer</code>エンドポイントを公開します。</span> <span class="merged" id="all.1cYY24.spl2" title="原文 : You can override the path using the micrometer.web-context configuration key."><code>micrometer.web-context</code>構成キーを使用してパスをオーバーライドできます。</span> </p>

<markup
lang="properties"
title="Overriding the default Micrometer path"
>micrometer.web-context=my-micrometer</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.14"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4ZuRIb" title="原文 : Helidon MP includes an example application which uses Micrometer support.">Helidon MPには、Micrometerサポートを使用する<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/integrations/micrometer/mp" target="_blank">「サンプル・アプリケーション」</a>が含まれています。</span></p>

<p><span class="merged" id="all.3wV1Vw" title="原文 : The examples below take you step-by-step through the process of enhancing the Helidon MP QuickStart application to track (by time and invocation count) all GET methods and to count all requests for a personalized greeting.">次の例では、Helidon MP QuickStartアプリケーションを拡張して、すべての<code>GET</code>メソッドを追跡(時間と呼出しカウントによって)し、パーソナライズされたグリーティングのすべてのリクエストをカウントするプロセスを順を追って実行します。</span></p>


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


<h4 id="_overriding_defaults_for_built_in_meter_registry_types"><span class="merged" id="all.NHdNc" title="原文 : Overriding Defaults for Built-in Meter Registry Types">組込みメーター・レジストリ・タイプのデフォルトの上書き</span></h4>
<div class="section">
<p><span class="merged" id="all.2mR6lq.spl1" title="原文 : Unless you specify otherwise, Helidon uses defaults for any built-in Micrometer meter registry.">特に指定しないかぎり、Helidonでは組込みマイクロメーター・レジストリのデフォルトが使用されます。</span> <span class="merged" id="all.2mR6lq.spl2" title="原文 : For example, Helidon configures the built-in Prometheus registry using PrometheusConfig.DEFAULT.">たとえば、Helidonは、<code>PrometheusConfig.DEFAULT</code>を使用して組込みPrometheusレジストリを構成します。</span> </p>

<p><span class="merged" id="all.1nRCim" title="原文 : To use configuration to control the selection and behavior of Helidon’s built-in Micrometer meter registries, include in your configuration (such as application.yaml) a micrometer.builtin-registries section.">構成を使用してHelidonの組込みマイクロメーター・レジストリの選択および動作を制御するには、構成(<code>application.yaml</code>など)に<code>micrometer.builtin-registries</code>セクションを含めます。</span></p>

<markup
lang="properties"
title="Enroll Prometheus built-in meter registry using default configuration"
>micrometer.builtin-registries.0.type=prometheus</markup>

<markup
lang="properties"
title="Enroll Prometheus built-in meter registry with non-default configuration"
>micrometer.builtin-registries.0.type=prometheus
micrometer.builtin-registries.0.prefix=myPrefix</markup>

<p><span class="merged" id="all.iHBMM" title="原文 : Note that the first config example is equivalent to the default Helidon Micrometer behavior; Helidon by default supports the Prometheus meter registry.">最初の構成例は、デフォルトのHelidon Micrometerの動作と同じです。Helidonでは、デフォルトでPrometheusメーター・レジストリがサポートされています。</span></p>

<p><span class="merged" id="all.1Y1gXE.spl1" title="原文 : The configuration keys that are valid for the builtin-registries child entries depend on the type of Micrometer meter registry."><code>builtin-registries</code>の子エントリに対して有効な構成キーは、マイクロメーター・レジストリのタイプによって異なります。</span> <span class="merged" id="all.1Y1gXE.spl2" title="原文 : For example, support in Helidon for the Prometheus meter registry respects the prefix configuration setting but other meter registries might not and might support other settings.">たとえば、<a href="https://javadoc.io/doc/io.micrometer/micrometer-registry-prometheus/1.11.1/io/micrometer/prometheus/PrometheusConfig.html" target="_blank">「Prometheusメーター・レジストリ」</a>に対するHelidonのサポートは<code>prefix</code>構成設定を尊重しますが、他のメーター・レジストリは他の設定をサポートしていない場合があります。</span> <span class="merged" id="all.1Y1gXE.spl3" title="原文 : Refer to the documentation for the meter registry you want to configure to find out what items apply to that registry type.">構成するメーター・レジストリのドキュメントを参照して、そのレジストリ・タイプに適用される項目を確認してください。</span> </p>

<p><span class="merged" id="all.1u0oLV" title="原文 : Helidon does not validate the configuration keys you specify for meter registries.">Helidonでは、メーター・レジストリに指定した構成キーはバリデートされません。</span></p>

</div>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.12"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.1lIbmj" title="原文 : The Micrometer website describes the project as a whole and has links to more information."><a href="https://micrometer.io" target="_blank">「マイクロメーターのサイト」</a>はプロジェクト全体を記述し、詳細情報へのリンクを持ちます。</span></p>

</div>

</doc-view>
