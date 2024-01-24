<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.64"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.63" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C.3" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.37" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3YrEao.1" title="原文 : Usage"><router-link @click.native="this.scrollFix('#usage-section')" to="#usage-section">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.7" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.79"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.BtrBX.1" title="原文 : The OpenAPI specification provides a standard way to express RESTful APIs."><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">「OpenAPI仕様」</a>は、RESTful APIを表す標準的な方法を提供します。</span></p>

<p><span class="merged" id="all.3SV5gw.spl1" title="原文 : Separately, the OpenAPI generator project has created a powerful code generator tool which accepts an OpenAPI document and generates client and server code for many languages and frameworks.">これとは別に、<a href="https://openapi-generator.tech" target="_blank">「OpenAPIジェネレータ」</a>プロジェクトは、OpenAPIドキュメントを受け入れ、多くの言語およびフレームワークのクライアントおよびサーバー・コードを生成する強力なコード・ジェネレータ・ツールを作成しました。</span> <span class="merged" id="all.3SV5gw.spl2" title="原文 : The Helidon team contributes to this tool to ensure that it provides strong support for Helidon SE clients and servers.">Helidonチームは、Helidon SEクライアントおよびサーバーに対して強力なサポートを提供するために、このツールに貢献しています。</span> <span class="merged" id="all.3SV5gw.spl3" title="原文 : As a result, you can use the generator to create code that fits smoothly into your Helidon applications.">その結果、ジェネレータを使用して、Helidonアプリケーションにスムーズに適合するコードを作成できます。</span> <span class="merged" id="all.3SV5gw.spl4" title="原文 : The OpenAPI generator release 6.2.1 gained particularly strong support for Helidon.">OpenAPIジェネレータ・リリース6.2.1は、特にHelidonに対する強力なサポートを得ました。</span> <span class="merged" id="all.3SV5gw.spl5" title="原文 : This document applies to that release and later ones.">このドキュメントは、そのリリース以降に適用されます。</span> </p>

<p><span class="merged" id="all.4Cp2N8.1" title="原文 : In the vocabulary of the tool, there are two generators for Helidon:">ツールの語彙には、Helidonの<em>「ジェネレータ」</em>が2つあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1bNbgz.1" title="原文 : java-helidon-client (hereafter the Helidon client generator)"><code>java-helidon-client</code> (以下Helidonクライアント・ジェネレータ)</span></p>

</li>
<li>
<p><span class="merged" id="all.13qIwA.1" title="原文 : java-helidon-server (hereafter the Helidon server generator)."><code>java-helidon-server</code> (以下Helidonサーバー・ジェネレータ)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1Nvwj0.1" title="原文 : Each of these generators supports two libraries:">これらの各ジェネレータは、次の2つの<em>ライブラリ</em>をサポートしています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3bUXqd.1" title="原文 : mp - for Helidon MP code generation"><code>mp</code> - Helidon MPコード生成用</span></p>

</li>
<li>
<p><span class="merged" id="all.44EaW3.1" title="原文 : se - for Helidon SE code generation"><code>se</code> - Helidon SEコード生成用</span></p>

</li>
</ul>

<p><span class="merged" id="all.2dIPsu.spl1" title="原文 : Use the Helidon client generator and its se library to create a Helidon SE client based on Helidon WebClients.">Helidon <em>「クライアント」</em>ジェネレータとその<code>se</code>ライブラリを使用して、<router-link to="/se/webclient">Helidon WebClients</router-link>に基づいてHelidon SEクライアントを作成します。</span> <span class="merged" id="all.2dIPsu.spl2" title="原文 : The resulting client library works with any server that implements the API declared in the OpenAPI document you specified when you ran the generator.">結果のクライアント・ライブラリは、ジェネレータの実行時に指定したOpenAPIドキュメントで宣言されたAPIを実装するサーバーと連携します。</span> <span class="merged" id="all.2dIPsu.spl3" title="原文 : The client library provides an abstraction similar to remote procedure calls (RPC).">クライアント・ライブラリは、リモート・プロシージャ・コール(RPC)と同様の抽象化を提供します。</span> <span class="merged" id="all.2dIPsu.spl4" title="原文 : To access a remote service that implements the endpoints declared in the OpenAPI document, your code uses the generated client library first to establish a connection to the remote service and then to call remote service endpoints by invoking local methods passing POJO business objects or Java types as arguments.">OpenAPIドキュメントで宣言されたエンドポイントを実装するリモート・サービスにアクセスするには、コードで最初に生成されたクライアント・ライブラリを使用してリモート・サービスへの接続を確立し、次にPOJOビジネス・オブジェクトまたはJavaタイプを引数として渡すローカル・メソッドを呼び出してリモート・サービス・エンドポイントをコールします。</span> </p>

<p><span class="merged" id="all.1ZVk1b.spl1" title="原文 : Use the tool’s Helidon server generator and its se library to create server endpoint stubs for a Helidon SE service.">ツールのHelidon <em>「サーバー」</em>ジェネレータとその<code>se</code>ライブラリを使用して、Helidon SEサービスのサーバー・エンドポイント・スタブを作成します。</span> <span class="merged" id="all.1ZVk1b.spl2" title="原文 : You build on these stubs by extending a generated class or implementing a generated interface, adding your specific business logic to finish the implementation of the endpoints.">これらのスタブ上に構築するには、生成されたクラスを拡張するか、生成されたインタフェースを実装し、エンドポイントの実装を完了するための特定のビジネス・ロジックを追加します。</span> <span class="merged" id="all.1ZVk1b.spl3" title="原文 : The combination of the generated server code plus Helidon SE underneath it allows you to focus on the business details instead of resource boilerplate.">生成されたサーバー・コードと、その下のHelidon SEを組み合せると、リソース・ボイラープレートではなく、ビジネス詳細に集中できます。</span> </p>

<p><span class="merged" id="all.2XN5X.1" title="原文 : You can run the OpenAPI generators in three ways:">OpenAPIジェネレータは、次の3つの方法で実行できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3te6v3.2" title="原文 : using the OpenAPI generator CLI">OpenAPIジェネレータCLIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2MZffJ.2" title="原文 : using the OpenAPI generator Maven plug-in">OpenAPIジェネレータMavenプラグインの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.3IPTGP.2" title="原文 : using the online OpenAPI generator website">オンラインOpenAPIジェネレータwebサイトの使用</span></p>

</li>
</ul>

<p><span class="merged" id="all.43Qc5v.1" title="原文 : The rest of this document walks you through how to use each technique and how to configure the generators to produce the code you want.">このドキュメントの残りの部分では、<router-link @click.native="this.scrollFix('#usage-section')" to="#usage-section">「使用方法」</router-link>の各手法と、ジェネレータを<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">「構成」</router-link>して必要なコードを生成する方法について説明します。</span></p>

</div>


<h2 id="_maven_coordinates"><span class="merged" id="all.317oeS.56"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.CRCBZ.1" title="原文 : Your project does not need any dependencies on the OpenAPI generator.">プロジェクトでは、OpenAPIジェネレータへの依存関係は必要ありません。</span></p>

<p><span class="merged" id="all.4LnnpP.1.spl1" title="原文 : To use the OpenAPI generator plug-in to generate or regenerate files during your project build, add the following to your project’s pom.xml file to declare the plug-in.">OpenAPIジェネレータ・プラグインを使用して、プロジェクト・ビルド中にファイルを生成または再生成するには、プロジェクトの<code>pom.xml</code>ファイルに次を追加してプラグインを宣言します。</span> <span class="merged" id="all.4LnnpP.1.spl2" title="原文 : Choose whichever version of the generator plug-in meets your needs as long as it is at least 6.2.1.">少なくとも6.2.1であるかぎり、ジェネレータ・プラグインのどのバージョンがニーズを満たすかを選択します。</span> </p>

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

<p><span class="merged" id="all.2e7dHi.1" title="原文 : A later section describes how to invoke the plug-in during your build."><router-link @click.native="this.scrollFix('#invoking-the-plugin')" to="#invoking-the-plugin">「後続セクション」</router-link>は、ビルド中にプラグインを起動する方法について説明します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.42"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2lN9Jz.1.spl1" title="原文 : The OpenAPI generators support a substantial, powerful, and sometimes bewildering group of configuration settings.">OpenAPIジェネレータは、構成設定の大幅で強力で、時にはわかりにくいグループをサポートします。</span> <span class="merged" id="all.2lN9Jz.1.spl2" title="原文 : For complete lists see these pages:">完全なリストについては、次のページを参照してください:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.11k3e3.1" title="原文 : generic options"><a href="https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/docs/usage.md#generate" target="_blank">汎用オプション</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2gfqtx.1" title="原文 : Helidon client generator options and"><a href="https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/docs/generators/java-helidon-client.md" target="_blank">「Helidonクライアント・ジェネレータのオプション」</a>および</span></p>

</li>
<li>
<p><span class="merged" id="all.3Hhjsk.1" title="原文 : Helidon server generator options"><a href="https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/docs/generators/java-helidon-server.md" target="_blank">Helidonサーバー・ジェネレータ・オプション</a></span></p>

</li>
</ul>

<p><span class="merged" id="all.2bwdoe.1" title="原文 : The OpenAPI generator loosely divides its settings into three types:">OpenAPIジェネレータの設定は、次の3つのタイプに緩やかに分割されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1OSzhn.1"  title="原文:: global properties"><em>グローバル・プロパティ</em></span></p>
<p><span class="merged" id="all.1P09ew.1" title="原文 : These settings generally govern the overall behavior of the tool, regardless of which specific generator you use.">通常、これらの設定は、使用する特定のジェネレータに関係なく、ツールの全体的な動作を制御します。</span></p>

<p><span class="merged" id="all.3YxuZe.1" title="原文 : For the CLI, use the common option style:">CLIでは、共通オプション・スタイルを使用します:</span></p>

<p><span class="merged" id="all.2CFYKq.1"  title="原文: -i petstore.yaml"><code>-i petstore.yaml</code></span></p>

<p><span class="merged" id="all.32d2xK.1"  title="原文: --input-spec petstore.yaml"><code>--input-spec petstore.yaml</code></span></p>

<p><span class="merged" id="all.3mvmkF.1" title="原文 : For the Maven plug-in, use elements within the &lt;configuration&gt; section of the plug-in:">Mavenプラグインの場合は、プラグインの<code>&lt;configuration></code>セクション内の要素を使用します:</span></p>

<markup
lang="xml"

>&lt;configuration&gt;
    &lt;inputSpec&gt;petstore.yaml&lt;/inputSpec&gt;
&lt;/configuration&gt;</markup>

</li>
<li>
<p><span class="merged" id="all.14GOz3.1" title="原文 : options"><em>オプション</em></span></p>
<p><span class="merged" id="all.zVeNR.1" title="原文 : These settings typically affect how particular generators operate.">これらの設定は、通常、特定のジェネレータの動作に影響します。</span></p>

<p><span class="merged" id="all.265gz5.1" title="原文 : For the CLI, specify config options as additional properties:">CLIの場合は、追加プロパティとして構成オプションを指定します:</span></p>

<p><span class="merged" id="all.3H6Woq.1"  title="原文: --additional-properties=groupId=com.mycompany.test,artifactId=my-example"><code>--additional-properties=groupId=com.mycompany.test,artifactId=my-example</code></span></p>

<p><span class="merged" id="all.Xjurf.2"  title="原文:: or">または</span></p>

<markup
lang="bash"

>-p groupId=com.mycompany.test
-p artifactId=my-example</markup>

<p><span class="merged" id="all.XcPwK.1" title="原文 : For the Maven plug-in, use the &lt;configOptions&gt; section within &lt;configuration&gt;:">Mavenプラグインの場合は、<code>&lt;configuration></code>内の<code>&lt;configOptions></code>セクションを使用します:</span></p>

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
<p><span class="merged" id="all.20PV5J.1"  title="原文:: additional properties"><em>追加プロパティ</em></span></p>
<p><span class="merged" id="all.4M3Ub4.1" title="原文 : Settings in this category typically are passed to the templates used in generating the files, although generators can use additional properties in deciding how to generate the files.">通常、このカテゴリの設定はファイルの生成に使用されるテンプレートに渡されますが、ジェネレータはファイルの生成方法を決定する際に追加のプロパティを使用できます。</span></p>

<p><span class="merged" id="all.B6WXD.1" title="原文 : For the CLI:">CLIの場合:</span></p>

<p><span class="merged" id="all.JEiEI.1"  title="原文: --additional-properties &quot;useAbstractClasses=false,returnResponse=true&quot;"><code>--additional-properties "useAbstractClasses=false,returnResponse=true"</code></span></p>

<p><span class="merged" id="all.Xjurf.3"  title="原文:: or">または</span></p>

<markup
lang="bash"

>-p useAbstractClasses=false
-p returnResponse=true</markup>

<p><span class="merged" id="all.3A4fcG.1" title="原文 : For the Maven plug-in, use an &lt;additionalProperties&gt; section within the &lt;configuration&gt; section for the plug-in:">Mavenプラグインの場合は、プラグインの<code>&lt;configuration></code>セクション内の<code>&lt;additionalProperties></code>セクションを使用します:</span></p>

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

<p><span class="merged" id="all.4SnYny.1.spl1" title="原文 : Keep this distinction among global options, config options, and additional properties in mind so you know how to express the configuration you want.">このように、グローバル・オプション、構成オプションおよび追加プロパティを区別して、必要な構成を表現する方法がわかるようにしてください。</span> <span class="merged" id="all.4SnYny.1.spl2" title="原文 : The earlier links to the lists of configuration options for the Helidon generators groups options and additional properties in separate tables.">Helidonジェネレータの構成オプションのリストに対する<router-link @click.native="this.scrollFix('#links-to-settings')" to="#links-to-settings">「前のリンク」</router-link>は、オプションと追加プロパティを別々の表にグループ化します。</span> </p>

<p><span class="merged" id="all.3su70c.1" title="原文 : The next few sections describe, in turn, required settings, settings we recommend, and other common settings most developers will want to use.">次のいくつかのセクションでは、必要な設定、推奨される設定、およびほとんどの開発者が使用するその他の一般的な設定について説明します。</span></p>


<h3 id="_required_settings"><span class="merged" id="all.2T49l4.1"  title="原文:: Required Settings">必須設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1kGHPL.1" title="原文 : You must specify the following options:">次のオプションを指定する必要があります:</span></p>

<div class="block-title"><span class="merged" id="all.3eram7.1" title="原文 : Required OpenAPI Generator Options"><span>必須のOpenAPIジェネレータ・オプション</span></span></div>
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
<th><span class="merged" id="all.1hmKoA.1"  title="原文:: Option">オプション</span></th>
<th><span class="merged" id="all.sIDEh.1" title="原文 : Short Option">ショート・オプション</span></th>
<th><span class="merged" id="all.3beb1l.1" title="原文 : Plug-in Setting">プラグイン設定</span></th>
<th><span class="merged" id="all.4JM9z7.31"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.17JEBs.2"  title="原文:: Values">値</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4cLayC.1"  title="原文: --inputSpec"><code>--inputSpec</code></span></td>
<td class=""><span class="merged" id="all.4UpHGb.1"  title="原文: -i"><code>-i</code></span></td>
<td class=""><span class="merged" id="all.4cKZNG.1"  title="原文: &lt;inputSpec&gt;"><code>&lt;inputSpec></code></span></td>
<td class=""><span class="merged" id="all.3rHTAU.1" title="原文 : Path to the OpenAPI document defining the REST API">REST APIを定義するOpenAPIドキュメントへのパス</span></td>

</tr>
<tr>
<td class=""><span class="merged" id="all.3g10XX.1"  title="原文: --generatorName"><code>--generatorName</code></span></td>
<td class=""><span class="merged" id="all.46RPRj.1"  title="原文: -g"><code>-g</code></span></td>
<td class=""><span class="merged" id="all.3ObSXI.1"  title="原文: &lt;generatorName&gt;"><code>&lt;generatorName></code></span></td>
<td class=""><span class="merged" id="all.2BEDM3.1" title="原文 : Generator you want to use (java-helidon-server or java-helidon-client)">使用するジェネレータ(<code>java-helidon-server</code>または<code>java-helidon-client</code>)</span></td>
<td class=""><span class="merged" id="all.4C8vT9.1" title="原文 : java-helidon-server java-helidon-client"><code>java-helidon-server</code><br> <code>java-helidon-client</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_recommended_settings_for_the_openapi_generator"><span class="merged" id="all.1p3C33.1" title="原文 : Recommended Settings for the OpenAPI Generator">OpenAPIジェネレータの推奨設定</span></h3>
<div class="section">
<p><span class="merged" id="all.4dqgF4.1" title="原文 : Your project might have different needs, but in general we advise developers to use the following settings when using the OpenAPI generator.">プロジェクトのニーズは様々ですが、通常、OpenAPIジェネレータを使用する場合は、次の設定を使用することをお薦めします。</span></p>

<div class="block-title"><span class="merged" id="all.1AoCLh.1" title="原文 : Recommended OpenAPI Generator Additional Properties"><span>推奨OpenAPIジェネレータの追加プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 21.428%;">
<col style="width: 42.857%;">
<col style="width: 35.714%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8.4"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.4JM9z7.32"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.oxso7.5"  title="原文:: Default">デフォルト</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2eFQoF.1"  title="原文: apiPackage"><code>apiPackage</code></span></td>
<td class=""><span class="merged" id="all.g05Bu.1" title="原文 : Name of the package for generated API interfaces/classes">生成されたAPIインタフェース/クラスのパッケージの名前</span></td>
<td class=""><span class="merged" id="all.3JXFfk.1" title="原文 : org.openapitools.server.api or org.openapitools.client.api"><code>org.openapitools.server.api</code>または<br><code>org.openapitools.client.api</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3gYznR.1"  title="原文: modelPackage"><code>modelPackage</code></span></td>
<td class=""><span class="merged" id="all.AdTVi.1" title="原文 : Name of the package for generated model (POJO) classes">生成されたモデル(POJO)クラスのパッケージの名前</span></td>
<td class=""><span class="merged" id="all.2McLM7.1" title="原文 : org.openapitools.server.model or org.openapitools.client.model"><code>org.openapitools.server.model</code>または<br><code>org.openapitools.client.model</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9oJ7u.1"  title="原文: invokerPackage"><code>invokerPackage</code></span></td>
<td class=""><span class="merged" id="all.2HfJw3.1" title="原文 : Name of the package for generated driver classes">生成されたドライバ・クラスのパッケージの名前</span></td>
<td class=""><span class="merged" id="all.3KzHsQ.1" title="原文 : org.openapitools.server or org.openapitools.client"><code>org.openapitools.server</code>または<br><code>org.openapitools.client</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.T5o5S.1"  title="原文: groupId"><code>groupId</code></span></td>
<td class=""><span class="merged" id="all.1OBHdz.1" title="原文 : Group ID in the generated pom.xml">生成された<code>pom.xml</code>のグループID</span></td>
<td class=""><span class="merged" id="all.2l0bAD.1"  title="原文: org.openapitools"><code>org.openapitools</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3dJ7Z0.1"  title="原文: artifactId"><code>artifactId</code></span></td>
<td class=""><span class="merged" id="all.21c5wc.1" title="原文 : Artifact ID in the generated pom.xml">生成された<code>pom.xml</code>内のアーティファクトID</span></td>
<td class=""><span class="merged" id="all.2Jj4qg.1" title="原文 : openapi-java-server or openapi-java-client"><code>openapi-java-server</code>または<br><code>openapi-java-client</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29odWp.1"  title="原文: artifactVersion"><code>artifactVersion</code></span></td>
<td class=""><span class="merged" id="all.498jb2.1" title="原文 : Artifact version in the generated pom.xml">生成された<code>pom.xml</code>内のアーティファクト・バージョン</span></td>
<td class=""><span class="merged" id="all.4KoJzp.1"  title="原文: 1.0.0"><code>1.0.0</code></span></td>
</tr>
</tbody>
</table>
</div>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.12"  title="原文:: Note">ノート</span></p>
<p ><span class="merged" id="all.MooFO.1" title="原文 : The next table contains recommendations only for using the OpenAPI generator plug-in (not for using the CLI).">次の表には、OpenAPIジェネレータ・プラグインを使用する(CLIを使用しない)ための推奨事項のみが含まれています。</span></p>
</div>

<div class="block-title"><span class="merged" id="all.4KcjnQ.1" title="原文 : Recommended OpenAPI Generator Plug-in Options"><span>推奨されるOpenAPIジェネレータ・プラグイン・オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.529%;">
<col style="width: 47.059%;">
<col style="width: 29.412%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.DEbPD.1" title="原文 : Plug-in Option">プラグイン・オプション</span></th>
<th><span class="merged" id="all.4JM9z7.33"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.oxso7.6"  title="原文:: Default">デフォルト</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.cbcYr.1"  title="原文: &lt;output&gt;"><code>&lt;output></code></span></td>
<td class=""><span class="merged" id="all.4CN28C.1" title="原文 : Directory where the generator should place files. + We strongly recommend &lt;output&gt;target/generated-sources&lt;/output&gt; or a subdirectory below there.">ジェネレータがファイルを配置するディレクトリ。<br>+ <code>&lt;output>target/generated-sources&lt;/output></code>または下のサブディレクトリを推奨します。</span></td>
<td class=""><span class="merged" id="all.XbhIx.1" title="原文 : . (current directory)"><code>.</code><br>(現在のディレクトリ)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Rv7Xi.1"  title="原文: &lt;addCompileSourceRoot&gt;"><code>&lt;addCompileSourceRoot></code></span></td>
<td class=""><span class="merged" id="all.1NhSd.1" title="原文 : Whether Maven should include the output directory as a source root (that is, include it automatically in the build). + We advise &lt;addCompileSourceRoot&gt;true&lt;/addCompileSourceRoot&gt;.">Mavenに出力ディレクトリをソース・ルートとして含める(つまり、自動的にビルドに含める)かどうか。<br>+ <code>&lt;addCompileSourceRoot>true&lt;/addCompileSourceRoot></code>をお勧めします。</span></td>
<td class=""><span class="merged" id="all.42DdBS.80"  title="原文: false"><code>false</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h3 id="_common_settings"><span class="merged" id="all.452Ly2.1"  title="原文:: Common Settings">共通設定</span></h3>
<div class="section">
<p><span class="merged" id="all.ZXkeS.1.spl1" title="原文 : Among the many configuration settings available to you, some you should particularly consider are summarized in the table below.">使用可能な多くの構成設定の中で、特に考慮する必要があるものが次の表にまとめられています。</span> <span class="merged" id="all.ZXkeS.1.spl2" title="原文 : Refer to the earlier links for complete lists.">完全なリストは、<router-link @click.native="this.scrollFix('#links-to-settings')" to="#links-to-settings">「前のリンク」</router-link>を参照してください。</span> </p>

<div class="block-title"><span class="merged" id="all.33sGso.1" title="原文 : Common OpenAPI Generator Additional Properties"><span>共通OpenAPIジェネレータの追加プロパティ</span></span></div>
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
<th><span class="merged" id="all.261WC8.5"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.4JM9z7.34"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.17JEBs.3"  title="原文:: Values">値</span></th>
<th><span class="merged" id="all.oxso7.7"  title="原文:: Default">デフォルト</span></th>
<th><span class="merged" id="all.3Wy1iS.3"  title="原文:: Notes">ノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3N1Az8.1"  title="原文: helidonVersion"><code>helidonVersion</code></span></td>
<td class=""><span class="merged" id="all.1n47F0.1" title="原文 : Version of Helidon for which to generate the files">ファイルを生成するHelidonのバージョン</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.19teUW.1"  title="原文: 2.5.2"><code>2.5.2</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kOsAL.1"  title="原文:: Affects:">影響:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Z52Dx.1" title="原文 : Helidon version for the &lt;parent&gt;"><code>&lt;parent></code>のHelidonバージョン</span></p>

</li>
<li>
<p><span class="merged" id="all.1WCEgo.1" title="原文 : Dependencies (javax vs. jakarta)">依存関係 (<code>javax</code>と<code>jakarta</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.29Cfi9.1" title="原文 : java import statements in generated code (javax vs. jakarta)">生成されたコード内の<code>java import</code>文(<code>javax</code>と<code>jakarta</code>)</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2vZ1GX.1"  title="原文: fullProject"><code>fullProject</code></span></td>
<td class=""><span class="merged" id="all.4XLeuv.1" title="原文 : Whether to generate all the normal files or only API files">すべての通常のファイルを生成するか、APIファイルのみを生成するか</span></td>
<td class=""><span class="merged" id="all.SEAf1.1"  title="原文:: true/false"><code>true</code>/<code>false</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.81"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4Cgu3u.1" title="原文 : The &quot;API files&quot; include files developers do not normally modify after they are generated: the interfaces or classes for the declared API and the model classes.">「APIファイル」インクルード・ファイルは、通常、開発者が生成後に変更しない: 宣言されたAPIおよびモデル・クラスのインタフェースまたはクラス。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1IAzI6.1"  title="原文: serializationLibrary"><code>serializationLibrary</code></span></td>
<td class=""><span class="merged" id="all.iRnGP.1" title="原文 : which Java library to use for serializing JSON">JSONのシリアライズに使用するJavaライブラリ</span></td>
<td class=""><span class="merged" id="all.2gjulj.1" title="原文 : jsonb, jackson"><code>jsonb</code>, <code>jackson</code></span></td>
<td class=""><span class="merged" id="all.3u7Ye3.1"  title="原文: jackson"><code>jackson</code></span></td>

</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="usage-section"><span class="merged" id="all.JUOSC.59"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.26MuX9.1" title="原文 : This section covers two major topics:">この項では、2つの主要なトピックについて説明します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2hPiC6.1" title="原文 : Planning your use of the OpenAPI generators"><router-link @click.native="this.scrollFix('#usage-planning')" to="#usage-planning">OpenAPIジェネレータの使用計画</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3NvbDr.1" title="原文 : Running the generators"><router-link @click.native="this.scrollFix('#usage-running')" to="#usage-running">ジェネレータの実行</router-link></span></p>

</li>
</ul>


<h3 id="usage-planning"><span class="merged" id="all.4Vtvt.1" title="原文 : Planning Your Use of the OpenAPI Generators">OpenAPIジェネレータの使用の計画</span></h3>
<div class="section">
<p><span class="merged" id="all.4W4dCM.1.spl1" title="原文 : Beyond the settings listed above, there are several important choices you need to make when planning your project and when running the OpenAPI generators.">前述の設定以外に、プロジェクトの計画時およびOpenAPIジェネレータの実行時に行う必要がある重要な選択肢がいくつかあります。</span> <span class="merged" id="all.4W4dCM.1.spl2" title="原文 : This section addresses those choices.">このセクションでは、これらの選択肢について説明します。</span> </p>


<h4 id="_generating_a_new_project_and_generating_into_an_existing_project"><span class="merged" id="all.32hW1N.1" title="原文 : Generating a New Project and Generating Into an Existing Project">新規プロジェクトの生成および既存のプロジェクトの<em>「先」</em>の生成</span></h4>
<div class="section">
<p><span class="merged" id="all.1ngIxG.1.spl1" title="原文 : You can use the OpenAPI generator to create a new project or to generate files into an existing project.">OpenAPIジェネレータを使用して、新しいプロジェクトを作成したり、既存のプロジェクトにファイルを生成できます。</span> <span class="merged" id="all.1ngIxG.1.spl2" title="原文 : Some developers do both, using the generator to create the project at first and then to update the project as they evolve the OpenAPI document or change the generation options they select.">一部の開発者は、最初にジェネレータを使用してプロジェクトを作成し、次にOpenAPIドキュメントの展開時にプロジェクトを更新するか、選択した生成オプションを変更します。</span> <span class="merged" id="all.1ngIxG.1.spl3" title="原文 : Others create the project in some other way-​for example, using the Helidon CLI.">その他は、<router-link to="/about/cli">Helidon CLI</router-link>などを使用して、別の方法でプロジェクトを作成します。</span> <span class="merged" id="all.1ngIxG.1.spl4" title="原文 : The OpenAPI generator CLI and plug-in both support each type of usage.">OpenAPIジェネレータのCLIとプラグインは、それぞれの使用タイプをサポートします。</span> </p>

<p><span class="merged" id="all.1GMEfm.1.spl1" title="原文 : If the OpenAPI generator finds a pre-existing API or model file, it overwrites it with the latest content.">OpenAPIジェネレータで既存のAPIまたはモデル・ファイルが検出されると、最新のコンテンツで上書きされます。</span> <span class="merged" id="all.1GMEfm.1.spl2" title="原文 : It does not overwrite a pom.xml file or test files."><code>pom.xml</code>ファイルまたはテスト・ファイルは上書きされません。</span> <span class="merged" id="all.1GMEfm.1.spl3" title="原文 : This is important because certain generation settings can influence the generated dependencies in the pom.xml file.">これは、特定の世代設定が<code>pom.xml</code>ファイル内の生成された依存関係に影響を与える可能性があるため重要です。</span> <span class="merged" id="all.1GMEfm.1.spl4" title="原文 : For example, the serializationLibrary setting creates dependencies on either JSON-B or Jackson artifacts.">たとえば、<code>serializationLibrary</code>設定では、JSON-BアーティファクトまたはJacksonアーティファクトの依存関係が作成されます。</span> <span class="merged" id="all.1GMEfm.1.spl5" title="原文 : As a result, changing the generation options can change the dependencies your project should have.">その結果、生成オプションを変更すると、プロジェクトの依存関係が変更される可能性があります。</span> <span class="merged" id="all.1GMEfm.1.spl6" title="原文 : If you rerun the generator, the old pom.xml remains and does not reflect the revised depencencies.">ジェネレータを再実行しても、古い<code>pom.xml</code>は残り、改訂されたデペンセンシは反映されません。</span> </p>

<p><span class="merged" id="all.kNyDf.1" title="原文 : As a practical matter, many developers use the OpenAPI generators in one of the following ways:">実際の問題として、多くの開発者は、次のいずれかの方法でOpenAPIジェネレータを使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.LOLDT.1" title="原文 : Use the generator CLI once to create a new project.">ジェネレータCLIを1回使用して、新しいプロジェクトを作成します。</span></p>
<p><span class="merged" id="all.3qQlFd.1.spl1" title="原文 : By default, the generator CLI creates files in the normal Maven project structure: src/main/java, etc. Then you add your own files to that same project structure.">デフォルトでは、ジェネレータCLIは通常のMavenプロジェクト構造にファイルを作成: <code>src/main/java</code>など次に、同じプロジェクト構造に独自のファイルを追加します。</span> <span class="merged" id="all.3qQlFd.1.spl2" title="原文 : Because the generated files are in the standard places, the project build includes them by default.">生成されたファイルは標準の場所にあるため、プロジェクト・ビルドにはデフォルトで含まれます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.13"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.25vvia.1.spl1" title="原文 : You can run the generator CLI again to update the generated files.">ジェネレータCLIを再度実行して、生成されたファイルを更新<em>できます</em>。</span> <span class="merged" id="all.25vvia.1.spl2" title="原文 : Because this happens outside the project’s build lifecycle, you need to remember to rerun the CLI yourself when you change the OpenAPI document.">これはプロジェクトのビルド・ライフサイクルの外で発生するため、OpenAPIドキュメントを変更するときは、CLIを必ず再実行する必要があります。</span> </p>

<p><span class="merged" id="all.2aIOqD.1.spl1" title="原文 : You also need to identify and manually remove any previously-generated files that become obsolete.">また、不要になった以前に生成されたファイルを識別して手動で削除する必要もあります。</span> <span class="merged" id="all.2aIOqD.1.spl2" title="原文 : Similarly, you must understand how changes in the OpenAPI document or the generation options affect the project dependencies and update the project pom.xml accordingly.">同様に、OpenAPIドキュメントまたは生成オプションの変更がプロジェクトの依存関係にどのように影響するかを理解し、それに応じてプロジェクト<code>pom.xml</code>を更新する必要があります。</span> </p>
</p>
</div>

</li>
<li>
<p><span class="merged" id="all.1xYC5K.1" title="原文 : Use the generator plug-in to (re)generate files during each build.">ジェネレータ・プラグインを使用して、ビルドごとにファイルを生成(再)します。</span></p>
<p><span class="merged" id="all.33uTry.1.spl1" title="原文 : Specify in the plug-in configuration that the generated files should reside in target/generated-sources directory (the conventional location for generated sources) or a subdirectory below there.">生成されたファイルを<code>target/generated-sources</code>ディレクトリ(生成されたソースの従来のロケーション)または下のサブディレクトリに配置するプラグイン構成で指定します。</span> <span class="merged" id="all.33uTry.1.spl2" title="原文 : Each project build runs the OpenAPI generator which reads the then-current OpenAPI document file.">各プロジェクト・ビルドは、現在のOpenAPIドキュメント・ファイルを読み取るOpenAPIジェネレータを実行します。</span> <span class="merged" id="all.33uTry.1.spl3" title="原文 : With the generated files under target, you can use mvn clean to remove any obsolete generated files left over from previous builds.">生成されたファイルを<code>target</code>の下で使用すると、<code>mvn clean</code>を使用して、以前のビルドから残っている古い生成されたファイルを削除できます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.14"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.4VJuPi.1.spl1" title="原文 : In particular, with mvn clean each build regenerates the candidate pom.xml under target/generated-sources.">特に、<code>mvn clean</code>を指定すると、各ビルドで<code>target/generated-sources</code>の下に候補<code>pom.xml</code>が再生成されます。</span> <span class="merged" id="all.4VJuPi.1.spl2" title="原文 : You can inspect the generated pom.xml file for changes in dependencies and make any necessary changes in the actual project pom.xml file.">生成された<code>pom.xml</code>ファイルで依存関係の変更を検査し、実際のプロジェクトの<code>pom.xml</code>ファイルで必要な変更を行うことができます。</span> </p>
</p>
</div>

</li>
</ul>

</div>


<h4 id="_generating_interfaces_or_classes"><span class="merged" id="all.33F1rs.1" title="原文 : Generating Interfaces or Classes">インタフェースまたはクラスの生成中</span></h4>
<div class="section">
<p><span class="merged" id="all.2Gh0Vt" title="原文 : As you generate a Helidon SE server, you can choose whether you want Java interfaces or classes to represent the RESTful API endpoints.">Helidon SE <em>「サーバー」</em>を生成するときに、JavaインタフェースまたはクラスがRESTful APIエンドポイントを表すかどうかを選択できます。</span></p>

<p><span class="merged" id="all.3RQhwZ.1.spl1" title="原文 : By default, the Helidon OpenAPI server generator creates classes.">デフォルトでは、Helidon OpenAPIサーバー・ジェネレータによってクラスが作成されます。</span> <span class="merged" id="all.3RQhwZ.1.spl2" title="原文 : You write your own concrete subclasses which extend those generated classes, supplying the business logic for each REST endpoint.">生成されたクラスを拡張する独自の具象サブクラスを記述し、各RESTエンドポイントのビジネス・ロジックを提供します。</span> <span class="merged" id="all.3RQhwZ.1.spl3" title="原文 : Do not modify the generated classes.">生成されたクラスを変更<em>「しません」</em>。</span> </p>

<p><span class="merged" id="all.3Snhpz.1.spl1" title="原文 : If you set useAbstractClasses=false then the generator creates Java interfaces instead of classes."><code>useAbstractClasses=false</code>を設定すると、ジェネレータはクラスではなくJavaインタフェースを作成します。</span> <span class="merged" id="all.3Snhpz.1.spl2" title="原文 : You then write classes which implement those generated interfaces.">次に、生成されたインタフェースを実装するクラスを記述します。</span> </p>

<p><span class="merged" id="all.35T8Fh.1.spl1" title="原文 : Either way, you can safely regenerate the code later so long as you have not edited the generated code.">いずれの場合も、生成されたコードを編集していないかぎり、後でコードを安全に再生成できます。</span> <span class="merged" id="all.35T8Fh.1.spl2" title="原文 : The generator replaces the generated classes or interfaces but does not touch other classes you wrote.">ジェネレータは、生成されたクラスまたはインタフェースを置き換えますが、書き込んだ他のクラスには触れません。</span> </p>

<p><span class="merged" id="all.1nNk0N.1.spl1" title="原文 : The Helidon client generator always creates concrete classes.">Helidon <em>「クライアント」</em>ジェネレータは常に具象クラスを作成します。</span> <span class="merged" id="all.1nNk0N.1.spl2" title="原文 : Typically, you do not need to customize the behavior in the generated client API classes.">通常、生成されたクライアントAPIクラスの動作をカスタマイズする必要はありません。</span> <span class="merged" id="all.1nNk0N.1.spl3" title="原文 : If you choose to do so, write your own subclass of the generated client API class; do not modify the generated files.">これを行う場合は、生成されたクライアントAPIクラスの独自のサブクラスを記述します; 生成されたファイルを変更<em>しません</em>。</span> </p>

</div>


<h4 id="_grouping_operations_into_apis"><span class="merged" id="all.1hTTaH.1" title="原文 : Grouping Operations into &quot;APIs&quot;">操作の「API」へのグループ化</span></h4>
<div class="section">
<p><span class="merged" id="all.1HDOP7.1.spl1" title="原文 : Each operation in an OpenAPI document can have a tags attribute.">OpenAPIドキュメント内の各操作には、<code>tags</code>属性を指定できます。</span> <span class="merged" id="all.1HDOP7.1.spl2" title="原文 : The generators group operations with the same tags value into the same API.">ジェネレータは、同じ<code>tags</code>値を持つ操作を同じAPIにグループ化します。</span> </p>

<p><span class="merged" id="all.3988f1.spl1" title="原文 : When you generate a Helidon SE server, the generator creates a separate interface or class for each API your service exposes.">Helidon SEサーバーを生成すると、ジェネレータはサービスが<em>「露出」</em>する各APIに対して個別のインタフェースまたはクラスを作成します。</span> <span class="merged" id="all.3988f1.spl2" title="原文 : You implement each interface or extend each class to add your business logic for that API.">各インタフェースを実装するか、各クラスを拡張して、そのAPIのビジネス・ロジックを追加します。</span> </p>

<p><span class="merged" id="all.xUaa7" title="原文 : When you generate a Helidon SE client, the generated code contains a separate API class for each distinct API your code might invoke.">Helidon SEクライアントを生成すると、生成されたコードには、コードが<em>「起動」</em>する能性がある個別のAPIごとに個別のAPIクラスが含まれます。</span></p>

</div>

</div>


<h3 id="usage-running"><span class="merged" id="all.1mgTHV.1" title="原文 : Running the OpenAPI Generators">OpenAPIジェネレータの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.bzGdk.1" title="原文 : Earlier we listed the ways you can run the OpenAPI generator:">以前に、OpenAPIジェネレータを実行する方法をリストしました:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3te6v3.3" title="原文 : using the OpenAPI generator CLI">OpenAPIジェネレータCLIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2MZffJ.3" title="原文 : using the OpenAPI generator Maven plug-in">OpenAPIジェネレータMavenプラグインの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.3IPTGP.3" title="原文 : using the online OpenAPI generator website">オンラインOpenAPIジェネレータwebサイトの使用</span></p>

</li>
</ul>

<p><span class="merged" id="all.3MpZZ3.1" title="原文 : The next sections describe each of these techniques in detail.">次の項では、これらの各手法を詳細に説明します。</span></p>


<h4 id="_using_the_openapi_generator_cli"><span class="merged" id="all.1l9EQX.1" title="原文 : Using the OpenAPI Generator CLI">OpenAPIジェネレータCLIの使用</span></h4>
<div class="section">
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.3unhJR.1" title="原文 : Downloading the OpenAPI Generator CLI">OpenAPIジェネレータCLIのダウンロード</span></p>
<p ><span class="merged" id="all.3Y2ahL.1.spl1" title="原文 : You need to download the CLI .jar file before you can run the CLI.">CLIを実行するには、CLIの<code>.jar</code>ファイルをダウンロードする必要があります。</span> <span class="merged" id="all.3Y2ahL.1.spl2" title="原文 : Follow these instructions and remember where you save the .jar file.">これらの<a href="https://github.com/OpenAPITools/openapi-generator#13---download-jar" target="_blank">「手順」</a>に従って、<code>.jar</code>ファイルを保存する場所を覚えておいてください。</span> <span class="merged" id="all.3Y2ahL.1.spl3" title="原文 : The examples below use the placeholder path-to-generator to represent the directory where you store that downloaded file.">次の例では、プレースホルダー<code>path-to-generator</code>を使用して、ダウンロードしたファイルを格納するディレクトリを表します。</span> </p>
</div>

<p><span class="merged" id="all.uggFA.1" title="原文 : The following example uses the Helidon server generator to create a project or regenerate files into an existing project.">次の例では、Helidonサーバー・ジェネレータを使用して、プロジェクトを作成するか、既存のプロジェクトにファイルを再生成します。</span></p>

<markup
lang="bash"
title="Creating or updating a server project using the OpenAPI generator CLI"
>java -jar ${path-to-generator}/openapi-generator-cli.jar \
  generate \
  -i src/main/resources/petstore.yaml \
  -g java-helidon-server \
  --library se \
  -p groupId=io.helidon.examples \
  -p artifactId=helidon-openapigen-se-server \
  -p artifactVersion=1.0.0-SNAPSHOT \
  -p apiPackage=io.helidon.examples.openapigen.se.server.api \
  -p modelPackage=io.helidon.examples.openapigen.se.server.model \
  -p invokerPackage=io.helidon.examples.openapigen.se.server</markup>

<p><span class="merged" id="all.2CeZSt.1" title="原文 : The next example runs the Helidon client generator using the same input file.">次の例では、同じ入力ファイルを使用してHelidonクライアント・ジェネレータを実行します。</span></p>

<markup
lang="bash"
title="Creating or updating a client project using the OpenAPI generator CLI"
>java -jar ${path-to-generator}/openapi-generator-cli.jar \
  generate \
  -i src/main/resources/petstore.yaml \
  -g java-helidon-client \
  --library se \
  -p groupId=io.helidon.examples \
  -p artifactId=helidon-openapigen-se-client \
  -p artifactVersion=1.0.0-SNAPSHOT \
  -p apiPackage=io.helidon.examples.openapigen.se.client.api \
  -p modelPackage=io.helidon.examples.openapigen.se.client.model \
  -p invokerPackage=io.helidon.examples.openapigen.se.client</markup>

<p><span class="merged" id="all.1QyHQ9.1" title="原文 : The key differences between the commands are:">コマンドの主な相違点は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2jzJaK.1" title="原文 : the generator selected by the -g option (client vs. server),"><code>-g</code>オプションによって選択されたジェネレータ(<code>client</code>と<code>server</code>)、</span></p>

</li>
<li>
<p><span class="merged" id="all.48qFcs.1" title="原文 : the artifact ID and package names (client vs. server).">アーティファクトIDおよびパッケージ名(<code>client</code>と<code>server</code>)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.42tBKh.1.spl1" title="原文 : You could use these two commands together to generate a server submodule and a client submodule in a pre-existing multi-module Maven project.">これらの2つのコマンドを一緒に使用して、既存のマルチ・モジュールMavenプロジェクトにサーバー・サブモジュールとクライアント・サブモジュールを生成できます。</span> <span class="merged" id="all.42tBKh.1.spl2" title="原文 : Remember that the resulting client project can access any server which implements the API described in the petstore.yaml OpenAPI document, whether it was generated using the OpenAPI generator tool or not.">生成されるクライアント・プロジェクトは、OpenAPIジェネレータ・ツールを使用して生成されたかどうかに関係なく、<code>petstore.yaml</code> OpenAPIドキュメントに記載されているAPIを実装する任意のサーバーにアクセスできます。</span> </p>

<p><span class="merged" id="all.3fBk73.1.spl1" title="原文 : In both examples, the generator creates the entire project if it does not exist and recreates the generated API and model files if the project already exists.">どちらの例でも、ジェネレータはプロジェクト全体(存在しない場合)を作成し、生成されたAPIおよびモデル・ファイル(プロジェクトがすでに存在する場合)を再作成します。</span> <span class="merged" id="all.3fBk73.1.spl2" title="原文 : The generator does not overwrite an existing pom.xml file, previously-generated test files, or files you create yourself.">ジェネレータは、既存の<code>pom.xml</code>ファイル、以前に生成されたテスト・ファイル、または自分で作成したファイルを上書きしません。</span> </p>

</div>


<h4 id="invoking-the-plugin"><span class="merged" id="all.hSTQU.1" title="原文 : Invoking the OpenAPI Generator Maven Plug-in">OpenAPIジェネレータMavenプラグインの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.1j1y8W.1" title="原文 : You can run the OpenAPI generator plug-in as part of your project build to generate or regenerate files.">OpenAPIジェネレータ・プラグインをプロジェクト・ビルドの一部として実行して、ファイルを生成または再生成できます。</span></p>

<p><span class="merged" id="all.3LGR7W.1" title="原文 : First, declare the plug-in as explained in the earlier section on Maven coordinates.">最初に、<router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">「Maven座標の前のセクション」</router-link>の説明に従ってプラグインを宣言します。</span></p>

<p><span class="merged" id="all.1a7Hsf.1.spl1" title="原文 : Then, in the &lt;build&gt; section of your pom.xml file, add an execution of the plug-in with the configuration you want.">次に、<code>pom.xml</code>ファイルの<code>&lt;build></code>セクションで、必要な構成を含むプラグインの実行を追加します。</span> <span class="merged" id="all.1a7Hsf.1.spl2" title="原文 : By default, the plug-in runs during the generate-sources phase of the Maven build.">デフォルトでは、プラグインはMavenビルドの<code>generate-sources</code>フェーズで実行されます。</span> </p>

<p><span class="merged" id="all.45sWyy.1" title="原文 : The plug-in execution in the following example is equivalent to the CLI example above for generating server files:">次の例のプラグインの実行は、サーバー・ファイルを生成するための前述のCLIの例と同等です:</span></p>

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
                &lt;library&gt;se&lt;/library&gt;
                &lt;output&gt;${project.build.directory}/generated-sources/client&lt;/output&gt; <span class="conum" data-value="1" />
                &lt;addCompileSourceRoot&gt;true&lt;/addCompileSourceRoot&gt;
                &lt;configOptions&gt;
                    &lt;groupId&gt;io.helidon.examples&lt;/groupId&gt;
                    &lt;artifactId&gt;helidon-openapigen-se-client&lt;/artifactId&gt;
                    &lt;artifactVersion&gt;1.0.0-SNAPSHOT&lt;/artifactVersion&gt;
                    &lt;apiPackage&gt;io.helidon.examples.openapigen.se.client.api&lt;/apiPackage&gt;
                    &lt;modelPackage&gt;io.helidon.examples.openapigen.se.client.model&lt;/modelPackage&gt;
                    &lt;invokerPackage&gt;io.helidon.examples.openapigen.se.client&lt;/invokerPackage&gt;
                &lt;/configOptions&gt;
                &lt;additionalProperties&gt;
                    &lt;additionalProperty&gt;returnResponse=true&lt;/additionalProperty&gt;
                &lt;/additionalProperties&gt;
            &lt;/configuration&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.46ryy6.1" title="原文 : Specifies that the generated files should reside in the target/generated-sources/client directory.">生成されたファイルを<code>target/generated-sources/client</code>ディレクトリに配置するように指定します。</span></li>
</ul>

</div>


<h4 id="_using_the_online_generator"><span class="merged" id="all.1Xgi5m.1" title="原文 : Using the Online Generator">オンライン・ジェネレータの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.2neX9T.1.spl1" title="原文 : The OpenAPI tools project hosts and maintains the online OpenAPI generator at http://api.openapi-generator.tech.">OpenAPIツールは、オンラインのOpenAPIジェネレータをホストし、<a class="bare" href="http://api.openapi-generator.tech" target="_blank">http://api.openapi-generator.tech</a>で維持します。</span> <span class="merged" id="all.2neX9T.1.spl2" title="原文 : You can use the site’s API browser to explore the available generators and the settings each supports, expressed as JSON.">サイトのAPIブラウザを使用して、使用可能なジェネレータおよび各サポートする設定をJSONとして表現できます。</span> </p>

<p><span class="merged" id="all.1zNDyh.1.spl1" title="原文 : To generate your project, you supply the options and additional properties as JSON.">プロジェクトを生成するには、オプションおよび追加プロパティをJSONとして指定します。</span> <span class="merged" id="all.1zNDyh.1.spl2" title="原文 : The online generator provides you with a file ID, and you refer to the file ID in a subsequent HTTP request to retrieve your project.">オンライン・ジェネレータではファイルIDが提供され、後続のHTTPリクエストでファイルIDを参照してプロジェクトを取得します。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.15"  title="原文:: Note">ノート</span></p>
<p ><span class="merged" id="all.3jjoWP.1.spl1" title="原文 : The online generator stores your project on the server which you then retrieve using a separate HTTP request.">オンライン・ジェネレータは、別のHTTPリクエストを使用して取得するサーバーにプロジェクトを格納します。</span> <span class="merged" id="all.3jjoWP.1.spl2" title="原文 : Before you use the online generator, consider whether any of the input you provide-​the OpenAPI document, package or Maven coordinates-​and therefore the generated project will reveal any sensitive information.">オンライン・ジェネレータを使用する前に、提供する入力(OpenAPIドキュメント、パッケージまたはMaven座標)のいずれかを考慮してください。したがって、生成されたプロジェクトによって機密情報が明らかになります。</span> </p>
</div>

<p><span class="merged" id="all.21zc5v.1" title="原文 : This document does not explore further the use of the online generator.">このドキュメントでは、オンライン・ジェネレータの使用については詳しく説明していません。</span></p>

</div>

</div>

</div>


<h2 id="using-generated-code"><span class="merged" id="all.24S5tH.1" title="原文 : Using the Generated Code">生成されたコードの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.4MVZtf.1.spl1" title="原文 : The Helidon generators go a long way in helping you write your client or server.">Helidonジェネレータは、クライアントまたはサーバーの記述に役立ちます。</span> <span class="merged" id="all.4MVZtf.1.spl2" title="原文 : Even so, there are important parts of your project only you can provide.">それでも、あなたのプロジェクトには、あなたしか提供できない重要な部分があります。</span> <span class="merged" id="all.4MVZtf.1.spl3" title="原文 : This section describes your next steps after you have run the generator.">この項では、ジェネレータを実行した<em>後の</em>次のステップについて説明します。</span> </p>


<h3 id="_completing_the_server"><span class="merged" id="all.2bI9dm.1" title="原文 : Completing the Server">サーバーの完了</span></h3>
<div class="section">
<p><span class="merged" id="all.1CkF7s.1.spl1" title="原文 : Recall from earlier how the OpenAPI generator gathers operations into one or more &quot;APIs&quot; and generates either a class or an interface-​your choice-​for each API.">以前から、OpenAPIジェネレータが1つ以上のAPIに操作を収集し、APIごとにクラスまたはインタフェース(選択したインタフェース)を生成する方法を思い出してください。</span> <span class="merged" id="all.1CkF7s.1.spl2" title="原文 : You need to extend each generated API class or implement each generated API interface by writing your own classes.">生成された各APIクラスを拡張するか、独自のクラスを記述して生成された各APIインタフェースを実装する必要があります。</span> <span class="merged" id="all.1CkF7s.1.spl3" title="原文 : Any input parameters to the endpoints are expressed as POJO model objects or Java types, as declared in the OpenAPI document.">エンドポイントへの入力パラメータは、OpenAPIドキュメントで宣言されているように、POJOモデル・オブジェクトまたはJava型として表されます。</span> <span class="merged" id="all.1CkF7s.1.spl4" title="原文 : Your server code uses each of the input parameters to accomplish whatever business purpose that endpoint is responsible for, possibly returning a result as a POJO or Java type as indicated for that operation in the OpenAPI document.">サーバー・コードでは、各入力パラメータを使用して、エンドポイントが担当するあらゆるビジネス目的を達成します。たとえば、OpenAPIドキュメントでその操作に示されているPOJOまたはJavaタイプとして結果を返します。</span> </p>

<p><span class="merged" id="all.texrz.spl1" title="原文 : The Helidon SE server generator also creates, for each API, a separate class containing handler methods for each endpoint.">Helidon SEサーバー・ジェネレータでは、APIごとに、エンドポイントごとにハンドラ・メソッドを含む個別のクラスも作成されます。</span> <span class="merged" id="all.texrz.spl2" title="原文 : Along with the PetService interface or abstract class which has methods such as addPet and getPetById, the tool generates PetServiceImpl with methods such as handleAddPet and handleGetPetById."><code>addPet</code>や<code>getPetById</code>などのメソッドを持つ<code>PetService</code>インタフェースまたは抽象クラスとともに、ツールは<code>handleAddPet</code>や<code>handleGetPetById</code>などのメソッドを持つ<code>PetServiceImpl</code>を生成します。</span> </p>

<markup
lang="java"
title="Generated <code>PetService</code> abstract class"
>public abstract class PetService implements HttpService {
    void addPet(ServerRequest request, ServerResponse response, Pet pet) {
        // ...
    }
    abstract void handleAddPet(ServerRequest request, ServerResponse response, Pet pet);

    void getPetById(ServerRequest request, ServerResponse response) {
        // ...
    }
    abstract void handleGetPetById(ServerRequest request, ServerResponse response, Long petId);
}</markup>

<markup
lang="java"
title="Generated skeleton <code>PetServiceImpl</code> class (which you extend)"
>public class PetServiceImpl extends PetService {
    public void handleAddPet(ServerRequest request, ServerResponse response, Pet pet) {
        response.status(HTTP_CODE_NOT_IMPLEMENTED.send());
    }

    public void handleGetPetById(ServerRequest request, ServerResponse response, Long petId) {
        response.status(HTTP_CODE_NOT_IMPLEMENTED).send();
    }
}</markup>

<p><span class="merged" id="all.2HNRja" title="原文 : You write your own classes which extend PetServiceImpl and the other generated xxxImpl classes, overriding the handle…​ methods."><code>PetServiceImpl</code>および生成された他の<code>xxxImpl</code>クラスを拡張する独自のクラスを記述し、<code>handle…​</code>メソッドをオーバーライドします。</span></p>

<p><span class="merged" id="all.2qZTLP.spl1" title="原文 : You have control over-​and therefore responsibility for-​preparing the response to be sent to the client, including the status, any response headers, and any returned entity.">ステータス、レスポンス・ヘッダー、返されたエンティティなど、クライアントに送信されるレスポンスを準備する責任は、ユーザーが制御します。</span> <span class="merged" id="all.2qZTLP.spl2" title="原文 : Your overriding implementation of handleGetPetById might look like the following example."><code>handleGetPetById</code>のオーバーライド実装は、次の例のようになります。</span> </p>

<markup
lang="java"
title="Example override of <code>handleGetPetById</code>"
>public void handleGetPetById(ServerRequest request, ServerResponse response, Long petId) {
    Pet pet = locatePetInDatabase(petId);
    if (pet == null) {
        response.status(404).send();
    }
    response.send(pet); // Respnose status is 200 by default.
    }
}</markup>

</div>


<h3 id="_using_the_client_library"><span class="merged" id="all.ZQHJZ.1" title="原文 : Using the Client Library">クライアント・ライブラリの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.wWnKA.1.spl1" title="原文 : The generated client code represents a true library.">生成されたクライアント・コードは真のライブラリを表します。</span> <span class="merged" id="all.wWnKA.1.spl2" title="原文 : Typically, you do not need to customize the generated client code itself.">通常、生成されたクライアント・コード自体をカスタマイズする必要はありません。</span> <span class="merged" id="all.wWnKA.1.spl3" title="原文 : You do need to write code to invoke the code in that library.">そのライブラリ内のコードを起動するコードを記述する必要が<em>あります</em>。</span> </p>

<p><span class="merged" id="all.1koowR.spl1" title="原文 : The generated Helidon SE client includes the class ApiClient.">生成されたHelidon SEクライアントには、クラス<code>ApiClient</code>が含まれます。</span> <span class="merged" id="all.1koowR.spl2" title="原文 : This class corresponds to the Helidon WebClient and represents the connection between your code and the remote server.">このクラスは、Helidon <a href="/apidocs/io.helidon.webclient/io/helidon/webclient/WebClient.html" target="_blank"><code>WebClient</code></a>に対応し、コードとリモート・サーバー間の接続を表します。</span> <span class="merged" id="all.1koowR.spl3" title="原文 : The generator also creates one or more Api interfaces and corresponding implementation classes.">ジェネレータは、1つ以上の<code>Api</code>インタフェースおよび対応する実装クラスも作成します。</span> <span class="merged" id="all.1koowR.spl4" title="原文 : The examples below use the PetApi interface and the PetApiImpl class.">次の例では、<code>PetApi</code>インタフェースと<code>PetApiImpl</code>クラスを使用します。</span> </p>

<p><span class="merged" id="all.3gwRfM" title="原文 : To invoke the remote service your code must:">リモート・サービスを呼び出すには、次のコードが必要です:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3DE70o" title="原文 : Create an instance of ApiClient using an ApiClient.Builder."><code>ApiClient.Builder</code>を使用して、<code>ApiClient</code>のインスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.TD0AL" title="原文 : Use that ApiClient instance to instantiate a PetApi object.">その<code>ApiClient</code>インスタンスを使用して、<code>PetApi</code>オブジェクトをインスタンス化します。</span>

</li>
<li>
<span class="merged" id="all.3EhAp8" title="原文 : Invoke the methods on the PetApi object to access the remote services and then retrieve the returned result value."><code>PetApi</code>オブジェクトのメソッドを起動してリモート・サービスにアクセスし、戻された結果値を取得します。</span>

</li>
</ol>

<p><span class="merged" id="all.2BgqqZ" title="原文 : The following sections explain these steps.">次の項では、これらのステップについて説明します。</span></p>


<h4 id="_creating_an_apiclient_instance"><span class="merged" id="all.2lLhqX" title="原文 : Creating an ApiClient Instance"><code>ApiClient</code>インスタンスの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.1pBTy" title="原文 : The Helidon SE client generator gives you as much flexibility as you need in connecting to the remote service.">Helidon SEクライアント・ジェネレータは、リモート・サービスへの接続に必要な柔軟性を提供します。</span></p>

<p><span class="merged" id="all.1F6zAW.spl1" title="原文 : Internally, the ApiClient uses a Helidon WebClient object to contact the remote system.">内部的には、<code>ApiClient</code>は、Helidon <code>WebClient</code>オブジェクトを使用してリモート・システムに接続します。</span> <span class="merged" id="all.1F6zAW.spl2" title="原文 : The ApiClient.Builder automatically prepares a Helidon WebClient.Builder object using information from the OpenAPI document."><code>ApiClient.Builder</code>は、OpenAPIドキュメントの情報を使用して、Helidon <a href="/apidocs/io.helidon.webclient/io/helidon/webclient/WebClient.Builder.html" target="_blank"><code>WebClient.Builder</code></a>オブジェクトを自動的に準備します。</span> </p>

<p><span class="merged" id="all.10nrgH" title="原文 : The next sections describe, from simplest to most complicated, the ways your code can create an ApiClient instance, each involving increased involvement with the WebClient.Builder object.">次の項では、最も単純なものから最も複雑なものまで、コードで<code>ApiClient</code>インスタンスを作成する方法を説明します。それぞれに、<code>WebClient.Builder</code>オブジェクトへの関与が増加します。</span></p>


<h5 id="_accepting_the_automatic_webclient_builder"><span class="merged" id="all.46TF9N" title="原文 : Accepting the Automatic WebClient.Builder">自動<code>WebClient.Builder</code>の受入れ</span></h5>
<div class="section">
<p><span class="merged" id="all.1OOBzJ" title="原文 : In the simplest case, your code can get an ApiClient instance directly.">最も単純なケースでは、コードは<code>ApiClient</code>インスタンスを直接取得できます。</span></p>

<markup
lang="java"
title="Creating an <code>ApiClient</code> instance - simple case"
>ApiClient apiClient = ApiClient.builder().build();</markup>

<p><span class="merged" id="all.3BdjYR.spl1" title="原文 : Your code relies fully on the automatic WebClient.Builder.">コードは、自動<code>WebClient.Builder</code>に完全に依存します。</span> <span class="merged" id="all.3BdjYR.spl2" title="原文 : In many cases, this approach works very well, especially if the OpenAPI document correctly declares the servers and their URIs.">多くの場合、この方法は、特にOpenAPIドキュメントがサーバーとそのURIを正しく宣言している場合に、非常に効果的です。</span> </p>

</div>


<h5 id="_influencing_the_automatic_webclient_builder"><span class="merged" id="all.aOuC1" title="原文 : Influencing the Automatic WebClient.Builder">自動<code>WebClient.Builder</code>への影響</span></h5>
<div class="section">
<p><span class="merged" id="all.1YzNnA.spl1" title="原文 : Your code can use the ApiClient.Builder to fine-tune the settings for the internal WebClient.Builder.">コードでは、<code>ApiClient.Builder</code>を使用して、内部<code>WebClient.Builder</code>の設定を微調整できます。</span> <span class="merged" id="all.1YzNnA.spl2" title="原文 : For instance, your code can set an object mapper to be used for Jackson processing or the JsonbConfig object to be used for JSON-B processing, depending on which serialization library you chose when you ran the generator.">たとえば、コードでは、Jackson処理に使用するオブジェクト・マッパー、またはジェネレータの実行時に選択したシリアライズ・ライブラリに応じてJSON-B処理に使用する<code>JsonbConfig</code>オブジェクトを設定できます。</span> </p>

<p><span class="merged" id="all.3BOtEo.spl1" title="原文 : Your code does not need to know how the object mapper setting is conveyed to the internal WebClient.Builder.">コードは、オブジェクト・マッパー設定が内部<code>WebClient.Builder</code>にどのように伝達されるかを知る必要はありません。</span> <span class="merged" id="all.3BOtEo.spl2" title="原文 : The ApiClient.Builder knows how to do that."><code>ApiClient.Builder</code>は、その方法を知っています。</span> </p>

<markup
lang="java"
title="Creating an <code>ApiClient</code> instance - influencing the <code>ApiClient.Builder</code>"
>ApiClient apiClient = apiClient.builder()
                            .objectMapper(yourCustomMapper)
                            .build();</markup>

</div>


<h5 id="_adjusting_the_automatic_webclient_builder"><span class="merged" id="all.2ebmin" title="原文 : Adjusting the Automatic WebClient.Builder">自動<code>WebClient.Builder</code>の調整</span></h5>
<div class="section">
<p><span class="merged" id="all.8t52m" title="原文 : In more complicated situations, your code can adjust the settings of the WebClient.Builder the ApiClient.Builder creates.">より複雑な状況では、<code>ApiClient.Builder</code>が作成する<code>WebClient.Builder</code>の設定をコードで調整できます。</span></p>

<markup
lang="java"
title="Creating an <code>ApiClient</code> instance - adjusting the <code>WebClient.Builder</code>"
>ApiClient.Builder apiClientBuilder = ApiClient.builder();

apiClientBuilder.webClientBuilder() <span class="conum" data-value="1" />
                .connectTimeout(4, TimeUnit.SECONDS); <span class="conum" data-value="2" />

ApiClient apiClient = apiClientBuilder.build(); <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.35XSNx" title="原文 : Access the ApiClient.Builder’s automatic `WebClient.Builder instance."><code>ApiClient.Builder’s automatic `WebClient.Builder</code>インスタンスにアクセスします。</span></li>
<li data-value="2"><span class="merged" id="all.2Y1lrK" title="原文 : Adjust a setting of the WebClient.Builder directly."><code>WebClient.Builder</code>の設定を直接調整します。</span></li>
<li data-value="3"><span class="merged" id="all.1aLEhc" title="原文 : Build the ApiClient which implicitly builds the WebClient from the now-adjusted internal WebClient.Builder.">現在調整されている内部<code>WebClient.Builder</code>から<code>WebClient</code>を暗黙的に構築する<code>ApiClient</code>を構築します。</span></li>
</ul>

<p><span class="merged" id="all.48KhbG" title="原文 : The automatic WebClient.Builder retains information derived from the OpenAPI document unless your code overrides those specific settings.">自動<code>WebClient.Builder</code>は、コードがこれらの特定の設定をオーバーライドしないかぎり、OpenAPIドキュメントから導出された情報を保持します。</span></p>

</div>


<h5 id="_providing_a_custom_webclient_builder"><span class="merged" id="all.29cCRk" title="原文 : Providing a Custom WebClient.Builder">カスタム<code>WebClient.Builder</code>の指定</span></h5>
<div class="section">
<p><span class="merged" id="all.3uSh3J" title="原文 : Lastly, you can construct the WebClient.Builder entirely yourself and have the ApiClient.Builder use it instead of its own internal builder.">最後に、<code>WebClient.Builder</code>を完全に自分自身で構築し、<code>ApiClient.Builder</code>で独自の内部ビルダーではなくそれを使用できます。</span></p>

<markup
lang="java"
title="Creating an <code>ApiClient</code> instance - using a custom <code>WebClient.Builder</code>"
>WebClient.Builder customWebClientBuilder = WebClient.builder()
                .connectTimeout(3, TimeUnit.SECONDS)
                .baseUri("https://myservice.mycompany.com");

ApiClient apiClient = ApiClient.builder()
                        .webClientBuilder(customWebClientBuilder)
                        .build();</markup>

<p><span class="merged" id="all.4aqZoS.spl1" title="原文 : Note that this approach entirely replaces the internal, automatically-prepared WebClient.Builder with yours; it does not merge the new builder with the internal one.">このアプローチは、自動的に準備された内部<code>WebClient.Builder</code>を完全に自分のものに置き換えます; 新しいビルダーを内部ビルダーとマージ<em>しません</em>。</span> <span class="merged" id="all.4aqZoS.spl2" title="原文 : In particular, any information from the OpenAPI document the generator used to prepare the internal WebClient.Builder is lost.">特に、内部<code>WebClient.Builder</code>の準備に使用されるジェネレータのOpenAPIドキュメントからの情報は失われます。</span> </p>

</div>

</div>


<h4 id="_creating_a_petapi_instance"><span class="merged" id="all.1DIvIL" title="原文 : Creating a PetApi Instance"><code>PetApi</code>インスタンスの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.24hVId.spl1" title="原文 : The ApiClient represents the connection to the remote server but not the individual RESTful operations."><code>ApiClient</code>は、リモート・サーバーへの接続を表しますが、個々のRESTful操作は表しません。</span> <span class="merged" id="all.24hVId.spl2" title="原文 : Each generated xxxApi interface exposes a method for each operation declared in the OpenAPI document associated with that API via its tags value.">生成された各<code>xxxApi</code>インタフェースは、そのAPIに関連付けられたOpenAPIドキュメントで宣言された各操作のメソッドを、その<code>tags</code>値で公開します。</span> <span class="merged" id="all.24hVId.spl3" title="原文 : By example, the PetApi interface exposes a method for each operation in the OpenAPI document that pertains to pets.">たとえば、<code>PetApi</code>インタフェースは、ペットに関連するOpenAPIドキュメント内の操作ごとにメソッドを公開します。</span> </p>

<p><span class="merged" id="all.1noMsq" title="原文 : To invoke an operation defined on the PetApi interface, your code instantiates a PetApi using an ApiClient object:"><code>PetApi</code>インタフェースで定義された操作を呼び出すには、コードによって<code>ApiClient</code>オブジェクトを使用して<code>PetApi</code>がインスタンス化されます:</span></p>

<markup
lang="java"
title="Preparing the PetStore Client API"
>ApiClient apiClient = ApiClient.builder().build();
PetApi petApi = PetApiImpl.create(apiClient);</markup>

</div>


<h4 id="_invoking_remote_endpoints"><span class="merged" id="all.4U1Vjr" title="原文 : Invoking Remote Endpoints">リモート・エンドポイントの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.vAtp4" title="原文 : With the petApi object, your code can invoke any of the methods on the PetApi interface to contact the remote service."><code>petApi</code>オブジェクトを使用すると、コードは<code>PetApi</code>インタフェース上の任意のメソッドを呼び出して、リモート・サービスに接続できます。</span></p>

<p><span class="merged" id="all.4Xidpr.spl1" title="原文 : The Helidon SE client generator creates an ApiResponse interface.">Helidon SEクライアント・ジェネレータは、<code>ApiResponse</code>インタフェースを作成します。</span> <span class="merged" id="all.4Xidpr.spl2" title="原文 : Each generated PetApi method returns an ApiResponse&lt;returnType&gt; where the returnType is the return type declared in the OpenAPI document for the corresponding operation.">生成された各<code>PetApi</code>メソッドは、<code>ApiResponse&lt;returnType></code>を返します。ここで、<code>returnType</code>は、対応する操作のOpenAPIドキュメントで宣言された戻り型です。</span> </p>

<p><span class="merged" id="all.43rfrN" title="原文 : The ApiResponse interface exposes two methods your code can use to work with the response from the remote service invocation:"><code>ApiResponse</code>インタフェースは、コードがリモート・サービス起動からのレスポンスを操作するために使用できる2つのメソッドを公開します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2LzT3q"  title="原文: T result()"><code>T result()</code></span></p>
<p><span class="merged" id="all.31qw45.spl1" title="原文 : Provides access to the value returned by the remote service in the response.">レスポンスでリモート・サービスから返された値へのアクセスを提供します。</span> <span class="merged" id="all.31qw45.spl2" title="原文 : This method lets your code fetch the return value directly.">このメソッドを使用すると、コードは戻り値を直接フェッチできます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3JMNR0"  title="原文: HTTPClientResponse webClientResponse()"><code>HTTPClientResponse webClientResponse()</code></span></p>
<p><span class="merged" id="all.10e6ir.spl1" title="原文 : Provides access to the Helidon HTTPClientResponse object.">Helidon <code>HTTPClientResponse</code>オブジェクトへのアクセスを提供します。</span> <span class="merged" id="all.10e6ir.spl2" title="原文 : Your code can find out the HTTP return status, read headers in the response, and process the content (if any) in the response however it needs to.">コードでは、HTTPリターン・ステータスを確認し、レスポンスでヘッダーを読み取り、必要なレスポンスでコンテンツ(ある場合)を処理できます。</span> </p>

</li>
</ul>

<p><span class="merged" id="all.2Ewlqi.spl1" title="原文 : In the Helidon WebClient model, the first part of the response message can arrive (the status and headers are available) before the entity in the body of the response is readable.">Helidon WebClientモデルでは、レスポンス本文のエンティティが読取り可能になる前に、レスポンス・メッセージの最初の部分(ステータスおよびヘッダーが使用可能)が到着できます。</span> <span class="merged" id="all.2Ewlqi.spl2" title="原文 : So there are two events associated with an incoming HTTP response:">そのため、受信HTTPレスポンスに関連付けられた2つのイベントがあります:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4Bm37p" title="原文 : when the response excluding the entity content has arrived, and">エンティティ・コンテンツを<em>「除外」</em>するレスポンスが到着し、</span>

</li>
<li>
<span class="merged" id="all.2t1oUk" title="原文 : when your code can begin consuming the entity content.">コードがエンティティ・コンテンツの使用を開始できる場合。</span>

</li>
</ol>

<p><span class="merged" id="all.4UQDUr" title="原文 : You can adopt different styles of retrieving the results, depending on the specific needs of the code you are writing.">記述するコードの特定のニーズに応じて、結果を取得する様々なスタイルを採用できます。</span></p>


<h5 id="_access_with_status_checking"><span class="merged" id="all.1zERMY" title="原文 : Access with status checking">ステータス・チェックによるアクセス</span></h5>
<div class="section">
<p><span class="merged" id="all.dMLZX" title="原文 : The Helidon WebClient programming model includes a HTTPClientResponse interface which exposes all aspects of the HTTP response returned from the remote service.">Helidon WebClientプログラミング・モデルには、リモート・サービスから返されたHTTPレスポンスのすべての側面を公開する<code>HTTPClientResponse</code>インタフェースが含まれています。</span></p>

<p><span class="merged" id="all.1y9fkI" title="原文 : The next example shows how your code can use the HTTPClientResponse.">次の例は、コードで<code>HTTPClientResponse</code>を使用する方法を示しています。</span></p>

<markup
lang="java"
title="Access with status checking"
>ApiResponse&lt;List&lt;Pet&gt;&gt; apiResponse = petApi.findPetsByStatus(List.of(Pet.StatusEnum.AVAILABLE.value())); <span class="conum" data-value="1" />

HTTPClientResponse webClientResponse = apiResponse.webClientResponse(); <span class="conum" data-value="2" />

if (webClientResponse.status().code() != 200) { <span class="conum" data-value="3" />
    // Handle a non-successful status.
}

List&lt;Pet&gt;&gt; availablePets = apiResponse.result(); <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1GOCgo" title="原文 : Start the remote service invocation.">リモート・サービスの起動を開始します。</span></li>
<li data-value="2"><span class="merged" id="all.1Udq2H" title="原文 : Wait for the HTTP response status and headers to arrive.">HTTPレスポンス・ステータスおよびヘッダーが到着するまで待ちます。</span></li>
<li data-value="3"><span class="merged" id="all.19jtxC" title="原文 : Check the status in the HTTP response.">HTTPレスポンスのステータスを確認します。</span></li>
<li data-value="4"><span class="merged" id="all.2mrxnL" title="原文 : Wait for the content to arrive subject to a four-second timeout.">コンテンツが4秒のタイムアウトになるまで待ちます。</span></li>
</ul>

<p><span class="merged" id="all.1AVUU9" title="原文 : This code also blocks the current thread, first to wait for the initial response and then to wait for the result content.">また、このコードは現在のスレッドをブロックし、最初に最初のレスポンスを待機してから結果コンテンツを待機します。</span></p>

</div>

</div>

</div>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.11"  title="原文:: References">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2OROtk.1" title="原文 : OpenAPI Generator Official Website"><a href="https://openapi-generator.tech" target="_blank">OpenAPIジェネレータ公式サイト</a></span></p>

</li>
<li>
<p><span class="merged" id="all.20f2ub.1" title="原文 : OpenAPI Generator GitHub Repository"><a href="https://github.com/OpenAPITools/openapi-generator" target="_blank">OpenAPIジェネレータGitHubリポジトリ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1nYfdL.1" title="原文 : OpenAPI specification"><a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md" target="_blank">OpenAPI仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4HJC0G" title="原文 : Helidon WebClient documentation"><router-link to="/se/webclient">Helidon WebClientのドキュメント</router-link></span></p>

</li>
</ul>

</div>

</doc-view>
