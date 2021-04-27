<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2b4a3E" title="原文 : Helidon SE Config Guide">Helidon SE構成ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1XJbaK" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using both default and custom configuration.">このガイドでは、デフォルト構成とカスタム構成の両方を使用していくつかの基本的な例を実行するために使用できるサンプルHelidon SEプロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.8"  title="原文:: What you need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.wqDOs.5" title="原文 : About 30 minutes">約30分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.14" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_getting_started_with_configuration"><span class="merged" id="all.3nCFR4.1" title="原文 : Getting started with configuration">構成の開始</span></h2>
<div class="section">
<p><span class="merged" id="all.1DUU50.spl1" title="原文 : Helidon provides a very flexible and comprehensive configuration system, offering you many application configuration choices.">Helidonは、非常に柔軟で包括的な構成システムを提供し、多くのアプリケーション構成を選択できます。</span> <span class="merged" id="all.1DUU50.spl2" title="原文 : You can include configuration data from a variety of sources using different formats, like JSON and YAML.">JSONやYAMLなどの様々な形式を使用して、様々なソースからの構成データを含めることができます。</span> <span class="merged" id="all.1DUU50.spl3" title="原文 : Furthermore, you can customize the precedence of sources and make them optional or mandatory.">さらに、ソースの優先順位をカスタマイズして、オプションまたは必須にすることもできます。</span> <span class="merged" id="all.1DUU50.spl4" title="原文 : This guide introduces Helidon SE configuration and demonstrates the fundamental concepts using several examples.">このガイドでは、Helidon SE構成を紹介し、いくつかの例を使用して基本概念を示します。</span> <span class="merged" id="all.1DUU50.spl5" title="原文 : Refer to Helidon Config for the full configuration concepts documentation.">構成の概念の詳細は、<router-link @click.native="this.scrollFix('#config/01_introduction.adoc')" to="#config/01_introduction.adoc">「Helidon構成」</router-link>を参照してください。</span> </p>


<h3 id="_create_a_sample_helidon_se_project"><span class="merged" id="all.2hM3y0" title="原文 : Create a sample Helidon SE project">サンプルHelidon SEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.36DQ1d" title="原文 : Use the Helidon SE Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon SE Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Maven原型を実行します:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<markup
lang="bash"
title="プロジェクトは、<code>helidon-quickstart-se</code>ディレクトリからビルドおよび実行されます:"
>cd helidon-quickstart-se</markup>

</div>

<h3 id="_configuration_formats"><span class="merged" id="all.3CdL8k.1" title="原文 : Configuration Formats">構成フォーマット</span></h3>
<div class="section">
<p><span class="merged" id="all.15DWY8.1.spl1" title="原文 : Helidon configuration sources can use different formats for the configuration data.">Helidon構成ソースでは、構成データに異なる形式を使用できます。</span> <span class="merged" id="all.15DWY8.1.spl2" title="原文 : You can specify the format on a per-source bases, mixing and matching formats as required.">必要に応じて、ソース・ベースごとに形式を指定し、形式を混合および照合できます。</span> <span class="merged" id="all.15DWY8.1.spl3" title="原文 : Here are the supported formats, each with the extension name you should use.">サポートされている形式を次に示します。それぞれに使用する拡張子名が付いています。</span> <span class="merged" id="all.15DWY8.1.spl4" title="原文 : By default, Helidon will determine the media type based on the extension name.">デフォルトでは、Helidonは拡張子名に基づいてメディア・タイプを決定します。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.HzYk1.1" title="原文 : Java Property (.properties)">Javaプロパティ(.properties)</span></p>

</li>
<li>
<p><span class="merged" id="all.1V2YCU.1" title="原文 : JSON (.json)">JSON (.json)</span></p>

</li>
<li>
<p><span class="merged" id="all.TZkSX.1" title="原文 : YAML (.yaml)">YAML (.yaml)</span></p>

</li>
<li>
<p><span class="merged" id="all.m2bgd.1" title="原文 : HOCON (.conf)">HOCON (.conf)</span></p>

</li>
</ul>
<p><span class="merged" id="all.3mydpd.1" title="原文 : The remainder of this document will use these formats in examples and show you how to configure Helidon to parse them.">このドキュメントの残りの部分では、これらの形式を例として使用し、これらを解析するようにHelidonを構成する方法を示します。</span></p>

</div>

<h3 id="_default_configuration"><span class="merged" id="all.3NynJX.1"  title="原文:: Default configuration">デフォルトの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.25qKBM.spl1" title="原文 : Helidon has an internal configuration, so you are not required to provide any configuration data for your application, though in practice you most likely would.">Helidonには内部構成があるため、ほとんどの場合、アプリケーションの構成データを指定する必要はありません。</span> <span class="merged" id="all.25qKBM.spl2" title="原文 : By default, that configuration can be overridden from three sources: system properties, environment variables, and the contents of application.yaml in the classpath.">デフォルトでは、この構成は3つのソースからオーバーライドできます: システム・プロパティ、環境変数およびクラスパスの<code>application.yaml</code>の内容。</span> <span class="merged" id="all.25qKBM.spl3" title="原文 : For example, if you specify a custom server port in application.yaml then your server will listen on that port.">たとえば、<code>application.yaml</code>でカスタム・サーバー・ポートを指定すると、サーバーはそのポートでリスニングします。</span> </p>

<p><span class="merged" id="all.4LLQq5.spl1" title="原文 : In your application code, Helidon uses the default configuration when you create a default Config object.">アプリケーション・コードでは、Helidonはデフォルトの<code>Config</code>オブジェクトを作成するときにデフォルトの構成を使用します。</span> <span class="merged" id="all.4LLQq5.spl2" title="原文 : See the following code from the project you created.">作成したプロジェクトから次のコードを参照してください。</span> </p>

<markup
lang="Java"
title="<code>Main.startServer</code>を表示します:"
>    static WebServer startServer() throws IOException {
...
        Config config = Config.create(); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4RWeMz" title="原文 : The Config object is created with default settings."><code>Config</code>オブジェクトがデフォルト設定で作成されます。</span></li>
</ul>
</div>

<h3 id="_source_precedence_for_default_configuration"><span class="merged" id="all.4cMvml.1" title="原文 : Source precedence for default configuration">デフォルト構成のソース優先順位</span></h3>
<div class="section">
<p><span class="merged" id="all.4BGnaQ.1.spl1" title="原文 : In order to properly configure your application using configuration sources, you need to understand the precedence rules that Helidon uses to merge your configuration data.">構成ソースを使用してアプリケーションを正しく構成するには、Helidonが構成データをマージするために使用する優先順位ルールを理解する必要があります。</span> <span class="merged" id="all.4BGnaQ.1.spl2" title="原文 : By default, Helidon will use the following sources in precedence order:">デフォルトでは、Helidonは次のソースを優先順に使用します:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.401dbB.2"  title="原文:: Environment variables">環境変数</span>

</li>
<li>
<span class="merged" id="all.yeWel.1"  title="原文:: Java system properties">Javaシステム・プロパティ</span>

</li>
<li>
<span class="merged" id="all.4Ksfvr" title="原文 : Configuration specified in application.yaml"><code>application.yaml</code>で指定された構成</span>

</li>
</ol>
<p><span class="merged" id="all.11zO9G" title="原文 : If any of the Helidon required properties are not specified in one of these source, like server.port, then Helidon will use a default value.">これらのソース(<code>server.port</code>など)のいずれかでHelidonの必須プロパティが指定されていない場合、Helidonはデフォルト値を使用します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4MvRat.1.spl1" title="原文 : Because environment variable names are restricted to alphanumeric characters and underscore, Helidon adds aliases to the environment configuration source, allowing entries with dotted and/or hyphenated keys to be overriden.">環境変数名は英数字およびアンダースコアに制限されているため、Helidonでは、環境構成ソースに別名が追加され、ドット付きキーまたはハイフン付きキー(あるいはその両方)を持つエントリをオーバーライドできます。</span> <span class="merged" id="all.4MvRat.1.spl2" title="原文 : For example, this mapping allows an environment variable named &quot;APP_GREETING&quot; to override an entry key named &quot;app.greeting&quot;.">たとえば、このマッピングを使用すると、"APP_GREETING"という環境変数で"app.greeting"というエントリ・キーをオーバーライドできます。</span> <span class="merged" id="all.4MvRat.1.spl3" title="原文 : In the same way, an environment variable named &quot;APP_dash_GREETING&quot; will map to &quot;app-greeting&quot;.">同様に、"APP_dash_GREETING"という名前の環境変数が"app-greeting"にマップされます。</span> <span class="merged" id="all.4MvRat.1.spl4" title="原文 : See Advanced Config for more information.">詳細は、<router-link @click.native="this.scrollFix('#config/06_advanced-configuration.adoc')" to="#config/06_advanced-configuration.adoc">「拡張構成」</router-link>を参照してください。</span> </p>
</div>
<p><span class="merged" id="all.15AJR2.1" title="原文 : The following examples will demonstrate the default precedence order.">次の例では、デフォルトの優先順位を示します。</span></p>


<h4 id="_default_configuration_resource"><span class="merged" id="all.ybUBv.1" title="原文 : Default configuration resource">デフォルトの構成リソース</span></h4>
<div class="section">
<p><span class="merged" id="all.BzdHD.spl1" title="原文 : Change a configuration parameter in the default configuration resource file, application.yaml.">デフォルトの構成リソース・ファイルである<code>application.yaml</code>の構成パラメータを変更します。</span> <span class="merged" id="all.BzdHD.spl2" title="原文 : There are no environment variable or system property overrides defined.">環境変数またはシステム・プロパティのオーバーライドが定義されていません。</span> </p>

<markup
lang="bash"
title="<code>resources/application.yaml</code>で<code>app.greeting</code>を次のように変更します:"
>app:
  greeting: HelloFrom-application.yaml</markup>

<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="新しいターミナル・ウィンドウでcurlコマンドを実行し、レスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-application.yaml World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GYV6q" title="原文 : The new app.greeting value in application.yaml is used."><code>application.yaml</code>の新しい<code>app.greeting</code>値が使用されます。</span></li>
</ul>

<h5 id="_system_property_override"><span class="merged" id="all.4G29oK.1" title="原文 : System property override">システム・プロパティのオーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.3JI4jn" title="原文 : A system property has a higher precedence than application.yaml.">システム・プロパティの優先順位は<code>application.yaml</code>よりも高くなります。</span></p>

<markup
lang="bash"
title="システム・プロパティを使用してアプリケーションを再起動します。<code>app.greeting</code>環境変数はまだ設定されています:"
>java -Dapp.greeting="HelloFromSystemProperty"  -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="次のエンドポイントを呼び出し、レスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFromSystemProperty World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2nqOfS" title="原文 : The system property took precedence over application.yaml.">システム・プロパティは<code>application.yaml</code>より優先されました。</span></li>
</ul>
</div>

<h5 id="_environment_variable_override"><span class="merged" id="all.2119nh.1" title="原文 : Environment variable override">環境変数のオーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.3GWp8C" title="原文 : An environment variable has a higher precedence than the system property.">環境変数の優先順位はシステム・プロパティよりも高くなります。</span></p>

<markup
lang="bash"
title="環境変数を設定し、アプリケーションを再起動します:"
>export APP_GREETING=HelloFromEnvironment
java -Dapp.greeting="HelloFromSystemProperty"  -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="次のエンドポイントを呼び出し、レスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFromEnvironment World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2eu9au" title="原文 : The environment variable APP_GREETING took precedence over the system property and the value in application.yaml.">環境変数<code>APP_GREETING</code>は、システム・プロパティおよび<code>application.yaml</code>の値よりも優先されます。</span></li>
</ul>
</div>
</div>
</div>
</div>

<h2 id="_custom_configuration_sources"><span class="merged" id="all.1hQEM9.1" title="原文 : Custom configuration sources">カスタム構成ソース</span></h2>
<div class="section">
<p><span class="merged" id="all.U7XzI.spl1" title="原文 : To use custom configuration sources, your application needs to specify the sources when it creates Config object.">カスタム構成ソースを使用するには、アプリケーションで<code>Config</code>オブジェクトの作成時にソースを指定する必要があります。</span> <span class="merged" id="all.U7XzI.spl2" title="原文 : By doing this, you are in full control of all configuration sources and precedence.">これにより、すべての構成ソースと優先順位を完全に制御できます。</span> <span class="merged" id="all.U7XzI.spl3" title="原文 : By default, the environment variable and system property sources are enabled, but you can disable them using the disableEnvironmentVariablesSource and disableSystemPropertiesSource methods.">デフォルトでは、環境変数およびシステム・プロパティ・ソースは有効になっていますが、<code>disableEnvironmentVariablesSource</code>および<code>disableSystemPropertiesSource</code>メソッドを使用して無効にできます。</span> </p>

<p><span class="merged" id="all.1T7lUu.1" title="原文 : This section will show you how to use a custom configuration with various sources, formats, and precedence rules.">この項では、様々なソース、フォーマットおよび優先順位ルールでカスタム構成を使用する方法について説明します。</span></p>


<h3 id="_full_list_of_configuration_sources"><span class="merged" id="all.1RK0kG.1" title="原文 : Full list of configuration sources">構成ソースの完全なリスト</span></h3>
<div class="section">
<p><span class="merged" id="all.1VxjYq.1" title="原文 : Here is the full list of external config sources that you can use programmatically.">プログラムで使用できる外部構成ソースの完全なリストを次に示します。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4UcCI2.1" title="原文 : Environment variables - the property is a name/value pair.">環境変数 - プロパティは名前と値のペアです。</span>

</li>
<li>
<span class="merged" id="all.33qRan.1" title="原文 : Java system properties - the property is a name/value pair.">Javaシステム・プロパティ - プロパティは名前と値のペアです。</span>

</li>
<li>
<span class="merged" id="all.WnJM9.1" title="原文 : Resources in the classpath - the contents of the resource is parsed according to its inferred format.">クラスパスのリソース - リソースの内容は、推測形式に従って解析されます。</span>

</li>
<li>
<span class="merged" id="all.2WbXWy.1" title="原文 : File - the contents of the file is parsed according to its inferred format.">File - ファイルの内容は、推測形式に従って解析されます。</span>

</li>
<li>
<span class="merged" id="all.22uoSP.1" title="原文 : Directory - each non-directory file in the directory becomes a config entry: the file name is the key. and the contents of that file are used as the corresponding config String value.">ディレクトリ - ディレクトリ内の各非ディレクトリ・ファイルが構成エントリになります: ファイル名はキーで、そのファイルの内容が対応する構成文字列値として使用されます。</span>

</li>
<li>
<span class="merged" id="all.1RuPWi.1" title="原文 : A URL resource - contents is parsed according to its inferred format.">URLリソース - contentは、推論された形式に従って解析されます。</span>

</li>
</ol>
<p><span class="merged" id="all.2xzIAY.1.spl1" title="原文 : You can also define custom sources, such as Git, and use them in your Helidon application.">Gitなどのカスタム・ソースを定義して、Helidonアプリケーションで使用することもできます。</span> <span class="merged" id="all.2xzIAY.1.spl2" title="原文 : See Advanced Config for more information.">詳細は、<router-link @click.native="this.scrollFix('#config/06_advanced-configuration.adoc')" to="#config/06_advanced-configuration.adoc">「拡張構成」</router-link>を参照してください。</span> </p>

</div>

<h3 id="_classpath_sources"><span class="merged" id="all.kSbwr.1" title="原文 : Classpath sources">クラスパス・ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1Uo4gd.spl1" title="原文 : The first custom resource example demonstrates how to add a second internal configuration resource that is discovered in the classpath.">最初のカスタム・リソースの例では、<code>classpath</code>で検出された別の内部構成リソースを追加する方法を示します。</span> <span class="merged" id="all.1Uo4gd.spl2" title="原文 : The code needs to build a Config object, which in turn is used to build the Server object.">コードは<code>Config</code>オブジェクトをビルドする必要があり、このオブジェクトは<code>Server</code>オブジェクトのビルドに使用されます。</span> <span class="merged" id="all.1Uo4gd.spl3" title="原文 : The Config object can be built using a Config.Builder, which lets you inject any number of sources into the builder."><code>Config</code>オブジェクトは、任意の数のソースをビルダーにインジェクトできる<code>Config.Builder</code>を使用してビルドできます。</span> <span class="merged" id="all.1Uo4gd.spl4" title="原文 : Furthermore, you can set precedence for the sources.">さらに、ソースの優先順位を設定できます。</span> <span class="merged" id="all.1Uo4gd.spl5" title="原文 : The first source has highest precedence, then the next has second highest, and so forth.">最初のソースの優先順位が最も高く、次のソースの優先順位が2番目に高い、というように続きます。</span> </p>

<markup
lang="text"
title="<code>config.properties</code>という名前のリソース・ファイルを次の内容で<code>resources</code>ディレクトリに追加します:"
>app.greeting=HelloFrom-config.properties</markup>

<markup
lang="java"
title="<code>Main</code>クラスを更新します。1)新しいインポートを追加し、2) <code>Config.create()</code>コールを<code>buildConfig()</code>に置き換え、3) <code>buildConfig</code>メソッドを追加します:"
>import static io.helidon.config.ConfigSources.classpath; <span class="conum" data-value="1" />
...

    static WebServer startServer() throws IOException {
...
        Config config =  buildConfig(); <span class="conum" data-value="2" />


  private static Config buildConfig() {
    return Config.builder()
        .disableEnvironmentVariablesSource() <span class="conum" data-value="3" />
        .sources(
            classpath("config.properties"), <span class="conum" data-value="4" />
            classpath("application.yaml")) <span class="conum" data-value="5" />
        .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3a5iel" title="原文 : Add new import statement.">新しいimport文を追加します。</span></li>
<li data-value="2"><span class="merged" id="all.1BVAEW" title="原文 : Call the new buildConfig method to build a Config object.">新しい<code>buildConfig</code>メソッドをコールして、<code>Config</code>オブジェクトをビルドします。</span></li>
<li data-value="3"><span class="merged" id="all.1LqVpP.1" title="原文 : Disable the environment variables as a source.">環境変数をソースとして無効にします。</span></li>
<li data-value="4"><span class="merged" id="all.p1ESv.1" title="原文 : Specify the new config.properties resource that is in the classpath."><code>classpath</code>にある新しいconfig.propertiesリソースを指定します。</span></li>
<li data-value="5"><span class="merged" id="all.2huX55" title="原文 : You must specify the existing application.yaml or Helidon will not use it as a configuration source even though it is considered a default source.">既存の<code>application.yaml</code>またはHelidonがデフォルト・ソースとみなされる場合でも、これらを構成ソースとして使用しないように指定する必要があります。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを構築して実行します(システム・プロパティなし)。エンドポイントを呼び出し、レスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-config.properties World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2MxYPz" title="原文 : The greeting was picked up from config.properties, overriding the value in application.yaml.">グリーティングは<code>config.properties</code>から取得され、<code>application.yaml</code>の値をオーバーライドします。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.20KKtU.1.spl1" title="原文 : It is important to remember that configuration from all sources is merged internally.">すべてのソースの構成が内部的にマージされることに注意してください。</span> <span class="merged" id="all.20KKtU.1.spl2" title="原文 : If you have the same configuration property in multiple sources, then only the one with highest precedence will be used at runtime.">複数のソースに同じ構成プロパティがある場合は、実行時に優先順位が最も高い構成プロパティのみが使用されます。</span> <span class="merged" id="all.20KKtU.1.spl3" title="原文 : This is true even the same property comes from sources with different formats.">これは、同じプロパティが異なる形式のソースから取得される場合にも当てはまります。</span> </p>
</div>
<p><span class="merged" id="all.2YG6RO.1" title="原文 : Swap the source order and run the test again.">ソース・オーダーを入れ替えて、テストを再実行してください。</span></p>

<markup
lang="java"
title="<code>Main</code>クラスを更新し、<code>buildConfig</code>メソッドを置き換えます:"
>  private static Config buildConfig() {
      return Config.builder()
          .disableEnvironmentVariablesSource()
          .sources(
              classpath("application.yaml"), <span class="conum" data-value="1" />
              classpath("config.properties"))
          .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1eWNGb" title="原文 : Swap the source order, putting application.yaml first.">ソース・オーダーを入れ替え、<code>application.yaml</code>を最初に配置します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-application.yaml World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.oo8GV" title="原文 : The file application.yaml was used to get the greeting since it now has precedence over config.properties.">ファイル<code>application.yaml</code>は、<code>config.properties</code>よりも優先されるようになったため、応答メッセージの取得に使用されていました。</span></li>
</ul>
</div>

<h3 id="_external_file_sources"><span class="merged" id="all.11eFp8.1" title="原文 : External file sources">外部ファイル・ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.3hFXwM.1.spl1" title="原文 : You can move all or part of your configuration to external files, making them optional or mandatory.">構成のすべてまたは一部を外部ファイルに移動して、オプションまたは必須にできます。</span> <span class="merged" id="all.3hFXwM.1.spl2" title="原文 : The obvious advantage to this approach is that you do not need to rebuild your application to change configuration.">このアプローチの明らかな利点は、構成を変更するためにアプリケーションを再ビルドする必要がないことです。</span> <span class="merged" id="all.3hFXwM.1.spl3" title="原文 : In the following example, the app.greeting configuration property will be added to config-file.properties.">次の例では、<code>app.greeting</code>構成プロパティが<code>config-file.properties</code>に追加されます。</span> </p>

<markup
lang="bash"
title="<code>disableEnvironmentVariablesSource</code>をコールする必要がないように、環境変数の設定を解除します:"
>unset APP_GREETING</markup>

<markup
lang="bash"
title="<code>helidon-quickstart-se</code>ディレクトリに、次の内容の<code>config-file.properties</code>という名前のファイルを作成します:"
>app.greeting=HelloFrom-config-file.properties</markup>

<markup
lang="java"
title="<code>Main</code>クラスを更新します。1)新規インポートを追加し、2) <code>buildConfig</code>メソッドを置換します:"
>import static io.helidon.config.ConfigSources.file;
...

  private static Config buildConfig() {
      return Config.builder()
          .sources(
              file("config-file.properties"), <span class="conum" data-value="1" />
              classpath("application.yaml"))
          .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1D4gui.1" title="原文 : Add a mandatory configuration file.">必須の構成ファイルを追加します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-config-file.properties World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2G4rtS.1" title="原文 : The configuration property from the file config-file.properties takes precedence.">ファイル<code>config-file.properties</code>の構成プロパティが優先されます。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4YT5TN.1.spl1" title="原文 : If you want the configuration file to be optional, you must use the optional method with sources, otherwise Helidon will generate an error during startup as shown below.">構成ファイルをオプションにする場合は、<code>sources</code>で<code>optional</code>メソッドを使用する必要があります。そうしないと、次に示すように、起動時にHelidonによってエラーが生成されます。</span> <span class="merged" id="all.4YT5TN.1.spl2" title="原文 : This is true for both file and classpath sources.">これは、<code>file</code>ソースと<code>classpath</code>ソースの両方に当てはまります。</span> <span class="merged" id="all.4YT5TN.1.spl3" title="原文 : By default, these sources are mandatory.">デフォルトでは、これらのソースは必須です。</span> </p>
</div>
<markup
lang="java"
title="<code>Main</code>クラスを更新し、<code>buildConfig</code>メソッドを置き換えます:"
>  private static Config buildConfig() {
      return Config.builder()
          .sources(
              file("missing-file"), <span class="conum" data-value="1" />
              classpath("application.yaml"))
          .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GNI8O.1" title="原文 : Specify a file that doesn&rsquo;t exist.">存在しないファイルを指定してください。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして起動すると、次の出力が表示されます:"
>Exception in thread "main" io.helidon.config.ConfigException: Cannot load data from mandatory source FileConfig[missing-file]. File `missing-file` not found.</markup>

<p><span class="merged" id="all.1ZKlJm.1" title="原文 : To fix this, use the optional method as shown below, then rerun the test.">これを修正するには、次に示すように<code>optional</code>メソッドを使用して、テストを再実行します。</span></p>

<div class="listing">
<markup>...
    file("missing-file").optional(), <span class="conum" data-value="1" /></markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4fD3Z3.1" title="原文 : The missing-file configuration file is now optional."><code>missing-file</code>構成ファイルはオプションになりました。</span></li>
</ul>
</div>

<h3 id="_directory_source"><span class="merged" id="all.1Iccl7.1" title="原文 : Directory source">ディレクトリ・ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.Hf6E7.1.spl1" title="原文 : A directory source treats every file in the directory as a key, and the file contents as the value.">ディレクトリ・ソースは、ディレクトリ内のすべてのファイルをキーとして、ファイルの内容を値として扱います。</span> <span class="merged" id="all.Hf6E7.1.spl2" title="原文 : The following example includes a directory source as highest precedence.">次の例では、ディレクトリ・ソースを優先順位の最も高いものとして含めます。</span> </p>

<markup
lang="bash"
title="新しいディレクトリ<code>helidon-quickstart-se/conf</code>を作成し、そのディレクトリに次の内容の<code>app.greeting</code>という名前のファイルを作成します:"
>HelloFromFileInDirectoryConf</markup>

<markup
lang="java"
title="<code>Main</code>クラスを更新します。1)新規インポートを追加し、2) <code>buildConfig</code>メソッドを置換します:"
>import static io.helidon.config.ConfigSources.directory;
...

  private static Config buildConfig() {
      return Config.builder()
          .sources(
              directory("conf"), <span class="conum" data-value="1" />
              classpath("config.properties").optional(),
              classpath("application.yaml"))
          .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3oGEUL.1" title="原文 : Add a mandatory configuration directory.">必須の構成ディレクトリを追加します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFromFileInDirectoryConf World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1F9ivn.1" title="原文 : The greeting was fetched from the file named app.greeting.">グリーティングは<code>app.greeting</code>という名前のファイルからフェッチされました。</span></li>
</ul>

<h4 id="_exceeding_three_sources"><span class="merged" id="all.1mEts3.1" title="原文 : Exceeding three sources">3つを超えるソース</span></h4>
<div class="section">
<p><span class="merged" id="all.8afDu" title="原文 : If you have more than three sources, you can use the addSource method as shown below.">複数のソースがある場合は、次に示すように<code>addSource</code>メソッドを使用できます。</span></p>

<markup
lang="java"
title="<code>Main</code>クラスを更新し、<code>buildConfig</code>メソッドを置き換えます:"
>  private static Config buildConfig() {

    return Config.builder()
                .addSource(directory("conf"))  <span class="conum" data-value="1" />
                .addSource(file("config-file.properties"))
                .addSource(classpath("config.properties").optional())
                .addSource(classpath("application.yaml"))
                .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.gPDy0" title="原文 : Add each config source using the addSource method."><code>addSource</code>メソッドを使用して各構成ソースを追加します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...

{
  "message": "HelloFromFileInDirectoryConf World!"
}</markup>

</div>
</div>

<h3 id="_meta_configuration"><span class="merged" id="all.2Wb99T.1" title="原文 : Meta-configuration">Meta-configuration</span></h3>
<div class="section">
<p><span class="merged" id="all.lNPG6.1.spl1" title="原文 : Instead of directly specifying the configuration sources in your code, you can use meta-configuration in a file that declares the configuration sources and their attributes.">コードに構成ソースを直接指定するかわりに、構成ソースとその属性を宣言するファイルでメタ構成を使用できます。</span> <span class="merged" id="all.lNPG6.1.spl2" title="原文 : This requires using the Config.loadSourcesFrom method rather than a Config.Buider object.">これには、<code>Config.Buider</code>オブジェクトではなく<code>Config.loadSourcesFrom</code>メソッドを使用する必要があります。</span> <span class="merged" id="all.lNPG6.1.spl3" title="原文 : The contents of the meta-configuration file needs to be in JSON, YAML, or HOCON format.">メタ構成ファイルの内容は、JSON、YAMLまたはHOCON形式である必要があります。</span> <span class="merged" id="all.lNPG6.1.spl4" title="原文 : YAML is used in the following example.">YAMLは次の例で使用されています。</span> </p>

<markup
lang="bash"
title="<code>helidon-quickstart-se</code>ディレクトリに、次の内容の<code>meta-config.yaml</code>という名前のファイルを作成します:"
>sources:
  - type: "classpath" <span class="conum" data-value="1" />
    properties:
      resource: "application.yaml" <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2fwiTe.1"  title="原文:: The source type.">ソース・タイプ。</span></li>
<li data-value="2"><span class="merged" id="all.38rPVp.1" title="原文 : The name of the mandatory configuration resource.">必須構成リソースの名前。</span></li>
</ul>
<markup
lang="java"
title="<code>Main</code>クラスを更新し、<code>buildConfig</code>メソッドを置き換えます:"
>  private static Config buildConfig() {
      return Config.create(); <span class="conum" data-value="1" />
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.sRMzc" title="原文 : Will use meta-config.yaml by default">デフォルトで<code>meta-config.yaml</code>を使用</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-application.yaml World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2EcBF1" title="原文 : The application.yaml resource file was used to get the greeting.">応答メッセージの取得に<code>application.yaml</code>リソース・ファイルが使用されました。</span></li>
</ul>
<p><span class="merged" id="all.4TXTMu.1.spl1" title="原文 : The source precedence order in a meta-configuration file is the order of appearance in the file.">メタ構成ファイル内のソース優先順位は、ファイル内での出現順序です。</span> <span class="merged" id="all.4TXTMu.1.spl2" title="原文 : This is demonstrated below where the config-file.properties has highest precedence.">次に、<code>config-file.properties</code>の優先順位が最も高い場合の例を示します。</span> </p>

<markup
lang="bash"
title="<code>meta-config.yaml</code>ファイルの内容を置き換えます:"
>sources:
  - type: "file" <span class="conum" data-value="1" />
    properties:
      path: "./config-file.properties" <span class="conum" data-value="2" />
  - type: "classpath"
    properties:
      resource: "application.yaml"
  - type: "file"
    properties:
      path: "optional-config-file"
      optional: true  <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.36RZuO.1" title="原文 : The source type specifies a file.">ソース・タイプはファイルを指定します。</span></li>
<li data-value="2"><span class="merged" id="all.12Zf0L.1" title="原文 : The name of the mandatory configuration file.">必須構成ファイルの名前。</span></li>
<li data-value="3"><span class="merged" id="all.4dkx0A.1" title="原文 : Specify that the optional-config-file file is optional."><code>optional-config-file</code>ファイルがオプションであることを指定します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを再起動し、次のエンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-config-file.properties World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3GUUjO.1" title="原文 : The config-file.properties source now takes precedence."><code>config-file.properties</code>ソースが優先されるようになりました。</span></li>
</ul>
<p><span class="merged" id="all.sN0I1.1" title="原文 : When using a meta-config file, you need to explicitly include both environment variables and system properties as a source if you want to use them.">メタ構成ファイルを使用する場合、使用するには、環境変数とシステム・プロパティの両方をソースとして明示的に含める必要があります。</span></p>

<markup
lang="bash"
title="<code>meta-config.yaml</code>ファイルの内容を置き換えます:"
>sources:
  - type: "environment-variables" <span class="conum" data-value="1" />
  - type: "system-properties" <span class="conum" data-value="2" />
  - type: "classpath"
    properties:
      resource: "application.yaml"
  - type: "file"
    properties:
      path: "./config-file.properties"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.xwOFc.1" title="原文 : Environment variables are now used as a source.">環境変数がソースとして使用されるようになりました。</span></li>
<li data-value="2"><span class="merged" id="all.4D0WT1.1" title="原文 : System properties are now used as a source.">システム・プロパティがソースとして使用されるようになりました。</span></li>
</ul>
<p><span class="merged" id="all.2VgvfU.1.spl1" title="原文 : You can re-run the previous tests that exercised environment variables and system properties.">環境変数およびシステム・プロパティを使用して、前述のテストを再実行できます。</span> <span class="merged" id="all.2VgvfU.1.spl2" title="原文 : Swap the two types to see the precedence change.">2つのタイプを入れ替えて、優先順位の変更を確認します。</span> <span class="merged" id="all.2VgvfU.1.spl3" title="原文 : Be sure to unset APP_GREETING after you finish testing.">テストが終了したら、必ずAPP_GREETINGの設定を解除してください。</span> </p>

</div>
</div>

<h2 id="_accessing_config_within_an_application"><span class="merged" id="all.yBeaF.1" title="原文 : Accessing Config within an application">アプリケーション内の構成へのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.30v3k4.spl1" title="原文 : You have used Helidon to customize configuration behavior from your code using the Config and Config.Builder classes.">Helidonを使用して、<code>Config</code>および<code>Config.Builder</code>クラスを使用したコードからの構成動作をカスタマイズしました。</span> <span class="merged" id="all.30v3k4.spl2" title="原文 : As discussed previously, Helidon reads configuration from a config source, which uses a config parser to translate the source into an in-memory tree which represents the configuration&rsquo;s structure and values.">前述のように、Helidonは構成ソースから構成を読み取り、構成パーサーを使用して、構成の構造と値を表すメモリー内ツリーにソースを変換します。</span> <span class="merged" id="all.30v3k4.spl3" title="原文 : Helidon offers a variety of methods to access in-memory configuration.">Helidonには、インメモリー構成にアクセスするための様々なメソッドがあります。</span> <span class="merged" id="all.30v3k4.spl4" title="原文 : These can be categorized as key access or tree navigation.">これらは、<em>「キー・アクセス」</em>または<em>「ツリー・ナビゲーション」</em>に分類できます。</span> <span class="merged" id="all.30v3k4.spl5" title="原文 : You have been using key access for all of the examples to this point.">この時点までのすべての例で、<em>「キー・アクセス」</em>を使用してきました。</span> <span class="merged" id="all.30v3k4.spl6" title="原文 : For example app.greeting is accessing the greeting child node of the app parent node.">たとえば、<code>app.greeting</code>が<code>app</code>親ノードの<code>greeting</code>子ノードにアクセスしているとします。</span> <span class="merged" id="all.30v3k4.spl7" title="原文 : There are many options for access this data using navigation methods as described in Hierarchical Config and Advanced Config."><router-link @click.native="this.scrollFix('#config/03_hierarchical-features.adoc')" to="#config/03_hierarchical-features.adoc">「階層構成」</router-link>および<router-link @click.native="this.scrollFix('#config/06_advanced-configuration.adoc')" to="#config/06_advanced-configuration.adoc">「拡張構成」</router-link>で説明されているように、ナビゲーション・メソッドを使用してこのデータにアクセスするためのオプションは多数あります。</span> </p>


<h3 id="_accessing_config_using_keys_or_navigation"><span class="merged" id="all.1XgN4G" title="原文 : Accessing config using keys or navigation">キーまたはナビゲーションを使用した構成へのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.2tMaIY.spl1" title="原文 : The simplest way to access configuration data is using a key, as shown below in the GreetService class.">構成データにアクセスする最も簡単な方法は、次に示す<code>GreetService</code>クラスのキーを使用することです。</span> <span class="merged" id="all.2tMaIY.spl2" title="原文 : The key can be composite as shown below:">次に示すように、キーはコンポジットにすることができます:</span> </p>

<markup
lang="java"
title="<code>GreetService</code>コンストラクタを表示します:"
>    GreetService(Config config) {
        greeting.set(config.get("app.greeting").asString().orElse("Ciao")); <span class="conum" data-value="1" />
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.24TtAt" title="原文 : Get the app.greeting node using a composite key.">コンポジット・キーを使用して<code>app.greeting</code>ノードを取得します。</span></li>
</ul>
<p><span class="merged" id="all.19WMRb" title="原文 : You can also access the same greeting by navigating the nodes.">ノードをナビゲートして、同じグリーティングにアクセスすることもできます。</span></p>

<markup
lang="java"
title="<code>GreetService</code>コンストラクタを次のコードに置き換えます:"
>    GreetService(Config config) {
        greeting.set(config.get("app").get("greeting").asString().orElse("Ciao")); <span class="conum" data-value="1" />
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.ezjgO" title="原文 : Get the app node, then get the child node, greeting."><code>app</code>ノードを取得してから、子ノード<code>greeting</code>を取得します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-application.yaml World!"
}</markup>

</div>

<h3 id="_using_filters_and_collections"><span class="merged" id="all.2sxs2o" title="原文 : Using filters and collections">フィルタおよびコレクションの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.WTqzV.spl1" title="原文 : The Helidon Config class provides several methods that allow you to filter and customize the traversal of the configuration tree.">Helidon <code>Config</code>クラスには、構成ツリーのトラバースをフィルタおよびカスタマイズできるいくつかのメソッドが用意されています。</span> <span class="merged" id="all.WTqzV.spl2" title="原文 : The example below shows how to get the greeting node when you only know it is somewhere in the app subtree.">次の例は、<code>greeting</code>ノードが<code>app</code>サブツリーのどこかにあることのみがわかっている場合に、そのノードを取得する方法を示しています。</span> </p>

<markup
lang="bash"
title="<code>meta-config.yaml</code>ファイルの内容を置き換えます:"
>sources:
  - type: "classpath"
    properties:
      resource: "application.yaml"</markup>

<markup
lang="bash"
title="<code>application.yaml</code>リソース・ファイルのappセクションを置き換えます:"
>app:
  child1: child1-node
  child2:
     child2a:
        greeting: HelloFrom-application.yaml under child2a
  child3: child3-node</markup>

<markup
lang="java"
title="<code>GreetService.java</code>ファイルを更新します。1) 新しいインポートを追加し、2) <code>GreetService</code>コンストラクタを次のものに置き換えます:"
><span class="conum" data-value="1" />
import java.util.List;
import java.util.stream.Collectors;

    GreetService(Config config) {
        List&lt;Config&gt; appGreetings =  config.get("app")
            .traverse()  <span class="conum" data-value="2" />
            .filter(node -&gt; node.name().equals("greeting")) <span class="conum" data-value="3" />
            .collect(Collectors.toList()); <span class="conum" data-value="4" />

        greeting.set(appGreetings.get(0).asString().get());
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2YrdfS" title="原文 : Add new imports.">新規インポートを追加します。</span></li>
<li data-value="2"><span class="merged" id="all.1yAx7g" title="原文 : Traverse the entire subtree of the app node."><code>app</code>ノードのサブツリー全体を移動します。</span></li>
<li data-value="3"><span class="merged" id="all.1MzFbp" title="原文 : Include only nodes that have the name greeting."><code>greeting</code>という名前のノードのみを含めます。</span></li>
<li data-value="4"><span class="merged" id="all.4Ct3ZM" title="原文 : Add the greeting node to the collection."><code>greeting</code>ノードをコレクションに追加します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "HelloFrom-application.yaml under child2a World!"
}</markup>

</div>

<h3 id="_reacting_to_configuration_updates"><span class="merged" id="all.3d0pJS" title="原文 : Reacting to configuration updates">構成の更新への対応</span></h3>
<div class="section">
<p><span class="merged" id="all.T4oiy.spl1" title="原文 : Even though in-memory config trees are immutable, the config system internally records configuration source metadata that allows it to watch sources for changes.">インメモリー構成ツリーは不変ですが、構成システムは、ソースの変更を監視できる構成ソース・メタデータを内部的に記録します。</span> <span class="merged" id="all.T4oiy.spl2" title="原文 : Your application listens for updates to the underlying config sources and reacts to the changes.">アプリケーションは、基礎となる構成ソースの更新をリスニングし、変更に対応します。</span> <span class="merged" id="all.T4oiy.spl3" title="原文 : See Config Mutability Support for a full discussion on this topic.">このトピックの詳細は、<router-link @click.native="this.scrollFix('#config/05_mutability-support.adoc')" to="#config/05_mutability-support.adoc">「構成の可変性のサポート」</router-link>を参照してください。</span> <span class="merged" id="all.T4oiy.spl4" title="原文 : The following example demonstrates how to listen and react to configuration changes.">次の例では、構成の変更をリスニングして対応する方法を示します。</span> </p>

<markup
lang="bash"
title="<code>meta-config.yaml</code>ファイルの内容を置き換えます:"
>sources:
  - type: "file"
    properties:
      path: "./config-file.properties"
      polling-strategy:
        type: "watch"
  - type: "classpath"
    properties:
      resource: "application.yaml"</markup>

<markup
lang="java"
title="<code>GreetService</code>クラスを更新します。1)新規インポートを追加し、2) <code>GreetService</code>コンストラクタを置換します:"
>import java.util.function.Consumer;
...

    GreetService(Config config) {
        Config greetingConfig = config.get("app.greeting"); <span class="conum" data-value="1" />
        greeting.set(greetingConfig.asString().orElse("Ciao"));
        greetingConfig.onChange((Consumer&lt;Config&gt;) cfg -&gt; greeting.set(cfg.asString().orElse("Ciao"))); <span class="conum" data-value="2" />
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4HAJcx" title="原文 : Get the greeting Config node.">greeting <code>Config</code>ノードを取得します。</span></li>
<li data-value="2"><span class="merged" id="all.Wrihf.spl1" title="原文 : Register a listener that will get called by Helidon when the configuration changes.">構成の変更時にHelidonによってコールされるリスナーを登録します。</span> <span class="merged" id="all.Wrihf.spl2" title="原文 : The listener will update the greeting with the new value.">リスナーは、グリーティングを新しい値で更新します。</span> </li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...

{
  "message": "HelloFrom-config-file.properties World!"
}</markup>

<markup
lang="bash"
title="次の内容で<code>config-file.properties</code>を更新します:"
>app.greeting=Updated HelloFrom-config-file.properties</markup>

<markup
lang="bash"
title="数秒後に、レスポンスを確認します:"
>curl http://localhost:8080/greet
...

{
  "message": "Updated HelloFrom-config-file.properties World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.iParS" title="原文 : The application reacted to the change and updated the greeting.">アプリケーションは変更に反応し、グリーティングを更新しました。</span></li>
</ul>
</div>
</div>

<h2 id="_integration_with_kubernetes"><span class="merged" id="all.4PhaKc.2" title="原文 : Integration with Kubernetes">Kubernetesとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.1bExtP.1.spl1" title="原文 : The following example uses a Kubernetes ConfigMap to pass the configuration data to your Helidon application deployed to Kubernetes.">次の例では、Kubernetes ConfigMapを使用して、KubernetesにデプロイされたHelidonアプリケーションに構成データを渡します。</span> <span class="merged" id="all.1bExtP.1.spl2" title="原文 : When the pod is created, Kubernetes will automatically create a local file within the container that has the contents of the configuration file used for the ConfigMap.">ポッドが作成されると、Kubernetesによって、ConfigMapに使用される構成ファイルの内容を含むコンテナ内にローカル・ファイルが自動的に作成されます。</span> <span class="merged" id="all.1bExtP.1.spl3" title="原文 : This example will create the file at /etc/config/config-file.properties.">この例では、<code>/etc/config/config-file.properties</code>でファイルを作成します。</span> </p>

<markup
lang="bash"
title="<code>application.yaml</code>リソース・ファイルのappセクションを置き換えます:"
>app:
  greeting: "Hello"</markup>

<markup
lang="java"
title="<code>Main</code>クラスを更新し、<code>buildConfig</code>メソッドを置き換えます:"
>  private static Config buildConfig() {
      return Config.builder()
          .sources(
              file("/etc/config/config-file.properties").optional(), <span class="conum" data-value="1" />
              classpath("application.yaml")) <span class="conum" data-value="2" />
          .build();
  }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Decxr.1" title="原文 : The app.greeting value will be fetched from /etc/config/config-file.properties within the container."><code>app.greeting</code>値は、コンテナ内の<code>/etc/config/config-file.properties</code>からフェッチされます。</span></li>
<li data-value="2"><span class="merged" id="all.2PNOKT" title="原文 : The server port is specified in application.yaml within the helidon-quickstart-se.jar.">サーバー・ポートは、<code>helidon-quickstart-se.jar</code>内の<code>application.yaml</code>で指定されます。</span></li>
</ul>
<markup
lang="java"
title="<code>GreetService</code>コンストラクタを次のコードに置き換えます:"
>    GreetService(Config config) {
        greeting.set(config.get("app.greeting").asString().orElse("Ciao"));
    }</markup>

<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "Hello World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Aey5j" title="原文 : The greeting came from application.yaml since /etc/config/config-file.properties doesn&rsquo;t exist."><code>/etc/config/config-file.properties</code>が存在しないため、グリーティングは<code>application.yaml</code>から送信されました。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを停止し、dockerイメージをビルドします:"
>docker build -t helidon-config-se .</markup>

<markup
lang="bash"
title="<code>config-file.properties</code>からConfigMapを生成します:"
>kubectl create configmap helidon-configmap --from-file config-file.properties</markup>

<markup
lang="bash"
title="ConfigMapの内容を表示します:"
>kubectl get configmap helidon-configmap -o yaml
...
apiVersion: v1
data:
  config-file.properties: |   <span class="conum" data-value="1" />
    app.greeting=Updated HelloFrom-config-file.properties   <span class="conum" data-value="2" />
kind: ConfigMap
...</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4FquKi.1" title="原文 : The file config-file.properties will be created within the Kubernetes container.">ファイル<code>config-file.properties</code>は、Kubernetesコンテナ内に作成されます。</span></li>
<li data-value="2"><span class="merged" id="all.3Q8Arf.1" title="原文 : The config-file.properties file will have this single property defined."><code>config-file.properties</code>ファイルには、この単一のプロパティが定義されます。</span></li>
</ul>
<markup
lang="yaml"
title="次の内容で、<code>k8s-config.yaml</code>という名前のKubernetes YAML仕様を作成します:"
>kind: Service
apiVersion: v1
metadata:
  name: helidon-config <span class="conum" data-value="1" />
  labels:
    app: helidon-config
spec:
  type: NodePort
  selector:
    app: helidon-config
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment
apiVersion: extensions/v1beta1
metadata:
  name: helidon-config
spec:
  replicas: 1 <span class="conum" data-value="2" />
  template:
    metadata:
      labels:
        app: helidon-config
        version: v1
    spec:
      containers:
        - name: helidon-config
          image: helidon-config-se
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080
          volumeMounts:
            - name: config-volume
              mountPath: /etc/config <span class="conum" data-value="3" />
      volumes:
        - name: config-volume
          configMap:
            # Provide the name of the ConfigMap containing the files you want
            # to add to the container
            name:  helidon-configmap <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.4" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.4" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.2hSlHR.1.spl1" title="原文 : Mount the ConfigMap as a volume at /etc/config.">ConfigMapをボリュームとして<code>/etc/config</code>にマウントします。</span> <span class="merged" id="all.2hSlHR.1.spl2" title="原文 : This is where Kubernetes will create config-file.properties.">ここで、Kubernetesは<code>config-file.properties</code>を作成します。</span> </li>
<li data-value="4"><span class="merged" id="all.2He1jG.1" title="原文 : Specify the ConfigMap which contains the configuration data.">構成データを含むConfigMapを指定します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを作成し、Kubernetesにデプロイします:"
>kubectl apply -f ./k8s-config.yaml</markup>

<markup
lang="bash"
title="サービス情報を取得します:"
>kubectl get service/helidon-config</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-config   NodePort   10.99.159.2   &lt;none&gt;        8080:31143/TCP   8s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Q1f91.3" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>
<markup
lang="bash"
title="ポート<code>31143</code>を使用して構成エンドポイントを検証します。実際のポートは異なる可能性があります:"
>curl http://localhost:31143/greet
...
{
  "message": "Updated HelloFrom-config-file.properties World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4QvX6g.1" title="原文 : The greeting value from /etc/config/config-file.properties within the container was used.">コンテナ内の<code>/etc/config/config-file.properties</code>からの応答メッセージ値が使用されました。</span></li>
</ul>
<p><span class="merged" id="all.HBnIV.3" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Kubernetesリソースを削除します:"
>kubectl delete -f ./k8s-config.yaml
kubectl delete configmap  helidon-configmap</markup>

</div>

<h2 id="_summary"><span class="merged" id="all.1nTCR.5"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3CXn5q.1.spl1" title="原文 : This guide has demonstrated how to use basic Helidon configuration features.">このガイドでは、基本的なHelidon構成機能の使用方法について説明しました。</span> <span class="merged" id="all.3CXn5q.1.spl2" title="原文 : The full configuration documentation, starting with the introduction section at Helidon Config has much more information including the following:"><router-link @click.native="this.scrollFix('#config/01_introduction.adoc')" to="#config/01_introduction.adoc">「Helidon構成」</router-link>の概要セクションから始まる完全な構成ドキュメントには、次のような多くの情報が含まれています:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zN3GU.1"  title="原文:: Architecture">アーキテクチャ</span></p>

</li>
<li>
<p><span class="merged" id="all.XZAqQ.1"  title="原文:: Parsers">パーサー</span></p>

</li>
<li>
<p><span class="merged" id="all.2pceCn.2"  title="原文:: Extensions">拡張</span></p>

</li>
<li>
<p><span class="merged" id="all.3Mg1M9.2"  title="原文:: Filters">フィルタ</span></p>

</li>
<li>
<p><span class="merged" id="all.2ff8t8.1" title="原文 : Hierarchical Access">階層アクセス</span></p>

</li>
<li>
<p><span class="merged" id="all.3TYb55.2"  title="原文:: Property Mapping">プロパティ・マッピング</span></p>

</li>
<li>
<p><span class="merged" id="all.faGbn.2" title="原文 : Mutability Support">可変性のサポート</span></p>

</li>
<li>
<p><span class="merged" id="all.l2MW0.1" title="原文 : and more…​">その他…</span></p>

</li>
</ul>
<p><span class="merged" id="all.UfWha.3" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1m3bP8.4" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</doc-view>
