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

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.9"  title="原文:: What you need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2IiFMu.1" title="原文 : About 15 minutes">約15分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.15" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_create_a_sample_se_project"><span class="merged" id="all.2dGmUI" title="原文 : Create a sample SE project">サンプルSEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2w3hsK.spl1" title="原文 : Generate the project sources using the Helidon SE Maven archetype.">Helidon SE Maven原型を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.2w3hsK.spl2" title="原文 : The result is a simple project that can be used for the examples in this guide.">その結果、このガイドの例で使用できる単純なプロジェクトになります。</span> </p>

<markup
lang="bash"
title="Maven原型を実行します:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

</div>

<h3 id="_using_the_built_in_health_checks"><span class="merged" id="all.i5Eb2.1" title="原文 : Using the built-in health-checks">組込みヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.4K0jSj" title="原文 : Helidon has a set of built-in health-checks that can be optionally enabled to report various health-check statuses that are commonly used:">Helidonには、一般的に使用される様々なヘルス・チェック・ステータスをレポートするためにオプションで有効にできる組込みヘルス・チェックのセットがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1WzrZM.1"  title="原文:: deadlock detection">デッドロックの検出</span></p>

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
title="組込みのヘルス・チェック依存性がプロジェクトのpom.xmlファイルにすでに存在することを確認します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="<code>Main.java</code>および<code>createRouting</code>メソッドを確認します:"
>private static Routing createRouting(Config config) {

    HealthSupport health = HealthSupport.builder()
      .addLiveness(HealthChecks.healthChecks())  <span class="conum" data-value="1" />
      .build();

    return Routing.builder()
      .register(health)  <span class="conum" data-value="2" />
      .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.abS0F" title="原文 : Add built-in health-checks (requires the helidon-health-checks dependency).">組込みヘルス・チェックを追加します(<code>helidon-health-checks</code>依存性が必要です)。</span></li>
<li data-value="2"><span class="merged" id="all.1VF6jO" title="原文 : Register the created health support with web server routing (adds the /health endpoint).">作成したヘルス・サポートをwebサーバー・ルーティングに登録します(<code>/health</code>エンドポイントを追加します)。</span></li>
</ul>
<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="新しいターミナル・ウィンドウでヘルス・エンドポイントを確認します:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h3 id="_custom_liveness_health_checks"><span class="merged" id="all.DBKYP.1" title="原文 : Custom liveness health-checks">カスタム・リブネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.3OY9DT.spl1" title="原文 : You can create application specific custom health-checks and integrate them with Helidon using the HealthSupport class, which is a WebServer service that contains a collection of registered HealthCheck instances.">登録された<code>HealthCheck</code>インスタンスのコレクションを含むWebServerサービスである<code>HealthSupport</code>クラスを使用して、アプリケーション固有のカスタム・ヘルス・チェックを作成し、Helidonと統合できます。</span> <span class="merged" id="all.3OY9DT.spl2" title="原文 : When queried, it invokes the registered health-check and returns a response with a status code representing the overall state of the application.">問合せが行われると、登録済ヘルス・チェックが起動され、アプリケーションの全体的な状態を表すステータス・コードを含むレスポンスが返されます。</span> </p>

<markup
lang="xml"
title="カスタムのヘルス・チェック依存性がプロジェクトのpom.xmlファイルにすでに存在することを確認します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="<code>Main.createRouting</code>メソッドの<code>HealthSupport</code>ビルダーを置き換えます:"
>HealthSupport health = HealthSupport.builder()
  .addLiveness(() -&gt; HealthCheckResponse.named("LivenessCheck")
      .up()
      .withData("time", System.currentTimeMillis())
      .build()) <span class="conum" data-value="1" />
  .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2EFzTq.spl1" title="原文 : Add a custom liveness health-check.">カスタムのリブネス・ヘルス・チェックを追加します。</span> <span class="merged" id="all.2EFzTq.spl2" title="原文 : This example returns UP and current time.">この例では、<code>UP</code>および現在の時間を返します。</span> </li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、カスタム・ヘルス・エンドポイントを確認します:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h3 id="_custom_readiness_health_check"><span class="merged" id="all.1NJRk0.1" title="原文 : Custom readiness health-check">カスタム・レディネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.4Yhpto.1.spl1" title="原文 : You can add a readiness check to indicate that the application is ready to be used.">レディネス・チェックを追加して、アプリケーションを使用する準備ができていることを示すことができます。</span> <span class="merged" id="all.4Yhpto.1.spl2" title="原文 : In this example, the server will wait five seconds before it becomes ready.">この例では、サーバーは5秒間待機してから準備ができます。</span> </p>

<markup
lang="java"
title="<code>readyTime</code>変数を<code>Main</code>クラスに追加し、アプリケーションの起動後5秒後に設定します:"
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
title="<code>Main.createRouting</code>メソッドで<code>HealhSupport</code>ビルダーにレディネス・チェックを追加します:"
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
title="アプリケーションをビルドして実行します。5秒以内に-vを指定してcurlコマンドを発行すると、アプリケーションの準備ができていないことがわかります:"
>curl -v  http://localhost:8080/health/ready</markup>

<markup
lang="json"
title="HTTPレスポンス:"
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
title="5秒後、アプリケーションの準備ができていることがわかります:"
>curl -v http://localhost:8080/health/ready</markup>

<markup
lang="json"
title="JSONレスポンス:"
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
title="リブネスとレディネスの両方のデータを単一の問合せから取得します:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h3 id="_combine_built_in_and_custom_health_checks"><span class="merged" id="all.30igi9" title="原文 : Combine built-in and custom health-checks">組込みヘルス・チェックとカスタム・ヘルス・チェックの組合せ</span></h3>
<div class="section">
<p><span class="merged" id="all.3nRX1M" title="原文 : You can combine built-in and custom health-checks using the same HealthSupport builder.">同じHealthSupportビルダーを使用して、組込みヘルス・チェックとカスタム・ヘルス・チェックを組み合せることができます。</span></p>

<markup
lang="java"
title="<code>Main.createRouting</code>メソッドにカスタム・ヘルス・チェックを登録します:"
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
title="アプリケーションをビルドして実行し、ヘルス・エンドポイントを確認します。組込みとカスタムの両方のヘルス・チェック・データが表示されます:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h3 id="_custom_health_check_url_path"><span class="merged" id="all.1Xa1r9" title="原文 : Custom health-check URL path">カスタム・ヘルス・チェックURLパス</span></h3>
<div class="section">
<p><span class="merged" id="all.2RllzR.spl1" title="原文 : You can use a custom URL path for heath checks by setting the WebContext."><code>WebContext</code>を設定することで、ヒート・チェックにカスタムURLパスを使用できます。</span> <span class="merged" id="all.2RllzR.spl2" title="原文 : In the following example, only the liveness URL is changed, but you can do the same for the readiness and default health-checks.">次の例では、リブネスURLのみが変更されますが、レディネスおよびデフォルトのヘルス・チェックでも同じ操作を実行できます。</span> </p>

<markup
lang="java"
title="<code>Main.createRouting</code>メソッドでカスタム・ヘルス・チェックにカスタムURLパスを登録します:"
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
title="アプリケーションをビルドして実行し、リブネス・エンドポイントで<code>/probe/live</code>が使用されていることを確認します:"
>curl http://localhost:8080/probe/live</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h3 id="_using_liveness_and_readiness_health_checks_with_kubernetes"><span class="merged" id="all.2Rd0jP.1" title="原文 : Using Liveness and Readiness health-checks with Kubernetes">Kubernetesでのリブネスおよびレディネス・ヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2sk0dH" title="原文 : The following example shows how to integrate the Helidon health API in an application that implements health endpoints for the Kubernetes liveness and readiness probes.">次の例では、Kubernetesのリブネスおよびレディネス・プローブのヘルス・エンドポイントを実装するアプリケーションにHelidon health APIを統合する方法を示します。</span></p>

<markup
lang="java"
title="組込みのリブネス・チェック、カスタムのリブネス・チェックおよびレディネス・チェックを使用するように、<code>Main.createRouting</code>メソッドの<code>HealthSupport</code>ビルダーを変更します:"
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
title="アプリケーションをビルドして実行し、リブネスおよびレディネス・エンドポイントを検証します:"
>curl http://localhost:8080/health/live
curl http://localhost:8080/health/ready</markup>

<markup
lang="bash"
title="アプリケーションを停止し、dockerイメージをビルドします:"
>docker build -t helidon-quickstart-se .</markup>

<markup
lang="yaml"
title="次の内容で、<code>health.yaml</code>という名前のKubernetes YAML仕様を作成します:"
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
apiVersion: extensions/v1beta1
metadata:
  name: helidon-health <span class="conum" data-value="2" />
spec:
  replicas: 1
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
<li data-value="1"><span class="merged" id="all.3s9wLQ.5" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.5" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.KcwH1.1" title="原文 : The HTTP endpoint for the liveness probe.">リブネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="4"><span class="merged" id="all.2sX3Ho.1" title="原文 : The liveness probe configuration.">リブネス・プローブの構成。</span></li>
<li data-value="5"><span class="merged" id="all.1qQtuS.1" title="原文 : The HTTP endpoint for the readiness probe.">レディネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="6"><span class="merged" id="all.4TIJdd.1" title="原文 : The readiness probe configuration.">レディネス・プローブの構成。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを作成し、Kubernetesにデプロイします:"
>kubectl apply -f ./health.yaml</markup>

<markup
lang="bash"
title="サービス情報を取得します:"
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
title="ポート30116を使用してヘルス・エンドポイントを検証します。実際のポートは異なる場合があります:"
>curl http://localhost:30116/health</markup>

<markup
lang="bash"
title="アプリケーションを削除し、Kubernetesリソースをクリーンアップします:"
>kubectl delete -f ./health.yaml</markup>

</div>

<h3 id="_summary"><span class="merged" id="all.1nTCR.6"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.15ivbM" title="原文 : This guide demonstrated how to use health-check in a Helidon SE application as follows:">このガイドでは、Helidon SEアプリケーションでヘルス・チェックを使用する方法を次のように説明しました:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.U3qHS.1" title="原文 : Access the default health-check">デフォルトのヘルス・チェックにアクセス</span></p>

</li>
<li>
<p><span class="merged" id="all.48WuDJ.1" title="原文 : Create and use custom readiness and liveness checks">カスタムのレディネスおよびリブネス・チェックの作成と使用</span></p>

</li>
<li>
<p><span class="merged" id="all.1p1FKt" title="原文 : Customize the health-check root path">ヘルス・チェックのルート・パスのカスタマイズ</span></p>

</li>
<li>
<p><span class="merged" id="all.2iTcRB.1" title="原文 : Integrate Helidon health-check with Kubernetes">Helidonヘルス・チェックとKubernetesの統合</span></p>

</li>
</ul>
<p><span class="merged" id="all.2xU6Da" title="原文 : Please refer to the following reference for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1m3bP8.5" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
