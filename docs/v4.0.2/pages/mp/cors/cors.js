<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.3"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.2" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.2" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.1" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.1" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.2" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.1" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.1" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.2"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.19S66.spl1" title="原文 : The cross-origin resource sharing (CORS) protocol helps developers control if and how REST resources served by their applications can be shared across origins."><a href="https://www.w3.org/TR/cors" target="_blank">「クロス・オリジン・リソース共有(CORS)プロトコル」</a>は、開発者がアプリケーションによって提供されるRESTリソースをオリジン間で共有できるかどうかおよび方法を制御するのに役立ちます。</span> <span class="merged" id="all.19S66.spl2" title="原文 : Helidon MP includes an implementation of CORS that you can use to add CORS behavior to the services you develop.">Helidon MPには、開発するサービスにCORS動作を追加するために使用できるCORSの実装が含まれています。</span> <span class="merged" id="all.19S66.spl3" title="原文 : You can define your application’s CORS behavior programmatically using the Helidon CORS API alone, or together with configuration.">アプリケーションのCORS動作は、Helidon CORS APIのみを使用してプログラムで定義することも、構成とともに定義することもできます。</span> </p>

<p><span class="merged" id="all.1sYoaj.spl1" title="原文 : Helidon also provides three built-in services that add their own endpoints to your application - health, metrics, and OpenAPI - that have integrated CORS support.">Helidonには、CORSサポートが統合されたヘルス、メトリクスおよびOpenAPIという、アプリケーションに独自のエンドポイントを追加する3つの組込みサービスも用意されています。</span> <span class="merged" id="all.1sYoaj.spl2" title="原文 : By adding very little code to your application, you control how all the resources in your application - the ones you write and the ones provided by the Helidon built-in services - can be shared across origins.">アプリケーションにコードをほとんど追加しないことで、アプリケーション内のすべてのリソース(作成するリソースとHelidon組込みサービスによって提供されるリソース)をオリジン間で共有する方法を制御できます。</span> </p>


<h3 id="_before_you_begin"><span class="merged" id="all.428ran"  title="原文:: Before You Begin">始める前に</span></h3>
<div class="section">
<p><span class="merged" id="all.KkrOb.spl1" title="原文 : Before you revise your application to add CORS support, you need to decide what type of cross-origin sharing you want to allow for each resource your application exposes.">CORSサポートを追加するようにアプリケーションを変更する前に、アプリケーションで公開するリソースごとに許可するクロス・オリジン共有のタイプを決定する必要があります。</span> <span class="merged" id="all.KkrOb.spl2" title="原文 : For example, suppose for a given resource you want to allow unrestricted sharing for GET, HEAD, and POST requests (what CORS refers to as &quot;simple&quot; requests), but permit other types of requests only from the two origins foo.com and there.com.">たとえば、特定のリソースに対して、GET、HEADおよびPOSTリクエスト(CORSで単純リクエストと呼ばれるもの)の無制限の共有を許可するが、他のタイプのリクエストは元の<code>foo.com</code>および<code>there.com</code>からのみ許可するとします。</span> <span class="merged" id="all.KkrOb.spl3" title="原文 : Your application would implement two types of CORS sharing: more relaxed for the simple requests and stricter for others.">アプリケーションでは、2タイプのCORS共有を実装: 単純なリクエストの場合は緩和され、それ以外の場合は厳格になります。</span> </p>

<p><span class="merged" id="all.HxLpR" title="原文 : Once you know the type of sharing you want to allow for each of your resources - including any from built-in services - you can change your application accordingly.">組込みサービスを含む各リソースに許可する共有のタイプがわかったら、それに応じてアプリケーションを変更できます。</span></p>

</div>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.2"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.XVNqn" title="原文 : To enable CORS add the following dependency to your project’s pom.xml (see Managing Dependencies).">CORSを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-cors&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.1"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.V0My4" title="原文 : Once you have planned how each of your resources should support CORS, you specify the CORS behavior in one of two ways:">各リソースがCORSをどのようにサポートするかを計画したら、次の2つの方法のいずれかでCORS動作を指定します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.20nmGt" title="原文 : add @CrossOrigin annotations to the Java code for the resources, or">リソースのJavaコードに<code>@CrossOrigin</code>注釈を追加するか、</span></p>

</li>
<li>
<p><span class="merged" id="all.3lUztE" title="原文 : add configuration.">構成を追加します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.4dMjJC.spl1" title="原文 : You can do both.">両方を行うことができます。</span> <span class="merged" id="all.4dMjJC.spl2" title="原文 : CORS configuration for a resource overrides any CORS settings declared using @CrossOrigin in the Java class for the resource.">リソースのCORS構成は、リソースのJavaクラスで<code>@CrossOrigin</code>を使用して宣言されたすべてのCORS設定をオーバーライドします。</span> </p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.1"  title="原文:: API">API</span></h2>
<div class="section">

<h3 id="_the_crossorigin_annotation"><span class="merged" id="all.1pjxMP" title="原文 : The @CrossOrigin Annotation"><code>@CrossOrigin</code>注釈</span></h3>
<div class="section">
<p><span class="merged" id="all.O1I43" title="原文 : Adding CORS behavior to your Helidon MP application involves just a few simple steps.">CORS動作をHelidon MPアプリケーションに追加するには、簡単なステップがいくつかあります。</span></p>

<p><span class="merged" id="all.1diXoh" title="原文 : For each resource class in your application:">アプリケーション内の各リソース・クラスの場合:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1MwDSQ" title="原文 : Identify the resources and subresources-​in other words, the paths-​declared in the resource class which you want to support CORS.">CORSをサポートするリソース・クラスで宣言されたリソースとサブリソース、つまりパスを識別します。</span>

</li>
<li>
<span class="merged" id="all.2ZOdDc" title="原文 : For each of those resources and subresources which should support CORS:">CORSをサポートする各リソースおよびサブリソースについて:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.QJFw9" title="原文 : Find or create a Java method annotated with @OPTIONS and with the correct @Path."><code>@OPTIONS</code>および正しい<code>@Path</code>で注釈が付けられたJavaメソッドを検索または作成します。</span>

</li>
<li>
<span class="merged" id="all.34fKDc" title="原文 : To that @OPTIONS Java method add a Helidon @CrossOrigin annotation that describes the cross-origin sharing you want for that resource.">その<code>@OPTIONS</code> Javaメソッドには、そのリソースに必要なクロス・オリジンの共有を記述するHelidon <a href="/apidocs/io.helidon.microprofile.cors/io/helidon/microprofile/cors/CrossOrigin.html}" target="_blank"><code>@CrossOrigin</code></a>注釈を追加します。</span>

</li>
</ol>

</li>
</ol>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.2uqyuj" title="原文 : Using @CrossOrigin Correctly">@CrossOriginの正しい使用</span></p>
<p ><p><span class="merged" id="all.41Ql7S.spl1" title="原文 : Use the @CrossOrigin annotation only on methods which also have the @OPTIONS annotation."><code>@OPTIONS</code>注釈も持つメソッドには、<code>@CrossOrigin</code>注釈<em>「のみ」</em>を使用します。</span> <span class="merged" id="all.41Ql7S.spl2" title="原文 : Remember that the @CrossOrigin settings apply to a given path and therefore to all Java resource methods which share that path."><code>@CrossOrigin</code>設定は指定されたパスに適用されるため、そのパスを共有するすべてのJavaリソース・メソッドに適用されます。</span> </p>

<p><span class="merged" id="all.2bEBCh" title="原文 : Helidon MP aborts the server start-up if you use the @CrossOrigin annotation on a resource method other than an @OPTIONS method."><code>@OPTIONS</code>メソッド以外のリソース・メソッドで<code>@CrossOrigin</code>注釈を使用すると、Helidon MPはサーバーの起動を中止します。</span></p>

<p><span class="merged" id="all.8pJ7j" title="原文 : For an informal look at the reasons for applying the @CrossOrigin annotation to the @OPTIONS method, instead of another method, see Why @OPTIONS?."><code>@CrossOrigin</code>注釈を別のメソッドではなく<code>@OPTIONS</code>メソッドに適用する理由については、<router-link to="/mp/cors/why-options">「<code>@OPTIONS</code>を使用する理由」</router-link>を参照してください。</span></p>
</p>
</div>

<p><span class="merged" id="all.41C02j" title="原文 : The configuration table below describes the attributes of the @CrossOrigin annotation.">次の<router-link @click.native="this.scrollFix('#config-table')" to="#config-table">「構成表」</router-link>では、<code>@CrossOrigin</code>注釈の属性について説明します。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.2"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2zCyry" title="原文 : You can define CORS behavior-​and you or your users can override behavior declared in your code-​using configuration.">CORS動作を定義でき、ユーザーまたはユーザーは構成を使用してコード内で宣言された動作をオーバーライドできます。</span></p>

<p><span class="merged" id="all.1guAT2" title="原文 : For each resource you want to configure, add a section to META-INF/microprofile-config.properties file:">構成するリソースごとに、<code>META-INF/microprofile-config.properties</code>ファイルにセクションを追加します:</span></p>

<markup
lang="properties"
title="General form of CORS configuration"
>cors.enabled= <span class="conum" data-value="1" />
#
<span class="conum" data-value="2" />
cors.paths.<em>i</em>.path-pattern= <span class="conum" data-value="3" />
cors.paths.<em>i</em>.allow-headers=
cors.paths.<em>i</em>.max-age-seconds=
cors.paths.<em>i</em>.allow-credentials=
cors.paths.<em>i</em>.allow-origins=
cors.paths.<em>i</em>.expose-headers=
cors.paths.<em>i</em>.allow-methods=
cors.paths.<em>i</em>.enabled= <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.QPRLN.spl1" title="原文 : You can disable CORS processing for all resources by setting cors.enabled to false."><code>cors.enabled</code>を<code>false</code>に設定すると、すべてのリソースのCORS処理を無効にできます。</span> <span class="merged" id="all.QPRLN.spl2"  title="原文:: Defaults to true.">デフォルトは<code>true</code>です。</span> </li>
<li data-value="2"><span class="merged" id="all.RifYs.spl1" title="原文 : Add a block for each resource you want to configure.">構成するリソースごとにブロックを追加します。</span> <span class="merged" id="all.RifYs.spl2" title="原文 : The index i is an integer (0, 1, 2, etc.).">索引<code><em>i</em></code>は整数(0、1、2など)です。</span> </li>
<li data-value="3"><span class="merged" id="all.3Lxjov" title="原文 : Specify the settings as needed to define the CORS behavior you want for that resource.">必要に応じて設定を指定して、そのリソースに必要なCORS動作を定義します。</span></li>
<li data-value="4"><span class="merged" id="all.jls4t.spl1" title="原文 : The enabled setting lets you control whether the system uses that set of CORS configuration."><code>enabled</code>設定を使用すると、システムがそのCORS構成セットを使用するかどうかを制御できます。</span> <span class="merged" id="all.jls4t.spl2"  title="原文:: Defaults to true.">デフォルトは<code>true</code>です。</span> </li>
</ul>

<p><span class="merged" id="all.1nBqMv" title="原文 : The system uses the index i, not the position in the config file, to identify the settings for a particular resource.">システムは、構成ファイルの位置ではなく索引<code><em>i</em></code>を使用して、特定のリソースの設定を識別します。</span></p>

<p><span class="merged" id="all.32lg3J" title="原文 : Path patterns can be any expression accepted by the PathMatcher class.">パス・パターンには、<a href="/apidocs/io.helidon.webserver/io/helidon/webserver/PathMatcher.html" target="_blank"><code>PathMatcher</code></a>クラスで使用できる任意の式を指定できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.zUbXm.spl1" title="原文 : Helidon scans the cross-origin entries in index order (0, 1, 2, etc.) until it finds an entry that matches an incoming request’s path and HTTP method, so be sure to assign index values to the entries so Helidon will check them in the order you want.">Helidonは、受信リクエストのパスおよびHTTPメソッドに一致するエントリが見つかるまで、索引順(0、1、2など)でクロス・オリジン・エントリをスキャンするため、必ずエントリに索引値を割り当てて、Helidonが希望の順序でチェックするようにしてください。</span> <span class="merged" id="all.zUbXm.spl2" title="原文 : In particular, use lower index values for entries with more specific path patterns.">特に、より具体的なパス・パターンを持つエントリには、低い索引値を使用します。</span> </p>
</div>

<p><span class="merged" id="all.ROP5H" title="原文 : The table below describes the attributes on the @CrossOrigin annotation and the configuration keys that map to the headers defined in the CORS protocol.">次の表に、<code>@CrossOrigin</code>注釈の属性と、CORSプロトコルで定義されたヘッダーにマップされる構成キーを示します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.23zoOX" title="原文 : annotation attribute">注釈属性</span></th>
<th><span class="merged" id="all.336YPs" title="原文 : config key">構成キー</span></th>
<th><span class="merged" id="all.2ZwVVB.109"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.4A9clD"  title="原文:: default">default</span></th>
<th><span class="merged" id="all.20ls8M.109"  title="原文:: description">説明</span></th>
<th><span class="merged" id="all.4d0vit" title="原文 : CORS header name">CORSヘッダー名</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.302KZl"  title="原文: allowCredentials"><code>allowCredentials</code></span></td>
<td class=""><span class="merged" id="all.1nJYnr.1"  title="原文: allow-credentials"><code>allow-credentials</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.161"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42DdBS.51"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.1ygVGc.1" title="原文 : Sets the allow credentials flag.">資格証明の許可フラグを設定します。</span></td>
<td class=""><span class="merged" id="all.4dF9U6"  title="原文: Access-Control-Allow-Credentials"><code>Access-Control-Allow-Credentials</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tx1Wg"  title="原文: allowHeaders"><code>allowHeaders</code></span></td>
<td class=""><span class="merged" id="all.3CeDxm.1"  title="原文: allow-headers"><code>allow-headers</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH"  title="原文:: string[]">string[]</span></td>
<td class=""><span class="merged" id="all.1VMbi3.3"  title="原文: *"><code>*</code></span></td>
<td class=""><span class="merged" id="all.1AfWoA" title="原文 : Sets the allowed headers.">許可されるヘッダーを設定します。</span></td>
<td class=""><span class="merged" id="all.RsjK1"  title="原文: Access-Control-Allow-Headers"><code>Access-Control-Allow-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hODrO"  title="原文: allowMethods"><code>allowMethods</code></span></td>
<td class=""><span class="merged" id="all.2GrPoY.1"  title="原文: allow-methods"><code>allow-methods</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.1"  title="原文:: string[]">string[]</span></td>
<td class=""><span class="merged" id="all.1VMbi3.4"  title="原文: *"><code>*</code></span></td>
<td class=""><span class="merged" id="all.4GgGW5" title="原文 : Sets the allowed methods.">許可されるメソッドを設定します。</span></td>
<td class=""><span class="merged" id="all.3hrvIH"  title="原文: Access-Control-Allow-Methods"><code>Access-Control-Allow-Methods</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2loTdg"  title="原文: allowOrigins"><code>allowOrigins</code></span></td>
<td class=""><span class="merged" id="all.3lELH6.1"  title="原文: allow-origins"><code>allow-origins</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.2"  title="原文:: string[]">string[]</span></td>
<td class=""><span class="merged" id="all.1VMbi3.5"  title="原文: *"><code>*</code></span></td>
<td class=""><span class="merged" id="all.WWZvy" title="原文 : Sets the allowed origins.">許可されるオリジンを設定します。</span></td>
<td class=""><span class="merged" id="all.2FjaSx"  title="原文: Access-Control-Allow-Origins"><code>Access-Control-Allow-Origins</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xOOIS"  title="原文: exposeHeaders"><code>exposeHeaders</code></span></td>
<td class=""><span class="merged" id="all.2uvwu1.1"  title="原文: expose-headers"><code>expose-headers</code></span></td>
<td class=""><span class="merged" id="all.1bnuXH.3"  title="原文:: string[]">string[]</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1hhowi.1" title="原文 : Sets the expose headers.">公開ヘッダーを設定します。</span></td>
<td class=""><span class="merged" id="all.yr2OR"  title="原文: Access-Control-Expose-Headers"><code>Access-Control-Expose-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OUtEo"  title="原文: maxAgeSeconds"><code>maxAgeSeconds</code></span></td>
<td class=""><span class="merged" id="all.3eJpIG.1"  title="原文: max-age-seconds"><code>max-age-seconds</code></span></td>
<td class=""><span class="merged" id="all.15f2Ma.28"  title="原文:: long">long</span></td>
<td class=""><span class="merged" id="all.3ukg0O.1"  title="原文: 3600"><code>3600</code></span></td>
<td class=""><span class="merged" id="all.2mlBW9.1" title="原文 : Sets the maximum age.">最大年齢を設定します。</span></td>
<td class=""><span class="merged" id="all.4bPOg7"  title="原文: Access-Control-Max-Age"><code>Access-Control-Max-Age</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.19"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.48UcwL.20"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.162"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.83"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3wKo6m.1" title="原文 : Sets whether this config should be enabled or not.">この構成を有効にするかどうかを設定します。</span></td>
<td class=""><span class="merged" id="all.2jtIAF"  title="原文:: n/a">該当なし</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.226CVy" title="原文 : If the cross-origin configuration is disabled (enabled = false), then the Helidon CORS implementation ignores the cross-origin configuration entry.">クロス・オリジン構成が無効になっている場合(<code>enabled</code> = false)、Helidon CORS実装はクロス・オリジン構成エントリを無視します。</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.1"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4bs0Lw" title="原文 : The Helidon MP Quickstart application allows users to:"><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/quickstarts/helidon-quickstart-mp" target="_blank">「Helidon MP Quickstartアプリケーション」</a>を使用すると、ユーザーは次を実行できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Blil" title="原文 : obtain greetings by sending GET requests to the /greet resource, and"><code>/greet</code>リソースに<code>GET</code>リクエストを送信してグリーティングを取得し、および</span></p>

</li>
<li>
<p><span class="merged" id="all.3zb7RN" title="原文 : change the greeting message by sending a PUT request to the /greet/greeting resource."><code>PUT</code>リクエストを<code>/greet/greeting</code>リソースに送信して、グリーティング・メッセージを変更します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.2rCgMV" title="原文 : The Helidon MP CORS Example shows the basic quickstart example enhanced for CORS."><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/microprofile/cors" target="_blank">「Helidon MP CORSの例」</a>は、CORS用に拡張された基本的なクイックスタート例を示しています。</span></p>

<p><span class="merged" id="all.3hOfkX" title="原文 : The discussion below describes the changes in the application which:">次の説明では、アプリケーションの変更について説明します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2YEuTl" title="原文 : permit unrestricted sharing of the resource /greet, and">リソース<code>/greet</code>の無制限共有を許可、および</span></p>

</li>
<li>
<p><span class="merged" id="all.30XhQE" title="原文 : restrict sharing of the resource /greet/greeting so that only the origins http://foo.com and http://there.com can change the greeting.">元の<code>http://foo.com</code>および<code>http://there.com</code>のみがグリーティングを変更できるように、リソース<code>/greet/greeting</code>の共有を制限します。</span></p>

</li>
</ul>


<h3 id="_adding_annotations"><span class="merged" id="all.1njvMe"  title="原文:: Adding Annotations">注釈の追加</span></h3>
<div class="section">
<markup
lang="java"
title="Using annotations to declare CORS behavior"
>@Path("/greet")
public class GreetResource { <span class="conum" data-value="1" />

    @GET
    public JsonObject getDefaultMessage() {...} <span class="conum" data-value="2" />

    @Path("/greeting")
    @PUT
    public Response updateGreeting(JsonObject jsonObject) {...} <span class="conum" data-value="3" />

    @OPTIONS
    @CrossOrigin()
    public void optionsForRetrievingUnnamedGreeting() {} <span class="conum" data-value="4" />

    @OPTIONS
    @Path("/greeting")
    @CrossOrigin({"http://foo.com", "http://there.com"},
                 allowMethods = {HttpMethod.PUT})
    public void optionsForUpdatingGreeting() {} <span class="conum" data-value="5" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Z2qqW" title="原文 : Existing GreetResource resource class with path /greet.">パス<code>/greet</code>を持つ既存の<code>GreetResource</code>リソース・クラス。</span></li>
<li data-value="2"><span class="merged" id="all.1oIQ5J" title="原文 : Existing @GET method for resource /greet.">リソース<code>/greet</code>の既存の<code>@GET</code>メソッド。</span></li>
<li data-value="3"><span class="merged" id="all.2kGj7Y" title="原文 : Existing @PUT method for resource /greet/greeting.">リソース<code>/greet/greeting</code>の既存の<code>@PUT</code>メソッド。</span></li>
<li data-value="4"><span class="merged" id="all.39tlUn.spl1" title="原文 : New @OPTIONS method for /greet."><code>/greet</code>の新しい<code>@OPTIONS</code>メソッド。</span> <span class="merged" id="all.39tlUn.spl2" title="原文 : (Just like the @GET method getDefaultMessage, this @OPTIONS method does not have a @Path annotation; both &quot;inherit&quot; the class-level @Path setting /greet.)">(<code>@GET</code>メソッド<code>getDefaultMessage</code>と同様に、この<code>@OPTIONS</code>メソッドには<code>@Path</code>注釈がありません。両方ともクラス・レベルの<code>@Path</code>設定<code>/greet</code>を継承します。)</span> <span class="merged" id="all.39tlUn.spl3" title="原文 : The @CrossOrigin annotation declares default cross-origin sharing which permits sharing via all HTTP methods to all origins."><code>@CrossOrigin</code>注釈は、すべてのHTTPメソッドを介したすべてのオリジンへの共有を許可するデフォルトのクロス・オリジンの共有を宣言します。</span> </li>
<li data-value="5"><span class="merged" id="all.44QBy6.spl1" title="原文 : New @OPTIONS method for /greet/greeting."><code>/greet/greeting</code>の新しい<code>@OPTIONS</code>メソッド。</span> <span class="merged" id="all.44QBy6.spl2" title="原文 : The @CrossOrigin annotation specifies sharing only via the PUT HTTP method and only to the two listed origins."><code>@CrossOrigin</code>注釈では、<code>PUT</code> HTTPメソッドを介してのみ共有を指定し、リストされた2つのオリジンにのみ共有を指定します。</span> </li>
</ul>

</div>


<h3 id="_adding_configuration"><span class="merged" id="all.11VOeZ" title="原文 : Adding Configuration">構成の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.47Sjy" title="原文 : You could use the following configuration in place of using annotations to set up the same CORS behavior.">注釈を使用して同じCORS動作を設定するのではなく、次の構成を使用できます。</span></p>

<markup
lang="properties"
title="Using configuration to set up the same CORS behavior"
>cors.paths.0.path-pattern=/greet <span class="conum" data-value="1" />

cors.paths.1.path-pattern=/greet/greeting <span class="conum" data-value="2" />
cors.paths.1.allow-origins=http://foo.com,http://there.com
cors.paths.1.allow-methods=PUT</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3tpBI9" title="原文 : Enables default CORS settings for the /greet resource."><code>/greet</code>リソースのデフォルトのCORS設定を有効にします。</span></li>
<li data-value="2"><span class="merged" id="all.1FBwif" title="原文 : Sets up sharing for the /greet/greeting resource only via PUT requests and only from the specified origins."><code>/greet/greeting</code>リソースの共有は、<code>PUT</code>リクエストを介してのみ、指定したオリジンからのみ設定します。</span></li>
</ul>

<p><span class="merged" id="all.33JlVb" title="原文 : Or, alternatively, the following configuration example augments the settings from the @CrossOrigin annotations in the code.">または、次の構成例では、コードの<code>@CrossOrigin</code>注釈から設定を拡張します。</span></p>

<markup
lang="properties"
title="Using configuration to augment or override declared CORS behavior"
>cors.paths.0.path-pattern=/greet <span class="conum" data-value="1" />
cors.paths.0.allow-methods=GET
cors.paths.0.allow-origins=http://here.com,http://foo.com,http://there.com

cors.paths.1.path-patterh=/greet/greeting <span class="conum" data-value="2" />
cors.paths.1.allow-methods=PUT
cors.paths.1.allow-origins=http://foo.com</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1ef43d" title="原文 : Changes the declared settings to restrict cross-origin use of /greet to only GET and only from foo.com and there.com."><code>/greet</code>のクロス・オリジン使用を<code>GET</code>のみに制限し、<code>foo.com</code>および<code>there.com</code>のみから宣言設定を変更します。</span></li>
<li data-value="2"><span class="merged" id="all.4ZifZq.spl1" title="原文 : Changes the settings for /greet/greeting from what they were declared; with this configuration, only the origin foo.com is permitted."><code>/greet/greeting</code>の設定を、宣言されたものから変更します。この構成では、オリジン<code>foo.com</code>のみが許可されます。</span> <span class="merged" id="all.4ZifZq.spl2" title="原文 : (The declared setting also allowed there.com).">(宣言された設定では<code>there.com</code>も許可されています)。</span> </li>
</ul>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.2"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_cors_and_the_requested_uri_feature"><span class="merged" id="all.2u7iDX" title="原文 : CORS and the Requested URI Feature">CORSおよびリクエストされたURI機能</span></h3>
<div class="section">
<p><span class="merged" id="all.2rLx8L.spl1" title="原文 : The decisions the Helidon CORS feature makes depend on accurate information about each incoming request, particularly the host to which the request is sent.">Helidon CORS機能によるディシジョンは、各受信リクエスト(特にリクエストの送信先ホスト)に関する正確な情報によって異なります。</span> <span class="merged" id="all.2rLx8L.spl2" title="原文 : Conveyed as headers in the request, this information can be changed or overwritten by intermediate nodes-​such as load balancers-​between the origin of the request and your service.">リクエストでヘッダーとして提供されるこの情報は、リクエストの起点とサービスの間の中間ノード(ロード・バランサなど)によって変更または上書きできます。</span> </p>

<p><span class="merged" id="all.3BbPZE.spl1" title="原文 : Well-behaved intermediate nodes preserve this important data in other headers, such as Forwarded.">適切に動作する中間ノードは、この重要なデータを<code>Forwarded</code>などの他のヘッダーに保持します。</span> <span class="merged" id="all.3BbPZE.spl2" title="原文 : You can configure how the Helidon server handles these headers as described in the documentation for requested URI discovery."><router-link :to="{path: '/mp/server', hash: '#_using_requested_uri_discovery'}">「リクエストされたURI検出」</router-link>のドキュメントの説明に従って、Helidonサーバーがこれらのヘッダーを処理する方法を構成できます。</span> </p>

<p><span class="merged" id="all.MAzvr" title="原文 : The CORS support in Helidon uses the requested URI feature to discover the correct information about each request, according to your configuration, so it can make accurate decisions about whether to permit cross-origin accesses.">HelidonのCORSサポートは、リクエストされたURI機能を使用して、構成に従って各リクエストに関する正しい情報を検出するため、クロス・オリジン・アクセスを許可するかどうかを正確にディシジョンできます。</span></p>

</div>


<h3 id="_using_cors_support_in_built_in_helidon_services"><span class="merged" id="all.2Bi3yG" title="原文 : Using CORS Support in Built-in Helidon Services">組込みのHelidonサービスでのCORSサポートの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.4SfgmC.spl1" title="原文 : Several built-in Helidon services-​health, metrics, and OpenAPI--have integrated CORS support.">組込みのHelidonサービス(<router-link to="/mp/health">health</router-link>、<router-link to="/mp/metrics/metrics">metrics</router-link>および<router-link to="/mp/openapi/openapi">OpenAPI</router-link>)には、CORSサポートが統合されています。</span> <span class="merged" id="all.4SfgmC.spl2" title="原文 : You can include these services in your application and control how those resources can be shared across origins.">これらのサービスをアプリケーションに組み込み、これらのリソースをオリジン間で共有する方法を制御できます。</span> </p>

<p><span class="merged" id="all.My9kd.spl1" title="原文 : For example, several websites related to OpenAPI run a web application in your browser.">たとえば、OpenAPIに関連するいくつかのwebサイトでは、ブラウザでWebアプリケーションが実行されます。</span> <span class="merged" id="all.My9kd.spl2" title="原文 : You provide the URL for your application to the browser application.">アプリケーションのURLをブラウザ・アプリケーションに指定します。</span> <span class="merged" id="all.My9kd.spl3" title="原文 : The browser application uses the URL to retrieve the OpenAPI document that describes the application’s endpoints directly from your application.">ブラウザ・アプリケーションは、URLを使用して、アプリケーションのエンドポイントを記述するOpenAPIドキュメントをアプリケーションから直接取得します。</span> <span class="merged" id="all.My9kd.spl4" title="原文 : The browser application then displays a user interface that you use to &quot;drive&quot; your application.">ブラウザ・アプリケーションには、アプリケーションの駆動に使用するユーザー・インタフェースが表示されます。</span> <span class="merged" id="all.My9kd.spl5" title="原文 : That is, you provide input, have the web application send requests to your application endpoints, and then view the responses.">つまり、入力を指定し、webアプリケーションからアプリケーション・エンドポイントにリクエストを送信して、レスポンスを表示します。</span> <span class="merged" id="all.My9kd.spl6" title="原文 : This scenario is exactly the situation CORS addresses: an application in the browser from one origin - the user interface downloaded from the website - requests a resource from another origin - the /openapi endpoint which Helidon’s OpenAPI built-in service automatically adds to your application.">このシナリオは、CORSアドレスの正確な状況です: webサイトからダウンロードされたユーザー・インタフェースであるブラウザ内のアプリケーションが、別のオリジン(Helidon OpenAPI組込みサービスがアプリケーションに自動的に追加する<code>/openapi</code>エンドポイント)からリソースをリクエストします。</span> </p>

<p><span class="merged" id="all.3dbLoT" title="原文 : Integrating CORS support into these built-in services allows such third-party web sites and their browser applications - or more generally, apps from any other origin - to work with your Helidon application.">CORSサポートをこれらの組込みサービスに統合すると、このようなサード・パーティのwebサイトおよびそのブラウザ・アプリケーション(より一般的には他のオリジンのアプリケーション)でHelidonアプリケーションを使用できるようになります。</span></p>

<p><span class="merged" id="all.J5fQw.spl1" title="原文 : Because all three of these built-in Helidon services serve only GET endpoints, by default the integrated CORS support in all three services permits any origin to share their resources using GET, HEAD, and OPTIONS HTTP requests.">これら3つの組込みHelidonサービスはすべて<code>GET</code>エンドポイントにのみサービスを提供するため、デフォルトでは、3つのサービスすべてで統合CORSサポートにより、すべてのオリジンが<code>GET</code>、<code>HEAD</code>および<code>OPTIONS</code> HTTPリクエストを使用してリソースを共有できます。</span> <span class="merged" id="all.J5fQw.spl2" title="原文 : You can customize the CORS set-up for these built-in services independently from each other using configuration.">構成を使用して、これらの組込みサービスのCORS設定を相互に独立してカスタマイズできます。</span> <span class="merged" id="all.J5fQw.spl3" title="原文 : You can use this override feature to control the CORS behavior of the built-in services even if you do not add CORS behavior to your own endpoints.">このオーバーライド機能を使用すると、独自のエンドポイントにCORS動作を追加しない場合でも、組込みサービスのCORS動作を制御できます。</span> </p>


<h4 id="_built_in_services_with_cors"><span class="merged" id="all.2KW42K" title="原文 : Built-in Services with CORS">CORSによる組込みサービス</span></h4>
<div class="section">
<p><span class="merged" id="all.4G7IRs" title="原文 : To use built-in services with CORS support and customize the CORS behavior:">CORSサポートで組込みサービスを使用し、CORSの動作をカスタマイズするには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1qC2bQ.spl1" title="原文 : Add the built-in service or services to your application.">組込みサービスをアプリケーションに追加します。</span> <span class="merged" id="all.1qC2bQ.spl2" title="原文 : The health, metrics, and OpenAPI services automatically include default CORS support.">ヘルス、メトリクスおよびOpenAPIサービスには、デフォルトのCORSサポートが自動的に含まれます。</span> 

</li>
<li>

<div><p><span class="merged" id="all.rrMls" title="原文 : Add a dependency on the Helidon MP CORS artifact to your Maven pom.xml file.">Helidon MP CORSアーティファクトへの依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3bV9CI" title="原文 : If you want the built-in services to support CORS, then you need to add the CORS dependency even if your own endpoints do not use CORS.">組込みサービスでCORSをサポートする場合は、独自のエンドポイントでCORSを使用しない場合でもCORS依存関係を追加する必要があります。</span></p>
</div>
</div>

</li>
<li>
<span class="merged" id="all.HNdYP" title="原文 : Use configuration to customize the CORS behavior as needed.">必要に応じて、構成を使用してCORSの動作をカスタマイズします。</span>

</li>
</ol>

<p><span class="merged" id="all.3dly93.spl1" title="原文 : The documentation for the individual built-in services describes how to add each service to your application, including adding a Maven dependency.">個々の組込みサービスのドキュメントでは、Maven依存関係の追加など、各サービスをアプリケーションに追加する方法について説明します。</span> <span class="merged" id="all.3dly93.spl2" title="原文 : In your application’s configuration file, the configuration for each service appears under its own key.">アプリケーションの構成ファイルでは、各サービスの構成が独自のキーの下に表示されます。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.RiBJw" title="原文 : Helidon Service Documentation">Helidonサービスのドキュメント</span></td>
<td class=""><span class="merged" id="all.1Ov129"  title="原文:: Configuration Key">構成キー</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AmI5C" title="原文 : health"><router-link to="/mp/health">health</router-link></span></td>
<td class=""><span class="merged" id="all.4HLPu5.1"  title="原文: health"><code>health</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.278iE4" title="原文 : metrics"><router-link to="/mp/metrics/metrics">metrics</router-link></span></td>
<td class=""><span class="merged" id="all.4KU3uR.1"  title="原文: metrics"><code>metrics</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1vvBJk" title="原文 : OpenAPI"><router-link to="/mp/openapi/openapi">OpenAPI</router-link></span></td>
<td class=""><span class="merged" id="all.4chBk7"  title="原文: openapi"><code>openapi</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.BOimp" title="原文 : The Helidon MP QuickStart example uses these services, so you can use that as a template for your own application, or use the example project itself to experiment with customizing the CORS behavior in the built-in services."><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/quickstarts/helidon-quickstart-mp" target="_blank">「Helidon MP QuickStartの例」</a>ではこれらのサービスが使用されるため、独自のアプリケーションのテンプレートとして使用することも、サンプル・プロジェクト自体を使用して組込みサービスのCORS動作のカスタマイズを試すこともできます。</span></p>

</div>


<h4 id="_configuring_cors_for_built_in_services"><span class="merged" id="all.4JYs68" title="原文 : Configuring CORS for Built-in Services">組込みサービスのCORSの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.16LBGQ" title="原文 : You can use configuration to control whether and how each of the built-in services works with CORS.">構成を使用して、各組込みサービスがCORSと連携するかどうか、およびどのように連携するかを制御できます。</span></p>

<p><span class="merged" id="all.d6mig" title="原文 : In the configuration for the health, metrics, and OpenAPI services, you can add a section for CORS.">ヘルス、メトリクスおよびOpenAPIサービスの構成では、CORSのセクションを追加できます。</span></p>

<p><span class="merged" id="all.11hu7E.spl1" title="原文 : You have full control over the CORS configuration for a built-in Helidon service.">組込みHelidonサービスのCORS構成を完全に制御できます。</span> <span class="merged" id="all.11hu7E.spl2" title="原文 : Use a CORS config section as described in the configuration table."><router-link @click.native="this.scrollFix('#config-table')" to="#config-table">「構成表」</router-link>の説明に従って、CORS構成セクションを使用します。</span> </p>

<p><span class="merged" id="all.ENkqi" title="原文 : The following example restricts sharing of">次の例では、共有を制限</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.TISfy" title="原文 : the /health resource, provided by the health built-in service, to only the origin http://there.com, and">ヘルス組込みサービスによって提供される、オリジン<code>http://there.com</code>のみに対する<code>/health</code>リソース、および</span></p>

</li>
<li>
<p><span class="merged" id="all.39GT3Y" title="原文 : the /metrics resource, provided by the metrics built-in service, to only the origin http://foo.com.">メトリクス組込みサービスによって提供される、オリジン<code>http://foo.com</code>のみに対する<code>/metrics</code>リソース。</span></p>

</li>
</ul>

<markup
lang="properties"
title="Configuration which restricts sharing of the health and metrics resources"
>health.cors.allow-origins=http://there.com

metrics.cors.allow-origins=http://foo.com</markup>

</div>


<h4 id="_accessing_the_shared_resources"><span class="merged" id="all.tTLVC" title="原文 : Accessing the Shared Resources">共有リソースへのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.eaSD5.spl1" title="原文 : If you have edited the Helidon MP QuickStart application as described in the previous topics and saved your changes, you can build and run the application.">前のトピックの説明に従ってHelidon MP QuickStartアプリケーションを編集し、変更を保存した場合は、アプリケーションをビルドして実行できます。</span> <span class="merged" id="all.eaSD5.spl2" title="原文 : Once you do so you can execute curl commands to demonstrate the behavior changes in the metric and health services with the addition of the CORS functionality.">これを行うと、CORS機能を追加して<code>curl</code>コマンドを実行し、メトリックおよびヘルス・サービスの動作の変更を示すことができます。</span> <span class="merged" id="all.eaSD5.spl3" title="原文 : Note the addition of the Origin header value in the curl commands, and the Access-Control-Allow-Origin in the successful responses."><code>curl</code>コマンドでの<code>Origin</code>ヘッダー値の追加、および成功したレスポンスでの<code>Access-Control-Allow-Origin</code>の追加に注意してください。</span> </p>


<h5 id="_build_and_run_the_application"><span class="merged" id="all.1d3gmd" title="原文 : Build and Run the Application">アプリケーションのビルドと実行</span></h5>
<div class="section">
<p><span class="merged" id="all.3dCodv" title="原文 : Build and run the QuickStart application as usual.">通常どおり、QuickStartアプリケーションをビルドして実行します。</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-quickstart-mp.jar</markup>

<div class="listing">
<markup> ...
 2020.05.12 05:44:08 INFO io.helidon.microprofile.server.ServerCdiExtension Thread[main,5,main]: Server started on http://localhost:8080 (and all other host addresses) in 5280 milliseconds (since JVM startup).
 ...</markup>
</div>

</div>


<h5 id="_retrieve_metrics"><span class="merged" id="all.CwdJ9" title="原文 : Retrieve Metrics">メトリクスの取得</span></h5>
<div class="section">
<p><span class="merged" id="all.4PWDDI" title="原文 : The metrics service rejects attempts to access metrics on behalf of a disallowed origin.">メトリクス・サービスは、許可されていないオリジンにかわってメトリクスへのアクセス試行を拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://other.com" http://localhost:8080/metrics</markup>

<markup
lang="listing"

>HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 11:08:09 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.1DTU3M" title="原文 : But accesses from foo.com succeed.">ただし、<code>foo.com</code>からのアクセスは成功します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/metrics</markup>

<markup
lang="listing"

>HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://foo.com
Content-Type: text/plain
Date: Mon, 11 May 2020 11:08:16 -0500
Vary: Origin
connection: keep-alive
content-length: 6065

# TYPE base_classloader_loadedClasses_count gauge
# HELP base_classloader_loadedClasses_count Displays the number of classes that are currently loaded in the Java virtual machine.
base_classloader_loadedClasses_count 3568</markup>

</div>


<h5 id="_retrieve_health"><span class="merged" id="all.4bQL4U" title="原文 : Retrieve Health">ヘルスの取得</span></h5>
<div class="section">
<p><span class="merged" id="all.3oMvPB" title="原文 : The health service rejects requests from origins not specifically approved.">ヘルス・サービスは、明示的に承認されていないオリジンからのリクエストを拒否します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://foo.com" http://localhost:8080/health</markup>

<markup
lang="listing"

>HTTP/1.1 403 Forbidden
Date: Mon, 11 May 2020 12:06:55 -0500
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.43x4WI" title="原文 : And responds successfully only to cross-origin requests from http://there.com.">また、<code>http://there.com</code>からのクロス・オリジン・リクエストにのみ正常に応答します。</span></p>

<markup
lang="bash"

>curl -i -H "Origin: http://there.com" http://localhost:8080/health</markup>

<markup
lang="listing"

>HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://there.com
Content-Type: application/json
Date: Mon, 11 May 2020 12:07:32 -0500
Vary: Origin
connection: keep-alive
content-length: 461

{"outcome":"UP",...}</markup>

</div>

</div>

</div>

</div>

</doc-view>
