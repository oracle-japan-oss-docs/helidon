<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.20"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.19" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.13" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3YrEao" title="原文 : Usage"><router-link @click.native="this.scrollFix('#usage-section')" to="#usage-section">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.3" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.19"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.BtrBX" title="原文 : The OpenAPI specification provides a standard way to express RESTful APIs."><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">「OpenAPI仕様」</a>は、RESTful APIを表す標準的な方法を提供します。</span></p>

<p><span class="merged" id="all.3GFd4A.spl1" title="原文 : Separately, the OpenAPI generator project has created a powerful code generator tool which accepts an OpenAPI document and generates client and server code for many languages and frameworks.">これとは別に、<a href="https://openapi-generator.tech" target="_blank">「OpenAPIジェネレータ」</a>プロジェクトは、OpenAPIドキュメントを受け入れ、多くの言語およびフレームワークのクライアントおよびサーバー・コードを生成する強力なコード・ジェネレータ・ツールを作成しました。</span> <span class="merged" id="all.3GFd4A.spl2" title="原文 : The Helidon team contributes to this tool to ensure that it provides strong support for Helidon MP clients and servers.">Helidonチームは、Helidon MPクライアントおよびサーバーに対して強力なサポートを提供するために、このツールに貢献します。</span> <span class="merged" id="all.3GFd4A.spl3" title="原文 : As a result, you can use the generator to create code that fits smoothly into your Helidon applications.">その結果、ジェネレータを使用して、Helidonアプリケーションにスムーズに適合するコードを作成できます。</span> <span class="merged" id="all.3GFd4A.spl4" title="原文 : The OpenAPI generator release 6.2.1 gained particularly strong support for Helidon.">OpenAPIジェネレータ・リリース6.2.1は、特にHelidonに対する強力なサポートを得ました。</span> <span class="merged" id="all.3GFd4A.spl5" title="原文 : This document applies to that release and later ones.">このドキュメントは、そのリリース以降に適用されます。</span> </p>

<p><span class="merged" id="all.4Cp2N8" title="原文 : In the vocabulary of the tool, there are two generators for Helidon:">ツールの語彙には、Helidonの<em>「ジェネレータ」</em>が2つあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1bNbgz" title="原文 : java-helidon-client (hereafter the Helidon client generator)"><code>java-helidon-client</code> (以下Helidonクライアント・ジェネレータ)</span></p>

</li>
<li>
<p><span class="merged" id="all.13qIwA" title="原文 : java-helidon-server (hereafter the Helidon server generator)."><code>java-helidon-server</code> (以下Helidonサーバー・ジェネレータ)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1Nvwj0" title="原文 : Each of these generators supports two libraries:">これらの各ジェネレータは、次の2つの<em>ライブラリ</em>をサポートしています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3bUXqd" title="原文 : mp - for Helidon MP code generation"><code>mp</code> - Helidon MPコード生成用</span></p>

</li>
<li>
<p><span class="merged" id="all.44EaW3" title="原文 : se - for Helidon SE code generation"><code>se</code> - Helidon SEコード生成用</span></p>

</li>
</ul>

<p><span class="merged" id="all.WwFLK.spl1" title="原文 : Use the Helidon client generator and its mp library to create a Helidon MicroProfile REST client.">Helidon <em>「クライアント」</em>ジェネレータとその<code>mp</code>ライブラリを使用して、<router-link to="/mp/restclient">「Helidon MicroProfile RESTクライアント」</router-link>を作成します。</span> <span class="merged" id="all.WwFLK.spl2" title="原文 : The resulting client library works with any server that implements the API declared in the OpenAPI document you specified when you ran the generator.">結果のクライアント・ライブラリは、ジェネレータの実行時に指定したOpenAPIドキュメントで宣言されたAPIを実装するサーバーと連携します。</span> <span class="merged" id="all.WwFLK.spl3" title="原文 : The client library provides an abstraction similar to remote procedure calls (RPC).">クライアント・ライブラリは、リモート・プロシージャ・コール(RPC)と同様の抽象化を提供します。</span> <span class="merged" id="all.WwFLK.spl4" title="原文 : To access a remote service that implements the endpoints declared in the OpenAPI document, your code uses the generated client library first to establish a connection to the remote service and then to call remote service endpoints by invoking local methods passing POJO business objects or Java types as arguments.">OpenAPIドキュメントで宣言されたエンドポイントを実装するリモート・サービスにアクセスするには、コードで最初に生成されたクライアント・ライブラリを使用してリモート・サービスへの接続を確立し、次にPOJOビジネス・オブジェクトまたはJavaタイプを引数として渡すローカル・メソッドを呼び出してリモート・サービス・エンドポイントをコールします。</span> </p>

<p><span class="merged" id="all.4elgRx.spl1" title="原文 : Use the tool’s Helidon server generator and its mp library to create server endpoint stubs for a Helidon MP service.">ツールのHelidon <em>「サーバー」</em>ジェネレータとその<code>mp</code>ライブラリを使用して、Helidon MPサービスのサーバー・エンドポイント・スタブを作成します。</span> <span class="merged" id="all.4elgRx.spl2" title="原文 : You build on these stubs by extending a generated class or implementing a generated interface, adding your specific business logic to finish the implementation of the endpoints.">これらのスタブ上に構築するには、生成されたクラスを拡張するか、生成されたインタフェースを実装し、エンドポイントの実装を完了するための特定のビジネス・ロジックを追加します。</span> <span class="merged" id="all.4elgRx.spl3" title="原文 : The combination of the generated server code plus Helidon MP underneath it allows you to focus on the business details instead of resource boilerplate.">生成されたサーバー・コードとそれの下のHelidon MPを組み合せると、リソース・ボイラープレートではなく、ビジネス詳細に集中できます。</span> </p>

<p><span class="merged" id="all.2XN5X" title="原文 : You can run the OpenAPI generators in three ways:">OpenAPIジェネレータは、次の3つの方法で実行できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3te6v3" title="原文 : using the OpenAPI generator CLI">OpenAPIジェネレータCLIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2MZffJ" title="原文 : using the OpenAPI generator Maven plug-in">OpenAPIジェネレータMavenプラグインの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.3IPTGP" title="原文 : using the online OpenAPI generator website">オンラインOpenAPIジェネレータwebサイトの使用</span></p>

</li>
</ul>

<p><span class="merged" id="all.43Qc5v" title="原文 : The rest of this document walks you through how to use each technique and how to configure the generators to produce the code you want.">このドキュメントの残りの部分では、<router-link @click.native="this.scrollFix('#usage-section')" to="#usage-section">「使用方法」</router-link>の各手法と、ジェネレータを<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">「構成」</router-link>して必要なコードを生成する方法について説明します。</span></p>

</div>


<h2 id="_maven_coordinates"><span class="merged" id="all.317oeS.17"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.CRCBZ" title="原文 : Your project does not need any dependencies on the OpenAPI generator.">プロジェクトでは、OpenAPIジェネレータへの依存関係は必要ありません。</span></p>

<p><span class="merged" id="all.4LnnpP.spl1" title="原文 : To use the OpenAPI generator plug-in to generate or regenerate files during your project build, add the following to your project’s pom.xml file to declare the plug-in.">OpenAPIジェネレータ・プラグインを使用して、プロジェクト・ビルド中にファイルを生成または再生成するには、プロジェクトの<code>pom.xml</code>ファイルに次を追加してプラグインを宣言します。</span> <span class="merged" id="all.4LnnpP.spl2" title="原文 : Choose whichever version of the generator plug-in meets your needs as long as it is at least 6.2.1.">少なくとも6.2.1であるかぎり、ジェネレータ・プラグインのどのバージョンがニーズを満たすかを選択します。</span> </p>

<markup
lang="xml"
title="Declaring the OpenAPI Generator Plug-in"
>&lt;properties&gt;
    &lt;openapi-generator-version&gt;6.2.1&lt;/openapi-generator-version&gt;
&lt;/properties&gt;
...
&lt;build&gt;
    ...
    &lt;plugin-management&gt;
        ...
        &lt;plugin&gt;
             &lt;groupId&gt;org.openapitools&lt;/groupId&gt;
             &lt;artifactId&gt;openapi-generator-maven-plugin&lt;/artifactId&gt;
             &lt;version&gt;${openapi-generator-version}&lt;/version&gt;
        &lt;/plugin&gt;
        ...
    &lt;/plugin-management&gt;
    ...
&lt;/build&gt;</markup>

<p><span class="merged" id="all.2e7dHi" title="原文 : A later section describes how to invoke the plug-in during your build."><router-link @click.native="this.scrollFix('#invoking-the-plugin')" to="#invoking-the-plugin">「後続セクション」</router-link>は、ビルド中にプラグインを起動する方法について説明します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.14"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2lN9Jz.spl1" title="原文 : The OpenAPI generators support a substantial, powerful, and sometimes bewildering group of configuration settings.">OpenAPIジェネレータは、構成設定の大幅で強力で、時にはわかりにくいグループをサポートします。</span> <span class="merged" id="all.2lN9Jz.spl2" title="原文 : For complete lists see these pages:">完全なリストについては、次のページを参照してください:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.11k3e3" title="原文 : generic options"><a href="https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/docs/usage.md#generate" target="_blank">汎用オプション</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2gfqtx" title="原文 : Helidon client generator options and"><a href="https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/docs/generators/java-helidon-client.md" target="_blank">「Helidonクライアント・ジェネレータのオプション」</a>および</span></p>

</li>
<li>
<p><span class="merged" id="all.3Hhjsk" title="原文 : Helidon server generator options"><a href="https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/docs/generators/java-helidon-server.md" target="_blank">Helidonサーバー・ジェネレータ・オプション</a></span></p>

</li>
</ul>

<p><span class="merged" id="all.2bwdoe" title="原文 : The OpenAPI generator loosely divides its settings into three types:">OpenAPIジェネレータの設定は、次の3つのタイプに緩やかに分割されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1OSzhn"  title="原文:: global properties"><em>グローバル・プロパティ</em></span></p>
<p><span class="merged" id="all.1P09ew" title="原文 : These settings generally govern the overall behavior of the tool, regardless of which specific generator you use.">通常、これらの設定は、使用する特定のジェネレータに関係なく、ツールの全体的な動作を制御します。</span></p>

<p><span class="merged" id="all.3YxuZe" title="原文 : For the CLI, use the common option style:">CLIでは、共通オプション・スタイルを使用します:</span></p>

<p><span class="merged" id="all.2CFYKq"  title="原文: -i petstore.yaml"><code>-i petstore.yaml</code></span></p>

<p><span class="merged" id="all.32d2xK"  title="原文: --input-spec petstore.yaml"><code>--input-spec petstore.yaml</code></span></p>

<p><span class="merged" id="all.3mvmkF" title="原文 : For the Maven plug-in, use elements within the &lt;configuration&gt; section of the plug-in:">Mavenプラグインの場合は、プラグインの<code>&lt;configuration></code>セクション内の要素を使用します:</span></p>

<markup
lang="xml"

>&lt;configuration&gt;
    &lt;inputSpec&gt;petstore.yaml&lt;/inputSpec&gt;
&lt;/configuration&gt;</markup>

</li>
<li>
<p><span class="merged" id="all.14GOz3" title="原文 : options"><em>オプション</em></span></p>
<p><span class="merged" id="all.zVeNR" title="原文 : These settings typically affect how particular generators operate.">これらの設定は、通常、特定のジェネレータの動作に影響します。</span></p>

<p><span class="merged" id="all.265gz5" title="原文 : For the CLI, specify config options as additional properties:">CLIの場合は、追加プロパティとして構成オプションを指定します:</span></p>

<p><span class="merged" id="all.3H6Woq"  title="原文: --additional-properties=groupId=com.mycompany.test,artifactId=my-example"><code>--additional-properties=groupId=com.mycompany.test,artifactId=my-example</code></span></p>

<p><span class="merged" id="all.Xjurf"  title="原文:: or">または</span></p>

<markup
lang="bash"

>-p groupId=com.mycompany.test
-p artifactId=my-example</markup>

<p><span class="merged" id="all.XcPwK" title="原文 : For the Maven plug-in, use the &lt;configOptions&gt; section within &lt;configuration&gt;:">Mavenプラグインの場合は、<code>&lt;configuration></code>内の<code>&lt;configOptions></code>セクションを使用します:</span></p>

<markup
lang="xml"

>&lt;configuration&gt;
    ...
    &lt;configOptions&gt;
        &lt;groupId&gt;com.mycompany.test&lt;/groupId&gt;
        &lt;artifactId&gt;my-example&lt;/artifactId&gt;
    &lt;/configOptions&gt;
    ...
&lt;/configuration&gt;</markup>

</li>
<li>
<p><span class="merged" id="all.20PV5J"  title="原文:: additional properties"><em>追加プロパティ</em></span></p>
<p><span class="merged" id="all.4M3Ub4" title="原文 : Settings in this category typically are passed to the templates used in generating the files, although generators can use additional properties in deciding how to generate the files.">通常、このカテゴリの設定はファイルの生成に使用されるテンプレートに渡されますが、ジェネレータはファイルの生成方法を決定する際に追加のプロパティを使用できます。</span></p>

<p><span class="merged" id="all.B6WXD" title="原文 : For the CLI:">CLIの場合:</span></p>

<p><span class="merged" id="all.JEiEI"  title="原文: --additional-properties &quot;useAbstractClasses=false,returnResponse=true&quot;"><code>--additional-properties "useAbstractClasses=false,returnResponse=true"</code></span></p>

<p><span class="merged" id="all.Xjurf.1"  title="原文:: or">または</span></p>

<markup
lang="bash"

>-p useAbstractClasses=false
-p returnResponse=true</markup>

<p><span class="merged" id="all.3A4fcG" title="原文 : For the Maven plug-in, use an &lt;additionalProperties&gt; section within the &lt;configuration&gt; section for the plug-in:">Mavenプラグインの場合は、プラグインの<code>&lt;configuration></code>セクション内の<code>&lt;additionalProperties></code>セクションを使用します:</span></p>

<markup
lang="xml"

>&lt;configuration&gt;
    ....
    &lt;additionalProperties&gt;
        &lt;additionalProperty&gt;useAbstractClasses=false&lt;/additionalProperty&gt;
        &lt;additionalProperty&gt;returnResponse=true&lt;/additionalProperty&gt;
    &lt;/additionalProperties&gt;
&lt;/configuration&gt;</markup>

</li>
</ul>

<p><span class="merged" id="all.4SnYny.spl1" title="原文 : Keep this distinction among global options, config options, and additional properties in mind so you know how to express the configuration you want.">このように、グローバル・オプション、構成オプションおよび追加プロパティを区別して、必要な構成を表現する方法がわかるようにしてください。</span> <span class="merged" id="all.4SnYny.spl2" title="原文 : The earlier links to the lists of configuration options for the Helidon generators groups options and additional properties in separate tables.">Helidonジェネレータの構成オプションのリストに対する<router-link @click.native="this.scrollFix('#links-to-settings')" to="#links-to-settings">「前のリンク」</router-link>は、オプションと追加プロパティを別々の表にグループ化します。</span> </p>

<p><span class="merged" id="all.3su70c" title="原文 : The next few sections describe, in turn, required settings, settings we recommend, and other common settings most developers will want to use.">次のいくつかのセクションでは、必要な設定、推奨される設定、およびほとんどの開発者が使用するその他の一般的な設定について説明します。</span></p>


<h3 id="_required_settings"><span class="merged" id="all.2T49l4"  title="原文:: Required Settings">必須設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1kGHPL" title="原文 : You must specify the following options:">次のオプションを指定する必要があります:</span></p>

<div class="block-title"><span class="merged" id="all.3eram7" title="原文 : Required OpenAPI Generator Options"><span>必須のOpenAPIジェネレータ・オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 5%;">
<col style="width: 20%;">
<col style="width: 30%;">
<col style="width: 25%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1hmKoA"  title="原文:: Option">オプション</span></th>
<th><span class="merged" id="all.sIDEh" title="原文 : Short Option">ショート・オプション</span></th>
<th><span class="merged" id="all.3beb1l" title="原文 : Plug-in Setting">プラグイン設定</span></th>
<th><span class="merged" id="all.4JM9z7.12"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.17JEBs"  title="原文:: Values">値</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4cLayC"  title="原文: --inputSpec"><code>--inputSpec</code></span></td>
<td class=""><span class="merged" id="all.4UpHGb"  title="原文: -i"><code>-i</code></span></td>
<td class=""><span class="merged" id="all.4cKZNG"  title="原文: &lt;inputSpec&gt;"><code>&lt;inputSpec></code></span></td>
<td class=""><span class="merged" id="all.3rHTAU" title="原文 : Path to the OpenAPI document defining the REST API">REST APIを定義するOpenAPIドキュメントへのパス</span></td>

</tr>
<tr>
<td class=""><span class="merged" id="all.3g10XX"  title="原文: --generatorName"><code>--generatorName</code></span></td>
<td class=""><span class="merged" id="all.46RPRj"  title="原文: -g"><code>-g</code></span></td>
<td class=""><span class="merged" id="all.3ObSXI"  title="原文: &lt;generatorName&gt;"><code>&lt;generatorName></code></span></td>
<td class=""><span class="merged" id="all.2BEDM3" title="原文 : Generator you want to use (java-helidon-server or java-helidon-client)">使用するジェネレータ(<code>java-helidon-server</code>または<code>java-helidon-client</code>)</span></td>
<td class=""><span class="merged" id="all.4C8vT9" title="原文 : java-helidon-server java-helidon-client"><code>java-helidon-server</code><br> <code>java-helidon-client</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_recommended_settings_for_the_openapi_generator"><span class="merged" id="all.1p3C33" title="原文 : Recommended Settings for the OpenAPI Generator">OpenAPIジェネレータの推奨設定</span></h3>
<div class="section">
<p><span class="merged" id="all.4dqgF4" title="原文 : Your project might have different needs, but in general we advise developers to use the following settings when using the OpenAPI generator.">プロジェクトのニーズは様々ですが、通常、OpenAPIジェネレータを使用する場合は、次の設定を使用することをお薦めします。</span></p>

<div class="block-title"><span class="merged" id="all.1AoCLh" title="原文 : Recommended OpenAPI Generator Additional Properties"><span>推奨OpenAPIジェネレータの追加プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 21.428%;">
<col style="width: 42.857%;">
<col style="width: 35.714%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8.1"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.4JM9z7.13"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.oxso7.1"  title="原文:: Default">デフォルト</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2eFQoF"  title="原文: apiPackage"><code>apiPackage</code></span></td>
<td class=""><span class="merged" id="all.g05Bu" title="原文 : Name of the package for generated API interfaces/classes">生成されたAPIインタフェース/クラスのパッケージの名前</span></td>
<td class=""><span class="merged" id="all.3JXFfk" title="原文 : org.openapitools.server.api or org.openapitools.client.api"><code>org.openapitools.server.api</code>または<br><code>org.openapitools.client.api</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3gYznR"  title="原文: modelPackage"><code>modelPackage</code></span></td>
<td class=""><span class="merged" id="all.AdTVi" title="原文 : Name of the package for generated model (POJO) classes">生成されたモデル(POJO)クラスのパッケージの名前</span></td>
<td class=""><span class="merged" id="all.2McLM7" title="原文 : org.openapitools.server.model or org.openapitools.client.model"><code>org.openapitools.server.model</code>または<br><code>org.openapitools.client.model</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9oJ7u"  title="原文: invokerPackage"><code>invokerPackage</code></span></td>
<td class=""><span class="merged" id="all.2HfJw3" title="原文 : Name of the package for generated driver classes">生成されたドライバ・クラスのパッケージの名前</span></td>
<td class=""><span class="merged" id="all.3KzHsQ" title="原文 : org.openapitools.server or org.openapitools.client"><code>org.openapitools.server</code>または<br><code>org.openapitools.client</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.T5o5S"  title="原文: groupId"><code>groupId</code></span></td>
<td class=""><span class="merged" id="all.1OBHdz" title="原文 : Group ID in the generated pom.xml">生成された<code>pom.xml</code>のグループID</span></td>
<td class=""><span class="merged" id="all.2l0bAD"  title="原文: org.openapitools"><code>org.openapitools</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3dJ7Z0"  title="原文: artifactId"><code>artifactId</code></span></td>
<td class=""><span class="merged" id="all.21c5wc" title="原文 : Artifact ID in the generated pom.xml">生成された<code>pom.xml</code>内のアーティファクトID</span></td>
<td class=""><span class="merged" id="all.2Jj4qg" title="原文 : openapi-java-server or openapi-java-client"><code>openapi-java-server</code>または<br><code>openapi-java-client</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29odWp"  title="原文: artifactVersion"><code>artifactVersion</code></span></td>
<td class=""><span class="merged" id="all.498jb2" title="原文 : Artifact version in the generated pom.xml">生成された<code>pom.xml</code>内のアーティファクト・バージョン</span></td>
<td class=""><span class="merged" id="all.4KoJzp"  title="原文: 1.0.0"><code>1.0.0</code></span></td>
</tr>
</tbody>
</table>
</div>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.2"  title="原文:: Note">ノート</span></p>
<p ><span class="merged" id="all.MooFO" title="原文 : The next table contains recommendations only for using the OpenAPI generator plug-in (not for using the CLI).">次の表には、OpenAPIジェネレータ・プラグインを使用する(CLIを使用しない)ための推奨事項のみが含まれています。</span></p>
</div>

<div class="block-title"><span class="merged" id="all.4KcjnQ" title="原文 : Recommended OpenAPI Generator Plug-in Options"><span>推奨されるOpenAPIジェネレータ・プラグイン・オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.529%;">
<col style="width: 47.059%;">
<col style="width: 29.412%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.DEbPD" title="原文 : Plug-in Option">プラグイン・オプション</span></th>
<th><span class="merged" id="all.4JM9z7.14"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.oxso7.2"  title="原文:: Default">デフォルト</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.cbcYr"  title="原文: &lt;output&gt;"><code>&lt;output></code></span></td>
<td class=""><span class="merged" id="all.4CN28C" title="原文 : Directory where the generator should place files. + We strongly recommend &lt;output&gt;target/generated-sources&lt;/output&gt; or a subdirectory below there.">ジェネレータがファイルを配置するディレクトリ。<br>+ <code>&lt;output>target/generated-sources&lt;/output></code>または下のサブディレクトリを推奨します。</span></td>
<td class=""><span class="merged" id="all.XbhIx" title="原文 : . (current directory)"><code>.</code><br>(現在のディレクトリ)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Rv7Xi"  title="原文: &lt;addCompileSourceRoot&gt;"><code>&lt;addCompileSourceRoot></code></span></td>
<td class=""><span class="merged" id="all.1NhSd" title="原文 : Whether Maven should include the output directory as a source root (that is, include it automatically in the build). + We advise &lt;addCompileSourceRoot&gt;true&lt;/addCompileSourceRoot&gt;.">Mavenに出力ディレクトリをソース・ルートとして含める(つまり、自動的にビルドに含める)かどうか。<br>+ <code>&lt;addCompileSourceRoot>true&lt;/addCompileSourceRoot></code>をお勧めします。</span></td>
<td class=""><span class="merged" id="all.42DdBS.54"  title="原文: false"><code>false</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_common_settings"><span class="merged" id="all.452Ly2"  title="原文:: Common Settings">共通設定</span></h3>
<div class="section">
<p><span class="merged" id="all.ZXkeS.spl1" title="原文 : Among the many configuration settings available to you, some you should particularly consider are summarized in the table below.">使用可能な多くの構成設定の中で、特に考慮する必要があるものが次の表にまとめられています。</span> <span class="merged" id="all.ZXkeS.spl2" title="原文 : Refer to the earlier links for complete lists.">完全なリストは、<router-link @click.native="this.scrollFix('#links-to-settings')" to="#links-to-settings">「前のリンク」</router-link>を参照してください。</span> </p>

<div class="block-title"><span class="merged" id="all.33sGso" title="原文 : Common OpenAPI Generator Additional Properties"><span>共通OpenAPIジェネレータの追加プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 18.182%;">
<col style="width: 22.727%;">
<col style="width: 13.636%;">
<col style="width: 13.636%;">
<col style="width: 31.818%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8.2"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.4JM9z7.15"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.17JEBs.1"  title="原文:: Values">値</span></th>
<th><span class="merged" id="all.oxso7.3"  title="原文:: Default">デフォルト</span></th>
<th><span class="merged" id="all.3Wy1iS"  title="原文:: Notes">ノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3N1Az8"  title="原文: helidonVersion"><code>helidonVersion</code></span></td>
<td class=""><span class="merged" id="all.1n47F0" title="原文 : Version of Helidon for which to generate the files">ファイルを生成するHelidonのバージョン</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.19teUW"  title="原文: 2.5.2"><code>2.5.2</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kOsAL"  title="原文:: Affects:">影響:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Z52Dx" title="原文 : Helidon version for the &lt;parent&gt;"><code>&lt;parent></code>のHelidonバージョン</span></p>

</li>
<li>
<p><span class="merged" id="all.1WCEgo" title="原文 : Dependencies (javax vs. jakarta)">依存関係 (<code>javax</code>と<code>jakarta</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.29Cfi9" title="原文 : java import statements in generated code (javax vs. jakarta)">生成されたコード内の<code>java import</code>文(<code>javax</code>と<code>jakarta</code>)</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2vZ1GX"  title="原文: fullProject"><code>fullProject</code></span></td>
<td class=""><span class="merged" id="all.4XLeuv" title="原文 : Whether to generate all the normal files or only API files">すべての通常のファイルを生成するか、APIファイルのみを生成するか</span></td>
<td class=""><span class="merged" id="all.SEAf1"  title="原文:: true/false"><code>true</code>/<code>false</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.55"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4Cgu3u" title="原文 : The &quot;API files&quot; include files developers do not normally modify after they are generated: the interfaces or classes for the declared API and the model classes.">「APIファイル」インクルード・ファイルは、通常、開発者が生成後に変更しない: 宣言されたAPIおよびモデル・クラスのインタフェースまたはクラス。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1IAzI6"  title="原文: serializationLibrary"><code>serializationLibrary</code></span></td>
<td class=""><span class="merged" id="all.iRnGP" title="原文 : which Java library to use for serializing JSON">JSONのシリアライズに使用するJavaライブラリ</span></td>
<td class=""><span class="merged" id="all.2gjulj" title="原文 : jsonb, jackson"><code>jsonb</code>, <code>jackson</code></span></td>
<td class=""><span class="merged" id="all.3u7Ye3"  title="原文: jackson"><code>jackson</code></span></td>

</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="usage-section"><span class="merged" id="all.JUOSC.13"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.26MuX9" title="原文 : This section covers two major topics:">この項では、2つの主要なトピックについて説明します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2hPiC6" title="原文 : Planning your use of the OpenAPI generators"><router-link @click.native="this.scrollFix('#usage-planning')" to="#usage-planning">OpenAPIジェネレータの使用計画</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3NvbDr" title="原文 : Running the generators"><router-link @click.native="this.scrollFix('#usage-running')" to="#usage-running">ジェネレータの実行</router-link></span></p>

</li>
</ul>


<h3 id="usage-planning"><span class="merged" id="all.4Vtvt" title="原文 : Planning Your Use of the OpenAPI Generators">OpenAPIジェネレータの使用の計画</span></h3>
<div class="section">
<p><span class="merged" id="all.4W4dCM.spl1" title="原文 : Beyond the settings listed above, there are several important choices you need to make when planning your project and when running the OpenAPI generators.">前述の設定以外に、プロジェクトの計画時およびOpenAPIジェネレータの実行時に行う必要がある重要な選択肢がいくつかあります。</span> <span class="merged" id="all.4W4dCM.spl2" title="原文 : This section addresses those choices.">このセクションでは、これらの選択肢について説明します。</span> </p>


<h4 id="_generating_a_new_project_and_generating_into_an_existing_project"><span class="merged" id="all.32hW1N" title="原文 : Generating a New Project and Generating Into an Existing Project">新規プロジェクトの生成および既存のプロジェクトの<em>「先」</em>の生成</span></h4>
<div class="section">
<p><span class="merged" id="all.1ngIxG.spl1" title="原文 : You can use the OpenAPI generator to create a new project or to generate files into an existing project.">OpenAPIジェネレータを使用して、新しいプロジェクトを作成したり、既存のプロジェクトにファイルを生成できます。</span> <span class="merged" id="all.1ngIxG.spl2" title="原文 : Some developers do both, using the generator to create the project at first and then to update the project as they evolve the OpenAPI document or change the generation options they select.">一部の開発者は、最初にジェネレータを使用してプロジェクトを作成し、次にOpenAPIドキュメントの展開時にプロジェクトを更新するか、選択した生成オプションを変更します。</span> <span class="merged" id="all.1ngIxG.spl3" title="原文 : Others create the project in some other way-​for example, using the Helidon CLI.">その他は、<router-link to="/about/cli">Helidon CLI</router-link>などを使用して、別の方法でプロジェクトを作成します。</span> <span class="merged" id="all.1ngIxG.spl4" title="原文 : The OpenAPI generator CLI and plug-in both support each type of usage.">OpenAPIジェネレータのCLIとプラグインは、それぞれの使用タイプをサポートします。</span> </p>

<p><span class="merged" id="all.1GMEfm.spl1" title="原文 : If the OpenAPI generator finds a pre-existing API or model file, it overwrites it with the latest content.">OpenAPIジェネレータで既存のAPIまたはモデル・ファイルが検出されると、最新のコンテンツで上書きされます。</span> <span class="merged" id="all.1GMEfm.spl2" title="原文 : It does not overwrite a pom.xml file or test files."><code>pom.xml</code>ファイルまたはテスト・ファイルは上書きされません。</span> <span class="merged" id="all.1GMEfm.spl3" title="原文 : This is important because certain generation settings can influence the generated dependencies in the pom.xml file.">これは、特定の世代設定が<code>pom.xml</code>ファイル内の生成された依存関係に影響を与える可能性があるため重要です。</span> <span class="merged" id="all.1GMEfm.spl4" title="原文 : For example, the serializationLibrary setting creates dependencies on either JSON-B or Jackson artifacts.">たとえば、<code>serializationLibrary</code>設定では、JSON-BアーティファクトまたはJacksonアーティファクトの依存関係が作成されます。</span> <span class="merged" id="all.1GMEfm.spl5" title="原文 : As a result, changing the generation options can change the dependencies your project should have.">その結果、生成オプションを変更すると、プロジェクトの依存関係が変更される可能性があります。</span> <span class="merged" id="all.1GMEfm.spl6" title="原文 : If you rerun the generator, the old pom.xml remains and does not reflect the revised depencencies.">ジェネレータを再実行しても、古い<code>pom.xml</code>は残り、改訂されたデペンセンシは反映されません。</span> </p>

<p><span class="merged" id="all.kNyDf" title="原文 : As a practical matter, many developers use the OpenAPI generators in one of the following ways:">実際の問題として、多くの開発者は、次のいずれかの方法でOpenAPIジェネレータを使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.LOLDT" title="原文 : Use the generator CLI once to create a new project.">ジェネレータCLIを1回使用して、新しいプロジェクトを作成します。</span></p>
<p><span class="merged" id="all.3qQlFd.spl1" title="原文 : By default, the generator CLI creates files in the normal Maven project structure: src/main/java, etc. Then you add your own files to that same project structure.">デフォルトでは、ジェネレータCLIは通常のMavenプロジェクト構造にファイルを作成: <code>src/main/java</code>など次に、同じプロジェクト構造に独自のファイルを追加します。</span> <span class="merged" id="all.3qQlFd.spl2" title="原文 : Because the generated files are in the standard places, the project build includes them by default.">生成されたファイルは標準の場所にあるため、プロジェクト・ビルドにはデフォルトで含まれます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.3"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.25vvia.spl1" title="原文 : You can run the generator CLI again to update the generated files.">ジェネレータCLIを再度実行して、生成されたファイルを更新<em>できます</em>。</span> <span class="merged" id="all.25vvia.spl2" title="原文 : Because this happens outside the project’s build lifecycle, you need to remember to rerun the CLI yourself when you change the OpenAPI document.">これはプロジェクトのビルド・ライフサイクルの外で発生するため、OpenAPIドキュメントを変更するときは、CLIを必ず再実行する必要があります。</span> </p>

<p><span class="merged" id="all.2aIOqD.spl1" title="原文 : You also need to identify and manually remove any previously-generated files that become obsolete.">また、不要になった以前に生成されたファイルを識別して手動で削除する必要もあります。</span> <span class="merged" id="all.2aIOqD.spl2" title="原文 : Similarly, you must understand how changes in the OpenAPI document or the generation options affect the project dependencies and update the project pom.xml accordingly.">同様に、OpenAPIドキュメントまたは生成オプションの変更がプロジェクトの依存関係にどのように影響するかを理解し、それに応じてプロジェクト<code>pom.xml</code>を更新する必要があります。</span> </p>
</p>
</div>

</li>
<li>
<p><span class="merged" id="all.1xYC5K" title="原文 : Use the generator plug-in to (re)generate files during each build.">ジェネレータ・プラグインを使用して、ビルドごとにファイルを生成(再)します。</span></p>
<p><span class="merged" id="all.33uTry.spl1" title="原文 : Specify in the plug-in configuration that the generated files should reside in target/generated-sources directory (the conventional location for generated sources) or a subdirectory below there.">生成されたファイルを<code>target/generated-sources</code>ディレクトリ(生成されたソースの従来のロケーション)または下のサブディレクトリに配置するプラグイン構成で指定します。</span> <span class="merged" id="all.33uTry.spl2" title="原文 : Each project build runs the OpenAPI generator which reads the then-current OpenAPI document file.">各プロジェクト・ビルドは、現在のOpenAPIドキュメント・ファイルを読み取るOpenAPIジェネレータを実行します。</span> <span class="merged" id="all.33uTry.spl3" title="原文 : With the generated files under target, you can use mvn clean to remove any obsolete generated files left over from previous builds.">生成されたファイルを<code>target</code>の下で使用すると、<code>mvn clean</code>を使用して、以前のビルドから残っている古い生成されたファイルを削除できます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.4"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.4VJuPi.spl1" title="原文 : In particular, with mvn clean each build regenerates the candidate pom.xml under target/generated-sources.">特に、<code>mvn clean</code>を指定すると、各ビルドで<code>target/generated-sources</code>の下に候補<code>pom.xml</code>が再生成されます。</span> <span class="merged" id="all.4VJuPi.spl2" title="原文 : You can inspect the generated pom.xml file for changes in dependencies and make any necessary changes in the actual project pom.xml file.">生成された<code>pom.xml</code>ファイルで依存関係の変更を検査し、実際のプロジェクトの<code>pom.xml</code>ファイルで必要な変更を行うことができます。</span> </p>
</p>
</div>

</li>
</ul>

</div>


<h4 id="_generating_interfaces_or_classes"><span class="merged" id="all.33F1rs" title="原文 : Generating Interfaces or Classes">インタフェースまたはクラスの生成中</span></h4>
<div class="section">
<p><span class="merged" id="all.2p4WRp" title="原文 : As you generate a Helidon MP server, you can choose whether you want Java interfaces or classes to represent the RESTful API endpoints.">Helidon MP <em>「サーバー」</em>を生成するときに、JavaインタフェースまたはクラスがRESTful APIエンドポイントを表すかどうかを選択できます。</span></p>

<p><span class="merged" id="all.3RQhwZ.spl1" title="原文 : By default, the Helidon OpenAPI server generator creates classes.">デフォルトでは、Helidon OpenAPIサーバー・ジェネレータによってクラスが作成されます。</span> <span class="merged" id="all.3RQhwZ.spl2" title="原文 : You write your own concrete subclasses which extend those generated classes, supplying the business logic for each REST endpoint.">生成されたクラスを拡張する独自の具象サブクラスを記述し、各RESTエンドポイントのビジネス・ロジックを提供します。</span> <span class="merged" id="all.3RQhwZ.spl3" title="原文 : Do not modify the generated classes.">生成されたクラスを変更<em>「しません」</em>。</span> </p>

<p><span class="merged" id="all.3Snhpz.spl1" title="原文 : If you set useAbstractClasses=false then the generator creates Java interfaces instead of classes."><code>useAbstractClasses=false</code>を設定すると、ジェネレータはクラスではなくJavaインタフェースを作成します。</span> <span class="merged" id="all.3Snhpz.spl2" title="原文 : You then write classes which implement those generated interfaces.">次に、生成されたインタフェースを実装するクラスを記述します。</span> </p>

<p><span class="merged" id="all.35T8Fh.spl1" title="原文 : Either way, you can safely regenerate the code later so long as you have not edited the generated code.">いずれの場合も、生成されたコードを編集していないかぎり、後でコードを安全に再生成できます。</span> <span class="merged" id="all.35T8Fh.spl2" title="原文 : The generator replaces the generated classes or interfaces but does not touch other classes you wrote.">ジェネレータは、生成されたクラスまたはインタフェースを置き換えますが、書き込んだ他のクラスには触れません。</span> </p>

<p><span class="merged" id="all.1nNk0N.spl1" title="原文 : The Helidon client generator always creates concrete classes.">Helidon <em>「クライアント」</em>ジェネレータは常に具象クラスを作成します。</span> <span class="merged" id="all.1nNk0N.spl2" title="原文 : Typically, you do not need to customize the behavior in the generated client API classes.">通常、生成されたクライアントAPIクラスの動作をカスタマイズする必要はありません。</span> <span class="merged" id="all.1nNk0N.spl3" title="原文 : If you choose to do so, write your own subclass of the generated client API class; do not modify the generated files.">これを行う場合は、生成されたクライアントAPIクラスの独自のサブクラスを記述します; 生成されたファイルを変更<em>しません</em>。</span> </p>

</div>


<h4 id="_grouping_operations_into_apis"><span class="merged" id="all.1hTTaH" title="原文 : Grouping Operations into &quot;APIs&quot;">操作の「API」へのグループ化</span></h4>
<div class="section">
<p><span class="merged" id="all.1HDOP7.spl1" title="原文 : Each operation in an OpenAPI document can have a tags attribute.">OpenAPIドキュメント内の各操作には、<code>tags</code>属性を指定できます。</span> <span class="merged" id="all.1HDOP7.spl2" title="原文 : The generators group operations with the same tags value into the same API.">ジェネレータは、同じ<code>tags</code>値を持つ操作を同じAPIにグループ化します。</span> </p>

<p><span class="merged" id="all.48smFN.spl1" title="原文 : When you generate a Helidon MP server, the generator creates a separate interface or class for each API your service exposes.">Helidon MPサーバーを生成すると、ジェネレータはサービスが<em>「露出」</em>する各APIに対して個別のインタフェースまたはクラスを作成します。</span> <span class="merged" id="all.48smFN.spl2" title="原文 : You implement each interface or extend each class to add your business logic for that API.">各インタフェースを実装するか、各クラスを拡張して、そのAPIのビジネス・ロジックを追加します。</span> </p>

<p><span class="merged" id="all.2rUGc9" title="原文 : When you generate a Helidon MP client, the generated code contains a separate API class for each distinct API your code might invoke.">Helidon MPクライアントを生成すると、生成されたコードには、コードが<em>「起動」</em>する可能性がある個別のAPIごとに個別のAPIクラスが含まれます。</span></p>

</div>

</div>


<h3 id="usage-running"><span class="merged" id="all.1mgTHV" title="原文 : Running the OpenAPI Generators">OpenAPIジェネレータの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.bzGdk" title="原文 : Earlier we listed the ways you can run the OpenAPI generator:">以前に、OpenAPIジェネレータを実行する方法をリストしました:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3te6v3.1" title="原文 : using the OpenAPI generator CLI">OpenAPIジェネレータCLIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2MZffJ.1" title="原文 : using the OpenAPI generator Maven plug-in">OpenAPIジェネレータMavenプラグインの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.3IPTGP.1" title="原文 : using the online OpenAPI generator website">オンラインOpenAPIジェネレータwebサイトの使用</span></p>

</li>
</ul>

<p><span class="merged" id="all.3MpZZ3" title="原文 : The next sections describe each of these techniques in detail.">次の項では、これらの各手法を詳細に説明します。</span></p>


<h4 id="_using_the_openapi_generator_cli"><span class="merged" id="all.1l9EQX" title="原文 : Using the OpenAPI Generator CLI">OpenAPIジェネレータCLIの使用</span></h4>
<div class="section">
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.3unhJR" title="原文 : Downloading the OpenAPI Generator CLI">OpenAPIジェネレータCLIのダウンロード</span></p>
<p ><span class="merged" id="all.3Y2ahL.spl1" title="原文 : You need to download the CLI .jar file before you can run the CLI.">CLIを実行するには、CLIの<code>.jar</code>ファイルをダウンロードする必要があります。</span> <span class="merged" id="all.3Y2ahL.spl2" title="原文 : Follow these instructions and remember where you save the .jar file.">これらの<a href="https://github.com/OpenAPITools/openapi-generator#13---download-jar" target="_blank">「手順」</a>に従って、<code>.jar</code>ファイルを保存する場所を覚えておいてください。</span> <span class="merged" id="all.3Y2ahL.spl3" title="原文 : The examples below use the placeholder path-to-generator to represent the directory where you store that downloaded file.">次の例では、プレースホルダー<code>path-to-generator</code>を使用して、ダウンロードしたファイルを格納するディレクトリを表します。</span> </p>
</div>

<p><span class="merged" id="all.uggFA" title="原文 : The following example uses the Helidon server generator to create a project or regenerate files into an existing project.">次の例では、Helidonサーバー・ジェネレータを使用して、プロジェクトを作成するか、既存のプロジェクトにファイルを再生成します。</span></p>

<markup
lang="bash"
title="Creating or updating a server project using the OpenAPI generator CLI"
>java -jar ${path-to-generator}/openapi-generator-cli.jar \
  generate \
  -i src/main/resources/petstore.yaml \
  -g java-helidon-server \
  --library mp \
  -p groupId=io.helidon.examples \
  -p artifactId=helidon-openapigen-mp-server \
  -p artifactVersion=1.0.0-SNAPSHOT \
  -p apiPackage=io.helidon.examples.openapigen.mp.server.api \
  -p modelPackage=io.helidon.examples.openapigen.mp.server.model \
  -p invokerPackage=io.helidon.examples.openapigen.mp.server</markup>

<p><span class="merged" id="all.2CeZSt" title="原文 : The next example runs the Helidon client generator using the same input file.">次の例では、同じ入力ファイルを使用してHelidonクライアント・ジェネレータを実行します。</span></p>

<markup
lang="bash"
title="Creating or updating a client project using the OpenAPI generator CLI"
>java -jar ${path-to-generator}/openapi-generator-cli.jar \
  generate \
  -i src/main/resources/petstore.yaml \
  -g java-helidon-client \
  --library mp \
  -p groupId=io.helidon.examples \
  -p artifactId=helidon-openapigen-mp-client \
  -p artifactVersion=1.0.0-SNAPSHOT \
  -p apiPackage=io.helidon.examples.openapigen.mp.client.api \
  -p modelPackage=io.helidon.examples.openapigen.mp.client.model \
  -p invokerPackage=io.helidon.examples.openapigen.mp.client</markup>

<p><span class="merged" id="all.1QyHQ9" title="原文 : The key differences between the commands are:">コマンドの主な相違点は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2jzJaK" title="原文 : the generator selected by the -g option (client vs. server),"><code>-g</code>オプションによって選択されたジェネレータ(<code>client</code>と<code>server</code>)、</span></p>

</li>
<li>
<p><span class="merged" id="all.48qFcs" title="原文 : the artifact ID and package names (client vs. server).">アーティファクトIDおよびパッケージ名(<code>client</code>と<code>server</code>)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.42tBKh.spl1" title="原文 : You could use these two commands together to generate a server submodule and a client submodule in a pre-existing multi-module Maven project.">これらの2つのコマンドを一緒に使用して、既存のマルチ・モジュールMavenプロジェクトにサーバー・サブモジュールとクライアント・サブモジュールを生成できます。</span> <span class="merged" id="all.42tBKh.spl2" title="原文 : Remember that the resulting client project can access any server which implements the API described in the petstore.yaml OpenAPI document, whether it was generated using the OpenAPI generator tool or not.">生成されるクライアント・プロジェクトは、OpenAPIジェネレータ・ツールを使用して生成されたかどうかに関係なく、<code>petstore.yaml</code> OpenAPIドキュメントに記載されているAPIを実装する任意のサーバーにアクセスできます。</span> </p>

<p><span class="merged" id="all.3fBk73.spl1" title="原文 : In both examples, the generator creates the entire project if it does not exist and recreates the generated API and model files if the project already exists.">どちらの例でも、ジェネレータはプロジェクト全体(存在しない場合)を作成し、生成されたAPIおよびモデル・ファイル(プロジェクトがすでに存在する場合)を再作成します。</span> <span class="merged" id="all.3fBk73.spl2" title="原文 : The generator does not overwrite an existing pom.xml file, previously-generated test files, or files you create yourself.">ジェネレータは、既存の<code>pom.xml</code>ファイル、以前に生成されたテスト・ファイル、または自分で作成したファイルを上書きしません。</span> </p>

</div>


<h4 id="invoking-the-plugin"><span class="merged" id="all.hSTQU" title="原文 : Invoking the OpenAPI Generator Maven Plug-in">OpenAPIジェネレータMavenプラグインの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.1j1y8W" title="原文 : You can run the OpenAPI generator plug-in as part of your project build to generate or regenerate files.">OpenAPIジェネレータ・プラグインをプロジェクト・ビルドの一部として実行して、ファイルを生成または再生成できます。</span></p>

<p><span class="merged" id="all.3LGR7W" title="原文 : First, declare the plug-in as explained in the earlier section on Maven coordinates.">最初に、<router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">「Maven座標の前のセクション」</router-link>の説明に従ってプラグインを宣言します。</span></p>

<p><span class="merged" id="all.1a7Hsf.spl1" title="原文 : Then, in the &lt;build&gt; section of your pom.xml file, add an execution of the plug-in with the configuration you want.">次に、<code>pom.xml</code>ファイルの<code>&lt;build></code>セクションで、必要な構成を含むプラグインの実行を追加します。</span> <span class="merged" id="all.1a7Hsf.spl2" title="原文 : By default, the plug-in runs during the generate-sources phase of the Maven build.">デフォルトでは、プラグインはMavenビルドの<code>generate-sources</code>フェーズで実行されます。</span> </p>

<p><span class="merged" id="all.45sWyy" title="原文 : The plug-in execution in the following example is equivalent to the CLI example above for generating server files:">次の例のプラグインの実行は、サーバー・ファイルを生成するための前述のCLIの例と同等です:</span></p>

<markup
lang="xml"
title="Creating or updating a client project using the OpenAPI Maven plug-in"
>&lt;plugin&gt;
    &lt;groupId&gt;org.openapitools&lt;/groupId&gt;
    &lt;artifactId&gt;openapi-generator-maven-plugin&lt;/artifactId&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;goals&gt;
                &lt;goal&gt;generate&lt;/goal&gt;
            &lt;/goals&gt;
            &lt;configuration&gt;
                &lt;inputSpec&gt;${project.basedir}/src/main/resources/petstore.yaml&lt;/inputSpec&gt;
                &lt;generatorName&gt;java-helidon-client&lt;/generatorName&gt;
                &lt;library&gt;mp&lt;/library&gt;
                &lt;output&gt;${project.build.directory}/generated-sources/client&lt;/output&gt; <span class="conum" data-value="1" />
                &lt;addCompileSourceRoot&gt;true&lt;/addCompileSourceRoot&gt;
                &lt;configOptions&gt;
                    &lt;groupId&gt;io.helidon.examples&lt;/groupId&gt;
                    &lt;artifactId&gt;helidon-openapigen-mp-client&lt;/artifactId&gt;
                    &lt;artifactVersion&gt;1.0.0-SNAPSHOT&lt;/artifactVersion&gt;
                    &lt;apiPackage&gt;io.helidon.examples.openapigen.mp.client.api&lt;/apiPackage&gt;
                    &lt;modelPackage&gt;io.helidon.examples.openapigen.mp.client.model&lt;/modelPackage&gt;
                    &lt;invokerPackage&gt;io.helidon.examples.openapigen.mp.client&lt;/invokerPackage&gt;
                &lt;/configOptions&gt;
                &lt;additionalProperties&gt;
                    &lt;additionalProperty&gt;returnResponse=true&lt;/additionalProperty&gt;
                &lt;/additionalProperties&gt;
            &lt;/configuration&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.46ryy6" title="原文 : Specifies that the generated files should reside in the target/generated-sources/client directory.">生成されたファイルを<code>target/generated-sources/client</code>ディレクトリに配置するように指定します。</span></li>
</ul>

</div>


<h4 id="_using_the_online_generator"><span class="merged" id="all.1Xgi5m" title="原文 : Using the Online Generator">オンライン・ジェネレータの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.2neX9T.spl1" title="原文 : The OpenAPI tools project hosts and maintains the online OpenAPI generator at http://api.openapi-generator.tech.">OpenAPIツールは、オンラインのOpenAPIジェネレータをホストし、<a class="bare" href="http://api.openapi-generator.tech" target="_blank">http://api.openapi-generator.tech</a>で維持します。</span> <span class="merged" id="all.2neX9T.spl2" title="原文 : You can use the site’s API browser to explore the available generators and the settings each supports, expressed as JSON.">サイトのAPIブラウザを使用して、使用可能なジェネレータおよび各サポートする設定をJSONとして表現できます。</span> </p>

<p><span class="merged" id="all.1zNDyh.spl1" title="原文 : To generate your project, you supply the options and additional properties as JSON.">プロジェクトを生成するには、オプションおよび追加プロパティをJSONとして指定します。</span> <span class="merged" id="all.1zNDyh.spl2" title="原文 : The online generator provides you with a file ID, and you refer to the file ID in a subsequent HTTP request to retrieve your project.">オンライン・ジェネレータではファイルIDが提供され、後続のHTTPリクエストでファイルIDを参照してプロジェクトを取得します。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.5"  title="原文:: Note">ノート</span></p>
<p ><span class="merged" id="all.3jjoWP.spl1" title="原文 : The online generator stores your project on the server which you then retrieve using a separate HTTP request.">オンライン・ジェネレータは、別のHTTPリクエストを使用して取得するサーバーにプロジェクトを格納します。</span> <span class="merged" id="all.3jjoWP.spl2" title="原文 : Before you use the online generator, consider whether any of the input you provide-​the OpenAPI document, package or Maven coordinates-​and therefore the generated project will reveal any sensitive information.">オンライン・ジェネレータを使用する前に、提供する入力(OpenAPIドキュメント、パッケージまたはMaven座標)のいずれかを考慮してください。したがって、生成されたプロジェクトによって機密情報が明らかになります。</span> </p>
</div>

<p><span class="merged" id="all.21zc5v" title="原文 : This document does not explore further the use of the online generator.">このドキュメントでは、オンライン・ジェネレータの使用については詳しく説明していません。</span></p>

</div>

</div>

</div>


<h2 id="using-generated-code"><span class="merged" id="all.24S5tH" title="原文 : Using the Generated Code">生成されたコードの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.4MVZtf.spl1" title="原文 : The Helidon generators go a long way in helping you write your client or server.">Helidonジェネレータは、クライアントまたはサーバーの記述に役立ちます。</span> <span class="merged" id="all.4MVZtf.spl2" title="原文 : Even so, there are important parts of your project only you can provide.">それでも、あなたのプロジェクトには、あなたしか提供できない重要な部分があります。</span> <span class="merged" id="all.4MVZtf.spl3" title="原文 : This section describes your next steps after you have run the generator.">この項では、ジェネレータを実行した<em>後の</em>次のステップについて説明します。</span> </p>


<h3 id="_completing_the_server"><span class="merged" id="all.2bI9dm" title="原文 : Completing the Server">サーバーの完了</span></h3>
<div class="section">
<p><span class="merged" id="all.1CkF7s.spl1" title="原文 : Recall from earlier how the OpenAPI generator gathers operations into one or more &quot;APIs&quot; and generates either a class or an interface-​your choice-​for each API.">以前から、OpenAPIジェネレータが1つ以上のAPIに操作を収集し、APIごとにクラスまたはインタフェース(選択したインタフェース)を生成する方法を思い出してください。</span> <span class="merged" id="all.1CkF7s.spl2" title="原文 : You need to extend each generated API class or implement each generated API interface by writing your own classes.">生成された各APIクラスを拡張するか、独自のクラスを記述して生成された各APIインタフェースを実装する必要があります。</span> <span class="merged" id="all.1CkF7s.spl3" title="原文 : Any input parameters to the endpoints are expressed as POJO model objects or Java types, as declared in the OpenAPI document.">エンドポイントへの入力パラメータは、OpenAPIドキュメントで宣言されているように、POJOモデル・オブジェクトまたはJava型として表されます。</span> <span class="merged" id="all.1CkF7s.spl4" title="原文 : Your server code uses each of the input parameters to accomplish whatever business purpose that endpoint is responsible for, possibly returning a result as a POJO or Java type as indicated for that operation in the OpenAPI document.">サーバー・コードでは、各入力パラメータを使用して、エンドポイントが担当するあらゆるビジネス目的を達成します。たとえば、OpenAPIドキュメントでその操作に示されているPOJOまたはJavaタイプとして結果を返します。</span> </p>

<p><span class="merged" id="all.2tkWyK.spl1" title="原文 : In some cases, you might need more control over the response sent to the client.">場合によっては、クライアントに送信されるレスポンスをより詳細に制御する必要があることがあります。</span> <span class="merged" id="all.2tkWyK.spl2" title="原文 : In that case, specify the additional property returnResponse=true when you run the Helidon server generator.">その場合は、Helidonサーバー・ジェネレータを実行するときに、追加プロパティ<code>returnResponse=true</code>を指定します。</span> <span class="merged" id="all.2tkWyK.spl3" title="原文 : The return type for the generated methods is the Jakarta RESTful web services Response and your code has complete control-​and therefore responsibility-​over setting the status, writing the response entity (if any), and assigning any returned headers.">生成されたメソッドの戻り型は、Jakarta RESTful webサービス<code>Response</code>であり、コードには、ステータスの設定、レスポンス・エンティティ(ある場合)の記述、および返されたヘッダーの割当てに対する完全な制御と責任があります。</span> </p>

<p><span class="merged" id="all.15CHKg.spl1" title="原文 : Your code plus the server code from the Helidon generator-​all running on Helidon MP-​combine to fully implement the server API declared in the original OpenAPI document.">コードと、Helidonジェネレータのサーバー・コード(すべてHelidon MPで実行)を組み合せて、元のOpenAPIドキュメントで宣言されたサーバーAPIを完全に実装します。</span> <span class="merged" id="all.15CHKg.spl2" title="原文 : Build your project to get a tailored Helidon MP server .jar file or Docker image and your server is ready to run.">プロジェクトをビルドして、カスタマイズされたHelidon MPサーバーの<code>.jar</code>ファイルまたはDockerイメージを取得し、サーバーを実行する準備ができました。</span> </p>

</div>


<h3 id="_using_the_client_library"><span class="merged" id="all.ZQHJZ" title="原文 : Using the Client Library">クライアント・ライブラリの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.wWnKA.spl1" title="原文 : The generated client code represents a true library.">生成されたクライアント・コードは真のライブラリを表します。</span> <span class="merged" id="all.wWnKA.spl2" title="原文 : Typically, you do not need to customize the generated client code itself.">通常、生成されたクライアント・コード自体をカスタマイズする必要はありません。</span> <span class="merged" id="all.wWnKA.spl3" title="原文 : You do need to write code to invoke the code in that library.">そのライブラリ内のコードを起動するコードを記述する必要が<em>あります</em>。</span> </p>

<p><span class="merged" id="all.dUm5X.spl1" title="原文 : The Helidon MP client generator creates a MicroProfile REST client interface for each API.">Helidon MPクライアント・ジェネレータは、APIごとにMicroProfile RESTクライアント・インタフェースを作成します。</span> <span class="merged" id="all.dUm5X.spl2" title="原文 : Each generated API interface is annotated so your code can @Inject the API into one of your own beans and then use the interface directly to invoke the remote service.">生成された各APIインタフェースに注釈が付けられるため、コードはAPIを独自のBeanの1つに<code>@Inject</code>し、インタフェースを直接使用してリモート・サービスを呼び出すことができます。</span> <span class="merged" id="all.dUm5X.spl3" title="原文 : Alternatively, you can also explicitly use the RestClientBuilder to create an instance programmatically and then invoke its methods to contact the remote service.">または、<a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/apidocs/org/eclipse/microprofile/rest/client/RestClientBuilder.html" target="_blank"><code>RestClientBuilder</code></a>を明示的に使用して、プログラムでインスタンスを作成し、そのメソッドを呼び出してリモート・サービスに接続することもできます。</span> <span class="merged" id="all.dUm5X.spl4" title="原文 : The Helidon MP REST Client documentation describes both approaches in more detail."><router-link to="/mp/restclient">「Helidon MP RESTクライアント」</router-link>ドキュメントでは、両方のアプローチについて詳しく説明します。</span> </p>

<p><span class="merged" id="all.2a9q2N" title="原文 : In the following example, ExampleResource (itself running in a server) invokes a remote Pet service and shows one way to use the generated PetApi REST client interface.">次の例では、<code>ExampleResource</code> (サーバーで実行されている自身)がリモートPetサービスを起動し、生成された<code>PetApi</code> RESTクライアント・インタフェースを使用する1つの方法を示します。</span></p>

<markup
lang="java"
title="Using the generated <code>PetApi</code> from a separate service"
>@Path("/exampleServiceCallingService") <span class="conum" data-value="1" />
public class ExampleResource {

    @Inject <span class="conum" data-value="2" />
    @RestClient <span class="conum" data-value="3" />
    private PetApi petApi; <span class="conum" data-value="4" />

    @GET
    @Path("/getPet/{petId}")
    public Response getPetUsingId(@PathParam("petId") Long petId) {
        Pet pet = petApi.getPetById(petId); <span class="conum" data-value="5" />
        //...
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.IyJeR" title="原文 : Uses a bean-defining annotation so CDI can inject into this class.">Bean定義注釈を使用して、CDIがこのクラスにインジェクトできるようにします。</span></li>
<li data-value="2"><span class="merged" id="all.XKhHP" title="原文 : Requests that CDI inject the following field.">CDIが次のフィールドをインジェクトするようにリクエストします。</span></li>
<li data-value="3"><span class="merged" id="all.1ifIUG" title="原文 : Identifies to Helidon MP that the following field is a REST client.">次のフィールドがRESTクライアントであることをHelidon MPに識別します。</span></li>
<li data-value="4"><span class="merged" id="all.29qXXD" title="原文 : Declares the field using the generated PetApi type.">生成された<code>PetApi</code>型を使用してフィールドを宣言します。</span></li>
<li data-value="5"><span class="merged" id="all.3GJd2o" title="原文 : Invokes the remote service using the injected field and the parameter from the incoming request.">インジェクトされたフィールドおよび受信リクエストからのパラメータを使用して、リモート・サービスを起動します。</span></li>
</ul>

</div>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.6"  title="原文:: References">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2OROtk" title="原文 : OpenAPI Generator Official Website"><a href="https://openapi-generator.tech" target="_blank">OpenAPIジェネレータ公式サイト</a></span></p>

</li>
<li>
<p><span class="merged" id="all.20f2ub" title="原文 : OpenAPI Generator GitHub Repository"><a href="https://github.com/OpenAPITools/openapi-generator" target="_blank">OpenAPIジェネレータGitHubリポジトリ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1nYfdL" title="原文 : OpenAPI specification"><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">OpenAPI仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3XBlQf" title="原文 : MicroProfile REST Client specification"><a href="https://github.com/eclipse/microprofile-rest-client" target="_blank">MicroProfile RESTクライアント仕様</a></span></p>

</li>
</ul>

</div>

</doc-view>
