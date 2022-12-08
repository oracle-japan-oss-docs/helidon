<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2ZteXR" title="原文 : Using CORS in Helidon MP Built-in Services">Helidon MP組込みサービスでのCORSの使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.rRxEr.spl1" title="原文 : Several built-in Helidon services - health, metrics, and OpenAPI - have integrated CORS support.">いくつかの組込みHelidonサービス(ヘルス、メトリクスおよびOpenAPI)には、CORSサポートが統合されています。</span> <span class="merged" id="all.rRxEr.spl2" title="原文 : You can include these services in your application and control their CORS behavior.">これらのサービスをアプリケーションに含め、CORSの動作を制御できます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_understanding_cors_support_in_helidon_services"><span class="merged" id="all.4CT4YD" title="原文 : Understanding CORS Support in Helidon Services">Helidon ServicesでのCORSサポートの理解</span></h2>
<div class="section">
<p><span class="merged" id="all.B7yhT.spl1" title="原文 : Helidon lets you easily include health, metrics, and OpenAPI services in your Helidon application.">Helidonを使用すると、<router-link to="/mp/health/01_introduction">health</router-link>、<router-link to="/mp/metrics/01_introduction">metrics</router-link>および<router-link to="/mp/openapi/01_openapi">OpenAPI</router-link>サービスをHelidonアプリケーションに簡単に組み込むことができます。</span> <span class="merged" id="all.B7yhT.spl2" title="原文 : These services add endpoints to your application so that clients can retrieve information about it.">これらのサービスは、クライアントがアプリケーションに関する情報を取得できるように、アプリケーションにエンドポイントを追加します。</span> <span class="merged" id="all.B7yhT.spl3" title="原文 : As with the application endpoints you write, these endpoints represent resources that can be shared across origins.">記述するアプリケーション・エンドポイントと同様に、これらのエンドポイントはオリジン間で共有できるリソースを表します。</span> </p>

<p><span class="merged" id="all.My9kd.spl1" title="原文 : For example, several websites related to OpenAPI run a web application in your browser.">たとえば、OpenAPIに関連するいくつかのwebサイトでは、ブラウザでWebアプリケーションが実行されます。</span> <span class="merged" id="all.My9kd.spl2" title="原文 : You provide the URL for your application to the browser application.">アプリケーションのURLをブラウザ・アプリケーションに指定します。</span> <span class="merged" id="all.My9kd.spl3" title="原文 : The browser application uses the URL to retrieve the OpenAPI document that describes the application&rsquo;s endpoints directly from your application.">ブラウザ・アプリケーションは、URLを使用して、アプリケーションのエンドポイントを記述するOpenAPIドキュメントをアプリケーションから直接取得します。</span> <span class="merged" id="all.My9kd.spl4" title="原文 : The browser application then displays a user interface that you use to &quot;drive&quot; your application.">ブラウザ・アプリケーションには、アプリケーションの駆動に使用するユーザー・インタフェースが表示されます。</span> <span class="merged" id="all.My9kd.spl5" title="原文 : That is, you provide input, have the web application send requests to your application endpoints, and then view the responses.">つまり、入力を指定し、webアプリケーションからアプリケーション・エンドポイントにリクエストを送信して、レスポンスを表示します。</span> <span class="merged" id="all.My9kd.spl6" title="原文 : This scenario is exactly the situation CORS addresses: an application in the browser from one origin - the user interface downloaded from the website - requests a resource from another origin - the /openapi endpoint which Helidon&rsquo;s OpenAPI built-in service automatically adds to your application.">このシナリオは、CORSアドレスの正確な状況です: webサイトからダウンロードされたユーザー・インタフェースであるブラウザ内のアプリケーションが、別のオリジン(Helidon OpenAPI組込みサービスがアプリケーションに自動的に追加する<code>/openapi</code>エンドポイント)からリソースをリクエストします。</span> </p>

<p><span class="merged" id="all.3dbLoT" title="原文 : Integrating CORS support into these built-in services allows such third-party web sites and their browser applications - or more generally, apps from any other origin - to work with your Helidon application.">CORSサポートをこれらの組込みサービスに統合すると、このようなサード・パーティのwebサイトおよびそのブラウザ・アプリケーション(より一般的には他のオリジンのアプリケーション)でHelidonアプリケーションを使用できるようになります。</span></p>

<p><span class="merged" id="all.J5fQw.spl1" title="原文 : Because all three of these built-in Helidon services serve only GET endpoints, by default the integrated CORS support in all three services permits any origin to share their resources using GET, HEAD, and OPTIONS HTTP requests.">これら3つの組込みHelidonサービスはすべて<code>GET</code>エンドポイントにのみサービスを提供するため、デフォルトでは、3つのサービスすべてで統合CORSサポートにより、すべてのオリジンが<code>GET</code>、<code>HEAD</code>および<code>OPTIONS</code> HTTPリクエストを使用してリソースを共有できます。</span> <span class="merged" id="all.J5fQw.spl2" title="原文 : You can customize the CORS set-up for these built-in services independently from each other using configuration.">構成を使用して、これらの組込みサービスのCORS設定を相互に独立してカスタマイズできます。</span> <span class="merged" id="all.J5fQw.spl3" title="原文 : You can use this override feature to control the CORS behavior of the built-in services even if you do not add CORS behavior to your own endpoints.">このオーバーライド機能を使用すると、独自のエンドポイントにCORS動作を追加しない場合でも、組込みサービスのCORS動作を制御できます。</span> </p>

</div>

<h2 id="_getting_started"><span class="merged" id="all.J6ASm.1"  title="原文:: Getting Started">開始</span></h2>
<div class="section">
<p><span class="merged" id="all.4G7IRs" title="原文 : To use built-in services with CORS support and customize the CORS behavior:">CORSサポートで組込みサービスを使用し、CORSの動作をカスタマイズするには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1qC2bQ.spl1" title="原文 : Add the built-in service or services to your application.">組込みサービスをアプリケーションに追加します。</span> <span class="merged" id="all.1qC2bQ.spl2" title="原文 : The health, metrics, and OpenAPI services automatically include default CORS support.">ヘルス、メトリクスおよびOpenAPIサービスには、デフォルトのCORSサポートが自動的に含まれます。</span> 

</li>
<li>

<div><p><span class="merged" id="all.rrMls" title="原文 : Add a dependency on the Helidon MP CORS artifact to your Maven pom.xml file.">Helidon MP CORSアーティファクトへの依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3bV9CI" title="原文 : If you want the built-in services to support CORS, then you need to add the CORS dependency even if your own endpoints do not use CORS.">組込みサービスでCORSをサポートする場合は、独自のエンドポイントでCORSを使用しない場合でもCORS依存関係を追加する必要があります。</span></p>
</div>
<p><span class="merged" id="all.ec1sW.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存関係管理を宣言する方法について説明します。</span> <span class="merged" id="all.ec1sW.spl2" title="原文 : For CORS support in Helidon MP, you must include the following dependency in your project:">Helidon MPでCORSをサポートするには、プロジェクトに次の依存関係を含める必要があります:</span> </p>
</div>

</li>
<li>
<span class="merged" id="all.HNdYP" title="原文 : Use configuration to customize the CORS behavior as needed.">必要に応じて、構成を使用してCORSの動作をカスタマイズします。</span>

</li>
</ol>
<p><span class="merged" id="all.3dly93.spl1" title="原文 : The documentation for the individual built-in services describes how to add each service to your application, including adding a Maven dependency.">個々の組込みサービスのドキュメントでは、Maven依存関係の追加など、各サービスをアプリケーションに追加する方法について説明します。</span> <span class="merged" id="all.3dly93.spl2" title="原文 : In your application&rsquo;s configuration file, the configuration for each service appears under its own key.">アプリケーションの構成ファイルでは、各サービスの構成が独自のキーの下に表示されます。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.RiBJw" title="原文 : Helidon Service Documentation">Helidonサービスのドキュメント</span></th>
<th><span class="merged" id="all.1Ov129.1"  title="原文:: Configuration Key">構成キー</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3TS93N" title="原文 : health"><router-link to="/mp/health/01_introduction">health</router-link></span></td>
<td class=""><span class="merged" id="all.4HLPu5"  title="原文: health"><code>health</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kVkIT" title="原文 : metrics"><router-link to="/mp/metrics/01_introduction">metrics</router-link></span></td>
<td class=""><span class="merged" id="all.4KU3uR"  title="原文: metrics"><code>metrics</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3YFmPY" title="原文 : OpenAPI"><router-link to="/mp/openapi/01_openapi">OpenAPI</router-link></span></td>
<td class=""><span class="merged" id="all.4chBk7"  title="原文: openapi"><code>openapi</code></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.243Sog" title="原文 : The Helidon MP QuickStart example uses these services, so you can use that as a template for your own application, or use the example project itself to experiment with customizing the CORS behavior in the built-in services."><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/quickstarts/helidon-quickstart-mp" id="" target="_blank" >「Helidon MP QuickStartの例」</a>ではこれらのサービスが使用されるため、独自のアプリケーションのテンプレートとして使用することも、サンプル・プロジェクト自体を使用して組込みサービスのCORS動作のカスタマイズを試すこともできます。</span></p>

</div>

<h2 id="_configuring_cors_for_built_in_services"><span class="merged" id="all.4JYs68" title="原文 : Configuring CORS for Built-in Services">組込みサービスのCORSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.16LBGQ" title="原文 : You can use configuration to control whether and how each of the built-in services works with CORS.">構成を使用して、各組込みサービスがCORSと連携するかどうか、およびどのように連携するかを制御できます。</span></p>

<p><span class="merged" id="all.3ZXjv2" title="原文 : For the health, metrics, and OpenAPI services, your configuration can include a section for CORS.">ヘルス、メトリクスおよびOpenAPIサービスの場合、構成にCORSのセクションを含めることができます。</span></p>

<p><span class="merged" id="all.2CPDDc.spl1" title="原文 : You have full control over the CORS configuration for a built-in Helidon service.">組込みHelidonサービスのCORS構成を完全に制御できます。</span> <span class="merged" id="all.2CPDDc.spl2" title="原文 : Use a basic CORS config section as described in Using Configuration with CORS in Helidon MP."><router-link to="/mp/cors/03_configuration-with-cors-mp">「Helidon MPでのCORSによる構成の使用」</router-link>で説明されているように、CORSの基本構成セクションを使用します。</span> </p>

<p><span class="merged" id="all.ENkqi" title="原文 : The following example restricts sharing of">次の例では、共有を制限</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.TISfy" title="原文 : the /health resource, provided by the health built-in service, to only the origin http://there.com, and">ヘルス組込みサービスによって提供される、オリジン<code>http://there.com</code>のみに対する<code>/health</code>リソース、および</span></p>

</li>
<li>
<p><span class="merged" id="all.39GT3Y" title="原文 : the /metrics resource, provided by the metrics built-in service, to only the origin http://foo.com.">メトリクス組込みサービスによって提供される、オリジン<code>http://foo.com</code>のみに対する<code>/metrics</code>リソース。</span></p>

</li>
</ul>
<markup
lang="hocon"

>...
health:
  cors:
    allow-origins: [http://there.com]
metrics:
  cors:
    allow-origins: [http://foo.com]
...</markup>

</div>

<h2 id="_accessing_the_shared_resources"><span class="merged" id="all.tTLVC" title="原文 : Accessing the Shared Resources">共有リソースへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.eaSD5.spl1" title="原文 : If you have edited the Helidon MP QuickStart application as described in the previous topics and saved your changes, you can build and run the application.">前のトピックの説明に従ってHelidon MP QuickStartアプリケーションを編集し、変更を保存した場合は、アプリケーションをビルドして実行できます。</span> <span class="merged" id="all.eaSD5.spl2" title="原文 : Once you do so you can execute curl commands to demonstrate the behavior changes in the metric and health services with the addition of the CORS functionality.">これを行うと、CORS機能を追加して<code>curl</code>コマンドを実行し、メトリックおよびヘルス・サービスの動作の変更を示すことができます。</span> <span class="merged" id="all.eaSD5.spl3" title="原文 : Note the addition of the Origin header value in the curl commands, and the Access-Control-Allow-Origin in the successful responses."><code>curl</code>コマンドでの<code>Origin</code>ヘッダー値の追加、および成功したレスポンスでの<code>Access-Control-Allow-Origin</code>の追加に注意してください。</span> </p>


<h3 id="_build_and_run_the_application"><span class="merged" id="all.1d3gmd" title="原文 : Build and Run the Application">アプリケーションのビルドと実行</span></h3>
<div class="section">
<p><span class="merged" id="all.3dCodv" title="原文 : Build and run the QuickStart application as usual.">通常どおり、QuickStartアプリケーションをビルドして実行します。</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-quickstart-mp.jar
...
2020.05.12 05:44:08 INFO io.helidon.microprofile.server.ServerCdiExtension Thread[main,5,main]: Server started on http://localhost:8080 (and all other host addresses) in 5280 milliseconds (since JVM startup).
...</markup>

</div>

<h3 id="_retrieve_metrics"><span class="merged" id="all.CwdJ9" title="原文 : Retrieve Metrics">メトリクスの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.4PWDDI" title="原文 : The metrics service rejects attempts to access metrics on behalf of a disallowed origin.">メトリクス・サービスは、許可されていないオリジンにかわってメトリクスへのアクセス試行を拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://other.com" http://localhost:8080/metrics

HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 11:08:09 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.1DTU3M" title="原文 : But accesses from foo.com succeed.">ただし、<code>foo.com</code>からのアクセスは成功します。</span></p>

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

<h3 id="_retrieve_health"><span class="merged" id="all.4bQL4U" title="原文 : Retrieve Health">ヘルスの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.3oMvPB" title="原文 : The health service rejects requests from origins not specifically approved.">ヘルス・サービスは、明示的に承認されていないオリジンからのリクエストを拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/health

HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 12:06:55 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.43x4WI" title="原文 : And responds successfully only to cross-origin requests from http://there.com.">また、<code>http://there.com</code>からのクロス・オリジン・リクエストにのみ正常に応答します。</span></p>

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
