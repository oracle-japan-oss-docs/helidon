<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.48"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.47" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.33" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.15" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.27" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.26" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.17" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.63"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.Ytsx0.spl1" title="原文 : The cross-origin resource sharing (CORS) protocol helps developers control if and how REST resources served by their applications can be shared across origins."><a href="https://www.w3.org/TR/cors" target="_blank">「クロス・オリジン・リソース共有(CORS)プロトコル」</a>は、開発者がアプリケーションによって提供されるRESTリソースをオリジン間で共有できるかどうかおよび方法を制御するのに役立ちます。</span> <span class="merged" id="all.Ytsx0.spl2" title="原文 : Helidon SE includes an implementation of CORS that you can use to add CORS behavior to the services you develop.">Helidon SEには、開発するサービスにCORSの動作を追加するために使用できるCORSの実装が含まれています。</span> <span class="merged" id="all.Ytsx0.spl3" title="原文 : You can define your application’s CORS behavior programmatically using the Helidon CORS API alone, or together with configuration.">アプリケーションのCORS動作は、Helidon CORS APIのみを使用してプログラムで定義することも、構成とともに定義することもできます。</span> </p>

<p><span class="merged" id="all.1sYoaj.1.spl1" title="原文 : Helidon also provides three built-in services that add their own endpoints to your application - health, metrics, and OpenAPI - that have integrated CORS support.">Helidonには、CORSサポートが統合されたヘルス、メトリクスおよびOpenAPIという、アプリケーションに独自のエンドポイントを追加する3つの組込みサービスも用意されています。</span> <span class="merged" id="all.1sYoaj.1.spl2" title="原文 : By adding very little code to your application, you control how all the resources in your application - the ones you write and the ones provided by the Helidon built-in services - can be shared across origins.">アプリケーションにコードをほとんど追加しないことで、アプリケーション内のすべてのリソース(作成するリソースとHelidon組込みサービスによって提供されるリソース)をオリジン間で共有する方法を制御できます。</span> </p>


<h3 id="_before_you_begin"><span class="merged" id="all.428ran.1"  title="原文:: Before You Begin">始める前に</span></h3>
<div class="section">
<p><span class="merged" id="all.KkrOb.1.spl1" title="原文 : Before you revise your application to add CORS support, you need to decide what type of cross-origin sharing you want to allow for each resource your application exposes.">CORSサポートを追加するようにアプリケーションを変更する前に、アプリケーションで公開するリソースごとに許可するクロス・オリジン共有のタイプを決定する必要があります。</span> <span class="merged" id="all.KkrOb.1.spl2" title="原文 : For example, suppose for a given resource you want to allow unrestricted sharing for GET, HEAD, and POST requests (what CORS refers to as &quot;simple&quot; requests), but permit other types of requests only from the two origins foo.com and there.com.">たとえば、特定のリソースに対して、GET、HEADおよびPOSTリクエスト(CORSで単純リクエストと呼ばれるもの)の無制限の共有を許可するが、他のタイプのリクエストは元の<code>foo.com</code>および<code>there.com</code>からのみ許可するとします。</span> <span class="merged" id="all.KkrOb.1.spl3" title="原文 : Your application would implement two types of CORS sharing: more relaxed for the simple requests and stricter for others.">アプリケーションでは、2タイプのCORS共有を実装: 単純なリクエストの場合は緩和され、それ以外の場合は厳格になります。</span> </p>

<p><span class="merged" id="all.HxLpR.1" title="原文 : Once you know the type of sharing you want to allow for each of your resources - including any from built-in services - you can change your application accordingly.">組込みサービスを含む各リソースに許可する共有のタイプがわかったら、それに応じてアプリケーションを変更できます。</span></p>

</div>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.41"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.XVNqn.1" title="原文 : To enable CORS add the following dependency to your project’s pom.xml (see Managing Dependencies).">CORSを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-cors&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.17"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.41ORxY.spl1" title="原文 : Every Helidon SE application explicitly creates routing rules that govern how Helidon delivers each incoming request to the code that needs to respond.">すべてのHelidon SEアプリケーションは、Helidonが応答する必要があるコードに各着信リクエストを配信する方法を制御するルーティング・ルールを明示的に作成します。</span> <span class="merged" id="all.41ORxY.spl2" title="原文 : To add CORS behavior to endpoints, you need to make only minimal changes to how you set up the routing for those endpoints.">CORS動作をエンドポイントに追加するには、それらのエンドポイントのルーティングの設定方法を最小限に変更するだけで済みます。</span> <span class="merged" id="all.41ORxY.spl3" title="原文 : Using the Helidon SE CORS API, you define the CORS behavior that you want and then include that behavior as you build the routing rules for the services in your application.">Helidon SE CORS APIを使用して、必要なCORS動作を定義し、アプリケーションでサービスのルーティング・ルールをビルドするときにその動作を含めます。</span> </p>

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

<p><span class="merged" id="all.4eEI4l" title="原文 : Because Helidon SE does not use annotation processing to identify endpoints, you need to provide the CORS information for your application another way - by including CORS into the routing you construct for your application.">Helidon SEは、注釈処理を使用してエンドポイントを識別しないため、アプリケーション用に構築するルーティングにCORSを含めることで、アプリケーションのCORS情報を別の方法で指定する必要があります。</span></p>

<p><span class="merged" id="all.3ny1q2" title="原文 : For each distinct resource or subresource your application exposes:">アプリケーションで公開される個別のリソースまたはサブリソースごとに、次の操作を実行します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3hlc3F" title="原文 : Create a CorsSupport instance corresponding to the resource.">リソースに対応する<a href="/apidocs/io.helidon.webserver.cors/io/helidon/webserver/cors/CorsSupport.html" target="_blank"><code>CorsSupport</code></a>インスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.4VfZcJ" title="原文 : For each different type of sharing you want to provide for that resource:">そのリソースに提供する共有のタイプごとに、次の手順を実行します:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.389mzy.spl1" title="原文 : Create a CrossOriginConfig instance."><a href="/apidocs/io.helidon.webserver.cors/io/helidon/webserver/cors/CrossOriginConfig.html" target="_blank"><code>CrossOriginConfig</code></a>インスタンスを作成します。</span> <span class="merged" id="all.389mzy.spl2" title="原文 : The CrossOriginConfig Java class represents the details for a particular type of sharing, such as which origins are allowed to share via which HTTP methods, etc."><code>CrossOriginConfig</code> Javaクラスは、特定のタイプの共有の詳細(どのオリジンがどのHTTPメソッドを介して共有できるかなど)を表します。</span> 

</li>
<li>
<span class="merged" id="all.3cnfcX" title="原文 : Add the CrossOriginConfig to the CorsSupport instance for this resource.">このリソースの<code>CorsSupport</code>インスタンスに<code>CrossOriginConfig</code>を追加します。</span>

</li>
</ol>

</li>
<li>
<span class="merged" id="all.2QQZ1M" title="原文 : Use the resource’s CorsSupport object in setting up the routing rules for that resource.">リソースの<code>CorsSupport</code>オブジェクトを使用して、そのリソースのルーティング・ルールを設定します。</span>

</li>
</ol>

<p><span class="merged" id="all.1i6C1T" title="原文 : Each of these classes has an associated builder that you use in constructing instances of the class.">これらの各クラスには、クラスのインスタンスのビルドに使用するビルダーが関連付けられています。</span></p>

<p><span class="merged" id="all.3fInDJ.spl1" title="原文 : The table below describes the methods on the CrossOriginConfig.Builder class and the configuration keys that map to the headers defined in the CORS protocol.">次の表に、<code>CrossOriginConfig.Builder</code>クラスのメソッドおよびCORSプロトコルで定義されたヘッダーにマップされる構成キーを示します。</span> <span class="merged" id="all.3fInDJ.spl2" title="原文 : (A later section discusses configuration.)">(後のセクションでは、<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">configuration</router-link>について説明します)</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4TNwUT" title="原文 : builder method">ビルダー・メソッド</span></th>
<th><span class="merged" id="all.336YPs.1" title="原文 : config key">構成キー</span></th>
<th><span class="merged" id="all.2ZwVVB.137"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.4A9clD.1"  title="原文:: default">default</span></th>
<th><span class="merged" id="all.20ls8M.146"  title="原文:: description">説明</span></th>
<th><span class="merged" id="all.4d0vit.1" title="原文 : CORS header name">CORSヘッダー名</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.302KZl.1"  title="原文: allowCredentials"><code>allowCredentials</code></span></td>
<td class=""><span class="merged" id="all.1nJYnr.2"  title="原文: allow-credentials"><code>allow-credentials</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.216"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42DdBS.79"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.1ygVGc.2" title="原文 : Sets the allow credentials flag.">資格証明の許可フラグを設定します。</span></td>
<td class=""><span class="merged" id="all.4dF9U6.1"  title="原文: Access-Control-Allow-Credentials"><code>Access-Control-Allow-Credentials</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tx1Wg.1"  title="原文: allowHeaders"><code>allowHeaders</code></span></td>
<td class=""><span class="merged" id="all.3CeDxm.2"  title="原文: allow-headers"><code>allow-headers</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.4"  title="原文:: string[]">string[]</span></td>
<td class=""><span class="merged" id="all.1VMbi3.6"  title="原文: *"><code>*</code></span></td>
<td class=""><span class="merged" id="all.1AfWoA.1" title="原文 : Sets the allowed headers.">許可されるヘッダーを設定します。</span></td>
<td class=""><span class="merged" id="all.RsjK1.1"  title="原文: Access-Control-Allow-Headers"><code>Access-Control-Allow-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hODrO.1"  title="原文: allowMethods"><code>allowMethods</code></span></td>
<td class=""><span class="merged" id="all.2GrPoY.2"  title="原文: allow-methods"><code>allow-methods</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.5"  title="原文:: string[]">string[]</span></td>
<td class=""><span class="merged" id="all.1VMbi3.7"  title="原文: *"><code>*</code></span></td>
<td class=""><span class="merged" id="all.4GgGW5.1" title="原文 : Sets the allowed methods.">許可されるメソッドを設定します。</span></td>
<td class=""><span class="merged" id="all.3hrvIH.1"  title="原文: Access-Control-Allow-Methods"><code>Access-Control-Allow-Methods</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2loTdg.1"  title="原文: allowOrigins"><code>allowOrigins</code></span></td>
<td class=""><span class="merged" id="all.3lELH6.2"  title="原文: allow-origins"><code>allow-origins</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.6"  title="原文:: string[]">string[]</span></td>
<td class=""><span class="merged" id="all.1VMbi3.8"  title="原文: *"><code>*</code></span></td>
<td class=""><span class="merged" id="all.WWZvy.1" title="原文 : Sets the allowed origins.">許可されるオリジンを設定します。</span></td>
<td class=""><span class="merged" id="all.2FjaSx.1"  title="原文: Access-Control-Allow-Origins"><code>Access-Control-Allow-Origins</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xOOIS.1"  title="原文: exposeHeaders"><code>exposeHeaders</code></span></td>
<td class=""><span class="merged" id="all.2uvwu1.2"  title="原文: expose-headers"><code>expose-headers</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.7"  title="原文:: string[]">string[]</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1hhowi.2" title="原文 : Sets the expose headers.">公開ヘッダーを設定します。</span></td>
<td class=""><span class="merged" id="all.yr2OR.1"  title="原文: Access-Control-Expose-Headers"><code>Access-Control-Expose-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OUtEo.1"  title="原文: maxAgeSeconds"><code>maxAgeSeconds</code></span></td>
<td class=""><span class="merged" id="all.3eJpIG.2"  title="原文: max-age-seconds"><code>max-age-seconds</code></span></td>
<td class=""><span class="merged" id="all.15f2Ma.34"  title="原文:: long">long</span></td>
<td class=""><span class="merged" id="all.3ukg0O.2"  title="原文: 3600"><code>3600</code></span></td>
<td class=""><span class="merged" id="all.2mlBW9.2" title="原文 : Sets the maximum age.">最大年齢を設定します。</span></td>
<td class=""><span class="merged" id="all.4bPOg7.1"  title="原文: Access-Control-Max-Age"><code>Access-Control-Max-Age</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.25"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.48UcwL.26"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.217"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.111"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3wKo6m.2" title="原文 : Sets whether this config should be enabled or not.">この構成を有効にするかどうかを設定します。</span></td>
<td class=""><span class="merged" id="all.2jtIAF.5"  title="原文:: n/a">該当なし</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.226CVy.1" title="原文 : If the cross-origin configuration is disabled (enabled = false), then the Helidon CORS implementation ignores the cross-origin configuration entry.">クロス・オリジン構成が無効になっている場合(<code>enabled</code> = false)、Helidon CORS実装はクロス・オリジン構成エントリを無視します。</span></p>


<h3 id="se-api-routing-example"><span class="merged" id="all.4RlqMi" title="原文 : Sample Routing Setup Using the CrossOriginConfig API"><code>CrossOriginConfig</code> APIを使用したルーティング設定の例</span></h3>
<div class="section">
<p><span class="merged" id="all.AekbS" title="原文 : The Helidon SE Quickstart application lets you change the greeting by sending a PUT request to the /greet/greeting resource."><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/quickstarts/helidon-quickstart-se" target="_blank">「Helidon SE Quickstartアプリケーション」</a>では、<code>PUT</code>リクエストを<code>/greet/greeting</code>リソースに送信することで、応答メッセージを変更できます。</span></p>

<p><span class="merged" id="all.QGuO8.spl1" title="原文 : This example, based on the QuickStart greeting app, uses the low-level CrossOriginConfig API and the CorsSupport API to influence the routing, thereby determining how that resource is shared.">この例では、QuickStart応答メッセージ・アプリケーションに基づいて、低レベルの<code>CrossOriginConfig</code> APIおよび<code>CorsSupport</code> APIを使用して<router-link :to="{path: '/se/webserver', hash: '#routing'}">「ルーティング」</router-link>に影響を与え、そのリソースの共有方法を決定します。</span> <span class="merged" id="all.QGuO8.spl2" title="原文 : (If desired, you can use configuration instead of the low-level API.)">(必要に応じて、低レベルAPIのかわりに<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">configuration</router-link>を使用できます。)</span> </p>

<p><span class="merged" id="all.4JaAa4" title="原文 : The following code shows one way to prepare your application’s routing to support CORS.">次のコードは、CORSをサポートするアプリケーションのルーティングを準備する1つの方法を示しています。</span></p>

<markup
lang="java"

>static void routing(HttpRouting.Builder routing) {
    CorsSupport corsSupport = CorsSupport.builder()  <span class="conum" data-value="1" />
            .addCrossOrigin(CrossOriginConfig.builder() <span class="conum" data-value="2" />
                        .allowOrigins("http://foo.com", "http://there.com") <span class="conum" data-value="3" />
                        .allowMethods("PUT", "DELETE") <span class="conum" data-value="4" />
                        .build()) <span class="conum" data-value="5" />
            .addCrossOrigin(CrossOriginConfig.create()) <span class="conum" data-value="6" />
            .build(); <span class="conum" data-value="7" />
    routing.register("/greet", corsSupport, new GreetService()); <span class="conum" data-value="8" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4bD0MC" title="原文 : Create a CorsSupport.Builder instance."><code>CorsSupport.Builder</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3mJ3yl" title="原文 : Add a CrossOriginConfig instance (using its builder) to constrain resource sharing.">(<em>その</em>ビルダーを使用して) <code>CrossOriginConfig</code>インスタンスを追加し、リソース共有を制約します。</span></li>
<li data-value="3"><span class="merged" id="all.3Kg6BQ" title="原文 : List the origins (sites) allowed to share resources from this app.">このアプリケーションからリソースを共有できるオリジン(サイト)をリストします。</span></li>
<li data-value="4"><span class="merged" id="all.2aQOYQ" title="原文 : List the HTTP methods the constraint applies to.">制約が適用されるHTTPメソッドをリストします。</span></li>
<li data-value="5"><span class="merged" id="all.Dj1eB" title="原文 : Build the CrossOriginConfig instance."><code>CrossOriginConfig</code>インスタンスをビルドします。</span></li>
<li data-value="6"><span class="merged" id="all.hSjzW" title="原文 : Add a CrossOriginConfig instance that permits all sharing (the default).">すべての共有を許可する<code>CrossOriginConfig</code>インスタンスを追加します(デフォルト)。</span></li>
<li data-value="7"><span class="merged" id="all.1HNEUB" title="原文 : Build the CorsSupport instance."><code>CorsSupport</code>インスタンスをビルドします。</span></li>
<li data-value="8"><span class="merged" id="all.1sW5lg" title="原文 : Register the new CorsSupport instance with - but in front of - the service which implements the business logic.">新しい<code>CorsSupport</code>インスタンスを、ビジネス・ロジックを実装するサービスに(ただし、その前に)登録します。</span></li>
</ul>

<p><span class="merged" id="all.1VDgqT.spl1" title="原文 : The order of steps 2 and 6 above is important.">前述のステップ2と6の順序は重要です。</span> <span class="merged" id="all.1VDgqT.spl2" title="原文 : When processing an incoming request, the Helidon CORS implementation scans the CrossOriginConfig instances in the order they were added to the CorsSupport object, stopping as soon as it finds a CrossOriginConfig instance for which allowMethods matches the HTTP method of the request.">着信リクエストを処理する際、Helidon CORS実装は、<code>CorsSupport</code>オブジェクトに追加された順序で<code>CrossOriginConfig</code>インスタンスをスキャンし、<code>allowMethods</code>がリクエストのHTTPメソッドに一致する<code>CrossOriginConfig</code>インスタンスを検出するとすぐに停止します。</span> </p>

<p><span class="merged" id="all.4PpFgz" title="原文 : By adding the few additional lines described above you allow the greeting application to participate in CORS.">前述の行をいくつか追加することで、グリーティング・アプリケーションがCORSに参加できるようにします。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.31"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.8q3eW.spl1" title="原文 : You can use configuration in combination with the Helidon CORS SE API to add CORS support to your resources by replacing some Java code with declarative configuration.">Helidon CORS SE APIと組み合せて構成を使用すると、一部のJavaコードを宣言的な構成に置き換えることで、CORSサポートをリソースに追加できます。</span> <span class="merged" id="all.8q3eW.spl2" title="原文 : This also gives your users a way to override the CORS behavior of your services without requiring the code to change.">これにより、ユーザーはコードを変更せずにサービスのCORS動作をオーバーライドすることもできます。</span> </p>


<h3 id="cors-configuration-formats"><span class="merged" id="all.21V5hZ" title="原文 : Understanding the CORS Configuration Formats">CORS構成形式の理解</span></h3>
<div class="section">
<p><span class="merged" id="all.r3vIr.spl1" title="原文 : Support in Helidon for CORS configuration uses two closely-related cross-origin configuration formats: basic and mapped.">CORS構成に対するHelidonでのサポートでは、密接に関連する複数のクロス・オリジン構成形式が使用されます: basicおよびmapped。</span> <span class="merged" id="all.r3vIr.spl2" title="原文 : Each format corresponds to a class in the Helidon CORS library.">各形式は、Helidon CORSライブラリのクラスに対応します。</span> <span class="merged" id="all.r3vIr.spl3" title="原文 : The basic format corresponds to the CrossOriginConfig class, and the mapped format corresponds to the MappedCrossOriginConfig class.">基本フォーマットは<a href="/apidocs/io.helidon.webserver.cors/io/helidon/cors/CrossOriginConfig.html" target="_blank"><code>CrossOriginConfig</code></a>クラスに対応し、マップされたフォーマットは<a href="/apidocs/io.helidon.webserver.cors/io/helidon/cors/MappedCrossOriginConfig.html" target="_blank"><code>MappedCrossOriginConfig</code></a>クラスに対応します。</span> </p>

</div>


<h3 id="basic-cross-origin-config"><span class="merged" id="all.3rFINR" title="原文 : Basic Cross-Origin Configuration">基本的なクロス・オリジン構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2Moc3t.spl1" title="原文 : In configuration, Helidon represents basic CORS information as a section, identified by a configuration key of your choosing, that contains one or more key/value pairs.">構成では、Helidonは基本的なCORS情報を、選択した構成キーで識別されるセクションとして表します。このセクションには、1つ以上のキー/バリュー・ペアが含まれています。</span> <span class="merged" id="all.2Moc3t.spl2" title="原文 : Each key-value pair assigns one characteristic of CORS behavior.">各キーと値のペアにCORS動作の特性が1つ割り当てられます。</span> </p>

<p><span class="merged" id="all.1rCp5c.1" title="原文 : The table below lists the configuration keys that identify the CORS characteristics.">次の表に、CORS特性を識別する構成キーを示します。</span></p>

<p id="config-key-table"><span class="merged" id="all.3QKNaZ.1" title="原文 : include::[tag=cors-config-table]">include::[tag=cors-config-table]</span></p>

<p><span class="merged" id="all.6Jbzq" title="原文 : The following example of basic cross-origin configuration, when loaded and used by the application, limits cross-origin resource sharing for PUT and DELETE operations to only foo.com and there.com:">次の基本的なクロス・オリジン構成の例は、アプリケーションによってロードおよび使用される場合、<code>PUT</code>および<code>DELETE</code>操作のクロス・オリジン・リソース共有を<code>foo.com</code>および<code>there.com</code>のみに制限します:</span></p>

<markup
lang="yaml"

>restrictive-cors:
  allow-origins: ["http://foo.com", "http://there.com"]
  allow-methods: ["PUT", "DELETE"]</markup>

</div>


<h3 id="_mapped_cross_origin_configuration"><span class="merged" id="all.1OHJHp" title="原文 : Mapped Cross-Origin Configuration">マップされたクロス・オリジン構成</span></h3>
<div class="section">
<p><span class="merged" id="all.39vzR5.spl1" title="原文 : In some cases, you or your users might want to configure CORS behavior based on URL path matching.">場合によっては、URLパスの一致に基づいてCORSの動作を構成する必要があります。</span> <span class="merged" id="all.39vzR5.spl2" title="原文 : Helidon represents mapped CORS information as a section, identified by a configuration key of your choosing, that contains:">Helidonは、マップされたCORS情報を、選択した構成キーで識別されるセクションとして表します。このセクションには、次のものが含まれます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zgzb1" title="原文 : An optional enabled setting which defaults to true and applies to the whole mapped CORS config section, and"><code>true</code>にデフォルト設定され、マップされたCORS構成セクション全体に適用されるオプションの<code>enabled</code>設定、および</span></p>

</li>
<li>
<p><span class="merged" id="all.1dys2z" title="原文 : An optional paths subsection containing zero or more entries, each of which contains:">ゼロ個以上のエントリを含むオプションの<code>paths</code>サブセクション。各サブセクションには次のものが含まれます:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1XKhTK" title="原文 : a basic CORS config section, and">基本的なCORS構成セクション、および</span></p>

</li>
<li>
<p><span class="merged" id="all.1JNvMG" title="原文 : a path-pattern path pattern that maps that basic CORS config section to the resource(s) it affects.">その基本的なCORS構成セクションを影響を受けるリソースにマップする<code>path-pattern</code>パス・パターン。</span></p>

</li>
</ul>

</li>
</ul>

<p><span class="merged" id="all.kcifA" title="原文 : You can use mapped configuration to your advantage if you want to allow your users to override the CORS behavior set up in the application code.">アプリケーション・コードで設定されたCORS動作をユーザーがオーバーライドできるようにする場合は、マップされた構成を利用できます。</span></p>

<p><span class="merged" id="all.Z2DyD" title="原文 : The following example illustrates the mapped cross-origin configuration format.">次の例は、マップされたクロス・オリジン構成の形式を示しています。</span></p>

<markup
lang="hocon"

>my-cors: <span class="conum" data-value="1" />
  paths: <span class="conum" data-value="2" />
    - path-pattern: /greeting <span class="conum" data-value="3" />
      allow-origins: ["http://foo.com", "http://there.com", "http://other.com"] <span class="conum" data-value="4" />
      allow-methods: ["PUT", "DELETE"]
    - path-pattern: / <span class="conum" data-value="5" />
      allow-methods: ["GET", "HEAD", "OPTIONS", "POST"] <span class="conum" data-value="6" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.uej61" title="原文 : Assigns a unique identifier for this mapped CORS config section.">このマップされたCORS構成セクションに一意の識別子を割り当てます。</span></li>
<li data-value="2"><span class="merged" id="all.3hUVgb" title="原文 : Collects the sequence of entries, each of which maps a basic CORS config to a path pattern.">エントリのシーケンスを収集し、それぞれが基本CORS構成をパス・パターンにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.36fbXU" title="原文 : Marks the beginning of an entry (the - character) and maps the associated basic CORS config to the /greeting subresource (the path-pattern key and value).">エントリの開始をマークし(<code>-</code>文字)、関連付けられた基本CORS構成を<code>/greeting</code>サブリソース(<code>path-pattern</code>キーおよび値)にマップします。</span></li>
<li data-value="4"><span class="merged" id="all.ovWjJ" title="原文 : Begins the basic CORS config section for /greeting; it restricts sharing via PUT and DELETE to the listed origins."><code>/greeting</code>の基本CORS構成セクションを開始し、<code>PUT</code>および<code>DELETE</code>を介した共有をリストされたオリジンに制限します。</span></li>
<li data-value="5"><span class="merged" id="all.CjGwV" title="原文 : Marks the beginning of the next entry (the - character) and maps the associated basic CORS config to the top-level resource in the app (the path-pattern key and value).">次のエントリの開始をマークし(<code>-</code>文字)、関連付けられた基本CORS構成をアプリケーションの最上位リソース(<code>path-pattern</code>キーおよび値)にマップします。</span></li>
<li data-value="6"><span class="merged" id="all.SxMBG" title="原文 : Begins the basic CORS config section for /; it permits sharing of resources at the top-level path with all origins for the indicated HTTP methods."><code>/</code>の基本CORS構成セクションを開始します。これにより、指定されたHTTPメソッドのすべてのオリジンと最上位パスのリソースを共有できます。</span></li>
</ul>

<p><span class="merged" id="all.32lg3J.1" title="原文 : Path patterns can be any expression accepted by the PathMatcher class.">パス・パターンには、<a href="/apidocs/io.helidon.webserver/io/helidon/webserver/PathMatcher.html" target="_blank"><code>PathMatcher</code></a>クラスで使用できる任意の式を指定できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3gE4C2.spl1" title="原文 : Be sure to arrange the entries in the order that you want Helidon to check them.">Helidonでチェックする順序にエントリを配置してください。</span> <span class="merged" id="all.3gE4C2.spl2" title="原文 : Helidon CORS support searches the cross-origin entries in the order you define them until it finds an entry that matches an incoming request’s path pattern and HTTP method.">Helidon CORSサポートは、受信リクエストのパス・パターンおよびHTTPメソッドに一致するエントリが見つかるまで、定義した順序でクロス・オリジン・エントリを検索します。</span> </p>
</div>

</div>


<h3 id="using-config-from-app"><span class="merged" id="all.38LxXX" title="原文 : Using CORS Configuration in the Application">アプリケーションでのCORS構成の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1DG4JD.spl1" title="原文 : You use configuration in combination with the Helidon CORS SE API to add CORS support to your resources.">Helidon CORS SE APIと組み合せて構成を使用して、CORSサポートをリソースに追加します。</span> <span class="merged" id="all.1DG4JD.spl2" title="原文 : The example in Sample Routing Setup Using the CrossOriginConfig API uses the low-level Helidon CORS SE API to create a CrossOriginConfig instance that is then used as part of a CorsSupport instance to create the routing rules."><router-link @click.native="this.scrollFix('#se-api-routing-example')" to="#se-api-routing-example">「<code>CrossOriginConfig</code> APIを使用したルーティング設定の例」</router-link>の例では、低レベルのHelidon CORS SE APIを使用して<code>CrossOriginConfig</code>インスタンスを作成し、これを<code>CorsSupport</code>インスタンスの一部として使用してルーティング・ルールを作成します。</span> <span class="merged" id="all.1DG4JD.spl3" title="原文 : As an alternative to using the low-level API, this example uses config to create the CrossOriginConfig instance instead.">この例では、低レベルAPIを使用するかわりに、configを使用して<code>CrossOriginConfig</code>インスタンスを作成します。</span> </p>

<markup
lang="java"

>static void routing(HttpRouting.Builder routing) {

    CorsSupport.Builder builder = CorsSupport.builder();

    Config config = Config.global();
    config.get("my-cors") <span class="conum" data-value="1" />
            .ifExists(builder::mappedConfig);
    config.get("restrictive-cors") <span class="conum" data-value="2" />
            .ifExists(builder::config);
    builder.addCrossOrigin(CrossOriginConfig.create()); <span class="conum" data-value="3" />

    CorsSupport corsSupport = builder.build(); <span class="conum" data-value="4" />

    // Note: Add the CORS routing *before* registering the GreetService routing.
    return Routing.builder()
            .register("/greet", corsSupport, new GreetService()) <span class="conum" data-value="5" />
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1MD8Ll" title="原文 : If my-cors exists in the configuration, use it to add mapped CORS config to the CorsSupport builder."><code>my-cors</code>が構成に存在する場合は、それを使用してマップされたCORS構成を<code>CorsSupport</code>ビルダーに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.3olcBe" title="原文 : If restrictive-cors exists in the configuration, use it to add basic (not mapped) config to the builder."><code>restrictive-cors</code>が構成に存在する場合は、それを使用して基本的な(マップされていない)構成をビルダーに追加します。</span></li>
<li data-value="3"><span class="merged" id="all.3ywCDV" title="原文 : Provide default CORS handling for requests that do not match earlier entries.">以前のエントリと一致しないリクエストにデフォルトのCORS処理を指定します。</span></li>
<li data-value="4"><span class="merged" id="all.32e2y5" title="原文 : Obtain the finished CorsSupport instance.">終了した<code>CorsSupport</code>インスタンスを取得します。</span></li>
<li data-value="5"><span class="merged" id="all.3buqo9" title="原文 : Use corsSupport in constructing the routing rules."><code>corsSupport</code>を使用してルーティング・ルールを作成します。</span></li>
</ul>

<p><span class="merged" id="all.4XKlxT.spl1" title="原文 : As each request arrives, Helidon checks it against the cross-origin config instances in the order that your application added them to the CorsSupport.Builder.">リクエストが到着するたびに、Helidonは、アプリケーションが<code>CorsSupport.Builder</code>に追加した順序で、リクエストをクロス・オリジン構成インスタンスと照合します。</span> <span class="merged" id="all.4XKlxT.spl2" title="原文 : The my-cors mapped configuration acts as an override because the application added it to the builder first."><code>my-cors</code>マップ済構成は、アプリケーションによって最初にビルダーに追加されたため、オーバーライドとして機能します。</span> </p>

<p><span class="merged" id="all.nYuPx.spl1" title="原文 : If the my-cors config key does not appear in the configuration, then the code skips creating a CrossOriginConfig instance based on that configuration, and no overriding occurs."><code>my-cors</code>構成キーが構成に表示されない場合、コードはその構成に基づいた<code>CrossOriginConfig</code>インスタンスの作成をスキップし、オーバーライドは行われません。</span> <span class="merged" id="all.nYuPx.spl2" title="原文 : The CORS behavior that is established by the other CrossOriginConfig instance based on the restrictive-cors config (if present) prevails."><code>restrictive-cors</code>構成(存在する場合)に基づいて他の<code>CrossOriginConfig</code>インスタンスによって確立されるCORSの動作が優先されます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.mt35Y" title="原文 : Remember that if you set configuration in a file that you include as part of your application JAR file, then you need to rebuild and restart your application for any changes to take effect.">アプリケーションJARファイルの一部として含めるファイルに構成を設定した場合、変更を有効にするには、アプリケーションを再ビルドして再起動する必要があります。</span></p>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.28"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.1JoMIT" title="原文 : For a complete example, see Helidon SE CORS Example.">完全な例については、<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/cors" target="_blank">「Helidon SE CORSの例」</a>を参照してください。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.19"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_cors_and_the_requested_uri_feature"><span class="merged" id="all.2u7iDX.1" title="原文 : CORS and the Requested URI Feature">CORSおよびリクエストされたURI機能</span></h3>
<div class="section">
<p><span class="merged" id="all.2rLx8L.1.spl1" title="原文 : The decisions the Helidon CORS feature makes depend on accurate information about each incoming request, particularly the host to which the request is sent.">Helidon CORS機能によるディシジョンは、各受信リクエスト(特にリクエストの送信先ホスト)に関する正確な情報によって異なります。</span> <span class="merged" id="all.2rLx8L.1.spl2" title="原文 : Conveyed as headers in the request, this information can be changed or overwritten by intermediate nodes-​such as load balancers-​between the origin of the request and your service.">リクエストでヘッダーとして提供されるこの情報は、リクエストの起点とサービスの間の中間ノード(ロード・バランサなど)によって変更または上書きできます。</span> </p>

<p><span class="merged" id="all.3SQYmJ.spl1" title="原文 : Well-behaved intermediate nodes preserve this important data in other headers, such as Forwarded.">適切に動作する中間ノードは、この重要なデータを<code>Forwarded</code>などの他のヘッダーに保持します。</span> <span class="merged" id="all.3SQYmJ.spl2" title="原文 : You can configure how the Helidon server handles these headers as described in the documentation for requested URI discovery."><router-link :to="{path: '/se/webserver', hash: '#_requested_uri_discovery'}">「リクエストされたURI検出」</router-link>のドキュメントの説明に従って、Helidonサーバーがこれらのヘッダーを処理する方法を構成できます。</span> </p>

<p><span class="merged" id="all.MAzvr.1" title="原文 : The CORS support in Helidon uses the requested URI feature to discover the correct information about each request, according to your configuration, so it can make accurate decisions about whether to permit cross-origin accesses.">HelidonのCORSサポートは、リクエストされたURI機能を使用して、構成に従って各リクエストに関する正しい情報を検出するため、クロス・オリジン・アクセスを許可するかどうかを正確にディシジョンできます。</span></p>

</div>


<h3 id="_using_cors_support_in_built_in_helidon_services"><span class="merged" id="all.2Bi3yG.1" title="原文 : Using CORS Support in Built-in Helidon Services">組込みのHelidonサービスでのCORSサポートの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.4JS0CG.spl1" title="原文 : Several built-in Helidon services-​health, metrics, and OpenAPI--have integrated CORS support.">組込みのHelidonサービス(<router-link to="/se/health">health</router-link>、<router-link to="/se/metrics/metrics">metrics</router-link>および<router-link to="/se/openapi/openapi">OpenAPI</router-link>)には、CORSサポートが統合されています。</span> <span class="merged" id="all.4JS0CG.spl2" title="原文 : You can include these services in your application and control how those resources can be shared across origins.">これらのサービスをアプリケーションに組み込み、これらのリソースをオリジン間で共有する方法を制御できます。</span> </p>

<p><span class="merged" id="all.My9kd.1.spl1" title="原文 : For example, several websites related to OpenAPI run a web application in your browser.">たとえば、OpenAPIに関連するいくつかのwebサイトでは、ブラウザでWebアプリケーションが実行されます。</span> <span class="merged" id="all.My9kd.1.spl2" title="原文 : You provide the URL for your application to the browser application.">アプリケーションのURLをブラウザ・アプリケーションに指定します。</span> <span class="merged" id="all.My9kd.1.spl3" title="原文 : The browser application uses the URL to retrieve the OpenAPI document that describes the application’s endpoints directly from your application.">ブラウザ・アプリケーションは、URLを使用して、アプリケーションのエンドポイントを記述するOpenAPIドキュメントをアプリケーションから直接取得します。</span> <span class="merged" id="all.My9kd.1.spl4" title="原文 : The browser application then displays a user interface that you use to &quot;drive&quot; your application.">ブラウザ・アプリケーションには、アプリケーションの駆動に使用するユーザー・インタフェースが表示されます。</span> <span class="merged" id="all.My9kd.1.spl5" title="原文 : That is, you provide input, have the web application send requests to your application endpoints, and then view the responses.">つまり、入力を指定し、webアプリケーションからアプリケーション・エンドポイントにリクエストを送信して、レスポンスを表示します。</span> <span class="merged" id="all.My9kd.1.spl6" title="原文 : This scenario is exactly the situation CORS addresses: an application in the browser from one origin - the user interface downloaded from the website - requests a resource from another origin - the /openapi endpoint which Helidon’s OpenAPI built-in service automatically adds to your application.">このシナリオは、CORSアドレスの正確な状況です: webサイトからダウンロードされたユーザー・インタフェースであるブラウザ内のアプリケーションが、別のオリジン(Helidon OpenAPI組込みサービスがアプリケーションに自動的に追加する<code>/openapi</code>エンドポイント)からリソースをリクエストします。</span> </p>

<p><span class="merged" id="all.3dbLoT.1" title="原文 : Integrating CORS support into these built-in services allows such third-party web sites and their browser applications - or more generally, apps from any other origin - to work with your Helidon application.">CORSサポートをこれらの組込みサービスに統合すると、このようなサード・パーティのwebサイトおよびそのブラウザ・アプリケーション(より一般的には他のオリジンのアプリケーション)でHelidonアプリケーションを使用できるようになります。</span></p>

<p><span class="merged" id="all.2Y0lUj.spl1" title="原文 : Because all three of these built-in Helidon services serve only GET endpoints, by default the integrated CORS support in all three services permits any origin to share their resources using GET, HEAD, and OPTIONS HTTP requests.">これら3つの組込みHelidonサービスはすべて<code>GET</code>エンドポイントにのみサービスを提供するため、デフォルトでは、3つのサービスすべてで統合CORSサポートにより、すべてのオリジンが<code>GET</code>、<code>HEAD</code>および<code>OPTIONS</code> HTTPリクエストを使用してリソースを共有できます。</span> <span class="merged" id="all.2Y0lUj.spl2" title="原文 : You can customize the CORS set-up for these built-in services independently from each other using either the Helidon API, configuration, or both.">Helidon APIまたは構成(あるいはその両方)を使用して、これらの組込みサービスのCORS設定を相互に独立してカスタマイズできます。</span> <span class="merged" id="all.2Y0lUj.spl3" title="原文 : You can use this override feature to control the CORS behavior of the built-in services even if you do not add CORS behavior to your own endpoints.">このオーバーライド機能を使用すると、独自のエンドポイントにCORS動作を追加しない場合でも、組込みサービスのCORS動作を制御できます。</span> </p>


<h4 id="_built_in_services_with_cors"><span class="merged" id="all.2KW42K.1" title="原文 : Built-in Services with CORS">CORSによる組込みサービス</span></h4>
<div class="section">
<p><span class="merged" id="all.4G7IRs.1" title="原文 : To use built-in services with CORS support and customize the CORS behavior:">CORSサポートで組込みサービスを使用し、CORSの動作をカスタマイズするには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1qC2bQ.1.spl1" title="原文 : Add the built-in service or services to your application.">組込みサービスをアプリケーションに追加します。</span> <span class="merged" id="all.1qC2bQ.1.spl2" title="原文 : The health, metrics, and OpenAPI services automatically include default CORS support.">ヘルス、メトリクスおよびOpenAPIサービスには、デフォルトのCORSサポートが自動的に含まれます。</span> 

</li>
<li>

<div><p><span class="merged" id="all.2NZzgZ" title="原文 : Add a dependency on the Helidon SE CORS artifact to your Maven pom.xml file.">Helidon SE CORSアーティファクトへの依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3bV9CI.1" title="原文 : If you want the built-in services to support CORS, then you need to add the CORS dependency even if your own endpoints do not use CORS.">組込みサービスでCORSをサポートする場合は、独自のエンドポイントでCORSを使用しない場合でもCORS依存関係を追加する必要があります。</span></p>
</div>
</div>

</li>
<li>
<span class="merged" id="all.2ERHjg" title="原文 : Use the Helidon API or configuration to customize the CORS behavior as needed.">Helidon APIまたは構成を使用して、必要に応じてCORSの動作をカスタマイズします。</span>

</li>
</ol>

<p><span class="merged" id="all.3HYa6U.spl1" title="原文 : The documentation for the individual built-in services describes how to add each service to your application, including adding a Maven dependency and including the service in your application’s routing rules.">個々の組込みサービスのドキュメントでは、Maven依存関係の追加やアプリケーションのルーティング・ルールへのサービスの組込みなど、各サービスをアプリケーションに追加する方法について説明します。</span> <span class="merged" id="all.3HYa6U.spl2" title="原文 : In your application’s configuration file, the configuration for each service appears under its own key.">アプリケーションの構成ファイルでは、各サービスの構成が独自のキーの下に表示されます。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.RiBJw.1" title="原文 : Helidon Service Documentation">Helidonサービスのドキュメント</span></td>
<td class=""><span class="merged" id="all.1Ov129.4"  title="原文:: Configuration Key">構成キー</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3D3aPe" title="原文 : health"><router-link to="/se/health">health</router-link></span></td>
<td class=""><span class="merged" id="all.4HLPu5.3"  title="原文: health"><code>health</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2gf51L" title="原文 : metrics"><router-link to="/se/metrics/metrics">metrics</router-link></span></td>
<td class=""><span class="merged" id="all.4KU3uR.3"  title="原文: metrics"><code>metrics</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2VN93L" title="原文 : OpenAPI"><router-link to="/se/openapi/openapi">OpenAPI</router-link></span></td>
<td class=""><span class="merged" id="all.4chBk7.1"  title="原文: openapi"><code>openapi</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4YZeBs" title="原文 : The Helidon SE QuickStart example uses these services, so you can use that as a template for your own application, or use the example project itself to experiment with customizing the CORS behavior in the built-in services."><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/quickstarts/helidon-quickstart-se" target="_blank">「Helidon SE QuickStartの例」</a>ではこれらのサービスが使用されるため、独自のアプリケーションのテンプレートとして使用することも、サンプル・プロジェクト自体を使用して組込みサービスのCORS動作のカスタマイズを試すこともできます。</span></p>

</div>


<h4 id="_controlling_cors_for_built_in_services"><span class="merged" id="all.2XxsjW" title="原文 : Controlling CORS for Built-in Services">組込みサービスのCORSの制御</span></h4>
<div class="section">

<h5 id="_using_the_api"><span class="merged" id="all.30W5ZC"  title="原文:: Using the API">APIの使用</span></h5>
<div class="section">
<p><span class="merged" id="all.tMKmo" title="原文 : Although services such as health, metrics, and OpenAPI are built into Helidon, to use them your application must create instances of the services and then use those instances in building your application’s routing rules.">ヘルス、メトリクス、OpenAPIなどのサービスはHelidonに組み込まれていますが、これらを使用するには、アプリケーションでサービスのインスタンスを作成し、それらのインスタンスを使用してアプリケーションのルーティング・ルールをビルドする必要があります。</span></p>

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
<span class="merged" id="all.2z5HnZ" title="原文 : Invoke the builder’s build method to initialize the service instance.">ビルダーの<code>build</code>メソッドを呼び出して、サービス・インスタンスを初期化します。</span>

</li>
<li>
<span class="merged" id="all.1diu7j" title="原文 : Use the service instance in preparing the routing rules.">ルーティング・ルールの準備でサービス・インスタンスを使用します。</span>

</li>
</ol>

<p><span class="merged" id="all.TGPIJ" title="原文 : The following excerpt shows changes to the Helidon SE QuickStart example which limit sharing of the /metrics endpoint to http://foo.com.">次の抜粋は、<code>http://foo.com</code>への<code>/metrics</code>エンドポイントの共有を制限する<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/quickstarts/helidon-quickstart-se" target="_blank">「Helidon SE QuickStartの例」</a>に対する変更を示しています。</span></p>

<markup
lang="java"

>private static Routing createRouting(Config config) {
    CrossOriginConfig.Builder metricsCrossOriginConfigBuilder = CrossOriginConfig.builder() <span class="conum" data-value="1" />
            .allowOrigins("http://foo.com");
    RestServiceSettings.Builder restServiceSettingsBuilder = RestServiceSettings.builder()
             .crossOriginConfig(metricsCrossOriginConfigBuilder); <span class="conum" data-value="2" />
    MetricsSupport metrics = MetricsSupport.builder()
            .restServiceSettings(restServiceSettingsBuilder) <span class="conum" data-value="3" />
            .build();
    GreetService greetService = new GreetService(config);
    HealthSupport health = HealthSupport.builder()
            .addLiveness(HealthChecks.healthChecks())   // Adds a convenient set of checks
            .build();

    return Routing.builder()
            .register(health)                   // Health at "/health"
            .register(metrics)                  // Metrics at "/metrics" <span class="conum" data-value="4" />
            .register("/greet", greetService)
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.mpYuo" title="原文 : Create the CrossOriginConfig.Builder for metrics, limiting sharing to http://foo.com.">メトリクスの<code>CrossOriginConfig.Builder</code>を作成し、<code>http://foo.com</code>への共有を制限します。</span></li>
<li data-value="2"><span class="merged" id="all.2tlC1Q" title="原文 : Use the CrossOriginConfig.Builder instance in constructing the RestServiceSetting.Builder (which assigns common settings such as the CORS configuration and the web context for the service endpoint)."><code>CrossOriginConfig.Builder</code>インスタンスを使用して、<code>RestServiceSetting.Builder</code>を作成します(CORS構成やサービス・エンドポイントのwebコンテキストなどの一般的な設定を割り当てます)。</span></li>
<li data-value="3"><span class="merged" id="all.4dK1NZ" title="原文 : Use the RestServiceSetting.Builder in preparing the MetricsSupport service."><code>MetricsSupport</code>サービスの準備で<code>RestServiceSetting.Builder</code>を使用します。</span></li>
<li data-value="4"><span class="merged" id="all.2zPAJT" title="原文 : Use the MetricsSupport object in creating the routing rules."><code>MetricsSupport</code>オブジェクトを使用してルーティング・ルールを作成します。</span></li>
</ul>


<h6 id="_configuring_cors_for_built_in_services"><span class="merged" id="all.4JYs68.1" title="原文 : Configuring CORS for Built-in Services">組込みサービスのCORSの構成</span></h6>
<div class="section">
<p><span class="merged" id="all.4gbKsh" title="原文 : You can also use configuration to control whether and how each of the built-in services works with CORS.">構成を使用して、各組込みサービスがCORSと連携するかどうか、およびどのように連携するかを制御することもできます。</span></p>

<p><span class="merged" id="all.43vdu1.spl1" title="原文 : Your application can pass configuration to the builder for each built-in service.">アプリケーションは、組込みサービスごとに構成をビルダーに渡すことができます。</span> <span class="merged" id="all.43vdu1.spl2" title="原文 : In the configuration for the health, metrics, and OpenAPI services, you can add a section for CORS.">ヘルス、メトリクスおよびOpenAPIサービスの構成では、CORSのセクションを追加できます。</span> </p>

<p><span class="merged" id="all.2i6xie" title="原文 : The following example restricts sharing of the /health resource, provided by the health built-in service, to only the origin http://there.com.">次の例では、ヘルス組込みサービスによって提供される<code>/health</code>リソースの共有をオリジン<code>http://there.com</code>のみに制限します。</span></p>

<markup
lang="hocon"

>health:
  cors:
    allow-origins: [http://there.com]</markup>

<p><span class="merged" id="all.4OT4qc.spl1" title="原文 : Modify your application to load the health config node and use it to construct the HealthSupport service.">アプリケーションを変更して<code>health</code>構成ノードをロードし、それを使用して<code>HealthSupport</code>サービスを構築します。</span> <span class="merged" id="all.4OT4qc.spl2" title="原文 : The following code shows this change in the the QuickStart SE example.">次のコードは、QuickStart SEの例におけるこの変更を示しています。</span> </p>

<markup
lang="java"

>HealthSupport health = HealthSupport.builder()
        .config(config.get("health")) <span class="conum" data-value="1" />
        .add(HealthChecks.healthChecks())   // Adds a convenient set of checks
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2yyqtq" title="原文 : Use the health config section (if present) to configure the health service."><code>health</code>構成セクション(存在する場合)を使用して、ヘルス・サービスを構成します。</span></li>
</ul>

<p><span class="merged" id="all.2fGOY1.spl1" title="原文 : You have full control over the CORS configuration for a built-in Helidon service.">組込みHelidonサービスのCORS構成を完全に制御できます。</span> <span class="merged" id="all.2fGOY1.spl2" title="原文 : Use a CORS config section as described in Using Configuration for CORS."><router-link @click.native="this.scrollFix('#using-config-from-app')" to="#using-config-from-app">「CORSの構成の使用」</router-link>の説明に従って、CORS構成セクションを使用します。</span> </p>

</div>

</div>

</div>


<h4 id="_accessing_the_shared_resources"><span class="merged" id="all.tTLVC.1" title="原文 : Accessing the Shared Resources">共有リソースへのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.15iVUA.spl1" title="原文 : If you have edited the Helidon SE QuickStart application as described in the previous topics and saved your changes, you can build and run the application.">前のトピックの説明に従ってHelidon SE QuickStartアプリケーションを編集し、変更を保存した場合は、アプリケーションをビルドして実行できます。</span> <span class="merged" id="all.15iVUA.spl2" title="原文 : Once you do so you can execute curl commands to demonstrate the behavior changes in the metric and health services with the addition of the CORS functionality.">これを行うと、CORS機能を追加して<code>curl</code>コマンドを実行し、メトリックおよびヘルス・サービスの動作の変更を示すことができます。</span> <span class="merged" id="all.15iVUA.spl3" title="原文 : Note the addition of the Origin header value in the curl commands, and the Access-Control-Allow-Origin in the successful responses."><code>curl</code>コマンドでの<code>Origin</code>ヘッダー値の追加、および成功したレスポンスでの<code>Access-Control-Allow-Origin</code>の追加に注意してください。</span> </p>


<h5 id="_build_and_run_the_application"><span class="merged" id="all.1d3gmd.1" title="原文 : Build and Run the Application">アプリケーションのビルドと実行</span></h5>
<div class="section">
<p><span class="merged" id="all.3dCodv.1" title="原文 : Build and run the QuickStart application as usual.">通常どおり、QuickStartアプリケーションをビルドして実行します。</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="listing"

>WEB server is up! http://localhost:8080/greet</markup>

</div>


<h5 id="_retrieve_metrics"><span class="merged" id="all.CwdJ9.1" title="原文 : Retrieve Metrics">メトリクスの取得</span></h5>
<div class="section">
<p><span class="merged" id="all.4PWDDI.1" title="原文 : The metrics service rejects attempts to access metrics on behalf of a disallowed origin.">メトリクス・サービスは、許可されていないオリジンにかわってメトリクスへのアクセス試行を拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://other.com" http://localhost:8080/metrics</markup>

<markup
lang="listing"

>HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 11:08:09 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.1DTU3M.1" title="原文 : But accesses from foo.com succeed.">ただし、<code>foo.com</code>からのアクセスは成功します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/metrics</markup>

<markup
lang="listing"

>HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://foo.com
Content-Type: text/plain
Date: Mon, 11 May 2020 11:08:16 -0500
Vary: Origin
connection: keep-alive
content-length: 6065

# TYPE base_classloader_loadedClasses_count gauge
# HELP base_classloader_loadedClasses_count Displays the number of classes that are currently loaded in the Java virtual machine.
base_classloader_loadedClasses_count 3568</markup>

</div>


<h5 id="_retrieve_health"><span class="merged" id="all.4bQL4U.1" title="原文 : Retrieve Health">ヘルスの取得</span></h5>
<div class="section">
<p><span class="merged" id="all.3oMvPB.1" title="原文 : The health service rejects requests from origins not specifically approved.">ヘルス・サービスは、明示的に承認されていないオリジンからのリクエストを拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/health</markup>

<markup
lang="listing"

>HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 12:06:55 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.43x4WI.1" title="原文 : And responds successfully only to cross-origin requests from http://there.com.">また、<code>http://there.com</code>からのクロス・オリジン・リクエストにのみ正常に応答します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://there.com" http://localhost:8080/health</markup>

<markup
lang="listing"

>HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://there.com
Content-Type: application/json
Date: Mon, 11 May 2020 12:07:32 -0500
Vary: Origin
connection: keep-alive
content-length: 461

{"outcome":"UP",...}</markup>

</div>

</div>

</div>

</div>

</doc-view>
