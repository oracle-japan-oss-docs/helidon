<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.qywa8" title="原文 : Kubernetes Probes">Kubernetesプローブ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3K1vO" title="原文 : This document describes how to use the Helidon health check API with Kubernetes.">このドキュメントでは、KubernetesでHelidonヘルス・チェックAPIを使用する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_about_kubernetes_probes"><span class="merged" id="all.1txkLT" title="原文 : About Kubernetes probes">Kubernetesプローブについて</span></h2>
<div class="section">
<p><span class="merged" id="all.20QE0r" title="原文 : Probes is the term used by Kubernetes to describe health checks for containers (Kubernetes documentation).">プローブとは、コンテナ(<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes" id="" target="_blank" >「Kubernetesのドキュメント」</a>)のヘルス・チェックを説明するためにKubernetesで使用される用語です。</span></p>

<p><span class="merged" id="all.3ksewV" title="原文 : There are two types of probes:">プローブには次の2つのタイプがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.15kbaf" title="原文 : liveness: Indicates whether the container is running"><code>liveness</code>: コンテナが実行中かどうかを示します</span></p>

</li>
<li>
<p><span class="merged" id="all.3ulSyp" title="原文 : readiness: Indicates whether the container is ready to service requests"><code>readiness</code>: コンテナがリクエストを処理する準備ができているかどうかを示します</span></p>

</li>
</ul>
<p><span class="merged" id="all.3JekzP" title="原文 : You can implement probes using the following mechanisms:">次のメカニズムを使用してプローブを実装できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.40LOnQ" title="原文 : Running a command inside a container">コンテナ内でのコマンドの実行</span>

</li>
<li>
<span class="merged" id="all.2uzZz2" title="原文 : Sending an HTTP request to a container">コンテナへの<code>HTTP</code>リクエストの送信</span>

</li>
<li>
<span class="merged" id="all.hghrA" title="原文 : Opening a TCP socket to a container">コンテナへの<code>TCP</code>ソケットのオープン</span>

</li>
</ol>
<p><span class="merged" id="all.4XTw5z" title="原文 : A microservice exposed to HTTP traffic will typically implement both the liveness probe and the readiness probe using HTTP requests.">HTTPトラフィックに公開されるマイクロサービスは、通常、HTTPリクエストを使用してリブネス・プローブとレディネス・プローブの両方を実装します。</span></p>

<p><span class="merged" id="all.3nycC1.spl1" title="原文 : You can configure several parameters for probes.">プローブには複数のパラメータを構成できます。</span> <span class="merged" id="all.3nycC1.spl2" title="原文 : The following are the most relevant parameters:">最も関連性の高いパラメータは次のとおりです:</span> </p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 28.571%;">
<col style="width: 71.429%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.ESiyH"  title="原文: initialDelaySeconds"><code>initialDelaySeconds</code></span></td>
<td class=""><span class="merged" id="all.3uZB0J" title="原文 : Number of seconds after the container has started before liveness or readiness probes are initiated.">コンテナが起動してからリブネスまたはレディネス・プローブが開始されるまでの秒数。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BeYeS"  title="原文: periodSeconds"><code>periodSeconds</code></span></td>
<td class=""><span class="merged" id="all.2YQtfP.spl1" title="原文 : Probe interval.">プローブ間隔。</span> <span class="merged" id="all.2YQtfP.spl2" title="原文 : Default to 10 seconds.">デフォルトは10秒です。</span> <span class="merged" id="all.2YQtfP.spl3"  title="原文:: Minimum value is 1.">最小値は1です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uWagV"  title="原文: timeoutSeconds"><code>timeoutSeconds</code></span></td>
<td class=""><span class="merged" id="all.21D0dy.spl1" title="原文 : Number of seconds after which the probe times out.">プローブがタイムアウトするまでの秒数。</span> <span class="merged" id="all.21D0dy.spl2" title="原文 : Defaults to 1 second.">デフォルトは1秒です。</span> <span class="merged" id="all.21D0dy.spl3"  title="原文:: Minimum value is 1">最小値は1です</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZE4zx"  title="原文: failureThreshold"><code>failureThreshold</code></span></td>
<td class=""><span class="merged" id="all.2M4owV.spl1" title="原文 : Number of consecutive failures after which the probe should stop.">プローブが停止するまでの連続した失敗回数。</span> <span class="merged" id="all.2M4owV.spl2"  title="原文:: Default: 3.">デフォルト: 3</span> <span class="merged" id="all.2M4owV.spl3"  title="原文:: Minimum: 1.">Minimum: 1</span> </td>
</tr>
</tbody>
</table>
</div>

<h3 id="_liveness_probe"><span class="merged" id="all.4GlaVL" title="原文 : Liveness probe">リブネス・プローブ</span></h3>
<div class="section">
<p><span class="merged" id="all.3hfi7W.spl1" title="原文 : The liveness probe is used to verify the container has become unresponsive.">リブネス・プローブは、コンテナが応答しなくなったことを確認するために使用されます。</span> <span class="merged" id="all.3hfi7W.spl2" title="原文 : For example, it can be used to detect deadlocks or analyze heap usage.">たとえば、デッドロックの検出やヒープ使用率の分析に使用できます。</span> <span class="merged" id="all.3hfi7W.spl3" title="原文 : When Kubernetes gives up on a liveness probe, the corresponding pod is restarted.">Kubernetesがリブネス・プローブを中止すると、対応するポッドが再起動されます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.14re3N.spl1" title="原文 : The liveness probe can result in repeated restarts in certain cases.">リブネス・プローブでは、特定の場合に再起動が繰り返されることがあります。</span> <span class="merged" id="all.14re3N.spl2" title="原文 : For example, if the probe is implemented to check all the dependencies strictly, then it can fail repeatedly for temporary issues.">たとえば、プローブがすべての依存関係を厳密にチェックするように実装されている場合、一時的な問題に対して繰り返し失敗する可能性があります。</span> <span class="merged" id="all.14re3N.spl3" title="原文 : Repeated restarts can also occur if timeoutSeconds or periodSeconds is too low."><code>timeoutSeconds</code>または<code>periodSeconds</code>が低すぎる場合は、再起動を繰り返すこともできます。</span> </p>
</div>
<p><span class="merged" id="all.2EWLR7"  title="原文:: We recommend the following:">次をお薦めします。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.lF9SQ" title="原文 : Avoid checking dependencies in a liveness probe.">リブネス・プローブで依存関係をチェックしないようにします。</span></p>

</li>
<li>
<p><span class="merged" id="all.nG2LI" title="原文 : Set timeoutSeconds to avoid excessive probe failures.">過剰なプローブ障害を回避するには、<code>timeoutSeconds</code>を設定します。</span></p>

</li>
<li>
<p><span class="merged" id="all.45M3Sp" title="原文 : Acknowledge startup times with initialDelaySeconds."><code>initialDelaySeconds</code>で起動時間を確認します。</span></p>

</li>
</ul>
</div>

<h3 id="_readiness_probe"><span class="merged" id="all.Ts8a5" title="原文 : Readiness probe">レディネス・プローブ</span></h3>
<div class="section">
<p><span class="merged" id="all.pCYPB.spl1" title="原文 : The readiness probe is used to avoid routing requests to the pod until it is ready to accept traffic.">レディネス・プローブは、トラフィックを受け入れる準備ができるまで、ポッドへのリクエストのルーティングを回避するために使用されます。</span> <span class="merged" id="all.pCYPB.spl2" title="原文 : When Kubernetes gives up on a readiness probe, the pod is not restarted, traffic is not routed to the pod anymore.">Kubernetesがレディネス・プローブを中止すると、ポッドは再起動されず、トラフィックはポッドにルーティングされなくなります。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1rhwgb.spl1" title="原文 : In certain cases, the readiness probe can cause all the pods to be removed from service routing.">レディネス・プローブによって、すべてのポッドがサービス・ルーティングから削除される場合があります。</span> <span class="merged" id="all.1rhwgb.spl2" title="原文 : For example, if the probe is implemented to check all the dependencies strictly, then it can fail repeatedly for temporary issues.">たとえば、プローブがすべての依存関係を厳密にチェックするように実装されている場合、一時的な問題に対して繰り返し失敗する可能性があります。</span> <span class="merged" id="all.1rhwgb.spl3" title="原文 : This issue can also occur if timeoutSeconds or periodSeconds is too low.">この問題は、<code>timeoutSeconds</code>または<code>periodSeconds</code>が低すぎる場合にも発生することがあります。</span> </p>
</div>
<p><span class="merged" id="all.2EWLR7.1"  title="原文:: We recommend the following:">次をお薦めします。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.o5QPu" title="原文 : Be conservative when checking shared dependencies.">共有依存関係をチェックする場合は、保守的である必要があります。</span></p>

</li>
<li>
<p><span class="merged" id="all.3y7JDO" title="原文 : Be aggressive when checking local dependencies.">ローカルの依存性をチェックする場合は、積極的にしてください。</span></p>

</li>
<li>
<p><span class="merged" id="all.2bFmCJ" title="原文 : Set failureThreshold according to periodSeconds in order to accommodate temporary errors.">一時的なエラーに対応するために、<code>periodSeconds</code>に従って<code>failureThreshold</code>を設定します。</span></p>

</li>
</ul>
</div>
</div>

<h2 id="_troubleshooting_probes"><span class="merged" id="all.1CFwYj" title="原文 : Troubleshooting probes">プローブのトラブルシューティング</span></h2>
<div class="section">
<p><span class="merged" id="all.2Fa0hq.spl1" title="原文 : Failed probes are recorded as events associated with their corresponding pods.">失敗したプローブは、対応するポッドに関連付けられたイベントとして記録されます。</span> <span class="merged" id="all.2Fa0hq.spl2" title="原文 : The event message contains only the status code.">イベント・メッセージにはステータス・コードのみが含まれます。</span> </p>

<markup
lang="bash"
title="単一ポッドのイベントを取得します:"
>POD_NAME=$(kubectl get pod -l app=acme -o jsonpath='{.items[0].metadata.name}') <span class="conum" data-value="1" />
kubectl get event --field-selector involvedObject.name=${POD_NAME} <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ohpnt" title="原文 : Get the effective pod name by filtering pods with the label app=acme.">ラベル<code>app=acme</code>でポッドをフィルタして、有効なポッド名を取得します。</span></li>
<li data-value="2"><span class="merged" id="all.KReAB" title="原文 : Filter the events for the pod.">ポッドのイベントをフィルタします。</span></li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.oZoyB.spl1" title="原文 : Create log messages in your health check implementation when setting a DOWN status."><code>DOWN</code>ステータスの設定時に、ヘルス・チェック実装にログ・メッセージを作成します。</span> <span class="merged" id="all.oZoyB.spl2" title="原文 : This will allow you to correlate the cause of a failed probe.">これにより、失敗したプローブの原因を関連付けることができます。</span> </p>
</div>
</div>

<h2 id="_example"><span class="merged" id="all.2xA7W7.3"  title="原文:: Example">Example</span></h2>
<div class="section">
<p><span class="merged" id="all.MHIww.spl1" title="原文 : This example shows the usage of the Helidon health API in an application that implements health endpoints for the liveness and readiness probes.">この例では、リブネスおよびレディネス・プローブのヘルス・エンドポイントを実装するアプリケーションでのHelidonヘルスAPIの使用方法を示します。</span> <span class="merged" id="all.MHIww.spl2" title="原文 : Note that the application code dissociates the health endpoints from the default routes, so that the health endpoints are not exposed by the service.">アプリケーション・コードは、ヘルス・エンドポイントがサービスによって公開されないように、ヘルス・エンドポイントとデフォルト・ルートの関連付けを解除します。</span> <span class="merged" id="all.MHIww.spl3" title="原文 : An example YAML specification is also provided for the Kubernetes service and deployment.">KubernetesサービスおよびデプロイメントのYAML仕様の例も示します。</span> </p>

<markup
lang="java"
title="アプリケーション・コード:"
>Routing healthRouting = Routing.builder()
        .register(JsonSupport.create())
        .register(HealthSupport.builder()
                .webContext("/live") <span class="conum" data-value="1" />
                .addLiveness(HealthChecks.healthChecks()) <span class="conum" data-value="2" />
                .build())
        .register(HealthSupport.builder()
                .webContext("/ready") <span class="conum" data-value="3" />
                .addReadiness(() -&gt; HealthCheckResponse.named("database").up().build()) <span class="conum" data-value="4" />
                .build())
        .build();

Routing defaultRouting = Routing.builder()
        .any((req, res) -&gt; res.send("It works!")) <span class="conum" data-value="5" />
        .build();

WebServer server = WebServer.builder(defaultRouting)
        .config(ServerConfiguration.builder()
                .port(8080) <span class="conum" data-value="6" />
                .addSocket("health", SocketConfiguration.builder() <span class="conum" data-value="7" />
                        .port(8081)
                        .build())
                .build())
        .addNamedRouting("health", healthRouting) <span class="conum" data-value="8" />
        .build();

server.start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1qZdyL" title="原文 : The health service for the liveness probe is exposed at /live."><code>liveness</code>プローブのヘルス・サービスは、<code>/live</code>で公開されます。</span></li>
<li data-value="2"><span class="merged" id="all.2R7LFb" title="原文 : Using the built-in health checks for the liveness probe."><code>liveness</code>プローブの組込みヘルス・チェックの使用。</span></li>
<li data-value="3"><span class="merged" id="all.2aSO7j" title="原文 : The health service for the readiness probe is exposed at /ready."><code>readiness</code>プローブのヘルス・サービスは、<code>/ready</code>で公開されます。</span></li>
<li data-value="4"><span class="merged" id="all.2jf1r6" title="原文 : Using a custom health check for a pseudo database that is always UP.">常に<code>UP</code>である擬似データベースにカスタム・ヘルス・チェックを使用します。</span></li>
<li data-value="5"><span class="merged" id="all.1RuDfg" title="原文 : The default route: returns It works! for any request.">デフォルト・ルート: 、すべてのリクエストに対してIt works!を返します。</span></li>
<li data-value="6"><span class="merged" id="all.1TORlq" title="原文 : The server uses port 8080 for the default routes.">サーバーは、デフォルト・ルートにポート8080を使用します。</span></li>
<li data-value="7"><span class="merged" id="all.1wBtXj" title="原文 : A socket configuration named health using port 8081.">ポート<code>8081</code>を使用した<code>health</code>という名前のソケット構成。</span></li>
<li data-value="8"><span class="merged" id="all.440IF0" title="原文 : Route the health services exclusively on the health socket.">ヘルス・サービスを<code>health</code>ソケットに排他的にルーティングします。</span></li>
</ul>
<markup
lang="yaml"
title="Kubernetesディスクリプタ:"
>kind: Service
apiVersion: v1
metadata:
  name: acme <span class="conum" data-value="1" />
  labels:
    app: acme
spec:
  type: NodePort
  selector:
    app: acme
  ports:
  - port: 8080
    targetPort: 8080
    name: http
---
kind: Deployment
apiVersion: extensions/v1beta1
metadata:
  name: acme <span class="conum" data-value="2" />
spec:
  replicas: 1
  template:
    metadata:
      name: acme
      labels:
        name: acme
    spec:
      containers:
      - name: acme
        image: acme
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 8080
        livenessProbe:
          httpGet:
            path: /live <span class="conum" data-value="3" />
            port: 8081
          initialDelaySeconds: 3 <span class="conum" data-value="4" />
          periodSeconds: 10
          timeoutSeconds: 3
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /ready <span class="conum" data-value="5" />
            port: 8081
          initialDelaySeconds: 10 <span class="conum" data-value="6" />
          periodSeconds: 30
          timeoutSeconds: 10
---</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.8" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.8" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.KcwH1.2" title="原文 : The HTTP endpoint for the liveness probe.">リブネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="4"><span class="merged" id="all.2sX3Ho.2" title="原文 : The liveness probe configuration.">リブネス・プローブの構成。</span></li>
<li data-value="5"><span class="merged" id="all.1qQtuS.2" title="原文 : The HTTP endpoint for the readiness probe.">レディネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="6"><span class="merged" id="all.4TIJdd.2" title="原文 : The readiness probe configuration.">レディネス・プローブの構成。</span></li>
</ul>
</div>
</doc-view>
