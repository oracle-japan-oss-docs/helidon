<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.66"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.65" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.47" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.42" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.25" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.5By0b" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#config')" to="#config">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.39" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.81"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4VtgWk.1" title="原文 : The OpenAPI specification defines a standard way to express the interface exposed by a REST service."><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">「OpenAPI仕様」</a>は、RESTサービスによって公開されるインタフェースを表す標準方法を定義します。</span></p>

<p><span class="merged" id="all.2r3I38.1" title="原文 : The MicroProfile OpenAPI spec explains how MicroProfile embraces OpenAPI, adding annotations, configuration, and a service provider interface (SPI)."><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.1/microprofile-openapi-spec-3.1.html" target="_blank">「MicroProfile OpenAPI仕様」</a>は、MicroProfileがOpenAPIを取り込み、注釈、構成およびサービス・プロバイダ・インタフェース(SPI)を追加する方法について説明します。</span></p>

<p><span class="merged" id="all.2J2cre" title="原文 : OpenAPI support in Helidon SE draws its inspiration from MicroProfile OpenAPI but does not implement the spec because Helidon SE does not support annotations.">Helidon SEでのOpenAPIサポートは、MicroProfile OpenAPIからインスピレーションを得ますが、Helidon SEは注釈をサポートしていないため、仕様を実装しません。</span></p>

<p><span class="merged" id="all.2Etfba" title="原文 : The OpenAPI support in Helidon SE performs two main tasks:">Helidon SEでのOpenAPIサポートは、2つの主なタスクを実行します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zJgFA.1" title="原文 : Build an in-memory model of the REST API your service implements.">サービスが実装するREST APIのインメモリー・モデルを構築します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3L9MN2.1" title="原文 : Expose the model in text format (YAML or JSON) via the /openapi endpoint."><code>/openapi</code>エンドポイントを介して、モデルをテキスト形式(YAMLまたはJSON)で公開します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.46AUZ1" title="原文 : To construct the model, Helidon gathers information about the service API from a static OpenAPI document file packaged as part of your service.">モデルを構築するために、Helidonは、サービスの一部としてパッケージ化された静的OpenAPIドキュメント・ファイルからサービスAPIに関する情報を収集します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.58"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.4fI1RW" title="原文 : To enable OpenAPI add the following dependency to your project’s pom.xml (see Managing Dependencies).">OpenAPIを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-openapi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.61"  title="原文:: Usage">使用</span></h2>
<div class="section">

<h3 id="_automatic_registration_default"><span class="merged" id="all.3xfe02" title="原文 : Automatic Registration (default)">自動登録(デフォルト)</span></h3>
<div class="section">
<p><span class="merged" id="all.20zj30.spl1" title="原文 : Simply by adding the dependency described above you add support for OpenAPI to your Helidon SE application.">前述の依存関係を追加するだけで、OpenAPIのサポートをHelidon SEアプリケーションに追加します。</span> <span class="merged" id="all.20zj30.spl2" title="原文 : Because Helidon automatically discovers the OpenAPI feature, you do not have to make any changes to your application code.">HelidonはOpenAPI機能を自動的に検出するため、アプリケーション・コードを変更する必要はありません。</span> </p>

</div>


<h3 id="_explicit_registration"><span class="merged" id="all.2thQuu" title="原文 : Explicit Registration">明示的な登録</span></h3>
<div class="section">
<p><span class="merged" id="all.35Xqr2" title="原文 : To control the behavior of the OpenAPI feature programmatically, you can add and configure the OpenAPI feature explicitly as explained below.">OpenAPI機能の動作をプログラムで制御するには、次に説明するように、OpenAPI機能を明示的に追加および構成します。</span></p>


<h4 id="_create_and_register_openapifeature_in_your_application"><span class="merged" id="all.1GX3yX" title="原文 : Create and Register OpenApiFeature in your application">アプリケーションで<code>OpenApiFeature</code>を作成して登録</span></h4>
<div class="section">
<p><span class="merged" id="all.j8KDg.spl1" title="原文 : Helidon SE provides the OpenApiFeature class which your application uses to assemble the in-memory model and expose the /openapi endpoint to clients.">Helidon SEは、アプリケーションがインメモリー・モデルを組み立て、<code>/openapi</code>エンドポイントをクライアントに公開するために使用する<a href="/apidocs/io.helidon.openapi/OpenApiFeature.html" target="_blank"><code>OpenApiFeature</code></a>クラスを提供します。</span> <span class="merged" id="all.j8KDg.spl2" title="原文 : You can create an instance either using a static create method or by instantiating its Builder.">インスタンスは、静的<code>create</code>メソッドを使用するか、<a href="/apidocs/io.helidon.openapi/OpenApiFeature.Builder.html" target="_blank"><code>Builder</code></a>をインスタンス化することで作成できます。</span> <span class="merged" id="all.j8KDg.spl3" title="原文 : The example below illustrates one way to do this."><router-link @click.native="this.scrollFix('#register_openapifeature')" to="#register_openapifeature">「下の例」</router-link>は、この方法の1つを示しています。</span> </p>

</div>


<h4 id="_furnish_openapi_information_about_your_endpoints"><span class="merged" id="all.4A2H73.1" title="原文 : Furnish OpenAPI information about your endpoints">エンドポイントに関するOpenAPI情報の提供</span></h4>
<div class="section">
<p><span class="merged" id="all.1HXewA" title="原文 : Your application supplies data for the OpenAPI model using a static OpenAPI file.">アプリケーションは、静的OpenAPIファイルを使用して、OpenAPIモデルのデータを提供します。</span></p>


<h5 id="_provide_a_static_openapi_file"><span class="merged" id="all.31yfNL" title="原文 : Provide a static OpenAPI file">静的OpenAPIファイルの指定</span></h5>
<div class="section">
<p><span class="merged" id="all.3lwGSr.1.spl1" title="原文 : Add a static file at META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json."><code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>で静的ファイルを追加します。</span> <span class="merged" id="all.3lwGSr.1.spl2" title="原文 : Tools such as Swagger let you describe your app’s API and they then generate an OpenAPI document file which you can include in your application so OpenAPI can use it.">Swaggerなどのツールを使用すると、アプリケーションのAPIを記述し、OpenAPIで使用できるようにアプリケーションに含めることができるOpenAPIドキュメント・ファイルを生成できます。</span> </p>

</div>

</div>

</div>


<h3 id="_accessing_the_rest_endpoint"><span class="merged" id="all.4bICnq.1" title="原文 : Accessing the REST Endpoint">RESTエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.nnYuN" title="原文 : Once you have added the SE OpenAPI dependency to your project, if you are using auto-discovery-​or if you are not using auto-discovery and you have added code to register the OpenApiFeature object with your routing-​then your application responds to the built-in endpoint - /openapi - and returns the OpenAPI document describing the endpoints in your application.">SE OpenAPI依存関係をプロジェクトに追加した後、自動検出を使用している場合、または自動検出を使用していないときに、<code>OpenApiFeature</code>オブジェクトをルーティングに登録するコードを追加した場合、アプリケーションは組込みエンドポイント(<code>/openapi</code>)に応答し、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを返します。</span></p>

<p><span class="merged" id="all.3Zxvx6.spl1" title="原文 : The default format of the OpenAPI document is YAML.">OpenAPIドキュメントのデフォルトの形式はYAMLです。</span> <span class="merged" id="all.3Zxvx6.spl2" title="原文 : There is not yet an adopted IANA YAML media type, but a proposed one specifically for OpenAPI documents that has some support is application/vnd.oai.openapi.">IANA YAMLメディア・タイプはまだ採用されていませんが、サポートされているOpenAPIドキュメント専用のメディア・タイプとして<code>application/vnd.oai.openapi</code>が提案されています。</span> <span class="merged" id="all.3Zxvx6.spl3" title="原文 : That is what Helidon returns by default.">これは、Helidonがデフォルトで返すものです。</span> </p>

<p><span class="merged" id="all.STA9N.1.spl1" title="原文 : In addition, a client can specify the HTTP header Accept as either application/vnd.oai.openapi+json or application/json to request JSON.">また、クライアントはHTTPヘッダー<code>Accept</code>を<code>application/vnd.oai.openapi+json</code>または<code>application/json</code>として指定して、JSONをリクエストできます。</span> <span class="merged" id="all.STA9N.1.spl2" title="原文 : Alternatively, the client can pass the query parameter format as either JSON or YAML to receive application/json or application/vnd.oai.openapi (YAML) output, respectively.">または、クライアントは、問合せパラメータ<code>format</code>を<code>JSON</code>または<code>YAML</code>として渡して、それぞれ<code>application/json</code>または<code>application/vnd.oai.openapi</code> (YAML)出力を受信できます。</span> </p>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.27"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1lJYoa.spl1" title="原文 : Helidon SE provides an API for creating and setting up the REST endpoint which serves OpenAPI documents to clients at the /openapi path.">Helidon SEは、<code>/openapi</code>パスでクライアントにOpenAPIドキュメントを提供するRESTエンドポイントを作成および設定するためのAPIを提供します。</span> <span class="merged" id="all.1lJYoa.spl2" title="原文 : Use either static methods on OpenApiFeature or use its Builder."><a href="/apidocs/io.helidon.openapi/OpenApiFeature.html" target="_blank"><code>OpenApiFeature</code></a>で静的メソッドを使用するか、その<a href="/apidocs/io.helidon.openapi/OpenApiFeature.Builder.html" target="_blank"><code>Builder</code></a>を使用します。</span> <span class="merged" id="all.1lJYoa.spl3" title="原文 : Then add that instance or builder to your application’s routing.">次に、そのインスタンスまたはビルダーをアプリケーションのルーティングに追加します。</span> <span class="merged" id="all.1lJYoa.spl4" title="原文 : The example below shows how to do this.">次の<router-link @click.native="this.scrollFix('#register_openapifeature')" to="#register_openapifeature">example</router-link>は、この方法を示しています。</span> </p>

</div>


<h2 id="config"><span class="merged" id="all.Pfqvy.44"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.47ldOI" title="原文 : Helidon SE OpenAPI configuration supports the following settings:">Helidon SE OpenAPI構成では、次の設定がサポートされています:</span></p>

<p><span class="merged" id="all.27PCaX.2" title="原文 : Type: io.helidon.openapi.OpenApiFeature">タイプ: <a href="/apidocs/io.helidon.openapi/io/helidon/openapi/OpenApiFeature.html" target="_blank">io.helidon.openapi.OpenApiFeature</a></span></p>

<p><span class="merged" id="all.47ilzK.2" title="原文 : This is a standalone configuration type, prefix from configuration root: openapi">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>openapi</code></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.135"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.128" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.147"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.142"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.147"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.153"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.7"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2cqsnT.10" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RWcza.2" title="原文 : CORS config.">CORS構成。</span></p>

<markup>@return CORS config</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.29"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.227"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.115"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dVctH.2" title="原文 : Sets whether the feature should be enabled.">機能を有効にするかどうかを設定します。</span></p>

<markup>@return `true` if enabled, `false` otherwise</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h51IP.3"  title="原文: manager"><code>manager</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4aPgis.2" title="原文 : io.helidon.openapi.OpenApiManager (service provider interface)">io.helidon.openapi.OpenApiManager (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1h5tQt.2" title="原文 : OpenAPI manager.">OpenAPIマネージャ。</span></p>

<markup>@return the OpenAPI manager</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r7Cat.8"  title="原文: permit-all"><code>permit-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.228"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4AwWXP.6" title="原文 : Whether to allow anybody to access the endpoint.">エンドポイントへのアクセスを許可するかどうか。</span></p>

<markup>@return whether to permit access to metrics endpoint to anybody, defaults to `true`
@see #roles()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Atrrs.7"  title="原文: roles"><code>roles</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.41"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3np7Uf.6" title="原文 : Hints for role names the user is expected to be in.">ユーザーが想定されるロール名のヒント。</span></p>

<markup>@return list of hints</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bZKKF.4"  title="原文: services"><code>services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1YRmoI.2" title="原文 : io.helidon.openapi.OpenApiService[] (service provider interface)">io.helidon.openapi.OpenApiService[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3yiCWz.2" title="原文 : OpenAPI services.">OpenAPIサービス。</span></p>

<markup>@return the OpenAPI services</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v1sWP.2"  title="原文: static-file"><code>static-file</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.310"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.uIt6i.2.spl1" title="原文 : Path of the static OpenAPI document file.">静的OpenAPIドキュメント・ファイルのパス。</span> <span class="merged" id="all.uIt6i.2.spl2" title="原文 : Default types are json, yaml, and yml.">デフォルト・タイプは、<code>json</code>、<code>yaml</code>および<code>yml</code>です。</span> </p>

<markup>@return location of the static OpenAPI document file</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.10"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.311"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.6CBWQ.2"  title="原文: /openapi"><code>/openapi</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.28rAhM.2" title="原文 : Web context path for the OpenAPI endpoint.">OpenAPIエンドポイントのWebコンテキスト・パス。</span></p>

<markup>@return webContext to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.41"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.3wgaaC" title="原文 : Helidon SE provides a complete OpenAPI example based on the SE QuickStart sample app.">Helidon SEは、SE QuickStartサンプル・アプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/openapi" target="_blank">「完全なOpenAPIの例」</a>を提供します。</span></p>

<p><span class="merged" id="all.sXUzD.spl1" title="原文 : Most Helidon SE applications need only add the dependency as explained above; Helidon discovers and registers OpenAPI automatically.">ほとんどのHelidon SEアプリケーションでは、前述のように依存関係を追加するだけで済みます。Helidonでは、OpenAPIが自動的に検出および登録されます。</span> <span class="merged" id="all.sXUzD.spl2" title="原文 : The example below shows how to create and register OpenApiFeature explicitly instead.">次の例では、かわりに<code>OpenApiFeature</code>を明示的に作成および登録する方法を示します。</span> </p>


<h3 id="register_openapifeature"><span class="merged" id="all.2MouwJ" title="原文 : Register OpenApiFeature explicitly"><code>OpenApiFeature</code>の明示的な登録</span></h3>
<div class="section">
<markup
lang="java"
title="Java Code to Create and Register <code>OpenAPISupport</code>"
>Config config = Config.create(); <span class="conum" data-value="1" />
Config.global(config);

WebServer server = WebServer.builder()
        .config(config.get("server"))
        .addFeature(OpenApiFeature.create(Config.global().get("openapi"))) <span class="conum" data-value="2" />
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2pML2n" title="原文 : Initializes the global Config instance from the default configuration.">グローバルな<code>Config</code>インスタンスをデフォルト構成から初期化します。</span></li>
<li data-value="2"><span class="merged" id="all.2qm3La" title="原文 : Adds the OpenApiFeature service to your server using the openapi section from configuration.">構成の<code>openapi</code>セクションを使用して、<code>OpenApiFeature</code>サービスをサーバーに追加します。</span></li>
</ul>

<p><span class="merged" id="all.1LLhxf" title="原文 : If you need programmatic control over the OpenApiFeature instance, invoke OpenApiFeature.builder() to get an OpenApiFeature.Builder object and work with it, then invoke the builder’s build method and pass the resulting OpenApiFeature instance to the WebServer.Builder addFeature method."><code>OpenApiFeature</code>インスタンスに対するプログラムによる制御が必要な場合は、<code>OpenApiFeature.builder()</code>を起動して<code>OpenApiFeature.Builder</code>オブジェクトを取得し、それを操作してから、ビルダーの<code>build</code>メソッドを起動し、結果の<code>OpenApiFeature</code>インスタンスを<code>WebServer.Builder</code> <code>addFeature</code>メソッドに渡します。</span></p>

</div>

</div>

</doc-view>
