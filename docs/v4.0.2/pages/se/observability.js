<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.63"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.62" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.45" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.40" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.36" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.26" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.21" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.78"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2VXIrU.spl1" title="原文 : In Helidon 4 all observability features were moved to one logical module: observe.">Helidon 4では、すべての可観測性機能が1つの論理モジュールに移動されました: <code>observe</code>。</span> <span class="merged" id="all.2VXIrU.spl2" title="原文 : The observability support groups all observe endpoints together under a single context root (the default behavior) /observe.">可観測性サポートでは、すべての監視エンドポイントが単一のコンテキスト・ルート(デフォルトの動作)<code>/observe</code>の下にまとめられます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.55"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1qbh9u" title="原文 : To enable Helidon Observability add the following dependency to your project’s pom.xml (see Managing Dependencies).">Helidon可観測性を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照してください)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.16vqAf" title="原文 : For Health Observability features:">ヘルス可観測性の機能の場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1egODm" title="原文 : For Metrics Observability features:">メトリクス可観測性機能の場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2K4IrZ" title="原文 : For Info Observability features:">情報可観測性機能の場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-info&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.J3Sg2" title="原文 : For Logging Observability features:">可観測性のログ機能の場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-log&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.58"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.zUwIe.spl1" title="原文 : Each provider usually adds a new endpoint (such as health, metrics).">通常、各プロバイダは新しいエンドポイントを追加します(<code>health</code>、<code>metrics</code>など)。</span> <span class="merged" id="all.zUwIe.spl2" title="原文 : This is to have a single easily configurable path for security, proxy etc. purposes, rather than expose multiple &quot;root&quot; endpoints that may collide with the business code.">これは、ビジネス・コードと競合する可能性のある複数のルート・エンドポイントを公開するのではなく、セキュリティやプロキシなどの目的で簡単に構成できる単一のパスを持つことです。</span> </p>


<h3 id="_discovery"><span class="merged" id="all.3vs3fI"  title="原文:: Discovery">検出</span></h3>
<div class="section">
<p><span class="merged" id="all.110Pi8.spl1" title="原文 : ObserveProvider instances are discovered using ServiceLoader."><code>ObserveProvider</code>インスタンスは、<code>ServiceLoader</code>を使用して検出されます。</span> <span class="merged" id="all.110Pi8.spl2" title="原文 : In case an explicit Observer is registered with the same type as a provider, the provider will not be used (so we do not duplicate services).">明示的な<code>Observer</code>がプロバイダと同じ<code>type</code>に登録されている場合、プロバイダは使用されません(そのため、サービスを複製しません)。</span> </p>

</div>


<h3 id="_endpoints"><span class="merged" id="all.1jmFZj"  title="原文:: Endpoints">エンドポイント</span></h3>
<div class="section">
<p><span class="merged" id="all.4T7A0Y.spl1" title="原文 : The &quot;Observe&quot; service endpoint can be modified on the ObserveFeature that is registered with routing.">「監視」サービス・エンドポイントは、ルーティングに登録されている<code>ObserveFeature</code>で変更できます。</span> <span class="merged" id="all.4T7A0Y.spl2" title="原文 : The feature endpoint defaults to /observe, and all observers are prefixed with it (see further)">機能エンドポイントのデフォルトは<code>/observe</code>で、すべてのオブザーバのプレフィクスが付けられます(詳細を参照)</span> </p>

<p><span class="merged" id="all.4RVGdz.spl1" title="原文 : Each observer has customizable endpoints as well, and the result is decided as follows: 1.">各オブザーバには、カスタマイズ可能なエンドポイントもあり、結果は次のように決定されます。1。</span> <span class="merged" id="all.4RVGdz.spl2" title="原文 : If the custom endpoint is relative, the result would be under observe endpoint (e.g. for health → /observe/health) 2.">カスタム・エンドポイントが相対的な場合、結果はobserveエンドポイント(<code>health</code>→ <code>/observe/health</code>など) 2の下になります。</span> <span class="merged" id="all.4RVGdz.spl3" title="原文 : If the custom endpoint is absolute, the result would be absolute as well (e.g. for /health → /health)">カスタム・エンドポイントが絶対である場合、結果も絶対になります(<code>/health</code>→<code>/health</code>など)</span> </p>


<h4 id="_configuration_observability"><span class="merged" id="all.1dXrHL" title="原文 : Configuration Observability">構成可観測性</span></h4>
<div class="section">
<p><span class="merged" id="all.2MCdt8.spl1" title="原文 : Configuration observability allows reading the current application configuration values.">構成可観測性により、現在のアプリケーション構成値を読み取ることができます。</span> <span class="merged" id="all.2MCdt8.spl2" title="原文 : Configuration observability defines the following endpoints:">構成の可観測性によって、次のエンドポイントが定義されます:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.17UXYD"  title="原文:: Endpoint">エンドポイント</span></th>
<th><span class="merged" id="all.1e8dVO.5"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.1B5r9w"  title="原文:: Action">Action</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2dTzbh"  title="原文: /config/profile"><code>/config/profile</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.1IIckH" title="原文 : Returns the current configuration profile">現在の構成プロファイルを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1aghN3"  title="原文: /config/values"><code>/config/values</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.1"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.4QNFl" title="原文 : Returns the current configuration values">現在の構成値を戻します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.gEVvp"  title="原文: /config/values/{name}"><code>/config/values/{name}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.2"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.ETOxE" title="原文 : Returns specified by name configuration value"><code>name</code>構成値で指定された戻り値</span></td>
</tr>
</tbody>
</table>
</div>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3hQ7SZ" title="原文 : All secrets and passwords are obfuscated with &quot;*&quot; characters.">すべてのシークレットおよびパスワードは"*"文字で難読化されます。</span></p>
</div>

</div>


<h4 id="_health_observability"><span class="merged" id="all.1Gdubi" title="原文 : Health Observability">ヘルス可観測性</span></h4>
<div class="section">
<p><span class="merged" id="all.3YJott.spl1" title="原文 : Health observability allows reading application readiness to serve requests, whether the services are alive.">ヘルスの可観測性により、アプリケーションのレディネスを読み取って、サービスが稼働しているかどうかにかかわらず、リクエストを処理できます。</span> <span class="merged" id="all.3YJott.spl2" title="原文 : Health observability defines the following endpoints:">ヘルス可観測性では、次のエンドポイントが定義されます:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.17UXYD.1"  title="原文:: Endpoint">エンドポイント</span></th>
<th><span class="merged" id="all.1e8dVO.6"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.1B5r9w.1"  title="原文:: Action">Action</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4KYGxM.1"  title="原文: /health/ready"><code>/health/ready</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.3"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.2n82fN" title="原文 : Returns Service Readiness">サービス・レディネスを戻す</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.31WLAB.1"  title="原文: /health/live"><code>/health/live</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.4"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.2orCMz" title="原文 : Returns whether the service is alive">サービスが存続しているかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3cdimM.1"  title="原文: /health/started"><code>/health/started</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.5"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.1dPtD" title="原文 : Returns whether the service is started">サービスが開始されているかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IGOEw"  title="原文: /health/ready/{name}"><code>/health/ready/{name}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.6"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.131GIx" title="原文 : Returns Service name Readiness">サービス<code>name</code>レディネスを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kXLa"  title="原文: /health/live/{name}"><code>/health/live/{name}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.7"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.Zp1W4" title="原文 : Returns whether the service name is alive">サービス<code>name</code>が存続しているかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nIMfE"  title="原文: /health/started/{name}"><code>/health/started/{name}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.8"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.2CPhPd" title="原文 : Returns whether the service name is started">サービス<code>name</code>が開始されているかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jmYdv"  title="原文: /health/check/{name}"><code>/health/check/{name}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.9"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.3bs1Zm" title="原文 : Returns all checks for service name">サービス<code>name</code>のすべてのチェックを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4KYGxM.2"  title="原文: /health/ready"><code>/health/ready</code></span></td>
<td class=""><span class="merged" id="all.401jUm"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.3hqSSR" title="原文 : Returns Service Readiness without details">詳細なしでサービス・レディネスを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.31WLAB.2"  title="原文: /health/live"><code>/health/live</code></span></td>
<td class=""><span class="merged" id="all.401jUm.1"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.1uLDYR" title="原文 : Returns whether the service is alive without details">サービスが詳細なしで存続しているかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3cdimM.2"  title="原文: /health/started"><code>/health/started</code></span></td>
<td class=""><span class="merged" id="all.401jUm.2"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.22hilw" title="原文 : Returns whether the service is started without details">サービスが詳細なしで開始されたかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IGOEw.1"  title="原文: /health/ready/{name}"><code>/health/ready/{name}</code></span></td>
<td class=""><span class="merged" id="all.401jUm.3"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.4OJZCV" title="原文 : Returns Service name Readiness without details">詳細なしでサービス<code>name</code>レディネスを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kXLa.1"  title="原文: /health/live/{name}"><code>/health/live/{name}</code></span></td>
<td class=""><span class="merged" id="all.401jUm.4"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.4copDx" title="原文 : Returns whether the service name is alive without details">サービス<code>name</code>が詳細なしで存続しているかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nIMfE.1"  title="原文: /health/started/{name}"><code>/health/started/{name}</code></span></td>
<td class=""><span class="merged" id="all.401jUm.5"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.2li1Vm" title="原文 : Returns whether the service name is started without details">サービス<code>name</code>が詳細なしで起動されるかどうかを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jmYdv.1"  title="原文: /health/check/{name}"><code>/health/check/{name}</code></span></td>
<td class=""><span class="merged" id="all.401jUm.6"  title="原文: HEAD"><code>HEAD</code></span></td>
<td class=""><span class="merged" id="all.hFWGi" title="原文 : Returns all checks for service name without details">サービス<code>name</code>のすべてのチェックを詳細なしで返します</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1YHnTd" title="原文 : For more information, please, check Health documentation.">詳細は、<router-link to="/se/health">「ヘルス」</router-link>のドキュメントを参照してください。</span></p>

</div>


<h4 id="_information_observability"><span class="merged" id="all.4JQ3BT" title="原文 : Information Observability">情報可観測性</span></h4>
<div class="section">
<p><span class="merged" id="all.vlZej.spl1" title="原文 : Info observability allows configuration of custom properties to be available to users.">情報可観測性により、ユーザーがカスタム・プロパティを構成できます。</span> <span class="merged" id="all.vlZej.spl2" title="原文 : Information observability defines the following endpoints:">情報可観測性によって、次のエンドポイントが定義されます:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.17UXYD.2"  title="原文:: Endpoint">エンドポイント</span></th>
<th><span class="merged" id="all.1e8dVO.7"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.1B5r9w.2"  title="原文:: Action">Action</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3Mxv5p"  title="原文: /info"><code>/info</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.10"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.3ovUzB" title="原文 : Returns the Application information">アプリケーション情報を返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bbsLA"  title="原文: /info/{name}"><code>/info/{name}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.11"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.2oQ6jA" title="原文 : Returns the Application information for the specified name">指定された<code>name</code>のアプリケーション情報を返します</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_logger_observability"><span class="merged" id="all.32yMTG" title="原文 : Logger Observability">ロガーの可観測性</span></h4>
<div class="section">
<p><span class="merged" id="all.bzzqn.spl1" title="原文 : Log observability allows reading and configuring of log levels of various loggers and reading log messages.">ログの可観測性により、様々なロガーのログ・レベルの読取りと構成、およびログ・メッセージの読取りが可能になります。</span> <span class="merged" id="all.bzzqn.spl2" title="原文 : Logger Observability defines the following endpoints:">ロガー可観測性は、次のエンドポイントを定義します:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.17UXYD.3"  title="原文:: Endpoint">エンドポイント</span></th>
<th><span class="merged" id="all.1e8dVO.8"  title="原文:: Method">メソッド</span></th>
<th><span class="merged" id="all.1B5r9w.3"  title="原文:: Action">Action</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.pEKd3"  title="原文: /log"><code>/log</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.12"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.XAGzz" title="原文 : Stream logs (if enabled)">ストリーム・ログ(有効な場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3tAvzu"  title="原文: /log/loggers"><code>/log/loggers</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.13"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.4gIT1r" title="原文 : Returns all logger handlers">すべてのロガー・ハンドラを返します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ytrsY"  title="原文: /log/log/loggers/{logger}"><code>/log/log/loggers/{logger}</code></span></td>
<td class=""><span class="merged" id="all.3SYmFo.14"  title="原文: GET"><code>GET</code></span></td>
<td class=""><span class="merged" id="all.1VHGoK" title="原文 : Returns the Logger by name logger"><code>logger</code>という名前でロガーを戻します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xPwhB"  title="原文: /log/loggers/{logger}"><code>/log/loggers/{logger}</code></span></td>
<td class=""><span class="merged" id="all.jJLJL"  title="原文: POST"><code>POST</code></span></td>
<td class=""><span class="merged" id="all.1ke8uo" title="原文 : Set Logger level by name logger"><code>logger</code>という名前でロガー・レベルを設定</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xPwhB.1"  title="原文: /log/loggers/{logger}"><code>/log/loggers/{logger}</code></span></td>
<td class=""><span class="merged" id="all.3dOdT7"  title="原文: DELETE"><code>DELETE</code></span></td>
<td class=""><span class="merged" id="all.24Jvew" title="原文 : Unset the specified logger logger">指定されたロガー<code>logger</code>の設定を解除</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_metrics_observability"><span class="merged" id="all.2bhx2s" title="原文 : Metrics Observability">メトリクス可観測性</span></h4>
<div class="section">
<p><span class="merged" id="all.9G2QB" title="原文 : Helidon distinguishes among three general types, or scopes, of metrics.">Helidonは、メトリクスの3つの一般的な<em>「タイプ」</em>(スコープ)を区別します。</span></p>

<div class="block-title"><span class="merged" id="all.23sHaS" title="原文 : Types (scopes) of metrics"><span>メトリクスのタイプ(スコープ)</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1MzzvR" title="原文 : Type/scope">Type/scope</span></th>
<th><span class="merged" id="all.1LLqtP.2"  title="原文:: Typical Usage">一般的な用途</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3Wnhdh"  title="原文:: base">base</span></td>
<td class=""><span class="merged" id="all.1QBda8.1" title="原文 : OS or Java runtime measurements (available heap, disk space, etc.).">OSまたはJavaランタイム測定(使用可能なヒープ、ディスク領域など)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UKIas"  title="原文:: vendor">vendor</span></td>
<td class=""><span class="merged" id="all.1r41Pl" title="原文 : Implemented by vendors, including the REST.request metrics and other key performance indicator measurements.">ベンダーによって実装され、<code>REST.request</code>メトリクスおよびその他のキー・パフォーマンス・インジケータ測定が含まれます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30c7Xt"  title="原文:: application">application</span></td>
<td class=""><span class="merged" id="all.exSkz.2" title="原文 : Declared via annotations or programmatically registered by your service code.">注釈またはサービス・コードによってプログラム的に登録された注釈によって宣言されます。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3ALk6s" title="原文 : When you add the metrics dependency to your project, Helidon automatically provides a built-in REST endpoint /observe/metrics which responds with a report of the registered metrics and their values.">プロジェクトにメトリクス依存関係を追加すると、Helidonでは、登録済メトリクスとその値のレポートに応答する組込みRESTエンドポイント<code>/observe/metrics</code>が自動的に提供されます。</span></p>

<p><span class="merged" id="all.2BwURj.2" title="原文 : Clients can request a particular output format.">クライアントは特定の出力形式をリクエストできます。</span></p>

<div class="block-title"><span class="merged" id="all.Eh4P6.1" title="原文 : Formats for /observe/metrics output"><span><code>/observe/metrics</code>出力の形式</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3yTzxp.2"  title="原文:: Format">書式</span></th>
<th><span class="merged" id="all.1kFsTA.2"  title="原文:: Requested by">依頼者</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1NF1vk.2" title="原文 : OpenMetrics (Prometheus)">OpenMetrics (Prometheus)</span></td>
<td class=""><span class="merged" id="all.2YOaun.2" title="原文 : default (text/plain)">デフォルト(<code>text/plain</code>)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iF8uP.2"  title="原文:: JSON">JSON</span></td>
<td class=""><span class="merged" id="all.2GCWMy.2" title="原文 : Header Accept: application/json">ヘッダー<code>Accept: application/json</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.47I0lZ" title="原文 : Clients can also limit the report by appending the metric type to the path:">クライアントは、メトリック・タイプをパスに追加することによってレポートを制限することもできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.27TwRD"  title="原文: /observe/metrics/base"><code>/observe/metrics/base</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4P33f7"  title="原文: /observe/metrics/vendor"><code>/observe/metrics/vendor</code></span></p>

</li>
<li>
<p><span class="merged" id="all.u1GDz"  title="原文: /observe/metrics/application"><code>/observe/metrics/application</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.3vtuV8" title="原文 : For more information see Metrics documentation.">詳細は、<router-link to="/se/metrics/metrics">「メトリクス」</router-link>のドキュメントを参照してください。</span></p>

</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.41"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1rVyj" title="原文 : To customize the endpoint of an observer:">オブザーバのエンドポイントをカスタマイズするには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.14s0jX" title="原文 : Configure a custom endpoint through configuration to modify the ObserveProvider setup (such as observe.health.endpoint)"><code>ObserveProvider</code>設定(<code>observe.health.endpoint</code>など)を変更するための構成によるカスタム・エンドポイントの構成</span>

</li>
<li>
<span class="merged" id="all.iQuBJ" title="原文 : Configure a custom endpoint through a builder on the specific Observer (HealthObserver.builder().endpoint(&quot;myhealth&quot;))">特定の<code>Observer</code>上のビルダーを使用してカスタム・エンドポイントを構成します(<code>HealthObserver.builder().endpoint("myhealth")</code>)</span>

</li>
</ol>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.30"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.1V8Gp9.spl1" title="原文 : The Observability features are now implemented with HttpFeature and can be registered with HttpRouting.Builder#addFeature(java.util.function.Supplier).">可観測性機能は、<code>HttpFeature</code>で実装され、<code>HttpRouting.Builder#addFeature(java.util.function.Supplier)</code>で登録できるようになりました。</span> <span class="merged" id="all.1V8Gp9.spl2" title="原文 : Such a feature encapsulates a set of endpoints, services and/or filters.">このような機能は、一連のエンドポイント、サービスまたはフィルタ(あるいはその両方)をカプセル化します。</span> </p>

<p><span class="merged" id="all.3ratFD.spl1" title="原文 : Feature is similar to HttpService but gives more freedom in setup.">機能は<code>HttpService</code>と似ていますが、より自由に設定できます。</span> <span class="merged" id="all.3ratFD.spl2" title="原文 : Main difference is that a feature can add Filter filters and it cannot be registered on a path (that is left to the discretion of the feature developer).">主な違いは、機能は<code>Filter</code>フィルタを追加でき、パスに登録できない(機能開発者の判断に委ねられる)ことです。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.13U39e.spl1" title="原文 : Features are not registered immediately - each feature can define a Weight or implement Weighted to order features according to their weight.">機能はすぐには登録されません - 各機能は、<code>Weight</code>を定義するか、<code>Weighted</code>を実装して、重みに従って機能を順序付けできます。</span> <span class="merged" id="all.13U39e.spl2" title="原文 : Higher weighted features are registered first.">重み付けされたフィーチャが最初に登録されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1SduYR" title="原文 : This is to allow ordering of features in a meaningful way (e.g. Context should be first, Tracing second, Security third etc.).">これは、意味のある方法でフィーチャを並べ替えることを可能にするためです(例:コンテキストは最初、トレースは2番目、セキュリティは3番目)。</span></p>

</li>
</ul>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.21"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1ySida" title="原文 : MicroProfile Metrics Specification"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-5.0.0/microprofile-metrics-spec-5.0.0.pdf" target="_blank">MicroProfileメトリクス仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2tKenU" title="原文 : Metrics documentation."><router-link to="/se/metrics/metrics">「メトリクス」</router-link>ドキュメンテーション。</span></p>

</li>
<li>
<p><span class="merged" id="all.1YpNZh" title="原文 : Health documentation."><router-link to="/se/health">「ヘルス」</router-link>ドキュメンテーション。</span></p>

</li>
</ul>

</div>

</doc-view>
