<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.54"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.53" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.38" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.19" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.zUkqV" title="原文 : Enabling Health Support"><router-link @click.native="this.scrollFix('#_enabling_health_support_and_built_in_health_checks_in_your_application')" to="#_enabling_health_support_and_built_in_health_checks_in_your_application">ヘルス・サポートの有効化</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1t4exf" title="原文 : Writing Custom Health Checks"><router-link @click.native="this.scrollFix('#_writing_custom_health_checks')" to="#_writing_custom_health_checks">カスタム・ヘルス・チェックの記述</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1JaJds" title="原文 : Kubernetes Probes"><router-link @click.native="this.scrollFix('#_kubernetes_probes')" to="#_kubernetes_probes">Kubernetesプローブ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.12xnQN" title="原文 : Troubleshooting Probes"><router-link @click.native="this.scrollFix('#_troubleshooting_probes')" to="#_troubleshooting_probes">プローブのトラブルシューティング</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.26FILD.31" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.30" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.agOjq" title="原文 : JSON Response Example"><router-link @click.native="this.scrollFix('#_json_response_example')" to="#_json_response_example">JSONレスポンスの例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2aPSqt" title="原文 : Kubernetes Example"><router-link @click.native="this.scrollFix('#_kubernetes_example')" to="#_kubernetes_example">Kubernetesの例</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.qt7C9.21" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.69"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3wMEAk.spl1" title="原文 : It’s a good practice to monitor your microservice’s health to ensure that it is available and performs correctly.">マイクロサービスのヘルスをモニターして、マイクロサービスが使用可能であり、正しく実行されることを確認することをお薦めします。</span> <span class="merged" id="all.3wMEAk.spl2" title="原文 : Applications implement health checks to expose health status that is collected at regular intervals by external tooling, such as orchestrators like Kubernetes.">アプリケーションはヘルス・チェックを実装して、Kubernetesなどのオーケストレータなどの外部ツールによって定期的に収集されるヘルス・ステータスを公開します。</span> <span class="merged" id="all.3wMEAk.spl3" title="原文 : The orchestrator may then take action, such as restarting your application if the health check fails.">その後、オーケストレーションは、ヘルス・チェックが失敗した場合のアプリケーションの再起動などのアクションを実行できます。</span> </p>

<p><span class="merged" id="all.2HIWsf" title="原文 : A typical health check combines the statuses of all the dependencies that affect availability and the ability to perform correctly:">一般的なヘルス・チェックでは、可用性に影響するすべての依存関係のステータスと、正常に実行できるかどうかが結合されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2xNjLg"  title="原文:: Network Latency">ネットワーク待機時間</span></p>

</li>
<li>
<p><span class="merged" id="all.2qs3gW"  title="原文:: Storage">ストレージ</span></p>

</li>
<li>
<p><span class="merged" id="all.sfGTQ.2"  title="原文:: Database">データベース</span></p>

</li>
<li>
<p><span class="merged" id="all.3m8nL2" title="原文 : Other Services (used by your application)">その他のサービス(アプリケーションで使用)</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.46"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2svPLS" title="原文 : To enable Health Checks add the following dependency to your project’s pom.xml (see Managing Dependencies).">ヘルス・チェックを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-health&lt;/artifactId&gt;
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

<h3 id="_enabling_health_support_and_built_in_health_checks_in_your_application"><span class="merged" id="all.4MM9Uw" title="原文 : Enabling Health Support (and Built-in Health Checks) in Your Application">アプリケーションでのヘルス・サポート(および組込みヘルス・チェック)の有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.35BnhA.spl1" title="原文 : The health subsystem is part of Helidon’s observability support.">ヘルス・サブシステムは、Helidonの可観測性サポートの一部です。</span> <span class="merged" id="all.35BnhA.spl2" title="原文 : As a result, your application includes health support by default provided your project meets several conditions:">その結果、プロジェクトが複数の条件を満たしている場合、アプリケーションにはデフォルトでヘルス・サポートが含まれます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1mMvO5" title="原文 : Your project depends on the helidon-webserver-observe-health component as described above.">プロジェクトは、前述のように<code>helidon-webserver-observe-health</code>コンポーネントに依存します。</span></p>

</li>
<li>
<p><span class="merged" id="all.2UdPF7" title="原文 : (Optional) Your project depends on the helidon-health-checks component (if you want Helidon’s built-in health checks).">(オプション)プロジェクトは、<code>helidon-health-checks</code>コンポーネントに依存します(Helidonの組込みヘルス・チェックが必要な場合)。</span></p>

</li>
<li>
<p><span class="merged" id="all.1Qs4kF" title="原文 : Your code allows the webserver’s automatic feature discovery (enabled by default).">コードによって、webサーバーの自動機能検出(デフォルトで有効)が許可されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3c4AK" title="原文 : Your code allows the observe feature’s automatic observer discovery (also enabled by default).">コードにより、監視機能の自動オブザーバ検出が許可されます(デフォルトで有効化されます)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.277P5c.spl1" title="原文 : If you disable either type of automatic discovery you can add the observe feature to the webserver explicitly and you can add the health observer to the observe feature explicitly, customizing the behavior of each programmatically if you wish.">いずれかのタイプの自動検出を無効にすると、監視機能をwebサーバーに明示的に追加でき、監視機能にヘルス・オブザーバを明示的に追加して、必要に応じて各プログラムの動作をカスタマイズできます。</span> <span class="merged" id="all.277P5c.spl2" title="原文 : You can also use configuration to tailor some of the behavior of the health component (such as changing the URI path from /observe/health to something else).">構成を使用して、ヘルス・コンポーネントの動作の一部を調整することもできます(URIパスを<code>/observe/health</code>から別のものに変更するなど)。</span> </p>

</div>


<h3 id="_writing_custom_health_checks"><span class="merged" id="all.2SCE7y" title="原文 : Writing Custom Health Checks">カスタム・ヘルス・チェックの記述</span></h3>
<div class="section">
<p><span class="merged" id="all.10iDDo.spl1" title="原文 : In many cases, the ability of your application to do its job depends on conditions known only to your application: for example, whether certain external resources such as databases are available.">多くの場合、アプリケーションでジョブを実行する能力は、アプリケーションのみが認識する条件に依存: たとえば、データベースなどの特定の外部リソースが使用可能かどうかなどです。</span> <span class="merged" id="all.10iDDo.spl2" title="原文 : You can create custom health checks which reflect those conditions and add them to Helidon’s overall health assessment of your application.">これらの条件を反映するカスタム・ヘルス・チェックを作成し、アプリケーションのHelidonの全体的なヘルス評価に追加できます。</span> </p>

<p><span class="merged" id="all.34Ybdx.spl1" title="原文 : A health check is a Java functional interface that returns a new HealthCheckResponse instance each time Helidon queries the health check.">ヘルス・チェックは、Helidonがヘルス・チェックを問い合せるたびに、新しい<code>HealthCheckResponse</code>インスタンスを返すJava関数型インタフェースです。</span> <span class="merged" id="all.34Ybdx.spl2" title="原文 : Each health check also has a fixed name and a fixed health check type (start-up, liveness, or readiness).">各ヘルス・チェックには、固定名と固定ヘルス・チェック・タイプ(起動、リブネスまたはレディネス)もあります。</span> </p>

<p><span class="merged" id="all.2slJTF" title="原文 : Your code registers a custom health check by invoking a method on Helidon-provided types in one of the following ways:">コードでは、次のいずれかの方法でHelidon提供のタイプに対してメソッドを呼び出すことによって、カスタム・ヘルス・チェックが登録されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4dR9Kj" title="原文 : Pass the name and type of the health check and a Supplier of a HealthCheckResponse such as a method reference or a lambda expression.">ヘルス・チェックの名前とタイプ、およびメソッド参照やラムダ式などの<code>HealthCheckResponse</code>の<code>Supplier</code>を渡します。</span></p>

</li>
<li>
<p><span class="merged" id="all.gfdTL" title="原文 : Pass an instance of a class which implements the HealthCheck interface."><code>HealthCheck</code>インタフェースを実装するクラスのインスタンスを渡します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.csguR.spl1" title="原文 : Within an application different techniques might make sense for different custom health checks, depending on the complexity of the logic for computing the status for each check.">アプリケーション内では、各チェックのステータスを計算するロジックの複雑さに応じて、カスタム・ヘルス・チェックごとに異なる手法が意味を持ちます。</span> <span class="merged" id="all.csguR.spl2" title="原文 : The various styles are functionally equivalent; for a given custom health check choose the style which enhances the readability and clarity of your code.">様々なスタイルは機能的に同等です。特定のカスタム・ヘルス・チェックでは、コードの読みやすさとわかりやすさを向上させるスタイルを選択します。</span> <span class="merged" id="all.csguR.spl3" title="原文 : The examples below, in no particular order, implement the same custom health check functionality in different ways to illustrate.">次の例では、特定の順序で、同じカスタム・ヘルス検査機能を異なる方法で実装して説明しています。</span> </p>


<h4 id="_option_1_using_a_healthcheckresponse_supplier_method"><span class="merged" id="all.ONGDT" title="原文 : Option 1: Using a HealthCheckResponse supplier method">オプション1: <code>HealthCheckResponse</code>サプライヤ・メソッドの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.3whpvM" title="原文 : If you gather the logic for computing the health check response into a method, then you can use a method reference to register the health check.">ヘルス・チェック・レスポンスを計算するロジックをメソッドに収集する場合は、メソッド参照を使用してヘルス・チェックを登録できます。</span></p>

<markup
lang="java"
title="Declaring a health check response supplier method"
>static HealthCheckResponse slowStartLivenessResponse() {
    long now = System.currentTimeMillis();
    return HealthCheckResponse.builder()
            .detail("time", now)
            .status(now - serverStartTime &gt;= 8000)
            .build();
}</markup>

<markup
lang="java"
title="Registering a health check using a method reference"
>ObserveFeature observe = ObserveFeature.builder()
        .config(config.get("server.features.observe"))                  <span class="conum" data-value="1" />
        .addObserver(HealthObserver.builder()                           <span class="conum" data-value="2" />
                             .useSystemServices(true)                   <span class="conum" data-value="3" />
                             .addCheck(Main::slowStartLivenessResponse, <span class="conum" data-value="4" />
                                       HealthCheckType.LIVENESS,        <span class="conum" data-value="5" />
                                       "live-after-8-seconds")          <span class="conum" data-value="6" />
                             .build())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1WlAwY" title="原文 : Apply configuration to auto-discovered observers (e.g., health, metrics).">構成を自動検出オブザーバ(ヘルス、メトリクスなど)に適用します。</span></li>
<li data-value="2"><span class="merged" id="all.2lG9sg.spl1" title="原文 : Augment the web server by adding the ObserveFeature containing the HealthObserver."><code>HealthObserver</code>を含む<code>ObserveFeature</code>を追加して、webサーバーを補強します。</span> <span class="merged" id="all.2lG9sg.spl2" title="原文 : This replaces the auto-discovered health observer.">これにより、自動検出されたヘルス・オブザーバが置き換えられます。</span> </li>
<li data-value="3"><span class="merged" id="all.4eokpB" title="原文 : Include the Helidon-supplied health checks.">Helidon提供のヘルス・チェックを含めます。</span></li>
<li data-value="4"><span class="merged" id="all.2oayXs" title="原文 : Add the custom health check, passing a reference to the method which returns the health check responses.">カスタム・ヘルス・チェックを追加し、ヘルス・チェック・レスポンスを返すメソッドへの参照を渡します。</span></li>
<li data-value="5"><span class="merged" id="all.4K0NCE" title="原文 : Set the type of the custom health check.">カスタム・ヘルス・チェックのタイプを設定します。</span></li>
<li data-value="6"><span class="merged" id="all.1090tV" title="原文 : Set the name of the custom health check.">カスタム・ヘルス・チェックの名前を設定します。</span></li>
</ul>

</div>


<h4 id="_option_2_using_an_in_line_lambda_expression"><span class="merged" id="all.1DYzew" title="原文 : Option 2: Using an in-line lambda expression">オプション2: インライン・ラムダ式の使用</span></h4>
<div class="section">
<p><span class="merged" id="all.26vdIo" title="原文 : If the logic for computing the health check response is fairly simple, express it as an in-line lambda when you register the health check.">ヘルス・チェック・レスポンスを計算するロジックが非常に簡単な場合は、ヘルス・チェックの登録時にインライン・ラムダとして表現します。</span></p>

<markup
lang="java"
title="Registering a health check using an in-line lambda expression"
>ObserveFeature observe = ObserveFeature.builder()
        .config(config.get("server.features.observe"))
        .addObserver(HealthObserver.builder()                                              <span class="conum" data-value="1" />
                             .useSystemServices(true) // Include Helidon-provided health checks.
                             .addCheck(() -&gt; HealthCheckResponse.builder()                 <span class="conum" data-value="2" />
                                               .status(System.currentTimeMillis() - serverStartTime &gt;= 8000) <span class="conum" data-value="3" />
                                               .detail("time", System.currentTimeMillis()) <span class="conum" data-value="4" />
                                               .build(),                                   <span class="conum" data-value="5" />
                                       HealthCheckType.READINESS,                          <span class="conum" data-value="6" />
                                       "live-after-8-seconds")                             <span class="conum" data-value="7" />
                            .build())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.38119j" title="原文 : Augment the web server by adding the ObserveFeature containing the HealthObserver."><code>HealthObserver</code>を含む<code>ObserveFeature</code>を追加して、webサーバーを補強します。</span></li>
<li data-value="2"><span class="merged" id="all.374UuB" title="原文 : Add the custom health check passing a lambda expression supplying the health check response.">ヘルス・チェック・レスポンスを提供するラムダ式を渡すカスタム・ヘルス・チェックを追加します。</span></li>
<li data-value="3"><span class="merged" id="all.HXZK0" title="原文 : In the lambda, set the health check response status.">ラムダで、ヘルス・チェックのレスポンス・ステータスを設定します。</span></li>
<li data-value="4"><span class="merged" id="all.4BPJmh" title="原文 : Still in the lambda, set a detail associated with the health check response.">引き続きラムダで、ヘルス・チェック・レスポンスに関連付けられた詳細を設定します。</span></li>
<li data-value="5"><span class="merged" id="all.1Ek3nT" title="原文 : Still in the lambda, build the health check response.">引き続きラムダで、ヘルス・チェック・レスポンスを構築します。</span></li>
<li data-value="6"><span class="merged" id="all.4K0NCE.1" title="原文 : Set the type of the custom health check.">カスタム・ヘルス・チェックのタイプを設定します。</span></li>
<li data-value="7"><span class="merged" id="all.1090tV.1" title="原文 : Set the name of the custom health check.">カスタム・ヘルス・チェックの名前を設定します。</span></li>
</ul>

<p><span class="merged" id="all.2CJZEh" title="原文 : Note that the logic in the lambda expression runs every time Helidon probes the added health check, so the values passed to status and detail are recomputed every time.">ラムダ式のロジックは、Helidonが追加されたヘルス・チェックをプローブするたびに実行されるため、<code>status</code>および<code>detail</code>に渡された値は毎回再計算されます。</span></p>

</div>


<h4 id="_option_3_using_a_healthcheck_instance"><span class="merged" id="all.1VpK4R" title="原文 : Option 3: Using a HealthCheck Instance">オプション3: <code>HealthCheck</code>インスタンスの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.jlm1V.spl1" title="原文 : If a custom health check requires a lot of information to compute its health check response, it might be clearest to implement it as a class that implements the HealthCheck interface.">カスタム・ヘルス・チェックでヘルス・チェックのレスポンスをコンピュートするために多くの情報が必要な場合は、<code>HealthCheck</code>インタフェースを実装するクラスとして実装することが最も賢明である場合があります。</span> <span class="merged" id="all.jlm1V.spl2" title="原文 : Your code instantiates the class with all the information, including references to other data, it might need to compute the response each time Helidon probes it.">コードは、他のデータへの参照を含むすべての情報を使用してクラスをインスタンス化し、Helidonがそれをプローブするたびにレスポンスをコンピュートする必要がある場合があります。</span> </p>

<p><span class="merged" id="all.1daLt2" title="原文 : This example is not complicated in that way but it’s useful to illustrate this technique of writing a custom health check.">この例はそれほど複雑ではありませんが、カスタム・ヘルス・チェックを記述するこの手法を示すと便利です。</span></p>

<markup
lang="java"
title="Declaring a concrete <code>HealthCheck</code> implementation"
>/**
 * A custom readiness health check that reports UP 8 seconds after server start-up.
 */
class SlowStartHealthCheck implements HealthCheck {     <span class="conum" data-value="1" />

    @Override
    public HealthCheckType type() {
        return HealthCheckType.READINESS;               <span class="conum" data-value="2" />
    }

    @Override
    public HealthCheckResponse call() {
        long now = System.currentTimeMillis();
        return HealthCheckResponse.builder()
                .detail("time", now)                    <span class="conum" data-value="3" />
                .status(now - serverStartTime &gt;= 8000)  <span class="conum" data-value="4" />
                .build();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2vnqHh.spl1" title="原文 : Implement the io.helidon.health.HealthCheck interface."><code>io.helidon.health.HealthCheck</code>インタフェースを実装します。</span> <span class="merged" id="all.2vnqHh.spl2" title="原文 : The default health check name is the simple class name of the implementing class.">デフォルトのヘルス・チェック名は、実装クラスの単純なクラス名です。</span> <span class="merged" id="all.2vnqHh.spl3" title="原文 : Your code can override the name() method to return a different name.">コードで<code>name()</code>メソッドをオーバーライドして、別の名前を返すことができます。</span> <span class="merged" id="all.2vnqHh.spl4" title="原文 : (Not shown in this example)">(この例では示されていません)</span> </li>
<li data-value="2"><span class="merged" id="all.bE8tp" title="原文 : The default health check type is LIVENESS so this implementation overrides type() to declare a READINESS check.">デフォルトのヘルス・チェック・タイプは<code>LIVENESS</code>であるため、この実装は<code>type()</code>をオーバーライドして<code>READINESS</code>チェックを宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.2kBon7" title="原文 : Sets a detail value time associated with the response to the current time.">現在の時間へのレスポンスに関連付けられた詳細値<code>time</code>を設定します。</span></li>
<li data-value="4"><span class="merged" id="all.lCsmq" title="原文 : Reports DOWN until at least eight seconds have passed since the server start-up, then reports UP thereafter.">サーバーの起動から少なくとも8秒経過するまで<code>DOWN</code>をレポートし、その後<code>UP</code>をレポートします。</span></li>
</ul>

<markup
lang="java"
title="Registering a <code>HealthCheck</code> instance"
>ObserveFeature observe = ObserveFeature.builder()
        .config(config.get("server.features.observe"))
        .addObserver(HealthObserver.builder()                     <span class="conum" data-value="1" />
                            .addCheck(new SlowStartHealthCheck()) <span class="conum" data-value="2" />
                            .build())
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.38119j.1" title="原文 : Augment the web server by adding the ObserveFeature containing the HealthObserver."><code>HealthObserver</code>を含む<code>ObserveFeature</code>を追加して、webサーバーを補強します。</span></li>
<li data-value="2"><span class="merged" id="all.JrdCH" title="原文 : Instantiate the custom health check class and add the instance to the HealthObserver.">カスタム・ヘルス・チェック・クラスをインスタンス化し、インスタンスを<code>HealthObserver</code>に追加します。</span></li>
</ul>

</div>


<h4 id="_adding_observability_including_the_custom_health_checks_to_helidon"><span class="merged" id="all.41T0S3" title="原文 : Adding Observability (including the Custom Health Checks) to Helidon">可観測性(カスタム・ヘルス・チェックを含む)のHelidonへの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3vBJmQ.spl1" title="原文 : The code examples above prepare the observe feature instance using the built-in and custom health checks.">前述のコード例では、組込みおよびカスタム・ヘルス・チェックを使用して<code>observe</code>機能インスタンスを準備します。</span> <span class="merged" id="all.3vBJmQ.spl2" title="原文 : To activate the health subsystem and other auto-discovered observability subsystems, add that observe instance as a feature to the webserver and start the server.">ヘルス・サブシステムおよびその他の自動検出可観測性サブシステムをアクティブ化するには、その<code>observe</code>インスタンスを機能としてwebサーバーに追加し、サーバーを起動します。</span> </p>

<markup
lang="java"
title="Register the observe feature with the server and start it"
>WebServer server = WebServer.builder()
        .featuresDiscoverServices(false)
        .addFeature(observe) <span class="conum" data-value="1" />
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4W3B9v" title="原文 : Add the previously-prepared health observer to the server as a feature">以前に準備したヘルス・オブザーバを機能としてサーバーに追加</span></li>
</ul>

</div>


<h4 id="_triggering_and_interpreting_health_check_output"><span class="merged" id="all.clDhX" title="原文 : Triggering and Interpreting Health Check Output">ヘルス・チェック出力のトリガーと解釈</span></h4>
<div class="section">
<p><span class="merged" id="all.4Aebo0.spl1" title="原文 : Health support in Helidon is part of Helidon’s observability feature.">Helidonのヘルス・サポートは、Helidonの可観測性機能の一部です。</span> <span class="merged" id="all.4Aebo0.spl2" title="原文 : HealthObserver is a Helidon-provided observability implementation that contains a collection of registered HealthCheck instances and, when queried, invokes the registered health checks and returns a response with a status code representing the overall status of the application."><code>HealthObserver</code>は、登録された<code>HealthCheck</code>インスタンスのコレクションを含むHelidon提供の可観測性実装で、クエリー時に登録されたヘルス・チェックを起動し、アプリケーションの全体的なステータスを表すステータス・コードを含むレスポンスを返します。</span> </p>

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

<p><span class="merged" id="all.31vPfi.spl1" title="原文 : You control, either using configuration or adding code to your application, whether the HTTP responses to GET requests contain detailed information about each health check.">構成を使用するか、アプリケーションにコードを追加するかのいずれかで、<code>GET</code>リクエストへのHTTPレスポンスに各ヘルス・チェックに関する詳細情報が含まれるかどうかを制御します。</span> <span class="merged" id="all.31vPfi.spl2" title="原文 : With details enabled, HTTP GET responses include JSON content showing the detailed results of all the health checks which the server executed after receiving the request.">詳細が有効な場合、HTTP <code>GET</code>レスポンスには、リクエストを受信した後にサーバーが実行したすべてのヘルス・チェックの詳細な結果を示すJSONコンテンツが含まれます。</span> <span class="merged" id="all.31vPfi.spl3" title="原文 : With details disabled, HTTP GET responses have no payload.">詳細が無効になっている場合、HTTP <code>GET</code>レスポンスにはペイロードがありません。</span> <span class="merged" id="all.31vPfi.spl4" title="原文 : HTTP HEAD requests always return only the status with no payload.">HTTP <code>HEAD</code>リクエストは常に、ペイロードのないステータスのみを返します。</span> </p>

<p><span class="merged" id="all.4MWe0s.spl1" title="原文 : If you add the Helidon health dependency to your pom.xml file, Helidon automatically registers the HelidonObserver service and responds to the default /observe/health endpoint.">Helidonヘルス依存関係を<code>pom.xml</code>ファイルに追加すると、Helidonは<code>HelidonObserver</code>サービスを自動的に登録し、デフォルトの<code>/observe/health</code>エンドポイントに応答します。</span> <span class="merged" id="all.4MWe0s.spl2" title="原文 : Further, if you add the built-in health checks dependency, Helidon automatically finds them and adds those checks to the HealthObserver.">さらに、組込みヘルス・チェックの依存関係を追加すると、Helidonによって自動的に検出され、それらのチェックが<code>HealthObserver</code>に追加されます。</span> </p>

<p><span class="merged" id="all.1PkGIM.spl1" title="原文 : Below are parts of health responses which include the custom health check added in the earlier example code.">ヘルス・レスポンスの一部を次に示します。これには、前のサンプル・コードで追加したカスタム・ヘルス・チェックが含まれます。</span> <span class="merged" id="all.1PkGIM.spl2" title="原文 : This first response shows the health output within the first eight seconds after start-up.">この最初のレスポンスは、起動後の最初の8秒以内のヘルス出力を示します。</span> <span class="merged" id="all.1PkGIM.spl3" title="原文 : Recall that the custom health check will report DOWN during that time, so the overall health is DOWN and the HTTP response status is 503 Service Unavailable.">カスタム・ヘルス・チェックでは、その間に<code>DOWN</code>がレポートされるため、全体的なヘルスは<code>DOWN</code>で、HTTPレスポンス・ステータスは<code>503 Service Unavailable</code>です。</span> </p>

<markup
lang="json"
title="Response within 8 seconds: HTTP status 503 (not healthy)"
>{
  "status": "DOWN",
  "checks": [
    {
      "name": "live-after-8-seconds",
      "status": "DOWN",
      "data": {
        "time": 1701984253071
      }
    },
...
}</markup>

<p><span class="merged" id="all.2qHVt5.spl1" title="原文 : The next response shows the health output once the server has been running for at least eight seconds.">次のレスポンスは、サーバーが少なくとも8秒間稼働したあとのヘルス出力を示します。</span> <span class="merged" id="all.2qHVt5.spl2" title="原文 : The custom health check now reports UP so the overall health status is also UP now and the HTTP status is 200.">カスタム・ヘルス・チェックで<code>UP</code>がレポートされるようになったため、全体的なヘルス・ステータスも<code>UP</code>になり、HTTPステータスは<code>200</code>になります。</span> </p>

<markup
lang="json"
title="Response after 8 seconds: HTTP status 200"
>{
  "status": "UP",
  "checks": [
    {
      "name": "live-after-8-seconds",
      "status": "UP",
      "data": {
        "time": 1701984258292
      }
    },</markup>

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
<td class=""><span class="merged" id="all.1SvVw"  title="原文: io.helidon.health.HealthCheck"><code>io.helidon.health.HealthCheck</code></span></td>
<td class=""><span class="merged" id="all.DGk2Q" title="原文 : Java functional interface representing the logic of a single health check">単一のヘルス・チェックのロジックを表すJava機能インタフェース</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15rAKu"  title="原文: io.helidon.health.HealthCheckResponse"><code>io.helidon.health.HealthCheckResponse</code></span></td>
<td class=""><span class="merged" id="all.1pHtVo" title="原文 : Result of a health check invocation that contains a status">ステータスを含むヘルス・チェック呼出しの結果</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1w6WkW"  title="原文: io.helidon.webserver.observe.health.HealthObserver"><code>io.helidon.webserver.observe.health.HealthObserver</code></span></td>
<td class=""><span class="merged" id="all.u2v5Q" title="原文 : WebServer service that exposes /observe/health and invokes the registered health checks"><code>/observe/health</code>を公開し、登録済ヘルス・チェックを起動するWebServerサービス</span></td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h3 id="built-in-health-checks-table"><span class="merged" id="all.2ulaj8" title="原文 : Built-In Health Checks">組込みヘルス・チェック</span></h3>
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
<th><span class="merged" id="all.171X7b" title="原文 : Config properties (within server.features.observe.observers.health)">構成プロパティ(<code>server.features.observe.observers.health</code>内)</span></th>
<th><span class="merged" id="all.4g6EDY" title="原文 : Default config value">デフォルトの構成値</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1WzrZM.3" title="原文 : deadlock detection">デッドロックの検出</span></td>
<td class=""><span class="merged" id="all.2wT1L3"  title="原文: deadlock"><code>deadlock</code></span></td>
<td class=""><span class="merged" id="all.1r7w08" title="原文 : DeadlockHealthCheck"><a href="/apidocs/io.helidon.health.checks/io/helidon/health/checks/DeadlockHealthCheck.html" target="_blank"><code>DeadlockHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.2jtIAF.6"  title="原文:: n/a">該当なし</span></td>
<td class=""><span class="merged" id="all.2jtIAF.7"  title="原文:: n/a">該当なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FevQJ.3" title="原文 : available disk space">使用可能なディスク領域</span></td>
<td class=""><span class="merged" id="all.3SPrim"  title="原文: diskSpace"><code>diskSpace</code></span></td>
<td class=""><span class="merged" id="all.1f5a4d" title="原文 : DiskSpaceHealthCheck"><a href="/apidocs/io.helidon.health.checks/io/helidon/health/checks/DiskSpaceHealthCheck.html" target="_blank"><code>DiskSpaceHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.4b1gie" title="原文 : helidon.health.diskSpace.thresholdPercent + helidon.health.diskSpace.path"><code>helidon.health.diskSpace.thresholdPercent</code><br> + <code>helidon.health.diskSpace.path</code></span></td>
<td class=""><span class="merged" id="all.4egeO1" title="原文 : 99.999 + /"><code>99.999</code><br> + <code>/</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lRV6E.3" title="原文 : available heap memory">使用可能なヒープ・メモリー</span></td>
<td class=""><span class="merged" id="all.2g6BBF"  title="原文: heapMemory"><code>heapMemory</code></span></td>
<td class=""><span class="merged" id="all.3FLEaN" title="原文 : HeapMemoryHealthCheck"><a href="/apidocs/io.helidon.health.checks/io/helidon/health/checks/HeapMemoryHealthCheck.html" target="_blank"><code>HeapMemoryHealthCheck</code></a></span></td>
<td class=""><span class="merged" id="all.1qtChZ"  title="原文: helidon.health.heapMemory.thresholdPercent"><code>helidon.health.heapMemory.thresholdPercent</code></span></td>
<td class=""><span class="merged" id="all.2sTu8i"  title="原文: 98"><code>98</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.30h1z7.spl1" title="原文 : Simply adding the built-in health check dependency is sufficient to register all the built-in health checks automatically.">組み込みのヘルス検査の依存関係を追加するだけで、すべての組み込みヘルス検査を自動的に登録できます。</span> <span class="merged" id="all.30h1z7.spl2" title="原文 : If you want to use only some of the built-in checks in your application, you can disable automatic discovery of the built-in health checks and register only the ones you want.">アプリケーションでビルトイン・チェックの一部のみを使用する場合は、ビルトイン・ヘルス・チェックの自動検出を無効にして、必要なもののみを登録できます。</span> </p>

<p><span class="merged" id="all.4MZO6q" title="原文 : The following code adds only selected built-in health checks to your application:">次のコードは、選択した組込みヘルス・チェックのみをアプリケーションに追加します:</span></p>

<markup
lang="java"
title="Adding selected built-in health checks"
>WebServer server = WebServer.builder()
        .config(config.get("server"))
        .addFeature(ObserveFeature.create(HealthObserver.builder()
                                                  .useSystemServices(false) <span class="conum" data-value="1" />
                                                  .addCheck(HealthChecks.deadlockCheck()) <span class="conum" data-value="2" />
                                                  .addCheck(hc) <span class="conum" data-value="3" />
                                                  .details(true)
                                                  .build()))
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4eoCsd" title="原文 : Disables automatic registration of the built-in health checks.">組み込みのヘルス検査の自動登録を無効にします。</span></li>
<li data-value="2"><span class="merged" id="all.47NtVS" title="原文 : Adds the specific built-in check(s) you want.">必要な特定のビルトイン・チェックを追加します。</span></li>
<li data-value="3"><span class="merged" id="all.DFOC2" title="原文 : Adds a custom check (in a previously-prepared variable hc).">カスタム・チェックを追加します(事前に準備された変数<code>hc</code>内)。</span></li>
</ul>

<p><span class="merged" id="all.2k2BR6" title="原文 : You can control the thresholds for built-in health checks in either of two ways:">組込みヘルス・チェックのしきい値は、次のいずれかの方法で制御できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2sfvBb.spl1" title="原文 : Create the health checks individually using their builders instead of using the HealthChecks convenience class."><code>HealthChecks</code>コンビニエンス・クラスを使用するかわりに、そのビルダーを使用してヘルス・チェックを個別に作成します。</span> <span class="merged" id="all.2sfvBb.spl2" title="原文 : Follow the JavaDoc links in the table above.">前述の<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>のJavaDocリンクに従います。</span> </p>

</li>
<li>
<p><span class="merged" id="all.139Ee5" title="原文 : Using configuration as explained in Configuration."><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">「構成」</router-link>の説明に従って、構成を使用します。</span></p>

</li>
</ul>

</div>


<h3 id="_kubernetes_probes"><span class="merged" id="all.qywa8" title="原文 : Kubernetes Probes">Kubernetesプローブ</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1IlKVj" title="原文 : Liveness Probe"><router-link @click.native="this.scrollFix('#_liveness_probe')" to="#_liveness_probe">リブネス・プローブ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3Kkt0O" title="原文 : Readiness Probe"><router-link @click.native="this.scrollFix('#_readiness_probe')" to="#_readiness_probe">レディネス・プローブ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.GMDZ0" title="原文 : Startup Probe"><router-link @click.native="this.scrollFix('#_startup_probe')" to="#_startup_probe">起動プローブ</router-link></span></p>

</li>
</ul>

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


<h4 id="_liveness_probe"><span class="merged" id="all.kUJOV" title="原文 : Liveness Probe">リブネス・プローブ</span></h4>
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


<h4 id="_readiness_probe"><span class="merged" id="all.41Hkc5" title="原文 : Readiness Probe">レディネス・プローブ</span></h4>
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


<h4 id="_startup_probe"><span class="merged" id="all.2aCaiG"  title="原文:: Startup Probe">起動プローブ</span></h4>
<div class="section">
<p><span class="merged" id="all.3vyrO.spl1" title="原文 : The startup probe prevents Kubernetes from prematurely checking the other probes if the application takes a long time to start.">起動プローブを使用すると、アプリケーションの起動に時間がかかる場合に、Kubernetesが他のプローブを早期にチェックできなくなります。</span> <span class="merged" id="all.3vyrO.spl2" title="原文 : Otherwise, Kubernetes might misinterpret a failed liveness or readiness probe and shut down the container when, in fact, the application is still coming up.">それ以外の場合、Kubernetesは、障害が発生したリブネスやレディネス・プローブを誤って解釈し、実際にアプリケーションが起動しているときにコンテナをシャットダウンすることがあります。</span> </p>

</div>

</div>


<h3 id="_troubleshooting_probes"><span class="merged" id="all.1INQND" title="原文 : Troubleshooting Probes">プローブのトラブルシューティング</span></h3>
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


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.36"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.14uN3D.spl1" title="原文 : Built-in health checks can be configured using the config property keys described in this table.">組込みのヘルス・チェックは、この<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>で説明されている構成プロパティ・キーを使用して構成できます。</span> <span class="merged" id="all.14uN3D.spl2" title="原文 : Further, you can suppress one or more of the built-in health checks by setting the configuration item helidon.health.exclude to a comma-separated list of the health check names (from this table) you want to exclude.">さらに、1つ以上の組込みヘルス・チェックを抑制するには、除外するヘルス・チェック名のカンマ区切りリスト(この<router-link @click.native="this.scrollFix('#built-in-health-checks-table')" to="#built-in-health-checks-table">table</router-link>)に構成アイテム<code>helidon.health.exclude</code>を設定します。</span> </p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.32"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_json_response_example"><span class="merged" id="all.B8gGS" title="原文 : JSON Response Example">JSONレスポンスの例</span></h3>
<div class="section">
<p><span class="merged" id="all.mbkxF" title="原文 : Accessing the Helidon-provided /observe/health endpoint reports the health of your application as shown below:">Helidon-provided <code>/observe/health</code>エンドポイントにアクセスすると、次に示すようにアプリケーションの健全性がレポートされます:</span></p>

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


<h3 id="_kubernetes_example"><span class="merged" id="all.1H9LQ8" title="原文 : Kubernetes Example">Kubernetesの例</span></h3>
<div class="section">
<p><span class="merged" id="all.MHIww.spl1" title="原文 : This example shows the usage of the Helidon health API in an application that implements health endpoints for the liveness and readiness probes.">この例では、リブネスおよびレディネス・プローブのヘルス・エンドポイントを実装するアプリケーションでのHelidonヘルスAPIの使用方法を示します。</span> <span class="merged" id="all.MHIww.spl2" title="原文 : Note that the application code dissociates the health endpoints from the default routes, so that the health endpoints are not exposed by the service.">アプリケーション・コードは、ヘルス・エンドポイントがサービスによって公開されないように、ヘルス・エンドポイントとデフォルト・ルートの関連付けを解除します。</span> <span class="merged" id="all.MHIww.spl3" title="原文 : An example YAML specification is also provided for the Kubernetes service and deployment.">KubernetesサービスおよびデプロイメントのYAML仕様の例も示します。</span> </p>

<markup
lang="java"
title="Application code:"
>ObserveFeature observeFeature = ObserveFeature.builder()
    .addObserver(HealthObserver.builder()
                         .useSystemServices(false)
                         .endpoint("/health/live") <span class="conum" data-value="1" />
                         .addChecks(HealthChecks.healthChecks()) <span class="conum" data-value="2" />
                         .build())
    .addObserver(HealthObserver.builder()
                         .useSystemServices(false)
                         .endpoint("/health/ready") <span class="conum" data-value="3" />
                         .addCheck(() -&gt; HealthCheckResponse.builder() <span class="conum" data-value="4" />
                                      .status(true)
                                      .build(),
                              HealthCheckType.READINESS,
                              "database")
                         .build())
    .build();
WebServer server = WebServer.builder()
    .putSocket("@default", socket -&gt; socket
        .port(8080) <span class="conum" data-value="5" />
        .routing(r -&gt; r.any((req, res) -&gt; res.send("It works!")))) <span class="conum" data-value="6" />
    .putSocket("observe", socket -&gt; socket
        .port(8081) <span class="conum" data-value="7" />
        .routing(r -&gt; r.addFeature(observeFeature))) <span class="conum" data-value="8" />
    .build()
    .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2nniPg" title="原文 : The health service for the liveness probe is exposed at /observe/health/live."><code>liveness</code>プローブのヘルス・サービスは、<code>/observe/health/live</code>で公開されます。</span></li>
<li data-value="2"><span class="merged" id="all.2R7LFb" title="原文 : Using the built-in health checks for the liveness probe."><code>liveness</code>プローブの組込みヘルス・チェックの使用。</span></li>
<li data-value="3"><span class="merged" id="all.28a2u1" title="原文 : The health service for the readiness probe is exposed at /observe/health/ready."><code>readiness</code>プローブのヘルス・サービスは、<code>/observe/health/ready</code>で公開されます。</span></li>
<li data-value="4"><span class="merged" id="all.2jf1r6" title="原文 : Using a custom health check for a pseudo database that is always UP.">常に<code>UP</code>である擬似データベースにカスタム・ヘルス・チェックを使用します。</span></li>
<li data-value="5"><span class="merged" id="all.g6sBX" title="原文 : The default socket uses port 8080 for the default routes.">デフォルトのソケットでは、デフォルトのルートにポート8080が使用されます。</span></li>
<li data-value="6"><span class="merged" id="all.1RuDfg" title="原文 : The default route: returns It works! for any request.">デフォルト・ルート: 、すべてのリクエストに対してIt works!を返します。</span></li>
<li data-value="7"><span class="merged" id="all.15U4r4" title="原文 : The observe socket uses port 8081 for the &quot;/observe&quot; routes."><code>observe</code>ソケットは、/observeルートにポート8081を使用します。</span></li>
<li data-value="8"><span class="merged" id="all.4W9hkJ" title="原文 : Route the observe feature exclusively on the observe socket."><code>observe</code>機能を<code>observe</code>ソケットに排他的にルーティングします。</span></li>
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
            path: /observe/health/live <span class="conum" data-value="3" />
            port: 8081
          initialDelaySeconds: 3 <span class="conum" data-value="4" />
          periodSeconds: 10
          timeoutSeconds: 3
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /observe/health/ready <span class="conum" data-value="5" />
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


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.23"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3UtOIN" title="原文 : Health Checks SE API JavaDocs."><a href="/apidocs/io.helidon.health.checks/module-summary.html" target="_blank">Health Checks SE API JavaDocs</a>。</span></p>

</li>
</ul>

</div>

</doc-view>
