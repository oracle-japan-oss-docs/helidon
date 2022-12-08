<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4ULwtv" title="原文 : OpenAPI in SE">SEのOpenAPI</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1sccbZ" title="原文 : Easily allow your Helidon SE application to serve an OpenAPI document that describes your application&rsquo;s endpoints.">Helidon SEアプリケーションが、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを簡単に提供できるようにします。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.54"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.13KSFD" title="原文 : To enable OpenAPI add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OpenAPIを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-openapi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_openapi_support_in_helidon_se"><span class="merged" id="all.2ovQx5" title="原文 : OpenAPI support in Helidon SE">Helidon SEでのOpenAPIサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.3MjN8P.spl1" title="原文 : You can very simply add support for OpenAPI to your Helidon SE application.">Helidon SEアプリケーションにOpenAPIのサポートを追加するだけですみます。</span> <span class="merged" id="all.3MjN8P.spl2" title="原文 : This document shows what changes you need to make to your application and how to access the OpenAPI document for your application at runtime.">このドキュメントでは、アプリケーションに加える必要がある変更と、実行時にアプリケーションのOpenAPIドキュメントにアクセスする方法について説明します。</span> </p>

</div>

<h2 id="_changing_your_application"><span class="merged" id="all.6cL9f.1" title="原文 : Changing your application">アプリケーションの変更</span></h2>
<div class="section">
<p><span class="merged" id="all.4NFZWf.spl1" title="原文 : OpenAPI support in Helidon SE largely follows the MicroProfile OpenAPI spec.">Helidon SEでのOpenAPIのサポートは、主に<a href="https://github.com/eclipse/microprofile-open-api/blob/master/spec/src/main/asciidoc/microprofile-openapi-spec.adoc" id="" target="_blank" >「MicroProfile OpenAPI仕様」</a>に従います。</span> <span class="merged" id="all.4NFZWf.spl2" title="原文 : But Helidon SE does not process annotations, which is one way to convey OpenAPI information about the endpoints in your app.">ただし、Helidon SEでは注釈は処理されません。これは、アプリケーション内のエンドポイントに関するOpenAPI情報を伝達する方法の1つです。</span> <span class="merged" id="all.4NFZWf.spl3" title="原文 : You can still use OpenAPI with your Helidon SE app by providing OpenAPI information about the endpoints without using annotations.">注釈を使用せずにエンドポイントに関するOpenAPI情報を提供することで、Helidon SEアプリケーションでOpenAPIを引き続き使用できます。</span> </p>

<p><span class="merged" id="all.1IfILR" title="原文 : Helidon SE includes a complete OpenAPI example based on the SE quick-start sample app.">Helidon SEには、SEクイックスタート・サンプル・アプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/2.5.4/examples/openapi" id="" target="_blank" >「完全なOpenAPIの例」</a>が含まれています。</span></p>

<p><span class="merged" id="all.1S293b" title="原文 : To use OpenAPI from your Helidon SE app:">Helidon SEアプリからOpenAPIを使用するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.52N1M.1" title="原文 : Edit your pom.xml."><code>pom.xml</code>を編集します。</span>

</li>
<li>
<span class="merged" id="all.48AbJu" title="原文 : Update your Java code to register OpenAPISupport.">Javaコードを更新して、<code>OpenAPISupport</code>を登録します。</span>

</li>
<li>
<span class="merged" id="all.2LbcPB.1" title="原文 : Furnish OpenAPI information about your application&rsquo;s endpoints.">アプリケーションのエンドポイントに関するOpenAPI情報を提供します。</span>

</li>
<li>
<span class="merged" id="all.1AGqOZ" title="原文 : Update your application&rsquo;s Helidon configuration (optional).">アプリケーションのHelidon構成を更新します(オプション)。</span>

</li>
</ol>

<h3 id="_edit_your_pom_xml"><span class="merged" id="all.3R9XOo.1" title="原文 : Edit your pom.xml"><code>pom.xml</code>の編集</span></h3>
<div class="section">
<p><span class="merged" id="all.1m0K8r.spl1" title="原文 : Add a dependency for Helidon SE OpenAPI runtime support."><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Helidon SE OpenAPI</router-link>ランタイム・サポートの依存関係を追加します。</span> <span class="merged" id="all.1m0K8r.spl2" title="原文 : This is a compile-time dependency, because your code must register OpenAPISupport (a class in that artifact) like this:">これは、コードで次のように<code>OpenAPISupport</code> (そのアーティファクト内のクラス)を登録する必要があるため、コンパイル時に依存します:</span> </p>

</div>

<h3 id="_register_openapisupport_in_your_java_code"><span class="merged" id="all.1MuHne" title="原文 : Register OpenAPISupport in your Java code">Javaコードへの<code>OpenAPISupport</code>の登録</span></h3>
<div class="section">
<markup
lang="java"

>Config config = Config.create();
...
return Routing.builder()
        .register(JsonSupport.create())
        .register(OpenAPISupport.create(config)) <span class="conum" data-value="1" />
        .register(health)                   // Health at "/health"
        .register(metrics)                  // Metrics at "/metrics"
        .register("/greet", greetService)
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2viYkJ" title="原文 : Adds the OpenAPISupport service to your server."><code>OpenAPISupport</code>サービスをサーバーに追加します。</span></li>
</ul>
</div>

<h3 id="_furnish_openapi_information_about_your_endpoints"><span class="merged" id="all.4A2H73.1" title="原文 : Furnish OpenAPI information about your endpoints">エンドポイントに関するOpenAPI情報の提供</span></h3>
<div class="section">
<p><span class="merged" id="all.1EGBNR.spl1" title="原文 : Helidon SE OpenAPI combines information from all of the following sources as it builds its in-memory model of your application&rsquo;s API.">Helidon SE OpenAPIは、アプリケーションのAPIのインメモリー・モデルをビルドする際に、次のすべてのソースからの情報を結合します。</span> <span class="merged" id="all.1EGBNR.spl2" title="原文 : It constructs the OpenAPI document from this internal model.">この内部モデルからOpenAPI文書を構築します。</span> <span class="merged" id="all.1EGBNR.spl3" title="原文 : Your application can use one or more of these techniques.">アプリケーションでは、次のいずれかの方法を使用できます。</span> </p>


<h4 id="_provide_a_static_openapi_file"><span class="merged" id="all.31yfNL.1" title="原文 : Provide a static OpenAPI file">静的OpenAPIファイルの指定</span></h4>
<div class="section">
<p><span class="merged" id="all.3lwGSr.1.spl1" title="原文 : Add a static file at META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json."><code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>で静的ファイルを追加します。</span> <span class="merged" id="all.3lwGSr.1.spl2" title="原文 : Tools such as Swagger let you describe your app&rsquo;s API and they then generate an OpenAPI document file which you can include in your application so OpenAPI can use it.">Swaggerなどのツールを使用すると、アプリケーションのAPIを記述し、OpenAPIで使用できるようにアプリケーションに含めることができるOpenAPIドキュメント・ファイルを生成できます。</span> </p>

</div>

<h4 id="_write_and_configure_a_model_reader_class"><span class="merged" id="all.2KYXsY.1" title="原文 : Write and configure a model reader class">モデル・リーダー・クラスの記述と構成</span></h4>
<div class="section">
<p><span class="merged" id="all.4H8xnN.1.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASModelReader interface.">OpenAPI <a href="https://github.com/eclipse/microprofile-open-api/blob/master/api/src/main/java/org/eclipse/microprofile/openapi/OASModelReader.java" id="" target="_blank" ><code>org.eclipse.microprofile.openapi.OASModelReader</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.4H8xnN.1.spl2" title="原文 : Your model reader code programmatically adds elements to the internal model that OpenAPI builds.">モデル・リーダー・コードによって、OpenAPIがビルドする内部モデルに要素がプログラムによって追加されます。</span> </p>

<p><span class="merged" id="all.3G2RKN.spl1" title="原文 : Change your application&rsquo;s configuration to set openapi.model.reader as the fully-qualified class name of your class.">アプリケーションの構成を変更して、<code>openapi.model.reader</code>をクラスの完全修飾クラス名として設定します。</span> <span class="merged" id="all.3G2RKN.spl2" title="原文 : Also see Add OpenAPI dependency below.">次の<router-link @click.native="this.scrollFix('#_add_openapi_dependency')" to="#_add_openapi_dependency">「OpenAPI依存関係の追加」</router-link>も参照してください。</span> </p>

</div>

<h4 id="_write_and_configure_a_filter_class"><span class="merged" id="all.ecYXF.1" title="原文 : Write and configure a filter class">フィルタ・クラスの記述と構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1CKsbi.1.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASFilter interface.">OpenAPI <a href="https://github.com/eclipse/microprofile-open-api/blob/master/api/src/main/java/org/eclipse/microprofile/openapi/OASFilter.java" id="" target="_blank" ><code>org.eclipse.microprofile.openapi.OASFilter</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.1CKsbi.1.spl2" title="原文 : As OpenAPI composes its internal model, it invokes your filter with each model element before adding the element to the model.">OpenAPIは内部モデルを構成するため、モデルに要素を追加する<em>前</em>に、各モデル要素を使用してフィルタを起動します。</span> <span class="merged" id="all.1CKsbi.1.spl3" title="原文 : Your filter can accept the element as-is, modify it, or suppress it.">フィルタでは、要素をそのまま受け入れるか、変更するか、抑制できます。</span> </p>

<p><span class="merged" id="all.4Y7wtn.spl1" title="原文 : Change your application&rsquo;s configuration to set openapi.filter as the full-qualified class name of your class.">アプリケーションの構成を変更して、<code>openapi.filter</code>をクラスの完全修飾クラス名として設定します。</span> <span class="merged" id="all.4Y7wtn.spl2" title="原文 : Also see Add OpenAPI dependency below.">次の<router-link @click.native="this.scrollFix('#_add_openapi_dependency')" to="#_add_openapi_dependency">「OpenAPI依存関係の追加」</router-link>も参照してください。</span> </p>

</div>

<h4 id="_add_openapi_dependency"><span class="merged" id="all.3JuKT4" title="原文 : Add OpenAPI dependency">OpenAPI依存関係の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2HGjus" title="原文 : If you implement either a model reader or a filter, add this dependency to your pom.xml:">モデル・リーダーまたはフィルタを実装する場合は、次の依存関係を<code>pom.xml</code>に追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;org.eclipse.microprofile.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;microprofile-openapi-api&lt;/artifactId&gt;
    &lt;version&gt;1.2&lt;/version&gt;
&lt;/dependency&gt;</markup>

</div>
</div>

<h3 id="_update_application_configuration"><span class="merged" id="all.4Dorhw"  title="原文:: Update application configuration">アプリケーション構成の更新</span></h3>
<div class="section">
<p><span class="merged" id="all.3wkjCa" title="原文 : Helidon SE support for OpenAPI supports a handful of config properties patterned after those described in the MicroProfile OpenAPI spec, two of which were mentioned above.">Helidon SE support for OpenAPIでは、前述の2つのMicroProfile OpenAPI仕様に記述されている構成プロパティの後にパターン化されたいくつかの構成プロパティがサポートされています。</span></p>

<div class="block-title"><span class="merged" id="all.3Sx2bi" title="原文 : Helidon SE OpenAPI Config Properties"><span>Helidon SE OpenAPI構成プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8.3"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.3APT35.2"  title="原文:: Use">使用</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.45XVYR"  title="原文: openapi.model.reader"><code>openapi.model.reader</code></span></td>
<td class=""><span class="merged" id="all.3xl94F" title="原文 : Fully-qualified class name for the model reader">モデル・リーダーの完全修飾クラス名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1x4Kc3"  title="原文: openapi.filter"><code>openapi.filter</code></span></td>
<td class=""><span class="merged" id="all.2AWRx3" title="原文 : Fully-qualified class name for the filter">フィルタの完全修飾クラス名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1mVFoj"  title="原文: openapi.servers"><code>openapi.servers</code></span></td>
<td class=""><span class="merged" id="all.1H42fG" title="原文 : Lists servers that provide connectivity information">接続情報を提供するサーバーをリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.EnJGd"  title="原文: openapi.servers.path"><code>openapi.servers.path</code></span></td>
<td class=""><span class="merged" id="all.qefek" title="原文 : Prefix for config properties specifying alternative servers for given paths">指定されたパスの代替サーバーを指定する構成プロパティのプレフィクス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2L3t3t"  title="原文: openapi.servers.operation"><code>openapi.servers.operation</code></span></td>
<td class=""><span class="merged" id="all.1wKkhN" title="原文 : Prefix for config properties specifying alternative servers for given operations">指定された操作の代替サーバーを指定する構成プロパティのプレフィクス</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1NqiGh" title="原文 : For more information on what these settings do consult the MicroProfile OpenAPI spec.">これらの設定の詳細は、MicroProfile OpenAPI仕様を参照してください。</span></p>

<p><span class="merged" id="all.3JB930" title="原文 : Helidon SE also supports additional properties specific to Helidon.">Helidon SEは、Helidon固有の追加プロパティもサポートしています。</span></p>

<div class="block-title"><span class="merged" id="all.398FKU.1" title="原文 : Helidon-specific OpenAPI Config Properties"><span>Helidon-specific OpenAPI構成プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8.4"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.3APT35.3"  title="原文:: Use">使用</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2AKve9.1"  title="原文: openapi.web-context"><code>openapi.web-context</code></span></td>
<td class=""><span class="merged" id="all.1btmrv.1" title="原文 : Path which serves the OpenAPI document (defaults to /openapi)">OpenAPIドキュメントを提供するパス(デフォルトは<code>/openapi</code>)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uHMSE.1"  title="原文: openapi.static-file"><code>openapi.static-file</code></span></td>
<td class=""><span class="merged" id="all.meaou.1" title="原文 : Full path to the static OpenAPI file (defaults to META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json)">静的OpenAPIファイルへのフルパス(デフォルトは<code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.41iYyH.spl1" title="原文 : Set these config properties in one of the config sources your app uses so the Helidon config system will load them.">アプリケーションが使用する構成ソースのいずれかにこれらの構成プロパティを設定して、Helidon構成システムがそれらをロードできるようにします。</span> <span class="merged" id="all.41iYyH.spl2" title="原文 : Often developers use application.yaml at the top level of the application JAR.">多くの場合、開発者はアプリケーションJARの最上位レベルで<code>application.yaml</code>を使用します。</span> </p>

</div>
</div>

<h2 id="_accessing_the_openapi_document"><span class="merged" id="all.3wdk70.1" title="原文 : Accessing the OpenAPI document">OpenAPIドキュメントへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.4MXQjs" title="原文 : Now your Helidon SE application will automatically respond to an additional endpoint -  /openapi - and it will return the OpenAPI document describing the endpoints in your application.">これで、Helidon SEアプリケーションは、追加のエンドポイントである<code>/openapi</code>に自動的に応答し、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを返します。</span></p>

<p><span class="merged" id="all.3aTxnI.spl1" title="原文 : By default, Helidon OpenAPI returns the OpenAPI document in YAML.">デフォルトでは、Helidon OpenAPIはYAMLでOpenAPI文書を返します。</span> <span class="merged" id="all.3aTxnI.spl2" title="原文 : There is not yet an adopted IANA YAML media type, but a proposed one specifically for OpenAPI documents that has some support is application/vnd.oai.openapi.">IANA YAMLメディア・タイプはまだ採用されていませんが、サポートされているOpenAPIドキュメント専用のメディア・タイプとして<code>application/vnd.oai.openapi</code>が提案されています。</span> <span class="merged" id="all.3aTxnI.spl3" title="原文 : That is what Helidon returns, by default.">これは、Helidonがデフォルトで返す内容です。</span> </p>

<p><span class="merged" id="all.2jxsfi" title="原文 : In addition a client can specify Accept: as either application/vnd.oai.openapi+json or application/json to request JSON.">また、クライアントはJSONをリクエストするために<code>Accept:</code>を<code>application/vnd.oai.openapi+json</code>または<code>application/json</code>として指定できます。</span></p>

</div>
</doc-view>
