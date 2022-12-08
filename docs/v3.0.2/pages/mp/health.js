<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.9"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.7" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.20Znzd" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#Maven-Coordinates')" to="#Maven-Coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.4" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1K42FP" title="原文 : REST Endpoints"><router-link @click.native="this.scrollFix('#Rest-Endpoints')" to="#Rest-Endpoints">RESTエンドポイント</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.7" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.6" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.4" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.7"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1yi98X" title="原文 : Microservices expose their health status primarily so external tools (for example, an orchestrator such as Kubernetes) can monitor each service and take action, such as restarting a service instance if it has failed or temporarily shunting traffic away from the instance if the service is unable to process incoming requests normally.">マイクロサービスは、主に外部ツール(Kubernetesなどのオーケストレータ)が各サービスを監視し、障害が発生した場合のサービス・インスタンスの再起動や、サービスが受信リクエストを正常に処理できない場合のインスタンスからのトラフィックの一時的な停止などのアクションを実行できるように、ヘルス・ステータスを公開します。</span></p>

</div>


<h2 id="Maven-Coordinates"><span class="merged" id="all.317oeS.7"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2CbxAl" title="原文 : To enable MicroProfile Health add the helidon-microprofile bundle dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfile Healthを有効にするには、プロジェクトの<code>pom.xml</code>に<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.28yyxa" title="原文 : MicroProfile Health is already included in the bundle.">MicroProfileヘルスはすでにバンドルに含まれています。</span></p>

<p><span class="merged" id="all.YioMQ.spl1" title="原文 : If full control over the dependencies is required, and you want to minimize the quantity of the dependencies - Helidon MicroProfile Core budnle should be used.">依存関係を完全に制御する必要がある場合は、依存関係の数を最小限に抑えます - <code>Helidon MicroProfile Core budnle</code>を使用する必要があります。</span> <span class="merged" id="all.YioMQ.spl2" title="原文 : In this case the following dependencies should be included in your project&rsquo;s pom.xml:">この場合、プロジェクトの<code>pom.xml</code>に次の依存関係を含める必要があります:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-core&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1KESch" title="原文 : To enable built-in health checks add the following dependency (or use the helidon-microprofile bundle )">組込みヘルス・チェックを有効にするには、次の依存関係を追加します(または<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>を使用します)</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-health-checks&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.4"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.HSK7E.spl1" title="原文 : Helidon implements MicroProfile Health Specification.">Helidonは、<a href="https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html" target="_blank">MicroProfile Health</a>仕様を実装します。</span> <span class="merged" id="all.HSK7E.spl2" title="原文 : The spec prescribes how external tools probe a service&rsquo;s health checks and how you implement health checks as part of your microservice that are specific to your service&rsquo;s needs.">仕様は、外部ツールがサービスのヘルス・チェックをプローブする方法と、サービスのニーズに固有のマイクロサービスの一部としてヘルス・チェックを実装する方法を規定しています。</span> </p>


<h3 id="_concepts_liveness_readiness_and_startup_checks"><span class="merged" id="all.4R3fc" title="原文 : Concepts - Liveness, Readiness, and Startup Checks">コンセプト - リブネス、レディネスおよび起動チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.4bxC5Z" title="原文 : MicroProfile Health supports three types of health checks:">MicroProfile Healthでは、次の3つのタイプのヘルス・チェックがサポートされています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.n7Wa7.spl1" title="原文 : Liveness checks report whether the runtime environment in which the service is running is sufficient to support the work the service performs."><em>「リブネス」</em>は、サービスが実行されているランタイム環境が、サービスが実行する作業をサポートするのに十分であるかどうかをレポートします。</span> <span class="merged" id="all.n7Wa7.spl2" title="原文 : The environment is beyond the control of the service itself and typically cannot improve without outside intervention.">環境はサービス自体の制御範囲を超えているため、通常、外部で介入しないと改善できません。</span> <span class="merged" id="all.n7Wa7.spl3" title="原文 : If a microservice instance reports a DOWN liveness check, it should never report UP later.">マイクロサービス・インスタンスが<code>DOWN</code>リブネス・チェックを報告する場合、後で<code>UP</code>を報告しないでください。</span> <span class="merged" id="all.n7Wa7.spl4" title="原文 : It will need to be stopped and a replacement instance created.">停止して、置換インスタンスを作成する必要があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.15ydPI.spl1" title="原文 : Readiness checks report whether the service is currently capable of performing its work."><em>「レディネス」</em>は、サービスがその作業を<em>「現在」</em>実行できるかをレポートします。</span> <span class="merged" id="all.15ydPI.spl2" title="原文 : A service that reports DOWN for its readiness cannot at the moment do its job, but at some future point it might become able to do so without requiring a restart."><code>DOWN</code>のレディネスを報告するサービスでは、<em>「その時点では」</em>そのジョブを実行できませんが、将来、再起動しなくても実行できるようになる可能性があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1VFTvz.spl1" title="原文 : Startup checks indicate whether the service has started to the point where liveness and readiness checks even make sense."><em>「起動」</em>チェックは、リブネスとレディネス・チェックでも意味のある時点までサービスが開始したかどうかを示します。</span> <span class="merged" id="all.1VFTvz.spl2" title="原文 : A service reporting DOWN for a startup check is still initializing itself and normally will report UP soon, assuming it is able to start successfully.">起動チェックの<code>DOWN</code>をレポートするサービスは、まだ初期化中であり、正常に起動できると想定して、通常、<code>UP</code>をすぐにレポートします。</span> </p>

</li>
</ul>

</div>

</div>


<h2 id="Rest-Endpoints"><span class="merged" id="all.3ZiZpY"  title="原文:: REST Endpoints">RESTエンドポイント</span></h2>
<div class="section">
<p><span class="merged" id="all.2Ns2Rk.spl1" title="原文 : A MicroProfile-compliant service reports its health via known REST endpoints.">MicroProfile準拠のサービスは、既知のRESTエンドポイントを介してそのヘルスを報告します。</span> <span class="merged" id="all.2Ns2Rk.spl2" title="原文 : Helidon MP provides these endpoints automatically as part of every MP microservice that includes health support..">Helidon MPは、ヘルス・サポートを含むすべてのMPマイクロサービスの一部として、これらのエンドポイントを自動的に提供します。</span> </p>

<p><span class="merged" id="all.4MdX0O.spl1" title="原文 : External management tools (or curl or browsers) retrieve health checks using the REST endpoints in the table below which summarizes the types of health checks in MicroProfile Health.">外部管理ツール(または<code>curl</code>またはブラウザ)は、次の表のRESTエンドポイントを使用してヘルス・チェックを取得し、MicroProfile Healthのヘルス・チェックのタイプを要約します。</span> <span class="merged" id="all.4MdX0O.spl2" title="原文 : Responses from the health endpoints report 200 (OK), 204 (no content), or 503 (service unavailable) depending on the outcome of running the health checks.">ヘルス・エンドポイントからのレスポンスは、ヘルス・チェックの実行結果に応じて、<code>200</code> (OK)、<code>204</code> (コンテンツなし)または<code>503</code> (サービス使用不可)をレポートします。</span> <span class="merged" id="all.4MdX0O.spl3" title="原文 : HTTP GET responses include JSON content showing the detailed results of all the health checks which the server executed after receiving the request.">HTTP <code>GET</code>レスポンスには、リクエストを受信した後にサーバーが実行したすべてのヘルス・チェックの詳細な結果を示すJSONコンテンツが含まれます。</span> <span class="merged" id="all.4MdX0O.spl4" title="原文 : HTTP HEAD requests return only the status with no payload.">HTTP <code>HEAD</code>リクエストは、ペイロードのないステータスのみを返します。</span> </p>

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
<th><span class="merged" id="all.p0YxL.1"  title="原文:: Type">タイプ</span></th>
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
<tr>
<td class=""><span class="merged" id="all.4BVIxi"  title="原文:: startup">startup</span></td>
<td class=""><span class="merged" id="all.3mjorr" title="原文 : whether the microservice has initialized to the point where liveness and readiness checks might pass">マイクロサービスが、リブネスとレディネス・チェックに合格するポイントに初期化されているかどうか</span></td>
<td class=""><span class="merged" id="all.3cdimM"  title="原文: /health/started"><code>/health/started</code></span></td>
<td class=""><span class="merged" id="all.1LUurb" title="原文 : Treats the instance as still starting up; does not check liveness or readiness until the startup probe reports success or times out according to its configuration.">インスタンスはまだ起動中として扱われます。起動プローブが構成に従って成功またはタイムアウトを報告するまで、リブネスまたはレディネスをチェックしません。</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.8"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.J2YYh" title="原文 : Health checks may be configured using the following properties.">ヘルス・チェックは、次のプロパティを使用して構成できます。</span></p>

<p><span class="merged" id="all.jQtPp.1" title="原文 : The class responsible for configuration is:">構成を担当するクラスは次のとおりです:</span></p>

<p><span class="merged" id="all.39zZxo.1" title="原文 : Type: io.helidon.health.HealthSupport">タイプ: <a href="./apidocs/io.helidon.health/io/helidon/health/HealthSupport.html" target="_blank">io.helidon.health.HealthSupport</a></span></p>

<p><span class="merged" id="all.4EFd1l.1" title="原文 : This is a standalone configuration type, prefix from configuration root: health">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>health</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.69"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.70" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.82"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.80"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.82"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.83"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.10"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.10" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4NniMS.5" title="原文 : Sets the cross-origin config builder for use in establishing CORS support for the service endpoints.">サービス・エンドポイントのCORSサポートの確立に使用するクロス・オリジン構成ビルダーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.17"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.107"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.52"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2yWGb2.1" title="原文 : HealthSupport can be disabled by invoking this method.">HealthSupportは、このメソッドを呼び出すことによって無効にできます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1NJ0vY.2"  title="原文: exclude"><code>exclude</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.29"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.kflpu.1.spl1" title="原文 : Add health checks to a black list.">ヘルス・チェックをブラック・リストに追加します。</span> <span class="merged" id="all.kflpu.1.spl2" title="原文 : Health check results that match by name with a blacklisted records will not be part of the result.">名前でブラックリスト・レコードと一致するヘルス・チェック結果は結果の一部になりません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.43qXap.1"  title="原文: exclude-classes"><code>exclude-classes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.26ZrAs.1" title="原文 : Class&lt;?&gt;[]">クラス&lt;?> []</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4G70D8.1.spl1" title="原文 : A class may be excluded from invoking health checks on it.">クラスは、それに対するヘルス・チェックの起動から除外できます。</span> <span class="merged" id="all.4G70D8.1.spl2" title="原文 : This allows configurable approach to disabling broken health-checks.">これにより、構成可能なアプローチで破損したヘルス・チェックを無効にすることができます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29569K.2"  title="原文: include"><code>include</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.30"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.OjXeZ.1" title="原文 : Add health checks to a white list (in case #includeAll is set to false.">ヘルス・チェックをホワイト・リストに追加します(#includeAllが<code>false</code>に設定されている場合)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rpt0z.5"  title="原文: routing"><code>routing</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.184"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1n2NdZ.5" title="原文 : Sets the routing name to use for setting up the service&rsquo;s endpoint.">サービスのエンドポイントの設定に使用するルーティング名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kI2ET.4"  title="原文: timeout-millis"><code>timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.32"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.7"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lYeql.1" title="原文 : health endpoint timeout (ms)">ヘルス・エンドポイント・タイムアウト(ミリ秒)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.8"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.185"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3MWNIS.5" title="原文 : Sets the web context to use for the service&rsquo;s endpoint.">サービスのエンドポイントに使用するwebコンテキストを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4DqvVc" title="原文 : Current properties may be set in application.yaml or in microprofile-config.properties with health prefix.">現在のプロパティは、<code>application.yaml</code>または<code>microprofile-config.properties</code>で<code>health</code>プレフィクス付きで設定できます。</span></p>

<p><span class="merged" id="all.4clPdM.spl1" title="原文 : For example, you can specify a custom port and root context for the root health endpoint path.">たとえば、ルート・ヘルス・エンドポイント・パスにカスタム・ポートおよびルート・コンテキストを指定できます。</span> <span class="merged" id="all.4clPdM.spl2" title="原文 : However, you cannot use different ports, such as http://localhost:8080/myhealth and http://localhost:8081/myhealth/live.">ただし、<a class="bare" href="http://localhost:8080/myhealth" target="_blank">http://localhost:8080/myhealth</a>や<a class="bare" href="http://localhost:8081/myhealth/live" target="_blank">http://localhost:8081/myhealth/live</a>など、異なるポートは使用できません。</span> <span class="merged" id="all.4clPdM.spl3" title="原文 : Likewise, you cannot use different paths, such as http://localhost:8080/health and http://localhost:8080/probe/live.">同様に、<a class="bare" href="http://localhost:8080/health" target="_blank">http://localhost:8080/health</a>や<a class="bare" href="http://localhost:8080/probe/live" target="_blank">http://localhost:8080/probe/live</a>など、異なるパスは使用できません。</span> <span class="merged" id="all.4clPdM.spl4" title="原文 : The example below will change the root path.">次の例では、ルート・パスを変更します。</span> </p>

<markup
lang="properties"
title="Create a file named <code>microprofile-config.properties</code> in the <code>resources/META-INF</code> directory with the following contents:"
>health.web-context=myhealth  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.lukBB.1" title="原文 : The web-context specifies a new root path for the health endpoint.">web-contextは、ヘルス・エンドポイントの新しいルート・パスを指定します。</span></li>
</ul>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.6"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.bsR2G" title="原文 : Generate Helidon MP Quickstart project following these Instruction">これらの<router-link to="/mp/guides/quickstart">「指示」</router-link>に従ってHelidon MPクイックスタート・プロジェクトを生成</span></p>


<h3 id="_using_the_built_in_health_checks"><span class="merged" id="all.1z9H3F.1" title="原文 : Using the Built-In Health Checks">組込みのヘルス・チェックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.4LO6Ue" title="原文 : Helidon has a set of built-in health checks that are enabled to report various health check statuses that are commonly used:">Helidonには、一般的に使用される様々なヘルス・チェック・ステータスをレポートするために有効化された一連の組込みヘルス・チェックがあります:</span></p>

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

<p><span class="merged" id="all.YoxRn.1.spl1" title="原文 : The following example will demonstrate how to use the built-in health checks.">次の例は、組込みのヘルス・チェックの使用方法を示しています。</span> <span class="merged" id="all.YoxRn.1.spl2" title="原文 : These examples are all executed from the root directory of your project (helidon-quickstart-mp).">これらの例はすべて、プロジェクトのルート・ディレクトリ(helidon-quickstart-mp)から実行されます。</span> </p>

<markup
lang="bash"
title="Build the application, then run it:"
>mvn package
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="bash"
title="Verify the health endpoint in a new terminal window:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSON response:"
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
        "free": "325.54 GB",
        "freeBytes": 349543358464,
        "percentFree": "69.91%",
        "total": "465.63 GB",
        "totalBytes": 499963174912
      }
    },
    {
      "name": "heapMemory",
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

</div>


<h3 id="_custom_liveness_health_checks"><span class="merged" id="all.1ZfvHJ.1" title="原文 : Custom Liveness Health Checks">カスタム・リブネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.j0i5X.1.spl1" title="原文 : You can create application-specific custom health checks and integrate them with Helidon using CDI.">アプリケーション固有のカスタム・ヘルス・チェックを作成し、CDIを使用してHelidonと統合できます。</span> <span class="merged" id="all.j0i5X.1.spl2" title="原文 : The following example shows how to add a custom liveness health check.">次の例は、カスタムのリブネス・ヘルス・チェックを追加する方法を示しています。</span> </p>

<markup
lang="java"
title="Create a new <code>GreetLivenessCheck</code> class with the following content:"
>@Liveness <span class="conum" data-value="1" />
@ApplicationScoped <span class="conum" data-value="2" />
public class GreetLivenessCheck implements HealthCheck {

  @Override
  public HealthCheckResponse call() {
    return HealthCheckResponse.named("LivenessCheck")  <span class="conum" data-value="3" />
        .up()
        .withData("time", System.currentTimeMillis())
        .build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3RP0iD.1" title="原文 : Annotation indicating this is a liveness health check.">これがlivenessヘルス・チェックであることを示す注釈。</span></li>
<li data-value="2"><span class="merged" id="all.4MrkV3" title="原文 : Annotation indicating this is a bean instantiated once per application (in Helidon this means just once per runtime).">これはアプリケーションごとに1回インスタンス化されるBeanであることを示す注釈(Helidonでは、これはランタイムごとに1回のみ意味します)。</span></li>
<li data-value="3"><span class="merged" id="all.34dPXz.1" title="原文 : Build the HealthCheckResponse with status UP and the current time.">ステータスが<code>UP</code>で、現在の時間が指定されたHealthCheckResponseをビルドします。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then verify the custom liveness health endpoint:"
>curl http://localhost:8080/health/live</markup>

<markup
lang="json"
title="JSON response:"
>{
  "status": "UP",
  "checks": [
    {
      "name": "LivenessCheck",
      "status": "UP",
      "data": {
        "time": 1566338255331
      }
    }
  ]
}</markup>

<p><span class="merged" id="all.3er8bN" title="原文 : Full example code is available here.">完全なサンプル・コードは<a href="https://github.com/oracle/helidon/tree/master/examples/microprofile" target="_blank">こちら</a>です。</span></p>

</div>


<h3 id="_custom_readiness_health_checks"><span class="merged" id="all.3J5k16.1" title="原文 : Custom Readiness Health Checks">カスタム・レディネス・ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.4Yhpto.1.spl1" title="原文 : You can add a readiness check to indicate that the application is ready to be used.">レディネス・チェックを追加して、アプリケーションを使用する準備ができていることを示すことができます。</span> <span class="merged" id="all.4Yhpto.1.spl2" title="原文 : In this example, the server will wait five seconds before it becomes ready.">この例では、サーバーは5秒間待機してから準備ができます。</span> </p>

<markup
lang="java"
title="Create a new <code>GreetReadinessCheck</code> class with the following content:"
>@Readiness <span class="conum" data-value="1" />
@ApplicationScoped
public class GreetReadinessCheck implements HealthCheck {
  private final AtomicLong readyTime = new AtomicLong(0);

  @Override
  public HealthCheckResponse call() {
    return HealthCheckResponse.named("ReadinessCheck")  <span class="conum" data-value="2" />
        .status(isReady())
        .withData("time", readyTime.get())
        .build();
  }

  public void onStartUp(
      @Observes @Initialized(ApplicationScoped.class) Object init) {
    readyTime.set(System.currentTimeMillis()); <span class="conum" data-value="3" />
  }

  private boolean isReady() { <span class="conum" data-value="4" />
    return Duration.ofMillis(System.currentTimeMillis() - readyTime.get()).getSeconds() &gt;= 5;
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1kxfRF.1" title="原文 : Annotation indicating that this is a readiness health check.">これがレディネス・ヘルス・チェックであることを示す注釈。</span></li>
<li data-value="2"><span class="merged" id="all.3wbyJ6.1" title="原文 : Build the HealthCheckResponse with status UP after five seconds, else DOWN.">5秒後にステータスが<code>UP</code>の<code>HealthCheckResponse</code>をビルドし、それ以外の場合は<code>DOWN</code>をビルドします。</span></li>
<li data-value="3"><span class="merged" id="all.3fJvXc.1" title="原文 : Record the time at startup.">起動時に時間を記録します。</span></li>
<li data-value="4"><span class="merged" id="all.1OX3NH" title="原文 : Become ready after 5 seconds.">5秒後に準備します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application. Issue the curl command with -v within five seconds and you will see that the application is not ready:"
>curl -v  http://localhost:8080/health/ready</markup>

<markup

title="HTTP response status"
>&lt; HTTP/1.1 503 Service Unavailable <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1yEKrD.1" title="原文 : The HTTP status is 503 since the application is not ready.">アプリケーションの準備ができていないため、HTTPステータスは<code>503</code>です。</span></li>
</ul>

<markup
lang="json"
title="JSON response body:"
>{
  "status": "DOWN",
  "checks": [
    {
      "name": "ReadinessCheck",
      "status": "DOWN",
      "data": {
        "time": 1566399775700
      }
    }
  ]
}</markup>

<markup
lang="bash"
title="After five seconds you will see the application is ready:"
>curl -v http://localhost:8080/health/ready</markup>

<markup

title="HTTP response status"
>&lt; HTTP/1.1 200 OK <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.yxWiD.1" title="原文 : The HTTP status is 200 indicating that the application is ready.">HTTPステータスは、アプリケーションの準備ができていることを示す<code>200</code>です。</span></li>
</ul>

<markup
lang="json"
title="JSON response body:"
>{
  "status": "UP",
  "checks": [
    {
      "name": "ReadinessCheck",
      "status": "UP",
      "data": {
        "time": 1566399775700
      }
    }
  ]
}</markup>

<p><span class="merged" id="all.3er8bN.1" title="原文 : Full example code is available here.">完全なサンプル・コードは<a href="https://github.com/oracle/helidon/tree/master/examples/microprofile" target="_blank">こちら</a>です。</span></p>

</div>


<h3 id="_custom_startup_health_checks"><span class="merged" id="all.17HfzK.1" title="原文 : Custom Startup Health Checks">カスタム起動時のヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.1buXxS.1.spl1" title="原文 : You can add a startup check to indicate whether or not the application has initialized to the point that the other health checks make sense.">起動チェックを追加して、他のヘルス・チェックが意味のあるポイントにアプリケーションが初期化されているかどうかを示すことができます。</span> <span class="merged" id="all.1buXxS.1.spl2" title="原文 : In this example, the server will wait eight seconds before it declares itself started.">この例では、サーバーが8秒待ってから、それ自体が起動したことを宣言します。</span> </p>

<markup
lang="java"
title="Create a new <code>GreetStartedCheck</code> class with the following content:"
>@Startup <span class="conum" data-value="1" />
@ApplicationScoped
public class GreetStartedCheck implements HealthCheck {
  private final AtomicLong readyTime = new AtomicLong(0);


  @Override
  public HealthCheckResponse call() {
    return HealthCheckResponse.named("StartedCheck")  <span class="conum" data-value="2" />
        .status(isStarted())
        .withData("time", readyTime.get())
        .build();
  }

  public void onStartUp(
      @Observes @Initialized(ApplicationScoped.class) Object init) {
    readyTime.set(System.currentTimeMillis()); <span class="conum" data-value="3" />
  }

  private boolean isStarted() { <span class="conum" data-value="4" />
    return Duration.ofMillis(System.currentTimeMillis() - readyTime.get()).getSeconds() &gt;= 8;
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4PIFFy.1" title="原文 : Annotation indicating that this is a startup health check.">これがストレージ・ヘルス・チェックであることを示す注釈。</span></li>
<li data-value="2"><span class="merged" id="all.24ZLBB.1" title="原文 : Build the HealthCheckResponse with status UP after eight seconds, else DOWN.">8秒後にステータス<code>UP</code>の<code>HealthCheckResponse</code>をビルドします。それ以外の場合は、<code>DOWN</code>を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.3LCiBR.1" title="原文 : Record the time at startup of Helidon; the application will declare itself as started eight seconds later.">Helidonの起動時に時間を記録します。アプリケーションは8秒後に起動したと宣言します。</span></li>
<li data-value="4"><span class="merged" id="all.1OX3NH.1" title="原文 : Become ready after 5 seconds.">5秒後に準備します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application.  Issue the curl command with -v within five seconds and you will see that the application has not yet started:"
>curl -v  http://localhost:8080/health/started</markup>

<markup

title="HTTP response status:"
>&lt; HTTP/1.1 503 Service Unavailable <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2SWrcR.1" title="原文 : The HTTP status is 503 since the application has not started.">アプリケーションが起動していないため、HTTPステータスは<code>503</code>です。</span></li>
</ul>

<markup
lang="json"
title="JSON response body:"
>{
  "status": "DOWN",
  "checks": [
    {
      "name": "StartedCheck",
      "status": "DOWN",
      "data": {
        "time": 1566399775700
      }
    }
  ]
}</markup>

<markup
lang="bash"
title="After eight seconds you will see the application has started:"
>curl -v http://localhost:8080/health/started</markup>

<markup

title="HTTP response status:"
>&lt; HTTP/1.1 200 OK <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.RXwRi.1" title="原文 : The HTTP status is 200 indicating that the application is started.">HTTPステータスは、アプリケーションが起動されたことを示す<code>200</code>です。</span></li>
</ul>

<markup
lang="json"
title="JSON response body:"
>{
  "status": "UP",
  "checks": [
    {
      "name": "StartedCheck",
      "status": "UP",
      "data": {
        "time": 1566399775700
      }
    }
  ]
}</markup>

<p><span class="merged" id="all.3J5jwR.1" title="原文 : When using the health check URLs, you can get the following health check data:">ヘルス・チェックURLを使用すると、次のヘルス・チェック・データを取得できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2YZWYe.1" title="原文 : liveness only - http://localhost:8080/health/live">リブネスのみ - <a class="bare" href="http://localhost:8080/health/live" target="_blank">http://localhost:8080/health/live</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3b8LFl.1" title="原文 : readiness only - http://localhost:8080/health/ready">レディネスのみ - <a class="bare" href="http://localhost:8080/health/ready" target="_blank">http://localhost:8080/health/ready</a></span></p>

</li>
<li>
<p><span class="merged" id="all.8tTSz.1" title="原文 : startup checks only - http://localhost:8080/health/started">起動時チェックのみ - <a class="bare" href="http://localhost:8080/health/started" target="_blank">http://localhost:8080/health/started</a></span></p>

</li>
<li>
<p><span class="merged" id="all.yZSVF.1" title="原文 : all health check data - http://localhost:8080/health">すべてのヘルス・チェック・データ - <a class="bare" href="http://localhost:8080/health" target="_blank">http://localhost:8080/health</a></span></p>

</li>
</ul>

<markup
lang="bash"
title="Get all the health check data, including custom data:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="JSON response:"
>{
  "status": "UP",
  "checks": [
    {
      "name": "LivenessCheck",
      "status": "UP",
      "data": {
        "time": 1566403431536
      }
    }
  ]
}</markup>

<p><span class="merged" id="all.3er8bN.2" title="原文 : Full example code is available here.">完全なサンプル・コードは<a href="https://github.com/oracle/helidon/tree/master/examples/microprofile" target="_blank">こちら</a>です。</span></p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.4"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4JfMwG" title="原文 : Helidon MicroProfile Health JavaDoc"><a href="./apidocs/io.helidon.microprofile.health/module-summary.html" target="_blank">Helidon MicroProfileヘルスJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.20R2WD" title="原文 : Helidon Built-in Checks JavaDoc"><a href="./apidocs/io.helidon.health.checks/module-summary.html" target="_blank">Helidon組込みチェックJavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2bxCov" title="原文 : MicroProfile Health Specification"><a href="https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html" target="_blank">MicroProfileヘルス仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.470rKN" title="原文 : MicroProfile Health on GitHub"><a href="https://github.com/eclipse/microprofile-health" target="_blank">GitHubのMicroProfileヘルス</a></span></p>

</li>
</ul>

</div>

</doc-view>
