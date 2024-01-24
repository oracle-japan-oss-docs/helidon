<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.XkuXh" title="原文 : Helidon SE Health Check Guide">Helidon SEヘルス・チェック・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4BYCYy" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using both built-in and custom health checks.">このガイドでは、組込みとカスタムの両方のヘルス・チェックを使用して基本的な例を実行するために使用できるサンプルのHelidon SEプロジェクトを作成する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.16"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2UQif6.2" title="原文 : For this 15 minute tutorial, you will need the following:">この15分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3EWh8P.3" title="原文 : A Helidon SE Application">Helidon SEアプリケーション</span></td>
<td class=""><span class="merged" id="all.3f8L7i.3" title="原文 : You can use your own application or use the Helidon SE Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/se/guides/quickstart">「Helidon SEクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.18" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.18" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.18" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.18" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.18"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.18" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.18"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.18" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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


<h3 id="_create_a_sample_se_project"><span class="merged" id="all.21pN8S" title="原文 : Create a Sample SE Project">サンプルSEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2w3hsK.1.spl1" title="原文 : Generate the project sources using the Helidon SE Maven archetype.">Helidon SE Maven原型を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.2w3hsK.1.spl2" title="原文 : The result is a simple project that can be used for the examples in this guide.">その結果、このガイドの例で使用できる単純なプロジェクトになります。</span> </p>

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

</div>


<h3 id="_using_the_built_in_health_checks"><span class="merged" id="all.1z9H3F.2"  title="原文: Using the Built-In Health Checks">組込みのヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1pEkFW.1" title="原文 : Helidon has a set of built-in health checks:">Helidonには、組込みヘルス・チェックのセットがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1WzrZM.2" title="原文 : deadlock detection">デッドロックの検出</span></p>

</li>
<li>
<p><span class="merged" id="all.2FevQJ.2" title="原文 : available disk space">使用可能なディスク領域</span></p>

</li>
<li>
<p><span class="merged" id="all.3lRV6E.2" title="原文 : available heap memory">使用可能なヒープ・メモリー</span></p>

</li>
</ul>

<p><span class="merged" id="all.47ToYR.spl1" title="原文 : The following example shows how to use the built-in health checks.">次の例は、組み込みのヘルス検査の使用方法を示しています。</span> <span class="merged" id="all.47ToYR.spl2" title="原文 : These examples are all executed from the root directory of your project (helidon-quickstart-se).">これらの例はすべて、プロジェクトのルート・ディレクトリ(helidon-quickstart-se)から実行されます。</span> </p>

<p><span class="merged" id="all.1UgtUE" title="原文 : Notice that the pom.xml file in the generated project already contains dependencies for Helidon’s health component and for the built-in health checks.">生成されたプロジェクトの<code>pom.xml</code>ファイルには、Helidonのヘルス・コンポーネントおよび組込みヘルス・チェックの依存関係がすでに含まれていることに注意してください。</span></p>

<markup
lang="xml"
title="Generated dependencies related to health"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-health&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3Hg28n.spl1" title="原文 : Handling health checks is part of Helidon’s observability support.">ヘルス・チェックの処理は、Helidonの可観測性サポートの一部です。</span> <span class="merged" id="all.3Hg28n.spl2" title="原文 : By default, when you add the dependency for the built-in health checks, Helidon automatically registers the built-in checks.">デフォルトでは、組込みヘルス・チェックの依存関係を追加すると、Helidonによって組込みチェックが自動的に登録されます。</span> </p>

<markup
lang="bash"
title="Build and run the project"
>mvn clean package
java -jar target/helidon-quickstart-se.jar</markup>

<p><span class="merged" id="all.2s53Hn" title="原文 : In another window, access the application’s health endpoint.">別のウィンドウで、アプリケーションのヘルス・エンドポイントにアクセスします。</span></p>

<markup
lang="bash"
title="Access the health endpoint"
>curl -v http://localhost:8080/observe/health</markup>

<p><span class="merged" id="all.1vnDpD" title="原文 : The verbose curl output reports the HTTP status:">詳細な<code>curl</code>出力は、HTTPステータスをレポートします:</span></p>

<div class="listing">
<markup>&lt; HTTP/1.1 204 No Content</markup>
</div>

<p><span class="merged" id="all.2tXSxm" title="原文 : The successful status means all health checks reported UP.">成功ステータスは、すべてのヘルス・チェックが<code>UP</code>をレポートしたことを意味します。</span></p>

<p><span class="merged" id="all.1E3mKZ.spl1" title="原文 : To see the details about each health check, add the following features configuration fragment in the server section of the application.yaml.">各ヘルス・チェックの詳細を表示するには、<code>application.yaml</code>の<code>server</code>セクションに次の<code>features</code>構成フラグメントを追加します。</span> <span class="merged" id="all.1E3mKZ.spl2" title="原文 : Make sure the features key is at the same level as port and host that are already in the file."><code>features</code>キーが、ファイル内にすでに存在する<code>port</code>および<code>host</code>と同じレベルであることを確認します。</span> </p>

<markup
lang="yaml"
title="Configuration fragment to include details in the health output (nested under <code>server</code>)"
>server:
  port: 8080
  host: 0.0.0.0
  features: <span class="conum" data-value="1" />
    observe:
      observers:
        health:
          details: true</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1EooYq" title="原文 : Added features config section."><code>features</code>構成セクションが追加されました。</span></li>
</ul>

<p><span class="merged" id="all.3e8srG" title="原文 : Press ^C to stop the running server, rebuild it, and rerun it.">^Cを押して実行中のサーバーを停止し、再構築して再実行します。</span></p>

<markup
lang="bash"
title="Stop, rebuild, and rerun the server"
>^C
mvn clean package
java -jar target/helidon-quickstart-se.jar</markup>

<p><span class="merged" id="all.4VrTid" title="原文 : In the other window access the health endpoint again.">もう一方のウィンドウで、ヘルス・エンドポイントに再度アクセスします。</span></p>

<markup
lang="bash"
title="Access the health endpoint"
>curl -v http://localhost:8080/observe/health</markup>

<p><span class="merged" id="all.1WUMjz" title="原文 : This time the curl output shows not only the HTTP status-​as 200 instead of 204 because the response now contains data-​but also the detailed output for all health checks.">今回は、レスポンスにデータが含まれるようになったため、<code>curl</code>出力にHTTPステータス(204ではなく200)が表示されるだけでなく、すべてのヘルス・チェックの詳細な出力も表示されます。</span></p>

<markup
lang="json"
title="Health check details"
>{
  "status": "UP",              <span class="conum" data-value="1" />
  "checks": [                  <span class="conum" data-value="2" />
    {
      "name": "diskSpace",
      "status": "UP",
      "data": {
        "total": "465.63 GB",
        "percentFree": "14.10%",
        "totalBytes": 499963174912,
        "free": "65.67 GB",
        "freeBytes": 70513274880
      }
    },
    {
      "name": "heapMemory",
      "status": "UP",
      "data": {
        "total": "516.00 MB",
        "percentFree": "99.82%",
        "max": "8.00 GB",
        "totalBytes": 541065216,
        "maxBytes": 8589934592,
        "free": "500.87 MB",
        "freeBytes": 525201320
      }
    },
    {
      "name": "deadlock",
      "status": "UP"
    }
  ]
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1zWdqJ" title="原文 : Overall application health status">アプリケーション全体のヘルス・ステータス</span></li>
<li data-value="2"><span class="merged" id="all.4K9DYd" title="原文 : List of individual health checks.">個々のヘルス・チェックのリスト。</span></li>
</ul>

</div>


<h3 id="_adding_custom_health_checks"><span class="merged" id="all.4gCDAO" title="原文 : Adding Custom Health Checks">カスタム・ヘルス・チェックの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.4Cpp6C.spl1" title="原文 : You can add your own custom health checks.">独自のカスタム・ヘルス・チェックを追加できます。</span> <span class="merged" id="all.4Cpp6C.spl2" title="原文 : These typically assess the conditions in and around your application and report whether the service should be considered started, live, and/or ready.">これらは通常、アプリケーション内およびアプリケーション周辺の状態を評価し、サービスが開始済、稼働中または準備完了(あるいはその両方)とみなされるかどうかをレポートします。</span> </p>

<p><span class="merged" id="all.3uUPMr.spl1" title="原文 : The following trivial but illustrative example adds a custom start-up check that reports DOWN until the server has been running for eight seconds and reports UP thereafter.">次の例では、サーバーが8秒間実行され、その後<code>UP</code>がレポートされるまで、<code>DOWN</code>をレポートするカスタム起動チェックを追加します。</span> <span class="merged" id="all.3uUPMr.spl2" title="原文 : Note the two main steps in the example code:">コード例の2つの主なステップに注意してください:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4R4IGW" title="原文 : Create an explicit instance of ObserveFeature which contains a custom HealthObserver with the custom check.">カスタム・チェックを含むカスタム<code>HealthObserver</code>を含む<code>ObserveFeature</code>の明示的なインスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.McHft" title="原文 : Add that ObserveFeature instance to the WebServer.Builder as a feature.">その<code>ObserveFeature</code>インスタンスを機能として<code>WebServer.Builder</code>に追加します。</span>

</li>
</ol>

<markup
lang="java"
title="Updated <code>Main.main</code>, augmenting the creation of <code>WebServer</code> instance with a custom health check"
>AtomicLong serverStartTime = new AtomicLong();  <span class="conum" data-value="1" />

ObserveFeature o = ObserveFeature.builder()
        .config(config.get("server.features.observe")) <span class="conum" data-value="2" />
        .addObserver(HealthObserver.builder() <span class="conum" data-value="3" />
                             .details(true) <span class="conum" data-value="4" />
                             .addCheck(() -&gt; HealthCheckResponse.builder() <span class="conum" data-value="5" />
                                         .status(System.currentTimeMillis() - serverStartTime.get() &gt;= 8000)
                                         .detail("time", System.currentTimeMillis())
                                         .build(),
                                       HealthCheckType.STARTUP,
                                       "warmedUp")
                             .build()) <span class="conum" data-value="6" />
        .build();

    WebServer server = WebServer.builder()
            .config(config.get("server"))
            .addFeature(observe)            <span class="conum" data-value="7" />
            .routing(Main::routing)
            .build()
            .start();

    serverStartTime.set(System.currentTimeMillis()); <span class="conum" data-value="8" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4gb5Q3.spl1" title="原文 : Declare a variable for holding the server start-up time.">サーバーの起動時間を保持するための変数を宣言します。</span> <span class="merged" id="all.4gb5Q3.spl2" title="原文 : (This is set later in the code.)">(これはコードの後半で設定します。)</span> </li>
<li data-value="2"><span class="merged" id="all.EJk1q" title="原文 : Find and apply configuration for observability observers other than health (because we are about to create our own custom HealthObserver).">可観測性オブザーバの構成をヘルスより<em>「その他」</em>で検索して適用します(独自のカスタム<code>HealthObserver</code>を作成しようとしているためです)。</span></li>
<li data-value="3"><span class="merged" id="all.2981nq" title="原文 : Begin preparing the custom HealthObserver according to this app’s specific needs.">このアプリ固有のニーズに従って、カスタム<code>HealthObserver</code>の準備を開始します。</span></li>
<li data-value="4"><span class="merged" id="all.3i5qwh" title="原文 : Turn on detailed output in HTTP responses to the health endpoint.">ヘルス・エンドポイントへのHTTPレスポンスの詳細出力をオンにします。</span></li>
<li data-value="5"><span class="merged" id="all.1mgdOk" title="原文 : Add a custom start-up health check:">カスタム起動ヘルス・チェックを追加します:</span></li>
<li data-value="6"><span class="merged" id="all.1LiKsR" title="原文 : Build the HealthObserver for addition to the ObserveFeature."><code>ObserveFeature</code>に加えて、<code>HealthObserver</code>を作成します。</span></li>
<li data-value="7"><span class="merged" id="all.40yjoS" title="原文 : Add the ObserveFeature instance as a feature to the webserver."><code>ObserveFeature</code>インスタンスを機能としてwebサーバーに追加します。</span></li>
<li data-value="8"><span class="merged" id="all.47A70g" title="原文 : Record when the server has actually started.">サーバーが実際に起動した時間を記録します。</span></li>
</ul>

<p><span class="merged" id="all.4Bs8wc" title="原文 : Note that the health check type and name are fixed, whereas the health check recomputes the value of the response every time Helidon queries it.">ヘルス・チェックのタイプと名前は固定ですが、ヘルス・チェックでは、Helidonがレスポンスを問い合せるたびにレスポンスの値が再計算されます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.FSqjo" title="原文 : For the next step, be ready to access the health endpoint very quickly after you restart the server!">次のステップでは、サーバーの再起動後にヘルス・エンドポイントにすばやくアクセスできます。</span></p>
</div>

<markup
lang="bash"
title="Stop, rebuild, and rerun the application"
>^C
mvn package
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="Access the health endpoint <strong>quickly</strong>"
>curl -v http://localhost:8080/observe/health</markup>

<p><span class="merged" id="all.43S2Ee" title="原文 : If you access the health endpoint before the server has been up for eight seconds, curl reports the response status as 503 Service Unavailable and displays output similar to the following:">サーバーが8秒間稼働する前にヘルス・エンドポイントにアクセスした場合、<code>curl</code>はレスポンス・ステータスを<code>503 Service Unavailable</code>として報告し、次のような出力を表示します:</span></p>

<markup
lang="json"
title="Health response shortly after server restart (partial)"
>{
  "status": "DOWN",
  "checks": [
    {
      "name": "warmedUp",
      "status": "DOWN",
      "data": {
        "time": 1702068978353
      }
    },
...</markup>

<p><span class="merged" id="all.2YWVDE" title="原文 : The built-in health checks (not shown in the example output) all report UP but the new custom start-up health check reports DOWN because the server has been up only a short time.">組込みヘルス・チェック(出力例には示されていません)では、すべてのレポート<code>UP</code>が、新しいカスタム起動ヘルス・チェックでは、サーバーが短時間しか起動していないため、<code>DOWN</code>がレポートされます。</span></p>

<p><span class="merged" id="all.4fRziN" title="原文 : Access the health endpoint again, after the server has been up at least eight seconds.">サーバーが少なくとも8秒稼働した後、ヘルス・エンドポイントに再度アクセスします。</span></p>

<markup
lang="bash"
title="Access the health endpoint again <strong>after 8 seconds</strong>"
>curl -v http://localhost:8080/observe/health</markup>

<p><span class="merged" id="all.kgQoa" title="原文 : This time, curl reports 200 OK for the response status and displays different output for the custom health check.">今回、<code>curl</code>はレスポンス・ステータスの<code>200 OK</code>を報告し、カスタム・ヘルス・チェックの異なる出力を表示します。</span></p>

<markup
lang="json"
title="Health response after the server has been running a while (partial)"
>{
  "status": "UP",
  "checks": [
    {
      "name": "warmedUp",
      "status": "UP",
      "data": {
        "time": 1702069379717
      }
    },</markup>

<p><span class="merged" id="all.1MVyWy.spl1" title="原文 : The example code includes the built-in health checks in Helidon’s overall health assessment of the application.">このサンプル・コードには、Helidonのアプリケーションの全体的なヘルス評価の組込みヘルス・チェックが含まれています。</span> <span class="merged" id="all.1MVyWy.spl2" title="原文 : To exclude them invoke the HealthObserver.Builder useSystemServices method (for example, just after invoking details on the builder).">除外するには、<code>HealthObserver.Builder</code> <code>useSystemServices</code>メソッドを呼び出します(たとえば、ビルダーで<code>details</code>を起動した直後)。</span> </p>

<markup
lang="java"
title="Disable all built-in health checks"
>         .useSystemServices(false)</markup>

<p><span class="merged" id="all.iTR0l" title="原文 : Alternatively, you could instead remove the dependency on the helidon-health-checks component from the pom.xml file.">かわりに、<code>helidon-health-checks</code>コンポーネントに対する依存関係を<code>pom.xml</code>ファイルから削除することもできます。</span></p>

</div>


<h3 id="_accessing_specific_health_check_types"><span class="merged" id="all.1tCblz" title="原文 : Accessing Specific Health Check Types">特定のヘルス・チェック・タイプへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.1Cfde1" title="原文 : You can choose which category of health check to retrieve when you access the health endpoint by adding the health check type as an additional part of the resource path:">ヘルス・エンドポイントにアクセスしたときに取得するヘルス・チェックのカテゴリは、リソース・パスの追加部分としてヘルス・チェック・タイプを追加することで選択できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2rxlXR" title="原文 : liveness only - http://localhost:8080/observe/health/live">リブネスのみ - <a class="bare" href="http://localhost:8080/observe/health/live" target="_blank">http://localhost:8080/observe/health/live</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2gH4mH" title="原文 : readiness only - http://localhost:8080/observe/health/ready">レディネスのみ - <a class="bare" href="http://localhost:8080/observe/health/ready" target="_blank">http://localhost:8080/observe/health/ready</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4Za2cX" title="原文 : startup only - http://localhost:8080/observe/health/started">起動のみ - <a class="bare" href="http://localhost:8080/observe/health/started" target="_blank">http://localhost:8080/observe/health/started</a></span></p>

</li>
<li>
<p><span class="merged" id="all.zd6M3" title="原文 : all - http://localhost:8080/observe/health">すべて - <a class="bare" href="http://localhost:8080/observe/health" target="_blank">http://localhost:8080/observe/health</a></span></p>

</li>
</ul>

<markup
lang="bash"
title="Get only start-up health checks"
>curl http://localhost:8080/observe/started</markup>

<markup
lang="json"
title="JSON response:"
>{
  "status": "UP",
  "checks": [
    {
      "name": "warmedUp",
      "status": "UP",
      "data": {
        "time": 1702069835172
      }
    }
  ]
}</markup>

</div>


<h3 id="_applying_configuration_to_a_custom_health_observer_customizing_the_url_path"><span class="merged" id="all.162Pr1" title="原文 : Applying Configuration to a Custom Health Observer: Customizing the URL path">カスタム・ヘルス・オブザーバへの構成の適用: URLパスのカスタマイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.2X9FnM.spl1" title="原文 : Earlier examples showed how to add custom health checks by building a custom HealthObserver in which the code set up the behavior of the health subsystem explicitly.">前述の例では、カスタム<code>HealthObserver</code>を構築してカスタム・ヘルス・チェックを追加する方法を示しています。このカスタム・ヘルス・チェックでは、コードによってヘルス・サブシステムの動作が明示的に設定されます。</span> <span class="merged" id="all.2X9FnM.spl2" title="原文 : Recall that the example code invoked the HealthObserver.Builder details method to turn on detailed output.">サンプル・コードでは、<code>HealthObserver.Builder</code> <code>details</code>メソッドを呼び出して詳細な出力を有効にすることに注意してください。</span> </p>

<p><span class="merged" id="all.1htSOf.spl1" title="原文 : Once it creates a custom health observer, your code has full responsibility for determining the observer’s behavior; Helidon does not automatically apply configuration to a custom observer.">カスタム・ヘルス・オブザーバを作成すると、コードにはオブザーバの動作を決定する完全な責任があります。Helidonは、構成をカスタム・オブザーバに自動的に適用しません。</span> <span class="merged" id="all.1htSOf.spl2" title="原文 : But your code can easily do so.">しかし、あなたのコードは簡単にそうすることができます。</span> </p>

<p><span class="merged" id="all.1Tf3my" title="原文 : The next example customizes the URL path for the health endpoint, first explicitly in the code and then via configuration.">次の例では、ヘルス・エンドポイントのURLパスを、最初にコード内で明示的に、次に構成を介してカスタマイズします。</span></p>


<h4 id="_customizing_the_endpoint_path_in_the_code"><span class="merged" id="all.3XuCow" title="原文 : Customizing the endpoint path in the code">コード内のエンドポイント・パスのカスタマイズ</span></h4>
<div class="section">
<p><span class="merged" id="all.W7wW" title="原文 : Customize the URL path for health checks by invoking the endpoint method on the HealthObserver.Builder.">ヘルス・チェックのURLパスをカスタマイズするには、<code>HealthObserver.Builder</code>で<code>endpoint</code>メソッドを呼び出します。</span></p>

<markup
lang="java"
title="Set a custom endpoint path"
>ObserveFeature observe = ObserveFeature.builder()
     .config(config.get("server.features.observe"))
     .addObserver(HealthObserver.builder()
         .endpoint("/myhealth") <span class="conum" data-value="1" />
         .details(true)
         ...
         .build()
     ...
...</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.43uqBc" title="原文 : Changes the health endpoint path to /myhealth.">ヘルス・エンドポイントのパスを<code>/myhealth</code>に変更します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then verify that the health check endpoint responds at <code>/myhealth</code>:"
>curl http://localhost:8080/myhealth</markup>

<p><span class="merged" id="all.u5Xtb.spl1" title="原文 : Earlier you added health config to the application.yaml config file to turn on detailed output.">以前にヘルス構成を<code>application.yaml</code>構成ファイルに追加して、詳細な出力を有効にします。</span> <span class="merged" id="all.u5Xtb.spl2" title="原文 : If you want to run an experiment, change that details setting in the config file to false and stop, rebuild, and rerun the application.">実験を実行する場合は、構成ファイル内のその<code>details</code>設定を<code>false</code>に変更し、アプリケーションを停止、再構築、および再実行します。</span> <span class="merged" id="all.u5Xtb.spl3" title="原文 : Now access the health endpoint (at /myhealth, remember).">次に、ヘルス・エンドポイントにアクセスします(<code>/myhealth</code>で覚えておいてください)。</span> <span class="merged" id="all.u5Xtb.spl4" title="原文 : The output remains detailed because your code-​which has full responsibility for determining the custom health observer’s behavior-​does not apply configuration to the custom observer’s builder.">カスタム・ヘルス・オブザーバの動作を決定する全責任を負うコードがカスタム・オブザーバのビルダーに構成を適用しないため、出力は詳細な<em>「まま」</em>です。</span> </p>

</div>


<h4 id="_adding_configuration_to_a_custom_observer"><span class="merged" id="all.4T3TtZ" title="原文 : Adding configuration to a custom observer">カスタム・オブザーバへの構成の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1Gmc6T.spl1" title="原文 : In addition to preparing the health observer builder with hard-coded settings, your code can also apply configuration for health.">ハードコードされた設定でヘルス・オブザーバ・ビルダーを準備することに加えて、コードでヘルスの構成を適用することもできます。</span> <span class="merged" id="all.1Gmc6T.spl2" title="原文 : This allows someone who deploys your application to control the behavior of the health subsystem using configuration without requiring source code changes to your application.">これにより、アプリケーションをデプロイするユーザーは、アプリケーションにソース・コードを変更することなく、構成を使用してヘルス・サブシステムの動作を制御できます。</span> </p>

<p><span class="merged" id="all.2X4406.spl1" title="原文 : The generated Main class in the application already creates a Config object for the top-level config node.">アプリケーションで生成された<code>Main</code>クラスは、最上位の構成ノードの<code>Config</code>オブジェクトをすでに作成しています。</span> <span class="merged" id="all.2X4406.spl2" title="原文 : Using the following code to create the observe feature also applies any health-related configuration settings to the custom health observer.">次のコードを使用して監視機能を作成すると、ヘルス関連の構成設定もカスタム・ヘルス・オブザーバに適用されます。</span> <span class="merged" id="all.2X4406.spl3" title="原文 : Notice the added line just before the HealthObserver.Build build() invocation near the end of the example code.">サンプル・コードの最後にある<code>HealthObserver.Build</code> <code>build()</code>呼出しの直前に追加された行に注意してください。</span> </p>

<markup

title="Apply health configuration to your custom health observer"
>ObserveFeature observe = ObserveFeature.builder()
        .config(config.get("server.features.observe"))
        .addObserver(HealthObserver.builder()
                             .endpoint("/myhealth")
                             .details(true)
                             .addCheck(() -&gt; HealthCheckResponse.builder()
                                         .status(System.currentTimeMillis() - serverStartTime.get() &gt;= 8000)
                                         .detail("time", System.currentTimeMillis())
                                         .build(),
                                       HealthCheckType.STARTUP,
                                       "warmedUp")
                             .config(config.get("server.features.observe.observers.health")) <span class="conum" data-value="1" />
                             .build()
        )
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2kg3Fu" title="原文 : Find and apply any health-related settings from configuration at the server.features.observe.observers.health config key.">構成からヘルス関連の設定を<code>server.features.observe.observers.health</code>構成キーで検索して適用します。</span></li>
</ul>

<p><span class="merged" id="all.1JAPGX.spl1" title="原文 : Your code decides what config key to use for retrieving the configuration.">コードによって、構成の取得に使用する構成キーが決まります。</span> <span class="merged" id="all.1JAPGX.spl2" title="原文 : Recall earlier, before adding custom health checks, you added a config section for health-​to set details to true--at server.features.observe.observers.health.">前述のとおり、カスタム・ヘルス・チェックを追加する前に、ヘルス用の構成セクションを追加して、<code>details</code>を<code>server.features.observe.observers.health</code>の<code>true</code>--に設定しました。</span> <span class="merged" id="all.1JAPGX.spl3" title="原文 : Helidon used that configuration to set up the health observer it created automatically.">Helidonは、その構成を使用して、自動的に作成されるヘルス・オブザーバ<em>「それは」</em>を設定します。</span> <span class="merged" id="all.1JAPGX.spl4" title="原文 : To be consistent for anyone preparing the configuration file, it’s a good idea for your application code-​as it prepares a custom HealthObserver--to look in the same place Helidon does for health config.">構成ファイルを準備するすべてのユーザーに対して一貫性を保つには、アプリケーション・コードがカスタム<code>HealthObserver</code>を準備するため、ヘルス構成に対してHelidonが行う場所と同じ場所を参照することをお薦めします。</span> </p>

<p><span class="merged" id="all.1b1lI.spl1"  title="原文:: Order is important.">順序は重要です。</span> <span class="merged" id="all.1b1lI.spl2" title="原文 : Here, the code first sets details to true explicitly and later applies configuration.">このコードでは、最初に<code>details</code>を<code>true</code>に設定し、後で構成を適用します。</span> <span class="merged" id="all.1b1lI.spl3" title="原文 : If your end user sets details in the server.features.observe.observers.health config to false, that setting overrides the hard-coded true setting in the code because of where in the code you apply the configuration.">エンド・ユーザーが<code>server.features.observe.observers.health</code>構成の<code>details</code>を<code>false</code>に設定した場合、その設定はコード<em>「コード内の構成を適用する場所が原因」</em>のハードコードされた<code>true</code>設定をオーバーライドします。</span> <span class="merged" id="all.1b1lI.spl4" title="原文 : Try changing the details value to false in the config file and then stop, rebuild, and rerun the application.">構成ファイルで<code>details</code>値を<code>false</code>に変更してから、アプリケーションを停止、再構築および再実行します。</span> <span class="merged" id="all.1b1lI.spl5" title="原文 : Access the health endpoint and notice that the output is no longer detailed.">ヘルス・エンドポイントにアクセスし、出力が詳細でなくなったことを確認します。</span> </p>

<p><span class="merged" id="all.1TJ1lt" title="原文 : In general, most applications should apply settings from config after assigning any settings in the code so users have the final say, but there might be exceptions in your particular case.">一般に、ほとんどのアプリケーションは、コード内の構成を割り当てた<em>後に</em>configの構成を適用して、ユーザーが最終的な発言を行うようにする必要がありますが、特定のケースでは例外が発生する可能性があります。</span></p>

</div>

</div>


<h3 id="_using_liveness_readiness_and_startup_health_checks_with_kubernetes"><span class="merged" id="all.4Kam71.1" title="原文 : Using Liveness, Readiness, and Startup Health Checks with Kubernetes">Kubernetesでのリブネス、レディネスおよび起動ヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1s7pdD" title="原文 : The following example shows how to integrate the Helidon health API in an application that implements health endpoints for the Kubernetes liveness, readiness, and startup probes.">次の例は、Kubernetesのリブネス、レディネスおよび起動プローブのヘルス・エンドポイントを実装するアプリケーションで、HelidonヘルスAPIを統合する方法を示しています。</span></p>

<markup
lang="java"
title="Add a <code>readyTime</code> variable to the <code>Main</code> class:"
>private static AtomicLong readyTime = new AtomicLong(0);</markup>

<markup
lang="java"
title="Change the <code>HealthObserver</code> builder in the <code>Main.main</code> method to use new built-in liveness checks and custom liveness, readiness, and startup checks:"
>ObserveFeature observe = ObserveFeature.builder()
    .config(config.get("server.features.observe"))
    .addObserver(HealthObserver.builder()
    .useSystemServices(true)                      <span class="conum" data-value="1" />
    .addCheck(() -&gt; HealthCheckResponse.builder()
             .status(readyTime.get() != 0)
             .detail("time", readyTime.get())
             .build(), HealthCheckType.READINESS) <span class="conum" data-value="2" />
    .addCheck(() -&gt; HealthCheckResponse.builder()
             .status(readyTime.get() != 0
                     &amp;&amp; Duration.ofMillis(System.currentTimeMillis()
                                             - readyTime.get())
                                 .getSeconds() &gt;= 3)
             .detail("time", readyTime.get())
             .build(), HealthCheckType.STARTUP)   <span class="conum" data-value="3" />
    .addCheck(() -&gt; HealthCheckResponse.builder()
            .status(HealthCheckResponse.Status.UP)
            .detail("time", System.currentTimeMillis())
            .build(), HealthCheckType.LIVENESS)   <span class="conum" data-value="4" />
    .build())
.build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.28C24K" title="原文 : Add built-in health checks.">組込みのヘルス・チェックを追加します。</span></li>
<li data-value="2"><span class="merged" id="all.2qeBzJ" title="原文 : Add a custom readiness check.">カスタム・レディネス・チェックを追加します。</span></li>
<li data-value="3"><span class="merged" id="all.3NRWJ8" title="原文 : Add a custom start-up check.">カスタム起動チェックを追加します。</span></li>
<li data-value="4"><span class="merged" id="all.4TbhxU" title="原文 : Add a custom liveness check.">カスタムのリブネス・チェックを追加します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then verify the liveness, readiness, and started endpoints:"
>curl http://localhost:8080/health/live
curl http://localhost:8080/health/ready
curl http://localhost:8080/health/started</markup>

<markup
lang="bash"
title="Stop the application and build the docker image:"
>docker build -t helidon-quickstart-se .</markup>

<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>health.yaml</code>, with the following content:"
>kind: Service
apiVersion: v1
metadata:
  name: helidon-health <span class="conum" data-value="1" />
  labels:
    app: helidon-health
spec:
  type: NodePort
  selector:
    app: helidon-health
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment
apiVersion: apps/v1
metadata:
  name: helidon-health <span class="conum" data-value="2" />
spec:
  replicas: 1
  selector:
    matchLabels:
      app: helidon-health
  template:
    metadata:
      labels:
        app: helidon-health
        version: v1
    spec:
      containers:
        - name: helidon-health
          image: helidon-quickstart-se
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080
          livenessProbe:
            httpGet:
              path: /health/live <span class="conum" data-value="3" />
              port: 8080
            initialDelaySeconds: 5 <span class="conum" data-value="4" />
            periodSeconds: 10
            timeoutSeconds: 3
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /health/ready <span class="conum" data-value="5" />
              port: 8080
            initialDelaySeconds: 5 <span class="conum" data-value="6" />
            periodSeconds: 2
            timeoutSeconds: 3
          startupProbe:
            httpGet:
              path: /health/started <span class="conum" data-value="7" />
              port: 8080
            initialDelaySeconds: 8 <span class="conum" data-value="8" />
            periodSeconds: 10
            timeoutSeconds: 3
            failureThreshold: 3
---</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.7" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.7" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.KcwH1.1" title="原文 : The HTTP endpoint for the liveness probe.">リブネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="4"><span class="merged" id="all.2sX3Ho.1" title="原文 : The liveness probe configuration.">リブネス・プローブの構成。</span></li>
<li data-value="5"><span class="merged" id="all.1qQtuS.1" title="原文 : The HTTP endpoint for the readiness probe.">レディネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="6"><span class="merged" id="all.4TIJdd.1" title="原文 : The readiness probe configuration.">レディネス・プローブの構成。</span></li>
<li data-value="7"><span class="merged" id="all.42GE56.1" title="原文 : The HTTP endpoint for the startup probe.">起動プローブのHTTPエンドポイント。</span></li>
<li data-value="8"><span class="merged" id="all.3evYNl.1" title="原文 : The startup probe configuration.">起動プローブ構成です。</span></li>
</ul>

<markup
lang="bash"
title="Create and deploy the application into Kubernetes:"
>kubectl apply -f ./health.yaml</markup>

<markup
lang="bash"
title="Get the service information:"
>kubectl get service/helidon-health</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-health   NodePort   10.107.226.62   &lt;none&gt;        8080:30116/TCP   4s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2apblH.1" title="原文 : A service of type NodePort that serves the default routes on port 30116.">ポート<code>30116</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the health endpoints using port '30116', your port may be different:"
>curl http://localhost:30116/health</markup>

<markup
lang="bash"
title="Delete the application, cleaning up Kubernetes resources:"
>kubectl delete -f ./health.yaml</markup>

</div>


<h3 id="_summary"><span class="merged" id="all.1nTCR.10"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.2i2Rzl" title="原文 : This guide demonstrates how to use health checks in a Helidon SE application as follows:">このガイドでは、次のようにHelidon SEアプリケーションでヘルス・チェックを使用する方法を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.KZTho.1" title="原文 : Access the default health checks">デフォルトのヘルス・チェックへのアクセス</span></p>

</li>
<li>
<p><span class="merged" id="all.vDP3v.1" title="原文 : Create and use custom readiness, liveness, and startup checks">カスタム・レディネス、リブネスおよび起動チェックの作成および使用</span></p>

</li>
<li>
<p><span class="merged" id="all.1xCvzm" title="原文 : Customize the health check root path">ヘルス・チェックのルート・パスのカスタマイズ</span></p>

</li>
<li>
<p><span class="merged" id="all.1sYcc9" title="原文 : Integrate Helidon health check with Kubernetes">Helidonヘルス・チェックをKubernetesと統合</span></p>

</li>
</ul>

<p><span class="merged" id="all.1wBgef" title="原文 : Refer to the following reference for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2mjhzP.4" title="原文 : Helidon Javadoc"><a href="/apidocs/index.html?overview-summary.html" target="_blank">Helidon Javadoc</a></span></p>

</li>
</ul>

</div>

</div>

</doc-view>
