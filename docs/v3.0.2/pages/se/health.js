<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.49"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.47" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.35" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.19" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.29" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.31" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.20" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.63"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4BPh5O.spl1" title="原文 : It&rsquo;s a good practice to monitor your microservice&rsquo;s health, to ensure that it is available and performs correctly.">マイクロサービスが使用可能であり、正しく実行されることを確認するために、マイクロサービスのヘルスを監視することをお薦めします。</span> <span class="merged" id="all.4BPh5O.spl2" title="原文 : Applications implement health checks to expose health status that is collected at regular intervals by external tooling, such as orchestrators like Kubernetes.">アプリケーションはヘルス・チェックを実装して、Kubernetesなどのオーケストレータなどの外部ツールによって定期的に収集されるヘルス・ステータスを公開します。</span> <span class="merged" id="all.4BPh5O.spl3" title="原文 : The orchestrator may then take action, such as restarting your application if the health check fails.">その後、オーケストレーションは、ヘルス・チェックが失敗した場合のアプリケーションの再起動などのアクションを実行できます。</span> </p>

<p><span class="merged" id="all.2HIWsf" title="原文 : A typical health check combines the statuses of all the dependencies that affect availability and the ability to perform correctly:">一般的なヘルス・チェックでは、可用性に影響するすべての依存関係のステータスと、正常に実行できるかどうかが結合されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4EG1aI" title="原文 : network latency">ネットワーク待機時間</span></p>

</li>
<li>
<p><span class="merged" id="all.1XunTw"  title="原文:: storage">ストレージ</span></p>

</li>
<li>
<p><span class="merged" id="all.3gaK34"  title="原文:: database">データベース</span></p>

</li>
<li>
<p><span class="merged" id="all.3HYqKp" title="原文 : other services used by your application">アプリケーションで使用されるその他のサービス</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.45"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2svPLS" title="原文 : To enable Health Checks add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">ヘルス・チェックを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3dbFv0" title="原文 : Optional dependency to use built-in health checks:">組込みヘルス・チェックを使用するためのオプションの依存関係:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.21"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.4Lfy9v.spl1" title="原文 : A health check is a Java functional interface that returns a HealthCheckResponse instance.">ヘルス・チェックは、<code>HealthCheckResponse</code>インスタンスを返すJava機能インタフェースです。</span> <span class="merged" id="all.4Lfy9v.spl2" title="原文 : You can choose to implement a health check inline with a lambda expression or you can reference a method with the double colon operator ::.">ラムダ式を使用してインラインでヘルス・チェックを実装することも、二重コロン演算子<code>::</code>を使用してメソッドを参照することもできます。</span> </p>

<markup
lang="java"
title="Health check with a lambda expression:"
>HealthCheck hc = () -&gt; HealthCheckResponse
        .named("exampleHealthCheck")
        .up()
        .build();</markup>

<markup
lang="java"
title="Health check with method reference:"
>HealthCheckResponse exampleHealthCheck() {
    return HealthCheckResponse
        .named("exampleHealthCheck")
        .up()
        .build();
}
HealthCheck hc = this::exampleHealthCheck;</markup>

<p><span class="merged" id="all.26rzzZ.spl1" title="原文 : HealthSupport is a WebServer service that contains a collection of registered HealthCheck instances."><code>HealthSupport</code>は、登録済の<code>HealthCheck</code>インスタンスのコレクションを含むWebServerサービスです。</span> <span class="merged" id="all.26rzzZ.spl2" title="原文 : When queried, it invokes the registered health check and returns a response with a status code representing the overall status of the application.">問い合せると、登録済のヘルス・チェックが起動され、アプリケーションの全体的なステータスを表すステータス・コードを含むレスポンスが返されます。</span> </p>

<div class="block-title"><span class="merged" id="all.N5ldJ" title="原文 : Health status codes"><span>ヘルス・ステータス・コード</span></span></div>
<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 83.333%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1Czrkp"  title="原文: 200"><code>200</code></span></td>
<td class=""><span class="merged" id="all.tEdij" title="原文 : The application is healthy (with health check details in the response).">アプリケーションは正常です(レスポンスにヘルス・チェックの詳細がある)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d829J"  title="原文: 204"><code>204</code></span></td>
<td class=""><span class="merged" id="all.42OAxu" title="原文 : The application is healthy (with no health check details in the response).">アプリケーションは正常です(レスポンスにヘルス・チェック詳細が<em>ない</em>)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.qeE13"  title="原文: 503"><code>503</code></span></td>
<td class=""><span class="merged" id="all.3YFSKa" title="原文 : The application is not healthy.">アプリケーションは健全ではありません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2wavta"  title="原文: 500"><code>500</code></span></td>
<td class=""><span class="merged" id="all.2H5Tro" title="原文 : An error occurred while reporting the health.">ヘルスのレポート中にエラーが発生しました。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3QGNBq.spl1" title="原文 : HTTP GET responses include JSON content showing the detailed results of all the health checks which the server executed after receiving the request.">HTTP <code>GET</code>レスポンスには、リクエストを受信した後にサーバーが実行したすべてのヘルス・チェックの詳細な結果を示すJSONコンテンツが含まれます。</span> <span class="merged" id="all.3QGNBq.spl2" title="原文 : HTTP HEAD requests return only the status with no payload.">HTTP <code>HEAD</code>リクエストは、ペイロードのないステータスのみを返します。</span> </p>

<p><span class="merged" id="all.NSNld" title="原文 : The following code snippets show how to register health checks while building an instance of HealthSupport:">次のコード・スニペットは、<code>HealthSupport</code>のインスタンスの作成中にヘルス・チェックを登録する方法を示しています:</span></p>

<markup
lang="java"
title="Create the health support service:"
>HealthSupport health = HealthSupport.builder()
    .addLiveness(hc)        // hc created above
    .build();</markup>

<markup
lang="java"
title="Create a custom health check:"
>HealthSupport health = HealthSupport.builder()
    .addLiveness(() -&gt; HealthCheckResponse.named("exampleHealthCheck")
                 .up()
                 .withData("time", System.currentTimeMillis())
                 .build())
    .build();</markup>

<p><span class="merged" id="all.2KD8p3.spl1" title="原文 : The custom health check above returns a status of UP and the current time.">前述のカスタム・ヘルス・チェックは、<code>UP</code>のステータスと現在の時間を返します。</span> <span class="merged" id="all.2KD8p3.spl2" title="原文 : After creating the HealthCheck and registering it in a HealthSupport, we must add the latter to the WebServer routes as follows:"><code>HealthCheck</code>を作成して<code>HealthSupport</code>に登録した後、次のようにWebServerルートに後者を追加する必要があります:</span> </p>

<markup
lang="java"

>Routing.builder()
        .register(health)
        .build();</markup>

<p><span class="merged" id="all.34a6dC" title="原文 : Here is a sample response to the custom health check registered above:">次に、前述のカスタム・ヘルス・チェックへのサンプル・レスポンスを示します:</span></p>

<markup
lang="json"
title="JSON response:"
>{
    "status": "UP",
    "checks": [
        {
            "name": "exampleHealthCheck",
            "status": "UP",
            "data": {
                "time": 1546958376613
            }
        }
    ]
}</markup>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1vG7cT" title="原文 : Balance collecting a lot of information with the need to avoid overloading the application and overwhelming users.">大量の情報の収集と、アプリケーションの過負荷およびユーザーの過負荷を回避する必要性のバランスを取ります。</span></p>
</div>

<p><span class="merged" id="all.2hOam8" title="原文 : The following table provides a summary of the Health Check API classes.">次の表に、ヘルス・チェックAPIクラスのサマリーを示します。</span></p>

<div class="block-title"><span class="merged" id="all.2PQlfX" title="原文 : Health check API classes"><span>ヘルス・チェックAPIクラス</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 40%;">
<col style="width: 60%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4QxVF3"  title="原文: org.eclipse.microprofile.health.HealthCheck"><code>org.eclipse.microprofile.health.HealthCheck</code></span></td>
<td class=""><span class="merged" id="all.DGk2Q" title="原文 : Java functional interface representing the logic of a single health check">単一のヘルス・チェックのロジックを表すJava機能インタフェース</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1J0b1f"  title="原文: org.eclipse.microprofile.health.HealthCheckResponse"><code>org.eclipse.microprofile.health.HealthCheckResponse</code></span></td>
<td class=""><span class="merged" id="all.3DWpn7" title="原文 : Result of a health check invocation that contains a status and a description.">ステータスと説明を含むヘルス・チェック起動の結果。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bYylQ"  title="原文: org.eclipse.microprofile.health.HealthCheckResponseBuilder"><code>org.eclipse.microprofile.health.HealthCheckResponseBuilder</code></span></td>
<td class=""><span class="merged" id="all.4ctZav" title="原文 : Builder class to create HealthCheckResponse instances"><code>HealthCheckResponse</code>インスタンスを作成するビルダー・クラス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uudYi"  title="原文: io.helidon.health.HealthSupport"><code>io.helidon.health.HealthSupport</code></span></td>
<td class=""><span class="merged" id="all.1yv3Hb" title="原文 : WebServer service that exposes /health and invokes the registered health checks"><code>/health</code>を公開し、登録済ヘルス・チェックを起動するWebServerサービス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Us9Zj"  title="原文: io.helidon.health.HealthSupport.Builder"><code>io.helidon.health.HealthSupport.Builder</code></span></td>
<td class=""><span class="merged" id="all.3amLUI" title="原文 : Builder class to create HealthSupport instances"><code>HealthSupport</code>インスタンスを作成するビルダー・クラス</span></td>
</tr>
</tbody>
</table>
</div>


<h3 id="_built_in_health_checks"><span class="merged" id="all.175Cq8" title="原文 : Built-in health checks">組込みのヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.2JmAJf" title="原文 : You can use Helidon-provided health checks to report various common health check statuses:">Helidon提供のヘルス・チェックを使用して、様々な一般的なヘルス・チェック・ステータスをレポートできます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 4.348%;">
<col style="width: 4.348%;">
<col style="width: 13.043%;">
<col style="width: 65.217%;">
<col style="width: 13.044%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3ta6tN" title="原文 : Built-in health check">組込みヘルス・チェック</span></th>
<th><span class="merged" id="all.2sirGX"  title="原文:: Health check name">ヘルス・チェック名</span></th>
<th><span class="merged" id="all.CSv9t"  title="原文: JavaDoc">JavaDoc</span></th>
<th><span class="merged" id="all.2ruz7u" title="原文 : Config properties">構成プロパティ</span></th>
<th><span class="merged" id="all.4g6EDY" title="原文 : Default config value">デフォルトの構成値</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1WzrZM.3" title="原文 : deadlock detection">デッドロックの検出</span></td>
<td class=""><span class="merged" id="all.2wT1L3"  title="原文: deadlock"><code>deadlock</code></span></td>
<td class=""><span class="merged" id="all.45WA85" title="原文 : DeadlockHealthCheck"><a href="./apidocs/io.helidon.health.checks/io/helidon/health/checks/DeadlockHealthCheck.html" target="_blank"><code>DeadlockHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.2jtIAF.6"  title="原文:: n/a">該当なし</span></td>
<td class=""><span class="merged" id="all.2jtIAF.7"  title="原文:: n/a">該当なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FevQJ.3" title="原文 : available disk space">使用可能なディスク領域</span></td>
<td class=""><span class="merged" id="all.3SPrim"  title="原文: diskSpace"><code>diskSpace</code></span></td>
<td class=""><span class="merged" id="all.1NysTa" title="原文 : DiskSpaceHealthCheck"><a href="./apidocs/io.helidon.health.checks/io/helidon/health/checks/DiskSpaceHealthCheck.html" target="_blank"><code>DiskSpaceHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.2Yb327" title="原文 : helidon.healthCheck.diskSpace.thresholdPercent + helidon.healthCheck.diskSpace.path"><code>helidon.healthCheck.diskSpace.thresholdPercent</code><br> + <code>helidon.healthCheck.diskSpace.path</code></span></td>
<td class=""><span class="merged" id="all.4egeO1" title="原文 : 99.999 + /"><code>99.999</code><br> + <code>/</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lRV6E.3" title="原文 : available heap memory">使用可能なヒープ・メモリー</span></td>
<td class=""><span class="merged" id="all.2g6BBF"  title="原文: heapMemory"><code>heapMemory</code></span></td>
<td class=""><span class="merged" id="all.4DrFKG" title="原文 : HeapMemoryHealthCheck"><a href="./apidocs/io.helidon.health.checks/io/helidon/health/checks/HeapMemoryHealthCheck.html" target="_blank"><code>HeapMemoryHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.3Mjlwp"  title="原文: helidon.healthCheck.heapMemory.thresholdPercent"><code>helidon.healthCheck.heapMemory.thresholdPercent</code></span></td>
<td class=""><span class="merged" id="all.2sTu8i"  title="原文: 98"><code>98</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2r7NSo" title="原文 : The following code adds the default built-in health checks to your application:">次のコードは、デフォルトの組込みヘルス・チェックをアプリケーションに追加します:</span></p>

<markup
lang="java"

>HealthSupport health = HealthSupport.builder()
    .addLiveness(HealthChecks.healthChecks())   <span class="conum" data-value="1" />
    .build();

Routing.builder()
       .register(health)   <span class="conum" data-value="2" />
       .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.24kjYB" title="原文 : Add built-in health checks using defaults (requires the helidon-health-checks dependency).">デフォルトを使用して組込みヘルス・チェックを追加します(<code>helidon-health-checks</code>依存関係が必要)。</span></li>
<li data-value="2"><span class="merged" id="all.3IevCX" title="原文 : Register the created HealthSupport with web server routing (adds the /health endpoint).">作成した<code>HealthSupport</code>をwebサーバーのルーティングに登録します(<code>/health</code>エンドポイントを追加します)。</span></li>
</ul>

<p><span class="merged" id="all.2k2BR6" title="原文 : You can control the thresholds for built-in health checks in either of two ways:">組込みヘルス・チェックのしきい値は、次のいずれかの方法で制御できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2sfvBb.spl1" title="原文 : Create the health checks individually using their builders instead of using the HealthChecks convenience class."><code>HealthChecks</code>コンビニエンス・クラスを使用するかわりに、そのビルダーを使用してヘルス・チェックを個別に作成します。</span> <span class="merged" id="all.2sfvBb.spl2" title="原文 : Follow the JavaDoc links in the table above.">前述の<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>のJavaDocリンクに従います。</span> </p>

</li>
<li>
<p><span class="merged" id="all.Yf8D1" title="原文 : Using configuration as explained in ."><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration"></router-link>の説明に従って、構成を使用します。</span></p>

</li>
</ul>

</div>


<h3 id="_kubernetes_probes"><span class="merged" id="all.kZrdm" title="原文 : Kubernetes probes">Kubernetesプローブ</span></h3>
<div class="section">
<p><span class="merged" id="all.2UKPw8" title="原文 : Probes is the term used by Kubernetes to describe health checks for containers (Kubernetes documentation).">プローブとは、コンテナ(<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes" target="_blank">「Kubernetesのドキュメント」</a>)のヘルス・チェックを説明するためにKubernetesで使用される用語です。</span></p>

<p><span class="merged" id="all.2mX43J" title="原文 : There are three types of probes:">プローブには、次の3つのタイプがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.IvoyG" title="原文 : liveness: Indicates whether the container is running"><em>リブネス</em>: コンテナが実行中かどうかを示します</span></p>

</li>
<li>
<p><span class="merged" id="all.1mTJyL" title="原文 : readiness: Indicates whether the container is ready to service requests"><em>レディネス</em>: コンテナがリクエストを処理する準備ができているかどうかを示します</span></p>

</li>
<li>
<p><span class="merged" id="all.4GeLeK" title="原文 : startup: Indicates whether the application in the container has started"><em>起動</em>: コンテナ内のアプリケーションが起動したかどうかを示します</span></p>

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

<p><span class="merged" id="all.3ocKYs.spl1" title="原文 : A microservice exposed to HTTP traffic will typically implement both the liveness probe and the readiness probe using HTTP requests.">HTTPトラフィックに公開されるマイクロサービスは、通常、HTTPリクエストを使用してリブネス・プローブとレディネス・プローブの両方を実装します。</span> <span class="merged" id="all.3ocKYs.spl2" title="原文 : If the microservice takes a significant time to initialize itself, you can also define a startup probe, in which case Kubernetes does not check liveness or readiness probes until the startup probe returns success.">マイクロサービス自体を初期化するのにかなりの時間がかかる場合は、起動プローブを定義することもできます。この場合、Kubernetesは、起動プローブが成功を返すまでリブネスまたはレディネス・プローブをチェックしません。</span> </p>

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
<td class=""><span class="merged" id="all.2M4owV.spl1" title="原文 : Number of consecutive failures after which the probe should stop.">プローブが停止するまでの連続した失敗回数。</span> <span class="merged" id="all.2M4owV.spl2"  title="原文:: Default: 3.">デフォルト: 3</span> <span class="merged" id="all.2M4owV.spl3"  title="原文:: Minimum: 1.">最小: 1。</span> </td>
</tr>
</tbody>
</table>
</div>


<h4 id="_liveness_probe"><span class="merged" id="all.4GlaVL" title="原文 : Liveness probe">リブネス・プローブ</span></h4>
<div class="section">
<p><span class="merged" id="all.3hfi7W.spl1" title="原文 : The liveness probe is used to verify the container has become unresponsive.">リブネス・プローブは、コンテナが応答しなくなったことを確認するために使用されます。</span> <span class="merged" id="all.3hfi7W.spl2" title="原文 : For example, it can be used to detect deadlocks or analyze heap usage.">たとえば、デッドロックの検出やヒープ使用率の分析に使用できます。</span> <span class="merged" id="all.3hfi7W.spl3" title="原文 : When Kubernetes gives up on a liveness probe, the corresponding pod is restarted.">Kubernetesがリブネス・プローブを中止すると、対応するポッドが再起動されます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.14re3N.spl1" title="原文 : The liveness probe can result in repeated restarts in certain cases.">リブネス・プローブでは、特定の場合に再起動が繰り返されることがあります。</span> <span class="merged" id="all.14re3N.spl2" title="原文 : For example, if the probe is implemented to check all the dependencies strictly, then it can fail repeatedly for temporary issues.">たとえば、プローブがすべての依存関係を厳密にチェックするように実装されている場合、一時的な問題に対して繰り返し失敗する可能性があります。</span> <span class="merged" id="all.14re3N.spl3" title="原文 : Repeated restarts can also occur if timeoutSeconds or periodSeconds is too low."><code>timeoutSeconds</code>または<code>periodSeconds</code>が低すぎる場合は、再起動を繰り返すこともできます。</span> </p>
</div>

<p><span class="merged" id="all.2EWLR7"  title="原文:: We recommend the following:">次をお薦めします。&#160;</span></p>

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


<h4 id="_readiness_probe"><span class="merged" id="all.Ts8a5" title="原文 : Readiness probe">レディネス・プローブ</span></h4>
<div class="section">
<p><span class="merged" id="all.pCYPB.spl1" title="原文 : The readiness probe is used to avoid routing requests to the pod until it is ready to accept traffic.">レディネス・プローブは、トラフィックを受け入れる準備ができるまで、ポッドへのリクエストのルーティングを回避するために使用されます。</span> <span class="merged" id="all.pCYPB.spl2" title="原文 : When Kubernetes gives up on a readiness probe, the pod is not restarted, traffic is not routed to the pod anymore.">Kubernetesがレディネス・プローブを中止すると、ポッドは再起動されず、トラフィックはポッドにルーティングされなくなります。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1rhwgb.spl1" title="原文 : In certain cases, the readiness probe can cause all the pods to be removed from service routing.">レディネス・プローブによって、すべてのポッドがサービス・ルーティングから削除される場合があります。</span> <span class="merged" id="all.1rhwgb.spl2" title="原文 : For example, if the probe is implemented to check all the dependencies strictly, then it can fail repeatedly for temporary issues.">たとえば、プローブがすべての依存関係を厳密にチェックするように実装されている場合、一時的な問題に対して繰り返し失敗する可能性があります。</span> <span class="merged" id="all.1rhwgb.spl3" title="原文 : This issue can also occur if timeoutSeconds or periodSeconds is too low.">この問題は、<code>timeoutSeconds</code>または<code>periodSeconds</code>が低すぎる場合にも発生することがあります。</span> </p>
</div>

<p><span class="merged" id="all.2EWLR7.1"  title="原文:: We recommend the following:">次をお薦めします。&#160;</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.o5QPu" title="原文 : Be conservative when checking shared dependencies.">共有依存関係をチェックする場合は、保守的である必要があります。</span></p>

</li>
<li>
<p><span class="merged" id="all.3y7JDO" title="原文 : Be aggressive when checking local dependencies.">ローカルの依存関係をチェックする場合は、積極的にしてください。</span></p>

</li>
<li>
<p><span class="merged" id="all.2bFmCJ" title="原文 : Set failureThreshold according to periodSeconds in order to accommodate temporary errors.">一時的なエラーに対応するために、<code>periodSeconds</code>に従って<code>failureThreshold</code>を設定します。</span></p>

</li>
</ul>

</div>


<h4 id="_startup_probe"><span class="merged" id="all.1PFzvo" title="原文 : Startup probe">起動プローブ</span></h4>
<div class="section">
<p><span class="merged" id="all.3vyrO.spl1" title="原文 : The startup probe prevents Kubernetes from prematurely checking the other probes if the application takes a long time to start.">起動プローブを使用すると、アプリケーションの起動に時間がかかる場合に、Kubernetesが他のプローブを早期にチェックできなくなります。</span> <span class="merged" id="all.3vyrO.spl2" title="原文 : Otherwise, Kubernetes might misinterpret a failed liveness or readiness probe and shut down the container when, in fact, the application is still coming up.">それ以外の場合、Kubernetesは、障害が発生したリブネスやレディネス・プローブを誤って解釈し、実際にアプリケーションが起動しているときにコンテナをシャットダウンすることがあります。</span> </p>

</div>

</div>


<h3 id="_troubleshooting_probes"><span class="merged" id="all.1CFwYj" title="原文 : Troubleshooting probes">プローブのトラブルシューティング</span></h3>
<div class="section">
<p><span class="merged" id="all.2Fa0hq.spl1" title="原文 : Failed probes are recorded as events associated with their corresponding pods.">失敗したプローブは、対応するポッドに関連付けられたイベントとして記録されます。</span> <span class="merged" id="all.2Fa0hq.spl2" title="原文 : The event message contains only the status code.">イベント・メッセージにはステータス・コードのみが含まれます。</span> </p>

<markup
lang="bash"
title="Get the events of a single pod:"
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

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.35"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.14uN3D.spl1" title="原文 : Built-in health checks can be configured using the config property keys described in this table.">組込みのヘルス・チェックは、この<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>で説明されている構成プロパティ・キーを使用して構成できます。</span> <span class="merged" id="all.14uN3D.spl2" title="原文 : Further, you can suppress one or more of the built-in health checks by setting the configuration item helidon.health.exclude to a comma-separated list of the health check names (from this table) you want to exclude.">さらに、1つ以上の組込みヘルス・チェックを抑制するには、除外するヘルス・チェック名のカンマ区切りリスト(この<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>)に構成アイテム<code>helidon.health.exclude</code>を設定します。</span> </p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.34"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_json_response_example"><span class="merged" id="all.3pe69V" title="原文 : JSON response example">JSONレスポンスの例</span></h3>
<div class="section">
<p><span class="merged" id="all.2WpzHc" title="原文 : Accessing the Helidon-provided /health endpoint reports the health of your application as shown below:">Helidon-provided <code>/health</code>エンドポイントにアクセスすると、次に示すようにアプリケーションの健全性がレポートされます:</span></p>

<markup
lang="json"
title="JSON response."
>{
    "status": "UP",
    "checks": [
        {
            "name": "deadlock",
            "status": "UP"
        },
        {
            "name": "diskSpace",
            "status": "UP",
            "data": {
                "free": "211.00 GB",
                "freeBytes": 226563444736,
                "percentFree": "45.31%",
                "total": "465.72 GB",
                "totalBytes": 500068036608
            }
        },
        {
            "name": "heapMemory",
            "status": "UP",
            "data": {
                "free": "215.15 MB",
                "freeBytes": 225600496,
                "max": "3.56 GB",
                "maxBytes": 3817865216,
                "percentFree": "99.17%",
                "total": "245.50 MB",
                "totalBytes": 257425408
            }
        }
    ]
}</markup>

</div>


<h3 id="_kubernetes_example"><span class="merged" id="all.2WjeaS" title="原文 : Kubernetes example">Kubernetesの例</span></h3>
<div class="section">
<p><span class="merged" id="all.MHIww.spl1" title="原文 : This example shows the usage of the Helidon health API in an application that implements health endpoints for the liveness and readiness probes.">この例では、リブネスおよびレディネス・プローブのヘルス・エンドポイントを実装するアプリケーションでのHelidonヘルスAPIの使用方法を示します。</span> <span class="merged" id="all.MHIww.spl2" title="原文 : Note that the application code dissociates the health endpoints from the default routes, so that the health endpoints are not exposed by the service.">アプリケーション・コードは、ヘルス・エンドポイントがサービスによって公開されないように、ヘルス・エンドポイントとデフォルト・ルートの関連付けを解除します。</span> <span class="merged" id="all.MHIww.spl3" title="原文 : An example YAML specification is also provided for the Kubernetes service and deployment.">KubernetesサービスおよびデプロイメントのYAML仕様の例も示します。</span> </p>

<markup
lang="java"
title="Application code:"
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
        .config(WebServer.builder()
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
title="Kubernetes descriptor:"
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
apiVersion: apps/v1
metadata:
  name: acme <span class="conum" data-value="2" />
spec:
  replicas: 1
  selector:
    matchLabels:
      app: acme
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
<li data-value="1"><span class="merged" id="all.3s9wLQ.10" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.10" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.KcwH1.2" title="原文 : The HTTP endpoint for the liveness probe.">リブネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="4"><span class="merged" id="all.2sX3Ho.2" title="原文 : The liveness probe configuration.">リブネス・プローブの構成。</span></li>
<li data-value="5"><span class="merged" id="all.1qQtuS.2" title="原文 : The HTTP endpoint for the readiness probe.">レディネス・プローブのHTTPエンドポイント。</span></li>
<li data-value="6"><span class="merged" id="all.4TIJdd.2" title="原文 : The readiness probe configuration.">レディネス・プローブの構成。</span></li>
</ul>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.22"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.6kjjB" title="原文 : Health Checks SE API JavaDocs."><a href="./apidocs/io.helidon.health.checks/module-summary.html" target="_blank">Health Checks SE API JavaDocs</a>。</span></p>

</li>
</ul>

</div>

</doc-view>
