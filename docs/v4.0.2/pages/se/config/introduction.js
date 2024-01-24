<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.44"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.43" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.32" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.28" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.26" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.20" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.16" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.59"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.lTx0C.spl1" title="原文 : Helidon provides a very flexible and comprehensive configuration system, offering you many application configuration choices.">Helidonは、非常に柔軟で包括的な構成システムを提供し、多くのアプリケーション構成を選択できます。</span> <span class="merged" id="all.lTx0C.spl2" title="原文 : The Config component provides a Java API to load and process configuration data from various sources into a Config object which the application can then use.">構成コンポーネントは、様々なソースから構成データをロードして処理するJava APIを、アプリケーションで使用できる<code>Config</code>オブジェクトに提供します。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.36"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1twj18" title="原文 : To enable Config add the following dependency to your project’s pom.xml (see Managing Dependencies).">構成を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.43"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3ABOpr.spl1" title="原文 : A brief overview of the config system helps clarify its different parts and how they work together.">構成システムの簡単な概要は、様々な部分とそれらがどのように連携するかを明確にするのに役立ちます。</span> <span class="merged" id="all.3ABOpr.spl2" title="原文 : Most applications will typically deal with more than one of these parts.">通常、ほとんどのアプリケーションでは、これらの部分を複数処理します。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="構成の概要" src="images/config/overview.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.IH54a" title="原文 : These are the main parts of the configuration system:">構成システムの主要部分は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.156Pmt" title="原文 : Config system - allows you to read configuration data in an application"><code>Config</code>システム - アプリケーションの構成データを読み取ることができます</span></p>

</li>
<li>
<p><span class="merged" id="all.3czl8a" title="原文 : A config source - a location containing configuration data (File, Map, Properties etc.)">構成ソース - 構成データ(ファイル、マップ、プロパティなど)を含むロケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.2m3J60" title="原文 : A config parser - a component capable of transforming bytes into configuration data (such as JSON content, YAML etc.)">構成パーサー - バイトを構成データ(JSONコンテンツ、YAMLなど)に変換できるコンポーネント。</span></p>

</li>
</ul>


<h3 id="config_sources"><span class="merged" id="all.3pCAKA" title="原文 : Config Sources">構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1QIlRQ.spl1" title="原文 : Configuration can be loaded from different types of locations and expressed in different formats.">構成は、様々なタイプのロケーションからロードし、様々な形式で表すことができます。</span> <span class="merged" id="all.1QIlRQ.spl2" title="原文 : The config system includes support for several types of config sources, for example:">構成システムには、次のような複数のタイプの構成ソースのサポートが含まれています:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4UcCI2" title="原文 : Environment variables - the property is a name/value pair.">環境変数 - プロパティは名前と値のペアです。</span>

</li>
<li>
<span class="merged" id="all.33qRan" title="原文 : Java system properties - the property is a name/value pair.">Javaシステム・プロパティ - プロパティは名前と値のペアです。</span>

</li>
<li>
<span class="merged" id="all.WnJM9" title="原文 : Resources in the classpath - the contents of the resource is parsed according to its inferred format.">クラスパスのリソース - リソースの内容は、推測形式に従って解析されます。</span>

</li>
<li>
<span class="merged" id="all.2WbXWy" title="原文 : File - the contents of the file is parsed according to its inferred format.">File - ファイルの内容は、推測形式に従って解析されます。</span>

</li>
<li>
<span class="merged" id="all.22uoSP" title="原文 : Directory - each non-directory file in the directory becomes a config entry: the file name is the key. and the contents of that file are used as the corresponding config String value.">ディレクトリ - ディレクトリ内の各非ディレクトリ・ファイルが構成エントリになります: ファイル名はキーで、そのファイルの内容が対応する構成文字列値として使用されます。</span>

</li>
<li>
<span class="merged" id="all.1RuPWi" title="原文 : A URL resource - contents is parsed according to its inferred format.">URLリソース - contentは、推論された形式に従って解析されます。</span>

</li>
<li>
<span class="merged" id="all.rVeAw" title="原文 : A variety of in-memory data structures (String, Map, Properties)">様々なインメモリー・データ構造(<code>String</code>, <code>Map</code>, <code>Properties</code>)</span>

</li>
</ol>

<p><span class="merged" id="all.1yeRgj" title="原文 : See the JavaDoc for the ConfigSources class for a complete list of the built-in config source types and how to use them.">組込み構成ソース・タイプの完全なリストおよびその使用方法は、<a href="/apidocs/io.helidon.config/io/helidon/config/ConfigSources.html" target="_blank"><code>ConfigSources</code></a>クラスのJavaDocを参照してください。</span></p>

<p><span class="merged" id="all.404u3G" title="原文 : See the advanced topics&apos; page for further information on some more involved aspects of config sources.">構成ソースのより関連性の高い側面の詳細は、<router-link :to="{path: '/se/config/advanced-configuration', hash: '#_advanced_config_sources'}">「詳細トピック」</router-link>のページを参照してください。</span></p>

</div>


<h3 id="parsers"><span class="merged" id="all.3oq9tm" title="原文 : Config Parsers">構成パーサー</span></h3>
<div class="section">
<p><span class="merged" id="all.129qLD" title="原文 : When it reads configuration text from sources, the config system uses config parsers to translate that text into the in-memory data structures representing that configuration.">ソースから構成テキストを読み取る場合、構成システムは構成パーサーを使用して、そのテキストをその構成を表すメモリー内データ構造に変換します。</span></p>

<p><span class="merged" id="all.Tpwfs.spl1" title="原文 : The config system includes several built-in parsers, such as for the Java properties, YAML, JSON, and HOCON formats.">構成システムには、Javaプロパティ、YAML、JSON、HOCON形式などの組込みパーサーがいくつか含まれています。</span> <span class="merged" id="all.Tpwfs.spl2" title="原文 : See this section for how to change your pom.xml to make parsers for those formats available to your application."><code>pom.xml</code>を変更して、これらのフォーマットのパーサーをアプリケーションで使用できるようにする方法は、<router-link @click.native="this.scrollFix('#built-in-formats')" to="#built-in-formats">「このセクション」</router-link>を参照してください。</span> <span class="merged" id="all.Tpwfs.spl3" title="原文 : Then your application can invoke the config builder’s addParser method so that builder will use the parsers you choose.">その後、選択したパーサーがビルダーで使用されるように、アプリケーションで<a href="/apidocs/io.helidon.config/io/helidon/config/Config.Builder.html#addParser-io.helidon.config.spi.ConfigParser-" target="_blank">「構成ビルダー<code>addParser</code>」</a>メソッドを起動できます。</span> </p>

<p><span class="merged" id="all.11fdsF.spl1" title="原文 : You can extend the system with custom parsers of your own.">独自のカスタム・パーサーを使用してシステムを拡張できます。</span> <span class="merged" id="all.11fdsF.spl2" title="原文 : Implement the ConfigParser interface, then construct a Config.Builder using the addParser method, passing an instance of your customer parser."><a href="/apidocs/io.helidon.config/io/helidon/config/spi/ConfigParser.html" target="_blank"><code>ConfigParser</code></a>インタフェースを実装し、<code>addParser</code>メソッドを使用して<code>Config.Builder</code>を構築し、カスタマ・パーサーのインスタンスを渡します。</span> <span class="merged" id="all.11fdsF.spl3" title="原文 : Invoke one of the sources methods to include a source that uses the custom format and then build the Config object.">いずれかの<code>sources</code>メソッドを呼び出して、カスタム書式を使用するソースを含めてから、<code>Config</code>オブジェクトをビルドします。</span> </p>

<p><span class="merged" id="all.3WJbyu" title="原文 : See the advanced topics&apos; page for further information on some more involved aspects of config parsers.">構成パーサーのより関連のある側面の詳細は、<router-link :to="{path: '/se/config/advanced-configuration', hash: '#_advanced_config_parsers'}">「詳細トピック」</router-link>ページを参照してください。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.30"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3S3BA8" title="原文 : Helidon has an internal configuration, so you are not required to provide any configuration data for your application, though in practice you most likely would.">Helidonには内部構成があるため、ほとんどの場合、アプリケーションの構成データを指定する必要はありません。</span></p>

<p><span class="merged" id="all.EvWJT" title="原文 : In your application code, when you create a default Config object, Helidon uses the default configuration .">アプリケーション・コードで、デフォルトの<code>Config</code>オブジェクトを作成すると、Helidonはデフォルトの構成を使用します。</span></p>

<markup
lang="Java"

>Config config = Config.create(); <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4RWeMz" title="原文 : The Config object is created with default settings."><code>Config</code>オブジェクトがデフォルト設定で作成されます。</span></li>
</ul>


<h3 id="_global_configuration"><span class="merged" id="all.2y9A1j"  title="原文:: Global Configuration">グローバル構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4JUafJ.spl1" title="原文 : Global configuration is a singleton instance of Config that is implicitly used by some components of Helidon, plus it provides a convenient mechanism for your application to retrieve configuration from anywhere in your code.">グローバル構成は、Helidonの一部のコンポーネントによって暗黙的に使用される<code>Config</code>のシングルトン・インスタンスであり、さらにコード内のどこからでもアプリケーションで構成を取得する便利なメカニズムを提供します。</span> <span class="merged" id="all.4JUafJ.spl2" title="原文 : By default global configuration is initialized to the default Config object (as returned by Config.create()).">デフォルトでは、グローバル構成はデフォルトの<code>Config</code>オブジェクトに初期化されます(<code>Config.create()</code>で戻されます)。</span> <span class="merged" id="all.4JUafJ.spl3" title="原文 : But it is recommended that you initialize it explicitly.">ただし、明示的に初期化することをお薦めします。</span> <span class="merged" id="all.4JUafJ.spl4" title="原文 : This is especially important if you define custom config sources.">これは、カスタム構成ソースを定義する場合に特に重要です。</span> </p>

<markup


>Config config = Config.create(); <span class="conum" data-value="1" />
Config.global(config); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4uimG.spl1"  title="原文:: Create configuration.">構成の作成</span> <span class="merged" id="all.4uimG.spl2" title="原文 : This shows creating the default config, but it could be created from custom config sources.">これはデフォルト構成の作成を示していますが、カスタム構成ソースから作成することもできます。</span> </li>
<li data-value="2"><span class="merged" id="all.a77jl" title="原文 : Assign it to the application’s global configuration">アプリケーションのグローバル構成に割り当てます</span></li>
</ul>

<p><span class="merged" id="all.1mm0Oo" title="原文 : You can use global configuration to conveniently retrieve the application’s configuration:">グローバル構成を使用すると、アプリケーションの構成を容易に取得できます:</span></p>

<markup


>Config config = Config.global();</markup>

</div>


<h3 id="_custom_config_sources"><span class="merged" id="all.19bhov" title="原文 : Custom Config Sources">カスタム構成ソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1Kofss.spl1" title="原文 : Although the default configuration is very simple to use, your application can take full control of all configuration sources and precedence.">デフォルトの構成は非常に簡単に使用できますが、アプリケーションはすべての構成ソースと優先順位を完全に制御できます。</span> <span class="merged" id="all.1Kofss.spl2" title="原文 : You can do so by creating and invoking methods on a Config.Builder object to construct a Config instance.">これを行うには、<code>Config.Builder</code>オブジェクトでメソッドを作成して起動し、<code>Config</code>インスタンスを作成します。</span> </p>

<p><span class="merged" id="all.1qBmLi.spl1" title="原文 : When your application prepares a Config.Builder it sets what ConfigSources and ConfigParsers the builder should use in constructing the resulting Config object.">アプリケーションで<code>Config.Builder</code>を準備する際、ビルダーが結果の<code>Config</code>オブジェクトをビルドする際に使用する<code>ConfigSource</code>および<code>ConfigParser</code>を設定します。</span> <span class="merged" id="all.1qBmLi.spl2" title="原文 : The JavaDoc explains how to use the Config.Builder.">JavaDocでは、<a href="/apidocs/io.helidon.config/io/helidon/config/Config.Builder.html" target="_blank"><code>Config.Builder</code></a>の使用方法について説明します。</span> </p>

<p><span class="merged" id="all.2KD02V" title="原文 : See the Custom Configuration Sources and advanced config sources sections for detailed examples and further information.">詳細な例および詳細は、<router-link :to="{path: '/se/guides/config', hash: '#_custom_configuration_sources'}">「カスタム構成ソース」</router-link>および<router-link :to="{path: '/se/config/advanced-configuration', hash: '#_advanced_config_sources'}">「拡張構成ソース」</router-link>セクションを参照してください。</span></p>

</div>


<h3 id="_accessing_config_values"><span class="merged" id="all.2NYFQu" title="原文 : Accessing Config Values">構成値へのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.a7h4J.spl1" title="原文 : You have used Helidon to customize configuration behavior from your code using the Config and Config.Builder classes.">Helidonを使用して、<code>Config</code>および<code>Config.Builder</code>クラスを使用したコードからの構成動作をカスタマイズしました。</span> <span class="merged" id="all.a7h4J.spl2" title="原文 : As discussed previously, Config system reads configuration from a config source, which uses a config parser to translate the source into an in-memory tree which represents the configuration’s structure and values.">前述のように、<code>Config</code>システムは構成ソースから構成を読み取ります。構成パーサーを使用して、ソースを構成の構造と値を表すインメモリー・ツリーに変換します。</span> </p>

<p><span class="merged" id="all.425cWZ" title="原文 : This approach allows us to take any source data, be it a flat properties file or an object structure such as JSON, and transform it into a single tree that allows for overriding of values using heterogeneous config sources.">このアプローチでは、任意のソース・データをフラットなプロパティ・ファイルまたはJSONなどのオブジェクト構造にして、異機種間構成ソースを使用して値をオーバーライドできる単一のツリーに変換できます。</span></p>

<p><span class="merged" id="all.33aMqZ" title="原文 : We are using the . as a separator of tree structure."><code>.</code>をツリー構造のセパレータとして使用しています。</span></p>

<p><span class="merged" id="all.3fH1W8" title="原文 : Example of two config sources that can be used by Config with the same data tree in different formats:">異なる形式の同じデータ・ツリーを使用して<code>Config</code>で使用できる2つの構成ソースの例:</span></p>

<p><span class="merged" id="all.296Wqh" title="原文 : A Properties source:">プロパティ・ソース:</span></p>

<markup
lang="properties"

>web.page-size=25</markup>

<p><span class="merged" id="all.49Sxz8" title="原文 : A YAML source:">YAMLソース:</span></p>

<markup
lang="yaml"

>web:
  page-size: 25</markup>

<p><span class="merged" id="all.19VdaD.spl1" title="原文 : The configuration has the same internal representation in Config.">構成は、<code>Config</code>で同じ内部表現を持ちます。</span> <span class="merged" id="all.19VdaD.spl2" title="原文 : Once created, the Config object provides many methods the application can use to retrieve config data as various Java types."><code>Config</code>オブジェクトを作成すると、アプリケーションで様々なJavaタイプとして構成データを取得するために使用できる多くのメソッドが提供されます。</span> <span class="merged" id="all.19VdaD.spl3" title="原文 : See the Config JavaDoc for complete details.">詳細は、<a href="/apidocs/io.helidon.config/io/helidon/config/Config.html" target="_blank"><code>Config</code></a> JavaDocを参照してください。</span> </p>

<markup
lang="java"

>int pageSize = config.get("web.page-size")
        .asInt()
        .orElse(20);</markup>

<p><span class="merged" id="all.LFFLX" title="原文 : Or using the tree node approach:">または、ツリー・ノード・アプローチを使用します:</span></p>

<markup
lang="java"

>int pageSize = config
                .get("web")
                .get("page-size")
                .asInt()
                .orElse(20);</markup>

<p><span class="merged" id="all.31wmv1" title="原文 : For this first example we can see the basic features of Config:">この最初の例では、<code>Config</code>の基本機能を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cSouf" title="原文 : Configuration is a tree of Config nodes">構成は<code>Config</code>ノードのツリーです</span></p>

</li>
<li>
<p><span class="merged" id="all.2lFaXt" title="原文 : You can use . as a tree separator when requesting node values">ノード値をリクエストするときに、<code>.</code>をツリー・セパレータとして使用できます</span></p>

</li>
<li>
<p><span class="merged" id="all.1XL74T" title="原文 : Each config value can be retrieved as a typed object, with shortcut methods for the most commonly used types, such as int, String, long and other">各構成値は、<code>int</code>, <code>String</code>, <code>long</code>などの最も一般的に使用されるタイプのショートカット・メソッドを使用して、型付きオブジェクトとして取得できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2VAmc7" title="原文 : You can immediately provide a default value for the cases the configuration option is not defined in any source">構成オプションがどのソースにも定義されていない場合は、すぐにデフォルト値を指定できます</span></p>

</li>
</ul>

</div>


<h3 id="_overriding_values"><span class="merged" id="all.CiWC4" title="原文 : Overriding Values">値のオーバーライド</span></h3>
<div class="section">
<p><span class="merged" id="all.4aoyeP" title="原文 : The Config system treats config sources as a hierarchy, where the first source that has a specific configuration key &quot;wins&quot; and its value is used, other sources are not even queried for it."><code>Config</code>システムでは、構成ソースは階層として扱われ、特定の構成キーを持つ最初のソースが優先され、その値が使用され、他のソースに対しても問合せが行われません。</span></p>

<p><span class="merged" id="all.svZrW.spl1" title="原文 : In order to properly configure your application using configuration sources, you need to understand the precedence rules that Helidon uses to merge your configuration data.">構成ソースを使用してアプリケーションを正しく構成するには、Helidonが構成データをマージするために使用する優先順位ルールを理解する必要があります。</span> <span class="merged" id="all.svZrW.spl2" title="原文 : If any of the Helidon required properties are not specified in one of these source, then Helidon will use a default value.">Helidonの必須プロパティのいずれかがこれらのソースで指定されていない場合、Helidonではデフォルト値が使用されます。</span> </p>

<p><span class="merged" id="all.2V3Mkg" title="原文 : For example the default configuration when you use Config.create() uses the following config sources in precedence order:">たとえば、<code>Config.create()</code>を使用する場合のデフォルト構成では、次の構成ソースが優先順に使用されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.i528T" title="原文 : System properties config source">システム・プロパティ構成ソース</span>

</li>
<li>
<span class="merged" id="all.1IyfoZ" title="原文 : Environment variables config source">環境変数config source</span>

</li>
<li>
<span class="merged" id="all.NsBq" title="原文 : A classpath config source called application.? where the ? depends on supported media types currently on the classpath.By default, it is properties, but if you have YAML support on classpath, it would be application.yaml (a ConfigParser may add additional supported suffixes for default file)"><code>application.?</code>というクラスパス構成ソースで、<code>?</code>は現在classpath.Byデフォルトでサポートされているメディア・タイプに依存しますが、<code>properties</code>です。ただし、クラスパスでYAMLサポートがある場合、<code>application.yaml</code>になります(<code>ConfigParser</code>では、デフォルト・ファイルにサポートされている追加のサフィクスを追加できます)</span>

</li>
</ol>

<p><span class="merged" id="all.Tg6se" title="原文 : Let’s consider the following keys:">次のキーについて考えてみます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2WhLUn" title="原文 : System property answer=42">システム・プロパティ<code>answer=42</code></span>

</li>
<li>
<span class="merged" id="all.4D5FgS" title="原文 : Environment variable ANSWER=38">環境変数<code>ANSWER=38</code></span>

</li>
<li>
<span class="merged" id="all.1zsXtS" title="原文 : A key in a configuration file answer=36">構成ファイル<code>answer=36</code>内のキー</span>

</li>
</ol>

<p><span class="merged" id="all.2h29MY" title="原文 : When you request config.get(`answer).asInt().orElse(25), you would get `42"><code>config.get(`answer</code> ).asInt().orElse(25) <code>, you would get `42</code>をリクエストする場合</span></p>

<p><span class="merged" id="all.3XXWIt" title="原文 : This allows you to configure environment specific configuration values through system properties, environment variables, or through files available on each environment (be it a physical machine, a Kubernetes pod, or a docker image) without changing your source code.">これにより、システム・プロパティ、環境変数または各環境で使用可能なファイル(物理マシン、Kubernetesポッドまたはdockerイメージ)を使用して、ソース・コードを変更せずに環境固有の構成値を構成できます。</span></p>

</div>


<h3 id="_config_filters"><span class="merged" id="all.2FNhp7" title="原文 : Config Filters">構成フィルタ</span></h3>
<div class="section">
<p><span class="merged" id="all.173cX3" title="原文 : Config system applies configured config filters on each value when it is requested for the first time.">構成システムは、各値が初めてリクエストされたときに、その値に構成済の<em>「構成フィルタ」</em>を適用します。</span></p>

<p><span class="merged" id="all.4JnUqm" title="原文 : There is a built-in filter called ValueResolvingFilter (enabled by default, can be disabled through API) that resolves references to other keys in values in configuration.">構成内の値の他のキーへの参照を解決する、<code>ValueResolvingFilter</code>と呼ばれる組込みフィルタがあります(デフォルトでは有効になっており、APIを介して無効にできます)。</span></p>

<p><span class="merged" id="all.2jQqvU" title="原文 : Example: Let’s consider the following example properties file">Example: 次のプロパティ・ファイルの例を考えてみます</span></p>

<markup
lang="properties"

>host=localhost
first-service.host=${host}/firstservice
second-service.host=${host}/secondservice</markup>

<p><span class="merged" id="all.1ozCq7" title="原文 : The filter resolves the ${host} reference to the localhost value.">このフィルタは、<code>${host}</code>参照を<code>localhost</code>値に解決します。</span></p>

<p><span class="merged" id="all.49B5Ta" title="原文 : This makes it easier to override values in testing and production, as you can just override the host key and leave the URIs same.">これにより、<code>host</code>キーをオーバーライドしてURIを同じままにするだけで済むため、テストおよび本番の値を簡単にオーバーライドできます。</span></p>

<p><span class="merged" id="all.3PJHmR" title="原文 : See Filter, Overrides, and Token Substitution section for further information on some more involved aspects.">関連するいくつかの側面の詳細は、<router-link :to="{path: '/se/config/advanced-configuration', hash: '#filters-and-overrides'}">「フィルタ、オーバーライドおよびトークンの置換」</router-link>の項を参照してください。</span></p>

</div>


<h3 id="_typed_config_values"><span class="merged" id="all.ig4Hs" title="原文 : Typed config values">入力された構成値</span></h3>
<div class="section">
<p><span class="merged" id="all.414z7t" title="原文 : The Config object lets your application retrieve config data as a typed ConfigValue."><code>Config</code>オブジェクトを使用すると、アプリケーションで構成データを型付きConfigValueとして取得できます。</span></p>

<p><span class="merged" id="all.NAcnG" title="原文 : You can retrieve a ConfigValue&lt;T&gt; using the following as methods in Config: * asString() - to get a string config value * asBoolean() and other accessors for primitive types * as(Class) - to get a value for a type that has a mapper configured * as(Generic) - to get a value for a type supporting generics (such as Set&lt;String&gt;) * asMap() - to get a map of key to value pairs * asList(Class) - to get a list of typed values * as(Function&lt;Config,T&gt;) - to get a typed value providing a mapper function"><code>Config</code>で次の<code>as</code>メソッドを使用して、<code>ConfigValue&lt;T></code>を取得できます: * <code>asString()</code> - 文字列構成値*<code>asBoolean()</code>およびプリミティブ*<code>as(Class)</code>型のその他のアクセッサを取得 - マッパーが構成されているタイプの値を取得します*<code>as(Generic)</code> - ジェネリック・スをサポートする型(<code>Set&lt;String></code>など)の値を取得します*<code>asMap()</code> - キーと値のペアのマップを取得* <code>asList(Class)</code> - 型付き値のリストを取得*<code>as(Function&lt;Config,T>)</code> - マッパー関数を提供する型付きの値を取得</span></p>

<p><span class="merged" id="all.25EHBe" title="原文 : ConfigValue&lt;T&gt; can be used to obtain: * an Optional&lt;T&gt; value from a single node, * the T value from a single node interpreted as a basic Java type (primitive or simple object) already known to the config system (such as a boolean or a Double), or * a complex Java type from a subtree of the config tree.">ConfigValue&lt;T>は、以下のように使用できます。* 1つのノードからの<code>Optional&lt;T></code>値、* <em>1つのノードから</em>の<code>T</code>値は、基本的なJava型(プリミティブまたは単純なオブジェクト)として解釈され、コンフィグシステムで既に知られているもの(<code>boolean</code>や<code>Double</code>など)、または* コンフィグ・ツリーの<em>サブツリーから</em>の複雑なJava型として解釈されます。</span></p>

<p><span class="merged" id="all.2GhfCZ" title="原文 : + The config system automatically knows how to return List and Map complex types, and you can provide config mappers to convert a config subtree to whatever Java types your application needs.">+構成システムは、<code>List</code>および<code>Map</code>複合タイプを返す方法を自動的に認識し、構成サブツリーをアプリケーションが必要とするJavaタイプに変換するために<em>「構成マッパー」</em>を提供できます。</span></p>

<p><span class="merged" id="all.w3QrB" title="原文 : See Property Mapping page for details on how to use the built-in mappings and your own custom ones to convert to simple and complex types.">組込みマッピングおよび独自のカスタム・マッピングを使用して単純型および複合型に変換する方法の詳細は、<router-link to="/se/config/property-mapping">「プロパティ・マッピング」</router-link>ページを参照してください。</span></p>

</div>


<h3 id="retry"><span class="merged" id="all.1wllZn" title="原文 : Dealing with Loading Errors: Retry Policies">ロード・エラーの処理: ポリシーの再試行</span></h3>
<div class="section">
<p><span class="merged" id="all.lD9RS.spl1" title="原文 : Config sources, especially those that depend on fallible mechanisms such as the network or a shared file system, might fail to load during momentary outages.">構成ソース、特にネットワークや共有ファイル・システムなどの代替メカニズムに依存するソースは、一時的な停止中にロードに失敗する可能性があります。</span> <span class="merged" id="all.lD9RS.spl2" title="原文 : The config system allows you to build resiliency into your application’s use of configuration that relies on such technologies.">configシステムを使用すると、このようなテクノロジに依存する構成をアプリケーションで使用する際の耐障害性をビルドできます。</span> </p>

<p><span class="merged" id="all.4eT3RE.spl1" title="原文 : When your application builds a ConfigSource it can specify a retry policy.">アプリケーションで<code>ConfigSource</code>をビルドするときに、<em>「再試行ポリシー」</em>を指定できます。</span> <span class="merged" id="all.4eT3RE.spl2" title="原文 : When the config system needs to load data from that source it delegates the load operation to that retry policy.">構成システムは、そのソースからデータをロードする必要がある場合、ロード操作をその再試行ポリシーに委任します。</span> <span class="merged" id="all.4eT3RE.spl3" title="原文 : That policy is responsible not only for loading the data but also for detecting errors during loading and implementing the algorithm for deciding when and how many times to retry a failed load before reporting a failure back to your application.">このポリシーは、データのロードだけでなく、ロード中のエラーを検出し、失敗したロードをアプリケーションにレポートする前に再試行するタイミングと回数を決定するアルゴリズムを実装します。</span> </p>

<p><span class="merged" id="all.1yTUpV" title="原文 : The config system includes two predefined retry policies:">構成システムには、次の2つの事前定義済の再試行ポリシーがあります:</span></p>

<div class="block-title"><span class="merged" id="all.XP1dt" title="原文 : Predefined Retry Policies"><span>事前定義済の再試行ポリシー</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4XN9k0"  title="原文:: Policy">ポリシー</span></th>
<th><span class="merged" id="all.1nTCR.7"  title="原文:: Summary">サマリー</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2uiGjj" title="原文 : &quot;just call&quot; (default)">"just call" (default)</span></td>
<td class=""><span class="merged" id="all.23ekGP" title="原文 : asks the config source to load the data with no retry">再試行せずにデータをロードするように構成ソースに要求</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.45zW3q" title="原文 : &quot;repeat&quot;">"repeat"</span></td>
<td class=""><span class="merged" id="all.18g3Of" title="原文 : performs a settable number of time-based retries, reporting failure only after all available retries have failed">時間ベースの再試行を設定可能な回数実行し、使用可能なすべての再試行が失敗した後にのみ失敗をレポート</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.mrbl9" title="原文 : See the RetryPolicies JavaDoc for complete details on these built-in retry policies.">これらの組込みの再試行ポリシーの詳細は、<a href="/apidocs/io.helidon.config/io/helidon/config/RetryPolicies.html" target="_blank"><code>RetryPolicies</code></a> JavaDocを参照してください。</span></p>

<p><span class="merged" id="all.ppEme.spl1" title="原文 : You can devise your own policy.">独自のポリシーを考案できます。</span> <span class="merged" id="all.ppEme.spl2" title="原文 : Implement the RetryPolicy interface."><a href="/apidocs/io.helidon.config/io/helidon/config/spi/RetryPolicy.html" target="_blank"><code>RetryPolicy</code></a>インタフェースを実装します。</span> <span class="merged" id="all.ppEme.spl3" title="原文 : Then pass an instance of your policy implementation to the config source builder’s retryPolicy method.">次に、ポリシー実装のインスタンスを構成ソース・ビルダーの<code>retryPolicy</code>メソッドに渡します。</span> </p>

</div>


<h3 id="_change_support"><span class="merged" id="all.8hfF6" title="原文 : Change Support">サポートの変更</span></h3>
<div class="section">
<p><span class="merged" id="all.1aqL5Z" title="原文 : Each Config object which the config system returns to your application is immutable; even if the information in one of the underlying config sources changes, an in-memory data structure built from the earlier content remains unchanged.">構成システムがアプリケーションに返す各<code>Config</code>オブジェクトは不変です。基礎となる構成ソースのいずれかの情報が変更されても、以前のコンテンツから構築されたメモリー内データ構造は変更されません。</span></p>

<p><span class="merged" id="all.3vkD0i.spl1" title="原文 : Nevertheless, we know that configuration sometimes changes, and we may want to react to such changes.">ただし、構成が変更される可能性があり、その変更に対応する必要がある場合があります。</span> <span class="merged" id="all.3vkD0i.spl2" title="原文 : So the config system allows your application to learn when such underlying changes in the data occur and respond accordingly.">したがって、構成システムを使用すると、アプリケーションでデータ内のこのような基礎となる変更が発生したときに学習し、それに応じて応答できます。</span> </p>

<p><span class="merged" id="all.TfdC" title="原文 : In Config system, you can do this through change support provided by these components:"><code>Config</code>システムでは、次のコンポーネントによって提供される変更サポートを介してこれを実行できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1BLrkx" title="原文 : Config.onChange() API - you can use to add your listener, to be notified of configuration changes"><code>Config.onChange()</code> API - 使用してリスナーを追加し、構成の変更を通知できます</span>

</li>
<li>
<span class="merged" id="all.1IpCwS.spl1" title="原文 : PollingStrategy - a component providing regular events to check if a source has changed."><code>PollingStrategy</code> - ソースが変更されたかどうかをチェックする通常のイベントを提供するコンポーネント。</span> <span class="merged" id="all.1IpCwS.spl2" title="原文 : This requires support in config sources themselves (see PollableSource)">これには、構成ソース自体のサポートが必要です(<code>PollableSource</code>を参照)</span> 

</li>
<li>
<span class="merged" id="all.1BLYuk.spl1" title="原文 : ChangeWatcher - a component watching the underlying source for changes."><code>ChangeWatcher</code> - 基礎となるソースの変更を監視するコンポーネント。</span> <span class="merged" id="all.1BLYuk.spl2" title="原文 : This requires support in config sources themselves (see WatchableSource)">これには、構成ソース自体のサポートが必要です(<code>WatchableSource</code>を参照)</span> 

</li>
<li>
<span class="merged" id="all.2k2CfK" title="原文 : EventConfigSource - an event source that is capable of notifying about changes itself"><code>EventConfigSource</code> - 変更自体について通知できるイベント・ソース</span>

</li>
</ol>

<p><span class="merged" id="all.3z96eT" title="原文 : If you want to receive onChange events, you must configure your Config with at least one source that is capable of providing changes (having a PollingStrategy or ChangeWatcher configured, or implementing EventConfigSource)"><code>onChange</code>イベントを受信する場合は、変更を提供できるソース(<code>PollingStrategy</code>または<code>ChangeWatcher</code>が構成されているか、<code>EventConfigSource</code>が実装されている)を少なくとも1つ使用して構成を構成する必要があります</span></p>

<p><span class="merged" id="all.1vCG2r" title="原文 : The mutability documentation explains this in detail, and the PollingStrategies JavaDoc describes the built-in implementations."><router-link to="/se/config/mutability-support">「可変性」</router-link>ドキュメントではこの詳細について説明し、<a href="/apidocs/io.helidon.config/io/helidon/config/PollingStrategies.html" target="_blank"><code>PollingStrategies</code></a> JavaDocでは組込み実装について説明します。</span></p>

<p><span class="merged" id="all.3rBmFg.spl1" title="原文 : You can, of course, write your own by implementing the PollingStrategy interface.">もちろん、<a href="/apidocs/io.helidon.config/io/helidon/config/spi/PollingStrategy.html" target="_blank"><code>PollingStrategy</code></a>インタフェースを実装することで、独自に記述できます。</span> <span class="merged" id="all.3rBmFg.spl2" title="原文 : On a config source builder invoke pollingStrategy with an instance of your custom strategy and then invoke build to create the ConfigSource.">構成ソース・ビルダーで、カスタム戦略のインスタンスを使用して<code>pollingStrategy</code>を起動し、<code>build</code>を起動して<code>ConfigSource</code>を作成します。</span> </p>

</div>


<h3 id="built-in-formats"><span class="merged" id="all.5l3pu" title="原文 : Built-in Support for Config Formats">構成形式の組込みサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.1algop.spl1" title="原文 : If you add additional Helidon config maven artifacts to your dependencies, then the config system can read formats other than Java properties format and the default configuration will search for other application file types in the following order.">追加のHelidon構成mavenアーティファクトを依存関係に追加すると、構成システムはJavaプロパティ・フォーマット以外のフォーマットを読み取ることができ、デフォルト構成は次の順序で他の<code>application</code>ファイル・タイプを検索します。</span> <span class="merged" id="all.1algop.spl2" title="原文 : Note that the default configuration stops once it finds one of the files below; it does not merge all such files it can find.">デフォルトの構成は、以下のファイルのいずれかを見つけると<em>停止</em>することに注意してください。(見つけることができるすべてのファイルをマージ<em>しません</em>。)</span> </p>

<div class="block-title"><span class="merged" id="all.3rrqUs" title="原文 : Default Config Files (most to the least important)"><span>デフォルトの構成ファイル(ほとんど度が最小)</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1c5Nmn.2"  title="原文:: Source">ソース</span></th>
<th><span class="merged" id="all.3In5eB" title="原文 : Helidon maven artifact ID (group ID: io.helidon.config)">Helidon mavenアーティファクトID (グループID): <code>io.helidon.config</code> )</span></th>
<th><span class="merged" id="all.3Wy1iS.2"  title="原文:: Notes">ノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Fz2xo"  title="原文: application.yaml"><code>application.yaml</code></span></td>
<td class=""><span class="merged" id="all.1pWSoi"  title="原文: helidon-config-yaml"><code>helidon-config-yaml</code></span></td>
<td class=""><span class="merged" id="all.2UcMY" title="原文 : YAML format http://yaml.org">YAML形式の<a class="bare" href="http://yaml.org" target="_blank">http://yaml.org</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tvujl"  title="原文: application.conf"><code>application.conf</code></span></td>
<td class=""><span class="merged" id="all.R7mzW"  title="原文: helidon-config-hocon"><code>helidon-config-hocon</code></span></td>
<td class=""><span class="merged" id="all.N3WGQ" title="原文 : HOCON format https://github.com/lightbend/config#using-hocon-the-json-superset">HOCON形式<a class="bare" href="https://github.com/lightbend/config#using-hocon-the-json-superset" target="_blank">https://github.com/lightbend/config#using-hocon-the-json-superset</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2AaIK8"  title="原文: application.json"><code>application.json</code></span></td>
<td class=""><span class="merged" id="all.R7mzW.1"  title="原文: helidon-config-hocon"><code>helidon-config-hocon</code></span></td>
<td class=""><span class="merged" id="all.g9Ykx" title="原文 : JSON format https://json.org/">JSON形式の<a class="bare" href="https://json.org/" target="_blank">https://json.org/</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OdSRC"  title="原文: application.properties"><code>application.properties</code></span></td>
<td class=""><span class="merged" id="all.3wJks5"  title="原文: helidon-config"><code>helidon-config</code></span></td>
<td class=""><span class="merged" id="all.1STSzW" title="原文 : Java properties format">Javaプロパティの形式</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1x3rZx.spl1" title="原文 : You can also extend the config system to handle other types of sources by implementing the ConfigSource interface."><a href="/apidocs/io.helidon.config/io/helidon/config/spi/ConfigSource.html" target="_blank"><code>ConfigSource</code></a>インタフェースを実装することで、他のタイプのソースを処理するように構成システムを拡張することもできます。</span> <span class="merged" id="all.1x3rZx.spl2" title="原文 : See the extensions&apos; documentation for complete information.">詳細は、<router-link to="/se/config/extensions">extensions'</router-link>のドキュメントを参照してください。</span> </p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.20"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/se/guides/config"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">SE構成ガイド</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.32mmrM" title="原文 : Step-by-step guide about using Config in your Helidon SE application.">Helidon SEアプリケーションでConfigの使用に関するステップ・バイ・ステップ・ガイド。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.18"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.BlLPJ" title="原文 : The links in the following tables lead you to more information about various other config topics.">次の表のリンクをクリックすると、その他の様々な構成トピックの詳細が表示されます。</span></p>

<div class="block-title"><span class="merged" id="all.3RJ9ba" title="原文 : Controlling How Config is Loaded"><span>構成のロード方法の制御</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1h27EV"  title="原文:: Topic">トピック</span></th>
<th><span class="merged" id="all.3WlCMY"  title="原文:: Documentation">ドキュメント</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Y9P6z" title="原文 : Where config comes from">configの取得元</span></td>
<td class=""><span class="merged" id="all.3ZeKLZ" title="原文 : Config sources,Config Profiles"><router-link @click.native="this.scrollFix('#config_sources')" to="#config_sources">「構成ソース」</router-link>, <router-link to="/se/config/config-profiles">「構成プロファイル」</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.b4eLP" title="原文 : What format config data is expressed in">構成データの表現形式</span></td>
<td class=""><span class="merged" id="all.1DcFBu" title="原文 : Config parsers, supported formats"><router-link @click.native="this.scrollFix('#parsers')" to="#parsers">「構成パーサー」</router-link>, <router-link to="/se/config/supported-formats">「サポートされる形式」</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PDack" title="原文 : How to filter, override, and dereference values">値をフィルタ、オーバーライドおよび参照解除する方法</span></td>
<td class=""><span class="merged" id="all.1Akl7u" title="原文 : Filters and overrides"><router-link :to="{path: '/se/config/advanced-configuration', hash: '#filters-and-overrides'}">フィルタおよびオーバーライド</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WHjPi" title="原文 : What happens when config data changes">構成データが変更された場合の処理</span></td>
<td class=""><span class="merged" id="all.1ZkP2D" title="原文 : Mutability Support"><router-link to="/se/config/mutability-support">可変性のサポート</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4AVYfJ" title="原文 : How to deal with loading errors">ロード・エラーの処理方法</span></td>
<td class=""><span class="merged" id="all.3gurma" title="原文 : Config retry policies"><router-link @click.native="this.scrollFix('#retry')" to="#retry">再試行ポリシーの構成</router-link></span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.3R4JtP" title="原文 : Accessing Configuration Data"><span>構成データへのアクセス</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1h27EV.1"  title="原文:: Topic">トピック</span></th>
<th><span class="merged" id="all.3WlCMY.1"  title="原文:: Documentation">ドキュメント</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2Qz2sI" title="原文 : How config data is translated into Java types">構成データをJavaタイプに変換する方法</span></td>
<td class=""><span class="merged" id="all.1NfCxd" title="原文 : Config mappers"><router-link to="/se/config/property-mapping">構成マッパー</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DFNVK" title="原文 : How to navigate config trees">構成ツリーのナビゲート方法</span></td>
<td class=""><span class="merged" id="all.uD2cL" title="原文 : Navigation"><router-link to="/se/config/hierarchical-features">ナビゲーション</router-link></span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.1ajcab" title="原文 : Extending and Fine-tuning the Config System"><span>構成システムの拡張および微調整</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1h27EV.2"  title="原文:: Topic">トピック</span></th>
<th><span class="merged" id="all.3WlCMY.2"  title="原文:: Documentation">ドキュメント</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4OlMq3" title="原文 : Writing extensions">拡張機能の書込み</span></td>
<td class=""><span class="merged" id="all.4S9dlh" title="原文 : Extensions"><router-link to="/se/config/extensions">Extensions</router-link></span></td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
