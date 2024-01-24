<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.10w5vL" title="原文 : Helidon SE WebClient Guide">Helidon SE WebClientガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.HiDG7" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using WebClient.">このガイドでは、WebClientを使用していくつかの基本的な例を実行するために使用できるサンプルのHelidon SEプロジェクトを作成する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.1"  title="原文:: What you need">必要なもの</span></h2>
<div class="section">
<p><span class="merged" id="all.2UQif6.3" title="原文 : For this 15 minute tutorial, you will need the following:">この15分間のチュートリアルでは、次のものが必要です:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3EWh8P.9" title="原文 : A Helidon SE Application">Helidon SEアプリケーション</span></td>
<td class=""><span class="merged" id="all.3f8L7i.9" title="原文 : You can use your own application or use the Helidon SE Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/se/guides/quickstart">「Helidon SEクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.24" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.24" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.24" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.24" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.24"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.24" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.24"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.24" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="bash"
title="Verify Prerequisites"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

<markup
lang="bash"
title="Setting JAVA_HOME"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 21`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-21</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3he3GG" title="原文 : WebClient features"><router-link @click.native="this.scrollFix('#WebClient-features')" to="#WebClient-features">WebClient機能</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.V1iKf" title="原文 : WebClient usage"><router-link @click.native="this.scrollFix('#WebClient-usage')" to="#WebClient-usage">WebClientの使用方法</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.31o9Qr" title="原文 : WebClient Metrics"><router-link @click.native="this.scrollFix('#WebClient-Metrics')" to="#WebClient-Metrics">WebClientメトリクス</router-link></span></p>

</li>
</ul>


<h3 id="WebClient-features"><span class="merged" id="all.wxPly" title="原文 : WebClient Features">WebClientの特徴</span></h3>
<div class="section">
<p><span class="merged" id="all.3edNN7" title="原文 : Helidon’s WebClient is used to perform HTTP REST requests to target endpoints and handle their responses.">HelidonのWebClientは、ターゲット・エンドポイントへのHTTP RESTリクエストを実行し、そのレスポンスを処理するために使用されます。</span></p>

<p><span class="merged" id="all.XZcIr.spl1" title="原文 : Note: WebClient is still experimental and not intended for production use."><strong>ノート</strong>: WebClientはまだ実験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.XZcIr.spl2" title="原文 : APIs and features are not yet fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>

<p><span class="merged" id="all.3psjnP" title="原文 : WebClient provides the following features:">WebClientには、次の機能があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1YqxAH" title="原文 : User-friendly: Every client and request is created by a builder pattern, so it improves readability and code maintenance."><strong>ユーザー・フレンドリ</strong>: クライアントとリクエストは、ビルダー・パターンによって作成されるため、読みやすさとコードのメンテナンスが向上します。</span></p>

</li>
<li>
<p><span class="merged" id="all.SVp71.spl1" title="原文 : Following redirects: The WebClient is able to follow the redirect chain and perform requests on the correct endpoint for you."><strong>次のリダイレクト</strong>: WebClientは、リダイレクト・チェーンに従って、適切なエンドポイントでリクエストを実行できます。</span> <span class="merged" id="all.SVp71.spl2" title="原文 : You no longer have to point your client to the correct/final endpoint.">クライアントを正しいエンドポイント/最終エンドポイントに指定する必要がなくなります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4968EW" title="原文 : Tracing, metrics and security propagation: When you configure the Helidon WebServer to use tracing, metrics and security, the settings are automatically propagated to the WebClient and used during request/response."><strong>トレース、メトリクスおよびセキュリティ伝播</strong>: トレース、メトリクスおよびセキュリティを使用するようにHelidon WebServerを構成すると、設定はWebClientに自動的に伝播され、リクエスト/レスポンス中に使用されます。</span></p>

</li>
</ul>

<p><span class="merged" id="all.6VLdo" title="原文 : For more information about the WebClient, please refer to the WebClient Introduction."><code>WebClient</code>の詳細については、<router-link to="/se/webclient">「WebClient概要」</router-link>を参照してください。</span></p>

</div>


<h3 id="WebClient-usage"><span class="merged" id="all.2chlxG" title="原文 : WebClient Usage">WebClient使用法</span></h3>
<div class="section">

<h4 id="_create_a_sample_se_project"><span class="merged" id="all.2dGmUI" title="原文 : Create a sample SE project">サンプルSEプロジェクトの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.2w3hsK.2.spl1" title="原文 : Generate the project sources using the Helidon SE Maven archetype.">Helidon SE Maven原型を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.2w3hsK.2.spl2" title="原文 : The result is a simple project that can be used for the examples in this guide.">その結果、このガイドの例で使用できる単純なプロジェクトになります。</span> </p>

<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<p><span class="merged" id="all.4IFGlk" title="原文 : You should now have a directory called helidon-quickstart-se.">これで、<code>helidon-quickstart-se</code>というディレクトリがあります。</span></p>

<markup
lang="bash"
title="Open this directory"
>cd helidon-quickstart-se</markup>

<p><span class="merged" id="all.3oStMd.spl1" title="原文 : The Helidon quickstart is a greeting application supporting several HTTP requests such as GET and PUT.">Helidonクイックスタートは、GETやPUTなどのHTTPリクエストをサポートするグリーティング・アプリケーションです。</span> <span class="merged" id="all.3oStMd.spl2" title="原文 : Using it will be time-saving for this exercise as it will allow us to modify the project to demonstrate some of the Webclient features and usability, rather than start from scratch.">この演習では、最初から開始するのではなく、Webクライアントの機能と使いやすさの一部を示すようにプロジェクトを変更できるため、時間を節約できます。</span> </p>

</div>


<h4 id="_add_clientexample_class"><span class="merged" id="all.y47IP" title="原文 : Add ClientExample class">ClientExampleクラスの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3J7PIe.spl1" title="原文 : In io.helidon.examples.quickstart.se package, create a new class named ClientExample."><code>io.helidon.examples.quickstart.se</code>パッケージで、ClientExampleという名前の新しいクラスを作成します。</span> <span class="merged" id="all.3J7PIe.spl2" title="原文 : This class will use the WebClient to send request to the greeting application.">このクラスは、WebClientを使用して、グリーティング・アプリケーションにリクエストを送信します。</span> </p>

<markup
lang="java"
title="Create ClientExample class:"
>package io.helidon.examples.quickstart.se;

public class ClientExample {

    public static void main(String[] args) {

    }
}</markup>

<p><span class="merged" id="all.24ea4n.spl1" title="原文 : Add the following code to create a WebClient instance.">次のコードを追加してWebClientインスタンスを作成します。</span> <span class="merged" id="all.24ea4n.spl2" title="原文 : The builder approach allows you to create the WebClient with specific settings and improves the readability and simplicity of the code.">ビルダー・アプローチでは、特定の設定でWebClientを作成し、コードの読みやすさとシンプルさを向上させることができます。</span> </p>

<markup
lang="java"
title="Add WebClient instance to the main method:"
>import io.helidon.http.media.jsonp.JsonpSupport;
import io.helidon.webclient.WebClient;

WebClient webClient = WebClient.builder()
                .baseUri("http://localhost:8080")   <span class="conum" data-value="1" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.gBLSC" title="原文 : The base URI of the outbound requests.">アウトバウンド・リクエストのベースURI。</span></li>
</ul>

<p><span class="merged" id="all.1dXiUB.spl1" title="原文 : By default, the Helidon quickstart application runs on localhost:8080.">デフォルトでは、Helidonクイックスタート・アプリケーションはlocalhost:8080で実行されます。</span> <span class="merged" id="all.1dXiUB.spl2" title="原文 : If for some reason the host name or port number of the quickstart application is changed, make sure that the baseURI is also modified to reflect that change.">なんらかの理由でクイックスタート・アプリケーションのホスト名またはポート番号が変更された場合は、その変更を反映するようにbaseURIも変更されていることを確認してください。</span> <span class="merged" id="all.1dXiUB.spl3" title="原文 : Once built, the WebClient can be used to send a GET request to the greeting application.">ビルド後、WebClientを使用してグリーティング・アプリケーションにGETリクエストを送信できます。</span> </p>

<markup
lang="java"
title="Send a GET request to the target endpoint:"
>ClientResponseTyped&lt;String&gt; response = webClient.get()    <span class="conum" data-value="1" />
                .path("/greet")     <span class="conum" data-value="2" />
                .request(String.class);   <span class="conum" data-value="3" />
String entityString = response.entity();    <span class="conum" data-value="4" />
System.out.println(entityString);</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3O4tyy" title="原文 : Create a HTTP GET request.">HTTP GETリクエストを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3rsAAL" title="原文 : Target endpoint path.">ターゲット・エンドポイント・パス。</span></li>
<li data-value="3"><span class="merged" id="all.4FeiLr"  title="原文:: Execute the request">要求を実行します</span></li>
<li data-value="4"><span class="merged" id="all.3VtaoP" title="原文 : Return response entity handled as a String.">文字列として処理されたレスポンス・エンティティを返します。</span></li>
</ul>

<p><span class="merged" id="all.2uYZic.spl1" title="原文 : The path method appends /greet to the WebClient base URI which results to the request URI becoming http://localhost:8080/greet.">pathメソッドは、<code>/greet</code>をWebClientベースURIに追加し、リクエストURIが<code><a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>になります。</span> <span class="merged" id="all.2uYZic.spl2" title="原文 : The received response entity will be a greeting message and will be automatically handled as a String.">受信したレスポンス・エンティティは挨拶メッセージになり、自動的に文字列として処理されます。</span> <span class="merged" id="all.2uYZic.spl3" title="原文 : If no specific type is set in the method request(), HttpClientResponse will be returned by default.">メソッドrequest()に特定の型が設定されていない場合は、デフォルトで<code>HttpClientResponse</code>が返されます。</span> <span class="merged" id="all.2uYZic.spl4" title="原文 : This HttpClientResponse object contains response code, headers and entity.">この<code>HttpClientResponse</code>オブジェクトには、レスポンス・コード、ヘッダーおよびエンティティが含まれます。</span> </p>

</div>


<h4 id="_run_the_application"><span class="merged" id="all.H6GyM"  title="原文:: Run the application">アプリケーションの実行</span></h4>
<div class="section">
<markup
lang="bash"
title="Build the quickstart:"
>mvn package</markup>

<p><span class="merged" id="all.4EaalC" title="原文 : This command will create helidon-quickstart-se.jar in the target folder.">このコマンドは、ターゲット・フォルダにhelidon-quickstart-se.jarを作成します。</span></p>

<markup
lang="bash"
title="Run the greeting application:"
>java -cp target/helidon-quickstart-se.jar io.helidon.examples.quickstart.se.Main</markup>

<p><span class="merged" id="all.2FL6Fi" title="原文 : Open a new command prompt or terminal and run the ClientExample class you just created.">新しいコマンド・プロンプトまたは端末を開き、作成したClientExampleクラスを実行します。</span></p>

<markup
lang="bash"
title="Run the client application:"
>java -cp target/helidon-quickstart-se.jar io.helidon.examples.quickstart.se.ClientExample</markup>

<markup
lang="bash"
title="Output:"
>{"message":"Hello World!"}</markup>

<p><span class="merged" id="all.32ruC1" title="原文 : When the ClientExample finishes its execution, you can stop the Main class by pressing CTRL+C.">ClientExampleの実行が終了したら、<code>CTRL+C</code>を押してMainクラスを停止できます。</span></p>

</div>


<h4 id="_discover_other_webclient_functionality"><span class="merged" id="all.zJ6c1" title="原文 : Discover other WebClient functionality">Discoverの他のWebClient機能</span></h4>
<div class="section">
<p><span class="merged" id="all.1iI5pp.spl1" title="原文 : In practice, String is not the most useful return type, since it usually needs some more handling.">実際には、Stringは最も有用な戻り型ではありません。通常、処理がさらに必要になるためです。</span> <span class="merged" id="all.1iI5pp.spl2" title="原文 : In this case, it could be more interesting to return an object of another type like a JSON object.">この場合、JSONオブジェクトのような別の型のオブジェクトを返す方が面白い場合があります。</span> <span class="merged" id="all.1iI5pp.spl3" title="原文 : One way to process a JSON object is by enabling Helidon’s built-in JSON-P support and this can be simply achieved by adding its dependency in the project’s pom.xml:">JSONオブジェクトを処理する1つの方法は、Helidonの組込みJSON-Pサポートを有効にすることです。これは、プロジェクトのpom.xmlに依存関係を追加することで実現できます:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.http.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-http-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.Y3qad" title="原文 : Once the dependency is added, the feature will be automatically loaded as a service allowing the response methods to easily parse the JSON object.">依存関係が追加されると、この機能は自動的にサービスとしてロードされ、レスポンス・メソッドでJSONオブジェクトを簡単に解析できます。</span></p>

<markup
lang="java"
title="Replace String by JsonObject:"
>import javax.json.JsonObject;


ClientResponseTyped&lt;JsonObject&gt; response = webClient.get()
        .path("/greet/David")
        .request(JsonObject.class);  <span class="conum" data-value="1" />
String value = response.entity().getString("message");  <span class="conum" data-value="2" />
System.out.println(value);</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.34vIo0" title="原文 : Request a JsonObject as return value.">戻り値としてJsonObjectをリクエストします。</span></li>
<li data-value="2"><span class="merged" id="all.DzIhb" title="原文 : Extract the value of the JsonObject with name of message.">JsonObjectの値を<code>message</code>という名前で抽出します。</span></li>
</ul>

<p><span class="merged" id="all.1nrFCi" title="原文 : In the URI, the String value following greet is a path parameter which allows the application to greet someone.">URIでは、<code>greet</code>に続く文字列値は、アプリケーションが誰かに挨拶できるパス・パラメータです。</span></p>

<markup
lang="bash"
title="Output:"
>Hello David!</markup>

<p><span class="merged" id="all.37fAst.spl1" title="原文 : It is also possible to change the greeting word by using a PUT request to /greet/greeting path.">また、PUTリクエストを使用して挨拶語を<code>/greet/greeting</code>パスに変更することもできます。</span> <span class="merged" id="all.37fAst.spl2" title="原文 : The request also needs to include a body with JSON type and using a structure like {&quot;greeting&quot; : &quot;value&quot;}.">また、リクエストには、JSON型の本文を含めて、<code>{"greeting" : "value"}</code>などの構造を使用する必要があります。</span> </p>

<markup
lang="java"
title="Modify the application greeting:"
>import javax.json.Json;

JsonObject entity = Json.createObjectBuilder() <span class="conum" data-value="1" />
        .add("greeting", "Bonjour")
        .build();
webClient.put()     <span class="conum" data-value="2" />
        .path("/greet/greeting")
        .submit(entity);  <span class="conum" data-value="3" />
ClientResponseTyped&lt;JsonObject&gt; response = webClient.get()     <span class="conum" data-value="4" />
        .path("/greet/David")
        .request(JsonObject.class);
String entityString = response.entity().getString("message");  <span class="conum" data-value="5" />
System.out.println(entityString);</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.zHr5V" title="原文 : Create a JsonObject with key greeting and value bonjour.">キー<code>greeting</code>および値<code>bonjour</code>を使用してJsonObjectを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.4BAwiP" title="原文 : Create a PUT request.">PUTリクエストを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.4IxptT" title="原文 : Submit the JsonObject created earlier.">前に作成したJsonObjectを発行します。</span></li>
<li data-value="4"><span class="merged" id="all.3a2P5B" title="原文 : Execute a GET call to verify that the greeting has been changed.">GETコールを実行して、グリーティングが変更されたことを確認します。</span></li>
<li data-value="5"><span class="merged" id="all.2j7Yto" title="原文 : Retrieve the greeting message from the JSON object">JSONオブジェクトからグリーティング・メッセージを取得</span></li>
</ul>

<p><span class="merged" id="all.3iddhs" title="原文 : Executing the above code will yield this output showing that the greeting word has been changed.">前述のコードを実行すると、グリーティング・ワードが変更されたことを示す出力が生成されます。</span></p>

<markup
lang="bash"
title="Output:"
>Bonjour David!</markup>

</div>

</div>


<h3 id="WebClient-Metrics"><span class="merged" id="all.42HfSr" title="原文 : WebClient Metrics">WebClientメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.2GWk6b.spl1" title="原文 : WebClient, like other Helidon components, supports Metrics.">WebClientは、他のHelidonコンポーネントと同様に、メトリクスをサポートしています。</span> <span class="merged" id="all.2GWk6b.spl2" title="原文 : The following example introduces a counter metric that can be used to measure WebClient request activity.">次の例では、WebClientリクエスト・アクティビティの測定に使用できるカウンタ・メトリックを紹介します。</span> <span class="merged" id="all.2GWk6b.spl3" title="原文 : There are two ways to set up metrics, programmatically on the WebClient instance or manually using the configuration file.">WebClientインスタンスでプログラム的に、または構成ファイルを使用して手動で、メトリクスを設定する方法は2つあります。</span> </p>


<h4 id="_add_metrics_dependency"><span class="merged" id="all.4doQH0" title="原文 : Add metrics dependency">メトリクス依存関係の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.44KbUC" title="原文 : To enable support for this feature, the helidon-webclient-metrics dependency needs to be added .">この機能のサポートを有効にするには、<code>helidon-webclient-metrics</code>依存関係を追加する必要があります。</span></p>

<markup
lang="xml"
title="Add the following dependency to pom.xml:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_set_up_metrics_on_webclient_instance"><span class="merged" id="all.JWdlc" title="原文 : Set up metrics on WebClient instance">WebClientインスタンスのメトリクスの設定</span></h4>
<div class="section">
<p><span class="merged" id="all.hScWe.spl1" title="原文 : Metrics can be registered on the WebClient directly.">メトリクスは、WebClientに直接登録できます。</span> <span class="merged" id="all.hScWe.spl2" title="原文 : The following example shows how a Counter metric can be defined, created and monitored.">次の例は、<code>Counter</code>メトリックを定義、作成および監視する方法を示しています。</span> </p>

<markup
lang="java"
title="Example of metric creation:"
>import io.helidon.http.Method;
import io.helidon.metrics.api.Counter;
import io.helidon.metrics.api.MeterRegistry;
import io.helidon.metrics.api.Metrics;
import io.helidon.webclient.api.ClientResponseTyped;
import io.helidon.webclient.api.WebClient;
import io.helidon.webclient.metrics.WebClientMetrics;
import io.helidon.webclient.spi.WebClientService;

public class ClientExample {

    public static void main(String[] args) {
        final MeterRegistry METER_REGISTRY = Metrics.globalRegistry();

        String metricName = "counter.GET.localhost";       <span class="conum" data-value="1" />

        Counter counter = METER_REGISTRY.getOrCreate(Counter.builder(metricName));    <span class="conum" data-value="2" />
        System.out.println(metricName + ": " + counter.count());

        WebClientService clientServiceMetric = WebClientMetrics.counter()
                .methods(Method.GET)                // OPTIONAL
                .success(true)                      // OPTIONAL
                .errors(true)                       // OPTIONAL
                .description("Metric Description")  // OPTIONAL
                .nameFormat("counter.%1$s.%2$s")     <span class="conum" data-value="3" />
                .build();                            <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Ws6L1" title="原文 : Specify the metric name.">メトリック名を指定します。</span></li>
<li data-value="2"><span class="merged" id="all.2KE7Fd" title="原文 : From the MeterRegistry, create a Counter metric using the specified metric name."><code>MeterRegistry</code>から、指定されたメトリック名を使用してカウンタ・メトリックを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.Y9Fgs" title="原文 : Specify how the name of the metric will be generated using the nameFormat."><code>nameFormat</code>を使用してメトリックの名前を生成する方法を指定します。</span></li>
<li data-value="4"><span class="merged" id="all.1vBGlf" title="原文 : Build a WebClient Metric Service that can count number of GET requests made.">GETリクエストの数をカウントできるWebClientメトリック・サービスを作成します。</span></li>
</ul>

<p><span class="merged" id="all.33rK2P.spl1" title="原文 : In this example, the metric uses a Counter to measure the number of GET requests executed on the localhost.">この例では、メトリックは<code>Counter</code>を使用して、<code>localhost</code>で実行された<code>GET</code>リクエストの数を測定します。</span> <span class="merged" id="all.33rK2P.spl2" title="原文 : The format strings in the parameter value of nameFormat method will identify how the name of a metric will get generated:"><code>nameFormat</code>メソッドのパラメータ値の書式文字列は、メトリックの名前の生成方法を識別します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.38o4by" title="原文 : %1$s = Request method"><code>%1$s</code> =リクエスト・メソッド</span></p>

</li>
<li>
<p><span class="merged" id="all.38FD0w" title="原文 : %2$s = Request host"><code>%2$s</code> =リクエスト・ホスト</span></p>

</li>
<li>
<p><span class="merged" id="all.27haJj" title="原文 : %3$s = Response status"><code>%3$s</code> =レスポンス・ステータス</span></p>

</li>
</ul>

<p><span class="merged" id="all.1efcrI" title="原文 : So for example, if the nameFormat value is metric.%1$s.%2$s.%3$s and a request uses a GET method, targeting a URL with localhost as the hostname, and got a response code of 200, that the final metric will get created with a name of metric.GET.localhost.200.">たとえば、<code>nameFormat</code>値が<code>metric.%1$s.%2$s.%3$s</code>で、リクエストがGETメソッドを使用し、localhostがホスト名であるURLをターゲット指定し、レスポンス・コードが200の場合、最終的なメトリックがmetric.GET.localhost.200という名前で作成されます。</span></p>

<p><span class="merged" id="all.1IZyCQ" title="原文 : To register the metric service, simply use the addService method and pass in the created WebClient Metric Service as a parameter.">メトリック・サービスを登録するには、<code>addService</code>メソッドを使用し、作成したWebClientメトリック・サービスをパラメータとして渡します。</span></p>

<markup
lang="java"
title="Add the metric service to the WebClient:"
>        WebClient webClient = WebClient.builder()
                .baseUri("http://localhost:8080")
                .addService(clientServiceMetric)           <span class="conum" data-value="1" />
                .build();

        webClient.get().path("/greet").request();          <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Za264" title="原文 : Register the metric service to the webclient.">メトリック・サービスをwebクライアントに登録します。</span></li>
<li data-value="2"><span class="merged" id="all.ty1rn" title="原文 : Send an HTTP GET request">HTTP GETリクエストを送信</span></li>
</ul>

<p><span class="merged" id="all.2S1BvT" title="原文 : To verify that the metric is set up correctly, print the value of the Counter at the end of the main method.">メトリックが正しく設定されていることを確認するには、mainメソッドの最後にカウンタの値を出力します。</span></p>

<markup
lang="java"
title="Print the metric count"
>        System.out.println(metricName + ": " + counter.count());</markup>

<p><span class="merged" id="all.2QiDk" title="原文 : This will result to an output showing that a metric with the name of counter.GET.localhost was created with a count value of 1 indicating that it correctly measured the request that was just made.">これにより、<code>counter.GET.localhost</code>という名前のメトリックがカウント値1で作成され、作成されたリクエストが正しく測定されたことを示す出力が生成されます。</span></p>

<markup
lang="bash"
title="Output:"
>counter.GET.localhost: 1</markup>

</div>


<h4 id="_set_up_metrics_with_configuration_files"><span class="merged" id="all.2qjs9e" title="原文 : Set up metrics with configuration files">構成ファイルを使用したメトリクスの設定</span></h4>
<div class="section">
<p><span class="merged" id="all.ZAFQz.spl1" title="原文 : Using the configuration file can reduce the code complexity and make the metrics simpler to use.">構成ファイルを使用すると、コードの複雑さを軽減し、メトリクスの使用を簡素化できます。</span> <span class="merged" id="all.ZAFQz.spl2" title="原文 : With this approach, it eliminates the need to modify the source code for scenarios where the metric settings have to be changed.">このアプローチにより、メトリック設定を変更する必要があるシナリオのソース・コードを変更する必要がなくなります。</span> <span class="merged" id="all.ZAFQz.spl3" title="原文 : The application.yaml file is the default configuration file for Helidon and can be used to set up metrics settings."><code>application.yaml</code>ファイルは、Helidonのデフォルトの構成ファイルであり、メトリクス設定の設定に使用できます。</span> </p>

<markup
lang="yaml"
title="Example of metric configuration:"
>client:
  services:
    metrics:
      - type: COUNTER
        methods: ["GET"]
        description: "Metric Description"
        name-format: "counter.%1$s.%2$s"</markup>

<p><span class="merged" id="all.1VrQNu.spl1" title="原文 : In the example configuration definition above, the metrics configuration are located under client.services.metrics.">前述の構成定義の例では、メトリクス構成は<code>client.services.metrics</code>にあります。</span> <span class="merged" id="all.1VrQNu.spl2" title="原文 : The metric setting can start either by its type or methods.">メトリック設定は、その<code>type</code>または<code>methods</code>のいずれかで開始できます。</span> <span class="merged" id="all.1VrQNu.spl3" title="原文 : The configuration file uses the same keywords as the programmatic way.">構成ファイルは、プログラム的な方法と同じキーワードを使用します。</span> <span class="merged" id="all.1VrQNu.spl4" title="原文 : For example, type defines the kind of metric and methods identifies the http methods that will be measured.">たとえば、<code>type</code>はメトリックの種類を定義し、<code>methods</code>は測定されるhttpメソッドを識別します。</span> </p>

<markup
lang="java"
title="Add the metric service to the WebClient via the Configuration:"
>import io.helidon.http.Method;
import io.helidon.metrics.api.Counter;
import io.helidon.metrics.api.MeterRegistry;
import io.helidon.metrics.api.Metrics;
import io.helidon.webclient.api.WebClient;

public class ClientExample {

    public static void main(String[] args) {
        final MeterRegistry METER_REGISTRY = Metrics.globalRegistry();

        String counterName = "counter.GET.localhost";             <span class="conum" data-value="1" />

        Counter counter = METER_REGISTRY.getOrCreate(Counter.builder(counterName));   <span class="conum" data-value="2" />
        System.out.println(counterName + ": " + counter.count());

        Config config = Config.create();       <span class="conum" data-value="3" />

        WebClient webClient = WebClient.builder()
                        .baseUri("http://localhost:8080")
                        .config(config.get("client"))       <span class="conum" data-value="4" />
                        .build();
        webClient.get().path("/greet").request();      <span class="conum" data-value="5" />
        System.out.println(counterName + ": " + counter.count());  <span class="conum" data-value="6" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.353Gau" title="原文 : Choose the metric name.">メトリック名を選択します。</span></li>
<li data-value="2"><span class="merged" id="all.4SKBGs" title="原文 : Create counter metric from MeterRegistry."><code>MeterRegistry</code>からカウンタ・メトリックを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.1MafuE" title="原文 : Create a Helidon Config instance from default config file application.yaml.">デフォルトの構成ファイル<code>application.yaml</code>からHelidon構成インスタンスを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.2Qp8TW" title="原文 : Configure the WebClient using the client section from application.yaml."><code>application.yaml</code>の<code>client</code>セクションを使用して、WebClientを構成します。</span></li>
<li data-value="5"><span class="merged" id="all.ty1rn.1" title="原文 : Send an HTTP GET request">HTTP GETリクエストを送信</span></li>
<li data-value="6"><span class="merged" id="all.3bXoxU" title="原文 : Print out the metric result">メトリック結果を出力</span></li>
</ul>

<p><span class="merged" id="all.hhhM9.spl1" title="原文 : As demonstrated, using the configuration file reduces the amount of code needed in the source code.">スライドに示すように、構成ファイルを使用すると、ソース・コードに必要なコードの量が削減されます。</span> <span class="merged" id="all.hhhM9.spl2" title="原文 : For more information about metrics, see the Helidon Metrics Guide.">メトリクスの詳細は、<router-link to="/se/guides/metrics">「Helidonメトリクス・ガイド」</router-link>を参照してください。</span> </p>

</div>

</div>

</div>

</doc-view>
