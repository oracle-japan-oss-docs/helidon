<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.42W5dx" title="原文 : Using CORS in Built-in Services">組込みサービスでのCORSの使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.rRxEr.1.spl1" title="原文 : Several built-in Helidon services - health, metrics, and OpenAPI - have integrated CORS support.">いくつかの組込みHelidonサービス(ヘルス、メトリックおよびOpenAPI)には、CORSサポートが統合されています。</span> <span class="merged" id="all.rRxEr.1.spl2" title="原文 : You can include these services in your application and control their CORS behavior.">これらのサービスをアプリケーションに含め、CORSの動作を制御できます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_understanding_cors_support_in_helidon_services"><span class="merged" id="all.4CT4YD.1" title="原文 : Understanding CORS Support in Helidon Services">Helidon ServicesでのCORSサポートの理解</span></h2>
<div class="section">
<p><span class="merged" id="all.1iY8bH.spl1" title="原文 : Helidon lets you easily include health, metrics, and OpenAPI services in your Helidon application.">Helidonを使用すると、<router-link to="/se/health/01_health">health</router-link>、<router-link to="/se/metrics/01_metrics">metrics</router-link>および<router-link to="/se/openapi/01_openapi">OpenAPI</router-link>サービスをHelidonアプリケーションに簡単に組み込むことができます。</span> <span class="merged" id="all.1iY8bH.spl2" title="原文 : These services add endpoints to your application so that clients can retrieve information about it.">これらのサービスは、クライアントがアプリケーションに関する情報を取得できるように、アプリケーションにエンドポイントを追加します。</span> <span class="merged" id="all.1iY8bH.spl3" title="原文 : As with the application endpoints you write, these endpoints represent resources that can be shared across origins.">記述するアプリケーション・エンドポイントと同様に、これらのエンドポイントはオリジン間で共有できるリソースを表します。</span> </p>

<p><span class="merged" id="all.My9kd.1.spl1" title="原文 : For example, several websites related to OpenAPI run a web application in your browser.">たとえば、OpenAPIに関連するいくつかのwebサイトでは、ブラウザでWebアプリケーションが実行されます。</span> <span class="merged" id="all.My9kd.1.spl2" title="原文 : You provide the URL for your application to the browser application.">アプリケーションのURLをブラウザ・アプリケーションに指定します。</span> <span class="merged" id="all.My9kd.1.spl3" title="原文 : The browser application uses the URL to retrieve the OpenAPI document that describes the application&rsquo;s endpoints directly from your application.">ブラウザ・アプリケーションは、URLを使用して、アプリケーションのエンドポイントを記述するOpenAPIドキュメントをアプリケーションから直接取得します。</span> <span class="merged" id="all.My9kd.1.spl4" title="原文 : The browser application then displays a user interface that you use to &quot;drive&quot; your application.">ブラウザ・アプリケーションには、アプリケーションの駆動に使用するユーザー・インタフェースが表示されます。</span> <span class="merged" id="all.My9kd.1.spl5" title="原文 : That is, you provide input, have the web application send requests to your application endpoints, and then view the responses.">つまり、入力を指定し、webアプリケーションからアプリケーション・エンドポイントにリクエストを送信して、レスポンスを表示します。</span> <span class="merged" id="all.My9kd.1.spl6" title="原文 : This scenario is exactly the situation CORS addresses: an application in the browser from one origin - the user interface downloaded from the website - requests a resource from another origin - the /openapi endpoint which Helidon&rsquo;s OpenAPI built-in service automatically adds to your application.">このシナリオは、CORSアドレスの正確な状況です: webサイトからダウンロードされたユーザー・インタフェースであるブラウザ内のアプリケーションが、別のオリジン(Helidon OpenAPI組込みサービスがアプリケーションに自動的に追加する<code>/openapi</code>エンドポイント)からリソースをリクエストします。</span> </p>

<p><span class="merged" id="all.3dbLoT.1" title="原文 : Integrating CORS support into these built-in services allows such third-party web sites and their browser applications - or more generally, apps from any other origin - to work with your Helidon application.">CORSサポートをこれらの組込みサービスに統合すると、このようなサード・パーティのwebサイトおよびそのブラウザ・アプリケーション(より一般的には他のオリジンのアプリケーション)でHelidonアプリケーションを使用できるようになります。</span></p>

<p><span class="merged" id="all.2Y0lUj.spl1" title="原文 : Because all three of these built-in Helidon services serve only GET endpoints, by default the integrated CORS support in all three services permits any origin to share their resources using GET, HEAD, and OPTIONS HTTP requests.">これら3つの組込みHelidonサービスはすべて<code>GET</code>エンドポイントにのみサービスを提供するため、デフォルトでは、3つのサービスすべてで統合CORSサポートにより、すべてのオリジンが<code>GET</code>、<code>HEAD</code>および<code>OPTIONS</code> HTTPリクエストを使用してリソースを共有できます。</span> <span class="merged" id="all.2Y0lUj.spl2" title="原文 : You can customize the CORS set-up for these built-in services independently from each other using either the Helidon API, configuration, or both.">Helidon APIまたは構成(あるいはその両方)を使用して、これらの組込みサービスのCORS設定を相互に独立してカスタマイズできます。</span> <span class="merged" id="all.2Y0lUj.spl3" title="原文 : You can use this override feature to control the CORS behavior of the built-in services even if you do not add CORS behavior to your own endpoints.">このオーバーライド機能を使用すると、独自のエンドポイントにCORS動作を追加しない場合でも、組込みサービスのCORS動作を制御できます。</span> </p>

</div>

<h2 id="_getting_started"><span class="merged" id="all.J6ASm.6"  title="原文:: Getting Started">開始</span></h2>
<div class="section">
<p><span class="merged" id="all.4G7IRs.1" title="原文 : To use built-in services with CORS support and customize the CORS behavior:">CORSサポートで組込みサービスを使用し、CORSの動作をカスタマイズするには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1qC2bQ.1.spl1" title="原文 : Add the built-in service or services to your application.">組込みサービスをアプリケーションに追加します。</span> <span class="merged" id="all.1qC2bQ.1.spl2" title="原文 : The health, metrics, and OpenAPI services automatically include default CORS support.">ヘルス、メトリックおよびOpenAPIサービスには、デフォルトのCORSサポートが自動的に含まれます。</span> 

</li>
<li>

<div><p><span class="merged" id="all.2NZzgZ.1" title="原文 : Add a dependency on the Helidon SE CORS artifact to your Maven pom.xml file.">Helidon SE CORSアーティファクトへの依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3bV9CI.1" title="原文 : If you want the built-in services to support CORS, then you need to add the CORS dependency even if your own endpoints do not use CORS.">組込みサービスでCORSをサポートする場合は、独自のエンドポイントでCORSを使用しない場合でもCORS依存性を追加する必要があります。</span></p>
</div>
<p><span class="merged" id="all.3iYcGC.1.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存性管理を宣言する方法について説明します。</span> <span class="merged" id="all.3iYcGC.1.spl2" title="原文 : For CORS support in Helidon SE, you must include the following dependency in your project:">Helidon SEでCORSをサポートするには、プロジェクトに次の依存性を含める必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-cors&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>
</div>

</li>
<li>
<span class="merged" id="all.2ERHjg" title="原文 : Use the Helidon API or configuration to customize the CORS behavior as needed.">Helidon APIまたは構成を使用して、必要に応じてCORSの動作をカスタマイズします。</span>

</li>
</ol>
<p><span class="merged" id="all.3HYa6U.spl1" title="原文 : The documentation for the individual built-in services describes how to add each service to your application, including adding a Maven dependency and including the service in your application&rsquo;s routing rules.">個々の組込みサービスのドキュメントでは、Maven依存性の追加やアプリケーションのルーティング・ルールへのサービスの組込みなど、各サービスをアプリケーションに追加する方法について説明します。</span> <span class="merged" id="all.3HYa6U.spl2" title="原文 : In your application&rsquo;s configuration file, the configuration for each service appears under its own key.">アプリケーションの構成ファイルでは、各サービスの構成が独自のキーの下に表示されます。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.RiBJw.1" title="原文 : Helidon Service Documentation">Helidonサービスのドキュメント</span></th>
<th><span class="merged" id="all.1Ov129.6"  title="原文:: Configuration Key">構成キー</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.24OneR" title="原文 : health"><router-link to="/se/health/01_health">health</router-link></span></td>
<td class=""><span class="merged" id="all.4HLPu5.1"  title="原文: health"><code>health</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZvBLk" title="原文 : metrics"><router-link to="/se/metrics/01_metrics">metrics</router-link></span></td>
<td class=""><span class="merged" id="all.4KU3uR.1"  title="原文: metrics"><code>metrics</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VD3Ti" title="原文 : OpenAPI"><router-link to="/se/openapi/01_openapi">OpenAPI</router-link></span></td>
<td class=""><span class="merged" id="all.4chBk7.1"  title="原文: openapi"><code>openapi</code></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.2xQNN0" title="原文 : The Helidon SE QuickStart example uses these services, so you can use that as a template for your own application, or use the example project itself to experiment with customizing the CORS behavior in the built-in services."><a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/quickstarts/helidon-quickstart-se" id="" target="_blank" >「Helidon SE QuickStartの例」</a>ではこれらのサービスが使用されるため、独自のアプリケーションのテンプレートとして使用することも、サンプル・プロジェクト自体を使用して組込みサービスのCORS動作のカスタマイズを試すこともできます。</span></p>

</div>

<h2 id="_controlling_cors_for_built_in_services_using_the_api"><span class="merged" id="all.B0xoM" title="原文 : Controlling CORS for Built-in Services Using the API">APIを使用した組込みサービスのCORSの制御</span></h2>
<div class="section">
<p><span class="merged" id="all.tMKmo" title="原文 : Although services such as health, metrics, and OpenAPI are built into Helidon, to use them your application must create instances of the services and then use those instances in building your application&rsquo;s routing rules.">ヘルス、メトリック、OpenAPIなどのサービスはHelidonに組み込まれていますが、これらを使用するには、アプリケーションでサービスのインスタンスを作成し、それらのインスタンスを使用してアプリケーションのルーティング・ルールをビルドする必要があります。</span></p>

<p><span class="merged" id="all.Cm99q.spl1" title="原文 : Recall that each service type has a Builder class.">各サービス・タイプには<code>Builder</code>クラスがあることを思い出してください。</span> <span class="merged" id="all.Cm99q.spl2" title="原文 : To control the CORS behavior of a built-in service using the API, follow these steps:">APIを使用して組込みサービスのCORS動作を制御するには、次のステップに従います:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1p4hDp" title="原文 : Create a Builder for the type of service of interest.">目的のサービスのタイプの<code>Builder</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.7JsjA" title="原文 : Build an instance of CrossOriginConfig with the settings you want.">必要な設定を使用して<code>CrossOriginConfig</code>のインスタンスをビルドします。</span>

</li>
<li>
<span class="merged" id="all.17SSYq" title="原文 : Invoke the builder.crossOriginConfig method, passing that CrossOriginConfig instance."><code>builder.crossOriginConfig</code>メソッドを起動し、その<code>CrossOriginConfig</code>インスタンスを渡します。</span>

</li>
<li>
<span class="merged" id="all.2z5HnZ" title="原文 : Invoke the builder&rsquo;s build method to initialize the service instance.">ビルダーの<code>build</code>メソッドを呼び出して、サービス・インスタンスを初期化します。</span>

</li>
<li>
<span class="merged" id="all.1diu7j" title="原文 : Use the service instance in preparing the routing rules.">ルーティング・ルールの準備でサービス・インスタンスを使用します。</span>

</li>
</ol>
<p><span class="merged" id="all.bM8Zz" title="原文 : The following excerpt shows changes to the Helidon SE QuickStart example which limit sharing of the /metrics endpoint to http://foo.com.">次の抜粋は、<code>http://foo.com</code>への<code>/metrics</code>エンドポイントの共有を制限する<a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/quickstarts/helidon-quickstart-se" id="" target="_blank" >「Helidon SE QuickStartの例」</a>に対する変更を示しています。</span></p>

<markup
lang="java"

>private static Routing createRouting(Config config) {

        CrossOriginConfig metricsCrossOriginConfig = CrossOriginConfig.builder() <span class="conum" data-value="1" />
                .allowOrigins("http://foo.com")
                .build();
        MetricsSupport metrics = MetricsSupport.builder()
                .crossOriginConfig(metricsCrossOriginConfig) <span class="conum" data-value="2" />
                .build();
        GreetService greetService = new GreetService(config);
        HealthSupport health = HealthSupport.builder()
                .addLiveness(HealthChecks.healthChecks())   // Adds a convenient set of checks
                .build();

        return Routing.builder()
                .register(health)                   // Health at "/health"
                .register(metrics)                  // Metrics at "/metrics" <span class="conum" data-value="3" />
                .register("/greet", greetService)
                .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.GF79S" title="原文 : Create the CrossOriginConfig for metrics, limiting sharing to http://foo.com.">メトリックの<code>CrossOriginConfig</code>を作成し、<code>http://foo.com</code>への共有を制限します。</span></li>
<li data-value="2"><span class="merged" id="all.ii7cQ" title="原文 : Use the CrossOriginConfig instance in constructing the MetricsSupport service."><code>CrossOriginConfig</code>インスタンスを使用して、<code>MetricsSupport</code>サービスを構築します。</span></li>
<li data-value="3"><span class="merged" id="all.2zPAJT" title="原文 : Use the MetricsSupport object in creating the routing rules."><code>MetricsSupport</code>オブジェクトを使用してルーティング・ルールを作成します。</span></li>
</ul>
</div>

<h2 id="_configuring_cors_for_built_in_services"><span class="merged" id="all.4JYs68.1" title="原文 : Configuring CORS for Built-in Services">組込みサービスのCORSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4gbKsh" title="原文 : You can also use configuration to control whether and how each of the built-in services works with CORS.">構成を使用して、各組込みサービスがCORSと連携するかどうか、およびどのように連携するかを制御することもできます。</span></p>

<p><span class="merged" id="all.Hnp4y.spl1" title="原文 : Your application can pass configuration to the builder for each built-in service.">アプリケーションは、組込みサービスごとに構成をビルダーに渡すことができます。</span> <span class="merged" id="all.Hnp4y.spl2" title="原文 : For the health, metrics, and OpenAPI services, your configuration can include a section for CORS.">ヘルス、メトリックおよびOpenAPIサービスの場合、構成にCORSのセクションを含めることができます。</span> </p>

<p><span class="merged" id="all.2i6xie" title="原文 : The following example restricts sharing of the /health resource, provided by the health built-in service, to only the origin http://there.com.">次の例では、ヘルス組込みサービスによって提供される<code>/health</code>リソースの共有をオリジン<code>http://there.com</code>のみに制限します。</span></p>

<markup
lang="hocon"

>...
health:
  cors:
    allow-origins: [http://there.com]
...</markup>

<p><span class="merged" id="all.4OT4qc.spl1" title="原文 : Modify your application to load the health config node and use it to construct the HealthSupport service.">アプリケーションを変更して<code>health</code>構成ノードをロードし、それを使用して<code>HealthSupport</code>サービスを構築します。</span> <span class="merged" id="all.4OT4qc.spl2" title="原文 : The following code shows this change in the the QuickStart SE example.">次のコードは、QuickStart SEの例におけるこの変更を示しています。</span> </p>

<markup
lang="java"

>HealthSupport health = HealthSupport.builder()
        .config(config.get("health")) <span class="conum" data-value="1" />
        .addLiveness(HealthChecks.healthChecks())   // Adds a convenient set of checks
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2yyqtq" title="原文 : Use the health config section (if present) to configure the health service."><code>health</code>構成セクション(存在する場合)を使用して、ヘルス・サービスを構成します。</span></li>
</ul>
<p><span class="merged" id="all.oTpPs.spl1" title="原文 : You have full control over the CORS configuration for a built-in Helidon service.">組込みHelidonサービスのCORS構成を完全に制御できます。</span> <span class="merged" id="all.oTpPs.spl2" title="原文 : Use a basic CORS config section as described in Using Configuration for CORS."><router-link to="/se/cors/03_using-configuration">「CORSの構成の使用」</router-link>で説明されているように、CORSの基本構成セクションを使用します。</span> </p>

</div>

<h2 id="_accessing_the_shared_resources"><span class="merged" id="all.tTLVC.1" title="原文 : Accessing the Shared Resources">共有リソースへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.15iVUA.spl1" title="原文 : If you have edited the Helidon SE QuickStart application as described in the previous topics and saved your changes, you can build and run the application.">前のトピックの説明に従ってHelidon SE QuickStartアプリケーションを編集し、変更を保存した場合は、アプリケーションをビルドして実行できます。</span> <span class="merged" id="all.15iVUA.spl2" title="原文 : Once you do so you can execute curl commands to demonstrate the behavior changes in the metric and health services with the addition of the CORS functionality.">これを行うと、CORS機能を追加して<code>curl</code>コマンドを実行し、メトリックおよびヘルス・サービスの動作の変更を示すことができます。</span> <span class="merged" id="all.15iVUA.spl3" title="原文 : Note the addition of the Origin header value in the curl commands, and the Access-Control-Allow-Origin in the successful responses."><code>curl</code>コマンドでの<code>Origin</code>ヘッダー値の追加、および成功したレスポンスでの<code>Access-Control-Allow-Origin</code>の追加に注意してください。</span> </p>


<h3 id="_build_and_run_the_application"><span class="merged" id="all.1d3gmd.1" title="原文 : Build and Run the Application">アプリケーションのビルドと実行</span></h3>
<div class="section">
<p><span class="merged" id="all.3dCodv.1" title="原文 : Build and run the QuickStart application as usual.">通常どおり、QuickStartアプリケーションをビルドして実行します。</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-quickstart-se.jar
...
WEB server is up! http://localhost:8080/greet</markup>

</div>

<h3 id="_retrieve_metrics"><span class="merged" id="all.CwdJ9.1" title="原文 : Retrieve Metrics">メトリックの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.4PWDDI.1" title="原文 : The metrics service rejects attempts to access metrics on behalf of a disallowed origin.">メトリック・サービスは、許可されていないオリジンにかわってメトリックへのアクセス試行を拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://other.com" http://localhost:8080/metrics

HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 11:08:09 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.1DTU3M.1" title="原文 : But accesses from foo.com succeed.">ただし、<code>foo.com</code>からのアクセスは成功します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/metrics

HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://foo.com
Content-Type: text/plain
Date: Mon, 11 May 2020 11:08:16 -0500
Vary: Origin
connection: keep-alive
content-length: 6065

# TYPE base_classloader_loadedClasses_count gauge
# HELP base_classloader_loadedClasses_count Displays the number of classes that are currently loaded in the Java virtual machine.
base_classloader_loadedClasses_count 3568
...</markup>

</div>

<h3 id="_retrieve_health"><span class="merged" id="all.4bQL4U.1" title="原文 : Retrieve Health">ヘルスの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.3oMvPB.1" title="原文 : The health service rejects requests from origins not specifically approved.">ヘルス・サービスは、明示的に承認されていないオリジンからのリクエストを拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/health

HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 12:06:55 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.43x4WI.1" title="原文 : And responds successfully only to cross-origin requests from http://there.com.">また、<code>http://there.com</code>からのクロス・オリジン・リクエストにのみ正常に応答します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://there.com" http://localhost:8080/health

HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://there.com
Content-Type: application/json
Date: Mon, 11 May 2020 12:07:32 -0500
Vary: Origin
connection: keep-alive
content-length: 461

{"outcome":"UP",...}</markup>

</div>
</div>
</doc-view>
