<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1xELY5"  title="原文: OpenAPI">OpenAPI</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1Zy5gG" title="原文 : Easily allow your Helidon MP application to serve an OpenAPI document that describes your application&rsquo;s endpoints.">Helidon MPアプリケーションが、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを簡単に提供できるようにします。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_openapi_support_in_helidon_mp"><span class="merged" id="all.eMVyd" title="原文 : OpenAPI support in Helidon MP">Helidon MPでのOpenAPIサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.1oihtN.spl1" title="原文 : You can very simply add support for OpenAPI to your Helidon MP application.">Helidon MPアプリケーションにOpenAPIのサポートを追加するだけですみます。</span> <span class="merged" id="all.1oihtN.spl2" title="原文 : This document shows what changes you need to make to your application and how to access the OpenAPI document for your application at runtime.">このドキュメントでは、アプリケーションに加える必要がある変更と、実行時にアプリケーションのOpenAPIドキュメントにアクセスする方法について説明します。</span> </p>

</div>

<h2 id="_changing_your_application"><span class="merged" id="all.6cL9f" title="原文 : Changing your application">アプリケーションの変更</span></h2>
<div class="section">
<p><span class="merged" id="all.4bCDWr" title="原文 : Helidon MP conforms to the MicroProfile OpenAPI specification, which was inspired by the OpenAPI spec itself.">Helidon MPは、<a href="https://github.com/OAI/OpenAPI-Specification" id="" target="_blank" >「OpenAPI仕様」</a>自体によってインスピレーションされた<a href="https://github.com/eclipse/microprofile-open-api/blob/master/spec/src/main/asciidoc/microprofile-openapi-spec.adoc" id="" target="_blank" >「MicroProfile OpenAPI仕様」</a>に準拠しています。</span></p>

<p><span class="merged" id="all.1MHLhk" title="原文 : Helidon MP includes a complete OpenAPI example based on the MP quick-start sample app.">Helidon MPには、MPクイックスタート・サンプル・アプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/microprofile/openapi-basic" id="" target="_blank" >「完全なOpenAPIの例」</a>が含まれています。</span></p>

<p><span class="merged" id="all.ndBCy" title="原文 : To use OpenAPI from your Helidon MP app:">Helidon MPアプリケーションからOpenAPIを使用するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.52N1M" title="原文 : Edit your pom.xml."><code>pom.xml</code>を編集します。</span>

</li>
<li>
<span class="merged" id="all.2LbcPB" title="原文 : Furnish OpenAPI information about your application&rsquo;s endpoints.">アプリケーションのエンドポイントに関するOpenAPI情報を提供します。</span>

</li>
<li>
<span class="merged" id="all.1YsnYR" title="原文 : Update your application&rsquo;s configuration (optional).">アプリケーションの構成を更新します(オプション)。</span>

</li>
</ol>

<h3 id="_edit_your_pom_xml"><span class="merged" id="all.3R9XOo" title="原文 : Edit your pom.xml"><code>pom.xml</code>の編集</span></h3>
<div class="section">

<h4 id="_building_the_jandex_index"><span class="merged" id="all.2ES8bw" title="原文 : Building the Jandex index">Jandex索引のビルド</span></h4>
<div class="section">
<p><span class="merged" id="all.uG8hR.spl1" title="原文 : A Jandex index stores information about the classes and methods in your app and what annotations they have.">Jandex索引には、アプリケーション内のクラスとメソッド、およびそれらの注釈に関する情報が格納されます。</span> <span class="merged" id="all.uG8hR.spl2" title="原文 : It allows CDI to process annotations faster during your application&rsquo;s start-up.">CDIでは、アプリケーションの起動時に注釈をより迅速に処理できます。</span> </p>

<p><span class="merged" id="all.PDaCB" title="原文 : Add the Jandex maven plug-in to the &lt;build&gt;&lt;plugins&gt; section of your pom.xml:"><code>pom.xml</code>の<code>&lt;build>&lt;plugins></code>セクションに<a href="https://github.com/wildfly/jandex-maven-plugin" id="" target="_blank" >Jandex mavenプラグイン</a>を追加します:</span></p>

<markup
lang="xml"

>&lt;plugin&gt;
    &lt;groupId&gt;org.jboss.jandex&lt;/groupId&gt;
    &lt;artifactId&gt;jandex-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;1.0.6&lt;/version&gt;
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
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3MyPQN.spl1" title="原文 : If you do not modify your build to create the index then the Helidon MP OpenAPI runtime automatically creates one in memory during app start-up.">索引を作成するようにビルドを変更<em>しない</em>と、Helidon MP OpenAPIランタイムによって、アプリケーションの起動時にメモリーに索引が自動的に作成されます。</span> <span class="merged" id="all.3MyPQN.spl2" title="原文 : This slows down your app start-up and, depending on how CDI is configured, might inadvertently miss information.">これにより、アプリケーションの起動が遅くなり、CDIの構成方法によっては、誤って情報が失われる可能性があります。</span> </p>

<p><span class="merged" id="all.2Eurto" title="原文 : We strongly recommend using the Jandex plug-in to build the index into your app.">Jandexプラグインを使用して、アプリに索引を作成することを<em>強くお薦めします</em>。</span></p>
</p>
</div>
</div>

<h4 id="_adding_helidon_mp_openapi_support_to_your_app"><span class="merged" id="all.31BUpE" title="原文 : Adding Helidon MP OpenAPI support to your app">アプリへのHelidon MP OpenAPIサポートの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3UWtZY" title="原文 : Add these two sections to the &lt;dependencies&gt; portion of your pom.xml:">次の2つのセクションを<code>pom.xml</code>の<code>&lt;dependencies></code>部分に追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt; <span class="conum" data-value="1" />
    &lt;groupId&gt;org.eclipse.microprofile.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;microprofile-openapi-api&lt;/artifactId&gt;
    &lt;version&gt;1.1.2&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt; <span class="conum" data-value="2" />
    &lt;groupId&gt;io.helidon.microprofile.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-openapi&lt;/artifactId&gt;
    &lt;version&gt;2.2.1-SNAPSHOT&lt;/version&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.23oadO" title="原文 : Defines the MicroProfile OpenAPI annotations so you can use them in your code.">コードで使用できるようにMicroProfile OpenAPI注釈を定義します。</span></li>
<li data-value="2"><span class="merged" id="all.1WaVqx" title="原文 : Adds the Helidon MP OpenAPI runtime support.">Helidon MP OpenAPIランタイム・サポートを追加します。</span></li>
</ul>
</div>
</div>

<h3 id="_furnish_openapi_information_about_your_endpoints"><span class="merged" id="all.4A2H73" title="原文 : Furnish OpenAPI information about your endpoints">エンドポイントに関するOpenAPI情報の提供</span></h3>
<div class="section">
<p><span class="merged" id="all.1zopBN.spl1" title="原文 : Helidon MP OpenAPI combines information from all of the following sources as it builds its in-memory model of your application&rsquo;s API.">Helidon MP OpenAPIは、アプリケーションのAPIのインメモリー・モデルをビルドする際に、次のすべてのソースからの情報を結合します。</span> <span class="merged" id="all.1zopBN.spl2" title="原文 : It constructs the OpenAPI document from this internal model.">この内部モデルからOpenAPI文書を構築します。</span> <span class="merged" id="all.1zopBN.spl3" title="原文 : Your application can use one or more of these techniques.">アプリケーションでは、次のいずれかの方法を使用できます。</span> </p>


<h4 id="_annotate_the_endpoints_in_your_app"><span class="merged" id="all.2eI95h" title="原文 : Annotate the endpoints in your app">アプリケーション内のエンドポイントへの注釈付け</span></h4>
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

<p><span class="merged" id="all.3HrRy4.spl1" title="原文 : This excerpt shows only a few annotations for illustration.">この抜粋は、例示のためにいくつかの注釈のみを示しています。</span> <span class="merged" id="all.3HrRy4.spl2" title="原文 : The Helidon MP OpenAPI example illustrates more, and the MicroProfile OpenAPI spec describes them all."><a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/microprofile/openapi-basic" id="" target="_blank" >「Helidon MP OpenAPIの例」</a>ではさらに説明し、<a href="https://github.com/eclipse/microprofile-open-api/blob/master/spec/src/main/asciidoc/microprofile-openapi-spec.adoc" id="" target="_blank" >「MicroProfile OpenAPI仕様」</a>ではそれらすべてについて説明します。</span> </p>

</div>

<h4 id="_provide_a_static_openapi_file"><span class="merged" id="all.31yfNL" title="原文 : Provide a static OpenAPI file">静的OpenAPIファイルの指定</span></h4>
<div class="section">
<p><span class="merged" id="all.3lwGSr.spl1" title="原文 : Add a static file at META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json."><code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>で静的ファイルを追加します。</span> <span class="merged" id="all.3lwGSr.spl2" title="原文 : Tools such as Swagger let you describe your app&rsquo;s API and they then generate an OpenAPI document file which you can include in your application so OpenAPI can use it.">Swaggerなどのツールを使用すると、アプリケーションのAPIを記述し、OpenAPIで使用できるようにアプリケーションに含めることができるOpenAPIドキュメント・ファイルを生成できます。</span> </p>

</div>

<h4 id="_write_and_configure_a_model_reader_class"><span class="merged" id="all.2KYXsY" title="原文 : Write and configure a model reader class">モデル・リーダー・クラスの記述と構成</span></h4>
<div class="section">
<p><span class="merged" id="all.4H8xnN.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASModelReader interface.">OpenAPI <a href="https://github.com/eclipse/microprofile-open-api/blob/master/api/src/main/java/org/eclipse/microprofile/openapi/OASModelReader.java" id="" target="_blank" ><code>org.eclipse.microprofile.openapi.OASModelReader</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.4H8xnN.spl2" title="原文 : Your model reader code programmatically adds elements to the internal model that OpenAPI builds.">モデル・リーダー・コードによって、OpenAPIがビルドする内部モデルに要素がプログラムによって追加されます。</span> </p>

<p><span class="merged" id="all.vXdGy" title="原文 : Change your application&rsquo;s MP configuration to set mp.openapi.model.reader as the fully-qualified class name of your class.">アプリケーションのMP構成を変更して、<code>mp.openapi.model.reader</code>をクラスの完全修飾クラス名として設定します。</span></p>

</div>

<h4 id="_write_and_configure_a_filter_class"><span class="merged" id="all.ecYXF" title="原文 : Write and configure a filter class">フィルタ・クラスの記述と構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1CKsbi.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASFilter interface.">OpenAPI <a href="https://github.com/eclipse/microprofile-open-api/blob/master/api/src/main/java/org/eclipse/microprofile/openapi/OASFilter.java" id="" target="_blank" ><code>org.eclipse.microprofile.openapi.OASFilter</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.1CKsbi.spl2" title="原文 : As OpenAPI composes its internal model, it invokes your filter with each model element before adding the element to the model.">OpenAPIは内部モデルを構成するため、モデルに要素を追加する<em>前</em>に、各モデル要素を使用してフィルタを起動します。</span> <span class="merged" id="all.1CKsbi.spl3" title="原文 : Your filter can accept the element as-is, modify it, or suppress it.">フィルタでは、要素をそのまま受け入れるか、変更するか、抑制できます。</span> </p>

<p><span class="merged" id="all.2xOU7a" title="原文 : Change your application&rsquo;s configuration to set mp.openapi.filter as the full-qualified class name of your class.">アプリケーションの構成を変更して、<code>mp.openapi.filter</code>をクラスの完全修飾クラス名として設定します。</span></p>

</div>
</div>

<h3 id="_update_your_application_configuration"><span class="merged" id="all.2dCSQ1" title="原文 : Update your application configuration">アプリケーション構成の更新</span></h3>
<div class="section">
<p><span class="merged" id="all.2Zu6yn.spl1" title="原文 : Beyond the two config properties that denote the model reader and filter, Helidon MP OpenAPI supports a number of others.">Helidon MP OpenAPIでは、モデル・リーダーおよびフィルタを示す構成プロパティ以外にも、多数のプロパティがサポートされています。</span> <span class="merged" id="all.2Zu6yn.spl2" title="原文 : These are described in the configuration section of the MicroProfile OpenAPI spec.">これらは、MicroProfile OpenAPI仕様の<a href="https://github.com/eclipse/microprofile-open-api/blob/master/spec/src/main/asciidoc/microprofile-openapi-spec.adoc#configuration" id="" target="_blank" >「構成セクション」</a>で説明されています。</span> </p>

</div>
</div>

<h2 id="_accessing_the_openapi_document"><span class="merged" id="all.3wdk70" title="原文 : Accessing the OpenAPI document">OpenAPIドキュメントへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.nXBLD" title="原文 : Now your Helidon MP application will automatially respond to an additional endpoint -  /openapi - and it will return the OpenAPI document describing the endpoints in your application.">これで、Helidon MPアプリケーションは、追加のエンドポイントである<code>/openapi</code>に自動的に応答し、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを返します。</span></p>

<p><span class="merged" id="all.tESP.spl1" title="原文 : By default, per the MicroProfile OpenAPI spec, the default format of the OpenAPI document is YAML.">デフォルトでは、MicroProfile OpenAPI仕様に従って、OpenAPI文書のデフォルト書式はYAMLです。</span> <span class="merged" id="all.tESP.spl2" title="原文 : There is not yet an adopted IANA YAML media type, but a proposed one specifically for OpenAPI documents that has some support is application/vnd.oai.openapi.">IANA YAMLメディア・タイプはまだ採用されていませんが、サポートされているOpenAPIドキュメント専用のメディア・タイプとして<code>application/vnd.oai.openapi</code>が提案されています。</span> <span class="merged" id="all.tESP.spl3" title="原文 : That is what Helidon returns, by default.">これは、Helidonがデフォルトで返す内容です。</span> </p>

<p><span class="merged" id="all.1aTzfn" title="原文 : A client can specify Accept: as either application/vnd.oai.openapi+json or application/json to request JSON.">クライアントは、JSONをリクエストするために<code>Accept:</code>を<code>application/vnd.oai.openapi+json</code>または<code>application/json</code>として指定できます。</span></p>

</div>
</doc-view>
