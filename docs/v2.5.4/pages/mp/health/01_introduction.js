<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.13"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1nQ8Dd" title="原文 : To enable MicroProfile Health either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfile Healthを有効にするには、<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.microprofile.health&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-microprofile-health&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1XLfXw" title="原文 : To enable built-in health checks add the following dependency (or use the helidon-microprofile bundle )">組込みヘルス・チェックを有効にするには、次の依存関係を追加します(または<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>を使用します)</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>

<h2 id="_overview"><span class="merged" id="all.YrpRV.3"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1yi98X" title="原文 : Microservices expose their health status primarily so external tools (for example, an orchestrator such as Kubernetes) can monitor each service and take action, such as restarting a service instance if it has failed or temporarily shunting traffic away from the instance if the service is unable to process incoming requests normally.">マイクロサービスは、主に外部ツール(Kubernetesなどのオーケストレータ)が各サービスを監視し、障害が発生した場合のサービス・インスタンスの再起動や、サービスが受信リクエストを正常に処理できない場合のインスタンスからのトラフィックの一時的な停止などのアクションを実行できるように、ヘルス・ステータスを公開します。</span></p>

</div>

<h2 id="_about_the_microprofile_health_specification"><span class="merged" id="all.1fk7Om" title="原文 : About the MicroProfile Health Specification">MicroProfileヘルス仕様について</span></h2>
<div class="section">
<p><span class="merged" id="all.2eBVCu.spl1" title="原文 : Helidon MP implements the MicroProfile Health spec.">Helidon MPは、MicroProfile Health <a href="http://download.eclipse.org/microprofile/microprofile-health-{version.lib.microprofile-health}/microprofile-health-spec.html" id="" target="_blank" >spec</a>を実装します。</span> <span class="merged" id="all.2eBVCu.spl2" title="原文 : The spec prescribes how external tools probe a service&rsquo;s health checks and how you implement health checks as part of your microservice that are specific to your service&rsquo;s needs.">仕様は、外部ツールがサービスのヘルス・チェックをプローブする方法と、サービスのニーズに固有のマイクロサービスの一部としてヘルス・チェックを実装する方法を規定しています。</span> </p>

</div>

<h2 id="_concepts"><span class="merged" id="all.2WdTNx"  title="原文:: Concepts"> 概念</span></h2>
<div class="section">

<h3 id="_liveness_and_readiness_checks"><span class="merged" id="all.4b2MNP" title="原文 : Liveness and Readiness Checks">リブネスとレディネス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.335VOT" title="原文 : MicroProfile Health supports two types of health checks:">MicroProfile Healthは、次の2つのタイプのヘルス・チェックをサポートしています:</span></p>

<p><span class="merged" id="all.n7Wa7.spl1" title="原文 : Liveness checks report whether the runtime environment in which the service is running is sufficient to support the work the service performs."><em>「リブネス」</em>は、サービスが実行されているランタイム環境が、サービスが実行する作業をサポートするのに十分であるかどうかをレポートします。</span> <span class="merged" id="all.n7Wa7.spl2" title="原文 : The environment is beyond the control of the service itself and typically cannot improve without outside intervention.">環境はサービス自体の制御範囲を超えているため、通常、外部で介入しないと改善できません。</span> <span class="merged" id="all.n7Wa7.spl3" title="原文 : If a microservice instance reports a DOWN liveness check, it should never report UP later.">マイクロサービス・インスタンスが<code>DOWN</code>リブネス・チェックを報告する場合、後で<code>UP</code>を報告しないでください。</span> <span class="merged" id="all.n7Wa7.spl4" title="原文 : It will need to be stopped and a replacement instance created.">停止して、置換インスタンスを作成する必要があります。</span> </p>

<p><span class="merged" id="all.15ydPI.spl1" title="原文 : Readiness checks report whether the service is currently capable of performing its work."><em>「レディネス」</em>は、サービスがその作業を<em>「現在」</em>実行できるかをレポートします。</span> <span class="merged" id="all.15ydPI.spl2" title="原文 : A service that reports DOWN for its readiness cannot at the moment do its job, but at some future point it might become able to do so without requiring a restart."><code>DOWN</code>のレディネスを報告するサービスでは、<em>「その時点では」</em>そのジョブを実行できませんが、将来、再起動しなくても実行できるようになる可能性があります。</span> </p>

<p><span class="merged" id="all.126Gun" title="原文 : The following table describes more about these two types of health checks, including how an orchestrator such as Kubernetes might react.">次の表に、Kubernetesなどのオーケストレータがどのように反応するかなど、これらの2つのタイプのヘルス・チェックの詳細を示します。</span></p>

</div>

<h3 id="_known_health_check_endpoints"><span class="merged" id="all.3qJh0T" title="原文 : Known Health Check Endpoints">既知のヘルス・チェック・エンドポイント</span></h3>
<div class="section">
<p><span class="merged" id="all.14HCmR.spl1" title="原文 : A MicroProfile-compliant service reports its health via known REST endpoints.">MicroProfile準拠のサービスは、既知のRESTエンドポイントを介してそのヘルスを報告します。</span> <span class="merged" id="all.14HCmR.spl2" title="原文 : Helidon MP provides these endpoints automatically as part of every MP microservice.">Helidon MPでは、これらのエンドポイントがすべてのMPマイクロサービスの一部として自動的に提供されます。</span> </p>

<p><span class="merged" id="all.21a41o" title="原文 : External management tools (or curl or browsers) retrieve liveness via /health/live and readiness via /health/ready.">外部管理ツール(または<code>curl</code>やブラウザ)は、<code>/health/live</code>を介してリブネスを取得し、<code>/health/ready</code>を介してレディネスを取得します。</span></p>

<p><span class="merged" id="all.1Swv5P.spl1" title="原文 : Responses from the health endpoints report 200 (OK), 204 (no content), or 503 (service unavailable) depending on the outcome of running the health checks.">ヘルス・エンドポイントからのレスポンスは、ヘルス・チェックの実行結果に応じて、<code>200</code> (OK)、<code>204</code> (コンテンツなし)または<code>503</code> (サービス使用不可)をレポートします。</span> <span class="merged" id="all.1Swv5P.spl2" title="原文 : HTTP GET responses include JSON content showing the detailed results of all the health checks which the server executed after receiving the request.">HTTP <code>GET</code>レスポンスには、リクエストを受信した後にサーバーが実行したすべてのヘルス・チェックの詳細な結果を示すJSONコンテンツが含まれます。</span> <span class="merged" id="all.1Swv5P.spl3" title="原文 : HTTP HEAD requests return only the status with no payload.">HTTP <code>HEAD</code>リクエストは、ペイロードのないステータスのみを返します。</span> </p>

<p><span class="merged" id="all.sVu0D" title="原文 : The following table summarizes the two types of health checks in MicroProfile Health.">次の表に、MicroProfile Healthの2つのタイプのヘルス・チェックの概要を示します。</span></p>

<div class="block-title"><span class="merged" id="all.1pypFZ"  title="原文: Types of Health Checks"><span>ヘルス・チェックのタイプ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.p0YxL"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.4P7d8w"  title="原文:: Meaning">意味</span></th>
<th><span class="merged" id="all.3RoZJO" title="原文 : REST endpoint">RESTエンドポイント</span></th>
<th><span class="merged" id="all.2TXK7K" title="原文 : Kubernetes response on failure">失敗時のKubernetesレスポンス</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.jXESw"  title="原文:: liveness">liveness</span></td>
<td class=""><span class="merged" id="all.2pjQy3" title="原文 : whether the runtime environment is suitable">ランタイム環境が適切かどうか</span></td>
<td class=""><span class="merged" id="all.31WLAB"  title="原文: /health/live"><code>/health/live</code></span></td>
<td class=""><span class="merged" id="all.4X1jc4" title="原文 : Restarts container.">コンテナを再開します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3qcozD"  title="原文:: readiness">準備状況</span></td>
<td class=""><span class="merged" id="all.43LkVL" title="原文 : whether the microservice is currently capable of doing its work">マイクロサービスが現在その作業を実行できるかどうか</span></td>
<td class=""><span class="merged" id="all.4KYGxM"  title="原文: /health/ready"><code>/health/ready</code></span></td>
<td class=""><span class="merged" id="all.esKHa" title="原文 : Diverts requests away from the instance; periodically rechecks readiness and resumes traffic once the microservice reports itself as ready.">インスタンスから離れた場所にリクエストを転送します。マイクロサービスが準備完了と報告すると、定期的にレディネスを再チェックし、トラフィックを再開します。</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 id="_built_in_and_custom_health_checks"><span class="merged" id="all.1uqqd3" title="原文 : Built-in and Custom Health Checks">組込みおよびカスタムのヘルス・チェック</span></h3>
<div class="section">

<h4 id="_built_in_health_checks"><span class="merged" id="all.2USXb1" title="原文 : Built-in Health Checks">組込みヘルス・チェック</span></h4>
<div class="section">
<p><span class="merged" id="all.491f8H.spl1" title="原文 : Helidon provides built-in, default checks for each endpoint.">Helidonには、エンドポイントごとに組込みのデフォルト・チェックが用意されています。</span> <span class="merged" id="all.491f8H.spl2" title="原文 : The built-in liveness checks include various environmental values, such as whether the JVM has detected deadlocks or whether there is sufficient heap space.">組込みのリブネス・チェックには、JVMがデッドロックを検出したかどうかや、十分なヒープ領域があるかどうかなど、様々な環境値が含まれます。</span> <span class="merged" id="all.491f8H.spl3" title="原文 : The built-in readiness check always reports UP.">組込みのレディネス・チェックでは、常に<code>UP</code>がレポートされます。</span> </p>

<p><span class="merged" id="all.1gaWMM" title="原文 : You can see all the defaults by accessing any Helidon MP microservice&rsquo;s /health/live endpoint and viewing the response.">すべてのデフォルトを表示するには、Helidon MPマイクロサービスの<code>/health/live</code>エンドポイントにアクセスしてレスポンスを表示します。</span></p>

</div>

<h4 id="_custom_health_checks"><span class="merged" id="all.1sR94w" title="原文 : Custom Health Checks">カスタム・ヘルス・チェック</span></h4>
<div class="section">
<p><span class="merged" id="all.2Kl1Tu.spl1" title="原文 : Add your own liveness or readiness checks by adding a Java class for each check.">チェックごとにJavaクラスを追加して、独自のリブネスまたはレディネス・チェックを追加します。</span> <span class="merged" id="all.2Kl1Tu.spl2" title="原文 : Each custom check must implement the HealthCheck interface, and you add either the @Liveness or the @Readiness annotation to the class.">各カスタム・チェックは<code>HealthCheck</code>インタフェースを実装する必要があり、<code>@Liveness</code>または<code>@Readiness</code>注釈をクラスに追加します。</span> </p>

</div>
</div>

<h3 id="_next_steps"><span class="merged" id="all.iDczO.3"  title="原文:: Next Steps">次のステップ</span></h3>
<div class="section">
<p><span class="merged" id="all.2wwN0I" title="原文 : Add custom health checks to your own microservices.">独自のマイクロサービスにカスタム・ヘルス・チェックを追加します。</span></p>

<p><span class="merged" id="all.rn5ka" title="原文 : The Helidon MP Health Check Guide shows how to create a sample project and add custom liveness and readiness health checks."><router-link to="/mp/guides/04_health">「Helidon MPヘルス・チェック・ガイド」</router-link>は、サンプル・プロジェクトを作成し、カスタムのリブネスおよびレディネス・ヘルス・チェックを追加する方法を示しています。</span></p>

</div>
</div>
</doc-view>
