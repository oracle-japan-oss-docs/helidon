<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.XkuXh" title="原文 : Helidon SE Health Check Guide">Helidon SEヘルス・チェック・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2KtcLZ" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using both built-in and custom health-checks.">このガイドでは、組込みヘルス・チェックとカスタム・ヘルス・チェックの両方を使用していくつかの基本的な例を実行するために使用できるサンプルHelidon SEプロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.18"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2UQif6.1" title="原文 : For this 15 minute tutorial, you will need the following:">この15分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.1hKNxI.16" title="原文 : A Helidon {upper-case-flavor} Application">Helidon {upper-case-flavor} アプリケーション</span></td>
<td class=""><span class="merged" id="all.3jMlMY.16" title="原文 : You can use your own application or use the Helidon {upper-case-flavor} Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/{lower-case-flavor}/guides/02_quickstart" id="" target="_blank" >「Helidon {upper-case-flavor} クイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.17" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.17" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.19" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.17" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.18"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.17" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.18"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.17" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>


<h3 id="_create_a_sample_se_project"><span class="merged" id="all.21pN8S" title="原文 : Create a Sample SE Project">サンプルSEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2w3hsK.spl1" title="原文 : Generate the project sources using the Helidon SE Maven archetype.">Helidon SE Maven原型を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.2w3hsK.spl2" title="原文 : The result is a simple project that can be used for the examples in this guide.">その結果、このガイドの例で使用できる単純なプロジェクトになります。</span> </p>

<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.5.4 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

</div>

<h3 id="_using_the_built_in_health_checks"><span class="merged" id="all.1z9H3F.1" title="原文 : Using the Built-In Health Checks">組込みのヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1gBtxk" title="原文 : Helidon has a set of built-in health checks that can be optionally enabled to report various health-check statuses that are commonly used:">Helidonには、一般的に使用される様々なヘルス・チェック・ステータスをレポートするためにオプションで有効化できる一連の組込みヘルス・チェックがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1WzrZM.1" title="原文 : deadlock detection">デッドロックの検出</span></p>

</li>
<li>
<p><span class="merged" id="all.2FevQJ.1" title="原文 : available disk space">使用可能なディスク領域</span></p>

</li>
<li>
<p><span class="merged" id="all.3lRV6E.1" title="原文 : available heap memory">使用可能なヒープ・メモリー</span></p>

</li>
</ul>
<p><span class="merged" id="all.4C28FC.spl1" title="原文 : The following example will demonstrate how to use the built-in health-checks.">次の例では、組込みヘルス・チェックの使用方法を示します。</span> <span class="merged" id="all.4C28FC.spl2" title="原文 : These examples are all executed from the root directory of your project (helidon-quickstart-se).">これらの例はすべて、プロジェクトのルート・ディレクトリ(helidon-quickstart-se)から実行されます。</span> </p>

<markup
lang="xml"
title="Notice that the built-in health-check dependency is already in the project&#8217;s pom.xml file:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="Have a look at <code>Main.java</code>, and the <code>createRouting</code> method:"
>private static Routing createRouting(Config config) {

    HealthSupport health = HealthSupport.builder()
      .addLiveness(HealthChecks.healthChecks())  <span class="conum" data-value="1" />
      .build();

    return Routing.builder()
      .register(health)  <span class="conum" data-value="2" />
      .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.abS0F" title="原文 : Add built-in health-checks (requires the helidon-health-checks dependency).">組込みヘルス・チェックを追加します(<code>helidon-health-checks</code>依存関係が必要です)。</span></li>
<li data-value="2"><span class="merged" id="all.1VF6jO" title="原文 : Register the created health support with web server routing (adds the /health endpoint).">作成したヘルス・サポートをwebサーバー・ルーティングに登録します(<code>/health</code>エンドポイントを追加します)。</span></li>
</ul>
<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="Verify the health endpoint in a new terminal window:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSON response:"
>{
  "outcome": "UP",
  "status": "UP",
  "checks": [
    {
      "name": "deadlock",
      "state": "UP",
      "status": "UP"
    },
    {
      "name": "diskSpace",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "319.58 GB",
        "freeBytes": 343144304640,
        "percentFree": "68.63%",
        "total": "465.63 GB",
        "totalBytes": 499963174912
      }
    },
    {
      "name": "heapMemory",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "196.84 MB",
        "freeBytes": 206404016,
        "max": "3.56 GB",
        "maxBytes": 3817865216,
        "percentFree": "98.66%",
        "total": "245.50 MB",
        "totalBytes": 257425408
      }
    }
  ]
}</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.olVNH.1.spl1" title="原文 : In MicroProfile Health 2.0 outcome and state were replaced by status in the JSON response wire format.">MicroProfile Health 2.0 <code>outcome</code>および<code>state</code>は、JSONレスポンス・ワイヤー形式で<code>status</code>に置き換えられました。</span> <span class="merged" id="all.olVNH.1.spl2" title="原文 : Helidon currently provides both fields for backwards compatibility, but use of outcome and state is deprecated and will be removed in a future release.">Helidonには現在、下位互換性のために両方のフィールドが用意されていますが、<code>outcome</code>および<code>state</code>の使用は非推奨であり、将来のリリースで削除されます。</span> <span class="merged" id="all.olVNH.1.spl3" title="原文 : You should rely on status instead.">かわりに、<code>status</code>を使用する必要があります。</span> </p>
</div>
</div>

<h3 id="_custom_liveness_health_checks"><span class="merged" id="all.1ZfvHJ.1" title="原文 : Custom Liveness Health Checks">カスタム・リブネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.4Xuz4n.spl1" title="原文 : You can create application specific custom health checks and integrate them with Helidon using the HealthSupport class, which is a WebServer service that contains a collection of registered HealthCheck instances.">アプリケーション固有のカスタム・ヘルス・チェックを作成し、<code>HealthSupport</code>クラス(登録済の<code>HealthCheck</code>インスタンスのコレクションを含むWebServerサービス)を使用してHelidonと統合できます。</span> <span class="merged" id="all.4Xuz4n.spl2" title="原文 : When queried, it invokes the registered health check and returns a response with a status code representing the overall state of the application.">問合せが行われると、登録済ヘルス・チェックが起動され、アプリケーションの全体的な状態を表すステータス・コードを含むレスポンスが返されます。</span> </p>

<markup
lang="xml"
title="Notice the custom health-checks dependency is already in the project&#8217;s pom.xml file:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="Replace the <code>HealthSupport</code> builder in the <code>Main.createRouting</code> method:"
>HealthSupport health = HealthSupport.builder()
  .addLiveness(() -&gt; HealthCheckResponse.named("LivenessCheck")
      .up()
      .withData("time", System.currentTimeMillis())
      .build()) <span class="conum" data-value="1" />
  .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3i74oE.spl1" title="原文 : Add a custom liveness health check.">カスタムのリブネス・ヘルス・チェックを追加します。</span> <span class="merged" id="all.3i74oE.spl2" title="原文 : This example returns UP and current time.">この例では、<code>UP</code>および現在の時間を返します。</span> </li>
</ul>
<markup
lang="bash"
title="Build and run the application, then verify the custom health endpoint:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSON response:"
>{
    "outcome": "UP",
    "checks": [
        {
            "name": "LivenessCheck",
            "state": "UP",
            "data": {
                "time": 1546958376613
            }
        }
    ]
}</markup>

</div>

<h3 id="_custom_readiness_health_check"><span class="merged" id="all.33Pdnd.1" title="原文 : Custom Readiness Health Check">カスタム・レディネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.4Yhpto.1.spl1" title="原文 : You can add a readiness check to indicate that the application is ready to be used.">レディネス・チェックを追加して、アプリケーションを使用する準備ができていることを示すことができます。</span> <span class="merged" id="all.4Yhpto.1.spl2" title="原文 : In this example, the server will wait five seconds before it becomes ready.">この例では、サーバーは5秒間待機してから準備ができます。</span> </p>

<markup
lang="java"
title="Add a <code>readyTime</code> variable to the <code>Main</code> class, then set it five seconds after the application starts:"
>import java.util.concurrent.atomic.AtomicLong; <span class="conum" data-value="1" />

public final class Main {

  private static AtomicLong readyTime = new AtomicLong(0); <span class="conum" data-value="2" />
  ...

    static WebServer startServer() throws IOException {
    ...
      server.start() ...

        // Server threads are not daemon. No need to block. Just react.
      try {
        Thread.sleep(5000); <span class="conum" data-value="3" />
      } catch (InterruptedException e) {
        throw new RuntimeException(e);
      }

      readyTime.set(System.currentTimeMillis()); <span class="conum" data-value="4" />
      return server;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.YAj2n" title="原文 : Import AtomicLong.">AtomicLongのインポート。</span></li>
<li data-value="2"><span class="merged" id="all.1jSpd3" title="原文 : Declare the readyTime variable."><code>readyTime</code>変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.1LhXwZ" title="原文 : Sleep five seconds.">スリープ5秒。</span></li>
<li data-value="4"><span class="merged" id="all.2YFl3j" title="原文 : Set the readyTime to the time when the server became ready."><code>readyTime</code>を、サーバーの準備ができた時間に設定します。</span></li>
</ul>
<markup
lang="java"
title="Add a readiness check to the <code>HealhSupport</code> builder in the <code>Main.createRouting</code> method:"
>HealthSupport health = HealthSupport.builder()
  .addLiveness(() -&gt; HealthCheckResponse.named("LivenessCheck")
      .up()
      .withData("time", System.currentTimeMillis())
      .build())
  .addReadiness(() -&gt; HealthCheckResponse.named("ReadinessCheck")
      .state (readyTime.get() != 0 )
      .withData( "time", readyTime.get())
      .build()) <span class="conum" data-value="1" />
  .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.pzcSI" title="原文 : Add the readiness check.">レディネス・チェックを追加します。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application.  Issue the curl command with -v within five seconds and you see the application is not ready:"
>curl -v  http://localhost:8080/health/ready</markup>

<markup
lang="json"
title="HTTP response:"
>...
&lt; HTTP/1.1 503 Service Unavailable <span class="conum" data-value="1" />
...
{
  "outcome": "DOWN",
  "status": "DOWN",
  "checks": [
    {
      "name": "ReadinessCheck",
      "state": "DOWN",
      "status": "DOWN",
      "data": {
        "time,": 0
      }
    }
  ]
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1yEKrD.1" title="原文 : The HTTP status is 503 since the application is not ready.">アプリケーションの準備ができていないため、HTTPステータスは<code>503</code>です。</span></li>
</ul>
<markup
lang="bash"
title="After five seconds you will see the application is ready:"
>curl -v http://localhost:8080/health/ready</markup>

<markup
lang="json"
title="JSON response:"
>...
&lt; HTTP/1.1 200 OK <span class="conum" data-value="1" />
...
{
  "outcome": "UP",
  "status": "UP",
  "checks": [
    {
      "name": "ReadinessCheck",
      "state": "UP",
      "status": "UP",
      "data": {
        "time,": 1566243562097
      }
    }
  ]
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.yxWiD.1" title="原文 : The HTTP status is 200 indicating that the application is ready.">HTTPステータスは、アプリケーションの準備ができていることを示す<code>200</code>です。</span></li>
</ul>
<p><span class="merged" id="all.4Hsiwu" title="原文 : When using the health-check URLs, you can get the following health-check data">ヘルス・チェックURLを使用すると、次のヘルス・チェック・データを取得できます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Ezgw8" title="原文 : liveness only - http://localhost:8080/health/live">リブネスのみ - <a href="http://localhost:8080/health/live" id="" target="_blank" >http://localhost:8080/health/live</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3kzQrU" title="原文 : readiness only - http://localhost:8080/health/ready">レディネスのみ - <a href="http://localhost:8080/health/ready" id="" target="_blank" >http://localhost:8080/health/ready</a></span></p>

</li>
<li>
<p><span class="merged" id="all.MmoCK" title="原文 : both - http://localhost:8080/health">両方 - <a href="http://localhost:8080/health" id="" target="_blank" >http://localhost:8080/health</a></span></p>

</li>
</ul>
<markup
lang="bash"
title="Get both liveness and readiness data from a single query:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSON response:"
>{
  "outcome": "UP",
  "status": "UP",
  "checks": [
    {
      "name": "LivenessCheck",
      "state": "UP",
      "status": "UP",
      "data": {
        "time": 1566244094548
      }
    },
    {
      "name": "ReadinessCheck",
      "state": "UP",
      "status": "UP",
      "data": {
        "time,": 1566244093012
      }
    }
  ]
}</markup>

</div>

<h3 id="_combine_built_in_and_custom_health_checks"><span class="merged" id="all.3VRztW" title="原文 : Combine Built-In and Custom Health Checks">組込み済およびカスタムのヘルス・チェックの組合せ</span></h3>
<div class="section">
<p><span class="merged" id="all.3nRX1M" title="原文 : You can combine built-in and custom health-checks using the same HealthSupport builder.">同じHealthSupportビルダーを使用して、組込みヘルス・チェックとカスタム・ヘルス・チェックを組み合せることができます。</span></p>

<markup
lang="java"
title="Register a custom health-check in the <code>Main.createRouting</code> method:"
>HealthSupport health = HealthSupport.builder()
    .addLiveness(HealthChecks.healthChecks())  <span class="conum" data-value="1" />
    .addLiveness(() -&gt; HealthCheckResponse.named("LivenessCheck")
      .up()
      .withData("time", System.currentTimeMillis())
      .build())
    .addReadiness(() -&gt; HealthCheckResponse.named("ReadinessCheck")
      .state (readyTime.get() != 0 )
      .withData( "time", readyTime.get())
      .build())
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Pqpwy" title="原文 : Add the built-in health-checks back to HealthSupport builder.">組込みヘルス・チェックを<code>HealthSupport</code>ビルダーに追加します。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then verify the health endpoint.  You will see both the built-in and custom health-check data:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSON response:"
>{
  "outcome": "UP",
  "status": "UP",
  "checks": [
    {
      "name": "LivenessCheck",
      "state": "UP",
      "status": "UP",
      "data": {
        "time": 1566245527673
      }
    },
    {
      "name": "ReadinessCheck",
      "state": "UP",
      "status": "UP",
      "data": {
        "time,": 1566245527620
      }
    },
    {
      "name": "deadlock",
      "state": "UP",
      "status": "UP"
    },
    {
      "name": "diskSpace",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "326.17 GB",
        "freeBytes": 350224424960,
        "percentFree": "70.05%",
        "total": "465.63 GB",
        "totalBytes": 499963174912
      }
    },
    {
      "name": "heapMemory",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "247.76 MB",
        "freeBytes": 259791680,
        "max": "4.00 GB",
        "maxBytes": 4294967296,
        "percentFree": "99.80%",
        "total": "256.00 MB",
        "totalBytes": 268435456
      }
    }
  ]
}</markup>

</div>

<h3 id="_custom_health_check_url_path"><span class="merged" id="all.1VwhJx" title="原文 : Custom Health Check URL Path">カスタム・ヘルス・チェックURLパス</span></h3>
<div class="section">
<p><span class="merged" id="all.2RllzR.spl1" title="原文 : You can use a custom URL path for heath checks by setting the WebContext."><code>WebContext</code>を設定することで、ヒート・チェックにカスタムURLパスを使用できます。</span> <span class="merged" id="all.2RllzR.spl2" title="原文 : In the following example, only the liveness URL is changed, but you can do the same for the readiness and default health-checks.">次の例では、リブネスURLのみが変更されますが、レディネスおよびデフォルトのヘルス・チェックでも同じ操作を実行できます。</span> </p>

<markup
lang="java"
title="Register a custom URL path with the custom health-check in the <code>Main.createRouting</code> method:"
>HealthSupport health = HealthSupport.builder()
    .webContext("/probe/live")<span class="conum" data-value="1" />
    .addLiveness(() -&gt; HealthCheckResponse.named("livenessProbe")
      .up()
      .withData("time", System.currentTimeMillis())
      .build())
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.S4av" title="原文 : Change the liveness URL path using a WebContext."><code>WebContext</code>を使用してリブネスURLパスを変更します。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then verify that the liveness endpoint is using the <code>/probe/live</code>:"
>curl http://localhost:8080/probe/live</markup>

<markup
lang="json"
title="JSON response:"
>{
  "outcome": "UP",
  "checks": [
    {
      "name": "livenessProbe",
      "state": "UP",
      "data": {
        "time": 1546958376613
      }
    }
  ]
}</markup>

</div>

<h3 id="_using_liveness_and_readiness_health_checks_with_kubernetes"><span class="merged" id="all.1B6JkE.1" title="原文 : Using Liveness and Readiness Health Checks with Kubernetes">Kubernetesでのリブネスとレディネスのヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2sk0dH" title="原文 : The following example shows how to integrate the Helidon health API in an application that implements health endpoints for the Kubernetes liveness and readiness probes.">次の例では、Kubernetesのリブネスおよびレディネス・プローブのヘルス・エンドポイントを実装するアプリケーションにHelidon health APIを統合する方法を示します。</span></p>

<markup
lang="java"
title="Change the <code>HealthSupport</code> builder in the <code>Main.createRouting</code> method to use the built-in liveness checks, a custom liveness check, and a readiness check:"
>HealthSupport health = HealthSupport.builder()
    .addLiveness(HealthChecks.healthChecks()) <span class="conum" data-value="1" />
    .addLiveness(() -&gt; HealthCheckResponse.named("LivenessCheck")  <span class="conum" data-value="2" />
      .up()
      .withData("time", System.currentTimeMillis())
      .build())
    .addReadiness(() -&gt; HealthCheckResponse.named("ReadinessCheck")  <span class="conum" data-value="3" />
      .state (readyTime.get() != 0 )
      .withData( "time", readyTime.get())
      .build())
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4NpKAH" title="原文 : Add built-in health-checks.">組込みヘルス・チェックを追加します。</span></li>
<li data-value="2"><span class="merged" id="all.4TbhxU" title="原文 : Add a custom liveness check.">カスタムのリブネス・チェックを追加します。</span></li>
<li data-value="3"><span class="merged" id="all.2qeBzJ" title="原文 : Add a custom readiness check.">カスタム・レディネス・チェックを追加します。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then verify the liveness and readiness endpoints:"
>curl http://localhost:8080/health/live
curl http://localhost:8080/health/ready</markup>

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
---</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.6" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.6" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.KcwH1.1" title="原文 : The HTTP endpoint for the liveness probe.">リブネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="4"><span class="merged" id="all.2sX3Ho.1" title="原文 : The liveness probe configuration.">リブネス・プローブの構成。</span></li>
<li data-value="5"><span class="merged" id="all.1qQtuS.1" title="原文 : The HTTP endpoint for the readiness probe.">レディネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="6"><span class="merged" id="all.4TIJdd.1" title="原文 : The readiness probe configuration.">レディネス・プローブの構成。</span></li>
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

<h3 id="_summary"><span class="merged" id="all.1nTCR.9"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.4PGoxP" title="原文 : This guide demonstrated how to use health checks in a Helidon SE application as follows:">このガイドでは、次のようにHelidon SEアプリケーションでヘルス・チェックを使用する方法を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.U3qHS" title="原文 : Access the default health-check">デフォルトのヘルス・チェックにアクセス</span></p>

</li>
<li>
<p><span class="merged" id="all.48WuDJ.1" title="原文 : Create and use custom readiness and liveness checks">カスタムのレディネスおよびリブネス・チェックの作成と使用</span></p>

</li>
<li>
<p><span class="merged" id="all.1p1FKt" title="原文 : Customize the health-check root path">ヘルス・チェックのルート・パスのカスタマイズ</span></p>

</li>
<li>
<p><span class="merged" id="all.2iTcRB" title="原文 : Integrate Helidon health-check with Kubernetes">Helidonヘルス・チェックとKubernetesの統合</span></p>

</li>
</ul>
<p><span class="merged" id="all.1wBgef" title="原文 : Refer to the following reference for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1m3bP8.5" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
