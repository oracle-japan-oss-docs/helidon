<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1MfyCj"  title="原文:: Health Checks">ヘルス・チェック</span></dt>
<dd slot="desc"><p><span class="merged" id="all.46bIbP" title="原文 : This document describes the health check API available with Helidon SE.">このドキュメントでは、Helidon SEで使用可能なヘルス・チェックAPIについて説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_about_health_checks"><span class="merged" id="all.3D1Wd" title="原文 : About health checks">ヘルス・チェックについて</span></h2>
<div class="section">
<p><span class="merged" id="all.1cSHH8" title="原文 : It&rsquo;s a good practice to monitor your microservice&rsquo;s health, to ensure that it is available and performs correctly.">マイクロサービスが使用可能であり、正しく実行されることを確認するために、マイクロサービスのヘルスを監視することをお薦めします。</span></p>

<p><span class="merged" id="all.1pbCbg.spl1" title="原文 : Applications implement health checks to expose health status that is collected at regular intervals by external tooling, such as orchestrators like Kubernetes.">アプリケーションはヘルス・チェックを実装して、Kubernetesなどのオーケストレータなどの外部ツールによって定期的に収集されるヘルス・ステータスを公開します。</span> <span class="merged" id="all.1pbCbg.spl2" title="原文 : The orchestrator may then take action, such as restarting your application if the health check fails.">その後、オーケストレーションは、ヘルス・チェックが失敗した場合のアプリケーションの再起動などのアクションを実行できます。</span> </p>

<p><span class="merged" id="all.2HIWsf" title="原文 : A typical health check combines the statuses of all the dependencies that affect availability and the ability to perform correctly:">一般的なヘルス・チェックでは、可用性に影響するすべての依存関係のステータスと、正常に実行できるかどうかが結合されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4EG1aI"  title="原文:: network latency">ネットワーク応答時間</span></p>

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

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.8"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.4JnU1V.9" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"
title="組込みヘルス・チェックを使用するためのオプションの依存性:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>
</div>

<h2 id="_api_overview"><span class="merged" id="all.3hQuIJ"  title="原文:: API overview">APIの概要</span></h2>
<div class="section">
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
<td class=""><span class="merged" id="all.2NT28Y" title="原文 : Result of a health check invocation that contains a state and a description.">状態と説明を含むヘルス・チェック呼出しの結果。</span></td>
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
<p><span class="merged" id="all.1OkIKW.spl1" title="原文 : A health check is a Java functional interface that returns a HealthCheckResponse object.">ヘルス・チェックは、<code>HealthCheckResponse</code>オブジェクトを返すJava機能インタフェースです。</span> <span class="merged" id="all.1OkIKW.spl2" title="原文 : You can choose to implement a health check inline with a lambda expression or you can reference a method with the double colon operator ::.">ラムダ式を使用してインラインでヘルス・チェックを実装することも、二重コロン演算子<code>::</code>を使用してメソッドを参照することもできます。</span> </p>

<markup
lang="java"
title="ラムダ式によるヘルス・チェック:"
>HealthCheck hc = () -&gt; HealthCheckResponse
        .named("exampleHealthCheck")
        .up()
        .build();</markup>

<markup
lang="java"
title="メソッド参照によるヘルス・チェック:"
>HealthCheckResponse exampleHealthCheck(){
    return HealthCheckResponse
        .named("exampleHealthCheck")
        .up()
        .build();
}
HealthCheck hc = this::exampleHealthCheck;</markup>

<p><span class="merged" id="all.4Gp5Nt.spl1" title="原文 : HealthSupport is a WebServer service that contains a collection of registered HealthCheck instances."><code>HealthSupport</code>は、登録済の<code>HealthCheck</code>インスタンスのコレクションを含むWebServerサービスです。</span> <span class="merged" id="all.4Gp5Nt.spl2" title="原文 : When queried, it invokes the registered health check and returns a response with a status code representing the overall state of the application.">問合せが行われると、登録済ヘルス・チェックが起動され、アプリケーションの全体的な状態を表すステータス・コードを含むレスポンスが返されます。</span> </p>

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
<td class=""><span class="merged" id="all.31ilGu" title="原文 : The application is healthy.">アプリケーションは健全です。</span></td>
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
<p><span class="merged" id="all.1GwE81" title="原文 : The HTTP response also contains a JSON payload that describes the statuses for all health checks.">HTTPレスポンスには、すべてのヘルス・チェックのステータスを記述するJSONペイロードも含まれます。</span></p>

<markup
lang="java"
title="ヘルス・サポート・サービスを作成します:"
>HealthSupport health = HealthSupport.builder()
    .addLiveness(hc)
    .build();</markup>

<markup
lang="java"
title="カスタム・ヘルス・チェックを登録します:"
>HealthSupport health = HealthSupport.builder()
    .addLiveness(() -&gt; HealthCheckResponse.named("exampleHealthCheck")
                 .up()
                 .withData("time", System.currentTimeMillis())
                 .build()) <span class="conum" data-value="1" />
    .build();

Routing.builder()
        .register(health) <span class="conum" data-value="2" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3tXvP2.spl1" title="原文 : Add a custom health check.">カスタム・ヘルス・チェックを追加します。</span> <span class="merged" id="all.3tXvP2.spl2" title="原文 : This example returns UP and current time.">この例では、<code>UP</code>および現在の時間を返します。</span> </li>
<li data-value="2"><span class="merged" id="all.bbUmC" title="原文 : Register health support with web server routing (adds the /health endpoint).">webサーバー・ルーティングにヘルス・サポートを登録します(<code>/health</code>エンドポイントを追加します)。</span></li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1vG7cT" title="原文 : Balance collecting a lot of information with the need to avoid overloading the application and overwhelming users.">大量の情報の収集と、アプリケーションの過負荷およびユーザーの過負荷を回避する必要性のバランスを取ります。</span></p>
</div>
<markup
lang="json"
title="JSONレスポンス:"
>{
    "outcome": "UP",
    "status": "UP",
    "checks": [
        {
            "name": "exampleHealthCheck",
            "state": "UP",
            "data": {
                "time": 1546958376613
            }
        }
    ]
}</markup>


<h3 id="_built_in_health_checks"><span class="merged" id="all.1hewvo" title="原文 : Built-in health-checks">Built-in health-checks</span></h3>
<div class="section">
<p><span class="merged" id="all.2JmAJf" title="原文 : You can use Helidon-provided health checks to report various common health check statuses:">Helidon-providedヘルス・チェックを使用して、様々な一般的なヘルス・チェック・ステータスをレポートできます:</span></p>


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
<td class=""><span class="merged" id="all.1WzrZM.2"  title="原文:: deadlock detection">デッドロックの検出</span></td>
<td class=""><span class="merged" id="all.2wT1L3"  title="原文: deadlock"><code>deadlock</code></span></td>
<td class=""><span class="merged" id="all.1l1MhU" title="原文 : DeadlockHealthCheck"><a href="./apidocs/io.helidon.health.checks/io/helidon/health/checks/DeadlockHealthCheck.html" id="" target="_blank" ><code>DeadlockHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.2jtIAF.5"  title="原文:: n/a">該当なし</span></td>
<td class=""><span class="merged" id="all.2jtIAF.6"  title="原文:: n/a">該当なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FevQJ.2" title="原文 : available disk space">使用可能なディスク領域</span></td>
<td class=""><span class="merged" id="all.3SPrim"  title="原文: diskSpace"><code>diskSpace</code></span></td>
<td class=""><span class="merged" id="all.27bSud" title="原文 : DiskSpaceHealthCheck"><a href="./apidocs/io.helidon.health.checks/io/helidon/health/checks/DiskSpaceHealthCheck.html" id="" target="_blank" ><code>DiskSpaceHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.1oTtMi" title="原文 : helidon.healthCheck.diskSpace.thresholdPercent helidon.healthCheck.diskSpace.path"><code>helidon.healthCheck.diskSpace.thresholdPercent</code><br> <br> <code>helidon.healthCheck.diskSpace.path</code></span></td>
<td class=""><span class="merged" id="all.2wnU58" title="原文 : 99.999 /"><code>99.999</code><br> <br> <code>/</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lRV6E.2" title="原文 : available heap memory">使用可能なヒープ・メモリー</span></td>
<td class=""><span class="merged" id="all.2g6BBF"  title="原文: heapMemory"><code>heapMemory</code></span></td>
<td class=""><span class="merged" id="all.3cMVbI" title="原文 : HeapMemoryHealthCheck"><a href="./apidocs/io.helidon.health.checks/io/helidon/health/checks/HeapMemoryHealthCheck.html" id="" target="_blank" ><code>HeapMemoryHealthCheck</code></a></span></td>
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
    .addLiveness(HealthChecks.healthChecks()) <span class="conum" data-value="1" />
    .build();

Routing.builder()
        .register(health) <span class="conum" data-value="2" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.24kjYB" title="原文 : Add built-in health checks using defaults (requires the helidon-health-checks dependency).">デフォルトを使用して組込みヘルス・チェックを追加します(<code>helidon-health-checks</code>依存性が必要)。</span></li>
<li data-value="2"><span class="merged" id="all.1VF6jO.1" title="原文 : Register the created health support with web server routing (adds the /health endpoint).">作成したヘルス・サポートをwebサーバー・ルーティングに登録します(<code>/health</code>エンドポイントを追加します)。</span></li>
</ul>
<p><span class="merged" id="all.2k2BR6" title="原文 : You can control the thresholds for built-in health checks in either of two ways:">組込みヘルス・チェックのしきい値は、次のいずれかの方法で制御できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2sfvBb.spl1" title="原文 : Create the health checks individually using their builders instead of using the HealthChecks convenience class."><code>HealthChecks</code>コンビニエンス・クラスを使用するかわりに、そのビルダーを使用してヘルス・チェックを個別に作成します。</span> <span class="merged" id="all.2sfvBb.spl2" title="原文 : Follow the JavaDoc links in the table above.">前述の<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>のJavaDocリンクに従います。</span> </p>

</li>
<li>
<p><span class="merged" id="all.31Ug3B" title="原文 : Configure the behavior of the built-in health checks using the config property keys in the table."><router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>の構成プロパティ・キーを使用して、組込みヘルス・チェックの動作を構成します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1S7Wv2" title="原文 : Further, you can suppress one or more of the built-in health checks by setting the configuration item helidon.health.exclude to a comma-separated list of the health check names (from the table) you want to exclude.">さらに、構成アイテム<code>helidon.health.exclude</code>を、(<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>の)除外するヘルス・チェック名のカンマ区切りリストに設定することで、組込みヘルス・チェックを抑制できます。</span></p>

</div>
</div>

<h2 id="_health_report"><span class="merged" id="all.PfRlW" title="原文 : Health report">ヘルス・レポート</span></h2>
<div class="section">
<p><span class="merged" id="all.SC0Jq" title="原文 : Accessing the Helidon-provided /health endpoint reports the health of your application:">Helidon-provided <code>/health</code>エンドポイントにアクセスすると、アプリケーションのヘルスがレポートされます:</span></p>

<markup
lang="json"
title="JSONレスポンス。"
>{
    "outcome": "UP",
    "status": "UP",
    "checks": [
        {
            "name": "deadlock",
            "state": "UP"
        },
        {
            "name": "diskSpace",
            "state": "UP",
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
            "state": "UP",
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


<h3 id="_strict_json_output"><span class="merged" id="all.YqQih" title="原文 : Strict JSON Output">厳密なJSON出力</span></h3>
<div class="section">
<p><span class="merged" id="all.3tcw3P.spl1" title="原文 : The JSON responses shown above contain properties &quot;status&quot; and &quot;outcome&quot; with the same values.">前述のJSONレスポンスには、同じ値を持つプロパティ<code>"status"</code>および<code>"outcome"</code>が含まれています。</span> <span class="merged" id="all.3tcw3P.spl2" title="原文 : Helidon reports both of these to maintain backward compatibility with older versions of MicroProfile Health.">Helidonでは、これらの両方がレポートされ、古いバージョンのMicroProfile Healthとの下位互換性が維持されます。</span> <span class="merged" id="all.3tcw3P.spl3" title="原文 : This behavior can be disabled by setting the property health.backward-compatible to false, in which case only &quot;status&quot; is reported.">この動作を無効にするには、<code>health.backward-compatible</code>プロパティを<code>false</code>に設定します。この場合、<code>"status"</code>のみがレポートされます。</span> <span class="merged" id="all.3tcw3P.spl4" title="原文 : Future versions of Helidon will drop support for older versions of Health, so it is recommended to rely on &quot;status&quot; instead of &quot;outcome&quot; in your applications.">Helidonの将来のバージョンでは、古いバージョンのHealthのサポートが削除されるため、アプリケーションでは<code>"outcome"</code>ではなく<code>"status"</code>に依存することをお薦めします。</span> </p>

</div>
</div>
</doc-view>
