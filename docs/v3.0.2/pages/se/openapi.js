<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.57"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.55" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.41" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.37" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.22" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.33" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.39" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.24" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.71"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4VtgWk.1" title="原文 : The OpenAPI specification defines a standard way to express the interface exposed by a REST service."><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">「OpenAPI仕様」</a>は、RESTサービスによって公開されるインタフェースを表す標準方法を定義します。</span></p>

<p><span class="merged" id="all.3bFqFl.1" title="原文 : The MicroProfile OpenAPI spec explains how MicroProfile embraces OpenAPI, adding annotations, configuration, and a service provider interface (SPI)."><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html" target="_blank">「MicroProfile OpenAPI仕様」</a>は、MicroProfileがOpenAPIを取り込み、注釈、構成およびサービス・プロバイダ・インタフェース(SPI)を追加する方法について説明します。</span></p>

<p><span class="merged" id="all.2J2cre" title="原文 : OpenAPI support in Helidon SE draws its inspiration from MicroProfile OpenAPI but does not implement the spec because Helidon SE does not support annotations.">Helidon SEでのOpenAPIサポートは、MicroProfile OpenAPIからインスピレーションを得ますが、Helidon SEは注釈をサポートしていないため、仕様を実装しません。</span></p>

<p><span class="merged" id="all.2Etfba" title="原文 : The OpenAPI support in Helidon SE performs two main tasks:">Helidon SEでのOpenAPIサポートは、2つの主なタスクを実行します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zJgFA.1" title="原文 : Build an in-memory model of the REST API your service implements.">サービスが実装するREST APIのインメモリー・モデルを構築します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3UvkM.1" title="原文 : Expose the model in text format (typically YAML) via the /openapi endpoint."><code>/openapi</code>エンドポイント経由でモデルをテキスト形式(通常はYAML)で公開します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1bEaFI.1" title="原文 : To construct the model, Helidon gathers information about the service API from whichever of these sources are present in the application:">モデルを構築するために、Helidonは、アプリケーションに存在する次のソースのいずれかからサービスAPIに関する情報を収集します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4XS5nr.1" title="原文 : a model reader">a <em>「モデル・リーダー」</em></span></p>
<p><span class="merged" id="all.PjOQe.1" title="原文 : The SPI defines an interface you can implement in your application for programmatically providing part or all of the model;">SPIは、プログラムによってモデルの一部またはすべてを提供するために、アプリケーションに実装できるインタフェースを定義</span></p>

</li>
<li>
<p><span class="merged" id="all.Ru2Wt.1" title="原文 : a static OpenAPI document file packaged as part of your service;">サービスの一部としてパッケージ化された静的OpenAPIドキュメント・ファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.3JrDeo.1" title="原文 : a filter class"><em>「フィルタ」</em>クラス</span></p>
<p><span class="merged" id="all.19JyRy.1" title="原文 : The SPI defines an interface you can implement in your application which can mask parts of the model.">SPIは、モデルの一部をマスクできる、アプリケーションに実装できるインタフェースを定義します。</span></p>

</li>
</ul>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.52"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.4fI1RW" title="原文 : To enable OpenAPI add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OpenAPIを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-openapi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.56"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.3MjN8P.spl1" title="原文 : You can very simply add support for OpenAPI to your Helidon SE application.">Helidon SEアプリケーションにOpenAPIのサポートを追加するだけですみます。</span> <span class="merged" id="all.3MjN8P.spl2" title="原文 : This document shows what changes you need to make to your application and how to access the OpenAPI document for your application at runtime.">このドキュメントでは、アプリケーションに加える必要がある変更と、実行時にアプリケーションのOpenAPIドキュメントにアクセスする方法について説明します。</span> </p>


<h3 id="_changing_your_application"><span class="merged" id="all.6cL9f.1" title="原文 : Changing your application">アプリケーションの変更</span></h3>
<div class="section">

<h4 id="_register_openapisupport_in_your_application_routing"><span class="merged" id="all.3kWasS" title="原文 : Register OpenAPISupport in your application routing">アプリケーション・ルーティングに<code>OpenAPISupport</code>を登録</span></h4>
<div class="section">
<p><span class="merged" id="all.j2b6k.spl1" title="原文 : Helidon SE provides the OpenAPISupport class which your application uses to assemble the in-memory model and expose the /openapi endpoint to clients.">Helidon SEは、アプリケーションがインメモリー・モデルを組み立て、<code>/openapi</code>エンドポイントをクライアントに公開するために使用する<a href="./apidocs/io.helidon.openapi/OpenAPISupport.html" target="_blank"><code>OpenAPISupport</code></a>クラスを提供します。</span> <span class="merged" id="all.j2b6k.spl2" title="原文 : You can create an instance either using a static create method or by instantiating its Builder.">インスタンスは、静的<code>create</code>メソッドを使用するか、<a href="./apidocs/io.helidon.openapi/OpenAPISupport.Builder.html" target="_blank"><code>Builder</code></a>をインスタンス化することで作成できます。</span> <span class="merged" id="all.j2b6k.spl3" title="原文 : The example below illustrates one way to do this."><router-link @click.native="this.scrollFix('#register_openapisupport')" to="#register_openapisupport">「下の例」</router-link>は、この方法の1つを示しています。</span> </p>

</div>


<h4 id="_furnish_openapi_information_about_your_endpoints"><span class="merged" id="all.4A2H73.1" title="原文 : Furnish OpenAPI information about your endpoints">エンドポイントに関するOpenAPI情報の提供</span></h4>
<div class="section">
<p><span class="merged" id="all.2NWW7j.spl1" title="原文 : OpenAPI support in Helidon SE largely follows the MicroProfile OpenAPI spec.">Helidon SEでのOpenAPIのサポートは、主に<a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/microprofile-openapi-spec-3.0.html" target="_blank">「MicroProfile OpenAPI仕様」</a>に従います。</span> <span class="merged" id="all.2NWW7j.spl2" title="原文 : But because Helidon SE does not process annotations, your application supplies data for the OpenAPI model in the other ways listed earlier.">ただし、Helidon SEは注釈を処理しないため、OpenAPIモデルのデータは、前にリストした他の方法で提供されます。</span> </p>


<h5 id="_provide_a_static_openapi_file"><span class="merged" id="all.31yfNL.2" title="原文 : Provide a static OpenAPI file">静的OpenAPIファイルの指定</span></h5>
<div class="section">
<p><span class="merged" id="all.3lwGSr.2.spl1" title="原文 : Add a static file at META-INF/openapi.yml, META-INF/openapi.yaml, or META-INF/openapi.json."><code>META-INF/openapi.yml</code>、<code>META-INF/openapi.yaml</code>または<code>META-INF/openapi.json</code>で静的ファイルを追加します。</span> <span class="merged" id="all.3lwGSr.2.spl2" title="原文 : Tools such as Swagger let you describe your app&rsquo;s API and they then generate an OpenAPI document file which you can include in your application so OpenAPI can use it.">Swaggerなどのツールを使用すると、アプリケーションのAPIを記述し、OpenAPIで使用できるようにアプリケーションに含めることができるOpenAPIドキュメント・ファイルを生成できます。</span> </p>

</div>


<h5 id="_write_and_configure_a_model_reader_class"><span class="merged" id="all.2KYXsY.2" title="原文 : Write and configure a model reader class">モデル・リーダー・クラスの記述と構成</span></h5>
<div class="section">
<p><span class="merged" id="all.2jcPJW.2.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASModelReader interface.">OpenAPI <a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs/apidocs/org/eclipse/microprofile/openapi//OASModelReader.html" target="_blank"><code>org.eclipse.microprofile.openapi.OASModelReader</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.2jcPJW.2.spl2" title="原文 : Your model reader code programmatically adds elements to the internal model that OpenAPI builds.">モデル・リーダー・コードによって、OpenAPIがビルドする内部モデルに要素がプログラムによって追加されます。</span> </p>

<p><span class="merged" id="all.vXdGy.1" title="原文 : Change your application&rsquo;s MP configuration to set mp.openapi.model.reader as the fully-qualified class name of your class.">アプリケーションのMP構成を変更して、<code>mp.openapi.model.reader</code>をクラスの完全修飾クラス名として設定します。</span></p>

</div>


<h5 id="_write_and_configure_a_filter_class"><span class="merged" id="all.ecYXF.1" title="原文 : Write and configure a filter class">フィルタ・クラスの記述と構成</span></h5>
<div class="section">
<p><span class="merged" id="all.3tjv2h.1.spl1" title="原文 : Write a Java class that implements the OpenAPI org.eclipse.microprofile.openapi.OASFilter interface.">OpenAPI <a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs/apidocs/org/eclipse/microprofile/openapi//OASFilter.html" target="_blank"><code>org.eclipse.microprofile.openapi.OASFilter</code></a>インタフェースを実装するJavaクラスを記述します。</span> <span class="merged" id="all.3tjv2h.1.spl2" title="原文 : As OpenAPI composes its internal model, it invokes your filter with each model element before adding the element to the model.">OpenAPIは内部モデルを構成するため、モデルに要素を追加する<em>前</em>に、各モデル要素を使用してフィルタを起動します。</span> <span class="merged" id="all.3tjv2h.1.spl3" title="原文 : Your filter can accept the element as-is, modify it, or suppress it.">フィルタでは、要素をそのまま受け入れるか、変更するか、抑制できます。</span> </p>

<p><span class="merged" id="all.2xOU7a.1" title="原文 : Change your application&rsquo;s configuration to set mp.openapi.filter as the full-qualified class name of your class.">アプリケーションの構成を変更して、<code>mp.openapi.filter</code>をクラスの完全修飾クラス名として設定します。</span></p>

</div>

</div>


<h4 id="_add_openapi_dependency"><span class="merged" id="all.3JuKT4" title="原文 : Add OpenAPI dependency">OpenAPI依存関係の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2HGjus" title="原文 : If you implement either a model reader or a filter, add this dependency to your pom.xml:">モデル・リーダーまたはフィルタを実装する場合は、次の依存関係を<code>pom.xml</code>に追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;org.eclipse.microprofile.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;microprofile-openapi-api&lt;/artifactId&gt;
    &lt;version&gt;{microprofile-openapi-version}&lt;/version&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h3 id="_accessing_the_rest_endpoint"><span class="merged" id="all.4bICnq.1" title="原文 : Accessing the REST Endpoint">RESTエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.17uXVL" title="原文 : Once you add the SE OpenAPI dependency to your project and add code to create the OpenAPISupport object to your routing, your application will automatically respond to the built-in endpoint - /openapi - and it will return the OpenAPI document describing the endpoints in your application.">プロジェクトにSE OpenAPI依存関係を追加し、ルーティングに<code>OpenAPISupport</code>オブジェクトを作成するコードを追加すると、アプリケーションは組込みエンドポイント(<code>/openapi</code>)に自動的に応答し、アプリケーションのエンドポイントを記述するOpenAPIドキュメントを返します。</span></p>

<p><span class="merged" id="all.tESP.1.spl1" title="原文 : By default, per the MicroProfile OpenAPI spec, the default format of the OpenAPI document is YAML.">デフォルトでは、MicroProfile OpenAPI仕様に従って、OpenAPI文書のデフォルト書式はYAMLです。</span> <span class="merged" id="all.tESP.1.spl2" title="原文 : There is not yet an adopted IANA YAML media type, but a proposed one specifically for OpenAPI documents that has some support is application/vnd.oai.openapi.">IANA YAMLメディア・タイプはまだ採用されていませんが、サポートされているOpenAPIドキュメント専用のメディア・タイプとして<code>application/vnd.oai.openapi</code>が提案されています。</span> <span class="merged" id="all.tESP.1.spl3" title="原文 : That is what Helidon returns, by default.">これは、Helidonがデフォルトで返す内容です。</span> </p>

<p><span class="merged" id="all.STA9N.1.spl1" title="原文 : In addition, a client can specify the HTTP header Accept as either application/vnd.oai.openapi+json or application/json to request JSON.">また、クライアントはHTTPヘッダー<code>Accept</code>を<code>application/vnd.oai.openapi+json</code>または<code>application/json</code>として指定して、JSONをリクエストできます。</span> <span class="merged" id="all.STA9N.1.spl2" title="原文 : Alternatively, the client can pass the query parameter format as either JSON or YAML to receive application/json or application/vnd.oai.openapi (YAML) output, respectively.">または、クライアントは、問合せパラメータ<code>format</code>を<code>JSON</code>または<code>YAML</code>として渡して、それぞれ<code>application/json</code>または<code>application/vnd.oai.openapi</code> (YAML)出力を受信できます。</span> </p>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.25"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1PtHqb.spl1" title="原文 : The MicroProfile OpenAPI JavaDocs give full details of the classes and interfaces you can use in your code."><a href="https://download.eclipse.org/microprofile/microprofile-open-api-3.0/apidocs" target="_blank">MicroProfile OpenAPI JavaDocs</a>は、コードで使用できるクラスおよびインタフェースの詳細を示します。</span> <span class="merged" id="all.1PtHqb.spl2" title="原文 : Remember that, although the JavaDocs describe annotations, Helidon SE does not support them.">JavaDocsは注釈を記述しますが、Helidon SEは注釈をサポートしません。</span> </p>

<p><span class="merged" id="all.1yHdZ1.spl1" title="原文 : Helidon SE provides an API for creating and setting up the REST endpoint which serves OpenAPI documents to clients at the /openapi path.">Helidon SEは、<code>/openapi</code>パスでクライアントにOpenAPIドキュメントを提供するRESTエンドポイントを作成および設定するためのAPIを提供します。</span> <span class="merged" id="all.1yHdZ1.spl2" title="原文 : Use either static methods on OpenAPISupport or use its Builder to create an instance of OpenAPISupport."><a href="./apidocs/io.helidon.openapi/OpenAPISupport.html" target="_blank"><code>OpenAPISupport</code></a>で静的メソッドを使用するか、<a href="./apidocs/io.helidon.openapi/OpenAPISupport.Builder.html" target="_blank"><code>Builder</code></a>を使用して<code>OpenAPISupport</code>のインスタンスを作成します。</span> <span class="merged" id="all.1yHdZ1.spl3" title="原文 : Then add that instance to your application&rsquo;s routing.">次に、そのインスタンスをアプリケーションのルーティングに追加します。</span> <span class="merged" id="all.1yHdZ1.spl4" title="原文 : The example below shows how to do this.">次の<router-link @click.native="this.scrollFix('#register_openapisupport')" to="#register_openapisupport">example</router-link>は、この方法を示しています。</span> </p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.39"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.47ldOI" title="原文 : Helidon SE OpenAPI configuration supports the following settings:">Helidon SE OpenAPI構成では、次の設定がサポートされています:</span></p>

<p><span class="merged" id="all.3AMxdF.1" title="原文 : Type: io.helidon.openapi.SEOpenAPISupport">タイプ: <a href="./apidocs/io.helidon.openapi/io/helidon/openapi/SEOpenAPISupport.html" target="_blank">io.helidon.openapi.SEOpenAPISupport</a></span></p>

<markup
lang="text"
title="Config key"
>openapi</markup>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.91"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.92" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.114"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.110"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.115"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.120"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.MsfaM.4"  title="原文: application-path-disable"><code>application-path-disable</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.172"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.70"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2xeBsu.4" title="原文 : Sets whether the app path search should be disabled.">アプリケーション・パス検索を無効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.17"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.17" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cPuUR.4" title="原文 : Assigns the CORS settings for the OpenAPI endpoint.">OpenAPIエンドポイントのCORS設定を割り当てます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XAGpa.4"  title="原文: custom-schema-registry-class"><code>custom-schema-registry-class</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.307"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1DeBJS.4" title="原文 : Sets the custom schema registry class.">カスタム・スキーマ・レジストリ・クラスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3VN3Pe.5"  title="原文: filter"><code>filter</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.308"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4b4jzJ.4" title="原文 : Sets the developer-provided OpenAPI filter class name.">開発者が指定したOpenAPIフィルタ・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VPBo8.4"  title="原文: model.reader"><code>model.reader</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.309"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2G1baF.4" title="原文 : Sets the developer-provided OpenAPI model reader class name.">開発者が指定したOpenAPIモデル・リーダー・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bpkMT.4"  title="原文: schema.*"><code>schema.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.310"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1mQwvR.4.spl1" title="原文 : Sets the schema for the indicated fully-qualified class name (represented here by &apos;*&apos;); value is the schema in JSON format.">指定された完全修飾クラス名のスキーマを設定します(ここで'*'で表します)。値はJSON形式のスキーマです。</span> <span class="merged" id="all.1mQwvR.4.spl2" title="原文 : Repeat for multiple classes.">複数のクラスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3V8KGr.4"  title="原文: servers"><code>servers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.38"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ghIBJ.4" title="原文 : Sets servers.">サーバーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IOFYs.4"  title="原文: servers.operation.*"><code>servers.operation.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.39"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Fws7b.4.spl1" title="原文 : Sets alternative servers to service the indicated operation (represented here by &apos;*&apos;).">指定された操作をサービスする代替サーバーを設定します(ここで'*'で示されています)。</span> <span class="merged" id="all.1Fws7b.4.spl2" title="原文 : Repeat for multiple operations.">複数の操作について繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XqCZQ.4"  title="原文: servers.path.*"><code>servers.path.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.40"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.gWeIV.4.spl1" title="原文 : Sets alternative servers to service all operations at the indicated path (represented here by &apos;*&apos;).">指定されたパスですべての操作を処理するための代替サーバーを設定します(ここで*で示されています)。</span> <span class="merged" id="all.gWeIV.4.spl2" title="原文 : Repeat for multiple paths.">複数のパスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v1sWP.4"  title="原文: static-file"><code>static-file</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.311"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2pWotd.4"  title="原文: META-INF/openapi.*"><code>META-INF/openapi.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2DjgLa.4.spl1" title="原文 : Sets the file system path of the static OpenAPI document file.">静的OpenAPIドキュメント・ファイルのファイル・システム・パスを設定します。</span> <span class="merged" id="all.2DjgLa.4.spl2" title="原文 : Default types are json, yaml, and yml.">デフォルト・タイプは、<code>json</code>、<code>yaml</code>および<code>yml</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.14"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.312"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.6CBWQ.4"  title="原文: /openapi"><code>/openapi</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ncWNj.4" title="原文 : Sets the web context path for the OpenAPI endpoint.">OpenAPIエンドポイントのwebコンテキスト・パスを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.42"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.119NzQ" title="原文 : Helidon SE provides a complete OpenAPI example based on the SE QuickStart sample app which includes a model reader and a filter.">Helidon SEは、モデル・リーダーおよびフィルタを含むSE QuickStartサンプル・アプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/master/examples/openapi" target="_blank">「完全なOpenAPIの例」</a>を提供します。</span></p>

<p><span class="merged" id="all.1uqdFt" title="原文 : Most Helidon SE applications need only to create and register OpenAPISupport.">ほとんどのHelidon SEアプリケーションは、<code>OpenAPISupport</code>を作成および登録する場合にのみ必要です。</span></p>


<h3 id="register_openapisupport"><span class="merged" id="all.4VPHu5" title="原文 : Register OpenAPISupport"><code>OpenAPISupport</code>の登録</span></h3>
<div class="section">
<markup
lang="java"
title="Java Code to Register <code>OpenAPISupport</code> for Routing"
>Config config = Config.create();
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

<p><span class="merged" id="all.e6VNQ" title="原文 : If you need more control over the OpenAPISupport instance, invoke OpenAPISupport.builder() to get an OpenAPISupport.Builder object and work with it."><code>OpenAPISupport</code>インスタンスをさらに制御する必要がある場合は、<code>OpenAPISupport.builder()</code>を起動して<code>OpenAPISupport.Builder</code>オブジェクトを取得し、操作します。</span></p>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.28"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_building_the_jandex_index"><span class="merged" id="all.2ES8bw.1" title="原文 : Building the Jandex index">Jandex索引のビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.uG8hR.1.spl1" title="原文 : A Jandex index stores information about the classes and methods in your app and what annotations they have.">Jandex索引には、アプリケーション内のクラスとメソッド、およびそれらの注釈に関する情報が格納されます。</span> <span class="merged" id="all.uG8hR.1.spl2" title="原文 : It allows CDI to process annotations faster during your application&rsquo;s start-up.">CDIでは、アプリケーションの起動時に注釈をより迅速に処理できます。</span> </p>

<p><span class="merged" id="all.1xDfwC.1" title="原文 : Add the Jandex maven plug-in to the &lt;build&gt;&lt;plugins&gt; section of your pom.xml:"><code>pom.xml</code>の<code>&lt;build>&lt;plugins></code>セクションに<a href="https://github.com/wildfly/jandex-maven-plugin" target="_blank">Jandex mavenプラグイン</a>を追加します:</span></p>

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

<p><span class="merged" id="all.3X1PmZ.1" title="原文 : When you build your app maven should include the index META-INF/jandex.idx in the JAR.">アプリケーションをビルドする場合、<code>maven</code>はJARに索引<code>META-INF/jandex.idx</code>を含める必要があります。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.7"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3MyPQN.1.spl1" title="原文 : If you do not modify your build to create the index then the Helidon MP OpenAPI runtime automatically creates one in memory during app start-up.">索引を作成するようにビルドを変更<em>しない</em>と、Helidon MP OpenAPIランタイムによって、アプリケーションの起動時にメモリーに索引が自動的に作成されます。</span> <span class="merged" id="all.3MyPQN.1.spl2" title="原文 : This slows down your app start-up and, depending on how CDI is configured, might inadvertently miss information.">これにより、アプリケーションの起動が遅くなり、CDIの構成方法によっては、誤って情報が失われる可能性があります。</span> </p>

<p><span class="merged" id="all.2Eurto.1" title="原文 : We strongly recommend using the Jandex plug-in to build the index into your app.">Jandexプラグインを使用して、アプリに索引を作成することを<em>強くお薦めします</em>。</span></p>
</p>
</div>

</div>

</div>

</doc-view>
