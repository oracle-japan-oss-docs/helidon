<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2cSwr1.1" title="原文 : Micrometer Metrics">マイクロメーター・メトリクス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.EZ8Xh" title="原文 : Helidon SE simplifies how you can use Micrometer for application-specific metrics:">Helidon SEでは、アプリケーション固有のメトリクスにマイクロメーターを使用する方法が簡略化されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3NPfdS.1" title="原文 : The endpoint /micrometer: A configurable endpoint that exposes metrics according to which Micrometer meter registry responds to the HTTP request.">エンドポイント<code>/micrometer</code>: HTTPリクエストに応答するマイクロメーター・レジストリに従ってメトリクスを公開する構成可能なエンドポイント。</span></p>

</li>
<li>
<p><span class="merged" id="all.ZtPXQ" title="原文 : The MicrometerSupport class: A convenience class for enrolling Micrometer meter registries your application creates explicitly or for selecting which built-in Micrometer meter registries to use."><code>MicrometerSupport</code>クラス: アプリケーションで明示的に作成するマイクロメーター・レジストリを登録するための便利なクラス、または使用する組込みマイクロメーター・レジストリを選択するための便利なクラス。</span></p>

</li>
<li>
<p><span class="merged" id="all.2PoLMM.1" title="原文 : Configuration to tailor the Prometheus and other Micrometer meter registries.">Prometheusおよびその他のマイクロメーター・レジストリを調整するための構成。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1N4zdO" title="原文 : In Helidon 2.3.1, Micrometer support is separate from the Helidon SE metrics API and the built-in Helidon metrics.">Helidon 2.3.1では、マイクロメーターのサポートは、Helidon SEメトリクスAPIおよび組込みHelidonメトリクスとは異なります。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.6"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4JnU1V.2" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存関係を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-micrometer&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2wpW3o.spl1" title="原文 : Micrometer supports different types of meter registries which have different output styles and formats.">マイクロメーターでは、異なる出力形式および書式を持つ異なるタイプのメーター・レジストリがサポートされています。</span> <span class="merged" id="all.2wpW3o.spl2" title="原文 : Helidon provides built-in support for the Prometheus meter registry.">Helidonでは、Prometheusメーター・レジストリの組込みサポートが提供されます。</span> <span class="merged" id="all.2wpW3o.spl3" title="原文 : To use other meter registry types, you will need to add dependencies for them to your pom.xml and, optionally, add code to your application or add configuration to set them up as you wish.">他のメーター・レジストリ・タイプを使用するには、それらの依存関係を<code>pom.xml</code>に追加し、必要に応じてアプリケーションにコードを追加するか、構成を追加して必要に応じて設定する必要があります。</span> </p>

</div>

<h2 id="_using_micrometer_in_your_application"><span class="merged" id="all.3CP7lN.1" title="原文 : Using Micrometer in Your Application">アプリケーションでのマイクロメーターの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1NsLJL" title="原文 : You need to make two types of changes to your application to use Helidon SE integration with Micrometer:">Helidon SEとMicrometerの統合を使用するには、アプリケーションに次の2つのタイプの変更を加える必要があります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1kakzv" title="原文 : Register an instance of MicrometerSupport with the web server."><a href="./apidocs/io.helidon.integrations.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.html" id="" target="_blank" ><code>MicrometerSupport</code></a>のインスタンスをwebサーバーに登録します。</span>

</li>
<li>
<span class="merged" id="all.3m3rD5" title="原文 : Create meters using the meter registry which MicrometerSupport manages and update those meters."><code>MicrometerSupport</code>が管理するメーター・レジストリを使用してメーターを作成し、それらのメーターを更新します。</span>

</li>
</ol>

<h3 id="_register_an_instance_of_micrometersupport_with_the_web_server"><span class="merged" id="all.27lXEO" title="原文 : Register an Instance of MicrometerSupport with the Web Server">Webサーバーへの<code>MicrometerSupport</code>のインスタンスの登録</span></h3>
<div class="section">
<markup
lang="java"
title="マイクロメーター・サポートの初期化"
>import io.helidon.integrations.micrometer.MicrometerSupport;
//...
MicrometerSupport micrometerSupport = MicrometerSupport.create(); <span class="conum" data-value="1" />

Routing.builder()
                .register(micrometerSupport) <span class="conum" data-value="2" />
                .register("/myapp", new MyService(micrometerSupport.registry())) <span class="conum" data-value="3" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.47nXVb" title="原文 : Create the MicrometerSupport instance, using the default built-in Prometheus meter registry.">デフォルトの組込みPrometheusメーター・レジストリを使用して、<code>MicrometerSupport</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.2eDmX4" title="原文 : Register the support instance as a service; by default, MicrometerSupport exposes the endpoint as /micrometer.">サポート・インスタンスをサービスとして登録します。デフォルトでは、<code>MicrometerSupport</code>はエンドポイントを<code>/micrometer</code>として公開します。</span></li>
<li data-value="3"><span class="merged" id="all.1JU9sI" title="原文 : Pass the MicrometerSupport object&rsquo;s meter registry to your service for use in creating and updating meters.">メーターの作成および更新に使用するために、<code>MicrometerSupport</code>オブジェクトのメーター・レジストリをサービスに渡します。</span></li>
</ul>
</div>

<h3 id="_create_and_update_meters_in_your_application_service"><span class="merged" id="all.RL9Un" title="原文 : Create and Update Meters in your Application Service">アプリケーション・サービスでのメーターの作成および更新</span></h3>
<div class="section">
<markup
lang="java"
title="<code>Counter</code>の定義および使用"
>import io.micrometer.core.instrument.Counter;

public class MyService implements Service {

    private final Counter requestCounter;

    public MyService(MicrometerMeterRegistry registry) {
        requestCounter = registry.counter("allRequests"); <span class="conum" data-value="1" />
        // ...
    }

    @Override
    public void update(Routing.Rules rules) {
        rules
            .any(this::countRequests) <span class="conum" data-value="2" />
            .get("/", this::myGet);
    }

    private void countRequests(ServerRequest request, ServerResponse response) {
        requestCounter.increment(); <span class="conum" data-value="3" />
        request.next();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Grn1u" title="原文 : Use the Micrometer meter registry to create the request counter.">マイクロメーター・レジストリを使用して、リクエスト・カウンタを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.4CrQXE" title="原文 : Add routing for any request to invoke the method which counts requests by updating the counter.">カウンタを更新してリクエストをカウントするメソッドを起動するリクエストのルーティングを追加します。</span></li>
<li data-value="3"><span class="merged" id="all.DhVU7" title="原文 : Update the counter and delegate the rest of the request processing to the next handler in the chain.">カウンタを更新し、残りのリクエスト処理をチェーン内の次のハンドラに委任します。</span></li>
</ul>
<p><span class="merged" id="all.1adNBQ.spl1" title="原文 : The example above enrolls the built-in Prometheus meter registry with the default Prometheus registry configuration.">前述の例では、組込みのPrometheusメーター・レジストリをデフォルトのPrometheusレジストリ構成に登録します。</span> <span class="merged" id="all.1adNBQ.spl2" title="原文 : You can change the default setup for built-in registries, and you can enroll other meter registries your application creates itself.">組込みレジストリのデフォルト設定を変更したり、アプリケーションで独自に作成された他のメーター・レジストリを登録できます。</span> </p>

</div>

<h3 id="_overriding_defaults_for_built_in_meter_registry_types"><span class="merged" id="all.NHdNc.1" title="原文 : Overriding Defaults for Built-in Meter Registry Types">組込みメーター・レジストリ・タイプのデフォルトの上書き</span></h3>
<div class="section">
<p><span class="merged" id="all.2mR6lq.1.spl1" title="原文 : Unless you specify otherwise, Helidon uses defaults for any built-in Micrometer meter registry.">特に指定しないかぎり、Helidonでは組込みマイクロメーター・レジストリのデフォルトが使用されます。</span> <span class="merged" id="all.2mR6lq.1.spl2" title="原文 : For example, Helidon configures the built-in Prometheus registry using PrometheusConfig.DEFAULT.">たとえば、Helidonは、<code>PrometheusConfig.DEFAULT</code>を使用して組込みPrometheusレジストリを構成します。</span> </p>

<p><span class="merged" id="all.4KN3sB" title="原文 : You can override these defaults in either of two ways:">これらのデフォルトは、次のいずれかの方法で上書きできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.78rTQ" title="原文 : Using the MicrometerSupport.Builder class"><a href="./apidocs/io.helidon.integrations.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.Builder.html" id="" target="_blank" ><code>MicrometerSupport.Builder</code></a>クラスの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.oVOmk" title="原文 : Using configuration">構成の使用</span></p>

</li>
</ul>

<h4 id="_using_micrometersupport_builder"><span class="merged" id="all.vIQmR" title="原文 : Using MicrometerSupport.Builder"><code>MicrometerSupport.Builder</code>の使用</span></h4>
<div class="section">
<p><span class="merged" id="all.4Ka2Jc" title="原文 : Use the MicrometerSupport.Builder class to set up Micrometer support however your application needs."><code>MicrometerSupport.Builder</code>クラスを使用して、アプリケーションに必要なMicrometerサポートを設定します。</span></p>

<p><span class="merged" id="all.4Dy6f8" title="原文 : The builder lets you:">ビルダーを使用すると、次のことができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Ca06J" title="原文 : Provide your own Micrometer meter registry configuration that MicrometerSupport uses to create a built-in meter registry, or"><code>MicrometerSupport</code>で組込みメーター・レジストリの作成に使用する独自のマイクロメーター・レジストリ構成を指定</span></p>

</li>
<li>
<p><span class="merged" id="all.1Dxf9W" title="原文 : Instantiate a Micrometer meter registry yourself, configured however you want, and add it to the MicrometerSupport object&rsquo;s collection of meter registries">必要に応じて自分で構成したマイクロメーター・レジストリをインスタンス化し、<code>MicrometerSupport</code>オブジェクトのメーター・レジストリのコレクションに追加</span></p>

</li>
</ul>
<markup
lang="java"
title="<code>MicrometerSupport.Builder</code>を使用した組込みメーター・レジストリのデフォルトのオーバーライド"
>PrometheusConfig myPrometheusConfig = ...; <span class="conum" data-value="1" />
MicrometerSupport support = MicrometerSupport.builder()
                .enrollBuiltInRegistry( <span class="conum" data-value="2" />
                        MicrometerSupport.BuiltInRegistryType.PROMETHEUS,
                        myPrometheusConfig)
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4OURCr" title="原文 : Create the meter registry configuration however you need.">必要に応じて、メーター・レジストリ構成を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.54Qmz" title="原文 : Enroll the PROMETHEUS built-in registry type with your custom configuration."><code>PROMETHEUS</code>組込みレジストリ・タイプをカスタム構成に登録します。</span></li>
</ul>
</div>

<h4 id="_using_configuration"><span class="merged" id="all.2uYVSl" title="原文 : Using Configuration">構成の使用</span></h4>
<div class="section">
<p><span class="merged" id="all.1nRCim.1" title="原文 : To use configuration to control the selection and behavior of Helidon&rsquo;s built-in Micrometer meter registries, include in your configuration (such as application.yaml) a micrometer.builtin-registries section.">構成を使用してHelidonの組込みマイクロメーター・レジストリの選択および動作を制御するには、構成(<code>application.yaml</code>など)に<code>micrometer.builtin-registries</code>セクションを含めます。</span></p>

<markup
lang="yaml"
title="デフォルト構成を使用したPrometheus組込みメーター・レジストリの登録"
>micrometer:
  builtin-registries:
    - type: prometheus</markup>

<markup
lang="yaml"
title="Prometheus組込みメーター・レジストリをデフォルト以外の構成に登録"
>micrometer:
  builtin-registries:
    - type: prometheus
      prefix: myPrefix</markup>

<p><span class="merged" id="all.iHBMM.1" title="原文 : Note that the first config example is equivalent to the default Helidon Micrometer behavior; Helidon by default supports the Prometheus meter registry.">最初の構成例は、デフォルトのHelidon Micrometerの動作と同じです。Helidonでは、デフォルトでPrometheusメーター・レジストリがサポートされています。</span></p>

<p><span class="merged" id="all.8wLc7.1.spl1" title="原文 : The configuration keys that are valid for the builtin-registries child entries depend on the type of Micrometer meter registry."><code>builtin-registries</code>の子エントリに対して有効な構成キーは、マイクロメーター・レジストリのタイプによって異なります。</span> <span class="merged" id="all.8wLc7.1.spl2" title="原文 : For example, the Prometheus meter registry supports the prefix configuration setting but other meter registries might not and might support other settings.">たとえば、Prometheusメーター・レジストリでは<code>prefix</code>構成設定がサポートされていますが、他のメーター・レジストリではサポートされていない場合や他の設定をサポートしている場合があります。</span> <span class="merged" id="all.8wLc7.1.spl3" title="原文 : Refer to the documentation for the meter registry you want to configure to find out what items apply to that registry type.">構成するメーター・レジストリのドキュメントを参照して、そのレジストリ・タイプに適用される項目を確認してください。</span> </p>

<p><span class="merged" id="all.1u0oLV.1" title="原文 : Helidon does not validate the configuration keys you specify for meter registries.">Helidonでは、メーター・レジストリに指定した構成キーはバリデートされません。</span></p>

</div>
</div>

<h3 id="_enrolling_other_micrometer_meter_registries"><span class="merged" id="all.3kreSx" title="原文 : Enrolling other Micrometer meter registries">その他のマイクロメーター・レジストリの登録</span></h3>
<div class="section">
<p><span class="merged" id="all.3syRZN" title="原文 : To create additional types of registries and enroll them with MicrometerSupport, you need to:">追加のタイプのレジストリを作成して<code>MicrometerSupport</code>に登録するには、次の手順を実行する必要があります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1VTa1S" title="原文 : Write a Handler "><code>Handler</code>の記述<br></span>
<p><span class="merged" id="all.mgdCq.spl1" title="原文 : Each meter registry has its own way of producing output.">各メーター・レジストリには、独自の出力生成方法があります。</span> <span class="merged" id="all.mgdCq.spl2" title="原文 : Write your handler so that it has a reference to the meter registry it should use and so that its accept method sets the payload in the HTTP response using the registry&rsquo;s mechanism for creating output.">ハンドラが使用するメーター・レジストリを参照し、その<code>accept</code>メソッドが出力を作成するためのレジストリのメカニズムを使用してHTTPレスポンスにペイロードを設定するように、ハンドラを記述します。</span> </p>

</li>
<li>
<span class="merged" id="all.2Cchzs" title="原文 : Write a Function which accepts a ServerRequest and returns an Optional&lt;Handler&gt; "><code>ServerRequest</code>を受け入れて<code>Optional&lt;Handler></code>を返す<code>Function</code>の記述<br></span>
<p><span class="merged" id="all.184Hvm.spl1" title="原文 : In general, your function looks at the request-​the Content-Type, query parameters, etc.--to decide whether your handler should respond to the request.">一般に、関数はリクエスト(<code>Content-Type</code>、問合せパラメータなど)を参照して、ハンドラがリクエストに応答するかどうかを決定します。</span> <span class="merged" id="all.184Hvm.spl2" title="原文 : If so, your function should instantiate your Handler and return an Optional.of(theHandlerInstance); otherwise, your function should return Optional.empty(). ">その場合、ファンクションは<code>Handler</code>をインスタンス化し、<code>Optional.of(theHandlerInstance)</code>を戻します。それ以外の場合、ファンクションは<code>Optional.empty()</code>を戻す必要があります。<br></span> </p>

<p><span class="merged" id="all.1JnQTz.spl1" title="原文 : When MicrometerSupport receives a request, it invokes the functions of all the enrolled registries, stopping as soon as one function provides a handler."><code>MicrometerSupport</code>は、リクエストを受信すると、登録されているすべてのレジストリの関数を呼び出し、いずれかの関数がハンドラを提供するとすぐに停止します。</span> <span class="merged" id="all.1JnQTz.spl2" title="原文 : MicrometerSupport then delegates to that handler to create and send the response.">その後、<code>MicrometerSupport</code>はそのハンドラに委任して、レスポンスを作成および送信します。</span> </p>

</li>
<li>
<span class="merged" id="all.2VpWDm" title="原文 : Pass the Handler and Function to the MicrometerSupport.enrollRegistry method to enroll them "><code>Handler</code>および<code>Function</code>を<code>MicrometerSupport.enrollRegistry</code>メソッドに渡して登録<br></span>
<markup
lang="java"
title="独自のマイクロメーター・レジストリの作成および登録"
>MeterRegistry myRegistry = new PrometheusMeterRegistry(myPrometheusConfig); <span class="conum" data-value="1" />
MicrometerSupport support = MicrometerSupport.builder()
                .enrollRegistry(myRegistry,
                               request -&gt; request <span class="conum" data-value="2" />
                                    .headers()
                                    .bestAccepted(MediaType.TEXT_PLAIN).isPresent()
                                    ? Optional.of((req, resp) -&gt;
                                            resp.send(myRegistry.scrape())) <span class="conum" data-value="3" />
                                    : Optional.empty())
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.29DQWp.spl1" title="原文 : Create the meter registry.">メーター・レジストリを作成します。</span> <span class="merged" id="all.29DQWp.spl2" title="原文 : This example uses a Prometheus registry but it can be any extension of MeterRegistry.">この例ではPrometheusレジストリを使用していますが、<code>MeterRegistry</code>の任意の拡張にすることができます。</span> </li>
<li data-value="2"><span class="merged" id="all.3ZKltc" title="原文 : Provide the function that checks if the ServerRequest accepts content that your meter registry can produce (e.g., either text/plain or unspecified is normally an indication for Prometheus-style output) and returns the appropriate Optional&lt;Handler&gt;."><a href="{javadoc-base-url-webserver}/ServerRequest.html" id="" target="_blank" ><code>ServerRequest</code></a>がメーター・レジストリで生成可能なコンテンツを受け入れ(たとえば、<code>text/plain</code>または未指定は通常、プロンプト・スタイルの出力を示します)、適切な<code>Optional&lt;<a href="{:javadoc-base-url-webserver}/Handler.html" id="" target="_blank" ><code>Handler</code></a> > </code>を返すファンクションを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.lI7eO" title="原文 : A very simple in-line Handler that sets the response entity from the Prometheus registry&rsquo;s scrape() method.">Prometheusレジストリの<code>scrape()</code>メソッドからレスポンス・エンティティを設定する非常に単純なインライン<code>Handler</code>。</span></li>
</ul>
</li>
</ol>
</div>
</div>

<h2 id="_accessing_the_helidon_micrometer_endpoint"><span class="merged" id="all.1dI07J.1" title="原文 : Accessing the Helidon Micrometer Endpoint">Helidon Micrometerエンドポイントへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.OJXRk.spl1" title="原文 : By default, Helidon Micrometer integration exposes the /micrometer endpoint.">デフォルトでは、Helidon Micrometer統合は<code>/micrometer</code>エンドポイントを公開します。</span> <span class="merged" id="all.OJXRk.spl2" title="原文 : You can override this using the Builder or the micrometer.web-context configuration key.">これは、<code>Builder</code>または<code>micrometer.web-context</code>構成キーを使用してオーバーライドできます。</span> </p>

<p><span class="merged" id="all.2Y2Hne.spl1" title="原文 : When MicrometerSupport receives a request at the endpoint, it looks for the first enrolled meter registry for which the corresponding Function&lt;ServerRequest, Optional&lt;Handler&gt;&gt; returns a non-empty Handler."><code>MicrometerSupport</code>は、エンドポイントでリクエストを受信すると、対応する<code>Function&lt;ServerRequest, Optional&lt;Handler>></code>が空でない<code>Handler</code>を返す最初の登録済メーター・レジストリを検索します。</span> <span class="merged" id="all.2Y2Hne.spl2" title="原文 : Helidon invokes that Handler which must retrieve the metrics output from its meter registry and set and send the response.">Helidonは、メーター・レジストリからメトリクス出力を取得し、レスポンスを設定して送信する必要がある<code>Handler</code>を起動します。</span> <span class="merged" id="all.2Y2Hne.spl3" title="原文 : Note that the Handler which your function returns typically has a reference to the meter registry it will use in preparing the response.">通常、関数が返す<code>Handler</code>には、レスポンスの準備に使用するメーター・レジストリへの参照があります。</span> </p>

</div>
</doc-view>
