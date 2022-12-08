<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.55"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.53" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.39" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.35" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.21" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.32" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.37" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.22" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.69"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.EZ8Xh" title="原文 : Helidon SE simplifies how you can use Micrometer for application-specific metrics:">Helidon SEでは、アプリケーション固有のメトリクスにマイクロメーターを使用する方法が簡略化されています:</span></p>

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

<p><span class="merged" id="all.3mlzDW" title="原文 : In Helidon 3.0.2, Micrometer support is separate from the Helidon SE metrics API and the built-in Helidon metrics.">Helidon 3.0.2では、マイクロメーターのサポートは、Helidon SEメトリクスAPIおよび組込みHelidonメトリクスとは異なります。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.50"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.4eQpnm.1" title="原文 : To enable Micrometer support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Micrometerサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-micrometer&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2wpW3o.spl1" title="原文 : Micrometer supports different types of meter registries which have different output styles and formats.">マイクロメーターでは、異なる出力形式および書式を持つ異なるタイプのメーター・レジストリがサポートされています。</span> <span class="merged" id="all.2wpW3o.spl2" title="原文 : Helidon provides built-in support for the Prometheus meter registry.">Helidonでは、Prometheusメーター・レジストリの組込みサポートが提供されます。</span> <span class="merged" id="all.2wpW3o.spl3" title="原文 : To use other meter registry types, you will need to add dependencies for them to your pom.xml and, optionally, add code to your application or add configuration to set them up as you wish.">他のメーター・レジストリ・タイプを使用するには、それらの依存関係を<code>pom.xml</code>に追加し、必要に応じてアプリケーションにコードを追加するか、構成を追加して必要に応じて設定する必要があります。</span> </p>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.54"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.kmzi2.1" title="原文 : Your application registers and updates Micrometer meters using annotations or direct use of the Micrometer API.">アプリケーションは、Micrometer APIの注釈または直接使用を使用してMicrometerメーターを登録および更新します。</span></p>

<p><span class="merged" id="all.2FaTuI.1" title="原文 : Your users retrieve Micrometer meters using an endpoint which Helidon creates automatically.">ユーザーは、Helidonによって自動的に作成されるエンドポイントを使用してMicrometerメーターを取得します。</span></p>


<h3 id="_registering_and_updating_meters"><span class="merged" id="all.3IJSx7.1" title="原文 : Registering and Updating Meters">メーターの登録および更新</span></h3>
<div class="section">
<p><span class="merged" id="all.RoOQ6.1.spl1" title="原文 : Your code can create, look up, and update metrics programmatically using the Micrometer MeterRegistry API.">コードは、Micrometer <code>MeterRegistry</code> APIを使用してメトリクスをプログラムで作成、参照および更新できます。</span> <span class="merged" id="all.RoOQ6.1.spl2" title="原文 : The Micrometer concepts document provides a good starting point for learning how to use Micrometer&rsquo;s interfaces and classes."><a href="https://micrometer.io/docs/concepts" target="_blank">「マイクロメーター概念ドキュメント」</a>は、Micrometerのインタフェースおよびクラスの使用方法を学習するためのよい出発点です。</span> </p>

</div>


<h3 id="_accessing_the_helidon_micrometer_endpoint"><span class="merged" id="all.1dI07J.1" title="原文 : Accessing the Helidon Micrometer Endpoint">Helidon Micrometerエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.1ia4HH" title="原文 : Your application can easily have Helidon create a REST endpoint which clients can access to retrieve Micrometer metrics, by default at the /micrometer endpoint.">アプリケーションでは、Helidonで、クライアントが<code>/micrometer</code>エンドポイントでデフォルトでMicrometerメトリクスを取得するためにアクセスできるRESTエンドポイントを簡単に作成できます。</span></p>

<p><span class="merged" id="all.2JWv3C.spl1" title="原文 : Within Helidon, each type of meter registry is paired with some code that examines the incoming HTTP request to /micrometer and decides whether the request matches up with the associated meter registry.">Helidonでは、各タイプのメーター・レジストリは、<code>/micrometer</code>への受信HTTPリクエストを調べ、そのリクエストが関連するメーター・レジストリと一致するかどうかを決定するコードとペアになります。</span> <span class="merged" id="all.2JWv3C.spl2" title="原文 : The first pairing that accepts the request returns the response.">リクエストを受け入れる最初のペアがレスポンスを返します。</span> <span class="merged" id="all.2JWv3C.spl3" title="原文 : You will need to take advantage of this if your application uses additional meter registries beyond what Helidon automatically provides and you want those meter registries reflected in the output from the /micrometer REST endpoint.">Helidonが自動的に提供されるもの以外に追加のメーター・レジストリを使用し、これらのメーター・レジストリを<code>/micrometer</code> RESTエンドポイントからの出力に反映させる場合は、これを利用する必要があります。</span> </p>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.24"  title="原文:: API">API</span></h2>
<div class="section">

<h3 id="_the_helidon_micrometer_api"><span class="merged" id="all.3vX2XB.1" title="原文 : The Helidon Micrometer API">The Helidon Micrometer API</span></h3>
<div class="section">
<p><span class="merged" id="all.75mbc" title="原文 : Helidon provides no special API for dealing with Micrometer meters and meter registries beyond what Micrometer offers itself.">Helidonは、Micrometerのメーターやメーター・レジストリを、Micrometerが提供するもの以外に処理するための特別なAPIを提供しません。</span></p>

<p><span class="merged" id="all.2p5xoh.spl1" title="原文 : Helidon does give you an easy way to expose a REST endpoint to report the meters stored in the Micrometer meter registry.">Helidonを使用すると、RESTエンドポイントを簡単に公開して、Micrometerメーター・レジストリに格納されているメーターをレポートできます。</span> <span class="merged" id="all.2p5xoh.spl2" title="原文 : The MicrometerSupport interface exposes static methods to directly create an instance of MicrometerSupport and to return a Builder instance so your code can fine-tune how the REST service behaves."><a href="https://javadoc.io/doc/io.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.html" target="_blank"><code>MicrometerSupport</code></a>インタフェースは、<code>MicrometerSupport</code>のインスタンスを直接作成し、<a href="https://javadoc.io/doc/io.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.Builder.html" target="_blank"><code>Builder</code></a>インスタンスを返す静的メソッドを公開し、RESTサービスの動作をコードで微調整できるようにします。</span> </p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.38"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3Jzfcg.1" title="原文 : You can configure the Helidon Micrometer REST service as you can other built-in Helidon services by adding configuration settings under the micrometer top-level key.">Helidon Micrometer RESTサービスは、<code>micrometer</code>最上位キーに構成設定を追加することで、他の組込みHelidonサービスと同様に構成できます。</span></p>

<p><span class="merged" id="all.1VPabO.2" title="原文 : Type: io.helidon.integrations.micrometer.MicrometerSupport">タイプ: <a href="./apidocs/io.helidon.integrations.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.html" target="_blank">io.helidon.integrations.micrometer.MicrometerSupport</a></span></p>

<markup
lang="text"
title="Config key"
>micrometer</markup>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.90"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.91" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.113"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.109"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.114"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.119"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.16"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.16" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4NniMS.9" title="原文 : Sets the cross-origin config builder for use in establishing CORS support for the service endpoints.">サービス・エンドポイントのCORSサポートの確立に使用するクロス・オリジン構成ビルダーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rpt0z.9"  title="原文: routing"><code>routing</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.305"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1n2NdZ.9" title="原文 : Sets the routing name to use for setting up the service&rsquo;s endpoint.">サービスのエンドポイントの設定に使用するルーティング名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.13"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.306"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3MWNIS.9" title="原文 : Sets the web context to use for the service&rsquo;s endpoint.">サービスのエンドポイントに使用するwebコンテキストを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.36wOCo.spl1" title="原文 : By default, Helidon Micrometer integration exposes the /micrometer endpoint.">デフォルトでは、Helidon Micrometer統合は<code>/micrometer</code>エンドポイントを公開します。</span> <span class="merged" id="all.36wOCo.spl2" title="原文 : You can override the path using the Builder or the micrometer.web-context configuration key.">パスは、<a href="https://javadoc.io/doc/io.micrometer/MicrometerSupport.Builder.html" target="_blank"><code>Builder</code></a>または<code>micrometer.web-context</code>構成キーを使用してオーバーライドできます。</span> </p>

<markup
lang="yaml"
title="Overriding the default Micrometer path"
>micrometer:
  web-context: my-micrometer</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.40"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.rDbb" title="原文 : Helidon SE includes an example application which uses Micrometer support.">Helidon SEには、Micrometerサポートを使用する<a href="https://github.com/oracle/helidon/tree/master/examples/integrations/micrometer/se" target="_blank">「サンプル・アプリケーション」</a>が含まれています。</span></p>

<p><span class="merged" id="all.2A50dr" title="原文 : The rest of this section takes you through the process of changing your application to use Helidon SE integration with Micrometer:">このセクションの残りの部分では、Helidon SE統合とMicrometerを使用するようにアプリケーションを変更するプロセスについて説明します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1ws79A" title="原文 : Register an instance of MicrometerSupport with the web server."><a href="https://javadoc.io/doc/io.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.html" target="_blank"><code>MicrometerSupport</code></a>のインスタンスをwebサーバーに登録します。</span>

</li>
<li>
<span class="merged" id="all.3BKGZg" title="原文 : Create meters using the meter registry managed by Helidon&rsquo;s MicrometerSupport and then update and query those meters.">Helidonの<code>MicrometerSupport</code>で管理されるメーター・レジストリを使用してメーターを作成し、それらのメーターを更新および問合せします。</span>

</li>
</ol>


<h3 id="_register_an_instance_of_micrometersupport_with_the_web_server"><span class="merged" id="all.27lXEO" title="原文 : Register an Instance of MicrometerSupport with the Web Server">Webサーバーへの<code>MicrometerSupport</code>のインスタンスの登録</span></h3>
<div class="section">
<markup
lang="java"
title="Initialize Micrometer support"
>import io.helidon.integrations.micrometer.MicrometerSupport;

MicrometerSupport micrometerSupport = MicrometerSupport.create(); <span class="conum" data-value="1" />

Routing.builder()
                .register(micrometerSupport) <span class="conum" data-value="2" />
                .register("/myapp", new MyService(micrometerSupport.registry())) <span class="conum" data-value="3" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.47nXVb" title="原文 : Create the MicrometerSupport instance, using the default built-in Prometheus meter registry.">デフォルトの組込みPrometheusメーター・レジストリを使用して、<code>MicrometerSupport</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.190DO8" title="原文 : Register the MicrometerSupport instance as a service; by default, MicrometerSupport exposes the endpoint as /micrometer."><code>MicrometerSupport</code>インスタンスをサービスとして登録します。デフォルトでは、<code>MicrometerSupport</code>はエンドポイントを<code>/micrometer</code>として公開します。</span></li>
<li data-value="3"><span class="merged" id="all.1JU9sI" title="原文 : Pass the MicrometerSupport object&rsquo;s meter registry to your service for use in creating and updating meters.">メーターの作成および更新に使用するために、<code>MicrometerSupport</code>オブジェクトのメーター・レジストリをサービスに渡します。</span></li>
</ul>

</div>


<h3 id="_create_and_update_meters_in_your_application_service"><span class="merged" id="all.RL9Un" title="原文 : Create and Update Meters in your Application Service">アプリケーション・サービスでのメーターの作成および更新</span></h3>
<div class="section">
<markup
lang="java"
title="Define and use a <code>Counter</code>"
>import io.micrometer.core.instrument.Counter;

public class MyService implements Service {

    private final Counter requestCounter;

    public MyService(MicrometerMeterRegistry registry) {
        requestCounter = registry.counter("allRequests"); <span class="conum" data-value="1" />
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
<li data-value="3"><span class="merged" id="all.3H2x4z" title="原文 : Update the counter and then delegate the rest of the request processing to the next handler in the chain.">カウンタを更新し、残りのリクエスト処理をチェーン内の次のハンドラに委任します。</span></li>
</ul>

<p><span class="merged" id="all.1adNBQ.spl1" title="原文 : The example above enrolls the built-in Prometheus meter registry with the default Prometheus registry configuration.">前述の例では、組込みのPrometheusメーター・レジストリをデフォルトのPrometheusレジストリ構成に登録します。</span> <span class="merged" id="all.1adNBQ.spl2" title="原文 : You can change the default setup for built-in registries, and you can enroll other meter registries your application creates itself.">組込みレジストリのデフォルト設定を変更したり、アプリケーションで独自に作成された他のメーター・レジストリを登録できます。</span> </p>


<h4 id="_overriding_defaults_for_built_in_meter_registry_types"><span class="merged" id="all.NHdNc.1" title="原文 : Overriding Defaults for Built-in Meter Registry Types">組込みメーター・レジストリ・タイプのデフォルトの上書き</span></h4>
<div class="section">
<p><span class="merged" id="all.2mR6lq.1.spl1" title="原文 : Unless you specify otherwise, Helidon uses defaults for any built-in Micrometer meter registry.">特に指定しないかぎり、Helidonでは組込みマイクロメーター・レジストリのデフォルトが使用されます。</span> <span class="merged" id="all.2mR6lq.1.spl2" title="原文 : For example, Helidon configures the built-in Prometheus registry using PrometheusConfig.DEFAULT.">たとえば、Helidonは、<code>PrometheusConfig.DEFAULT</code>を使用して組込みPrometheusレジストリを構成します。</span> </p>

<p><span class="merged" id="all.4KN3sB" title="原文 : You can override these defaults in either of two ways:">これらのデフォルトは、次のいずれかの方法で上書きできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1CWidj" title="原文 : Using the MicrometerSupport.Builder class"><a href="https://javadoc.io/doc/io.micrometer/io/helidon/integrations/micrometer/MicrometerSupport.Builder.html" target="_blank"><code>MicrometerSupport.Builder</code></a>クラスの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.oVOmk" title="原文 : Using configuration">構成の使用</span></p>

</li>
</ul>

</div>


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
title="Overriding defaults for built-in meter registries using <code>MicrometerSupport.Builder</code>"
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

<p><span class="merged" id="all.iHBMM.1" title="原文 : Note that the first config example is equivalent to the default Helidon Micrometer behavior; Helidon by default supports the Prometheus meter registry.">最初の構成例は、デフォルトのHelidon Micrometerの動作と同じです。Helidonでは、デフォルトでPrometheusメーター・レジストリがサポートされています。</span></p>

<p><span class="merged" id="all.j8Tsh.1.spl1" title="原文 : The configuration keys that are valid for the builtin-registries child entries depend on the type of Micrometer meter registry."><code>builtin-registries</code>の子エントリに対して有効な構成キーは、マイクロメーター・レジストリのタイプによって異なります。</span> <span class="merged" id="all.j8Tsh.1.spl2" title="原文 : For example, support in Helidon for the Prometheus meter registry respects the prefix configuration setting but other meter registries might not and might support other settings.">たとえば、<a href="https://javadoc.io/doc/io.micrometer/micrometer-registry-prometheus/1.6.6/io/micrometer/prometheus/PrometheusConfig.html" target="_blank">「Prometheusメーター・レジストリ」</a>に対するHelidonのサポートは<code>prefix</code>構成設定を尊重しますが、他のメーター・レジストリは他の設定をサポートしていない場合があります。</span> <span class="merged" id="all.j8Tsh.1.spl3" title="原文 : Refer to the documentation for the meter registry you want to configure to find out what items apply to that registry type.">構成するメーター・レジストリのドキュメントを参照して、そのレジストリ・タイプに適用される項目を確認してください。</span> </p>

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

<p><span class="merged" id="all.1X8sPo.spl1" title="原文 : Typically, the function examines the request-​the Content-Type, query parameters, etc.--to decide whether the corresponding handler should respond to the request.">通常、この関数は、対応するハンドラがリクエストに応答する必要があるかどうかを判断するために、リクエスト(<code>Content-Type</code>、問合せパラメータなど)を調べます。</span> <span class="merged" id="all.1X8sPo.spl2" title="原文 : If so, your function should instantiate your Handler and return an Optional.of(theHandlerInstance); otherwise, your function should return Optional.empty(). ">その場合、ファンクションは<code>Handler</code>をインスタンス化し、<code>Optional.of(theHandlerInstance)</code>を戻します。それ以外の場合、ファンクションは<code>Optional.empty()</code>を戻す必要があります。<br></span> 
</p>

<p><span class="merged" id="all.1JnQTz.spl1" title="原文 : When MicrometerSupport receives a request, it invokes the functions of all the enrolled registries, stopping as soon as one function provides a handler."><code>MicrometerSupport</code>は、リクエストを受信すると、登録されているすべてのレジストリの関数を呼び出し、いずれかの関数がハンドラを提供するとすぐに停止します。</span> <span class="merged" id="all.1JnQTz.spl2" title="原文 : MicrometerSupport then delegates to that handler to create and send the response.">その後、<code>MicrometerSupport</code>はそのハンドラに委任して、レスポンスを作成および送信します。</span> </p>

</li>
<li>
<span class="merged" id="all.2VpWDm" title="原文 : Pass the Handler and Function to the MicrometerSupport.enrollRegistry method to enroll them "><code>Handler</code>および<code>Function</code>を<code>MicrometerSupport.enrollRegistry</code>メソッドに渡して登録<br></span>

<markup
lang="java"
title="Creating and enrolling your own Micrometer meter registry"
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
<li data-value="2"><span class="merged" id="all.1L1I4R" title="原文 : Provide the function that checks if the ServerRequest accepts content that your meter registry can produce (e.g., either text/plain or unspecified is normally an indication for Prometheus-style output) and returns the appropriate Optional&lt;Handler&gt;."><a href="./apidocs/io.helidon.webserver/io/helidon/webserver/ServerRequest.html" target="_blank"><code>ServerRequest</code></a>がメーター・レジストリで生成可能なコンテンツを受け入れ(たとえば、<code>text/plain</code>または未指定は通常、プロンプト・スタイルの出力を示します)、適切な<code>Optional&lt;<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/Handler.html" target="_blank"><code>Handler</code></a> > </code>を返すファンクションを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.lI7eO" title="原文 : A very simple in-line Handler that sets the response entity from the Prometheus registry&rsquo;s scrape() method.">Prometheusレジストリの<code>scrape()</code>メソッドからレスポンス・エンティティを設定する非常に単純なインライン<code>Handler</code>。</span></li>
</ul>

</li>
</ol>

</div>


<h3 id="_accessing_the_helidon_micrometer_endpoint_2"><span class="merged" id="all.1dI07J.2" title="原文 : Accessing the Helidon Micrometer Endpoint">Helidon Micrometerエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.1ia4HH.1" title="原文 : Your application can easily have Helidon create a REST endpoint which clients can access to retrieve Micrometer metrics, by default at the /micrometer endpoint.">アプリケーションでは、Helidonで、クライアントが<code>/micrometer</code>エンドポイントでデフォルトでMicrometerメトリクスを取得するためにアクセスできるRESTエンドポイントを簡単に作成できます。</span></p>

<p><span class="merged" id="all.2JWv3C.1.spl1" title="原文 : Within Helidon, each type of meter registry is paired with some code that examines the incoming HTTP request to /micrometer and decides whether the request matches up with the associated meter registry.">Helidonでは、各タイプのメーター・レジストリは、<code>/micrometer</code>への受信HTTPリクエストを調べ、そのリクエストが関連するメーター・レジストリと一致するかどうかを決定するコードとペアになります。</span> <span class="merged" id="all.2JWv3C.1.spl2" title="原文 : The first pairing that accepts the request returns the response.">リクエストを受け入れる最初のペアがレスポンスを返します。</span> <span class="merged" id="all.2JWv3C.1.spl3" title="原文 : You will need to take advantage of this if your application uses additional meter registries beyond what Helidon automatically provides and you want those meter registries reflected in the output from the /micrometer REST endpoint.">Helidonが自動的に提供されるもの以外に追加のメーター・レジストリを使用し、これらのメーター・レジストリを<code>/micrometer</code> RESTエンドポイントからの出力に反映させる場合は、これを利用する必要があります。</span> </p>

<p><span class="merged" id="all.2Y2Hne.spl1" title="原文 : When MicrometerSupport receives a request at the endpoint, it looks for the first enrolled meter registry for which the corresponding Function&lt;ServerRequest, Optional&lt;Handler&gt;&gt; returns a non-empty Handler."><code>MicrometerSupport</code>は、エンドポイントでリクエストを受信すると、対応する<code>Function&lt;ServerRequest, Optional&lt;Handler>></code>が空でない<code>Handler</code>を返す最初の登録済メーター・レジストリを検索します。</span> <span class="merged" id="all.2Y2Hne.spl2" title="原文 : Helidon invokes that Handler which must retrieve the metrics output from its meter registry and set and send the response.">Helidonは、メーター・レジストリからメトリクス出力を取得し、レスポンスを設定して送信する必要がある<code>Handler</code>を起動します。</span> <span class="merged" id="all.2Y2Hne.spl3" title="原文 : Note that the Handler which your function returns typically has a reference to the meter registry it will use in preparing the response.">通常、関数が返す<code>Handler</code>には、レスポンスの準備に使用するメーター・レジストリへの参照があります。</span> </p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.26"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.1lIbmj.1" title="原文 : The Micrometer website describes the project as a whole and has links to more information."><a href="https://micrometer.io" target="_blank">「マイクロメーターのサイト」</a>はプロジェクト全体を記述し、詳細情報へのリンクを持ちます。</span></p>

</div>

</doc-view>
