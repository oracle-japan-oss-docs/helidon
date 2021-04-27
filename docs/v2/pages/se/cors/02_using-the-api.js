<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3Zq5UH" title="原文 : Using the Helidon SE CORS API">Helidon SE CORS APIの使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.TF60B.spl1" title="原文 : Every Helidon SE application explicitly creates routing rules that govern how Helidon delivers each incoming request to the code that needs to respond.">すべてのHelidon SEアプリケーションは、Helidonが応答する必要があるコードに各着信リクエストを配信する方法を制御するルーティング・ルールを明示的に作成します。</span> <span class="merged" id="all.TF60B.spl2" title="原文 : The Helidon CORS SE API provides a simple way to include CORS into the routing rules that you construct for your application.">Helidon CORS SE APIを使用すると、アプリケーション用に作成するルーティング・ルールにCORSを簡単に組み込むことができます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_understanding_the_helidon_se_cors_api"><span class="merged" id="all.4RHuCD" title="原文 : Understanding the Helidon SE CORS API">Helidon SE CORS APIの理解</span></h2>
<div class="section">
<p><span class="merged" id="all.4BCqT1.spl1" title="原文 : To add CORS behavior to endpoints, you need to make only minimal changes to how you set up the routing for those endpoints.">CORS動作をエンドポイントに追加するには、それらのエンドポイントのルーティングの設定方法を最小限に変更するだけで済みます。</span> <span class="merged" id="all.4BCqT1.spl2" title="原文 : Using the Helidon SE CORS API, you define the CORS behavior that you want and then include that behavior as you build the routing rules for the services in your application.">Helidon SE CORS APIを使用して、必要なCORS動作を定義し、アプリケーションでサービスのルーティング・ルールをビルドするときにその動作を含めます。</span> </p>

<p><span class="merged" id="all.3cqGbW" title="原文 : The Helidon SE CORS API provides two key classes that you use in your application:">Helidon SE CORS APIには、アプリケーションで使用する2つのキー・クラスが用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4CLU6A.spl1" title="原文 : CorsSupport - Represents information about resource sharing for a single resource."><code>CorsSupport</code> - 単一リソースのリソース共有に関する情報を表します。</span> <span class="merged" id="all.4CLU6A.spl2" title="原文 : Typically, you create one CorsSupport instance for each distinct resource in your application (such as the /greet resource in the QuickStart greeting application) that should participate in CORS.">通常、CORSに参加する必要があるアプリケーションの個別のリソース(QuickStart応答メッセージ・アプリケーションの<code>/greet</code>リソースなど)ごとに、<code>CorsSupport</code>インスタンスを作成します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3Z3hc" title="原文 : CrossOriginConfig - Represents the details for a particular type of sharing, such as which origins are allowed to have access using which HTTP methods, etc. Create one instance of CrossOriginConfig for each different type of sharing you need."><code>CrossOriginConfig</code> - 特定のタイプの共有の詳細(どのオリジンがどのHTTPメソッドを使用してアクセスできるかなど)を表します。必要な共有のタイプごとに、<code>CrossOriginConfig</code>のインスタンスを作成します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.3rkkya.spl1" title="原文 : You associate one or more CrossOriginConfig objects with each CorsSupport object.">各<code>CorsSupport</code>オブジェクトには、1つ以上の<code>CrossOriginConfig</code>オブジェクトを関連付けます。</span> <span class="merged" id="all.3rkkya.spl2" title="原文 : You use the CorsSupport object when you construct the routing rules for the service."><code>CorsSupport</code>オブジェクトは、サービスのルーティング・ルールを作成するときに使用します。</span> <span class="merged" id="all.3rkkya.spl3" title="原文 : When your application is running and requests arrive, the Helidon CORS implementation enforces the CORS behavior represented by the CorsSupport object before routing the request to your endpoint code for the resource.">アプリケーションの実行中にリクエストが到着すると、Helidon CORS実装は、リクエストをリソースのエンドポイント・コードにルーティングする前に、<code>CorsSupport</code>オブジェクトによって表されるCORS動作を強制します。</span> </p>

</div>

<h2 id="_getting_started"><span class="merged" id="all.J6ASm.5"  title="原文:: Getting Started">開始</span></h2>
<div class="section">
<p><span class="merged" id="all.4JQEvy" title="原文 : To add CORS support to your Helidon SE application:">CORSサポートをHelidon SEアプリケーションに追加するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.lbXWo" title="原文 : Determine the type of cross origin sharing you want to allow for each endpoint in your application.">アプリケーションの各エンドポイントに許可するクロス・オリジン共有のタイプを決定します。</span>

</li>
<li>

<div><p><span class="merged" id="all.2NZzgZ" title="原文 : Add a dependency on the Helidon SE CORS artifact to your Maven pom.xml file.">Helidon SE CORSアーティファクトへの依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span></p>

<p><span class="merged" id="all.3iYcGC.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存性管理を宣言する方法について説明します。</span> <span class="merged" id="all.3iYcGC.spl2" title="原文 : For CORS support in Helidon SE, you must include the following dependency in your project:">Helidon SEでCORSをサポートするには、プロジェクトに次の依存性を含める必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-cors&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>
</div>

</li>
<li>
<span class="merged" id="all.1wfs3z" title="原文 : Modify how your application constructs routing rules so they include CORS as described in the following sections.">次の各項の説明に従って、CORSを含むようにアプリケーションでルーティング・ルールを構成する方法を変更します。</span>

</li>
</ol>
</div>

<h2 id="adding-cors-support"><span class="merged" id="all.132Rkx" title="原文 : Adding CORS Support in Your Helidon SE Application">Helidon SEアプリケーションでのCORSサポートの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.4KxN5k" title="原文 : Because Helidon SE does not use annotation processing to identify endpoints, you need to provide the CORS information for your application another way - by including CORS into the routing you construct for your application.">Helidon SEではエンドポイントの識別に注釈処理を使用しないため、アプリケーションのCORS情報を別の方法で指定する必要があります - アプリケーション用に作成するルーティングにCORSを含める。</span></p>

<p><span class="merged" id="all.3ny1q2" title="原文 : For each distinct resource or subresource your application exposes:">アプリケーションで公開される個別のリソースまたはサブリソースごとに、次の操作を実行します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.25xe6H" title="原文 : Create a CorsSupport instance corresponding to the resource.">リソースに対応する<a href="./apidocs/io.helidon.webserver.cors/io/helidon/webserver/cors/CorsSupport.html" id="" target="_blank" ><code>CorsSupport</code></a>インスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.4VfZcJ" title="原文 : For each different type of sharing you want to provide for that resource:">そのリソースに提供する共有のタイプごとに、次の手順を実行します:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2Uch3u.spl1" title="原文 : Create a CrossOriginConfig instance."><a href="./apidocs/io.helidon.webserver.cors/io/helidon/webserver/cors/CrossOriginConfig.html" id="" target="_blank" ><code>CrossOriginConfig</code></a>インスタンスを作成します。</span> <span class="merged" id="all.2Uch3u.spl2" title="原文 :  The CrossOriginConfig Java class represents the details for a particular type of sharing, such as which origins are allowed to share via which HTTP methods, etc."><br><code>CrossOriginConfig</code> Javaクラスは、特定のタイプの共有の詳細(どのオリジンがどのHTTPメソッドを介して共有できるかなど)を表します。</span> 

</li>
<li>
<span class="merged" id="all.3cnfcX" title="原文 : Add the CrossOriginConfig to the CorsSupport instance for this resource.">このリソースの<code>CorsSupport</code>インスタンスに<code>CrossOriginConfig</code>を追加します。</span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.2QQZ1M" title="原文 : Use the resource&rsquo;s CorsSupport object in setting up the routing rules for that resource.">リソースの<code>CorsSupport</code>オブジェクトを使用して、そのリソースのルーティング・ルールを設定します。</span>

</li>
</ol>
<p><span class="merged" id="all.1i6C1T" title="原文 : Each of these classes has an associated builder that you use in constructing instances of the class.">これらの各クラスには、クラスのインスタンスのビルドに使用するビルダーが関連付けられています。</span></p>

<p><span class="merged" id="all.273mwy" title="原文 : The table below describes the methods on the CrossOriginConfig.Builder class that map to the headers defined in the CORS protocol.">次の表では、CORSプロトコルで定義されたヘッダーにマップする<code>CrossOriginConfig.Builder</code>クラスのメソッドについて説明します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1e8dVO.5"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.oxso7.2"  title="原文:: Default">デフォルト</span></th>
<th><span class="merged" id="all.3zyV5O.1" title="原文 : CORS Header Name">CORSヘッダー名</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.302KZl.1"  title="原文: allowCredentials"><code>allowCredentials</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.9"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4dF9U6.1"  title="原文: Access-Control-Allow-Credentials"><code>Access-Control-Allow-Credentials</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tx1Wg.1"  title="原文: allowHeaders"><code>allowHeaders</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.3"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.RsjK1.1"  title="原文: Access-Control-Allow-Headers"><code>Access-Control-Allow-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hODrO.1"  title="原文: allowMethods"><code>allowMethods</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.4"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.3hrvIH.1"  title="原文: Access-Control-Allow-Methods"><code>Access-Control-Allow-Methods</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2loTdg.1"  title="原文: allowOrigins"><code>allowOrigins</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.5"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.2FjaSx.1"  title="原文: Access-Control-Allow-Origins"><code>Access-Control-Allow-Origins</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xOOIS.1"  title="原文: exposeHeaders"><code>exposeHeaders</code></span></td>
<td class=""><span class="merged" id="all.2Qehz5.2"  title="原文: none"><code>none</code></span></td>
<td class=""><span class="merged" id="all.yr2OR.1"  title="原文: Access-Control-Expose-Headers"><code>Access-Control-Expose-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OUtEo.1"  title="原文: maxAgeSeconds"><code>maxAgeSeconds</code></span></td>
<td class=""><span class="merged" id="all.3ukg0O.1"  title="原文: 3600"><code>3600</code></span></td>
<td class=""><span class="merged" id="all.4bPOg7.1"  title="原文: Access-Control-Max-Age"><code>Access-Control-Max-Age</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.2"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.14"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2jtIAF.3"  title="原文:: n/a">該当なし</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.226CVy.1" title="原文 : If the cross-origin configuration is disabled (enabled = false), then the Helidon CORS implementation ignores the cross-origin configuration entry.">クロス・オリジン構成が無効になっている場合(<code>enabled</code> = false)、Helidon CORS実装はクロス・オリジン構成エントリを無視します。</span></p>

</div>

<h2 id="se-api-routing-example"><span class="merged" id="all.4RlqMi" title="原文 : Sample Routing Setup Using the CrossOriginConfig API"><code>CrossOriginConfig</code> APIを使用したルーティング設定の例</span></h2>
<div class="section">
<p><span class="merged" id="all.442Ckk" title="原文 : The Helidon SE Quickstart application lets you change the greeting by sending a PUT request to the /greet/greeting resource."><a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/quickstarts/helidon-quickstart-se" id="" target="_blank" >「Helidon SE Quickstartアプリケーション」</a>では、<code>PUT</code>リクエストを<code>/greet/greeting</code>リソースに送信することで、応答メッセージを変更できます。</span></p>

<p><span class="merged" id="all.4XTDRL.spl1" title="原文 : This example, based on the QuickStart greeting app, uses the low-level CrossOriginConfig API and the CorsSupport API to influence the routing, thereby determining how that resource is shared.">この例では、QuickStart応答メッセージ・アプリケーションに基づいて、低レベルの<code>CrossOriginConfig</code> APIおよび<code>CorsSupport</code> APIを使用して<router-link to="/se/webserver/03_routing">「ルーティング」</router-link>に影響を与え、そのリソースの共有方法を決定します。</span> <span class="merged" id="all.4XTDRL.spl2" title="原文 : (If desired, you can use configuration instead of the low-level API.">(必要に応じて、低レベルAPIのかわりに構成を使用できます。</span> <span class="merged" id="all.4XTDRL.spl3" title="原文 : Learn more.)"><router-link to="/se/cors/03_using-configuration">「さらに学習します。」</router-link> )</span> </p>

<p><span class="merged" id="all.33qNx1" title="原文 : The following code shows how to prepare your application&rsquo;s routing to support metrics and health support, as well as CORS.">次のコードは、CORSと同様に、メトリックとヘルス・サポートをサポートするようにアプリケーションのルーティングを準備する方法を示しています。</span></p>

<markup
lang="java"

>    private static Routing createRouting(Config config) {

        MetricsSupport metrics = MetricsSupport.create();
        GreetService greetService = new GreetService(config);
        HealthSupport health = HealthSupport.builder()
                .addLiveness(HealthChecks.healthChecks())   // Adds a convenient set of checks
                .build();
        CorsSupport corsSupport = CorsSupport.builder()  <span class="conum" data-value="1" />
                .addCrossOriginConfig(CrossOriginConfig.builder() <span class="conum" data-value="2" />
                            .allowOrigins("http://foo.com", "http://there.com") <span class="conum" data-value="3" />
                            .allowMethods("PUT", "DELETE") <span class="conum" data-value="4" />
                            .build()) <span class="conum" data-value="5" />
                .addCrossOriginConfig(CrossOriginConfig.create()) <span class="conum" data-value="6" />
                .build(); <span class="conum" data-value="7" />

        // Note: Add the CORS routing *before* registering the GreetService routing.
        return Routing.builder()
                .register(JsonSupport.create())
                .register(health)                   // Health at "/health"
                .register(metrics)                 // Metrics at "/metrics"
                .register("/greet", corsSupport, greetService) <span class="conum" data-value="8" />
                .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4bD0MC" title="原文 : Create a CorsSupport.Builder instance."><code>CorsSupport.Builder</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.YHNrl" title="原文 : Add a CrossOriginSupport instance (using its builder) to constrain resource sharing.">(<em>その</em>ビルダーを使用して) <code>CrossOriginSupport</code>インスタンスを追加し、リソース共有を制約します。</span></li>
<li data-value="3"><span class="merged" id="all.3Kg6BQ" title="原文 : List the origins (sites) allowed to share resources from this app.">このアプリケーションからリソースを共有できるオリジン(サイト)をリストします。</span></li>
<li data-value="4"><span class="merged" id="all.2aQOYQ" title="原文 : List the HTTP methods the constraint applies to.">制約が適用されるHTTPメソッドをリストします。</span></li>
<li data-value="5"><span class="merged" id="all.1c2Y7x" title="原文 : Build the CrossOriginSupport instance."><code>CrossOriginSupport</code>インスタンスをビルドします。</span></li>
<li data-value="6"><span class="merged" id="all.2YPNjH" title="原文 : Add a CrossOriginSupport instance that permits all sharing (the default).">すべての共有を許可する<code>CrossOriginSupport</code>インスタンスを追加します(デフォルト)。</span></li>
<li data-value="7"><span class="merged" id="all.1HNEUB" title="原文 : Build the CorsSupport instance."><code>CorsSupport</code>インスタンスをビルドします。</span></li>
<li data-value="8"><span class="merged" id="all.1sW5lg" title="原文 : Register the new CorsSupport instance with - but in front of - the service which implements the business logic.">新しい<code>CorsSupport</code>インスタンスを、ビジネス・ロジックを実装するサービスに(ただし、その前に)登録します。</span></li>
</ul>
<p><span class="merged" id="all.1VDgqT.spl1" title="原文 : The order of steps 2 and 6 above is important.">前述のステップ2と6の順序は重要です。</span> <span class="merged" id="all.1VDgqT.spl2" title="原文 : When processing an incoming request, the Helidon CORS implementation scans the CrossOriginConfig instances in the order they were added to the CorsSupport object, stopping as soon as it finds a CrossOriginConfig instance for which allowMethods matches the HTTP method of the request.">着信リクエストを処理する際、Helidon CORS実装は、<code>CorsSupport</code>オブジェクトに追加された順序で<code>CrossOriginConfig</code>インスタンスをスキャンし、<code>allowMethods</code>がリクエストのHTTPメソッドに一致する<code>CrossOriginConfig</code>インスタンスを検出するとすぐに停止します。</span> </p>

<p><span class="merged" id="all.3uiCmF" title="原文 : The few additional lines described above allow the greeting application to participate in CORS.">上記のいくつかの追加行を使用すると、アプリケーションをCORSに参加させることができます。</span></p>

</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.10"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1BMUqb.spl1" title="原文 : Use configuration in combination with the API to add CORS to your application.">構成をAPIと組み合せて使用して、CORSをアプリケーションに追加します。</span> <span class="merged" id="all.1BMUqb.spl2" title="原文 : Learn more."><router-link to="/se/cors/03_using-configuration">さらに学習します。</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.1mwSCj" title="原文 : See the Helidon CORS support in action by building and running the CORS example."><a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/cors" id="" target="_blank" >「CORSの例」</a>をビルドして実行し、動作中のHelidon CORSサポートを参照してください。</span></p>

</li>
</ul>
</div>
</doc-view>
