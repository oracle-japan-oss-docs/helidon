<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1RXTFn" title="原文 : Helidon MP Health Check Guide">Helidon MPヘルス・チェック・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3VGyD" title="原文 : This guide describes how to create a sample MicroProfile (MP) project that can be used to run some basic examples using both built-in and custom health-checks with Helidon MP.">このガイドでは、Helidon MPで組込みヘルス・チェックとカスタム・ヘルス・チェックの両方を使用していくつかの基本的な例を実行するために使用できるサンプルMicroProfile (MP)プロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.2"  title="原文:: What you need">必要事項</span></h2>
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
<td class=""><span class="merged" id="all.2IiFMu" title="原文 : About 15 minutes">約15分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.3" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_create_a_sample_mp_project"><span class="merged" id="all.1Tx9m7" title="原文 : Create a sample MP project">サンプルMPプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1nyJnN.spl1" title="原文 : Generate the project sources using the Helidon MP Maven archetype.">Helidon MP Maven原型を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.1nyJnN.spl2" title="原文 : The result is a simple project that can be used for the examples in this guide.">その結果、このガイドの例で使用できる単純なプロジェクトになります。</span> </p>

<markup
lang="bash"
title="Maven原型を実行します:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

</div>

<h3 id="_using_the_built_in_health_checks"><span class="merged" id="all.i5Eb2" title="原文 : Using the built-in health-checks">組込みヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.498UEs" title="原文 : Helidon has a set of built-in health-checks that are automatically enabled to report various health-check statuses that are commonly used:">Helidonには、一般的に使用される様々なヘルス・チェック・ステータスをレポートするために自動的に有効化される組込みヘルス・チェックのセットがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1WzrZM"  title="原文:: deadlock detection">デッドロックの検出</span></p>

</li>
<li>
<p><span class="merged" id="all.2FevQJ" title="原文 : available disk space">使用可能なディスク領域</span></p>

</li>
<li>
<p><span class="merged" id="all.3lRV6E" title="原文 : available heap memory">使用可能なヒープ・メモリー</span></p>

</li>
</ul>
<p><span class="merged" id="all.1Ru9O5.spl1" title="原文 : The following example will demonstrate how to use the built-in health-checks.">次の例では、組込みヘルス・チェックの使用方法を示します。</span> <span class="merged" id="all.1Ru9O5.spl2" title="原文 : These examples are all executed from the root directory of your project (helidon-quickstart-mp).">これらの例はすべて、プロジェクトのルート・ディレクトリ(helidon-quickstart-mp)から実行されます。</span> </p>

<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp.jar</markup>

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
        "free": "325.54 GB",
        "freeBytes": 349543358464,
        "percentFree": "69.91%",
        "total": "465.63 GB",
        "totalBytes": 499963174912
      }
    },
    {
      "name": "heapMemory",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "230.87 MB",
        "freeBytes": 242085696,
        "max": "3.56 GB",
        "maxBytes": 3817865216,
        "percentFree": "98.90%",
        "total": "271.00 MB",
        "totalBytes": 284164096
      }
    }
  ]
}</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.olVNH.spl1" title="原文 : In MicroProfile Health 2.0 outcome and state were replaced by status in the JSON response wire format.">MicroProfile Health 2.0 <code>outcome</code>および<code>state</code>は、JSONレスポンス・ワイヤー形式で<code>status</code>に置き換えられました。</span> <span class="merged" id="all.olVNH.spl2" title="原文 : Helidon currently provides both fields for backwards compatibility, but use of outcome and state is deprecated and will be removed in a future release.">Helidonには現在、下位互換性のために両方のフィールドが用意されていますが、<code>outcome</code>および<code>state</code>の使用は非推奨であり、将来のリリースで削除されます。</span> <span class="merged" id="all.olVNH.spl3" title="原文 : You should rely on status instead.">かわりに、<code>status</code>を使用する必要があります。</span> </p>
</div>
</div>

<h3 id="_custom_liveness_health_checks"><span class="merged" id="all.DBKYP" title="原文 : Custom liveness health-checks">カスタム・リブネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.32SK8P.spl1" title="原文 : You can create application-specific custom health-checks and integrate them with Helidon using CDI.">CDIを使用して、アプリケーション固有のカスタム・ヘルス・チェックを作成し、Helidonと統合できます。</span> <span class="merged" id="all.32SK8P.spl2" title="原文 : The following example shows how to add a custom liveness health-check.">次の例は、カスタムのリブネス・ヘルス・チェックを追加する方法を示しています。</span> </p>

<markup
lang="java"
title="次の内容で新しい<code>GreetLivenessCheck</code>クラスを作成します:"
>package io.helidon.examples.quickstart.mp;

import javax.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Liveness;

@Liveness <span class="conum" data-value="1" />
@ApplicationScoped <span class="conum" data-value="2" />
public class GreetLivenessCheck implements HealthCheck {
  private GreetingProvider provider;

  @Override
  public HealthCheckResponse call() {
    return HealthCheckResponse.named("LivenessCheck")  <span class="conum" data-value="3" />
        .up()
        .withData("time", System.currentTimeMillis())
        .build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3zgJhd" title="原文 : Annotation indicating this is a liveness health-check.">これがリブネス・ヘルス・チェックであることを示す注釈。</span></li>
<li data-value="2"><span class="merged" id="all.vE8gA" title="原文 : Annotation indicating there is a single liveness HealthCheck object during the lifetime of the application.">アプリケーションの存続期間中に単一のリブネス<code>HealthCheck</code>オブジェクトが存在することを示す注釈。</span></li>
<li data-value="3"><span class="merged" id="all.34dPXz" title="原文 : Build the HealthCheckResponse with status UP and the current time.">ステータスが<code>UP</code>で、現在の時間が指定されたHealthCheckResponseをビルドします。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、カスタムのリブネス・ヘルス・エンドポイントを検証します:"
>curl http://localhost:8080/health/live</markup>

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
        "time": 1566338255331
      }
    }
  ]
}</markup>

</div>

<h3 id="_custom_readiness_health_check"><span class="merged" id="all.1NJRk0" title="原文 : Custom readiness health-check">カスタム・レディネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.4Yhpto.spl1" title="原文 : You can add a readiness check to indicate that the application is ready to be used.">レディネス・チェックを追加して、アプリケーションを使用する準備ができていることを示すことができます。</span> <span class="merged" id="all.4Yhpto.spl2" title="原文 : In this example, the server will wait five seconds before it becomes ready.">この例では、サーバーは5秒間待機してから準備ができます。</span> </p>

<markup
lang="java"
title="次の内容で新しい<code>GreetReadinessCheck</code>クラスを作成します:"
>package io.helidon.examples.quickstart.mp;

import java.time.Duration; <span class="conum" data-value="1" />
import java.util.concurrent.atomic.AtomicLong;
import javax.enterprise.context.ApplicationScoped;

import javax.enterprise.context.Initialized;
import javax.enterprise.event.Observes;
import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Readiness;

@Readiness <span class="conum" data-value="2" />
@ApplicationScoped
public class GreetReadinessCheck implements HealthCheck {
  private AtomicLong readyTime = new AtomicLong(0);


  @Override
  public HealthCheckResponse call() {
    return HealthCheckResponse.named("ReadinessCheck")  <span class="conum" data-value="3" />
        .state(isReady())
        .withData("time", readyTime.get())
        .build();
  }

  public void onStartUp(
      @Observes @Initialized(ApplicationScoped.class) Object init) {
    readyTime = new AtomicLong(System.currentTimeMillis()); <span class="conum" data-value="4" />
  }

  /**
   * Become ready after 5 seconds
   *
   * @return true if application ready
   */
  private boolean isReady() {
    return Duration.ofMillis(System.currentTimeMillis() - readyTime.get()).getSeconds() &gt;= 5;
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1MQDmJ" title="原文 : Include additional imports.">追加のインポートを含めます。</span></li>
<li data-value="2"><span class="merged" id="all.18XX09" title="原文 : Annotation indicating that this is a readiness health-check.">これがレディネス・ヘルス・チェックであることを示す注釈。</span></li>
<li data-value="3"><span class="merged" id="all.3wbyJ6" title="原文 : Build the HealthCheckResponse with status UP after five seconds, else DOWN.">5秒後にステータスが<code>UP</code>の<code>HealthCheckResponse</code>をビルドし、それ以外の場合は<code>DOWN</code>をビルドします。</span></li>
<li data-value="4"><span class="merged" id="all.1Vfwl9" title="原文 : Initialize the time at startup.">起動時に時間を初期化します。</span></li>
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
        "time": 1566399775700
      }
    }
  ]
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1yEKrD" title="原文 : The HTTP status is 503 since the application is not ready.">アプリケーションの準備ができていないため、HTTPステータスは<code>503</code>です。</span></li>
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
        "time": 1566399775700
      }
    }
  ]
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.yxWiD" title="原文 : The HTTP status is 200 indicating that the application is ready.">HTTPステータスは、アプリケーションの準備ができていることを示す<code>200</code>です。</span></li>
</ul>
<p><span class="merged" id="all.2jZglt" title="原文 : When using the health-check URLs, you can get the following health-check data:">ヘルス・チェックURLを使用すると、次のヘルス・チェック・データを取得できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1HklQ4" title="原文 : custom liveness only - http://localhost:8080/health/live">カスタムリブネスのみ - <a href="http://localhost:8080/health/live" id="" target="_blank" >http://localhost:8080/health/live</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1gtugV" title="原文 : custom readiness only - http://localhost:8080/health/ready">カスタム・レディネスのみ - <a href="http://localhost:8080/health/ready" id="" target="_blank" >http://localhost:8080/health/ready</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1YAPnn" title="原文 : all health-check data - http://localhost:8080/health">すべてのヘルス・チェック・データ - <a href="http://localhost:8080/health" id="" target="_blank" >http://localhost:8080/health</a></span></p>

</li>
</ul>
<markup
lang="bash"
title="カスタム・データを含むすべてのヘルス・チェック・データを取得します:"
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
        "time": 1566403431536
      }
    },
    {
      "name": "ReadinessCheck",
      "state": "UP",
      "status": "UP",
      "data": {
        "time": 1566403280639
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
        "free": "325.50 GB",
        "freeBytes": 349500698624,
        "percentFree": "69.91%",
        "total": "465.63 GB",
        "totalBytes": 499963174912
      }
    },
    {
      "name": "heapMemory",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "231.01 MB",
        "freeBytes": 242235928,
        "max": "3.56 GB",
        "maxBytes": 3817865216,
        "percentFree": "98.79%",
        "total": "275.00 MB",
        "totalBytes": 288358400
      }
    }
  ]
}</markup>

</div>

<h3 id="_custom_health_root_path_and_port"><span class="merged" id="all.139acw" title="原文 : Custom health root path and port">カスタム・ヘルス・ルート・パスおよびポート</span></h3>
<div class="section">
<p><span class="merged" id="all.2LnEGe.spl1" title="原文 : You can specify a custom port and root context for the root health endpoint path.">ルート・ヘルス・エンドポイント・パスのカスタム・ポートおよびルート・コンテキストを指定できます。</span> <span class="merged" id="all.2LnEGe.spl2" title="原文 : However, you cannot use different ports, such as http://localhost:8080/myhealth and http://localhost:8081/myhealth/live.">ただし、<a href="http://localhost:8080/myhealth" id="" target="_blank" >http://localhost:8080/myhealth</a>や<a href="http://localhost:8081/myhealth/live" id="" target="_blank" >http://localhost:8081/myhealth/live</a>など、異なるポートは使用できません。</span> <span class="merged" id="all.2LnEGe.spl3" title="原文 : Likewise, you cannot use different paths, such as http://localhost:8080/health and http://localhost:8080/probe/live.">同様に、<a href="http://localhost:8080/health" id="" target="_blank" >http://localhost:8080/health</a>や<a href="http://localhost:8080/probe/live" id="" target="_blank" >http://localhost:8080/probe/live</a>など、異なるパスは使用できません。</span> </p>

<p><span class="merged" id="all.1ua0wD" title="原文 : The example below will change the root path.">次の例では、ルート・パスを変更します。</span></p>

<markup
lang="yaml"
title="<code>resources</code>ディレクトリに、次の内容の<code>application.yaml</code>という名前のファイルを作成します:"
>health:
  web-context: "myhealth"  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.lukBB" title="原文 : The web-context specifies a new root path for the health endpoint.">web-contextは、ヘルス・エンドポイントの新しいルート・パスを指定します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、ヘルス・エンドポイントが新しい<code>/myhealth</code>ルートを使用していることを確認します:"
>curl http://localhost:8080/myhealth
curl http://localhost:8080/myhealth/live
curl http://localhost:8080/myhealth/ready</markup>

<p><span class="merged" id="all.3am76Y" title="原文 : The following example will change the root path and the health port.">次の例では、ルート・パスとヘルス・ポートを変更します。</span></p>

<markup
lang="yaml"
title="ヘルス・エンドポイントに別のポートおよびルート・パスを使用するようにapplication.yamlを更新します:"
>server:
  port: 8080  <span class="conum" data-value="1" />
  host: "localhost"
  sockets:
    health: <span class="conum" data-value="2" />
      port: 8081 <span class="conum" data-value="3" />
      bind-address: "localhost"
health:
  routing: "health" <span class="conum" data-value="4" />
  web-context: "myhealth"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2p69Lt" title="原文 : The default port for the application.">アプリケーションのデフォルト・ポート。</span></li>
<li data-value="2"><span class="merged" id="all.2n6Rml" title="原文 : The name of the new socket, it can be any name, this example uses health.">新しいソケットの名前。任意の名前を指定できます。この例では、<code>health</code>を使用します。</span></li>
<li data-value="3"><span class="merged" id="all.1q3OYL" title="原文 : The port for the new health socket.">新しいヘルス・ソケットのポート。</span></li>
<li data-value="4"><span class="merged" id="all.2i5Bta" title="原文 : The health endpoint routing uses the new socket health.">ヘルス・エンドポイント・ルーティングでは、新しいソケット<code>health</code>が使用されます。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、ポート<code>8081</code>および<code>/myhealth</code>を使用してヘルス・エンドポイントを検証します:"
>curl http://localhost:8081/myhealth
curl http://localhost:8081/myhealth/live
curl http://localhost:8081/myhealth/ready</markup>

</div>

<h3 id="_using_liveness_and_readiness_health_checks_with_kubernetes"><span class="merged" id="all.2Rd0jP" title="原文 : Using Liveness and Readiness health-checks with Kubernetes">Kubernetesでのリブネスおよびレディネス・ヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1zSxWN" title="原文 : The following example shows how to integrate the Helidon health API with an application that implements health endpoints for the Kubernetes liveness and readiness probes.">次の例では、Helidon health APIを、Kubernetesのリブネスおよびレディネス・プローブのヘルス・エンドポイントを実装するアプリケーションと統合する方法を示します。</span></p>

<p><span class="merged" id="all.3dZEvj" title="原文 : Delete the contents of application.yaml so that the default health endpoint path and port are used."><strong>デフォルトのヘルス・エンドポイント・パスおよびポートが使用されるように、<code>application.yaml</code>のコンテンツを削除します。</strong></span></p>

<markup
lang="bash"
title="アプリケーションを再ビルドして起動し、ヘルス・エンドポイントを確認します:"
>curl http://localhost:8080/health</markup>

<markup
lang="bash"
title="アプリケーションを停止し、dockerイメージをビルドします:"
>docker build -t helidon-quickstart-mp .</markup>

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
          image: helidon-quickstart-mp
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
<li data-value="1"><span class="merged" id="all.3s9wLQ.1" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.1" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.KcwH1" title="原文 : The HTTP endpoint for the liveness probe.">リブネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="4"><span class="merged" id="all.2sX3Ho" title="原文 : The liveness probe configuration.">リブネス・プローブの構成。</span></li>
<li data-value="5"><span class="merged" id="all.1qQtuS" title="原文 : The HTTP endpoint for the readiness probe.">レディネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="6"><span class="merged" id="all.4TIJdd" title="原文 : The readiness probe configuration.">レディネス・プローブの構成。</span></li>
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
<li data-value="1"><span class="merged" id="all.2apblH" title="原文 : A service of type NodePort that serves the default routes on port 30116.">ポート<code>30116</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>
<markup
lang="bash"
title="ポート30116を使用してヘルス・エンドポイントを確認してください。実際のポートは異なる場合があります。JSONレスポンスは前のテストと同じになります:"
>curl http://localhost:30116/health</markup>

<markup
lang="bash"
title="アプリケーションを削除し、Kubernetesリソースをクリーンアップします:"
>kubectl delete -f ./health.yaml</markup>

</div>

<h3 id="_summary"><span class="merged" id="all.1nTCR.1"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.4dPIRq" title="原文 : This guide demonstrated how to use health-check in a Helidon MP application as follows:">このガイドでは、Helidon MPアプリケーションでヘルス・チェックを使用する方法を次のように説明しました:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.U3qHS" title="原文 : Access the default health-check">デフォルトのヘルス・チェックにアクセス</span></p>

</li>
<li>
<p><span class="merged" id="all.48WuDJ" title="原文 : Create and use custom readiness and liveness checks">カスタムのレディネスおよびリブネス・チェックの作成と使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4aAKzM" title="原文 : Customize the health-check root path and port">ヘルス・チェックのルート・パスおよびポートのカスタマイズ</span></p>

</li>
<li>
<p><span class="merged" id="all.2iTcRB" title="原文 : Integrate Helidon health-check with Kubernetes">Helidonヘルス・チェックとKubernetesの統合</span></p>

</li>
</ul>
<p><span class="merged" id="all.4ajGRT" title="原文 : Please refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1NpsrO" title="原文 : MicroProfile health-check specification at https://github.com/eclipse/microprofile-health/releases/tag/2.0"><a href="https://github.com/eclipse/microprofile-health/releases/tag/2.0" id="" target="_blank" >https://github.com/eclipse/microprofile-health/releases/tag/ 2.0</a>でのMicroProfileヘルス・チェック仕様</span></p>

</li>
<li>
<p><span class="merged" id="all.33CSEz" title="原文 : MicroProfile health-check Javadoc at https://javadoc.io/doc/org.eclipse.microprofile.health/microprofile-health-api/2.0"><a href="https://javadoc.io/doc/org.eclipse.microprofile.health/microprofile-health-api/2.0" id="" target="_blank" >https://javadoc.io/doc/org.eclipse.microprofile.health/microprofile-health-api/ 2.0</a>のMicroProfileヘルス・チェックJavadoc</span></p>

</li>
<li>
<p><span class="merged" id="all.1m3bP8.1" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
