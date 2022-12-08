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
<td class=""><span class="merged" id="all.2sRt9f.23" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.23" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.24" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.23" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.23"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.23" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.23"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.23" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 17`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-17</markup>

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
<p><span class="merged" id="all.r8Poj.spl1" title="原文 : Helidon&rsquo;s WebClient is used to perform HTTP REST requests to target endpoints and handle their responses.">HelidonのWebClientは、ターゲット・エンドポイントへのHTTP RESTリクエストを実行し、そのレスポンスを処理するために使用されます。</span> <span class="merged" id="all.r8Poj.spl2" title="原文 : Built on top of a reactive approach, you are no longer blocked while waiting for the data.">リアクティブ・アプローチの上に構築されたユーザーは、データの待機中にブロックされなくなります。</span> </p>

<p><span class="merged" id="all.XZcIr.spl1" title="原文 : Note: WebClient is still experimental and not intended for production use."><strong>ノート</strong>: WebClientはまだ実験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.XZcIr.spl2" title="原文 : APIs and features are not yet fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>

<p><span class="merged" id="all.3psjnP" title="原文 : WebClient provides the following features:">WebClientには、次の機能があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.d9iFj.spl1" title="原文 : Reactive: As mentioned, the code execution is not blocked by waiting for server response when a request is performed."><strong>リアクティブ</strong>: 前述のとおり、リクエストの実行時にサーバー・レスポンスを待機してもコードの実行はブロックされません。</span> <span class="merged" id="all.d9iFj.spl2" title="原文 : To avoid memory overflow, the client has built-in back-pressure support.">メモリーのオーバーフローを回避するために、クライアントには組み込みのバック・プレッシャのサポートがあります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1YqxAH" title="原文 : User-friendly: Every client and request is created by a builder pattern, so it improves readability and code maintenance."><strong>User-friendly</strong>: クライアントとリクエストは、ビルダー・パターンによって作成されるため、読みやすさとコードのメンテナンスが向上します。</span></p>

</li>
<li>
<p><span class="merged" id="all.SVp71.spl1" title="原文 : Following redirects: The WebClient is able to follow the redirect chain and perform requests on the correct endpoint for you."><strong>次のリダイレクト</strong>: WebClientは、リダイレクト・チェーンに従って、適切なエンドポイントでリクエストを実行できます。</span> <span class="merged" id="all.SVp71.spl2" title="原文 : You no longer have to point your client to the correct/final endpoint.">クライアントを正しいエンドポイント/最終エンドポイントに指定する必要がなくなります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4968EW" title="原文 : Tracing, metrics and security propagation: When you configure the Helidon WebServer to use tracing, metrics and security, the settings are automatically propagated to the WebClient and used during request/response."><strong>トレース、メトリクスおよびセキュリティ伝播</strong>: トレース、メトリクスおよびセキュリティを使用するようにHelidon WebServerを構成すると、設定はWebClientに自動的に伝播され、リクエスト/レスポンス中に使用されます。</span></p>

</li>
</ul>

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
    -DarchetypeVersion=3.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<p><span class="merged" id="all.4IFGlk" title="原文 : You should now have a directory called helidon-quickstart-se.">これで、<code>helidon-quickstart-se</code>というディレクトリがあります。</span></p>

<markup
lang="bash"
title="Open this directory"
>cd helidon-quickstart-se</markup>

<p><span class="merged" id="all.lICl4.spl1" title="原文 : The Helidon quickstart is a greeting application supporting several HTTP requests such as GET and PUT.">Helidonクイックスタートは、GETやPUTなどのHTTPリクエストをサポートするグリーティング・アプリケーションです。</span> <span class="merged" id="all.lICl4.spl2" title="原文 : Using it will be time saving and allow us to focus on the WebClient features and how to use it.">これを使用すると、時間の節約になり、WebClientの機能と使用方法に集中できます。</span> </p>

</div>


<h4 id="_modify_pom_dependency"><span class="merged" id="all.3H3Atp" title="原文 : Modify pom dependency">pom依存関係の変更</span></h4>
<div class="section">
<p><span class="merged" id="all.YtAMR" title="原文 : In the pom.xml, remove the test scope under the WebClient dependency as it will be used not only in the tests.">pom.xmlでは、テストのみでなくWebClient依存関係の下のテスト・スコープを削除します。</span></p>

<markup
lang="xml"
title="Remove test scope:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt; &lt;!--  Remove this line --&gt;
&lt;/dependency&gt;</markup>

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
>import io.helidon.media.jsonp.JsonpSupport;
import io.helidon.webclient.WebClient;

WebClient webClient = WebClient.builder()
                .baseUri("http://localhost:8080")   <span class="conum" data-value="1" />
                .addMediaSupport(JsonpSupport.create())     <span class="conum" data-value="2" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.gBLSC" title="原文 : The base URI of the outbound requests.">アウトバウンド・リクエストのベースURI。</span></li>
<li data-value="2"><span class="merged" id="all.lH3EP" title="原文 : Register a support for Jsonp.">Jsonpのサポートを登録します。</span></li>
</ul>

<p><span class="merged" id="all.2C1BdK.spl1" title="原文 : By default, the Helidon quickstart application runs on localhost:8080.">デフォルトでは、Helidonクイックスタート・アプリケーションはlocalhost:8080で実行されます。</span> <span class="merged" id="all.2C1BdK.spl2" title="原文 : If you changed the host name or port number make sure to modify the base URI as well.">ホスト名またはポート番号を変更した場合は、必ずベースURIも変更してください。</span> <span class="merged" id="all.2C1BdK.spl3" title="原文 : Once built, the WebClient can be used to send a GET request to the greeting application.">ビルド後、WebClientを使用してグリーティング・アプリケーションにGETリクエストを送信できます。</span> </p>

<markup
lang="java"
title="Send a GET request to the target endpoint:"
>webClient.get()     <span class="conum" data-value="1" />
    .path("/greet")     <span class="conum" data-value="2" />
    .request(String.class)  <span class="conum" data-value="3" />
    .peek(System.out::println)  <span class="conum" data-value="4" />
    .await();   <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3O4tyy" title="原文 : Create a HTTP GET request.">HTTP GETリクエストを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3rsAAL" title="原文 : Target endpoint path.">ターゲット・エンドポイント・パス。</span></li>
<li data-value="3"><span class="merged" id="all.40DL93" title="原文 : Execute the request and return Single with response entity handled as a String.">リクエストを実行し、レスポンス・エンティティが文字列として処理された状態でSingleを返します。</span></li>
<li data-value="4"><span class="merged" id="all.Ho7a0" title="原文 : Print the response in the console.">コンソールにレスポンスを出力します。</span></li>
<li data-value="5"><span class="merged" id="all.1t3rPe" title="原文 : Wait for server response because of reactive approach.">リアクティブ・アプローチのため、サーバーのレスポンスを待機します。</span></li>
</ul>

<p><span class="merged" id="all.4CgZAx.spl1" title="原文 : The path method joins /greet to the WebClient base URI.">パス・メソッドは、<code>/greet</code>をWebClientベースURIに結合します。</span> <span class="merged" id="all.4CgZAx.spl2" title="原文 : The target URI for this request becomes http://localhost:8080/greet where the response should be a greeting message.">このリクエストのターゲットURIは、レスポンスがグリーティング・メッセージである<code><a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>になります。</span> <span class="merged" id="all.4CgZAx.spl3" title="原文 : Received response entity will be automatically handled as a String.">受信したレスポンス・エンティティは、自動的に文字列として処理されます。</span> <span class="merged" id="all.4CgZAx.spl4" title="原文 : If no specific type is put into the method request(), WebClientResponse is returned by default.">特定の型がメソッドrequest()に配置されていない場合、デフォルトでWebClientResponseが返されます。</span> <span class="merged" id="all.4CgZAx.spl5" title="原文 : This WebClientResponse object contains response code, headers and non-handled entity.">このWebClientResponseオブジェクトには、レスポンス・コード、ヘッダーおよび非処理エンティティが含まれます。</span> </p>

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
title="Run the greeting application first:"
>java -cp target/helidon-quickstart-se.jar io.helidon.examples.quickstart.se.Main</markup>

<p><span class="merged" id="all.2FL6Fi" title="原文 : Open a new command prompt or terminal and run the ClientExample class you just created.">新しいコマンド・プロンプトまたは端末を開き、作成したClientExampleクラスを実行します。</span></p>

<markup
lang="bash"
title="Run the greeting application first:"
>java -cp target/helidon-quickstart-se.jar io.helidon.examples.quickstart.se.ClientExample</markup>

<markup
lang="bash"
title="Output:"
>{"message":"Hello World!"}</markup>

<p><span class="merged" id="all.3afzNY" title="原文 : When the ClientExample finishes its execution, you can stop the Main class by pressing ctrl+c.">ClientExampleの実行が終了したら、<code>ctrl+c</code>を押してMainクラスを停止できます。</span></p>

</div>


<h4 id="_discover_other_webclient_functionality"><span class="merged" id="all.zJ6c1" title="原文 : Discover other WebClient functionality">Discoverの他のWebClient機能</span></h4>
<div class="section">
<p><span class="merged" id="all.9uuTF.spl1" title="原文 : In practice, String is not the most useful return type, since it usually needs some more handling.">実際には、Stringは最も有用な戻り型ではありません。通常、処理がさらに必要になるためです。</span> <span class="merged" id="all.9uuTF.spl2" title="原文 : In this case it could be more interesting to return an object such as JsonObject.">この場合、JsonObjectなどのオブジェクトを返す方が面白くなります。</span> <span class="merged" id="all.9uuTF.spl3" title="原文 : In the previous step JSON support was added to the WebClient so that it could be used instead of String.">前のステップでは、文字列のかわりにJSONサポートを使用できるようにWebClientに追加されました。</span> </p>

<markup
lang="java"
title="Replace String by JsonObject:"
>import javax.json.JsonObject;

webClient.get()
    .path("/greet/David")
    .request(JsonObject.class)  <span class="conum" data-value="1" />
    .peek(System.out::println)
    .await();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.34vIo0" title="原文 : Request a JsonObject as return value.">戻り値としてJsonObjectをリクエストします。</span></li>
</ul>

<p><span class="merged" id="all.2GRd8Q" title="原文 : In the URI, the String following greet is a path parameter which allows the application to greet someone.">URIでは、<code>greet</code>に続く文字列は、アプリケーションが誰かに挨拶できるようにするパス・パラメータです。</span></p>

<markup
lang="bash"
title="Output:"
>{"message":"Hello David!"}</markup>

<p><span class="merged" id="all.4A4XGt.spl1" title="原文 : This time, a JsonObject is printed out in the console.">今回は、JsonObjectがコンソールに出力されます。</span> <span class="merged" id="all.4A4XGt.spl2" title="原文 : It is possible to change the greeting itself by using a PUT request to /greet/greeting endpoint from the base URI.">ベースURIからPUTリクエストを使用して、グリーティング自体を<code>/greet/greeting</code>エンドポイントに変更できます。</span> </p>

<markup
lang="java"
title="Modify the application greeting:"
>import javax.json.Json;

JsonObject entity = Json.createObjectBuilder() <span class="conum" data-value="1" />
    .add("greeting", "Bonjour")
    .build();
webClient.put()     <span class="conum" data-value="2" />
    .path("/greet/greeting")
    .submit(entity)     <span class="conum" data-value="3" />
    .thenCompose(response -&gt; webClient.get()    <span class="conum" data-value="4" />
        .path("/greet/David")
        .request(JsonObject.class))
    .thenAccept(System.out::println)
    .await();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.zHr5V" title="原文 : Create a JsonObject with key greeting and value bonjour.">キー<code>greeting</code>および値<code>bonjour</code>を使用してJsonObjectを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.4BAwiP" title="原文 : Create a PUT request.">PUTリクエストを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.4IxptT" title="原文 : Submit the JsonObject created earlier.">前に作成したJsonObjectを発行します。</span></li>
<li data-value="4"><span class="merged" id="all.1dY5Fi" title="原文 : Once done, make a GET call to verify the modification was processed to the greeting.">完了したら、GETコールを実行して、変更がグリーティングに処理されたことを確認します。</span></li>
</ul>

<p><span class="merged" id="all.P1BIy.spl1" title="原文 : According to the quickstart documentation, a JSON object can be sent to the application to change the greeting following this structure: {&quot;greeting&quot; : &quot;value&quot;}.">クイックスタート・ドキュメントに従って、JSONオブジェクトをアプリケーションに送信して、この構造のあとの挨拶を変更できます : <code>{"greeting" : "value"}</code>。</span> <span class="merged" id="all.P1BIy.spl2" title="原文 : The first three lines of code create the JsonObject with the required content.">最初の3行のコードでは、必要なコンテンツを含むJsonObjectが作成されます。</span> <span class="merged" id="all.P1BIy.spl3" title="原文 : This time, we use the PUT request and submit methods to push the new greeting.">今回は、PUTリクエストおよび送信メソッドを使用して、新しいグリーティングをプッシュします。</span> <span class="merged" id="all.P1BIy.spl4" title="原文 : One way to check the greeting modification is to execute GET request again and display obtained response.">グリーティングの変更を確認する1つの方法は、GETリクエストを再度実行し、取得したレスポンスを表示することです。</span> <span class="merged" id="all.P1BIy.spl5" title="原文 : The thenCompose method will execute a GET request after the PUT request is executed."><code>thenCompose</code>メソッドは、PUTリクエストの実行後にGETリクエストを実行します。</span> </p>

<markup
lang="bash"
title="Output:"
>{"message":"Bonjour David!"}</markup>

</div>

</div>


<h3 id="WebClient-Metrics"><span class="merged" id="all.42HfSr" title="原文 : WebClient Metrics">WebClientメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.3bOFs.spl1" title="原文 : WebClient, like other Helidon components, supports Metrics.">WebClientは、他のHelidonコンポーネントと同様に、メトリクスをサポートしています。</span> <span class="merged" id="all.3bOFs.spl2" title="原文 : The following example introduces the different metrics that can be used to measure WebClient activity.">次の例では、WebClientアクティビティの測定に使用できる様々なメトリクスについて説明します。</span> <span class="merged" id="all.3bOFs.spl3" title="原文 : There are two ways to set up metrics: programmatically on the WebClient instance or manually using the configuration file.">メトリクスの設定には2つの方法があります: WebClientインスタンスでプログラムするか、構成ファイルを使用して手動で行います。</span> </p>


<h4 id="_add_metrics_dependency"><span class="merged" id="all.4doQH0" title="原文 : Add metrics dependency">メトリクス依存関係の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2i49wO" title="原文 : There is a specific dependency to use WebClient metrics in your application.">アプリケーションでWebClientメトリクスを使用する特定の依存関係があります。</span></p>

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
<p><span class="merged" id="all.4GpIdd.spl1" title="原文 : It is possible to register metrics on WebClient directly into the code.">WebClientのメトリクスをコードに直接登録できます。</span> <span class="merged" id="all.4GpIdd.spl2" title="原文 : The following example shows a general method that can be used with any metric.">次の例は、任意のメトリックで使用できる一般的なメソッドを示しています。</span> </p>

<markup
lang="java"
title="Example of metric creation:"
>import io.helidon.common.http.Http;
import io.helidon.metrics.RegistryFactory;
import io.helidon.webclient.metrics.WebClientMetrics;
import io.helidon.webclient.spi.WebClientService;
import org.eclipse.microprofile.metrics.MetricRegistry;
import org.eclipse.microprofile.metrics|.Counter;
                                       |.Meter;
                                       |.Timer;
                                       |.ConcurrentGauge;

public static void main(String[] args) {

    MetricRegistry metricFactory = RegistryFactory.getInstance()
            .getRegistry(MetricRegistry.Type.APPLICATION);

    String metricName = "metric.GET.localhost";             <span class="conum" data-value="1" />

    Counter counter = metricFactory|.counter(metricName);   <span class="conum" data-value="2" />
                                   |.meter(metricName)
                                   |.timer(metricName)
                                   |.concurrentGauge(metricName)

    WebClientService clientServiceMetric = WebClientMetrics|.counter()
                                                           |.meter()
                                                           |.timer()
                                                           |.gaugeInProgress()

                    .methods(Http.Method.GET)           // OPTIONAL
                    .success(true)                      // OPTIONAL
                    .errors(true)                       // OPTIONAL
                    .description("Metric Description")  // OPTIONAL
                    .nameFormat("counter.%1$s.%2$s")
                    .build();                           <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.353Gau" title="原文 : Choose the metric name.">メトリック名を選択します。</span></li>
<li data-value="2"><span class="merged" id="all.3tOvqv" title="原文 : Create a metric from metricFactory."><code>metricFactory</code>からメトリックを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.2G1XDd" title="原文 : Build a WebClient Service for counting the GET requests.">GETリクエストをカウントするためのWebClientサービスを作成します。</span></li>
</ul>

<p><span class="merged" id="all.3AQ0Ih.spl1" title="原文 : The metric name can indicate what is measured.">メトリック名は、測定内容を示すことができます。</span> <span class="merged" id="all.3AQ0Ih.spl2" title="原文 : In this example, the metric target GET requests on the localhost.">この例では、メトリック・ターゲットはlocalhostに対するGETリクエストです。</span> <span class="merged" id="all.3AQ0Ih.spl3" title="原文 : In order to pass this information to the webclient, the nameFormat method extracts it from the metric name.">この情報をwebクライアントに渡すために、<code>nameFormat</code>メソッドはメトリック名からこの情報を抽出します。</span> <span class="merged" id="all.3AQ0Ih.spl4" title="原文 : Otherwise, the metric name can also have nothing in common with its job.">それ以外の場合、メトリック名のジョブに共通するものはありません。</span> <span class="merged" id="all.3AQ0Ih.spl5" title="原文 : In this case, the methods with OPTIONAL comment are not required to be used.">この場合、<code>OPTIONAL</code>コメントを含むメソッドは使用する必要はありません。</span> <span class="merged" id="all.3AQ0Ih.spl6" title="原文 : The methods will target the chosen HTTP request type.">メソッドによって、選択したHTTPリクエスト・タイプがターゲット指定されます。</span> <span class="merged" id="all.3AQ0Ih.spl7" title="原文 : While success and error will respectively measure if a request is successful or failed.">成功およびエラーは、リクエストが成功または失敗した場合にそれぞれ測定されます。</span> <span class="merged" id="all.3AQ0Ih.spl8" title="原文 : The description will add a metric description.">説明によってメトリックの説明が追加されます。</span> </p>

<markup
lang="java"
title="Add the metric service to the WebClient:"
>WebClient webClient = WebClient.builder()
                .baseUri("http://localhost:8080")
                .addMediaSupport(JsonpSupport.create())
                .addService(clientServiceMetric)           <span class="conum" data-value="1" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Za264" title="原文 : Register the metric service to the webclient.">メトリック・サービスをwebクライアントに登録します。</span></li>
</ul>

<p><span class="merged" id="all.NElFG" title="原文 : Simply use the addService method to add the metric to the WebClient on which the metrics will be measured."><code>addService</code>メソッドを使用して、メトリクスが測定されるWebClientにメトリックを追加します。</span></p>

<markup
lang="java"
title="Print the metric count at the end of the main method:"
>System.out.println(metricName + ": " + counter.getCount());</markup>

<p><span class="merged" id="all.21agPl.spl1" title="原文 : To quickly check metrics are set up correctly, print the counter at the end of the main method.">メトリクスが正しく設定されていることを確認するには、メイン・メソッドの最後にカウンタを印刷します。</span> <span class="merged" id="all.21agPl.spl2" title="原文 : In this guide, the WebClient uses GET and PUT requests, so metrics can be applied on.">このガイドでは、WebClientはGETおよびPUTリクエストを使用するため、メトリクスを適用できます。</span> </p>

</div>


<h4 id="_set_up_metrics_with_configuration_files"><span class="merged" id="all.2qjs9e" title="原文 : Set up metrics with configuration files">構成ファイルを使用したメトリクスの設定</span></h4>
<div class="section">
<p><span class="merged" id="all.1hYtx5.spl1" title="原文 : Using the configuration file can reduce the code complexity and make the metrics simpler to use.">構成ファイルを使用すると、コードの複雑さを軽減し、メトリクスの使用を簡素化できます。</span> <span class="merged" id="all.1hYtx5.spl2" title="原文 : There is no need to modify the source code but only the configuration file to measure other values.">ソース・コードを変更する必要はありませんが、他の値を測定するために構成ファイルのみを変更する必要があります。</span> <span class="merged" id="all.1hYtx5.spl3" title="原文 : The application.yaml file is the default configuration file for Helidon."><code>application.yaml</code>ファイルは、Helidonのデフォルト構成ファイルです。</span> <span class="merged" id="all.1hYtx5.spl4" title="原文 : It can be used to set up metrics settings.">メトリクス設定の設定に使用できます。</span> </p>

<markup
lang="yaml"
title="Example of metric configuration:"
>client:
  services:
    config:
      metrics:
        - type: METER
          name-format: "client.meter.overall"
        - type: TIMER
          # meter per method
          name-format: "client.meter.%1$s"
        - methods: ["GET"]
          type: COUNTER
          errors: false
          name-format: "client.counter.%1$s.success"
          description: "Counter of successful GET requests"
        - methods: ["PUT", "POST", "DELETE"]
          type: COUNTER
          success: false
          name-format: "wc.counter.%1$s.error"
          description: "Counter of failed PUT, POST and DELETE requests"
        - methods: ["GET"]
          type: GAUGE_IN_PROGRESS
          name-format: "client.inprogress.%2$s"
          description: "In progress requests to host"</markup>

<p><span class="merged" id="all.4GUoho.spl1" title="原文 : The metrics are located under client.services.config.metrics.">メトリクスが<code>client.services.config.metrics</code>の下にあります。</span> <span class="merged" id="all.4GUoho.spl2" title="原文 : The metric setting can start either by its type or methods.">メトリック設定は、そのタイプまたはメソッドから開始できます。</span> <span class="merged" id="all.4GUoho.spl3" title="原文 : The configuration file uses the same keywords as the programmatic way. type defines the kind of metric.">構成ファイルは、プログラム的な方法と同じキーワードを使用します。<code>type</code>は、メトリックの種類を定義します。</span> </p>

<markup
lang="java"
title="Add the metric service to the WebClient:"
>Config config = Config.create();       <span class="conum" data-value="1" />

WebClient webClient = WebClient.builder()
                .baseUri("http://localhost:8080")
                .config(config.get("client"))       <span class="conum" data-value="2" />
                .addMediaSupport(JsonpSupport.create())
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1M2X03" title="原文 : Create a Helidon Config instance from default file application.yaml.">デフォルト・ファイル<code>application.yaml</code>からHelidon構成インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.1kc910" title="原文 : Configure the WebClient with the client section from application.yaml."><code>application.yaml</code>の<code>client</code>セクションを使用してWebClientを構成します。</span></li>
</ul>

<p><span class="merged" id="all.hhhM9.spl1" title="原文 : As demonstrated, using the configuration file reduces the amount of code needed in the source code.">スライドに示すように、構成ファイルを使用すると、ソース・コードに必要なコードの量が削減されます。</span> <span class="merged" id="all.hhhM9.spl2" title="原文 : For more information about metrics, see the Helidon Metrics Guide.">メトリクスの詳細は、<router-link to="/se/guides/metrics">「Helidonメトリクス・ガイド」</router-link>を参照してください。</span> </p>

</div>

</div>

</div>

</doc-view>
