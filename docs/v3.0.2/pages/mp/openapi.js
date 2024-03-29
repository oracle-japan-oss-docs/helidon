<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.21"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.19" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.17" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.15" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.15" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.17" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.11" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.8" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.19"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4VtgWk" title="原文 : The OpenAPI specification defines a standard way to express the interface exposed by a REST service."><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">「OpenAPI仕様」</a>は、RESTサービスによって公開されるインタフェースを表す標準方法を定義します。</span></p>

<p><span class="merged" id="all.3bFqFl" title="原文 : The MicroProfile OpenAPI spec explains how MicroProfile embraces OpenAPI, adding annotations, configuration, and a service provider interface (SPI)."><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html" target="_blank">「MicroProfile OpenAPI仕様」</a>は、MicroProfileがOpenAPIを取り込み、注釈、構成およびサービス・プロバイダ・インタフェース(SPI)を追加する方法について説明します。</span></p>

<p><span class="merged" id="all.1O5WRQ" title="原文 : Helidon MP implements the MicroProfile OpenAPI specification.">Helidon MPは、MicroProfile OpenAPI仕様を実装します。</span></p>

<p><span class="merged" id="all.17PJFP" title="原文 : The OpenAPI support in Helidon MP performs two main tasks:">Helidon MPでのOpenAPIサポートは、2つの主なタスクを実行します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zJgFA" title="原文 : Build an in-memory model of the REST API your service implements.">サービスが実装するREST APIのインメモリー・モデルを構築します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3UvkM" title="原文 : Expose the model in text format (typically YAML) via the /openapi endpoint."><code>/openapi</code>エンドポイント経由でモデルをテキスト形式(通常はYAML)で公開します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1bEaFI" title="原文 : To construct the model, Helidon gathers information about the service API from whichever of these sources are present in the application:">モデルを構築するために、Helidonは、アプリケーションに存在する次のソースのいずれかからサービスAPIに関する情報を収集します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4XS5nr" title="原文 : a model reader">a <em>「モデル・リーダー」</em></span></p>
<p><span class="merged" id="all.PjOQe" title="原文 : The SPI defines an interface you can implement in your application for programmatically providing part or all of the model;">SPIは、プログラムによってモデルの一部またはすべてを提供するために、アプリケーションに実装できるインタフェースを定義</span></p>

</li>
<li>
<p><span class="merged" id="all.Ru2Wt" title="原文 : a static OpenAPI document file packaged as part of your service;">サービスの一部としてパッケージ化された静的OpenAPIドキュメント・ファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.yeoAx" title="原文 : OpenAPI annotations;">OpenAPI注釈;</span></p>

</li>
<li>
<p><span class="merged" id="all.3JrDeo" title="原文 : a filter class"><em>「フィルタ」</em>クラス</span></p>
<p><span class="merged" id="all.19JyRy" title="原文 : The SPI defines an interface you can implement in your application which can mask parts of the model.">SPIは、モデルの一部をマスクできる、アプリケーションに実装できるインタフェースを定義します。</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.19"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.b6HVE" title="原文 : To enable MicroProfile OpenAPI either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfile OpenAPIを有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependencies&gt;
    &lt;dependency&gt; <span class="conum" data-value="1" />
        &lt;groupId&gt;org.eclipse.microprofile.openapi&lt;/groupId&gt;
        &lt;artifactId&gt;microprofile-openapi-api&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt; <span class="conum" data-value="2" />
        &lt;groupId&gt;io.helidon.microprofile.openapi&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-microprofile-openapi&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.23oadO" title="原文 : Defines the MicroProfile OpenAPI annotations so you can use them in your code.">コードで使用できるようにMicroProfile OpenAPI注釈を定義します。</span></li>
<li data-value="2"><span class="merged" id="all.1WaVqx" title="原文 : Adds the Helidon MP OpenAPI runtime support.">Helidon MP OpenAPIランタイム・サポートを追加します。</span></li>
</ul>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.16"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_openapi_support_in_helidon_mp"><span class="merged" id="all.eMVyd" title="原文 : OpenAPI support in Helidon MP">Helidon MPでのOpenAPIサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.1oihtN.spl1" title="原文 : You can very simply add support for OpenAPI to your Helidon MP application.">Helidon MPアプリケーションにOpenAPIのサポートを追加するだけですみます。</span> <span class="merged" id="all.1oihtN.spl2" title="原文 : This document shows what changes you need to make to your application and how to access the OpenAPI document for your application at runtime.">このドキュメントでは、アプリケーションに加える必要がある変更と、実行時にアプリケーションのOpenAPIドキュメントにアクセスする方法について説明します。</span> </p>

</div>


<h3 id="_changing_your_application"><span class="merged" id="all.6cL9f" title="原文 : Changing your application">アプリケーションの変更</span></h3>
<div class="section">
<p><span class="merged" id="all.2nMU5l" title="原文 : To use OpenAPI from your Helidon MP app, in addition to adding dependencies as described above:">Helidon MPアプリケーションからOpenAPIを使用するには、前述の依存関係を追加する以外に、次を実行します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2LbcPB" title="原文 : Furnish OpenAPI information about your application&rsquo;s endpoints.">アプリケーションのエンドポイントに関するOpenAPI情報を提供します。</span>

</li>
<li>
<span class="merged" id="all.1YsnYR" title="原文 : Update your application&rsquo;s configuration (optional).">アプリケーションの構成を更新します(オプション)。</span>

</li>
</ol>


<h4 id="_furnish_openapi_information_about_your_endpoints"><span class="merged" id="all.4A2H73" title="原文 : Furnish OpenAPI information about your endpoints">エンドポイントに関するOpenAPI情報の提供</span></h4>
<div class="section">
<p><span class="merged" id="all.1zopBN.spl1" title="原文 : Helidon MP OpenAPI combines information from all of the following sources as it builds its in-memory model of your application&rsquo;s API.">Helidon MP OpenAPIは、アプリケーションのAPIのインメモリー・モデルをビルドする際に、次のすべてのソースからの情報を結合します。</span> <span class="merged" id="all.1zopBN.spl2" title="原文 : It constructs the OpenAPI document from this internal model.">この内部モデルからOpenAPI文書を構築します。</span> <span class="merged" id="all.1zopBN.spl3" title="原文 : Your application can use one or more of these techniques.">アプリケーションでは、次のいずれかの方法を使用できます。</span> </p>


<h5 id="_annotate_the_endpoints_in_your_app"><span class="merged" id="all.2eI95h" title="原文 : Annotate the endpoints in your app">アプリケーション内のエンドポイントへの注釈付け</span></h5>
<div class="section">
<p><span class="merged" id="all.4KblnX.spl1" title="原文 : You can add MicroProfile OpenAPI annotations to the endpoints in your source code.">MicroProfile OpenAPI注釈をソース・コードのエンドポイントに追加できます。</span> <span class="merged" id="all.4KblnX.spl2" title="原文 : These annotations allow the Helidon MP OpenAPI runtime to discover the endpoints and information about them via CDI at app start-up.">これらの注釈を使用すると、Helidon MP OpenAPIランタイムは、アプリケーションの起動時にCDIを介してエンドポイントおよびそれらに関する情報を検出できます。</span> </p>

<p><span class="merged" id="all.2m1Uj1" title="原文 : Here is one of the endpoints, annotated for OpenAPI, from the example mentioned earlier:">前述の例のOpenAPIの注釈が付いたエンドポイントの1つを次に示します:</span></p>

<markup
lang="java"

>@GET
@Operation(summary = "Returns a generic greeting", <span class="conum" data-value="1" />
        description = "Greets the user generically")
@APIResponse(description = "Simple JSON containing the greeting", <span class="conum" data-value="2" />
        content = @Content(mediaType = "application/json",
                           schema = @Schema(implementation = GreetingMessage.class)))
@Produces(MediaType.APPLICATION_JSON)
public JsonObject getDefaultMessage() {...}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4UBYEH" title="原文 : @Operation gives information about this endpoint."><code>@Operation</code>は、このエンドポイントに関する情報を提供します。</span></li>
<li data-value="2"><span class="merged" id="all.2EwVcR" title="原文 : @APIResponse describes the HTTP response and declares its media type and contents."><code>@APIResponse</code>は、HTTPレスポンスを記述し、そのメディア・タイプとコンテンツを宣言します。</span></li>
</ul>

<p><span class="merged" id="all.ClJ2Y" title="原文 : You can also define any request parameters the endpoint expects, although this endpoint uses none.">エンドポイントで想定されるリクエスト・パラメータを定義することもできますが、このエンドポイントでは何も使用しません。</span></p>

<p><span class="merged" id="all.3DhckU.spl1" title="原文 : This excerpt shows only a few annotations for illustration.">この抜粋は、例示のためにいくつかの注釈のみを示しています。</span> <span class="merged" id="all.3DhckU.spl2" title="原文 : The Helidon MP OpenAPI example illustrates more, and the MicroProfile OpenAPI spec describes them all."><a href="https://github.com/oracle/helidon/tree/master/examples/microprofile/openapi-basic" target="_blank">「Helidon MP OpenAPIの例」</a>ではさらに説明し、<a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html" target="_blank">「MicroProfile OpenAPI仕様」</a>ではそれらすべてについて説明します。</span> </p>

</div>


<h5 id="_provide_a_static_openapi_file"><span class="merged" id="all.31yfNL" title="原文 : Provide a static OpenAPI file">静的OpenAPIファイルの指定</span></h5>
<div class="section">
<p><span class="merged" id="all.3lwGSr.spl1" title="原文 : Add a static file at META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json."><code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>で静的ファイルを追加します。</span> <span class="merged" id="all.3lwGSr.spl2" title="原文 : Tools such as Swagger let you describe your app&rsquo;s API and they then generate an OpenAPI document file which you can include in your application so OpenAPI can use it.">Swaggerなどのツールを使用すると、アプリケーションのAPIを記述し、OpenAPIで使用できるようにアプリケーションに含めることができるOpenAPIドキュメント・ファイルを生成できます。</span> </p>

</div>


<h5 id="_write_and_configure_a_model_reader_class"><span class="merged" id="all.2KYXsY" title="原文 : Write and configure a model reader class">モデル・リーダー・クラスの記述と構成</span></h5>
<div class="section">
<p><span class="merged" id="all.2jcPJW.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASModelReader interface.">OpenAPI <a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs/apidocs/org/eclipse/microprofile/openapi//OASModelReader.html" target="_blank"><code>org.eclipse.microprofile.openapi.OASModelReader</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.2jcPJW.spl2" title="原文 : Your model reader code programmatically adds elements to the internal model that OpenAPI builds.">モデル・リーダー・コードによって、OpenAPIがビルドする内部モデルに要素がプログラムによって追加されます。</span> </p>

</div>


<h5 id="_provide_a_static_openapi_file_2"><span class="merged" id="all.31yfNL.1" title="原文 : Provide a static OpenAPI file">静的OpenAPIファイルの指定</span></h5>
<div class="section">
<p><span class="merged" id="all.3lwGSr.1.spl1" title="原文 : Add a static file at META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json."><code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>で静的ファイルを追加します。</span> <span class="merged" id="all.3lwGSr.1.spl2" title="原文 : Tools such as Swagger let you describe your app&rsquo;s API and they then generate an OpenAPI document file which you can include in your application so OpenAPI can use it.">Swaggerなどのツールを使用すると、アプリケーションのAPIを記述し、OpenAPIで使用できるようにアプリケーションに含めることができるOpenAPIドキュメント・ファイルを生成できます。</span> </p>

</div>


<h5 id="_write_and_configure_a_model_reader_class_2"><span class="merged" id="all.2KYXsY.1" title="原文 : Write and configure a model reader class">モデル・リーダー・クラスの記述と構成</span></h5>
<div class="section">
<p><span class="merged" id="all.2jcPJW.1.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASModelReader interface.">OpenAPI <a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs/apidocs/org/eclipse/microprofile/openapi//OASModelReader.html" target="_blank"><code>org.eclipse.microprofile.openapi.OASModelReader</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.2jcPJW.1.spl2" title="原文 : Your model reader code programmatically adds elements to the internal model that OpenAPI builds.">モデル・リーダー・コードによって、OpenAPIがビルドする内部モデルに要素がプログラムによって追加されます。</span> </p>

<p><span class="merged" id="all.vXdGy" title="原文 : Change your application&rsquo;s MP configuration to set mp.openapi.model.reader as the fully-qualified class name of your class.">アプリケーションのMP構成を変更して、<code>mp.openapi.model.reader</code>をクラスの完全修飾クラス名として設定します。</span></p>

</div>


<h5 id="_write_and_configure_a_filter_class"><span class="merged" id="all.ecYXF" title="原文 : Write and configure a filter class">フィルタ・クラスの記述と構成</span></h5>
<div class="section">
<p><span class="merged" id="all.3tjv2h.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASFilter interface.">OpenAPI <a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs/apidocs/org/eclipse/microprofile/openapi//OASFilter.html" target="_blank"><code>org.eclipse.microprofile.openapi.OASFilter</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.3tjv2h.spl2" title="原文 : As OpenAPI composes its internal model, it invokes your filter with each model element before adding the element to the model.">OpenAPIは内部モデルを構成するため、モデルに要素を追加する<em>前</em>に、各モデル要素を使用してフィルタを起動します。</span> <span class="merged" id="all.3tjv2h.spl3" title="原文 : Your filter can accept the element as-is, modify it, or suppress it.">フィルタでは、要素をそのまま受け入れるか、変更するか、抑制できます。</span> </p>

<p><span class="merged" id="all.2xOU7a" title="原文 : Change your application&rsquo;s configuration to set mp.openapi.filter as the full-qualified class name of your class.">アプリケーションの構成を変更して、<code>mp.openapi.filter</code>をクラスの完全修飾クラス名として設定します。</span></p>

</div>

</div>

</div>


<h3 id="_update_your_application_configuration"><span class="merged" id="all.2dCSQ1" title="原文 : Update your application configuration">アプリケーション構成の更新</span></h3>
<div class="section">
<p><span class="merged" id="all.296pVi.spl1" title="原文 : Beyond the two config properties that denote the model reader and filter, Helidon MP OpenAPI supports a number of other mandated settings.">モデル・リーダーとフィルタを示す2つの構成プロパティ以外に、Helidon MP OpenAPIでは、他の多数の必須設定がサポートされています。</span> <span class="merged" id="all.296pVi.spl2" title="原文 : These are described in the configuration section of the MicroProfile OpenAPI spec.">これらは、MicroProfile OpenAPI仕様の<a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html#configuration" target="_blank">「構成セクション」</a>で説明されています。</span> </p>

</div>


<h3 id="_accessing_the_rest_endpoint"><span class="merged" id="all.4bICnq" title="原文 : Accessing the REST Endpoint">RESTエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.1BSR4S" title="原文 : Once you add the MP OpenAPI dependency to your project, your application will automatically respond to the built-in endpoint - /openapi - and it will return the OpenAPI document describing the endpoints in your application.">プロジェクトにMP OpenAPI依存関係を追加すると、アプリケーションは組込みエンドポイント(<code>/openapi</code>)に自動的に応答し、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを返します。</span></p>

<p><span class="merged" id="all.tESP.spl1" title="原文 : By default, per the MicroProfile OpenAPI spec, the default format of the OpenAPI document is YAML.">デフォルトでは、MicroProfile OpenAPI仕様に従って、OpenAPI文書のデフォルト書式はYAMLです。</span> <span class="merged" id="all.tESP.spl2" title="原文 : There is not yet an adopted IANA YAML media type, but a proposed one specifically for OpenAPI documents that has some support is application/vnd.oai.openapi.">IANA YAMLメディア・タイプはまだ採用されていませんが、サポートされているOpenAPIドキュメント専用のメディア・タイプとして<code>application/vnd.oai.openapi</code>が提案されています。</span> <span class="merged" id="all.tESP.spl3" title="原文 : That is what Helidon returns, by default.">これは、Helidonがデフォルトで返す内容です。</span> </p>

<p><span class="merged" id="all.STA9N.spl1" title="原文 : In addition, a client can specify the HTTP header Accept as either application/vnd.oai.openapi+json or application/json to request JSON.">また、クライアントはHTTPヘッダー<code>Accept</code>を<code>application/vnd.oai.openapi+json</code>または<code>application/json</code>として指定して、JSONをリクエストできます。</span> <span class="merged" id="all.STA9N.spl2" title="原文 : Alternatively, the client can pass the query parameter format as either JSON or YAML to receive application/json or application/vnd.oai.openapi (YAML) output, respectively.">または、クライアントは、問合せパラメータ<code>format</code>を<code>JSON</code>または<code>YAML</code>として渡して、それぞれ<code>application/json</code>または<code>application/vnd.oai.openapi</code> (YAML)出力を受信できます。</span> </p>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.11"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1ycyqT" title="原文 : The MicroProfile OpenAPI specification gives a listing and brief examples of the annotations you can add to your code to convey OpenAPI information."><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html" target="_blank">「MicroProfile OpenAPI仕様」</a>は、OpenAPI情報を伝達するためにコードに追加できる注釈のリストおよび簡単な例を提供します。</span></p>

<p><span class="merged" id="all.1jTNYl" title="原文 : The MicroProfile OpenAPI JavaDocs give full details of the annotations and the other classes and interfaces you can use in your code."><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs" target="_blank">MicroProfile OpenAPI JavaDocs</a>は、注釈、およびコードで使用できるその他のクラスおよびインタフェースの詳細を示します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.16"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1Jgiv1" title="原文 : Helidon OpenAPI configuration supports the following settings:">Helidon OpenAPI構成では、次の設定がサポートされています:</span></p>

<p><span class="merged" id="all.1o4uIe.1" title="原文 : Type: io.helidon.microprofile.openapi.MPOpenAPISupport">タイプ: <a href="./apidocs/io.helidon.microprofile.openapi/io/helidon/microprofile/openapi/MPOpenAPISupport.html" target="_blank">io.helidon.microprofile.openapi.MPOpenAPISupport</a></span></p>

<markup
lang="text"
title="Config key"
>mp.openapi</markup>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.72"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.73" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.88"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.86"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.88"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.89"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.MsfaM.3"  title="原文: application-path-disable"><code>application-path-disable</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.118"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.46"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2xeBsu.3" title="原文 : Sets whether the app path search should be disabled.">アプリケーション・パス検索を無効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.13"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.13" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cPuUR.3" title="原文 : Assigns the CORS settings for the OpenAPI endpoint.">OpenAPIエンドポイントのCORS設定を割り当てます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XAGpa.3"  title="原文: custom-schema-registry-class"><code>custom-schema-registry-class</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.229"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1DeBJS.3" title="原文 : Sets the custom schema registry class.">カスタム・スキーマ・レジストリ・クラスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3VN3Pe.4"  title="原文: filter"><code>filter</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.230"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4b4jzJ.3" title="原文 : Sets the developer-provided OpenAPI filter class name.">開発者が指定したOpenAPIフィルタ・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VPBo8.3"  title="原文: model.reader"><code>model.reader</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.231"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2G1baF.3" title="原文 : Sets the developer-provided OpenAPI model reader class name.">開発者が指定したOpenAPIモデル・リーダー・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1CHYnh.1"  title="原文: scan.classes"><code>scan.classes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.31"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1BGNbK.1" title="原文 : Specify the list of classes to scan.">スキャンするクラスのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ppeba.1"  title="原文: scan.disable"><code>scan.disable</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.119"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.47"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1E9ccN.1" title="原文 : Disable annotation scanning.">注釈スキャンを無効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Wxd2J.1"  title="原文: scan.exclude.classes"><code>scan.exclude.classes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.32"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PUd1q.1" title="原文 : Specify the list of classes to exclude from scans.">スキャンから除外するクラスのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32dBGg.1"  title="原文: scan.exclude.packages"><code>scan.exclude.packages</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.33"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.6Wv6k.1" title="原文 : Specify the list of packages to exclude from scans.">スキャンから除外するパッケージのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2aVVc6.1"  title="原文: scan.packages"><code>scan.packages</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.34"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.oy6dI.1" title="原文 : Specify the list of packages to scan.">スキャンするパッケージのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bpkMT.3"  title="原文: schema.*"><code>schema.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.232"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1mQwvR.3.spl1" title="原文 : Sets the schema for the indicated fully-qualified class name (represented here by &apos;*&apos;); value is the schema in JSON format.">指定された完全修飾クラス名のスキーマを設定します(ここで'*'で表します)。値はJSON形式のスキーマです。</span> <span class="merged" id="all.1mQwvR.3.spl2" title="原文 : Repeat for multiple classes.">複数のクラスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3V8KGr.3"  title="原文: servers"><code>servers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.35"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ghIBJ.3" title="原文 : Sets servers.">サーバーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IOFYs.3"  title="原文: servers.operation.*"><code>servers.operation.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.36"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Fws7b.3.spl1" title="原文 : Sets alternative servers to service the indicated operation (represented here by &apos;*&apos;).">指定された操作をサービスする代替サーバーを設定します(ここで'*'で示されています)。</span> <span class="merged" id="all.1Fws7b.3.spl2" title="原文 : Repeat for multiple operations.">複数の操作について繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XqCZQ.3"  title="原文: servers.path.*"><code>servers.path.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.37"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.gWeIV.3.spl1" title="原文 : Sets alternative servers to service all operations at the indicated path (represented here by &apos;*&apos;).">指定されたパスですべての操作を処理するための代替サーバーを設定します(ここで*で示されています)。</span> <span class="merged" id="all.gWeIV.3.spl2" title="原文 : Repeat for multiple paths.">複数のパスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v1sWP.3"  title="原文: static-file"><code>static-file</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.233"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2pWotd.3"  title="原文: META-INF/openapi.*"><code>META-INF/openapi.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2DjgLa.3.spl1" title="原文 : Sets the file system path of the static OpenAPI document file.">静的OpenAPIドキュメント・ファイルのファイル・システム・パスを設定します。</span> <span class="merged" id="all.2DjgLa.3.spl2" title="原文 : Default types are json, yaml, and yml.">デフォルト・タイプは、<code>json</code>、<code>yaml</code>および<code>yml</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.11"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.234"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.6CBWQ.3"  title="原文: /openapi"><code>/openapi</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ncWNj.3" title="原文 : Sets the web context path for the OpenAPI endpoint.">OpenAPIエンドポイントのwebコンテキスト・パスを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.17"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.1QoSIU.spl1" title="原文 : Helidon MP includes a complete OpenAPI example based on the MP quick-start sample app.">Helidon MPには、MPクイックスタート・サンプル・アプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/master/examples/microprofile/openapi-basic" target="_blank">「完全なOpenAPIの例」</a>が含まれています。</span> <span class="merged" id="all.1QoSIU.spl2" title="原文 : The rest of this section shows, step-by-step, how one might change the original QuickStart service to adopt OpenAPI.">このセクションの残りの部分では、元のQuickStartサービスをOpenAPIを採用するようにどのように変更するかをステップごとに説明します。</span> </p>


<h3 id="_helidon_mp_basic_openapi_example"><span class="merged" id="all.38t8mn" title="原文 : Helidon MP Basic OpenAPI Example">Helidon MP基本OpenAPIの例</span></h3>
<div class="section">
<p><span class="merged" id="all.4AVTPp" title="原文 : This example shows a simple greeting application, similar to the one from the Helidon MP QuickStart, enhanced with OpenAPI support.">この例は、Helidon MP QuickStartのような単純なアプリケーションを示しており、OpenAPIサポートで拡張されています。</span></p>

<markup
lang="java"

>@Path("/greeting")
@PUT
@Operation(summary = "Set the greeting prefix",
           description = "Permits the client to set the prefix part of the greeting (\"Hello\")") <span class="conum" data-value="1" />
@RequestBody( <span class="conum" data-value="2" />
    name = "greeting",
    description = "Conveys the new greeting prefix to use in building greetings",
    content = @Content(
                mediaType = "application/json",
                schema = @Schema(implementation = GreetingMessage.class),
                examples = @ExampleObject(
                    name = "greeting",
                    summary = "Example greeting message to update",
                    value = "New greeting message")))
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public Response updateGreeting(JsonObject jsonObject) {
    ...
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2iJfn2" title="原文 : With @Operation annotation we document the current method."><code>@Operation</code>注釈では、現在のメソッドについて説明します。</span></li>
<li data-value="2"><span class="merged" id="all.2BMHxj.spl1" title="原文 : With @RequestBody annotation we document the content produced."><code>@RequestBody</code>注釈を使用して、生成されたコンテンツをドキュメント化します。</span> <span class="merged" id="all.2BMHxj.spl2" title="原文 : Internal annotations @Content, @Schema and @ExampleObjects are used to give more details about the returned data.">内部注釈<code>@Content</code>、<code>@Schema</code>および<code>@ExampleObjects</code>を使用して、返されるデータの詳細を指定します。</span> </li>
</ul>

<p><span class="merged" id="all.3PP0ZV" title="原文 : If we want to hide a specific path an OASFilter is used.">特定のパスを非表示にする場合は、<code>OASFilter</code>が使用されます。</span></p>

<p><span class="merged" id="all.1jCA2z.spl1" title="原文 : The OASFilter interface allows application developers to receive callbacks for various key OpenAPI elements.">OASFilterインタフェースを使用すると、アプリケーション開発者は様々なキーOpenAPI要素のコールバックを受信できます。</span> <span class="merged" id="all.1jCA2z.spl2" title="原文 : The interface has a default implementation for every method, which allows application developers to only override the methods they care about.">インタフェースには、すべてのメソッドに対するデフォルトの実装があります。これにより、アプリケーション開発者は関心のあるメソッドのみをオーバーライドできます。</span> <span class="merged" id="all.1jCA2z.spl3" title="原文 : To use it, simply create an implementation of this interface and register it using the mp.openapi.filter configuration key, where the value is the fully qualified name of the filter class.">これを使用するには、このインタフェースの実装を作成し、<code>mp.openapi.filter configuration</code>キーを使用して登録します。このキーの値はフィルタ・クラスの完全修飾名です。</span> </p>

<p><span class="merged" id="all.1j7PSV" title="原文 : The following example filter prevents information about a given path from appearing in the OpenAPI document.">次のフィルタの例では、特定のパスに関する情報がOpenAPIドキュメントに表示されません。</span></p>

<markup
lang="java"

>import org.eclipse.microprofile.openapi.models.Operation;
import org.eclipse.microprofile.openapi.models.PathItem;

public class SimpleAPIFilter implements OASFilter {

    @Override
    public PathItem filterPathItem(PathItem pathItem) {
        for (Map.Entry&lt;PathItem.HttpMethod, Operation&gt; methodOp
                : pathItem.getOperations().entrySet()) {
            if (SimpleAPIModelReader.DOOMED_OPERATION_ID
                    .equals(methodOp.getValue().getOperationId())) {
                return null;
            }
        }
        return OASFilter.super.filterPathItem(pathItem);
    }
}</markup>

<p><span class="merged" id="all.38OpvR.spl1" title="原文 : You can implement a model reader to provide all or part of the in-memory OpenAPI model programmatically.">モデル・リーダーを実装して、インメモリー<code>OpenAPI</code>モデルのすべてまたは一部をプログラム的に提供できます。</span> <span class="merged" id="all.38OpvR.spl2" title="原文 : Helidon OpenAPI merges the model from the model reader with models from the other sources (a static file and annotations).">Helidon <code>OpenAPI</code>は、モデル・リーダーのモデルを他のソース(静的ファイルおよび注釈)のモデルとマージします。</span> </p>

<p><span class="merged" id="all.3b104Y.spl1" title="原文 : The example model reader below creates an OpenAPI object describing two paths.">次のモデル・リーダーの例では、2つのパスを記述する<code>OpenAPI</code>オブジェクトが作成されます。</span> <span class="merged" id="all.3b104Y.spl2" title="原文 : It turns out that the filter described earlier will suppress one of the paths, but the model reader does not know or care.">前に説明したフィルタはパスの1つを抑制しますが、モデル・リーダーは認識していないか、または注意していないことがわかります。</span> </p>

<markup
lang="java"

>import org.eclipse.microprofile.openapi.OASFactory;
import org.eclipse.microprofile.openapi.OASModelReader;
import org.eclipse.microprofile.openapi.models.OpenAPI;
import org.eclipse.microprofile.openapi.models.PathItem;
import org.eclipse.microprofile.openapi.models.Paths;

/**
 * Defines two paths using the OpenAPI model reader mechanism, one that should
 * be suppressed by the filter class and one that should appear in the published
 * OpenAPI document.
 */
public class SimpleAPIModelReader implements OASModelReader {

    /**
     * Path for the example endpoint added by this model reader that should be visible.
     */
    public static final String MODEL_READER_PATH = "/test/newpath";

    /**
     * Path for an endpoint that the filter should hide.
     */
    public static final String DOOMED_PATH = "/test/doomed";

    /**
     * ID for an endpoint that the filter should hide.
     */
    public static final String DOOMED_OPERATION_ID = "doomedPath";

    /**
     * Summary text for the endpoint.
     */
    public static final String SUMMARY = "A sample test endpoint from ModelReader";

    @Override
    public OpenAPI buildModel() {
        /*
         * Add two path items, one of which we expect to be removed by
         * the filter and a very simple one that will appear in the
         * published OpenAPI document.
         */
        PathItem newPathItem = OASFactory.createPathItem()
                .GET(OASFactory.createOperation()
                    .operationId("newPath")
                    .summary(SUMMARY));
        PathItem doomedPathItem = OASFactory.createPathItem()
                .GET(OASFactory.createOperation()
                    .operationId(DOOMED_OPERATION_ID)
                    .summary("This should become invisible"));
        OpenAPI openAPI = OASFactory.createOpenAPI();
        Paths paths = OASFactory.createPaths()
                .addPathItem(MODEL_READER_PATH, newPathItem)
                .addPathItem(DOOMED_PATH, doomedPathItem);
        openAPI.paths(paths);

        return openAPI;
    }
}</markup>

<p><span class="merged" id="all.C450r" title="原文 : Having written the filter and model reader classes, identify them by adding configuration to META-INF/microprofile-config.properties as the following example shows.">フィルタおよびモデル・リーダー・クラスを記述したら、次の例に示すように、<code>META-INF/microprofile-config.properties</code>に構成を追加してそれらを識別します。</span></p>

<markup
lang="properties"

>mp.openapi.filter=io.helidon.microprofile.examples.openapi.basic.internal.SimpleAPIFilter
mp.openapi.model.reader=io.helidon.microprofile.examples.openapi.basic.internal.SimpleAPIModelReader</markup>

<p><span class="merged" id="all.2ic7tM" title="原文 : Now just build and run:">構築および実行:</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-examples-microprofile-openapi-basic.jar</markup>

<p><span class="merged" id="all.22mqMO" title="原文 : Try the endpoints:">エンドポイントを試します:</span></p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/greet
{"message":"Hello World!"}

curl -X GET http://localhost:8080/openapi
[lengthy OpenAPI document]</markup>

<p><span class="merged" id="all.1gRxbj" title="原文 : The output describes not only then endpoints from GreetResource but also one contributed by the SimpleAPIModelReader.">この出力は、<code>GreetResource</code>からのエンドポイントのみではなく、<code>SimpleAPIModelReader</code>によるエンドポイントも記述します。</span></p>

<p><span class="merged" id="all.3ZcfWG" title="原文 : Full example is available in our official repository">完全な例が使用可能です<a href="https://github.com/oracle/helidon/tree/master}/examples/microprofile/openapi-basic" target="_blank">「私たちの公式リポジトリ」</a></span></p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.13"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_building_the_jandex_index"><span class="merged" id="all.2ES8bw" title="原文 : Building the Jandex index">Jandex索引のビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.uG8hR.spl1" title="原文 : A Jandex index stores information about the classes and methods in your app and what annotations they have.">Jandex索引には、アプリケーション内のクラスとメソッド、およびそれらの注釈に関する情報が格納されます。</span> <span class="merged" id="all.uG8hR.spl2" title="原文 : It allows CDI to process annotations faster during your application&rsquo;s start-up.">CDIでは、アプリケーションの起動時に注釈をより迅速に処理できます。</span> </p>

<p><span class="merged" id="all.1xDfwC" title="原文 : Add the Jandex maven plug-in to the &lt;build&gt;&lt;plugins&gt; section of your pom.xml:"><code>pom.xml</code>の<code>&lt;build>&lt;plugins></code>セクションに<a href="https://github.com/wildfly/jandex-maven-plugin" target="_blank">Jandex mavenプラグイン</a>を追加します:</span></p>

<markup
lang="xml"

>&lt;plugin&gt;
    &lt;groupId&gt;org.jboss.jandex&lt;/groupId&gt;
    &lt;artifactId&gt;jandex-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;{jandex-plugin-version}&lt;/version&gt;
    &lt;executions&gt;
      &lt;execution&gt;
        &lt;id&gt;make-index&lt;/id&gt;
        &lt;goals&gt;
          &lt;goal&gt;jandex&lt;/goal&gt;
        &lt;/goals&gt;
      &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<p><span class="merged" id="all.3X1PmZ" title="原文 : When you build your app maven should include the index META-INF/jandex.idx in the JAR.">アプリケーションをビルドする場合、<code>maven</code>はJARに索引<code>META-INF/jandex.idx</code>を含める必要があります。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.3"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3MyPQN.spl1" title="原文 : If you do not modify your build to create the index then the Helidon MP OpenAPI runtime automatically creates one in memory during app start-up.">索引を作成するようにビルドを変更<em>しない</em>と、Helidon MP OpenAPIランタイムによって、アプリケーションの起動時にメモリーに索引が自動的に作成されます。</span> <span class="merged" id="all.3MyPQN.spl2" title="原文 : This slows down your app start-up and, depending on how CDI is configured, might inadvertently miss information.">これにより、アプリケーションの起動が遅くなり、CDIの構成方法によっては、誤って情報が失われる可能性があります。</span> </p>

<p><span class="merged" id="all.2Eurto" title="原文 : We strongly recommend using the Jandex plug-in to build the index into your app.">Jandexプラグインを使用して、アプリに索引を作成することを<em>強くお薦めします</em>。</span></p>
</p>
</div>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.8"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.45Ic0V" title="原文 : MicroProfile OpenAPI GitHub Repository"><a href="https://github.com/eclipse/microprofile-open-api" target="_blank">MicroProfile OpenAPI GitHubリポジトリ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.9LfJa" title="原文 : MicroProfile OpenAPI Specification"><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html" target="_blank">MicroProfile OpenAPI仕様</a></span></p>

</li>
</ul>

</div>

</doc-view>
